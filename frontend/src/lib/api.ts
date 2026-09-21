export type Prospect = {
  id: string;
  company_name: string;
  website: string;
  lead_source: string;
  stage: string;
  status: string;
  assigned_to: string;
  last_activity: string;
  last_activity_label: string;
  ai_analysis: string;
  review_status: string;
  next_action: string;
  summary: string;
  created_at: string;
  updated_at: string;
};

export type Evidence = {
  id: string;
  prospect_id: string;
  source: string;
  source_type: string;
  timestamp: string;
  quote: string;
  speaker?: string;
};

export type Insight = {
  id: string;
  prospect_id: string;
  category: string;
  title: string;
  description: string;
  confidence: "high" | "medium" | "low";
  evidence_ids: string[];
  evidence: Evidence[];
};

export type WorkQueueItem = {
  prospect_id: string;
  company_name: string;
  headline: string;
  detail: string;
  action_label: string;
  action: string;
  href: string;
};

export type AnalysisResult = {
  prospect_id: string;
  status: string;
  steps: { key: string; label: string; done: boolean }[];
  counts: Record<string, number>;
  summary: string;
};

export type Question = {
  id: string;
  prompt: string;
  ai_suggested_answer: string;
  status: string;
  evidence_ids: string[];
  edited_answer?: string | null;
  evidence?: Evidence[];
};

export type Questionnaire = {
  id: string;
  prospect_id: string;
  status: string;
  title: string;
  questions: Question[];
};

export type RecommendedService = {
  service_id: string;
  name: string;
  reason: string;
  quantity: string;
  status: string;
};

export type FastPillar = "flexible" | "accessible" | "strategic" | "trackable";
export type FastReadinessStatus = "ready" | "needs_work" | "needs_validation";

export type FastReadinessItem = {
  pillar: FastPillar;
  label: string;
  status: FastReadinessStatus;
  finding: string;
  evidence_ids: string[];
  suggested_action: string;
  service_ids: string[];
};

export type Assessment = {
  id: string;
  prospect_id: string;
  status: string;
  review_state: "ai_generated" | "needs_human_review" | "approved";
  approved_by?: string | null;
  executive_summary: string;
  business_context: string;
  current_challenges: string[];
  business_goals: string[];
  key_opportunities: string[];
  risks: string[];
  information_gaps: string[];
  recommended_next_step: string;
  recommended_services: RecommendedService[];
  framework: { name: string; status: string; note: string };
  fast_readiness: FastReadinessItem[];
  diagnosis: {
    summary: string;
    primary_friction: string;
    affected_growth_drivers: string[];
    evidence_ids: string[];
  };
};

export type ScopePhase = {
  id: string;
  name: string;
  duration: string;
  deliverables: string[];
  services: string[];
  fast_pillars: string[];
};

export type Scope = {
  id: string;
  prospect_id: string;
  status: string;
  review_state: "ai_generated" | "needs_human_review" | "approved";
  approved_by?: string | null;
  title: string;
  summary: string;
  phases: ScopePhase[];
  exclusions: string[];
  assumptions: string[];
  timeline_note: string;
};

export type PricingLineItem = {
  service_id: string;
  name: string;
  quantity_label: string;
  unit_price: number;
  amount: number;
  optional?: boolean;
  fast_rationale: string;
};

export type Pricing = {
  id: string;
  prospect_id: string;
  status: string;
  review_state: "ai_generated" | "needs_human_review" | "approved";
  approved_by?: string | null;
  currency: string;
  line_items: PricingLineItem[];
  subtotal: number;
  discount_label?: string | null;
  discount_amount?: number | null;
  total: number;
  notes: string;
  budget_context: {
    summary: string;
    constraints: string[];
    evidence_ids: string[];
  };
};

export type Proposal = {
  id: string;
  prospect_id: string;
  status: string;
  review_state: "ai_generated" | "needs_human_review" | "approved";
  approved_by?: string | null;
  title: string;
  prepared_for: string;
  prepared_by: string;
  valid_until: string;
  executive_summary: string;
  strategy_snapshot: string;
  scope_snapshot: string;
  investment_summary: string;
  next_steps: string[];
  closing_note: string;
  fast_readiness: FastReadinessItem[];
  why_this_recommendation: {
    title: string;
    detail: string;
    evidence_ids: string[];
  }[];
  knowledge_note: string;
};

import type { GovernedJourney, JourneyAction } from "@/lib/types";
export type { GovernedJourney, JourneyAction } from "@/lib/types";

type CommercialActionBody = {
  action: string;
  approved_by?: string;
  edits?: Record<string, unknown>;
};

export type IntelligenceResponse = {
  prospect_id: string;
  summary: string;
  categories: {
    key: string;
    label: string;
    count: number;
    insights: Insight[];
  }[];
};

const API_BASE = process.env.NEXT_PUBLIC_API_BASE || "";

