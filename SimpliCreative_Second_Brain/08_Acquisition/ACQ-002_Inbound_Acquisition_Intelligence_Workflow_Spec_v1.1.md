# **Inbound Acquisition Intelligence Workflow Spec**

Version: 1.1  
Classification: AI Intelligence Layer & Engineering Specification  
Status: Draft for Review  
Owner: SimpliCreative  
Related Strategies: SimpliCreative Inbound Client Acquisition Strategy, SimpliCreative Partner Distribution Strategy  
Related Workflows: Sales Intelligence Workflow Spec, Executive Marketing Diagnostic  
Primary Users: SimpliCreative Leadership, Marketing, Sales, Strategy, and AI Engineering System

## **Purpose**

This specification defines how the SimpliCreative AI Intelligence Layer supports inbound client acquisition across owned, paid, search, partner, website, Lean Marketing Assessment, nurture, and Executive Marketing Diagnostic activity.

The system connects fragmented acquisition signals into one progressively richer understanding of:

Who SimpliCreative is attracting.

What problems and messages attract them.

How they discovered SimpliCreative.

What they engage with.

What the Lean Marketing Assessment reveals.

Whether they fit the ICP.

Whether they progress to the Executive Marketing Diagnostic.

Whether they become qualified opportunities and clients.

Which acquisition activities ultimately attract the strongest buyers.

The system should optimize intelligence around buyer quality, not simply lead volume.

The governing principle is:

`CONNECT_ACQUISITION_ACTIVITY_TO_BUYER_QUALITY`

AI retrieves, organizes, calculates, compares, drafts, detects patterns, and proposes hypotheses.

Humans determine strategy, approve external activity, interpret material findings, authorize spend, and decide what changes.

## **1\. System Boundary**

The intelligence workflow begins before a prospect enters HubSpot and continues until enough downstream evidence exists to evaluate acquisition quality.

The core flow is:

`ICP + APPROVED POSITIONING + APPROVED POV`

↓

`MARKET + CONTENT + AUDIENCE INTELLIGENCE`

↓

`OWNED + PAID + PARTNER DISTRIBUTION`

↓

`WEBSITE / CONTENT EXPERIENCE`

↓

`LEAN MARKETING ASSESSMENT`

↓

`SCOREAPP → HUBSPOT`

↓

`PROSPECT INTELLIGENCE + NURTURE`

↓

`EXECUTIVE MARKETING DIAGNOSTIC`

↓

`COMMERCIAL ROUTE`

↓

`OPPORTUNITY → CLIENT`

↓

`ACQUISITION OUTCOME INTELLIGENCE`

↓

`AI PATTERN DETECTION`

↓

`HUMAN STRATEGIC DECISION`

The workflow does not govern Blueprint, Foundation, or CARE delivery after acquisition. Those systems are governed by their respective SOPs and engineering specifications.

## **2\. Primary Intelligence Sources**

| Source | Primary Role |
| ----- | ----- |
| Strategic Foundation | ICP, positioning, POV, offer architecture |
| Brand Voice & Editorial Standards | External communication standards |
| HubSpot | Prospect, source, engagement, lifecycle, opportunity |
| ScoreApp | Lean Marketing Assessment responses and results |
| GA4 | Website acquisition and behavior |
| Google Search Console | Search discovery and query intelligence |
| LinkedIn | Organic and paid performance |
| Google Ads | Search campaign performance |
| Meta | Retargeting and campaign performance |
| Coldlytics | Approved audience seed data only |
| Website / CMS | Content, landing pages, CTAs |
| Email / Automation | Nurture engagement |
| Fathom | Prospect and Diagnostic conversation context |
| Partner Records | Relationship and distribution context |
| UTM / Campaign Data | Acquisition provenance |
| Historical Campaigns | Prior performance evidence |
| Approved Commercial Outcomes | Downstream buyer and client quality |

Not every source is required for every analysis.

## **3\. Source Authority**

Authority depends on the question being answered rather than one universal source hierarchy.

| Question | Primary Authority |
| ----- | ----- |
| Who SimpliCreative serves | Approved Strategic Foundation |
| What SimpliCreative believes | Approved Strategic Foundation |
| How SimpliCreative communicates | Strategic Foundation \+ Brand Voice |
| What a prospect submitted | ScoreApp / HubSpot |
| What an advertising platform reported | Relevant advertising platform |
| What occurred on the website | GA4, subject to tracking quality |
| What occurred in search | Google Search Console |
| What a prospect said | Fathom / approved CRM notes |
| What happened commercially | HubSpot / approved commercial record |
| What a partner committed to | Approved Partner Record / agreement |
| What Coldlytics reported | Coldlytics source data |
| What AI inferred | AI Interpretation |
| What SimpliCreative concluded | Human-approved decision |

`SOURCE_AUTHORITY_MUST_SURVIVE_SYNTHESIS`

## **4\. Core Acquisition Objects**

The Intelligence Layer should maintain structured objects rather than relying on document retrieval alone.

| Object | Purpose |
| ----- | ----- |
| Acquisition Strategy Context | Governing ICP, positioning, POV, offers |
| Prospect Record | Persistent prospect intelligence |
| Acquisition Touch Record | Meaningful buyer interaction |
| Campaign Record | Campaign context and performance |
| Campaign Test Record | Structured paid-media experiment |
| Message Territory Record | Problem or idea being tested |
| Content Record | Acquisition content and purpose |
| Content Opportunity Record | Candidate content opportunity |
| Audience Record | Audience definition and provenance |
| Coldlytics Seed Record | Approved audience-seed information |
| Assessment Record | ScoreApp responses and results |
| Partner Record | Partner intelligence |
| Partner Distribution Record | Specific partner activation |
| Nurture Record | Prospect nurture context |
| Diagnostic Record | Human Diagnostic intelligence |
| Opportunity Record | Commercial progression |
| Acquisition Finding Record | Evidence-supported finding |
| Acquisition Learning Record | Candidate reusable learning |
| Acquisition Decision Record | Human-approved strategic change |

