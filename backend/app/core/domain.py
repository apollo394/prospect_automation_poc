from __future__ import annotations

COMPANY_EMAIL_DOMAIN = "simplicreative.com"


def is_company_email(email: str | None) -> bool:
    """Return True only for *@simplicreative.com (case-insensitive)."""
    if not email or not isinstance(email, str):
        return False
    trimmed = email.strip()
    if "@" not in trimmed:
        return False
    local, _, domain = trimmed.rpartition("@")
    if not local or not domain:
        return False
    return domain.lower() == COMPANY_EMAIL_DOMAIN
