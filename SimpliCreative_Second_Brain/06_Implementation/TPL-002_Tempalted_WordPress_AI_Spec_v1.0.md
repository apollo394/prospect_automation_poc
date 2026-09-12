# **Templated WordPress AI Generation Spec**

Version: 1.0  
Classification: AI Intelligence Layer Workflow Specification  
Status: Active  
Owner: SimpliCreative  
Related Workflow: Templated WordPress  
Primary Users: SimpliCreative Delivery Team and AI Engineering System

## **Purpose**

This specification defines how the SimpliCreative AI Intelligence Layer supports the Templated WordPress delivery process.

It governs the AI-assisted generation and support of:

Simplified FAST Website Discovery Questionnaire.

Question prefilling and confirmation logic.

Questionnaire validation.

Strategic uncertainty detection.

Brand asset validation.

Theme requirements.

Theme research support.

Theme-fit evaluation.

Proposed sitemap generation.

Page Requirement generation.

Theme layout mapping.

AI-assisted sample copy.

Content-outline generation.

Evidence and claim checks.

Brand Voice checks.

AI Pattern Detection.

Originality & Source Integrity checks.

Human and client approval states.

This workflow supports a productized website implementation.

It does not replace Blueprint strategy or SimpliFoundation custom implementation.

The governing principle is:

AI GENERATES STRUCTURED FIRST DRAFTS. HUMANS APPROVE STRATEGY, THEME, STRUCTURE, CONTENT, AND IMPLEMENTATION.

## **Workflow Boundary**

The AI workflow begins only after the Templated WordPress route has been approved.

The preferred flow is:

Approved Client Context  
→ Simplified FAST Questionnaire  
→ Questionnaire Validation  
→ Strategic Uncertainty Check  
→ Brand Asset Validation  
→ Theme Requirements  
→ Theme Research Support  
→ Human Theme Selection  
→ Approved Theme Context  
→ AI Proposed Sitemap  
→ Human Sitemap Review  
→ Page Requirements  
→ Theme Layout Mapping  
→ AI Sample Copy  
→ Claim and Evidence Check  
→ Brand Voice Check  
→ AI Pattern Detection  
→ Originality & Source Integrity Check  
→ Human Review  
→ Draft for Client Review  
→ Client Revisions  
→ Human Reconciliation  
→ Approved Content Outline  
→ Website Build

The AI should not independently move the client from one major stage to the next when human approval is required.

## **Required Inputs**

The system should retrieve the available approved client context before generating the questionnaire.

Relevant inputs may include:

Client identity.

Organization.

Website objective.

Diagnostic Record where applicable.

Sales Intelligence where applicable.

Existing client strategy.

Existing website.

Existing sitemap.

Existing content.

Existing brand materials.

Approved positioning.

Known audiences.

Known offers.

Known differentiators.

Approved proof.

Known conversion actions.

Relevant CRM or analytics context.

Known functionality requirements.

Known integrations.

Approved scope.

Known constraints.

Known client decisions.

Prior meeting notes.

Relevant proposal or SOW.

Do not force the client to rediscover reliable information already available.

The governing rule is:

KNOWN\_INFORMATION\_SHOULD\_NOT\_BECOME\_BLANK\_DISCOVERY.

## **Simplified FAST Questionnaire**

The simplified Website Discovery Questionnaire is intentionally lighter than Blueprint discovery.

Its purpose is to collect and validate enough information to responsibly recommend and implement a productized website.

It should not attempt to develop deep strategy.

The governing rule is:

SIMPLIFIED\_QUESTIONNAIRE \!= BLUEPRINT\_DISCOVERY.

## **Question Status Logic**

Every candidate question should receive one status:

CONFIRM means a likely answer already exists and should be prefilled for client confirmation or correction.

REQUIRED means the information is needed to responsibly generate or implement the website.

OPTIONAL means the information may improve the output but does not block the workflow.

SUPPRESS means the information is already sufficiently established and should not be asked again.

For CONFIRM questions, preferred framing is:

“Based on our previous conversations and materials, here is how we currently understand this. Please confirm, correct, or expand.”

## **Question Metadata**

Each question should preserve:

Question\_ID.

FAST\_Domain.

Question.

Strategic\_or\_Implementation\_Purpose.

Question\_Status.

