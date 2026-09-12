# Source Register

Version: 1.3 Classification: Knowledge Governance Status: Active
Implementation Register Owner: SimpliCreative Primary Users:
SimpliCreative Leadership, Knowledge Administrator, AI Engineers
Purpose: Master inventory of sources approved for, excluded from, or
restricted within the SimpliCreative AI Second Brain

## 1. Governing Rule

Every source entering the Second Brain must have an explicit identity,
authority, status, ownership boundary, and retrieval treatment. The
system must never infer authority from a filename, folder, semantic
similarity, upload date, or frequency of retrieval.

    RELEVANCE DETERMINES WHAT TO RETRIEVE
    AUTHORITY DETERMINES WHAT MAY GOVERN

## 2. Source Statuses

  ----------------------------------------------------------------------------------
  **Status**                          **System Treatment**
  ----------------------------------- ----------------------------------------------
  CURRENT_SOURCE_OF_TRUTH             May govern within approved authority domain

  SUPPORTING_METHODOLOGY              May govern methodology within approved domain
                                      only

  REFERENCE_ONLY                      May inform reasoning but cannot establish
                                      policy

  EXTERNAL_REFERENCE                  Third-party material with explicit
                                      source/reuse restrictions

  HISTORICAL                          Available for provenance when requested,
                                      excluded from normal retrieval

  SUPERSEDED                          Replaced, excluded from current-state
                                      retrieval

  DRAFT_NOT_FOR_GOVERNING_RETRIEVAL   Work in progress, not permitted to govern
  ----------------------------------------------------------------------------------

## 3. Retrieval Priority

Use the following retrieval order:

    CURRENT GOVERNANCE

↓

    CURRENT STRATEGIC SOURCE OF TRUTH

↓

    CURRENT TASK-SPECIFIC SOP / SPEC

↓

    APPROVED SUPPORTING METHODOLOGY

↓

    AUTHORIZED CLIENT CONTEXT

↓

    REFERENCE / GOLD-STANDARD MATERIAL

↓

    HISTORICAL MATERIAL ONLY WHEN REQUIRED
    AUTHORITY_OUTRANKS_SEMANTIC_SIMILARITY

## 4. Governance & Engineering Control Sources

  ---------------------------------------------------------------------------------------------------------------
  **Source   **Source**                  **Version**   **Status**                **Authority      **Ingestion**
  ID**                                                                           Domain**         
  ---------- --------------------------- ------------- ------------------------- ---------------- ---------------
  GOV-001    AI Second Brain Governance  1.2           CURRENT_SOURCE_OF_TRUTH   AI Governance    Yes
             & Intelligence Architecture                                                          

  GOV-002    Second Brain Source         1.0           CURRENT_SOURCE_OF_TRUTH   Knowledge        Yes
             Register                                                            Authority        

  ENG-001    Engineering Build Brief &   1.0           CURRENT_SOURCE_OF_TRUTH   Engineering      Yes
             Systems Inventory                                                   Requirements     

  ENG-002    Engineer Handoff Manifest   1.0           CURRENT_SOURCE_OF_TRUTH   Engineering      Yes
                                                                                 Handoff          

  ENG-003    Corpus Cleanup &            1.0           REFERENCE_ONLY            Implementation   Yes
             Classification Plan                                                 Procedure        

  EVAL-001   Engineering Acceptance Test 1.0           CURRENT_SOURCE_OF_TRUTH   System           Yes
             Pack                                                                Evaluation       

  TEAM-001   Second Brain Team Guide     1.0           CURRENT_SOURCE_OF_TRUTH   Team Use         Yes
  ---------------------------------------------------------------------------------------------------------------

Engineering-control documents may govern implementation without becoming
general agency strategy.

## 5. Agency Strategy Sources

  -------------------------------------------------------------------------------------------
  **Source    **Source**            **Status**                **Authority     **Ingestion**
  ID**                                                        Domain**        
  ----------- --------------------- ------------------------- --------------- ---------------
  STRAT-001   Strategic Foundation  CURRENT_SOURCE_OF_TRUTH   Agency Strategy Yes

  BRAND-001   Brand Voice &         CURRENT_SOURCE_OF_TRUTH   Brand Voice /   Yes
              Editorial Standards                             Editorial       
  -------------------------------------------------------------------------------------------

