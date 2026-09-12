from __future__ import annotations

from copy import deepcopy
from typing import Any

from app.core import data_loader
from app.services.ai.base import AIProvider


def _prospect(prospect_id: str) -> dict[str, Any] | None:
    custom = data_loader.runtime().get("custom_prospects", {}).get(prospect_id)
    if custom:
        return custom
    return next((p for p in data_loader.prospects() if p["id"] == prospect_id), None)


def _transcript(prospect_id: str) -> dict[str, Any] | None:
    runtime_tx = data_loader.runtime().get("transcripts", {}).get(prospect_id)
    if runtime_tx:
        return runtime_tx
    return next(
        (t for t in data_loader.transcripts() if t["prospect_id"] == prospect_id),
        None,
    )


def synthesize_live_insights(prospect_id: str) -> tuple[str, list[dict[str, Any]], dict[str, int]]:
    """Build demo insights from a pasted transcript when no seed insights exist."""
    prospect = _prospect(prospect_id)
    name = prospect["company_name"] if prospect else prospect_id
    tx = _transcript(prospect_id)
    segments = (tx or {}).get("segments") or []

    templates: list[tuple[str, str, str]] = [
        (
            "business_goals",
            "Clarify go-to-market narrative",
            f"Primary outcomes discussed for {name} on the strategy call.",
        ),
        (
            "business_goals",
            "Improve website conversion quality",
            "Shift from vanity traffic toward qualified conversations.",
        ),
        (
            "pain_points",
            "Positioning friction",
            "Buyers struggle to understand differentiation from the current site.",
        ),
        (
            "pain_points",
            "Sales workarounds",
            "Team compensates with PDFs or tickets instead of an ownable site.",
        ),
        (
            "desired_outcomes",
            "Marketing autonomy",
            "Ability to launch and update pages without engineering bottlenecks.",
        ),
        (
            "opportunities",
            "Phased diagnose-and-build",
            "Scoped phase-one engagement before a larger commitment.",
        ),
        (
            "open_questions",
            "Budget comfort",
            "Confirm investment staging and phase-one package fit.",
        ),
        (
            "open_questions",
            "Timeline constraints",
            "Confirm discovery start and launch window.",
        ),
        (
            "open_questions",
            "CMS and stack",
            "Confirm platform and measurement stack details.",
        ),
    ]

    insights: list[dict[str, Any]] = []
    for idx, (category, title, description) in enumerate(templates):
        seg = segments[idx % len(segments)] if segments else None
        item: dict[str, Any] = {
            "category": category,
            "title": title,
            "description": description,
            "confidence": "medium" if seg else "low",
            "quote": None,
            "timestamp": None,
            "speaker": None,
        }
        if seg:
            item["quote"] = seg.get("text")
            item["timestamp"] = seg.get("timestamp")
            item["speaker"] = seg.get("speaker")
            item["confidence"] = "high"
        insights.append(item)

    summary = (
        f"{name} appears to be evaluating how buyers understand their offer and convert "
        f"research traffic into qualified conversations. Key themes from the pasted strategy "
        f"call include positioning clarity, website effectiveness, and marketing autonomy. "
        f"A phased diagnose-and-build path is the recommended next conversation."
    )
    counts = {
        "goals": len([i for i in insights if i["category"] == "business_goals"]),
        "pain_points": len([i for i in insights if i["category"] == "pain_points"]),
        "opportunities": len([i for i in insights if i["category"] == "opportunities"]),
        "open_questions": len([i for i in insights if i["category"] == "open_questions"]),
    }
    return summary, insights, counts


