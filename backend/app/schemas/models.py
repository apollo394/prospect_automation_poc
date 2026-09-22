from __future__ import annotations

from typing import Any, Literal, Optional

from pydantic import BaseModel, Field, model_validator


Confidence = Literal["high", "medium", "low"]
ReviewState = Literal["ai_generated", "needs_human_review", "approved"]


class Evidence(BaseModel):
    id: str
    prospect_id: str
    source: str
    source_type: str
    timestamp: str
    quote: str
    speaker: Optional[str] = None


class Insight(BaseModel):
    id: str
    prospect_id: str
    category: str
    title: str
    description: str
    confidence: Confidence
    evidence_ids: list[str] = Field(default_factory=list)
    evidence: list[Evidence] = Field(default_factory=list)


class Prospect(BaseModel):
    id: str
    company_name: str
    website: str
    lead_source: str
    stage: str
    status: str
    assigned_to: str
    last_activity: str
    last_activity_label: str
    ai_analysis: str
    review_status: str
    next_action: str
    summary: str
    created_at: str
    updated_at: str


class WorkQueueItem(BaseModel):
    prospect_id: str
    company_name: str
    headline: str
    detail: str
    action_label: str
    action: str
    href: str


class AnalysisStep(BaseModel):
    key: str
    label: str
    done: bool


class AnalysisResult(BaseModel):
    prospect_id: str
    status: str
    steps: list[AnalysisStep]
    counts: dict[str, int]
    summary: str
    provider: Optional[str] = None
    model: Optional[str] = None


class Question(BaseModel):
    id: str
    prompt: str
    ai_suggested_answer: str
    status: str
    evidence_ids: list[str] = Field(default_factory=list)
    edited_answer: Optional[str] = None
    evidence: list[Evidence] = Field(default_factory=list)


class Questionnaire(BaseModel):
    id: str
    prospect_id: str
    status: str
    title: str
    questions: list[Question]


class RecommendedService(BaseModel):
    service_id: str
    name: str
    reason: str
    quantity: str
    status: str


class FrameworkInfo(BaseModel):
    name: str
    status: str
    note: str


FastPillar = Literal["flexible", "accessible", "strategic", "trackable"]
FastReadinessStatus = Literal["ready", "needs_work", "needs_validation"]


class FastReadinessItem(BaseModel):
    pillar: FastPillar
    label: str
    status: FastReadinessStatus
    finding: str
    evidence_ids: list[str] = Field(default_factory=list)
    suggested_action: str
    service_ids: list[str] = Field(default_factory=list)


class Diagnosis(BaseModel):
    summary: str = ""
    primary_friction: str = ""
    affected_growth_drivers: list[str] = Field(default_factory=list)
    evidence_ids: list[str] = Field(default_factory=list)


class Assessment(BaseModel):
    id: str
    prospect_id: str
    status: str
    review_state: ReviewState
    approved_by: Optional[str] = None
    executive_summary: str
    business_context: str
    current_challenges: list[str]
    business_goals: list[str]
    key_opportunities: list[str]
    risks: list[str]
    information_gaps: list[str]
    recommended_next_step: str
    recommended_services: list[RecommendedService]
    framework: FrameworkInfo
    fast_readiness: list[FastReadinessItem]
    diagnosis: Diagnosis = Field(default_factory=Diagnosis)

    @model_validator(mode="after")
    def validate_fast_pillars(self):
        expected = ["flexible", "accessible", "strategic", "trackable"]
        if [item.pillar for item in self.fast_readiness] != expected:
            raise ValueError("FAST readiness must contain each pillar once in FAST order")
        return self


class IntelligenceCategory(BaseModel):
    key: str
    label: str
    count: int
    insights: list[Insight]


class IntelligenceResponse(BaseModel):
    prospect_id: str
    categories: list[IntelligenceCategory]
    summary: str


class QuestionAction(BaseModel):
    question_id: str
    action: Literal["accept", "edit", "reject"]
    edited_answer: Optional[str] = None


class AssessmentAction(BaseModel):
    action: Literal["approve", "edit", "regenerate"]
    approved_by: Optional[str] = "Lei Lani Fera"
    edits: Optional[dict[str, Any]] = None


