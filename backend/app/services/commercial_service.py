from __future__ import annotations

from typing import Any

from app.core import data_loader
from app.schemas.models import CommercialAction, Pricing, Proposal, Scope
from app.services.ai.factory import get_ai_provider

_KIND = {
    "scope": (Scope, "scopes", "generate_scope"),
    "pricing": (Pricing, "pricings", "generate_pricing"),
    "proposal": (Proposal, "proposals", "generate_proposal"),
}

_NEXT_AFTER_APPROVE = {
    "scope": "review_pricing",
    "pricing": "review_proposal",
    "proposal": "proposal_approved",
}


def _set_next_action(prospect_id: str, action: str) -> None:
    data_loader.runtime()["next_action_override"][prospect_id] = action


def _get_or_create(kind: str, prospect_id: str) -> Any:
    model, runtime_key, gen_name = _KIND[kind]
    runtime = data_loader.runtime()
    store: dict = runtime[runtime_key]
    if prospect_id in store:
        return model(**store[prospect_id])
    payload = getattr(get_ai_provider(), gen_name)(prospect_id)
    store[prospect_id] = payload
    return model(**payload)


def _create(kind: str, prospect_id: str) -> Any:
    model, runtime_key, gen_name = _KIND[kind]
    payload = getattr(get_ai_provider(), gen_name)(prospect_id)
    data_loader.runtime()[runtime_key][prospect_id] = payload
    return model(**payload)


def _apply(kind: str, prospect_id: str, body: CommercialAction) -> Any:
    model, runtime_key, gen_name = _KIND[kind]
    current = _get_or_create(kind, prospect_id)
    data = current.model_dump()
    if body.action == "approve":
        data["review_state"] = "approved"
        data["status"] = "approved"
        data["approved_by"] = body.approved_by or "Lei Lani Fera"
        _set_next_action(prospect_id, _NEXT_AFTER_APPROVE[kind])
    elif body.action == "regenerate":
        data = getattr(get_ai_provider(), gen_name)(prospect_id)
    elif body.action == "edit" and body.edits:
        for key, value in body.edits.items():
            if key in data:
                data[key] = value
        data["review_state"] = "needs_human_review"
        data["status"] = "needs_human_review"
        data["approved_by"] = None
    data_loader.runtime()[runtime_key][prospect_id] = data
    return model(**data)


def get_or_create_scope(prospect_id: str) -> Scope:
    return _get_or_create("scope", prospect_id)


def create_scope(prospect_id: str) -> Scope:
    return _create("scope", prospect_id)


def apply_scope_action(prospect_id: str, body: CommercialAction) -> Scope:
    return _apply("scope", prospect_id, body)


def get_or_create_pricing(prospect_id: str) -> Pricing:
    return _get_or_create("pricing", prospect_id)


def create_pricing(prospect_id: str) -> Pricing:
    return _create("pricing", prospect_id)


def apply_pricing_action(prospect_id: str, body: CommercialAction) -> Pricing:
    return _apply("pricing", prospect_id, body)


def get_or_create_proposal(prospect_id: str) -> Proposal:
    return _get_or_create("proposal", prospect_id)


def create_proposal(prospect_id: str) -> Proposal:
    return _create("proposal", prospect_id)


def apply_proposal_action(prospect_id: str, body: CommercialAction) -> Proposal:
    return _apply("proposal", prospect_id, body)


def mark_assessment_approved(prospect_id: str) -> None:
    """Advance commercial pipeline after assessment approval."""
    override = data_loader.runtime()["next_action_override"]
    # Don't rewind if already further along
    current = override.get(prospect_id)
    if current in ("review_pricing", "review_proposal", "proposal_approved"):
        return
    override[prospect_id] = "review_scope"
