SimpliCreative Sales, Pricing & Commercial Intelligence Workflow Specification

Version: 1.0

Classification: AI Intelligence Layer & Engineering Specification

Status: Active

Owner: SimpliCreative

Source ID: PRICE-002

Related Human SOP: PRICE-001\_SimpliCreative\_Sales\_Pricing\_and\_Commercial\_Human\_SOP\_v1.1.docx

Related Diagnostic Spec: DIAG-002\_SimpliCreative\_Executive\_Marketing\_Diagnostic\_Intelligence\_Workflow\_Spec\_v1.3.docx

Related Gold Standards: GS-SALES-001 Personalized SimpliBlueprint Proposal; GS-SALES-002 Personalized SimpliFoundation Proposal; GS-SALES-003 Foundation Scoping Record; GS-SALES-004 Proposal Send & Next-Step Email

# **Purpose**

This specification defines how the SimpliCreative Intelligence Layer supports offer routing, commercial readiness, proposal readiness, Foundation scoping, pricing, profitability validation, proposal generation, proposal follow-up, agreement/SOW population, opportunity progression, scope changes, Closed Won evidence, delivery activation, and commercial learning.

PRICE-001 governs the human business rules.

This specification governs the system objects, calculations, workflow states, source relationships, automation triggers, write-back rules, failure states, auditability, and human approval gates that implement those rules.

The governing principles are:

CURRENT\_PRICING\_OVERRIDES\_HISTORICAL\_PRICING  
 MATCH\_SOLUTION\_TO\_PROBLEM\_COMPLEXITY  
 AI\_RECOMMENDATION \!= HUMAN\_DECISION  
 AI\_DRAFT \!= APPROVED\_COMMERCIAL\_OUTPUT  
 MISSING\_INFORMATION \!= PERMISSION\_TO\_INFER  
 PROPOSAL\_SENT \!= ACCEPTED  
 VERBAL\_INTEREST \!= CLOSED\_WON

# **1\. Workflow Boundary**

The commercial workflow begins when an opportunity has an approved route and enough evidence to evaluate the next commercial action.

It ends when the opportunity is closed, referred, nurtured, declined, or activated into delivery.

Preferred flow:

APPROVED ROUTE  
 ↓  
 COMMERCIAL READINESS  
 ↓  
 PROPOSAL READINESS  
 ↓  
 SCOPING WHEN REQUIRED  
 ↓  
 CURRENT PRICING RETRIEVAL  
 ↓  
 PRICING CALCULATION / VALIDATION  
 ↓  
 HUMAN COMMERCIAL APPROVAL  
 ↓  
 PROPOSAL GENERATION  
 ↓  
 HUMAN PROPOSAL APPROVAL  
 ↓  
 PROPOSAL SENT  
 ↓  
 PROSPECT RESPONSE / FOLLOW-UP  
 ↓  
 CONTROLLED AGREEMENT / SOW  
 ↓  
 SIGNATURE \+ ACTIVATION EVIDENCE  
 ↓  
 CLOSED WON  
 ↓  
 DELIVERY ACTIVATION  
 ↓  
 ACTUAL ECONOMICS \+ COMMERCIAL LEARNING

# **2\. Relationship to Diagnostic**

DIAG-001 and DIAG-002 govern the Executive Marketing Diagnostic.

This specification consumes the approved route and readiness state produced downstream of the Diagnostic.

It must not reinterpret a Diagnostic merely to justify a commercial action.

DIAGNOSTIC\_INTELLIGENCE\_MAY\_INFORM\_SALES  
 DIAGNOSTIC\_INTELLIGENCE\_DOES\_NOT\_AUTHORIZE\_COMMERCIAL\_ACTION

Commercial actions require their own human-approved state.

# **3\. Knowledge Retrieval Priority**

Before any commercial recommendation or output, retrieve the current approved versions of:

| Knowledge | Purpose |
| :---- | :---- |
| PRICE-001 Human SOP | Governing business and pricing rules |
| Pricing Source of Truth | Current offer prices and approved commercial rules |
| Current Offer Records | Current scope, inclusions, exclusions, eligibility |
| Strategic Foundation | Agency fit and positioning context |
| DIAG-001 / DIAG-002 where relevant | Approved route and readiness context |
| Approved Blueprint or strategic source | Required for Blueprint-informed Foundation scoping |
| Foundation Scoping Record | Required for custom Foundation pricing |
| Brand Voice & Editorial Standards | Proposal and email language |
| Current controlled agreement/SOW template | Contract population only |
| Current margin / delivery economics inputs | Internal profitability validation |

 

