# **Source Register**

Version: 1.0  
Classification: Knowledge Governance  
Status: Active Implementation Register  
Owner: SimpliCreative  
Primary Users: SimpliCreative Leadership, Knowledge Administrator, AI Engineers  
Purpose: Master inventory of sources approved for, excluded from, or restricted within the SimpliCreative AI Second Brain

## **1\. Governing Rule**

Every source entering the Second Brain must have an explicit identity, authority, status, ownership boundary, and retrieval treatment.

The system must never infer authority from a filename, folder, semantic similarity, upload date, or frequency of retrieval.

`RELEVANCE DETERMINES WHAT TO RETRIEVE`

`AUTHORITY DETERMINES WHAT MAY GOVERN`

## **2\. Source Statuses**

| Status | System Treatment |
| ----- | ----- |
| `CURRENT_SOURCE_OF_TRUTH` | May govern within approved authority domain |
| `SUPPORTING_METHODOLOGY` | May govern methodology within approved domain only |
| `REFERENCE_ONLY` | May inform reasoning but cannot establish policy |
| `EXTERNAL_REFERENCE` | Third-party material with explicit source/reuse restrictions |
| `HISTORICAL` | Available for provenance when requested, excluded from normal retrieval |
| `SUPERSEDED` | Replaced, excluded from current-state retrieval |
| `DRAFT_NOT_FOR_GOVERNING_RETRIEVAL` | Work in progress, not permitted to govern |

## **3\. Retrieval Priority**

Use the following retrieval order:

`CURRENT GOVERNANCE`

↓

`CURRENT STRATEGIC SOURCE OF TRUTH`

↓

`CURRENT TASK-SPECIFIC SOP / SPEC`

↓

`APPROVED SUPPORTING METHODOLOGY`

↓

`AUTHORIZED CLIENT CONTEXT`

↓

`REFERENCE / GOLD-STANDARD MATERIAL`

↓

`HISTORICAL MATERIAL ONLY WHEN REQUIRED`

`AUTHORITY_OUTRANKS_SEMANTIC_SIMILARITY`

## **4\. Governance & Engineering Control Sources**

| Source ID | Source | Version | Status | Authority Domain | Ingestion |
| ----- | ----- | ----- | ----- | ----- | ----- |
| GOV-001 | AI Second Brain Governance & Intelligence Architecture | 1.2 | `CURRENT_SOURCE_OF_TRUTH` | AI Governance | Yes |
| GOV-002 | Second Brain Source Register | 1.0 | `CURRENT_SOURCE_OF_TRUTH` | Knowledge Authority | Yes |
| ENG-001 | Engineering Build Brief & Systems Inventory | 1.0 | `CURRENT_SOURCE_OF_TRUTH` | Engineering Requirements | Yes |
| ENG-002 | Engineer Handoff Manifest | 1.0 | `CURRENT_SOURCE_OF_TRUTH` | Engineering Handoff | Yes |
| ENG-003 | Corpus Cleanup & Classification Plan | 1.0 | `REFERENCE_ONLY` | Implementation Procedure | Yes |
| EVAL-001 | Engineering Acceptance Test Pack | 1.0 | `CURRENT_SOURCE_OF_TRUTH` | System Evaluation | Yes |
| TEAM-001 | Second Brain Team Guide | 1.0 | `CURRENT_SOURCE_OF_TRUTH` | Team Use | Yes |

Engineering-control documents may govern implementation without becoming general agency strategy.

## **5\. Agency Strategy Sources**

| Source ID | Source | Status | Authority Domain | Ingestion |
| ----- | ----- | ----- | ----- | ----- |
| STRAT-001 | Strategic Foundation | `CURRENT_SOURCE_OF_TRUTH` | Agency Strategy | Yes |
| BRAND-001 | Brand Voice & Editorial Standards | `CURRENT_SOURCE_OF_TRUTH` | Brand Voice / Editorial | Yes |
| MSG-001 | Storytelling & Messaging Architecture | `CURRENT_SOURCE_OF_TRUTH` once final file confirmed | Messaging | Confirm |
| GOV-003 | Originality & Source Integrity Standard | `CURRENT_SOURCE_OF_TRUTH` | Originality / Source Use | Yes |

STRAT-001 contains the canonical strategic values.

`PRIMARY_CATEGORY = STRATEGIC WEBSITE CONSULTING AGENCY`

