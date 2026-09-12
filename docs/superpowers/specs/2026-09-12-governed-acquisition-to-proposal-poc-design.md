# Governed Acquisition-to-Proposal POC Design

## Purpose

Enhance the SimpliCreative internal POC into a reliable demonstration of the intended acquisition-to-proposal workflow. The POC begins with an imported ScoreApp lead and follows the governed process through Diagnostic preparation, questionnaire review, engagement routing, scope, pricing, proposal approval, and simulated HubSpot progression.

The POC demonstrates the client-defined future-state process. It does not claim live integrations or autonomous commercial decision making.

## Scope

The POC contains four complete, deterministic lead journeys:

| Journey | Recommended route | Purpose |
| --- | --- | --- |
| Strategic uncertainty | SimpliBlueprint | Show that implementation is not recommended before material strategic questions are resolved. |
| Custom implementation | SimpliFoundation | Show custom implementation scope, complexity, delivery economics, margin validation, and fixed-price recommendation. |
| Productized implementation | Templated WordPress | Show that the productized route requires established strategy and genuine eligibility. |
| Ongoing responsibility | SimpliCARE | Show that recurring work requires an approved responsibility, scope, cadence, and commercial boundary. |

Every journey is fully click-through from imported lead through proposal review. The POC starts after paid acquisition and ScoreApp completion. It does not build a public ad, landing page, ScoreApp form, real integration, or live external communication.

## Workflow

```text
Imported ScoreApp lead
  -> Authorized employee reviews lead
  -> Prepare Diagnostic
  -> Diagnostic brief and website/context evidence
  -> Fathom transcript imported
  -> Generate questionnaire
  -> Questionnaire reviewed and returned by simulated client
  -> Review engagement recommendation
  -> Approve scope
  -> Review and approve pricing
  -> Review and approve proposal
  -> Simulated HubSpot lifecycle update
```

The user must explicitly advance each AI-prepared stage. The product never automatically commits a route, scope, price, proposal, or external action.

## Source Authority and Evidence

Every AI-prepared observation, question, recommendation, scope item, pricing factor, and proposal claim displays:

- Prospect evidence citation, with source type and excerpt.
- Governing SimpliCreative document citation, including document identifier and version.
- Source authority classification.
- Evidence status: reported, observed, supported, hypothesis, validated, contradicted, or missing.
- AI confidence.
- Open questions and material conflicts.
- Required human approval state.

AI confidence must not be represented as evidence quality. A low-quality or unvalidated source remains low-quality or unvalidated even when the AI is confident.

The POC uses the current governing documents from the master knowledge folder, including acquisition, Diagnostic, Blueprint, Foundation, Templated WordPress, CARE, pricing, governance, and engineering handoff sources. Historical pricing and historical commercial examples must never override current pricing authority.

## Data Model

Each fictional lead is a governed case file containing:

```text
Lead
├─ acquisition context
│  ├─ ScoreApp answers and results
│  ├─ campaign and source context
│  └─ company and website details
├─ Diagnostic context
│  ├─ pre-call evidence and hypotheses
│  ├─ Diagnostic brief
│  └─ Fathom transcript
├─ discovery context
│  ├─ personalized questionnaire
│  ├─ returned answers
│  └─ unresolved questions
├─ commercial context
│  ├─ engagement recommendation
│  ├─ scope draft
│  ├─ pricing rationale
│  └─ proposal draft
└─ governance context
   ├─ citations and source metadata
   ├─ evidence status and confidence
   ├─ human edits
   └─ approval history
```

ScoreApp is represented as the source of assessment responses and results. HubSpot is represented as the CRM/lifecycle destination. The internal workspace preserves the decision trace, source evidence, human edits, and approvals.

## Deterministic Demo Behavior

All prospect and integration data is fictional and visibly labeled as synthetic. The POC must label imports and evidence with examples such as:

- Synthetic ScoreApp import
- Synthetic Fathom Diagnostic transcript
- Synthetic website evidence review
- Synthetic questionnaire return
- Simulated HubSpot update