Existing\_Answer.

Source.

Source\_Date.

Prefilled\_Answer.

Client\_Response.

Client\_Revision.

Required\_For\_Generation.

Validation\_Status.

Human\_Review\_Flag.

Date\_Confirmed.

Conflicting\_Source\_Flag.

## **Questionnaire FAST Structure**

Flexible inputs may include who manages the current website, how often content changes, whether landing pages are needed, who controls publishing, current CMS frustrations, routine marketing tasks the team needs to perform, required marketer autonomy, update frequency, known developer dependencies, and operational constraints.

Accessible inputs may include known accessibility needs, relevant audience considerations, client-supplied accessibility requirements, known accessibility concerns, language requirements, usability requirements, and relevant organizational or legal requirements provided by the client.

Strategic inputs may include website objective, business objective, primary audiences, positioning, services or offers, differentiation, buyer problems, buyer concerns, desired outcomes, competitor context, proof, credibility, testimonials, recurring questions, common objections, desired actions, terminology preferences, content priorities, current messaging, website expectations, important pages, and available source content.

Trackable inputs may include primary conversion actions, secondary conversion actions, forms, lead qualification, CRM routing, analytics, tag management, campaign tracking, source attribution, reporting needs, systems of record, and leadership questions the website should help answer.

## **Questionnaire Validation**

After the client submits the questionnaire, the system should identify:

Confirmed information.

Revised information.

New information.

Conflicting information.

Missing required information.

Optional gaps.

New implementation requirements.

Potential strategic uncertainty.

Required client assets.

Required human decisions.

The system should not silently overwrite prior client context.

Where the client corrects previous information, preserve the previous answer, source, new answer, date, and current status.

## **Strategic Uncertainty Detection**

The simplified questionnaire must not become a substitute for Blueprint.

If responses reveal material uncertainty around the primary audience, positioning, core offer, differentiation, messaging direction, buyer journey, conversion strategy, or another issue that could materially change what should be built, return:

MATERIAL\_STRATEGIC\_UNCERTAINTY\_REQUIRES\_HUMAN\_REVIEW.

AI may identify the uncertainty.

AI may not independently resolve it inside the Templated WordPress workflow.

## **Brand Asset Validation**

Before final theme adaptation or client-facing content-outline generation, create or update a Brand Asset Record.

Recommended fields include:

Logo.

Logo\_Variants.

Colors.

Typography.

Photography.

Illustration.

Icons.

Brand\_Guidelines.

Existing\_Marketing\_Assets.

Approved\_Content\_Assets.

Usage\_Limitations.

Client\_Confirmed.

Missing\_Assets.

Asset\_Source.

Asset\_Date.

The client is responsible for providing approved brand assets.

AI should not invent permanent client brand rules simply because assets are missing.

The governing rule is:

CLIENT\_BRAND\_ASSETS\_ARE\_REQUIRED\_INPUTS.

If an asset is missing, identify what is missing, whether work can continue, and what human follow-up is required.

## **Theme Requirements Object**

Before researching or evaluating themes, create a Theme Requirements Object.

Recommended fields include:

Client\_Industry.

Website\_Objective.

Primary\_Audiences.

Expected\_Page\_Types.

Expected\_Page\_Count.

Primary\_Offers.

Primary\_CTA.

Secondary\_CTA.

Proof\_Requirements.

Team\_Requirements.

FAQ\_Requirements.

Blog\_Requirements.

Resource\_Requirements.

Form\_Requirements.

Integration\_Requirements.

Content\_Volume.

Brand\_Expression\_Needs.

Accessibility\_Considerations.

Responsive\_Requirements.

CMS\_Usability\_Needs.

Technical\_Requirements.

Known\_Constraints.

Customization\_Tolerance.

The Theme Requirements Object should define what the theme must support before visual preference is evaluated.

## **Theme Research Support**

AI may assist the human team with ThemeForest theme research when technically permitted and when relevant theme data has been provided or retrieved through an approved process.

AI may compare candidate themes against the Theme Requirements Object.

Potential evaluation criteria include:

Industry appropriateness.

Visual fit.

Available page demos.

Service or offer presentation.

Proof and testimonial components.

Team layouts.

FAQ layouts.

Blog or resource support.

CTA and form support.

Component flexibility.

