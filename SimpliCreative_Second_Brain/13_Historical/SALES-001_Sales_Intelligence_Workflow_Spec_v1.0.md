# **09 Sales Intelligence Workflow Spec**

Version: 1.0  
Classification: AI Intelligence Layer Workflow Specification  
Status: Active  
Owner: SimpliCreative  
Related Workflows: Lean Marketing Scorecard™, Executive Marketing Diagnostic, SimpliBlueprint, Proposal Workflow  
Primary Users: SimpliCreative Strategists, Sales Team, and AI Engineering System

## **Purpose**

This specification defines how SimpliCreative's AI Intelligence Layer creates, maintains, and uses prospect intelligence throughout the sales and Diagnostic process.

The Sales Intelligence system exists to help the human strategist enter conversations informed, preserve what is learned, distinguish evidence from assumption, and make better routing decisions.

It is not designed to create an exhaustive dossier on a prospect.

It should help answer:

What does the prospect believe is happening?

What do we currently know?

What does the available evidence suggest?

What remains unknown?

What should we validate during the Diagnostic?

What changed after speaking with the prospect?

Does the problem fit SimpliCreative?

Would deeper strategic work resolve meaningful uncertainty?

Is the prospect commercially ready to move forward?

Should a proposal be issued now?

The governing principle is:

`AI_ORGANIZES_AND_SYNTHESIZES. HUMANS_MAKE_COMMERCIAL_AND_STRATEGIC_DECISIONS.`

---

## **1\. Core Architecture**

The Sales Intelligence Workflow is:

`Prospect Record + CRM + Scorecard + Approved Public Research + FAST Evidence`

→

`Sales Intelligence Worksheet`

→

`Executive Diagnostic Brief`

→

`Human Executive Marketing Diagnostic`

→

`Transcript + Strategist Notes`

→

`Post-Call Intelligence Reconciliation`

→

`Updated Sales Intelligence Worksheet`

→

`Diagnostic Record`

→

`Blueprint Readiness Assessment`

→

`Commercial Readiness Assessment`

→

`Proposal Readiness Assessment`

→

`Human Route Decision`

The system should accumulate intelligence.

It should not repeatedly reconstruct the opportunity from scratch.

---

## **2\. Sales Intelligence Worksheet**

The Sales Intelligence Worksheet is the persistent intelligence record for the prospect or opportunity.

`SALES_INTELLIGENCE_WORKSHEET = PERSISTENT_INTELLIGENCE_RECORD`

It begins before the Diagnostic and is updated as new information becomes available.

It is not client-facing.

It should preserve both what SimpliCreative currently understands and how that understanding changed.

---

## **3\. Executive Diagnostic Brief**

The Executive Diagnostic Brief is the strategist-facing pre-call view generated from the current Sales Intelligence Worksheet.

`EXECUTIVE_DIAGNOSTIC_BRIEF = DERIVED_PRE_CALL_VIEW`

It is not a second research workflow.

It should surface the most useful information for conducting the Diagnostic without forcing the strategist to review the entire intelligence record.

The Brief should never become more certain than its underlying evidence.

`BRIEF_MUST_NOT_RECREATE_RESEARCH_INDEPENDENTLY`

`BRIEF_MUST_PRESERVE_VALIDATION_STATUS`

`BRIEF_MUST_NOT_INCREASE_CERTAINTY`

If material intelligence changes before the Diagnostic, regenerate the Brief.

---

## **4\. Required Prospect Identity**

Before research begins, establish sufficient identity to avoid researching the wrong organization or individual.

Where available, capture:

Prospect name.

Organization.

Role.

Organization website.

Email.

LinkedIn or other approved professional profile.

CRM ID.

Opportunity ID.

Lead source.

Scorecard ID.

Existing client or relationship status.

Known referral source.

Known associated stakeholders.

If organization identity is ambiguous, resolve it before substantial research.

Do not merge similarly named prospects or organizations without sufficient evidence.

---

## **5\. Lead Source**

Preserve how the opportunity entered SimpliCreative.

Examples may include:

Lean Marketing Scorecard™.

Organic inquiry.

Referral.

Partner referral.

Existing relationship.

Past client.

Event.

Outbound activity.

Content.

Other known source.

Lead source may provide useful relationship context.

