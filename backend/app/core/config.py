from __future__ import annotations

import os
from functools import lru_cache


@lru_cache(maxsize=1)
def get_settings() -> "Settings":
    return Settings()


class Settings:
    """Runtime config from environment. Never commit real API keys."""

    def __init__(self) -> None:
        raw_key = os.getenv("OPENROUTER_API_KEY", "").strip()
        placeholder_tokens = {
            "",
            "sk-or-v1-your-key-here",
            "your-key-here",
            "changeme",
        }
        self.openrouter_api_key: str = (
            "" if raw_key.lower() in placeholder_tokens or "your-key" in raw_key.lower() else raw_key
        )
        self.openrouter_base_url: str = os.getenv(
            "OPENROUTER_BASE_URL", "https://openrouter.ai/api/v1"
        ).rstrip("/")
        self.openrouter_model: str = os.getenv(
            "OPENROUTER_MODEL", "anthropic/claude-sonnet-4"
        )
        self.openrouter_site_url: str = os.getenv(
            "OPENROUTER_SITE_URL", "https://simplicreative.com"
        )
        self.openrouter_app_name: str = os.getenv(
            "OPENROUTER_APP_NAME", "Prospect Intelligence"
        )
        # openrouter | mock — auto picks openrouter when key is present unless forced
        forced = os.getenv("AI_PROVIDER", "").strip().lower()
        if forced == "mock":
            self.ai_provider = "mock"
        elif forced == "openrouter":
            self.ai_provider = "openrouter"
        else:
            self.ai_provider = "openrouter" if self.openrouter_api_key else "mock"

    @property
    def openrouter_enabled(self) -> bool:
        return self.ai_provider == "openrouter" and bool(self.openrouter_api_key)
