SimpliFoundation Intelligence & Engineering Specification

Version: 1.1

Classification: AI Intelligence Layer & Engineering Specification

Status: Active

Owner: SimpliCreative

Source ID: FOUND-002

Related Workflow: SimpliFoundation

Related Human SOP: FOUND-001\_SimpliCreative\_SimpliFoundation\_Human\_SOP\_v1.1.docx

Primary Users: AI Engineers, System Architects, SimpliCreative Delivery Team

# **Purpose**

This specification defines how the SimpliCreative AI Intelligence Layer supports SimpliFoundation from activation through implementation, QA, launch, handoff, and durable knowledge capture.

SimpliFoundation is a human-led custom implementation engagement. Its purpose is to translate approved strategy into a working digital foundation without losing the strategic reasoning, evidence, priorities, implementation requirements, or client decisions established upstream.

Foundation is primarily executed by humans. AI supports the work through governed retrieval, structured assembly, research, synthesis, first-draft generation, comparison, discrepancy detection, decision capture, and knowledge preservation.

AI does not own Foundation strategy, design, development, technical architecture, client communication, commercial scope, production approval, or final implementation decisions.

The governing principle is:

STRATEGY\_MUST\_SURVIVE\_EXECUTION

Additional governing rules include:

AI\_DRAFT \!= APPROVED\_OUTPUT  
 CLIENT\_SPECIFIC\_CONTEXT\_MUST\_REMAIN\_CLIENT\_BOUND  
 EVIDENCE\_DETERMINES\_CERTAINTY  
 KNOWN\_INFORMATION\_SHOULD\_NOT\_BECOME\_BLANK\_DISCOVERY  
 RESEARCH\_FOLLOWS\_THE\_QUESTION  
 MISSING\_INFORMATION \!= PERMISSION\_TO\_INFER  
 PAGE\_TYPE \!= BUYER\_INTENT  
 SEARCH\_INTENT \!= BUYER\_INTENT  
 BUYER\_INTENT\_MUST\_INFORM\_PAGE\_JOB  
 SITE\_ARCHITECTURE\_IS\_PAGE\_LEVEL\_SOURCE\_OF\_TRUTH  
 META\_AND\_SCHEMA\_BELONG\_WITH\_PAGE\_ARCHITECTURE  
 SCHEMA\_TYPE\_MUST\_MATCH\_ACTUAL\_PAGE\_CONTENT  
 ARCHITECTURE\_CHANGE\_REQUIRES\_DOWNSTREAM\_IMPACT\_REVIEW

# **1\. Foundation Entry Paths**

SimpliFoundation may begin through either approved path:

APPROVED SIMPLIBLUEPRINT → FOUNDATION

or

DIRECT-TO-FOUNDATION SCOPING → FOUNDATION

The Intelligence Layer must know which path applies.

When Foundation follows SimpliBlueprint, the approved Blueprint and Implementation Handoff become the primary client-specific strategic sources.

When Foundation follows Direct-to-Foundation Scoping, the approved Foundation Scoping Record and validated existing client strategy become the primary implementation sources.

Foundation must not recreate strategy merely because implementation has begun.

If material strategic uncertainty emerges during implementation, surface it for human strategic review.

# **2\. Foundation Inputs**

| Input | Purpose |
| :---- | :---- |
| Approved Blueprint | Governing strategy when Blueprint preceded Foundation |
| Blueprint Implementation Handoff | Preserves approved findings, priorities, requirements, decisions, and unresolved items |
| Approved Foundation Scoping Record | Governing source for Direct-to-Foundation engagements |
| Approved Proposal / SOW | Governs scope, commitments, and exclusions |
| Client Record | Durable client context |
| Approved Client Strategy | Governs current strategic direction |
| Approved Buyer Intent Map | Governs buyer-intent context where available |
| Approved Page Strategy Records | Governs known page-level objectives where available |
| Existing Site Inventory | Establishes current page and URL state |
| Approved Messaging | Governs meaning and narrative |
| Brand Voice & Editorial Guide | Governs expression |
| Approved Proof / Claims | Controls public evidence and claims |
| Existing Analytics / Measurement | Establishes available performance evidence |
| CRM / Marketing Systems Context | Establishes routing, lifecycle, and integration context |
| Search / Discoverability Evidence | Supports page and search implementation |
| Existing Design / Brand Assets | Supports design continuity |
| Client Decisions | Preserves current approved choices |
| Known Constraints / Dependencies | Prevents infeasible or context-free outputs |
| Relevant Gold Standards | Calibrates structure and quality only |

 

