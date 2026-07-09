from sqlalchemy.orm import Session
from app.db.database import SessionLocal
from app.models.interaction import Interaction
import re


def search_tool(state):

    print("SEARCH TOOL CALLED")

    message = state["message"]

    match = re.search(
        r"dr\.?\s+[a-z]+(?:\s+[a-z]+)?",
        message,
        re.I
    )

    doctor = match.group(0) if match else message

    print("Doctor:", doctor)

    db: Session = SessionLocal()

    try:
        interactions = (
            db.query(Interaction)
            .filter(
                Interaction.hcp_name.ilike(f"%{doctor}%")
            )
            .all()
        )


        results = [
    {
        "id": item.id,
        "hcp_name": item.hcp_name,
        "interaction_date": item.interaction_date,
        "interaction_time": item.interaction_time,
        "interaction_type": item.interaction_type,
        "attendees": item.attendees,
        "topics_discussed": item.topics_discussed,
        "materials_shared": item.materials_shared,
        "samples_distributed": item.samples_distributed,
        "sentiment": item.sentiment,
        "outcomes": item.outcomes,
        "followup_actions": item.followup_actions,
        "ai_summary": item.ai_summary
    }
    for item in interactions
]

        print("SEARCH RESULTS:", results)

        return {
            "message": state["message"],
            "interaction": state.get("interaction", {}),
            "search_results": results
        }

    finally:
        db.close()



