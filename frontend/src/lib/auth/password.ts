/** Signup password rules + live requirement checks. */

export const PASSWORD_MIN_LENGTH = 8;
export const PASSWORD_MAX_LENGTH = 128;

export type PasswordRequirementId = "length" | "number_or_symbol" | "mixed_case";

export type PasswordRequirement = {
  id: PasswordRequirementId;
  label: string;
  met: boolean;
};

const COMMON_PASSWORDS = new Set(
  [
    "password",
    "password1",
    "password!",
    "Password1",
    "Password1!",
    "12345678",
    "qwerty12",
    "abcdefgh",
    "changeme1",
    "letmein1!",
  ].map((p) => p.toLowerCase())
);

export function passwordRequirements(password: string): PasswordRequirement[] {
  const value = password ?? "";
  return [
    {
      id: "length",
      label: `At least ${PASSWORD_MIN_LENGTH} characters`,
      met: value.length >= PASSWORD_MIN_LENGTH,
    },
    {
      id: "number_or_symbol",
      label: "At least one number (0-9) or a symbol",
      met: /[\d\W_]/.test(value),
    },
    {
      id: "mixed_case",
      label: "Lowercase (a-z) and uppercase (A-Z)",
      met: /[a-z]/.test(value) && /[A-Z]/.test(value),
    },
  ];
}

export type PasswordIssue =
  | "requirements"
  | "common"
  | "too_long"
  | "whitespace_only"
  | "mismatch";

export function validatePassword(password: string): PasswordIssue | null {
  if (!password || !password.trim()) return "whitespace_only";
  if (password.length > PASSWORD_MAX_LENGTH) return "too_long";
  if (COMMON_PASSWORDS.has(password.toLowerCase())) return "common";
  if (passwordRequirements(password).some((r) => !r.met)) return "requirements";
  return null;
}

export function passwordsMatch(password: string, confirm: string): boolean {
  return password.length > 0 && password === confirm;
}

export function passwordIssueMessage(issue: PasswordIssue): string {
  switch (issue) {
    case "requirements":
      return "Password does not meet all requirements yet.";
    case "too_long":
      return `Password must be at most ${PASSWORD_MAX_LENGTH} characters.`;
    case "common":
      return "That password is too common. Choose something harder to guess.";
    case "whitespace_only":
      return "Enter a password.";
    case "mismatch":
      return "Passwords do not match.";
  }
}
