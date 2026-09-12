# Corpus Cleanup & Classification Plan

Version: 1.1 Classification: Knowledge Governance Implementation Status:
Final Working Plan Owner: SimpliCreative Primary Users: SimpliCreative
Leadership, AI Engineers, Knowledge Administrator

## 1. Purpose

Prepare the SimpliCreative knowledge library for safe ingestion into the
AI Second Brain. Every source must be classified before ingestion. The
objective is not to delete useful historical or reference material. The
objective is to make its authority explicit.

    KEEP THE KNOWLEDGE
    CONTROL THE AUTHORITY

## 2. Required Source Status

Every source receives exactly one primary status.

  ------------------------------------------------------------------------------
  **Status**                **Treatment**
  ------------------------- ----------------------------------------------------
  CURRENT_SOURCE_OF_TRUTH   Available for governing current decisions within its
                            authority domain

  SUPPORTING_METHODOLOGY    May govern methodology only within an approved
                            domain

  REFERENCE_ONLY            May inform reasoning but cannot establish policy

  EXTERNAL_REFERENCE        Third-party material with explicit source/reuse
                            restrictions

  HISTORICAL                Preserved for history and provenance, excluded from
                            normal retrieval

  SUPERSEDED                Replaced by a newer governing source and excluded
                            from current retrieval
  ------------------------------------------------------------------------------

## 3. Required Metadata

Every substantive source should receive:

  -----------------------------------------------------------------------------
  **Field**                 **Requirement**
  ------------------------- ---------------------------------------------------
  Source_ID                 Unique permanent identifier

  Title                     Canonical title

  Version                   Current version

  Status                    One approved status

  Knowledge_Type            Strategy, SOP, Spec, Methodology, Research,
                            Example, Client, etc.

  Authority_Domain          What the source may govern

  Owner                     Human owner

  Effective_Date            Date current version became active

  Supersedes                Previous source/version

  Superseded_By             Replacement where applicable

  Retrieval_Priority        Governing retrieval priority

  Client_Bound              Yes / No

  External_Source           Yes / No

  Reuse_Restrictions        Applicable restrictions

  Human_Approval_Required   Applicable approval

  Source_Location           Canonical storage location
  -----------------------------------------------------------------------------

File names such as `FINAL`, `NEW`, `UPDATED`, or `v2` do not establish
authority.

## 4. Current Governing Corpus

These belong in the active governing corpus once their final files are
confirmed.

  -----------------------------------------------------------------------
  **Source**                              **Classification**
  --------------------------------------- -------------------------------
  AI Second Brain Governance &            CURRENT_SOURCE_OF_TRUTH
  Intelligence Architecture v1.2          

  Second Brain Source Register            CURRENT_SOURCE_OF_TRUTH

  Strategic Foundation                    CURRENT_SOURCE_OF_TRUTH

  Brand Voice & Editorial Standards       CURRENT_SOURCE_OF_TRUTH

  Originality & Source Integrity Standard CURRENT_SOURCE_OF_TRUTH

  PRICE-001 Sales, Pricing & Commercial   CURRENT_SOURCE_OF_TRUTH
  Human SOP v1.1                          

  PRICE-002 Sales, Pricing & Commercial   CURRENT_SOURCE_OF_TRUTH
  Intelligence Workflow Spec v1.0         

  DIAG-001 Executive Marketing Diagnostic CURRENT_SOURCE_OF_TRUTH
  Human SOP v1.2                          

  DIAG-002 Executive Marketing Diagnostic CURRENT_SOURCE_OF_TRUTH
  Intelligence Workflow Spec v1.3         

  SimpliBlueprint Human SOP               CURRENT_SOURCE_OF_TRUTH

  Blueprint Intelligence Workflow Spec    CURRENT_SOURCE_OF_TRUTH

  Blueprint Strategy Deck Spec            CURRENT_SOURCE_OF_TRUTH

  SimpliFoundation Human SOP              CURRENT_SOURCE_OF_TRUTH

  SimpliFoundation Engineering Spec       CURRENT_SOURCE_OF_TRUTH

  Templated WordPress Human SOP           CURRENT_SOURCE_OF_TRUTH

  Templated WordPress AI Spec             CURRENT_SOURCE_OF_TRUTH

  SimpliCARE Human SOP                    CURRENT_SOURCE_OF_TRUTH

  CARE Intelligence & Reporting Spec      CURRENT_SOURCE_OF_TRUTH

  Inbound Client Acquisition Strategy     `CURRENT_SOURCE_OF_TRUTH` after
  v1.2                                    final approval

  Partner Distribution Strategy           `CURRENT_SOURCE_OF_TRUTH` after
                                          final approval

  Inbound Acquisition Intelligence        `CURRENT_SOURCE_OF_TRUTH` after
  Workflow Spec                           final approval
  -----------------------------------------------------------------------

