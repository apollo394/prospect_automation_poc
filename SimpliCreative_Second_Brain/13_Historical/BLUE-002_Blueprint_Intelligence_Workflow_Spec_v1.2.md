# **Blueprint Intelligence Workflow Spec**

Version: 1.2 Classification: AI Intelligence Layer Workflow Specification Status: Active Owner: SimpliCreative Source ID: BLUE-002 Related Workflow: SimpliBlueprint Related Documents: SimpliBlueprint Human SOP, Blueprint Strategy Deck Generation Spec, AI Second Brain Governance and Intelligence Architecture Primary Users: AI Engineers, System Architects, SimpliCreative Strategists

## **Purpose**

This specification defines how the SimpliCreative AI Intelligence Layer supports SimpliBlueprint from engagement activation through final Blueprint approval and implementation handoff. It governs: Cumulative context assembly. Blueprint activation. Personalized questionnaire generation. Question metadata and Master Question Bank logic. Questionnaire validation. Research planning. Evidence and data retrieval. Data-quality assessment. Evidence provenance. Cross-source synthesis. Conflict detection. Framework-specific analysis support. Buyer Intent Map generation. Hypothesis validation support. Root-cause and contributing-condition analysis support. Recommendation support. Prioritization. Structured Blueprint intelligence objects. Blueprint Report generation support. Strategy Deck handoff. Strategy Session reconciliation. Final Blueprint reconciliation. Implementation handoff. Engineering traceability. Human approval gates. Workflow completion. Human delivery of the Blueprint engagement is governed by the SimpliBlueprint Human SOP. Strategy Deck generation is governed by the Blueprint Strategy Deck Generation Spec. Agency-wide evidence, source authority, originality, client isolation, memory, and human-approval requirements are governed by the AI Second Brain Governance and Intelligence Architecture. The governing principle is:

AI\_ORGANIZES\_AND\_SYNTHESIZES. HUMANS\_APPROVE\_STRATEGIC\_CONCLUSIONS.

Additional governing rules include:

DIAGNOSE\_BEFORE\_PRESCRIBE

 EVIDENCE\_DETERMINES\_CERTAINTY

 VALIDATION\_STATUS\_MUST\_SURVIVE\_SYNTHESIS

 BLUEPRINT\_RECOMMENDATION\_EVIDENCE\_GATE

 BLUEPRINT\_IS\_NOT\_A\_MANDATORY\_FOUNDATION\_GATE

## **1\. Workflow Boundary**

The Blueprint Intelligence Workflow begins when an approved SimpliBlueprint engagement is activated. It ends when: The Blueprint has been finalized. Material strategic conclusions have been human approved. Required client decisions have been reconciled. The implementation path has been recorded. Required structured intelligence has been preserved. The appropriate implementation handoff has been created. The Blueprint has passed its completion gate. The preferred engineering flow is:

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
 Buyer Intent Map where relevant  
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
 Client Feedback \+ Decisions  
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

## **2\. Blueprint Activation**

After agreement execution and confirmation that the engagement may begin, create an Active Blueprint Record. Minimum fields should include:

Client\_ID  
 Blueprint\_ID  
 Engagement\_Objectives  
 Original\_Problem  
 Desired\_Outcome  
 Why\_Now  
 Approved\_Scope  
 Known\_Stakeholders  
 Known\_Constraints  
 Known\_Partners  
 Diagnostic\_Hypotheses  
 Supporting\_Evidence  
 Contradicting\_Evidence  
 Known\_Unknowns  
 Relevant\_Commitments  
 Source\_References  
 Human\_Owner  
 Activation\_Date  
 Workflow\_Status

The Active Blueprint Record establishes the persistent relationship between the engagement, client, evidence, analysis, recommendations, decisions, and downstream implementation.

## **3\. Required Cumulative Inputs**

Before generating the questionnaire or beginning Blueprint research, assemble all relevant approved information available for the engagement.

| Input | Primary Source | Purpose |
| :---- | :---- | :---- |
| Company and contact information | CRM | Business context |
| Client’s stated problem | Diagnostic Record | Preserve original symptom |
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

MISSING\_INFORMATION \!= PERMISSION\_TO\_INFER

## **4\. Blueprint Cumulative Context Object**

The system should create a Blueprint Cumulative Context Object before questionnaire generation. Recommended fields include:

Client\_ID  
 Blueprint\_ID  
 Original\_Problem  
 Desired\_Outcome  
 Why\_Now  
 Business\_Objectives  
 Marketing\_Objectives  
 Website\_Objectives  
 Known\_ICP  
 Known\_Buying\_Committee  
 Known\_Positioning  
 Known\_Differentiation  
 Known\_Offers  
 Known\_Messaging  
 Known\_Buyer\_Journey  
 Known\_Conversion\_Definitions  
 Known\_Measurement  
 Known\_Technology  
 Known\_Partners  
 Known\_Stakeholders  
 Known\_Constraints  
 Diagnostic\_Hypotheses  
 Supporting\_Evidence  
 Contradicting\_Evidence  
 Strategic\_Unknowns  
 Client\_Commitments  
 SimpliCreative\_Commitments  
 Source\_References  
 Validation\_Statuses

The object must preserve provenance. Do not flatten multiple sources into one unattributed summary.

## **5\. Core Blueprint Intelligence Objects**

The implementation should support stable identifiers and relationships for at least:

Blueprint\_ID

 Blueprint\_Cumulative\_Context\_ID

 Question\_ID

 Questionnaire\_ID

 Questionnaire\_Validation\_Record\_ID

 Research\_Plan\_ID

 Research\_Question\_ID

 Evidence\_Record\_ID

 Data\_Quality\_Record\_ID

 Buyer\_Intent\_Map\_ID

 Finding\_ID

 Hypothesis\_ID

 Root\_Cause\_Record\_ID

 Priority\_Record\_ID

 Recommendation\_ID

 Implementation\_Requirement\_ID

 Measurement\_Strategy\_ID

 Blueprint\_Report\_ID

 Client\_Decision\_ID

 Strategy\_Session\_Record\_ID

 Implementation\_Handoff\_ID

 Approval\_ID

Engineering may normalize these objects differently in the implementation architecture, provided stable relationships, provenance, historical state, and decision traceability are preserved.

## **6\. Personalized Blueprint Questionnaire**

The Blueprint Questionnaire is dynamically generated. It is not a static discovery form. The system should determine: What is already known? What is sufficiently validated? What needs confirmation? What is missing? What materially affects Blueprint outputs? What would improve analysis but does not block completion? What should not be asked again? The questionnaire itself is not strategy. It exists to collect and validate the information required to create strategy.

## **7\. Question Status Logic**

Every candidate question receives one status:

| Status | Definition | AI Behavior |
| :---- | :---- | :---- |
| CONFIRM | A likely answer exists but materially affects strategy | Prefill and request confirmation, correction, or expansion |
| REQUIRED | Missing information blocks a required Blueprint output | Ask directly |
| OPTIONAL | Information improves depth but does not block completion | Include as optional |
| SUPPRESS | Information is already sufficiently validated | Do not ask |

KNOWN\_INFORMATION\_SHOULD\_NOT\_BECOME\_BLANK\_DISCOVERY

