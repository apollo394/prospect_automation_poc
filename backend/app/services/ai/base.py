from __future__ import annotations

from abc import ABC, abstractmethod
from typing import Any


class AIProvider(ABC):
    @abstractmethod
    def analyze_prospect(self, prospect_id: str) -> dict[str, Any]:
        raise NotImplementedError

    @abstractmethod
    def generate_questionnaire(self, prospect_id: str) -> dict[str, Any]:
        raise NotImplementedError

    @abstractmethod
    def generate_assessment(self, prospect_id: str) -> dict[str, Any]:
        raise NotImplementedError

    @abstractmethod
    def generate_scope(self, prospect_id: str) -> dict[str, Any]:
        raise NotImplementedError

    @abstractmethod
    def generate_pricing(self, prospect_id: str) -> dict[str, Any]:
        raise NotImplementedError

    @abstractmethod
    def generate_proposal(self, prospect_id: str) -> dict[str, Any]:
        raise NotImplementedError
