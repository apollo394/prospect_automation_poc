from __future__ import annotations

from app.core import data_loader
from app.schemas.models import Assessment, AssessmentAction
from app.services.ai.factory import get_ai_provider
from app.services import commercial_service


def get_or_create_assessment(prospect_id: str) -> Assessment:
    runtime = data_loader.runtime()
    if prospect_id in runtime["assessments"]:
        return Assessment(**runtime["assessments"][prospect_id])
    payload = get_ai_provider().generate_assessment(prospect_id)
    runtime["assessments"][prospect_id] = payload
    return Assessment(**payload)


def create_assessment(prospect_id: str) -> Assessment:
    payload = get_ai_provider().generate_assessment(prospect_id)
    data_loader.runtime()["assessments"][prospect_id] = payload
    return Assessment(**payload)


def apply_assessment_action(prospect_id: str, body: AssessmentAction) -> Assessment:
    assessment = get_or_create_assessment(prospect_id)
    data = assessment.model_dump()
    if body.action == "approve":
        data["review_state"] = "approved"
        data["status"] = "approved"
        data["approved_by"] = body.approved_by or "Lei Lani Fera"
        commercial_service.mark_assessment_approved(prospect_id)
    elif body.action == "regenerate":
        data = get_ai_provider().generate_assessment(prospect_id)
    elif body.action == "edit" and body.edits:
        for key, value in body.edits.items():
            if key in data:
                data[key] = value
        data["review_state"] = "needs_human_review"
        data["status"] = "needs_human_review"
        data["approved_by"] = None
    data_loader.runtime()["assessments"][prospect_id] = data
    return Assessment(**data)