It does not establish fit, trust, authority, or likelihood to buy.

`LEAD_SOURCE != COMMERCIAL_READINESS`

---

## **6\. Required Sales Intelligence Context**

The Worksheet should capture relevant intelligence across these areas:

| Intelligence Area | What It Should Preserve |
| ----- | ----- |
| Organization | Known business and organizational context |
| Prospect | Role and known professional context |
| Relationship | Prior interactions and relevant history |
| Lead Source | How the opportunity originated |
| Stated Problem | What the prospect believes is wrong |
| Desired Outcome | What they want to improve |
| Why Now | Known trigger, pressure, or timing |
| Scorecard | Relevant self-assessment signals |
| Website | Observable website evidence |
| FAST | Preliminary Flexible, Accessible, Strategic, Trackable observations |
| Marketing Ecosystem | Relevant channels, systems, partners, and fragmentation |
| Technology | Relevant observable technology signals |
| Authority & Proof | Public credibility and evidence signals |
| Leadership Context | Relevant public organizational context |
| Working Hypotheses | What may be creating the friction |
| Supporting Evidence | Evidence consistent with each hypothesis |
| Contradicting Evidence | Evidence challenging each hypothesis |
| Strategic Unknowns | Questions that still need answers |
| Fit | Evidence relevant to SimpliCreative fit |
| Decision Environment | Known stakeholders, authority, process, timing, constraints |
| Trust | Evidence of confidence in SimpliCreative's reasoning |
| Blueprint Readiness | Whether deeper strategy may be appropriate |
| Commercial Readiness | Whether the prospect appears ready to advance commercially |
| Proposal Readiness | Whether a proposal should be issued now |
| Route | Human-approved next step |

Not every field will be known before the Diagnostic.

Unknown information should remain unknown.

---

## **7\. Approved Pre-Call Research**

AI may conduct approved public research when it directly supports the Diagnostic or route decision.

Potential research includes:

Organization context.

Business model.

Services or programs.

Publicly stated audiences.

Public positioning.

Leadership information relevant to the opportunity.

Observable website evidence.

Public marketing activity.

Public content.

Authority and credibility signals.

Relevant technology signals.

Publicly visible partners.

Search visibility where appropriate.

Other public information directly relevant to the Diagnostic.

The governing rule is:

`RESEARCH_MUST_SUPPORT_DIAGNOSIS_OR_ROUTE_DECISION`

Do not collect information merely because it is available.

---

## **8\. Public Research Boundaries**

Do not use the Sales Intelligence Workflow to create invasive personal profiles.

AI should not:

Speculate about private motivations.

Infer sensitive personal characteristics.

Invent organizational politics.

Infer financial distress without evidence.

Infer purchase authority solely from job title.

Infer budget from organization size.

Infer willingness to buy from website behavior.

Treat social activity as proof of personal preference.

Represent unverifiable claims as fact.

Research should remain professionally relevant to the opportunity.

---

## **9\. FAST Pre-Scan**

Where appropriate, the system may perform a preliminary FAST evidence scan.

### **Flexible**

Potential evidence may include:

CMS signals.

Visible editing or publishing structure.

Landing-page patterns.

Reusable page structures.

Technical dependencies visible from approved evidence.

CMS detection alone does not establish marketer autonomy.

### **Accessible**

Potential evidence may include:

Automated accessibility observations.

Responsive behavior.

Visible usability concerns.

Automated tools do not establish legal compliance.

### **Strategic**

Potential evidence may include:

Audience clarity.

Positioning.

Messaging.

Offers.

Proof.

Buyer education.

Conversion paths.

Discoverability.

Content relationships.

Website role within visible marketing activity.

These are observations, not automatic causal conclusions.

### **Trackable**

Potential evidence may include:

Analytics technology.

Tag-management technology.

Visible forms.

CRM or marketing automation signals.

Observable conversion mechanisms.

Technology installation does not establish meaningful measurement.

---

## **10\. Scorecard Intelligence**

When a Lean Marketing Scorecard™ exists, preserve:

Overall result.

Discoverability result.

Credibility result.

Performance result.

Agility result.

Relevant prospect responses.

Date completed.

Any known context attached to the responses.

The Scorecard reflects prospect self-assessment.

