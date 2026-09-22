"""Post-sale SimpliBlueprint delivery (BLUE-002 surface) — fixture-driven POC."""
from __future__ import annotations

import logging
from copy import deepcopy
from datetime import datetime, timezone

from app.core import store
from app.core.data_loader import blueprint_engagements
from app.services import journey_service

logger = logging.getLogger(__name__)

STAGES = [
    "activate_blueprint",
    "generate_blueprint_questionnaire",
    "validate_questionnaire",
    "complete_research",
    "approve_intelligence",
    "approve_draft_report",
    "approve_strategy_deck",
    "complete_strategy_session",
    "approve_final_blueprint",
    "approve_handoff",
]

APPROVALS = {
    "validate_questionnaire": "questionnaire",
    "approve_intelligence": "intelligence",
    "approve_draft_report": "draft_report",
    "approve_strategy_deck": "strategy_deck",
    "approve_final_blueprint": "final_blueprint",
    "approve_handoff": "handoff",
}

_state: dict[str, dict] = {}


def reset_runtime() -> None:
    _state.clear()


def _fixture_rows() -> list[dict]:
    if store.use_supabase():
        # ponytail: JSON fixtures until blueprint table exists; upgrade to store.list_blueprints()
        return blueprint_engagements()
    return blueprint_engagements()


def _gov(doc_id: str, title: str) -> dict:
    return {
        "evidence_status": "synthetic",
        "ai_confidence": "high",
        "citations": [{"document_id": doc_id, "version": "v1.0", "title": title}],
        "open_questions": [],
        "conflicts": [],
    }


def _ev(eid: str, quote: str, source_type: str = "gold_standard_fixture") -> dict:
    return {
        "id": eid,
        "source_type": source_type,
        "quote": quote,
        "evidence_status": "synthetic",
        "synthetic_label": "FICTIONAL — NOT A REAL CLIENT",
    }


