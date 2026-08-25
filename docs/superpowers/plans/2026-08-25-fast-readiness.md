# FAST readiness implementation plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add SimpliCreative's Flexible, Accessible, Strategic, and Trackable readiness view to POC 1 assessments and carry the approved findings into scope, pricing, and proposal drafts.

**Architecture:** Extend the existing assessment payload with four typed FAST pillar records. Seed Apex Metrics with evidence-backed values and have the mock provider synthesize a safe, four-pillar draft for pasted-transcript prospects. Reuse the assessment edit/approve/regenerate API; no separate routes, score, crawler, or analytics integration.

**Tech Stack:** FastAPI, Pydantic v2, JSON seed data, Python `unittest`, Next.js App Router, TypeScript, Tailwind.

---

## File map

| File | Change |
|---|---|
| `backend/app/schemas/models.py` | Add FAST status, pillar, and commercial-reference Pydantic models. |
| `backend/app/data/assessments.json` | Add the four Apex Metrics FAST findings. |
| `backend/app/data/scopes.json` | Add FAST labels to phase deliverables. |
| `backend/app/data/pricings.json` | Add a FAST rationale to each required line item. |
| `backend/app/data/proposals.json` | Add the proposal FAST section. |
| `backend/app/services/ai/mock_provider.py` | Generate safe FAST drafts for non-seeded prospects and propagate FAST summaries into commercial drafts. |
| `backend/app/services/ai/openrouter_provider.py` | Require `fast_readiness` in live assessment output and fall back to the mock shape. |
| `backend/tests/test_fast_readiness.py` | Verify seed, mock, API edit, and commercial handoff behavior. |
| `frontend/src/lib/api.ts` | Add matching TypeScript types. |
| `frontend/src/components/fast/FastReadinessCard.tsx` | Render the full assessment FAST card. |
| `frontend/src/app/prospects/[id]/assessment/page.tsx` | Place and edit the FAST card. |
| `frontend/src/app/prospects/[id]/scope/page.tsx` | Render FAST labels on each phase. |
| `frontend/src/app/prospects/[id]/pricing/page.tsx` | Render each line item's FAST rationale. |
| `frontend/src/app/prospects/[id]/proposal/page.tsx` | Render the proposal FAST section. |
| `PRODUCT.md`, `README.md` | Mark FAST readiness as implemented POC behavior and remove the stale claim that FAST is excluded. |

### Task 1: Define the FAST data contract and prove it fails before implementation

**Files:**
- Modify: `backend/app/schemas/models.py`
- Create: `backend/tests/test_fast_readiness.py`

- [ ] **Step 1: Write the failing schema test**

```python
import unittest

from app.schemas.models import Assessment


class FastReadinessModelTests(unittest.TestCase):
    def test_assessment_requires_four_typed_fast_pillars(self):
        assessment = Assessment.model_validate({
            "id": "a-test", "prospect_id": "test", "status": "needs_human_review",
            "review_state": "needs_human_review", "executive_summary": "Summary.",
            "business_context": "Context.", "current_challenges": [], "business_goals": [],
            "key_opportunities": [], "risks": [], "information_gaps": [],
            "recommended_next_step": "Review.", "recommended_services": [],
            "framework": {"name": "FAST", "status": "configured", "note": "Delivery lens."},
            "fast_readiness": [
                {"pillar": "flexible", "label": "Flexible", "status": "needs_validation", "finding": "Confirm CMS.", "evidence_ids": [], "suggested_action": "Review CMS.", "service_ids": []},
                {"pillar": "accessible", "label": "Accessible", "status": "needs_work", "finding": "Review baseline.", "evidence_ids": [], "suggested_action": "Audit.", "service_ids": []},
                {"pillar": "strategic", "label": "Strategic", "status": "needs_work", "finding": "Clarify message.", "evidence_ids": [], "suggested_action": "Build architecture.", "service_ids": []},
                {"pillar": "trackable", "label": "Trackable", "status": "needs_work", "finding": "Define measurement.", "evidence_ids": [], "suggested_action": "Instrument funnel.", "service_ids": []},
            ],
        })
        self.assertEqual([item.pillar for item in assessment.fast_readiness], ["flexible", "accessible", "strategic", "trackable"])

    def test_assessment_rejects_missing_or_reordered_fast_pillars(self):
        with self.assertRaises(ValueError):
            Assessment.model_validate({
                "id": "a-invalid", "prospect_id": "test", "status": "needs_human_review",
                "review_state": "needs_human_review", "executive_summary": "Summary.",
                "business_context": "Context.", "current_challenges": [], "business_goals": [],
                "key_opportunities": [], "risks": [], "information_gaps": [],
                "recommended_next_step": "Review.", "recommended_services": [],
                "framework": {"name": "FAST", "status": "configured", "note": "Delivery lens."},
                "fast_readiness": [],
            })
```