It is useful evidence about how the prospect experiences the marketing environment.

It is not an independent diagnosis.

`SCORECARD_RESULT != ROOT_CAUSE`

---

## **11\. Relationship and CRM Intelligence**

Retrieve relevant relationship history before the Diagnostic.

This may include:

Previous conversations.

Prior opportunities.

Previous proposals.

Known referrals.

Past engagements.

Relevant emails or CRM notes.

Known stakeholder relationships.

Prior stated objectives.

Previous objections.

Known timing.

Prior decisions.

Do not assume old information remains current.

Preserve dates and source context.

Material historical information should be validated when it affects the current opportunity.

---

## **12\. Working Hypotheses**

The system may generate working hypotheses from available evidence.

Use:

`SYMPTOM → POSSIBLE CONNECTION → HYPOTHESIS → SUPPORTING EVIDENCE → CONTRADICTING EVIDENCE → STRATEGIC QUESTION`

Example structure:

Prospect symptom: Paid campaigns are producing insufficient qualified demand.

Possible connection: Paid attention may not be aligning with the landing experience or buyer expectations.

Working hypothesis: There may be a disconnect between campaign promise, positioning, credibility, and the conversion experience.

Supporting evidence: Relevant observable evidence.

Contradicting evidence: Relevant evidence that challenges the hypothesis.

Strategic question: What happens between paid arrival and qualified business action, and where does the evidence show friction?

The hypothesis exists to improve investigation.

It is not the answer.

---

## **13\. Hypothesis Record**

Each material hypothesis should preserve:

Hypothesis ID.

Related symptom.

Hypothesis statement.

Supporting evidence.

Contradicting evidence.

Related strategic question.

Source references.

Current validation status.

Confidence.

Date created.

Last updated date.

Pre-call or post-call state.

Human review status.

A hypothesis may become stronger after the Diagnostic without becoming a validated root cause.

---

## **14\. Validation Status**

Use the agency-wide validation taxonomy.

`OBSERVED`

`CLIENT_REPORTED`

`HYPOTHESIS`

`DIRECTIONAL`

`VALIDATED`

`PARTIALLY_VALIDATED`

`CONTRADICTED`

`INSUFFICIENT_EVIDENCE`

`UNKNOWN`

Do not create a competing sales-specific validation taxonomy.

`VALIDATION_STATUS_MUST_SURVIVE_SYNTHESIS`

Summarizing evidence must not increase certainty.

---

## **15\. Material Finding Record**

For material research findings, preserve:

| Field | Requirement |
| ----- | ----- |
| Finding ID | Unique identifier |
| Finding | What was found |
| Source | Where it came from |
| Source Date | When the source information originated where known |
| Retrieval Date | When SimpliCreative retrieved it |
| Evidence | Supporting evidence |
| Validation Status | Current status |
| Validation Basis | Why that status applies |
| Contradicting Evidence | Evidence that challenges it |
| Confidence | AI or human confidence, separate from evidence |
| Related Hypothesis | Relevant hypothesis ID |
| Strategic Question | What question the finding helps answer |
| Pre/Post Call | When it entered the intelligence record |
| Human Review Status | Whether a human has reviewed it |

AI confidence should never replace evidence quality.

`AI_CONFIDENCE != EVIDENCE`

---

## **16\. Pre-Call Versus Post-Call Intelligence**

The system must preserve when intelligence became known.

A pre-call observation should not later appear as though the prospect personally confirmed it unless they actually did.

Likewise, a prospect statement should not be represented as independently observed evidence.

At minimum, distinguish:

`PRE_CALL_RESEARCH`

`PROSPECT_REPORTED`

`POST_CALL_AI_INTERPRETATION`

`STRATEGIST_INTERPRETATION`

`HUMAN_VALIDATED_CONCLUSION`

This allows the system to reconstruct how understanding changed.

---

## **17\. Prospect Language**

Preserve important prospect language when it materially improves understanding.

This may include how they describe:

The problem.

Business pressure.

Leadership expectations.

Desired outcome.

Internal friction.

Marketing performance.

Their website.

Their team.

Vendors.

Measurement.

Past attempts.

Concerns.

Decision criteria.

Do not replace all prospect language with AI-generated abstractions.

The actual language can become important later in Blueprint, messaging, proposal development, and relationship context.

