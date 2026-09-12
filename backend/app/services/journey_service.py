from copy import deepcopy
from datetime import datetime, timezone
from app.core.data_loader import governed_journeys

STAGES = ["prepare_diagnostic", "import_transcript", "generate_questionnaire", "review_returned_questionnaire", "approve_recommendation", "approve_scope", "reveal_pricing", "approve_pricing", "reveal_proposal", "approve_proposal"]
APPROVALS = {"approve_recommendation": "recommendation", "approve_scope": "scope", "approve_pricing": "pricing", "approve_proposal": "proposal"}
_state = {}

LEAD_PROFILES = {
    "cedar-strategy": {
        "company_name": "Cedar Strategy Group",
        "contact_name": "Maya Thompson",
        "contact_role": "VP, Growth",
        "website": "cedarstrategy.example",
        "campaign": "LinkedIn · Lean Marketing Scorecard",
        "headline": "The self-assessment indicates potential positioning and conversion friction to explore.",
        "score": 46,
        "dimensions": [("Discoverability", 8), ("Credibility", 11), ("Performance", 13), ("Agility", 14)],
    },
    "atlas-health": {
        "company_name": "Atlas Health Partners",
        "contact_name": "Jordan Patel",
        "contact_role": "Director of Marketing",
        "website": "atlashealth.example",
        "campaign": "LinkedIn · Website Growth Assessment",
        "headline": "The self-assessment indicates several website and growth-system areas to explore.",
        "score": 58,
        "dimensions": [("Discoverability", 12), ("Credibility", 15), ("Performance", 14), ("Agility", 17)],
    },
    "harbor-advisory": {
        "company_name": "Harbor Advisory",
        "contact_name": "Elena Brooks",
        "contact_role": "Principal",
        "website": "harboradvisory.example",
        "campaign": "LinkedIn · Lean Marketing Scorecard",
        "headline": "The self-assessment suggests the team may benefit from reviewing its website conversion path.",
        "score": 71,
        "dimensions": [("Discoverability", 16), ("Credibility", 19), ("Performance", 17), ("Agility", 19)],
    },
    "northstar-services": {
        "company_name": "Northstar Services Co.",
        "contact_name": "Derek Williams",
        "contact_role": "Operations & Marketing Lead",
        "website": "northstarservices.example",
        "campaign": "LinkedIn · Website Support Assessment",
        "headline": "The self-assessment suggests ongoing website performance questions worth validating.",
        "score": 78,
        "dimensions": [("Discoverability", 18), ("Credibility", 21), ("Performance", 20), ("Agility", 19)],
    },
}

