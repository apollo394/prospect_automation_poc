# **Blueprint Intelligence Workflow Spec**

Version: 1.1  
Classification: AI Intelligence Layer Workflow Specification  
Status: Active  
Owner: SimpliCreative  
Source ID: BLUE-002  
Related Workflow: SimpliBlueprint  
Related Documents: SimpliBlueprint Human SOP, Blueprint Strategy Deck Generation Spec, AI Second Brain Governance and Intelligence Architecture  
Primary Users: AI Engineers, System Architects, SimpliCreative Strategists

## **Purpose**

This specification defines how the SimpliCreative AI Intelligence Layer supports SimpliBlueprint from engagement activation through final Blueprint approval and implementation handoff.

It governs:

Cumulative context assembly.

Blueprint activation.

Personalized questionnaire generation.

Question metadata and Master Question Bank logic.

Questionnaire validation.

Research planning.

Evidence and data retrieval.

Data-quality assessment.

Evidence provenance.

Cross-source synthesis.

Conflict detection.

Framework-specific analysis support.

Hypothesis validation support.

Root-cause and contributing-condition analysis support.

Recommendation support.

Prioritization.

Structured Blueprint intelligence objects.

Blueprint Report generation support.

Strategy Deck handoff.

Strategy Session reconciliation.

Final Blueprint reconciliation.

Implementation handoff.

Engineering traceability.

Human approval gates.

Workflow completion.

Human delivery of the Blueprint engagement is governed by the SimpliBlueprint Human SOP.

Strategy Deck generation is governed by the Blueprint Strategy Deck Generation Spec.

Agency-wide evidence, source authority, originality, client isolation, memory, and human-approval requirements are governed by the AI Second Brain Governance and Intelligence Architecture.

The governing principle is:

```
AI_ORGANIZES_AND_SYNTHESIZES. HUMANS_APPROVE_STRATEGIC_CONCLUSIONS.
```

Additional governing rules include:

```
DIAGNOSE_BEFORE_PRESCRIBE

EVIDENCE_DETERMINES_CERTAINTY

VALIDATION_STATUS_MUST_SURVIVE_SYNTHESIS

BLUEPRINT_RECOMMENDATION_EVIDENCE_GATE

BLUEPRINT_IS_NOT_A_MANDATORY_FOUNDATION_GATE
```

## **1\. Workflow Boundary**

The Blueprint Intelligence Workflow begins when an approved SimpliBlueprint engagement is activated.

It ends when:

The Blueprint has been finalized.

Material strategic conclusions have been human approved.

Required client decisions have been reconciled.

The implementation path has been recorded.

Required structured intelligence has been preserved.

The appropriate implementation handoff has been created.

The Blueprint has passed its completion gate.

The preferred engineering flow is:

```
Approved Blueprint Engagement
        ↓
Active Blueprint Record
        ↓
Cumulative Context Assembly
        ↓
Question Classification
        ↓
Personalized Blueprint Questionnaire
        ↓
Questionnaire Validation
        ↓
Blueprint Research Plan
        ↓
Evidence Retrieval
        ↓
Data Quality Assessment
        ↓
Cross-Source Synthesis
        ↓
Framework-Specific Analysis
        ↓
Finding & Evidence Records
        ↓
Hypothesis Validation Support
        ↓
Root-Cause / Contributing-Condition Analysis
        ↓
Prioritization
        ↓
Recommendation Records
        ↓
Implementation Requirements
        ↓
Blueprint Structured Intelligence
        ↓
Draft Blueprint Report
        ↓
Human Strategic Review
        ↓
Strategy Deck Generation Handoff
        ↓
Human Strategy Session
        ↓
Client Feedback + Decisions
        ↓
Final Intelligence Reconciliation
        ↓
Final Blueprint
        ↓
Human Final Approval
        ↓
Implementation Handoff
        ↓
Client / Partner Implementation OR SimpliFoundation
        ↓
Blueprint Complete
```

## **2\. Blueprint Activation**

After agreement execution and confirmation that the engagement may begin, create an Active Blueprint Record.

Minimum fields should include:

```
Client_ID
Blueprint_ID
Engagement_Objectives
Original_Problem
Desired_Outcome
Why_Now
Approved_Scope
Known_Stakeholders
Known_Constraints
Known_Partners
Diagnostic_Hypotheses
Supporting_Evidence
Contradicting_Evidence
Known_Unknowns
Relevant_Commitments
Source_References
Human_Owner
Activation_Date
Workflow_Status
```

The Active Blueprint Record establishes the persistent relationship between the engagement, client, evidence, analysis, recommendations, decisions, and downstream implementation.

## **3\. Required Cumulative Inputs**

Before generating the questionnaire or beginning Blueprint research, assemble all relevant approved information available for the engagement.

| Input | Primary Source | Purpose |
| ----- | ----- | ----- |
| Company and contact information | CRM | Business context |
| Client's stated problem | Diagnostic Record | Preserve original symptom |
| Desired outcome | Diagnostic Record | Define target state |
| Why-now trigger | Diagnostic Record | Preserve timing and context |
| Lean Marketing Scorecard™ | ScoreApp | Understand perceived friction |
| FAST preliminary findings | Diagnostic | Preserve preliminary website evidence |
| Diagnostic hypotheses | Diagnostic Record | Define what requires validation |
| Supporting evidence | Diagnostic Record | Preserve reasoning |
| Contradicting evidence | Diagnostic Record | Preserve reasoning boundaries |
| Known unknowns | Diagnostic Record | Identify research gaps |
| Diagnostic transcript | Meeting system | Preserve client language |
| Updated Sales Intelligence Worksheet | Sales Intelligence | Preserve broader client context |
| CRM / email history | CRM / email | Preserve relationship context |
| Existing partners | Approved client records | Understand ecosystem |
| Stakeholders | Approved client records | Understand decision environment |
| Constraints | Diagnostic / Commercial Record | Inform analysis |
| Commitments made | Diagnostic / Commercial Record | Preserve accountability |
| Proposal / agreement | Commercial system | Confirm objectives and scope |
| Existing client documents | Client knowledge base | Avoid redundant discovery |
| Website / digital properties | Public / client systems | Current digital foundation |
| Existing strategy | Approved client records | Avoid unnecessary rediscovery |
| Existing analytics / measurement | Client systems | Determine evidence availability |

The system should prefer current approved records over raw, superseded, or historical material.

```
MISSING_INFORMATION != PERMISSION_TO_INFER
```

## **4\. Blueprint Cumulative Context Object**

The system should create a Blueprint Cumulative Context Object before questionnaire generation.

Recommended fields include:

```
Client_ID
Blueprint_ID
Original_Problem
Desired_Outcome
Why_Now
Business_Objectives
Marketing_Objectives
Website_Objectives
Known_ICP
Known_Buying_Committee
Known_Positioning
Known_Differentiation
Known_Offers
Known_Messaging
Known_Buyer_Journey
Known_Conversion_Definitions
Known_Measurement
Known_Technology
Known_Partners
Known_Stakeholders
Known_Constraints
Diagnostic_Hypotheses
Supporting_Evidence
Contradicting_Evidence
Strategic_Unknowns
Client_Commitments
SimpliCreative_Commitments
Source_References
Validation_Statuses
```

The object must preserve provenance.

Do not flatten multiple sources into one unattributed summary.

## **5\. Core Blueprint Intelligence Objects**

The implementation should support stable identifiers and relationships for at least:

```
Blueprint_ID

Blueprint_Cumulative_Context_ID

Question_ID

Questionnaire_ID

Questionnaire_Validation_Record_ID

Research_Plan_ID

Research_Question_ID

Evidence_Record_ID

Data_Quality_Record_ID

Finding_ID

Hypothesis_ID

Root_Cause_Record_ID

Priority_Record_ID

Recommendation_ID

Implementation_Requirement_ID

Measurement_Strategy_ID

Blueprint_Report_ID

Client_Decision_ID

Strategy_Session_Record_ID

Implementation_Handoff_ID

Approval_ID
```

