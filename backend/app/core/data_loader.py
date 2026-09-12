from __future__ import annotations

import json
from copy import deepcopy
from functools import lru_cache
from pathlib import Path
from typing import Any

DATA_DIR = Path(__file__).resolve().parents[1] / "data"


def load_json(name: str) -> Any:
    path = DATA_DIR / name
    with path.open(encoding="utf-8") as f:
        return json.load(f)


@lru_cache(maxsize=1)
def prospects() -> list[dict]:
    return load_json("prospects.json")


@lru_cache(maxsize=1)
def transcripts() -> list[dict]:
    return load_json("transcripts.json")


@lru_cache
def demo_transcripts() -> list[dict]:
    return load_json("demo_transcripts.json")


@lru_cache(maxsize=1)
def evidence() -> list[dict]:
    return load_json("evidence.json")


@lru_cache(maxsize=1)
def insights() -> list[dict]:
    return load_json("insights.json")


@lru_cache(maxsize=1)
def services() -> list[dict]:
    return load_json("services.json")


@lru_cache(maxsize=1)
def frameworks() -> list[dict]:
    return load_json("frameworks.json")


@lru_cache(maxsize=1)
def knowledge_sources() -> list[dict]:
    return load_json("knowledge_sources.json")


def questionnaires() -> dict:
    return load_json("questionnaires.json")


def assessments() -> dict:
    return load_json("assessments.json")


def scopes() -> dict:
    return load_json("scopes.json")


def pricings() -> dict:
    return load_json("pricings.json")


def proposals() -> dict:
    return load_json("proposals.json")


@lru_cache(maxsize=1)
def governed_journeys() -> list[dict]:
    return deepcopy(load_json("governed_journeys.json"))


# Mutable runtime state for demo approve/edit flows
_runtime: dict[str, Any] = {
    "analysis_complete": set(),
    "questionnaires": {},
    "assessments": {},
    "scopes": {},
    "pricings": {},
    "proposals": {},
    # prospect_id -> next commercial action override
    "next_action_override": {},
    "custom_prospects": {},
    "transcripts": {},
    "ai_insights": {},
    "ai_summaries": {},
}


def runtime() -> dict[str, Any]:
    return _runtime


def clear_data_cache() -> None:
    prospects.cache_clear()
    transcripts.cache_clear()
    demo_transcripts.cache_clear()
    evidence.cache_clear()
    insights.cache_clear()
    services.cache_clear()
    frameworks.cache_clear()
    knowledge_sources.cache_clear()
    governed_journeys.cache_clear()


def reset_governed_runtime() -> None:
    """Clear cached governed fixtures and runtime journey state."""
    governed_journeys.cache_clear()
    from app.services import journey_service
    journey_service.reset_runtime()