Retrieval should prefer current approved records over superseded or historical material.

# **3\. Foundation Context Object**

Create a Foundation Context Object before generating material implementation outputs.

Minimum fields should include:

Foundation\_ID  
 Client\_ID  
 Entry\_Path  
 Approved\_Objectives  
 Approved\_Strategy\_Source  
 Approved\_Buyer  
 Approved\_Buyer\_Intent\_Map  
 Approved\_Page\_Strategy\_Records  
 Approved\_Messaging  
 Approved\_Proof  
 Approved\_Claims  
 Approved\_Recommendations  
 Implementation\_Requirements  
 Approved\_Scope  
 Known\_Stakeholders  
 Known\_Partners  
 Known\_Constraints  
 Known\_Dependencies  
 Known\_Open\_Questions  
 Measurement\_Requirements  
 Discoverability\_Requirements  
 Current\_Site\_Inventory  
 Current\_Technology\_Context  
 Relevant\_Client\_Decisions  
 Relevant\_Source\_References  
 Human\_Owner  
 Workflow\_Status

The system should not infer a missing strategic value simply to make the object appear complete.

# **4\. Draft and Approval State Model**

AI-generated Foundation outputs are never automatically authoritative.

Use:

AI\_GENERATED  
 → HUMAN\_REVIEWED  
 → CLIENT\_REVIEWED when required  
 → APPROVED  
 → SEMANTIC\_MEMORY\_ELIGIBLE where appropriate

| Status | Meaning |
| :---- | :---- |
| Draft | Working material |
| Human Reviewed | Human specialist evaluated it |
| Client Review | Awaiting client decision |
| Approved | Authorized for use or implementation |
| Superseded | Replaced by a newer approved version |
| Historical | Retained for context |
| Rejected | Deliberately not approved |

 

Retrieval should prefer the current approved record.

# **5\. Foundation Output Chain**

Where these workstreams are included, the preferred content-to-implementation chain is:

APPROVED STRATEGY  
 → STRATEGY-TO-EXECUTION HANDOFF  
 → BRAND VOICE & EDITORIAL GUIDE  
 \+ WEBSITE MESSAGING & CONTENT BLUEPRINT  
 → INTEGRATED SITE ARCHITECTURE  
 → PAGE CONTENT & MESSAGING BRIEFS  
 → WEBSITE COPY  
 → CREATIVE BRIEF  
 → APPROVED DESIGN  
 → DEVELOPMENT HANDOFF  
 → BUILD  
 → STRATEGIC FIDELITY QA  
 → TECHNICAL QA  
 → LAUNCH  
 → OUTCOME / HANDOFF

Not every Foundation engagement requires every output.

Scope controls which deliverables are required.

# **6\. Buyer Intent Governance**

When an approved Buyer Intent Map exists, Foundation should use it rather than re-infer buyer intent from page type, search query, or copy.

Primary sequence:

BUYER\_INTENT  
 → PAGE\_JOB  
 → CONTENT\_DEPTH  
 → PROOF\_NEED  
 → CTA

Rules:

PAGE\_JOB\_MUST\_MATCH\_BUYER\_INTENT  
 CTA\_MUST\_MATCH\_BUYER\_INTENT  
 DO\_NOT\_FORCE\_LATE\_STAGE\_CONVERSION\_ON\_EARLY\_STAGE\_INTENT  
 DO\_NOT\_ADD\_EDUCATIONAL\_FRICTION\_WHEN\_BUYER\_IS\_READY\_TO\_ACT  
 AI\_MUST\_NOT\_REINFER\_BUYER\_INTENT\_WHEN\_APPROVED\_BUYER\_INTENT\_EXISTS  
 BUYER\_INTENT\_CONFLICT\_REQUIRES\_HUMAN\_REVIEW

A page may support more than one intent level. The system should preserve one primary buyer intent and optional secondary buyer intent where relevant.

Buyer intent is a planning input, not a rigid requirement to create one page for every stage.

# **7\. Integrated Site Architecture Workflow**

When site architecture is in scope, AI may generate the first structured draft of the Integrated Site Architecture workbook.

