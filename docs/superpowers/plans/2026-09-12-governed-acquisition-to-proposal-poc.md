# Governed Acquisition-to-Proposal POC Implementation Plan

> **For implementation:** Use `$superpowers:executing-plans` to carry out this plan task by task.

**Goal:** Rebuild the SimpliCreative POC as four polished, deterministic, click-through journeys from a synthetic ScoreApp lead to an approved proposal. Every AI recommendation must expose prospect evidence, governing-document citations, evidence status, AI confidence, unresolved issues, and role-based human approval.

**Architecture:** Keep FastAPI and Next.js, but replace disconnected seed artefacts with one canonical governed-journey fixture per prospect. A small journey service advances a persisted in-memory workflow only through approved gates. The frontend consumes that state to render an evidence-to-decision workspace rather than pretending to make live integrations or live AI calls.

**Tech stack:** FastAPI + Pydantic + pytest; Next.js App Router + TypeScript + Tailwind; existing Lucide icons; add `motion` for purposeful animation only. Respect `prefers-reduced-motion`.

## File map

| Area | Files |
| --- | --- |
| Contracts | `backend/app/schemas/models.py` |
| Fixture loading | `backend/app/core/data_loader.py`, `backend/app/data/governed_journeys.json` |
| Gate logic | `backend/app/services/journey_service.py` |
| API | `backend/app/api/routes.py` |
| Backend tests | `backend/tests/test_governed_journeys.py` |
| Client state | `frontend/src/lib/types.ts`, `frontend/src/lib/api.ts`, `frontend/src/lib/workflow.ts` |
| Shared visual system | `frontend/src/components/governance/*`, `frontend/src/styles/tokens.css`, `frontend/src/app/globals.css` |
| Journey pages | `frontend/src/app/page.tsx`, `frontend/src/app/prospects/[id]/**` |

## Task 1: Define governance-aware journey contracts

**Files:**
- Modify: `backend/app/schemas/models.py`
- Create: `backend/tests/test_governed_journeys.py`

**Step 1: Add the failing test**

```python
def test_journey_items_keep_evidence_separate_from_confidence(client):
    body = client.get('/api/journeys/cedar-strategy').json()
    recommendation = body['recommendation']
    assert recommendation['governance']['ai_confidence'] == 'high'
    assert recommendation['governance']['evidence_status'] == 'validated'
    assert recommendation['governance']['citations'][0]['document_id'].startswith('ENG-')
```

**Step 2: Run to verify it fails**

Run: `cd backend && pytest tests/test_governed_journeys.py -q`
Expected: failure because the endpoint and governance contracts do not exist.

**Step 3: Implement minimal contracts**

Add Pydantic models and string enums for `JourneyStage`, `EngagementRoute`, `EvidenceStatus`, `GoverningCitation`, `GovernanceMeta`, `ApprovalRecord`, `ScoreAppContext`, `DiagnosticBrief`, `EngagementRecommendation`, `JourneyWorkflow`, and `GovernedJourney`. `GovernanceMeta` must always include separate `evidence_status`, `ai_confidence`, citations, open questions, and conflicts.

```python
class GovernanceMeta(BaseModel):
    evidence_status: EvidenceStatus
    ai_confidence: Literal['high', 'medium', 'low']
    citations: list[GoverningCitation] = Field(min_length=1)
    open_questions: list[str] = []
    conflicts: list[str] = []
```

**Step 4: Run the test**

Run: `cd backend && pytest tests/test_governed_journeys.py -q`
Expected: import/model tests pass once fixture and route arrive in Tasks 2–3; leave test isolated from unavailable legacy routes.

**Step 5: Commit**

Do not commit yet; Tasks 1–4 are one coherent backend change.

## Task 2: Create the canonical synthetic journey fixture and loader

**Files:**
- Create: `backend/app/data/governed_journeys.json`
- Modify: `backend/app/core/data_loader.py`
- Modify: `backend/tests/test_governed_journeys.py`

**Step 1: Extend tests**

```python
def test_four_routes_are_represented_and_marked_synthetic(client):
    journeys = client.get('/api/journeys').json()
    assert {j['recommended_route'] for j in journeys} == {
        'simpli_blueprint', 'simpli_foundation', 'templated_wordpress', 'simpli_care'
    }
    assert all(j['synthetic_disclaimer'] for j in journeys)
```

