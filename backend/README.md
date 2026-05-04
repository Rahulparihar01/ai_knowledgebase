# 🚀 AI Knowledge Assistant (RAG System)

A production-grade **Retrieval-Augmented Generation (RAG)** system designed to transform your internal documents into an intelligent, searchable knowledge base. Powered by **FastAPI** and **Google Gemini**.

## ✨ Features

- **🔐 Secure Auth**: JWT-based authentication for users.
- **📄 Document Processing**: Intelligent PDF/Text extraction and recursive chunking.
- **🧠 Vector Search**: High-performance semantic search using `pgvector` in PostgreSQL.
- **🤖 Gemini Integration**: Powered by Google's `gemini-1.5-flash` and `text-embedding-004`.
- **⚡ Streaming Responses**: Real-time "typing" effect for AI answers.
- **📚 Citations**: AI answers include source filenames for verification.
- **📜 Chat History**: Persistence of all conversations for audit and continuity.

## 🛠️ Tech Stack

- **Backend**: Python, FastAPI
- **AI**: Google Generative AI (Gemini)
- **Database**: PostgreSQL + `pgvector`
- **ORM**: SQLAlchemy
- **Authentication**: JWT (JOSE/Passlib)

## 📁 Project Structure

```text
.
├── app
│   ├── api          # API Routes (auth, documents, chat)
│   ├── core         # Configuration, security, and utilities
│   ├── db           # Database session and base models
│   ├── models       # SQLAlchemy data models
│   └── services     # Business logic (Gemini, Doc processing)
├── main.py          # FastAPI entry point
├── plan.md          # Project roadmap
├── requirements.txt # Python dependencies
└── .env.example     # Environment variables template
```

## 🚀 Getting Started

### Prerequisites
- Python 3.9+
- PostgreSQL with `pgvector` extension installed.

### Installation

1. **Clone the repository**:
   ```bash
   git clone <repo-url>
   cd ai_knowledge
   ```

2. **Install dependencies**:
   ```bash
   pip install -r requirements.txt
   ```

3. **Configure Environment**:
   ```bash
   cp .env.example .env
   # Edit .env and add your GOOGLE_API_KEY and DATABASE_URL
   ```

4. **Run the API**:
   ```bash
   uvicorn main:app --reload
   ```

## 📖 API Documentation

Once the server is running, visit:
- **Swagger UI**: `http://localhost:8000/docs`
- **ReDoc**: `http://localhost:8000/redoc`

---

Built with ❤️ by Antigravity