For CONFIRM, preferred framing is: “Based on our previous conversations, here is how we currently understand this. Please confirm, correct, or expand.”

## **8\. Question Metadata**

Each candidate question should maintain structured metadata.

| Field | Purpose |
| :---- | :---- |
| question\_id | Persistent identifier |
| question\_status | CONFIRM / REQUIRED / OPTIONAL / SUPPRESS |
| framework | Strategic domain |
| strategic\_purpose | Why information is needed |
| source\_record | Existing structured source |
| source\_document | Supporting source where applicable |
| prefilled\_answer | Existing answer |
| source\_confidence | Confidence in existing answer |
| client\_answer | Submitted response |
| client\_revision | Difference from prefilled answer |
| validation\_status | Governing validation status |
| blueprint\_output\_affected | Dependent Blueprint output |
| required\_for\_completion | Whether Blueprint can proceed without it |
| date\_confirmed | Most recent validation |
| conflicting\_sources | Known conflicts |
| human\_review\_required | Strategist review requirement |

Question status is not evidence validation status.

## **9\. Question Revision and Conflict Logic**

If the client confirms a prefilled answer, record the confirmation and date. If the client changes it: Preserve the original answer. Preserve its source. Preserve the new client response. Record the difference. Update the current client-confirmed answer after required validation. Do not erase historical state. If material sources conflict:

SOURCE\_CONFLICT\_REQUIRES\_HUMAN\_REVIEW

AI must not silently choose between materially conflicting authoritative sources.

## **10\. Master Question Bank**

The Master Question Bank is structured strategic knowledge. It should not be presented wholesale to every client. The system selects, suppresses, or prefills questions according to cumulative context, Blueprint requirements, engagement scope, unresolved strategic questions, and required outputs.

### **Business Objectives and Success**

| Inputs to Collect | Blueprint Output |
| :---- | :---- |
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
| :---- | :---- |
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
| :---- | :---- |
| Customer’s description of problem | Voice of Customer |
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
| :---- | :---- |
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
| :---- | :---- |
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
| :---- | :---- |
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
| :---- | :---- |
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

### **Buyer Intent and Awareness**

The Blueprint should determine how buyer needs, questions, evidence requirements, and appropriate next actions change as the buyer progresses from early recognition through decision.

The Buyer Intent framework supports creation of the Buyer Intent Map and downstream website, content, messaging, conversion, sales-enablement, and information-architecture requirements.

| Buyer Intent | What the Buyer May Be Thinking | Common Content / Page Types | Primary Content Job | Typical CTA Direction |
| :---- | :---- | :---- | :---- | :---- |
| Unaware | “I don’t know there’s an issue yet.” | Thought-leadership article, trend report, executive guide | Introduce a relevant shift, opportunity, tension, or new way of thinking | Read, explore, download |
| Symptom Aware | “Something isn’t working, but I don’t know why.” | Educational article, guide, educational landing page | Help the buyer recognize, understand, and contextualize the symptoms they are experiencing | Learn more, continue exploring |
| Problem Aware | “I think I know what the problem is. Do I actually have it?” | Diagnostic, assessment, quiz, problem-focused landing page | Help the buyer define, evaluate, or diagnose the suspected problem | Take assessment, get score, evaluate |
| Solution Aware | “I know the problem. How can it be solved?” | Methodology page, framework page, solution page, comparison page | Explain possible approaches, decision criteria, and how the problem can be addressed | See how it works, explore solution |
| Product Aware | “I know solutions like yours exist. Why you?” | Service page, sales page, case study, offer landing page | Differentiate the offer, establish fit, provide evidence, and build confidence in the provider | Book, inquire, request proposal |
| Most Aware | “I’m interested. Give me a reason to act now.” | Conversion page, booking page, proposal or offer page | Resolve remaining uncertainty, objections, or friction and make the desired action easy | Book, start, purchase, apply |

Relevant questionnaire and research inputs may include:

| Inputs to Collect or Validate | Blueprint Output |
| :---- | :---- |
| Questions before the buyer recognizes a category need | Unaware / Symptom-Aware Needs |
| Symptoms or situations that trigger recognition | Symptom-Aware Needs |
| Questions after recognizing a problem | Problem-Aware Needs |
| Questions when exploring approaches | Solution-Aware Needs |
| Questions when comparing providers | Product-Aware Needs |
| Proof required to shortlist | Evaluation Requirements |
| Objections or uncertainties before action | Decision Requirements |
| Questions immediately before purchase | Most-Aware Needs |
| Content sales uses at each stage | Sales Enablement Requirements |
| Where buyers stall | Buyer Journey Friction |
| Desired action at each stage | CTA / Progression Requirements |
| Available evidence supporting buyer-stage assumptions | Buyer Intent Evidence |

The awareness model is a strategic classification tool.

It must be validated against available client, customer, sales, search, behavioral, and other approved evidence where available.

Page type does not independently determine buyer intent.

Search intent and buyer intent are related but distinct concepts.

A page may support more than one buyer-intent stage. Where this occurs, the Blueprint should identify the primary buyer intent and determine whether secondary buyer needs must also be supported.

PAGE\_TYPE \!= BUYER\_INTENT

 SEARCH\_INTENT \!= BUYER\_INTENT

 BUYER\_INTENT\_REQUIRES\_EVIDENCE\_OR\_HUMAN\_VALIDATION

### **Buyer Transformation**

| Inputs to Collect | Blueprint Output |
| :---- | :---- |
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
| :---- | :---- |
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
| :---- | :---- |
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

The objective is to make marketing’s impact visible without claiming a level of ROI attribution the evidence cannot support.

## **11\. Questionnaire Validation Record**

After questionnaire submission, generate a Questionnaire Validation Record containing:

| Output | Purpose |
| :---- | :---- |
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

After questionnaire validation, generate a client-specific Blueprint Research Plan. The governing flow is:

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

Each material unresolved hypothesis or strategic question should define:

| Field | Requirement |
| :---- | :---- |
| Research Question | What are we trying to determine? |
| Existing Evidence | What is currently known? |
| Supporting Evidence Needed | What would strengthen the hypothesis? |
| Contradicting Evidence Needed | What would weaken or disprove it? |
| Available Sources | Where can evidence be found? |
| Client Inputs Required | What must the client provide? |
| Automated Tasks | What can approved AI/tools investigate? |
| Human Tasks | What requires expert judgment? |
| Decision Criteria | What determines the conclusion? |

RESEARCH\_FOLLOWS\_THE\_QUESTION

 NOT\_EVERY\_BLUEPRINT\_REQUIRES\_EVERY\_AUDIT

 NOT\_EVERY\_BLUEPRINT\_REQUIRES\_EVERY\_DATA\_OBJECT

## **13\. Resource and Access Requests**

The system should request only resources required by the approved Research Plan. Potential resources include: Analytics. Google Search Console. CRM. Sales-call recordings. Sales decks. Proposals. Customer interviews. Win/loss notes. Case studies. Testimonials. Competitor research. Brand documentation. Previous SEO work. Paid campaign information. PR context. Content libraries. Analytics reports. Technical documentation. CMS access. Marketing automation. Subject-matter expert access. Absence of an unnecessary resource must not block the Blueprint. Absence of a required resource should create an explicit evidence or data gap.

