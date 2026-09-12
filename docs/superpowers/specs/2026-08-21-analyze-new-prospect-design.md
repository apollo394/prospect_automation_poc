# Analyze New Prospect — entry flow

**Date:** 2026-08-21  
**Status:** Approved — implementing

## Goal

Home CTA **Analyze new prospect** → form (URL, optional name, paste Fathom transcript) → create prospect → analyzing animation → intelligence results.

## Behavior

- `POST /api/analyze-call` `{ website, company_name?, transcript_text }` creates runtime prospect + Fathom-style transcript; returns `{ prospect_id }`.
- Apex demo fill on UI preloads sample paste; if hostname looks like Apex, reuse `apex-metrics` seed intelligence.
- New prospects: mock analyze synthesizes insights from pasted segments into `runtime.ai_insights`.
- Frontend: `/` form card; redirect to `/prospects/{id}?analyze=1` to auto-start analysis.
