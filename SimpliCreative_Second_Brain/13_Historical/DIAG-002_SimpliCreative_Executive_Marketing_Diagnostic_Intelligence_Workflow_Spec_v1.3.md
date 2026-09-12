SimpliCreative Executive Marketing Diagnostic Intelligence Workflow Spec

Version: 1.3

Classification: AI Intelligence Workflow Specification

Status: Active

Owner: SimpliCreative

Source ID: DIAG-002

Related Human SOP: DIAG-001\_SimpliCreative\_Executive\_Marketing\_Diagnostic\_Human\_SOP\_v1.2.docx

Related Documents: Sales Intelligence Workflow Spec; AI Second Brain Governance and Intelligence Architecture

Related Gold Standards: GS-DIAG-001 Executive Diagnostic Brief; GS-DIAG-002 Executive Diagnostic Record; GS-DIAG-003 Executive Diagnostic Follow-Up

Primary Users: AI Engineers, System Architects, SimpliCreative Leadership

# **Purpose**

This specification defines how the SimpliCreative AI Intelligence Layer supports the Executive Marketing Diagnostic before, during, and after the human Diagnostic conversation.

It governs the system workflow, intelligence objects, evidence handling, automation, human approval gates, state transitions, system-of-record relationships, write-back behavior, and completion requirements.

The Executive Marketing Diagnostic itself is a complimentary 25 to 30-minute strategic conversation conducted by a human strategist.

Human behavior during that conversation is governed by the Executive Marketing Diagnostic Human SOP.

The broader persistent prospect-intelligence process is governed by the Sales Intelligence Workflow Spec.

This specification governs what the system does around those human activities.

The governing principles are:

DIAGNOSE\_BEFORE\_PRESCRIBE

 AI\_SUPPORTS\_DIAGNOSIS  
 AI\_DOES\_NOT\_OWN\_DIAGNOSIS

 EVIDENCE\_DETERMINES\_CERTAINTY

 SUMMARIZATION\_MUST\_NOT\_INCREASE\_CERTAINTY

 HUMAN\_APPROVAL\_REQUIRED\_FOR\_FINAL\_DIAGNOSTIC\_CONCLUSIONS

 HUMAN\_APPROVAL\_REQUIRED\_FOR\_ROUTE\_DECISION

# **1\. Workflow Boundary**

The Diagnostic Intelligence Workflow begins when an eligible prospect is approved for an Executive Marketing Diagnostic.

It ends when the post-call intelligence has been processed, material conclusions have been human validated, the Diagnostic Record has been approved, the route decision has been approved, and required downstream systems have been updated.

The governing workflow is:

Prospect Record  
 \+  
 CRM / Relationship History  
 \+  
 Lean Marketing Scorecard™  
 \+  
 Approved Public Research  
 \+  
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
 Transcript \+ Strategist Notes  
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

# **2\. Relationship to the Sales Intelligence Workflow**

The Sales Intelligence Worksheet is the persistent prospect-intelligence record.

The Executive Diagnostic Brief is a derived pre-call view.

The Diagnostic Record is the approved record of what SimpliCreative concluded from the Diagnostic.

The governing relationship is:

SALES\_INTELLIGENCE\_WORKSHEET \= PERSISTENT\_INTELLIGENCE\_RECORD

 EXECUTIVE\_DIAGNOSTIC\_BRIEF \= DERIVED\_PRE\_CALL\_VIEW

 DIAGNOSTIC\_RECORD \= HUMAN\_VALIDATED\_DIAGNOSTIC\_CONCLUSION

 ROUTE\_DECISION \= HUMAN\_APPROVED\_NEXT\_STEP

The Diagnostic workflow must not create a separate competing prospect-intelligence record.

The Sales Intelligence Workflow Spec governs creation, research, evidence management, and persistence of broader sales intelligence.

This specification governs how that intelligence is assembled, used, updated, and validated around the Executive Marketing Diagnostic.

# **3\. Diagnostic Inputs**

The system should retrieve the following when available:

| Input | Purpose |
| :---- | :---- |
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

MISSING\_INFORMATION \!= PERMISSION\_TO\_INFER

# **4\. Diagnostic Intelligence Objects**

The implementation should support stable relationships between the following objects.

## **Prospect Record**

Minimum identifier:

Prospect\_Record\_ID

Represents the person and organization being evaluated.

## **Sales Intelligence Worksheet**

Minimum identifier:

Sales\_Intelligence\_Worksheet\_ID

Represents the persistent prospect-intelligence record governed by the Sales Intelligence Workflow Spec.

