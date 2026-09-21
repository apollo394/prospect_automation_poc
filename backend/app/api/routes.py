from __future__ import annotations

from typing import Optional

from fastapi import APIRouter, Body, Depends, HTTPException

from app.dependencies.auth import AuthUser, require_user
from app.schemas.models import (
    AnalyzeCallRequest,
    AssessmentAction,
    CommercialAction,
    QuestionAction,
    JourneyAction,
)
from app.services import (
    analysis_service,
    assessment_service,
    commercial_service,
    intake_service,
    prospect_service,
    questionnaire_service,
)
from app.services.ai.factory import provider_info
from app.services.recommendation_service import list_frameworks, list_services
from app.services import journey_service

router = APIRouter(prefix="/api")
protected = APIRouter(prefix="/api", dependencies=[Depends(require_user)])


@protected.get("/journeys")
def get_journeys():
    return journey_service.list_journeys()


@protected.get("/journeys/{journey_id}")
def get_journey(journey_id: str):
    result = journey_service.get_journey(journey_id)
    if result is None:
        raise HTTPException(status_code=404, detail="Journey not found")
    return result


@protected.post("/journeys/{journey_id}/actions")
def journey_action(journey_id: str, body: JourneyAction, user: AuthUser = Depends(require_user)):
    actor = body.actor or user.email
    try:
        return journey_service.apply_action(journey_id, body.action, body.role, actor, body.reason, body.edits)
    except KeyError as exc:
        raise HTTPException(status_code=404, detail="Journey not found") from exc
    except RuntimeError as exc:
        raise HTTPException(status_code=409, detail=str(exc)) from exc
    except ValueError as exc:
        raise HTTPException(status_code=422, detail=str(exc)) from exc


@router.get("/health")
def health():
    return {"status": "ok", "product": "Prospect Intelligence", **provider_info()}


@protected.post("/analyze-call")
def analyze_call(body: AnalyzeCallRequest):
    try:
        result = intake_service.create_from_call(
            website=body.website,
            transcript_text=body.transcript_text,
            company_name=body.company_name,
        )
    except ValueError as exc:
        raise HTTPException(status_code=400, detail=str(exc)) from exc
    return result


@protected.get("/prospects")
def get_prospects():
    return prospect_service.list_prospects()


@protected.get("/prospects/{prospect_id}")
def get_prospect(prospect_id: str):
    prospect = prospect_service.get_prospect(prospect_id)
    if not prospect:
        raise HTTPException(status_code=404, detail="Prospect not found")
    transcript = analysis_service.get_transcript(prospect_id)
    return {"prospect": prospect, "transcript": transcript}


@protected.post("/prospects/{prospect_id}/analyze")
def analyze(prospect_id: str):
    if not prospect_service.get_prospect(prospect_id):
        raise HTTPException(status_code=404, detail="Prospect not found")
    return analysis_service.analyze_prospect(prospect_id)


@protected.get("/prospects/{prospect_id}/intelligence")
def intelligence(prospect_id: str):
    if not prospect_service.get_prospect(prospect_id):
        raise HTTPException(status_code=404, detail="Prospect not found")
    return analysis_service.get_intelligence(prospect_id)


@protected.get("/prospects/{prospect_id}/questionnaire")
def get_questionnaire(prospect_id: str):
    if not prospect_service.get_prospect(prospect_id):
        raise HTTPException(status_code=404, detail="Prospect not found")
    return questionnaire_service.get_or_create_questionnaire(prospect_id)


@protected.post("/prospects/{prospect_id}/questionnaire")
def post_questionnaire(
    prospect_id: str,
    body: Optional[QuestionAction] = Body(default=None),
):
    if not prospect_service.get_prospect(prospect_id):
        raise HTTPException(status_code=404, detail="Prospect not found")
    if body is None:
        return questionnaire_service.create_questionnaire(prospect_id)
    return questionnaire_service.apply_question_action(prospect_id, body)


@protected.get("/prospects/{prospect_id}/assessment")
def get_assessment(prospect_id: str):
    if not prospect_service.get_prospect(prospect_id):
        raise HTTPException(status_code=404, detail="Prospect not found")
    return assessment_service.get_or_create_assessment(prospect_id)


@protected.post("/prospects/{prospect_id}/assessment")
def post_assessment(
    prospect_id: str,
    body: Optional[AssessmentAction] = Body(default=None),
):
    if not prospect_service.get_prospect(prospect_id):
        raise HTTPException(status_code=404, detail="Prospect not found")
    if body is None:
        return assessment_service.create_assessment(prospect_id)
    return assessment_service.apply_assessment_action(prospect_id, body)


@protected.get("/prospects/{prospect_id}/scope")
def get_scope(prospect_id: str):
    if not prospect_service.get_prospect(prospect_id):
        raise HTTPException(status_code=404, detail="Prospect not found")
    return commercial_service.get_or_create_scope(prospect_id)


@protected.post("/prospects/{prospect_id}/scope")
def post_scope(
    prospect_id: str,
    body: Optional[CommercialAction] = Body(default=None),
):
    if not prospect_service.get_prospect(prospect_id):
        raise HTTPException(status_code=404, detail="Prospect not found")
    if body is None:
        return commercial_service.create_scope(prospect_id)
    return commercial_service.apply_scope_action(prospect_id, body)


@protected.get("/prospects/{prospect_id}/pricing")
def get_pricing(prospect_id: str):
    if not prospect_service.get_prospect(prospect_id):
        raise HTTPException(status_code=404, detail="Prospect not found")
    return commercial_service.get_or_create_pricing(prospect_id)


@protected.post("/prospects/{prospect_id}/pricing")
def post_pricing(
    prospect_id: str,
    body: Optional[CommercialAction] = Body(default=None),
):
    if not prospect_service.get_prospect(prospect_id):
        raise HTTPException(status_code=404, detail="Prospect not found")
    if body is None:
        return commercial_service.create_pricing(prospect_id)
    return commercial_service.apply_pricing_action(prospect_id, body)


@protected.get("/prospects/{prospect_id}/proposal")
def get_proposal(prospect_id: str):
    if not prospect_service.get_prospect(prospect_id):
        raise HTTPException(status_code=404, detail="Prospect not found")
    return commercial_service.get_or_create_proposal(prospect_id)


@protected.post("/prospects/{prospect_id}/proposal")
def post_proposal(
    prospect_id: str,
    body: Optional[CommercialAction] = Body(default=None),
):
    if not prospect_service.get_prospect(prospect_id):
        raise HTTPException(status_code=404, detail="Prospect not found")
    if body is None:
        return commercial_service.create_proposal(prospect_id)
    return commercial_service.apply_proposal_action(prospect_id, body)


@protected.get("/work-queue")
def work_queue():
    return prospect_service.work_queue()


@protected.get("/frameworks")
def frameworks():
    return list_frameworks()


@protected.get("/knowledge/sources")
def knowledge_sources():
    from app.core import data_loader, store

    if store.use_supabase():
        return store.list_catalog("knowledge_sources")
    return data_loader.knowledge_sources()


@protected.get("/services")
def services():
    return list_services()
