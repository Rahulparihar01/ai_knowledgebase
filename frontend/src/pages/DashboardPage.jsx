import React, { useState, useEffect, useRef } from 'react';
import { 
  Bot, User, Send, Plus, FileText, 
  LogOut, Loader2, Sparkles, Brain, Paperclip
} from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { chatService, documentService } from '../services/api';

const DashboardPage = () => {
  const { logout } = useAuth();
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [useRag, setUseRag] = useState(true);
  const [documents, setDocuments] = useState([]);
  const [uploading, setUploading] = useState(false);
  const messagesEndRef = useRef(null);
  const fileInputRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    fetchDocuments();
    fetchHistory();
  }, []);

  const fetchDocuments = async () => {
    try {
      const res = await documentService.list();
      setDocuments(res.data);
    } catch (err) {
      console.error("Failed to fetch documents", err);
    }
  };

  const fetchHistory = async () => {
    try {
      const res = await chatService.history();
      const history = res.data.map(m => ([
        { role: 'user', content: m.query },
        { role: 'assistant', content: m.answer }
      ])).flat();
      setMessages(history.reverse());
    } catch (err) {
      console.error("Failed to fetch history", err);
    }
  };

  const handleUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;
    setUploading(true);
    try {
      await documentService.upload(file);
      fetchDocuments();
    } catch (err) {
      alert(err.response?.data?.detail || "Upload failed");
    } finally {
      setUploading(false);
    }
  };

  const handleSend = async (e) => {
    e.preventDefault();
    if (!input.trim() || loading) return;

    const userMessage = { role: 'user', content: input };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setLoading(true);

    const assistantMessage = { role: 'assistant', content: '' };
    setMessages(prev => [...prev, assistantMessage]);

    try {
      const response = useRag 
        ? await chatService.query(input) 
        : await chatService.general(input);

      const reader = response.body.getReader();
      const decoder = new TextDecoder();
      let done = false;

      while (!done) {
        const { value, done: doneReading } = await reader.read();
        done = doneReading;
        const chunkValue = decoder.decode(value);
        
        setMessages(prev => {
          const last = prev[prev.length - 1];
          const rest = prev.slice(0, -1);
          return [...rest, { ...last, content: last.content + chunkValue }];
        });
      }
    } catch (err) {
      console.error("Chat error", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex h-screen bg-slate-950 text-slate-100 overflow-hidden font-sans">
      {/* Sidebar */}
      <aside className="w-80 glass border-r border-white/5 flex flex-col">
        <div className="p-6">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 bg-primary-600 rounded-xl flex items-center justify-center shadow-lg">
              <Bot className="text-white w-6 h-6" />
            </div>
            <span className="text-xl font-bold">AI Knowledge</span>
          </div>

          <button 
            onClick={() => fileInputRef.current.click()}
            disabled={uploading}
            className="btn-primary w-full py-3 text-sm mb-6 flex items-center justify-center gap-2"
          >
            {uploading ? <Loader2 className="w-4 h-4 animate-spin" /> : <Plus className="w-4 h-4" />}
            Upload Document
          </button>
          <input 
            type="file" 
            className="hidden" 
            ref={fileInputRef} 
            onChange={handleUpload}
            accept=".pdf,.txt"
          />

          <div className="space-y-6">
            <div>
              <h3 className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-4 px-2">Your Documents</h3>
              <div className="space-y-1 max-h-[40vh] overflow-y-auto pr-2">
                {documents.length === 0 && (
                  <p className="text-xs text-slate-600 px-2 italic">No documents uploaded yet.</p>
                )}
                {documents.map(doc => (
                  <div key={doc.id} className="flex items-center gap-3 p-2 rounded-lg hover:bg-white/5 transition-colors cursor-pointer group">
                    <FileText className="w-4 h-4 text-slate-400" />
                    <span className="text-sm text-slate-300 truncate flex-1">{doc.filename}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-auto p-6 border-t border-white/5">
          <button 
            onClick={logout}
            className="flex items-center gap-3 w-full p-3 rounded-xl hover:bg-rose-500/10 hover:text-rose-400 transition-all text-slate-400"
          >
            <LogOut className="w-5 h-5" />
            <span className="font-medium">Logout</span>
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col relative">
        {/* Header */}
        <header className="h-20 border-b border-white/5 flex items-center justify-between px-8 glass sticky top-0 z-10">
          <div className="flex items-center gap-4">
            <div className="flex bg-slate-900 p-1 rounded-xl border border-white/5">
              <button 
                onClick={() => setUseRag(true)}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all ${useRag ? 'bg-primary-600 text-white shadow-lg' : 'text-slate-400 hover:text-slate-200'}`}
              >
                <Brain className="w-4 h-4" /> Knowledge Chat
              </button>
              <button 
                onClick={() => setUseRag(false)}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all ${!useRag ? 'bg-emerald-600 text-white shadow-lg' : 'text-slate-400 hover:text-slate-200'}`}
              >
                <Sparkles className="w-4 h-4" /> General Chat
              </button>
            </div>
          </div>
          <div className="flex items-center gap-3">
             <div className="text-right">
                <p className="text-sm font-bold">User Account</p>
                <p className="text-xs text-slate-500">Premium Plan</p>
             </div>
             <div className="w-10 h-10 bg-slate-800 rounded-full border border-white/10 flex items-center justify-center">
                <User className="w-6 h-6 text-slate-400" />
             </div>
          </div>
        </header>

        {/* Chat Area */}
        <div className="flex-1 overflow-y-auto p-8 space-y-8 scrollbar-hide">
          {messages.length === 0 && (
            <div className="h-full flex flex-col items-center justify-center text-center max-w-lg mx-auto">
              <div className="w-20 h-20 bg-primary-600/10 rounded-3xl flex items-center justify-center mb-6">
                <Brain className="w-10 h-10 text-primary-500" />
              </div>
              <h2 className="text-3xl font-bold mb-4">How can I help you today?</h2>
              <p className="text-slate-400 leading-relaxed">
                {useRag 
                  ? "Ask anything about your uploaded documents. I'll search through them and provide precise answers with citations." 
                  : "Switch to general mode to ask me anything, just like ChatGPT or Gemini."}
              </p>
            </div>
          )}

          <div className="space-y-8">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`flex gap-4 ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                {msg.role === 'assistant' && (
                  <div className="w-10 h-10 bg-primary-600/20 rounded-xl flex items-center justify-center flex-shrink-0 border border-primary-600/30">
                    <Bot className="w-6 h-6 text-primary-400" />
                  </div>
                )}
                <div className={`max-w-[70%] p-4 rounded-2xl ${
                  msg.role === 'user' 
                    ? 'bg-primary-600 text-white rounded-tr-none shadow-lg' 
                    : 'glass rounded-tl-none border-white/10'
                }`}>
                  <p className="whitespace-pre-wrap leading-relaxed text-[15px]">{msg.content || (loading && idx === messages.length - 1 ? "..." : "")}</p>
                </div>
                {msg.role === 'user' && (
                  <div className="w-10 h-10 bg-slate-800 rounded-xl flex items-center justify-center flex-shrink-0 border border-white/10">
                    <User className="w-6 h-6 text-slate-500" />
                  </div>
                )}
              </div>
            ))}
          </div>
          <div ref={messagesEndRef} />
        </div>

        {/* Input Area */}
        <div className="p-8 pt-0">
          <form onSubmit={handleSend} className="relative max-w-4xl mx-auto">
            <div className="glass p-2 rounded-2xl border-white/10 shadow-2xl focus-within:border-primary-500/50 transition-all">
              <div className="flex items-center gap-2 px-2">
                <button type="button" className="p-2 text-slate-500 hover:text-slate-300 transition-colors">
                  <Paperclip className="w-5 h-5" />
                </button>
                <input
                  type="text"
                  placeholder={useRag ? "Ask about your documents..." : "Ask me anything..."}
                  className="flex-1 bg-transparent border-none outline-none py-3 text-slate-200 placeholder:text-slate-600"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  disabled={loading}
                />
                <button 
                  type="submit" 
                  disabled={!input.trim() || loading}
                  className={`p-3 rounded-xl transition-all ${!input.trim() || loading ? 'bg-slate-800 text-slate-600' : 'bg-primary-600 text-white shadow-lg hover:bg-primary-500'}`}
                >
                  {loading ? <Loader2 className="w-5 h-5 animate-spin" /> : <Send className="w-5 h-5" />}
                </button>
              </div>
            </div>
            <p className="text-[10px] text-center text-slate-600 mt-4 uppercase tracking-[0.2em] font-bold">
              Powered by Advanced RAG Architecture
            </p>
          </form>
        </div>
      </main>
    </div>
  );
};

export default DashboardPage;