**Step 2: Run to verify failure**

Run: `cd backend && pytest tests/test_governed_journeys.py -q`
Expected: fixture/list endpoint missing.

**Step 3: Build four deterministic case files**

The JSON is the only source for rendered demo content. Include exactly four fictional companies:

- `cedar-strategy` → **SimpliBlueprint**: material strategic uncertainty remains.
- `atlas-health` → **SimpliFoundation**: bespoke build with complexity and margin validation.
- `harbor-advisory` → **Templated WordPress**: explicitly passes product eligibility.
- `northstar-services` → **SimpliCARE**: ongoing optimisation/support after a sound foundation.

Each record must contain: fictional prospect profile; `Synthetic ScoreApp import`; `Synthetic website evidence review`; diagnostic hypotheses; synthetic transcript; simulated returned questionnaire; recommendation; scope; pricing; proposal; workflow; approvals; and simulated HubSpot status. Never name or imply a real company, client system, metric, transcript, or integration.

For every generated item, include `governance` with current-document citation IDs and versions. Preserve an explicit `synthetic_disclaimer` at journey and source level.

Foundation pricing includes an `internal_only` rationale with complexity dimensions, deliverables, internal-reference validation, delivery-cost assumption, margin validation, risk notes, and recommended fixed price. Its proposal object must exclude costs, margin, and internal rationale.

**Step 4: Add loader functions**

```python
def governed_journeys() -> list[dict]: ...
def governed_journey(prospect_id: str) -> dict: ...
def reset_governed_runtime() -> None: ...
```

Deep-copy fixture content into runtime state so actions can mutate only the live demo session and tests can reset it.

**Step 5: Run tests**

Run: `cd backend && pytest tests/test_governed_journeys.py -q`
Expected: list-data test now passes when Task 3 exposes it.

## Task 3: Implement deterministic reveals and approval gates

**Files:**
- Create: `backend/app/services/journey_service.py`
- Modify: `backend/app/api/routes.py`
- Modify: `backend/tests/test_governed_journeys.py`

**Step 1: Write failing workflow tests**

```python
def test_pricing_cannot_be_revealed_until_scope_is_approved(client):
    response = client.post('/api/journeys/atlas-health/actions', json={
        'action': 'reveal_pricing', 'actor': 'Authorized SimpliCreative reviewer'
    })
    assert response.status_code == 409
    assert response.json()['detail']['blocked_by'] == 'scope_approval'

def test_approval_is_role_based_and_audited(client):
    response = client.post('/api/journeys/cedar-strategy/actions', json={
        'action': 'approve_recommendation', 'actor': 'Maya Chen', 'reason': 'Fit validated'
    })
    approval = response.json()['workflow']['approval_history'][-1]
    assert approval['role'] == 'Authorized SimpliCreative reviewer'
    assert approval['actor'] == 'Maya Chen'
```

**Step 2: Run to verify failure**

Run: `cd backend && pytest tests/test_governed_journeys.py -q`
Expected: `404` or missing actions endpoint.

**Step 3: Add journey service and routes**

Expose:

```text
GET  /api/journeys
GET  /api/journeys/{prospect_id}
POST /api/journeys/{prospect_id}/actions
```

Implement actions as fixture-backed state transitions, never model calls:

```text
prepare_diagnostic → import_transcript → generate_questionnaire
→ review_returned_questionnaire → approve_recommendation → approve_scope
→ reveal_pricing → approve_pricing → reveal_proposal → approve_proposal
```

The CAM deliberately starts the flow with `prepare_diagnostic`. Every advance response returns the full updated journey plus an action-specific toast message. Store the human `actor`, reviewer role, timestamp, reason, and stage in approval history. Use a generic authorized reviewer role; remove any default approval copy that depends on Lei or CAM by name.

Gates:

| Action | Must already be true |
| --- | --- |
| Generate questionnaire | Transcript imported |
| Approve recommendation | Returned questionnaire reviewed and no blocking conflict |
| Approve scope | Recommendation approved |
| Reveal pricing | Scope approved |
| Approve pricing | Pricing revealed and no blocking validation issue |
| Reveal proposal | Pricing approved |
| Approve proposal | Proposal revealed |