## **5\. Prospect Record**

The Prospect Record should accumulate intelligence rather than reconstructing the prospect at every stage.

Recommended fields:

| Field | Purpose |
| ----- | ----- |
| Prospect\_ID | Stable identifier |
| HubSpot\_ID | CRM relationship |
| Name / Role / Organization | Prospect identity |
| Organization\_Type | Company context |
| Original\_Source | Earliest known acquisition source |
| First\_Known\_Touch | Earliest attributable interaction |
| Latest\_Meaningful\_Touch | Most recent relevant interaction |
| Relevant\_Content | Known content interactions |
| Campaigns | Related campaigns |
| Partner\_Source | Known partner influence |
| Assessment\_Status | Assessment progression |
| Assessment\_Results | Approved ScoreApp results |
| ICP\_Signals | Known qualification evidence |
| Engagement\_Signals | Relevant behavioral evidence |
| Diagnostic\_Status | Diagnostic progression |
| Diagnostic\_Outcome | Approved result |
| Commercial\_Route | Approved next route |
| Opportunity\_Status | Commercial progression |
| Client\_Status | Client progression |
| Known\_Facts | Supported facts |
| Prospect\_Reported\_Information | Prospect statements |
| AI\_Interpretations | Explicit AI inference |
| Human\_Conclusions | Approved conclusions |
| Unknowns | Material unresolved information |

The system must preserve distinctions between known facts, source-reported information, prospect-reported information, AI interpretation, and human-approved conclusions.

## **6\. Acquisition Touch Record**

Do not reduce the buyer journey to one source field.

Meaningful touches may include search visits, organic LinkedIn engagement, paid LinkedIn visits, Google Ads visits, partner events, partner referrals, article consumption, Assessment visits, Assessment starts, Assessment completions, nurture engagement, service-page visits, Diagnostic bookings, and Diagnostic attendance.

Where available, preserve:

`Touch_ID`

`Prospect_ID`

`Timestamp`

`Channel`

`Source`

`Medium`

`Campaign`

`Content`

`Message_Territory`

`Landing_Page`

`Partner_ID`

`Assessment_Context`

`Known_Identity_Status`

Do not attach anonymous activity to a known prospect unless the tracking infrastructure responsibly supports that relationship.

## **7\. Message Territory Record**

Every substantive campaign or content initiative should be associated with the problem or strategic idea it is testing.

| Field | Purpose |
| ----- | ----- |
| Territory\_ID | Stable identifier |
| Territory | Discoverability / Credibility / Performance / Agility / broader POV |
| Symptom | Problem the buyer recognizes |
| Common\_Assumption | What they may believe they need |
| Reframe | Connection SimpliCreative introduces |
| Buyer | Intended audience |
| Buyer\_Stage | Recognition / Reframe / Diagnostic |
| CTA | Intended next action |
| Content\_IDs | Related content |
| Campaign\_IDs | Related campaigns |
| Status | Testing / Active / Paused / Retired |

This allows the system to evaluate the idea rather than only the individual advertisement.

## **8\. Content Intelligence Workflow**

AI may identify potential content opportunities from:

`GSC + GA4 + HUBSPOT + ASSESSMENT + DIAGNOSTIC + FATHOM + CONTENT PERFORMANCE + CAMPAIGN PERFORMANCE + APPROVED BUYER LANGUAGE + APPROVED EXTERNAL RESEARCH`

The workflow is:

`SOURCE SIGNALS`

↓

`THEME DETECTION`

↓

`ICP RELEVANCE`

↓

`SIMPLICREATIVE POV ALIGNMENT`

↓

`CONTENT OPPORTUNITY`

↓

`HUMAN EDITORIAL DECISION`

↓

`AI DRAFT`

↓

`HUMAN APPROVAL`

↓

`PUBLICATION / DISTRIBUTION`

AI should not turn every recurring keyword or high-performing post into an editorial recommendation.

## **9\. Content Opportunity Record**

| Field | Purpose |
| ----- | ----- |
| Opportunity\_ID | Stable identifier |
| Observed\_Signal | What created the opportunity |
| Source | Evidence source |
| Audience | Intended buyer |
| Buyer\_Problem | Relevant problem |
| Assessment\_Territory | D / C / P / A relationship |
| Relevant\_POV | Approved SimpliCreative perspective |
| Suggested\_Format | Potential content form |
| Suggested\_Channel | Potential distribution |
| Suggested\_CTA | Appropriate next action |
| Business\_Relevance | Why it matters |
| Evidence\_Quality | Reliability |
| AI\_Interpretation | Explicit inference |
| Human\_Priority | Human decision |
| Status | Workflow status |

## **10\. Thought Leadership Drafting**

Once a content opportunity is approved, AI may assist with research synthesis, LinkedIn drafts, articles, newsletters, video scripts, carousel structures, derivative content, and contextual Assessment CTA bridges.

The drafting sequence is:

`APPROVED OPPORTUNITY`

→ `APPROVED STRATEGY`

→ `EVIDENCE`

→ `BRAND VOICE`

→ `AI DRAFT`

→ `EVIDENCE CHECK`

→ `AI PATTERN DETECTION`

→ `ORIGINALITY & SOURCE INTEGRITY CHECK`

→ `HUMAN REVIEW`

→ `APPROVED CONTENT`

## **11\. Paid Acquisition Readiness Gate**

AI should not move directly from an idea into ad generation.

Before paid creative is treated as implementation-ready, validate:

| Gate | Requirement |
| ----- | ----- |
| Offer | Assessment and relevant next step are approved |
| Audience | Intended audience is defined |
| Message | Message Territory and CTA are approved |
| Funnel | Ad → landing experience → Assessment → HubSpot → nurture → Diagnostic works |
| Tracking | Required conversion and downstream tracking exists |
| Platform | Platform has an explicit role |
| Creative | Creative follows approved strategy |
| Launch | Human approval exists |

The preferred sequence is:

`OFFER → AUDIENCE → MESSAGE → FUNNEL → TRACKING → PLATFORM / CAMPAIGN → CREATIVE → LAUNCH`

If a prerequisite is missing, AI should flag the missing dependency rather than compensate through stronger copy.

`PAID_DISTRIBUTION_DOES_NOT_FIX_FUNNEL_FRICTION`

## **12\. Channel-Job Evaluation**

Paid channels should be evaluated against the job assigned to them.

| Channel | Primary Job |
| ----- | ----- |
| LinkedIn | Create recognition and reframe |
| Google Search | Capture existing problem and solution intent |
| Meta | Retarget and reinforce |
| Website | Continue context and convert |
| Assessment | Self-diagnosis |
| HubSpot | Preserve and develop prospect intelligence |

`CHANNEL_PERFORMANCE_MUST_BE_EVALUATED_AGAINST_CHANNEL_JOB`

A channel that creates awareness should not automatically be declared unsuccessful because another channel receives more direct Assessment completions.

## **13\. Coldlytics Boundary**

Coldlytics has one approved role:

`COLDLYTICS = AUDIENCE_SEED_DATA, NOT_OUTBOUND_LEAD_LIST`

The workflow is:

`RAW COLDLYTICS DATA`

↓

`VALIDATE SOURCE`

↓

`NORMALIZE`

↓

`DEDUPLICATE`

↓

`ICP FILTER`

↓

`DATA QUALITY CHECK`

↓

`QUALIFIED SEED RECORD`

↓

`HUMAN APPROVAL`

↓

`PLATFORM-APPROPRIATE AUDIENCE PREPARATION`

↓

`ACTIVATION`

The system should not automatically create cold outreach, cold email, individualized sales messaging, or automated prospecting tasks from Coldlytics.

For LinkedIn, audience use should preserve professional targeting precision rather than automatically expanding beyond defined criteria.

`COLDLYTICS → ICP_FILTERED_SEED → PLATFORM_APPROPRIATE_AUDIENCE_USE`

## **14\. Coldlytics Seed Record**

| Field | Purpose |
| ----- | ----- |
| Seed\_ID | Stable identifier |
| Source\_File | Provenance |
| Source\_Date | Freshness |
| Company | Organization |
| Contact | Where available |
| Role | Source-reported role |
| Industry | Source-reported industry |
| Organization\_Data | Relevant attributes |
| ICP\_Match\_Signals | Supporting fit evidence |
| ICP\_Conflicts | Potential mismatch |
| Data\_Quality | Reliability |
| AI\_Fit\_Interpretation | Explicit AI assessment |
| Human\_Approval | Inclusion decision |
| Platform\_Use | Intended activation |
| Activation\_Date | Use date |

`COLDLYTICS_FIELD = SOURCE_DATA`

`AI_ICP_ASSESSMENT = INTERPRETATION`

`AUDIENCE_ACTIVATION = HUMAN_DECISION`

## **15\. Audience Records**

Every paid audience should preserve why it exists.

| Field | Purpose |
| ----- | ----- |
| Audience\_ID | Stable identifier |
| Audience\_Name | Working name |
| Platform | Activation environment |
| Audience\_Type | Seed / matched / retargeting / platform-expanded |
| Source | Provenance |
| Seed\_Source | Origin where relevant |
| ICP\_Context | Intended fit |
| Exclusions | Explicit exclusions |
| Creation\_Date | Freshness |
| Data\_Freshness | Reliability |
| Campaigns | Related campaigns |
| Human\_Approval | Activation approval |

`SEED_AUDIENCE != PLATFORM_EXPANDED_AUDIENCE`

Do not represent a platform-expanded audience as verified ICP-fit simply because it originated from an ICP-filtered seed.

## **16\. First-Party Audience Evolution**

As sufficient data develops, AI may propose stronger first-party seed populations.

`ICP_FILTERED_COLDLYTICS`

↓

`QUALIFIED_ASSESSMENT_COMPLETERS`

↓

`QUALIFIED_DIAGNOSTIC_PROSPECTS`

↓

`QUALIFIED_OPPORTUNITIES`

↓

`GOOD_FIT_CLIENTS`

This is not an automatic replacement sequence.

AI evaluates available volume, data quality, downstream quality, platform requirements, and comparability.

Humans approve audience strategy.

## **17\. Paid Campaign Intelligence**

AI may support campaign planning using approved acquisition strategy, Message Territories, historical performance, Audience Records, Assessment progression, Diagnostic progression, opportunity progression, approved budgets, and relevant search evidence.

AI may prepare:

Campaign Brief.

Message Hypotheses.

Creative Hypotheses.

Audience recommendations.

Landing-page requirements.

UTM structure.

Naming conventions.

Tracking requirements.

Testing plan.

Draft creative.

Human approval is required before campaign activation or spend.

## **18\. Campaign Record**

| Field | Purpose |
| ----- | ----- |
| Campaign\_ID | Stable identifier |
| Platform | Channel |
| Objective | Campaign job |
| Audience\_ID | Intended audience |
| Message\_Territory | Strategic idea |
| Buyer\_Stage | Intended buyer stage |
| Offer / CTA | Intended action |
| Landing\_Page | Destination |
| Budget | Approved spend |
| Start\_Date | Timing |
| End\_Date | Timing |
| UTM\_Structure | Attribution |
| Creative\_IDs | Related assets |
| Hypothesis | What is being tested |
| Success\_Measures | Evaluation |
| Human\_Approval | Authorization |