Responsive quality.

CMS usability.

Technical quality.

Maintainability.

Compatibility requirements.

Accessibility considerations.

Amount of customization required.

AI may recommend a shortlist.

The final theme decision remains human-owned.

The governing rule is:

AI\_MAY\_RECOMMEND\_THEME. HUMAN\_APPROVES\_THEME.

## **Theme Fit Record**

Each candidate theme may contain:

Theme\_ID.

Theme\_Name.

ThemeForest\_URL.

Demo\_URL.

Vendor.

Relevant\_Demos.

Industry\_Fit.

Page\_Type\_Fit.

Component\_Fit.

Content\_Fit.

Conversion\_Fit.

Proof\_Fit.

Blog\_or\_Resource\_Fit.

Responsive\_Assessment.

CMS\_Usability\_Assessment.

Technical\_Considerations.

Accessibility\_Considerations.

Customization\_Required.

Known\_Limitations.

AI\_Recommendation.

Human\_Review\_Status.

Selected\_Status.

## **Theme Context**

Once a human selects the theme, create an Approved Theme Context.

The system should preserve:

Theme ID.

Theme name.

Theme source.

Approved demo URLs.

Relevant page demos.

Relevant section layouts.

Available components.

Known limitations.

Approved customization boundaries.

Technical considerations.

Human approver.

Date approved.

Theme demos are structural references.

They are not strategic or content sources.

The governing rules are:

THEME\_LAYOUT \!= STRATEGY.

THEME\_DEMO\_CONTENT \!= CLIENT\_COPY.

THEME\_DEMO\_BRANDING \!= CLIENT\_BRANDING.

## **Layout Reference Record**

For approved layouts, preserve:

Theme\_ID.

Theme\_Name.

Demo\_URL.

Page\_Demo.

Section\_Name.

Screenshot\_or\_Reference.

Component\_Type.

Intended\_Client\_Use.

Relevant\_Page\_ID.

Human\_Approved.

Reference\_Status.

The system should use theme demo screenshots and URLs to understand available structural patterns.

Do not reuse the theme demo’s distinctive copy, branding, imagery, claims, or client-specific messaging.

## **Sitemap Generation**

AI may generate the first proposed sitemap after questionnaire validation and approved theme context exist.

Inputs should include validated questionnaire responses, approved client strategy, current website, existing content, offers, audiences, conversion objectives, proof needs, discoverability requirements, scope, and theme capabilities.

Each proposed page should preserve:

Page\_ID.

Page\_Name.

Page\_Purpose.

Primary\_Audience.

Primary\_Objective.

Primary\_Message.

Primary\_CTA.

Secondary\_CTA.

Required\_Proof.

Required\_Content.

Relevant\_Offers.

Relevant\_Buyer\_Needs.

SEO\_AEO\_Requirements.

Measurement\_Requirements.

Recommended\_Theme\_Demo.

Recommended\_Layout.

Dependencies.

Rationale.

Human\_Approval\_Status.

The system should explain why each recommended page exists.

The governing rule is:

SITEMAP\_MUST\_TRACE\_TO\_CLIENT\_INPUTS.

Do not simply reproduce the current website navigation unless the evidence supports doing so.

Do not add pages merely because the theme demo contains them.

Human Sitemap Approval

The AI-proposed sitemap should receive:

DRAFT\_FOR\_INTERNAL\_REVIEW.

After human review:

APPROVED\_SITEMAP.

Only an approved sitemap should feed final page-outline generation.

Page Requirement Generation

After sitemap approval, generate a Page Requirement for each material page.

Recommended fields include:

Page\_ID.

Page\_Name.

Strategic\_Purpose.

Primary\_Audience.

Primary\_Message.

Buyer\_Need.

Primary\_CTA.

Secondary\_CTA.

Required\_Proof.

Required\_Content.

Required\_Functionality.

Relevant\_Offers.

SEO\_AEO\_Requirements.

Measurement\_Requirements.

Accessibility\_Considerations.

Supporting\_Assets.

Open\_Questions.

Dependencies.

Source\_References.

Recommended\_Theme\_Demo.

Human\_Review\_Status.

Page requirements connect client inputs to implementation.

They should not become generic website checklists.

## **Theme Layout Mapping**

AI may map each approved page and content requirement to existing theme demos and components.

