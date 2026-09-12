from __future__ import annotations

from functools import lru_cache

from app.core.config import get_settings
from app.services.ai.base import AIProvider
from app.services.ai.mock_provider import MockAIProvider


@lru_cache(maxsize=1)
def get_ai_provider() -> AIProvider:
    settings = get_settings()
    if settings.openrouter_enabled:
        from app.services.ai.openrouter_provider import OpenRouterProvider

        return OpenRouterProvider()
    return MockAIProvider()


def provider_info() -> dict[str, str | bool]:
    settings = get_settings()
    return {
        "provider": settings.ai_provider if settings.openrouter_enabled else "mock",
        "model": settings.openrouter_model if settings.openrouter_enabled else "deterministic-demo",
        "openrouter_configured": bool(settings.openrouter_api_key),
    }
