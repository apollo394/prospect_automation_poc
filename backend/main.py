from __future__ import annotations

import os
from pathlib import Path

from dotenv import load_dotenv
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.api.routes import router

# Load backend/.env if present (OPENROUTER_API_KEY, etc.)
load_dotenv(Path(__file__).resolve().parent / ".env")


def _cors_origins() -> list[str]:
    raw = os.getenv("CORS_ORIGINS", "").strip()
    if raw:
        return [origin.strip() for origin in raw.split(",") if origin.strip()]
    return [
        "http://localhost:3002",
        "http://127.0.0.1:3002",
        "http://localhost:3001",
        "http://127.0.0.1:3001",
        "http://localhost:3000",
        "http://127.0.0.1:3000",
    ]


app = FastAPI(title="Prospect Intelligence API", version="0.1.0")

app.add_middleware(
    CORSMiddleware,
    allow_origins=_cors_origins(),
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(router)


@app.get("/")
def root():
    return {
        "product": "Prospect Intelligence",
        "company": "SimpliCreative",
        "docs": "/docs",
    }


if __name__ == "__main__":
    import os

    import uvicorn

    # Project default is 8002 (frontend rewrites /api → :8002).
    # Bare `uvicorn` CLI still defaults to 8000 unless you pass --port or UVICORN_PORT.
    uvicorn.run(
        "main:app",
        host="127.0.0.1",
        port=int(os.getenv("UVICORN_PORT", "8002")),
        reload=True,
    )