---

## **18\. Strategic Unknowns**

The Worksheet should explicitly preserve what SimpliCreative does not yet know.

Examples include:

Unclear business objective.

Unclear buyer.

Unclear purchase authority.

Unknown implementation constraints.

Unknown measurement quality.

Unknown CRM reliability.

Unknown leadership expectation.

Unclear reason for performance change.

Unknown partner responsibilities.

Unclear strategic ownership.

Unknown timing.

Unknown budget or investment context where commercially relevant.

Unknowns are not failures in the intelligence system.

They tell the strategist what needs validation.

---

## **19\. Executive Diagnostic Brief Generation**

Generate the Executive Diagnostic Brief from the current Sales Intelligence Worksheet.

The Brief should be concise enough to use immediately before and during the call.

It should typically include:

Prospect and organization snapshot.

Relationship and lead-source context.

Stated problem.

Desired outcome.

Why-now context.

Relevant Scorecard signals.

Highest-value FAST observations.

Relevant marketing ecosystem observations.

Three to five working hypotheses.

Important supporting evidence.

Important contradicting evidence.

Strategic unknowns.

Five to seven priority questions.

Fit considerations.

Risk or non-fit considerations.

Important evidence limitations.

Relevant promises or commitments already made.

The Brief should prioritize what changes the conversation.

---

## **20\. Question Generation**

Diagnostic questions should follow from the current intelligence.

Questions should help:

Validate known information.

Resolve conflicts.

Test hypotheses.

Understand business impact.

Clarify why now.

Understand leadership pressure.

Clarify marketing complexity.

Understand execution constraints.

Clarify measurement.

Identify decision stakeholders.

Determine strategic uncertainty.

Evaluate fit.

Avoid asking questions whose reliable answers already exist unless confirmation is required.

The strategist does not need to ask every generated question.

---

## **21\. Human Diagnostic**

The Executive Marketing Diagnostic remains human-led.

The strategist uses the Brief as context, not as a script.

During the conversation, the strategist determines which questions matter, which threads deserve deeper exploration, which assumptions appear wrong, and where the prospect's reality changes the pre-call interpretation.

AI does not conduct the final Diagnostic autonomously.

---

## **22\. Post-Call Intelligence Reconciliation**

After the Diagnostic, use the transcript and strategist notes to compare pre-call intelligence with what was actually learned.

For each material item, determine whether the conversation:

Confirmed it.

Corrected it.

Expanded it.

Contradicted it.

Introduced new information.

Introduced new evidence.

Introduced a new hypothesis.

Resolved an unknown.

Created a new unknown.

Changed its strategic importance.

Do not silently overwrite the pre-call state.

Preserve the evolution of understanding.

---

## **23\. Prospect Corrections**

When the prospect corrects information, preserve:

What SimpliCreative previously understood.

The source of that understanding.

What the prospect corrected.

The prospect's revised information.

Date of correction.

Whether independent validation is required.

Strategic impact of the correction where material.

A client or prospect correction should improve the record without erasing how the earlier misunderstanding occurred.

---

## **24\. Post-Call Hypothesis Review**

After the Diagnostic, review each material hypothesis.

Possible outcomes include:

Still a working hypothesis.

Strengthened.

Weakened.

Partially supported.

Contradicted.

Requires additional evidence.

Ready for deeper Blueprint investigation.

Do not automatically mark a hypothesis `VALIDATED` because the prospect agrees with it.

Prospect agreement is client-reported support unless sufficient validation exists.

---

## **25\. Diagnostic Record**

The Diagnostic Record is the approved summary of what SimpliCreative learned and concluded from the Diagnostic.

The Sales Intelligence Worksheet remains the broader intelligence record behind it.

The Worksheet may contain research, historical context, hypotheses, contradictions, and other material that does not belong in the approved Diagnostic summary.

The Diagnostic Record should draw from the updated Worksheet and human strategist interpretation.

It should not independently recreate the evidence.

---

## **26\. Fit Assessment**

The system may surface evidence relevant to fit.

Potential strong-fit signals include:

Established service organization.

Lean internal marketing capacity relative to responsibilities.

Active marketing.

Fragmented execution.

Leadership accountability.

Website dependency.

Multiple stakeholders or partners.