Historical proposals, historical price lists, and client-specific discounts may provide context.

They do not override current pricing authority.

# **4\. Pricing Source of Truth Object**

Minimum object:

Pricing\_Record\_ID  
 Offer\_or\_Deliverable\_ID  
 Name  
 Current\_Price  
 Minimum\_Price  
 Pricing\_Method  
 Unit  
 Included\_Scope  
 Exclusions  
 Approval\_Requirement  
 Effective\_Date  
 Expiration\_Date  
 Version  
 Status  
 Payment\_Terms\_ID  
 Approved\_By  
 Source\_Reference

Allowed status should include:

ACTIVE  
 DRAFT  
 SUPERSEDED  
 HISTORICAL  
 EXPIRED

Only ACTIVE pricing may be treated as current authority.

If pricing is missing, conflicting, expired, or outside approved rules:

PRICING\_REVIEW\_REQUIRED

# **5\. Offer Record**

Minimum object:

Offer\_ID  
 Offer\_Name  
 Commercial\_Role  
 Pricing\_Method  
 Current\_Pricing\_Record\_ID  
 Eligibility\_Rules  
 Included\_Scope  
 Exclusions  
 Required\_Inputs  
 Required\_Human\_Approvals  
 Downstream\_Workflow  
 Status  
 Effective\_Date  
 Version

The system must not infer eligibility from price.

# **6\. Commercial Readiness Object**

Minimum object:

Commercial\_Readiness\_ID  
 Prospect\_ID  
 Company\_ID  
 Opportunity\_ID  
 Approved\_Route  
 Problem\_Understanding  
 Offer\_Understanding  
 Decision\_Authority  
 Decision\_Stakeholders  
 Timing  
 Budget\_Status  
 Economic\_Constraints  
 Trust\_Concerns  
 Material\_Objections  
 Missing\_Information  
 Commercial\_Readiness  
 AI\_Recommendation  
 Human\_Decision  
 Human\_Rationale  
 Decision\_Date  
 Source\_References  
 Version

Allowed readiness:

READY  
 DEVELOPING  
 NOT\_READY

# **7\. Proposal Readiness Object**

Minimum object:

Proposal\_Readiness\_ID  
 Opportunity\_ID  
 Approved\_Route  
 Commercial\_Readiness\_ID  
 Offer\_ID  
 Scope\_Status  
 Pricing\_Status  
 Scoping\_Required  
 Scoping\_Record\_ID  
 Required\_Approvals\_Status  
 Material\_Open\_Items  
 Proposal\_Readiness  
 AI\_Recommendation  
 Human\_Decision  
 Human\_Rationale  
 Decision\_Date  
 Source\_References  
 Version

Allowed status:

SEND\_NOW  
 FOLLOW\_UP  
 NURTURE  
 NOT\_APPLICABLE

Rules:

PROPOSAL\_REQUEST \!= PROPOSAL\_READINESS  
 BLUEPRINT\_RECOMMENDED \!= PROPOSAL\_READY  
 DIRECT\_TO\_FOUNDATION \!= FOUNDATION\_PROPOSAL\_READY

# **8\. Foundation Scoping Record**

For custom SimpliFoundation opportunities, support a governed Foundation Scoping Record.

Minimum object should include:

Foundation\_Scoping\_ID  
 Prospect\_or\_Client\_ID  
 Opportunity\_ID  
 Entry\_Path  
 Approved\_Strategic\_Source\_ID  
 Business\_Objective  
 Website\_Objective  
 Primary\_Buyer  
 Approved\_Implementation\_Variant  
 Implementation\_Workstreams  
 Page\_and\_Template\_Scope  
 Content\_Responsibility  
 Messaging\_Responsibility  
 Design\_Scope  
 CMS\_and\_Development\_Scope  
 Forms\_and\_CRM\_Scope  
 Analytics\_and\_Measurement\_Scope  
 SEO\_AEO\_GEO\_Scope  
 Schema\_Scope  
 Accessibility\_Scope  
 Migration\_Scope  
 Integration\_Scope  
 Performance\_Scope  
 Stakeholders  
 Partners  
 Dependencies  
 Risks  
 Timeline\_Constraints  
 Required\_Deliverables  
 Foundation\_Complexity\_Assessment\_ID  
 Reference\_Value\_Assessment\_ID  
 Delivery\_Economics\_ID  
 Margin\_Validation\_ID  
 Recommended\_Fixed\_Investment  
 Human\_Approval\_ID  
 Source\_References  
 Version  
 Status

