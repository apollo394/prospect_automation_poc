"""TDD: company-domain claim checks for JWT auth (no network)."""
from __future__ import annotations

import unittest

from app.core.domain import is_company_email
from app.dependencies.auth_claims import AuthUser, claims_to_user


class AuthClaimsTests(unittest.TestCase):
    def test_company_claims_become_user(self):
        user = claims_to_user({"sub": "11111111-1111-1111-1111-111111111111", "email": "lei@simplicreative.com"})
        self.assertIsInstance(user, AuthUser)
        self.assertEqual(user.email, "lei@simplicreative.com")
        self.assertEqual(user.id, "11111111-1111-1111-1111-111111111111")

    def test_non_company_claims_rejected(self):
        with self.assertRaises(ValueError):
            claims_to_user({"sub": "11111111-1111-1111-1111-111111111111", "email": "lei@gmail.com"})

    def test_missing_sub_rejected(self):
        with self.assertRaises(ValueError):
            claims_to_user({"email": "lei@simplicreative.com"})

    def test_domain_helper_still_gates(self):
        self.assertFalse(is_company_email("x@evil.com"))


if __name__ == "__main__":
    unittest.main()