## **Evidence Record**

Minimum identifier:

Evidence\_Record\_ID

Required fields should include:

| Field | Purpose |
| :---- | :---- |
| Evidence\\\_Record\\\_ID | Stable identifier |
| Prospect\\\_Record\\\_ID | Prospect relationship |
| Source\\\_ID | Source provenance |
| Source\\\_Type | CRM, Scorecard, website, transcript, public research, etc. |
| Evidence | What was observed or reported |
| Evidence\\\_Date | When evidence was captured |
| Validation\\\_Status | Current evidence status |
| Client\\\_Reported | Yes / No |
| Automated | Yes / No |
| Human\\\_Validated | Yes / No |
| Restrictions | Applicable use restrictions |

 

## **Diagnostic Finding Record**

Minimum identifier:

Finding\_Record\_ID

Required fields:

| Field | Required Record |
| :---- | :---- |
| Finding\\\_Record\\\_ID | Stable identifier |
| Prospect\\\_Record\\\_ID | Prospect relationship |
| Diagnostic\\\_ID | Diagnostic relationship |
| Finding | What was observed, reported, or inferred |
| Finding\\\_Type | Website, FAST, messaging, measurement, ecosystem, etc. |
| Validation\\\_Status | Current approved status |
| Validation\\\_Basis | Why the status is justified |
| Sources | Supporting source records |
| Evidence | Supporting Evidence Record IDs |
| Contradicting\\\_Evidence | Relevant contradiction |
| Confidence | AI or strategist confidence |
| Related\\\_Hypothesis | Relevant Hypothesis ID |
| Strategic\\\_Question | What remains to be learned |
| Requires\\\_Further\\\_Validation | Yes / No |
| Human\\\_Validated | Yes / No |

 

## **Hypothesis Record**

Minimum identifier:

Hypothesis\_ID

Required fields:

| Field | Record |
| :---- | :---- |
| Hypothesis\\\_ID | Stable identifier |
| Prospect\\\_Record\\\_ID | Prospect relationship |
| Diagnostic\\\_ID | Diagnostic relationship |
| Hypothesis | Possible explanation |
| Related\\\_Symptoms | What prompted it |
| Supporting\\\_Evidence | Evidence Record IDs |
| Contradicting\\\_Evidence | Evidence Record IDs |
| Validation\\\_Status | Current status |
| Confidence | Current confidence |
| Missing\\\_Evidence | What remains unknown |
| Strategic\\\_Question | What deeper work must answer |
| Pre\\\_Call\\\_Status | Status before Diagnostic |
| Post\\\_Call\\\_Status | Status after Diagnostic |
| Human\\\_Validated | Yes / No |

 

A hypothesis must not become a root cause merely because it appears plausible.

## **Executive Diagnostic Brief**

Minimum identifier:

Executive\_Diagnostic\_Brief\_ID

The Brief is a generated view of approved current intelligence.

It is not a new source of truth.

## **Diagnostic Record**

Minimum identifier:

Diagnostic\_Record\_ID

The Diagnostic Record preserves the human-validated conclusion from the Diagnostic.

## **Route Decision**

Minimum identifier:

Route\_Decision\_ID

The Route Decision records the human-approved next path.

## **Approval Record**

Minimum identifier:

Approval\_ID

Approval records should preserve who approved the decision, what was approved, when it was approved, and which version of the underlying intelligence was reviewed.

# **5\. Validation & Evidence Standard**

All Diagnostic intelligence must comply with the Validation & Evidence Standard defined in the AI Second Brain Governance and Intelligence Architecture.

Approved validation statuses include:

OBSERVED

 CLIENT\_REPORTED

 HYPOTHESIS

 DIRECTIONAL

 VALIDATED

 PARTIALLY\_VALIDATED

 CONTRADICTED

 INSUFFICIENT\_EVIDENCE

 UNKNOWN

Validation status must remain attached as information moves through:

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

The system may recommend a validation status.

The system may not silently increase certainty during retrieval, summarization, synthesis, or generation.

AI\_CONFIDENCE \!= EVIDENCE

 AUTOMATED\_SCAN \!= VALIDATED\_CONCLUSION

 SCORECARD\_RESULT \!= ROOT\_CAUSE

 PUBLIC\_SIGNAL \!= CLIENT\_MOTIVATION

 CORRELATION \!= CAUSATION

 SUMMARIZATION\_MUST\_NOT\_INCREASE\_CERTAINTY

# **6\. Automated FAST Pre-Scan**

Before the Diagnostic, the system may collect preliminary evidence related to FAST.

