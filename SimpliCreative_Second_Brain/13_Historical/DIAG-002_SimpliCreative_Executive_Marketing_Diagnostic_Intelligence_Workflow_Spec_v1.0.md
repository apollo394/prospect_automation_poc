Yes. I would replace the previous long Diagnostic document with the copy below and treat it as the engineering companion to your Human SOP. I’ve kept the strategic and evidence logic from that document, while removing the human-call coaching that belongs in `DIAG-001` and adding the implementation details engineers need.

# **Executive Marketing Diagnostic Intelligence Workflow Spec**

Version: 1.0  
Classification: AI Intelligence Workflow Specification  
Status: Active  
Owner: SimpliCreative  
Source ID: DIAG-002  
Related Documents: Executive Marketing Diagnostic Human SOP, Sales Intelligence Workflow Spec, AI Second Brain Governance and Intelligence Architecture  
Primary Users: AI Engineers, System Architects, SimpliCreative Leadership

## **Purpose**

This specification defines how the SimpliCreative AI Intelligence Layer supports the Executive Marketing Diagnostic before, during, and after the human Diagnostic conversation.

It governs the system workflow, intelligence objects, evidence handling, automation, human approval gates, state transitions, system-of-record relationships, write-back behavior, and completion requirements.

The Executive Marketing Diagnostic itself is a complimentary 25 to 30-minute strategic conversation conducted by a human strategist.

Human behavior during that conversation is governed by the Executive Marketing Diagnostic Human SOP.

The broader persistent prospect-intelligence process is governed by the Sales Intelligence Workflow Spec.

This specification governs what the system does around those human activities.

The governing principles are:

```
DIAGNOSE_BEFORE_PRESCRIBE

AI_SUPPORTS_DIAGNOSIS
AI_DOES_NOT_OWN_DIAGNOSIS

EVIDENCE_DETERMINES_CERTAINTY

SUMMARIZATION_MUST_NOT_INCREASE_CERTAINTY

HUMAN_APPROVAL_REQUIRED_FOR_FINAL_DIAGNOSTIC_CONCLUSIONS

HUMAN_APPROVAL_REQUIRED_FOR_ROUTE_DECISION
```

## **1\. Workflow Boundary**

The Diagnostic Intelligence Workflow begins when an eligible prospect is approved for an Executive Marketing Diagnostic.

It ends when the post-call intelligence has been processed, material conclusions have been human validated, the Diagnostic Record has been approved, the route decision has been approved, and required downstream systems have been updated.

The governing workflow is:

```
Prospect Record
+
CRM / Relationship History
+
Lean Marketing Scorecard™
+
Approved Public Research
+
Website / FAST Evidence
        ↓
Sales Intelligence Worksheet
        ↓
Executive Diagnostic Brief
        ↓
Human Strategist Review
        ↓
Executive Marketing Diagnostic
        ↓
Transcript + Strategist Notes
        ↓
Post-Call Intelligence Processing
        ↓
Updated Sales Intelligence Worksheet
        ↓
Hypothesis Re-Evaluation
        ↓
Draft Diagnostic Record
        ↓
Human Validation
        ↓
Approved Diagnostic Record
        ↓
Human Route Decision
        ↓
CRM / Second Brain Update
        ↓
Approved Commercial or Nurture Route
```

## **2\. Relationship to the Sales Intelligence Workflow**

The Sales Intelligence Worksheet is the persistent prospect-intelligence record.

The Executive Diagnostic Brief is a derived pre-call view.

The Diagnostic Record is the approved record of what SimpliCreative concluded from the Diagnostic.

The governing relationship is:

```
SALES_INTELLIGENCE_WORKSHEET = PERSISTENT_INTELLIGENCE_RECORD

EXECUTIVE_DIAGNOSTIC_BRIEF = DERIVED_PRE_CALL_VIEW

DIAGNOSTIC_RECORD = HUMAN_VALIDATED_DIAGNOSTIC_CONCLUSION

ROUTE_DECISION = HUMAN_APPROVED_NEXT_STEP
```

The Diagnostic workflow must not create a separate competing prospect-intelligence record.

The Sales Intelligence Workflow Spec governs creation, research, evidence management, and persistence of broader sales intelligence.

This specification governs how that intelligence is assembled, used, updated, and validated around the Executive Marketing Diagnostic.

## **3\. Diagnostic Inputs**

