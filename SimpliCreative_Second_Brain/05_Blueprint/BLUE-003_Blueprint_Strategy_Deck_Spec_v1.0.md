# **Blueprint Strategy Deck Generation Spec**

Version: 1.0  
Classification: AI Intelligence Layer Workflow Specification  
Status: Active  
Owner: SimpliCreative  
Related Workflow: SimpliBlueprint  
Primary User: SimpliCreative Strategist

Purpose: Generate the first draft of the client-facing Blueprint Strategy Deck for strategist review, editing, and approval.

The AI-generated deck must summarize the most important Blueprint findings in an executive-friendly format focused on:

`WHAT WE FOUND → WHY IT MATTERS → WHAT HAPPENS NEXT`

The deck is the executive presentation layer of the approved Blueprint analysis. It does not replace the Blueprint Report and must not create new strategic conclusions that are not supported by the Blueprint record.

The Blueprint Report remains the deeper working document containing evidence, analysis, strategic conclusions, recommendations, implementation requirements, measurement requirements, supporting detail, and relevant limitations.

The Strategy Deck helps the client understand the strategic story.

The Report helps the client and implementation teams understand the evidence and execution detail behind that story.

## **Required Inputs**

| Input | Purpose |
| ----- | ----- |
| Approved / Current Blueprint Report Draft | Primary source for synthesized findings, recommendations, and implementation logic |
| Blueprint Finding & Evidence Records | Preserve evidence, validation status, validation basis, and source traceability |
| Recommendation Records | Retrieve approved priorities and recommendations |
| Client Business Objective | Anchor the deck around the business outcome |
| Marketing Objective | Define what marketing is intended to influence or improve |
| Website Objective | Define the website’s role where applicable |
| Diagnostic Record | Preserve the original problem and why the engagement began |
| Updated Sales Intelligence Worksheet | Preserve broader client intelligence, business context, and decision environment |
| Personalized Questionnaire Responses | Client-specific context and stated priorities |
| Client Strategy Decisions | Approved positioning, audience, offer, messaging, and other strategic conclusions |
| Measurement Strategy | Define how progress and outcomes should be evaluated |
| Implementation Blueprint | Translate strategy into executable next steps |
| Priority Statuses | FIX\_NOW / FIX\_NEXT / MONITOR / DO\_NOT\_PRIORITIZE\_YET |
| Strategic Unknowns | Preserve unresolved questions and limitations |
| Client Constraints | Budget, timing, capacity, systems, stakeholders, dependencies |
| Approved Claims / Proof | Prevent unsupported proof, metrics, or performance claims |
| Report Section References | Map slides to deeper supporting detail |
| Brand Voice & Editorial Standards | Govern SimpliCreative tone and language |
| Branded Presentation Template | Govern approved visual structure and hierarchy |
| Previous Strategy Deck Examples | Structure and quality reference only |
| Strategy Session Objective | Define what the strategist needs the client to understand, decide, or approve |
| Human Approval Requirements | Define what cannot leave draft state without strategist approval |

The Strategy Deck should not be generated directly from raw research, individual tool outputs, transcripts, automated scans, or unsynthesized findings.

Raw evidence must first pass through the Blueprint evidence, validation, analysis, prioritization, and recommendation process.

The governing rule is:

`RAW_RESEARCH_DOES_NOT_GENERATE_CLIENT_STRATEGY_DECK`

## **Preferred Structured Input Object**

Before generating slides, the system should assemble a structured Deck Generation Context.