The current Gold Standard is GS-SALES-003.

Foundation Scoping is internal.

It must not be treated as the client proposal.

# **9\. Foundation Complexity Assessment**

Support the 15 PRICE-001 dimensions:

Storytelling\_and\_Messaging  
 Information\_Architecture  
 Content  
 Design\_System  
 CMS  
 Conversion  
 CRM\_MarTech  
 Analytics  
 SEO\_AEO\_GEO  
 Accessibility  
 Integrations  
 Stakeholders  
 Brands\_Markets  
 Timeline  
 Partner\_Coordination

Each dimension receives an approved internal score from 1 to 3\.

Store:

Complexity\_Assessment\_ID  
 Dimension  
 Score  
 Scoring\_Basis  
 Evidence  
 Human\_Reviewed

Aggregate:

15–21 \= Core  
 22–30 \= Standard  
 31–38 \= Growth  
 39–45 \= Complex

Current internal reference ranges remain governed by PRICE-001 and the active Pricing Source of Truth.

The system must not expose complexity score or internal band in the client proposal.

# **10\. Deliverable Reference-Value Records**

The Deliverable Pricing Library should be maintained as structured internal records, even when the human SOP also documents current reference values.

Minimum object:

Deliverable\_Pricing\_ID  
 Deliverable\_ID  
 Name  
 Reference\_Value  
 Unit  
 Minimum\_Value  
 Included\_Assumptions  
 Exclusions  
 Effective\_Date  
 Version  
 Status  
 Source\_Reference

The system may use reference values to validate Foundation responsibility and scope.

It must not mechanically sum them to create the client price.

REFERENCE\_VALUE \!= CLIENT\_PRICE

# **11\. Delivery Economics Object**

Minimum object:

Delivery\_Economics\_ID  
 Opportunity\_ID  
 Role\_Estimates  
 Loaded\_Labor\_Cost  
 Contractor\_Cost  
 Software\_Project\_Cost  
 Project\_Management\_Burden  
 Specialist\_Cost  
 Contingency  
 Other\_Direct\_Cost  
 Estimated\_Delivery\_Cost  
 Risk\_Adjusted\_Delivery\_Cost  
 Assumption\_References  
 Human\_Reviewed  
 Version

If reliable cost inputs are unavailable:

DELIVERY\_ECONOMICS\_INSUFFICIENT

The system must not fabricate internal labor cost or contractor economics.

# **12\. Margin Validation Object**

Minimum object:

Margin\_Validation\_ID  
 Opportunity\_ID  
 Recommended\_Price  
 Estimated\_Delivery\_Cost  
 Expected\_Gross\_Profit  
 Expected\_Gross\_Margin  
 Approved\_Margin\_Floor  
 Margin\_Result  
 Risk\_Factors  
 Pricing\_Band  
 Human\_Review\_Required  
 Human\_Decision  
 Version

Allowed result:

PASS  
 FAIL  
 REVIEW\_REQUIRED

If the approved price fails the margin floor:

MARGIN\_REVIEW\_REQUIRED

The system may recommend scope, price, or delivery changes for human review.

It may not silently lower delivery assumptions.

# **13\. Pricing Decision Record**

For material engagements, create a structured Pricing Decision Record.

Minimum fields:

Pricing\_Decision\_ID  
 Prospect\_or\_Client\_ID  
 Opportunity\_ID  
 Client\_Objective  
 Problem\_Complexity  
 Recommended\_Offer  
 Routing\_Rationale  
 Delivery\_Variant  
 Scope\_Classification  
 Scope  
 Required\_Deliverables  
 Delivery\_Responsibility  
 Foundation\_Complexity\_Score  
 Complexity\_Drivers  
 Internal\_Reference\_Value  
 Current\_List\_or\_Base\_Price  
 Internal\_Pricing\_Band  
 Estimated\_Delivery\_Cost  
 Recommended\_Fixed\_Price  
 Expected\_Gross\_Profit  
 Expected\_Gross\_Margin  
 Delivery\_Risk  
 Scope\_Exclusions  
 Client\_Budget\_Status  
 Budget\_Gap  
 Pricing\_Exception  
 Concessions  
 Original\_Price  
 Final\_Approved\_Price  
 Human\_Approver  
 Approval\_Date  
 Pricing\_Source\_Version  
 Proposal\_Version  
 Proposal\_Sent\_Date  
 Outcome  
 Actual\_Delivery\_Cost  
 Actual\_Gross\_Margin  
 Source\_References  
 Version

This record must make the commercial reasoning reconstructable.

# **14\. Pricing Recommendation Logic**

Pricing logic should follow PRICE-001.

For SimpliBlueprint:

ACTIVE\_STANDARD\_PRICE  
 → CUSTOM\_SCOPE\_TRIGGER\_CHECK  
 → HUMAN\_REVIEW\_IF\_TRIGGERED  
 → APPROVED\_PRICE

For Templated WordPress:

ELIGIBILITY  
 → BASE\_VARIANT  
 → APPROVED\_ADD\_ONS  
 → HUMAN\_REVIEW\_IF\_NONSTANDARD  
 → APPROVED\_PRICE

For SimpliFoundation:

APPROVED\_STRATEGIC\_SOURCE  
 → FOUNDATION\_SCOPING  
 → COMPLEXITY  
 → REQUIRED\_DELIVERABLES  
 → REFERENCE\_VALUE\_VALIDATION  
 → DELIVERY\_ECONOMICS  
 → MARGIN\_VALIDATION  
 → RECOMMENDED\_FIXED\_PRICE  
 → HUMAN\_APPROVAL

For SimpliCARE:

ONGOING\_RESPONSIBILITY  
 → APPROPRIATE\_CARE\_LEVEL  
 → CURRENT\_PRICING  
 → HUMAN\_REVIEW\_AS\_REQUIRED

# **15\. Pricing Discrepancy Detection**

Complexity, reference value, and delivery economics should validate one another.

If they materially disagree, create:

PRICING\_DISCREPANCY\_RECORD

Minimum fields:

Pricing\_Discrepancy\_ID  
 Opportunity\_ID  
 Complexity\_Result  
 Reference\_Value\_Result  
 Delivery\_Economics\_Result  
 Nature\_of\_Discrepancy  
 Possible\_Cause  
 Recommended\_Review  
 Human\_Decision  
 Source\_References

Return:

PRICING\_REVIEW\_REQUIRED

Do not silently choose one model.

# **16\. Budget Mismatch Handling**

When budget and approved scope do not align, the system may suggest for human review:

Reduce or defer lower priorities.

Shift approved responsibility to the client.

Use Blueprint only when strategy is the true need.

Evaluate Template eligibility only when the project genuinely qualifies.

Refer or decline when no responsible fit exists.

Rules:

CLIENT\_BUDGET\_DOES\_NOT\_JUSTIFY\_UNCHANGED\_SCOPE\_DISCOUNT  
 TEMPLATE\_PRICE\_DOES\_NOT\_OVERRIDE\_TEMPLATE\_ELIGIBILITY

# **17\. Scope Change Record**

Minimum object:

Scope\_Change\_ID  
 Client\_ID  
 Project\_or\_Opportunity\_ID  
 Original\_Scope  
 Requested\_Change  
 Change\_Type  
 Reason  
 Impact  
 Additional\_Deliverables  
 Delivery\_Impact  
 Price\_Impact  
 Timeline\_Impact  
 AI\_Classification  
 Human\_Decision  
 Approved\_Price\_Change  
 Approved\_Timeline\_Change  
 Approval\_ID  
 Source\_References  
 Version

Allowed classification should distinguish:

CLARIFICATION  
 INCLUDED\_REVISION  
 ADDITIONAL\_DELIVERABLE  
 CHANGED\_REQUIREMENT  
 NEW\_DEPENDENCY  
 MATERIAL\_SCOPE\_EXPANSION