| FAST Dimension | Preliminary Evidence |
| :---- | :---- |
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

AUTOMATED\_FAST\_SCAN \= PRELIMINARY\_EVIDENCE

 AUTOMATED\_FAST\_SCAN \!= HUMAN\_VALIDATED\_DIAGNOSIS

# **7\. Executive Diagnostic Brief**

The system generates the Executive Diagnostic Brief from the current Sales Intelligence Worksheet and its associated evidence.

The Brief should prioritize relevance over completeness.

It should surface:

| Brief Component | Purpose |
| :---- | :---- |
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

BRIEF\_MUST\_NOT\_RECREATE\_RESEARCH\_INDEPENDENTLY

 BRIEF\_MUST\_PRESERVE\_VALIDATION\_STATUS

 BRIEF\_MUST\_NOT\_INCREASE\_CERTAINTY

 BRIEF\_IS\_NOT\_SOURCE\_OF\_TRUTH

# **8\. Brief Regeneration Logic**

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

# **9\. Diagnostic Workflow State Model**

The implementation should support the following minimum workflow states:

PROSPECT\_CREATED

 DIAGNOSTIC\_ELIGIBLE

 PRE\_CALL\_INTELLIGENCE\_PENDING

 PRE\_CALL\_INTELLIGENCE\_READY

 EXECUTIVE\_DIAGNOSTIC\_BRIEF\_GENERATED

 PENDING\_STRATEGIST\_REVIEW

 READY\_FOR\_DIAGNOSTIC

 DIAGNOSTIC\_COMPLETED

 POST\_CALL\_PROCESSING

 PENDING\_STRATEGIST\_VALIDATION

 DIAGNOSTIC\_RECORD\_APPROVED

 ROUTE\_DECISION\_APPROVED

 COMPLETE

Additional technical states may be added by engineering when required, provided they do not alter the governing business logic.

# **10\. Workflow State Requirements**

## **DIAGNOSTIC\\\_ELIGIBLE**

Requires human or approved workflow confirmation that the prospect may proceed to the Executive Marketing Diagnostic.

## **PRE\\\_CALL\\\_INTELLIGENCE\\\_PENDING**

System begins retrieval and approved research.

## **PRE\\\_CALL\\\_INTELLIGENCE\\\_READY**

Available required intelligence has been assembled.

Missing information remains explicitly unknown.

## **EXECUTIVE\\\_DIAGNOSTIC\\\_BRIEF\\\_GENERATED**

Current intelligence has been transformed into a strategist-facing Brief.

## **PENDING\\\_STRATEGIST\\\_REVIEW**

The Brief is available for human review.

## **READY\\\_FOR\\\_DIAGNOSTIC**

Strategist has reviewed sufficient preparation to conduct the Diagnostic.

## **DIAGNOSTIC\\\_COMPLETED**

Human Diagnostic has occurred.

## **POST\\\_CALL\\\_PROCESSING**

System may process transcript, strategist notes, corrections, new evidence, and commitments.

## **PENDING\\\_STRATEGIST\\\_VALIDATION**

System has prepared updated intelligence and a draft Diagnostic Record.

Human review is required.

## **DIAGNOSTIC\\\_RECORD\\\_APPROVED**

Human strategist has validated the material Diagnostic conclusions.

## **ROUTE\\\_DECISION\\\_APPROVED**

Human has approved the appropriate next route.

## **COMPLETE**

Required records, approvals, and write-backs are complete.

# **11\. Post-Call Intelligence Processing**

After the Diagnostic, the system should use:

Transcript  
 \+  
 Strategist Notes  
 \+  
 Prospect Corrections  
 \+  
 New Evidence  
 \+  
 Pre-Call Intelligence

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

Human Diagnostic  
         ↓  
 Transcript \+ Strategist Notes  
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

# **12\. Hypothesis Re-Evaluation**

Pre-call hypotheses must not be carried forward automatically.

Each material hypothesis should be re-evaluated after the Diagnostic.

Approved post-call states may include:

STRENGTHENED

 WEAKENED

 CONTRADICTED

 PARTIALLY\_VALIDATED

 VALIDATED

 UNRESOLVED

 RETIRED

The system should preserve the evidence supporting the change.

PRE\_CALL\_HYPOTHESIS \!= POST\_CALL\_CONCLUSION

# **13\. Required Diagnostic Record**

The Diagnostic Record should contain at minimum:

| Field | Required Record |
| :---- | :---- |
| Diagnostic\\\_Record\\\_ID | Stable identifier |
| Diagnostic\\\_ID | Diagnostic relationship |
| Prospect\\\_Record\\\_ID | Prospect relationship |
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

 

# **14\. Route Decision Logic**

The system may recommend a route.

The human strategist owns the final route decision.

Approved paths are:

SIMPLIBLUEPRINT

 DIRECT\_TO\_FOUNDATION\_SCOPING

 TEMPLATED\_WORDPRESS\_WEBSITE

 GUIDANCE\_OR\_NURTURE

 REFERRAL\_OR\_CLOSE

The governing logic is:

Material Strategic Uncertainty  
         ↓  
 SIMPLIBLUEPRINT

 Strategy Sufficiently Established  
 \+  
 Custom Implementation Required  
         ↓  
 DIRECT\_TO\_FOUNDATION\_SCOPING

 Strategy Sufficiently Established  
 \+  
 Implementation Fits Productized Scope  
         ↓  
 TEMPLATED\_WORDPRESS\_WEBSITE

 Potential Future Fit  
 \+  
 Not Currently Ready  
         ↓  
 GUIDANCE\_OR\_NURTURE

 Not Appropriate for SimpliCreative  
         ↓  
 REFERRAL\_OR\_CLOSE

 BLUEPRINT\_IS\_NOT\_A\_MANDATORY\_FOUNDATION\_GATE

 MATCH\_SOLUTION\_TO\_PROBLEM\_COMPLEXITY\_NOT\_COMPANY\_SIZE

 TEMPLATED\_WEBSITE \!= DISCOUNTED\_FOUNDATION

# **15\. Blueprint Readiness and Commercial Readiness**

Blueprint Fit and Proposal Readiness are separate decisions.

BLUEPRINT\_FIT \!= PROPOSAL\_READINESS

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

POLITENESS \!= TRUST

 PROPOSAL\_REQUEST \!= COMMERCIAL\_READINESS

 JOB\_TITLE \!= PURCHASE\_AUTHORITY

Where possible, preserve the prospect's actual language as evidence.

# **16\. Human Approval Gates**

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

AI\_RECOMMENDATION \!= HUMAN\_DECISION

 HUMAN\_APPROVAL\_REQUIRED\_FOR\_FINAL\_DIAGNOSTIC\_CONCLUSIONS

 HUMAN\_APPROVAL\_REQUIRED\_FOR\_ROUTE\_DECISION

# **17\. AI Permissions**

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

# **18\. AI Restrictions**

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

# **19\. Proposed Systems of Record**

The following system ownership model should be validated during engineering discovery.

| Object | Proposed System of Record |
| :---- | :---- |
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

 

PROPOSED\_SYSTEM\_OF\_RECORD\_REQUIRES\_ENGINEERING\_VALIDATION

Engineering may recommend implementation changes, but changes to business authority or knowledge governance require human approval.

# **20\. Source and Field Mapping**

Engineering should document the exact source and destination mapping for every automated field.

Minimum mapping should identify:

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

Field mapping should be maintained as implementation documentation rather than inferred from prompts.

# **21\. Write-Back Rules**

Only approved information should be written into durable systems as final intelligence.

Draft AI analysis should remain distinguishable from human-approved conclusions.

Examples:

HubSpot may receive approved fit, route, lifecycle, opportunity, follow-up, and attribution fields.

The Second Brain may retain evidence, hypotheses, findings, Diagnostic Records, approvals, and reasoning history.

ScoreApp remains the source for original Scorecard responses.

Fathom remains the source for the original transcript unless engineering establishes another approved system of record.

AI\_DRAFT \!= APPROVED\_RECORD

 SOURCE\_DATA\_MUST\_REMAIN\_TRACEABLE\_TO\_ORIGINAL\_SOURCE

# **22\. Failure Handling**

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

DATA\_NOT\_AVAILABLE

 INTEGRATION\_FAILURE

 SOURCE\_CONFLICT

 INSUFFICIENT\_EVIDENCE

 PERMISSION\_DENIED

 HUMAN\_REVIEW\_REQUIRED

If a material source is unavailable, the Brief or Diagnostic Record should visibly disclose that limitation.

MISSING\_SOURCE\_MUST\_NOT\_BE\_HIDDEN\_BY\_GENERATED\_SUMMARY

# **23\. Duplicate and Identity Handling**

The system should attempt to associate incoming information with an existing Prospect Record before creating a new record.

Potential matches may use approved identifiers such as email address, CRM ID, company relationship, ScoreApp identifier, or other approved unique fields.

AI may suggest a match.

