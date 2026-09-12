# **SimpliCARE Intelligence & Reporting Engineering Spec**

Version: 1.1  
Classification: AI Intelligence Layer & Engineering Specification  
Status: Draft for Review  
Owner: SimpliCreative  
Related Workflow: SimpliCARE  
Related Human SOP: SimpliCARE Human SOP  
Primary Users: SimpliCreative Strategy Team, Client Team, and AI Engineering System

## **Purpose**

This specification defines how the SimpliCreative AI Intelligence Layer supports recurring performance intelligence, executive reporting, and discoverability opportunity identification within SimpliCARE.

The system should transform fragmented marketing data into useful intelligence without increasing certainty beyond what the evidence supports.

It governs three primary AI-assisted outputs:

| Output | Primary Audience | Purpose |
| ----- | ----- | ----- |
| Marketing Performance Intelligence Report PPT | Executive leadership, board, marketing leader, and working team | Client-facing performance intelligence report with a board-ready summary layer and a marketing-team detail layer |
| Executive Impact Deck | Executive leadership or board | Optional extracted board-only version derived from the approved executive section of the full report |
| Discoverability & Content Opportunity Report | Marketing/content team | Evidence-based content and discoverability opportunities derived primarily from GSC and approved client context |
| Internal Finding / Metric Records | SimpliCreative and AI system | Structured intelligence records used to generate and validate client-facing outputs |

The governing principle is:

`SYNTHESIZE THE EVIDENCE. PRESERVE ITS LIMITS. MAKE THE IMPACT VISIBLE.`

AI organizes, calculates, compares, synthesizes, drafts, and identifies patterns.

Humans approve interpretations, conclusions, recommendations, and external delivery.

---

---

## **Client-Facing Report Standard**

The primary CARE reporting deliverable should be a client-facing PowerPoint-style Marketing Performance Intelligence Report.

The report should support monthly, quarterly, or annual cadence while preserving a stable KPI hierarchy.

The recommended structure is:

| Section | Audience | Purpose |
| ----- | ----- | ----- |
| Cover | All | Client, period, cadence, comparison period, and sources |
| Executive Summary | Board / Executive | One clear story of the period |
| KPI Snapshot | Board / Executive | Primary business/mission outcome plus supporting KPIs |
| Mission / Business Outcome | Board / Executive | Whether marketing is moving the outcome leadership cares about |
| What’s Working | Board / Executive | Evidence-supported positive movement |
| What Needs Attention | Board / Executive | Constraints, declines, gaps, or risks |
| Measurement / Attribution Limits | Board / Executive | What can and cannot be responsibly claimed |
| Next-Period Priorities | Board / Executive | Human-approved focus areas |
| Marketing Team Detail Divider | Marketing Team | Transition into operational detail |
| Channel Quality | Marketing Team | Which channels drive volume, engagement, and conversions |
| Conversion Performance | Marketing Team | Forms, actions, app-store taps, donations, registrations, or other primary actions |
| Discoverability / Search | Marketing Team | Organic visibility, branded/non-branded performance, CTR, priority queries |
| Content / Page Performance | Marketing Team | Top converting pages, discovery pages, and high-opportunity pages |
| Optional Channel Modules | Marketing Team | Email, social, video, paid, app, referrals, donations, ecommerce, or client-specific systems |
| Opportunities & Action Plan | Marketing Team | Prioritized next actions with evidence and owner |
| Appendix | Both | Metric definitions, source notes, data quality, and change log |

Use:

`CURRENT_PERIOD -> PREVIOUS_COMPARABLE_PERIOD -> CHANGE -> INTERPRETATION -> BUSINESS_RELEVANCE`

The AI system may generate a shorter Executive Impact Deck only from the approved executive section and approved findings.

`EXECUTIVE_DECK_MUST_TRACE_TO_APPROVED_REPORT_EVIDENCE`

`EXECUTIVE_DECK_SHOULD_NOT_REANALYZE_RAW_DATA`

### **Standard KPI Hierarchy**

The AI system should organize available metrics into the following hierarchy before drafting the report.

| KPI Layer | Examples |
| ----- | ----- |
| Business / Mission Outcome | Qualified leads, opportunities, applications, donations, registrations, app installs, enrollments, appointments, revenue where defensible |
| Conversion | Primary conversions, conversion rate, form submissions, high-intent actions, app-store taps, donation actions |
| Demand / Reach | Users, new users, sessions, relevant traffic growth |
| Engagement | Engaged sessions, engagement rate, meaningful content engagement, deep views, watch time where relevant |
| Discoverability | Organic clicks, impressions, CTR, branded vs. non-branded visibility, priority-query visibility, AI search visibility where evidence supports it |
| Channel Quality | Traffic, engagement, and conversion by channel |
| Content Performance | Top converting pages, top discovery pages, underperforming high-opportunity pages |
| Measurement Health | Tracking gaps, CRM/app-store linkage, attribution limits, metric definition changes, unavailable evidence |