`PRIMARY_AUDIENCE = LEAN MARKETING TEAMS IN SERVICE ORGANIZATIONS`

`CORE_BELIEF = MARKETING WORKS BETTER WHEN IT WORKS TOGETHER`

`NORTH_STAR = MAKE MARKETING'S IMPACT VISIBLE`

`CORE_POV = STOP SOLVING CONNECTED MARKETING PROBLEMS ONE TACTIC AT A TIME`

## **6\. Offer & Commercial Sources**

| Source ID | Source | Status | Authority Domain | Ingestion |
| ----- | ----- | ----- | ----- | ----- |
| OFFER-001 | Current Offer Architecture | `CURRENT_SOURCE_OF_TRUTH` | Offer Architecture | Yes |
| PRICE-001 | Pricing SOP | `CURRENT_SOURCE_OF_TRUTH` | Pricing Process | Yes |
| PRICE-002 | Current Pricing Source of Truth | `CURRENT_SOURCE_OF_TRUTH` | Current Pricing | Yes |
| PRICE-003 | Deliverable Pricing Library | `CURRENT_SOURCE_OF_TRUTH` | Pricing Reference | Yes |

Commercial retrieval must prioritize PRICE-002 for current price values.

`HISTORICAL_PROPOSAL != CURRENT_PRICING_AUTHORITY`

`COMPETITOR_PRICE != CURRENT_PRICING_AUTHORITY`

## **7\. Product Naming Authority**

The Source Register should preserve the distinction between formal product identity and approved descriptive acquisition language.

`FORMAL_PRODUCT_NAME = LEAN MARKETING SCORECARD™`

`LEAN_MARKETING_ASSESSMENT = APPROVED_DESCRIPTIVE_ACQUISITION_LANGUAGE`

`DESCRIPTIVE_LANGUAGE_DOES_NOT_RENAME_PRODUCT`

This distinction should be propagated into acquisition and sales sources during final corpus cleanup.

## **8\. Sales & Diagnostic Sources**

| Source ID | Source | Status | Authority Domain | Ingestion |
| ----- | ----- | ----- | ----- | ----- |
| DIAG-001 | Executive Marketing Diagnostic Human SOP | `CURRENT_SOURCE_OF_TRUTH` | Diagnostic Process | Yes |
| SALES-001 | Sales Intelligence Workflow Spec | `CURRENT_SOURCE_OF_TRUTH` | Sales Intelligence | Yes |
| ASSESS-001 | Lean Marketing Scorecard™ Method / Configuration | Current approved version | Assessment | Confirm |

Assessment information is evidence.

It is not diagnosis.

`SCORECARD_RESULT != ROOT_CAUSE`

## **9\. Blueprint Sources**

| Source ID | Source | Status | Authority Domain | Ingestion |
| ----- | ----- | ----- | ----- | ----- |
| BLUE-001 | SimpliBlueprint Human SOP | `CURRENT_SOURCE_OF_TRUTH` | Blueprint Delivery | Yes |
| BLUE-002 | Blueprint Intelligence Workflow Spec | `CURRENT_SOURCE_OF_TRUTH` | Blueprint AI Workflow | Yes |
| BLUE-003 | Blueprint Strategy Deck Spec | `CURRENT_SOURCE_OF_TRUTH` | Blueprint Deliverable | Yes |
| BLUE-004 | Blueprint Evidence / Methodology Standard | Current approved version if separate | Blueprint Evidence | Confirm |

## **10\. Implementation Sources**

| Source ID | Source | Status | Authority Domain | Ingestion |
| ----- | ----- | ----- | ----- | ----- |
| FOUND-001 | SimpliFoundation Human SOP | `CURRENT_SOURCE_OF_TRUTH` | Foundation Delivery | Yes |
| FOUND-002 | SimpliFoundation Engineering Spec | `CURRENT_SOURCE_OF_TRUTH` | Foundation Intelligence | Yes |
| TPL-001 | Templated WordPress Human SOP | `CURRENT_SOURCE_OF_TRUTH` | Productized Website Delivery | Yes |
| TPL-002 | Templated WordPress AI Spec | `CURRENT_SOURCE_OF_TRUTH` | Productized Website Intelligence | Yes |

Preserve:

`TEMPLATED_WEBSITE != DISCOUNTED_FOUNDATION`

## **11\. CARE Sources**