Execution friction.

Measurement friction.

Strategic complexity.

Need for execution.

Potential non-fit signals include:

Primarily product or ecommerce problem outside SimpliCreative's core expertise.

Very early-stage organization without validated fundamentals.

Primarily inexpensive production needs.

Predetermined tactic regardless of evidence.

No realistic authority, capacity, or investment.

Required expertise outside SimpliCreative's capabilities.

Unsupported guarantee expectations.

AI may organize these signals.

A human makes the final fit decision.

---

## **27\. Blueprint Readiness**

Blueprint Readiness asks:

“Would deeper strategic analysis resolve material unknowns that prevent us from responsibly defining the implementation path?”

Potential indicators include:

Material root cause remains uncertain.

Audience requires validation.

Positioning requires validation.

Offer architecture is unclear.

Messaging is materially unresolved.

Buyer journey is unclear.

Website role is unresolved.

Information architecture cannot yet be responsibly defined.

Discoverability questions materially affect implementation.

Measurement strategy is unresolved.

Multiple ecosystem problems require prioritization.

The client has a strategy but execution reveals unresolved strategic dependencies.

Blueprint Readiness does not mean the prospect is commercially ready.

`BLUEPRINT_FIT != PROPOSAL_READINESS`

---

## **28\. Commercial Readiness**

Commercial Readiness asks:

“Does the opportunity appear sufficiently developed for a commercial next step?”

Evaluate relevant evidence around:

Problem importance.

Why now.

Authority.

Stakeholder involvement.

Timing.

Trust.

Willingness to invest.

Strategic fit.

Internal capacity to act.

Known decision process.

Known constraints.

The system may recommend:

`READY`

`DEVELOPING`

`NOT_READY`

The human approves the final classification.

Commercial readiness is not a prediction that the prospect will buy.

---

## **29\. Trust Intelligence**

Trust should be grounded in observable behavior or explicit prospect language.

Useful signals may include the prospect:

Acknowledging that SimpliCreative surfaced a meaningful issue.

Connecting our observation to a business consequence.

Asking deeper questions about our reasoning or methodology.

Sharing information that materially deepens the conversation.

Discussing internal stakeholders or implementation realities.

Asking what Blueprint would resolve.

Asking how SimpliCreative would approach implementation.

Explicitly expressing confidence in the strategic reasoning.

Preserve important prospect language where available.

Do not infer trust from:

Politeness.

Meeting length.

Enthusiasm alone.

Job title.

Company size.

A proposal request alone.

Email response speed alone.

`POLITENESS != TRUST`

---

## **30\. Proposal Readiness**

Proposal Readiness asks:

“Should SimpliCreative issue a proposal now?”

Possible recommendations:

`SEND_NOW`

`FOLLOW_UP`

`NURTURE`

`NOT_APPLICABLE`

Consider:

Fit.

Blueprint or implementation relevance.

Commercial readiness.

Known decision stakeholders.

Required scope information.

Outstanding questions.

Material objections.

Timing.

Existing commitments.

Whether another conversation is required.

A proposal request alone does not establish proposal readiness.

`PROPOSAL_REQUEST != COMMERCIAL_READINESS`

The human makes the final proposal decision.

---

## **31\. Decision Environment**

Where known, preserve relevant information about how the decision will be made.

This may include:

Primary contact.

Decision maker.

Approver.

Influencers.

Other stakeholders.

Procurement requirements.

Timing.

Budget process where explicitly known.

Internal dependencies.

Competing priorities.

Other providers being considered where prospect-reported.

Do not infer decision authority from title alone.

`JOB_TITLE != PURCHASE_AUTHORITY`

---

## **32\. Route Decision**

After the Diagnostic and readiness assessments, a human determines the route.

Possible routes include:

SimpliBlueprint.

Direct-to-Foundation Scoping.

Templated WordPress.

Guidance / Nurture.

Referral / Close.

Follow-up conversation.

Proposal workflow where appropriate.

The route should follow the evidence and approved offer architecture.

AI may recommend a route.

AI does not finalize it.

---

## **33\. Proposal Handoff**

When the human approves proposal generation, provide the proposal workflow with only approved commercial and strategic context.

Relevant handoff information may include:

Approved route.

Prospect and organization.

Problem.