The workbook is not merely a sitemap. It is the page-level implementation source that brings architecture, buyer intent, page purpose, URL planning, metadata, schema, proof dependencies, CTA logic, and measurement into one governed structure.

The main Sitemap tab is the page-level source of truth.

Required or supported fields include:

| Field | Engineering Meaning |
| :---- | :---- |
| Page\_ID | Stable identifier |
| Parent\_Page\_ID | Hierarchy relationship |
| Navigation\_Order | Approved ordering where applicable |
| Page\_Name | Canonical page or template name |
| Existing\_URL | Current-state URL |
| Navigation\_Location | Primary, utility, footer, nested, hidden, or other |
| Scope\_Status | New, retain, enhance, restructure, move, merge, retire, or approved equivalent |
| Primary\_Buyer\_Intent | Primary approved intent |
| Secondary\_Buyer\_Intent | Optional adjacent intent |
| Page\_Objective | Primary job of the page |
| Buyer\_Question | What the visitor needs to understand or decide |
| Primary\_CTA | Main next action |
| Secondary\_CTA | Alternate or lower-friction next action |
| Proposed\_URL | Future canonical URL |
| Meta\_Title | Proposed title |
| Meta\_Description | Proposed description |
| Primary\_Search\_Intent | Search need the page should serve |
| Target\_Topic | Optional topic / keyword cluster support |
| Schema\_Types | Structured-data types appropriate to actual content |
| Schema\_Properties | Important properties to populate or validate |
| Proof\_Dependencies | Required evidence or authority assets |
| Content\_Dependencies | Required copy, assets, or source material |
| Measurement\_Events | Meaningful events / conversion signals |
| Redirect\_Requirement | Whether current URL requires redirect logic |
| Notes\_Rationale | Reasoning / unresolved context |
| Approval\_Status | Draft, reviewed, approved, superseded |
| Source\_References | Traceability |
| Approved\_By | Human approval |
| Approved\_Date | Approval timestamp |

 

Supporting tabs may include:

Navigation  
 Redirects  
 Schema Implementation Guide  
 Authority / E-E-A-T Requirements where relevant  
 Change Log

The Schema Implementation Guide may explain reusable schema rules globally, but page-specific schema assignment belongs on the main page record.

Rules:

SITE\_ARCHITECTURE\_IS\_PAGE\_LEVEL\_SOURCE\_OF\_TRUTH  
 PAGE\_TYPE \!= BUYER\_INTENT  
 SEARCH\_INTENT \!= BUYER\_INTENT  
 KEYWORD\_OR\_SEARCH\_INTENT \!= PAGE\_PURPOSE  
 META\_AND\_SCHEMA\_BELONG\_WITH\_PAGE\_ARCHITECTURE  
 SCHEMA\_TYPE\_MUST\_MATCH\_ACTUAL\_PAGE\_CONTENT  
 AI\_MUST\_NOT\_INVENT\_SCHEMA\_ELIGIBILITY  
 AI\_MUST\_NOT\_INVENT\_PAGE\_PROOF  
 PROPOSED\_PAGE \!= APPROVED\_PAGE  
 PROPOSED\_URL \!= APPROVED\_REDIRECT

# **8\. Site Architecture Generation Inputs**

Before generating a draft Integrated Site Architecture workbook, retrieve where available:

| Input | Purpose |
| :---- | :---- |
| Approved buyer and Buyer Intent Map | Governs page need and intent |
| Approved page objectives | Prevents arbitrary page invention |
| Existing URL inventory | Current-state comparison |
| Existing navigation | Migration and usability context |
| Blueprint recommendations | Strategic requirements |
| Messaging architecture | Message-to-page alignment |
| Offer architecture | Determines solution / offer experiences |
| Proof architecture | Determines credibility needs |
| Search evidence | Supports discoverability decisions |
| Existing rankings / landing pages | Protects useful search equity |
| Content inventory | Reuse, migration, and gap analysis |
| Measurement strategy | Page-level event / conversion requirements |
| CRM / funnel requirements | CTA and form routing context |
| Technical constraints | Feasibility |
| Scope | Prevents unapproved page expansion |

 

AI may propose pages, merges, removals, or URL changes as drafts.

Human approval is required before they become implementation requirements.

# **9\. Architecture Change Propagation**

When a page is added, removed, merged, renamed, moved, or materially repositioned, the system should perform a downstream-impact review.

Potential affected objects include:

