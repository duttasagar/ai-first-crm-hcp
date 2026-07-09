from app.services.ai_service import generate_followups


def followup_tool(state):

    interaction = state.get("interaction", {})

    result = generate_followups(
        interaction
    )

    return {
        "followups": result
    }