def _content_for(engagement: dict) -> dict:
    company = engagement["company_name"]
    is_nuvue = engagement["id"] == "nuvue-blueprint"
    primary_buyer = "VP Sales / enterprise sales leaders" if is_nuvue else "Analytics buyers evaluating implementation partners"
    industries = "Agriculture, Manufacturing, and Insurance" if is_nuvue else "B2B analytics and advisory"
    return {
        "activation": {
            "title": "Active Blueprint Record",
            "summary": f"{company} SimpliBlueprint engagement is ready for activation after commercial agreement.",
            "record": {
                "blueprint_id": f"DEMO-{engagement['id'].upper()}-001",
                "engagement_objectives": [
                    "Settle buyer, offer, and conversion path before implementation",
                    "Produce an approved strategic decision package the client can reuse",
                ],
                "original_problem": f"{company}'s digital experience does not make the offer easy to grasp for the primary buyer.",
                "desired_outcome": "Clear buyer architecture, proof system, and measurement foundation before build.",
                "why_now": "Leadership wants a scoped strategic answer before committing to a rebuild.",
                "human_owner": "Authorized SimpliCreative strategist",
                "workflow_status": "READY_TO_ACTIVATE",
            },
            "cumulative_context": {
                "known_icp": primary_buyer,
                "known_offers": "Priority offers and curricula as captured in Diagnostic + questionnaire",
                "diagnostic_hypotheses": [
                    "Buyer paths are undifferentiated on the current site.",
                    "Proof and differentiation are underused in the digital experience.",
                    "Measurement is not yet strong enough for confident marketing-contribution claims.",
                ],
                "strategic_unknowns": [
                    "Primary growth audience priority vs secondary audiences",
                    "Meaningful conversion definitions by journey",
                    "Eligibility / offer architecture boundaries",
                ],
                "source_references": ["SimpliSignals", "Diagnostic brief", "Approved proposal", "BLUE-002"],
            },
            "evidence": [_ev(f"SYN-{engagement['id']}-ACT", "Approved SimpliBlueprint proposal authorizes delivery activation.")],
            "governance": _gov("BLUE-002", "Blueprint activation and cumulative context"),
        },
        "questionnaire": {
            "title": "Personalized Blueprint questionnaire",
            "summary": "Generated from cumulative context. CONFIRM / REQUIRED / OPTIONAL / SUPPRESS statuses preserved.",
            "gold_standard_ref": "GS-BLUE-003 / DEMO-BLUE-QCTX-001",
            "questions": [
                {
                    "question_id": "Q-BUYER-001",
                    "status": "CONFIRM",
                    "framework": "Ideal Customer and Buying Committee",
                    "strategic_purpose": "Validate primary website audience",
                    "prompt": f"Based on prior conversations, we understand the primary buyer is {primary_buyer}. Please confirm, correct, or expand.",
                    "prefilled_answer": primary_buyer,
                    "client_answer": primary_buyer,
                    "blueprint_output_affected": "Primary Buyer Definition / ICP",
                },
                {
                    "question_id": "Q-CONV-001",
                    "status": "REQUIRED",
                    "framework": "Conversion and Measurement",
                    "strategic_purpose": "Define meaningful conversion",
                    "prompt": "Which actions should represent meaningful conversion for corporate, individual, and transactional journeys?",
                    "prefilled_answer": None,
                    "client_answer": "Corporate: qualified discovery call. Individual: seminar registration. Transactional: curriculum purchase.",
                    "blueprint_output_affected": "Conversion Definitions / Measurement Requirements",
                },
                {
                    "question_id": "Q-OFFER-001",
                    "status": "REQUIRED",
                    "framework": "Offer Architecture",
                    "strategic_purpose": "Clarify acquisition vs expansion offers",
                    "prompt": "Which offers are acquisition entry points vs expansion or enterprise-only?",
                    "prefilled_answer": None,
                    "client_answer": "Entry: flagship workshop / advisory package. Expansion: multi-year curriculum. Enterprise-only: guarantee track.",
                    "blueprint_output_affected": "Offer Architecture",
                },
                {
                    "question_id": "Q-PROOF-001",
                    "status": "OPTIONAL",
                    "framework": "Credibility and Proof",
                    "strategic_purpose": "Improve proof architecture",
                    "prompt": "Which proof assets should be elevated first on priority pages?",
                    "prefilled_answer": "ROI evaluations and client testimonials",
                    "client_answer": "ROI evaluations, methodology overview, and named client outcomes.",
                    "blueprint_output_affected": "Proof Architecture",
                },
                {
                    "question_id": "Q-INDUSTRY-001",
                    "status": "SUPPRESS",
                    "framework": "ICP",
                    "strategic_purpose": "Already validated — do not re-ask",
                    "prompt": "What industry are you in?",
                    "prefilled_answer": industries,
                    "client_answer": industries,
                    "blueprint_output_affected": "ICP",
                    "suppressed_because": "Reliable current information already exists in Diagnostic / CRM context.",
                },
            ],
            "evidence": [_ev(f"SYN-{engagement['id']}-Q", "Questionnaire personalized from cumulative context; SUPPRESS preserves provenance.")],
            "governance": _gov("BLUE-002", "Personalized Blueprint questionnaire"),
        },
        "research": {
            "title": "Blueprint research & evidence synthesis",
            "summary": "Structured intelligence between questionnaire validation and Blueprint generation.",
            "gold_standard_ref": "GS-BLUE-0034",
            "research_questions": [
                {"question": "Which buyer should the website primarily serve?", "result": f"Corporate / primary buyer priority for {company}, with economic validation still required from CRM."},
                {"question": "Does the current website support materially different buying motions?", "result": "Corporate and individual journeys require clearer separation."},
                {"question": "Is proof sufficiently visible for provider evaluation?", "result": "Strong proof exists but is underused in the digital experience."},
                {"question": "Can marketing contribution currently be measured reliably?", "result": "Measurement is incomplete and does not yet support strong ROI attribution."},
            ],
            "data_quality": [
                {"area": "Client / stakeholder context", "quality": "USABLE_WITH_LIMITATIONS", "limitation": "Client-reported information is not independent validation."},
                {"area": "Website evidence", "quality": "RELIABLE", "limitation": "Observable current-state facts only."},
                {"area": "CRM / pipeline evidence", "quality": "INSUFFICIENT", "limitation": "Economic buyer priority requires stronger structured CRM evidence."},
                {"area": "Analytics / tracking", "quality": "USABLE_WITH_LIMITATIONS", "limitation": "Not complete enough for confident ROI claims."},
            ],
            "findings": [
                {"finding": "Corporate and individual buyers have materially different buying motions.", "validation_status": "PARTIALLY_VALIDATED"},
                {"finding": f"{company}'s strongest proof and differentiation are underused.", "validation_status": "VALIDATED"},
                {"finding": "Measurement is not strong enough for confident marketing-contribution claims.", "validation_status": "VALIDATED"},
            ],
            "evidence": [_ev(f"SYN-{engagement['id']}-R", "Research synthesis preserves validation status through to report and deck.")],
            "governance": _gov("BLUE-002", "Research planning and evidence synthesis"),
        },
        "intelligence": {
            "title": "Strategic intelligence package",
            "summary": "Hypotheses, root causes, priorities, and recommendations pending human strategic review.",
            "hypotheses": [
                {"hypothesis": "Corporate buyers should be the primary website audience.", "status": "PARTIALLY_VALIDATED"},
                {"hypothesis": "Buyer-path ambiguity contributes to conversion friction.", "status": "PARTIALLY_VALIDATED"},
                {"hypothesis": "Stronger proof architecture will improve provider evaluation.", "status": "PARTIALLY_VALIDATED"},
            ],
            "root_causes": [
                {"conclusion": "Buyer architecture does not sufficiently distinguish corporate and individual decision paths.", "classification": "Contributing Condition"},
                {"conclusion": "Proof is not structurally integrated into provider evaluation.", "classification": "Contributing Condition"},
                {"conclusion": "Measurement architecture is incomplete.", "classification": "Root / Enabling Condition"},
            ],
            "priorities": [
                {"item": "Separate corporate and individual buyer paths", "tier": "FIX_NOW"},
                {"item": "Surface proof and risk-reduction evidence structurally", "tier": "FIX_NOW"},
                {"item": "Establish conversion + CRM measurement foundation", "tier": "FIX_NOW"},
                {"item": "Vertical specialization pages", "tier": "FIX_NEXT"},
            ],
            "recommendations": [
                "Approve corporate-first architecture with a distinct individual path.",
                "Rebuild IA and conversion paths around approved buyer needs.",
                "Do not make strong ROI claims until measurement foundation is in place.",
            ],
            "implementation_requirements": [
                "Sitemap and navigation reflecting dual buyer paths",
                "Proof modules on priority evaluation pages",
                "GTM / GA4 / CRM conversion definitions tied to meaningful actions",
            ],
            "evidence": [_ev(f"SYN-{engagement['id']}-I", "Intelligence objects trace to research findings; humans approve conclusions.")],
            "governance": _gov("BLUE-002", "Hypothesis validation and recommendation support"),
        },
        "draft_report": {
            "title": f"SimpliBlueprint Report — {company}",
            "summary": "Draft Blueprint Report for human strategic review before Strategy Deck generation.",
            "gold_standard_ref": "GS-BLUE-001",
            "sections": [
                {"heading": "Executive diagnosis", "body": f"{company} needs the website to help the right buyers understand the offer and take a qualified next step. Sales still compensates for missing website explanation."},
                {"heading": "Buyer architecture", "body": "Corporate buyers are the approved primary audience; individual professionals require a distinct path that must not collapse into corporate messaging."},
                {"heading": "Proof and differentiation", "body": "Existing proof inventory is strong but under-structured in the current experience."},
                {"heading": "Measurement boundary", "body": "Measurement foundation must precede strong performance or ROI claims."},
                {"heading": "Recommended next path", "body": "SimpliFoundation is the demonstrated implementation path after final Blueprint approval."},
            ],
            "evidence": [_ev(f"SYN-{engagement['id']}-REP", "Draft report cites research and intelligence; not final until human approval.")],
            "governance": _gov("BLUE-001", "SimpliBlueprint Human SOP — report review"),
        },
        "strategy_deck": {
            "title": f"Blueprint Strategy Deck — {company}",
            "summary": "Presentation outline handed to the human Strategy Session.",
            "gold_standard_ref": "GS-BLUE-002 / BLUE-003",
            "slides": [
                {"title": "What we set out to answer", "notes": "Original problem, desired outcome, why now."},
                {"title": "What the evidence supports", "notes": "Findings with validation status preserved."},
                {"title": "Buyer architecture decision", "notes": "Corporate-first with distinct individual path."},
                {"title": "Offer and conversion path", "notes": "Entry vs expansion offers; meaningful conversions."},
                {"title": "Proof system", "notes": "What must become structural on priority pages."},
                {"title": "Measurement foundation", "notes": "Boundaries that survive implementation."},
                {"title": "Priorities and FIX NEXT", "notes": "Verticals and AEO remain validation-dependent."},
                {"title": "Implementation path", "notes": "SimpliFoundation handoff after final approval."},
            ],
            "evidence": [_ev(f"SYN-{engagement['id']}-DECK", "Deck is a handoff artifact; Strategy Session reconciles decisions.")],
            "governance": _gov("BLUE-003", "Blueprint Strategy Deck Spec"),
        },
        "strategy_session": {
            "title": "Strategy Session record & reconciliation",
            "summary": "Client feedback is recorded without automatically becoming strategic truth.",
            "gold_standard_ref": "GS-BLUE-005",
            "session": {
                "session_id": f"DEMO-{engagement['id']}-SSR-001",
                "objective": "Review findings, resolve material decisions, confirm priorities, determine implementation path.",
                "participants": f"{company} leadership + SimpliCreative strategist",
            },
            "decisions": [
                {"input": "Corporate buyers remain the primary strategic website audience.", "classification": "Approved Decision"},
                {"input": "Individual professionals still require a visible route.", "classification": "Approved Decision"},
                {"input": "Core architecture, proof, conversion, and measurement precede broad vertical expansion.", "classification": "Approved Priority"},
                {"input": "SimpliFoundation is the selected implementation path for this demonstration.", "classification": "Implementation Decision"},
            ],
            "unchanged": [
                "Evidence boundaries on ROI claims",
                "AEO visibility remains MONITOR / VALIDATE",
            ],
            "evidence": [_ev(f"SYN-{engagement['id']}-SS", "CLIENT_FEEDBACK != AUTOMATIC_STRATEGIC_TRUTH")],
            "governance": _gov("BLUE-002", "Strategy Session reconciliation"),
        },
        "final_blueprint": {
            "title": f"Final SimpliBlueprint — {company}",
            "summary": "Human-approved strategic package ready for implementation handoff.",
            "approved_conclusions": [
                "Corporate-first buyer architecture with distinct individual path",
                "Proof and risk-reduction evidence become structural requirements",
                "Measurement foundation before strong attribution claims",
                "Vertical specialization is FIX NEXT",
            ],
            "implementation_path": "SIMPLIFOUNDATION",
            "evidence": [_ev(f"SYN-{engagement['id']}-FINAL", "Final Blueprint requires human approval before handoff.")],
            "governance": _gov("BLUE-001", "Blueprint completion gate"),
        },
        "handoff": {
            "title": "Strategy-to-execution implementation handoff",
            "summary": "Converts the approved Blueprint into implementation-ready context for SimpliFoundation.",
            "gold_standard_ref": "GS-BLUE-006",
            "control": {
                "handoff_id": f"DEMO-{engagement['id']}-HO-001",
                "implementation_path": "SIMPLIFOUNDATION",
                "blueprint_status": "BLUEPRINT_APPROVED",
                "handoff_status": "IMPLEMENTATION_HANDOFF_READY",
                "primary_owner": "SimpliCreative Foundation Team",
                "client_decision_owner": f"{company} Leadership",
            },
            "approved_objectives": [
                {"type": "Business", "text": "Support growth and make marketing contribution more visible without overstating attribution."},
                {"type": "Website", "text": "Separate buyer paths, surface proof, organize offers, connect meaningful digital behavior to downstream outcomes."},
                {"type": "Measurement", "text": "Establish reliable conversion and CRM connections before strong performance claims."},
            ],
            "evidence_boundaries": [
                "Do not invent ROI claims unsupported by measurement foundation.",
                "Do not collapse individual path into corporate messaging.",
                "Vertical pages follow core architecture — they are not the first build priority.",
            ],
            "evidence": [_ev(f"SYN-{engagement['id']}-HO", "Handoff preserves approved strategy for Foundation without reconstructing reasoning.")],
            "governance": _gov("BLUE-002", "Implementation handoff"),
        },
    }