Navigation  
 Redirects  
 Page Requirements  
 Buyer Intent Mapping  
 Website Copy  
 Internal Linking  
 Meta Titles  
 Meta Descriptions  
 Schema  
 Structured Content  
 Analytics Events  
 Conversion Paths  
 Forms  
 CRM Routing  
 Design Templates  
 Development Components  
 QA Requirements

Output:

ARCHITECTURE\_CHANGE\_IMPACT\_REVIEW

Minimum fields:

Change\_ID  
 Affected\_Page\_ID  
 Original\_State  
 Proposed\_State  
 Reason  
 Affected\_Downstream\_Objects  
 Potential\_Risk  
 Required\_Human\_Review  
 Approval\_Status  
 Source\_References

AI may identify impact.

AI may not silently propagate a material architecture change into approved downstream outputs without human review.

# **10\. Page Requirement Object**

For each material page, support a Page Requirement object with:

Page\_ID  
 Page\_Name  
 Strategic\_Purpose  
 Primary\_Audience  
 Primary\_Buyer\_Intent  
 Secondary\_Buyer\_Intent  
 Buyer\_Question  
 Key\_Message  
 Required\_Proof  
 Primary\_CTA  
 Secondary\_CTA  
 Required\_Sections  
 Required\_Functionality  
 Discoverability\_Requirements  
 Meta\_Title  
 Meta\_Description  
 Primary\_Search\_Intent  
 Schema\_Types  
 Measurement\_Events  
 Dependencies  
 Claim\_Restrictions  
 Open\_Decisions  
 Client\_Approver  
 Source\_References  
 Approval\_Status

The page object should trace back to approved strategy and the Integrated Site Architecture workbook where that workbook exists.

# **11\. Messaging Guide Workflow**

When messaging work is included, AI may generate the first structured draft.

Required inputs may include:

Approved Strategy  
 Primary Buyer  
 Buying Committee  
 Approved Buyer Intent  
 Positioning  
 Differentiation  
 Offers  
 Storytelling & Messaging Architecture  
 Voice of Customer Evidence  
 Buyer Journey  
 Approved Proof  
 Approved Claims  
 Relevant Existing Messaging  
 Client Decisions

Potential outputs include:

Primary Buyer.

Desired Outcome.

Functional Problem.

Emotional Problem.

Belief-Level Problem.

Core Conflict.

Brand Point of View.

Differentiation.

Value Proposition.

Credibility Narrative.

Offer Narrative.

Path Forward.

Calls to Action.

Stakes.

Success Narrative.

Buyer Transformation.

Core Narrative / Controlling Idea.

Messaging hierarchy.

Proof requirements.

Objection considerations.

AI may synthesize and draft.

AI may not invent strategic positioning, proof, guarantees, offers, or unsupported claims.

# **12\. Brand Voice & Editorial Guide Workflow**

When included in scope, AI may generate the first draft of the client-specific Brand Voice & Editorial Guide.

Inputs should include:

Approved Messaging  
 Existing Brand Standards  
 Approved Client Content  
 Relevant Client Feedback  
 Approved Vocabulary  
 Approved Claims  
 Buyer Intent Context  
 Channel Context  
 SimpliCreative Editorial Standards

Potential outputs include:

Voice.

Tone.

Vocabulary.

Preferred terminology.

Prohibited terminology.

Writing principles.

Editorial mechanics.

Claim standards.

Audience variations.

Buyer-intent guidance for editorial depth.

Channel considerations.

AI writing anti-patterns.

Approved examples.

The guide governs expression. It does not authorize new strategy.

Human review is mandatory.

Client review should occur where required.

# **13\. Website Messaging & Content Blueprint Workflow**

When included in scope, AI may generate a Website Messaging & Content Blueprint that translates approved strategy into website-specific messaging and page-direction requirements.

Potential content includes:

Strategic foundation.

Audience and buyer architecture.

Messaging architecture.

Condensed brand/editorial rules.

Claim and evidence register.

Site/content system.

Standard page requirement structure.

Buyer-intent application.

Priority page blueprints.

Discoverability requirements.

Measurement requirements.

Implementation dependencies.

Open decisions.

Client review workflow.

This deliverable should consume approved strategy and Brand Voice guidance rather than replace either.

# **14\. Page Content & Messaging Brief Workflow**

For material pages, AI may generate a page-level brief after relevant architecture and messaging are approved.