## **19\. Campaign Testing Discipline**

Each meaningful paid test should create a Campaign Test Record.

| Field | Purpose |
| ----- | ----- |
| Test\_ID | Stable identifier |
| Campaign\_ID | Related campaign |
| Hypothesis | Expected result |
| Primary\_Variable | Main variable being tested |
| Control | Existing condition |
| Test\_Condition | Changed condition |
| Primary\_Measure | Main evaluation metric |
| Downstream\_Measure | Assessment / Fit / Diagnostic / Opportunity |
| Start\_Date | Test start |
| Minimum\_Review\_Date | Prevent premature judgment |
| Spend | Investment |
| Result | Observed outcome |
| Data\_Quality | Reliability |
| Human\_Decision | Continue / Stop / Iterate / Scale |

`ONE_TEST_SHOULD_HAVE_ONE_PRIMARY_VARIABLE`

`ONE_TEST != PERMANENT_STRATEGY`

`LEARNING_WINDOW_MUST_COMPLETE_BEFORE_OPTIMIZATION`

`SCALING_REQUIRES_STABLE_PERFORMANCE`

## **20\. Ad Copy Review & Feedback Engine**

The Ad Copy Review & Feedback Engine provides structured AI feedback on paid-ad copy before human approval.

Its purpose is not to generate generic “better advertising copy.”

Its purpose is to determine whether an approved SimpliCreative message has been translated effectively into the intended paid-media environment.

### **Messaging Authority**

The hierarchy is:

`SIMPLICREATIVE STRATEGIC FOUNDATION`

↓

`SIMPLICREATIVE ICP + POV + STORYTELLING & MESSAGING ARCHITECTURE`

↓

`SIMPLICREATIVE BRAND VOICE & EDITORIAL STANDARDS`

↓

`BUYER STAGE + MESSAGE TERRITORY + OFFER`

↓

`ASHLEY PAID_MEDIA MESSAGING METHODOLOGY`

↓

`PLATFORM_SPECIFIC EXECUTION`

Ashley’s methodology is an optimization and execution lens.

It is not an equal source of SimpliCreative strategy.

`ASHLEY_METHODOLOGY_MAY_OPTIMIZE_MESSAGE_EXECUTION_BUT_MAY_NOT_OVERRIDE_APPROVED_SIMPLICREATIVE_STRATEGY`

If audience, buyer stage, offer, CTA, or Message Territory is unclear:

`AD_COPY_CONTEXT_INCOMPLETE_REQUIRES_HUMAN_REVIEW`

## **21\. Ashley Messaging Review Layer**

AI may internally review the ad against Ashley’s RAINMAKER messaging dimensions and Motivational Triad.

| Dimension | SimpliCreative Interpretation |
| ----- | ----- |
| Relevancy | Does this matter to the approved ICP? |
| Articulation | Is the idea expressed clearly? |
| Identifiability | Can the intended buyer recognize themselves? |
| Necessity | Is it clear why the issue deserves attention without manufactured urgency? |
| Memorability | Is there a clear idea worth remembering? |
| Avoiding | Does the message avoid unnecessary friction or confusion? |
| Knowledge | Does it demonstrate understanding of the buyer’s world? |
| Energy | Does the message have enough movement to earn attention without hype? |
| Reputation | Is appropriate credibility or proof present? |
| Pain | Recognizable existing friction |
| Pleasure | Credible desired outcome |
| Ease | Reduced friction around the next action |

These checks should not be imposed mechanically as a copy formula.

## **22\. SimpliCreative Conflict Resolution**

Ashley’s “pain-first” principle should be interpreted as:

`PAIN_FIRST_MEANS_RECOGNIZABLE_FRICTION_FIRST_NOT_FEAR_FIRST`

AI may make an existing problem concrete.

It may not manufacture fear, urgency, loss, or unsupported consequences.

`SPECIFICITY_DOES_NOT_AUTHORIZE_DIAGNOSIS`

AI may say:

“Paid campaigns are driving traffic, but qualified inquiries aren't increasing.”

AI should not automatically say:

“Your website messaging is killing your paid performance.”

Where causation is not established, preserve appropriate uncertainty.

`CONVERSION_OPTIMIZATION_MUST_NOT_CREATE_UNSUPPORTED_URGENCY_OR_CLAIMS`

Stronger copy does not authorize invented statistics, guarantees, loss estimates, buyer motivations, fabricated deadlines, or unsupported performance claims.

## **23\. Preferred Paid Message Movement**

The preferred SimpliCreative paid-message progression is:

`RECOGNIZABLE_SYMPTOM`

↓

`REFRAME`

↓

`POSSIBLE_CONNECTED_PROBLEM`

↓

`APPROPRIATE_NEXT_ACTION`

The ad does not need to explain FAST, Blueprint, the entire marketing ecosystem, or SimpliCreative’s full methodology.

It should create enough recognition and insight for the next action to make sense.

## **24\. Audience Temperature**

| Audience | Review Bias |
| ----- | ----- |
| Cold | Recognition, relevance, self-identification, low-friction next action |
| Warm | Proof, explanation, objection handling, deeper education |
| Retargeting / High Intent | Direct next step and decision support |

For cold acquisition, flag copy that prematurely jumps to a high-friction commercial action.

The Lean Marketing Assessment should generally remain the primary diagnostic CTA unless an approved campaign strategy defines another next step.

## **25\. Platform-Specific Ad Review**

For LinkedIn, review professional-buyer identification, WIIFM, clarity of primary text, headline reinforcement, CTA clarity, and audience-temperature fit.