The system should not force irrelevant KPIs into a report.

It should identify the primary outcome metric first, then select the supporting KPIs that best explain marketing’s contribution and constraints.

## **1\. CARE Intelligence Workflow**

The core reporting workflow is:

`CLIENT OBJECTIVES + PREVIOUS PERIODS + GA4 + GSC + CRM + YOUTUBE + OTHER APPROVED DATA + FATHOM CONTEXT`

↓

`SOURCE VALIDATION`

↓

`DATA QUALITY ASSESSMENT`

↓

`METRIC NORMALIZATION`

↓

`PERIOD COMPARISON`

↓

`CROSS-SOURCE SYNTHESIS`

↓

`PERFORMANCE FINDINGS`

↓

`CONTRADICTION + ATTRIBUTION CHECK`

↓

`BUSINESS IMPACT INTERPRETATION`

↓

`OPPORTUNITY IDENTIFICATION`

↓

`MARKETING PERFORMANCE INTELLIGENCE REPORT`

↓

`HUMAN REVIEW`

↓

`EXECUTIVE IMPACT DECK`

↓

`HUMAN REVIEW`

↓

`CLIENT DELIVERY`

The discoverability workflow operates from the same approved client context:

`GSC + APPROVED CLIENT STRATEGY + EXISTING CONTENT + CONVERSION EVIDENCE`

↓

`QUERY NORMALIZATION`

↓

`QUERY CLUSTERING`

↓

`INTENT CLASSIFICATION`

↓

`EXISTING CONTENT MAPPING`

↓

`CONTENT GAP DETECTION`

↓

`BUSINESS RELEVANCE CHECK`

↓

`CONTENT OPPORTUNITY GENERATION`

↓

`HUMAN REVIEW`

↓

`APPROVED CONTENT OPPORTUNITIES`

---

## **2\. Required Client Context**

Performance data should never be interpreted without the business and marketing context required to understand it.

Before analysis begins, retrieve the available approved client context.

| Context | Why It Matters |
| ----- | ----- |
| Business objectives | Establishes what marketing is ultimately supporting |
| Marketing objectives | Defines intended marketing contribution |
| Website objectives | Connects website behavior to intended outcomes |
| Primary audiences | Helps interpret traffic and demand |
| Offers/programs/services | Connects behavior to business priorities |
| Primary conversions | Defines meaningful actions |
| Secondary conversions | Identifies earlier intent signals |
| CRM lifecycle definitions | Establishes downstream meaning |
| Reporting expectations | Defines what leadership needs to understand |
| Current initiatives | Provides context for changes |
| Campaign calendar | Explains activity during the period |
| Major website changes | Helps contextualize performance movement |
| Content initiatives | Helps interpret search/content performance |
| Partner activity | Identifies external influences |
| Known measurement limitations | Prevents unsupported conclusions |
| Previous recommendations | Allows follow-through analysis |
| Previous reporting periods | Establishes historical context |

Missing context should remain visible.

AI should not invent a business objective merely because data exists.

---

## **3\. Reporting Period Record**

Every report should establish the period being analyzed and the comparison being made.

Create a Reporting Period Record containing:

| Field | Description |
| ----- | ----- |
| Report\_ID | Unique report identifier |
| Client\_ID | Client identifier |
| Report\_Type | Full Intelligence / Executive / Discoverability |
| Current\_Period\_Start | Start date |
| Current\_Period\_End | End date |
| Comparison\_Period\_Start | Comparison start |
| Comparison\_Period\_End | Comparison end |
| Comparison\_Type | QoQ / YoY / Pre-Post / Custom |
| Reporting\_Cadence | Monthly / Quarterly / Other |
| Major\_Events | Known events affecting interpretation |
| Seasonality\_Notes | Relevant seasonal context |
| Data\_Cutoff | Latest included data |
| Human\_Owner | Responsible strategist |

Do not automatically compare periods that are materially different in duration without clearly normalizing or qualifying the comparison.

---

## **4\. Approved Data Sources**

The system may ingest data from approved client sources.

| Source | Typical Evidence |
| ----- | ----- |
| GA4 | Users, sessions, engaged sessions, channels, landing pages, events, conversions |
| Google Search Console | Queries, pages, clicks, impressions, CTR, average position |
| HubSpot | Contacts, lifecycle stages, forms, sources, opportunities, pipeline |
| Other CRM | Leads, inquiries, appointments, opportunities, pipeline, lifecycle progression |
| YouTube | Views, watch time, subscribers, traffic sources, video performance |
| Paid Platforms | Spend, clicks, conversions, campaign performance when in scope |
| Email/Automation | Sends, engagement, conversions, lifecycle activity |
| Business Systems | Donations, applications, registrations, appointments, enrollment, memberships |
| Fathom | Client-reported context, priorities, changes, explanations, decisions |
| Website/CMS | Published content, page changes, launch dates |
| Previous Reports | Historical comparison and previously approved conclusions |
| Approved Client Documents | Strategy and business context |