Required inputs:

Approved Strategy  
 Integrated Site Architecture Record  
 Website Messaging & Content Blueprint  
 Brand Voice & Editorial Guide  
 Approved Buyer Intent  
 Page Objective  
 Approved Proof  
 Measurement Requirements  
 Current Client Decisions

The brief should distinguish requirements from illustrative copy.

It may define:

Page role.

Primary and secondary buyer intent.

Buyer questions.

Message hierarchy.

Required proof.

Section plan.

CTA logic.

Illustrative copy territories.

Discoverability.

Measurement.

Claim restrictions.

Dependencies.

Open decisions.

Human approval requirements.

# **15\. Website Copy Workflow**

Preferred flow:

Approved Strategy  
 → Approved Messaging  
 → Integrated Site Architecture  
 → Page Requirements  
 → Brand Voice & Editorial Guide  
 → Approved Proof  
 → AI First Draft  
 → Human Editorial Review  
 → Claim Verification  
 → Client Review  
 → Approved Copy

AI may improve expression.

AI may not create new strategy, proof, offers, guarantees, audience priorities, or unsupported performance claims.

AI-assisted copy should be checked for repetitive structure, formulaic contrast framing, shallow observations, generic openings, stacked abstractions, fake empathy, empty intensifiers, artificial urgency, synthetic certainty, and other approved anti-patterns.

# **16\. Creative Brief Workflow**

When design is in scope, AI may assemble the first draft of a Creative Brief from approved upstream context.

Inputs may include:

Approved strategy.

Buyer intent.

Integrated Site Architecture.

Page requirements.

Approved messaging.

Approved copy.

Proof requirements.

Brand standards.

Conversion objectives.

Accessibility requirements.

Functional requirements.

Measurement requirements.

Client preferences.

Known constraints.

Design remains human-led.

AI may not approve the final visual solution.

# **17\. Development Handoff Workflow**

Before development begins, the system may assemble a Development Handoff / Implementation Specification from approved sources.

Potential inputs and outputs include:

Approved design.

Approved content.

Integrated Site Architecture.

Page requirements.

Responsive requirements.

CMS requirements.

Component inventory.

Form requirements.

CRM mappings.

Measurement events.

SEO/AEO/GEO requirements.

Metadata.

Schema.

Accessibility requirements.

Migration requirements.

Redirect requirements.

Performance requirements.

Dependencies.

Open items.

Accepted limitations.

Acceptance criteria.

Design-dependent details should remain explicitly pending until approved design exists.

AI must not invent pixel-level design specifications.

# **18\. Claim and Evidence Control**

Material claims should preserve:

Claim\_ID  
 Claim\_Text  
 Source\_Status  
 Source\_Reference  
 Client\_Provided  
 Independent\_Validation\_Status  
 Permission\_Status  
 Usage\_Restriction  
 Approved\_Wording  
 Approved\_By  
 Approved\_Date

Rules:

CLIENT\_PROVIDED\_CLAIM \!= AI\_GENERATED\_CLAIM  
 CLIENT\_PROVIDED\_CLAIM \!= INDEPENDENTLY\_VERIFIED\_CLAIM  
 COPY\_MUST\_NOT\_INCREASE\_CERTAINTY  
 UNSUPPORTED\_CLAIM\_REQUIRES\_HUMAN\_RESOLUTION

# **19\. Research Workflow**

Foundation research begins with an approved question.

Preferred flow:

Human-Approved Research Question  
 → Required Evidence  
 → Approved Retrieval / Research  
 → AI Synthesis  
 → Human Interpretation  
 → Decision / Requirement Update

Do not rerun Blueprint research simply because Foundation has begun.

# **20\. Client Feedback Record**

Material client feedback should be structured when it changes facts, strategy, requirements, scope, durable preferences, or approved implementation.

Required schema:

| Field | Description |
| :---- | :---- |
| Feedback\_ID | Unique ID |
| Client\_ID | Client |
| Deliverable\_ID | Affected deliverable |
| Section\_Element | Affected content |
| Original\_Recommendation | Pre-feedback state |
| Client\_Feedback | Exact feedback where available |
| Revised\_Version | Changed state |
| Final\_Approved\_Version | Final decision |
| Feedback\_Type | Classification |
| Stated\_Rationale | If available |
| Strategic\_Significance | Low / Medium / High |
| Human\_Interpretation | Optional |
| Approved\_By | Client / authorized human |
| Date | Date |
| Memory\_Action | What should be updated |

 

