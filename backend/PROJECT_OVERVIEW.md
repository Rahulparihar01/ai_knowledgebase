# 🧠 AI Knowledge Assistant: Project Overview

This repository contains a production-grade **AI Knowledge Assistant** built with a modern full-stack architecture. It leverages **Retrieval-Augmented Generation (RAG)** to provide context-aware, source-backed answers from user-uploaded documents.

---

## 🚀 Project Mission
To transform static documents into an interactive, intelligent knowledge base that allows users to query their data naturally and receive precise, cited answers.

---

## ✨ Key Features

### 1. **Intelligent RAG Pipeline**
- **Document Ingestion**: Supports PDF and TXT file uploads.
- **Smart Chunking**: Uses `langchain-text-splitters` for recursive character splitting (1000 chars, 200 overlap).
- **Vector Embeddings**: Generates high-dimensional embeddings using Google's `text-embedding-004` model.
- **Semantic Search**: Implements native vector similarity search using PostgreSQL with the `pgvector` extension.

### 2. **AI-Powered Chat Interface**
- **RAG Mode**: Answers questions based solely on uploaded document context with source citations.
- **General Mode**: A general-purpose AI assistant mode for broader queries.
- **Real-time Streaming**: Uses Server-Sent Events (SSE) via FastAPI's `StreamingResponse` for a snappy, ChatGPT-like experience.
- **History Tracking**: Automatically logs all conversations for user reference.

### 3. **Modern User Experience**
- **Premium UI**: Built with React 19, Vite, and Tailwind CSS 4.
- **Dynamic Animations**: Smooth transitions and micro-interactions powered by Framer Motion.
- **Interactive Dashboard**: A centralized hub for managing documents, tracking usage, and starting chats.
- **Secure Auth**: Full JWT-based authentication system for private data silos.

---

## 🛠️ Technical Stack

### **Backend (FastAPI)**
- **API Framework**: FastAPI (High performance, async-first).
- **Database**: PostgreSQL with `pgvector` for both relational and vector data.
- **ORM**: SQLAlchemy for robust database management.
- **Security**: JWT (JSON Web Tokens) with `python-jose` and `bcrypt` for password hashing.
- **AI Integration**: `google-genai` SDK for Gemini 1.5 Flash and Text Embeddings.

### **Frontend (React)**
- **Framework**: Vite + React 19.
- **Styling**: Tailwind CSS 4.
- **Animations**: Framer Motion.
- **Icons**: Lucide React.
- **State Management**: React Context API for Auth and UI state.

---

## 📂 Directory Structure

```text
ai_knowledge/
├── app/                # Backend FastAPI Application
│   ├── api/            # API Route Handlers (auth, chat, documents)
│   ├── core/           # Configuration and Security (JWT, settings)
│   ├── db/             # Database Session and Base Models
│   ├── models/         # SQLAlchemy Database Models
│   └── services/       # Core Logic (AI Service, Document Processing)
├── frontend/           # React Application
│   ├── src/
│   │   ├── components/ # Reusable UI Components
│   │   ├── context/    # Auth and State Providers
│   │   ├── pages/      # Route-level components (Landing, Dashboard)
│   │   └── services/   # API Communication Logic
├── main.py             # Backend Entry Point
└── requirements.txt    # Python Dependencies
```

---

## 🔄 The RAG Workflow

1. **Upload**: User uploads a document through the Dashboard.
2. **Process**: The backend extracts text using `PyMuPDF`, splits it into chunks, and generates embeddings via Gemini.
3. **Store**: Metadata goes to PostgreSQL; embeddings and text chunks go to `pgvector` tables.
4. **Query**: When a user asks a question, the system converts the query into an embedding.
5. **Retrieve**: A cosine similarity search finds the top 5 most relevant chunks in the database.
6. **Generate**: The LLM (Gemini 1.5 Flash) receives the user query + retrieved context and generates a cited response.

---

## ⚙️ Development Setup

### Backend
1. Create a virtual environment: `python -m venv env`
2. Install dependencies: `pip install -r requirements.txt`
3. Configure `.env` with `DATABASE_URL` and `GOOGLE_API_KEY`.
4. Run the server: `uvicorn main:app --reload`

### Frontend
1. Navigate to directory: `cd frontend`
2. Install dependencies: `npm install`
3. Start development server: `npm run dev`

---

## 🎯 Positioning & Value
This system is designed for **Scalability** and **Privacy**. By using `pgvector` internally, it avoids the overhead of external vector databases while maintaining enterprise-grade search performance.
