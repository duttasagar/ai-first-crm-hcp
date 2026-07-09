from fastapi import APIRouter

from app.langgraph.graph import graph

router = APIRouter(
    prefix="/chat",
    tags=["Chat"]
)


@router.post("/")
def chat(data: dict):

    result = graph.invoke({
         "message": data["message"],
        "interaction": data["interaction"]
    })

    print("GRAPH RESULT:")
    print(result)

    # Search Tool
    if "search_results" in result:
        return {
            "type": "search",
            "results": result["search_results"]
        }
    

    if "followups" in result:
        return {
            "type":"followup",
            "followups":result["followups"]
        }
    
    if "insights" in result:
        return {
            "type": "insight",
            "insights": result["insights"]
        }
    

    # Extract Tool
    return {
        "type": "extract",
        "interaction": result["interaction"]
    }