For Meta, give additional weight to buyer self-identification and visual-copy consistency.

If visual and copy communicate materially different messages:

`VISUAL_COPY_MISMATCH_REQUIRES_REVISION`

For Google Search, evaluate search intent, ad-to-landing alignment, CTA fit, and whether the ad is unnecessarily introducing a broad strategic narrative when direct intent alignment is more appropriate.

Platform implementation requirements should remain subordinate to approved SimpliCreative strategy and the governing paid-media methodology.

## **26\. Ad Review Output**

Do not use arbitrary numerical quality scores.

Use practical statuses:

`READY_FOR_HUMAN_REVIEW`

`REVISION_RECOMMENDED`

`STRATEGIC_CONTEXT_MISSING`

`PROOF_GAP`

`CTA_MISMATCH`

`FUNNEL_STAGE_MISMATCH`

`BRAND_VOICE_MISMATCH`

`PLATFORM_COPY_MISMATCH`

`VISUAL_COPY_MISMATCH_REQUIRES_REVISION`

The team-facing output should include:

| Output | Requirement |
| ----- | ----- |
| Overall Read | Practical status |
| What Is Working | Strongest existing element |
| Primary Issue | One most important problem |
| Why It Matters | Methodology-based reasoning |
| Strategic Alignment | SimpliCreative strategy check |
| Funnel Fit | CTA / audience-stage check |
| Proof Check | Evidence or claim issue |
| Recommended Change | One prioritized revision |
| Optional Rewrite | Revised copy where useful |
| Test Variable | Primary variable being tested |

`AI_AD_COPY_FEEDBACK != FINAL_CREATIVE_APPROVAL`

## **27\. Final Creative Review Sequence**

`ASHLEY_PAID_MEDIA_REVIEW`

↓

`SIMPLICREATIVE_STRATEGIC_ALIGNMENT`

↓

`BRAND_VOICE_CHECK`

↓

`AI_PATTERN_DETECTION`

↓

`CLAIM_AND_EVIDENCE_CHECK`

↓

`ORIGINALITY_AND_SOURCE_INTEGRITY_CHECK`

↓

`HUMAN_APPROVAL`

## **28\. Creative Intelligence**

Do not evaluate creative only by CTR.

Preserve:

Creative concept.

Hook.

Symptom.

Reframe.

Message Territory.

Format.

Audience.

CTA.

Platform.

Assessment progression.

Diagnostic progression.

Downstream buyer quality.

A creative with lower CTR may produce stronger Assessment-to-Diagnostic progression.

A creative with cheaper Assessment completions may produce poor ICP fit.

`CHEAPER_LEAD != BETTER_CLIENT`

## **29\. Google Search Intelligence**

Search intelligence should connect:

`SEARCH_TERM / QUERY → INTENT → AD → LANDING_EXPERIENCE → ASSESSMENT → FIT → DIAGNOSTIC → OPPORTUNITY`

AI may cluster search terms and classify likely intent.

Human review is required before search patterns materially change acquisition strategy.

`SEARCH_VOLUME != BUYER_QUALITY`

## **30\. Retargeting Intelligence**

Retargeting may use approved first-party behaviors such as relevant website visits, content engagement, Assessment visits, Assessment starts, and other qualifying interactions where supported.

AI may suggest segmentation according to known context.

Do not create invasive messaging based on inferred private characteristics.

Retargeting should reinforce known context without implying surveillance.

## **31\. Partner Intelligence**

AI may support partner discovery, research, fit scoring, audience-overlap hypotheses, collaboration concepts, co-marketing drafts, Assessment positioning, performance analysis, and attribution.

Humans own relationship development, partner selection, commitments, negotiation, commercial terms, and agreements.

`PUBLIC_PARTNER_SIGNAL != VERIFIED_PARTNER_TRUST`

## **32\. Partner Distribution Record**

| Field | Purpose |
| ----- | ----- |
| Distribution\_ID | Stable identifier |
| Partner\_ID | Related partner |
| Collaboration\_Type | Event / content / Assessment / etc. |
| Audience | Intended audience |
| Buyer\_Problem | Problem addressed |
| Message\_Territory | Relevant territory |
| Asset | Distributed asset |
| CTA | Intended action |
| Tracking\_Link | Attribution |
| Campaign\_ID | Related campaign |
| Start\_Date | Timing |
| End\_Date | Timing |
| Assessment\_Completions | Result |
| Qualified\_Completions | Quality |
| Diagnostics | Downstream |
| Opportunities | Downstream |
| Clients | Downstream |
| Human\_Review | Interpretation |

Partner influence should not erase original acquisition history.

## **33\. Lean Marketing Assessment Ingestion**

ScoreApp remains responsible for the Assessment experience and scoring.

The Intelligence Layer may receive:

`Assessment_ID`

`Prospect_ID`

`Completion_Date`

`Overall_Result`

`Discoverability_Result`

`Credibility_Result`

`Performance_Result`

`Agility_Result`

`Lowest_Dimension`

`Qualification_Responses`

`Primary_Goal`

`Biggest_Obstacle`

`Team_Context`

`Acquisition_Source`

`Campaign`

`Partner_Source`

`Relevant_Responses`

`ScoreApp_Record`

`SCORECARD_RESULT != ROOT_CAUSE`

## **34\. Assessment Progression Intelligence**

AI may investigate:

Which channels produce qualified Assessment completers?

Which Message Territories produce stronger ICP fit?

Which audiences produce stronger qualified prospects?

Which Assessment dimensions appear frequently among Diagnostic prospects?

Which sources create high completion but weak downstream progression?

Where do Assessment starters abandon?

Which landing contexts produce qualified completions?

AI surfaces the pattern.

Humans determine what it means.

## **35\. HubSpot Role**

HubSpot is the primary CRM record for acquisition progression.