| Source ID | Source | Status | Authority Domain | Ingestion |
| ----- | ----- | ----- | ----- | ----- |
| CARE-001 | SimpliCARE Human SOP | `CURRENT_SOURCE_OF_TRUTH` | CARE Delivery | Yes |
| CARE-002 | CARE Intelligence & Reporting Engineering Spec | `CURRENT_SOURCE_OF_TRUTH` | CARE Intelligence | Yes |

CARE should preserve metric definitions, comparability, evidence, and decision trace.

## **12\. Acquisition Sources**

| Source ID | Source | Status | Authority Domain | Ingestion |
| ----- | ----- | ----- | ----- | ----- |
| ACQ-001 | Inbound Client Acquisition Strategy | 1.2 | `DRAFT_NOT_FOR_GOVERNING_RETRIEVAL` until final approval | Acquisition Strategy |
| PARTNER-001 | Partner Distribution Strategy | 1.0 | `DRAFT_NOT_FOR_GOVERNING_RETRIEVAL` until final approval | Partner Distribution |
| ACQ-002 | Inbound Acquisition Intelligence Workflow Spec | 1.1 | `DRAFT_NOT_FOR_GOVERNING_RETRIEVAL` until final approval | Acquisition Intelligence |
| ACQ-003 | Ad Copy Review & Feedback Engine | Component of ACQ-002 | Same status as parent | Paid Creative Intelligence |

Once human-approved, change the applicable source to:

`CURRENT_SOURCE_OF_TRUTH`

and record the approval date as `Effective_Date`.

## **13\. Paid-Media Supporting Methodology**

Ashley’s Paid Ads Playbook should be isolated from agency strategy.

| Source Family | Status | Authority Domain | Ingestion |
| ----- | ----- | ----- | ----- |
| Current Coaching Protocols | `SUPPORTING_METHODOLOGY` | Paid Media | Yes |
| Refined Modules 01-06 | `SUPPORTING_METHODOLOGY` | Paid Media | Yes |
| Core Intelligence Modules 07-11 | `SUPPORTING_METHODOLOGY` | Paid Media | Yes |
| M12-M13 Advanced Systems | `SUPPORTING_METHODOLOGY` | Paid Media | Yes |
| Applied Decision Rules | `SUPPORTING_METHODOLOGY` | Paid Media | Yes |
| Cognitive Core | `SUPPORTING_METHODOLOGY` | Paid Media Reasoning | Yes |
| Paid-Media Scenario Files | `REFERENCE_ONLY` | Scenario Illustration | Restricted |
| Expert Knowledge Base | `REFERENCE_ONLY` | Expert Reference | Restricted |

Authority rule:

`SIMPLICREATIVE STRATEGY`

↓

`SIMPLICREATIVE MESSAGING + BRAND VOICE`

↓

`BUYER STAGE + MESSAGE TERRITORY + OFFER`

↓

`ASHLEY PAID-MEDIA METHODOLOGY`

↓

`PLATFORM EXECUTION`

## **14\. External Partner Methodology**

| Source ID | Source | Status | Authority Domain | Reuse |
| ----- | ----- | ----- | ----- | ----- |
| EXT-PARTNER-001 | Matt Essam / Chris Do Agency Lead Flow System | `EXTERNAL_REFERENCE` | Partner Research | Principle only |

The approved SimpliCreative Partner Distribution Strategy governs.

The external source may inform reasoning but does not authorize reproduction of branded frameworks or proprietary wording.

## **15\. Competitor Research**

| Source ID | Source | Status | Authority Domain | Ingestion |
| ----- | ----- | ----- | ----- | ----- |
| REF-COMP-001 | SimpliCreative B2B Competitor Research | `REFERENCE_ONLY` | Market Context | Yes, restricted |

The B2B framing in this research is contextual and historical.

It does not redefine the current ICP.

Pricing contained within competitor research is market evidence only.

## **16\. Gold-Standard Sources**

Every approved Gold Standard receives an individual Source\_ID.

Required metadata:

`Status = REFERENCE_ONLY`

`Knowledge_Type = REFERENCE_EXAMPLE`

`Authority = NON_GOVERNING`

`Copy_Authority = FALSE`

`Reuse = PRINCIPLE_ONLY`

`Context_Boundary = REQUIRED`

`Human_Approval = REQUIRED`