AI may identify a potential scope change.

AI may not commit SimpliCreative to additional work.

# **18\. Proposal Generation Contract**

Proposal generation is allowed only when:

Proposal\_Readiness \= SEND\_NOW  
 Human\_Proposal\_Readiness\_Approved \= TRUE  
 Offer\_Status \= ACTIVE  
 Scope\_Status \= APPROVED  
 Pricing\_Status \= APPROVED  
 Required\_Open\_Items \= RESOLVED\_OR\_DISCLOSED

Required sources may include:

Approved Diagnostic Record / route.

Approved Blueprint or strategic source.

Foundation Scoping Record where required.

Pricing Decision Record.

Active Pricing Source of Truth.

Current Offer Record.

Current Brand Voice & Editorial Standards.

Current approved client/prospect facts.

Historical proposals may inform structure only.

They may not override current price, scope, or offer architecture.

# **19\. Proposal Output Contracts**

Current Gold Standards:

| ID | Output | Trigger | AI Role | Human Gate |
| :---- | :---- | :---- | :---- | :---- |
| GS-SALES-001 | Personalized SimpliBlueprint Proposal | Approved Blueprint proposal readiness | AI-produced first draft | Human commercial approval |
| GS-SALES-002 | Personalized SimpliFoundation Proposal | Approved Foundation scope \+ approved fixed price | AI-produced first draft | Human commercial approval |
| GS-SALES-004 | Proposal Send & Next-Step Email | Approved proposal ready to send | AI-produced first draft | Human review before send |

 

A proposal may contain approved client-facing commercial information.

It must not contain internal labor estimates, delivery cost, margin, complexity score, internal pricing bands, deliverable reference values, or AI confidence.

# **20\. Proposal Record**

Minimum object:

Proposal\_Record\_ID  
 Opportunity\_ID  
 Proposal\_Type  
 Offer\_ID  
 Scope\_Version  
 Pricing\_Decision\_ID  
 Proposal\_Version  
 Generated\_Date  
 Approved\_Date  
 Sent\_Date  
 Recipients  
 Approved\_Investment  
 Payment\_Terms\_ID  
 Timeline\_or\_Scheduling\_Reference  
 Status  
 Prospect\_Response  
 Requested\_Revisions  
 Outcome  
 Source\_References

Allowed status may include:

DRAFT  
 PENDING\_HUMAN\_REVIEW  
 APPROVED\_TO\_SEND  
 SENT  
 REVISION\_REQUESTED  
 ACCEPTED  
 DECLINED  
 EXPIRED  
 SUPERSEDED

# **21\. Commitment Record**

Do not infer commitments from politeness or general interest.

Minimum object:

Commitment\_ID  
 Opportunity\_ID  
 Commitment  
 Commitment\_Owner  
 Due\_Date  
 Source\_Evidence  
 Validation\_Status  
 Status  
 Completion\_Evidence  
 Human\_Validated

POLITENESS \!= COMMITMENT

# **22\. Controlled Agreement / SOW Population**

Agreement / SOW documents should use an approved controlled template.

AI may populate only authorized fields from approved commercial records.

Allowed fields may include:

Client legal name.

Engagement name.

Approved scope.

Approved investment.

Approved payment terms.

Approved dates or scheduling language.

Approved client responsibilities.

Approved exclusions.

Named contacts.

AI must not author or modify legal terms unless an explicit legal workflow authorizes it.

If the proposal and agreement materially conflict:

PROPOSAL\_AGREEMENT\_CONFLICT\_REQUIRES\_HUMAN\_REVIEW

# **23\. Opportunity / CRM Write-Back**

Approved commercial states may write back to the CRM.

Minimum write-back map should support:

Opportunity\_ID  
 Current\_Route  
 Commercial\_Readiness  
 Proposal\_Readiness  
 Offer  
 Approved\_Amount  
 Proposal\_Status  
 Proposal\_Sent\_Date  
 Decision\_Stakeholders  
 Known\_Timing  
 Next\_Action  
 Next\_Action\_Owner  
 Next\_Action\_Date  
 Agreement\_Status  
 Closed\_Status  
 Loss\_Reason