async function getAccessToken(): Promise<string | null> {
  if (typeof window === "undefined") return null;
  if (!process.env.NEXT_PUBLIC_SUPABASE_URL || !process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY) {
    return null;
  }
  const { createClient } = await import("@/lib/supabase/client");
  const supabase = createClient();
  const { data } = await supabase.auth.getSession();
  return data.session?.access_token ?? null;
}

async function request<T>(path: string, init?: RequestInit): Promise<T> {
  const token = await getAccessToken();
  const res = await fetch(`${API_BASE}${path}`, {
    ...init,
    headers: {
      "Content-Type": "application/json",
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
      ...(init?.headers || {}),
    },
    cache: "no-store",
  });
  if (res.status === 401 && typeof window !== "undefined") {
    const next = `${window.location.pathname}${window.location.search}`;
    window.location.assign(`/login?next=${encodeURIComponent(next)}`);
    throw new Error("Not authenticated");
  }
  if (!res.ok) {
    const text = await res.text();
    throw new Error(text || `Request failed: ${res.status}`);
  }
  return res.json() as Promise<T>;
}

export const api = {
  health: () => request<{ status: string }>("/api/health"),
  journeys: () => request<GovernedJourney[]>("/api/journeys"),
  journey: (id: string) => request<GovernedJourney>(`/api/journeys/${id}`),
  journeyAction: async (
    id: string,
    body: {
      action: JourneyAction;
      actor?: string;
      role?: "Authorized SimpliCreative reviewer";
      reason?: string;
      edits?: Record<string, unknown>;
    }
  ) => {
    const journey = await request<GovernedJourney>(`/api/journeys/${id}/actions`, {
      method: "POST",
      body: JSON.stringify(body),
    });
    if (typeof window !== "undefined") window.dispatchEvent(new Event("sc-journey-updated"));
    return journey;
  },
  prospects: () => request<Prospect[]>("/api/prospects"),
  prospect: (id: string) =>
    request<{ prospect: Prospect; transcript: unknown }>(`/api/prospects/${id}`),
  analyze: (id: string) =>
    request<AnalysisResult>(`/api/prospects/${id}/analyze`, { method: "POST" }),
  analyzeCall: (body: {
    website: string;
    transcript_text: string;
    company_name?: string;
  }) =>
    request<{ prospect_id: string; reused?: boolean }>("/api/analyze-call", {
      method: "POST",
      body: JSON.stringify(body),
    }),
  intelligence: (id: string) =>
    request<IntelligenceResponse>(`/api/prospects/${id}/intelligence`),
  workQueue: () => request<WorkQueueItem[]>("/api/work-queue"),
  questionnaire: (id: string) =>
    request<Questionnaire>(`/api/prospects/${id}/questionnaire`),
  createQuestionnaire: (id: string) =>
    request<Questionnaire>(`/api/prospects/${id}/questionnaire`, {
      method: "POST",
      body: "null",
    }),
  questionnaireAction: (
    id: string,
    body: { question_id: string; action: string; edited_answer?: string }
  ) =>
    request<Questionnaire>(`/api/prospects/${id}/questionnaire`, {
      method: "POST",
      body: JSON.stringify(body),
    }),
  assessment: (id: string) =>
    request<Assessment>(`/api/prospects/${id}/assessment`),
  createAssessment: (id: string) =>
    request<Assessment>(`/api/prospects/${id}/assessment`, {
      method: "POST",
      body: JSON.stringify({ action: "regenerate" }),
    }),
  assessmentAction: (
    id: string,
    body: { action: string; approved_by?: string; edits?: Record<string, unknown> }
  ) =>
    request<Assessment>(`/api/prospects/${id}/assessment`, {
      method: "POST",
      body: JSON.stringify(body),
    }),
  scope: (id: string) => request<Scope>(`/api/prospects/${id}/scope`),
  scopeAction: (id: string, body: CommercialActionBody) =>
    request<Scope>(`/api/prospects/${id}/scope`, {
      method: "POST",
      body: JSON.stringify(body),
    }),
  pricing: (id: string) => request<Pricing>(`/api/prospects/${id}/pricing`),
  pricingAction: (id: string, body: CommercialActionBody) =>
    request<Pricing>(`/api/prospects/${id}/pricing`, {
      method: "POST",
      body: JSON.stringify(body),
    }),
  proposal: (id: string) => request<Proposal>(`/api/prospects/${id}/proposal`),
  proposalAction: (id: string, body: CommercialActionBody) =>
    request<Proposal>(`/api/prospects/${id}/proposal`, {
      method: "POST",
      body: JSON.stringify(body),
    }),
  frameworks: () => request<unknown[]>("/api/frameworks"),
  knowledgeSources: () =>
    request<
      Array<{
        id: string;
        file_name: string;
        title: string;
        folder: string;
        source_location: string;
        source_id: string | null;
        version: string | null;
        extension: string;
      }>
    >("/api/knowledge/sources"),
  services: () => request<unknown[]>("/api/services"),
};
