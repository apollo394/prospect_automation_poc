from __future__ import annotations

import json
import re
from copy import deepcopy
from typing import Any

import httpx

from app.core import data_loader
from app.core.config import get_settings
from app.services.ai.base import AIProvider
from app.services.ai.mock_provider import MockAIProvider


def _extract_json(text: str) -> Any:
    text = text.strip()
    if text.startswith("```"):
        text = re.sub(r"^```(?:json)?\s*", "", text)
        text = re.sub(r"\s*```$", "", text)
    try:
        return json.loads(text)
    except json.JSONDecodeError:
        match = re.search(r"(\{[\s\S]*\}|\[[\s\S]*\])", text)
        if not match:
            raise
        return json.loads(match.group(1))


class OpenRouterProvider(AIProvider):
    """Live AI via OpenRouter chat completions (OpenAI-compatible API)."""

    def __init__(self) -> None:
        self.settings = get_settings()
        self._fallback = MockAIProvider()
        if not self.settings.openrouter_api_key:
            raise ValueError("OPENROUTER_API_KEY is required for OpenRouterProvider")

    def _headers(self) -> dict[str, str]:
        return {
            "Authorization": f"Bearer {self.settings.openrouter_api_key}",
            "Content-Type": "application/json",
            "HTTP-Referer": self.settings.openrouter_site_url,
            "X-Title": self.settings.openrouter_app_name,
        }

    def _chat(self, system: str, user: str, *, temperature: float = 0.2) -> str:
        payload = {
            "model": self.settings.openrouter_model,
            "temperature": temperature,
            "messages": [
                {"role": "system", "content": system},
                {"role": "user", "content": user},
            ],
            "response_format": {"type": "json_object"},
        }
        url = f"{self.settings.openrouter_base_url}/chat/completions"
        with httpx.Client(timeout=90.0) as client:
            response = client.post(url, headers=self._headers(), json=payload)
            response.raise_for_status()
            data = response.json()
        try:
            return data["choices"][0]["message"]["content"]
        except (KeyError, IndexError, TypeError) as exc:
            raise RuntimeError(f"Unexpected OpenRouter response: {data}") from exc

    def _context(self, prospect_id: str) -> dict[str, Any]:
        from app.services.analysis_service import get_transcript
        from app.services.intake_service import get_raw_prospect

        prospect = get_raw_prospect(prospect_id)
        if not prospect:
            raise ValueError(f"Unknown prospect: {prospect_id}")

        transcript = get_transcript(prospect_id)
        evidence = [e for e in data_loader.evidence() if e["prospect_id"] == prospect_id]
        insights = [i for i in data_loader.insights() if i["prospect_id"] == prospect_id]
        services = data_loader.services()
        return {
            "prospect": prospect,
            "transcript": transcript,
            "evidence": evidence,
            "existing_insights": insights,
            "service_catalog": services,
        }

    def analyze_prospect(self, prospect_id: str) -> dict[str, Any]:
        ctx = self._context(prospect_id)
        system = (
            "You are a senior strategy analyst at SimpliCreative assisting human strategists. "
            "Return ONLY valid JSON. Do not invent pricing. Tie claims to transcript quotes when possible. "
            "AI prepares work for human review — do not claim decisions are final."
        )
        user = (
            "Analyze this prospect from the strategy call context.\n"
            "Return JSON with keys:\n"
            "{\n"
            '  "summary": "3 short paragraphs as one string",\n'
            '  "counts": {"goals": int, "pain_points": int, "opportunities": int, "open_questions": int},\n'
            '  "insights": [\n'
            '    {"category": "business_goals|pain_points|desired_outcomes|current_situation|'
            "services_discussed|decision_makers|timeline|budget_signals|objections|"
            'open_questions|opportunities", '
            '"title": str, "description": str, "confidence": "high|medium|low", '
            '"quote": str|null, "timestamp": str|null, "speaker": str|null}\n'
            "  ]\n"
            "}\n\n"
            f"CONTEXT:\n{json.dumps(ctx, indent=2)}"
        )
        try:
            raw = self._chat(system, user)
            parsed = _extract_json(raw)
            counts = parsed.get("counts") or {}
            fallback = self._fallback.analyze_prospect(prospect_id)
            result = {
                "prospect_id": prospect_id,
                "status": "complete",
                "provider": "openrouter",
                "model": self.settings.openrouter_model,
                "steps": fallback["steps"],
                "counts": {
                    "goals": int(counts.get("goals", fallback["counts"]["goals"])),
                    "pain_points": int(
                        counts.get("pain_points", fallback["counts"]["pain_points"])
                    ),
                    "opportunities": int(
                        counts.get("opportunities", fallback["counts"]["opportunities"])
                    ),
                    "open_questions": int(
                        counts.get("open_questions", fallback["counts"]["open_questions"])
                    ),
                },
                "summary": parsed.get("summary") or fallback["summary"],
                "insights": parsed.get("insights") or [],
            }
            # Keep demo evidence UI working: store AI summary on prospect runtime if needed
            data_loader.runtime().setdefault("ai_summaries", {})[prospect_id] = result[
                "summary"
            ]
            data_loader.runtime().setdefault("ai_insights", {})[prospect_id] = result[
                "insights"
            ]
            return result
        except Exception:
            # Soft-fail to deterministic demo so the POC remains demoable
            fallback = self._fallback.analyze_prospect(prospect_id)
            fallback["provider"] = "mock_fallback"
            return fallback

    def generate_questionnaire(self, prospect_id: str) -> dict[str, Any]:
        ctx = self._context(prospect_id)
        template = self._fallback.generate_questionnaire(prospect_id)
        system = (
            "You draft discovery questionnaires for SimpliCreative strategists. "
            "Return ONLY valid JSON. Prefill suggested answers from the call; mark gaps honestly."
        )
        user = (
            "Generate or refine a questionnaire for this prospect.\n"
            "Return JSON:\n"
            "{\n"
            '  "id": str,\n'
            '  "prospect_id": str,\n'
            '  "status": "ai_generated",\n'
            '  "title": "AI Generated Questionnaire",\n'
            '  "questions": [\n'
            '    {"id": str, "prompt": str, "ai_suggested_answer": str, '
            '"status": "pending", "evidence_ids": []}\n'
            "  ]\n"
            "}\n"
            "Include 5-8 questions. Prefer refining this template structure:\n"
            f"{json.dumps(template, indent=2)}\n\n"
            f"CONTEXT:\n{json.dumps(ctx, indent=2)}"
        )
        try:
            parsed = _extract_json(self._chat(system, user))
            parsed["prospect_id"] = prospect_id
            parsed["status"] = parsed.get("status") or "ai_generated"
            parsed["title"] = parsed.get("title") or "AI Generated Questionnaire"
            if not parsed.get("id"):
                parsed["id"] = f"q-{prospect_id}"
            questions = parsed.get("questions") or template["questions"]
            for i, q in enumerate(questions):
                q.setdefault("id", f"q{i + 1}")
                q.setdefault("status", "pending")
                q.setdefault("evidence_ids", [])
            parsed["questions"] = questions
            return parsed
        except Exception:
            out = template
            out["provider"] = "mock_fallback"
            return out

    def generate_assessment(self, prospect_id: str) -> dict[str, Any]:
        ctx = self._context(prospect_id)
        template = self._fallback.generate_assessment(prospect_id)
        system = (
            "You draft strategic assessments for SimpliCreative. "
            "Return ONLY valid JSON. Do not calculate a FAST score or invent pricing. "
            "Include a framework block with status methodology_configuration_pending."
        )
        user = (
            "Generate a strategic assessment for this prospect.\n"
            "Return JSON matching this shape (fill all fields):\n"
            f"{json.dumps(template, indent=2)}\n\n"
            "Rules:\n"
            "- review_state must be needs_human_review\n"
            "- status must be needs_human_review\n"
            "- approved_by must be null\n"
            "- recommended_services use catalog ids/names; quantity as text; no prices\n"
            "- framework.status = methodology_configuration_pending\n\n"
            "- fast_readiness contains flexible, accessible, strategic, and trackable in that order\n"
            "- use needs_validation when the call does not support a firm finding\n"
            "- do not calculate an overall FAST score\n\n"
            f"CONTEXT:\n{json.dumps(ctx, indent=2)}"
        )
        try:
            parsed = _extract_json(self._chat(system, user, temperature=0.3))
            parsed["prospect_id"] = prospect_id
            parsed["id"] = parsed.get("id") or f"a-{prospect_id}"
            parsed["review_state"] = "needs_human_review"
            parsed["status"] = "needs_human_review"
            parsed["approved_by"] = None
            parsed.setdefault(
                "framework",
                {
                    "name": "Strategy Framework",
                    "status": "methodology_configuration_pending",
                    "note": (
                        "Evaluation criteria and scoring rules will be configured after "
                        "SimpliCreative provides process documentation."
                    ),
                },
            )
            # Ensure list fields exist
            for key in (
                "current_challenges",
                "business_goals",
                "key_opportunities",
                "risks",
                "information_gaps",
            ):
                if not isinstance(parsed.get(key), list):
                    parsed[key] = template.get(key, [])
            if not isinstance(parsed.get("recommended_services"), list):
                parsed["recommended_services"] = template["recommended_services"]
            expected_fast = ["flexible", "accessible", "strategic", "trackable"]
            if [item.get("pillar") for item in parsed.get("fast_readiness", [])] != expected_fast:
                parsed["fast_readiness"] = template["fast_readiness"]
            for field in (
                "executive_summary",
                "business_context",
                "recommended_next_step",
            ):
                if not parsed.get(field):
                    parsed[field] = template[field]
            return parsed
        except Exception:
            out = deepcopy(template)
            out["provider"] = "mock_fallback"
            return out

    # ponytail: commercial artifacts stay on demo rate card / seeds — live LLM pricing invents numbers
    def generate_scope(self, prospect_id: str) -> dict[str, Any]:
        return self._fallback.generate_scope(prospect_id)

    def generate_pricing(self, prospect_id: str) -> dict[str, Any]:
        return self._fallback.generate_pricing(prospect_id)

    def generate_proposal(self, prospect_id: str) -> dict[str, Any]:
        return self._fallback.generate_proposal(prospect_id)