## **14\. Evidence Retrieval**

Evidence retrieval should follow the Research Plan rather than available tooling. Potential evidence sources include: Website and digital properties. Client documents. GA4. Google Search Console. CRM. Sales evidence. Customer evidence. Approved audience research. Search and AI research. Competitive research. Content. Brand and messaging materials. Technology documentation. Campaign information. PR and authority signals. Other approved sources relevant to the research question. Blueprint evidence should be synthesized around strategic questions rather than interpreted platform by platform.

## **15\. Data Quality Assessment**

Data quality is separate from finding validation. Use:

RELIABLE

 USABLE\_WITH\_LIMITATIONS

 DIRECTIONAL

 INSUFFICIENT

 UNAVAILABLE

Relevant checks may include tracking completeness, event configuration, UTM consistency, property selection, historical depth, CRM field consistency, source attribution quality, methodological limitations, and technical configuration. Weak data must reduce the certainty available to conclusions that depend upon it.

DATA\_QUALITY \!= VALIDATION\_STATUS

## **16\. Validation and Evidence Standard**

The Blueprint inherits the governing Validation & Evidence Standard from the AI Second Brain Governance and Intelligence Architecture. Use:

OBSERVED

 CLIENT\_REPORTED

 HYPOTHESIS

 DIRECTIONAL

 VALIDATED

 PARTIALLY\_VALIDATED

 CONTRADICTED

 INSUFFICIENT\_EVIDENCE

 UNKNOWN

Every material finding should preserve:

Finding  
 Validation\_Status  
 Validation\_Basis  
 Sources  
 Evidence  
 Evidence\_Date  
 Data\_Quality  
 Contradicting\_Evidence  
 Confidence  
 Related\_Hypothesis  
 Human\_Reviewer  
 Review\_Date

 EVIDENCE\_DETERMINES\_CERTAINTY

 VALIDATION\_STATUS\_MUST\_SURVIVE\_SYNTHESIS

 SUMMARIZATION\_MUST\_NOT\_INCREASE\_CERTAINTY

 AI\_CONFIDENCE \!= EVIDENCE

## **17\. Finding Provenance**

Finding validation and provenance are separate concepts. Preserve provenance where applicable as:

SOURCE\_EVIDENCE

 CLIENT\_STATEMENT

 AI\_CALCULATION

 AI\_INTERPRETATION

 STRATEGIST\_INTERPRETATION

 HUMAN\_VALIDATED\_CONCLUSION

The Intelligence Layer must distinguish:

SOURCE\_REPORTED\_THIS

 AI\_CALCULATED\_THIS

 AI\_INTERPRETED\_THIS

 STRATEGIST\_CONCLUDED\_THIS

These are not equivalent.

## **18\. Finding & Evidence Record**

Each material finding should maintain a structured Finding & Evidence Record.

| Field | Requirement |
| :---- | :---- |
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
| :---- | :---- | :---- |
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

Do not treat traffic, engagement rate, or engagement time as business success by themselves. Prioritize meaningful buyer progression and downstream business outcomes where evidence permits.

## **20\. Google Search Console Data Retrieval**

Retrieve or request relevant Google Search Console data where available and required by the Research Plan.

| Data | Blueprint Use |
| :---- | :---- |
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

INFORMATIONAL

 PROBLEM\_AWARE

 SOLUTION\_CATEGORY

 COMPARISON\_EVALUATION

 COMMERCIAL\_DECISION

 BRANDED

Do not conclude that “organic traffic is down” without determining which pages, queries, and intents account for the decline.

## **21\. CRM Data Retrieval**

CRM evidence is important because marketing activity should be connected to meaningful business outcomes where available systems permit it. Retrieve or request relevant fields such as:

| Data | Blueprint Use |
| :---- | :---- |
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

Traffic Source  
         ↓  
 Conversion  
         ↓  
 Qualified Lead  
         ↓  
 Opportunity  
         ↓  
 Closed-Won

Only make these connections where IDs, UTMs, CRM fields, integrations, or other reliable evidence support them. If the chain breaks, create a Measurement Gap. Do not infer reliable marketing ROI from incomplete CRM evidence.

## **22\. CRM Validation Questions**

Where CRM definitions are unclear, determine: What counts as a lead? What qualifies an MQL? What qualifies an SQL? Who owns qualification? What counts as an opportunity? How is source attribution assigned? Is attribution first-touch, last-touch, multi-touch, manual, or mixed? Are offline sales activities captured? Are revenue values complete? Are lost reasons recorded consistently? Unclear field definitions should reduce the reliability of conclusions based on those fields.

## **23\. SparkToro Audience Validation**

Where relevant to the Research Plan, SparkToro may be used as an audience validation and discovery source. Potential evidence includes: Search behavior and topics. Frequently visited websites. Social platforms. Accounts followed. Podcasts. YouTube channels. Publications and media sources. Keywords and phrases. Relevant topical affinities. Professional or demographic indicators where available. Geographic concentration. Related interests. Audience overlap. Competitor audience signals. The purpose is to test questions such as: Does the stated ICP appear to consume the sources expected? Are there overlooked publications, communities, podcasts, or authorities? Do audience interests support or challenge proposed messaging themes? Are there adjacent topics relevant to content strategy? Do current channels align with observable audience attention? Which third-party sources may matter for authority, PR, partnerships, or AI recommendation visibility? Does modeled audience behavior support or contradict the stated ICP? SparkToro is third-party modeled audience evidence. It should validate, enrich, or challenge assumptions. It should not independently redefine the ICP.

## **24\. Cross-Source Synthesis**

Do not produce disconnected platform summaries when the strategic question requires synthesis. The preferred model is:

| Strategic Question | Relevant Evidence | Structured Output |
| :---- | :---- | :---- |
| Where does attention originate? | Analytics \+ Search \+ CRM \+ audience evidence | Acquisition Map |
| What are buyers trying to understand, evaluate, or decide? | Customer \+ sales \+ search \+ behavior \+ audience evidence | Buyer Intent Map |
| Who is actually converting? | Analytics \+ CRM \+ customer evidence | ICP Validation |
| What content attracts meaningful demand? | Landing pages \+ search \+ downstream outcomes | Content Performance Map |
| Which sources create quality? | Acquisition \+ conversion \+ CRM | Channel Quality |
| Where does the journey break? | Behavior \+ intent \+ lifecycle progression | Friction Map |
| What can marketing prove? | Analytics \+ CRM \+ measurement architecture | Measurement Plan |
| Where should authority be strengthened? | Referral \+ search \+ audience/source evidence | Authority / Source Map |
| Does stated ICP match observed evidence? | Customer \+ CRM \+ search \+ audience evidence | ICP Validation Record |

The system should synthesize around strategic questions rather than around software products.

## **25\. Buyer Intent Map**

Where relevant to the approved Research Plan and engagement scope, the Blueprint should create a Buyer Intent Map that synthesizes what the buyer is trying to understand, evaluate, believe, or decide across the buying journey.

The Buyer Intent Map should be derived from approved evidence rather than page type or generic funnel assumptions.

Potential evidence may include:

Client and stakeholder input. Voice of Customer evidence. Sales-call evidence. Recurring sales questions and objections. CRM and win/loss evidence. Search behavior. Website behavior. Content performance. Customer interviews. Buyer research. Approved audience research. Existing sales-enablement content. Other approved evidence relevant to buyer decision-making.

The Buyer Intent Map should support the following minimum structure:

| Field | Purpose |
| :---- | :---- |
| Buyer Intent Stage | Unaware, Symptom Aware, Problem Aware, Solution Aware, Product Aware, or Most Aware |
| Buyer Situation / Trigger | What may cause the buyer to enter this stage |
| Buyer Question | What the buyer is trying to understand or decide |
| Buyer Need | What information or clarity is required |
| Content Job | What content must accomplish |
| Evidence / Proof Needed | What helps the buyer believe or evaluate |
| Objections / Friction | What may prevent progression |
| Appropriate Content / Page Role | What type of experience may support the need |
| Desired Next Action | Appropriate progression from this stage |
| Supporting Evidence | Evidence supporting the classification |
| Validation Status | Governing evidence status |
| Strategic Implication | What this means for messaging, content, website, conversion, or sales enablement |

The Buyer Intent Map is a strategic input to information architecture, page objectives, content requirements, messaging, conversion strategy, sales enablement, and implementation requirements.

It should not prescribe identical content structures for every page associated with the same buyer-intent stage.

Page type does not determine buyer intent.

Search intent may inform discoverability strategy, but it does not independently determine the buyer’s level of awareness or the strategic job of a page.

A page may support more than one buyer-intent stage. Where this occurs, the Blueprint should identify the primary buyer intent and determine whether secondary buyer needs must also be supported.

When downstream page requirements are created, the preferred reasoning chain is:

APPROVED\_BUYER\_INTENT\_MAP  
     	↓  
 PAGE\_OBJECTIVE  
     	↓  
 RELEVANT\_EVIDENCE  
     	↓  
 CONTENT\_JOB  
     	↓  
 CONTENT\_REQUIREMENTS  
     	↓  
 PROOF\_NEEDED  
     	↓  
 DESIRED\_NEXT\_ACTION

Content requirements should be specific enough to guide execution without prematurely writing final page copy.

Relevant page requirements may include:

Buyer question or need the page must address. Core message or idea the buyer must understand. Relevant problem, symptom, opportunity, or decision context. Differentiation or positioning that must be communicated. Evidence, proof, expertise, or credibility required. Objections or uncertainties that need to be addressed. Relevant offer, solution, methodology, or next-step explanation. Discoverability requirements where applicable. Conversion or interaction requirements. Primary and secondary desired actions.

The Blueprint must not prescribe conventional page sections solely because they are commonly associated with a page type.

BUYER\_INTENT\_MAP \= GOVERNING\_BLUEPRINT\_OUTPUT\_FOR\_BUYER\_INTENT

 PAGE\_TYPE \!= CONTENT\_STRATEGY

 PAGE\_CONTENT\_REQUIREMENTS\_MUST\_TRACE\_TO\_APPROVED\_BUYER\_INTENT\_MAP \+ PAGE\_OBJECTIVE \+ EVIDENCE \+ DESIRED\_NEXT\_ACTION

 AI\_MUST\_NOT\_REINFER\_BUYER\_INTENT\_WHEN\_APPROVED\_BUYER\_INTENT\_EXISTS

 CONTENT\_REQUIREMENT\_MUST\_TRACE\_TO\_STRATEGIC\_PURPOSE\_OR\_EVIDENCE

If new evidence materially conflicts with an approved Buyer Intent Map, preserve the conflict and require human review rather than silently changing downstream page or content strategy.

BUYER\_INTENT\_CONFLICT\_REQUIRES\_HUMAN\_REVIEW

The objective is not to force every buyer or page into a rigid funnel.

The objective is to make the relationship between buyer intent, page purpose, content, proof, and next action explicit enough to guide responsible strategy and implementation.

## **26\. Required Data Synthesis Objects**

Generate only the objects required by the approved Research Plan.

| Object | Purpose |
| :---- | :---- |
| Acquisition Map | Shows where attention originates |
| Search Intent Map | Shows how relevant buyers search |
| ICP Validation Record | Compares stated ICP with observed evidence |
| Buyer Intent Map | Defines what buyers need to understand, evaluate, believe, and do as they progress through relevant stages of awareness |
| Buyer Journey Map | Connects discovery through meaningful action |
| Conversion Performance Record | Identifies meaningful actions |
| Pipeline Contribution Record | Connects marketing evidence to CRM outcomes |
| Content Performance Map | Identifies content associated with meaningful attention or outcomes |
| Authority / Source Map | Identifies relevant external authority sources |
| Measurement Gap Record | Shows where tracking or attribution breaks |
| Data Quality Record | Records reliability and limitations |
| Baseline Metrics | Preserves approved pre-implementation measures |
| Strategic Data Findings | Feeds hypothesis and root-cause validation |

NOT\_EVERY\_BLUEPRINT\_REQUIRES\_EVERY\_DATA\_OBJECT

## **27\. Data Conflict Handling**

When evidence sources disagree, preserve the conflict. Each material discrepancy should contain:

Observed\_Conflict  
 Source\_A  
 Source\_B  
 Possible\_Explanation  
 Additional\_Evidence\_Required  
 Strategic\_Significance  
 Current\_Validation\_Status  
 Recommended\_Validation\_Step

Examples may include: The client describes one primary buyer while CRM opportunity data shows another pattern. Search visibility exists for a topic while CRM evidence shows little downstream contribution. Analytics reports conversions from a channel while CRM attribution does not support the same conclusion. Audience research suggests an authority source matters while referral or customer evidence shows little observable influence. An approved Buyer Intent Map conflicts with newly discovered buyer, sales, search, or behavioral evidence. A conflict is not automatically proof that either source is wrong. Material conflicts require human review.

## **28\. Engineering Traceability for Data-Derived Findings**

Every material data-derived finding should preserve:

| Field | Requirement |
| :---- | :---- |
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

SOURCE\_REPORTED\_THIS

 AI\_CALCULATED\_THIS

 AI\_INTERPRETED\_THIS

 STRATEGIST\_CONCLUDED\_THIS

These are not equivalent.

## **29\. Framework-Specific Analysis Support**

The Intelligence Layer may support only the frameworks relevant to the engagement objective, scope, evidence, and approved Research Plan. Relevant domains may include: Business objectives. ICP and buying committee. Buyer problems and stakes. Positioning and differentiation. Voice of Customer. Offer architecture. Buyer intent. Buyer journey. Buyer transformation. Storytelling and messaging. Proof and credibility. FAST. Website and content. Discoverability. SEO. AEO / GEO. Authority. Conversion. Measurement. Marketing ecosystem alignment. Technology and operational requirements. Not every Blueprint requires equal depth in every domain.

## **30\. Storytelling & Messaging Analysis Support**

