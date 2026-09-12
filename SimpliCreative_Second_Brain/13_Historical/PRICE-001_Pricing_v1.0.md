# **04 Pricing SOP**

Version: 1.0  
Classification: Agency Semantic Knowledge  
Status: Active  
Owner: SimpliCreative  
Applies To: Qualification, offer routing, scoping, pricing, proposals, scope changes, profitability validation, and AI-assisted commercial recommendations

## **1\. Purpose**

This SOP governs how SimpliCreative qualifies opportunities, routes prospects to the appropriate engagement, develops pricing, validates delivery economics, prepares proposals, and preserves the reasoning behind commercial decisions.

The objective is not to price work primarily by estimated hours.

The objective is to price the defined engagement and the level of responsibility SimpliCreative assumes, then use hours, delivery cost, complexity, and margin internally to determine whether the engagement is economically sound.

The governing principle is:

“Price the defined engagement and level of responsibility SimpliCreative assumes. Use hours and delivery cost internally to validate profitability, not as the primary client-facing pricing mechanism.”

AI may support pricing analysis and recommendations.

Final pricing requires human approval.

## **2\. Pricing Source of Truth**

The Intelligence Layer must maintain a current Pricing Source of Truth separate from historical proposals, estimates, and client-specific pricing.

Each active pricing record should contain:

| Field | Purpose |
| ----- | ----- |
| Offer / Deliverable ID | Stable identifier |
| Name | Current offer or deliverable name |
| Current Price | Approved current price |
| Minimum Price | Lowest approved price where applicable |
| Pricing Method | Fixed, starting at, monthly, custom, or other approved method |
| Unit | Engagement, month, page, integration, etc. |
| Included | Standard inclusions |
| Exclusions | Items not included |
| Approval Requirement | Required human approval |
| Effective Date | Date pricing became active |
| Version | Current version |
| Status | Active, Superseded, Historical, Draft |

Historical pricing must not be treated as current pricing authority.

If pricing is missing, expired, conflicting, or outside an approved range, return:

`PRICING_REVIEW_REQUIRED`

AI must not invent a price to resolve missing or conflicting pricing information.

## **3\. Current Offer Pricing**

| Offer | Current Pricing |
| ----- | ----- |
| Lean Marketing Scorecard™ | Complimentary |
| Executive Marketing Diagnostic | Complimentary |
| SimpliBlueprint | $12,500 fixed |
| Partner Templated WordPress | $6,500 fixed |
| Direct Templated WordPress | $8,500 fixed |
| SimpliFoundation | Starts at $35,000 |
| SimpliCARE Foundation | Approximately $3,500/month |
| SimpliCARE Growth | Approximately $6,500/month |
| SimpliCARE Strategic | $10,000+/month |

These values remain authoritative only while their Pricing Source of Truth records are Active.

Approximate CARE pricing should not be converted into a final client commitment without approved scope and human review.

## **4\. Current Offer Architecture**

The current commercial path may include:

Lean Marketing Scorecard™ → Executive Marketing Diagnostic → SimpliBlueprint → Client/Partner Implementation OR SimpliFoundation → SimpliCARE where appropriate.

This is not a mandatory linear funnel.

A prospect may enter through another source.

SimpliBlueprint is not a mandatory gateway to SimpliFoundation when sufficient strategic clarity already exists.

Templated WordPress is a separate productized implementation route when the project genuinely meets template eligibility requirements.

Client or Partner Implementation is an implementation path, not a SimpliCreative offer.

Done-With-You is not a current SimpliCreative offer.

The governing rule is:

`DWY_IS_NOT_A_CURRENT_SIMPLICREATIVE_OFFER`

Historical references to DIY, DWY, DFY, Done-With-You, Done-For-You, or similar prior architecture do not establish the current offer model.

## **5\. Qualification and Routing Principle**

Company size alone does not determine the appropriate engagement.

Marketing-team size alone does not determine the appropriate engagement.

B2B versus B2C alone does not determine the appropriate engagement.

The governing rule is:

“Match the solution to the complexity of the problem, not the size of the company.”

Routing should consider strategic uncertainty, problem interconnectedness, implementation complexity, website requirements, organizational readiness, existing strategy, decision authority, implementation capacity, and SimpliCreative fit.

## **6\. Offer Routing**

When meaningful connected strategic uncertainty exists and deeper investigation is required before implementation can be responsibly defined, route toward the Executive Marketing Diagnostic and, when appropriate after human evaluation, SimpliBlueprint.

When an approved Blueprint exists and the client wants SimpliCreative to implement the resulting strategy, route toward SimpliFoundation.

