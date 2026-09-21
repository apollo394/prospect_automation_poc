import { describe, expect, it } from "vitest";
import { isPublicAssetPath, PUBLIC_PATH_PREFIXES } from "./middleware";

describe("auth middleware path helpers", () => {
  it("excludes static asset prefixes from auth gating helpers", () => {
    expect(PUBLIC_PATH_PREFIXES).toContain("/_next/static");
    expect(isPublicAssetPath("/_next/static/chunks/main.js")).toBe(true);
    expect(isPublicAssetPath("/_next/image")).toBe(true);
    expect(isPublicAssetPath("/favicon.ico")).toBe(true);
    expect(isPublicAssetPath("/login")).toBe(false);
    expect(isPublicAssetPath("/")).toBe(false);
  });
});
