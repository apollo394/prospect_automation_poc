# FAST readiness in POC 1

**Status:** Approved design, pending implementation plan  
**Date:** 2026-08-25

## Purpose

Bring SimpliCreative's FAST website delivery framework into POC 1 as a visible, evidence-backed readiness view in the Strategic Assessment.

FAST means:

- Flexible: brand-aligned templates and drag-and-drop publishing.
- Accessible: responsive behavior, ADA considerations, and performance.
- Strategic: messaging and visuals that support conversion and AI/search discovery.
- Trackable: measurement from first touch through conversion to prove ROI.

FAST is a website delivery framework. It is not a prospect qualification score or a replacement for strategist judgment.

## Scope

### Assessment

Add a FAST readiness card to each prospect's Strategic Assessment. It contains four pillars, each with:

- `status`: `ready`, `needs_work`, or `needs_validation`
- `finding`: plain-language assessment of the current situation
- `evidence_ids`: references to transcript evidence where the finding is grounded in the call
- `suggested_action`: the next delivery or discovery action
- `service_ids`: relevant recommended services, when applicable

The card has no overall score, weighted calculation, or automatic approval.

### Review behavior

The strategist can edit a FAST finding and its suggested action, regenerate the static draft, and approve the assessment through the existing review controls. FAST statuses remain visible after approval as a record of the rationale behind the engagement.

### Commercial handoff

Approved FAST data flows forward without creating a separate workflow:

- Scope phases label deliverables with relevant FAST pillars.
- Pricing line items show a short FAST rationale where it helps explain the investment.
- Proposal contains a "How this engagement addresses FAST" section with the four approved findings and actions.

## Apex Metrics demo data

The seeded Apex Metrics assessment demonstrates every pillar:

| Pillar | Status | Finding | Suggested action |
|---|---|---|---|
| Flexible | Needs validation | Marketing needs to publish and update pages without engineering tickets. | Confirm CMS, reusable page modules, and approval workflow. |
| Accessible | Needs work | Existing site quality and responsive/performance baseline have not been validated. | Run accessibility, responsive, and performance review during discovery. |
| Strategic | Needs work | Positioning and the core site narrative do not clearly explain differentiation or conversion paths. | Build message architecture, conversion paths, and search-ready content structure. |
| Trackable | Needs work | The desired outcome is qualified opportunities, but first-touch-to-conversion measurement is not defined. | Define analytics events, attribution fields, and reporting for qualified opportunities. |

Every call-derived statement links to existing transcript evidence. The accessible finding is marked as a validation gap, not as a claim that the site fails ADA or performance requirements.

## Data and API shape

Extend the assessment schema with:

```json
{
  "fast_readiness": [
    {
      "pillar": "flexible",
      "label": "Flexible",
      "status": "needs_validation",
      "finding": "...",
      "evidence_ids": ["ev-cf-04"],
      "suggested_action": "...",
      "service_ids": ["svc-development"]
    }
  ]
}
```

The existing assessment `GET`, create, action, and regeneration endpoints retain their paths. The current edit action accepts `fast_readiness` as a whole-array edit, which keeps the POC API small.

Static JSON seeds remain the source for Apex Metrics. For pasted-transcript prospects, the mock provider creates the same four-pillar shape with `needs_validation` where the transcript does not support a firm finding.

## UI

Place the FAST readiness card on the assessment page after the executive assessment sections and before Recommended Services. Each pillar row includes:

- Pillar label and status pill
- Finding
- Evidence links or a "Needs validation" note
- Suggested action
- Linked service names

Scope, Pricing, and Proposal show compact FAST references. The assessment is the only page that exposes the full card and allows edits.

## Guardrails

- Do not calculate or imply an overall FAST score.
- Do not make compliance, accessibility, performance, ROI, or conversion claims without evidence.
- Do not infer a service recommendation from FAST alone; it supports existing assessment evidence and human review.
- Keep all POC data static or mock-generated. No website crawler, analytics connector, or live Fathom connection is introduced.

## Verification

- Seed validation: Apex Metrics has exactly four FAST pillars with valid statuses.
- API validation: assessment get/create/action returns and preserves `fast_readiness`.
- UI check: all four pillars render; status, action, evidence state, and linked services render correctly.
- Flow check: approved FAST content is visible in the Apex scope, pricing, and proposal views.
