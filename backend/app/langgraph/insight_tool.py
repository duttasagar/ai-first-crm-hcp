import re

from app.db.database import SessionLocal
from app.models.interaction import Interaction
from app.services.ai_service import generate_insights


def insight_tool(state):

    message = state["message"]

    # Extract doctor name
    match = re.search(
        r"dr\.?\s+[a-z]+(?:\s+[a-z]+)?",
        message,
        re.I
    )

    hcp_name = match.group(0) if match else ""

    db = SessionLocal()

    try:

        query = db.query(Interaction)

        # Filter by doctor only if a doctor name is provided
        if hcp_name:
            query = query.filter(
                Interaction.hcp_name.ilike(f"%{hcp_name}%")
            )

        interactions = query.all()

        # Debug
        print("Doctor:", hcp_name)
        print("Records Found:", len(interactions))

        if not interactions:
            return {
                "insights": "No interactions found."
            }

        result = [
            {
                "doctor": i.hcp_name,
                "date": str(i.interaction_date),
                "interaction_type": i.interaction_type,
                "topics": i.topics_discussed,
                "materials": i.materials_shared,
                "samples": i.samples_distributed,
                "sentiment": i.sentiment,
                "outcome": i.outcomes,
                "followup": i.followup_actions,
                "summary": i.ai_summary,
            }
            for i in interactions
        ]

        print(result)

        insights = generate_insights(result)

        return {
            "insights": insights
        }

    finally:
        db.close()