AI should not merge ambiguous identities autonomously.

AMBIGUOUS\_IDENTITY\_REQUIRES\_HUMAN\_REVIEW

 CLIENT\_OR\_PROSPECT\_RECORDS\_MUST\_NOT\_BE\_MERGED\_ON\_AI\_CONFIDENCE\_ALONE

# **24\. Permissions**

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

# **25\. Audit Trail and Decision Trace**

The system must preserve enough history to reconstruct material Diagnostic decisions.

For material decisions, preserve:

DECISION\_ID  
 PROSPECT\_RECORD\_ID  
 DIAGNOSTIC\_ID  
 DECISION  
 DECISION\_OWNER  
 DATE  
 INPUTS  
 EVIDENCE  
 CONTRADICTING\_EVIDENCE  
 HYPOTHESES  
 VALIDATION\_STATUSES  
 AI\_RECOMMENDATION  
 HUMAN\_DECISION  
 RATIONALE  
 APPROVAL\_ID  
 DOWNSTREAM\_ACTION

Human overrides of AI recommendations should be preserved rather than replacing the original AI output.

The system should be able to answer:

What did the AI recommend?

What evidence did it use?

What was uncertain?

What did the strategist decide?

What changed?

Why?

# **26\. Diagnostic Completion Gate**

The Diagnostic must not transition to COMPLETE until:

| Completion Requirement | Required |
| :---- | :---- |
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

INCOMPLETE\_REQUIRED\_DATA \!= PERMISSION\_TO\_MANUFACTURE\_COMPLETION

# **27\. Automation Triggers**

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

# **28\. Retention and Historical State**

Engineering should preserve sufficient historical state to reconstruct how the Diagnostic evolved.

Do not overwrite:

Pre-call hypotheses with post-call conclusions.

Previous validation statuses without history.

AI recommendations with human decisions.

Previous Brief versions without traceability.

Contradicting evidence with final conclusions.

Historical state should remain retrievable for authorized internal review while following approved privacy and retention policies.

Final retention periods should be determined during engineering discovery.

# **29\. Client and Prospect Data Protection**

Prospect-specific intelligence is prospect-bound.

It must not become reusable agency knowledge merely because the system has processed it.

PROSPECT\_SPECIFIC\_CONTENT\_MUST\_REMAIN\_PROSPECT\_BOUND

 CLIENT\_SPECIFIC\_CONTENT\_MUST\_REMAIN\_CLIENT\_BOUND

 PROSPECT\_PATTERN \!= AGENCY\_RULE

 CLIENT\_EDIT \!= AGENCY\_BEST\_PRACTICE

Cross-prospect pattern detection may surface candidate learning.

Candidate learning requires the approved knowledge-promotion process before becoming agency semantic knowledge.

# **30\. Evaluation Requirements**

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

# **31\. Engineering Discovery Decisions**

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

# **32\. Diagnostic Non-Negotiables**

DIAGNOSE\_BEFORE\_PRESCRIBE

 SCORECARD\_RESULT \!= ROOT\_CAUSE

 AUTOMATED\_SCAN \!= VALIDATED\_CONCLUSION

 PUBLIC\_SIGNAL \!= CLIENT\_MOTIVATION

 JOB\_TITLE \!= PURCHASE\_AUTHORITY

 PROPOSAL\_REQUEST \!= COMMERCIAL\_READINESS

 POLITENESS \!= TRUST

 CORRELATION \!= CAUSATION

 AI\_CONFIDENCE \!= EVIDENCE

 SUMMARIZATION\_MUST\_NOT\_INCREASE\_CERTAINTY

 PRE\_CALL\_HYPOTHESIS \!= POST\_CALL\_CONCLUSION

 BLUEPRINT\_FIT \!= PROPOSAL\_READINESS

 BLUEPRINT\_IS\_NOT\_A\_MANDATORY\_FOUNDATION\_GATE

 MATCH\_SOLUTION\_TO\_PROBLEM\_COMPLEXITY\_NOT\_COMPANY\_SIZE

 AI\_RECOMMENDATION \!= HUMAN\_DECISION

 AI\_DRAFT \!= APPROVED\_RECORD

 MISSING\_INFORMATION \!= PERMISSION\_TO\_INFER

 HUMAN\_APPROVAL\_REQUIRED\_FOR\_FINAL\_DIAGNOSTIC\_CONCLUSIONS

 HUMAN\_APPROVAL\_REQUIRED\_FOR\_ROUTE\_DECISION

# **33\. Final Workflow**

