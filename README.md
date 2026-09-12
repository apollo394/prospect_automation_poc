# Prospect Intelligence — SimpliCreative POC

Internal POC for SimpliCreative’s **Prospect → Call Analysis → Strategic Assessment → Scope → Pricing → Proposal** workflow.

Product name: **Prospect Intelligence** (not Agency Brain).

Brand source: [simplicreative.com](https://simplicreative.com/about/)

## Stack

- **Frontend:** Next.js 15, TypeScript, App Router, Tailwind, Lucide
- **Backend:** Python FastAPI + Pydantic
- **AI:** Pluggable `AIProvider` — **OpenRouter** (default when `OPENROUTER_API_KEY` is set) with `MockAIProvider` fallback

## Quick start

### Backend

```bash
cd backend
python3 -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt
cp .env.example .env   # add your OpenRouter key
python main.py         # http://127.0.0.1:8002 (default)
# or: ./serve
# or: uvicorn main:app --reload --port 8002
```

`UVICORN_PORT=8002` is set in `.env`. Prefer `python main.py` or `./serve` — bare `uvicorn` without `--port` still uses uvicorn’s own default (8000).

Set in `backend/.env`:

```bash
OPENROUTER_API_KEY=sk-or-v1-...
OPENROUTER_MODEL=anthropic/claude-sonnet-4
AI_PROVIDER=openrouter
```

Without a key, the API uses the deterministic mock provider so demos still work.

API docs: http://127.0.0.1:8002/docs
`GET /api/health` reports the active provider and model.

### Frontend

```bash
cd frontend
npm install
npm run dev
```

App: http://localhost:3002

Next.js rewrites `/api/*` to the FastAPI server on port 8002.

## Demo path (Prospect Intelligence)

1. Open **Prospects**
2. Click **Analyze new prospect** → paste Fathom transcript + company URL (or **Use Apex demo**)
3. **Start analysis** → analyzing steps → intelligence + evidence
4. Questionnaire → Strategic Assessment → FAST Readiness → Recommended Services
5. **Scope** → **Pricing** → **Proposal** (approve each)

Primary focus: Paste call → Analyze → Intelligence → Assessment → commercial package.

## Seeded demo journeys

- Apex Metrics: category positioning and qualified-pipeline conversion.
- ABC Company: Series B security-platform launch and an aging WordPress site.
- XYZ Corp: multi-brand SaaS consolidation after acquisitions.
- Northline Health: referral conversion, accessibility confidence, and service-line discovery.

Every seed prospect can be opened through Analyze, Questionnaire, Assessment, Scope, Pricing, and Proposal.

## Structure

```
frontend/          Next.js app + BRAND_GUIDE.md + tokens
backend/app/       FastAPI routes, services, mock AI, demo JSON
PRODUCT.md         Product truth (Impeccable)
docs/superpowers/  Design specs + plans
```

## Out of scope

Monday, Slack, CRM, client portal, PM, GA/GSC, payments, e-sign/PDF, production auth, FAST scoring, website crawls, live analytics integrations, and live pricing APIs.