The Intelligence Layer may assemble and synthesize validated inputs for SimpliCreative’s Storytelling & Messaging Architecture. Relevant inputs may include: ICP. Buyer desire. Functional problem. Emotional problem. Belief-level problem. Root conflict. Brand POV. Expertise and proof. Offer and process. Calls to action. Cost of inaction. Future state. Aspirational identity. Differentiation. AI may draft the Storytelling & Messaging Architecture. Human strategic review is required. External frameworks may inform approved methodology but do not authorize copying or third-party branded language in client deliverables.

## **31\. FAST Analysis Support**

The Intelligence Layer may organize evidence across the four FAST domains.

### **Flexible**

Potential evidence includes: CMS. Ownership. Editing capabilities. Landing-page capabilities. Developer dependencies. Reusable components. Approval friction. Update speed.

### **Accessible**

Potential evidence includes: Automated accessibility scans. Human accessibility review. Known client requirements. Prior accessibility work. Relevant user needs. Automated tools are preliminary evidence only. They do not establish compliance.

### **Strategic**

Potential evidence includes: ICP. Messaging. Positioning. Buyer journey. Buyer intent. Discoverability. AEO. SEO / GEO. Authority. Offers. CTAs. Content. Proof. Marketing ecosystem context.

### **Trackable**

Potential evidence includes: Conversion definitions. Analytics. CRM. Marketing automation. Funnel stages. Attribution. Leadership reporting. Data gaps. FAST findings inherit the governing Validation & Evidence Standard.

## **32\. AEO / AI Recommendation Research**

Where approved by the Research Plan, the Intelligence Layer may perform AEO research using validated client inputs. Relevant inputs may include:

| Input | Purpose |
| :---- | :---- |
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

AI may generate approximately 10 realistic synthetic buyer-research prompts when appropriate to the approved methodology. Prompts should reflect realistic research situations rather than generic keyword substitutions.

SYNTHETIC\_BUYER\_PROMPT \!= OBSERVED\_BUYER\_BEHAVIOR

Potential research outputs include:

| Research Input / Observation | Output |
| :---- | :---- |
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

The analysis may help answer: Who may use AI during the buying process? What might they ask? Which brands currently appear in the tested research environment? Why do those brands appear to be recommended? Which sources recur? Where is the client absent or weakly represented? What content, evidence, authority, or source opportunities deserve consideration?

SYNTHETIC\_BUYER\_PROMPT \!= OBSERVED\_BUYER\_BEHAVIOR

 AI\_RECOMMENDATION\_TEST \!= FUTURE\_AI\_VISIBILITY

 OBSERVED\_AI\_RESPONSE \!= AI\_TRAINING\_DATA

Do not imply guaranteed future AI recommendations. Do not claim visibility into proprietary training data.

## **33\. Hypothesis Validation Support**

For each material Diagnostic or Blueprint hypothesis, AI should assemble:

Hypothesis  
 Supporting\_Evidence  
 Contradicting\_Evidence  
 Evidence\_Quality  
 Missing\_Evidence  
 Source\_Conflicts  
 AI\_Interpretation  
 Recommended\_Status  
 Human\_Review\_Requirement

Final hypothesis states are:

VALIDATED

 PARTIALLY\_VALIDATED

 DISPROVED

 INSUFFICIENT\_EVIDENCE

AI may recommend. The strategist approves. Preliminary and disproved hypotheses should remain available in the reasoning history.

## **34\. Root-Cause and Contributing-Condition Analysis**

The preferred reasoning chain is:

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

A root cause must not be declared merely because it is plausible. Where evidence supports contributing conditions but not causal certainty, preserve that distinction. The system must not force every engagement into one root cause. A Root-Cause / Contributing-Condition Record should preserve:

Root\_Cause\_Record\_ID  
 Blueprint\_ID  
 Related\_Finding\_IDs  
 Related\_Hypothesis\_IDs  
 Conclusion  
 Classification  
 Supporting\_Evidence  
 Contradicting\_Evidence  
 Validation\_Status  
 Validation\_Basis  
 Business\_Impact  
 Human\_Approval

## **35\. Prioritization**

Approved findings and recommendations should use:

FIX\_NOW

 FIX\_NEXT

 MONITOR

 DO\_NOT\_PRIORITIZE\_YET

Priority should consider: Business impact. Strategic importance. Evidence strength. Dependencies. Implementation sequence. Risk. Client capacity. Measurement implications. Known constraints. Priority is not simply a ranking of what appears most broken.

## **36\. Recommendation Record**

Each material recommendation should preserve:

| Field | Requirement |
| :---- | :---- |
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

BLUEPRINT\_RECOMMENDATION\_EVIDENCE\_GATE

If evidence does not responsibly support a recommendation:

UNRESOLVED\_QUESTION

Do not manufacture a prescription.

## **37\. Blueprint Traceability**

The system should preserve the reasoning chain:

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

Where page, content, messaging, or conversion requirements are informed by buyer intent, the system should additionally preserve:

Buyer Evidence  
     	↓  
 Approved Buyer Intent Map  
     	↓  
 Page Objective  
     	↓  
 Content Job  
     	↓  
 Content Requirement  
     	↓  
 Proof Requirement  
     	↓  
 Desired Next Action

The system must be able to explain why a material recommendation exists.

## **38\. Implementation Requirements**

Approved recommendations should translate into structured implementation requirements. Relevant fields include:

Implementation\_Requirement\_ID  
 Blueprint\_ID  
 Workstream  
 Recommendation\_ID  
 Priority  
 Dependencies  
 Implementation\_Requirement  
 Responsible\_Party  
 Strategic\_Source  
 Related\_Buyer\_Intent  
 Related\_Page\_Objective  
 Required\_Client\_Decision  
 Measurement\_Requirement  
 Success\_Measure  
 Known\_Constraint  
 Unresolved\_Issue  
 Human\_Approval

Related\_Buyer\_Intent and Related\_Page\_Objective apply where the implementation requirement is materially informed by buyer-intent or page-strategy decisions.

The resulting Implementation Blueprint should be usable by SimpliCreative, the client’s internal team, or another qualified implementation partner.

## **39\. Measurement & Impact**

The Blueprint should define how meaningful marketing progress and business impact can be evaluated. Relevant structured outputs may include: Conversion Framework. Funnel Measurement. Event Requirements. Pipeline Measurement. Revenue Connection where defensible. Executive Reporting Requirements. Baseline Measures. Data Gaps. Data Architecture. Reporting Baseline. The objective is to make marketing’s impact visible without claiming a level of ROI attribution the available evidence cannot support.

## **40\. Blueprint Report Generation**

The Blueprint Report is the deeper working strategic document. It should derive from approved structured Blueprint intelligence rather than raw research. Relevant sections may include: Executive Summary. Objectives. Research and Evidence Base. Data Quality and Limitations. Validated Findings. Root Causes and Contributing Conditions. Strategic Priorities. ICP and Buyer Analysis. Buyer Intent Map. Buyer Journey. Positioning and Differentiation. Storytelling & Messaging Architecture. Proof and Credibility. FAST Analysis. Discoverability. SEO / AEO / GEO. Website and Content Requirements. Conversion Strategy. Measurement Strategy. Implementation Blueprint. Unresolved Questions. Supporting Research. Not every Blueprint requires identical sections.

