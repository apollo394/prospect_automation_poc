import unittest

from fastapi.testclient import TestClient

from main import app
from app.core.data_loader import reset_governed_runtime


class GovernedJourneysTests(unittest.TestCase):
    def setUp(self):
        reset_governed_runtime()
        self.client = TestClient(app)

    def test_lists_exactly_four_synthetic_leads(self):
        response = self.client.get("/api/journeys")
        self.assertEqual(response.status_code, 200)
        self.assertEqual([item["id"] for item in response.json()], [
            "cedar-strategy", "atlas-health", "harbor-advisory", "northstar-services"
        ])
        self.assertTrue(all(item["synthetic"] for item in response.json()))
        self.assertTrue(all("recommended_product" in item and "workflow" in item and "hubspot" in item for item in response.json()))
        atlas = next(item for item in response.json() if item["id"] == "atlas-health")
        self.assertNotIn("foundation_rationale", atlas["pricing"])

    def test_detail_contains_product_and_internal_pricing_rationale_is_not_proposal(self):
        detail = self.client.get("/api/journeys/atlas-health")
        self.assertEqual(detail.status_code, 200)
        body = detail.json()
        self.assertIsNone(body["recommended_product"])
        self.assertEqual(body["recommendation"]["product"], "SimpliFoundation")
        self.assertTrue(body["pricing"]["internal_rationale"])
        self.assertNotIn("internal_rationale", body["proposal"])
        self.assertNotIn("margin_validation", str(body["proposal"]))
        self.assertNotIn("delivery_cost", str(body["proposal"]))
        self.assertIn("workflow", body)
        for section in ("synthetic_disclaimer", "prospect", "scoreapp", "diagnostic", "questionnaire", "recommendation", "scope", "pricing", "proposal", "workflow"):
            self.assertIn(section, body)
        governance = body["recommendation"]["governance"]
        self.assertTrue(any(
            citation["document_id"] == "GOV-001" and citation["version"] == "v1.0"
            for citation in governance["citations"]
        ))
        self.assertTrue(body["recommendation"]["evidence"])
        self.assertNotEqual(body["recommendation"]["evidence"], governance["ai_confidence"])
        self.assertTrue(body["pricing"]["foundation_rationale"]["internal_only"])
        for name in ("scoreapp", "diagnostic", "questionnaire", "recommendation", "scope", "pricing", "proposal"):
            artifact = body[name]
            self.assertTrue(artifact["title"])
            self.assertTrue(artifact["summary"])
            self.assertIsInstance(artifact["evidence"][0], dict)
            self.assertIn("synthetic_label", artifact["evidence"][0])
            self.assertIn("governance", artifact)
        self.assertTrue(body["scoreapp"]["dimensions"])
        self.assertTrue(body["diagnostic"]["hypotheses"])
        self.assertTrue(body["questionnaire"]["questions"])
        self.assertTrue(body["recommendation"]["alternatives_not_selected"])
        self.assertTrue(body["scope"]["deliverables"])
        self.assertIn("recommended_price", body["pricing"])
        self.assertTrue(body["proposal"]["recommended_engagement"])

    def test_every_synthetic_lead_has_a_complete_client_safe_proposal_draft(self):
        for journey_id in ("cedar-strategy", "atlas-health", "harbor-advisory", "northstar-services"):
            proposal = self.client.get(f"/api/journeys/{journey_id}").json()["proposal"]
            for field in (
                "executive_summary",
                "strategy_snapshot",
                "scope_snapshot",
                "investment_summary",
                "next_steps",
                "closing_note",
                "opening",
                "what_we_heard",
                "objectives",
                "deliverables",
                "how_it_works",
                "exclusions",
                "gold_standard_ref",
            ):
                self.assertTrue(proposal.get(field), (journey_id, field))
            self.assertGreaterEqual(len(proposal["what_we_heard"]), 3)
            self.assertGreaterEqual(len(proposal["deliverables"]), 3)
            self.assertGreaterEqual(len(proposal["next_steps"]), 3)
            self.assertNotIn("Synthetic business problem framing.", proposal["executive_summary"])
            self.assertNotIn("margin", str(proposal).lower())

    def test_unknown_journey_is_not_found(self):
        self.assertEqual(self.client.get("/api/journeys/nope").status_code, 404)

    def test_actions_are_gated_and_record_generic_role_audit(self):
        blocked = self.client.post("/api/journeys/cedar-strategy/actions", json={"action": "approve_scope"})
        self.assertEqual(blocked.status_code, 409)
        first = self.client.post("/api/journeys/cedar-strategy/actions", json={"action": "prepare_diagnostic"})
        self.assertEqual(first.status_code, 200)
        self.assertEqual(first.json()["workflow"]["current_stage"], "import_transcript")
        approved = self.client.post("/api/journeys/cedar-strategy/actions", json={
            "action": "approve_recommendation", "role": "Authorized SimpliCreative reviewer", "actor": "synthetic-reviewer", "reason": "Synthetic approval"
        })
        self.assertEqual(approved.status_code, 409)

    def test_imported_synthetic_transcript_is_saved_with_the_journey(self):
        prepared = self.client.post("/api/journeys/cedar-strategy/actions", json={"action": "prepare_diagnostic"})
        self.assertEqual(prepared.status_code, 200)
        transcript = "Jordan: We need the website to explain the offer before our spring campaign."
        imported = self.client.post("/api/journeys/cedar-strategy/actions", json={
            "action": "import_transcript",
            "edits": {"transcript_text": transcript},
        })
        self.assertEqual(imported.status_code, 200)
        self.assertEqual(imported.json()["diagnostic"]["uploaded_transcript"], transcript)

    def test_full_valid_pipeline_sets_proposal_sent(self):
        actions = ["prepare_diagnostic", "import_transcript", "generate_questionnaire",
                   "review_returned_questionnaire", "approve_recommendation", "approve_scope",
                   "reveal_pricing", "approve_pricing", "reveal_proposal", "approve_proposal"]
        body = None
        for action in actions:
            payload = {"action": action}
            if action.startswith("approve_"):
                payload.update(role="Authorized SimpliCreative reviewer", actor="synthetic-cam", reason="Synthetic approval")
            response = self.client.post("/api/journeys/northstar-services/actions", json=payload)
            self.assertEqual(response.status_code, 200, (action, response.text))
            body = response.json()
        self.assertEqual(body["workflow"]["current_stage"], "complete")
        self.assertEqual(body["hubspot"]["lifecycle_stage"], "Proposal sent")
        self.assertEqual(len(body["workflow"]["approval_history"]), 4)

    def test_unsupported_action_is_422(self):
        response = self.client.post("/api/journeys/cedar-strategy/actions", json={"action": "nope"})
        self.assertEqual(response.status_code, 422)


if __name__ == "__main__":
    unittest.main()