| Field | Example / Requirement |
| ----- | ----- |
| Client\_ID | Stable client identifier |
| Client\_Name | CounterFind |
| Blueprint\_ID | BP-2026-014 |
| Primary\_Business\_Objective | Generate more qualified inbound demand |
| Primary\_Marketing\_Objective | Improve qualified inbound opportunity generation |
| Website\_Objective | Support discovery, credibility, conversion, and measurement |
| Original\_Problem | Website currently functions primarily as a brochure |
| Desired\_Outcome | Website supports qualified demand and measurable marketing impact |
| Top\_Findings | Ranked list of supported findings |
| Finding\_IDs | Linked Blueprint Finding & Evidence Records |
| Validation\_Status\_Per\_Finding | Current approved status |
| Validation\_Basis | Why each status is justified |
| Supporting\_Evidence | Evidence linked to each finding |
| Business\_Implication | Why each finding matters |
| Priority | Fix Now / Fix Next / Monitor / Do Not Prioritize Yet |
| Recommendations | Approved recommendations |
| Recommendation\_IDs | Linked Recommendation Records |
| Implementation\_Requirements | What execution requires |
| Dependencies | What must happen first |
| Success\_Measures | How progress should be evaluated |
| Measurement\_Limitations | Known measurement constraints |
| Strategic\_Unknowns | Remaining unresolved questions |
| Client\_Decisions\_Required | Decisions the client must make |
| Constraints | Timing, systems, stakeholders, scope, capacity |
| Report\_Section\_References | Where deeper detail lives |
| Approved\_Claims | Approved proof and metrics |
| Strategy\_Session\_Objective | Purpose of the presentation |
| Deck\_Template\_ID | Current approved SimpliCreative presentation template |
| Human\_Approver | Assigned strategist |

If a required input is unavailable, the system should preserve the gap rather than inventing information.

## **AI Selection Logic**

The AI should not simply copy every finding from the Blueprint Report into slides.

Candidate findings should be ranked using:

`Strategic Importance + Business Impact + Evidence Strength + Decision Relevance + Implementation Priority`

The system should prefer findings that materially change what the client should understand, decide, prioritize, or do.

A finding should generally receive Strategy Deck prominence when it answers at least one of these questions:

What is getting in the way of the client’s objective?

What does the client need to understand differently?

What creates a meaningful business, buyer, operational, or marketing consequence?

What deserves priority?

What materially changes the implementation plan?

What must happen before implementation can succeed?

What decision does the client need to make?

Low-level audit findings should remain in the Blueprint Report unless they materially affect one of these questions.

The deck should not become a catalog of technical, SEO, accessibility, messaging, analytics, or other isolated audit observations.

## **Required Deck Narrative**

The AI should use the following default narrative:

`1. What We Set Out to Solve`

`2. What We Reviewed`

`3. The Big Picture`

`4. What We Found`

`5. Why It Matters`

`6. Priority Recommendations`

`7. What Happens First`

`8. Implementation Path`

`9. How We Will Measure Progress`

`10. How to Use the Blueprint Report`

`11. Decisions / Next Steps`

This is a narrative framework, not a rigid slide count.

The system may use multiple slides for an important section or combine sections when appropriate.

The number of slides should reflect the complexity of the engagement and the needs of the Strategy Session.

## **Opening Standard**

The Strategy Deck should begin by reconnecting the client to the objective that caused the Blueprint engagement to exist.

Do not begin with SimpliCreative methodology, audit categories, or a list of deliverables.

The client should first understand:

What were we trying to solve?

What outcome were we working toward?

Why did this work matter?

## **What We Reviewed**

The deck should briefly establish the evidence base behind the Blueprint.

Relevant sources may include client interviews, questionnaires, CRM data, GA4, Google Search Console, SparkToro, website analysis, search research, AEO/GEO research, messaging analysis, competitive research, sales insights, stakeholder input, or other approved evidence.

This section should establish credibility without overwhelming the client.

Do not imply that a source provides stronger evidence than it actually does.

## **The Big Picture**

The Big Picture should identify the most important strategic pattern emerging from the research.

Its purpose is to connect individual findings into an understandable strategic story.

The AI must not manufacture a single root-cause narrative simply because it creates a cleaner presentation.

Where the evidence supports several contributing conditions rather than one validated cause, the deck should say so.

## **Recommended Slide Object**

For each slide, AI should generate:

| Field | Requirement |
| ----- | ----- |
| Slide\_ID | Stable identifier |
| Slide\_Purpose | Why this slide exists |
| Headline | Outcome- or insight-focused headline |
| Key\_Message | One primary idea |
| Supporting\_Points | Normally 3–5 maximum |
| Finding\_IDs | Blueprint evidence records supporting the slide |
| Recommendation\_IDs | Recommendation records where applicable |
| Supporting\_Evidence | Source-linked evidence |
| Validation\_Status | Preserved from Blueprint |
| Validation\_Basis | Relevant internal explanation |
| Business\_Implication | Why the finding matters |
| Recommendation | When applicable |
| Priority | When applicable |
| Visual\_Type | Chart / table / process / quote / metric / diagram / text |
| Report\_Reference | Where deeper information appears |
| Speaker\_Notes | Draft strategist explanation |
| Client\_Decision | If a decision is required |
| Human\_Review\_Flag | Yes / No |

