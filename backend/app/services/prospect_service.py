from __future__ import annotations

from app.core import data_loader
from app.schemas.models import Prospect, WorkQueueItem

_COMMERCIAL_QUEUE = {
    "review_scope": (
        "Scope ready",
        "Waiting for scope review",
        "Review Scope",
        "scope",
    ),
    "review_pricing": (
        "Pricing ready",
        "Waiting for pricing review",
        "Review Pricing",
        "pricing",
    ),
    "review_proposal": (
        "Proposal ready",
        "Waiting for proposal review",
        "Review Proposal",
        "proposal",
    ),
}


def _base_prospects() -> list[dict]:
    by_id: dict[str, dict] = {p["id"]: dict(p) for p in data_loader.prospects()}
    for pid, raw in data_loader.runtime().get("custom_prospects", {}).items():
        by_id[pid] = dict(raw)
    # newest custom first after seeds: keep seed order, append customs
    seed_ids = [p["id"] for p in data_loader.prospects()]
    customs = [
        by_id[pid]
        for pid in by_id
        if pid not in seed_ids
    ]
    return [by_id[pid] for pid in seed_ids if pid in by_id] + list(reversed(customs))


def list_prospects() -> list[Prospect]:
    runtime = data_loader.runtime()
    items = []
    for raw in _base_prospects():
        p = dict(raw)
        if p["id"] in runtime["analysis_complete"]:
            p["ai_analysis"] = "complete"
            p["status"] = "analysis_complete"
            p["review_status"] = "needs_review"
            if p.get("next_action") == "analyze":
                p["next_action"] = "review_assessment"
            p["stage"] = p.get("stage") if p.get("stage") not in ("Strategy Call", "Discovery") else "Assessment"
        override = runtime["next_action_override"].get(p["id"])
        if override:
            p["next_action"] = override
            if override == "review_scope":
                p["stage"] = "Scope"
            elif override == "review_pricing":
                p["stage"] = "Pricing"
            elif override == "review_proposal":
                p["stage"] = "Proposal"
            elif override == "proposal_approved":
                p["stage"] = "Proposal Approved"
                p["status"] = "proposal_approved"
                p["review_status"] = "approved"
        items.append(Prospect(**p))
    return items


def get_prospect(prospect_id: str) -> Prospect | None:
    return next((p for p in list_prospects() if p.id == prospect_id), None)


def work_queue() -> list[WorkQueueItem]:
    items: list[WorkQueueItem] = []
    for p in list_prospects():
        if p.next_action == "analyze":
            items.append(
                WorkQueueItem(
                    prospect_id=p.id,
                    company_name=p.company_name,
                    headline="Strategy call completed",
                    detail="Ready for analysis",
                    action_label="Analyze Prospect",
                    action="analyze",
                    href=f"/prospects/{p.id}",
                )
            )
        elif p.next_action == "review_assessment":
            items.append(
                WorkQueueItem(
                    prospect_id=p.id,
                    company_name=p.company_name,
                    headline="Analysis complete",
                    detail="Waiting for review",
                    action_label="Review Assessment",
                    action="review_assessment",
                    href=f"/prospects/{p.id}/assessment",
                )
            )
        elif p.next_action == "review_questionnaire":
            items.append(
                WorkQueueItem(
                    prospect_id=p.id,
                    company_name=p.company_name,
                    headline="Questionnaire ready",
                    detail="AI draft waiting for review",
                    action_label="Review Questionnaire",
                    action="review_questionnaire",
                    href=f"/prospects/{p.id}/questionnaire",
                )
            )
        elif p.next_action in _COMMERCIAL_QUEUE:
            headline, detail, label, path = _COMMERCIAL_QUEUE[p.next_action]
            items.append(
                WorkQueueItem(
                    prospect_id=p.id,
                    company_name=p.company_name,
                    headline=headline,
                    detail=detail,
                    action_label=label,
                    action=p.next_action,
                    href=f"/prospects/{p.id}/{path}",
                )
            )
    return items
