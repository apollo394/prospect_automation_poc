from __future__ import annotations

from copy import deepcopy

from app.core import data_loader
from app.schemas.models import Evidence, QuestionAction, Questionnaire
from app.services.ai.factory import get_ai_provider


def _evidence_map(prospect_id: str) -> dict[str, Evidence]:
    return {
        e["id"]: Evidence(**e)
        for e in data_loader.evidence()
        if e["prospect_id"] == prospect_id
    }


def _enrich(payload: dict) -> Questionnaire:
    prospect_id = payload["prospect_id"]
    evidence = _evidence_map(prospect_id)
    data = deepcopy(payload)
    for question in data.get("questions", []):
        ids = question.get("evidence_ids") or []
        question["evidence"] = [evidence[eid] for eid in ids if eid in evidence]
    return Questionnaire(**data)


def get_or_create_questionnaire(prospect_id: str) -> Questionnaire:
    runtime = data_loader.runtime()
    if prospect_id in runtime["questionnaires"]:
        return _enrich(runtime["questionnaires"][prospect_id])
    payload = get_ai_provider().generate_questionnaire(prospect_id)
    runtime["questionnaires"][prospect_id] = payload
    return _enrich(payload)


def create_questionnaire(prospect_id: str) -> Questionnaire:
    payload = get_ai_provider().generate_questionnaire(prospect_id)
    data_loader.runtime()["questionnaires"][prospect_id] = payload
    return _enrich(payload)


def apply_question_action(prospect_id: str, body: QuestionAction) -> Questionnaire:
    q = get_or_create_questionnaire(prospect_id)
    data = q.model_dump()
    reviewed = 0
    for question in data["questions"]:
        if question["id"] == body.question_id:
            if body.action == "accept":
                question["status"] = "accepted"
            elif body.action == "reject":
                question["status"] = "rejected"
            elif body.action == "edit":
                question["status"] = "edited"
                question["edited_answer"] = body.edited_answer or question["ai_suggested_answer"]
        if question["status"] in ("accepted", "edited", "rejected"):
            reviewed += 1

    if reviewed == len(data["questions"]) and data["questions"]:
        data["status"] = "ready_for_assessment"
    elif reviewed > 0:
        data["status"] = "in_review"
    else:
        data["status"] = "ai_generated"

    # Persist without nested evidence objects (re-enriched on read)
    for question in data["questions"]:
        question.pop("evidence", None)

    data_loader.runtime()["questionnaires"][prospect_id] = data
    return _enrich(data)