SCENARIO_CONTENT = {
    "cedar-strategy": {
        "diagnostic": ("Clarify the offer before prescribing a build", ["The current story may not differentiate Cedar in a crowded category.", "Sales may be compensating for missing website explanation with PDF follow-up."], ["What must a qualified buyer understand in the first 60 seconds?", "Which audience, offer and conversion action matter most for the spring launch?", "Who validates strategic direction and who signs the investment?"]),
        "questions": [("Confirm", "Validate the primary growth outcome", "What is the business result the new website must enable?", "Increase qualified opportunities, not just traffic."), ("Required", "Resolve a decision-critical gap", "Which offer should the homepage make easiest to understand and act on?", "Analytics implementation advisory for enterprise teams."), ("Suppress", "Already clear from the call record", "Do you need a full website rebuild?", "No — leadership wants a scoped phase one first.")],
        "scope": ("SimpliBlueprint · strategic clarity and conversion direction", ["Buyer, offer and decision-context synthesis", "Positioning and message architecture", "Conversion-path and priority-page blueprint", "Prioritised execution roadmap with handoff notes"], ["Kickoff & evidence alignment", "Strategy working session", "Blueprint review and decision"], ["Visual design, development, and platform implementation", "Unvalidated claims or messaging proof"]),
        "price": "A fixed investment is prepared only after the Blueprint scope is approved.",
    },
    "atlas-health": {
        "diagnostic": ("Validate the conditions for a tailored Foundation engagement", ["The marketing team may need a governed website foundation rather than isolated page changes.", "Content agility and conversion measurement may require coordinated decisions across marketing and operations."], ["Which journeys need custom information architecture or integrations?", "What content ownership and publishing workflow is required?", "What measurement and CRM handoff must work at launch?"]),
        "questions": [("Confirm", "Validate the agreed business priority", "Which audience journey should improve first?", "Provider-partner enquiries from the core service pages."), ("Required", "Scope a Foundation-specific dependency", "Which CRM, forms, analytics or consent requirements must be included?", "HubSpot forms, lifecycle attribution and consent-compliant analytics."), ("Optional", "Useful if time permits", "Which existing content can be reused after review?", "Two service guides and the current proof library.")],
        "scope": ("SimpliFoundation · tailored website foundation", ["Strategic requirements and solution blueprint", "Information architecture, message system and priority-page content direction", "Custom design and implementation requirements", "Measurement, governance and launch-readiness plan"], ["Foundation discovery", "Design and build specification", "Launch readiness review"], ["Third-party platform fees and unapproved integrations", "Ongoing optimisation outside the agreed handover"]),
        "price": "This illustrative fixed investment is validated against delivery complexity, reference value, cost assumptions and target margin before human approval.",
    },
    "harbor-advisory": {
        "diagnostic": ("Confirm that a productised WordPress route is sufficient", ["The offer and audience may be stable enough for a structured productised website.", "The main opportunity may be a clearer conversion path, not a bespoke strategic foundation."], ["Are positioning and core offer messages already approved?", "How many priority pages and form paths are needed for launch?", "Are there any custom integrations that would break the productised boundary?"]),
        "questions": [("Confirm", "Protect the productised route boundary", "Are the core offer, positioning and proof points approved?", "Yes — only the current site structure and CTA path need improvement."), ("Required", "Set the page count", "Which pages must be included in the launch set?", "Home, services, about, insights and contact."), ("Suppress", "Avoid repeating known context", "Is a bespoke platform required?", "No — WordPress is the confirmed publishing environment.")],
        "scope": ("Templated WordPress · structured launch website", ["Configured template system and launch-page set", "CMS setup, responsive build and contact conversion path", "Baseline technical SEO and analytics configuration", "Editor handover and launch checklist"], ["Content and page mapping", "Template configuration", "Quality assurance and launch"], ["Custom application development or advanced integrations", "New positioning or brand strategy work"]),
        "price": "Illustrative productised investment, subject to approved page count and route boundaries.",
    },
    "northstar-services": {
        "diagnostic": ("Establish whether a governed CARE cadence is the right next step", ["The website may need regular optimisation and editorial support rather than a one-off rebuild.", "Ongoing request intake may be causing marketing and operational delays."], ["Which recurring requests should CARE own?", "What response cadence and approver model are required?", "Which improvements require a separate strategic or implementation scope?"]),
        "questions": [("Confirm", "Confirm the operating objective", "What should the first 90 days of CARE improve?", "Faster landing-page updates, content hygiene and conversion reporting."), ("Required", "Set service responsibility", "Who approves changes and provides source material?", "Marketing lead approves; operations supplies service updates."), ("Optional", "Prioritise the backlog", "Which experiment should be considered first?", "A simplified enquiry form on high-traffic service pages.")],
        "scope": ("SimpliCARE · governed ongoing website care", ["Monthly prioritisation and request intake", "Agreed content, page and conversion updates", "Performance review and optimisation recommendations", "Transparent backlog, responsibilities and escalation path"], ["Onboarding and backlog triage", "Monthly delivery cadence", "Quarterly strategic review"], ["Unapproved rebuild work or new strategic positioning", "Third-party licensing and major platform changes"]),
        "price": "Illustrative recurring investment for the agreed service cadence; work outside the CARE boundary is separately scoped.",
    },
}

PROPOSAL_COPY = {
    "cedar-strategy": ("Cedar Strategy Group wants its website to help the right buyers understand the offer and take a qualified next step. SimpliBlueprint creates the strategic clarity and conversion direction required before committing to implementation.", "We will align the buyer, offer, proof and decision path so the team has an actionable foundation for the spring launch.", "This proposal is designed to give Cedar a clear, reusable strategic decision—not a premature rebuild commitment."),
    "atlas-health": ("Atlas Health Partners needs a tailored website foundation that connects its priority audience journey, content ownership and measurement requirements. SimpliFoundation is proposed to turn that coordinated need into an approved, launch-ready foundation.", "The engagement brings strategic requirements, information architecture, message direction and implementation planning into one governed foundation.", "The work is structured around the approved outcome and responsibilities, with details confirmed at each decision point."),
    "harbor-advisory": ("Harbor Advisory has a sufficiently defined offer and publishing environment to benefit from a focused, productised website launch. Templated WordPress is proposed to improve structure, credibility and conversion without introducing unnecessary bespoke work.", "The work focuses on a clear launch-page set, CMS configuration and an editor-ready handover within the productised boundary.", "Any work outside the agreed template, page and integration boundary will be reviewed separately before it is added."),
    "northstar-services": ("Northstar Services Co. needs an ongoing website operating rhythm so priority updates and conversion improvements do not stall. SimpliCARE is proposed as a governed monthly service with a visible backlog, clear approvals and regular performance review.", "The engagement establishes a practical cadence for priority changes, reporting and optimisation recommendations while keeping strategic or rebuild work separate.", "The service will stay focused on the agreed cadence and backlog; material new work is reviewed before it is scheduled."),
}

