import json

from langchain_groq import ChatGroq

from app.core.config import MODEL_NAME, GROQ_API_KEY
from app.services.prompts import EXTRACT_PROMPT
from datetime import date


llm = ChatGroq(
    model=MODEL_NAME,
    api_key=GROQ_API_KEY,
    temperature=0
)


def extract_interaction(message, current_data):
    print("DATE CHECK:")
    print("{date}" in EXTRACT_PROMPT)
    print(EXTRACT_PROMPT)

    # prompt = EXTRACT_PROMPT.format(
    #     current_data=json.dumps(current_data, indent=2),
    #     message=message
    # )


    prompt = EXTRACT_PROMPT.format(
        today=date.today(),
        current_data=json.dumps(current_data, indent=2),
        message=message
    )

    response = llm.invoke(prompt)

    # new_data = json.loads(response.content)
    content = response.content.strip()

    print("AI OUTPUT:", content)

    if content.startswith("```"):
        content = content.replace("```json", "")
        content = content.replace("```", "")

    new_data = json.loads(content)

    merged = current_data.copy()

    for key, value in new_data.items():
        if value not in ["", None]:
            merged[key] = value

    return merged
    # return json.loads(response.content)



def generate_followups(interaction):

    prompt = f"""

You are an AI CRM assistant.

Based on HCP interaction details,
suggest 3 personalized follow-up actions.

HCP:
{interaction.get("hcp_name")}

Topics:
{interaction.get("topics_discussed")}

Sentiment:
{interaction.get("sentiment")}

Outcome:
{interaction.get("outcomes")}

Materials:
{interaction.get("materials_shared")}


Return only bullet points.

"""

    response = llm.invoke(prompt)

    return response.content





def generate_insights(interactions):

    prompt = f"""
You are an AI CRM assistant for a pharmaceutical sales representative.

Analyze these HCP interactions:

{json.dumps(interactions, indent=2)}

Provide ONLY the following sections.

## Summary

### Common Discussion Topics
- ...

### Positive Sentiment
- ...

### Frequently Shared Materials
- ...

### Sales Opportunities
- ...

### Recommended Next Actions
- ...

Rules:
- Do NOT generate Python code.
- Do NOT generate JSON.
- Do NOT explain your reasoning.
- Do NOT create hypothetical examples.
- Keep the response concise.
- Use bullet points only.
"""
    response = llm.invoke(prompt)

    return response.content