When sufficient strategy is already established but the website requires custom UX, architecture, integrations, technical planning, or broader implementation responsibility, route toward Direct-to-Foundation Scoping.

When the strategy, content, architecture, and implementation requirements are sufficiently established and the project genuinely fits a productized website model, evaluate Templated WordPress.

When a Blueprint client chooses to implement internally or through another qualified partner, provide the appropriate implementation handoff rather than forcing a SimpliCreative implementation engagement.

When the organization is not ready, the problem does not fit SimpliCreative’s capabilities, or the engagement is not economically viable, nurture, refer, or decline as appropriate.

## **7\. SimpliBlueprint Pricing**

The standard SimpliBlueprint investment is:

`$12,500 fixed`

The standard engagement assumes one organization, one primary website context, a normal decision-making group, a primary market or audience context, approved SimpliCreative methodology, standard available data sources, and the normal research and strategic analysis required by the Blueprint SOP.

The Blueprint is a standalone strategic engagement.

Its value does not depend on the client subsequently hiring SimpliCreative for implementation.

The $12,500 Blueprint fee should not automatically be credited toward SimpliFoundation.

## **8\. Custom Blueprint Review**

A Blueprint may require custom pricing review when scope materially exceeds the standard engagement.

Potential triggers include multiple brands, multiple websites, materially different markets, extensive stakeholder interviews, substantial original research, multiple business units, unusually complex data environments, significant systems analysis, or additional strategic disciplines beyond the approved Blueprint scope.

When these conditions materially affect delivery responsibility, return:

`CUSTOM_BLUEPRINT_PRICING_REVIEW_REQUIRED`

AI should identify the complexity driver.

AI must not invent the custom Blueprint price.

## **9\. Templated WordPress Pricing**

Current standard pricing is:

Partner Templated WordPress: `$6,500 fixed`

Direct Templated WordPress: `$8,500 fixed`

Partner pricing applies only when the approved partner model genuinely applies, including appropriate ownership of strategy, content, client communication, and other responsibilities defined by the partner arrangement.

Direct pricing applies when SimpliCreative is working directly with the client within the approved productized scope.

Template pricing must not be used simply because a prospect has a smaller budget.

Eligibility is based on scope and strategic readiness.

## **10\. Templated WordPress Eligibility**

A Templated WordPress project should generally have sufficiently established strategy, positioning, messaging, content, website objectives, conversion requirements, architecture, and technical requirements to allow implementation through the approved productized model.

The project should not require substantial custom strategy, custom UX architecture, extensive integrations, significant content development, complex buyer journeys, major CRM architecture, substantial original research, or other requirements that materially exceed the template model.

When the prospect says they “just need a website,” the strategist should not assume template eligibility.

Determine whether the apparent implementation request is masking unresolved strategic complexity.

## **11\. Templated WordPress Add-Ons**

Current approved add-on reference pricing includes:

| Add-On | Reference Price |
| ----- | ----- |
| Additional standard page | $500 |
| Additional template / layout | $1,000 |
| Standard form | $500 |
| Advanced form | $1,000+ |
| Standard integration | $750 |
| Blog | $750 |
| Resource / News custom post type | $1,250 |
| Content migration, up to 10 pages/items | $1,000 |
| Additional migration beyond included amount | $100/page or item |
| Additional revision round | $1,000 |
| Additional stakeholder / strategy meeting | $750 |
| Rush delivery | \+20% |

Custom functionality requires review.

Messaging or positioning uncertainty should trigger Blueprint or strategic review rather than being hidden inside template implementation.

Complex CRM or automation requirements should trigger Foundation review.

Custom API requirements require technical review and may trigger Foundation routing.

## **12\. SimpliFoundation Pricing Principle**

SimpliFoundation is a custom implementation engagement.

Current positioning is:

“SimpliFoundation engagements start at $35,000. Exact scope and fixed investment are determined through the Blueprint or Foundation Scoping, depending on strategic readiness.”

Foundation pricing should reflect the defined implementation scope, complexity, delivery responsibility, risk, dependencies, specialist requirements, and value of the engagement.

The client should normally receive one recommended fixed investment rather than an internal complexity calculation.

## **13\. Foundation Complexity Assessment**

Evaluate Foundation complexity across the following dimensions:

| Dimension |
| ----- |
| Storytelling & Messaging |
| Information Architecture |
| Content |
| Design System |
| CMS |
| Conversion |
| CRM / MarTech |
| Analytics |
| SEO / AEO / GEO |
| Accessibility |
| Integrations |
| Stakeholders |
| Brands / Markets |
| Timeline |
| Partner Coordination |

Each dimension may be scored internally from 1 to 3 based on approved scoring criteria.