The default slide should communicate one primary idea.

Do not fill available slide space merely because the template has room.

## **Headline Standard**

Slide headlines should communicate the insight, not merely identify the topic.

Weak:

“SEO Findings”

Better:

“Most of your current search visibility is branded, limiting new-buyer discovery.”

Weak:

“Messaging”

Better:

“Your strongest differentiation is not visible where buyers make decisions.”

Weak:

“Analytics”

Better:

“You have analytics technology, but not yet the visibility leadership needs.”

The headline should answer:

“So what?”

If the headline merely labels the subject, AI should rewrite it around the supported insight, consequence, or decision.

Headline clarity must not come at the expense of evidence accuracy.

## **What We Found / Why It Matters Logic**

Every major finding slide should generally follow:

`Finding → Evidence → Business Implication → What It Means for the Plan`

Example:

Finding:

The strongest proof of value is largely absent from the website.

Evidence:

Recovery outcomes, client results, and differentiators exist but are not surfaced consistently.

Why It Matters:

Buyers encounter less evidence than exists inside the business, which may weaken trust and differentiation during evaluation.

What It Means for the Plan:

Make proof a structural part of the buyer experience.

The AI must preserve uncertainty when causation has not been validated.

## **Outcomes Over Features**

The Strategy Deck should prioritize outcomes over implementation features.

Do not emphasize that the client needs a new form, page template, CRM field, navigation structure, analytics event, or technology integration without explaining what outcome that change is intended to support.

The client should understand why the recommendation matters before being asked to absorb how it will be implemented.

## **Strategy Deck Evidence Guardrail**

Every substantive finding in the Strategy Deck must trace to a Blueprint Finding & Evidence Record.

Every substantive recommendation must trace to approved Blueprint reasoning.

The governing rules are:

`DECK_FINDING_MUST_TRACE_TO_BLUEPRINT_EVIDENCE`

`DECK_RECOMMENDATION_MUST_TRACE_TO_BLUEPRINT_REASONING`

`DECK_MUST_NOT_CREATE_NEW_ROOT_CAUSES`

`DECK_MUST_NOT_INCREASE_CERTAINTY`

`DECK_SUMMARY_MUST_PRESERVE_EVIDENCE_BOUNDARIES`

A finding classified as `DIRECTIONAL` must not become definitive language simply because the slide needs a concise headline.

A `PARTIALLY_VALIDATED` finding must preserve the boundary between what is supported and what remains unresolved.

An `INSUFFICIENT_EVIDENCE` finding must remain unresolved.

A hypothesis must not become a root cause.

The Strategy Deck may simplify language.

It may not simplify certainty.

Where causation is not established, use appropriately qualified language such as:

“Evidence suggests…”

“We observed…”

“May be contributing to…”

“Appears connected to…”

“Requires further validation…”

Do not use qualification merely as generic hedging. Use it only where the underlying validation status requires it.

## **Prioritization**

The Strategy Deck should derive priority from approved Blueprint Recommendation Records.

The underlying Blueprint priority categories are:

`FIX_NOW`

`FIX_NEXT`

`MONITOR`

`DO_NOT_PRIORITIZE_YET`

The client-facing presentation does not need to display those internal labels verbatim if the approved deck treatment uses different language.

It must preserve the underlying priority logic.

Priority should reflect evidence, business impact, dependencies, implementation requirements, and strategic importance.

## **Strategy Session Objectives**

Before generating the deck, AI must retrieve the Strategy Session objective.

Possible objectives include:

Align leadership around core findings.

Help the client understand the Big Picture.

Validate the priority order.

Resolve strategic decisions.

Approve implementation direction.

Confirm ownership and dependencies.

Prepare for SimpliFoundation scoping.

Prepare for client or partner implementation.

Orient implementation teams to the Blueprint.

The deck should emphasize the information required for the actual session objective.

Do not present every Blueprint conclusion merely because it exists.

## **Speaker Notes**

AI should generate draft speaker notes for the strategist.

Speaker notes are internal and should not automatically appear in the client-facing deck.

Speaker notes should include:

What the slide is intended to communicate.

The evidence behind the conclusion.

What should not be overstated.