STRAT-001 contains the canonical strategic values.

    PRIMARY_CATEGORY = STRATEGIC WEBSITE CONSULTING AGENCY
    PRIMARY_AUDIENCE = LEAN MARKETING TEAMS IN SERVICE ORGANIZATIONS
    CORE_BELIEF = MARKETING WORKS BETTER WHEN IT WORKS TOGETHER
    NORTH_STAR = MAKE MARKETING'S IMPACT VISIBLE
    CORE_POV = STOP SOLVING CONNECTED MARKETING PROBLEMS ONE TACTIC AT A TIME

## 6. Offer & Commercial Sources

  -----------------------------------------------------------------------------------------------------
  **Source    **Source**                        **Status**    **Authority Domain**      **Ingestion**
  ID**                                                                                  
  ----------- --------------------------------- ------------- ------------------------- ---------------
  PRICE-001   Sales, Pricing & Commercial Human 1.1           CURRENT_SOURCE_OF_TRUTH   Sales, Pricing
              SOP                                                                       & Commercial
                                                                                        Human Process

  PRICE-002   Sales, Pricing & Commercial       1.0           CURRENT_SOURCE_OF_TRUTH   Sales, Pricing
              Intelligence Workflow                                                     & Commercial
              Specification                                                             Intelligence
  -----------------------------------------------------------------------------------------------------

    HISTORICAL_PROPOSAL != CURRENT_PRICING_AUTHORITY
    COMPETITOR_PRICE != CURRENT_PRICING_AUTHORITY

## 7. Product Naming Authority

The Source Register should preserve the distinction between formal
product identity and approved descriptive acquisition language.

    FORMAL_PRODUCT_NAME = LEAN MARKETING SCORECARD™
    LEAN_MARKETING_ASSESSMENT = APPROVED_DESCRIPTIVE_ACQUISITION_LANGUAGE
    DESCRIPTIVE_LANGUAGE_DOES_NOT_RENAME_PRODUCT

This distinction should be propagated into acquisition and sales sources
during final corpus cleanup.

## 8. Sales & Diagnostic Sources

  ------------------------------------------------------------------------------------------------
  **Source   **Source**                **Status**       **Authority Domain**      **Ingestion**
  ID**                                                                            
  ---------- ------------------------- ---------------- ------------------------- ----------------
  DIAG-001   Executive Marketing       1.2              CURRENT_SOURCE_OF_TRUTH   Diagnostic Human
             Diagnostic Human SOP                                                 Process

  DIAG-002   Executive Marketing       1.3              CURRENT_SOURCE_OF_TRUTH   Diagnostic
             Diagnostic Intelligence                                              Intelligence +
             Workflow Spec                                                        Sales
                                                                                  Intelligence
  ------------------------------------------------------------------------------------------------

Assessment information is evidence. It is not diagnosis.

    SCORECARD_RESULT != ROOT_CAUSE

## 9. Blueprint Sources

| Source ID | Source | Version | Status | Authority Domain | Ingestion |
|---|---|---:|---|---|---|
| BLUE-001 | SimpliBlueprint Human SOP | 1.1 | CURRENT_SOURCE_OF_TRUTH | Blueprint Delivery | Yes |
| BLUE-002 | Blueprint Intelligence Workflow Spec | 1.4 | CURRENT_SOURCE_OF_TRUTH | Blueprint Intelligence | Yes |
| BLUE-003 | Blueprint Strategy Deck Generation Spec | 1.0 | CURRENT_SOURCE_OF_TRUTH | Blueprint Deliverable | Yes |

Blueprint governing sources define the approved delivery, intelligence, evidence, reconciliation, and strategy-deck behavior. Gold Standards illustrate approved outputs and must not become policy.

### 9A. Blueprint Gold Standards and Demonstration Fixtures

