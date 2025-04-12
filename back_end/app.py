from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import List, Optional
from services.career_service import CareerService
from services.analysis_service import AnalysisService
from routes.expert_routes import expert_bp
from routes.community_routes import community_bp
from routes.career_routes import career_bp

app = FastAPI()

# CORS configuration
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Services initialization
career_service = CareerService()
analysis_service = AnalysisService()

# Expert data model
class Expert(BaseModel):
    id: int
    name: str
    domain: str
    role: str
    company: str
    linkedin: str
    github: Optional[str] = None
    twitter: Optional[str] = None
    expertise: List[str]

# Expert routes
@app.get("/api/experts/{domain}")
async def get_experts(domain: str):
    if domain in experts_data:
        return experts_data[domain]
    return []

@app.get("/api/experts")
async def get_all_experts():
    return experts_data

# Include routes from blueprints
app.include_router(expert_bp)
app.include_router(community_bp)
app.include_router(career_bp)