`approve_proposal` updates the simulated HubSpot lifecycle to `Proposal sent`; never perform an external request.

**Step 4: Run backend tests**

Run: `cd backend && pytest tests/test_governed_journeys.py tests/test_demo_journeys.py -q`
Expected: pass. Repair legacy fixture assumptions only if a route contract is genuinely shared.

## Task 4: Test authority, confidentiality, and blocking behaviour

**Files:**
- Modify: `backend/tests/test_governed_journeys.py`
- Modify: `backend/app/services/journey_service.py`

**Step 1: Add tests**

```python
def test_foundation_internal_rationale_is_not_in_proposal(client):
    body = client.get('/api/journeys/atlas-health').json()
    assert body['pricing']['foundation_rationale']['internal_only'] is True
    assert 'margin' not in str(body['proposal']).lower()
    assert 'delivery-cost' not in str(body['proposal']).lower()

def test_unknown_or_invalid_action_is_rejected(client):
    response = client.post('/api/journeys/harbor-advisory/actions', json={
        'action': 'autonomously_send_proposal', 'actor': 'Maya Chen'
    })
    assert response.status_code == 422
```

**Step 2: Implement minimal safeguards**

Validate all cited sources against a fixed current-doc catalog (`GOV`, `ENG`, `DSG`, `PRICE` IDs/version values present in the fixture). Reject action requests that skip stage order or try to approve content with a blocking conflict. Keep open questions visible rather than silently “resolving” them. Keep the four supplied fixtures free of unresolved blocking conflicts so each demonstration path can reach proposal approval.

**Step 3: Run the full backend suite**

Run: `cd backend && pytest -q`
Expected: all tests pass.

**Step 4: Commit**

```bash
git add backend/app/schemas/models.py backend/app/core/data_loader.py backend/app/data/governed_journeys.json backend/app/services/journey_service.py backend/app/api/routes.py backend/tests/test_governed_journeys.py
git commit -m "feat: add governed deterministic journey backend"
```

## Task 5: Adapt frontend types, API client, and seven-stage workflow

**Files:**
- Modify: `frontend/src/lib/types.ts`
- Modify: `frontend/src/lib/api.ts`
- Modify: `frontend/src/lib/workflow.ts`
- Modify: `frontend/src/components/workflow/WorkflowRail.tsx`

**Step 1: Add failing type/build check**

Run: `cd frontend && npm run build`
Expected: existing build passes before contract migration; after intentionally replacing old types it fails until all pages migrate.

**Step 2: Implement generated contracts and client methods**

Mirror `GovernedJourney`, governance metadata, approvals, and action response. Add `getJourneys`, `getJourney(id)`, and `advanceJourney(id, payload)`. Do not retain API methods that simulate an upload/live-analysis request for the new flow.

Replace old rail stages with:

```ts
const journeyStages = [
  'Lead', 'Diagnostic', 'Questionnaire', 'Recommendation', 'Scope', 'Pricing', 'Proposal'
] as const;
```

The rail should convey pending, action-required, approved, and blocked states—not percentage progress alone.

**Step 3: Check**

Run: `cd frontend && npm run lint`
Expected: temporary page type errors are acceptable only until Tasks 7–10 complete.

## Task 6: Establish the premium visual system and governance primitives

**Files:**
- Modify: `frontend/package.json`, `frontend/package-lock.json`
- Create: `frontend/src/components/governance/EvidenceTrail.tsx`
- Create: `frontend/src/components/governance/ApprovalPanel.tsx`
- Create: `frontend/src/components/governance/ActionInbox.tsx`
- Create: `frontend/src/components/governance/HubSpotStatus.tsx`
- Create: `frontend/src/components/governance/ToastProvider.tsx`
- Modify: `frontend/src/styles/tokens.css`, `frontend/src/app/globals.css`, `frontend/src/components/layout/AppShell.tsx`

**Step 1: Install animation dependency before importing it**

Run: `cd frontend && npm install motion`
Expected: `motion` is added to dependency manifests.

**Step 2: Build shared components**

Use the existing teal foundation, a calm light canvas, editorial typography and sharply structured cards. Avoid gradients, glassy cards, fake browser chrome, and decorative AI sparkles. Keep the UI dense enough for an internal decision workspace while retaining generous focal areas.

