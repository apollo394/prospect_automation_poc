"""Guardrails encoded in SQL migrations (no live DB required)."""
from __future__ import annotations

import unittest
from pathlib import Path

ROOT = Path(__file__).resolve().parents[2]
MIGRATIONS = ROOT / "supabase" / "migrations"


class RlsMigrationTests(unittest.TestCase):
    def test_auth_migration_denies_non_company_domain(self):
        sql = (MIGRATIONS / "20260921180000_auth_profiles_domain.sql").read_text()
        self.assertIn("private.is_company_email", sql)
        self.assertIn("hook_before_user_created", sql)
        self.assertIn("simplicreative.com", sql)
        self.assertIn("enable row level security", sql)
        self.assertIn("revoke all on table public.profiles from anon", sql)

    def test_app_migration_enables_rls_and_revokes_anon(self):
        sql = (MIGRATIONS / "20260921180100_app_tables_rls.sql").read_text()
        self.assertIn("enable row level security", sql)
        self.assertIn("revoke all on table public.%I from anon", sql)
        self.assertIn("journeys", sql)
        self.assertIn("prospects", sql)


if __name__ == "__main__":
    unittest.main()