| Artifact ID | Artifact | Classification | Authority | Ingestion Treatment |
|---|---|---|---|---|
| GS-BLUE-001 | SimpliBlueprint Report | REFERENCE_EXAMPLE | NON_GOVERNING | Gold Standard |
| GS-BLUE-002 | Blueprint Strategy Deck | REFERENCE_EXAMPLE | NON_GOVERNING | Gold Standard |
| GS-BLUE-003 | Personalized Blueprint Questionnaire | REFERENCE_EXAMPLE | NON_GOVERNING | Gold Standard |
| GS-BLUE-004 | Blueprint Research & Evidence Synthesis | REFERENCE_EXAMPLE | NON_GOVERNING | Gold Standard |
| GS-BLUE-005 | Strategy Session Record & Final Reconciliation | REFERENCE_EXAMPLE | NON_GOVERNING | Gold Standard |
| GS-BLUE-006 | Strategy-to-Execution Implementation Handoff | REFERENCE_EXAMPLE | NON_GOVERNING | Gold Standard |
| DEMO-BLUE-QCTX-001 | Blueprint Questionnaire Input Context | CLIENT_BOUND_DEMO_FIXTURE | NON_GOVERNING | Evaluation / calibration |

The Blueprint output chain is:

`CUMULATIVE_CONTEXT → PERSONALIZED_QUESTIONNAIRE → VALIDATION → RESEARCH_AND_EVIDENCE_SYNTHESIS → BLUEPRINT_REPORT → STRATEGY_DECK → STRATEGY_SESSION → FINAL_RECONCILIATION → BLUEPRINT_APPROVAL → IMPLEMENTATION_HANDOFF`

Preserve:

`RAW_RESEARCH_DOES_NOT_GENERATE_FINAL_BLUEPRINT`

`VALIDATION_STATUS_MUST_SURVIVE_SYNTHESIS`

`CLIENT_FEEDBACK != AUTOMATIC_STRATEGIC_TRUTH`

`BLUEPRINT_APPROVED != FOUNDATION_SCOPE_APPROVED`

### 9B. Blueprint Naming / Supersession Register

The following prior identifiers are superseded by the normalized BLUE artifact sequence:

| Prior Identifier | Current Identifier | Treatment |
|---|---|---|
| GS-BLUE-003 Blueprint Research & Evidence Synthesis | GS-BLUE-004 | SUPERSEDED_IDENTIFIER |
| GS-BLUE-004 Strategy Session Record & Final Reconciliation | GS-BLUE-005 | SUPERSEDED_IDENTIFIER |
| GS-BLUE-005 Strategy-to-Execution Implementation Handoff | GS-BLUE-006 | SUPERSEDED_IDENTIFIER |
| DEMO-BLUE-003 Blueprint Questionnaire Input Context | DEMO-BLUE-QCTX-001 | SUPERSEDED_IDENTIFIER |

The content is not superseded solely because the identifier changed. Current retrieval should resolve to the normalized identifier and avoid duplicate ingestion under both names.

## 10. Implementation Sources

  ----------------------------------------------------------------------------------------------
  **Source    **Source**           **Status**                **Authority         **Ingestion**
  ID**                                                       Domain**            
  ----------- -------------------- ------------------------- ------------------- ---------------
  FOUND-001   SimpliFoundation     CURRENT_SOURCE_OF_TRUTH   Foundation Delivery Yes
              Human SOP                                                          

  FOUND-002   SimpliFoundation     CURRENT_SOURCE_OF_TRUTH   Foundation          Yes
              Engineering Spec                               Intelligence        

  TPL-001     Templated WordPress  CURRENT_SOURCE_OF_TRUTH   Productized Website Yes
              Human SOP                                      Delivery            

  TPL-002     Templated WordPress  CURRENT_SOURCE_OF_TRUTH   Productized Website Yes
              AI Spec                                        Intelligence        
  ----------------------------------------------------------------------------------------------

Preserve:

    TEMPLATED_WEBSITE != DISCOUNTED_FOUNDATION

## 11. CARE Sources