Not every source is required for every client.

Use only relevant and approved sources.

---

## **5\. Source Record**

Every retrieved dataset should preserve provenance.

Recommended fields:

`Source_ID`

`Client_ID`

`Platform`

`Account_or_Property`

`Data_Type`

`Retrieval_Method`

`Retrieval_Date`

`Data_Period`

`Filters`

`Dimensions`

`Metrics`

`Timezone`

`Currency`

`Attribution_Model_if_applicable`

`Known_Limitations`

`Data_Quality`

`Human_Review_Status`

The system should be able to answer:

“Where did this number come from?”

---

## **6\. Data Quality Assessment**

Use the existing SimpliCreative data-quality standard.

| Status | Meaning |
| ----- | ----- |
| Reliable | Sufficiently complete and trustworthy for the intended analysis |
| Usable With Limitations | Useful, but material limitations should accompany interpretation |
| Directional | Can indicate a pattern but should not support strong conclusions |
| Insufficient | Too incomplete or unreliable for the intended conclusion |
| Unavailable | Required data cannot currently be accessed |

Data quality is separate from whether a finding has been validated.

A reliable GA4 metric can still be insufficient evidence for a causal conclusion.

---

## **7\. Metric Definition Registry**

The system should maintain client-specific metric definitions so recurring reports compare like with like.

Each important KPI should preserve:

| Field | Purpose |
| ----- | ----- |
| Metric\_ID | Stable identifier |
| Metric\_Name | Human-readable label |
| Source | System of record |
| Platform\_Definition | Technical meaning |
| Client\_Definition | Business meaning |
| Calculation | Formula if derived |
| Filters | Applied conditions |
| Reporting\_Use | Why it matters |
| Historical\_Compatibility | Whether prior periods use same definition |
| Known\_Limitations | Interpretation constraints |
| Human\_Approved | Confirmation |

This prevents metrics from silently changing between reporting periods.

For example, total sessions and engaged sessions answer different questions.

AI may identify that one metric appears more useful for the reporting objective.

A human determines which metric should lead the client-facing story.

---

## **8\. Metric Normalization**

Before cross-source synthesis, normalize where appropriate:

Date ranges.

Timezones.

Currency.

Campaign naming.

Channel naming.

Source/medium naming.

Conversion definitions.

CRM lifecycle stages.

Content/page URLs.

Query formatting.

Brand vs non-brand definitions.

Geographic naming.

Historical metric definitions.

Do not merge metrics merely because their labels sound similar.

For example:

`GA4_CONVERSION != CRM_QUALIFIED_OPPORTUNITY`

`GSC_CLICK != GA4_SESSION`

`YOUTUBE_VIEW != WEBSITE_VISIT`

`FORM_SUBMISSION != QUALIFIED_DEMAND`

The system should preserve the distinction.

---

## **9\. GA4 Retrieval and Analysis**

Where available and relevant, retrieve approved GA4 metrics.

Potential analysis includes:

| Area | Potential Metrics |
| ----- | ----- |
| Acquisition | Users, sessions, new users, channels, source/medium |
| Engagement | Engaged sessions, engagement rate, average engagement time |
| Content | Landing pages, page views, page engagement |
| Conversion | Key events, forms, CTA actions, other approved conversions |
| Campaign | Campaign-tagged sessions and conversions |
| Geography | Relevant location patterns |
| Device | Device behavior where useful |
| Trends | Period-over-period movement |

AI should not assume every available GA4 metric belongs in the report.

Select metrics according to the client objective and reporting question.

---

## **10\. Google Search Console Retrieval and Analysis**

Potential GSC retrieval includes:

Clicks.

Impressions.

CTR.

Average position.

Queries.

Pages.

Countries.

Devices.

Branded vs non-branded search.

Query/page relationships.

Period comparisons.

Search performance should be interpreted as discoverability evidence.

It should not automatically be treated as business impact.

---

## **11\. CRM Retrieval and Analysis**

CRM analysis should focus on the downstream signals that are meaningful for the client.

Potential evidence may include:

New contacts.

Qualified contacts.

Inquiries.

Appointments.

Applications.

Registrations.

Opportunities.

Pipeline.

Lifecycle progression.

Lead source.

Campaign association.

Closed outcomes where available.

Revenue where appropriate and reliable.

The specific metrics depend on the client’s business model.

The system should not force every client into a B2B pipeline model.

Where attribution exists, preserve the attribution method and limitations.

Use:

`CRM_ATTRIBUTION != CAUSAL_ATTRIBUTION`

---

## **12\. YouTube Retrieval and Analysis**

Where YouTube is relevant, potential metrics include:

Views.

Watch time.

Average view duration.

Subscribers.

Traffic sources.

Top-performing videos.

