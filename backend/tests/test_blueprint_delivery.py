import os
import unittest

os.environ.setdefault("AUTH_BYPASS", "1")
os.environ["USE_SUPABASE_STORE"] = "0"

from fastapi.testclient import TestClient

from app.core.config import get_settings
from app.core.data_loader import reset_governed_runtime
from main import app

get_settings.cache_clear()

BLUEPRINT_ACTIONS = [
    "activate_blueprint",
    "generate_blueprint_questionnaire",
    "validate_questionnaire",
    "complete_research",
    "approve_intelligence",
    "approve_draft_report",
    "approve_strategy_deck",
    "complete_strategy_session",
    "approve_final_blueprint",
    "approve_handoff",
]


class BlueprintDeliveryTests(unittest.TestCase):
    def setUp(self):
        reset_governed_runtime()
        self.client = TestClient(app)

    def test_lists_nuvue_unlocked_and_cedar_locked(self):
        response = self.client.get("/api/blueprints")
        self.assertEqual(response.status_code, 200)
        rows = response.json()
        self.assertEqual([r["id"] for r in rows], ["nuvue-blueprint", "cedar-blueprint"])
        nuvue = next(r for r in rows if r["id"] == "nuvue-blueprint")
        cedar = next(r for r in rows if r["id"] == "cedar-blueprint")
        self.assertTrue(nuvue["unlocked"])
        self.assertFalse(cedar["unlocked"])
        self.assertEqual(nuvue["workflow"]["current_stage"], "activate_blueprint")
        self.assertTrue(nuvue["questionnaire"]["questions"])
        self.assertTrue(any(q["status"] == "SUPPRESS" for q in nuvue["questionnaire"]["questions"]))

    def test_cedar_action_blocked_until_acquisition_proposal_approved(self):
        blocked = self.client.post(
            "/api/blueprints/cedar-blueprint/actions",
            json={"action": "activate_blueprint", "role": "Authorized SimpliCreative reviewer"},
        )
        self.assertEqual(blocked.status_code, 409)

        for action in [
            "prepare_diagnostic",
            "import_transcript",
            "generate_questionnaire",
            "review_returned_questionnaire",
            "approve_recommendation",
            "approve_scope",
            "reveal_pricing",
            "approve_pricing",
            "reveal_proposal",
            "approve_proposal",
        ]:
            payload = {"action": action}
            if action.startswith("approve_"):
                payload.update(
                    role="Authorized SimpliCreative reviewer",
                    actor="synthetic-cam",
                    reason="Synthetic approval",
                )
            response = self.client.post("/api/journeys/cedar-strategy/actions", json=payload)
            self.assertEqual(response.status_code, 200, (action, response.text))

        cedar = self.client.get("/api/blueprints/cedar-blueprint").json()
        self.assertTrue(cedar["unlocked"])
        activated = self.client.post(
            "/api/blueprints/cedar-blueprint/actions",
            json={
                "action": "activate_blueprint",
                "role": "Authorized SimpliCreative reviewer",
                "actor": "synthetic-strategist",
            },
        )
        self.assertEqual(activated.status_code, 200)
        self.assertEqual(activated.json()["workflow"]["current_stage"], "generate_blueprint_questionnaire")

    def test_nuvue_full_pipeline_reaches_complete(self):
        body = None
        for action in BLUEPRINT_ACTIONS:
            payload = {"action": action}
            if action in {
                "validate_questionnaire",
                "approve_intelligence",
                "approve_draft_report",
                "approve_strategy_deck",
                "approve_final_blueprint",
                "approve_handoff",
            }:
                payload.update(
                    role="Authorized SimpliCreative reviewer",
                    actor="synthetic-strategist",
                    reason="Synthetic Blueprint approval",
                )
            response = self.client.post("/api/blueprints/nuvue-blueprint/actions", json=payload)
            self.assertEqual(response.status_code, 200, (action, response.text))
            body = response.json()
        self.assertEqual(body["workflow"]["current_stage"], "complete")
        self.assertEqual(body["handoff"]["control"]["implementation_path"], "SIMPLIFOUNDATION")
        self.assertEqual(len(body["workflow"]["approval_history"]), 6)


if __name__ == "__main__":
    unittest.main()