Feedback types include Fact Correction, Client Preference, Editorial Preference, Strategic Decision, Implementation Requirement, Scope Change, Design Preference, and Other.

Rule:

CLIENT\_EDIT \!= AGENCY\_BEST\_PRACTICE

# **21\. Human Override Capture**

When an authorized human materially changes an AI recommendation:

AI Recommendation  
 → Human Override  
 → Reason  
 → Approved Decision  
 → Implementation  
 → Result

Capture only when the override has meaningful strategic, technical, commercial, client, or learning value.

Do not record every routine copy or design adjustment as institutional intelligence.

# **22\. Strategic Drift Detection**

AI may compare current implementation against approved strategy.

Potential drift categories include:

ICP.

Positioning.

Messaging.

Offers.

Buyer journey.

Buyer intent.

Information architecture.

Page objective.

Conversion strategy.

Discoverability strategy.

Measurement strategy.

Success criteria.

Approved requirements.

Output:

POTENTIAL\_STRATEGIC\_DRIFT

AI may flag drift.

AI may not automatically rewrite strategy or implementation.

# **23\. Change Classification**

| Change Type | Definition | Route |
| :---- | :---- | :---- |
| Clarification | Resolves detail without material strategy or scope change | Human implementation |
| Implementation Decision | Determines how an approved requirement is executed | Human specialist decision |
| Architecture Change | Changes page inventory, hierarchy, URL, intent, or material page role | Downstream impact review \+ human approval |
| Scope Addition | Adds responsibility, deliverable, or effort | Commercial review |
| Strategic Change | Changes what, why, who, priority, or success | Strategic review |

 

AI may detect a possible change.

AI may not approve Scope Additions or Strategic Changes.

# **24\. Technology & Systems of Record**

The current ownership model should be validated during engineering discovery.

| System Role | Current Tool | Authoritative For |
| :---- | :---- | :---- |
| Project Management | monday.com | Tasks, owners, deadlines, execution status |
| Design | Figma | Current approved design and prototypes |
| Client Visual Feedback | MarkUp.io | Contextual implementation feedback |
| CMS / Development | WordPress / approved environment | Production implementation |
| Analytics | Approved analytics stack | Measurement evidence |
| Search | GSC / approved platforms | Search evidence |
| AI Workspace | Approved AI platforms | Working AI outputs |
| Second Brain | Intelligence Layer | Approved context, reasoning, relationships, and durable memory |
| Approved Document Repository | Approved storage | Final client and implementation artifacts |

 

Model system roles rather than hard-coding tool dependence.

# **25\. Knowledge Capture Filter**

Before writing activity into persistent Second Brain memory, ask whether it changes a durable client fact, material decision, approved strategy, implementation requirement, scope, risk, commitment, meaningful outcome, or reusable context.

Goal:

USEFUL\_INTELLIGENCE \!= COMPLETE\_ACTIVITY\_LOG

Do not persist every task, Figma comment, MarkUp.io annotation, copy edit, or routine implementation choice.

# **26\. Memory Architecture**

| Memory Type | Foundation Examples | Persistence |
| :---- | :---- | :---- |
| Working | Current draft, active task context, unresolved question | Temporary |
| Episodic | Feedback, decision, approval, revision, launch, outcome | Persistent event |
| Client Semantic | Approved messaging, facts, architecture, requirements, preferences | Persistent / versioned |
| Agency Semantic | Approved SimpliCreative methodology and principles | Governed promotion only |

 

Agency-level learning requires repeated evidence, human reflection, and deliberate approval.

# **27\. Gold-Standard Use**

Gold-Standard Foundation examples may calibrate structure, depth, reasoning, and quality.

Rules:

EXAMPLE \= APPLICATION\_REFERENCE  
 EXAMPLE \!= POLICY  
 EXAMPLE \!= CLIENT\_EVIDENCE

Never transfer client-specific messaging, architecture, CMS choices, integrations, scope, proof, or implementation recommendations across engagements without independent supporting context.

# **28\. AI Permissions Matrix**