| Source ID | Source | Version | Status | Authority Domain | Ingestion |
|---|---|---:|---|---|---|
| CARE-001 | SimpliCARE Human SOP | 1.1 | CURRENT_SOURCE_OF_TRUTH | CARE Delivery | Yes |
| CARE-002 | CARE Intelligence & Reporting Engineering Spec | 1.1 | CURRENT_SOURCE_OF_TRUTH | CARE Intelligence | Yes |

CARE should preserve metric definitions, comparability, evidence, decision trace, responsibility boundaries, activation state, learning state, and transition state.

The CARE governing pair is complete for current delivery and intelligence governance. Do not create additional CARE governing sources solely to represent output examples or lifecycle records.

### 11A. CARE Gold Standards and Demonstration Fixtures

These artifacts calibrate output or test workflow behavior. They do not establish policy.

| Artifact ID | Artifact | Classification | Authority | Ingestion Treatment |
|---|---|---|---|---|
| GS-CARE-001 | Standardized Client-Facing Marketing Performance Intelligence Report | REFERENCE_EXAMPLE | NON_GOVERNING | Gold Standard |
| GS-CARE-002 | Executive Impact Deck, extracted board summary | REFERENCE_EXAMPLE | NON_GOVERNING | Gold Standard |
| GS-CARE-003 | Discoverability & Content Opportunity Report | REFERENCE_EXAMPLE | NON_GOVERNING | Gold Standard |
| DEMO-CARE-ACT-001 | CARE Activation Record | ENGINEERING_FIXTURE | NON_GOVERNING | Evaluation / calibration |
| DEMO-CARE-004 | Outcome Record & Learning Fixture | ENGINEERING_FIXTURE | NON_GOVERNING | Evaluation / calibration |
| DEMO-CARE-EXIT-001 | CARE Transition & Exit Record | ENGINEERING_FIXTURE | NON_GOVERNING | Evaluation / calibration |

Commercial proposal authority remains outside the CARE governing pair.

GS-SALES-006 Personalized SimpliCARE Proposal is a Sales / Commercial Gold Standard governed by PRICE-001 and PRICE-002. It must not become CARE policy or pricing authority.

Use:

`CARE_GOLD_STANDARD != CARE_GOVERNING_SOURCE`

`CARE_FIXTURE != CLIENT_DELIVERABLE`

`GS_SALES_006 != CURRENT_PRICING_AUTHORITY`

### 11B. CARE Supersession / Cleanup Register

The following known CARE materials must not participate in ordinary current-state retrieval:

| Material | Treatment | Current Replacement |
|---|---|---|
| CARE-001 SimpliCARE Human SOP v1.0 | SUPERSEDED | CARE-001 v1.1 |
| CARE-002 CARE Intelligence & Reporting Engineering Spec v1.0 / 0.1 working versions | SUPERSEDED | CARE-002 v1.1 |
| Earlier Hively-specific GS-CARE-001 draft / DOCX | SUPERSEDED_REFERENCE | GS-CARE-001 standardized PPT |
| Duplicate copies of GS-CARE-001 standardized PPT | DEDUPLICATE | One canonical GS-CARE-001 file |
| Historical CARE / website-retainer proposals | HISTORICAL / REFERENCE_ONLY | GS-SALES-006 for proposal calibration; PRICE pair for commercial authority |

Historical client reports may remain client-bound evidence. They do not become reusable Gold Standards unless explicitly selected, classified, and approved.

## 12. Acquisition Sources

  ---------------------------------------------------------------------------------------------------------------
  **Source ID** **Source**           **Status**                          **Authority Domain**     **Ingestion**
  ------------- -------------------- ----------------------------------- ------------------------ ---------------
  ACQ-001       Inbound Client       DRAFT_NOT_FOR_GOVERNING_RETRIEVAL   Acquisition Strategy     Hold
                Acquisition Strategy                                                              

  PARTNER-001   Partner Distribution DRAFT_NOT_FOR_GOVERNING_RETRIEVAL   Partner Distribution     Hold
                Strategy                                                                          

  ACQ-002       Inbound Acquisition  DRAFT_NOT_FOR_GOVERNING_RETRIEVAL   Acquisition              Hold
                Intelligence                                             Intelligence, including  
                Workflow Spec                                            Ad Copy Review &         
                                                                         Feedback Engine          
  ---------------------------------------------------------------------------------------------------------------