The system should retrieve the following when available:

| Input | Purpose |
| ----- | ----- |
| Prospect Record | Company and contact context |
| Relationship / Sales History | Previous conversations and commitments |
| Lean Marketing Scorecard™ | Self-assessment and initial friction signals |
| Inquiry / Form Submission | Prospect-stated problem and desired outcome |
| CRM Context | Relevant history, source, lifecycle, and timing |
| Website | Current controlled digital experience |
| Automated FAST Pre-Scan | Preliminary website evidence |
| Approved Public Research | Relevant organizational context |
| Existing Meeting Notes | Prior evidence |
| Existing Prospect / Client Records | Prevent duplicate discovery |
| Previous Decisions | Preserve prior human decisions |
| Existing Evidence Records | Prevent repeated research |

Missing information must remain unknown.

```
MISSING_INFORMATION != PERMISSION_TO_INFER
```

## **4\. Diagnostic Intelligence Objects**

The implementation should support stable relationships between the following objects.

### **Prospect Record**

Minimum identifier:

```
Prospect_Record_ID
```

Represents the person and organization being evaluated.

### **Sales Intelligence Worksheet**

Minimum identifier:

```
Sales_Intelligence_Worksheet_ID
```

Represents the persistent prospect-intelligence record governed by the Sales Intelligence Workflow Spec.

### **Evidence Record**

Minimum identifier:

```
Evidence_Record_ID
```

Required fields should include:

| Field | Purpose |
| ----- | ----- |
| Evidence\_Record\_ID | Stable identifier |
| Prospect\_Record\_ID | Prospect relationship |
| Source\_ID | Source provenance |
| Source\_Type | CRM, Scorecard, website, transcript, public research, etc. |
| Evidence | What was observed or reported |
| Evidence\_Date | When evidence was captured |
| Validation\_Status | Current evidence status |
| Client\_Reported | Yes / No |
| Automated | Yes / No |
| Human\_Validated | Yes / No |
| Restrictions | Applicable use restrictions |

### **Diagnostic Finding Record**

Minimum identifier:

```
Finding_Record_ID
```

Required fields:

| Field | Required Record |
| ----- | ----- |
| Finding\_Record\_ID | Stable identifier |
| Prospect\_Record\_ID | Prospect relationship |
| Diagnostic\_ID | Diagnostic relationship |
| Finding | What was observed, reported, or inferred |
| Finding\_Type | Website, FAST, messaging, measurement, ecosystem, etc. |
| Validation\_Status | Current approved status |
| Validation\_Basis | Why the status is justified |
| Sources | Supporting source records |
| Evidence | Supporting Evidence Record IDs |
| Contradicting\_Evidence | Relevant contradiction |
| Confidence | AI or strategist confidence |
| Related\_Hypothesis | Relevant Hypothesis ID |
| Strategic\_Question | What remains to be learned |
| Requires\_Further\_Validation | Yes / No |
| Human\_Validated | Yes / No |

### **Hypothesis Record**

Minimum identifier:

```
Hypothesis_ID
```

Required fields:

| Field | Record |
| ----- | ----- |
| Hypothesis\_ID | Stable identifier |
| Prospect\_Record\_ID | Prospect relationship |
| Diagnostic\_ID | Diagnostic relationship |
| Hypothesis | Possible explanation |
| Related\_Symptoms | What prompted it |
| Supporting\_Evidence | Evidence Record IDs |
| Contradicting\_Evidence | Evidence Record IDs |
| Validation\_Status | Current status |
| Confidence | Current confidence |
| Missing\_Evidence | What remains unknown |
| Strategic\_Question | What deeper work must answer |
| Pre\_Call\_Status | Status before Diagnostic |
| Post\_Call\_Status | Status after Diagnostic |
| Human\_Validated | Yes / No |

A hypothesis must not become a root cause merely because it appears plausible.

### **Executive Diagnostic Brief**

Minimum identifier:

```
Executive_Diagnostic_Brief_ID
```

The Brief is a generated view of approved current intelligence.

It is not a new source of truth.

### **Diagnostic Record**

Minimum identifier:

```
Diagnostic_Record_ID
```

The Diagnostic Record preserves the human-validated conclusion from the Diagnostic.

### **Route Decision**

Minimum identifier:

```
Route_Decision_ID
```

The Route Decision records the human-approved next path.

### **Approval Record**

Minimum identifier:

```
Approval_ID
```

Approval records should preserve who approved the decision, what was approved, when it was approved, and which version of the underlying intelligence was reviewed.

## **5\. Validation & Evidence Standard**

All Diagnostic intelligence must comply with the Validation & Evidence Standard defined in the AI Second Brain Governance and Intelligence Architecture.

Approved validation statuses include:

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

Validation status must remain attached as information moves through:

```
Evidence Record
        ↓
Sales Intelligence Worksheet
        ↓
Executive Diagnostic Brief
        ↓
Human Diagnostic
        ↓
Post-Call Intelligence
        ↓
Diagnostic Record
        ↓
Route Decision
```

The system may recommend a validation status.

The system may not silently increase certainty during retrieval, summarization, synthesis, or generation.

```
AI_CONFIDENCE != EVIDENCE

AUTOMATED_SCAN != VALIDATED_CONCLUSION

SCORECARD_RESULT != ROOT_CAUSE

PUBLIC_SIGNAL != CLIENT_MOTIVATION

CORRELATION != CAUSATION

SUMMARIZATION_MUST_NOT_INCREASE_CERTAINTY
```

## **6\. Automated FAST Pre-Scan**

Before the Diagnostic, the system may collect preliminary evidence related to FAST.

| FAST Dimension | Preliminary Evidence |
| ----- | ----- |
| Flexible | CMS, publishing structure, landing-page patterns, observable technical dependencies |
| Accessible | Automated accessibility signals, responsive behavior, observable usability issues |
| Strategic | Messaging clarity, audience clarity, offer structure, buyer journey, conversion paths, credibility, discoverability |
| Trackable | Analytics-tag presence, tag-manager presence, forms, CRM or marketing-technology signals, observable conversion events |

These observations have explicit limitations.

CMS detection does not establish marketer autonomy.

Accessibility scans do not establish legal compliance or complete accessibility.

Messaging, search, and conversion observations do not establish causation.

Analytics-tag detection does not establish that tracking is configured correctly or useful for decision-making.

Technology detection does not establish effective integration.

```
AUTOMATED_FAST_SCAN = PRELIMINARY_EVIDENCE

AUTOMATED_FAST_SCAN != HUMAN_VALIDATED_DIAGNOSIS
```

## **7\. Executive Diagnostic Brief**

The system generates the Executive Diagnostic Brief from the current Sales Intelligence Worksheet and its associated evidence.

The Brief should prioritize relevance over completeness.

It should surface:

| Brief Component | Purpose |
| ----- | ----- |
| Prospect and Company Snapshot | Essential organizational and buyer context |
| Prospect-Stated Problem | What the prospect currently believes is wrong |
| Desired Outcome | What they want to improve |
| Why Now | Relevant timing or trigger |
| Relationship / CRM Context | Relevant history |
| Scorecard Signals | Highest-value findings |
| FAST Observations | Highest-value preliminary website findings |
| Business Context | Relevant organizational signals |
| Messaging / Buyer Journey | Material observations |
| Discoverability | Relevant visibility observations |
| Measurement / Technology | Relevant analytics, CRM, or technology signals |
| Ecosystem Connections | Potential relationships between components |
| Working Hypotheses | Three to five hypotheses worth investigating |
| Contradicting Evidence | Evidence challenging current hypotheses |
| Strategic Unknowns | Important unanswered questions |
| Diagnostic Questions | Five to seven highest-value questions |
| Fit Considerations | Preliminary fit and non-fit signals |
| Guardrails | Conclusions that must not be made |

The Brief must preserve the validation status and source relationship of every material finding.

```
BRIEF_MUST_NOT_RECREATE_RESEARCH_INDEPENDENTLY

BRIEF_MUST_PRESERVE_VALIDATION_STATUS

BRIEF_MUST_NOT_INCREASE_CERTAINTY

BRIEF_IS_NOT_SOURCE_OF_TRUTH
```

## **8\. Brief Regeneration Logic**

The Executive Diagnostic Brief should be regenerated when material underlying intelligence changes before the Diagnostic.

Material changes may include:

New Scorecard responses.

Material CRM updates.

New prospect communication.

New or corrected website evidence.

New approved public research.

A changed validation status.

A materially changed hypothesis.

New contradictory evidence.

A human correction.

The system should preserve the previous generated version for traceability rather than silently replacing historical state.

## **9\. Diagnostic Workflow State Model**