| Action | AI Allowed | Human Approval |
| :---- | :---- | :---- |
| Retrieve approved client context | Yes | No |
| Summarize approved sources | Yes | No |
| Draft Integrated Site Architecture | Yes | Required |
| Draft metadata in approved architecture | Yes | Required |
| Recommend page-level schema | Yes, when supported by actual page content | Required |
| Draft Messaging Guide | Yes | Required |
| Draft Brand Voice & Editorial Guide | Yes | Required |
| Draft Website Messaging & Content Blueprint | Yes | Required |
| Draft page requirements | Yes | Required |
| Draft website content | Yes | Required |
| Draft Creative Brief | Yes | Required |
| Draft Development Handoff | Yes | Required |
| Compare client revisions | Yes | No |
| Classify client feedback | Yes | Validate material classifications |
| Extract meeting decisions | Yes | Validate material decisions |
| Create draft Decision Record | Yes | Required |
| Flag unsupported claims | Yes | Human resolves |
| Flag architecture change impact | Yes | Human resolves |
| Flag strategic drift | Yes | Human resolves |
| Flag possible scope change | Yes | Human resolves |
| Assist QA | Yes | Human validates |
| Change approved strategy | No | Human only |
| Approve architecture | No | Human only |
| Approve messaging | No | Human only |
| Approve design | No | Human only |
| Make final technical architecture decision | No | Human only |
| Approve pricing / scope | No | Human only |
| Make client commitments | No | Human only |
| Publish / deploy production | No | Human only |
| Promote agency learning | No | Human only |
| Cross client boundaries | No | Prohibited |

 

# **29\. QA Responsibility**

Foundation QA remains human-led.

AI may assist with defined checks and discrepancy detection.

QA should evaluate both technical correctness and strategic fidelity.

Primary validation question:

DID\_WE\_CORRECTLY\_IMPLEMENT\_THE\_APPROVED\_STRATEGY\_AND\_REQUIREMENTS?

Relevant QA may include:

Messaging.

Buyer intent.

Integrated site architecture.

Page inventory.

Navigation.

URLs.

Redirects.

Metadata.

Schema.

Page requirements.

Design implementation.

Responsive behavior.

Functionality.

Forms.

Conversion paths.

CRM routing.

Analytics events.

SEO/AEO/GEO requirements.

Accessibility.

Performance.

Integrations.

Migration.

Content.

Approved proof.

# **30\. Launch**

Production launch is human-controlled.

AI may prepare checklists, summarize unresolved issues, compare implementation with requirements, prepare measurement documentation, and identify missing approvals.

AI may not authorize or independently execute production launch.

# **31\. Post-Launch Intelligence**

When included in scope:

Implementation  
 → Launch  
 → Measurement  
 → Observed Result  
 → AI Synthesis  
 → Human Interpretation  
 → Outcome Record  
 → Reflection

Do not automatically interpret short-term movement as proof of causation.

# **32\. Foundation Completion Criteria**

Foundation intelligence work is complete when:

| Requirement | Required |
| :---- | :---- |
| Approved implementation delivered | Yes |
| Required human approvals recorded | Yes |
| Required client approvals recorded | Yes |
| Final approved site architecture stored | Where applicable |
| Final approved messaging / content stored | Where applicable |
| Material decisions captured | Yes |
| Material feedback / revisions captured | Yes |
| Superseded drafts identified | Yes |
| Claims / evidence linked | Where applicable |
| QA completed | Yes |
| Launch record completed | Where applicable |
| Durable client knowledge updated | Yes |
| Relevant outcome intelligence captured | Where applicable |
| Potential learning classified correctly | Yes |
| Ongoing ownership identified | Yes |

 

# **33\. Foundation Workflow States**

Minimum business states may include:

FOUNDATION\_ACTIVATED  
 CONTEXT\_PENDING  
 CONTEXT\_READY  
 HANDOFF\_READY  
 MESSAGING\_DRAFT  
 MESSAGING\_APPROVED  
 ARCHITECTURE\_DRAFT  
 ARCHITECTURE\_REVIEW  
 ARCHITECTURE\_APPROVED  
 PAGE\_REQUIREMENTS\_DRAFT  
 PAGE\_REQUIREMENTS\_APPROVED  
 COPY\_DRAFT  
 COPY\_APPROVED  
 CREATIVE\_BRIEF\_READY  
 DESIGN\_IN\_PROGRESS  
 DESIGN\_APPROVED  
 DEVELOPMENT\_HANDOFF\_READY  
 BUILD\_IN\_PROGRESS  
 STRATEGIC\_FIDELITY\_QA  
 TECHNICAL\_QA  
 LAUNCH\_READY  
 LAUNCHED  
 POST\_LAUNCH\_VALIDATION  
 HANDOFF\_COMPLETE  
 FOUNDATION\_COMPLETE

