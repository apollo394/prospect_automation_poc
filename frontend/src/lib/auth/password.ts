/** NIST SP 800-63B Rev. 4 oriented rules: length over composition. */

export const PASSWORD_MIN_LENGTH = 15;
export const PASSWORD_MAX_LENGTH = 128;

/** Tiny local denylist — not a substitute for HIBP, but catches obvious choices. */
const COMMON_PASSWORDS = new Set(
  [
    "password",
    "passwordpassword",
    "123456789012345",
    "1234567890123456",
    "qwertyuiopasdfg",
    "letmeinletmein1",
    "simplicreative1",
    "simplicreative12",
    "changemechangeme",
    "iloveyouiloveyou",
  ].map((p) => p.toLowerCase())
);

export type PasswordIssue =
  | "too_short"
  | "too_long"
  | "common"
  | "whitespace_only";

export function validatePassword(password: string): PasswordIssue | null {
  if (!password || !password.trim()) return "whitespace_only";
  if (password.length < PASSWORD_MIN_LENGTH) return "too_short";
  if (password.length > PASSWORD_MAX_LENGTH) return "too_long";
  if (COMMON_PASSWORDS.has(password.toLowerCase())) return "common";
  return null;
}

export function passwordIssueMessage(issue: PasswordIssue): string {
  switch (issue) {
    case "too_short":
      return `Use at least ${PASSWORD_MIN_LENGTH} characters (a passphrase is ideal).`;
    case "too_long":
      return `Password must be at most ${PASSWORD_MAX_LENGTH} characters.`;
    case "common":
      return "That password is too common. Choose something harder to guess.";
    case "whitespace_only":
      return "Enter a password.";
  }
}

export function passwordHint(): string {
  return `At least ${PASSWORD_MIN_LENGTH} characters. Prefer a long passphrase; special characters are optional.`;
}