`EvidenceTrail` must render source type, synthetic label, a short quoted fact, evidence status, confidence, and document ID/version. `ApprovalPanel` must show the exact decision, citations, open questions/conflicts, approval record, and only the one valid next action. `ActionInbox` lists items requiring a human decision. `HubSpotStatus` always says `Simulated HubSpot update`.

```tsx
<EvidenceTrail items={decision.governance.citations} />
<ApprovalPanel decision={journey.recommendation} workflow={journey.workflow} />
```

Add a toast provider for action feedback. Use `motion` for a short prepare-diagnostic transition, staggered evidence reveal, stage transition, Foundation factor reveal, and proposal-approved confirmation. Include a global reduced-motion override:

```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after { animation-duration: 0.01ms !important; transition-duration: 0.01ms !important; }
}
```

Make `AppShell` responsive; do not trap narrower screens in fixed-height nested scroll panes.

**Step 3: Verify**

Run: `cd frontend && npm run lint && npm run build`
Expected: components compile; any remaining errors belong to unconverted route pages.

## Task 7: Rebuild the dashboard and lead workspace

**Files:**
- Modify: `frontend/src/app/page.tsx`
- Modify: `frontend/src/app/prospects/[id]/page.tsx`
- Modify: `frontend/src/components/prospects/ProspectList.tsx` (or replace if currently coupled to old list shape)
- Create: `frontend/src/components/journey/LeadCaseFile.tsx`

**Step 1: Replace manual intake with the internal workspace**

The home page shows the four synthetic imported ScoreApp leads, next action, recommended route only once revealed, and lifecycle status. Clearly label the data environment “Synthetic demonstration workspace.” The browser never depicts a public self-assessment or a real ScoreApp login.

**Step 2: Build the Lead case file**

At `/prospects/[id]`, display a concise company profile, the synthetic ScoreApp answer/result card, website-evidence review, evidence trail, assignment/status, and single primary CTA **Prepare Diagnostic**. Before that action the diagnostic content remains a hypothesis preview, not a completed audit. Trigger the deterministic action and toast, then route to Diagnostic.

**Step 3: Verify interaction**

Run frontend and use the four cards. Expected: every case opens; clicking Prepare Diagnostic advances only that case and the next stage is visually clear.

## Task 8: Build Diagnostic and Questionnaire stages

**Files:**
- Create: `frontend/src/app/prospects/[id]/diagnostic/page.tsx`
- Modify: `frontend/src/app/prospects/[id]/questionnaire/page.tsx`
- Create: `frontend/src/components/journey/DiagnosticBrief.tsx`
- Create: `frontend/src/components/journey/QuestionnaireReview.tsx`

**Step 1: Diagnostic page**

Render the short evidence-led hypothesis brief, FAST/scorecard context, what the CAM should validate, and explicitly visible unknowns. The only action imports `Synthetic Fathom transcript`, then records the stage transition. Do not represent it as a real Fathom connection.

**Step 2: Questionnaire page**

Generate the deterministic personalized questionnaire after transcript import. Show question source classification (`Confirm`, `Required`, `Optional`, `Suppress`), the reason each question appears, and transcript/evidence references. Simulate the client return with an explicit `Simulate returned questionnaire` action. The reviewer must inspect unknown/low-confidence fields before advancing.

**Step 3: Verify all four paths**

Expected: the entire lead → diagnostic → questionnaire interaction works for each case and evidence does not get mistaken for a diagnosis.

## Task 9: Add recommendation and scope review, with legacy route compatibility

**Files:**
- Create: `frontend/src/app/prospects/[id]/recommendation/page.tsx`
- Modify: `frontend/src/app/prospects/[id]/assessment/page.tsx`
- Modify: `frontend/src/app/prospects/[id]/scope/page.tsx`
- Create: `frontend/src/components/journey/RecommendationDecision.tsx`
- Create: `frontend/src/components/journey/ScopeReview.tsx`

**Step 1: Recommendation stage**

Show one recommended engagement, why alternatives were not selected, strategic/commercial/proposal readiness, known gaps, evidence trail, governing docs, separate confidence/evidence status, and authorized reviewer approval. It must not imply route selection is autonomous or a sales commitment.

**Step 2: Scope stage**

