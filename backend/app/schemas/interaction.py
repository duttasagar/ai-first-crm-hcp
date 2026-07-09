from pydantic import BaseModel
from typing import Optional


class InteractionBase(BaseModel):
    hcp_name: str
    interaction_type: str
    interaction_date: str
    interaction_time: str
    attendees: Optional[str] = ""
    topics_discussed: Optional[str] = ""
    materials_shared: Optional[str] = ""
    samples_distributed: Optional[str] = ""
    sentiment: Optional[str] = ""
    outcomes: Optional[str] = ""
    followup_actions: Optional[str] = ""
    ai_summary: Optional[str] = ""

class InteractionCreate(InteractionBase):
    pass


class InteractionResponse(InteractionBase):
    id: int
    status: str

    class Config:
        from_attributes = True