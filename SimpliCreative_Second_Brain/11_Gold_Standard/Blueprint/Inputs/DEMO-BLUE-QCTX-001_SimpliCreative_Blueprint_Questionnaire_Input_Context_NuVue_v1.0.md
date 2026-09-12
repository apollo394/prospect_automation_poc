# Blueprint Questionnaire Input Context — NuVue Demo
Version: 1.0
Classification: CLIENT_BOUND_DEMO_FIXTURE
Purpose: Demonstrate how known client context is converted into a personalized Blueprint questionnaire without treating prior inputs as automatically validated facts.

## Source Context
- Executive Diagnostic / prior conversations: known business context and strategic concerns.
- Client-provided questionnaire responses: NuVue Website Strategy Questionnaire.
- CRM / relationship context: existing client/prospect information when available.
- Public / analytical research: separate evidence stream, not represented as client-provided fact.
- Downstream Blueprint and Foundation outputs: evaluation references only. They must not be used to backfill what was supposedly known before the questionnaire.

## Question Classification Rules
- CONFIRM: Prior client context exists, but the client should verify or update it.
- REQUIRED: Material strategic information is missing, unresolved, contradictory, or necessary for Blueprint analysis.
- OPTIONAL: Useful context that can improve analysis but is not required to proceed.
- SUPPRESS: Reliable current information already exists and asking again would add unnecessary friction. Suppression must preserve source provenance and freshness.

## Known Client-Provided Context Used for Personalization
1. Business: B2B sales and leadership training company, 24+ years, 101+ ready-to-train workshops.
2. Primary buyers named by client: VP Sales, Heads of HR, business unit leaders; broader buying committee includes training, enablement, owners, country managers, and C-suite.
3. Priority industries: Agriculture, Manufacturing, Insurance.
4. Strategic ambition: grow toward a $10M company and become known for sales training with guaranteed results.
5. Priority offerings: CSP Guarantee, Executive Coaching, Ag Sales Onboarding, Public Seminars, sales curricula/subscriptions, workshop portfolio.
6. Buying model: B2B cohorts and multi-year curricula; public seminars can support existing clients, smaller teams, or preview behavior.
7. Existing content/proof: testimonials, ROI Impact Evaluations, Wilson Learning materials, webinars, short-form video, downloadable resources.
8. Technology: Google Analytics; Zoho CRM, Bookings, Sign, Landing Pages; LMS decision not fully resolved.
9. Paid distribution plans exist, but campaign tracking and funnel definitions were still developing.
10. Website success was described directionally as more SEO/AEO traffic, more form completion, and more online transactions.

## Material Items Requiring Confirmation or Clarification
### Guarantee eligibility conflict
- One client response describes the guarantee for companies with 100+ salespeople.
- Another response says the ideal candidate has 1,000+ sales reps.
- Another response says the offer is not open to companies with fewer than 100 reps.
- REQUIRED: Confirm the actual eligibility threshold and distinguish minimum qualification from ideal account size.

### Conversion definition
- Client stated the funnel was still being built and the website conversion definition needed development.
- REQUIRED: Define which actions should represent meaningful conversion for corporate, individual, guarantee, and transactional journeys.

### Buyer priority
- Client identifies VP Sales / enterprise buyers as primary while also naming HR/L&D and individual seminar buyers.
- CONFIRM: Clarify primary growth audience, secondary audiences, and where the website should intentionally prioritize each.

### Offer architecture
- Client names multiple offers and a multi-year curriculum model.
- REQUIRED: Clarify which offers are acquisition entry points, expansion offers, transactional offers, and enterprise-only offers.

### Proof and claims
- Client supplied guarantee language, ROI-related results, client relationships, workshop counts, and experience claims.
- REQUIRED: Identify source/owner for material externally published claims. Client-provided status is preserved; publication substantiation is a separate gate.

## Suppression Examples
Do not ask from scratch:
- "What industry are you in?"
- "Do you use a CRM?"
- "Do you have testimonials?"
- "Do you offer public seminars?"
Instead confirm or ask the narrower strategic question that remains unresolved.

## Expected Questionnaire Behavior
The client-facing output should:
- acknowledge what SimpliCreative already knows;
- ask fewer, better questions;
- make confirmation easy;
- isolate contradictions;
- avoid forcing the client to repeat known information;
- distinguish strategic decisions from factual updates;
- leave room for documents/evidence to be attached;
- avoid implying that client-provided claims have been independently verified.

## Evaluation Standard
A passing system should produce a questionnaire materially similar in intent to the Gold-Standard demo:
KNOWN CONTEXT -> CONFIRM / REQUIRED / OPTIONAL / SUPPRESS -> CLIENT RESPONSE -> VALIDATION / RECONCILIATION -> BLUEPRINT RESEARCH AND ANALYSIS