Expose the route-specific scope before pricing: in/out, assumptions, dependencies, milestones, client responsibilities, and governance references. Require scope approval before enabling pricing. The existing `/assessment` route should redirect to `/recommendation` to protect any old links.

**Step 3: Verify gates**

Attempt to navigate directly to pricing in a fresh workflow. Expected: a blocked state with an explanation and return-to-scope CTA, never a price.

## Task 10: Build pricing and proposal review views

**Files:**
- Modify: `frontend/src/app/prospects/[id]/pricing/page.tsx`
- Modify: `frontend/src/app/prospects/[id]/proposal/page.tsx`
- Create: `frontend/src/components/journey/FoundationPricingRationale.tsx`
- Create: `frontend/src/components/journey/ProposalPreview.tsx`

**Step 1: Pricing view**

Make price unavailable until approved scope is present. The Foundation case gets a clearly marked internal pricing panel with complexity dimensions, deliverables, reference validation, cost assumption, target-margin validation, risk/assumption notes, and recommended fixed price. The three other routes show their appropriate commercial rationale without inventing Foundation-style calculations.

Use a small sequential reveal for Foundation factors only after clicking `Reveal pricing`. Price approval is a separate reviewer event.

**Step 2: Proposal view**

Render a polished external-facing draft only after price approval: problem framing, recommended engagement, approved scope, milestones, investment, assumptions, next step. It must show citations and confidence in the internal review rail, but no margin, delivery cost, or internal reference value in the proposal body. `Approve proposal` writes the simulated HubSpot update and shows a restrained confirmation motion/toast.

**Step 3: Check output separation**

Run: `cd frontend && npm run build`
Expected: build passes.

Manually inspect Atlas Health: internal rationale is available on Pricing, while Proposal contains none of its internal pricing fields.

## Task 11: Document the demonstration, verify end-to-end, and ship

**Files:**
- Create: `README.md` section or `docs/POC_DEMO_GUIDE.md`
- Modify: only files required by visual/accessibility fixes discovered in verification

**Step 1: Write demo guide**

Document the four journeys, their intended recommended engagement, the exact click path, what is deliberately synthetic, and the non-negotiable governance story:

1. Leads are pre-imported synthetic ScoreApp records.
2. CAM begins diagnostic deliberately.
3. Synthetic Fathom transcript and simulated questionnaire return supply evidence.
4. AI outputs are deterministic drafts with evidence/citations/confidence.
5. Authorized reviewers approve recommendation, scope, pricing, and proposal.
6. HubSpot updates are simulated only.

**Step 2: Automated verification**

Run:

```bash
cd backend && pytest -q
cd ../frontend && npm run lint && npm run build
```

Expected: all pass.

**Step 3: Browser verification**

For each of Cedar Strategy, Atlas Health, Harbor Advisory, and Northstar Services:

- Advance every stage using only valid actions.
- Confirm the engagement matches its intended route.
- Confirm every decision has prospect evidence, a governing-doc ID/version, separate evidence status and confidence, and approval history.
- Confirm blocked actions explain what approval/evidence is missing.
- Confirm the Foundation’s internal pricing rationale is absent from the proposal.
- Confirm synthetic labels are always visible and the simulated HubSpot status changes only after proposal approval.
- Check desktop and narrow layout, keyboard focus visibility, contrast, and reduced motion.

**Step 4: Final review and commit**

Run: `git diff --check`
Expected: no whitespace errors.

```bash
git add backend frontend README.md docs
git commit -m "feat: rebuild governed SimpliCreative POC journey"
```

## Delivery acceptance criteria

- Four fictional, complete click-through journeys cover Blueprint, Foundation, Templated WordPress, and CARE.
- The POC begins inside the workspace with pre-imported synthetic ScoreApp leads; no live external system is implied.
- The full order is enforced: lead → diagnostic → questionnaire → recommendation → scope → pricing → proposal.
- Every AI draft is deterministic and provides cited governing evidence, evidence status, AI confidence, issues, and review state.
- Pricing follows approved scope; Foundation shows its internal complexity/margin-validation rationale only internally.
- Approval is role-based and audit-recorded, never dependent on one named person.
- Every route prevents invalid forward movement and explains why.
- UI feels distinctly SimpliCreative: calm, strategic, precise, animated with restraint, and accessible.