Relevant evidence limitations.

Relevant client language or quotes when useful.

Likely clarification the strategist may need to provide.

The intended transition to the next slide.

Any decision or discussion the strategist needs to surface.

Relevant report reference.

Speaker notes should help the strategist understand the reasoning rather than provide a robotic script to read aloud.

## **Client Decision Slides**

Where the Blueprint requires a meaningful client decision, the AI may generate a distinct decision slide.

Each decision should include:

`Decision Required`

`Why It Matters`

`Relevant Evidence`

`Available Options`, when legitimate alternatives exist

`SimpliCreative Recommendation`

`Impact of the Decision`

`Owner`

`Timing`

Do not manufacture false choices where only one option is strategically supported.

When evidence supports a clear recommendation, SimpliCreative should make that recommendation while preserving client autonomy.

## **Measurement Slide**

The AI should create measurement slides only from approved Measurement Strategy records.

Do not invent:

Targets.

Baselines.

Benchmarks.

Lead goals.

Traffic projections.

Revenue projections.

ROI.

Search outcomes.

AI visibility targets.

Conversion improvements.

Other quantitative expectations.

Targets may appear only when they have been established through approved strategy or explicitly approved by the strategist or client.

Where targets remain to be established, say so.

The measurement section should help the client understand:

What matters.

What can currently be measured.

What cannot currently be measured.

What should be implemented.

How progress should be evaluated.

## **Implementation Path**

The implementation section should communicate what happens after strategy without reproducing the full Implementation Blueprint.

At an executive level, it should clarify:

Priority sequence.

Major workstreams.

Dependencies.

Ownership.

Meaningful implementation requirements.

Expected decisions.

Current implementation paths.

The current post-Blueprint implementation paths are:

`CLIENT / PARTNER IMPLEMENTATION`

or

`SIMPLIFOUNDATION`

Client / Partner Implementation means the client implements through its internal team or another qualified implementation partner.

It is not a SimpliCreative offer.

SimpliFoundation is SimpliCreative’s custom implementation engagement when appropriate.

Done-With-You must not appear as a current implementation offer.

The Strategy Deck should not manufacture implementation dependency in order to encourage SimpliFoundation.

## **Report Walkthrough Section**

The Strategy Deck should include a concise explanation of how to use the full Blueprint Report.

The purpose is to orient the client to the deeper working document rather than repeat it.

Where relevant, explain where the client can find:

Executive summary.

Detailed findings.

Supporting evidence.

Validation limitations.

Strategic conclusions.

Priority recommendations.

Storytelling and messaging strategy.

FAST requirements.

Discoverability recommendations.

Implementation requirements.

Measurement requirements.

Unresolved questions.

Supporting research.

The deck should make clear that:

`STRATEGY DECK = EXECUTIVE STORY`

`BLUEPRINT REPORT = DEEPER WORKING DOCUMENT`

Where useful, identify which portions of the report are most relevant to leadership, marketing teams, implementation teams, developers, internal stakeholders, or external partners.

## **Next Steps**

The final section should distinguish clearly between:

What has been decided.

What remains open.

What still needs client approval.

What should happen first.

Who owns the next action.

When the action should occur.

Which implementation path the client intends to pursue, when known.

Do not allow “Next Steps” to become a generic sales close.

The next step should follow directly from the approved Blueprint recommendations and client decisions.

## **Visual Guidance**

AI may recommend the most appropriate visual treatment for each slide.

Possible formats include:

Metric callout.

Before / after comparison.

Problem → consequence diagram.

Priority matrix.

Buyer-journey flow.

Implementation roadmap.

Decision table.

Evidence summary.

Quote.

Simple process diagram.

Comparison table.

The system should not create a visual merely because a slide “needs design.”

The format should serve the idea.

Charts should be used only when quantitative data genuinely benefits from visualization.

## **Branded Presentation Template**

The Strategy Deck should ultimately be generated using the current approved SimpliCreative branded presentation template.

The template governs visual hierarchy, layouts, typography, brand treatment, and reusable slide components.

The branded template does not govern strategic content.

When a branded template is unavailable, AI may generate the structured slide content and visual-treatment recommendation without inventing permanent SimpliCreative brand standards.

The deck should remain:

`DRAFT_FOR_STRATEGIST_REVIEW`

until the approved branded output has been reviewed.

