from __future__ import annotations

import os
import unittest
from unittest import mock

# Ensure settings cache sees AUTH_BYPASS for API tests without Supabase.
os.environ.setdefault("AUTH_BYPASS", "1")

from fastapi.testclient import TestClient

from main import app


class AuthBypassApiTests(unittest.TestCase):
    def setUp(self):
        self.client = TestClient(app)

    def test_health_is_public(self):
        response = self.client.get("/api/health")
        self.assertEqual(response.status_code, 200)

    def test_protected_route_works_with_bypass(self):
        response = self.client.get("/api/journeys")
        self.assertEqual(response.status_code, 200)
        self.assertIsInstance(response.json(), list)


class AuthRequiredApiTests(unittest.TestCase):
    def test_missing_bearer_returns_401_when_auth_enforced(self):
        with mock.patch("app.dependencies.auth.get_settings") as gs:
            settings = mock.Mock()
            settings.auth_bypass = False
            settings.supabase_url = "https://example.supabase.co"
            settings.supabase_jwks_url = "https://example.supabase.co/auth/v1/.well-known/jwks.json"
            gs.return_value = settings
            # Clear lru_cache on get_settings used elsewhere
            from app.core.config import get_settings

            get_settings.cache_clear()
            client = TestClient(app)
            response = client.get("/api/journeys")
            self.assertEqual(response.status_code, 401)
            get_settings.cache_clear()


if __name__ == "__main__":
    unittest.main()