Engineering may add technical substates without changing business authority.

# **34\. Automation Triggers**

Approved state transitions may trigger governed automation.

Examples:

Foundation activation may trigger cumulative context assembly.

Approved context may enable first-draft messaging or architecture preparation.

Approved architecture may enable page-requirement generation.

Approved page requirements may enable copy drafting.

Approved copy and Creative Brief may enable design handoff.

Approved design may enable Development Handoff preparation.

Completed implementation may enable QA comparison.

Approved launch may enable post-launch validation workflows.

Automation must stop at required human approval gates.

# **35\. Human Approval Gates**

Human approval is required before:

Material source conflicts are resolved.

Material buyer-intent conflicts are resolved.

A page inventory becomes approved architecture.

A material page objective becomes final.

A URL migration plan becomes final.

Page-level metadata becomes client-ready where required.

Schema recommendations become implementation requirements.

Messaging becomes approved.

Material claims become approved for publication.

Page requirements become final.

Copy becomes client-ready.

Design becomes approved.

Technical architecture becomes final.

Material architecture changes propagate to approved downstream outputs.

Scope changes become commitments.

Strategic changes become current strategy.

QA passes become final.

Production launch is authorized.

Client-facing deliverables are released.

Rules:

AI\_RECOMMENDATION \!= HUMAN\_DECISION  
 AI\_DRAFT \!= APPROVED\_OUTPUT

# **36\. Evaluation Requirements**

Gold-Standard evaluation cases should test whether the system can:

Preserve approved context without re-discovering it.

Keep client-specific knowledge isolated.

Apply approved Buyer Intent rather than inferring from page type.

Generate an integrated architecture with page purpose, CTA, metadata, schema, dependencies, and measurement.

Avoid inventing pages, proof, schema eligibility, or URL redirects.

Surface architecture conflicts.

Identify downstream impacts from page changes.

Preserve claim provenance.

Keep messaging strategy separate from expression.

Generate page briefs from approved upstream sources.

Generate copy without introducing new strategy.

Create design and development handoffs without inventing unresolved design details.

Detect strategic drift.

Maintain approval states and version history.

Support QA without approving QA.

Stop at human launch control.

# **37\. Permanent Foundation Intelligence Flow**

APPROVED STRATEGY  
     	↓  
 FOUNDATION CONTEXT  
     	↓  
 IMPLEMENTATION REQUIREMENTS  
     	↓  
 MESSAGING \+ EDITORIAL INTELLIGENCE  
     	↓  
 INTEGRATED SITE ARCHITECTURE  
     	↓  
 PAGE REQUIREMENTS  
     	↓  
 CONTENT \+ CREATIVE BRIEF  
     	↓  
 APPROVED DESIGN  
     	↓  
 DEVELOPMENT HANDOFF  
     	↓  
 HUMAN EXECUTION  
     	↓  
 STRATEGIC FIDELITY QA  
     	↓  
 TECHNICAL QA  
     	↓  
 LAUNCH  
     	↓  
 OUTCOME  
     	↓  
 HUMAN REFLECTION  
     	↓  
 INTELLIGENCE CAPTURE  
     	↓  
 APPROVED MEMORY

# **38\. Engineering North Star**

The Foundation Intelligence Layer should not attempt to replace SimpliCreative specialists.

It should make those specialists better informed, reduce reconstruction of approved client context, preserve reasoning across handoffs, and make strategic drift easier to detect.

The system should reliably answer:

What has already been approved?

What evidence supports this?

What is the client trying to accomplish?

Who is the buyer?

What is the buyer intent?

Why does this page exist?

What is the approved CTA?

What metadata and schema belong with this page?

What is still uncertain?

What changed?

What downstream objects does that change affect?

Why was this implementation decision made?

What should not be inferred?

What happened after implementation?

What should be remembered next time?

The desired outcome is not autonomous Foundation delivery.

The desired outcome is human specialists working from better context, AI performing synthesis and structured drafting where useful, and valuable human judgment becoming durable organizational intelligence instead of disappearing inside documents, meetings, design files, project systems, and individual memory.