## **Reference Deck Use**

Previous Strategy Decks may be used to calibrate structure, pacing, executive emphasis, slide density, and presentation quality.

They must not be treated as governing methodology or client evidence.

The CounterFind example demonstrates useful presentation patterns, particularly orienting the client around the goal, surfacing a small number of major findings, connecting findings to business relevance, using evidence selectively, showing a roadmap, identifying measurement priorities, and ending with decisions and next steps. Its client-specific findings, claims, language, numbers, recommendations, and strategic conclusions remain specific to CounterFind.

The governing rule is:

`REFERENCE_DECK != CLIENT_EVIDENCE`

## **Brand Voice Check**

The draft Strategy Deck must comply with the current SimpliCreative Brand Voice & Editorial Standards.

The deck should sound calm, strategic, perceptive, confident, practical, evidence-aware, specific, and human.

Avoid generic consulting language, unnecessary jargon, surface-level observations, inflated claims, manufactured urgency, and excessive explanation.

The presentation should make complex analysis easier to understand without making it simplistic.

## **AI Pattern Detection**

Before strategist review, slide copy and speaker notes must pass the mandatory AI Pattern Detection check defined in `03_Brand_Voice_and_Editorial_Standards.md`.

The system should specifically check for repetitive paragraph and sentence structures, surface-level content, em-dash usage, formulaic AI filler phrases, and repeated contrast framing.

The governing rule is:

`AI_PATTERN_DETECTION_REQUIRED_BEFORE_HUMAN_REVIEW`

Pattern detection must not introduce unsupported specificity merely to make the deck feel more human.

## **Originality & Source Integrity**

Before strategist review, the draft Strategy Deck must comply with the Originality & Source Integrity Standard defined in `01_Governance_and_Intelligence_Architecture.md`.

Reference decks, Gold-Standard examples, Blueprint Reports, client deliverables, expert resources, and templates may inform reasoning, structure, depth, and presentation quality.

They must not be treated as copy banks.

Potentially material source similarity should return:

`POTENTIAL_SOURCE_SIMILARITY_REQUIRES_HUMAN_REVIEW`

AI must not certify the Strategy Deck as “copyright safe,” “plagiarism free,” or legally guaranteed original.

## **Human Approval Gate**

The AI-generated Strategy Deck is always a first draft.

Before the deck may be presented to the client, the strategist must review and approve:

Finding selection.

Big Picture narrative.

Slide sequence.

Headlines.

Evidence accuracy.

Validation language.

Evidence limitations.

Business implications.

Recommendations.

Priority order.

Claims.

Metrics.

Measurement language.

Client decisions.

Implementation guidance.

Visual-treatment recommendations.

Speaker notes.

Report references.

Next steps.

The governing rule is:

`AI_GENERATES_FIRST_DRAFT. STRATEGIST_EDITS_AND_APPROVES.`

AI may draft.

The strategist owns the final presentation.

## **Required Output Status**

Initial AI-generated status:

`DRAFT_FOR_STRATEGIST_REVIEW`

After strategist review, editing, and approval:

`APPROVED_FOR_CLIENT_PRESENTATION`

The Strategy Deck must not be presented externally while its status remains:

`DRAFT_FOR_STRATEGIST_REVIEW`

## **AI Permissions**

AI may select candidate findings for review.

AI may rank findings according to approved selection logic.

AI may recommend a deck narrative.

AI may draft slide headlines.

AI may draft slide content.

AI may generate draft speaker notes.

AI may recommend visual treatments.

AI may map slides to Blueprint Report sections.

AI may surface evidence limitations.

AI may identify missing inputs.

AI may flag unsupported claims.

AI may recommend where client decisions should be surfaced.

AI may run Brand Voice, AI Pattern Detection, and Originality & Source Integrity checks.

AI may create the first presentation draft using the approved branded template when technically available.

## **AI Restrictions**

AI may not approve findings.

AI may not create unsupported strategic conclusions.

AI may not create new root causes for presentation purposes.

AI may not strengthen validation status to create a cleaner story.

AI may not invent evidence.

AI may not invent metrics, targets, baselines, claims, proof, testimonials, or benchmarks.

AI may not change approved strategy.

AI may not change approved recommendation priority without human review.

AI may not make commercial commitments.

AI may not automatically position SimpliFoundation as the required implementation path.

