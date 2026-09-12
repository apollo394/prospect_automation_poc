from __future__ import annotations

from app.core import data_loader
from app.schemas.models import AnalysisResult, Evidence, Insight, IntelligenceCategory, IntelligenceResponse
from app.services.ai.factory import get_ai_provider

CATEGORY_LABELS = {
    "business_goals": "Business Goals",
    "pain_points": "Pain Points",
    "desired_outcomes": "Desired Outcomes",
    "current_situation": "Current Situation",
    "services_discussed": "Services Discussed",
    "decision_makers": "Decision Makers",
    "timeline": "Timeline",
    "budget_signals": "Budget Signals",
    "objections": "Objections",
    "open_questions": "Open Questions",
    "opportunities": "Opportunities",
}


def _evidence_map(prospect_id: str) -> dict[str, Evidence]:
    return {
        e["id"]: Evidence(**e)
        for e in data_loader.evidence()
        if e["prospect_id"] == prospect_id
    }


def get_intelligence(prospect_id: str) -> IntelligenceResponse:
    evidence = _evidence_map(prospect_id)
    insights_raw = [i for i in data_loader.insights() if i["prospect_id"] == prospect_id]
    by_cat: dict[str, list[Insight]] = {}
    for raw in insights_raw:
        ev = [evidence[eid] for eid in raw.get("evidence_ids", []) if eid in evidence]
        insight = Insight(**raw, evidence=ev)
        by_cat.setdefault(insight.category, []).append(insight)

    # Merge OpenRouter-generated insights (ephemeral) alongside curated demo evidence
    live_insights = data_loader.runtime().get("ai_insights", {}).get(prospect_id) or []
    if not insights_raw and not live_insights and get_transcript(prospect_id):
        from app.services.ai.mock_provider import synthesize_live_insights

        _summary, live_insights, _counts = synthesize_live_insights(prospect_id)
        data_loader.runtime().setdefault("ai_insights", {})[prospect_id] = live_insights
    for idx, item in enumerate(live_insights):
        category = item.get("category") or "open_questions"
        quote = item.get("quote")
        evidence_list: list[Evidence] = []
        if quote:
            evidence_list.append(
                Evidence(
                    id=f"live-{prospect_id}-{idx}",
                    prospect_id=prospect_id,
                    source="Strategy Call",
                    source_type="transcript",
                    timestamp=item.get("timestamp") or "—",
                    quote=quote,
                    speaker=item.get("speaker"),
                )
            )
        confidence_raw = (item.get("confidence") or "medium").lower()
        if confidence_raw not in {"high", "medium", "low"}:
            confidence_raw = "medium"
        insight = Insight(
            id=f"live-in-{prospect_id}-{idx}",
            prospect_id=prospect_id,
            category=category,
            title=item.get("title") or "Insight",
            description=item.get("description") or "",
            confidence=confidence_raw,
            evidence_ids=[e.id for e in evidence_list],
            evidence=evidence_list,
        )
        by_cat.setdefault(category, []).append(insight)

    categories = []
    for key, label in CATEGORY_LABELS.items():
        items = by_cat.get(key, [])
        if not items and key == "opportunities":
            continue
        if items or key in {
            "business_goals",
            "pain_points",
            "desired_outcomes",
            "current_situation",
            "services_discussed",
            "decision_makers",
            "timeline",
            "budget_signals",
            "objections",
            "open_questions",
        }:
            categories.append(
                IntelligenceCategory(key=key, label=label, count=len(items), insights=items)
            )

    prospect = next((p for p in data_loader.prospects() if p["id"] == prospect_id), None)
    if not prospect:
        prospect = data_loader.runtime().get("custom_prospects", {}).get(prospect_id)
    summary = data_loader.runtime().get("ai_summaries", {}).get(prospect_id) or (
        prospect["summary"] if prospect else ""
    )
    return IntelligenceResponse(
        prospect_id=prospect_id,
        categories=categories,
        summary=summary,
    )


def analyze_prospect(prospect_id: str) -> AnalysisResult:
    provider = get_ai_provider()
    result = provider.analyze_prospect(prospect_id)
    data_loader.runtime()["analysis_complete"].add(prospect_id)
    allowed = {
        "prospect_id",
        "status",
        "steps",
        "counts",
        "summary",
        "provider",
        "model",
    }
    return AnalysisResult(**{k: v for k, v in result.items() if k in allowed})


def get_transcript(prospect_id: str) -> dict | None:
    runtime_tx = data_loader.runtime().get("transcripts", {}).get(prospect_id)
    if runtime_tx:
        return runtime_tx
    seeded = next((t for t in data_loader.transcripts() if t["prospect_id"] == prospect_id), None)
    if seeded:
        return seeded
    return next((t for t in data_loader.demo_transcripts() if t["prospect_id"] == prospect_id), None)