Where available, preserve:

Original source.

Meaningful acquisition touches.

Assessment status and result.

Qualification signals.

Diagnostic status and outcome.

Commercial route.

Opportunity status.

Client status.

Partner influence.

Campaign context.

Relevant engagement.

The Intelligence Layer may enrich HubSpot where approved.

It must not overwrite source truth with inference.

## **36\. Nurture Intelligence**

The workflow is:

`KNOWN_PROSPECT_CONTEXT`

→ `APPROVED_NURTURE_LOGIC`

→ `AI_DRAFT / PERSONALIZATION`

→ `APPROVED_DELIVERY_SYSTEM`

→ `ENGAGEMENT`

→ `UPDATED_PROSPECT_INTELLIGENCE`

AI may use approved Assessment results, acquisition context, content engagement, role, organization context, known problem, and Diagnostic readiness.

Nurture should not pretend to know more than the prospect disclosed.

## **37\. Diagnostic Preparation Handoff**

When a prospect books an Executive Marketing Diagnostic, hand accumulated intelligence into the existing Sales Intelligence and Diagnostic workflow.

Potential handoff inputs include:

Prospect Record.

Assessment Record.

Original source.

Relevant campaign.

Message Territory.

Partner influence.

Relevant content engagement.

Approved public research.

CRM history.

Nurture engagement.

Known questions.

Known unknowns.

The Sales Intelligence Workflow Spec governs what happens next.

Do not recreate Diagnostic logic inside this system.

## **38\. Commercial Outcome Handoff**

After the Diagnostic, retrieve the approved downstream route.

Possible routes include:

`SIMPLIBLUEPRINT`

`DIRECT_TO_FOUNDATION_SCOPING`

`TEMPLATED_WORDPRESS`

`NURTURE / GUIDANCE`

`REFERRAL / CLOSE`

Preserve relevant opportunity, proposal, win/loss, engagement value, and client status where available.

Do not infer why an opportunity was won or lost without supporting evidence.

## **39\. Acquisition Funnel**

| Stage | Example Measure |
| ----- | ----- |
| Exposure | Qualified audience reach |
| Engagement | Meaningful interaction |
| Website | Relevant visit |
| Assessment Start | Started |
| Assessment Completion | Completed |
| Qualified Assessment | ICP-aligned |
| Diagnostic Booking | Booked |
| Diagnostic Attendance | Attended |
| Qualified Diagnostic | Appropriate fit |
| Opportunity | Commercial opportunity |
| Client | Won |
| Client Quality | Good-fit engagement |
| Client Value | Commercial value where defensible |

Missing attribution should remain visible.

## **40\. Acquisition Finding Record**

| Field | Purpose |
| ----- | ----- |
| Finding\_ID | Stable identifier |
| Observation | What happened |
| Period | Timeframe |
| Audience | Relevant audience |
| Channel | Source |
| Campaign | Related campaign |
| Message\_Territory | Relevant idea |
| Source\_Data | Evidence |
| Funnel\_Stage | Where observed |
| Downstream\_Outcome | Later result |
| Validation\_Status | Agency validation taxonomy |
| Data\_Quality | Reliability |
| Interpretation | Meaning |
| Contradicting\_Evidence | Conflicting evidence |
| Confidence | Appropriate certainty |
| Business\_Relevance | Why it matters |
| Recommended\_Question | What to investigate |
| Human\_Review\_Status | Approval |

## **41\. Cross-Source Acquisition Synthesis**

AI should look across sources for meaningful patterns.

Examples include:

LinkedIn Message Territories generating high Assessment fit.

Google Search generating fewer Assessments but more Diagnostics.

Partner distribution producing strong ICP alignment.

Content repeatedly appearing before Assessment completion.

A Message Territory generating high lead volume but weak opportunities.

Another territory generating fewer leads but stronger commercial progression.

A paid audience producing stronger downstream buyers than another audience.

These remain observations until interpreted.

## **42\. Attribution Boundary**

Preserve original source, Assessment source, last meaningful source, campaign influence, partner influence, content influence, and Diagnostic source context where available.

Do not fabricate a single “true source.”

`ATTRIBUTED != CAUSED`

`MULTI_TOUCH_JOURNEY != SINGLE_CAUSE`

`PLATFORM_ATTRIBUTION != CAUSAL_ATTRIBUTION`

## **43\. Acquisition Performance Intelligence**

The system should periodically synthesize:

Who SimpliCreative is attracting.

Which problems create response.

Which channels create qualified progression.

Which audiences produce stronger buyers.

Where qualified prospects drop out.

Which content appears to contribute.

Which partner channels are useful.

What deserves investigation.

What should be tested next.

AI prepares the intelligence.

Humans determine strategy.

## **44\. Acquisition Intelligence View**

| Section | Purpose |
| ----- | ----- |
| Executive Summary | Most important acquisition story |
| Audience | Who is entering |
| Channel | Where they come from |
| Message Territory | What problems attract them |
| Assessment | Completion and dimension patterns |
| ICP Quality | Who actually fits |
| Diagnostic | Progression and fit |
| Opportunity | Commercial progression |
| Partner Distribution | Partner quality |
| Paid Audience | Audience performance |
| Content | Contribution to progression |
| Funnel | Drop-off |
| Findings | Evidence-supported observations |
| Unknowns | What cannot be concluded |
| Opportunities | What deserves attention |
| Recommended Tests | Candidate experiments |

## **45\. Learning Hierarchy**

`ACTIVITY`

→ `SIGNAL`

→ `OBSERVATION`

→ `REPEATED_PATTERN`

→ `SUPPORTED_ACQUISITION_FINDING`

→ `HUMAN_APPROVED_LEARNING`

→ `STRATEGIC_DECISION`