The complexity score supports internal calibration.

It is not the client-facing pricing mechanism.

## **14\. Foundation Complexity Bands**

Current internal reference bands are:

| Total Complexity | Internal Band | Reference Range |
| ----- | ----- | ----- |
| 15–21 | Core | $35,000–$45,000 |
| 22–30 | Standard | $45,000–$65,000 |
| 31–38 | Growth | $65,000–$85,000 |
| 39–45 | Complex | $85,000–$100,000+ |

These ranges support pricing judgment.

They do not automatically determine the final price.

The final fixed investment should also be validated against required deliverables, delivery economics, margin, risk, dependencies, and human judgment.

## **15\. Deliverable Pricing Library**

The following values are internal reference values used to calibrate Foundation scope.

They are not intended to be presented as an à la carte client menu.

| Deliverable | Internal Reference Value |
| ----- | ----- |
| Storytelling & Messaging Architecture | $7,500 |
| Positioning / UVP | $5,000 |
| Website Strategy \+ Information Architecture | $5,000 |
| Buyer Journey / Conversion Strategy | $4,000 |
| AEO Strategy | $4,000 |
| SEO Strategy | $4,000 |
| Measurement Strategy | $3,500 |
| Custom Homepage UX \+ Design | $6,000 |
| Core Page Template | $2,500 |
| Secondary Layout | $1,000 |
| Custom Landing Page | $2,500 |
| WordPress Development Foundation | $10,000 bundled |
| Advanced CMS | $5,000 |
| Standard Form | $750 |
| Advanced Form | $1,500+ |
| CRM Integration | $2,500 |
| Advanced CRM | $4,000+ |
| GA4 \+ GTM | $2,000 |
| Custom Event | $500 |
| Dashboard | $3,500 |
| On-Page SEO | $2,500 |
| AEO Implementation | $3,500 |
| Accessibility Implementation | $2,500+ |
| Standard Integration | $1,000 |
| Complex / API Integration | $3,500+ |
| Migration, first 20 items | $2,500 |
| Additional Migration | $125/item |
| Additional Revision Round | $1,500 |
| Workshop | $1,500 |

The library should ultimately be maintained as structured pricing data rather than only embedded in this SOP.

## **16\. Foundation Pricing Method**

Foundation pricing should follow this sequence:

Complexity Assessment → Required Deliverables → Reference Value → Delivery Economics → Margin Validation → Recommended Fixed Price → Human Approval

Complexity identifies the overall level of responsibility.

The Deliverable Pricing Library provides internal value calibration.

Delivery economics determine whether SimpliCreative can responsibly deliver the work at the proposed price.

Human judgment determines the final approved commercial recommendation.

Where practical, Foundation pricing should normally be expressed in $2,500 increments.

AI should not create false mathematical precision.

## **17\. Delivery Economics**

For internal validation, calculate the expected cost of delivering the engagement.

Relevant inputs may include estimated role hours, internal labor cost, contractor cost, software or third-party cost, project-management burden, specialist requirements, contingency, and other direct delivery costs.

Hours are an internal economic input.

They are not the primary client-facing explanation for price.

If reliable delivery-cost inputs are unavailable, AI should not fabricate them.

Return:

`DELIVERY_ECONOMICS_INSUFFICIENT`

## **18\. Margin Validation**

Before final pricing approval, evaluate whether the proposed price supports the approved profitability requirement.

The system should preserve:

Recommended Price, Estimated Delivery Cost, Expected Gross Margin, Pricing Band, Key Complexity Drivers, Risk Factors, and Human Approval.

If the proposed price fails the approved margin requirement, do not silently reduce delivery assumptions.

Return:

`MARGIN_REVIEW_REQUIRED`

The human reviewer may adjust scope, price, delivery approach, or decline the engagement.

## **19\. Automatic Pricing Review Triggers**

Foundation pricing should require additional human review when material complexity includes multiple sites, multiple brands, multilingual requirements, custom API or ERP integration, significant CRM architecture, extensive content migration, application-like functionality, substantial regulatory requirements, more than five meaningful stakeholder groups, materially compressed timelines, or unresolved implementation requirements.

These triggers do not automatically mean the project should be declined.

They indicate that standard pricing logic may not sufficiently represent delivery responsibility or risk.

## **20\. Budget Mismatch**

A prospect’s budget should not cause SimpliCreative to discount an unchanged scope.

When budget and recommended scope do not align, evaluate whether scope can responsibly be reduced or deferred, whether Blueprint alone provides sufficient value, whether Templated WordPress genuinely fits, or whether the prospect should be referred or declined.

Do not force a lower-cost offer when it does not solve the actual problem.

