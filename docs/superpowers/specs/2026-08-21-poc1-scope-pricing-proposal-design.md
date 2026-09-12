# POC 1: Scope → Pricing → Proposal

**Date:** 2026-08-21  
**Status:** Approved — implemented 2026-08-21  
**Approach:** B — static seed + mock generate  
**Product:** Prospect Intelligence (SimpliCreative)

## Problem

The baseline ends at Strategic Assessment + Recommended Services. POC 1’s demo story is **Prospect → Proposal**. Scope, pricing, and proposal draft are missing.

## Goal

Extend the existing human-in-the-loop pipeline so a strategist can move from an approved assessment into a **scoped engagement**, a **priced quote**, and a **proposal draft** — all from static demo data (no live Fathom, CRM, payments, or e-sign).

## Demo path (Apex Metrics)

1. Prospects → Apex Metrics → Analyze → Intelligence  
2. Questionnaire → Assessment → approve recommended services  
3. **Scope** → review / edit / approve  
4. **Pricing** → review / edit / approve  
5. **Proposal** → review / edit / approve  

Work queue surfaces the next commercial step after assessment approval.

## Non-goals

- Live Fathom / CRM / Monday / Slack  
- Real payment or e-sign  
- PDF export / DocuSign  
- Inventing proprietary FAST scoring rules  
- Database persistence (keep in-memory runtime + JSON seeds)  
- Polished “client-facing letterhead” proposal (v1 = structured review UI like assessment; print CSS optional later)

## Data model

### Service catalog (extend existing)

`services.json` gains demo rate-card fields:

| Field | Type | Notes |
|-------|------|--------|
| `unit_price` | number | USD demo price |
| `unit` | string | e.g. `phase`, `page_set`, `foundation`, `month` |
| `currency` | string | `"USD"` |

### Scope

```
Scope
  id, prospect_id
  status, review_state, approved_by?
  title
  summary
  phases[]: { id, name, duration, deliverables[], services[] }
  exclusions[]
  assumptions[]
  timeline_note
```

### Pricing

```
Pricing
  id, prospect_id
  status, review_state, approved_by?
  currency
  line_items[]: { service_id, name, quantity_label, unit_price, amount, optional? }
  subtotal, discount_label?, discount_amount?, total
  notes
```

### Proposal

```
Proposal
  id, prospect_id
  status, review_state, approved_by?
  title
  prepared_for, prepared_by, valid_until
  executive_summary
  strategy_snapshot   # pulled from assessment context (static text in seed)
  scope_snapshot      # short narrative from scope
  investment_summary  # short narrative from pricing
  next_steps[]
  closing_note
```

Snapshots are **copied text at generate time**, not live joins — keeps the demo stable after later edits.

## Seed data

| File | Content |
|------|---------|
| `scopes.json` | Full Apex Metrics scope |
| `pricings.json` | Full Apex Metrics pricing (sums from rate card) |
| `proposals.json` | Full Apex Metrics proposal draft |

Other prospects: no seed; first GET/create runs **mock generate** from assessment `recommended_services` + rate card (template fill, same shape as Apex).

## Backend

Mirror `assessment_service` pattern:

| Piece | Behavior |
|-------|----------|
| `data_loader` | Load scopes/pricings/proposals; runtime keys for mutate |
| Models | `Scope`, `Pricing`, `Proposal`, shared `CommercialAction` (approve / edit / regenerate) |
| Services | `scope_service`, `pricing_service`, `proposal_service` |
| AI provider | `generate_scope` / `generate_pricing` / `generate_proposal` on mock (+ thin OpenRouter stubs that can fall back to mock templates) |
| Routes | `GET/POST /api/prospects/{id}/scope\|pricing\|proposal` |

**Generate rules (mock):**

- Scope phases map 1:1 from non-optional recommended services; Ongoing Support becomes optional phase or exclusion note.  
- Pricing line items from catalog `unit_price` × quantity labels (fixed demo amounts in templates).  
- Proposal assembles assessment summary + scope summary + pricing totals into narrative sections.

**Work queue:** After assessment approved / when next_action is commercial, queue items for `review_scope` → `review_pricing` → `review_proposal`. Update prospect `next_action` / stage labels for Apex Metrics seed as needed.

## Frontend

| Route | Purpose |
|-------|---------|
| `/prospects/[id]/scope` | Review rail + phases / exclusions / approve |
| `/prospects/[id]/pricing` | Line items table + totals + approve |
| `/prospects/[id]/proposal` | Structured sections + approve (not a PDF) |

Reuse assessment patterns: `ReviewRail`, StatusPill, Approve / Edit / Regenerate.

Nav / CTAs:

- Assessment page: “Continue to Scope” when assessment approved (or always link for demo).  
- Scope → Pricing → Proposal forward links after approve.  
- Work queue hrefs for the three new actions.  
- Optional index pages later — **skip** for v1 (detail pages + work queue enough).

`api.ts`: types + client methods mirroring assessment.

## PRODUCT.md updates

Move **proposals** and **demo pricing** into in-scope for this POC (static only). Keep live integrations and production auth out of scope.

## Success criteria

- Apex Metrics walkthrough reaches an **approved proposal** without leaving the app.  
- Works with MockAIProvider (no API key).  
- Every commercial artifact supports approve / edit (at least one field) / regenerate.  
- No new dependencies.

## Self-review

- [x] No unresolved placeholders  
- [x] Approach B explicit; proposal UI = structured review (not letterhead PDF)  
- [x] Scope bounded: three artifacts + rate card + work queue; no POC 2  
- [x] Matches existing assessment/questionnaire patterns  