class ServiceCatalogItem(BaseModel):
    id: str
    name: str
    description: str
    configurable: bool
    unit_price: Optional[float] = None
    unit: Optional[str] = None
    currency: Optional[str] = "USD"


class Framework(BaseModel):
    id: str
    name: str
    status: str
    description: str
    criteria: list[Any] = Field(default_factory=list)
    evaluation_rules: list[Any] = Field(default_factory=list)
    note: str


class ScopePhase(BaseModel):
    id: str
    name: str
    duration: str
    deliverables: list[str] = Field(default_factory=list)
    services: list[str] = Field(default_factory=list)
    fast_pillars: list[str] = Field(default_factory=list)


class Scope(BaseModel):
    id: str
    prospect_id: str
    status: str
    review_state: ReviewState
    approved_by: Optional[str] = None
    title: str
    summary: str
    phases: list[ScopePhase] = Field(default_factory=list)
    exclusions: list[str] = Field(default_factory=list)
    assumptions: list[str] = Field(default_factory=list)
    timeline_note: str = ""


class PricingLineItem(BaseModel):
    service_id: str
    name: str
    quantity_label: str
    unit_price: float
    amount: float
    optional: bool = False
    fast_rationale: str = ""


class BudgetContext(BaseModel):
    summary: str = ""
    constraints: list[str] = Field(default_factory=list)
    evidence_ids: list[str] = Field(default_factory=list)


class Pricing(BaseModel):
    id: str
    prospect_id: str
    status: str
    review_state: ReviewState
    approved_by: Optional[str] = None
    currency: str = "USD"
    line_items: list[PricingLineItem] = Field(default_factory=list)
    subtotal: float
    discount_label: Optional[str] = None
    discount_amount: Optional[float] = None
    total: float
    notes: str = ""
    budget_context: BudgetContext = Field(default_factory=BudgetContext)


class RecommendationReason(BaseModel):
    title: str
    detail: str
    evidence_ids: list[str] = Field(default_factory=list)


class Proposal(BaseModel):
    id: str
    prospect_id: str
    status: str
    review_state: ReviewState
    approved_by: Optional[str] = None
    title: str
    prepared_for: str
    prepared_by: str
    valid_until: str
    executive_summary: str
    strategy_snapshot: str
    scope_snapshot: str
    investment_summary: str
    next_steps: list[str] = Field(default_factory=list)
    closing_note: str = ""
    fast_readiness: list[FastReadinessItem] = Field(default_factory=list)
    why_this_recommendation: list[RecommendationReason] = Field(default_factory=list)
    knowledge_note: str = ""


class CommercialAction(BaseModel):
    action: Literal["approve", "edit", "regenerate"]
    approved_by: Optional[str] = "Lei Lani Fera"
    edits: Optional[dict[str, Any]] = None


class AnalyzeCallRequest(BaseModel):
    website: str
    transcript_text: str
    company_name: Optional[str] = None


class JourneyAction(BaseModel):
    action: Literal[
        "prepare_diagnostic",
        "import_transcript",
        "generate_questionnaire",
        "review_returned_questionnaire",
        "override_route",
        "approve_recommendation",
        "approve_scope",
        "reveal_pricing",
        "approve_pricing",
        "reveal_proposal",
        "approve_proposal",
    ]
    role: str = "Authorized SimpliCreative reviewer"
    actor: str = "synthetic-reviewer"
    reason: str = ""
    edits: Optional[dict[str, Any]] = None


class BlueprintAction(BaseModel):
    action: Literal[
        "activate_blueprint",
        "generate_blueprint_questionnaire",
        "validate_questionnaire",
        "complete_research",
        "approve_intelligence",
        "approve_draft_report",
        "approve_strategy_deck",
        "complete_strategy_session",
        "approve_final_blueprint",
        "approve_handoff",
    ]
    role: str = "Authorized SimpliCreative reviewer"
    actor: str = "synthetic-reviewer"
    reason: str = ""
    edits: Optional[dict[str, Any]] = None
