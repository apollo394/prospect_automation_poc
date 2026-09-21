from __future__ import annotations

import logging
from functools import lru_cache
from typing import Any

from app.core.config import get_settings
from app.dependencies.auth import access_token_var

logger = logging.getLogger(__name__)


@lru_cache(maxsize=1)
def _service_client():
    from supabase import create_client

    settings = get_settings()
    key = settings.supabase_service_role_key or settings.supabase_publishable_key
    if not settings.supabase_url or not key:
        raise RuntimeError("Supabase credentials are not configured")
    return create_client(settings.supabase_url, key)


def get_supabase(*, prefer_user: bool = True) -> Any:
    """Return a Supabase client. Prefer user JWT so RLS applies."""
    from supabase import create_client

    settings = get_settings()
    token = access_token_var.get() if prefer_user else None
    if token and settings.supabase_publishable_key:
        client = create_client(settings.supabase_url, settings.supabase_publishable_key)
        client.postgrest.auth(token)
        return client
    logger.debug("supabase_client_using_service_or_publishable_key")
    return _service_client()
