# POC workflow UI refresh

**Status:** Approved for implementation  
**Date:** 2026-08-25

## Goal

Make every seed prospect demoable from analysis through proposal. Give each workflow screen one obvious next action in the same place.

## Scope

### Complete seed journeys

ABC Company, XYZ Corp, and Northline Health get static transcript, evidence, intelligence, questionnaire, assessment, FAST readiness, scope, pricing, and proposal data. Each journey uses different service combinations and business context so the demo does not look duplicated.

The prospect list retains its existing stages to show varied work-in-progress states. Any item can still be opened at any workflow step for a complete demo.

### Assessments hub

Replace the bare company list at `/assessments` with an action-oriented hub.

- Header explains that this is the review point between discovery and commercial planning.
- Summary counts show needs review, in progress, and approved assessments.
- Each prospect card shows company, workflow stage, review state, short summary, and one primary action.
- The primary action points to the next incomplete stage based on `next_action`, rather than always opening the assessment.

### Workflow rail

Create one reusable sticky `WorkflowRail` component for questionnaire, assessment, scope, pricing, and proposal pages. The prospect intelligence view uses the same layout after analysis is complete.

The rail shows:

1. Seven fixed steps: Analyze, Questionnaire, Assessment, Scope, Pricing, Proposal.
2. Current stage and review status.
3. One full-width primary CTA for the next step.
4. A secondary back link where it is useful.

The questionnaire footer CTA is removed. Its next step moves to the right rail. After analysis completes, the prospect page shows the next action in a right rail next to the intelligence brief, instead of the header action row.

## Data behavior

No external integrations are added. Existing JSON seed files remain the source of truth. The mock provider continues to produce safe fallback content for pasted prospects.

The work queue and assessment hub resolve CTA targets from the same action-to-route mapping. That mapping covers `review_questionnaire`, `review_assessment`, `review_scope`, `review_pricing`, `review_proposal`, and `proposal_approved`.

## UI behavior

- Button labels use task language: Review questionnaire, Review assessment, Review scope, Review pricing, Review proposal, or Open proposal.
- The active workflow step uses the primary color. Earlier steps use a completed treatment. Later steps remain muted.
- A completed proposal has no forward CTA; it shows a concise POC 1 completion note.
- All content remains usable at narrow widths: the rail follows content below the main column.

## Verification

- API seed check confirms all four prospects return every artifact type.
- The assessment hub renders count cards and routes every primary CTA correctly.
- Each workflow route renders its rail and only one primary next-step CTA.
- Questionnaire has no bottom continuation CTA.
- Production frontend build and backend FAST suite pass.