Every material stage change should preserve supporting evidence.

CRM\_STAGE\_CHANGE\_REQUIRES\_SUPPORTED\_EVENT

# **24\. Agreement, Closed Won, and Activation Events**

Minimum structured events:

Agreement\_Issued\_Event  
 Agreement\_Signed\_Event  
 Activation\_Condition\_Satisfied\_Event  
 Closed\_Won\_Event  
 Delivery\_Activation\_Event

Closed Won requires approved evidence.

At minimum:

Correct\_Agreement\_Version  
 Signature\_Evidence  
 Approved\_Amount  
 Approved\_Offer  
 Activation\_Condition\_Status  
 Human\_Approval

Rules:

PROPOSAL\_SENT \!= ACCEPTED  
 VERBAL\_INTEREST \!= CLOSED\_WON  
 SIGNED\_AGREEMENT\_REQUIRES\_SOURCE\_EVIDENCE  
 CLOSED\_WON\_REQUIRES\_APPROVED\_EVIDENCE  
 DELIVERY\_ACTIVATION\_REQUIRES\_APPROVED\_COMMERCIAL\_STATE

# **25\. Workflow States**

Minimum business states:

ROUTE\_APPROVED  
 COMMERCIAL\_READINESS\_REVIEW  
 COMMERCIAL\_READY  
 PROPOSAL\_READINESS\_REVIEW  
 SCOPING\_REQUIRED  
 SCOPING\_IN\_PROGRESS  
 SCOPING\_COMPLETE  
 PRICING\_IN\_PROGRESS  
 PRICING\_REVIEW\_REQUIRED  
 PRICING\_APPROVED  
 PROPOSAL\_DRAFT  
 PROPOSAL\_REVIEW  
 PROPOSAL\_APPROVED\_TO\_SEND  
 PROPOSAL\_SENT  
 FOLLOW\_UP  
 AGREEMENT\_PREPARATION  
 AGREEMENT\_ISSUED  
 AGREEMENT\_SIGNED  
 ACTIVATION\_CONDITION\_PENDING  
 CLOSED\_WON  
 DELIVERY\_ACTIVATED  
 NURTURE  
 REFERRED  
 DECLINED  
 CLOSED\_LOST

Engineering may add technical substates without changing human authority.

# **26\. Automation Triggers**

Examples:

Approved Diagnostic route may create the commercial opportunity context.

Commercial readiness approval may enable proposal-readiness review.

Direct-to-Foundation may trigger Foundation Scoping.

Completed approved Foundation Scoping may enable pricing calculation.

Current pricing retrieval may populate standard offer pricing.

Approved cost inputs may enable delivery economics and margin calculations.

Human-approved pricing may enable proposal drafting.

Human-approved proposal may enable proposal-send email drafting.

Proposal sent may create follow-up tasks.

Verified agreement signature plus activation condition may enable Closed Won review.

Human-approved Closed Won state may enable delivery activation.

Automation must stop at every required human approval gate.

# **27\. Human Approval Gates**

Human approval is required before:

Final offer routing where strategic judgment is material.

Proposal readiness.

Custom Blueprint price.

All Foundation pricing.

CARE Strategic price.

New or materially changed template scope.

Custom functionality.

Pricing exceptions.

Discounts and concessions.

Nonstandard payment terms.

Margin exceptions.

Proposal issuance.

Material proposal revisions.

Nonstandard scope changes / change orders.

Agreement / SOW issuance when required by current policy.

Closed Won classification.

Delivery activation.

AI\_RECOMMENDATION \!= HUMAN\_DECISION  
 AI\_DRAFT \!= APPROVED\_COMMERCIAL\_OUTPUT

# **28\. AI Permissions**

AI may:

Retrieve current pricing.

Evaluate offer eligibility.

Calculate approved template add-ons.

Identify custom Blueprint review triggers.

Calculate Foundation complexity.

Retrieve deliverable reference values.

Estimate delivery economics from approved inputs.

Validate margin.

Recommend one fixed Foundation price.

Recommend CARE level.

Identify budget mismatch.

Identify potential scope change.

Prepare Foundation Scoping drafts.

Draft proposals.

Draft proposal-send communications.

Populate authorized controlled agreement fields.

Prepare CRM write-back.

