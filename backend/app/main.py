from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.api.routes.health import router as health_router
from app.api.routes.interaction import router as interaction_router
from app.api.routes.chat import router as chat_router

from app.db.database import Base, engine
from app.models.interaction import Interaction
Base.metadata.create_all(bind=engine)

app = FastAPI(
    title="AI First CRM",
    version="1.0.0"
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(health_router)
app.include_router(interaction_router)
app.include_router(chat_router)