The Engineer Handoff Manifest and Build Brief are implementation-control
documents rather than agency semantic knowledge, but should remain
active within the engineering governance collection.

Commercial datasets, offer records, Sales Intelligence objects,
readiness records, and pricing libraries may exist as structured system
objects without becoming separate governing documents.

    SYSTEM_OBJECT != GOVERNING_SOURCE
    DO_NOT_CREATE_PHANTOM_SOURCE_IDS_FOR_EMBEDDED_COMPONENTS

## 5. Known Superseded Sources

These should be excluded from normal current-state retrieval.

  -----------------------------------------------------------------------
  **Source / Knowledge**                         **Action**
  ---------------------------------------------- ------------------------
  Second Brain Master Architecture v1.0          SUPERSEDED

  Second Brain Master Architecture v1.1          SUPERSEDED

  "Strategic Website Consultancy" positioning    SUPERSEDED

  B2B-only ICP                                   SUPERSEDED

  Fixed company-size qualification rules         SUPERSEDED

  Done-With-You offer                            SUPERSEDED

  Old pricing schedules                          `SUPERSEDED` or
                                                 `HISTORICAL`

  Old acquisition strategies                     SUPERSEDED

  Old audit prompts using prior positioning      SUPERSEDED

  Historical proposals as pricing authority      Prohibited

  "Four Growth Drivers" as current proprietary   SUPERSEDED
  branding                                       
  -----------------------------------------------------------------------

These sources may remain available for provenance when appropriate. They
should not participate in ordinary current-state reasoning.

## 6. Historical Corpus

Historical does not mean useless. It means:

    USE FOR HISTORY
    DO NOT USE AS CURRENT AUTHORITY

Historical material may include old proposals, audits, strategy
documents, pricing, client work, campaign plans, previous offer
structures, prior messaging, old SOPs, and previous architecture
versions. Apply:

    Current_Decision_Authority = FALSE
    Normal_Retrieval = FALSE

## 7. Ashley Paid Ads Playbook

Ashley's materials should not be mixed directly into the agency strategy
collection. Core training should be classified:

    Status = SUPPORTING_METHODOLOGY
    Authority_Domain = PAID_MEDIA_EXECUTION
    Agency_Strategy_Authority = FALSE

The methodology may support paid-media readiness, platform selection,
campaign architecture, tracking, ad-copy execution and review, testing,
optimization, and scaling. It may not override SimpliCreative strategy,
ICP, positioning, POV, offers, Brand Voice, acquisition strategy,
evidence standards, or commercial strategy. Scenario files should be:

    REFERENCE_ONLY

The scenarios illustrate methodology. They do not establish policy.

## 8. Partner Source Material

The external partner-distribution workbook should be:

    EXTERNAL_REFERENCE

It may inform partner reasoning and implementation. The approved
SimpliCreative Partner Distribution Strategy governs. External branded
framework language should not become SimpliCreative proprietary language
through ingestion.

## 9. Competitor Research

Competitor research should be:

    REFERENCE_ONLY

It can inform market context, positioning analysis, offer comparison,
market observations, and research. It cannot establish SimpliCreative
strategy, pricing, offers, claims, or positioning. Competitor pricing is
market evidence. It is not pricing authority.

## 10. Gold-Standard Corpus

Approved Gold Standards should be:

    REFERENCE_ONLY

With:

    Knowledge_Type = REFERENCE_EXAMPLE
    Authority = NON_GOVERNING
    Copy_Authority = FALSE
    Reuse = PRINCIPLE_ONLY

Gold Standards teach quality, reasoning, depth, judgment, and
presentation. They do not create agency policy.

## 11. Client Corpus

Every client source should be assigned a Client_ID before ingestion.
Client knowledge should distinguish:

    CLIENT_FACT
    CLIENT_PREFERENCE
    CLIENT_DECISION
    CLIENT_OUTCOME
    AGENCY_OBSERVATION
    CANDIDATE_AGENCY_LEARNING
    APPROVED_AGENCY_LEARNING

Only approved agency learning may cross from client-specific memory into
durable Agency Semantic Memory. Client deliverables do not become agency
copy libraries.

## 12. Reference Example Treatment

Any source containing useful example language should carry explicit
restrictions. Use:

    EXAMPLE_COPY_DEMONSTRATES_PRINCIPLE_NOT_PREFERRED_WORDING
    REFERENCE_EXAMPLE_MUST_NOT_BECOME_REUSABLE_COPY_TEMPLATE

This includes ads, website copy, headlines, proposals, emails, campaign
examples, client deliverables, external examples, and AI-generated
samples.

## 13. Originality Treatment

