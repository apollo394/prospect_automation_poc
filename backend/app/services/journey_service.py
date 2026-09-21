from copy import deepcopy
from datetime import datetime, timezone
from app.core import store
from app.core.data_loader import governed_journeys

STAGES = ["prepare_diagnostic", "import_transcript", "generate_questionnaire", "review_returned_questionnaire", "approve_recommendation", "approve_scope", "reveal_pricing", "approve_pricing", "reveal_proposal", "approve_proposal"]
APPROVALS = {"approve_recommendation": "recommendation", "approve_scope": "scope", "approve_pricing": "pricing", "approve_proposal": "proposal"}
_state = {}


def _fixture_rows():
    if store.use_supabase():
        return store.list_journeys_payloads()
    return governed_journeys()

LEAD_PROFILES = {
    "cedar-strategy": {
        "company_name": "Cedar Strategy Group",
        "contact_name": "Maya Thompson",
        "contact_role": "VP, Growth",
        "website": "cedarstrategy.example",
        "campaign": "LinkedIn · SimpliSignals",
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
        "campaign": "LinkedIn · SimpliSignals",
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

ROUTE_META = {
    "cedar-strategy": {
        "route_decision": "optional_blueprint",
        "route_decision_summary": "Strategic uncertainty remains after the Diagnostic. SimpliBlueprint is the proposed first engagement before any implementation proposal.",
        "recommendation_summary": "SimpliBlueprint — strategy before build. Cedar still needs buyer, offer, and conversion path settled.",
        "alternatives": [
            {"name": "SimpliFoundation", "not_selected_because": "Custom implementation would start before strategic direction is approved."},
            {"name": "Templated WordPress", "not_selected_because": "Core positioning and message architecture are not yet validated."},
        ],
    },
    "atlas-health": {
        "route_decision": "direct_to_implementation",
        "route_decision_summary": "Strategy is clear enough to scope custom implementation. Blueprint is skipped; SimpliFoundation is the proposed first engagement.",
        "recommendation_summary": "SimpliFoundation — Direct-to-Foundation. Atlas needs a governed website foundation, not another strategy phase.",
        "alternatives": [
            {"name": "SimpliBlueprint", "not_selected_because": "Diagnostic and questionnaire evidence show enough strategic clarity to scope Foundation responsibly."},
            {"name": "Templated WordPress", "not_selected_because": "Custom IA, integrations, and measurement requirements exceed the productised boundary."},
        ],
    },
    "harbor-advisory": {
        "route_decision": "direct_to_implementation",
        "route_decision_summary": "Offer and positioning appear stable. Templated WordPress is the proposed route; Blueprint is not required.",
        "recommendation_summary": "Templated WordPress — bounded launch website with an approved conversion path.",
        "alternatives": [
            {"name": "SimpliBlueprint", "not_selected_because": "Positioning and proof points are already approved for a productised rebuild."},
            {"name": "SimpliFoundation", "not_selected_because": "No bespoke platform or integration needs justify a custom foundation engagement."},
        ],
    },
    "northstar-services": {
        "route_decision": "direct_to_implementation",
        "route_decision_summary": "Ongoing responsibility fits better than a new build. SimpliCARE is the proposed route; Blueprint is not required.",
        "recommendation_summary": "SimpliCARE — governed ongoing website care and optimisation cadence.",
        "alternatives": [
            {"name": "SimpliBlueprint", "not_selected_because": "Northstar is not buying net-new strategy work; the need is operational continuity."},
            {"name": "SimpliFoundation", "not_selected_because": "A one-off rebuild would reopen work the team is not requesting."},
        ],
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

# Client-safe proposal drafts modeled on GS-SALES-001/002/005/006 structure.
# Prices stay fixture-driven; copy never exposes internal economics.
PROPOSALS = {
    "cedar-strategy": {
        "subtitle": "SimpliBlueprint · strategic clarity before implementation",
        "gold_standard_ref": "GS-SALES-001",
        "opening_heading": "Your objective",
        "opening": "Cedar Strategy Group needs the website to help the right buyers understand the offer and take a qualified next step before the spring launch. Sales still leans on PDF follow-up because the current site does not make the offer easy to grasp.",
        "heard": [
            "Differentiation is hard to state cleanly in a crowded category.",
            "The homepage and priority pages do not carry a clear decision path.",
            "Leadership wants a scoped strategic answer before committing to a rebuild.",
            "Spring timing matters; the team needs a reusable direction, not open-ended discovery.",
        ],
        "opportunity": "The opportunity is to settle buyer, offer, proof, and conversion path before money is spent on design or build. SimpliBlueprint turns the Diagnostic evidence into an approved strategic decision Cedar can reuse.",
        "objectives": [
            "Name the primary buyer and the business result the website must support.",
            "Clarify positioning and the message architecture for priority pages.",
            "Define the conversion path and what “qualified” looks like.",
            "Produce a prioritised execution roadmap the team can approve or challenge.",
        ],
        "why_this_route": [
            "Implementation without strategic clarity would polish the wrong story.",
            "Blueprint keeps design and development out of scope until the decision is settled.",
            "The output is a governed decision package, not a premature build estimate.",
        ],
        "investigate": [
            "Buyer, offer, and decision-context synthesis from SimpliSignals, site, and call evidence",
            "Positioning and message architecture for the priority journey",
            "Conversion-path and priority-page blueprint",
            "Open questions, conflicts, and evidence gaps that still need human judgment",
        ],
        "deliverables": [
            "Buyer and offer synthesis with evidence citations",
            "Positioning and message architecture",
            "Conversion-path and priority-page blueprint",
            "Prioritised execution roadmap with handoff notes",
        ],
        "how_it_works": [
            "Kickoff and evidence alignment — confirm the working hypotheses and decision owners.",
            "Strategy working session — pressure-test buyer, offer, proof, and conversion path.",
            "Blueprint review and decision — Cedar approves, revises, or rejects the direction before any build work is sold.",
        ],
        "client_needs": [
            "An accountable decision-maker for strategic direction",
            "Access to current site, sales materials, and proof assets",
            "Timely feedback at the working session and Blueprint review",
        ],
        "after_engagement": [
            "Cedar leaves with an approved (or explicitly rejected) strategic direction.",
            "Any later Foundation, Templated WordPress, or CARE proposal must cite this Blueprint decision.",
            "No implementation work is implied by approving this proposal.",
        ],
        "closing_note": "This proposal gives Cedar a clear, reusable strategic decision—not a premature rebuild commitment.",
    },
    "atlas-health": {
        "subtitle": "SimpliFoundation · from approved need to launch-ready foundation",
        "gold_standard_ref": "GS-SALES-002",
        "opening_heading": "From strategy to implementation",
        "opening": "Atlas Health Partners needs a tailored website foundation that connects its priority audience journey, content ownership, and measurement requirements. Isolated page changes will not fix a system that needs coordinated architecture, messaging, and launch readiness.",
        "heard": [
            "Provider-partner enquiries from core service pages are the first journey to improve.",
            "Marketing needs a publishing workflow it can own after launch.",
            "HubSpot forms, lifecycle attribution, and consent-compliant analytics must work at go-live.",
            "Existing proof and service guides can be reused after review; the foundation still needs a governed build plan.",
        ],
        "opportunity": "SimpliFoundation turns the approved Diagnostic and scope into one governed implementation: strategic requirements, information architecture, message direction, custom design and build requirements, measurement, and launch readiness.",
        "objectives": [
            "Translate approved requirements into a solution blueprint marketing and operations can run.",
            "Design information architecture and message systems for the priority journeys.",
            "Specify custom design and implementation requirements for the Foundation build.",
            "Leave Atlas with measurement, governance, and a clear ownership route after launch.",
        ],
        "why_this_route": [
            "The need is coordinated foundation work, not a productised template swap.",
            "Blueprint alone would stop short of the implementation Atlas is ready to buy.",
            "CARE would maintain a foundation that does not yet exist in the required form.",
        ],
        "investigate": [
            "Strategic requirements and solution blueprint",
            "Information architecture, message system, and priority-page content direction",
            "Custom design and implementation requirements",
            "CRM, forms, analytics, consent, and launch-readiness plan",
        ],
        "deliverables": [
            "Strategic requirements and solution blueprint",
            "Information architecture, message system, and priority-page content direction",
            "Custom design and implementation requirements pack",
            "Measurement, governance, and launch-readiness plan",
            "Handoff notes for post-launch ownership",
        ],
        "how_it_works": [
            "Foundation discovery — lock journeys, integrations, content ownership, and success measures.",
            "Design and build specification — produce the architecture, message, and implementation requirements.",
            "Launch readiness review — confirm QA, measurement, responsibilities, and go-live criteria before handoff.",
        ],
        "client_needs": [
            "Named marketing and operations reviewers for architecture and content decisions",
            "HubSpot, analytics, and CMS access required for the approved integrations",
            "Approved source material for priority pages and proof assets",
            "Timely feedback at discovery, specification, and launch-readiness gates",
        ],
        "after_engagement": [
            "Atlas receives a launch-ready foundation with explicit ownership, not an undefined post-launch grey zone.",
            "Ongoing optimisation or CARE can be scoped separately after handoff.",
            "Work outside the approved Foundation boundary is reviewed before it is added.",
        ],
        "closing_note": "The work is structured around the approved outcome and responsibilities, with details confirmed at each decision point.",
    },
    "harbor-advisory": {
        "subtitle": "Templated WordPress · productised launch website",
        "gold_standard_ref": "GS-SALES-005",
        "opening_heading": "The opportunity",
        "opening": "Harbor Advisory already has a sufficiently defined offer and publishing environment. The site needs a clearer structure, credibility presentation, and conversion path—not a bespoke strategic foundation.",
        "heard": [
            "Core offer, positioning, and proof points are already approved.",
            "WordPress is the confirmed publishing environment.",
            "Launch pages needed: home, services, about, insights, and contact.",
            "Custom application work is out of bounds for this engagement.",
        ],
        "opportunity": "A Direct Templated WordPress engagement improves structure, credibility, and conversion inside a productised boundary, with a fixed page set and editor-ready handover.",
        "objectives": [
            "Configure a template system for the approved launch-page set.",
            "Stand up CMS, responsive build, and a clear contact conversion path.",
            "Apply baseline technical SEO and analytics configuration.",
            "Hand over an editor-ready site with a launch checklist.",
        ],
        "why_this_route": [
            "Strategy is stable enough that Blueprint is not the bottleneck.",
            "Foundation would add custom depth Harbor does not need for this launch.",
            "The productised route protects scope by keeping advanced integrations out unless separately approved.",
        ],
        "investigate": [
            "Content and page mapping for the five-page launch set",
            "Template configuration and conversion path",
            "Baseline SEO and analytics setup",
            "QA and launch checklist against the productised boundary",
        ],
        "deliverables": [
            "Configured template system and launch-page set",
            "CMS setup, responsive build, and contact conversion path",
            "Baseline technical SEO and analytics configuration",
            "Editor handover and launch checklist",
        ],
        "how_it_works": [
            "Content and page mapping — confirm sitemap, CTAs, and source content.",
            "Template configuration — build the approved page set inside the productised system.",
            "Quality assurance and launch — test, hand over, and close against the checklist.",
        ],
        "client_needs": [
            "Final approved copy and proof for the launch pages",
            "WordPress hosting access and DNS contacts",
            "A single reviewer for content and launch sign-off",
        ],
        "after_engagement": [
            "Harbor can publish inside the configured template without reopening strategy.",
            "Blog or other add-ons are quoted separately if requested later.",
            "Anything that breaks the productised boundary returns to commercial review.",
        ],
        "closing_note": "Any work outside the agreed template, page, and integration boundary will be reviewed separately before it is added.",
    },
    "northstar-services": {
        "subtitle": "SimpliCARE · governed ongoing website care",
        "gold_standard_ref": "GS-SALES-006",
        "opening_heading": "The opportunity",
        "opening": "Northstar Services Co. needs an operating rhythm so priority website updates and conversion improvements do not stall behind ad-hoc requests. The need is stewardship and evidence-led improvement, not a one-off rebuild.",
        "heard": [
            "First 90 days should improve landing-page update speed, content hygiene, and conversion reporting.",
            "Marketing leads approvals; operations supplies service updates.",
            "A simplified enquiry form on high-traffic service pages is an early experiment candidate.",
            "Rebuilds and new positioning must stay outside the CARE boundary unless separately approved.",
        ],
        "opportunity": "SimpliCARE establishes a monthly cadence with a visible backlog, clear approvals, performance review, and a hard line between CARE work and separate strategic or implementation scopes.",
        "objectives": [
            "Install monthly prioritisation and request intake.",
            "Deliver agreed content, page, and conversion updates inside the CARE boundary.",
            "Review performance and recommend the next evidence-led improvements.",
            "Keep backlog, responsibilities, and escalation visible to Northstar.",
        ],
        "why_this_route": [
            "The foundation exists; the bottleneck is ongoing ownership and pace.",
            "Blueprint or Foundation would reopen strategy or build work Northstar is not buying here.",
            "CARE keeps recurring work governed instead of treating every request as a project.",
        ],
        "investigate": [
            "Onboarding and backlog triage for the first 90 days",
            "Monthly delivery cadence and approver model",
            "Performance review and optimisation recommendations",
            "Escalation path for work that exceeds the CARE boundary",
        ],
        "deliverables": [
            "Monthly prioritisation and request intake",
            "Agreed content, page, and conversion updates",
            "Performance review and optimisation recommendations",
            "Transparent backlog, responsibilities, and escalation path",
        ],
        "how_it_works": [
            "Onboarding and backlog triage — capture priorities, owners, and the first sprint set.",
            "Monthly delivery cadence — ship approved CARE work and report what moved.",
            "Quarterly strategic review — separate CARE results from any new strategic or rebuild asks.",
        ],
        "client_needs": [
            "Marketing approver and operations content source named at kickoff",
            "Access to CMS, analytics, and the live request channel",
            "Feedback within the agreed monthly review window",
        ],
        "after_engagement": [
            "CARE continues on the approved cadence until Northstar changes or exits the service.",
            "Material new work, redesigns, or positioning projects are scoped outside CARE.",
            "Price, cadence, or responsibility changes require human commercial review.",
        ],
        "closing_note": "The service stays focused on the agreed cadence and backlog; material new work is reviewed before it is scheduled.",
    },
}

def reset_runtime():
    _state.clear()

def _hydrate_state(jid: str, item: dict) -> None:
    if jid in _state:
        return
    wf = item.get("workflow") or {}
    entry = {
        "completed": list(wf.get("completed_stages") or []),
        "revealed": list(wf.get("revealed_stages") or []),
        "approval_history": list(wf.get("approval_history") or []),
        "toast": wf.get("toast") or "",
    }
    if wf.get("transcript_text"):
        entry["transcript_text"] = wf["transcript_text"]
    _state[jid] = entry

def _find(jid):
    item = next((x for x in _fixture_rows() if x["id"] == jid), None)
    if item is not None:
        _hydrate_state(jid, item)
    return item

def list_journeys():
    journeys = [get_journey(item["id"]) for item in _fixture_rows()]
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
    route_meta = ROUTE_META[result["id"]]
    result["route_decision"] = route_meta["route_decision"]
    result["route_decision_summary"] = route_meta["route_decision_summary"]
    result["scoreapp"].update({
        "title": "SimpliSignals self-assessment",
        "campaign_context": profile["campaign"],
        "headline": profile["headline"],
        "overall_score": profile["score"],
        "dimensions": [{"name": name, "score": score} for name, score in profile["dimensions"]],
    })
    diagnostic_title, hypotheses, questions = scenario["diagnostic"]
    result["diagnostic"].update({"title": diagnostic_title, "summary": "Working hypotheses for a human-led Diagnostic. These are not a root-cause finding or commercial decision.", "hypotheses": hypotheses, "open_questions": questions})
    result["questionnaire"]["questions"] = [{"classification": classification, "reason": reason, "question": question, "answer": answer, "prompt": question, "returned_answer": answer} for classification, reason, question, answer in scenario["questions"]]
    alternatives = route_meta["alternatives"]
    result["recommendation"].update({
        "summary": route_meta["recommendation_summary"],
        "rationale": f"{product} is the proposed route after the synthetic Diagnostic, questionnaire, and human review.",
        "alternatives": alternatives,
        "alternatives_not_selected": [f"{item['name']}: {item['not_selected_because']}" for item in alternatives],
        "readiness": {"strategic": "ready", "commercial": "ready", "proposal": "ready"},
        "route_decision": route_meta["route_decision"],
    })
    scope_title, deliverables, milestones, exclusions = scenario["scope"]
    result["scope"].update({"title": scope_title, "summary": "Illustrative scope draft that requires authorised human approval before pricing is revealed.", "deliverables": deliverables, "phases": [{"id": f"phase-{index + 1}", "name": milestone, "duration": "Timing confirmed at approval", "deliverables": [deliverables[index]] if index < len(deliverables) else []} for index, milestone in enumerate(milestones)], "exclusions": exclusions, "assumptions": ["Synthetic stakeholders provide timely review and approved source material."], "dependencies": ["Final content, access and approvals are confirmed in the human scope review."], "milestones": milestones, "client_responsibilities": ["Name an accountable reviewer and provide feedback at agreed decision points."]})
    result["pricing"].update({"currency": "USD", "recommended_price": result["pricing"]["total"], "route_rationale": scenario["price"]})
    draft = PROPOSALS[result["id"]]
    profile = LEAD_PROFILES[result["id"]]
    total = result["pricing"]["total"]
    investment_label = "Monthly investment" if product == "SimpliCARE" else "Fixed investment"
    investment_summary = (
        f"{investment_label}: USD {total:,}. "
        "Illustrative synthetic figure for this demonstration; final commercial terms require human approval."
    )
    result["proposal"].update({
        "title": f"{product} Proposal for {result['company_name']}",
        "subtitle": draft["subtitle"],
        "gold_standard_ref": draft["gold_standard_ref"],
        "prepared_for": f"{profile['contact_name']}, {profile['contact_role']}",
        "prepared_by": "SimpliCreative · synthetic demonstration",
        "opening_heading": draft["opening_heading"],
        "opening": draft["opening"],
        "problem_framing": draft["opening"],
        "executive_summary": draft["opening"],
        "what_we_heard": draft["heard"],
        "opportunity": draft["opportunity"],
        "strategy_snapshot": draft["opportunity"],
        "objectives": draft["objectives"],
        "why_this_route": draft["why_this_route"],
        "recommended_engagement": product,
        "investigate": draft["investigate"],
        "included_scope": result["scope"]["deliverables"],
        "deliverables": draft["deliverables"],
        "scope_snapshot": "; ".join(result["scope"]["deliverables"]),
        "approved_scope": result["scope"]["summary"],
        "how_it_works": draft["how_it_works"],
        "milestones": result["scope"]["milestones"],
        "client_needs": draft["client_needs"],
        "client_responsibilities": result["scope"]["client_responsibilities"],
        "assumptions": result["scope"]["assumptions"],
        "exclusions": result["scope"]["exclusions"],
        "investment": f"USD {total}",
        "investment_summary": investment_summary,
        "investment_notes": [
            "Illustrative synthetic figure for this demonstration only.",
            "Client-facing proposals show the approved investment, not internal pricing controls.",
            "Payment schedule and start date are confirmed at human commercial approval.",
        ],
        "after_engagement": draft["after_engagement"],
        "next_steps": [
            "Confirm the approved scope, assumptions, and exclusions.",
            f"Name the decision-maker and delivery contact for {result['company_name']}.",
            "Approve this proposal to begin the agreed engagement.",
            "Provide the access and source material listed under client needs.",
        ],
        "next_step": "Review and approve this synthetic proposal.",
        "closing_note": draft["closing_note"],
        "boundary_note": (
            f"Structured after {draft['gold_standard_ref']}. Synthetic demonstration only — "
            "not a live client proposal. AI may not invent pricing, legal terms, or unapproved scope."
        ),
    })

def apply_action(jid, action, role, actor, reason, edits=None):
    item = _find(jid)
    if item is None: raise KeyError(jid)
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
    if store.use_supabase():
        base = deepcopy(item)
        base["workflow"] = {
            "completed_stages": list(state["completed"]),
            "revealed_stages": list(state["revealed"]),
            "approval_history": list(state["approval_history"]),
            "toast": state["toast"],
            **({"transcript_text": state["transcript_text"]} if state.get("transcript_text") else {}),
        }
        store.save_journey_payload(jid, base)
    return get_journey(jid)
