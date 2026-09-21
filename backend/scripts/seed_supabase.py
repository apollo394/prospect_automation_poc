#!/usr/bin/env python3
"""Seed Supabase tables from backend/app/data/*.json (service role)."""
from __future__ import annotations

import json
import logging
import os
import sys
from pathlib import Path

from dotenv import load_dotenv

ROOT = Path(__file__).resolve().parents[1]
load_dotenv(ROOT / ".env")
sys.path.insert(0, str(ROOT))

logging.basicConfig(level=logging.INFO, format="%(levelname)s %(message)s")
logger = logging.getLogger("seed")
DATA = ROOT / "app" / "data"


def _load(name: str):
    with (DATA / name).open(encoding="utf-8") as f:
        return json.load(f)


def _upsert_payload_map(client, table: str, data: dict) -> None:
    items = []
    for key, payload in data.items():
        row = dict(payload)
        pid = row.get("prospect_id") or key
        rid = row.get("id") or f"{table}-{pid}"
        items.append({"id": rid, "prospect_id": pid, "payload": row})
    if items:
        client.table(table).upsert(items).execute()
        logger.info("seeded %s count=%s", table, len(items))


def main() -> int:
    url = os.getenv("SUPABASE_URL", "").strip()
    key = os.getenv("SUPABASE_SERVICE_ROLE_KEY", "").strip()
    if not url or not key:
        logger.error("Set SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY")
        return 1

    from supabase import create_client

    client = create_client(url, key)

    prospects = _load("prospects.json")
    client.table("prospects").upsert(prospects).execute()
    logger.info("seeded prospects count=%s", len(prospects))

    client.table("evidence").upsert(_load("evidence.json")).execute()
    logger.info("seeded evidence")

    insights = [
        {
            "id": row["id"],
            "prospect_id": row["prospect_id"],
            "category": row.get("category", ""),
            "title": row.get("title", ""),
            "description": row.get("description", ""),
            "confidence": row.get("confidence", "medium"),
            "evidence_ids": row.get("evidence_ids", []),
        }
        for row in _load("insights.json")
    ]
    client.table("insights").upsert(insights).execute()
    logger.info("seeded insights count=%s", len(insights))

    transcripts = [
        {
            "id": row.get("id") or f"transcript-{row['prospect_id']}",
            "prospect_id": row["prospect_id"],
            "payload": row,
        }
        for row in _load("transcripts.json")
    ]
    client.table("transcripts").upsert(transcripts).execute()
    logger.info("seeded transcripts count=%s", len(transcripts))

    for name, table in [
        ("questionnaires.json", "questionnaires"),
        ("assessments.json", "assessments"),
        ("scopes.json", "scopes"),
        ("pricings.json", "pricings"),
        ("proposals.json", "proposals"),
    ]:
        _upsert_payload_map(client, table, _load(name))

    journeys = [{"id": row["id"], "payload": row} for row in _load("governed_journeys.json")]
    client.table("journeys").upsert(journeys).execute()
    logger.info("seeded journeys count=%s", len(journeys))

    for name, table in [
        ("services.json", "services"),
        ("frameworks.json", "frameworks"),
        ("knowledge_sources.json", "knowledge_sources"),
    ]:
        rows = [{"id": r["id"], "payload": r} for r in _load(name)]
        client.table(table).upsert(rows).execute()
        logger.info("seeded %s count=%s", table, len(rows))

    logger.info("seed_complete")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
