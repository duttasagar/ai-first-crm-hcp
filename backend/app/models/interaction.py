from sqlalchemy import Column, Integer, String, Text, DateTime
from sqlalchemy.sql import func

from app.db.database import Base


class Interaction(Base):
    __tablename__ = "interactions"

    id = Column(Integer, primary_key=True, index=True)

    hcp_name = Column(String(255), nullable=False)

    interaction_type = Column(String(100))

    interaction_date = Column(String(50))

    interaction_time = Column(String(50))

    attendees = Column(Text)

    topics_discussed = Column(Text)

    materials_shared = Column(Text)

    samples_distributed = Column(Text)

    sentiment = Column(String(50))

    outcomes = Column(Text)

    followup_actions = Column(Text)

    ai_summary = Column(Text)

    created_at = Column(DateTime(timezone=True), server_default=func.now())
    
    status = Column(String(20), default="draft")
    