def synthesize_fast_readiness() -> list[dict[str, Any]]:
    """Return an evidence-safe FAST draft when no seeded assessment exists."""
    return [
        {
            "pillar": "flexible",
            "label": "Flexible",
            "status": "needs_validation",
            "finding": "CMS, reusable templates, and publishing workflow need confirmation.",
            "evidence_ids": [],
            "suggested_action": "Confirm publishing ownership and template needs during discovery.",
            "service_ids": ["svc-development"],
        },
        {
            "pillar": "accessible",
            "label": "Accessible",
            "status": "needs_validation",
            "finding": "Accessibility, responsive behavior, and performance baseline need validation.",
            "evidence_ids": [],
            "suggested_action": "Review accessibility, responsiveness, and performance during discovery.",
            "service_ids": ["svc-development"],
        },
        {
            "pillar": "strategic",
            "label": "Strategic",
            "status": "needs_validation",
            "finding": "Messaging, conversion paths, and search needs need validation against the buyer journey.",
            "evidence_ids": [],
            "suggested_action": "Confirm positioning, conversion paths, and search priorities.",
            "service_ids": [
                "svc-website-strategy",
                "svc-website-copy",
                "svc-seo",
            ],
        },
        {
            "pillar": "trackable",
            "label": "Trackable",
            "status": "needs_validation",
            "finding": "Attribution, conversion events, and reporting expectations need confirmation.",
            "evidence_ids": [],
            "suggested_action": "Confirm analytics, attribution, and qualified-opportunity reporting needs.",
            "service_ids": ["svc-seo", "svc-development"],
        },
    ]


def synthesize_assessment(prospect_id: str) -> dict[str, Any]:
    prospect = _prospect(prospect_id)
    name = prospect["company_name"] if prospect else prospect_id
    summary = prospect["summary"] if prospect else f"Assessment draft for {name}."
    return {
        "id": f"a-{prospect_id}",
        "prospect_id": prospect_id,
        "status": "needs_human_review",
        "review_state": "needs_human_review",
        "approved_by": None,
        "executive_summary": summary,
        "business_context": (
            f"{name} is in an active SimpliCreative prospect workflow. "
            "This draft was synthesized from available prospect notes for human review."
        ),
        "current_challenges": [
            "Messaging and site structure need clearer alignment to buyer decisions.",
            "Marketing autonomy and measurement details still require confirmation.",
        ],
        "business_goals": [
            "Clarify positioning and conversion paths on the website.",
            "Establish a foundation the marketing team can operate confidently.",
        ],
        "key_opportunities": [
            "Diagnose-phase messaging and structure audit.",
            "Phased build recommendation with marketing-owned templates.",
        ],
        "risks": [
            "Incomplete discovery inputs may limit recommendation precision.",
            "Timeline and budget comfort are not fully confirmed.",
        ],
        "information_gaps": [
            "MarTech and attribution stack",
            "Priority ICP and converting pages",
            "Content ownership model",
        ],
        "recommended_next_step": (
            "Complete human review of this draft, close information gaps via questionnaire, "
            "then present a scoped diagnose-phase recommendation."
        ),
        "recommended_services": [
            {
                "service_id": "svc-website-strategy",
                "name": "Website Strategy",
                "reason": "Clarify audience, message, and conversion architecture first.",
                "quantity": "1 phase",
                "status": "proposed",
            },
            {
                "service_id": "svc-website-copy",
                "name": "Website Copy",
                "reason": "Align page narrative to buyer decisions.",
                "quantity": "Core page set",
                "status": "proposed",
            },
            {
                "service_id": "svc-development",
                "name": "Development",
                "reason": "Build an ownable foundation after strategy clarity.",
                "quantity": "Phase one",
                "status": "proposed",
            },
        ],
        "framework": {
            "name": "Strategy Framework",
            "status": "methodology_configuration_pending",
            "note": (
                "Evaluation criteria and scoring rules will be configured after "
                "SimpliCreative provides process documentation. This POC does not invent "
                "proprietary assessment rules."
            ),
        },
        "fast_readiness": synthesize_fast_readiness(),
        "diagnosis": {
            "summary": (
                "The call indicates that the requested website work should begin with "
                "positioning and conversion diagnosis, not a build assumption."
            ),
            "primary_friction": "Positioning and buyer-path clarity need validation.",
            "affected_growth_drivers": ["Credibility", "Performance", "Agility"],
            "evidence_ids": [],
        },
    }