Search discovery.

Website referral activity where measurable.

Content themes.

Period-over-period changes.

YouTube performance should be connected to the client’s objectives before it becomes part of the executive story.

High views alone do not establish business impact.

---

## **13\. Fathom Context Retrieval**

Fathom transcripts provide contextual intelligence.

They may contain:

Campaign launches.

Organizational changes.

New programs or services.

Leadership priorities.

Client concerns.

Seasonality.

Staffing constraints.

Partner activity.

Website changes.

Events.

Offline activity.

Measurement issues.

Client explanations.

Decisions.

Future priorities.

AI may extract relevant context from approved call transcripts.

Each material contextual statement should preserve:

`Statement`

`Speaker`

`Call_Date`

`Call_ID`

`Context_Type`

`Relevant_Period`

`Related_Metric_or_Finding`

`Client_Reported_Status`

Fathom context should not be represented as independent evidence of performance.

Use:

`CLIENT_STATEMENT != INDEPENDENT_EVIDENCE`

---

## **14\. Event Timeline**

Create a reporting-period Event Timeline where enough information exists.

| Date | Event | Source | Potential Relevance |
| ----- | ----- | ----- | ----- |
| Date | Website launch | Project record | May affect site metrics |
| Date | Campaign launch | Fathom/client record | May affect traffic/conversions |
| Date | New service introduced | Client context | May affect demand |
| Date | Major content published | CMS | May affect search |
| Date | Tracking changed | Analytics record | May affect comparability |

The timeline helps the strategist interpret performance.

It does not establish causation.

---

## **15\. Period Comparison**

AI may calculate:

Absolute change.

Percentage change.

Quarter-over-quarter change.

Year-over-year change.

Pre/post change.

Rolling trends where appropriate.

Every calculated change should preserve:

Original values.

Calculation.

Periods.

Source.

Data quality.

Comparability status.

Do not calculate percentage change from a zero baseline without appropriate handling.

Do not present materially incomparable periods as directly equivalent.

---

## **16\. Cross-Source Synthesis**

The highest-value CARE intelligence comes from examining multiple sources together.

Potential patterns include:

| Pattern | Sources |
| ----- | ----- |
| Search visibility increasing and organic site activity increasing | GSC \+ GA4 |
| Organic activity increasing but qualified demand flat | GSC \+ GA4 \+ CRM |
| Campaign traffic increasing and form activity increasing | GA4 \+ CRM |
| Video interest increasing around a topic also appearing in search | YouTube \+ GSC |
| High search visibility but weak CTR | GSC |
| Strong website conversions but weak CRM progression | GA4 \+ CRM |
| Client reports major campaign while traffic shifts during same period | Fathom \+ GA4 |
| New content receives search visibility but no meaningful downstream activity yet | GSC \+ GA4 \+ CRM |

AI may identify patterns.

AI should not automatically determine why the pattern occurred.

---

## **17\. Finding Record**

Every material reporting finding should become a structured Finding Record.

Recommended fields:

`Finding_ID`

`Statement`

`Business_Relevance`

`Sources`

`Metrics`

`Periods`

`Validation_Status`

`Validation_Basis`

`Data_Quality`

`Contradicting_Evidence`

`Context`

`Confidence`

`Attribution_Limitation`

`Related_Client_Objective`

`Related_Opportunity`

`Human_Review_Status`

Use the agency validation statuses:

`OBSERVED`

`CLIENT_REPORTED`

`HYPOTHESIS`

`DIRECTIONAL`

`VALIDATED`

`PARTIALLY_VALIDATED`

`CONTRADICTED`

`INSUFFICIENT_EVIDENCE`

`UNKNOWN`

The system must preserve validation status downstream.

`VALIDATION_STATUS_MUST_SURVIVE_SYNTHESIS`

---

## **18\. Contradiction Detection**

AI should actively look for evidence that complicates the story.

Examples:

Traffic increased but conversions declined.

Search impressions increased but clicks did not.

Form submissions increased but qualified opportunities did not.

YouTube views increased without corresponding site or CRM movement.

The client believes a campaign drove improvement but tracking cannot establish that.

A metric improved because its definition changed.

The executive report should not hide contradictory evidence merely because it makes the narrative less impressive.

Contradictions may be strategically valuable.

---

## **19\. Business Impact Interpretation**

After performance findings are established, connect them to the client’s objectives.

Possible impact categories include:

Discoverability.

Audience reach.

Engagement.

Qualified demand.

Inquiries.

Appointments.

Applications.

Registrations.

Memberships.

Donations.

Enrollment.

Consultations.

Opportunities.

Pipeline.

Revenue where defensible.

Operational efficiency.

Measurement maturity.

Leadership visibility.

Do not force every metric into revenue.

“Marketing impact” is intentionally broader than ROI.

---

## **20\. Opportunity Identification**

Opportunities should arise from evidence, business priorities, unresolved questions, or meaningful gaps.