Engineering may normalize these objects differently in the implementation architecture, provided stable relationships, provenance, historical state, and decision traceability are preserved.

## **6\. Personalized Blueprint Questionnaire**

The Blueprint Questionnaire is dynamically generated.

It is not a static discovery form.

The system should determine:

What is already known?

What is sufficiently validated?

What needs confirmation?

What is missing?

What materially affects Blueprint outputs?

What would improve analysis but does not block completion?

What should not be asked again?

The questionnaire itself is not strategy.

It exists to collect and validate the information required to create strategy.

## **7\. Question Status Logic**

Every candidate question receives one status:

| Status | Definition | AI Behavior |
| ----- | ----- | ----- |
| `CONFIRM` | A likely answer exists but materially affects strategy | Prefill and request confirmation, correction, or expansion |
| `REQUIRED` | Missing information blocks a required Blueprint output | Ask directly |
| `OPTIONAL` | Information improves depth but does not block completion | Include as optional |
| `SUPPRESS` | Information is already sufficiently validated | Do not ask |

```
KNOWN_INFORMATION_SHOULD_NOT_BECOME_BLANK_DISCOVERY
```

For `CONFIRM`, preferred framing is:

“Based on our previous conversations, here is how we currently understand this. Please confirm, correct, or expand.”

## **8\. Question Metadata**

Each candidate question should maintain structured metadata.

| Field | Purpose |
| ----- | ----- |
| `question_id` | Persistent identifier |
| `question_status` | CONFIRM / REQUIRED / OPTIONAL / SUPPRESS |
| `framework` | Strategic domain |
| `strategic_purpose` | Why information is needed |
| `source_record` | Existing structured source |
| `source_document` | Supporting source where applicable |
| `prefilled_answer` | Existing answer |
| `source_confidence` | Confidence in existing answer |
| `client_answer` | Submitted response |
| `client_revision` | Difference from prefilled answer |
| `validation_status` | Governing validation status |
| `blueprint_output_affected` | Dependent Blueprint output |
| `required_for_completion` | Whether Blueprint can proceed without it |
| `date_confirmed` | Most recent validation |
| `conflicting_sources` | Known conflicts |
| `human_review_required` | Strategist review requirement |

Question status is not evidence validation status.

## **9\. Question Revision and Conflict Logic**

If the client confirms a prefilled answer, record the confirmation and date.

If the client changes it:

Preserve the original answer.

Preserve its source.

Preserve the new client response.

Record the difference.

Update the current client-confirmed answer after required validation.

Do not erase historical state.

If material sources conflict:

```
SOURCE_CONFLICT_REQUIRES_HUMAN_REVIEW
```

AI must not silently choose between materially conflicting authoritative sources.

## **10\. Master Question Bank**

The Master Question Bank is structured strategic knowledge.

It should not be presented wholesale to every client.

The system selects, suppresses, or prefills questions according to cumulative context, Blueprint requirements, engagement scope, unresolved strategic questions, and required outputs.

### **Business Objectives and Success**

| Inputs to Collect | Blueprint Output |
| ----- | ----- |
| Top business priorities for next 12 months | Client Objective Record |
| What triggered the initiative now | Why-Now Context |
| Desired business outcome | Desired Outcome |
| Website / digital foundation objective | Strategic Objective |
| Success at 90 days, 6 months, and 12 months | Success Criteria |
| Leadership expectations | Executive Success Criteria |
| Important business metrics | Measurement Requirements |
| Upcoming milestones | Timing Requirements |
| Internal constraints | Constraint Record |

### **Ideal Customer and Buying Committee**

| Inputs to Collect | Blueprint Output |
| ----- | ----- |
| Primary customer | Primary Buyer Definition |
| Role / title / seniority | ICP |
| Company size, industry, geography where relevant | ICP |
| Highest-value customer characteristics | ICP |
| Buying trigger | Buyer Context |
| Search / research initiator | Buying Committee |
| Solution user | Buying Committee |
| Influencers | Buying Committee |
| Approver | Buying Committee |
| Potential blockers | Buying Committee |
| Desired customer outcome | Buyer Desire |
| What buyer wants to protect or avoid losing | Buyer Motivation |
| Best current / dream clients | ICP Validation |
| Who is not a fit | Exclusion Criteria |

Business-model labels, company size, or job titles should not independently determine fit.

### **Problems, Stakes and POV**

| Inputs to Collect | Blueprint Output |
| ----- | ----- |
| Customer's description of problem | Voice of Customer |
| Functional / tangible problem | Functional Problem |
| Emotional impact | Emotional Problem |
| Why situation feels wrong or unacceptable | Belief-Level Problem |
| Cost of doing nothing | Stakes |
| What becomes harder, riskier, or more expensive | Cost of Inaction |
| What company believes causes the problem | Root-Conflict Hypothesis |
| Common customer misdiagnoses | POV |
| What the industry gets wrong | POV |
| What should be done differently | Brand Belief |
| Larger principle behind the approach | Core Narrative |

### **Positioning and Unique Value Proposition**

| Inputs to Collect | Blueprint Output |
| ----- | ----- |
| Category buyers use | Category Position |
| Alternatives considered | Competitive Context |
| Primary competitors | Competitor Set |
| Buyer comparison criteria | Decision Criteria |
| Why customers choose company | Differentiation |
| Why customers choose alternatives | Competitive Gap |
| What competitors get wrong | POV |
| Prospect misconceptions | Messaging Requirements |
| Sales “aha moment” | Differentiation |
| Unique capabilities or approach | UVP |
| What company wants to be known for | Desired Position |
| One idea customers should remember / repeat | Core Narrative / Controlling Idea |

### **Voice of Customer and Sales Intelligence**

| Inputs to Collect | Blueprint Output |
| ----- | ----- |
| Exact phrases prospects use | Voice of Customer Bank |
| Recurring sales questions | FAQ / Content Requirements |
| Common objections | Objection Map |
| Buyer comparison language | Decision Criteria |
| Misconceptions | Messaging Requirements |
| Questions buyers hesitate to ask | Content Opportunities |
| Search language | Discoverability Inputs |
| AI prompt language mentioned by customers | AEO Inputs |
| Lost-deal reasons | Decision Friction |
| Renewal reasons | Value Drivers |
| Category terminology | Messaging Vocabulary |
| Language customers do not use | Messaging Guardrails |
| Sales recordings / transcripts | Source Evidence |

### **Proof and Credibility**

| Inputs to Collect | Blueprint Output |
| ----- | ----- |
| Claims made during sales | Claim Inventory |
| Evidence supporting claims | Evidence Record |
| Measurable customer results | Proof |
| Testimonials | Credibility Assets |
| Case studies | Credibility Assets |
| Client logos | Social Proof |
| Credentials / certifications | Authority Signals |
| Awards / recognition | Authority Signals |
| Proprietary methods / data / research | Differentiation and Authority |
| Internal subject-matter experts | Expertise Map |
| Press / publications / podcasts / events | Third-Party Authority |

### **Offer Architecture**

| Inputs to Collect | Blueprint Output |
| ----- | ----- |
| Primary offer for ICP | Offer Architecture |
| Problem solved | Offer Positioning |
| Desired outcome | Offer Promise |
| What is included | Offer Definition |
| What makes approach different | Differentiation |
| Buyer beliefs required before purchase | Messaging Requirements |
| Common objections | Objection Map |
| Perceived risks | Risk Map |
| Risk reducers | Trust Requirements |
| Customer process | Path Forward |
| Direct CTA | Primary Conversion |
| Transitional CTA | Secondary Conversion |
| New vs. existing customer offers | Offer Journey |
| Highest-priority offer | Website Priority |

### **Buyer Stages of Intent**

