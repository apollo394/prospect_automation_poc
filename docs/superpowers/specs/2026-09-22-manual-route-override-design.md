# Manual route override (SimpliBlueprint)

## Purpose

Let an authorised reviewer force **SimpliBlueprint** when the AI recommended a direct package, and rematerialize recommendation, scope, pricing, and proposal before approval.

## Behaviour

1. Available only while `current_stage === approve_recommendation`.
2. Action `override_route` with `edits.route_override = "SimpliBlueprint"` (or clear to restore AI route). Does not advance the stage.
3. Journey state stores `route_override`. `get_journey` rematerializes commercial artifacts from the shared Blueprint package (Cedar Blueprint scope/proposal skeleton), filled with the current lead’s company/contact. Pricing total = `4800`.
4. `route_decision` becomes `optional_blueprint`. Original AI product appears under alternatives-not-selected with a human-override reason.
5. UI: keep AI vs override radio + Apply; then normal Approve.

## Out of scope

Override to Foundation / WordPress / CARE; post-sale Blueprint delivery; changing override after recommendation approval.