Each Opportunity Record should contain:

| Field | Purpose |
| ----- | ----- |
| Opportunity\_ID | Stable identifier |
| Opportunity | What could improve |
| Evidence | What supports it |
| Business Relevance | Why it matters |
| Related Objective | What it supports |
| Confidence | Strength of support |
| Data Limitation | What remains uncertain |
| Suggested Action | Potential next move |
| Effort / Dependency | Known implementation considerations |
| Priority | Relative importance |
| Human Approval | Required |

AI may propose opportunities.

Humans prioritize them.

---

# **MARKETING PERFORMANCE INTELLIGENCE REPORT**

## **21\. Report Purpose**

The full report is the deeper working intelligence document.

It should answer:

What happened?

What changed?

What evidence supports that?

What does it mean?

What remains uncertain?

What appears to be contributing?

Where are the gaps?

What opportunities deserve attention?

What should the team investigate or do next?

---

## **22\. Recommended Report Structure**

| Section | Content |
| ----- | ----- |
| Executive Summary | Most important performance story |
| Objectives | Business and marketing objectives |
| Reporting Context | Period, major initiatives, changes |
| Data Sources | Evidence used |
| Data Quality | Limitations and comparability |
| KPI Summary | Meaningful measures |
| Website Performance | GA4 analysis |
| Search & Discoverability | GSC analysis |
| CRM / Business Outcomes | Downstream evidence |
| Video / Content | YouTube and content evidence |
| Other Channels | Relevant approved sources |
| Cross-Channel Intelligence | Patterns across systems |
| Key Findings | Evidence-supported conclusions |
| Contradictions & Unknowns | What complicates interpretation |
| Opportunities | Areas deserving attention |
| Next-Period Priorities | Human-approved recommendations |
| Measurement Improvements | Gaps worth fixing |

Not every client requires every section.

The report should adapt to available evidence and client objectives.

---

## **23\. Report Drafting Rules**

AI should write the report from structured findings and approved evidence.

Do not draft directly from raw platform exports when structured analysis is available.

Use:

`RAW_DATA_DOES_NOT_DIRECTLY_AUTHOR_STRATEGIC_CONCLUSIONS`

The report should distinguish:

`SOURCE_REPORTED_THIS`

`AI_CALCULATED_THIS`

`AI_INTERPRETED_THIS`

`CLIENT_REPORTED_THIS`

`STRATEGIST_CONCLUDED_THIS`

AI summaries must not increase certainty.

Use:

`REPORT_SUMMARY_MUST_NOT_INCREASE_CERTAINTY`

---

## **24\. Human Report Review**

Before delivery, a human reviews:

Metric definitions.

Date ranges.

Calculations.

Comparability.

Data quality.

Findings.

Contradicting evidence.

CRM interpretation.

Attribution.

Causal language.

Business impact claims.

Opportunities.

Priorities.

Executive summary.

The report status should progress:

`AI_GENERATED_REPORT`

→ `DRAFT_FOR_STRATEGIST_REVIEW`

→ `HUMAN_REVIEWED_REPORT`

→ `APPROVED_PERFORMANCE_REPORT`

Only the approved version should feed the final Executive Impact Deck.

---

# **EXECUTIVE IMPACT DECK**

## **25\. Executive Deck Purpose**

The Executive Impact Deck translates approved marketing intelligence into a concise leadership narrative.

Its purpose is to help the marketing director communicate marketing’s impact to executives or a board.

It should answer:

What were we trying to accomplish?

What changed?

What evidence demonstrates progress?

What can we responsibly claim?

What remains uncertain?

What did we learn?

Where are the opportunities?

What should we focus on next?

---

## **26\. Executive Deck Input Gate**

The Executive Deck should derive from:

Approved Performance Report.

Approved Finding Records.

Approved Opportunity Records.

Client objectives.

Approved priorities.

Approved metric definitions.

Approved data limitations.

Client brand assets.

Approved reporting period.

Relevant executive audience context.

Do not regenerate the executive analysis independently from raw data.

Use:

`EXECUTIVE_DECK_MUST_TRACE_TO_APPROVED_REPORT_EVIDENCE`

---

## **27\. Executive Deck Narrative**

Recommended sequence:

| Section | Leadership Question |
| ----- | ----- |
| Objectives | What were we trying to accomplish? |
| Performance Snapshot | What changed? |
| Evidence of Impact | What progress can we demonstrate? |
| Key Insights | What did we learn? |
| Limitations / Risks | What should leadership understand? |
| Opportunities | Where can marketing create more value? |
| Next-Period Priorities | What happens next? |
| Measurement | How will progress be evaluated? |

The deck should prioritize business relevance over platform detail.

---

## **28\. Executive Deck Generation**

AI may generate:

Slide sequence.

Insight headlines.

Concise narrative.

Approved charts or chart specifications.

Supporting metrics.

Executive summary language.

