from __future__ import annotations

import re
from datetime import datetime, timezone
from urllib.parse import urlparse

from app.core import data_loader


def _now() -> str:
    return datetime.now(timezone.utc).strftime("%Y-%m-%dT%H:%M:%SZ")


def _normalize_website(website: str) -> str:
    raw = website.strip()
    if not raw:
        return raw
    if not re.match(r"^https?://", raw, re.I):
        raw = f"https://{raw}"
    return raw.rstrip("/")


def _hostname(website: str) -> str:
    parsed = urlparse(_normalize_website(website))
    host = (parsed.hostname or "").lower()
    if host.startswith("www."):
        host = host[4:]
    return host


def _company_from_host(host: str) -> str:
    base = host.split(".")[0] if host else "prospect"
    return re.sub(r"[-_]+", " ", base).strip().title() or "New Prospect"


def _slug(company_name: str, host: str) -> str:
    base = company_name or host or "prospect"
    slug = re.sub(r"[^a-z0-9]+", "-", base.lower()).strip("-")
    return slug or "prospect"


def _is_apex(website: str, company_name: str) -> bool:
    host = _hostname(website)
    name = (company_name or "").lower()
    return "apex" in host or "apex metrics" in name or host == "apexmetrics.example"


def parse_transcript_text(text: str) -> list[dict]:
    """Turn pasted Fathom-ish text into timestamped segments (best-effort)."""
    segments: list[dict] = []
    # Speaker: line  OR  12:34 Speaker: line
    line_re = re.compile(
        r"^(?:(\d{1,2}:\d{2})\s+)?([^:\n]{2,40}):\s+(.+)$",
        re.MULTILINE,
    )
    matches = list(line_re.finditer(text.strip()))
    if matches:
        for i, m in enumerate(matches):
            segments.append(
                {
                    "timestamp": m.group(1) or f"{i * 3:02d}:00",
                    "speaker": m.group(2).strip(),
                    "text": m.group(3).strip(),
                }
            )
        return segments

    chunks = [c.strip() for c in re.split(r"\n\s*\n", text.strip()) if c.strip()]
    if not chunks:
        chunks = [text.strip()] if text.strip() else []
    for i, chunk in enumerate(chunks[:24]):
        segments.append(
            {
                "timestamp": f"{i * 2:02d}:00",
                "speaker": "Participant",
                "text": chunk[:600],
            }
        )
    return segments


def create_from_call(
    *,
    website: str,
    transcript_text: str,
    company_name: str | None = None,
) -> dict:
    if not website.strip():
        raise ValueError("website is required")
    if not transcript_text.strip():
        raise ValueError("transcript_text is required")

    website_n = _normalize_website(website)
    host = _hostname(website_n)
    name = (company_name or "").strip() or _company_from_host(host)

    # Reuse Apex seed so demo intelligence/evidence stay rich
    if _is_apex(website_n, name):
        return {"prospect_id": "apex-metrics", "reused": True}

    runtime = data_loader.runtime()
    runtime.setdefault("custom_prospects", {})
    runtime.setdefault("transcripts", {})

    slug = _slug(name, host)
    # Avoid colliding with seed ids
    seed_ids = {p["id"] for p in data_loader.prospects()}
    prospect_id = slug
    n = 2
    while prospect_id in seed_ids or prospect_id in runtime["custom_prospects"]:
        prospect_id = f"{slug}-{n}"
        n += 1

    now = _now()
    segments = parse_transcript_text(transcript_text)
    speakers = sorted({s["speaker"] for s in segments}) or ["Participant"]
    duration = max(12, min(90, len(segments) * 2))

    prospect = {
        "id": prospect_id,
        "company_name": name,
        "website": website_n,
        "lead_source": "Fathom transcript paste",
        "stage": "Strategy Call",
        "status": "ready_for_analysis",
        "assigned_to": "Lei Lani Fera",
        "last_activity": now,
        "last_activity_label": "Just now",
        "ai_analysis": "ready",
        "review_status": "needs_review",
        "next_action": "analyze",
        "summary": (
            f"{name} was submitted from a pasted strategy-call transcript for Prospect Intelligence analysis."
        ),
        "created_at": now,
        "updated_at": now,
    }
    transcript = {
        "id": f"tx-{prospect_id}",
        "prospect_id": prospect_id,
        "title": f"Strategy Call — {name}",
        "source": "Fathom",
        "recorded_at": now,
        "duration_minutes": duration,
        "participants": ["Lei Lani Fera", *speakers[:4]],
        "segments": segments,
    }

    runtime["custom_prospects"][prospect_id] = prospect
    runtime["transcripts"][prospect_id] = transcript
    # Fresh analysis state
    runtime["analysis_complete"].discard(prospect_id)
    runtime.get("ai_insights", {}).pop(prospect_id, None)
    runtime.get("ai_summaries", {}).pop(prospect_id, None)

    return {"prospect_id": prospect_id, "reused": False}


def get_raw_prospect(prospect_id: str) -> dict | None:
    custom = data_loader.runtime().get("custom_prospects", {}).get(prospect_id)
    if custom:
        return custom
    return next((p for p in data_loader.prospects() if p["id"] == prospect_id), None)