Desired outcome.

Why now.

Relevant Diagnostic conclusion.

Approved scope context.

Known stakeholders.

Known constraints.

Known timing.

Known commercial considerations.

Approved pricing inputs.

Commitments already made.

Outstanding conditions.

Do not allow proposal generation to introduce a new strategy or scope.

---

## **34\. Source Hierarchy**

Sales Intelligence should follow the agency-wide source hierarchy.

Within the prospect context, prefer:

Current prospect statements and approved human notes.

Current CRM and relationship records.

Current Scorecard data.

Current approved research.

Current observable website evidence.

Current relevant public sources.

Historical relationship information.

Older research.

Raw AI output.

AI interpretation.

When sources conflict, preserve the conflict.

Do not resolve material disagreement solely by source ranking when human review is required.

`SOURCE_CONFLICT_REQUIRES_HUMAN_REVIEW`

---

## **35\. Source Freshness**

Time matters in sales intelligence.

Record source and retrieval dates where appropriate.

A leadership role may change.

A service may be discontinued.

A website may be updated.

An old CRM note may no longer reflect the opportunity.

A previous objection may no longer exist.

The system should prefer current evidence when the underlying fact is time-sensitive.

Historical evidence should remain available when it explains relationship context.

---

## **36\. Evidence Versus Interpretation**

The system must preserve the distinction between:

`SOURCE_REPORTED_THIS`

`AI_CALCULATED_THIS`

`AI_INTERPRETED_THIS`

`PROSPECT_REPORTED_THIS`

`STRATEGIST_INTERPRETED_THIS`

`SIMPLICREATIVE_APPROVED_THIS_CONCLUSION`

These are different forms of knowledge.

An AI synthesis should not become an observed fact merely because it is stored in the Second Brain.

---

## **37\. Summarization Rules**

When Sales Intelligence is summarized into a Brief, Diagnostic Record, proposal input, or future context:

Preserve material validation status.

Preserve meaningful qualifications.

Preserve unresolved conflicts.

Preserve important unknowns.

Preserve source boundaries.

Do not increase certainty.

Do not transform prospect statements into independent validation.

Do not transform public signals into prospect motivations.

The governing rule is:

`SUMMARIZATION_MUST_NOT_INCREASE_CERTAINTY`

---

## **38\. Human Corrections**

If the strategist corrects AI-generated Sales Intelligence, preserve the correction when it materially affects future understanding.

Useful corrections may involve:

Wrong organization.

Wrong role.

Incorrect interpretation.

Incorrect hypothesis.

Misclassified fit.

Misunderstood prospect statement.

Incorrect readiness assessment.

Incorrect source relationship.

Incorrect route recommendation.

The corrected human judgment becomes authoritative for the current opportunity unless later evidence changes it.

---

## **39\. Client Isolation**

Prospect and client-specific intelligence must remain bound to that organization.

Do not use one prospect's:

Pricing information.

Internal problems.

Stakeholder dynamics.

Performance data.

Messaging.

Strategy.

Buying behavior.

Objections.

Confidential information.

as evidence about another prospect.

Cross-client learning requires deliberate abstraction and approval through the agency knowledge process.

`PROSPECT_PATTERN != AGENCY_RULE`

`CLIENT_SPECIFIC_FINDING != CROSS_CLIENT_BEST_PRACTICE`

---

## **40\. AI Permissions**

AI may:

Retrieve approved prospect context.

Retrieve relevant CRM history.

Analyze Scorecard responses.

Perform approved public research.

Perform preliminary FAST evidence collection.

Organize source evidence.

Generate working hypotheses.

Surface contradicting evidence.

Identify strategic unknowns.

Draft Diagnostic questions.

Generate the Executive Diagnostic Brief.

Process the Diagnostic transcript.

Extract material prospect language.

Reconcile pre-call and post-call intelligence.

Update draft Sales Intelligence records.

Recommend Blueprint Readiness.

Recommend Commercial Readiness.

Recommend Proposal Readiness.

Recommend routing.

Prepare proposal handoff context after human approval.

---

## **41\. AI Restrictions**

AI may not:

Make the final fit decision.

Declare a root cause from pre-call research.

Represent hypotheses as established facts.

Infer private prospect motivations without evidence.

