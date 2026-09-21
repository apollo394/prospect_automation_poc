import { describe, expect, it } from "vitest";
import {
  PASSWORD_MIN_LENGTH,
  passwordRequirements,
  passwordsMatch,
  validatePassword,
} from "./password";

describe("passwordRequirements", () => {
  it("tracks length, number/symbol, and mixed case live", () => {
    const empty = passwordRequirements("");
    expect(empty.every((r) => !r.met)).toBe(true);

    const partial = passwordRequirements("Abcdefg");
    expect(partial.find((r) => r.id === "length")?.met).toBe(false);
    expect(partial.find((r) => r.id === "mixed_case")?.met).toBe(true);
    expect(partial.find((r) => r.id === "number_or_symbol")?.met).toBe(false);

    const ok = passwordRequirements("TeamWork9");
    expect(ok.every((r) => r.met)).toBe(true);
    expect(ok[0].label).toContain(String(PASSWORD_MIN_LENGTH));
  });
});

describe("validatePassword", () => {
  it("rejects incomplete and common passwords", () => {
    expect(validatePassword("")).toBe("whitespace_only");
    expect(validatePassword("short")).toBe("requirements");
    expect(validatePassword("AaBbCcDd")).toBe("requirements");
    expect(validatePassword("password1")).toBe("common");
    expect(validatePassword("abcdefgh")).toBe("common");
  });

  it("accepts passwords that meet all rules", () => {
    expect(validatePassword("TeamWork9")).toBeNull();
    expect(validatePassword("GoodPass!")).toBeNull();
  });

  it("checks retype match", () => {
    expect(passwordsMatch("TeamWork9", "TeamWork9")).toBe(true);
    expect(passwordsMatch("TeamWork9", "TeamWork8")).toBe(false);
    expect(passwordsMatch("", "")).toBe(false);
  });
});