Do not revive historical DIY, DWY, or other inactive offer structures simply to meet a budget.

## **21\. SimpliCARE Pricing**

Current CARE reference pricing is:

SimpliCARE Foundation: approximately `$3,500/month`

SimpliCARE Growth: approximately `$6,500/month`

SimpliCARE Strategic: `$10,000+/month`

CARE should be priced according to the level of ongoing responsibility SimpliCreative assumes rather than sold primarily as a bundle of hours.

The exact service definition, qualification criteria, and operating SOP require separate SimpliCARE governance.

Until that SOP is complete, AI should not infer undocumented CARE inclusions from price alone.

## **22\. Scope Changes**

When a client request changes the approved scope, determine whether it is a clarification, included revision, additional deliverable, changed requirement, new dependency, or material scope expansion.

Do not absorb material additional work simply because the request is related to the project.

The scope-change record should preserve the original scope, requested change, reason, impact, additional deliverables, delivery impact, price impact, timeline impact, and human approval.

AI may identify a potential scope change.

AI may not commit SimpliCreative to additional work or pricing without human approval.

## **23\. Proposal Generation**

AI may assist with proposal preparation only after the appropriate route, scope, pricing, and commercial recommendation have been approved.

Proposal generation should retrieve current Strategic Foundation, current offer definition, approved scope, current pricing record, relevant client or prospect context, approved commercial decision, and Brand Voice & Editorial Standards.

Historical proposals may inform structure when appropriately classified.

They must not override current pricing or offer architecture.

## **24\. Human Approval**

Human approval is required for final offer routing where strategic judgment is material, final scope, final Foundation pricing, custom Blueprint pricing, nonstandard template pricing, discounts, commercial exceptions, margin exceptions, proposal issuance, and material scope changes.

AI may recommend.

AI may explain its reasoning.

AI may identify missing information.

AI does not make the final commercial commitment.

## **25\. Pricing Decision Record**

For material engagements, preserve:

Prospect / Client, Business Objective, Problem Complexity, Recommended Offer, Routing Rationale, Scope, Required Deliverables, Delivery Responsibility, Complexity Assessment, Internal Reference Value, Delivery Economics, Margin Validation, Recommended Fixed Price, Approved Fixed Price, Human Approver, Approval Date, Exceptions, Proposal Version, and Final Outcome.

This record should allow the team to understand not only what was priced but why.

## **26\. Learning From Pricing Outcomes**

Actual engagement economics should feed future pricing calibration.

Useful outcome data may include sold price, actual delivery cost, actual role hours, gross margin, scope changes, delivery friction, timeline variance, client outcome, and human reflection.

One engagement should not automatically change agency pricing.

Repeated patterns may become candidates for review.

The learning path is:

Pricing Decision → Delivery → Actual Economics → Outcome → Human Reflection → Pricing Pattern Candidate → Human Validation → Pricing Source Update

## **27\. Permanent Pricing Guardrails**

`CURRENT_PRICING_OVERRIDES_HISTORICAL_PRICING`

`COMPANY_SIZE_DOES_NOT_DETERMINE_OFFER`

`MATCH_SOLUTION_TO_PROBLEM_COMPLEXITY`

`DWY_IS_NOT_A_CURRENT_SIMPLICREATIVE_OFFER`

`BLUEPRINT_IS_NOT_A_MANDATORY_FOUNDATION_GATE`

`TEMPLATE_PRICE_DOES_NOT_OVERRIDE_TEMPLATE_ELIGIBILITY`

`CLIENT_BUDGET_DOES_NOT_JUSTIFY_UNCHANGED_SCOPE_DISCOUNT`

`HOURS_VALIDATE_ECONOMICS. HOURS_DO_NOT_DEFINE_CLIENT_VALUE.`

`AI_MAY_RECOMMEND_PRICE. HUMAN_APPROVES_PRICE.`

`MISSING_PRICING_DOES_NOT_AUTHORIZE_AI_TO_INVENT_PRICE`

`HISTORICAL_PROPOSAL_DOES_NOT_OVERRIDE_CURRENT_PRICING`

`CLIENT_SPECIFIC_DISCOUNT_DOES_NOT_BECOME_AGENCY_PRICING`

## **28\. Pricing Traceability**

The preferred commercial trace is:

Inquiry → Client Objective → Problem Complexity → Offer Route → Scope → Required Deliverables → Delivery Responsibility → Complexity → Reference-Value Validation → Delivery Economics → Margin Validation → Recommended Fixed Price → Human Approval → Proposal → Actual Economics

The pricing system should make this reasoning inspectable rather than treating the final number as an isolated decision.

