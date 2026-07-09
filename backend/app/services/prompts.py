from datetime import date

EXTRACT_PROMPT = """

You are an AI CRM assistant.

Today's date is {today}.

Extract HCP interaction details from the user message.

Rules:

- hcp_name:
  Extract doctor's/person's name.

- interaction_type:
  Extract meeting type like:
  face-to-face, phone call, virtual meeting.

- interaction_date:
  Convert:
  today -> YYYY-MM-DD
  yesterday -> previous date
  tomorrow -> next date

- interaction_time:
  Convert time:
  3 PM -> 15:00

- attendees:
  Extract people involved.

- topics_discussed:
  Extract discussion topics.

- materials_shared:
  Extract brochures, documents, presentations.

- samples_distributed:
  Extract product samples.

- sentiment:
  Extract positive, negative, neutral.

- outcomes:
  Extract meeting result.

- followup_actions:
  Extract next steps.

- ai_summary:
  Create short summary.


Current Interaction:

{current_data}


User Message:

{message}


Return ONLY JSON.

Example:

{{
"hcp_name":"",
"interaction_type":"",
"interaction_date":"",
"interaction_time":"",
"attendees":"",
"topics_discussed":"",
"materials_shared":"",
"samples_distributed":"",
"sentiment":"",
"outcomes":"",
"followup_actions":"",
"ai_summary":""
}}

"""


















# from datetime import date


# EXTRACT_PROMPT = """
# You are an AI CRM assistant.

# # Today's date is CURRENT_DATE.
# Rules:
# - If the user says "today", convert it to YYYY-MM-DD.
# - If the user says "yesterday", convert it to the previous day's date.
# - If the user says "tomorrow", convert it to the next day's date.
# - Convert times like "3 PM" to "15:00".
# - Keep existing values unless the user explicitly changes them.

# Current Interaction:

# {{current_data}}

# User Message:

# {{message}}

# Return ONLY valid JSON.

# {{
#     "hcp_name":"",
#     "interaction_type":"",
#     "interaction_date":"",
#     "interaction_time":"",
#     "attendees":"",
#     "topics_discussed":"",
#     "materials_shared":"",
#     "samples_distributed":"",
#     "sentiment":"",
#     "outcomes":"",
#     "followup_actions":"",
#     "ai_summary":""
# }}
# """


# EXTRACT_PROMPT = EXTRACT_PROMPT.replace(
#     "CURRENT_DATE",
#     str(date.today())
# )