| Inputs to Collect | Blueprint Output |
| ----- | ----- |
| Questions before buyer recognizes category need | Awareness |
| Questions after recognizing problem | Problem Recognition |
| Questions when exploring approaches | Solution Exploration |
| Questions when comparing providers | Comparison / Evaluation |
| Proof required to shortlist | Evaluation Requirements |
| Questions immediately before purchase | Decision / Commitment |
| Content sales uses at each stage | Sales Enablement Map |
| Where buyers stall | Buyer Journey Friction |

### **Buyer Transformation**

| Inputs to Collect | Blueprint Output |
| ----- | ----- |
| Customer situation before solution | Before State |
| Customer situation after solution | Future State |
| What becomes possible | Success Narrative |
| Emotional change | Emotional Outcome |
| Changes in workload / time / control / risk / status | Transformation |
| How buyer wants others to perceive them | Aspirational Identity |
| Who the buyer wants to become | Buyer Transformation |
| Evidence from actual customers | Transformation Proof |

### **Website and Content**

| Inputs to Collect | Blueprint Output |
| ----- | ----- |
| Existing content | Content Inventory |
| Priority pages | Website Priorities |
| Lead / revenue / business-outcome generating pages | Performance Priorities |
| Outdated content | Content Gaps |
| Sales content | Sales Enablement Requirements |
| Missing proof | Credibility Gaps |
| Thought leadership | Authority Assets |
| Available SMEs | Expertise Map |
| Webinars / podcasts / events / research | Repurposing Opportunities |
| Unanswered buyer questions | Content Requirements |
| Sales claims absent from website | Messaging Gaps |

### **Measurement and Impact**

| Inputs to Collect | Blueprint Output |
| ----- | ----- |
| Meaningful conversion definitions | Conversion Framework |
| Funnel stages | Funnel Measurement |
| Important website actions | Event Requirements |
| Lead-to-opportunity process where applicable | Pipeline Measurement |
| Opportunity-to-customer process where applicable | Revenue Connection |
| Leadership metrics | Executive Reporting |
| Trusted metrics | Baseline Measures |
| Disputed / incomplete metrics | Data Gaps |
| Systems of record | Data Architecture |
| Existing reporting | Reporting Baseline |

The objective is to make marketing's impact visible without claiming a level of ROI attribution the evidence cannot support.

## **11\. Questionnaire Validation Record**

After questionnaire submission, generate a Questionnaire Validation Record containing:

| Output | Purpose |
| ----- | ----- |
| Confirmed Information | Preserve confirmed context |
| Revised Information | Update prior understanding |
| New Information | Add client-provided context |
| Conflicting Information | Require resolution |
| Missing Required Answers | Identify blockers |
| Optional Gaps | Preserve non-blocking omissions |
| New Hypotheses | Capture emerging possibilities |
| Affected Diagnostic Hypotheses | Update existing reasoning |
| Additional Evidence Required | Inform research planning |

Material conflicts and changes require strategist review before becoming strategic conclusions.

## **12\. Blueprint Research Plan**

After questionnaire validation, generate a client-specific Blueprint Research Plan.

The governing flow is:

```
Client Objective
        ↓
Diagnostic Hypotheses
        ↓
Validated Questionnaire
        ↓
Strategic Unknowns
        ↓
Evidence Requirements
        ↓
Research Tasks
```

Each material unresolved hypothesis or strategic question should define:

| Field | Requirement |
| ----- | ----- |
| Research Question | What are we trying to determine? |
| Existing Evidence | What is currently known? |
| Supporting Evidence Needed | What would strengthen the hypothesis? |
| Contradicting Evidence Needed | What would weaken or disprove it? |
| Available Sources | Where can evidence be found? |
| Client Inputs Required | What must the client provide? |
| Automated Tasks | What can approved AI/tools investigate? |
| Human Tasks | What requires expert judgment? |
| Decision Criteria | What determines the conclusion? |

```
RESEARCH_FOLLOWS_THE_QUESTION

NOT_EVERY_BLUEPRINT_REQUIRES_EVERY_AUDIT

NOT_EVERY_BLUEPRINT_REQUIRES_EVERY_DATA_OBJECT
```

## **13\. Resource and Access Requests**

The system should request only resources required by the approved Research Plan.

Potential resources include:

Analytics.

Google Search Console.

CRM.

Sales-call recordings.

Sales decks.

Proposals.

Customer interviews.

Win/loss notes.

Case studies.

Testimonials.

Competitor research.

Brand documentation.

Previous SEO work.

Paid campaign information.

PR context.

Content libraries.

Analytics reports.

Technical documentation.

CMS access.

Marketing automation.

Subject-matter expert access.

Absence of an unnecessary resource must not block the Blueprint.

Absence of a required resource should create an explicit evidence or data gap.

## **14\. Evidence Retrieval**

Evidence retrieval should follow the Research Plan rather than available tooling.

Potential evidence sources include:

Website and digital properties.

Client documents.

GA4.

Google Search Console.

CRM.

Sales evidence.

Customer evidence.

Approved audience research.

Search and AI research.

Competitive research.

Content.

Brand and messaging materials.

Technology documentation.

Campaign information.

PR and authority signals.

Other approved sources relevant to the research question.

Blueprint evidence should be synthesized around strategic questions rather than interpreted platform by platform.

## **15\. Data Quality Assessment**

Data quality is separate from finding validation.

Use:

```
RELIABLE

USABLE_WITH_LIMITATIONS

DIRECTIONAL

INSUFFICIENT

UNAVAILABLE
```

Relevant checks may include tracking completeness, event configuration, UTM consistency, property selection, historical depth, CRM field consistency, source attribution quality, methodological limitations, and technical configuration.

Weak data must reduce the certainty available to conclusions that depend upon it.

```
DATA_QUALITY != VALIDATION_STATUS
```

## **16\. Validation and Evidence Standard**

The Blueprint inherits the governing Validation & Evidence Standard from the AI Second Brain Governance and Intelligence Architecture.

Use:

```
OBSERVED

CLIENT_REPORTED

HYPOTHESIS

DIRECTIONAL

VALIDATED

PARTIALLY_VALIDATED

CONTRADICTED

INSUFFICIENT_EVIDENCE

UNKNOWN
```

Every material finding should preserve:

```
Finding
Validation_Status
Validation_Basis
Sources
Evidence
Evidence_Date
Data_Quality
Contradicting_Evidence
Confidence
Related_Hypothesis
Human_Reviewer
Review_Date
```

```
EVIDENCE_DETERMINES_CERTAINTY

VALIDATION_STATUS_MUST_SURVIVE_SYNTHESIS

SUMMARIZATION_MUST_NOT_INCREASE_CERTAINTY

AI_CONFIDENCE != EVIDENCE
```

## **17\. Finding Provenance**

Finding validation and provenance are separate concepts.

Preserve provenance where applicable as:

```
SOURCE_EVIDENCE

CLIENT_STATEMENT

AI_CALCULATION

AI_INTERPRETATION

STRATEGIST_INTERPRETATION

HUMAN_VALIDATED_CONCLUSION
```

The Intelligence Layer must distinguish:

```
SOURCE_REPORTED_THIS

AI_CALCULATED_THIS

AI_INTERPRETED_THIS

STRATEGIST_CONCLUDED_THIS
```

These are not equivalent.

## **18\. Finding & Evidence Record**

Each material finding should maintain a structured Finding & Evidence Record.

| Field | Requirement |
| ----- | ----- |
| Finding\_ID | Stable identifier |
| Blueprint\_ID | Engagement relationship |
| Finding | What was observed or concluded |
| Validation\_Status | Governing evidence status |
| Validation\_Basis | Why the status applies |
| Evidence | Supporting Evidence Record IDs |
| Sources | Source references |
| Evidence\_Date | Relevant period |
| Data\_Quality | Where applicable |
| Contradicting\_Evidence | Evidence against finding |
| Related\_Hypothesis | Relevant Hypothesis ID |
| Business\_Implication | Why it matters |
| Provenance | Source / AI / strategist relationship |
| Human\_Reviewer | Responsible strategist |
| Review\_Date | Review date |