Once human-approved, change the applicable source to:

    CURRENT_SOURCE_OF_TRUTH

and record the approval date as `Effective_Date`.

## 13. Paid-Media Supporting Methodology

Ashley's Paid Ads Playbook should be isolated from agency strategy.

  -----------------------------------------------------------------------------------
  **Source Family**         **Status**               **Authority      **Ingestion**
                                                     Domain**         
  ------------------------- ------------------------ ---------------- ---------------
  Current Coaching          SUPPORTING_METHODOLOGY   Paid Media       Yes
  Protocols                                                           

  Refined Modules 01-06     SUPPORTING_METHODOLOGY   Paid Media       Yes

  Core Intelligence Modules SUPPORTING_METHODOLOGY   Paid Media       Yes
  07-11                                                               

  M12-M13 Advanced Systems  SUPPORTING_METHODOLOGY   Paid Media       Yes

  Applied Decision Rules    SUPPORTING_METHODOLOGY   Paid Media       Yes

  Cognitive Core            SUPPORTING_METHODOLOGY   Paid Media       Yes
                                                     Reasoning        

  Paid-Media Scenario Files REFERENCE_ONLY           Scenario         Restricted
                                                     Illustration     

  Expert Knowledge Base     REFERENCE_ONLY           Expert Reference Restricted
  -----------------------------------------------------------------------------------

Authority rule:

    SIMPLICREATIVE STRATEGY

↓

    SIMPLICREATIVE MESSAGING + BRAND VOICE

↓

    BUYER STAGE + MESSAGE TERRITORY + OFFER

↓

    ASHLEY PAID-MEDIA METHODOLOGY

↓

    PLATFORM EXECUTION

## 14. External Partner Methodology

  ---------------------------------------------------------------------------------------------
  **Source ID**     **Source**                   **Status**           **Authority   **Reuse**
                                                                      Domain**      
  ----------------- ---------------------------- -------------------- ------------- -----------
  EXT-PARTNER-001   Matt Essam / Chris Do Agency EXTERNAL_REFERENCE   Partner       Principle
                    Lead Flow System                                  Research      only

  ---------------------------------------------------------------------------------------------

The approved SimpliCreative Partner Distribution Strategy governs. The
external source may inform reasoning but does not authorize reproduction
of branded frameworks or proprietary wording.

## 15. Competitor Research

  -----------------------------------------------------------------------------------------
  **Source ID**  **Source**                 **Status**       **Authority    **Ingestion**
                                                             Domain**       
  -------------- -------------------------- ---------------- -------------- ---------------
  REF-COMP-001   SimpliCreative B2B         REFERENCE_ONLY   Market Context Yes, restricted
                 Competitor Research                                        

  -----------------------------------------------------------------------------------------

The B2B framing in this research is contextual and historical. It does
not redefine the current ICP. Pricing contained within competitor
research is market evidence only.

## 16. Gold-Standard Sources

Every approved Gold Standard receives an individual Source_ID. Required
metadata:

    Status = REFERENCE_ONLY
    Knowledge_Type = REFERENCE_EXAMPLE
    Authority = NON_GOVERNING
    Copy_Authority = FALSE
    Reuse = PRINCIPLE_ONLY
    Context_Boundary = REQUIRED
    Human_Approval = REQUIRED

Do not ingest an example into the Gold-Standard collection until someone
can explain what the system is intended to learn from it.

## 17. Client Sources

Client material must not share a single unrestricted semantic
collection. Each source requires:

    Client_ID
    Client_Name
    Access_Group
    Knowledge_Type
    Sensitivity
    Source_Date
    Effective_Date
    Reuse_Restrictions
    Source_Location

Client knowledge types should include:

    CLIENT_FACT
    CLIENT_PREFERENCE
    CLIENT_DECISION
    CLIENT_OUTCOME
    AGENCY_OBSERVATION
    CANDIDATE_AGENCY_LEARNING
    APPROVED_AGENCY_LEARNING