Clicking a generation action reveals prepared, deterministic output. The interaction demonstrates the intended AI workflow without making live external calls. The POC must not imply that it accessed a live ScoreApp, HubSpot, Fathom, analytics account, prospect website, DocuSign account, or client data.

## Role-Based Approval

Approvals are assigned to authorized SimpliCreative employees, not named individuals. Every approval record includes reviewer identity, timestamp, decision, optional edits, and rationale.

An authorized employee can approve or reject an AI-prepared stage. A rejection returns the item to the appropriate earlier stage with a reason. The original AI output remains available after human edits. Missing required data, unresolved material conflicts, or incomplete commercial inputs block downstream stages.

## Scope and Pricing

AI drafts scope only after an engagement route is approved. The scope contains objective, proposed work, deliverables, phases, inclusions, exclusions, assumptions, dependencies, client responsibilities, risks, and open questions.

Pricing starts only after scope approval. The POC must show pricing rationale appropriate to the recommended route:

- SimpliBlueprint: standard pricing where eligible and visible custom-review triggers.
- Templated WordPress: route eligibility, direct or partner pricing, and approved add-ons.
- SimpliFoundation: complexity dimensions, required deliverables, internal reference-value validation, delivery-cost assumptions, expected gross margin, risk/dependency flags, and recommended fixed investment.
- SimpliCARE: approved ongoing responsibility, scope, cadence, exclusions, and monthly investment rationale.

Foundation detailed economics are internal-only. Client-facing proposals receive only approved scope, investment, assumptions, and terms. AI may recommend pricing but cannot invent prices, approve exceptions, or generate a client-ready proposal before required scope and price approval.

## User Experience

The interface is a premium, internal strategy workspace aligned with SimpliCreative's clarity, control, and confidence positioning. It is not a generic analytics dashboard.

Design direction:

- Calm light surface with teal as the single key accent.
- Strong editorial hierarchy and asymmetric emphasis for high-consequence decisions.
- Lead case-file workspace with acquisition context, evidence, workflow state, and next approval.
- Visible evidence-to-decision trail on every workflow page.
- Purposeful, reduced-motion-safe transitions that communicate state changes.
- Action inbox for items requiring human judgment.
- Transient confirmation toasts for completed actions.

Motion communicates assembly, progress, approval, or decision transition. It is never added solely as decoration.

Key pages:

- Lead workspace
- Diagnostic brief
- Questionnaire review
- Engagement recommendation
- Scope review
- Pricing review
- Proposal review
- Approval and activity history

## Simulated HubSpot Lifecycle

Each case shows the lifecycle state that would sync to HubSpot:

```text
Imported Lead
-> Assessment Complete
-> Diagnostic Booked
-> Diagnostic Complete
-> Qualified Opportunity
-> Proposal Ready
-> Proposal Sent
```

These updates are explicitly presented as simulations. HubSpot source truth must never be overwritten with AI inference.

## Validation

The POC is complete only when it proves these behaviors:

| Scenario | Required behavior |
| --- | --- |
| Strategic uncertainty | Recommends SimpliBlueprint rather than premature implementation. |
| Custom website complexity | Recommends SimpliFoundation and exposes complete internal pricing rationale. |
| Bounded implementation | Recommends Templated WordPress only after demonstrating eligibility. |
| Ongoing responsibility | Recommends SimpliCARE with explicit scope and cadence. |
| Missing information | Blocks scope or pricing and requests human review. |
| Conflicting evidence | Shows the conflict without silently deciding. |
| Historical price | Cannot override current commercial authority. |
| Unapproved commercial state | Cannot produce a client-ready proposal. |
| Synthetic integrations | Never represented as live connected systems. |

## Out of Scope

- Public paid-ad experiences and landing pages.
- Live ScoreApp, HubSpot, Fathom, Monday, Google Drive, Google Docs, DocuSign, or analytics integrations.
- Real client data, real prospect websites, or real external communications.
- Production authentication, permissions, and full audit logging.
- CARE data integrations and performance-report generation beyond the deterministic CARE prospect-to-proposal journey.
- Autonomous routing, pricing, approval, sending, publishing, or spending.
