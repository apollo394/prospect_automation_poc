# Scope → Pricing → Proposal Implementation Plan

> **For agentic workers:** Implement task-by-task. Steps use checkbox syntax.

**Goal:** Complete POC 1 commercial pipeline: Scope → Pricing → Proposal with static seed + mock generate.

**Architecture:** Mirror assessment_service: JSON seeds + in-memory runtime, MockAIProvider templates (OpenRouter falls back to mock for commercial artifacts), three frontend review pages.

**Tech Stack:** FastAPI + Pydantic, Next.js App Router, existing Tailwind tokens. No new dependencies.

**Spec:** `docs/superpowers/specs/2026-08-21-poc1-scope-pricing-proposal-design.md`

---

## File map

| File | Role |
|------|------|
| `backend/app/data/services.json` | Demo rate card fields |
| `backend/app/data/scopes.json` | Apex Metrics scope seed |
| `backend/app/data/pricings.json` | Apex Metrics pricing seed |
| `backend/app/data/proposals.json` | Apex Metrics proposal seed |
| `backend/app/schemas/models.py` | Scope, Pricing, Proposal, CommercialAction |
| `backend/app/core/data_loader.py` | Load + runtime keys |
| `backend/app/services/commercial_service.py` | get/create/action for all three |
| `backend/app/services/ai/base.py` | Abstract generate_* methods |
| `backend/app/services/ai/mock_provider.py` | Seed + synthesize |
| `backend/app/services/ai/openrouter_provider.py` | Delegate commercial to mock |
| `backend/app/api/routes.py` | GET/POST endpoints |
| `backend/app/services/prospect_service.py` | next_action + work queue |
| `backend/scripts/check_commercial.py` | One runnable self-check |
| `frontend/src/lib/api.ts` | Types + clients |
| `frontend/src/app/prospects/[id]/scope/page.tsx` | Scope UI |
| `frontend/src/app/prospects/[id]/pricing/page.tsx` | Pricing UI |
| `frontend/src/app/prospects/[id]/proposal/page.tsx` | Proposal UI |
| `frontend/.../assessment/page.tsx` | Continue to Scope CTA |
| `PRODUCT.md` / `README.md` | In-scope update |

### Task 1: Seed data + models + loader

- [ ] Extend services with unit_price/unit/currency
- [ ] Add scopes/pricings/proposals JSON for apex-metrics
- [ ] Add Pydantic models + CommercialAction
- [ ] Wire data_loader runtime keys

### Task 2: AI + commercial_service + routes

- [ ] Mock generate_scope/pricing/proposal (seed or synthesize)
- [ ] OpenRouter delegates to mock
- [ ] commercial_service + routes
- [ ] prospect next_action chain + work queue

### Task 3: Frontend

- [ ] api.ts types/methods
- [ ] Three review pages
- [ ] Assessment → Scope CTA; forward links

### Task 4: Docs + self-check

- [ ] Update PRODUCT.md / README
- [ ] `python scripts/check_commercial.py` asserts totals + generate shape
- [ ] Smoke GET endpoints against running API if available

**Commits:** Only if user requests.