A finding must not become more certain because it appears repeatedly in downstream documents.

## **19\. Google Analytics Data Retrieval**

Retrieve or request relevant GA4 data where available and required by the approved Research Plan.

| Data to Retrieve | Why It Matters | Blueprint Use |
| ----- | ----- | ----- |
| Users / sessions by source-medium | Understand acquisition mix | Channel contribution |
| Sessions by landing page | Understand entry points | Buyer journey / content |
| New vs. returning users | Audience behavior context | Engagement patterns |
| Engagement rate | Directional experience signal | Page analysis |
| Average engagement time | Directional content signal | Content analysis |
| Key events / conversions | Meaningful actions | Conversion framework |
| Conversion rate by source-medium | Compare traffic quality | Acquisition effectiveness |
| Conversion rate by landing page | Compare entry-page performance | Conversion analysis |
| Form submissions | Inquiry activity | Funnel measurement |
| Booked calls / appointments / demos where relevant | High-intent activity | Business-action connection |
| Downloads / assessments / registrations / other micro-conversions | Transitional intent | Buyer-stage analysis |
| Device category | Experience differences | UX / accessibility |
| Geography | Market context | ICP validation |
| Top pages | Content demand | Content strategy |
| Drop-off patterns where available | Potential friction | Journey analysis |
| Campaign / UTM data | Connect campaigns | Channel analysis |
| Referral traffic | Partner / earned visibility | Ecosystem mapping |
| Paid traffic performance | Landing experience | Paid \+ website connection |
| Organic traffic trends | Search contribution | SEO / AEO context |

Do not treat traffic, engagement rate, or engagement time as business success by themselves.

Prioritize meaningful buyer progression and downstream business outcomes where evidence permits.

## **20\. Google Search Console Data Retrieval**

Retrieve or request relevant Google Search Console data where available and required by the Research Plan.

| Data | Blueprint Use |
| ----- | ----- |
| Queries | Real search language |
| Clicks | Traffic-producing queries |
| Impressions | Visibility |
| CTR | Result / intent context |
| Average Position | Directional ranking context |
| Queries by Landing Page | Intent-content connection |
| Pages by Impressions | Underleveraged visibility |
| Pages by Clicks | Existing performers |
| Branded vs. Non-Branded Queries | Demand composition |
| Commercial vs. Informational Queries | Intent mapping |
| Country | Market validation |
| Device | Search behavior |
| Search Appearance | SERP context |
| Date Trends | Baseline / change |
| Query-Page Mismatches | Architecture / content opportunities |
| High-Impression Low-CTR Queries | Potential messaging opportunities |
| Near-Threshold Queries | Potential prioritization inputs |

Where practical, classify search intent as:

```
INFORMATIONAL

PROBLEM_AWARE

SOLUTION_CATEGORY

COMPARISON_EVALUATION

COMMERCIAL_DECISION

BRANDED
```

Do not conclude that “organic traffic is down” without determining which pages, queries, and intents account for the decline.

## **21\. CRM Data Retrieval**

CRM evidence is important because marketing activity should be connected to meaningful business outcomes where available systems permit it.

Retrieve or request relevant fields such as:

| Data | Blueprint Use |
| ----- | ----- |
| Lead Source | Acquisition origins |
| Original / First-Touch Source | Discovery context |
| Most Recent / Last-Touch Source | Conversion influence context |
| Lead Status | Qualification |
| Lifecycle Stage | Funnel progression |
| MQL / SQL Definitions | Qualification logic |
| Opportunity Creation | Pipeline connection |
| Opportunity Value | Pipeline influence where defensible |
| Closed-Won Revenue | Business result where defensible |
| Closed-Lost Reason | Buyer friction |
| Deal-Stage Progression | Journey bottlenecks |
| Time to Opportunity | Sales-cycle context |
| Time to Close | Buying-cycle context |
| Contact Role / Title | Buyer validation |
| Company Characteristics | ICP validation |
| Geography | Market validation |
| Campaign Membership | Campaign connection |
| Form / Conversion Source | Website-to-CRM connection |
| Sales-Call Outcomes | Qualification / objection evidence |
| Renewal / Expansion Data where relevant | Long-term value |
| Customer Acquisition Source | Channel evidence |

Where evidence supports it, the system may attempt:

```
Traffic Source
        ↓
Conversion
        ↓
Qualified Lead
        ↓
Opportunity
        ↓
Closed-Won
```

Only make these connections where IDs, UTMs, CRM fields, integrations, or other reliable evidence support them.

If the chain breaks, create a Measurement Gap.

Do not infer reliable marketing ROI from incomplete CRM evidence.

## **22\. CRM Validation Questions**

Where CRM definitions are unclear, determine:

What counts as a lead?

What qualifies an MQL?

What qualifies an SQL?

Who owns qualification?

What counts as an opportunity?

How is source attribution assigned?

Is attribution first-touch, last-touch, multi-touch, manual, or mixed?

Are offline sales activities captured?

Are revenue values complete?

Are lost reasons recorded consistently?

Unclear field definitions should reduce the reliability of conclusions based on those fields.

## **23\. SparkToro Audience Validation**

Where relevant to the Research Plan, SparkToro may be used as an audience validation and discovery source.

Potential evidence includes:

Search behavior and topics.

Frequently visited websites.

Social platforms.

Accounts followed.

Podcasts.

YouTube channels.

Publications and media sources.

Keywords and phrases.

Relevant topical affinities.

Professional or demographic indicators where available.

Geographic concentration.

Related interests.

Audience overlap.

Competitor audience signals.

The purpose is to test questions such as:

Does the stated ICP appear to consume the sources expected?

Are there overlooked publications, communities, podcasts, or authorities?

Do audience interests support or challenge proposed messaging themes?

Are there adjacent topics relevant to content strategy?

Do current channels align with observable audience attention?

Which third-party sources may matter for authority, PR, partnerships, or AI recommendation visibility?

Does modeled audience behavior support or contradict the stated ICP?

SparkToro is third-party modeled audience evidence.

It should validate, enrich, or challenge assumptions.

It should not independently redefine the ICP.

## **24\. Cross-Source Synthesis**

Do not produce disconnected platform summaries when the strategic question requires synthesis.

The preferred model is:

| Strategic Question | Relevant Evidence | Structured Output |
| ----- | ----- | ----- |
| Where does attention originate? | Analytics \+ Search \+ CRM \+ audience evidence | Acquisition Map |
| What are buyers interested in? | Page behavior \+ queries \+ sales \+ audience research | Intent Map |
| Who is actually converting? | Analytics \+ CRM \+ customer evidence | ICP Validation |
| What content attracts meaningful demand? | Landing pages \+ search \+ downstream outcomes | Content Performance Map |
| Which sources create quality? | Acquisition \+ conversion \+ CRM | Channel Quality |
| Where does the journey break? | Behavior \+ intent \+ lifecycle progression | Friction Map |
| What can marketing prove? | Analytics \+ CRM \+ measurement architecture | Measurement Plan |
| Where should authority be strengthened? | Referral \+ search \+ audience/source evidence | Authority / Source Map |
| Does stated ICP match observed evidence? | Customer \+ CRM \+ search \+ audience evidence | ICP Validation Record |

The system should synthesize around strategic questions rather than around software products.

## **25\. Required Data Synthesis Objects**

Generate only the objects required by the approved Research Plan.

| Object | Purpose |
| ----- | ----- |
| Acquisition Map | Shows where attention originates |
| Search Intent Map | Shows how relevant buyers search |
| ICP Validation Record | Compares stated ICP with observed evidence |
| Buyer Journey Map | Connects discovery through meaningful action |
| Conversion Performance Record | Identifies meaningful actions |
| Pipeline Contribution Record | Connects marketing evidence to CRM outcomes |
| Content Performance Map | Identifies content associated with meaningful attention or outcomes |
| Authority / Source Map | Identifies relevant external authority sources |
| Measurement Gap Record | Shows where tracking or attribution breaks |
| Data Quality Record | Records reliability and limitations |
| Baseline Metrics | Preserves approved pre-implementation measures |
| Strategic Data Findings | Feeds hypothesis and root-cause validation |