Only `APPROVED_AGENCY_LEARNING` may be promoted into Agency Semantic
Memory.

## 18. Historical & Superseded Sources

Known superseded knowledge should be explicitly registered.

  -----------------------------------------------------------------------
  **Source / Knowledge**           **Status**             **Normal
                                                          Retrieval**
  -------------------------------- ---------------------- ---------------
  Second Brain Architecture v1.0   SUPERSEDED             No

  Second Brain Architecture v1.1   SUPERSEDED             No

  Strategic Website Consultancy    SUPERSEDED             No
  positioning                                             

  B2B-only ICP                     SUPERSEDED             No

  Rigid company-size qualification SUPERSEDED             No

  Done-With-You offer              SUPERSEDED             No

  Previous acquisition strategies  SUPERSEDED             No

  Old audit prompts using prior    SUPERSEDED             No
  positioning                                             

  Old pricing                      `HISTORICAL` or        No
                                   `SUPERSEDED`           

  Historical proposals             HISTORICAL             No
  -----------------------------------------------------------------------

Do not delete these sources solely because they are old. Preserve
provenance while removing current decision authority.

## 19. Reference & Originality Restrictions

Every reference or external source should carry reuse metadata. At
minimum:

    REFERENCE_MATERIAL_INFORMS_WORK_IT_DOES_NOT_AUTHORIZE_COPYING
    EXPERT_FRAMEWORK_DOES_NOT_AUTHORIZE_COPYING
    REFERENCE_EXAMPLE_DOES_NOT_AUTHORIZE_REUSE
    CLIENT_DELIVERABLE_DOES_NOT_BECOME_COPY_BANK
    SOURCE_RESTRICTIONS_MUST_SURVIVE_SYNTHESIS

## 20. AI Pattern Detection

Sources containing example external copy should indicate whether they
have passed AI Pattern Detection. Recommended metadata:

    Example_Copy = TRUE/FALSE
    AI_Pattern_Detection_Status
    Originality_Review_Status
    Human_Approval_Status

Do not promote AI-generated example copy into reference-quality material
merely because it was included in an internal strategy document.

## 21. Source-Level Ingestion Decision

Every Source Register record should include:

    Ingestion_Approved = YES / NO / HOLD

Use: `YES` for approved ingestion. `NO` for material intentionally
excluded. `HOLD` for drafts, unresolved conflicts, missing metadata,
unclear ownership, or sources requiring cleanup. This creates a clean
operational gate between "we own this file" and "the AI may use this
file."

## 22. Conflict State

If two `CURRENT_SOURCE_OF_TRUTH` records govern the same issue
differently:

    AGENCY_SOURCE_CONFLICT_REQUIRES_HUMAN_REVIEW

The affected records should temporarily receive:

    Ingestion_Approved = HOLD

for the conflicting authority until resolved. Do not let engineering
solve a business-policy conflict through retrieval ranking.

## 23. Missing Authority

If the inventory reveals a domain without an authoritative source: Do
not create one simply to complete the spreadsheet. Record:

    AUTHORITY_GAP

and assign an owner. The resulting system behavior should remain:

    MISSING_AUTHORITY_REQUIRES_HUMAN_INPUT

## 24. Recommended Source Register Fields

The actual register should contain these columns:

  **Field**                 **Purpose**
  ------------------------- -----------------------------
  Source_ID                 Stable identity
  Title                     Canonical source name
  Version                   Version
  Status                    Authority status
  Knowledge_Type            Nature of knowledge
  Authority_Domain          Permitted governance domain
  Owner                     Human owner
  Effective_Date            Activation
  Supersedes                Previous source
  Superseded_By             Replacement
  Retrieval_Priority        Retrieval authority
  Client_Bound              Client restriction
  Client_ID                 Client where applicable
  External_Source           Third-party indicator
  Reuse_Restrictions        Usage limitations
  Human_Approval_Required   Approval requirement
  Example_Copy              Example content indicator
  Source_Location           Canonical location
  Ingestion_Approved        Yes / No / Hold
  Validation_Status         Cleanup state
  Notes                     Human context