The mapping should identify:

Recommended page demo.

Recommended hero layout.

Recommended content sections.

Section order.

Reusable components.

Proof or testimonial modules.

Team modules.

FAQ modules.

CTA modules.

Blog or resource modules.

Sections to remove.

Sections to reorder.

Minor adaptation required.

Known layout limitation.

Potential custom requirement.

Human review status.

The governing principle is:

CONTENT\_AND\_STRATEGY\_GUIDE\_TEMPLATE\_SELECTION. THE\_TEMPLATE\_DOES\_NOT\_DICTATE\_THE\_STRATEGY.

Where a requirement cannot be responsibly supported by the existing theme system, flag:

POTENTIAL\_PRODUCTIZED\_SCOPE\_CONFLICT.

Do not automatically invent a custom component or design system.

## **Page Content Outline Object**

After the approved sitemap and theme layout mapping exist, generate a Page Content Outline for each material page.

Recommended fields include:

Page\_ID.

Page\_Name.

Page\_Purpose.

Layout\_Reference.

Section\_ID.

Section\_Order.

Section\_Type.

Section\_Purpose.

Section\_Kicker.

Headline.

Supporting\_Copy.

Sample\_Copy.

Relevant\_Offer.

Proof\_Required.

CTA.

Supporting\_Assets.

FAQ\_Content.

SEO\_AEO\_Considerations.

Measurement\_Considerations.

Open\_Questions.

Client\_Revision.

Source\_References.

Claim\_Validation\_Status.

Human\_Review\_Status.

The client-facing document may present this information using the practical structure:

Layout Reference.

Sample Copy.

Client Revised Copy.

Sample Copy Generation

AI may generate first-draft website sample copy from approved client context.

Permitted source inputs may include:

Validated questionnaire responses.

Approved client facts.

Existing website copy.

Client brochures.

Approved service descriptions.

Approved positioning.

Known audience context.

Approved proof.

Approved testimonials.

Approved case studies.

Existing brand materials.

Approved Voice of Customer evidence.

Page purpose.

Approved content requirements.

Approved editorial guidance.

AI may draft:

Section kickers.

Headlines.

Subheadlines.

Explanatory copy.

Offer copy.

Benefit copy.

Proof framing.

Process descriptions.

CTA language.

FAQ drafts.

Section transitions.

Other copy required by the approved page outline.

AI must not invent:

Statistics.

Testimonials.

Credentials.

Awards.

Customer outcomes.

Client capabilities.

Legal statements.

Compliance statements.

Qualifying criteria.

Guarantees.

Regulatory claims.

Service claims unsupported by client evidence.

Competitor claims.

Buyer quotations.

The governing rule is:

PAGE\_CONTENT\_MUST\_TRACE\_TO\_APPROVED\_CLIENT\_CONTEXT.

## **Claim Validation**

Before human review, identify substantive factual claims in the draft.

Each claim should be checked against approved client evidence.

If a required claim cannot be supported, return:

UNVERIFIED\_CLAIM\_REQUIRES\_HUMAN\_REVIEW.

Do not write around missing evidence in a way that disguises the gap.

## **AI Sample Copy Status**

Initial copy status:

AI\_GENERATED\_SAMPLE\_COPY.

After human editing and review:

HUMAN\_REVIEWED\_SAMPLE\_COPY.

After client approval:

APPROVED\_WEBSITE\_COPY.

The governing rule is:

AI\_SAMPLE\_COPY \!= APPROVED\_COPY.

## **Brand Voice Check**

Where client-specific editorial guidance exists, use it.

Where no client-specific editorial standard exists, apply the approved SimpliCreative drafting and quality standards appropriate to client website content without making SimpliCreative’s own brand voice the client’s voice.

The draft should be clear, specific, useful, human, credible, and appropriate to the client.

Avoid generic consulting or marketing language.

Avoid inflated claims.

Avoid unsupported specificity.

## **AI Pattern Detection**

Before human review, substantive AI-generated copy should pass the mandatory AI Pattern Detection check defined in the governing editorial standards.

Check for:

Repetitive paragraph and sentence structures.

Surface-level content.

Formulaic AI filler.

Unnecessary em-dash usage.

Repeated contrast framing.

Generic transitions.

Predictable cadence.