Maintain Pricing, Proposal, Commitment, and commercial state records.

Detect discrepancies.

Summarize actual economics.

# **29\. AI Restrictions**

AI may not:

Invent pricing.

Alter pricing policy.

Approve a discount.

Approve a commercial exception.

Approve custom Blueprint pricing.

Approve Foundation pricing.

Expose internal economics in client outputs.

Route a strategically complex opportunity to Template merely because of budget.

Invent scope.

Invent payment terms.

Invent legal terms.

Modify controlled legal language without authorization.

Guarantee ROI or commercial outcomes.

Automatically send proposals without approved workflow authorization.

Infer acceptance from verbal interest.

Declare Closed Won without approved evidence.

Activate delivery without approved commercial state.

# **30\. Systems of Record**

The following ownership model should be validated during engineering discovery.

| Object | Proposed System of Record |
| :---- | :---- |
| Prospect / Company | CRM |
| Opportunity / Deal | CRM |
| Diagnostic / Readiness | Second Brain with approved CRM write-back |
| Pricing Source of Truth | Second Brain structured pricing layer |
| Offer Record | Second Brain structured commercial layer |
| Foundation Scoping Record | Second Brain / approved artifact repository |
| Complexity / Reference Value / Economics | Second Brain structured commercial layer |
| Pricing Decision Record | Second Brain structured commercial layer |
| Proposal | Approved proposal repository / commercial platform |
| Proposal Record | Second Brain \+ CRM write-back |
| Commitment Record | Second Brain \+ CRM task/activity where appropriate |
| Agreement / SOW | Approved contracting / e-sign platform |
| Closed Won Event | CRM \+ Second Brain evidence link |
| Delivery Activation | Project system \+ Second Brain event |

 

PROPOSED\_SYSTEM\_OF\_RECORD\_REQUIRES\_ENGINEERING\_VALIDATION

# **31\. Source and Field Mapping**

Engineering should document:

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

Do not infer production field mapping from prompts.

# **32\. Failure States**

Minimum failure states:

PRICING\_REVIEW\_REQUIRED  
 CUSTOM\_BLUEPRINT\_PRICING\_REVIEW\_REQUIRED  
 DELIVERY\_ECONOMICS\_INSUFFICIENT  
 MARGIN\_REVIEW\_REQUIRED  
 SCOPE\_INSUFFICIENT  
 FOUNDATION\_SCOPING\_REQUIRED  
 PROPOSAL\_READINESS\_NOT\_APPROVED  
 PROPOSAL\_SOURCE\_CONFLICT  
 PROPOSAL\_AGREEMENT\_CONFLICT\_REQUIRES\_HUMAN\_REVIEW  
 SIGNATURE\_EVIDENCE\_MISSING  
 ACTIVATION\_CONDITION\_NOT\_SATISFIED  
 COMMERCIAL\_SOURCE\_CONFLICT  
 PERMISSION\_DENIED  
 HUMAN\_REVIEW\_REQUIRED

A failure state must remain visible.

The system must not hide it by generating a complete-looking commercial output.

# **33\. Audit Trail**

For material commercial decisions, preserve:

Decision\_ID  
 Opportunity\_ID  
 Decision\_Type  
 Inputs  
 Current\_Pricing\_Source  
 Scope\_Version  
 AI\_Recommendation  
 Human\_Decision  
 Rationale  
 Approval\_ID  
 Pricing\_Decision\_ID  
 Proposal\_Version  
 Agreement\_Version  
 Downstream\_Action  
 Date

Human overrides must preserve the original AI recommendation rather than replacing it.

# **34\. Versioning and Historical State**

Do not overwrite:

Superseded price records.

Previous offer definitions.

Previous scope versions.

Previous complexity scores.

Previous pricing recommendations.

Previous proposals.

Client-requested proposal revisions.

Previous agreement versions.

AI recommendations replaced by human decisions.

Actual economics after delivery.

Historical state should remain retrievable for authorized review.

# **35\. Client and Prospect Boundary**

Client- and prospect-specific commercial information must remain bound to that opportunity/client.