```
NOT_EVERY_BLUEPRINT_REQUIRES_EVERY_DATA_OBJECT
```

## **26\. Data Conflict Handling**

When evidence sources disagree, preserve the conflict.

Each material discrepancy should contain:

```
Observed_Conflict
Source_A
Source_B
Possible_Explanation
Additional_Evidence_Required
Strategic_Significance
Current_Validation_Status
Recommended_Validation_Step
```

Examples may include:

The client describes one primary buyer while CRM opportunity data shows another pattern.

Search visibility exists for a topic while CRM evidence shows little downstream contribution.

Analytics reports conversions from a channel while CRM attribution does not support the same conclusion.

Audience research suggests an authority source matters while referral or customer evidence shows little observable influence.

A conflict is not automatically proof that either source is wrong.

Material conflicts require human review.

## **27\. Engineering Traceability for Data-Derived Findings**

Every material data-derived finding should preserve:

| Field | Requirement |
| ----- | ----- |
| Source Platform | Where evidence originated |
| Property / Account | Relevant property or account |
| Date Range | Period represented |
| Metric | Original metric |
| Segment / Filter | Applied context |
| Original Value | Source value |
| Calculated Value | When applicable |
| Calculation Method | When applicable |
| Interpretation | Separate analytical layer |
| Data Quality | Source quality |
| Validation Status | Current finding status |
| Related Hypothesis | What is being evaluated |
| Related Recommendation | Where applicable |
| Date Retrieved | Evidence freshness |
| Human Review | When applicable |

The Intelligence Layer must distinguish:

```
SOURCE_REPORTED_THIS

AI_CALCULATED_THIS

AI_INTERPRETED_THIS

STRATEGIST_CONCLUDED_THIS
```

These are not equivalent.

## **28\. Framework-Specific Analysis Support**

The Intelligence Layer may support only the frameworks relevant to the engagement objective, scope, evidence, and approved Research Plan.

Relevant domains may include:

Business objectives.

ICP and buying committee.

Buyer problems and stakes.

Positioning and differentiation.

Voice of Customer.

Offer architecture.

Buyer intent.

Buyer journey.

Buyer transformation.

Storytelling and messaging.

Proof and credibility.

FAST.

Website and content.

Discoverability.

SEO.

AEO / GEO.

Authority.

Conversion.

Measurement.

Marketing ecosystem alignment.

Technology and operational requirements.

Not every Blueprint requires equal depth in every domain.

## **29\. Storytelling & Messaging Analysis Support**

The Intelligence Layer may assemble and synthesize validated inputs for SimpliCreative's Storytelling & Messaging Architecture.

Relevant inputs may include:

ICP.

Buyer desire.

Functional problem.

Emotional problem.

Belief-level problem.

Root conflict.

Brand POV.

Expertise and proof.

Offer and process.

Calls to action.

Cost of inaction.

Future state.

Aspirational identity.

Differentiation.

AI may draft the Storytelling & Messaging Architecture.

Human strategic review is required.

External frameworks may inform approved methodology but do not authorize copying or third-party branded language in client deliverables.

## **30\. FAST Analysis Support**

The Intelligence Layer may organize evidence across the four FAST domains.

### **Flexible**

Potential evidence includes:

CMS.

Ownership.

Editing capabilities.

Landing-page capabilities.

Developer dependencies.

Reusable components.

Approval friction.

Update speed.

### **Accessible**

Potential evidence includes:

Automated accessibility scans.

Human accessibility review.

Known client requirements.

Prior accessibility work.

Relevant user needs.

Automated tools are preliminary evidence only.

They do not establish compliance.

### **Strategic**

Potential evidence includes:

ICP.

Messaging.

Positioning.

Buyer journey.

Discoverability.

AEO.

SEO / GEO.

Authority.

Offers.

CTAs.

Content.

Proof.

Marketing ecosystem context.

### **Trackable**

Potential evidence includes:

Conversion definitions.

Analytics.

CRM.

Marketing automation.

Funnel stages.

Attribution.

Leadership reporting.

Data gaps.

FAST findings inherit the governing Validation & Evidence Standard.

## **31\. AEO / AI Recommendation Research**

Where approved by the Research Plan, the Intelligence Layer may perform AEO research using validated client inputs.

Relevant inputs may include:

| Input | Purpose |
| ----- | ----- |
| ICP and Buyer Role | Model relevant researcher |
| Buyer Trigger | Define research situation |
| Buyer Intent | Define research objective |
| Buyer Problems | Build realistic context |
| Category Language | Define category universe |
| Buying Criteria | Add recommendation constraints |
| Competitors | Establish comparison set |
| Geography / Industry / Company Context | Add relevant qualifiers |
| Customer Language | Improve prompt realism |
| Trusted Sources | Define source environment |
| Expertise / Proof | Identify authority signals |
| Topics Client Wants to Own | Define desired authority |

AI may generate approximately 10 realistic synthetic buyer-research prompts when appropriate to the approved methodology.

Prompts should reflect realistic research situations rather than generic keyword substitutions.

```
SYNTHETIC_BUYER_PROMPT != OBSERVED_BUYER_BEHAVIOR
```

Potential research outputs include:

| Research Input / Observation | Output |
| ----- | ----- |
| Synthetic Buyer Prompts | AI Recommendation Test Set |
| Client Appearances | Brand Recommendation Visibility |
| Competitor Appearances | Competitor Recommendation Set |
| Reasons Brands Appear | Recommendation Attribute Map |
| Referenced Sources | Source Influence Map |
| Recurring Sources | Priority Source Opportunities |
| Recurring Buyer Criteria | Decision Criteria Validation |
| Missing Client Attributes | Representation Gaps |
| Relevant Query Expansion where observable | Content / Query Opportunities |
| Desired vs. Observed Representation | Positioning Gap |

The analysis may help answer:

Who may use AI during the buying process?

What might they ask?

Which brands currently appear in the tested research environment?

Why do those brands appear to be recommended?

Which sources recur?

Where is the client absent or weakly represented?

What content, evidence, authority, or source opportunities deserve consideration?

```
SYNTHETIC_BUYER_PROMPT != OBSERVED_BUYER_BEHAVIOR

AI_RECOMMENDATION_TEST != FUTURE_AI_VISIBILITY

OBSERVED_AI_RESPONSE != AI_TRAINING_DATA
```

Do not imply guaranteed future AI recommendations.

Do not claim visibility into proprietary training data.

## **32\. Hypothesis Validation Support**

For each material Diagnostic or Blueprint hypothesis, AI should assemble:

```
Hypothesis
Supporting_Evidence
Contradicting_Evidence
Evidence_Quality
Missing_Evidence
Source_Conflicts
AI_Interpretation
Recommended_Status
Human_Review_Requirement
```

Final hypothesis states are:

```
VALIDATED

PARTIALLY_VALIDATED

DISPROVED

INSUFFICIENT_EVIDENCE
```

AI may recommend.

The strategist approves.

Preliminary and disproved hypotheses should remain available in the reasoning history.

## **33\. Root-Cause and Contributing-Condition Analysis**

The preferred reasoning chain is:

```
Client Objective
        ↓
Symptom
        ↓
Hypothesis
        ↓
Evidence
        ↓
Validation
        ↓
Root Cause / Contributing Condition
        ↓
Business Impact
        ↓
Priority
        ↓
Recommendation
```

A root cause must not be declared merely because it is plausible.

Where evidence supports contributing conditions but not causal certainty, preserve that distinction.

The system must not force every engagement into one root cause.

A Root-Cause / Contributing-Condition Record should preserve:

```
Root_Cause_Record_ID
Blueprint_ID
Related_Finding_IDs
Related_Hypothesis_IDs
Conclusion
Classification
Supporting_Evidence
Contradicting_Evidence
Validation_Status
Validation_Basis
Business_Impact
Human_Approval
```

## **34\. Prioritization**

Approved findings and recommendations should use:

```
FIX_NOW

FIX_NEXT

MONITOR

DO_NOT_PRIORITIZE_YET
```

Priority should consider:

Business impact.

Strategic importance.

Evidence strength.

Dependencies.

Implementation sequence.

Risk.

Client capacity.

Measurement implications.

Known constraints.

Priority is not simply a ranking of what appears most broken.

## **35\. Recommendation Record**

Each material recommendation should preserve:

| Field | Requirement |
| ----- | ----- |
| Recommendation\_ID | Stable identifier |
| Blueprint\_ID | Engagement relationship |
| Finding\_IDs | Supporting findings |
| Evidence | Supporting evidence |
| Business\_Impact | Why it matters |
| Root\_Cause\_or\_Contributing\_Condition | Where supported |
| Recommendation | What should change |
| Priority | Approved priority |
| Dependencies | What must happen first |
| Implementation\_Requirements | What execution requires |
| Owner | Where known |
| Success\_Measure | How progress should be evaluated |
| Confidence | Evidence-based certainty |
| Related\_Objective | Client objective |
| Related\_Hypothesis | Where applicable |
| Human\_Approval | Approval state |

```
BLUEPRINT_RECOMMENDATION_EVIDENCE_GATE
```

If evidence does not responsibly support a recommendation:

```
UNRESOLVED_QUESTION
```

Do not manufacture a prescription.

## **36\. Blueprint Traceability**

The system should preserve the reasoning chain:

```
Client Objective
        ↓
Symptom
        ↓
Diagnostic Hypothesis
        ↓
Questionnaire Input
        ↓
Evidence
        ↓
Analysis Framework
        ↓
Validated Root Cause / Contributing Condition
        ↓
Priority
        ↓
Recommendation
        ↓
Implementation Requirement
        ↓
Success Measure
```

The system must be able to explain why a material recommendation exists.

## **37\. Implementation Requirements**

Approved recommendations should translate into structured implementation requirements.

Relevant fields include:

```
Implementation_Requirement_ID
Blueprint_ID
Workstream
Recommendation_ID
Priority
Dependencies
Implementation_Requirement
Responsible_Party
Strategic_Source
Required_Client_Decision
Measurement_Requirement
Success_Measure
Known_Constraint
Unresolved_Issue
Human_Approval
```

The resulting Implementation Blueprint should be usable by SimpliCreative, the client's internal team, or another qualified implementation partner.

## **38\. Measurement & Impact**

The Blueprint should define how meaningful marketing progress and business impact can be evaluated.

Relevant structured outputs may include:

Conversion Framework.

Funnel Measurement.

Event Requirements.

Pipeline Measurement.

Revenue Connection where defensible.

Executive Reporting Requirements.

Baseline Measures.

Data Gaps.

Data Architecture.

Reporting Baseline.

The objective is to make marketing's impact visible without claiming a level of ROI attribution the available evidence cannot support.

## **39\. Blueprint Report Generation**

The Blueprint Report is the deeper working strategic document.

It should derive from approved structured Blueprint intelligence rather than raw research.

Relevant sections may include:

Executive Summary.

Objectives.

Research and Evidence Base.

Data Quality and Limitations.

Validated Findings.

Root Causes and Contributing Conditions.

Strategic Priorities.

ICP and Buyer Analysis.

Positioning and Differentiation.

Storytelling & Messaging Architecture.

Proof and Credibility.

FAST Analysis.

Discoverability.

SEO / AEO / GEO.

Website and Content Requirements.

Conversion Strategy.

Measurement Strategy.

Implementation Blueprint.

Unresolved Questions.

Supporting Research.

Not every Blueprint requires identical sections.

```
RAW_RESEARCH_DOES_NOT_GENERATE_FINAL_BLUEPRINT

BLUEPRINT_REPORT_MUST_TRACE_TO_APPROVED_STRUCTURED_INTELLIGENCE
```

AI may draft the Report.

The strategist approves material strategic conclusions and the final Report.

## **40\. Strategy Deck Generation Handoff**

The Blueprint Strategy Deck is governed by `BLUE-003 Blueprint Strategy Deck Generation Spec`.

`BLUE-002` must provide the approved structured inputs required for deck generation, including:

```
Blueprint_ID
Client_Objectives
Approved_Findings
Finding_IDs
Validation_Statuses
Validation_Bases
Supporting_Evidence
Business_Implications
Approved_Recommendations
Recommendation_IDs
Priorities
Implementation_Requirements
Dependencies
Measurement_Strategy
Success_Measures
Measurement_Limitations
Strategic_Unknowns
Client_Decisions_Required
Constraints
Approved_Claims
Blueprint_Report_References
Strategy_Session_Objective
```

The Strategy Deck must not become an independent source of strategic truth.

```
DECK_FINDING_MUST_TRACE_TO_BLUEPRINT_EVIDENCE

DECK_RECOMMENDATION_MUST_TRACE_TO_BLUEPRINT_REASONING
```

## **41\. Human Strategy Session**

The Strategy Session is human-led.

AI may prepare supporting evidence, decision context, approved Blueprint records, Strategy Deck inputs, and relevant strategist support.

The Strategy Session may produce:

Client corrections.

Client questions.

Client disagreements.

Approved decisions.

Changed assumptions.

Changed priorities.

Implementation decisions.

New constraints.

New evidence.

Remaining unknowns.

New commitments.

AI must not treat these as automatically approved strategic changes.

## **42\. Strategy Session Record**

After the Strategy Session, create or update a Strategy Session Record.

Recommended fields include:

```
Strategy_Session_Record_ID
Blueprint_ID
Session_Date
Participants
Client_Corrections
Client_Questions
Client_Disagreements
Approved_Decisions
Changed_Assumptions
Changed_Priorities
Implementation_Decisions
New_Constraints
New_Evidence
Remaining_Unknowns
Client_Commitments
SimpliCreative_Commitments
Strategist_Notes
Source_References
Human_Validation_Status
```

## **43\. Final Intelligence Reconciliation**

After the Strategy Session, reconcile all material client feedback against the structured Blueprint intelligence.

The system should determine:

What was corrected?

What changed?

Which findings are affected?

Which hypotheses are affected?

Which recommendations are affected?

Which priorities changed?

Which implementation requirements changed?

Which measurement requirements changed?

Which unknowns were resolved?

Which new unknowns appeared?

Which client decisions are now final?

Material changes require human validation.

Historical state must be preserved.

```
CLIENT_FEEDBACK != AUTOMATIC_STRATEGIC_TRUTH

CLIENT_FEEDBACK_DOES_NOT_AUTOMATICALLY_BECOME_AGENCY_METHODOLOGY
```

## **44\. Final Blueprint Approval**

Before the Blueprint becomes final:

Reconcile the Blueprint Report.

Reconcile Finding & Evidence Records.

Reconcile Hypothesis Records.

Reconcile Root-Cause / Contributing-Condition Records.

Reconcile Recommendation Records.

Reconcile priorities.

Reconcile Implementation Requirements.

Reconcile Measurement Strategy.

Reconcile client decisions.

Preserve unresolved questions.

Confirm Strategy Deck consistency where applicable.

Human approval is required.

The approved state should be:

```
BLUEPRINT_APPROVED
```

## **45\. Standalone Value Test**

The Blueprint must create standalone strategic value.

Before final completion, determine whether a capable client team or qualified implementation partner can understand:

What needs to happen.

Why it matters.

What evidence supports it.

What should happen first.

What dependencies exist.

How progress should be evaluated.

What remains unresolved.

If the approved Blueprint cannot support responsible implementation without SimpliCreative reconstructing its reasoning, the Blueprint is not sufficiently implementation-ready.