The governing rule is:

AI\_PATTERN\_DETECTION\_REQUIRED\_BEFORE\_HUMAN\_REVIEW.

Pattern correction must not introduce unsupported facts merely to make the writing feel more specific.

**Originality & Source Integrity**

All generated content inherits the agency Originality & Source Integrity Standard.

Theme demos, competitor websites, prior client work, Gold-Standard examples, reference websites, expert resources, and external materials may inform structure, reasoning, content needs, and quality.

They must not become copy sources.

Relevant governing rules include:

REFERENCE\_EXAMPLE\_DOES\_NOT\_AUTHORIZE\_REUSE.

THEME\_DEMO\_CONTENT\_DOES\_NOT\_AUTHORIZE\_REUSE.

CLIENT\_DELIVERABLE\_DOES\_NOT\_BECOME\_COPY\_BANK.

CLIENT\_SPECIFIC\_CONTENT\_MUST\_REMAIN\_CLIENT\_BOUND.

If potentially material source similarity cannot be resolved, return:

POTENTIAL\_SOURCE\_SIMILARITY\_REQUIRES\_HUMAN\_REVIEW.

The system should not certify content as legally original, plagiarism-free, copyright-safe, or fair use.

**Client-Facing Content Outline Generatio**n

The content-outline draft should only be generated for client review after:

The questionnaire has been validated.

Material strategic uncertainty has been resolved or cleared.

Required brand assets have been identified.

The theme has been human-approved.

The sitemap has been human-reviewed.

Page requirements exist.

Theme layout mappings exist.

Sample copy has passed claim checks.

Sample copy has passed Brand Voice review.

Sample copy has passed AI Pattern Detection.

Sample copy has passed Originality & Source Integrity review.

The initial client-facing draft status should be:

DRAFT\_FOR\_CLIENT\_REVIEW.

**Client Revision Handling**

When client revisions are returned, preserve:

Original sample copy.

Client revision.

Client rationale where provided.

Fact corrections.

New claims.

New content.

New requirements.

Strategic implications.

Scope implications.

Human reconciliation.

Final approved version.

A client edit should not automatically overwrite an approved strategic requirement without review.

If the client introduces a new unsupported claim, flag it.

If the client revision creates a strategic issue, route it.

If the revision creates additional scope, route it commercially.

**Approved Content Outline**

After client revisions and human reconciliation, assign:

APPROVED\_CONTENT\_OUTLINE.

The approved content outline should become the implementation reference for the build.

Only approved content and layout decisions should feed production.

**AI Permissions**

AI may retrieve approved client context.

AI may prefill questionnaire answers.

AI may generate simplified questionnaire drafts.

AI may identify missing questionnaire inputs.

AI may identify potential strategic uncertainty.

AI may validate brand asset completeness.

AI may create theme requirements.

AI may compare provided or retrieved ThemeForest candidates.

AI may recommend a theme shortlist.

AI may generate a proposed sitemap.

AI may draft sitemap rationale.

AI may create Page Requirements.

AI may map pages to approved theme layouts.

AI may generate sample website copy.

AI may identify claims requiring validation.

AI may run Brand Voice checks.

AI may run AI Pattern Detection.

AI may run Originality & Source Integrity checks.

AI may assemble the client-facing content-outline draft.

AI may compare client revisions against the draft.

AI may flag possible strategy or scope changes.

AI Restrictions

AI may not independently approve the Templated WordPress route.

AI may not use the simplified questionnaire to create deep new strategy.

AI may not approve the theme.

AI may not approve the sitemap.

AI may not invent client brand assets.

AI may not copy theme demo content.

AI may not copy competitor content.

AI may not use one client’s copy as source material for another client.

AI may not invent claims, statistics, proof, testimonials, credentials, or customer outcomes.

AI may not independently resolve material strategic uncertainty.

AI may not expand the productized scope without human approval.

AI may not approve final website copy.

AI may not approve final client delivery.

AI may not make final technical architecture decisions.

AI may not launch the website.

**Human Approval Gates**

Human review is required for:

Material strategic uncertainty.

Theme shortlist when used.

Final theme selection.

Proposed sitemap.

Page requirements.

Theme layout mapping.

Sample copy.

Claim validation.

Client-facing content outline.

Client revisions.