Do not ingest an example into the Gold-Standard collection until someone can explain what the system is intended to learn from it.

## **17\. Client Sources**

Client material must not share a single unrestricted semantic collection.

Each source requires:

`Client_ID`

`Client_Name`

`Access_Group`

`Knowledge_Type`

`Sensitivity`

`Source_Date`

`Effective_Date`

`Reuse_Restrictions`

`Source_Location`

Client knowledge types should include:

`CLIENT_FACT`

`CLIENT_PREFERENCE`

`CLIENT_DECISION`

`CLIENT_OUTCOME`

`AGENCY_OBSERVATION`

`CANDIDATE_AGENCY_LEARNING`

`APPROVED_AGENCY_LEARNING`

Only `APPROVED_AGENCY_LEARNING` may be promoted into Agency Semantic Memory.

## **18\. Historical & Superseded Sources**

Known superseded knowledge should be explicitly registered.

| Source / Knowledge | Status | Normal Retrieval |
| ----- | ----- | ----- |
| Second Brain Architecture v1.0 | `SUPERSEDED` | No |
| Second Brain Architecture v1.1 | `SUPERSEDED` | No |
| Strategic Website Consultancy positioning | `SUPERSEDED` | No |
| B2B-only ICP | `SUPERSEDED` | No |
| Rigid company-size qualification | `SUPERSEDED` | No |
| Done-With-You offer | `SUPERSEDED` | No |
| Previous acquisition strategies | `SUPERSEDED` | No |
| Old audit prompts using prior positioning | `SUPERSEDED` | No |
| Old pricing | `HISTORICAL` or `SUPERSEDED` | No |
| Historical proposals | `HISTORICAL` | No |

Do not delete these sources solely because they are old.

Preserve provenance while removing current decision authority.

## **19\. Reference & Originality Restrictions**

Every reference or external source should carry reuse metadata.

At minimum:

`REFERENCE_MATERIAL_INFORMS_WORK_IT_DOES_NOT_AUTHORIZE_COPYING`

`EXPERT_FRAMEWORK_DOES_NOT_AUTHORIZE_COPYING`

`REFERENCE_EXAMPLE_DOES_NOT_AUTHORIZE_REUSE`

`CLIENT_DELIVERABLE_DOES_NOT_BECOME_COPY_BANK`

`SOURCE_RESTRICTIONS_MUST_SURVIVE_SYNTHESIS`

## **20\. AI Pattern Detection**

Sources containing example external copy should indicate whether they have passed AI Pattern Detection.

Recommended metadata:

`Example_Copy = TRUE/FALSE`

`AI_Pattern_Detection_Status`

`Originality_Review_Status`

`Human_Approval_Status`

Do not promote AI-generated example copy into reference-quality material merely because it was included in an internal strategy document.

## **21\. Source-Level Ingestion Decision**

Every Source Register record should include:

`Ingestion_Approved = YES / NO / HOLD`

Use:

`YES` for approved ingestion.

`NO` for material intentionally excluded.

`HOLD` for drafts, unresolved conflicts, missing metadata, unclear ownership, or sources requiring cleanup.

This creates a clean operational gate between “we own this file” and “the AI may use this file.”

## **22\. Conflict State**

If two `CURRENT_SOURCE_OF_TRUTH` records govern the same issue differently:

`AGENCY_SOURCE_CONFLICT_REQUIRES_HUMAN_REVIEW`

The affected records should temporarily receive:

`Ingestion_Approved = HOLD`

for the conflicting authority until resolved.

Do not let engineering solve a business-policy conflict through retrieval ranking.

## **23\. Missing Authority**

If the inventory reveals a domain without an authoritative source:

Do not create one simply to complete the spreadsheet.

Record:

`AUTHORITY_GAP`

and assign an owner.

The resulting system behavior should remain:

`MISSING_AUTHORITY_REQUIRES_HUMAN_INPUT`

## **24\. Recommended Source Register Fields**

The actual register should contain these columns:

| Field | Purpose |
| ----- | ----- |
| Source\_ID | Stable identity |
| Title | Canonical source name |
| Version | Version |
| Status | Authority status |
| Knowledge\_Type | Nature of knowledge |
| Authority\_Domain | Permitted governance domain |
| Owner | Human owner |
| Effective\_Date | Activation |
| Supersedes | Previous source |
| Superseded\_By | Replacement |
| Retrieval\_Priority | Retrieval authority |
| Client\_Bound | Client restriction |
| Client\_ID | Client where applicable |
| External\_Source | Third-party indicator |
| Reuse\_Restrictions | Usage limitations |
| Human\_Approval\_Required | Approval requirement |
| Example\_Copy | Example content indicator |
| Source\_Location | Canonical location |
| Ingestion\_Approved | Yes / No / Hold |
| Validation\_Status | Cleanup state |
| Notes | Human context |

## **25\. Validation Status**

Use:

`NOT_REVIEWED`

`REVIEW_IN_PROGRESS`

`VALIDATED`

`NEEDS_UPDATE`

`CONFLICT`

`MISSING_METADATA`

`READY_FOR_INGESTION`

This gives us a practical migration queue.

## **26\. Initial Migration Priority**

I would classify in this order:

`GOVERNANCE`

↓

`STRATEGIC FOUNDATION`

↓

`BRAND + MESSAGING`

↓

`OFFERS + PRICING`

↓

`SALES + DIAGNOSTIC`

↓

`BLUEPRINT`

↓

`IMPLEMENTATION`

↓

`CARE`

↓

`ACQUISITION`

↓

`SUPPORTING METHODOLOGY`

↓

`GOLD STANDARD`

↓

`REFERENCE`

↓

`HISTORICAL`

↓

`CLIENT CORPUS`

Do not begin with the historical archive.

Get the current authority layer clean first.

## **27\. First Cleanup Queue**

Based on the corpus review already completed, the first human validation queue is:

| Priority | Item | Action |
| ----- | ----- | ----- |
| 1 | Strategic Foundation | Confirm canonical file |
| 2 | Brand Voice & Editorial Standards | Confirm current category language and current final file |
| 3 | Originality & Source Integrity | Confirm governing location/version |
| 4 | Pricing Source of Truth | Confirm current dataset |
| 5 | Offer Architecture | Confirm current file |
| 6 | Diagnostic SOP | Confirm final |
| 7 | Sales Intelligence Spec | Confirm final |
| 8 | Blueprint package | Confirm current versions |
| 9 | Foundation package | Confirm current versions |
| 10 | Templated WordPress package | Confirm current versions |
| 11 | CARE package | Confirm current versions |
| 12 | Acquisition Strategy v1.2 | Final human approval |
| 13 | Partner Distribution Strategy | Final human approval |
| 14 | Acquisition Intelligence Spec | Final human approval |
| 15 | Ashley corpus | Apply supporting-methodology metadata |
| 16 | Gold Standards | Select and annotate |
| 17 | External/reference corpus | Apply restrictions |
| 18 | Historical corpus | Apply supersession |
| 19 | Client corpus | Apply Client\_ID boundaries |

## **28\. Engineering Ingestion Gate**

A source may enter normal Second Brain retrieval only when:

`SOURCE_ID_ASSIGNED`

`STATUS_ASSIGNED`

`AUTHORITY_DOMAIN_ASSIGNED`

`OWNER_ASSIGNED`

`CLIENT_BOUNDARY_RESOLVED`

`REUSE_RESTRICTIONS_RESOLVED`

`VERSION_STATE_RESOLVED`

`CONFLICT_STATE_CLEAR`

`INGESTION_APPROVED = YES`

`VALIDATION_STATUS = READY_FOR_INGESTION`

Anything else remains outside governing retrieval.

## **29\. Source Register Completion Definition**

The Source Register is complete enough for Phase 1 engineering when every source required for Phase 1 has been inventoried and the governing corpus has no unresolved authority conflicts.

The entire historical library does not have to be perfectly cataloged before engineering begins.

That distinction matters.

We need a trustworthy Phase 1 corpus, not an endless document-cleanup project.

## **30\. Final Operational Rule**

From this point forward, a new document should not become Second Brain knowledge merely because someone saves it to Google Drive.

The lifecycle should be:

`CREATE / RECEIVE SOURCE`

↓

`CLASSIFY`

↓

`ASSIGN AUTHORITY`

↓

`ASSIGN BOUNDARY + RESTRICTIONS`

↓

`HUMAN VALIDATION WHERE REQUIRED`

↓

`REGISTER`

↓

`APPROVE FOR INGESTION`

↓

`INDEX`

↓

`MONITOR`

↓

`SUPERSEDE WHEN REPLACED`

