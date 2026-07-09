# AI-First CRM HCP Module – Log Interaction Screen

## 📌 Project Overview

This project is an AI-powered CRM module designed for Healthcare Professional (HCP) interactions. It enables field representatives to log meetings using either a structured form or a conversational AI chat interface.

The system uses LangGraph with Groq LLM (Gemma 2 9B IT) to summarize interactions, generate follow-up suggestions, provide insights, and assist users in managing HCP interactions efficiently.

---

## 🚀 Features

- Log HCP interactions using a structured form
- AI-powered conversational chat interface
- AI-generated interaction summary
- AI follow-up recommendations
- Search interaction history
- Edit existing interactions
- View interaction history
- Redux state management
- FastAPI REST API
- MySQL database integration
- LangGraph AI Agent

---

## 🛠 Tech Stack

### Frontend

- React
- Redux Toolkit
- React Router
- Axios
- Material UI
- CSS

### Backend

- Python
- FastAPI
- SQLAlchemy
- MySQL
- LangGraph
- Groq API (Gemma2-9b-it)

---

## 📁 Project Structure

```
ai-first-crm-hcp/
│
├── frontend/
│   ├── src/
│   ├── public/
│   ├── package.json
│   └── vite.config.js
│
├── backend/
│   ├── app/
│   ├── requirements.txt
│   ├── .env
│   └── .gitignore
│
└── README.md
```

---

## ⚙️ Environment Variables

Create a `.env` file inside the backend folder.

```
DATABASE_URL=your_database_url

GROQ_API_KEY=your_groq_api_key

MODEL_NAME=gemma2-9b-it
```

Do **not** commit your `.env` file.

---

## 💻 Backend Installation

```bash
cd backend



pip install -r requirements.txt

python -m uvicorn app.main:app --reload
```

Backend runs at:

```
http://127.0.0.1:8000
```

API Documentation:

```
http://127.0.0.1:8000/docs
```

---

## 💻 Frontend Installation

```bash
cd frontend

npm install

npm run dev
```

Frontend runs at:

```
http://localhost:5173
```

---

## 🤖 LangGraph Tools

The AI agent uses the following tools:

1. Log Interaction
2. Edit Interaction
3. Search Interaction
4. Generate Follow-up
5. Generate Insights

---

## 🔄 Workflow

1. User logs interaction through Form or Chat.
2. Frontend sends data to FastAPI.
3. LangGraph Agent processes the request.
4. Groq LLM generates summaries and follow-up suggestions.
5. Data is stored in MySQL.
6. Results are displayed in the UI.

---

## 📸 Screenshots

Add screenshots of:

- Dashboard
- Log Interaction Form
- Chat Interface
- Interaction History
- AI Response

---

## 👨‍💻 Author

Sagar Dutta