- [ ] **Step 2: Run the test and confirm it fails because `Assessment` has no `fast_readiness` field**

Run: `cd backend && ../.venv/bin/python -m unittest discover -s tests -p test_fast_readiness.py -v`  
Expected: the first assertion fails because `fast_readiness` is not present on `Assessment`.

- [ ] **Step 3: Add the strict model types**

Change the Pydantic import to `from pydantic import BaseModel, Field, model_validator`, then add before `Assessment` in `backend/app/schemas/models.py`:

```python
FastPillar = Literal["flexible", "accessible", "strategic", "trackable"]
FastReadinessStatus = Literal["ready", "needs_work", "needs_validation"]


class FastReadinessItem(BaseModel):
    pillar: FastPillar
    label: str
    status: FastReadinessStatus
    finding: str
    evidence_ids: list[str] = Field(default_factory=list)
    suggested_action: str
    service_ids: list[str] = Field(default_factory=list)
```

Add this field and validator to `Assessment` after `framework`:

```python
fast_readiness: list[FastReadinessItem]

@model_validator(mode="after")
def validate_fast_pillars(self):
    expected = ["flexible", "accessible", "strategic", "trackable"]
    if [item.pillar for item in self.fast_readiness] != expected:
        raise ValueError("FAST readiness must contain each pillar once in FAST order")
    return self
```

- [ ] **Step 4: Run the schema test and confirm it passes**

Run: `cd backend && ../.venv/bin/python -m unittest discover -s tests -p test_fast_readiness.py -v`  
Expected: `OK`.

- [ ] **Step 5: Commit the typed data contract**

```bash
git add backend/app/schemas/models.py backend/tests/test_fast_readiness.py
git commit -m "feat: add FAST readiness assessment model"
```

### Task 2: Seed and generate FAST data

**Files:**
- Modify: `backend/app/data/assessments.json`
- Modify: `backend/app/services/ai/mock_provider.py`
- Modify: `backend/app/services/ai/openrouter_provider.py`
- Modify: `backend/tests/test_fast_readiness.py`

- [ ] **Step 1: Add failing seed and mock tests**

```python
from app.services.ai.mock_provider import MockAIProvider

class FastReadinessGenerationTests(unittest.TestCase):
    def test_apex_seed_has_four_evidence_safe_fast_pillars(self):
        draft = MockAIProvider().generate_assessment("apex-metrics")
        items = {item["pillar"]: item for item in draft["fast_readiness"]}
        self.assertEqual(set(items), {"flexible", "accessible", "strategic", "trackable"})
        self.assertEqual(items["flexible"]["evidence_ids"], ["ev-cf-05"])
        self.assertEqual(items["accessible"]["status"], "needs_validation")

    def test_non_seeded_prospect_gets_four_safe_fast_pillars(self):
        draft = MockAIProvider().generate_assessment("brightline-co")
        self.assertEqual(len(draft["fast_readiness"]), 4)
        self.assertTrue(all(item["status"] == "needs_validation" for item in draft["fast_readiness"]))
```

- [ ] **Step 2: Run the tests and confirm they fail because the generated data lacks `fast_readiness`**

Run: `cd backend && ../.venv/bin/python -m unittest discover -s tests -p test_fast_readiness.py -v`  
Expected: `KeyError: 'fast_readiness'`.

- [ ] **Step 3: Add the exact Apex seed**

Add this `fast_readiness` array beside `framework` in `backend/app/data/assessments.json`:

```json
[
  {"pillar":"flexible","label":"Flexible","status":"needs_validation","finding":"Marketing needs to publish and update pages without engineering tickets.","evidence_ids":["ev-cf-05"],"suggested_action":"Confirm CMS, reusable page modules, and the approval workflow.","service_ids":["svc-development"]},
  {"pillar":"accessible","label":"Accessible","status":"needs_validation","finding":"Responsive behavior, accessibility baseline, and performance have not been validated in this call.","evidence_ids":[],"suggested_action":"Run accessibility, responsive, and performance review during discovery.","service_ids":["svc-development"]},
  {"pillar":"strategic","label":"Strategic","status":"needs_work","finding":"Positioning and the core site narrative do not explain differentiation or the buyer path clearly enough.","evidence_ids":["ev-cf-01","ev-cf-04"],"suggested_action":"Build message architecture, conversion paths, and search-ready content structure.","service_ids":["svc-website-strategy","svc-website-copy","svc-seo"]},
  {"pillar":"trackable","label":"Trackable","status":"needs_work","finding":"The team wants qualified opportunities, but first-touch-to-conversion measurement is not defined.","evidence_ids":["ev-cf-03"],"suggested_action":"Define analytics events, attribution fields, and reporting for qualified opportunities.","service_ids":["svc-seo","svc-development"]}
]
```

- [ ] **Step 4: Add the deterministic non-seeded generator**

Add a module-level `synthesize_fast_readiness()` function to `backend/app/services/ai/mock_provider.py` and include its result in `synthesize_assessment()`:

```python
def synthesize_fast_readiness() -> list[dict[str, Any]]:
    return [
        {"pillar": "flexible", "label": "Flexible", "status": "needs_validation", "finding": "CMS, reusable templates, and publishing workflow need confirmation.", "evidence_ids": [], "suggested_action": "Confirm publishing ownership and template needs during discovery.", "service_ids": ["svc-development"]},
        {"pillar": "accessible", "label": "Accessible", "status": "needs_validation", "finding": "Accessibility, responsive behavior, and performance baseline need validation.", "evidence_ids": [], "suggested_action": "Review accessibility, responsiveness, and performance during discovery.", "service_ids": ["svc-development"]},
        {"pillar": "strategic", "label": "Strategic", "status": "needs_validation", "finding": "Messaging, conversion paths, and search needs need validation against the prospect's buyer journey.", "evidence_ids": [], "suggested_action": "Confirm positioning, conversion paths, and search priorities.", "service_ids": ["svc-website-strategy", "svc-website-copy", "svc-seo"]},
        {"pillar": "trackable", "label": "Trackable", "status": "needs_validation", "finding": "Attribution, conversion events, and reporting expectations need confirmation.", "evidence_ids": [], "suggested_action": "Confirm analytics, attribution, and qualified-opportunity reporting needs.", "service_ids": ["svc-seo", "svc-development"]},
    ]
```

Set `"fast_readiness": synthesize_fast_readiness()` in `synthesize_assessment()`.

- [ ] **Step 5: Make the live-provider contract retain the safe FAST fallback**

In `OpenRouterProvider.generate_assessment()`, add these prompt rules and post-parse fallback:

```python
"- fast_readiness contains exactly flexible, accessible, strategic, and trackable\n"
"- use needs_validation when the call does not support a firm finding\n"
"- do not calculate a FAST score\n"
```

```python
fast_readiness = parsed.get("fast_readiness")
if not isinstance(fast_readiness, list) or len(fast_readiness) != 4:
    parsed["fast_readiness"] = template["fast_readiness"]
```

- [ ] **Step 6: Run the generation tests**

Run: `cd backend && ../.venv/bin/python -m unittest discover -s tests -p test_fast_readiness.py -v`  
Expected: `OK`.

- [ ] **Step 7: Commit the seeded and generated FAST data**

```bash
git add backend/app/data/assessments.json backend/app/services/ai/mock_provider.py backend/app/services/ai/openrouter_provider.py backend/tests/test_fast_readiness.py
git commit -m "feat: generate FAST readiness drafts"
```

### Task 3: Carry FAST through scope, pricing, and proposal

**Files:**
- Modify: `backend/app/schemas/models.py`
- Modify: `backend/app/data/scopes.json`
- Modify: `backend/app/data/pricings.json`
- Modify: `backend/app/data/proposals.json`
- Modify: `backend/app/services/ai/mock_provider.py`
- Modify: `backend/tests/test_fast_readiness.py`

- [ ] **Step 1: Add failing commercial handoff tests**

```python
class FastReadinessCommercialTests(unittest.TestCase):
    def test_apex_commercial_artifacts_include_fast_handoff(self):
        ai = MockAIProvider()
        scope = ai.generate_scope("apex-metrics")
        pricing = ai.generate_pricing("apex-metrics")
        proposal = ai.generate_proposal("apex-metrics")
        self.assertIn("Strategic", scope["phases"][0]["fast_pillars"])
        self.assertEqual(pricing["line_items"][0]["fast_rationale"], "Strategic")
        self.assertEqual(len(proposal["fast_readiness"]), 4)
```

