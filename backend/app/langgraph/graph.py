from typing import TypedDict
from langgraph.graph import StateGraph, START, END

from app.langgraph.tools import extract_tool
from app.langgraph.search_tool import search_tool
from app.langgraph.followup_tool import followup_tool
from app.langgraph.insight_tool import insight_tool


class GraphState(TypedDict):
    message: str
    interaction: dict
    search_results: list
    followups: str
    insights: str


# Router FIRST
def router(state):
    message = state["message"].lower()

    if (
        "insight" in message
        or "summary" in message
    ):
        return "insight"

    if any(
        phrase in message
        for phrase in [
            "suggest follow up",
            "suggest followup",
            "generate follow up",
            "generate followup",
            "next action",
            "recommend follow up",
        ]
    ):
        return "followup"
    
    if (
        "show" in message
        or "search" in message
        or "last meeting" in message
        or "previous interaction" in message
    ):
        return "search"

    return "extract"


builder = StateGraph(GraphState)

builder.add_node("extract", extract_tool)
builder.add_node("search", search_tool)
builder.add_node("followup", followup_tool)
builder.add_node("insight",insight_tool)

builder.add_conditional_edges(
    START,
    router,
    {
        "extract": "extract",
        "search": "search",
        "followup":"followup",
        "insight": "insight",
    },
)


builder.add_edge("extract", END)
builder.add_edge("search", END)
builder.add_edge( "followup", END)
builder.add_edge("insight", END)


graph = builder.compile()
