PROSPECT \+ CRM \+ SCORECARD \+ APPROVED RESEARCH \+ WEBSITE EVIDENCE  
         ↓  
 SALES INTELLIGENCE WORKSHEET  
         ↓  
 PRE-CALL EVIDENCE \+ HYPOTHESES  
         ↓  
 EXECUTIVE DIAGNOSTIC BRIEF  
         ↓  
 HUMAN STRATEGIST REVIEW  
         ↓  
 EXECUTIVE MARKETING DIAGNOSTIC  
         ↓  
 TRANSCRIPT \+ STRATEGIST NOTES  
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

The system should help SimpliCreative enter the Diagnostic better prepared, preserve the evidence more accurately, recognize connections more effectively, and leave the conversation with stronger organizational memory.

It should not replace the strategist's judgment.

The final operating rule is:

AI ORGANIZES THE EVIDENCE, SURFACES THE PATTERN, AND PRESERVES THE REASONING.

 THE HUMAN STRATEGIST DECIDES WHAT IT MEANS AND WHAT SIMPLICREATIVE SHOULD DO NEXT.

# **34\. Human SOP Authority Boundary**

DIAG-001 remains authoritative for how the human strategist prepares for, conducts, interprets, and closes the Executive Marketing Diagnostic.

This engineering specification may structure evidence, retrieval, workflow states, records, generated outputs, readiness states, automation, and write-back around that human process.

It must not replace or compress the human call-operating guidance in DIAG-001, including:

Fit and non-fit judgment.

Scorecard usage.

FAST discussion.

Ecosystem exploration.

Symptom-versus-cause discipline.

Question quality.

Pattern reflection.

Known-versus-unknown discipline.

Route explanation.

Pricing boundaries.

Closeout behavior.

Human judgment and false-certainty protections.

ENGINEERING\_WORKFLOW\_SUPPORTS\_HUMAN\_SOP  
 ENGINEERING\_WORKFLOW \!= HUMAN\_DIAGNOSTIC\_METHOD

# **35\. Hypothesis Reconciliation Record**

The original workflow requires pre-call hypotheses to be re-evaluated after the Diagnostic.

Engineering should preserve that change as a structured reconciliation record rather than silently replacing the original hypothesis.

Minimum object:

Hypothesis\_Reconciliation\_ID  
 Prospect\_Record\_ID  
 Sales\_Intelligence\_Worksheet\_ID  
 Diagnostic\_ID  
 Hypothesis\_ID  
 Pre\_Call\_Hypothesis  
 Pre\_Call\_Status  
 Pre\_Call\_Evidence  
 Pre\_Call\_Contradicting\_Evidence  
 Pre\_Call\_Confidence  
 New\_Call\_Evidence  
 New\_Contradicting\_Evidence  
 Post\_Call\_Status  
 Validation\_Basis  
 Remaining\_Unknown  
 Human\_Override  
 Human\_Override\_Rationale  
 Source\_References  
 Created\_Date  
 Last\_Updated  
 Version

Preferred reasoning trace:

HYPOTHESIS  
 → NEW EVIDENCE  
 → CONTRADICTING EVIDENCE  
 → RECONCILIATION  
 → UPDATED STATUS  
 → HUMAN REVIEW

The system must retain both pre-call and post-call states.

PRE\_CALL\_HYPOTHESIS \!= POST\_CALL\_CONCLUSION  
 HYPOTHESIS\_RECONCILIATION\_MUST\_PRESERVE\_HISTORY

# **36\. Readiness Decision Record**

Blueprint strategic fit, commercial readiness, and proposal readiness are separate decision dimensions.

Store them together in one governed internal decision record so downstream workflows do not collapse them into a single sales score.

Minimum object:

Readiness\_Decision\_ID  
 Prospect\_Record\_ID  
 Sales\_Intelligence\_Worksheet\_ID  
 Diagnostic\_ID  
 Blueprint\_Strategic\_Fit  
 Blueprint\_Fit\_Evidence  
 Blueprint\_Fit\_Unknowns  
 Commercial\_Readiness  
 Commercial\_Readiness\_Evidence  
 Commercial\_Unknowns  
 Proposal\_Readiness  
 Proposal\_Readiness\_Evidence  
 Proposal\_Blockers  
 Recommended\_Route  
 Next\_Allowed\_Action  
 AI\_Recommendation  
 Human\_Decision  
 Human\_Override  
 Human\_Rationale  
 Decision\_Date  
 Source\_References  
 Version

Rules:

BLUEPRINT\_FIT \!= COMMERCIAL\_READINESS  
 COMMERCIAL\_READINESS \!= PROPOSAL\_READINESS  
 PROPOSAL\_REQUEST \!= PROPOSAL\_READINESS  
 DIAGNOSTIC\_COMPLETE \!= PROPOSAL\_READY  
 READINESS\_ASSESSMENT \= INTERNAL\_DECISION\_OBJECT  
 HUMAN\_DECISION\_REQUIRED

AI may recommend readiness states from evidence.

The human strategist owns the final readiness and route decisions.

# **37\. Diagnostic Output Generation Checklist**

The standard Diagnostic artifact set is intentionally small.

| ID / Record | Trigger | Minimum Inputs | AI Role | Human Gate | Output Contract |
| :---- | :---- | :---- | :---- | :---- | :---- |
| Sales Intelligence Worksheet | Prospect enters the Diagnostic workflow | Prospect/company record, Scorecard where available, CRM history, approved research, evidence | AI-assisted persistent intelligence | Strategist validates material changes | INTERNAL SYSTEM OBJECT. Preserve source, evidence class, validation state, versions, pre-call and post-call context. |
| GS-DIAG-001 Executive Diagnostic Brief | Pre-call intelligence is sufficiently assembled | Sales Intelligence Worksheet, Scorecard, approved public research, FAST pre-scan, current hypotheses, contradictions, unknowns | AI-produced first draft | Strategist reviews before call | DOCX / INTERNAL. Derived view only. Must preserve evidence status and must not recommend Blueprint before the Diagnostic. |
| Transcript \+ Strategist Notes | Human Diagnostic occurs | Actual human conversation and notes | AI may transcribe, extract, and classify | Strategist validates material corrections and commitments | SOURCE EVIDENCE. Transcript remains linked to the Diagnostic Record and is not replaced by summary. |
| Hypothesis Reconciliation Record | Post-call evidence exists | Pre-call hypotheses, transcript, strategist notes, corrections, new evidence | AI-assisted | Strategist may correct or override | INTERNAL SYSTEM OBJECT. Preserve original and updated states. |
| GS-DIAG-002 Executive Diagnostic Record | Post-call intelligence is reconciled | Transcript, notes, updated Sales Intelligence, findings, hypotheses, contradictory evidence, unknowns | AI-produced first draft | Strategist approves material conclusions, fit, and route | DOCX / INTERNAL FORMAL RECORD. Must preserve uncertainty and validation status. |
| Readiness Decision Record | Route and commercial state require evaluation | Approved Diagnostic evidence, authority/timing/budget evidence where available, decision environment | AI-assisted, human-led | Strategist owns Blueprint fit, commercial readiness, proposal readiness, and route | INTERNAL SYSTEM OBJECT. Never collapse readiness into one score. |
| GS-DIAG-003 Executive Diagnostic Follow-Up | Approved Diagnostic Record \+ human route decision \+ next action exist | Approved Diagnostic Record, route, commitments, current approved offer context if referenced | AI-produced first draft | Human review before send | CLIENT COMMUNICATION. Must not introduce new strategy, root cause, price, or proposal readiness. |

 

Engineering rule:

AI\_DRAFT \!= APPROVED\_OUTPUT  
 OUTPUT\_REQUIRES\_VALID\_TRIGGER  
 MISSING\_UPSTREAM\_CONTEXT \!= PERMISSION\_TO\_INFER

For every generated artifact, preserve source references, version, draft/approval state, human approver, and prospect/client boundary.

# **38\. Direct-to-Foundation and Commercial Handoff Boundary**

Direct-to-Foundation does not mean the system scopes and prices Foundation during the complimentary Diagnostic.

If the human strategist determines that strategy is sufficiently established and custom implementation is appropriate, the next route is a separate Foundation Scoping process.

DIRECT\_TO\_FOUNDATION\_SCOPING \!= FOUNDATION\_PROPOSAL\_READY  
 DIRECT\_TO\_FOUNDATION \!= SCOPE\_AND\_PRICE\_FOUNDATION\_DURING\_DIAGNOSTIC

Foundation Scoping determines how an already-established strategy should be implemented, including implementation responsibilities, architecture, content, design, CMS, CRM and integrations, measurement, discoverability, accessibility, migration, functionality, stakeholders, partners, dependencies, complexity, delivery economics, and the human-approved fixed investment.

The Diagnostic may inform downstream commercial workflows.

The Diagnostic does not authorize them.

Proposal generation becomes available only when the relevant proposal-readiness state is human-approved and the required current commercial inputs exist.

