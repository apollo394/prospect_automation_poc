#!/usr/bin/env python3
"""Self-check for commercial pipeline (scope → pricing → proposal). Run from backend/: python scripts/check_commercial.py"""
from __future__ import annotations

import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parents[1]))

from app.schemas.models import Pricing, Proposal, Scope
from app.services.ai.mock_provider import MockAIProvider, synthesize_pricing


def main() -> None:
    ai = MockAIProvider()

    scope = Scope(**ai.generate_scope("apex-metrics"))
    assert scope.prospect_id == "apex-metrics"
    assert len(scope.phases) >= 3, scope.phases
    assert scope.exclusions

    pricing = Pricing(**ai.generate_pricing("apex-metrics"))
    assert pricing.total == 36000, pricing.total
    assert pricing.subtotal == 38000, pricing.subtotal
    required = [i for i in pricing.line_items if not i.optional]
    assert sum(i.amount for i in required) == pricing.subtotal

    proposal = Proposal(**ai.generate_proposal("apex-metrics"))
    assert "Apex Metrics" in proposal.title
    assert proposal.investment_summary
    assert len(proposal.next_steps) >= 3

    # Non-seeded prospect synthesizes from rate card
    synth = synthesize_pricing("abc-company")
    assert synth["total"] > 0
    assert all("unit_price" in i for i in synth["line_items"])

    print("check_commercial: ok")


if __name__ == "__main__":
    main()