- [ ] **Step 2: Run the test and confirm it fails on the missing fields**

Run: `cd backend && ../.venv/bin/python -m unittest discover -s tests -p test_fast_readiness.py -v`  
Expected: `KeyError` for `fast_pillars`, `fast_rationale`, or `fast_readiness`.

- [ ] **Step 3: Extend the commercial models**

Add these fields:

```python
class ScopePhase(BaseModel):
    # existing fields
    fast_pillars: list[str] = Field(default_factory=list)

class PricingLineItem(BaseModel):
    # existing fields
    fast_rationale: str = ""

class Proposal(BaseModel):
    # existing fields
    fast_readiness: list[FastReadinessItem] = Field(default_factory=list)
```

- [ ] **Step 4: Add Apex FAST handoff data**

Update `scopes.json` phases with `fast_pillars`:

```json
"fast_pillars": ["Strategic"]
```

for Diagnose, `["Strategic"]` for Core Narrative, and `["Flexible", "Accessible", "Trackable"]` for Phase-One Build.

Update required `pricings.json` line items with these exact `fast_rationale` values:

```json
"Website Strategy": "Strategic",
"Website Copy": "Strategic",
"SEO": "Strategic and Trackable",
"Development": "Flexible, Accessible, and Trackable"
```

Add the same four `fast_readiness` records from the assessment seed to `proposals.json`.

- [ ] **Step 5: Preserve the handoff for mock-generated prospects**

In `mock_provider.py`, load the assessment from runtime or `synthesize_assessment(prospect_id)`. Derive phase labels by service id, set each generated pricing line item's `fast_rationale`, and set generated proposal `fast_readiness` to the assessment's `fast_readiness`:

```python
FAST_BY_SERVICE = {
    "svc-website-strategy": ["Strategic"],
    "svc-website-copy": ["Strategic"],
    "svc-seo": ["Strategic", "Trackable"],
    "svc-development": ["Flexible", "Accessible", "Trackable"],
    "svc-ongoing-support": ["Trackable"],
}
```

- [ ] **Step 6: Run the commercial handoff test**

Run: `cd backend && ../.venv/bin/python -m unittest discover -s tests -p test_fast_readiness.py -v`  
Expected: `OK`.

- [ ] **Step 7: Commit the commercial handoff**

```bash
git add backend/app/schemas/models.py backend/app/data/scopes.json backend/app/data/pricings.json backend/app/data/proposals.json backend/app/services/ai/mock_provider.py backend/tests/test_fast_readiness.py
git commit -m "feat: carry FAST readiness into commercial drafts"
```

### Task 4: Render and edit FAST readiness in the application

**Files:**
- Modify: `frontend/src/lib/api.ts`
- Create: `frontend/src/components/fast/FastReadinessCard.tsx`
- Modify: `frontend/src/app/prospects/[id]/assessment/page.tsx`
- Modify: `frontend/src/app/prospects/[id]/scope/page.tsx`
- Modify: `frontend/src/app/prospects/[id]/pricing/page.tsx`
- Modify: `frontend/src/app/prospects/[id]/proposal/page.tsx`

- [ ] **Step 1: Add the frontend types**

Add before `Assessment` in `frontend/src/lib/api.ts`:

```ts
export type FastPillar = "flexible" | "accessible" | "strategic" | "trackable";
export type FastReadinessStatus = "ready" | "needs_work" | "needs_validation";
export type FastReadinessItem = {
  pillar: FastPillar;
  label: string;
  status: FastReadinessStatus;
  finding: string;
  evidence_ids: string[];
  suggested_action: string;
  service_ids: string[];
};
```

Then add `fast_readiness: FastReadinessItem[]` to `Assessment`, `fast_pillars: string[]` to `ScopePhase`, `fast_rationale: string` to `PricingLineItem`, and `fast_readiness: FastReadinessItem[]` to `Proposal`.

- [ ] **Step 2: Create the assessment FAST card**

Create `frontend/src/components/fast/FastReadinessCard.tsx`. It accepts `items`, `editing`, `onChange`, and `services`. It renders four ordered rows. Each row includes a status pill, finding, evidence state, action, and linked service names. In edit mode, it gives the strategist a status `<select>` and `<textarea>` controls for `finding` and `suggested_action`. Evidence IDs and service IDs remain immutable in this POC.

Use this status mapping:

```ts
const statusTone = {
  ready: "teal",
  needs_work: "amber",
  needs_validation: "muted",
} as const;
```

Render empty evidence IDs as: `Needs validation from discovery or site review.`

- [ ] **Step 3: Wire the assessment card to the existing edit endpoint**

In `assessment/page.tsx`, create `draftFastReadiness` state beside `draftSummary`; initialize it in `load()`; render `FastReadinessCard` after `{sections.map(...)}` and before Recommended Services; and send both fields in the current edit request:

```ts
edits: {
  executive_summary: draftSummary,
  fast_readiness: draftFastReadiness,
}
```

Keep the existing `assessmentAction` endpoint. Do not add a new FAST endpoint.

- [ ] **Step 4: Add compact commercial references**

Make these view-only additions:

```tsx
// scope/page.tsx, under the phase duration
{phase.fast_pillars.length > 0 && (
  <p className="mt-1 text-xs font-medium text-sc-primary">
    FAST: {phase.fast_pillars.join(" · ")}
  </p>
)}

// pricing/page.tsx, under quantity_label
{item.fast_rationale && <p className="mt-1 text-xs text-sc-primary">FAST: {item.fast_rationale}</p>}
```

On `proposal/page.tsx`, insert a `How this engagement addresses FAST` section after `Scope Snapshot`, rendering each item as `<h3>{item.label}</h3>`, followed by its finding and suggested action.

- [ ] **Step 5: Run frontend static checks**

Run: `cd frontend && npm run lint`  
Expected: exit code `0`.

- [ ] **Step 6: Commit the UI**

```bash
git add frontend/src/lib/api.ts frontend/src/components/fast/FastReadinessCard.tsx frontend/src/app/prospects/[id]/assessment/page.tsx frontend/src/app/prospects/[id]/scope/page.tsx frontend/src/app/prospects/[id]/pricing/page.tsx frontend/src/app/prospects/[id]/proposal/page.tsx
git commit -m "feat: show FAST readiness across POC flow"
```

### Task 5: Validate the whole path and update product docs

**Files:**
- Modify: `PRODUCT.md`
- Modify: `README.md`
- Modify: `backend/tests/test_fast_readiness.py`

- [ ] **Step 1: Add API edit and validation coverage**

```python
from fastapi.testclient import TestClient
from main import app

class FastReadinessApiTests(unittest.TestCase):
    def test_assessment_edit_persists_fast_readiness(self):
        client = TestClient(app)
        assessment = client.get("/api/prospects/apex-metrics/assessment").json()
        assessment["fast_readiness"][0]["status"] = "ready"
        response = client.post(
            "/api/prospects/apex-metrics/assessment",
            json={"action": "edit", "edits": {"fast_readiness": assessment["fast_readiness"]}},
        )
        self.assertEqual(response.status_code, 200)
        self.assertEqual(response.json()["fast_readiness"][0]["status"], "ready")
        self.assertEqual(response.json()["review_state"], "needs_human_review")
```

- [ ] **Step 2: Run the full backend FAST suite**

Run: `cd backend && ../.venv/bin/python -m unittest discover -s tests -p test_fast_readiness.py -v`  
Expected: all tests pass.

- [ ] **Step 3: Update product documentation**

In `PRODUCT.md`, replace the statement that proprietary FAST rules are out of scope with: `FAST readiness is a visible website-delivery lens with four reviewed pillars. It has no overall score and does not automate strategist judgment.`

In `README.md`, add FAST readiness to the demo path between Strategic Assessment and Recommended Services. Keep live website assessment, analytics, and Fathom integration out of scope.

- [ ] **Step 4: Perform the manual Apex demo check**

Run the backend and frontend development servers, then verify this exact path in a browser:

1. Open Apex Metrics assessment.
2. Confirm Flexible, Accessible, Strategic, and Trackable appear in that order.
3. Confirm Flexible links to transcript evidence `ev-cf-05`; Accessible says it needs validation.
4. Edit Strategic finding, save through Approve, and confirm the edited card persists.
5. Open Scope and confirm every phase shows FAST labels.
6. Open Pricing and confirm required line items show a FAST rationale.
7. Open Proposal and confirm all four FAST entries appear under `How this engagement addresses FAST`.

- [ ] **Step 5: Commit tests and documentation**

```bash
git add PRODUCT.md README.md backend/tests/test_fast_readiness.py
git commit -m "docs: document FAST readiness in POC 1"
```