def synthesize_questionnaire(prospect_id: str) -> dict[str, Any]:
    prospect = _prospect(prospect_id)
    name = prospect["company_name"] if prospect else prospect_id
    summary = prospect["summary"] if prospect else ""

    open_questions = [
        i
        for i in data_loader.insights()
        if i.get("prospect_id") == prospect_id and i.get("category") == "open_questions"
    ]

    if open_questions:
        questions = []
        for idx, insight in enumerate(open_questions, start=1):
            title = insight.get("title") or f"Open question {idx}"
            prompt = title if title.endswith("?") else f"{title}?"
            questions.append(
                {
                    "id": f"q{idx}",
                    "prompt": prompt,
                    "ai_suggested_answer": insight.get("description")
                    or "Needs confirmation — not fully captured on the call.",
                    "status": "pending",
                    "evidence_ids": list(insight.get("evidence_ids") or []),
                }
            )
        return {
            "id": f"q-{prospect_id}",
            "prospect_id": prospect_id,
            "status": "ai_generated",
            "title": "AI Generated Questionnaire",
            "questions": questions,
        }

    return {
        "id": f"q-{prospect_id}",
        "prospect_id": prospect_id,
        "status": "ai_generated",
        "title": "AI Generated Questionnaire",
        "questions": [
            {
                "id": "q1",
                "prompt": f"What is the primary business goal for {name}'s website this year?",
                "ai_suggested_answer": summary or "Needs confirmation from the prospect.",
                "status": "pending",
                "evidence_ids": [],
            },
            {
                "id": "q2",
                "prompt": "What is the biggest friction buyers face understanding your offer today?",
                "ai_suggested_answer": "Needs confirmation — not fully captured yet.",
                "status": "pending",
                "evidence_ids": [],
            },
            {
                "id": "q3",
                "prompt": "Who owns day-to-day website updates after launch?",
                "ai_suggested_answer": "Needs confirmation.",
                "status": "pending",
                "evidence_ids": [],
            },
            {
                "id": "q4",
                "prompt": "What timeline constraints should scope respect?",
                "ai_suggested_answer": "Needs confirmation.",
                "status": "pending",
                "evidence_ids": [],
            },
            {
                "id": "q5",
                "prompt": "How should investment be staged given current budget comfort?",
                "ai_suggested_answer": "Prefer a scoped phase-one before larger commitment.",
                "status": "pending",
                "evidence_ids": [],
            },
        ],
    }


def _catalog_by_id() -> dict[str, dict[str, Any]]:
    return {s["id"]: s for s in data_loader.services()}


FAST_BY_SERVICE = {
    "svc-website-strategy": ["Strategic"],
    "svc-website-copy": ["Strategic"],
    "svc-seo": ["Strategic", "Trackable"],
    "svc-development": ["Flexible", "Accessible", "Trackable"],
    "svc-ongoing-support": ["Trackable"],
}


def _fast_rationale(service_id: str) -> str:
    return " and ".join(FAST_BY_SERVICE.get(service_id, []))


def _recommended_services(prospect_id: str) -> list[dict[str, Any]]:
    runtime = data_loader.runtime()
    assessment = runtime["assessments"].get(prospect_id) or data_loader.assessments().get(
        prospect_id
    )
    if assessment and assessment.get("recommended_services"):
        return list(assessment["recommended_services"])
    return synthesize_assessment(prospect_id)["recommended_services"]


def synthesize_scope(prospect_id: str) -> dict[str, Any]:
    prospect = _prospect(prospect_id)
    name = prospect["company_name"] if prospect else prospect_id
    recs = [r for r in _recommended_services(prospect_id) if r.get("status") != "optional"]
    catalog = _catalog_by_id()
    phases = []
    for idx, rec in enumerate(recs, start=1):
        svc = catalog.get(rec["service_id"], {})
        phases.append(
            {
                "id": f"phase-{idx}",
                "name": rec.get("name") or svc.get("name") or f"Phase {idx}",
                "duration": "2–4 weeks",
                "deliverables": [
                    f"Scoped deliverables for {rec.get('name', 'service')}",
                    f"Quantity: {rec.get('quantity', 'TBD')}",
                ],
                "services": [rec["service_id"]],
                "fast_pillars": FAST_BY_SERVICE.get(rec["service_id"], []),
            }
        )
    if not phases:
        phases = [
            {
                "id": "phase-1",
                "name": "Diagnose phase",
                "duration": "2–3 weeks",
                "deliverables": ["Discovery workshop", "Scoped recommendation"],
                "services": ["svc-website-strategy"],
                "fast_pillars": ["Strategic"],
            }
        ]
    return {
        "id": f"scope-{prospect_id}",
        "prospect_id": prospect_id,
        "status": "needs_human_review",
        "review_state": "needs_human_review",
        "approved_by": None,
        "title": f"{name} — Phase One Engagement Scope",
        "summary": (
            f"Phased engagement for {name} based on recommended services from the "
            "strategic assessment. Demo scope for human review."
        ),
        "phases": phases,
        "exclusions": [
            "Full brand identity redesign",
            "Paid media buying",
            "Custom product engineering outside the marketing site",
        ],
        "assumptions": [
            "Decision makers available for workshops",
            "Brand and CMS access provided in week one",
        ],
        "timeline_note": "Timeline locks after scope approval.",
    }


