from __future__ import annotations

from app.core import data_loader
from app.schemas.models import Framework, ServiceCatalogItem
from app.services.assessment_service import get_or_create_assessment


def list_services() -> list[ServiceCatalogItem]:
    return [ServiceCatalogItem(**s) for s in data_loader.services()]


def list_frameworks() -> list[Framework]:
    return [Framework(**f) for f in data_loader.frameworks()]


def recommendations_for(prospect_id: str):
    assessment = get_or_create_assessment(prospect_id)
    return assessment.recommended_services
