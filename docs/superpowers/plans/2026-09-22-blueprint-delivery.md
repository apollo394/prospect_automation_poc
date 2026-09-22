# Blueprint Delivery Implementation Plan

> **For agentic workers:** Implement task-by-task. Steps use checkbox syntax.

**Goal:** Fixture-driven BLUE-002 delivery demo with NuVue + Cedar unlock, both entry points.

**Architecture:** Parallel `blueprint_service` mirroring `journey_service` (staged actions + `_state`). Rich content in fixtures. Frontend single shell at `/blueprints/[id]`.

**Tech Stack:** FastAPI, Next.js App Router, existing governance components.

## Global Constraints

- Synthetic labels on every artifact  
- Human approval required to advance  
- No live research / LLM generation  
- Cedar unlock only after `approve_proposal` on `cedar-strategy`  
- Auth bypass / `USE_SUPABASE_STORE=0` for unit tests  

---

### Task 1: Backend service + API + tests

**Files:**
- Create: `backend/app/services/blueprint_service.py`
- Create: `backend/app/data/blueprint_engagements.json` (thin ids)
- Modify: `backend/app/schemas/models.py`, `backend/app/api/routes.py`, `backend/app/core/data_loader.py`
- Test: `backend/tests/test_blueprint_delivery.py`

- [x] Failing tests for list / nuvue advance / cedar locked / unlock after proposal  
- [x] Implement service + routes  
- [x] Tests pass  

### Task 2: Frontend shell + home + Cedar CTA

**Files:**
- Create: `frontend/src/lib/blueprint.ts`, types, API methods  
- Create: `frontend/src/app/(app)/blueprints/[id]/page.tsx` + `Client.tsx`  
- Modify: home `page.tsx`, proposal `Client.tsx`, Sidebar optional  

- [x] Stage UI for all 10 stages  
- [x] Home Blueprint delivery section  
- [x] Cedar CTA after proposal approved  

### Task 3: Smoke

- [x] Unittest suite green  
- [x] Typecheck frontend  