External and reference sources should preserve their restrictions
through retrieval. Use:

    REFERENCE_MATERIAL_INFORMS_WORK_IT_DOES_NOT_AUTHORIZE_COPYING
    EXPERT_FRAMEWORK_DOES_NOT_AUTHORIZE_COPYING
    CLIENT_DELIVERABLE_DOES_NOT_BECOME_COPY_BANK
    SOURCE_RESTRICTIONS_MUST_SURVIVE_SYNTHESIS

## 14. Immediate Content Corrections

Before ingestion, active governing documents should be checked for known
stale language. Replace active instances of:

    Strategic Website Consultancy

with:

    Strategic Website Consulting Agency

Remove B2B-only ICP language where it appears to define the current ICP.
The current ICP is:

    LEAN MARKETING TEAMS IN SERVICE ORGANIZATIONS

Do not rewrite historical sources. Classify them instead.

## 15. Product Naming Check

One naming issue should be resolved before final ingestion. The formal
product name in the current offer architecture is:

    Lean Marketing Scorecard™

Recent acquisition architecture has used:

    Lean Marketing Assessment

Those should not silently become two different product names. I would
preserve:

    FORMAL PRODUCT = LEAN MARKETING SCORECARD™

and treat "Lean Marketing Assessment" as public-facing descriptive
language only where intentionally approved. The Source Register should
explicitly capture that distinction so AI does not rename the offer over
time.

## 16. Version Cleanup

For each source family:

    IDENTIFY ALL VERSIONS

↓

    SELECT CURRENT APPROVED VERSION

↓

    ASSIGN CURRENT_SOURCE_OF_TRUTH

↓

    LINK SUPERSEDES / SUPERSEDED_BY

↓

    MOVE OLD VERSIONS TO HISTORICAL OR SUPERSEDED

↓

    DISABLE NORMAL RETRIEVAL FOR OLD VERSIONS

Do not rely on deleting old files to solve versioning. Preserve
provenance.

## 17. Folder Migration

The cleaned corpus should move into the approved engineer-facing
structure:

    00_Start_Here
    01_Governance
    02_Company_Strategy
    03_Offers_and_Pricing
    04_Sales_and_Diagnostic
    05_Blueprint
    06_Implementation
    07_CARE
    08_Acquisition
    09_Supporting_Methodologies
    10_Client_Knowledge
    11_Gold_Standard
    12_Reference
    13_Historical
    14_Do_Not_Emulate
    15_Evaluations

Folder location helps humans navigate. Metadata still determines AI
authority.

## 18. Do Not Emulate Collection

I would explicitly create this collection rather than simply throwing
weak work into Historical. It should contain annotated examples of
failure patterns such as outdated positioning, unsupported certainty,
premature diagnosis, generic AI copy, poor evidence handling, copied
reference structures, bad strategic recommendations, weak proposals,
cross-client contamination, and misleading attribution. Each example
should explain why it failed. This gives the system negative calibration
without turning poor work into positive precedent.

## 19. Corpus Validation

After classification, run a validation pass for: Missing Source_ID.
Missing status. Unknown authority. Duplicate current sources.
Conflicting current sources. Missing supersession relationships. Missing
client identifiers. Unclassified external sources. Missing reuse
restrictions. Historical sources still enabled for normal retrieval.
Outdated positioning inside current sources. Outdated pricing inside
current sources. B2B-only ICP language presented as current. Retired
offers presented as current. Example material lacking non-governing
classification.

## 20. Corpus Completion Criteria

The corpus is ready for engineering ingestion when:

    EVERY SOURCE HAS A STATUS
    EVERY CURRENT SOURCE HAS AN AUTHORITY DOMAIN
    EVERY SUPERSEDED SOURCE HAS LOST CURRENT DECISION AUTHORITY
    EVERY CLIENT SOURCE HAS A CLIENT BOUNDARY
    EVERY EXTERNAL SOURCE HAS APPROPRIATE REUSE RESTRICTIONS
    EVERY GOVERNING SOURCE HAS A KNOWN CURRENT VERSION
    NO TWO CURRENT SOURCES SILENTLY GOVERN THE SAME ISSUE DIFFERENTLY
    CURRENT STRATEGY CONTAINS CURRENT POSITIONING + ICP
    CURRENT COMMERCIAL SOURCES CONTAIN CURRENT PRICING
    REFERENCE EXAMPLES ARE NON_GOVERNING
    SOURCE REGISTER MATCHES THE PHYSICAL CORPUS

## 21. What Happens Next

Once this cleanup is completed, engineering receives a corpus where the
system can distinguish:

    WHAT SIMPLICREATIVE BELIEVES

from

    HOW SIMPLICREATIVE WORKS

from

    WHAT A CLIENT BELIEVES

from

    WHAT AN EXTERNAL EXPERT TEACHES

from

    WHAT AN EXAMPLE DEMONSTRATES

from

    WHAT SIMPLICREATIVE USED TO BELIEVE

That distinction is what turns the document library into a governed
Second Brain.