Opportunity slides.

Next-period priorities.

Speaker-note drafts.

AI should not invent new conclusions to make the presentation stronger.

One slide should generally communicate one primary idea.

Headlines should communicate the insight, not merely label the metric.

For example, prefer:

“Organic visibility expanded across priority service topics”

over:

“Google Search Console Performance.”

---

## **29\. Client Brand Application**

The Executive Deck should follow the approved client brand where assets and templates are available.

The system may use:

Approved logo.

Colors.

Typography guidance.

Approved presentation template.

Approved imagery.

Existing client presentation conventions.

AI should not invent permanent brand standards to fill missing information.

Design does not alter the evidence.

---

## **30\. Executive Deck Human Review**

Before delivery, review:

Traceability to the approved report.

Metric accuracy.

Headline accuracy.

Certainty.

Attribution.

Business relevance.

Visual clarity.

Client brand.

Priority recommendations.

Speaker notes where applicable.

Deck status:

`AI_GENERATED_EXECUTIVE_DECK`

→ `DRAFT_FOR_STRATEGIST_REVIEW`

→ `APPROVED_FOR_CLIENT_PRESENTATION`

---

# **DISCOVERABILITY & CONTENT OPPORTUNITY REPORT**

## **31\. Purpose**

The Discoverability & Content Opportunity workflow turns real client search evidence into useful content opportunities.

The objective is not to generate a generic editorial calendar.

It is to identify where the client has relevant search demand, emerging visibility, content gaps, weak engagement, or opportunities to better answer buyer questions.

---

## **32\. Required Inputs**

Potential inputs include:

GSC query data.

GSC page data.

Approved client strategy.

Primary audiences.

Services/programs/offers.

Current website sitemap.

Existing content inventory.

Current content performance.

Relevant conversions.

CRM evidence where available.

Approved business priorities.

Approved external research where needed.

Do not begin with generic keyword lists when client evidence is available.

---

## **33\. Query Normalization**

Before clustering, normalize:

Capitalization.

Singular/plural variations where appropriate.

Obvious duplicates.

Brand variations.

URLs.

Geographic variants.

Question formats.

Known irrelevant queries.

Do not erase meaningful differences in intent simply to create cleaner clusters.

---

## **34\. Query Intent Classification**

Use the following intent categories where appropriate:

`INFORMATIONAL`

`PROBLEM_AWARE`

`SOLUTION_CATEGORY`

`COMPARISON_EVALUATION`

`COMMERCIAL_DECISION`

`BRANDED`

Intent classification is an AI interpretation unless independently validated.

Preserve that distinction.

---

## **35\. Query Clustering**

AI may group semantically related queries into Query Clusters.

Each cluster should preserve:

`Cluster_ID`

`Cluster_Name`

`Queries`

`Clicks`

`Impressions`

`CTR`

`Average_Position`

`Relevant_Pages`

`Intent`

`Audience`

`Relevant_Service_or_Offer`

`Business_Relevance`

`Existing_Content`

`Opportunity_Status`

Do not cluster unrelated queries merely because they share a word.

---

## **36\. Content Gap Detection**

Potential opportunity patterns include:

High impressions with weak CTR.

Relevant queries ranking on an inappropriate page.

Multiple related queries without a dedicated resource.

Strong non-branded visibility without sufficient conversion support.

Relevant question queries without useful answers.

Priority services with weak search coverage.

Existing content with visibility but weak structure or relevance.

Several overlapping pages competing for the same intent.

Emerging search themes relevant to client priorities.

Search demand connected to known client expertise but unsupported by current content.

These are signals.

They are not automatic content recommendations.

---

## **37\. Business Relevance Check**

Before recommending a topic, evaluate:

Does this serve a priority audience?

Does it connect to an actual client service, program, offer, or expertise?

Does it support a meaningful buyer need?

Does the client have credible expertise to answer it?

Is content already available?

Could existing content be improved instead?

Does the topic support a meaningful conversion or buyer journey?

Is the opportunity important enough to justify effort?

Use:

`HIGH_IMPRESSIONS != HIGH_BUSINESS_VALUE`

and:

`GSC_QUERY != CONTENT_STRATEGY_BY_ITSELF`

---

## **38\. Content Opportunity Record**

Each recommended topic should preserve:

| Field | Description |
| ----- | ----- |
| Topic\_ID | Stable identifier |
| Topic | Recommended subject |
| Search\_Evidence | Supporting GSC evidence |
| Query\_Cluster | Related searches |
| Intent | Likely searcher intent |
| Relevant\_Audience | Intended audience |
| Relevant\_Offer | Business connection |
| Existing\_Content | Current coverage |
| Opportunity\_Type | New / Improve / Consolidate |
| Business\_Relevance | Why it matters |
| Recommended\_Format | Guide / FAQ / comparison / article / resource / landing page |
| Suggested\_Angle | Recommended direction |
| Proof\_Required | Client expertise/evidence needed |
| External\_Research\_Needed | Additional evidence required |
| CTA | Appropriate next action |
| Priority | Relative priority |
| Confidence | Strength of recommendation |
| Human\_Review | Approval status |

