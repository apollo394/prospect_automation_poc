export const COMPANY_EMAIL_DOMAIN = "simplicreative.com";

/** Return true only for *@simplicreative.com (case-insensitive). */
export function isCompanyEmail(email: string | null | undefined): boolean {
  if (!email || typeof email !== "string") return false;
  const trimmed = email.trim();
  const at = trimmed.lastIndexOf("@");
  if (at <= 0 || at === trimmed.length - 1) return false;
  const domain = trimmed.slice(at + 1).toLowerCase();
  return domain === COMPANY_EMAIL_DOMAIN;
}