def _is_unlocked(row: dict) -> bool:
    if row.get("always_unlocked"):
        return True
    linked = row.get("linked_acquisition_journey_id")
    if not linked:
        return False
    journey = journey_service.get_journey(linked)
    if journey is None:
        return False
    return "approve_proposal" in journey["workflow"]["completed_stages"]


def _hydrate_state(bid: str, item: dict) -> None:
    if bid in _state:
        return
    wf = item.get("workflow") or {}
    _state[bid] = {
        "completed": list(wf.get("completed_stages") or []),
        "approval_history": list(wf.get("approval_history") or []),
        "toast": wf.get("toast") or "",
    }


def _find(bid: str) -> dict | None:
    item = next((x for x in _fixture_rows() if x["id"] == bid), None)
    if item is not None:
        _hydrate_state(bid, item)
    return item


def list_blueprints() -> list[dict]:
    return [get_blueprint(item["id"]) for item in _fixture_rows() if get_blueprint(item["id"]) is not None]


def get_blueprint(bid: str) -> dict | None:
    item = _find(bid)
    if item is None:
        return None
    result = deepcopy(item)
    content = _content_for(result)
    result.update(content)
    result["synthetic"] = True
    result["unlocked"] = _is_unlocked(item)
    state = _state.get(bid, {"completed": [], "approval_history": [], "toast": ""})
    completed = state["completed"]
    result["workflow"] = {
        "current_stage": STAGES[len(completed)] if len(completed) < len(STAGES) else "complete",
        "completed_stages": completed,
        "approval_history": state["approval_history"],
        "toast": state["toast"],
    }
    result["stage_labels"] = [
        "Activate",
        "Questionnaire",
        "Validate",
        "Research",
        "Intelligence",
        "Draft report",
        "Strategy deck",
        "Strategy session",
        "Final Blueprint",
        "Handoff",
    ]
    return result