```
BLUEPRINT_MUST_NOT_MANUFACTURE_IMPLEMENTATION_DEPENDENCY
```

## **46\. Post-Blueprint Implementation Paths**

Approved implementation paths are:

```
CLIENT / PARTNER IMPLEMENTATION

SIMPLIFOUNDATION
```

Client / Partner Implementation means the client implements internally or through another qualified partner.

It is not a SimpliCreative offer.

SimpliFoundation is SimpliCreative's custom implementation engagement when appropriate.

```
DWY_IS_NOT_A_CURRENT_SIMPLICREATIVE_OFFER

BLUEPRINT_IS_NOT_A_MANDATORY_FOUNDATION_GATE
```

## **47\. Strategy-to-Execution Handoff**

When implementation follows Blueprint, create an Implementation Handoff appropriate to the selected path.

The handoff should preserve:

```
Implementation_Handoff_ID
Client_ID
Blueprint_ID
Implementation_Path
Approved_Objectives
Approved_Findings
Evidence_Boundaries
Approved_Priorities
Approved_Recommendations
Implementation_Requirements
Dependencies
Client_Decisions
Measurement_Requirements
Success_Measures
Known_Constraints
Unresolved_Questions
Relevant_Source_References
Human_Approval
```

SimpliFoundation should not need to reconstruct Blueprint reasoning from scratch.

Likewise, a qualified client team or implementation partner should receive enough context to act without requiring SimpliCreative participation.

## **48\. Workflow State Model**

The implementation should support the following minimum business states:

```
BLUEPRINT_ACTIVATED

CUMULATIVE_CONTEXT_PENDING

CUMULATIVE_CONTEXT_READY

QUESTIONNAIRE_GENERATED

QUESTIONNAIRE_PENDING_CLIENT

QUESTIONNAIRE_RECEIVED

QUESTIONNAIRE_VALIDATION_PENDING

QUESTIONNAIRE_VALIDATED

RESEARCH_PLAN_PENDING

RESEARCH_PLAN_APPROVED

EVIDENCE_COLLECTION_IN_PROGRESS

EVIDENCE_COLLECTION_COMPLETE

STRATEGIC_ANALYSIS_IN_PROGRESS

PENDING_STRATEGIST_VALIDATION

STRUCTURED_BLUEPRINT_INTELLIGENCE_APPROVED

BLUEPRINT_REPORT_DRAFTED

PENDING_BLUEPRINT_REVIEW

STRATEGY_DECK_HANDOFF_READY

STRATEGY_SESSION_READY

STRATEGY_SESSION_COMPLETE

FINAL_RECONCILIATION_PENDING

PENDING_FINAL_APPROVAL

BLUEPRINT_APPROVED

IMPLEMENTATION_HANDOFF_READY

COMPLETE
```

Engineering may add technical substates without changing governing business authority.

## **49\. Automation Triggers**

Approved state transitions may trigger automation.

Examples include:

Blueprint activation triggers cumulative context assembly.

Completed context assembly triggers question classification.

Approved questionnaire submission triggers validation.

Completed questionnaire validation triggers Research Plan generation.

Approved Research Plan enables evidence retrieval.

Completed evidence collection enables analysis support.

Approved structured intelligence enables Blueprint Report drafting.

Approved Blueprint analysis enables Strategy Deck handoff.

Completed Strategy Session enables reconciliation.

Final human Blueprint approval enables implementation handoff.

Automation must stop at required human approval gates.

## **50\. Human Approval Gates**

Human approval is required before:

Material source conflicts are resolved.

Material client revisions become strategic conclusions.

A hypothesis becomes a validated strategic conclusion.

A root cause is approved.

A strategically consequential finding is finalized.

A recommendation becomes approved Blueprint strategy.

Priority order becomes final.

Material implementation requirements become final.

The Blueprint Report becomes final.

The Blueprint becomes approved.

The implementation path becomes final.

Client-facing strategic conclusions are released.

```
AI_RECOMMENDATION != HUMAN_STRATEGIC_DECISION

AI_DRAFT != APPROVED_BLUEPRINT
```

## **51\. Proposed Systems of Record**

The following ownership model should be validated during engineering discovery.

| Object | Proposed System of Record |
| ----- | ----- |
| Client / Company / Contact | HubSpot |
| Blueprint Engagement | Second Brain structured layer |
| Diagnostic Record | Second Brain |
| Sales Intelligence Worksheet | Second Brain |
| Questionnaire | Approved questionnaire system / Second Brain reference |
| Evidence Records | Second Brain |
| Data Quality Records | Second Brain |
| Findings | Second Brain |
| Hypotheses | Second Brain |
| Recommendations | Second Brain |
| Implementation Requirements | Second Brain |
| Measurement Strategy | Second Brain |
| Blueprint Report | Approved document repository with Second Brain reference |
| Strategy Deck | Approved document repository with Second Brain reference |
| Meeting Transcript | Fathom with Second Brain reference |
| Client Decisions | Second Brain |
| Approval Records | Second Brain |
| Opportunity / Commercial Record | HubSpot |
| Implementation Project | monday.com where applicable |

```
PROPOSED_SYSTEM_OF_RECORD_REQUIRES_ENGINEERING_VALIDATION
```

## **52\. Source and Field Mapping**

Engineering should maintain explicit mappings for automated information movement.

Minimum mapping metadata:

```
SOURCE_SYSTEM
SOURCE_OBJECT
SOURCE_FIELD
DESTINATION_OBJECT
DESTINATION_FIELD
TRANSFORMATION
VALIDATION_RULE
WRITE_PERMISSION
HUMAN_APPROVAL_REQUIREMENT
FAILURE_BEHAVIOR
```

Field mappings should exist as implementation documentation rather than being inferred from prompts.

## **53\. Write-Back Rules**

Draft AI interpretation must remain distinguishable from approved strategic intelligence.

Only approved information should be promoted to durable client records as final strategic conclusions.

```
AI_DRAFT != APPROVED_RECORD

SOURCE_DATA_MUST_REMAIN_TRACEABLE_TO_ORIGINAL_SOURCE
```

Write-backs should preserve source, validation state, approval state, and relevant historical values.

## **54\. Failure Handling**

The workflow must not silently create complete-looking outputs when required evidence or integrations fail.

Relevant states include:

```
DATA_NOT_AVAILABLE

INTEGRATION_FAILURE

SOURCE_CONFLICT

INSUFFICIENT_EVIDENCE

PERMISSION_DENIED

REQUIRED_CLIENT_INPUT_MISSING

HUMAN_REVIEW_REQUIRED
```

Potential failures include unavailable analytics, unavailable Search Console, CRM access failure, incomplete CRM data, questionnaire failure, website scan failure, missing transcript, missing required client document, identity conflict, or permissions failure.

Material limitations must remain visible in downstream outputs.

```
MISSING_SOURCE_MUST_NOT_BE_HIDDEN_BY_GENERATED_SUMMARY
```

## **55\. Permissions and Client Isolation**

Access should be governed by role, client relationship, workflow state, action, and data sensitivity.

Engineering should support separate permissions for:

View.

Draft.

Edit.

Approve.

Override.

Publish externally.

Change strategic conclusions.

Change commercial fields.

Promote knowledge.

Client-specific Blueprint intelligence must remain client-bound.

```
CLIENT_SPECIFIC_CONTENT_MUST_REMAIN_CLIENT_BOUND

CLIENT_SPECIFIC_FINDING != CROSS_CLIENT_BEST_PRACTICE
```

## **56\. Decision Trace**

Material decisions should preserve:

```
Decision_ID
Blueprint_ID
Decision
Decision_Owner
Date
Inputs
Evidence
Contradicting_Evidence
AI_Recommendation
Human_Decision
Rationale
Approval_ID
Downstream_Action
```

Human overrides should not erase the original AI recommendation.

The system should be able to reconstruct:

What did AI recommend?

What evidence supported it?

What evidence contradicted it?

What was uncertain?

What did the strategist decide?

Why?