Scope changes.

Strategic changes.

Final website copy.

Final implementation.

QA.

Launch.

**Required Output States**

Questionnaire Draft:  
DRAFT\_QUESTIONNAIRE.

Validated Questionnaire:  
VALIDATED\_QUESTIONNAIRE.

Theme Shortlist:  
DRAFT\_THEME\_SHORTLIST.

Theme:  
HUMAN\_APPROVED\_THEME.

Sitemap Draft:  
DRAFT\_FOR\_INTERNAL\_REVIEW.

Approved Sitemap:  
APPROVED\_SITEMAP.

Sample Copy:  
AI\_GENERATED\_SAMPLE\_COPY.

Human-Reviewed Copy:  
HUMAN\_REVIEWED\_SAMPLE\_COPY.

Content Outline for Client:  
DRAFT\_FOR\_CLIENT\_REVIEW.

Final Content Outline:  
APPROVED\_CONTENT\_OUTLINE.

Website Copy:  
APPROVED\_WEBSITE\_COPY.

**Permanent Guardrails**

SIMPLIFIED\_QUESTIONNAIRE \!= BLUEPRINT\_DISCOVERY.

KNOWN\_INFORMATION\_SHOULD\_NOT\_BECOME\_BLANK\_DISCOVERY.

MATERIAL\_STRATEGIC\_UNCERTAINTY\_REQUIRES\_HUMAN\_REVIEW.

CLIENT\_BRAND\_ASSETS\_ARE\_REQUIRED\_INPUTS.

AI\_MAY\_RECOMMEND\_THEME. HUMAN\_APPROVES\_THEME.

THEME\_LAYOUT \!= STRATEGY.

THEME\_DEMO\_CONTENT \!= CLIENT\_COPY.

THEME\_DEMO\_BRANDING \!= CLIENT\_BRANDING.

THEME\_DEMO\_CONTENT\_DOES\_NOT\_AUTHORIZE\_REUSE.

SITEMAP\_MUST\_TRACE\_TO\_CLIENT\_INPUTS.

PAGE\_CONTENT\_MUST\_TRACE\_TO\_APPROVED\_CLIENT\_CONTEXT.

AI\_SAMPLE\_COPY \!= APPROVED\_COPY.

UNVERIFIED\_CLAIM\_REQUIRES\_HUMAN\_REVIEW.

POTENTIAL\_PRODUCTIZED\_SCOPE\_CONFLICT.

REFERENCE\_EXAMPLE\_DOES\_NOT\_AUTHORIZE\_REUSE.

CLIENT\_SPECIFIC\_CONTENT\_MUST\_REMAIN\_CLIENT\_BOUND.

AI\_PATTERN\_DETECTION\_REQUIRED\_BEFORE\_HUMAN\_REVIEW.

POTENTIAL\_SOURCE\_SIMILARITY\_REQUIRES\_HUMAN\_REVIEW.

HUMAN\_APPROVAL\_REQUIRED\_BEFORE\_CLIENT\_DELIVERY.

**Engineering Flow**

Approved Templated WordPress Route  
→ Existing Client Context  
→ Simplified FAST Questionnaire  
→ Questionnaire Validation  
→ Strategic Uncertainty Check  
→ Brand Asset Validation  
→ Theme Requirements  
→ Theme Research Support  
→ Human Theme Approval  
→ Approved Theme Context  
→ AI Proposed Sitemap  
→ Human Sitemap Review  
→ Page Requirements  
→ Theme Layout Mapping  
→ AI Sample Copy  
→ Claim and Evidence Check  
→ Brand Voice Check  
→ AI Pattern Detection  
→ Originality & Source Integrity Check  
→ Human Review  
→ Draft for Client Review  
→ Client Revisions  
→ Human Reconciliation  
→ Approved Content Outline  
→ Website Build

## **Success** **Standard**

The Templated WordPress AI Generation Workflow succeeds when the delivery team receives a useful, traceable first draft of the questionnaire, sitemap, page requirements, layout mappings, and sample copy without AI silently creating strategy, inventing claims, copying theme content, or pushing the engagement beyond its productized boundaries.

The AI should reduce blank-page work and repeated discovery.

The human team should remain responsible for what the client is actually advised to build, how it is presented, and what ultimately becomes the website.  
