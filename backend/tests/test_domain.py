import unittest

from app.core.domain import COMPANY_EMAIL_DOMAIN, is_company_email


class CompanyEmailDomainTests(unittest.TestCase):
    def test_accepts_company_email(self):
        self.assertTrue(is_company_email("user@simplicreative.com"))
        self.assertTrue(is_company_email("User.Name@SimpliCreative.com"))
        self.assertTrue(is_company_email("  lei@simplicreative.com  "))

    def test_rejects_non_company_email(self):
        cases = [
            "",
            "user",
            "user@",
            "@simplicreative.com",
            "user@gmail.com",
            "user@simplicreative.com.evil.com",
            "user@evilsimplicreative.com",
            "user@simplicreative.co",
            None,
        ]
        for email in cases:
            with self.subTest(email=email):
                self.assertFalse(is_company_email(email))

    def test_domain_constant(self):
        self.assertEqual(COMPANY_EMAIL_DOMAIN, "simplicreative.com")


if __name__ == "__main__":
    unittest.main()