Infer sensitive personal characteristics.

Determine purchase authority from title alone.

Determine trust from politeness.

Determine budget from organization size.

Promise marketing outcomes.

Determine accessibility compliance.

Guarantee SEO/AEO/GEO performance.

Make final scope decisions.

Make final pricing decisions.

Issue a proposal without human approval.

Make the final commercial-readiness decision.

Make the final proposal-readiness decision.

Make the final route decision.

Send strategic or commercial conclusions externally without human approval.

---

## **42\. Human Review Requirements**

Human review is required before:

Final fit classification.

Final Diagnostic conclusion.

Final Blueprint Readiness decision.

Final Direct-to-Foundation route.

Final Templated WordPress route.

Final Commercial Readiness classification.

Final Proposal Readiness decision.

Final proposal generation or delivery.

Final pricing.

Final scope.

External strategic conclusions.

Any decision involving unresolved material source conflict.

---

## **43\. Permanent Sales Intelligence Guardrails**

`AI_CONFIDENCE != EVIDENCE`

`SCORECARD_RESULT != ROOT_CAUSE`

`AUTOMATED_SCAN != VALIDATED_CONCLUSION`

`PUBLIC_SIGNAL != CLIENT_MOTIVATION`

`JOB_TITLE != PURCHASE_AUTHORITY`

`PROPOSAL_REQUEST != COMMERCIAL_READINESS`

`POLITENESS != TRUST`

`CORRELATION != CAUSATION`

`BLUEPRINT_FIT != PROPOSAL_READINESS`

`PROSPECT_PATTERN != AGENCY_RULE`

`SUMMARIZATION_MUST_NOT_INCREASE_CERTAINTY`

`CLIENT_SPECIFIC_FINDING != CROSS_CLIENT_BEST_PRACTICE`

`PRE_CALL_RESEARCH != SALES_CONCLUSION`

`RESEARCH_MUST_SUPPORT_DIAGNOSIS_OR_ROUTE_DECISION`

`BRIEF_MUST_PRESERVE_VALIDATION_STATUS`

`HUMAN_APPROVAL_REQUIRED_FOR_EXTERNAL_DELIVERY`

---

## **44\. Workflow Completion**

The Sales Intelligence Workflow has done its job when the strategist can clearly answer:

Who is this prospect and organization?

What do they believe the problem is?

Why does it matter now?

What do we know from evidence?

What has the prospect told us?

What are we hypothesizing?

What evidence supports or challenges those hypotheses?

What remains unknown?

What changed because of the Diagnostic?

Does the situation fit SimpliCreative?

Would deeper strategic work resolve material uncertainty?

Is the prospect commercially ready?

Should a proposal be issued?

What is the appropriate next route?

Why?

The system does not need perfect information.

It needs enough reliable, appropriately qualified intelligence for the human to make a responsible decision.

---

## **Sales Intelligence Flow at a Glance**

| Phase | Intelligence Job | Output |
| ----- | ----- | ----- |
| Initialize | Establish correct prospect and organization | Prospect identity |
| Retrieve | Gather CRM, relationship, and Scorecard context | Existing intelligence |
| Research | Gather only relevant approved public evidence | Research evidence |
| Hypothesize | Connect symptoms to questions worth testing | Working hypotheses |
| Assemble | Create persistent opportunity intelligence | Sales Intelligence Worksheet |
| Prepare | Surface what the strategist needs for the call | Executive Diagnostic Brief |
| Diagnose | Human tests the intelligence against prospect reality | Transcript \+ strategist notes |
| Reconcile | Compare pre-call assumptions with what was learned | Updated Sales Intelligence Worksheet |
| Conclude | Human validates the Diagnostic understanding | Diagnostic Record |
| Assess | Evaluate strategic and commercial next-step readiness | Readiness assessments |
| Route | Human determines what happens next | Approved route |
| Handoff | Transfer approved context when commercial action is warranted | Proposal or next-stage context |

The standard for Sales Intelligence is not:

“How much can we learn about this prospect before the call?”

It is:

“Can we give the strategist the right context to have a better conversation, preserve what the evidence actually supports, learn from what the prospect tells us, and make the next decision without confusing research, inference, and confidence with truth?”

I would lock `09` here and move next to the Templated WordPress delivery system.