def reset_runtime():
    _state.clear()

def _find(jid): return next((x for x in governed_journeys() if x["id"] == jid), None)
def list_journeys():
    journeys = [get_journey(item["id"]) for item in governed_journeys()]
    for journey in journeys:
        journey["pricing"].pop("foundation_rationale", None)
    return journeys

def get_journey(jid):
    item = _find(jid)
    if item is None: return None
    result = deepcopy(item)
    if "assessment" in result: raise ValueError("Invalid governed fixture: use diagnostic/recommendation")
    _complete_fixture_shape(result)
    result["synthetic"] = True
    if "foundation_rationale" in result["pricing"]:
        result["pricing"]["internal_rationale"] = result["pricing"]["foundation_rationale"]
    result["proposal"].pop("foundation_rationale", None)
    result["proposal"].pop("internal_rationale", None)
    state = _state.get(jid, {"completed": [], "revealed": [], "approval_history": [], "toast": ""})
    if state.get("transcript_text"):
        result["diagnostic"]["uploaded_transcript"] = state["transcript_text"]
    completed = state["completed"]
    result["recommended_product"] = result["recommendation"]["product"] if "approve_recommendation" in completed else None
    result["workflow"] = {"current_stage": STAGES[len(completed)] if len(completed) < len(STAGES) else "complete", "completed_stages": completed, "revealed_stages": state["revealed"], "approval_history": state["approval_history"], "toast": state["toast"]}
    result["hubspot"] = {"lifecycle_stage": "Proposal sent" if "approve_proposal" in completed else "Lead"}
    return result

