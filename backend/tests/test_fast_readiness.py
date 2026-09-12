import unittest

from fastapi.testclient import TestClient

from app.schemas.models import Assessment
from app.services.ai.mock_provider import MockAIProvider
from main import app


class FastReadinessModelTests(unittest.TestCase):
    def test_assessment_exposes_four_typed_fast_pillars(self):
        assessment = Assessment.model_validate(
            {
                "id": "a-test",
                "prospect_id": "test",
                "status": "needs_human_review",
                "review_state": "needs_human_review",
                "executive_summary": "Summary.",
                "business_context": "Context.",
                "current_challenges": [],
                "business_goals": [],
                "key_opportunities": [],
                "risks": [],
                "information_gaps": [],
                "recommended_next_step": "Review.",
                "recommended_services": [],
                "framework": {
                    "name": "FAST",
                    "status": "configured",
                    "note": "Delivery lens.",
                },
                "fast_readiness": [
                    {
                        "pillar": "flexible",
                        "label": "Flexible",
                        "status": "needs_validation",
                        "finding": "Confirm CMS.",
                        "evidence_ids": [],
                        "suggested_action": "Review CMS.",
                        "service_ids": [],
                    },
                    {
                        "pillar": "accessible",
                        "label": "Accessible",
                        "status": "needs_work",
                        "finding": "Review baseline.",
                        "evidence_ids": [],
                        "suggested_action": "Audit.",
                        "service_ids": [],
                    },
                    {
                        "pillar": "strategic",
                        "label": "Strategic",
                        "status": "needs_work",
                        "finding": "Clarify message.",
                        "evidence_ids": [],
                        "suggested_action": "Build architecture.",
                        "service_ids": [],
                    },
                    {
                        "pillar": "trackable",
                        "label": "Trackable",
                        "status": "needs_work",
                        "finding": "Define measurement.",
                        "evidence_ids": [],
                        "suggested_action": "Instrument funnel.",
                        "service_ids": [],
                    },
                ],
            }
        )

        self.assertEqual(
            [item.pillar for item in assessment.fast_readiness],
            ["flexible", "accessible", "strategic", "trackable"],
        )

    def test_assessment_rejects_missing_fast_pillars(self):
        with self.assertRaises(ValueError):
            Assessment.model_validate(
                {
                    "id": "a-invalid",
                    "prospect_id": "test",
                    "status": "needs_human_review",
                    "review_state": "needs_human_review",
                    "executive_summary": "Summary.",
                    "business_context": "Context.",
                    "current_challenges": [],
                    "business_goals": [],
                    "key_opportunities": [],
                    "risks": [],
                    "information_gaps": [],
                    "recommended_next_step": "Review.",
                    "recommended_services": [],
                    "framework": {
                        "name": "FAST",
                        "status": "configured",
                        "note": "Delivery lens.",
                    },
                    "fast_readiness": [],
                }
            )


class FastReadinessGenerationTests(unittest.TestCase):
    def test_apex_seed_has_evidence_safe_fast_pillars(self):
        draft = MockAIProvider().generate_assessment("apex-metrics")
        items = {item["pillar"]: item for item in draft["fast_readiness"]}

        self.assertEqual(
            set(items), {"flexible", "accessible", "strategic", "trackable"}
        )
        self.assertEqual(items["flexible"]["evidence_ids"], ["ev-cf-05"])
        self.assertEqual(items["accessible"]["status"], "needs_validation")

    def test_unseeded_prospect_gets_safe_fast_pillars(self):
        draft = MockAIProvider().generate_assessment("brightline-co")

        self.assertEqual(len(draft["fast_readiness"]), 4)
        self.assertTrue(
            all(item["status"] == "needs_validation" for item in draft["fast_readiness"])
        )


class FastReadinessCommercialTests(unittest.TestCase):
    def test_apex_commercial_artifacts_include_fast_handoff(self):
        ai = MockAIProvider()
        scope = ai.generate_scope("apex-metrics")
        pricing = ai.generate_pricing("apex-metrics")
        proposal = ai.generate_proposal("apex-metrics")

        self.assertIn("Strategic", scope["phases"][0]["fast_pillars"])
        self.assertEqual(pricing["line_items"][0]["fast_rationale"], "Strategic")
        self.assertEqual(len(proposal["fast_readiness"]), 4)


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