RAW\_RESEARCH\_DOES\_NOT\_GENERATE\_FINAL\_BLUEPRINT

 BLUEPRINT\_REPORT\_MUST\_TRACE\_TO\_APPROVED\_STRUCTURED\_INTELLIGENCE

AI may draft the Report. The strategist approves material strategic conclusions and the final Report.

## **41\. Strategy Deck Generation Handoff**

The Blueprint Strategy Deck is governed by BLUE-003 Blueprint Strategy Deck Generation Spec. BLUE-002 must provide the approved structured inputs required for deck generation, including:

Blueprint\_ID  
 Client\_Objectives  
 Approved\_Findings  
 Finding\_IDs  
 Validation\_Statuses  
 Validation\_Bases  
 Supporting\_Evidence  
 Business\_Implications  
 Approved\_Recommendations  
 Recommendation\_IDs  
 Priorities  
 Implementation\_Requirements  
 Dependencies  
 Measurement\_Strategy  
 Success\_Measures  
 Measurement\_Limitations  
 Strategic\_Unknowns  
 Client\_Decisions\_Required  
 Constraints  
 Approved\_Claims  
 Blueprint\_Report\_References  
 Strategy\_Session\_Objective

Where materially relevant to the Strategy Deck narrative, approved Buyer Intent Map findings may be included through the approved structured Blueprint intelligence.

The Strategy Deck must not become an independent source of strategic truth.

DECK\_FINDING\_MUST\_TRACE\_TO\_BLUEPRINT\_EVIDENCE

 DECK\_RECOMMENDATION\_MUST\_TRACE\_TO\_BLUEPRINT\_REASONING

## **42\. Human Strategy Session**

The Strategy Session is human-led. AI may prepare supporting evidence, decision context, approved Blueprint records, Strategy Deck inputs, and relevant strategist support. The Strategy Session may produce: Client corrections. Client questions. Client disagreements. Approved decisions. Changed assumptions. Changed priorities. Implementation decisions. New constraints. New evidence. Remaining unknowns. New commitments. AI must not treat these as automatically approved strategic changes.

## **43\. Strategy Session Record**

After the Strategy Session, create or update a Strategy Session Record. Recommended fields include:

Strategy\_Session\_Record\_ID  
 Blueprint\_ID  
 Session\_Date  
 Participants  
 Client\_Corrections  
 Client\_Questions  
 Client\_Disagreements  
 Approved\_Decisions  
 Changed\_Assumptions  
 Changed\_Priorities  
 Implementation\_Decisions  
 New\_Constraints  
 New\_Evidence  
 Remaining\_Unknowns  
 Client\_Commitments  
 SimpliCreative\_Commitments  
 Strategist\_Notes  
 Source\_References  
 Human\_Validation\_Status

## **44\. Final Intelligence Reconciliation**

After the Strategy Session, reconcile all material client feedback against the structured Blueprint intelligence. The system should determine: What was corrected? What changed? Which findings are affected? Which hypotheses are affected? Which recommendations are affected? Which priorities changed? Which implementation requirements changed? Which measurement requirements changed? Did the Buyer Intent Map materially change? Did any page objectives materially change? Which unknowns were resolved? Which new unknowns appeared? Which client decisions are now final? Material changes require human validation. Historical state must be preserved.

CLIENT\_FEEDBACK \!= AUTOMATIC\_STRATEGIC\_TRUTH

 CLIENT\_FEEDBACK\_DOES\_NOT\_AUTOMATICALLY\_BECOME\_AGENCY\_METHODOLOGY

## **45\. Final Blueprint Approval**

Before the Blueprint becomes final: Reconcile the Blueprint Report. Reconcile Finding & Evidence Records. Reconcile Hypothesis Records. Reconcile Root-Cause / Contributing-Condition Records. Reconcile Recommendation Records. Reconcile priorities. Reconcile the Buyer Intent Map where applicable. Reconcile page objectives where applicable. Reconcile Implementation Requirements. Reconcile Measurement Strategy. Reconcile client decisions. Preserve unresolved questions. Confirm Strategy Deck consistency where applicable. Human approval is required. The approved state should be:

BLUEPRINT\_APPROVED

## **46\. Standalone Value Test**

The Blueprint must create standalone strategic value. Before final completion, determine whether a capable client team or qualified implementation partner can understand: What needs to happen. Why it matters. What evidence supports it. What should happen first. What dependencies exist. How progress should be evaluated. What remains unresolved.

Where website, content, messaging, or conversion implementation is material, the Blueprint should also make sufficiently clear:

Who the relevant buyer is. What the buyer is trying to understand or decide. What important pages are intended to accomplish. What content job those pages need to perform. What evidence or proof is required. What action the experience should support.

If the approved Blueprint cannot support responsible implementation without SimpliCreative reconstructing its reasoning, the Blueprint is not sufficiently implementation-ready.

BLUEPRINT\_MUST\_NOT\_MANUFACTURE\_IMPLEMENTATION\_DEPENDENCY

## **47\. Post-Blueprint Implementation Paths**

Approved implementation paths are:

CLIENT / PARTNER IMPLEMENTATION

 SIMPLIFOUNDATION

Client / Partner Implementation means the client implements internally or through another qualified partner. It is not a SimpliCreative offer. SimpliFoundation is SimpliCreative’s custom implementation engagement when appropriate.

DWY\_IS\_NOT\_A\_CURRENT\_SIMPLICREATIVE\_OFFER

 BLUEPRINT\_IS\_NOT\_A\_MANDATORY\_FOUNDATION\_GATE

## **48\. Strategy-to-Execution Handoff**

When implementation follows Blueprint, create an Implementation Handoff appropriate to the selected path. The handoff should preserve:

Implementation\_Handoff\_ID  
 Client\_ID  
 Blueprint\_ID  
 Implementation\_Path  
 Approved\_Objectives  
 Approved\_Findings  
 Evidence\_Boundaries  
 Approved\_Priorities  
 Approved\_Recommendations  
 Approved\_Buyer\_Intent\_Map  
 Approved\_Page\_Objectives  
 Implementation\_Requirements  
 Dependencies  
 Client\_Decisions  
 Measurement\_Requirements  
 Success\_Measures  
 Known\_Constraints  
 Unresolved\_Questions  
 Relevant\_Source\_References  
 Human\_Approval

Approved\_Buyer\_Intent\_Map and Approved\_Page\_Objectives apply where relevant to the approved Blueprint and implementation path.

SimpliFoundation should not need to reconstruct Blueprint reasoning from scratch. Likewise, a qualified client team or implementation partner should receive enough context to act without requiring SimpliCreative participation.

## **49\. Workflow State Model**

The implementation should support the following minimum business states:

