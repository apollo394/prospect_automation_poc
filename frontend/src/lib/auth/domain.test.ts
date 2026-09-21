import { describe, expect, it } from "vitest";
import { COMPANY_EMAIL_DOMAIN, isCompanyEmail } from "./domain";

describe("isCompanyEmail", () => {
  it("accepts company emails", () => {
    expect(isCompanyEmail("user@simplicreative.com")).toBe(true);
    expect(isCompanyEmail("User.Name@SimpliCreative.com")).toBe(true);
    expect(isCompanyEmail("  lei@simplicreative.com  ")).toBe(true);
  });

  it("rejects non-company emails", () => {
    const cases = [
      "",
      "user",
      "user@",
      "@simplicreative.com",
      "user@gmail.com",
      "user@simplicreative.com.evil.com",
      "user@evilsimplicreative.com",
      "user@simplicreative.co",
      null,
      undefined,
    ];
    for (const email of cases) {
      expect(isCompanyEmail(email), String(email)).toBe(false);
    }
  });

  it("exports the expected domain constant", () => {
    expect(COMPANY_EMAIL_DOMAIN).toBe("simplicreative.com");
  });
});