The implementation should support the following minimum workflow states:

```
PROSPECT_CREATED

DIAGNOSTIC_ELIGIBLE

PRE_CALL_INTELLIGENCE_PENDING

PRE_CALL_INTELLIGENCE_READY

EXECUTIVE_DIAGNOSTIC_BRIEF_GENERATED

PENDING_STRATEGIST_REVIEW

READY_FOR_DIAGNOSTIC

DIAGNOSTIC_COMPLETED

POST_CALL_PROCESSING

PENDING_STRATEGIST_VALIDATION

DIAGNOSTIC_RECORD_APPROVED

ROUTE_DECISION_APPROVED

COMPLETE
```

Additional technical states may be added by engineering when required, provided they do not alter the governing business logic.

## **10\. Workflow State Requirements**

### **DIAGNOSTIC\_ELIGIBLE**

Requires human or approved workflow confirmation that the prospect may proceed to the Executive Marketing Diagnostic.

### **PRE\_CALL\_INTELLIGENCE\_PENDING**

System begins retrieval and approved research.

### **PRE\_CALL\_INTELLIGENCE\_READY**

Available required intelligence has been assembled.

Missing information remains explicitly unknown.

### **EXECUTIVE\_DIAGNOSTIC\_BRIEF\_GENERATED**

Current intelligence has been transformed into a strategist-facing Brief.

### **PENDING\_STRATEGIST\_REVIEW**

The Brief is available for human review.

### **READY\_FOR\_DIAGNOSTIC**

Strategist has reviewed sufficient preparation to conduct the Diagnostic.

### **DIAGNOSTIC\_COMPLETED**

Human Diagnostic has occurred.

### **POST\_CALL\_PROCESSING**

System may process transcript, strategist notes, corrections, new evidence, and commitments.

### **PENDING\_STRATEGIST\_VALIDATION**

System has prepared updated intelligence and a draft Diagnostic Record.

Human review is required.

### **DIAGNOSTIC\_RECORD\_APPROVED**

Human strategist has validated the material Diagnostic conclusions.

### **ROUTE\_DECISION\_APPROVED**

Human has approved the appropriate next route.

### **COMPLETE**

Required records, approvals, and write-backs are complete.

## **11\. Post-Call Intelligence Processing**

After the Diagnostic, the system should use:

```
Transcript
+
Strategist Notes
+
Prospect Corrections
+
New Evidence
+
Pre-Call Intelligence
```

to update the Sales Intelligence Worksheet.

The system must preserve the difference between what was known before the call and what changed during the call.

It should be possible to reconstruct:

What was known before the call?

What did AI hypothesize before the call?

What did the prospect tell SimpliCreative?

What did the prospect correct?

What evidence emerged?

Which hypotheses were strengthened?

Which were weakened?

Which were contradicted?

Which were partially validated?

Which remain unresolved?

Why did the strategist ultimately recommend the next step?

The preferred flow is:

```
Human Diagnostic
        ↓
Transcript + Strategist Notes
        ↓
Updated Sales Intelligence Worksheet
        ↓
Hypothesis Re-Evaluation
        ↓
Draft Diagnostic Record
        ↓
Human Validation
        ↓
Approved Diagnostic Record
        ↓
Human Route Decision
```

## **12\. Hypothesis Re-Evaluation**

Pre-call hypotheses must not be carried forward automatically.

Each material hypothesis should be re-evaluated after the Diagnostic.

Approved post-call states may include:

```
STRENGTHENED

WEAKENED

CONTRADICTED

PARTIALLY_VALIDATED

VALIDATED

UNRESOLVED

RETIRED
```

The system should preserve the evidence supporting the change.

```
PRE_CALL_HYPOTHESIS != POST_CALL_CONCLUSION
```

## **13\. Required Diagnostic Record**

The Diagnostic Record should contain at minimum:

| Field | Required Record |
| ----- | ----- |
| Diagnostic\_Record\_ID | Stable identifier |
| Diagnostic\_ID | Diagnostic relationship |
| Prospect\_Record\_ID | Prospect relationship |
| Stated Problem | Prospect description |
| Desired Outcome | Desired outcome |
| Why Now | Trigger / timing |
| Business Consequence | Impact of current problem |
| Scorecard Findings | Relevant findings |
| FAST Findings | Relevant findings |
| Ecosystem Context | Relevant channels, systems, partners |
| Symptoms | Observed or reported symptoms |
| Emerging Pattern | Strategist interpretation |
| Hypotheses | Related Hypothesis IDs |
| Supporting Evidence | Evidence IDs |
| Contradicting Evidence | Evidence IDs |
| Strategic Unknowns | Unresolved questions |
| Implementation Risk | Low / Moderate / High \+ rationale |
| Constraints | Relevant constraints |
| Leadership Pressure | Where applicable |
| Decision Authority | Known / Unclear |
| Prospect Understanding | Confirmed / Unclear |
| Trust Signals | Evidence where available |
| Trust Concerns | Evidence where available |
| Blueprint Relevance | Strong / Moderate / Weak |
| Commercial Readiness | Ready / Developing / Not Ready |
| Fit Assessment | Strategist recommendation |
| Human-Approved Fit | Final decision |
| Recommended Path | Approved route |
| Blueprint Recommendation | Yes / No |
| Proposal Readiness | Send Now / Follow Up / Nurture / Not Applicable |
| Recommendation Rationale | Evidence-based rationale |
| Commitments | Prospect \+ SimpliCreative |
| Follow-Up | Action \+ owner \+ date |
| Lead Source | Approved source classification |
| Human Approval | Approval ID |

## **14\. Route Decision Logic**

The system may recommend a route.

The human strategist owns the final route decision.

Approved paths are:

```
SIMPLIBLUEPRINT

DIRECT_TO_FOUNDATION_SCOPING

TEMPLATED_WORDPRESS_WEBSITE

GUIDANCE_OR_NURTURE

REFERRAL_OR_CLOSE
```

The governing logic is:

```
Material Strategic Uncertainty
        ↓
SIMPLIBLUEPRINT

Strategy Sufficiently Established
+
Custom Implementation Required
        ↓
DIRECT_TO_FOUNDATION_SCOPING

Strategy Sufficiently Established
+
Implementation Fits Productized Scope
        ↓
TEMPLATED_WORDPRESS_WEBSITE

Potential Future Fit
+
Not Currently Ready
        ↓
GUIDANCE_OR_NURTURE

Not Appropriate for SimpliCreative
        ↓
REFERRAL_OR_CLOSE
```

```
BLUEPRINT_IS_NOT_A_MANDATORY_FOUNDATION_GATE

MATCH_SOLUTION_TO_PROBLEM_COMPLEXITY_NOT_COMPANY_SIZE

TEMPLATED_WEBSITE != DISCOUNTED_FOUNDATION
```

## **15\. Blueprint Readiness and Commercial Readiness**

Blueprint Fit and Proposal Readiness are separate decisions.

```
BLUEPRINT_FIT != PROPOSAL_READINESS
```

The system may assess:

Problem importance.

Interconnectedness.

Business consequence.

Supporting evidence.

Contradicting evidence.

Strategic unknowns.

Implementation risk.

Prospect understanding.

Decision authority.

Why now.

Blueprint relevance.

Blueprint standalone value.

Trust signals.

Trust concerns.

Commercial readiness.

Proposal readiness.

Trust must not be inferred solely from politeness, compliments, call duration, or a request for more information.

```
POLITENESS != TRUST

PROPOSAL_REQUEST != COMMERCIAL_READINESS

JOB_TITLE != PURCHASE_AUTHORITY
```

Where possible, preserve the prospect's actual language as evidence.

## **16\. Human Approval Gates**

Human approval is required before the system may treat the following as final:

Prospect fit.

Root cause.

Final Diagnostic conclusion.

Final route.

Blueprint recommendation.

Direct-to-Foundation recommendation.

Templated WordPress recommendation.

Proposal readiness.

Final scope.

Final pricing.

External strategic conclusions.

Human approval should be recorded as a structured Approval Record.

```
AI_RECOMMENDATION != HUMAN_DECISION

HUMAN_APPROVAL_REQUIRED_FOR_FINAL_DIAGNOSTIC_CONCLUSIONS

HUMAN_APPROVAL_REQUIRED_FOR_ROUTE_DECISION
```

## **17\. AI Permissions**

AI may:

Retrieve approved context.

Assemble prospect information.

Analyze Lean Marketing Scorecard™ responses.

Perform approved preliminary public research.

Collect approved automated website evidence.

Perform preliminary FAST evidence collection.

Identify potential contradictions.