BLUEPRINT\_ACTIVATED

 CUMULATIVE\_CONTEXT\_PENDING

 CUMULATIVE\_CONTEXT\_READY

 QUESTIONNAIRE\_GENERATED

 QUESTIONNAIRE\_PENDING\_CLIENT

 QUESTIONNAIRE\_RECEIVED

 QUESTIONNAIRE\_VALIDATION\_PENDING

 QUESTIONNAIRE\_VALIDATED

 RESEARCH\_PLAN\_PENDING

 RESEARCH\_PLAN\_APPROVED

 EVIDENCE\_COLLECTION\_IN\_PROGRESS

 EVIDENCE\_COLLECTION\_COMPLETE

 STRATEGIC\_ANALYSIS\_IN\_PROGRESS

 PENDING\_STRATEGIST\_VALIDATION

 STRUCTURED\_BLUEPRINT\_INTELLIGENCE\_APPROVED

 BLUEPRINT\_REPORT\_DRAFTED

 PENDING\_BLUEPRINT\_REVIEW

 STRATEGY\_DECK\_HANDOFF\_READY

 STRATEGY\_SESSION\_READY

 STRATEGY\_SESSION\_COMPLETE

 FINAL\_RECONCILIATION\_PENDING

 PENDING\_FINAL\_APPROVAL

 BLUEPRINT\_APPROVED

 IMPLEMENTATION\_HANDOFF\_READY

 COMPLETE

Engineering may add technical substates without changing governing business authority.

## **50\. Automation Triggers**

Approved state transitions may trigger automation. Examples include: Blueprint activation triggers cumulative context assembly. Completed context assembly triggers question classification. Approved questionnaire submission triggers validation. Completed questionnaire validation triggers Research Plan generation. Approved Research Plan enables evidence retrieval. Completed evidence collection enables analysis support. Approved structured intelligence enables Blueprint Report drafting. Approved Blueprint analysis enables Strategy Deck handoff. Completed Strategy Session enables reconciliation. Final human Blueprint approval enables implementation handoff. Automation must stop at required human approval gates.

## **51\. Human Approval Gates**

Human approval is required before: Material source conflicts are resolved. Material client revisions become strategic conclusions. A hypothesis becomes a validated strategic conclusion. A root cause is approved. A strategically consequential finding is finalized. A Buyer Intent Map becomes approved strategic intelligence where materially consequential. A buyer-intent conflict is resolved. A recommendation becomes approved Blueprint strategy. Priority order becomes final. Material implementation requirements become final. The Blueprint Report becomes final. The Blueprint becomes approved. The implementation path becomes final. Client-facing strategic conclusions are released.

AI\_RECOMMENDATION \!= HUMAN\_STRATEGIC\_DECISION

 AI\_DRAFT \!= APPROVED\_BLUEPRINT

## **52\. Proposed Systems of Record**

The following ownership model should be validated during engineering discovery.

| Object | Proposed System of Record |
| :---- | :---- |
| Client / Company / Contact | HubSpot |
| Blueprint Engagement | Second Brain structured layer |
| Diagnostic Record | Second Brain |
| Sales Intelligence Worksheet | Second Brain |
| Questionnaire | Approved questionnaire system / Second Brain reference |
| Evidence Records | Second Brain |
| Data Quality Records | Second Brain |
| Buyer Intent Map | Second Brain |
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

PROPOSED\_SYSTEM\_OF\_RECORD\_REQUIRES\_ENGINEERING\_VALIDATION

## **53\. Source and Field Mapping**

Engineering should maintain explicit mappings for automated information movement. Minimum mapping metadata:

SOURCE\_SYSTEM  
 SOURCE\_OBJECT  
 SOURCE\_FIELD  
 DESTINATION\_OBJECT  
 DESTINATION\_FIELD  
 TRANSFORMATION  
 VALIDATION\_RULE  
 WRITE\_PERMISSION  
 HUMAN\_APPROVAL\_REQUIREMENT  
 FAILURE\_BEHAVIOR

Field mappings should exist as implementation documentation rather than being inferred from prompts.

## **54\. Write-Back Rules**

Draft AI interpretation must remain distinguishable from approved strategic intelligence. Only approved information should be promoted to durable client records as final strategic conclusions.

AI\_DRAFT \!= APPROVED\_RECORD

 SOURCE\_DATA\_MUST\_REMAIN\_TRACEABLE\_TO\_ORIGINAL\_SOURCE

Write-backs should preserve source, validation state, approval state, and relevant historical values.

## **55\. Failure Handling**

The workflow must not silently create complete-looking outputs when required evidence or integrations fail. Relevant states include:

DATA\_NOT\_AVAILABLE

 INTEGRATION\_FAILURE

 SOURCE\_CONFLICT

 INSUFFICIENT\_EVIDENCE

 PERMISSION\_DENIED

 REQUIRED\_CLIENT\_INPUT\_MISSING

 HUMAN\_REVIEW\_REQUIRED

Potential failures include unavailable analytics, unavailable Search Console, CRM access failure, incomplete CRM data, questionnaire failure, website scan failure, missing transcript, missing required client document, identity conflict, or permissions failure. Material limitations must remain visible in downstream outputs.

MISSING\_SOURCE\_MUST\_NOT\_BE\_HIDDEN\_BY\_GENERATED\_SUMMARY

## **56\. Permissions and Client Isolation**

Access should be governed by role, client relationship, workflow state, action, and data sensitivity. Engineering should support separate permissions for: View. Draft. Edit. Approve. Override. Publish externally. Change strategic conclusions. Change commercial fields. Promote knowledge. Client-specific Blueprint intelligence must remain client-bound.

CLIENT\_SPECIFIC\_CONTENT\_MUST\_REMAIN\_CLIENT\_BOUND

 CLIENT\_SPECIFIC\_FINDING \!= CROSS\_CLIENT\_BEST\_PRACTICE

## **57\. Decision Trace**

Material decisions should preserve:

Decision\_ID  
 Blueprint\_ID  
 Decision  
 Decision\_Owner  
 Date  
 Inputs  
 Evidence  
 Contradicting\_Evidence  
 AI\_Recommendation  
 Human\_Decision  
 Rationale  
 Approval\_ID  
 Downstream\_Action

Human overrides should not erase the original AI recommendation. The system should be able to reconstruct: What did AI recommend? What evidence supported it? What evidence contradicted it? What was uncertain? What did the strategist decide? Why? What happened downstream?

## **58\. Originality & Source Integrity**

Blueprint work inherits the Originality & Source Integrity Standard from the AI Second Brain Governance and Intelligence Architecture.

EXPERT\_FRAMEWORK\_DOES\_NOT\_AUTHORIZE\_COPYING

 REFERENCE\_EXAMPLE\_DOES\_NOT\_AUTHORIZE\_REUSE

 CLIENT\_DELIVERABLE\_DOES\_NOT\_BECOME\_COPY\_BANK

 CLIENT\_SPECIFIC\_CONTENT\_MUST\_REMAIN\_CLIENT\_BOUND

Potential material source similarity should return:

POTENTIAL\_SOURCE\_SIMILARITY\_REQUIRES\_HUMAN\_REVIEW

## **59\. AI Permissions**

AI may: Assemble cumulative context. Retrieve approved records. Classify questions. Prefill known answers. Generate personalized questionnaires. Detect conflicts. Generate Questionnaire Validation Records. Draft Research Plans. Retrieve technically authorized data. Organize evidence. Assess preliminary data quality. Calculate derived values when methodology is explicit. Segment search intent. Synthesize cross-source evidence. Support approved framework analysis. Generate synthetic AEO research prompts where appropriate. Organize FAST evidence. Draft analytical records. Draft Finding & Evidence Records. Assemble supporting and contradicting evidence. Recommend hypothesis statuses. Draft Root-Cause / Contributing-Condition Records. Draft Recommendation Records. Recommend priorities. Draft implementation requirements. Draft Measurement Strategy components. Draft Blueprint Report sections. Prepare structured inputs for BLUE-003. Process Strategy Session records. Draft post-session reconciliations. Prepare implementation handoffs. Flag unsupported conclusions. Flag missing evidence. Flag source conflicts. Preserve traceability. Draft Buyer Intent Maps from approved evidence. Map approved buyer intent to page objectives and content requirements. Flag conflicts between approved buyer intent and newly discovered evidence. Run required AI Pattern Detection and Originality checks where applicable.

