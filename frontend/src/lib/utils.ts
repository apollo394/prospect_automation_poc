import { clsx, type ClassValue } from "clsx";

export function cn(...inputs: ClassValue[]) {
  return clsx(inputs);
}

export function greetingForNow(date = new Date()) {
  const hour = date.getHours();
  if (hour < 12) return "Good morning";
  if (hour < 17) return "Good afternoon";
  return "Good evening";
}

export function labelAnalysis(value: string) {
  const map: Record<string, string> = {
    ready: "Ready",
    complete: "Complete",
    not_started: "Not started",
  };
  return map[value] || value;
}

export function labelReview(value: string) {
  const map: Record<string, string> = {
    needs_review: "Needs Review",
    in_progress: "In Progress",
    not_started: "Not started",
    approved: "Approved",
  };
  return map[value] || value;
}