---

## **39\. External Research Boundary**

GSC data, client data, external research, and AI interpretation must remain distinguishable.

Use:

`GSC_OBSERVATION`

`CLIENT_EVIDENCE`

`EXTERNAL_RESEARCH`

`AI_INTERPRETATION`

`STRATEGIST_RECOMMENDATION`

External research may strengthen a recommendation.

It should not be presented as client performance evidence.

Likewise, directional theories about AI search, AEO, or GEO should not be represented as observed client outcomes without evidence.

---

## **40\. Suggested Content Output**

The AI may generate a prioritized content opportunity report containing:

Search opportunity.

Relevant query cluster.

Intent.

Audience.

Business connection.

Existing-content assessment.

Recommended content type.

Suggested angle.

Potential outline.

Proof/expertise requirements.

Suggested CTA.

Measurement approach.

Priority.

The strategist approves the recommendation before it becomes a client-facing content plan.

---

# **LEARNING & MEMORY**

## **41\. Outcome Tracking**

When a recommendation is implemented, preserve enough information to evaluate it later.

Recommended fields:

`Recommendation_ID`

`Implementation_Date`

`Baseline_Period`

`Evaluation_Period`

`Metric`

`Expected_Outcome`

`Observed_Outcome`

`Data_Quality`

`Other_Influences`

`Supported_Conclusion`

`Remaining_Uncertainty`

`Next_Decision`

Do not force an outcome before enough time or evidence exists.

---

## **42\. Second Brain Knowledge Capture**

CARE reporting should preserve durable intelligence, not every metric snapshot.

Potential durable knowledge includes:

Approved metric definitions.

Client reporting preferences.

Leadership reporting priorities.

Validated business context.

Important measurement limitations.

Material performance findings.

Repeated performance patterns.

Approved recommendations.

Strategic decisions.

Meaningful outcome records.

Durable client corrections.

Important changes in objectives.

Do not store every report paragraph as permanent semantic knowledge.

The report itself can remain a source artifact.

---

## **43\. Memory Promotion**

Reporting-period observations initially belong in working or episodic memory.

A repeated or validated client-specific pattern may become Client Semantic Knowledge after human approval.

A pattern should not become Agency Semantic Knowledge simply because it appeared across one client’s reports.

Use:

`EPISODIC_OBSERVATION != AGENCY_SEMANTIC_KNOWLEDGE`

and:

`CLIENT_SPECIFIC_FINDING != CROSS_CLIENT_BEST_PRACTICE`

---

# **AI PERMISSIONS & RESTRICTIONS**

## **44\. AI Permissions**

| AI May | Human Approval Required |
| ----- | ----- |
| Retrieve approved analytics data | Yes for final interpretation |
| Normalize metrics | Yes where definitions materially change |
| Calculate comparisons | Human verifies material calculations |
| Identify anomalies | Human interprets |
| Synthesize cross-source patterns | Human approves findings |
| Retrieve Fathom context | Human approves contextual use |
| Generate Finding Records | Human validates material findings |
| Identify contradictions | Human resolves interpretation |
| Draft full performance report | Human approves |
| Draft Executive Impact Deck | Human approves |
| Cluster GSC queries | Human reviews |
| Classify search intent | Human reviews |
| Suggest content opportunities | Human approves |
| Draft content outlines | Human approves |
| Capture reporting metadata | According to governance |
| Propose memory candidates | Human approves promotion |

---

## **45\. AI Restrictions**

AI may not independently certify ROI.

AI may not independently establish causation.

AI may not treat CRM attribution as causal proof.

AI may not treat traffic growth as proof of business impact.

AI may not convert client statements into independently validated evidence.

AI may not hide contradictory evidence.

AI may not silently change metric definitions.

AI may not increase certainty during summarization.

AI may not invent missing data.

AI may not invent targets.

AI may not invent benchmarks.

AI may not invent client outcomes.

AI may not generate an executive conclusion unsupported by the full report.

AI may not treat GSC impressions alone as justification for content production.

AI may not treat external research as client performance evidence.

AI may not deliver reports or decks externally without human approval.

---

# **HUMAN APPROVAL GATES**

## **46\. Required Human Review**

Human approval is required before:

A material performance finding is treated as validated.

A causal interpretation is communicated.

An ROI statement is communicated.

A new KPI definition becomes canonical.

A major data conflict is resolved.

A full report is delivered.

An Executive Impact Deck is delivered.

A content opportunity becomes a recommendation.

A strategic priority is assigned.

A client-specific pattern is promoted to semantic memory.

An agency-level pattern is promoted to agency knowledge.

---

# **PERMANENT GUARDRAILS**

## **47\. CARE Intelligence Guardrails**