## **60\. AI Restrictions**

AI may not: Silently overwrite approved client knowledge. Resolve material source conflicts without required human review. Treat client statements as independent verification. Treat third-party modeled data as definitive buyer truth. Treat automated scans as validated conclusions. Convert correlation into causation. Invent missing data. Invent customer evidence. Invent claims. Invent baselines. Invent attribution. Invent ROI. Increase validation certainty during synthesis. Redefine the ICP from one third-party source. Claim knowledge of proprietary AI training data. Guarantee AI recommendation visibility. Approve root causes. Approve final strategic recommendations. Approve priority order. Approve the Blueprint Report. Approve the Blueprint. Make final pricing or scope commitments. Choose an implementation path solely for commercial benefit. Send final strategic conclusions externally without human approval. Infer buyer intent from page type alone. Replace approved buyer intent with generic funnel assumptions. Silently change approved buyer intent when new evidence conflicts. Generate page content requirements from page type alone.

## **61\. Knowledge Capture and Learning**

After Blueprint completion, preserve: Approved Blueprint. Approved Finding & Evidence Records. Approved Hypothesis Records. Approved Root-Cause / Contributing-Condition Records. Approved Recommendation Records. Approved Measurement Strategy. Approved Buyer Intent Map. Approved Page Objectives where material to implementation. Approved Implementation Blueprint. Approved client decisions. Final Strategy Deck. Material unresolved questions. Material client corrections. Relevant outcome hypotheses. Implementation path. These become client-specific knowledge according to the governing memory architecture. Client-specific conclusions do not automatically become agency methodology.

CLIENT\_PATTERN \!= AGENCY\_RULE

Potential cross-client learning must pass the approved knowledge-promotion process before becoming agency semantic knowledge.

## **62\. Blueprint Completion Gate**

The Blueprint must not transition to COMPLETE until:

| Completion Requirement | Required |
| :---- | :---- |
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

INCOMPLETE\_REQUIRED\_DATA \!= PERMISSION\_TO\_MANUFACTURE\_COMPLETION

## **63\. Permanent Guardrails**

AI\_ORGANIZES\_AND\_SYNTHESIZES. HUMANS\_APPROVE\_STRATEGIC\_CONCLUSIONS.

 DIAGNOSE\_BEFORE\_PRESCRIBE

 BLUEPRINT\_IS\_NOT\_A\_MANDATORY\_FOUNDATION\_GATE

 KNOWN\_INFORMATION\_SHOULD\_NOT\_BECOME\_BLANK\_DISCOVERY

 RESEARCH\_FOLLOWS\_THE\_QUESTION

 NOT\_EVERY\_BLUEPRINT\_REQUIRES\_EVERY\_DATA\_OBJECT

 SOURCE\_REPORTED\_THIS \!= AI\_INTERPRETED\_THIS

 AI\_INTERPRETED\_THIS \!= STRATEGIST\_CONCLUDED\_THIS

 SOURCE\_CONFLICT\_REQUIRES\_HUMAN\_REVIEW

 DATA\_QUALITY \!= VALIDATION\_STATUS

 CLIENT\_REPORTED \!= INDEPENDENTLY\_VALIDATED

 AUTOMATED\_SCAN \!= VALIDATED\_CONCLUSION

 CORRELATION \!= CAUSATION

 AI\_CONFIDENCE \!= EVIDENCE

 SUMMARIZATION\_MUST\_NOT\_INCREASE\_CERTAINTY

 VALIDATION\_STATUS\_MUST\_SURVIVE\_SYNTHESIS

 SYNTHETIC\_BUYER\_PROMPT \!= OBSERVED\_BUYER\_BEHAVIOR

 AI\_RECOMMENDATION\_TEST \!= FUTURE\_AI\_VISIBILITY

 OBSERVED\_AI\_RESPONSE \!= AI\_TRAINING\_DATA

 BLUEPRINT\_RECOMMENDATION\_EVIDENCE\_GATE

 AI\_RECOMMENDATION \!= HUMAN\_STRATEGIC\_DECISION

 AI\_DRAFT \!= APPROVED\_BLUEPRINT

 CLIENT\_SPECIFIC\_CONTENT\_MUST\_REMAIN\_CLIENT\_BOUND

 CLIENT\_SPECIFIC\_FINDING \!= CROSS\_CLIENT\_BEST\_PRACTICE

 BLUEPRINT\_MUST\_NOT\_MANUFACTURE\_IMPLEMENTATION\_DEPENDENCY

 PAGE\_TYPE \!= BUYER\_INTENT

 SEARCH\_INTENT \!= BUYER\_INTENT

 PAGE\_TYPE \!= CONTENT\_STRATEGY

 BUYER\_INTENT\_MAP \= GOVERNING\_BLUEPRINT\_OUTPUT\_FOR\_BUYER\_INTENT

 PAGE\_CONTENT\_REQUIREMENTS\_MUST\_TRACE\_TO\_APPROVED\_BUYER\_INTENT\_MAP \+ PAGE\_OBJECTIVE \+ EVIDENCE \+ DESIRED\_NEXT\_ACTION

 AI\_MUST\_NOT\_REINFER\_BUYER\_INTENT\_WHEN\_APPROVED\_BUYER\_INTENT\_EXISTS

 BUYER\_INTENT\_CONFLICT\_REQUIRES\_HUMAN\_REVIEW

 DWY\_IS\_NOT\_A\_CURRENT\_SIMPLICREATIVE\_OFFER

## **64\. Intelligence Output**

The Blueprint Intelligence Workflow succeeds when the strategist can determine: What did the client originally tell us? What has since been confirmed or revised? What do we actually know? What remains a hypothesis? What evidence supports each finding? What evidence contradicts it? How reliable is the underlying data? Where did each piece of evidence originate? What did AI calculate or infer? What did the strategist conclude? What remains uncertain? What is creating or contributing to the friction? What matters most? What should change? What should happen first? What implementation requirements follow? How should progress be evaluated? What decisions remain? What implementation path has been approved? The Intelligence Layer should make Blueprint analysis more rigorous, traceable, and efficient without creating false certainty. Its job is not to manufacture answers. Its job is to make the evidence, reasoning, uncertainty, recommendations, decisions, and implementation requirements easier for SimpliCreative’s human strategist to see, evaluate, approve, and use. Save as:

BLUE-002\_SimpliCreative\_Blueprint\_Intelligence\_Workflow\_Spec\_v1.2.md

The Blueprint governing set is now BLUE-001 Human SOP, BLUE-002 Intelligence Workflow Spec, and BLUE-003 Strategy Deck Generation Spec.

