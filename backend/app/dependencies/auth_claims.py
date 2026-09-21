from __future__ import annotations

from dataclasses import dataclass
from typing import Any

from app.core.domain import is_company_email


@dataclass(frozen=True)
class AuthUser:
    id: str
    email: str


def claims_to_user(claims: dict[str, Any]) -> AuthUser:
    """Map verified JWT claims to AuthUser; raise ValueError if invalid."""
    sub = claims.get("sub")
    email = claims.get("email")
    if not sub or not isinstance(sub, str):
        raise ValueError("missing sub")
    if not isinstance(email, str) or not is_company_email(email):
        raise ValueError("email domain not allowed")
    return AuthUser(id=sub, email=email.strip())