What happened downstream?

## **57\. Originality & Source Integrity**

Blueprint work inherits the Originality & Source Integrity Standard from the AI Second Brain Governance and Intelligence Architecture.

```
EXPERT_FRAMEWORK_DOES_NOT_AUTHORIZE_COPYING

REFERENCE_EXAMPLE_DOES_NOT_AUTHORIZE_REUSE

CLIENT_DELIVERABLE_DOES_NOT_BECOME_COPY_BANK

CLIENT_SPECIFIC_CONTENT_MUST_REMAIN_CLIENT_BOUND
```

Potential material source similarity should return:

```
POTENTIAL_SOURCE_SIMILARITY_REQUIRES_HUMAN_REVIEW
```

## **58\. AI Permissions**

AI may:

Assemble cumulative context.

Retrieve approved records.

Classify questions.

Prefill known answers.

Generate personalized questionnaires.

Detect conflicts.

Generate Questionnaire Validation Records.

Draft Research Plans.

Retrieve technically authorized data.

Organize evidence.

Assess preliminary data quality.

Calculate derived values when methodology is explicit.

Segment search intent.

Synthesize cross-source evidence.

Support approved framework analysis.

Generate synthetic AEO research prompts where appropriate.

Organize FAST evidence.

Draft analytical records.

Draft Finding & Evidence Records.

Assemble supporting and contradicting evidence.

Recommend hypothesis statuses.

Draft Root-Cause / Contributing-Condition Records.

Draft Recommendation Records.

Recommend priorities.

Draft implementation requirements.

Draft Measurement Strategy components.

Draft Blueprint Report sections.

Prepare structured inputs for BLUE-003.

Process Strategy Session records.

Draft post-session reconciliations.

Prepare implementation handoffs.

Flag unsupported conclusions.

Flag missing evidence.

Flag source conflicts.

Preserve traceability.

Run required AI Pattern Detection and Originality checks where applicable.

## **59\. AI Restrictions**

AI may not:

Silently overwrite approved client knowledge.

Resolve material source conflicts without required human review.

Treat client statements as independent verification.

Treat third-party modeled data as definitive buyer truth.

Treat automated scans as validated conclusions.

Convert correlation into causation.

Invent missing data.

Invent customer evidence.

Invent claims.

Invent baselines.

Invent attribution.

Invent ROI.

Increase validation certainty during synthesis.

Redefine the ICP from one third-party source.

Claim knowledge of proprietary AI training data.

Guarantee AI recommendation visibility.

Approve root causes.

Approve final strategic recommendations.

Approve priority order.

Approve the Blueprint Report.

Approve the Blueprint.

Make final pricing or scope commitments.

Choose an implementation path solely for commercial benefit.

Send final strategic conclusions externally without human approval.

## **60\. Knowledge Capture and Learning**

After Blueprint completion, preserve:

Approved Blueprint.

Approved Finding & Evidence Records.

Approved Hypothesis Records.

Approved Root-Cause / Contributing-Condition Records.

Approved Recommendation Records.

Approved Measurement Strategy.

Approved Implementation Blueprint.

Approved client decisions.

Final Strategy Deck.

Material unresolved questions.

Material client corrections.

Relevant outcome hypotheses.

Implementation path.

These become client-specific knowledge according to the governing memory architecture.

Client-specific conclusions do not automatically become agency methodology.

```
CLIENT_PATTERN != AGENCY_RULE
```

Potential cross-client learning must pass the approved knowledge-promotion process before becoming agency semantic knowledge.

## **61\. Blueprint Completion Gate**

The Blueprint must not transition to `COMPLETE` until:

| Completion Requirement | Required |
| ----- | ----- |
| Engagement objectives are clear | Yes |
| Required questionnaire information validated | Yes |
| Required research completed or limitations documented | Yes |
| Material evidence has provenance | Yes |
| Data quality assessed where applicable | Yes |
| Material hypotheses have approved status | Yes |
| Root causes / contributing conditions appropriately qualified | Yes |
| Priorities approved | Yes |
| Recommendations pass evidence gate | Yes |
| Implementation requirements sufficiently defined | Yes |
| Measurement requirements documented | Yes |
| Strategic unknowns remain visible | Yes |
| Blueprint Report approved | Yes |
| Strategy Deck approved where required | Yes |
| Required client decisions captured | Yes |
| Strategy Session feedback reconciled | Yes |
| Implementation path documented | Yes |
| Implementation handoff prepared | Yes |
| Human final approval recorded | Yes |

```
INCOMPLETE_REQUIRED_DATA != PERMISSION_TO_MANUFACTURE_COMPLETION
```

## **62\. Permanent Guardrails**

```
AI_ORGANIZES_AND_SYNTHESIZES. HUMANS_APPROVE_STRATEGIC_CONCLUSIONS.

DIAGNOSE_BEFORE_PRESCRIBE

BLUEPRINT_IS_NOT_A_MANDATORY_FOUNDATION_GATE

KNOWN_INFORMATION_SHOULD_NOT_BECOME_BLANK_DISCOVERY

RESEARCH_FOLLOWS_THE_QUESTION

NOT_EVERY_BLUEPRINT_REQUIRES_EVERY_DATA_OBJECT

SOURCE_REPORTED_THIS != AI_INTERPRETED_THIS

AI_INTERPRETED_THIS != STRATEGIST_CONCLUDED_THIS

SOURCE_CONFLICT_REQUIRES_HUMAN_REVIEW

DATA_QUALITY != VALIDATION_STATUS

CLIENT_REPORTED != INDEPENDENTLY_VALIDATED

AUTOMATED_SCAN != VALIDATED_CONCLUSION

CORRELATION != CAUSATION

AI_CONFIDENCE != EVIDENCE

SUMMARIZATION_MUST_NOT_INCREASE_CERTAINTY

VALIDATION_STATUS_MUST_SURVIVE_SYNTHESIS

SYNTHETIC_BUYER_PROMPT != OBSERVED_BUYER_BEHAVIOR

AI_RECOMMENDATION_TEST != FUTURE_AI_VISIBILITY

OBSERVED_AI_RESPONSE != AI_TRAINING_DATA

BLUEPRINT_RECOMMENDATION_EVIDENCE_GATE

AI_RECOMMENDATION != HUMAN_STRATEGIC_DECISION

AI_DRAFT != APPROVED_BLUEPRINT

CLIENT_SPECIFIC_CONTENT_MUST_REMAIN_CLIENT_BOUND

CLIENT_SPECIFIC_FINDING != CROSS_CLIENT_BEST_PRACTICE

BLUEPRINT_MUST_NOT_MANUFACTURE_IMPLEMENTATION_DEPENDENCY

DWY_IS_NOT_A_CURRENT_SIMPLICREATIVE_OFFER
```

## **63\. Intelligence Output**

The Blueprint Intelligence Workflow succeeds when the strategist can determine:

What did the client originally tell us?

What has since been confirmed or revised?

What do we actually know?

What remains a hypothesis?

What evidence supports each finding?

What evidence contradicts it?

How reliable is the underlying data?

Where did each piece of evidence originate?

What did AI calculate or infer?

What did the strategist conclude?

What remains uncertain?

What is creating or contributing to the friction?

What matters most?

What should change?

What should happen first?

What implementation requirements follow?

How should progress be evaluated?

What decisions remain?

What implementation path has been approved?

The Intelligence Layer should make Blueprint analysis more rigorous, traceable, and efficient without creating false certainty.

Its job is not to manufacture answers.

Its job is to make the evidence, reasoning, uncertainty, recommendations, decisions, and implementation requirements easier for SimpliCreative's human strategist to see, evaluate, approve, and use.

Save as:

`BLUE-002_SimpliCreative_Blueprint_Intelligence_Workflow_Spec_v1.1.md`

The Blueprint governing set is now `BLUE-001` Human SOP, `BLUE-002` Intelligence Workflow Spec, and `BLUE-003` Strategy Deck Generation Spec.