One campaign does not establish permanent buyer truth.

## **46\. Acquisition Learning Record**

| Field | Purpose |
| ----- | ----- |
| Learning\_ID | Stable identifier |
| Observation | Candidate learning |
| Evidence | Supporting evidence |
| Period | Timeframe |
| Audience | Relevant audience |
| Message\_Territory | Relevant idea |
| Channel | Distribution source |
| Funnel\_Outcome | Result |
| Downstream\_Quality | Commercial quality |
| Data\_Quality | Reliability |
| Validation\_Status | Evidence status |
| Interpretation | Meaning |
| Contradicting\_Evidence | Conflicting evidence |
| Recommended\_Action | Candidate response |
| Human\_Decision | Approved action |
| Review\_Date | Revisit |
| Memory\_Status | Working / Episodic / candidate Semantic |

`CAMPAIGN_PATTERN != AGENCY_TRUTH`

## **47\. Strategic Decision Record**

AI may recommend action.

Humans decide whether to act.

| Field | Purpose |
| ----- | ----- |
| Decision\_ID | Stable identifier |
| Decision | Approved action |
| Date | Decision date |
| Owner | Human owner |
| Reason | Why |
| Supporting\_Findings | Evidence |
| Contradicting\_Evidence | Counterevidence |
| Expected\_Result | Intended outcome |
| Affected\_Channel | Impact |
| Affected\_Audience | Impact |
| Affected\_Message | Impact |
| Affected\_Content | Impact |
| Affected\_Budget | Impact |
| Review\_Date | Evaluation date |
| Outcome\_Status | Result |

## **48\. Outcome Evaluation**

After enough evidence exists:

`DECISION`

→ `EXPECTED_RESULT`

→ `IMPLEMENTATION`

→ `OBSERVED_RESULT`

→ `CONFOUNDING_FACTORS`

→ `SUPPORTED_LEARNING`

Do not label a strategy successful or unsuccessful from insufficient evidence.

## **49\. Memory Promotion**

Most campaign activity belongs in Working or Episodic Memory.

Potentially durable acquisition knowledge may include approved ICP refinements, durable messaging decisions, repeated buyer-language patterns, validated qualification insights, approved channel-role decisions, durable attribution definitions, approved audience definitions, repeated partner patterns, and approved reporting definitions.

Do not promote individual campaign metrics into permanent agency knowledge.

## **50\. AI Permissions**

| AI May | Human Responsibility |
| ----- | ----- |
| Retrieve acquisition data | Oversight |
| Normalize source data | Validate material mappings |
| Clean Coldlytics seed data | Approve use |
| Score seed fit | Decide inclusion |
| Prepare audience files | Authorize activation |
| Analyze campaign performance | Interpret |
| Detect content opportunities | Prioritize |
| Draft content | Approve |
| Draft ad creative | Approve |
| Review ad copy | Final creative judgment |
| Prepare campaign briefs | Approve strategy |
| Generate UTMs | Validate implementation |
| Analyze Assessment progression | Interpret |
| Draft nurture | Approve logic |
| Prepare Diagnostic handoff | Review |
| Analyze partner performance | Decide relationship action |
| Detect acquisition patterns | Validate |
| Recommend tests | Decide |
| Draft performance intelligence | Approve conclusions |
| Propose memory candidates | Approve promotion |

## **51\. AI Restrictions**

AI may not independently change positioning.

AI may not independently change the ICP.

AI may not independently change Assessment methodology.

AI may not activate paid campaigns.

AI may not authorize spend.

AI may not publish external content without approval.

AI may not create cold outreach from Coldlytics within this system.

AI may not infer private prospect problems from audience data.

AI may not treat a platform-expanded audience as verified ICP fit.

AI may not treat engagement as commercial readiness.

AI may not treat Assessment results as root cause.

AI may not determine final Diagnostic fit.

AI may not set pricing or scope.

AI may not independently alter partner agreements.

AI may not convert correlation into causation.

AI may not allow Ashley’s methodology to override SimpliCreative strategy.

AI may not promote campaign observations into agency strategy without human approval.

## **52\. Human Approval Gates**

Human approval is required before:

Audience activation.

Media spend.

Campaign launch.

Material creative publication.

Material website messaging changes.

Nurture-strategy changes.

Assessment methodology changes.

Partner outreach.

Partner commitments.

Co-branded distribution.

Material acquisition conclusions.

Strategic channel changes.

Material budget changes.

ICP changes.

Positioning changes.

Agency-memory promotion.

## **53\. Workflow Statuses**

| Object | Status Flow |
| ----- | ----- |
| Content Opportunity | DETECTED → HUMAN\_REVIEW → APPROVED / REJECTED |
| Content Draft | AI\_GENERATED → HUMAN\_REVIEWED → APPROVED → PUBLISHED |
| Audience Seed | RAW → CLEANED → ICP\_FILTERED → HUMAN\_APPROVED → ACTIVATED |
| Campaign | PROPOSED → APPROVED → ACTIVE → PAUSED / COMPLETE |
| Campaign Test | PLANNED → ACTIVE → REVIEW\_READY → HUMAN\_REVIEWED → COMPLETE |
| Ad Copy | AI\_DRAFT / HUMAN\_DRAFT → AI\_REVIEWED → HUMAN\_REVIEW → APPROVED |
| Acquisition Finding | AI\_GENERATED → HUMAN\_REVIEWED → APPROVED / REJECTED |
| Acquisition Learning | CANDIDATE → HUMAN\_REVIEW → APPROVED / REJECTED |
| Strategic Decision | PROPOSED → HUMAN\_APPROVED → IMPLEMENTED → REVIEWED |
| Memory Candidate | CANDIDATE → HUMAN\_REVIEW → PROMOTED / REJECTED |

