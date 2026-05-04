# 🚀 AI Knowledge Assistant (RAG-Based Full Stack System)

An end-to-end **AI Knowledge Assistant** that transforms static documents into an intelligent, queryable knowledge base using **Retrieval-Augmented Generation (RAG)**.

This system enables users to upload documents and interact with them through a conversational interface powered by **Google Gemini**, delivering **context-aware, source-backed answers** in real time.

---

## 🧠 Introduction

Modern applications struggle to extract value from unstructured data like PDFs and notes.

This project solves that by combining:
- **Vector embeddings (semantic understanding)**
- **Fast retrieval (pgvector + PostgreSQL)**
- **LLM reasoning (Gemini 1.5 Flash)**

The result is a **ChatGPT-like system trained on your own data**, ensuring accuracy, privacy, and scalability.

---

## ✨ Key Features

### 🔍 RAG Pipeline
- 📄 PDF & TXT ingestion  
- ✂️ Smart chunking (1000 chars, 200 overlap)  
- 🧠 Embeddings via `text-embedding-004`  
- 📊 Vector search using `pgvector`  
- 📚 Source-based responses  

---

### 💬 AI Chat System
- 🧠 Knowledge Mode (RAG)  
- 🌐 General Chat Mode  
- ⚡ Streaming responses (SSE)  
- 📜 Chat history  

---

### 🎨 Frontend
- React 19 + Vite  
- Tailwind CSS  
- Framer Motion  
- Clean dashboard UI  

---

### 🔐 Security
- JWT Authentication  
- Bcrypt password hashing  
- User-level data isolation  

---

## 🛠️ Tech Stack

### Backend
- FastAPI  
- PostgreSQL + pgvector  
- SQLAlchemy  
- Google Gemini API  
- PyMuPDF  

### Frontend
- React + Vite  
- Tailwind CSS  
- Framer Motion  
- Axios  

---

## 📂 Project Structure

```

├── backend
│   ├── app
│   │   ├── api
│   │   │   ├── auth.py
│   │   │   ├── chat.py
│   │   │   ├── deps.py
│   │   │   └── documents.py
│   │   ├── core
│   │   │   ├── config.py
│   │   │   └── security.py
│   │   ├── db
│   │   │   └── session.py
│   │   ├── models
│   │   │   ├── chat.py
│   │   │   ├── document.py
│   │   │   ├── schemas.py
│   │   │   └── user.py
│   │   └── services
│   │       ├── ai_service.py
│   │       └── document_service.py
│   ├── main.py
│   ├── plan.md
│   ├── project.md
│   ├── PROJECT_OVERVIEW.md
│   ├── README.md
│   ├── requirements.txt
│   └── scratch
│       └── enable_pgvector.py
├── frontend
│   ├── eslint.config.js
│   ├── index.html
│   ├── package.json
│   ├── package-lock.json
│   ├── public
│   │   ├── favicon.svg
│   │   └── icons.svg
│   ├── README.md
│   ├── src
│   │   ├── App.jsx
│   │   ├── assets
│   │   │   ├── hero.png
│   │   │   └── vite.svg
│   │   ├── components
│   │   ├── context
│   │   │   └── AuthContext.jsx
│   │   ├── hooks
│   │   ├── index.css
│   │   ├── main.jsx
│   │   ├── pages
│   │   │   ├── DashboardPage.jsx
│   │   │   ├── LandingPage.jsx
│   │   │   ├── LoginPage.jsx
│   │   │   └── SignupPage.jsx
│   │   └── services
│   │       └── api.js
│   └── vite.config.js
└── readme.md

````

---

## ⚙️ Setup Guide

## 1️⃣ Clone Repository

```bash
git clone https://github.com/Rahulparihar01/ai_knowledgebase.git
cd ai_knowledgebase
````

---

## 🔧 Backend Setup

```bash
cd backend

# Create virtual environment
python -m venv env

# Activate environment
# Windows
env\Scripts\activate

# Linux / Mac
source env/bin/activate

# Install dependencies
pip install -r requirements.txt

# Create .env file
```

Add inside `.env`:

```env
DATABASE_URL=your_postgres_url
GOOGLE_API_KEY=your_google_api_key
```

Run backend:

```bash
uvicorn main:app --reload
```

Backend runs at:

```
http://localhost:8000
```

---

## 💻 Frontend Setup

```bash
cd frontend

# Install dependencies
npm install

# Optional env config
```

Create `.env`:

```env
VITE_API_URL=http://localhost:8000/api/v1
```

Run frontend:

```bash
npm run dev
```

Frontend runs at:

```
http://localhost:5173
```

---

## 🔄 How RAG Works

1. Upload document
2. Extract text + chunking
3. Generate embeddings
4. Store in PostgreSQL
5. Query → embedding
6. Retrieve top chunks
7. Gemini generates answer

---

## 🧪 API Docs

* [http://localhost:8000/docs](http://localhost:8000/docs)
* [http://localhost:8000/redoc](http://localhost:8000/redoc)

---

## 🚀 Deployment

* Frontend → Vercel
* Backend → Render / Railway
* Database → Supabase / Neon

---

## 🎯 Why This Project Stands Out

* Real-world RAG implementation
* No external vector DB (cost efficient)
* Fully private knowledge system
* Scalable architecture
* Streaming AI UX

---

---

---

## 👨‍💻 Author

Built to demonstrate **production-grade AI system design with RAG architecture**.
