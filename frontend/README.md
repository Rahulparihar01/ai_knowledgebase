# 🚀 AI Knowledge Assistant - Frontend

An intelligent, production-grade knowledge automation system built with React and RAG (Retrieval-Augmented Generation) architecture. This application allows users to transform their static documents into interactive, context-aware intelligence.

---

## 🧠 Introduction

The **AI Knowledge Assistant** is more than just a chatbot. It is a full-stack solution designed to help individuals and organizations unlock the value of their internal data. By leveraging state-of-the-art LLMs and vector databases, the system provides accurate, source-backed answers to complex queries.

Key differentiators:
- **Context-Awareness**: Answers are based on your specific data, not just general pre-training.
- **Source Citations**: Every RAG-based answer includes citations for transparency and verification.
- **Hybrid Intelligence**: Switch seamlessly between document-based insights and general-purpose AI assistance.

---

## ✨ Key Features

- **💎 Premium UI/UX**: Built with modern aesthetics featuring glassmorphism, smooth Framer Motion animations, and a sleek dark mode.
- **🔐 Secure Authentication**: Full user signup and login system with JWT-protected sessions.
- **📂 Document Management**: Simple drag-and-drop or file upload for PDFs and TXT files.
- **💬 Dual-Mode Chat Interface**:
  - **Knowledge Chat (RAG)**: Deep-dive into your uploaded knowledge base.
  - **General Chat**: Interact with the AI for general queries (ChatGPT-style).
- **⚡ Real-time Streaming**: Watch the AI "think" and respond character-by-character.
- **📜 Chat History**: Access your past conversations anytime.

---

## 🛠️ Tech Stack

- **Framework**: [React.js](https://reactjs.org/) + [Vite](https://vitejs.dev/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **API Communication**: [Axios](https://axios-http.com/)
- **State Management**: React Context API

---

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn
- A running instance of the [AI Knowledge Backend](https://github.com/your-repo/backend)

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-username/ai-knowledge-frontend.git
   cd ai-knowledge-frontend
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Configure Environment**:
   Create a `.env` file in the root directory (optional, default is http://localhost:8000):
   ```env
   VITE_API_URL=http://localhost:8000/api/v1
   ```

4. **Run the development server**:
   ```bash
   npm run dev
   ```

5. **Build for production**:
   ```bash
   npm run build
   ```

---

## 📂 Project Structure

```text
src/
├── components/     # Reusable UI components
├── context/        # Auth and Global State
├── hooks/          # Custom React hooks
├── pages/          # Main application pages (Landing, Login, Dashboard)
├── services/       # API interaction layer
└── assets/         # Images and global styles
```

---

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

---

Developed with ❤️ by the AI Knowledge Team.
