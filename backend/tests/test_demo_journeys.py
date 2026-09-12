import unittest

from app.services import analysis_service, assessment_service, commercial_service, questionnaire_service


class DemoJourneysTests(unittest.TestCase):
    def test_every_seed_prospect_has_a_complete_poc_one_journey(self):
        for prospect_id in ("apex-metrics", "abc-company", "xyz-corp", "northline-health"):
            self.assertIsNotNone(analysis_service.get_transcript(prospect_id))
            self.assertTrue(analysis_service.get_intelligence(prospect_id).summary)
            self.assertGreater(len(questionnaire_service.get_or_create_questionnaire(prospect_id).questions), 0)
            self.assertEqual(len(assessment_service.get_or_create_assessment(prospect_id).fast_readiness), 4)
            self.assertGreater(len(commercial_service.get_or_create_scope(prospect_id).phases), 0)
            self.assertGreater(len(commercial_service.get_or_create_pricing(prospect_id).line_items), 0)
            self.assertEqual(len(commercial_service.get_or_create_proposal(prospect_id).fast_readiness), 4)

    def test_apex_artifacts_explain_diagnosis_budget_and_recommendation(self):
        """Protect the call-to-proposal story from becoming a generic sales draft."""
        assessment = assessment_service.get_or_create_assessment("apex-metrics")
        pricing = commercial_service.get_or_create_pricing("apex-metrics")
        proposal = commercial_service.get_or_create_proposal("apex-metrics")

        self.assertIn("positioning", assessment.diagnosis.primary_friction.lower())
        self.assertEqual(
            assessment.diagnosis.affected_growth_drivers,
            ["Credibility", "Performance", "Agility"],
        )
        self.assertTrue(assessment.diagnosis.evidence_ids)
        self.assertIn("budget", pricing.budget_context.summary.lower())
        self.assertTrue(pricing.budget_context.evidence_ids)
        self.assertGreaterEqual(len(proposal.why_this_recommendation), 3)
        self.assertTrue(proposal.knowledge_note)