CLIENT\_SPECIFIC\_PRICE \!= AGENCY\_PRICING  
 CLIENT\_SPECIFIC\_DISCOUNT \!= AGENCY\_PRICING  
 CLIENT\_SPECIFIC\_TERMS \!= STANDARD\_TERMS  
 HISTORICAL\_PROPOSAL \!= CURRENT\_PRICING\_AUTHORITY

Repeated patterns may become pricing-policy candidates only through approved human learning and governance.

# **36\. Actual Economics and Learning**

After delivery, capture where available:

Sold\_Price  
 Actual\_Delivery\_Cost  
 Actual\_Role\_Hours  
 Actual\_Gross\_Margin  
 Scope\_Changes  
 Delivery\_Friction  
 Timeline\_Variance  
 Client\_Outcome  
 Human\_Reflection

Preferred learning path:

PRICING DECISION  
 → DELIVERY  
 → ACTUAL ECONOMICS  
 → OUTCOME  
 → HUMAN REFLECTION  
 → PRICING PATTERN CANDIDATE  
 → CROSS-ENGAGEMENT VALIDATION  
 → HUMAN APPROVAL  
 → PRICING SOURCE UPDATE

One engagement must not silently change agency pricing.

# **37\. Evaluation Requirements**

The Engineering Acceptance Test Pack should include:

Current pricing beats historical pricing.

Expired pricing produces review state.

Missing pricing does not generate a number.

Template eligibility is not inferred from low budget.

Custom Blueprint triggers stop standard pricing.

Foundation complexity is calculated from approved dimensions.

Reference values do not mechanically become client price.

Delivery economics fail visibly when source costs are unavailable.

Margin validation blocks when required.

Pricing discrepancies trigger review.

Internal economics never appear in client proposal.

Proposal generation requires approved readiness, scope, and price.

Proposal email matches approved proposal.

Agreement population uses approved fields only.

Proposal/agreement conflicts stop automation.

Proposal Sent does not equal Accepted.

Verbal interest does not equal Closed Won.

Closed Won requires evidence.

Delivery activation requires approved commercial state.

Scope-change detection preserves original scope.

Client-specific discounts do not alter agency pricing.

Human overrides remain traceable.

Critical pricing, agreement, approval, and Closed Won failures should block production deployment.

# **38\. Commercial Output Checklist for Engineering**

| ID / Record | Type | Trigger | AI Role | Human Gate |
| :---- | :---- | :---- | :---- | :---- |
| Commercial Readiness Record | System object | Approved route exists | AI-assisted | Human decision |
| Proposal Readiness Record | System object | Commercial state evaluated | AI-assisted | Human decision |
| GS-SALES-003 Foundation Scoping Record | Internal artifact | Foundation scoping required | AI-assisted structured draft | Human approval |
| Pricing Decision Record | System object | Pricing required | AI calculation/recommendation | Human approval as required |
| GS-SALES-001 Blueprint Proposal | Client artifact | Approved Blueprint proposal readiness | AI-produced first draft | Human approval before send |
| GS-SALES-002 Foundation Proposal | Client artifact | Approved Foundation scope and price | AI-produced first draft | Human approval before send |
| GS-SALES-004 Proposal Send Email | Client communication | Proposal approved to send | AI-produced first draft | Human approval before send |
| Controlled Agreement / SOW | Contract artifact | Proposal accepted / contracting stage | Populate approved fields only | Human/legal approval |
| Proposal Record | System object | Proposal generated/sent | AI-assisted | Validate material state |
| Commitment Record | System object | Commitment evidence exists | AI-assisted | Validate material commitment |
| Closed Won / Activation Record | System event | Required evidence exists | AI documents | Human approval |

 

# **39\. Engineering North Star**

The Sales, Pricing & Commercial Intelligence Layer should make commercial decisions more consistent, explainable, profitable, and auditable.

It should help humans answer:

What route was approved?

Is the opportunity commercially ready?

Is it proposal ready?

What scope is actually approved?

What pricing source is current?

What complexity drives this Foundation scope?

Do reference value and delivery economics support the recommendation?

Does the proposed price meet margin requirements?

What did the human approve?

What proposal was sent?

What did the prospect actually commit to?

Does the agreement match the proposal?

What evidence supports Closed Won?

Is delivery allowed to activate?

What happened economically after delivery?

The system should organize, calculate, compare, draft, and preserve.

The human approves the commercial commitment.