def synthesize_pricing(prospect_id: str) -> dict[str, Any]:
    catalog = _catalog_by_id()
    line_items = []
    subtotal = 0.0
    for rec in _recommended_services(prospect_id):
        svc = catalog.get(rec["service_id"], {})
        unit_price = float(svc.get("unit_price") or 0)
        optional = rec.get("status") == "optional"
        if optional and svc.get("unit") == "month":
            amount = unit_price * 3
            quantity_label = "3 months (optional)"
        else:
            amount = unit_price
            quantity_label = rec.get("quantity") or "1"
        if not optional:
            subtotal += amount
        line_items.append(
            {
                "service_id": rec["service_id"],
                "name": rec.get("name") or svc.get("name") or rec["service_id"],
                "quantity_label": quantity_label,
                "unit_price": unit_price,
                "amount": amount,
                "optional": optional,
                "fast_rationale": _fast_rationale(rec["service_id"]),
            }
        )
    return {
        "id": f"price-{prospect_id}",
        "prospect_id": prospect_id,
        "status": "needs_human_review",
        "review_state": "needs_human_review",
        "approved_by": None,
        "currency": "USD",
        "line_items": line_items,
        "subtotal": subtotal,
        "discount_label": None,
        "discount_amount": None,
        "total": subtotal,
        "notes": (
            "Amounts use the demo rate card. Optional line items are excluded from the "
            "package total. Not a live quote."
        ),
        "budget_context": {
            "summary": "Budget comfort needs confirmation before a final commercial commitment.",
            "constraints": ["Use the approved demo rate card", "Keep optional services separate"],
            "evidence_ids": [],
        },
    }


def synthesize_proposal(prospect_id: str) -> dict[str, Any]:
    prospect = _prospect(prospect_id)
    name = prospect["company_name"] if prospect else prospect_id
    runtime = data_loader.runtime()
    scope = runtime["scopes"].get(prospect_id) or data_loader.scopes().get(prospect_id)
    pricing = runtime["pricings"].get(prospect_id) or data_loader.pricings().get(prospect_id)
    assessment = runtime["assessments"].get(prospect_id) or data_loader.assessments().get(
        prospect_id
    )
    if not scope:
        scope = synthesize_scope(prospect_id)
    if not pricing:
        pricing = synthesize_pricing(prospect_id)
    strategy = (
        (assessment or {}).get("executive_summary")
        or (prospect or {}).get("summary")
        or f"Strategic assessment draft for {name}."
    )
    total = pricing.get("total", 0)
    currency = pricing.get("currency", "USD")
    fast_readiness = (assessment or {}).get("fast_readiness") or synthesize_fast_readiness()
    return {
        "id": f"prop-{prospect_id}",
        "prospect_id": prospect_id,
        "status": "needs_human_review",
        "review_state": "needs_human_review",
        "approved_by": None,
        "title": f"Proposal: {name} Website Strategy & Phase-One Build",
        "prepared_for": f"{name} leadership",
        "prepared_by": "Lei Lani Fera · SimpliCreative",
        "valid_until": "2026-09-30",
        "executive_summary": (
            f"This proposal packages strategy, scope, and investment for {name} "
            "into a phase-one engagement ready for human review."
        ),
        "strategy_snapshot": strategy,
        "scope_snapshot": scope.get("summary") or "Phased engagement scope pending human review.",
        "investment_summary": (
            f"Proposed package investment: ${total:,.0f} {currency}. "
            "Optional line items are listed separately when present."
        ),
        "next_steps": [
            "Approve this proposal and confirm start date",
            "Share brand guidelines and CMS access",
            "Schedule kickoff workshop",
        ],
        "closing_note": (
            "SimpliCreative prepares the work; your team remains the decision owner. "
            "Demo draft for internal review."
        ),
        "fast_readiness": fast_readiness,
        "why_this_recommendation": [
            {
                "title": "Start with diagnosis",
                "detail": "The recommended phase prioritizes evidence and strategic clarity before build decisions.",
                "evidence_ids": [],
            },
            {
                "title": "Match the recommended services",
                "detail": "Scope reflects the approved strategic assessment and its selected services.",
                "evidence_ids": [],
            },
            {
                "title": "Keep investment reviewable",
                "detail": "Pricing uses the approved demo rate card; optional work remains separate from the package total.",
                "evidence_ids": [],
            },
        ],
        "knowledge_note": (
            "Generated using SimpliCreative's current approved services, pricing, positioning, "
            "and proposal standards."
        ),
    }