## 25. Validation Status

Use:

    NOT_REVIEWED
    REVIEW_IN_PROGRESS
    VALIDATED
    NEEDS_UPDATE
    CONFLICT
    MISSING_METADATA
    READY_FOR_INGESTION

This gives us a practical migration queue.

## 26. Initial Migration Priority

I would classify in this order:

    GOVERNANCE

↓

    STRATEGIC FOUNDATION

↓

    BRAND + MESSAGING

↓

    OFFERS + PRICING

↓

    SALES + DIAGNOSTIC

↓

    BLUEPRINT

↓

    IMPLEMENTATION

↓

    CARE

↓

    ACQUISITION

↓

    SUPPORTING METHODOLOGY

↓

    GOLD STANDARD

↓

    REFERENCE

↓

    HISTORICAL

↓

    CLIENT CORPUS

Do not begin with the historical archive. Get the current authority
layer clean first.

## 27. First Cleanup Queue

Based on the corpus review already completed, the first human validation
queue is:

  ------------------------------------------------------------------------------
  **Priority**   **Item**                **Action**
  -------------- ----------------------- ---------------------------------------
  1              Strategic Foundation    Confirm canonical file

  2              Brand Voice & Editorial Confirm current category language and
                 Standards               current final file

  3              Originality & Source    Confirm governing location/version
                 Integrity               

  4              PRICE-001 + PRICE-002   Confirm current Sales, Pricing &
                                         Commercial pair

  5              Commercial embedded     Confirm offer/pricing objects are
                 authorities             governed by PRICE pair

  6              DIAG-001 + DIAG-002     Confirm current Diagnostic pair

  7              Sales Intelligence      Confirm governed inside DIAG-002 and
                                         commercial pair

  8              Blueprint package       Confirm current versions

  9              Foundation package      Confirm current versions

  10             Templated WordPress     Confirm current versions
                 package                 

  11             CARE package            CONFIRMED: CARE-001 v1.1 + CARE-002 v1.1; Gold Standards and fixtures classified

  12             Acquisition Strategy    Final human approval
                 v1.2                    

  13             Partner Distribution    Final human approval
                 Strategy                

  14             Acquisition             Final human approval
                 Intelligence Spec       

  15             Ashley corpus           Apply supporting-methodology metadata

  16             Gold Standards          Select and annotate

  17             External/reference      Apply restrictions
                 corpus                  

  18             Historical corpus       Apply supersession

  19             Client corpus           Apply Client_ID boundaries
  ------------------------------------------------------------------------------

## 28. Engineering Ingestion Gate

A source may enter normal Second Brain retrieval only when:

    SOURCE_ID_ASSIGNED
    STATUS_ASSIGNED
    AUTHORITY_DOMAIN_ASSIGNED
    OWNER_ASSIGNED
    CLIENT_BOUNDARY_RESOLVED
    REUSE_RESTRICTIONS_RESOLVED
    VERSION_STATE_RESOLVED
    CONFLICT_STATE_CLEAR
    INGESTION_APPROVED = YES
    VALIDATION_STATUS = READY_FOR_INGESTION

Anything else remains outside governing retrieval.

## 29. Source Register Completion Definition

The Source Register is complete enough for Phase 1 engineering when
every source required for Phase 1 has been inventoried and the governing
corpus has no unresolved authority conflicts. The entire historical
library does not have to be perfectly cataloged before engineering
begins. That distinction matters. We need a trustworthy Phase 1 corpus,
not an endless document-cleanup project.

## 30. Final Operational Rule

From this point forward, a new document should not become Second Brain
knowledge merely because someone saves it to Google Drive. The lifecycle
should be:

    CREATE / RECEIVE SOURCE

↓

    CLASSIFY

↓

    ASSIGN AUTHORITY

↓

    ASSIGN BOUNDARY + RESTRICTIONS

↓

    HUMAN VALIDATION WHERE REQUIRED

↓

    REGISTER

↓

    APPROVE FOR INGESTION

↓

    INDEX

↓

    MONITOR

↓

    SUPERSEDE WHEN REPLACED
