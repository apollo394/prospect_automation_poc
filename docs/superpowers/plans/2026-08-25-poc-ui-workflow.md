# POC workflow UI refresh implementation plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Make every prospect demoable through Proposal and give users one clear, consistent next action across POC 1.

**Architecture:** Keep static JSON seed data and current FastAPI routes. Add a single frontend workflow configuration and reusable right rail. The assessment hub derives its cards from the existing prospect list and uses the same next-action routes as the workflow rail.

**Tech Stack:** FastAPI, JSON seed data, Python `unittest`, Next.js App Router, React, TypeScript, Tailwind.

---

## File map

| File | Change |
|---|---|
| `backend/app/data/*.json` | Add complete static artifacts for ABC Company, XYZ Corp, and Northline Health. |
| `backend/tests/test_demo_journeys.py` | Validate all four seed prospects have the full artifact set. |
| `frontend/src/lib/workflow.ts` | Define action-to-route and ordered workflow-stage metadata. |
| `frontend/src/components/workflow/WorkflowRail.tsx` | Render shared status, progress, back, and next action UI. |
| `frontend/src/app/assessments/page.tsx` | Replace the bare list with an action-oriented hub. |
| `frontend/src/components/prospect/ProspectIntelligenceBrief.tsx` | Remove its footer CTA. |
| `frontend/src/app/prospects/[id]/page.tsx` | Put the post-analysis next CTA in the shared rail. |
| `frontend/src/app/prospects/[id]/questionnaire/page.tsx` | Move continuation from footer to rail. |
| `frontend/src/app/prospects/[id]/assessment/page.tsx` | Replace bespoke rail controls. |
| `frontend/src/app/prospects/[id]/scope/page.tsx` | Replace bespoke rail controls. |
| `frontend/src/app/prospects/[id]/pricing/page.tsx` | Replace bespoke rail controls. |
| `frontend/src/app/prospects/[id]/proposal/page.tsx` | Replace bespoke rail controls. |

### Task 1: Add complete static demo journeys

**Files:**
- Modify: `backend/app/data/transcripts.json`, `evidence.json`, `insights.json`, `questionnaires.json`, `assessments.json`, `scopes.json`, `pricings.json`, `proposals.json`
- Create: `backend/tests/test_demo_journeys.py`

- [ ] **Step 1: Write a failing seed-completeness test**

```python
import unittest

from app.services import analysis_service, assessment_service, commercial_service, questionnaire_service


class DemoJourneysTests(unittest.TestCase):
    def test_every_seed_prospect_has_a_complete_poc_one_journey(self):
        for prospect_id in ("apex-metrics", "abc-company", "xyz-corp", "northline-health"):
            self.assertIsNotNone(analysis_service.get_transcript(prospect_id))
            self.assertTrue(analysis_service.get_intelligence(prospect_id).summary)
            self.assertGreater(len(questionnaire_service.get_or_create_questionnaire(prospect_id).questions), 0)
            self.assertEqual(len(assessment_service.get_or_create_assessment(prospect_id).fast_readiness), 4)
            self.assertGreater(len(commercial_service.get_scope(prospect_id).phases), 0)
            self.assertGreater(len(commercial_service.get_pricing(prospect_id).line_items), 0)
            self.assertEqual(len(commercial_service.get_proposal(prospect_id).fast_readiness), 4)
```

- [ ] **Step 2: Run the test and confirm it fails for the three incomplete seed prospects**

Run: `cd backend && ../.venv/bin/python -m unittest discover -s tests -p test_demo_journeys.py -v`  
Expected: missing transcript or incomplete artifact assertion.

- [ ] **Step 3: Add differentiated static data**

Add a 5–7 segment Fathom-style transcript, 4–6 evidence rows, 6–9 insights, six questionnaire questions, one assessment with four FAST records, a phased scope, demo pricing, and proposal for each prospect. Use these narratives:

- ABC Company: B2B security firm replacing an aging WordPress site before a Series B launch.
- XYZ Corp: SaaS portfolio consolidating three acquired brands into a shared web system.
- Northline Health: regional healthcare network improving referral conversion and accessibility confidence.

Each assessment must use the order Flexible, Accessible, Strategic, Trackable. Each commercial artifact must include FAST handoff fields already required by the Pydantic models.

- [ ] **Step 4: Run the seed-completeness test**

Run: `cd backend && ../.venv/bin/python -m unittest discover -s tests -p test_demo_journeys.py -v`  
Expected: `OK`.

### Task 2: Add shared workflow metadata and rail

**Files:**
- Create: `frontend/src/lib/workflow.ts`
- Create: `frontend/src/components/workflow/WorkflowRail.tsx`

- [ ] **Step 1: Define the action mapping**

```ts
export const workflowSteps = [
  { key: "analyze", label: "Analyze" },
  { key: "questionnaire", label: "Questionnaire" },
  { key: "assessment", label: "Assessment" },
  { key: "scope", label: "Scope" },
  { key: "pricing", label: "Pricing" },
  { key: "proposal", label: "Proposal" },
] as const;

export function nextWorkflowAction(prospectId: string, stage: string) {
  // Return label, href, and current step from one mapping.
}
```

- [ ] **Step 2: Create `WorkflowRail`**

It accepts `prospectId`, `currentStep`, `reviewState`, `primaryAction`, `backAction`, and `complete`. It renders the ordered stage list, review state, a full-width primary button, and a secondary back link. On narrow screens it appears after the main content.

- [ ] **Step 3: Run TypeScript validation**

Run: `cd frontend && npx tsc --noEmit`  
Expected: exit code `0`.

### Task 3: Replace the assessments index with an action hub

**Files:**
- Modify: `frontend/src/app/assessments/page.tsx`

- [ ] **Step 1: Add summary and card UI**

Render status counts from `review_status`, an explanatory header, and prospect cards with company, summary, owner, stage, review status, action label, and action route from `nextWorkflowAction`.

- [ ] **Step 2: Validate TypeScript**

Run: `cd frontend && npx tsc --noEmit`  
Expected: exit code `0`.

### Task 4: Standardize next-step placement

**Files:**
- Modify: `frontend/src/components/prospect/ProspectIntelligenceBrief.tsx`
- Modify: `frontend/src/app/prospects/[id]/page.tsx`
- Modify: `frontend/src/app/prospects/[id]/questionnaire/page.tsx`
- Modify: `frontend/src/app/prospects/[id]/assessment/page.tsx`
- Modify: `frontend/src/app/prospects/[id]/scope/page.tsx`
- Modify: `frontend/src/app/prospects/[id]/pricing/page.tsx`
- Modify: `frontend/src/app/prospects/[id]/proposal/page.tsx`

- [ ] **Step 1: Remove local next-stage buttons**

Remove the intelligence footer CTA and questionnaire footer CTA. Remove bespoke navigation stacks in the assessment, scope, pricing, and proposal sidebars.

- [ ] **Step 2: Wire `WorkflowRail` on every stage**

Use the same action map for Analyze → Questionnaire → Assessment → Scope → Pricing → Proposal. The analyze result uses a two-column layout with intelligence in the main column and the rail in the secondary column.

- [ ] **Step 3: Run a production build**

Run: `cd frontend && npm run build`  
Expected: Next.js completes successfully.

### Task 5: Verify the demo route set

**Files:**
- Modify: `README.md`

- [ ] **Step 1: Document the four demo prospects**

List Apex Metrics, ABC Company, XYZ Corp, and Northline Health as complete demo paths.

- [ ] **Step 2: Run backend and frontend verification**

Run:

```bash
cd backend && ../.venv/bin/python -m unittest discover -s tests -p 'test_*.py' -v
cd ../frontend && npx tsc --noEmit && npm run build
```

Expected: tests, typecheck, and build pass.