Generate working hypotheses.

Prepare strategist questions.

Generate the Executive Diagnostic Brief.

Summarize transcripts.

Extract prospect language.

Identify new evidence.

Re-evaluate hypotheses for human review.

Update draft Sales Intelligence records.

Prepare draft Diagnostic Records.

Identify missing information.

Recommend readiness classifications.

Recommend routing for human review.

Check whether conclusions exceed available evidence.

Prepare approved-system write-backs for human-approved information.

## **18\. AI Restrictions**

AI may not:

Make the final fit decision.

Present hypotheses as facts.

Declare a root cause without sufficient validated evidence and human approval.

Declare a website redesign necessary based solely on preliminary evidence.

Certify accessibility compliance.

Promise SEO, AEO, GEO, revenue, conversion, pipeline, or other outcomes.

Make final scope commitments.

Make final pricing commitments.

Determine proposal readiness without human approval.

Prescribe paid-media strategy without the appropriate approved methodology and human review.

Automatically send strategic conclusions to a prospect.

Infer trust from politeness.

Infer purchase authority from job title.

Convert preliminary evidence into validated evidence without a supported basis.

Silently increase certainty.

## **19\. Proposed Systems of Record**

The following system ownership model should be validated during engineering discovery.

| Object | Proposed System of Record |
| ----- | ----- |
| Prospect / Contact | HubSpot |
| Company / Account | HubSpot |
| Scorecard Response | ScoreApp |
| Sales Intelligence Worksheet | Second Brain structured intelligence layer |
| Evidence Records | Second Brain structured intelligence layer |
| Finding Records | Second Brain structured intelligence layer |
| Hypothesis Records | Second Brain structured intelligence layer |
| Executive Diagnostic Brief | Second Brain generated artifact |
| Transcript | Fathom, referenced by Second Brain |
| Strategist Notes | Approved internal system / Second Brain reference |
| Diagnostic Record | Second Brain structured intelligence layer |
| Approval Record | Second Brain decision / approval layer |
| Fit / Route Decision | Second Brain with approved HubSpot write-back |
| Opportunity / Deal | HubSpot |
| Follow-Up Activity | HubSpot |
| Proposal | Approved commercial workflow |

```
PROPOSED_SYSTEM_OF_RECORD_REQUIRES_ENGINEERING_VALIDATION
```

Engineering may recommend implementation changes, but changes to business authority or knowledge governance require human approval.

## **20\. Source and Field Mapping**

Engineering should document the exact source and destination mapping for every automated field.

Minimum mapping should identify:

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

Field mapping should be maintained as implementation documentation rather than inferred from prompts.

## **21\. Write-Back Rules**

Only approved information should be written into durable systems as final intelligence.

Draft AI analysis should remain distinguishable from human-approved conclusions.

Examples:

HubSpot may receive approved fit, route, lifecycle, opportunity, follow-up, and attribution fields.

The Second Brain may retain evidence, hypotheses, findings, Diagnostic Records, approvals, and reasoning history.

ScoreApp remains the source for original Scorecard responses.

Fathom remains the source for the original transcript unless engineering establishes another approved system of record.

```
AI_DRAFT != APPROVED_RECORD

SOURCE_DATA_MUST_REMAIN_TRACEABLE_TO_ORIGINAL_SOURCE
```

## **22\. Failure Handling**

A failed integration must not silently produce a complete-looking Diagnostic Brief.

Potential failure conditions include:

HubSpot unavailable.

ScoreApp unavailable.

Website scan failure.

Public research unavailable.

Fathom transcript unavailable.

Missing strategist notes.

Invalid or incomplete source record.

Unknown prospect identity.

Duplicate prospect.

Source conflict.

Permission failure.

The system should distinguish:

```
DATA_NOT_AVAILABLE

INTEGRATION_FAILURE

SOURCE_CONFLICT

INSUFFICIENT_EVIDENCE

PERMISSION_DENIED

HUMAN_REVIEW_REQUIRED
```

If a material source is unavailable, the Brief or Diagnostic Record should visibly disclose that limitation.

```
MISSING_SOURCE_MUST_NOT_BE_HIDDEN_BY_GENERATED_SUMMARY
```

## **23\. Duplicate and Identity Handling**

The system should attempt to associate incoming information with an existing Prospect Record before creating a new record.

Potential matches may use approved identifiers such as email address, CRM ID, company relationship, ScoreApp identifier, or other approved unique fields.