DIAGNOSTIC\_INTELLIGENCE\_MAY\_INFORM\_SALES  
 DIAGNOSTIC\_INTELLIGENCE\_DOES\_NOT\_AUTHORIZE\_COMMERCIAL\_ACTION  
 BLUEPRINT\_RECOMMENDED \!= PROPOSAL\_READY  
 PROPOSAL\_READY\_REQUIRES\_HUMAN\_APPROVAL  
 AI\_MAY\_DRAFT\_PROPOSAL\_AFTER\_APPROVED\_TRIGGER  
 AI\_MAY\_NOT\_APPROVE\_PRICE\_SCOPE\_OR\_SEND

# **39\. Downstream Commercial State Boundary**

After the Diagnostic, proposal, agreement, opportunity, and Closed Won states belong to the Sales / Commercial workflow.

The Intelligence Layer may maintain structured records such as:

Proposal\_Record  
 Commitment\_Record  
 Opportunity\_Record  
 Agreement\_Status  
 Closed\_Won\_Event  
 Activation\_State

But these states require supporting evidence.

Preferred progression:

HUMAN-APPROVED ROUTE  
 → COMMERCIAL READINESS  
 → PROPOSAL READINESS  
 → PROPOSAL GENERATED  
 → HUMAN COMMERCIAL REVIEW  
 → PROPOSAL SENT  
 → PROSPECT RESPONSE  
 → CONTROLLED AGREEMENT / SOW  
 → SIGNED AGREEMENT \+ APPROVED ACTIVATION CONDITION  
 → CLOSED WON  
 → DELIVERY ACTIVATION

Rules:

PROPOSAL\_SENT \!= ACCEPTED  
 VERBAL\_INTEREST \!= CLOSED\_WON  
 POLITENESS \!= COMMITMENT  
 CRM\_STAGE\_CHANGE\_REQUIRES\_SUPPORTED\_EVENT  
 SIGNED\_AGREEMENT\_REQUIRES\_SOURCE\_EVIDENCE  
 AI\_MAY\_DOCUMENT\_COMMERCIAL\_STATE  
 AI\_MAY\_NOT\_DECLARE\_CLOSED\_WON\_WITHOUT\_APPROVED\_EVIDENCE

The Diagnostic does not own legal terms, pricing approval, signature authority, or delivery activation.

# **40\. Updated Completion and Workflow Extension**

The original Diagnostic completion gate remains authoritative.

In addition, the implementation should confirm that:

The Hypothesis Reconciliation Record exists for material pre-call hypotheses.

The Readiness Decision Record preserves Blueprint fit, commercial readiness, and proposal readiness separately.

The approved Diagnostic Record and route decision remain the source for the Diagnostic follow-up.

Commercial actions are not triggered merely because the Diagnostic is complete.

The extended boundary is:

PROSPECT \+ CRM \+ SCORECARD \+ APPROVED RESEARCH \+ WEBSITE EVIDENCE  
 ↓  
 SALES INTELLIGENCE WORKSHEET  
 ↓  
 PRE-CALL EVIDENCE \+ HYPOTHESES  
 ↓  
 EXECUTIVE DIAGNOSTIC BRIEF  
 ↓  
 HUMAN STRATEGIST REVIEW  
 ↓  
 EXECUTIVE MARKETING DIAGNOSTIC  
 ↓  
 TRANSCRIPT \+ STRATEGIST NOTES  
 ↓  
 POST-CALL INTELLIGENCE PROCESSING  
 ↓  
 UPDATED SALES INTELLIGENCE WORKSHEET  
 ↓  
 HYPOTHESIS RECONCILIATION  
 ↓  
 DRAFT DIAGNOSTIC RECORD  
 ↓  
 HUMAN VALIDATION  
 ↓  
 APPROVED DIAGNOSTIC RECORD  
 ↓  
 HUMAN ROUTE DECISION  
 ↓  
 READINESS DECISION RECORD  
 ↓  
 APPROVED CRM / SECOND BRAIN WRITE-BACK  
 ↓  
 EXECUTIVE DIAGNOSTIC FOLLOW-UP WHEN APPROPRIATE  
 ↓  
 DIAGNOSTIC COMPLETE  
 ↓  
 SALES / COMMERCIAL WORKFLOW WHEN APPROPRIATE

The final operating rule remains:

AI ORGANIZES THE EVIDENCE, SURFACES THE PATTERN, AND PRESERVES THE REASONING.

 THE HUMAN STRATEGIST DECIDES WHAT IT MEANS AND WHAT SIMPLICREATIVE SHOULD DO NEXT.

