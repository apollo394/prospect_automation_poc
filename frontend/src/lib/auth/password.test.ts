import { describe, expect, it } from "vitest";
import {
  PASSWORD_MIN_LENGTH,
  passwordIssueMessage,
  validatePassword,
} from "./password";

describe("validatePassword", () => {
  it("rejects short passwords", () => {
    expect(validatePassword("short")).toBe("too_short");
    expect(validatePassword("12345678")).toBe("too_short");
    expect(validatePassword("a".repeat(PASSWORD_MIN_LENGTH - 1))).toBe("too_short");
  });

  it("accepts long passphrases without forced specials", () => {
    expect(validatePassword("correct horse battery staple")).toBeNull();
    expect(validatePassword("a".repeat(PASSWORD_MIN_LENGTH))).toBeNull();
  });

  it("rejects empty and common passwords", () => {
    expect(validatePassword("")).toBe("whitespace_only");
    expect(validatePassword("   ")).toBe("whitespace_only");
    expect(validatePassword("passwordpassword")).toBe("common");
  });

  it("explains issues in plain language", () => {
    expect(passwordIssueMessage("too_short")).toContain(String(PASSWORD_MIN_LENGTH));
  });
});