class MockAIProvider(AIProvider):
    """Deterministic demo provider — used when OpenRouter is not configured."""

    def analyze_prospect(self, prospect_id: str) -> dict[str, Any]:
        insights = [i for i in data_loader.insights() if i["prospect_id"] == prospect_id]
        prospect = _prospect(prospect_id)
        live: list[dict[str, Any]] = []
        summary = prospect["summary"] if prospect else ""
        counts = {
            "goals": len([i for i in insights if i["category"] == "business_goals"]) or 2,
            "pain_points": len([i for i in insights if i["category"] == "pain_points"]) or 2,
            "opportunities": len([i for i in insights if i["category"] == "opportunities"]) or 2,
            "open_questions": len([i for i in insights if i["category"] == "open_questions"]) or 3,
        }

        if not insights:
            summary, live, counts = synthesize_live_insights(prospect_id)
            data_loader.runtime().setdefault("ai_summaries", {})[prospect_id] = summary
            data_loader.runtime().setdefault("ai_insights", {})[prospect_id] = live

        return {
            "prospect_id": prospect_id,
            "status": "complete",
            "provider": "mock",
            "steps": [
                {"key": "read", "label": "Reading strategy call", "done": True},
                {"key": "goals", "label": "Extracting goals", "done": True},
                {"key": "pains", "label": "Identifying pain points", "done": True},
                {"key": "requirements", "label": "Identifying requirements", "done": True},
                {"key": "assessment", "label": "Preparing assessment", "done": True},
            ],
            "counts": counts,
            "summary": summary,
            "insights": live,
        }

    def generate_questionnaire(self, prospect_id: str) -> dict[str, Any]:
        stored = data_loader.questionnaires().get(prospect_id)
        if stored:
            return deepcopy(stored)
        return synthesize_questionnaire(prospect_id)

    def generate_assessment(self, prospect_id: str) -> dict[str, Any]:
        stored = data_loader.assessments().get(prospect_id)
        payload = deepcopy(stored) if stored else synthesize_assessment(prospect_id)
        payload["review_state"] = "needs_human_review"
        payload["status"] = "needs_human_review"
        payload["approved_by"] = None
        return payload

    def generate_scope(self, prospect_id: str) -> dict[str, Any]:
        stored = data_loader.scopes().get(prospect_id)
        payload = deepcopy(stored) if stored else synthesize_scope(prospect_id)
        payload["review_state"] = "needs_human_review"
        payload["status"] = "needs_human_review"
        payload["approved_by"] = None
        return payload

    def generate_pricing(self, prospect_id: str) -> dict[str, Any]:
        stored = data_loader.pricings().get(prospect_id)
        payload = deepcopy(stored) if stored else synthesize_pricing(prospect_id)
        payload["review_state"] = "needs_human_review"
        payload["status"] = "needs_human_review"
        payload["approved_by"] = None
        return payload

    def generate_proposal(self, prospect_id: str) -> dict[str, Any]:
        stored = data_loader.proposals().get(prospect_id)
        payload = deepcopy(stored) if stored else synthesize_proposal(prospect_id)
        payload["review_state"] = "needs_human_review"
        payload["status"] = "needs_human_review"
        payload["approved_by"] = None
        return payload
