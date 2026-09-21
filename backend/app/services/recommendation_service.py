from __future__ import annotations

from app.core import data_loader
from app.schemas.models import Framework, ServiceCatalogItem
from app.services.assessment_service import get_or_create_assessment


def list_services() -> list[ServiceCatalogItem]:
    from app.core import store

    rows = store.list_catalog("services") if store.use_supabase() else data_loader.services()
    return [ServiceCatalogItem(**s) for s in rows]


def list_frameworks() -> list[Framework]:
    from app.core import store

    rows = store.list_catalog("frameworks") if store.use_supabase() else data_loader.frameworks()
    return [Framework(**f) for f in rows]


def recommendations_for(prospect_id: str):
    assessment = get_or_create_assessment(prospect_id)
    return assessment.recommended_services