def apply_action(bid: str, action: str, role: str, actor: str, reason: str, edits=None) -> dict:
    item = _find(bid)
    if item is None:
        raise KeyError(bid)
    if not _is_unlocked(item):
        raise RuntimeError("Blueprint delivery is locked until the linked acquisition proposal is approved")
    if action not in STAGES:
        raise ValueError("Unsupported blueprint action")
    state = _state.setdefault(bid, {"completed": [], "approval_history": [], "toast": ""})
    expected = STAGES[len(state["completed"])] if len(state["completed"]) < len(STAGES) else None
    if action != expected:
        raise RuntimeError(f"Next required action is {expected}")
    if action in APPROVALS and role != "Authorized SimpliCreative reviewer":
        raise RuntimeError("Approval requires role Authorized SimpliCreative reviewer")
    state["completed"].append(action)
    if action in APPROVALS:
        state["approval_history"].append({
            "stage": APPROVALS[action],
            "role": role,
            "actor": actor,
            "reason": reason or f"{action} approved",
            "timestamp": datetime.now(timezone.utc).isoformat(),
        })
    state["toast"] = f"{action.replace('_', ' ').title()} complete"
    logger.info(
        "blueprint_action journey_id=%s action=%s actor=%s completed=%s",
        bid,
        action,
        actor,
        len(state["completed"]),
    )
    return get_blueprint(bid)