AI may not approve the deck for client presentation.

AI may not use a previous client’s findings as evidence for the current client.

## **Suggested Engineering Flow**

`Approved Blueprint Analysis`

→

`Finding & Evidence Records + Recommendation Records + Measurement Strategy + Implementation Requirements + Client Decisions`

→

`Deck Generation Context`

→

`AI Finding Selection & Ranking`

→

`Draft Narrative`

→

`Slide Outline`

→

`Draft Slide Objects`

→

`Draft Speaker Notes`

→

`Evidence & Validation Check`

→

`Brand Voice Check`

→

`AI Pattern Detection`

→

`Originality & Source Integrity Check`

→

`DRAFT_FOR_STRATEGIST_REVIEW`

→

`Strategist Review + Editing`

→

`Human Approval`

→

`APPROVED_FOR_CLIENT_PRESENTATION`

→

`Client Strategy Session`

## **Post-Presentation Learning Loop**

After the Strategy Session, capture:

Which slides generated meaningful discussion.

Which findings required clarification.

Which recommendations the client challenged.

Which recommendations the client immediately understood.

Which visuals improved understanding.

Which visuals created confusion.

Which sections felt too detailed.

Which sections felt too shallow.

What the strategist materially changed from the AI draft.

Why those changes were made when known.

What client corrections were made.

What decisions were reached.

What commitments were made.

What unresolved questions remained.

These observations remain client/project Episodic Memory unless deliberately reviewed and promoted.

A change made for one client does not automatically become an agency presentation rule.

The learning path is:

`AI Draft → Strategist Edit → Client Strategy Session → Feedback / Outcome → Pattern Candidate → Human Review → Approved Template, Skill, or Methodology Update`

## **Strategy Deck Completion Gate**

Before the Strategy Deck can move to strategist review, confirm:

Required Blueprint inputs were retrieved.

Material findings trace to Blueprint evidence.

Recommendations trace to Blueprint reasoning.

Validation status has been preserved.

Strategic unknowns remain visible where relevant.

Unsupported claims have been removed or flagged.

Measurement values are approved or explicitly marked unresolved.

Current implementation paths are accurate.

Report references are present where appropriate.

Brand Voice check has been completed.

AI Pattern Detection has been completed.

Originality & Source Integrity check has been completed.

The output is labeled:

`DRAFT_FOR_STRATEGIST_REVIEW`

Before the Strategy Deck can move to client presentation, confirm:

The strategist has reviewed and edited the deck.

Finding selection is approved.

Headlines are approved.

Evidence and validation language are approved.

Recommendations and priorities are approved.

Metrics and claims are approved.

Client decisions and next steps are approved.

Speaker notes are reviewed.

Presentation formatting is approved.

The output is labeled:

`APPROVED_FOR_CLIENT_PRESENTATION`

## **Permanent Guardrails**

`RAW_RESEARCH_DOES_NOT_GENERATE_CLIENT_STRATEGY_DECK`

`DECK_FINDING_MUST_TRACE_TO_BLUEPRINT_EVIDENCE`

`DECK_RECOMMENDATION_MUST_TRACE_TO_BLUEPRINT_REASONING`

`DECK_MUST_NOT_CREATE_NEW_ROOT_CAUSES`

`DECK_MUST_NOT_INCREASE_CERTAINTY`

`DECK_SUMMARY_MUST_PRESERVE_EVIDENCE_BOUNDARIES`

`REFERENCE_DECK != CLIENT_EVIDENCE`

`AI_PATTERN_DETECTION_REQUIRED_BEFORE_HUMAN_REVIEW`

`POTENTIAL_SOURCE_SIMILARITY_REQUIRES_HUMAN_REVIEW`

`AI_GENERATES_FIRST_DRAFT. STRATEGIST_EDITS_AND_APPROVES.`

`DRAFT_FOR_STRATEGIST_REVIEW != APPROVED_FOR_CLIENT_PRESENTATION`

## **Success Standard**

The Blueprint Strategy Deck succeeds when a senior stakeholder can leave the Strategy Session clearly understanding:

What SimpliCreative found.

Why those findings matter.

What should happen next.

What decisions are required.

Where to find the deeper evidence and implementation detail in the Blueprint Report.

The Strategy Deck should make the strategic story easier to understand.

The Blueprint Report should make the strategy easier to implement.

