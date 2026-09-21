from __future__ import annotations

import logging
from copy import deepcopy
from typing import Any

from app.core.config import get_settings
from app.core import data_loader

logger = logging.getLogger(__name__)


def use_supabase() -> bool:
    return get_settings().use_supabase_store


def list_prospects() -> list[dict]:
    if not use_supabase():
        return data_loader.prospects()
    from app.core.supabase_client import get_supabase

    rows = get_supabase().table("prospects").select("*").execute().data or []
    return rows


def get_prospect(prospect_id: str) -> dict | None:
    if not use_supabase():
        return next((p for p in data_loader.prospects() if p["id"] == prospect_id), None)
    from app.core.supabase_client import get_supabase

    rows = get_supabase().table("prospects").select("*").eq("id", prospect_id).limit(1).execute().data or []
    return rows[0] if rows else None


def upsert_prospect(prospect: dict) -> None:
    if not use_supabase():
        data_loader.runtime()["custom_prospects"][prospect["id"]] = prospect
        return
    from app.core.supabase_client import get_supabase

    get_supabase().table("prospects").upsert(prospect).execute()
    logger.info("prospect_upserted id=%s", prospect.get("id"))


def list_journeys_payloads() -> list[dict]:
    if not use_supabase():
        return deepcopy(data_loader.governed_journeys())
    from app.core.supabase_client import get_supabase

    rows = get_supabase().table("journeys").select("id,payload").execute().data or []
    return [row["payload"] for row in rows]


def get_journey_payload(journey_id: str) -> dict | None:
    if not use_supabase():
        return next((j for j in data_loader.governed_journeys() if j["id"] == journey_id), None)
    from app.core.supabase_client import get_supabase

    rows = (
        get_supabase().table("journeys").select("payload").eq("id", journey_id).limit(1).execute().data
        or []
    )
    return rows[0]["payload"] if rows else None


def save_journey_payload(journey_id: str, payload: dict) -> None:
    if not use_supabase():
        return
    from app.core.supabase_client import get_supabase

    get_supabase().table("journeys").upsert({"id": journey_id, "payload": payload}).execute()
    logger.info("journey_saved id=%s", journey_id)


def list_evidence(prospect_id: str | None = None) -> list[dict]:
    if not use_supabase():
        rows = data_loader.evidence()
        return [e for e in rows if prospect_id is None or e["prospect_id"] == prospect_id]
    from app.core.supabase_client import get_supabase

    q = get_supabase().table("evidence").select("*")
    if prospect_id:
        q = q.eq("prospect_id", prospect_id)
    return q.execute().data or []


def list_catalog(table: str) -> list[dict]:
    if not use_supabase():
        return getattr(data_loader, table)()
    from app.core.supabase_client import get_supabase

    rows = get_supabase().table(table).select("payload").execute().data or []
    return [row["payload"] for row in rows]