`AI_CONFIDENCE != EVIDENCE`

`PLATFORM_METRIC != BUSINESS_OUTCOME`

`CORRELATION != CAUSATION`

`TRAFFIC_GROWTH != PROVEN_BUSINESS_IMPACT`

`CLIENT_STATEMENT != INDEPENDENT_EVIDENCE`

`CRM_ATTRIBUTION != CAUSAL_ATTRIBUTION`

`FORM_SUBMISSION != QUALIFIED_DEMAND`

`GSC_CLICK != GA4_SESSION`

`YOUTUBE_VIEW != WEBSITE_VISIT`

`VALIDATION_STATUS_MUST_SURVIVE_SYNTHESIS`

`REPORT_SUMMARY_MUST_NOT_INCREASE_CERTAINTY`

`RAW_DATA_DOES_NOT_DIRECTLY_AUTHOR_STRATEGIC_CONCLUSIONS`

`EXECUTIVE_DECK_MUST_TRACE_TO_APPROVED_REPORT_EVIDENCE`

`GSC_QUERY != CONTENT_STRATEGY_BY_ITSELF`

`HIGH_IMPRESSIONS != HIGH_BUSINESS_VALUE`

`EXTERNAL_RESEARCH_MUST_BE_DISTINGUISHED_FROM_CLIENT_DATA`

`AI_INTERPRETATION != STRATEGIST_CONCLUSION`

`CLIENT_SPECIFIC_FINDING != CROSS_CLIENT_BEST_PRACTICE`

`EPISODIC_OBSERVATION != AGENCY_SEMANTIC_KNOWLEDGE`

`HUMAN_APPROVAL_REQUIRED_FOR_EXTERNAL_DELIVERY`

---

# **48\. Output Statuses**

| Output | Status Flow |
| ----- | ----- |
| Source Data | RETRIEVED → VALIDATED\_FOR\_ANALYSIS |
| Finding | AI\_GENERATED → HUMAN\_REVIEWED → APPROVED |
| Full Report | AI\_GENERATED\_REPORT → DRAFT\_FOR\_STRATEGIST\_REVIEW → HUMAN\_REVIEWED\_REPORT → APPROVED\_PERFORMANCE\_REPORT |
| Executive Deck | AI\_GENERATED\_EXECUTIVE\_DECK → DRAFT\_FOR\_STRATEGIST\_REVIEW → APPROVED\_FOR\_CLIENT\_PRESENTATION |
| Content Opportunity | AI\_GENERATED\_OPPORTUNITY → HUMAN\_REVIEWED → APPROVED\_CONTENT\_OPPORTUNITY |
| Outcome | OBSERVED → REVIEWED → APPROVED\_OUTCOME\_RECORD |
| Memory Candidate | CANDIDATE → HUMAN\_REVIEW → PROMOTED / REJECTED |

---

# **49\. Engineering Flow at a Glance**

| Phase | Inputs | AI Role | Human Role | Output |
| ----- | ----- | ----- | ----- | ----- |
| Context | Strategy, objectives, Fathom, prior reports | Retrieve and organize | Confirm relevance | Reporting Context |
| Collect | GA4, GSC, CRM, YouTube, other sources | Retrieve | Confirm access/source | Source Records |
| Validate | Retrieved data | Check completeness and quality | Resolve material issues | Validated Data |
| Normalize | Multi-source data | Standardize definitions where approved | Approve material mappings | Normalized Dataset |
| Analyze | Current \+ comparison periods | Calculate and identify patterns | Interpret | Findings |
| Synthesize | Findings \+ context | Cross-source synthesis | Approve conclusions | Performance Intelligence |
| Report | Approved findings | Draft full report | Edit and approve | Performance Report |
| Executive | Approved report | Draft leadership narrative | Edit and approve | Executive Impact Deck |
| Discoverability | GSC \+ strategy \+ content | Cluster and identify gaps | Prioritize | Content Opportunities |
| Implement | Approved opportunities | Support execution | Own decisions | CARE Work |
| Measure | Post-implementation evidence | Compare outcomes | Interpret | Outcome Records |
| Learn | Findings \+ outcomes | Propose memory candidates | Approve promotion | Durable Intelligence |

---

# **50\. Success Standard**

The CARE Intelligence system succeeds when it helps SimpliCreative answer four questions reliably:

| Question | Required Outcome |
| ----- | ----- |
| What happened? | Accurate multi-source performance evidence |
| Why does it matter? | Business-relevant interpretation without overclaiming |
| What can the marketing leader demonstrate? | Evidence-supported executive story |
| What should we investigate or improve next? | Prioritized opportunities grounded in client evidence |

The system should not make marketing appear successful by selecting flattering metrics.

It should make marketing’s actual impact more visible.

When the evidence is strong, say what it supports.

When the evidence is mixed, show the tension.

When the evidence is weak, preserve the uncertainty.

