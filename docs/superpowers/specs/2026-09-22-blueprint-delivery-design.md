# Post-sale Blueprint delivery (BLUE-002 surface)

## Purpose

Add a separate **Blueprint delivery** engagement after an approved SimpliBlueprint proposal. Demonstrates the BLUE-002 flow with gold-standard-shaped **synthetic fixtures that look real**. No live research agents or LLM generation in this build.

## Depth

Full BLUE-002 **surface**: stages + structured objects + evidence/governance UI. Dummy data drawn from NuVue gold standards (GS-BLUE-001…006, questionnaire context).

## Stages (human-gated)

1. `activate_blueprint` — Active Blueprint Record + Cumulative Context  
2. `generate_blueprint_questionnaire` — CONFIRM / REQUIRED / OPTIONAL / SUPPRESS  
3. `validate_questionnaire` — human gate  
4. `complete_research` — plan, evidence synthesis, findings, data quality  
5. `approve_intelligence` — hypotheses, priorities, recommendations, implementation requirements  
6. `approve_draft_report` — report draft (GS-BLUE-001 shaped)  
7. `approve_strategy_deck` — deck outline (GS-BLUE-002 shaped)  
8. `complete_strategy_session` — session record + reconciliation (GS-BLUE-005)  
9. `approve_final_blueprint` — final approval  
10. `approve_handoff` — implementation handoff (GS-BLUE-006 → SimpliFoundation)

## Engagements

| ID | Entry |
|---|---|
| `nuvue-blueprint` | Always available from home (direct demo) |
| `cedar-blueprint` | Unlocks after Cedar acquisition journey `approve_proposal` |

## API

- `GET /api/blueprints`  
- `GET /api/blueprints/{id}`  
- `POST /api/blueprints/{id}/actions` — same action/role/edits pattern as journeys  

## UI

- Home: **Blueprint delivery** section  
- `/blueprints/[id]` — stage shell with progress  
- Cedar proposal complete → CTA **Activate Blueprint delivery**  
- Reuse EvidenceTrail + ApprovalPanel patterns  

## Out of scope

Live retrieval, OpenRouter generation, real Fathom, PDF/PPTX export, real Master Question Bank selector engine.