AI may suggest a match.

AI should not merge ambiguous identities autonomously.

```
AMBIGUOUS_IDENTITY_REQUIRES_HUMAN_REVIEW

CLIENT_OR_PROSPECT_RECORDS_MUST_NOT_BE_MERGED_ON_AI_CONFIDENCE_ALONE
```

## **24\. Permissions**

Access should be controlled according to role, client/prospect relationship, data sensitivity, workflow stage, and action.

Engineering should support separate permissions for:

View.

Draft.

Edit.

Approve.

Override.

Publish externally.

Change route.

Change commercial fields.

Change source authority.

Promote intelligence to durable memory.

AI permissions do not replace human user permissions.

## **25\. Audit Trail and Decision Trace**

The system must preserve enough history to reconstruct material Diagnostic decisions.

For material decisions, preserve:

```
DECISION_ID
PROSPECT_RECORD_ID
DIAGNOSTIC_ID
DECISION
DECISION_OWNER
DATE
INPUTS
EVIDENCE
CONTRADICTING_EVIDENCE
HYPOTHESES
VALIDATION_STATUSES
AI_RECOMMENDATION
HUMAN_DECISION
RATIONALE
APPROVAL_ID
DOWNSTREAM_ACTION
```

Human overrides of AI recommendations should be preserved rather than replacing the original AI output.

The system should be able to answer:

What did the AI recommend?

What evidence did it use?

What was uncertain?

What did the strategist decide?

What changed?

Why?

## **26\. Diagnostic Completion Gate**

The Diagnostic must not transition to `COMPLETE` until:

| Completion Requirement | Required |
| ----- | ----- |
| Human Diagnostic occurred | Yes |
| Sales Intelligence Worksheet updated | Yes |
| Pre-call hypotheses re-evaluated | Yes |
| Material findings retain validation status | Yes |
| Prospect corrections preserved | Yes |
| Contradicting evidence preserved | Yes |
| Strategic unknowns remain visible | Yes |
| Diagnostic Record completed | Yes |
| Material conclusions human validated | Yes |
| Recommended route explicitly recorded | Yes |
| Recommendation rationale traceable to evidence | Yes |
| Blueprint Fit separated from Proposal Readiness | Yes |
| Route decision human approved | Yes |
| Required write-backs completed or failure recorded | Yes |

If required information remains unresolved, the system must not manufacture completion.

```
INCOMPLETE_REQUIRED_DATA != PERMISSION_TO_MANUFACTURE_COMPLETION
```

## **27\. Automation Triggers**

Engineering should configure approved workflow triggers around state transitions.

Examples include:

Diagnostic eligibility triggers pre-call intelligence assembly.

Completed intelligence assembly triggers Brief generation.

Material pre-call intelligence changes trigger Brief regeneration.

Completed Diagnostic plus available transcript triggers post-call processing.

Post-call processing triggers hypothesis re-evaluation and draft Diagnostic Record generation.

Human Diagnostic Record approval enables route-decision workflow.

Human route approval enables approved downstream CRM and commercial actions.

Automation should stop at every required human approval gate.

## **28\. Retention and Historical State**

Engineering should preserve sufficient historical state to reconstruct how the Diagnostic evolved.

Do not overwrite:

Pre-call hypotheses with post-call conclusions.

Previous validation statuses without history.

AI recommendations with human decisions.

Previous Brief versions without traceability.

Contradicting evidence with final conclusions.

Historical state should remain retrievable for authorized internal review while following approved privacy and retention policies.

Final retention periods should be determined during engineering discovery.

## **29\. Client and Prospect Data Protection**

Prospect-specific intelligence is prospect-bound.

It must not become reusable agency knowledge merely because the system has processed it.

```
PROSPECT_SPECIFIC_CONTENT_MUST_REMAIN_PROSPECT_BOUND

CLIENT_SPECIFIC_CONTENT_MUST_REMAIN_CLIENT_BOUND

PROSPECT_PATTERN != AGENCY_RULE

CLIENT_EDIT != AGENCY_BEST_PRACTICE
```

Cross-prospect pattern detection may surface candidate learning.

Candidate learning requires the approved knowledge-promotion process before becoming agency semantic knowledge.

## **30\. Evaluation Requirements**

This workflow should be included in the Engineering Acceptance Test Pack.

Minimum evaluation areas should include:

Correct source retrieval.

Current-source authority.

Validation-status preservation.

No silent certainty increase.

Scorecard result not treated as root cause.

Automated scan not treated as validated conclusion.

Hypothesis preservation and re-evaluation.

Contradicting evidence preservation.

Human approval of final conclusions.

Human approval of route.

Blueprint Fit separated from Proposal Readiness.

No autonomous pricing commitment.

No autonomous external strategic communication.

Prospect/client isolation.

Decision trace completeness.

Failure-state handling.

Brief regeneration after material intelligence change.

Required completion-gate enforcement.

Critical governance, evidence, client-isolation, and human-approval failures should block production deployment.

## **31\. Engineering Discovery Decisions**

The following remain implementation decisions rather than assumptions:

Primary AI interface.

Structured database technology.

Retrieval architecture.

Authentication model.

User roles and permissions.

HubSpot API scope.

ScoreApp integration method.

Fathom integration method.

Website evidence collection tooling.

Public research tooling.

Storage location for generated Briefs.

Storage location for strategist notes.

Approval-interface design.

Notification behavior.

Retention periods.

Logging infrastructure.

Monitoring and alerting.

Backup and recovery.

Model/provider selection.

Engineering should document these decisions without changing the governing strategic, evidence, commercial, or human-authority rules.

## **32\. Diagnostic Non-Negotiables**

```
DIAGNOSE_BEFORE_PRESCRIBE

SCORECARD_RESULT != ROOT_CAUSE

AUTOMATED_SCAN != VALIDATED_CONCLUSION

PUBLIC_SIGNAL != CLIENT_MOTIVATION

JOB_TITLE != PURCHASE_AUTHORITY

PROPOSAL_REQUEST != COMMERCIAL_READINESS

POLITENESS != TRUST

CORRELATION != CAUSATION

AI_CONFIDENCE != EVIDENCE

SUMMARIZATION_MUST_NOT_INCREASE_CERTAINTY

PRE_CALL_HYPOTHESIS != POST_CALL_CONCLUSION

BLUEPRINT_FIT != PROPOSAL_READINESS

BLUEPRINT_IS_NOT_A_MANDATORY_FOUNDATION_GATE

MATCH_SOLUTION_TO_PROBLEM_COMPLEXITY_NOT_COMPANY_SIZE

AI_RECOMMENDATION != HUMAN_DECISION

AI_DRAFT != APPROVED_RECORD

MISSING_INFORMATION != PERMISSION_TO_INFER

HUMAN_APPROVAL_REQUIRED_FOR_FINAL_DIAGNOSTIC_CONCLUSIONS

HUMAN_APPROVAL_REQUIRED_FOR_ROUTE_DECISION
```

## **33\. Final Workflow**

```
PROSPECT + CRM + SCORECARD + APPROVED RESEARCH + WEBSITE EVIDENCE
        ↓
SALES INTELLIGENCE WORKSHEET
        ↓
PRE-CALL EVIDENCE + HYPOTHESES
        ↓
EXECUTIVE DIAGNOSTIC BRIEF
        ↓
HUMAN STRATEGIST REVIEW
        ↓
EXECUTIVE MARKETING DIAGNOSTIC
        ↓
TRANSCRIPT + STRATEGIST NOTES
        ↓
POST-CALL INTELLIGENCE PROCESSING
        ↓
UPDATED SALES INTELLIGENCE WORKSHEET
        ↓
HYPOTHESIS RE-EVALUATION
        ↓
DRAFT DIAGNOSTIC RECORD
        ↓
HUMAN VALIDATION
        ↓
APPROVED DIAGNOSTIC RECORD
        ↓
HUMAN ROUTE DECISION
        ↓
APPROVED CRM / SECOND BRAIN WRITE-BACK
        ↓
COMMERCIAL ROUTE / NURTURE / REFERRAL / CLOSE
```

The system should help SimpliCreative enter the Diagnostic better prepared, preserve the evidence more accurately, recognize connections more effectively, and leave the conversation with stronger organizational memory.

It should not replace the strategist's judgment.

The final operating rule is:

```
AI ORGANIZES THE EVIDENCE, SURFACES THE PATTERN, AND PRESERVES THE REASONING.

THE HUMAN STRATEGIST DECIDES WHAT IT MEANS AND WHAT SIMPLICREATIVE SHOULD DO NEXT.
```