## **54\. Permanent Guardrails**

`CONNECT_ACQUISITION_ACTIVITY_TO_BUYER_QUALITY`

`COLDLYTICS = AUDIENCE_SEED_DATA_NOT_OUTBOUND_LEAD_LIST`

`SEED_AUDIENCE != PLATFORM_EXPANDED_AUDIENCE`

`COLDLYTICS_FIELD = SOURCE_DATA`

`AI_ICP_ASSESSMENT = INTERPRETATION`

`AUDIENCE_ACTIVATION = HUMAN_DECISION`

`SCORECARD_RESULT != ROOT_CAUSE`

`JOB_TITLE != PURCHASE_AUTHORITY`

`CLICK != BUYER_INTENT`

`ENGAGEMENT != COMMERCIAL_READINESS`

`ASSESSMENT_COMPLETION != ICP_FIT`

`CHEAPER_LEAD != BETTER_CLIENT`

`SEARCH_VOLUME != BUYER_QUALITY`

`PARTNER_REFERRAL != ICP_FIT`

`ATTRIBUTED != CAUSED`

`MULTI_TOUCH_JOURNEY != SINGLE_CAUSE`

`PLATFORM_ATTRIBUTION != CAUSAL_ATTRIBUTION`

`CORRELATION != CAUSATION`

`CAMPAIGN_PATTERN != AGENCY_TRUTH`

`PROSPECT_PATTERN != AGENCY_RULE`

`AI_CONFIDENCE != EVIDENCE`

`AI_INTERPRETATION != HUMAN_STRATEGIC_DECISION`

`SUMMARIZATION_MUST_NOT_INCREASE_CERTAINTY`

`OFFER_AUDIENCE_MESSAGE_FUNNEL_TRACKING_BEFORE_CREATIVE`

`CHANNEL_PERFORMANCE_MUST_BE_EVALUATED_AGAINST_CHANNEL_JOB`

`PAID_DISTRIBUTION_DOES_NOT_FIX_FUNNEL_FRICTION`

`LEARNING_WINDOW_MUST_COMPLETE_BEFORE_OPTIMIZATION`

`SCALING_REQUIRES_STABLE_PERFORMANCE`

`ASHLEY_METHODOLOGY_MAY_OPTIMIZE_MESSAGE_EXECUTION_BUT_MAY_NOT_OVERRIDE_APPROVED_SIMPLICREATIVE_STRATEGY`

`PAIN_FIRST_MEANS_RECOGNIZABLE_FRICTION_FIRST_NOT_FEAR_FIRST`

`SPECIFICITY_DOES_NOT_AUTHORIZE_DIAGNOSIS`

`CONVERSION_OPTIMIZATION_MUST_NOT_CREATE_UNSUPPORTED_URGENCY_OR_CLAIMS`

`ONE_TEST_SHOULD_HAVE_ONE_PRIMARY_VARIABLE`

`AI_AD_COPY_FEEDBACK != FINAL_CREATIVE_APPROVAL`

`HUMAN_APPROVAL_REQUIRED_FOR_MEDIA_SPEND`

`HUMAN_APPROVAL_REQUIRED_BEFORE_EXTERNAL_PUBLICATION`

## **55\. Engineering Flow at a Glance**

| Phase | Inputs | AI Role | Human Role | Output |
| ----- | ----- | ----- | ----- | ----- |
| Govern | Strategic Foundation \+ Brand Voice | Retrieve | Own strategy | Acquisition Context |
| Observe | CRM, ScoreApp, GSC, GA4, campaigns, Fathom, partners | Collect \+ normalize | Validate | Source Intelligence |
| Discover | Market \+ buyer signals | Detect opportunities | Choose focus | Opportunities |
| Plan | Approved opportunity \+ strategy | Draft plan | Decide | Campaign / Content Plan |
| Audience | Coldlytics \+ first-party data | Clean \+ prepare | Approve | Audience Records |
| Create | Approved strategy | Draft content / creative | Edit | Draft Assets |
| Review Ads | Draft ad \+ campaign context | Apply paid-media review | Approve | Reviewed Creative |
| Distribute | Owned \+ paid \+ partner | Support execution | Authorize | Market Exposure |
| Convert | Website \+ Assessment | Track \+ connect | Govern methodology | Assessment Intelligence |
| Nurture | Prospect context | Draft / personalize | Approve logic | Nurture |
| Diagnose | Accumulated intelligence | Prepare handoff | Lead Diagnostic | Diagnostic Outcome |
| Commercial | Diagnostic \+ CRM | Preserve progression | Decide route | Opportunity / Client |
| Analyze | Full funnel | Synthesize | Interpret | Acquisition Findings |
| Learn | Findings \+ outcomes | Detect patterns | Approve learning | Acquisition Intelligence |
| Decide | Approved learning | Recommend | Decide | Strategic Decision |
| Remember | Durable decisions | Propose promotion | Approve | Semantic Knowledge |

## **56\. System Success Standard**

The Acquisition Intelligence Layer succeeds when SimpliCreative can move beyond questions such as:

“Which ad got the most clicks?”

“Which campaign generated the cheapest Assessment?”

“Which post had the most engagement?”

and answer more useful questions:

“Which problems attract the buyers we actually want?”

“Which audiences produce qualified Assessment completions?”

“Which messages progress into Diagnostics?”

“Which channels and partners produce appropriate opportunities?”

“Which acquisition paths ultimately produce good-fit clients?”

“What are we learning about how qualified buyers discover, understand, and choose SimpliCreative?”

The intelligence system should make acquisition progressively more informed without allowing automation, platform metrics, or paid-media methodology to quietly become strategy.

The final operating principle is:

`AI FINDS THE PATTERN. HUMANS DECIDE WHAT IT MEANS.`