def _complete_fixture_shape(result):
    """Normalize the deterministic fixture into the dashboard's artifact contract."""
    product = result["recommendation"]["product"]
    profile = LEAD_PROFILES[result["id"]]
    scenario = SCENARIO_CONTENT[result["id"]]
    result["company_name"] = profile["company_name"]
    result["prospect"].update({key: value for key, value in profile.items() if key not in {"campaign", "headline", "score", "dimensions", "company_name"}})
    governing_documents = {
        "scoreapp": ("GOV-001", "Assessment intake and evidence governance"),
        "diagnostic": ("DSG-001", "Executive Marketing Diagnostic"),
        "questionnaire": ("DSG-001", "Personalized diagnostic questionnaire"),
        "recommendation": ("ENG-001", "Engagement recommendation rules"),
        "scope": ("ENG-001", "Engagement scope rules"),
        "pricing": ("PRICE-001", "Pricing and margin-validation rules"),
        "proposal": ("GOV-001", "Proposal approval governance"),
    }
    for name in ("scoreapp", "diagnostic", "questionnaire", "recommendation", "scope", "pricing", "proposal"):
        artifact = result[name]
        artifact.setdefault("title", name.replace("_", " ").title())
        artifact.setdefault("summary", artifact.get("title", "Synthetic artifact"))
        evidence = artifact.get("evidence", [])
        artifact["evidence"] = [{"id": e if isinstance(e, str) else e["id"], "source_type": "synthetic_fixture", "quote": "Synthetic record for POC validation.", "evidence_status": "synthetic", "synthetic_label": "FICTIONAL — NOT A REAL CLIENT"} for e in evidence] or [{"id": f"SYN-{result['id']}-{name}", "source_type": "synthetic_fixture", "quote": "Synthetic record for POC validation.", "evidence_status": "synthetic", "synthetic_label": "FICTIONAL — NOT A REAL CLIENT"}]
        document_id, title = governing_documents[name]
        governance = artifact.setdefault("governance", {})
        governance.setdefault("evidence_status", "synthetic")
        governance.setdefault("ai_confidence", "high")
        default_citations = [{"document_id": document_id, "version": "v1.0", "title": title}]
        if name == "recommendation":
            default_citations.insert(0, {"document_id": "GOV-001", "version": "v1.0", "title": "Commercial decision governance"})
        governance.setdefault("citations", default_citations)
        governance.setdefault("open_questions", [])
        governance.setdefault("conflicts", [])
    result["scoreapp"].update({
        "campaign_context": profile["campaign"],
        "headline": profile["headline"],
        "overall_score": profile["score"],
        "dimensions": [{"name": name, "score": score} for name, score in profile["dimensions"]],
    })
    diagnostic_title, hypotheses, questions = scenario["diagnostic"]
    result["diagnostic"].update({"title": diagnostic_title, "summary": "Working hypotheses for a human-led Diagnostic. These are not a root-cause finding or commercial decision.", "hypotheses": hypotheses, "open_questions": questions})
    result["questionnaire"]["questions"] = [{"classification": classification, "reason": reason, "question": question, "answer": answer, "prompt": question, "returned_answer": answer} for classification, reason, question, answer in scenario["questions"]]
    result["recommendation"].update({"rationale": f"{product} is the proposed route after the synthetic Diagnostic, questionnaire and human review.", "alternatives_not_selected": ["A different route would either leave the documented uncertainty unresolved or add delivery beyond the validated need."], "readiness": "ready"})
    scope_title, deliverables, milestones, exclusions = scenario["scope"]
    result["scope"].update({"title": scope_title, "summary": "Illustrative scope draft that requires authorised human approval before pricing is revealed.", "deliverables": deliverables, "phases": [{"id": f"phase-{index + 1}", "name": milestone, "duration": "Timing confirmed at approval", "deliverables": [deliverables[index]] if index < len(deliverables) else []} for index, milestone in enumerate(milestones)], "exclusions": exclusions, "assumptions": ["Synthetic stakeholders provide timely review and approved source material."], "dependencies": ["Final content, access and approvals are confirmed in the human scope review."], "milestones": milestones, "client_responsibilities": ["Name an accountable reviewer and provide feedback at agreed decision points."]})
    result["pricing"].update({"currency": "USD", "recommended_price": result["pricing"]["total"], "route_rationale": scenario["price"]})
    executive_summary, strategy_snapshot, closing_note = PROPOSAL_COPY[result["id"]]
    result["proposal"].update({"title": f"Proposal for {result['company_name']}", "problem_framing": executive_summary, "executive_summary": executive_summary, "strategy_snapshot": strategy_snapshot, "recommended_engagement": product, "scope_snapshot": "; ".join(result["scope"]["deliverables"]), "approved_scope": result["scope"]["summary"], "milestones": result["scope"]["milestones"], "investment": f"USD {result['pricing']['total']}", "investment_summary": f"Fixed investment: USD {result['pricing']['total']:,}. {result['pricing']['route_rationale']}", "assumptions": result["scope"]["assumptions"], "next_steps": ["Confirm the approved scope and assumptions.", "Name the client decision-maker and delivery contact.", "Approve the proposal to begin the agreed engagement."], "next_step": "Review and approve this synthetic proposal.", "closing_note": closing_note})

def apply_action(jid, action, role, actor, reason, edits=None):
    if _find(jid) is None: raise KeyError(jid)
    if action not in STAGES: raise ValueError("Unsupported journey action")
    state = _state.setdefault(jid, {"completed": [], "revealed": [], "approval_history": [], "toast": ""})
    expected = STAGES[len(state["completed"])] if len(state["completed"]) < len(STAGES) else None
    if action != expected: raise RuntimeError(f"Next required action is {expected}")
    if action in APPROVALS and role != "Authorized SimpliCreative reviewer": raise RuntimeError("Approval requires role Authorized SimpliCreative reviewer")
    if action == "import_transcript" and edits and isinstance(edits.get("transcript_text"), str):
        transcript = edits["transcript_text"].strip()
        if transcript:
            state["transcript_text"] = transcript
    state["completed"].append(action)
    if action.startswith("reveal_"): state["revealed"].append(action.removeprefix("reveal_"))
    if action in APPROVALS: state["approval_history"].append({"stage": APPROVALS[action], "role": role, "actor": actor, "reason": reason, "timestamp": datetime.now(timezone.utc).isoformat()})
    state["toast"] = f"{action.replace('_', ' ').title()} complete"
    return get_journey(jid)
