from app.services.ai_service import extract_interaction


def extract_tool(state):

    # data = extract_interaction(
    #     state["message"]
    # )
    data = extract_interaction(
    state["message"],
    state["interaction"]
)

    return {
        "interaction": data
    }