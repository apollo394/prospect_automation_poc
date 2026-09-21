from __future__ import annotations

import logging
from contextvars import ContextVar
from typing import Any, Optional

from fastapi import Depends, HTTPException
from fastapi.security import HTTPAuthorizationCredentials, HTTPBearer

from app.core.config import get_settings
from app.dependencies.auth_claims import AuthUser, claims_to_user

logger = logging.getLogger(__name__)
_security = HTTPBearer(auto_error=False)
_jwks_client = None
access_token_var: ContextVar[str | None] = ContextVar("access_token", default=None)


def _get_jwks_client():
    global _jwks_client
    import jwt
    from jwt import PyJWKClient

    settings = get_settings()
    if not settings.supabase_url:
        raise RuntimeError("SUPABASE_URL is not configured")
    if _jwks_client is None:
        _jwks_client = PyJWKClient(settings.supabase_jwks_url, cache_keys=True)
    return _jwks_client


def decode_access_token(token: str) -> dict[str, Any]:
    import jwt

    settings = get_settings()
    client = _get_jwks_client()
    signing_key = client.get_signing_key_from_jwt(token)
    return jwt.decode(
        token,
        signing_key.key,
        algorithms=["ES256", "RS256"],
        audience="authenticated",
        issuer=f"{settings.supabase_url.rstrip('/')}/auth/v1",
    )


def require_user(
    credentials: Optional[HTTPAuthorizationCredentials] = Depends(_security),
) -> AuthUser:
    settings = get_settings()
    if settings.auth_bypass:
        logger.debug("auth_bypass enabled; using synthetic company user")
        access_token_var.set(None)
        return AuthUser(id="00000000-0000-0000-0000-000000000001", email="dev@simplicreative.com")

    if credentials is None or not credentials.credentials:
        logger.warning("auth_missing_bearer")
        raise HTTPException(status_code=401, detail="Not authenticated")

    try:
        token = credentials.credentials
        claims = decode_access_token(token)
        user = claims_to_user(claims)
        access_token_var.set(token)
        logger.info("auth_ok user_id=%s", user.id)
        return user
    except HTTPException:
        raise
    except Exception as exc:
        logger.warning("auth_failed error_type=%s", type(exc).__name__)
        raise HTTPException(status_code=401, detail="Invalid token") from exc


# Re-export for callers
__all__ = ["AuthUser", "claims_to_user", "require_user", "access_token_var", "decode_access_token"]
