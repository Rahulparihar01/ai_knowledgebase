import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Bot, 
  FileText, 
  Zap, 
  Shield, 
  ArrowRight, 
  Upload, 
  MessageSquare, 
  CheckCircle, 
  Lock, 
  Search,
  ExternalLink,
  ChevronRight,
  Database,
  Users,
  Clock,
  Briefcase
} from 'lucide-react';

const LandingPage = () => {
  const navigate = useNavigate();

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 selection:bg-primary-500/30">
      {/* Background Ambient Effects */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] bg-primary-600/5 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] bg-accent-600/5 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '3s' }} />
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-slate-950/80 backdrop-blur-2xl">
        <div className="section-container h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-primary-700 rounded-xl flex items-center justify-center shadow-xl shadow-primary-900/20">
              <Bot className="text-white w-6 h-6" />
            </div>
            <span className="text-xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-400">AI Knowledge</span>
          </div>
          
          <div className="hidden md:flex items-center gap-10">
            <a href="#features" className="text-sm font-semibold text-slate-400 hover:text-white transition-colors">Features</a>
            <a href="#how-it-works" className="text-sm font-semibold text-slate-400 hover:text-white transition-colors">How It Works</a>
            <a href="#demo" className="text-sm font-semibold text-slate-400 hover:text-white transition-colors">Demo</a>
          </div>

          <div className="flex items-center gap-6">
            <button 
              onClick={() => navigate('/login')} 
              className="hidden sm:block text-sm font-bold text-slate-400 hover:text-white transition-colors"
            >
              Sign In
            </button>
            <button 
              onClick={() => navigate('/signup')} 
              className="px-6 py-2.5 bg-white text-slate-950 text-sm font-bold rounded-xl hover:bg-slate-200 transition-all active:scale-95"
            >
              Get Started
            </button>
          </div>
        </div>
      </nav>

      <main className="relative pt-32 pb-20">
        {/* Hero Section */}
        <section className="section-container mb-40">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <motion.div 
              initial="initial"
              animate="animate"
              variants={staggerContainer}
            >
              <motion.div 
                variants={fadeIn}
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary-500/10 border border-primary-500/20 text-primary-400 text-xs font-bold uppercase tracking-widest mb-8"
              >
                <Zap className="w-3.5 h-3.5" /> Built for your team's efficiency
              </motion.div>
              <motion.h1 
                variants={fadeIn}
                className="text-5xl lg:text-7xl font-extrabold tracking-tight mb-8 leading-[1.05] text-white"
              >
                Instant Answers from Your <span className="gradient-text">Private Intelligence</span>
              </motion.h1>
              <motion.p 
                variants={fadeIn}
                className="text-xl text-slate-400 mb-12 max-w-xl leading-relaxed"
              >
                Empower your team to find information across thousands of documents in seconds. Built for accuracy, security, and internal knowledge search.
              </motion.p>
              <motion.div 
                variants={fadeIn}
                className="flex flex-col sm:flex-row gap-5"
              >
                <button 
                  onClick={() => navigate('/signup')}
                  className="btn-primary group"
                >
                  View Demo
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="btn-secondary">
                  See It in Action
                </button>
              </motion.div>
              
              <motion.div 
                variants={fadeIn}
                className="mt-16 flex flex-wrap items-center gap-8 text-sm text-slate-500"
              >
                <div className="flex items-center gap-2.5">
                  <Shield className="w-5 h-5 text-accent-500" /> 
                  <span className="font-medium">100% Private Data</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle className="w-5 h-5 text-accent-500" /> 
                  <span className="font-medium">Source-Backed Answers</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Database className="w-5 h-5 text-accent-500" /> 
                  <span className="font-medium">Your Documents, Your AI</span>
                </div>
              </motion.div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="absolute inset-0 bg-primary-500/15 blur-[120px] rounded-full animate-float" />
              <div className="glass-card overflow-hidden border-white/10 shadow-[0_32px_64px_-16px_rgba(0,0,0,0.6)] relative z-10 animate-float">
                {/* Mockup Header */}
                <div className="bg-white/5 px-6 py-4 border-b border-white/5 flex items-center justify-between">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-slate-700" />
                    <div className="w-3 h-3 rounded-full bg-slate-700" />
                    <div className="w-3 h-3 rounded-full bg-slate-700" />
                  </div>
                  <div className="text-[10px] text-slate-500 font-bold tracking-[0.2em] uppercase flex items-center gap-2">
                    <Lock className="w-3 h-3" /> Secure Knowledge Base
                  </div>
                  <div className="w-6" />
                </div>
                {/* Mockup Chat Content */}
                <div className="p-8 space-y-10 h-[450px] overflow-y-auto scrollbar-hide">
                  <div className="flex flex-col items-end gap-3">
                    <div className="bg-primary-600 text-white px-6 py-4 rounded-[2rem] rounded-tr-none text-sm max-w-[85%] shadow-xl font-medium leading-relaxed">
                      What is our policy on remote work for international teams in 2024?
                    </div>
                  </div>
                  <div className="flex gap-5">
                    <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-accent-400 to-accent-600 flex items-center justify-center flex-shrink-0 shadow-lg shadow-accent-900/20">
                      <Bot className="w-6 h-6 text-white" />
                    </div>
                    <div className="space-y-5 flex-1">
                      <div className="bg-white/5 border border-white/10 p-6 rounded-[2rem] rounded-tl-none text-sm leading-relaxed text-slate-200 shadow-sm">
                        Based on the <span className="text-primary-400 font-bold italic">Global Operations Handbook (v4.2)</span>, team members can work from anywhere for up to <span className="text-accent-400 font-extrabold underline decoration-accent-500/30 underline-offset-4">90 days per calendar year</span>, provided they remain tax-compliant in their primary residence.
                      </div>
                      <div className="flex flex-col gap-3 px-2">
                        <span className="text-[10px] uppercase tracking-[0.15em] text-slate-500 font-black">Verified Sources:</span>
                        <div className="flex flex-wrap gap-3">
                          <div className="flex items-center gap-2 px-3 py-2 rounded-xl bg-white/5 border border-white/10 text-[11px] text-slate-400 hover:bg-white/10 transition-all cursor-pointer group">
                            <FileText className="w-3.5 h-3.5 text-primary-400" />
                            Global_Operations_v4.pdf
                            <span className="text-[9px] text-slate-600 ml-1">• Page 12</span>
                            <ExternalLink className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                          </div>
                          <div className="flex items-center gap-2 px-3 py-2 rounded-xl bg-white/5 border border-white/10 text-[11px] text-slate-400 hover:bg-white/10 transition-all cursor-pointer group">
                            <FileText className="w-3.5 h-3.5 text-accent-400" />
                            Policy_Memo_2024.pdf
                            <span className="text-[9px] text-slate-600 ml-1">• Page 3</span>
                            <ExternalLink className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Mockup Input */}
                <div className="p-6 border-t border-white/5 bg-white/[0.02]">
                  <div className="bg-white/5 border border-white/10 rounded-2xl px-5 py-4 flex items-center justify-between shadow-inner">
                    <span className="text-slate-500 text-sm font-medium">Ask about your company data...</span>
                    <div className="w-10 h-10 rounded-xl bg-primary-600 flex items-center justify-center shadow-lg shadow-primary-900/40">
                      <ArrowRight className="w-5 h-5 text-white" />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* How It Works Section */}
        <section id="how-it-works" className="bg-slate-900/50 py-40 border-y border-white/5">
          <div className="section-container">
            <div className="text-center mb-24">
              <h2 className="text-4xl md:text-6xl font-extrabold mb-8 tracking-tight text-white">How It Works</h2>
              <p className="text-slate-400 max-w-2xl mx-auto text-xl leading-relaxed">
                Transform your static files into an active intelligence asset in three simple steps.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-10 relative">
              {[
                {
                  icon: <Upload className="w-8 h-8" />,
                  title: "1. Upload Your Documents",
                  desc: "Connect your PDFs, reports, and internal files. We handle the heavy lifting of indexing your data securely.",
                  color: "from-blue-500 to-primary-600"
                },
                {
                  icon: <MessageSquare className="w-8 h-8" />,
                  title: "2. Ask in Natural Language",
                  desc: "Your team can query the knowledge base just like chatting with a colleague. No complex search syntax required.",
                  color: "from-accent-400 to-accent-600"
                },
                {
                  icon: <CheckCircle className="w-8 h-8" />,
                  title: "3. Get Cited Answers",
                  desc: "Receive instant, accurate responses with direct links to the exact page and document used as a source.",
                  color: "from-indigo-500 to-purple-600"
                }
              ].map((item, idx) => (
                <motion.div 
                  key={idx}
                  whileHover={{ y: -10 }}
                  className="glass-card p-10 border-white/5 group relative overflow-hidden"
                >
                  <div className={`w-20 h-20 bg-gradient-to-br ${item.color} rounded-3xl flex items-center justify-center mb-10 shadow-2xl shadow-slate-950/50 group-hover:scale-110 transition-transform duration-500`}>
                    <div className="text-white">
                      {item.icon}
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold mb-5 text-white">{item.title}</h3>
                  <p className="text-slate-400 leading-relaxed text-lg">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section id="features" className="py-40">
          <div className="section-container">
            <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-24 gap-10">
              <div className="max-w-3xl">
                <h2 className="text-4xl md:text-6xl font-extrabold mb-8 tracking-tight text-white leading-tight">
                  Engineered for <br /><span className="gradient-text">Business Outcomes</span>
                </h2>
                <p className="text-xl text-slate-400 leading-relaxed">
                  We don't just provide AI; we provide a system designed to solve specific organizational challenges.
                </p>
              </div>
              <button className="btn-secondary group">
                Full Feature List <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  icon: <Database className="text-blue-400" />,
                  title: "Centralize Company Knowledge",
                  desc: "Eliminate information silos. One unified interface to search across all your team's documents, regardless of where they live.",
                  benefit: "Save hours of manual searching"
                },
                {
                  icon: <Zap className="text-accent-400" />,
                  title: "Instant Team Intelligence",
                  desc: "Provide your team with a ChatGPT-like experience that actually knows your business rules and historical data.",
                  benefit: "Reduce repetitive internal questions"
                },
                {
                  icon: <CheckCircle className="text-primary-400" />,
                  title: "Verified Truth with Citations",
                  desc: "Every answer includes a verifiable source link. Stop worrying about AI hallucinations and start trusting your data.",
                  benefit: "Ensure 100% factual accuracy"
                },
                {
                  icon: <Shield className="text-amber-400" />,
                  title: "Bank-Grade Privacy",
                  desc: "Your data is encrypted and never used to train public models. We build a private perimeter around your sensitive information.",
                  benefit: "Enterprise-level security"
                }
              ].map((item, idx) => (
                <div key={idx} className="glass-card p-10 border-white/5 flex flex-col md:flex-row gap-8 items-start hover:border-white/20">
                  <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-inner">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-4 text-white">{item.title}</h3>
                    <p className="text-slate-400 leading-relaxed mb-6 text-lg">{item.desc}</p>
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-accent-500/10 text-accent-400 text-xs font-black uppercase tracking-widest">
                      <Zap className="w-3 h-3" /> {item.benefit}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Use Case / Value Section */}
        <section className="section-container py-40">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            <div className="relative">
              <div className="absolute inset-0 bg-accent-500/10 blur-[120px] rounded-full" />
              <div className="grid grid-cols-2 gap-6 relative z-10">
                <div className="space-y-6 pt-12">
                  <div className="glass-card p-10 bg-accent-500/5 border-accent-500/10 shadow-accent-900/5">
                    <h4 className="text-accent-400 font-black text-5xl mb-2 tracking-tighter">80%</h4>
                    <p className="text-xs text-slate-500 uppercase tracking-[0.2em] font-black">Search Time Saved</p>
                  </div>
                  <div className="glass-card p-10 bg-white/[0.02]">
                    <h4 className="text-white font-black text-4xl mb-2 tracking-tighter">24/7</h4>
                    <p className="text-xs text-slate-500 uppercase tracking-[0.2em] font-black">Instant Availability</p>
                  </div>
                </div>
                <div className="space-y-6">
                  <div className="glass-card p-10 bg-white/[0.02]">
                    <h4 className="text-white font-black text-4xl mb-2 tracking-tighter">Secure</h4>
                    <p className="text-xs text-slate-500 uppercase tracking-[0.2em] font-black">Private Cloud</p>
                  </div>
                  <div className="glass-card p-10 bg-primary-500/5 border-primary-500/10 shadow-primary-900/5">
                    <h4 className="text-primary-400 font-black text-5xl mb-2 tracking-tighter">10x</h4>
                    <p className="text-xs text-slate-500 uppercase tracking-[0.2em] font-black">Faster Decisions</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h2 className="text-4xl md:text-6xl font-extrabold mb-10 tracking-tight text-white leading-tight">
                Why This <span className="text-accent-400">Matters</span> For Your Team
              </h2>
              <div className="space-y-12">
                {[
                  {
                    title: "Stop Digging, Start Doing",
                    desc: "Reduce the cognitive load on your employees by providing instant access to the information they need to perform.",
                    icon: <Clock className="w-6 h-6 text-primary-400" />
                  },
                  {
                    title: "Scale Your Internal Support",
                    desc: "Enable new hires and veteran staff alike to find answers to complex policy or technical questions without pinging Slack.",
                    icon: <Users className="w-6 h-6 text-accent-400" />
                  },
                  {
                    title: "Decision Accuracy",
                    desc: "Ensure every business decision is backed by your most current documentation, not outdated memory or guesses.",
                    icon: <Briefcase className="w-6 h-6 text-indigo-400" />
                  }
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-6 group">
                    <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mt-1 group-hover:bg-white/10 transition-colors">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="font-bold text-2xl mb-3 text-white">{item.title}</h4>
                      <p className="text-slate-400 leading-relaxed text-lg">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Demo Preview Section (Interactive Feel) */}
        <section className="bg-slate-900/30 py-40 border-y border-white/5">
          <div className="section-container">
            <div className="max-w-4xl mx-auto text-center mb-24">
              <h2 className="text-4xl md:text-5xl font-extrabold mb-8 text-white tracking-tight">Experience it Firsthand</h2>
              <p className="text-slate-400 text-xl leading-relaxed">
                Imagine this as your own company’s portal. Upload your data, and get answers like these.
              </p>
            </div>
            
            <div className="max-w-5xl mx-auto glass-card border-white/10 p-1 bg-gradient-to-br from-white/5 to-transparent">
               <div className="bg-slate-950 rounded-[1.4rem] overflow-hidden">
                  <div className="p-10 md:p-16 space-y-12">
                    <div className="space-y-6">
                       <label className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-600">Sample Scenario</label>
                       <p className="text-2xl font-bold text-white max-w-2xl">"Find all mentions of our data retention policy in the Q3 Security Audit."</p>
                    </div>
                    <div className="h-px bg-white/5 w-full" />
                    <div className="space-y-10">
                      <div className="flex gap-6">
                        <div className="w-12 h-12 rounded-2xl bg-primary-600 flex items-center justify-center flex-shrink-0 shadow-lg shadow-primary-900/30">
                          <Bot className="w-7 h-7 text-white" />
                        </div>
                        <div className="space-y-8">
                          <p className="text-xl text-slate-300 leading-relaxed font-medium">
                            I found 3 references to data retention in the <span className="text-primary-400">Q3_Security_Audit.pdf</span>. The primary policy states that all PII must be encrypted at rest and purged after <span className="text-accent-400 font-bold">7 years of inactivity</span>.
                          </p>
                          <div className="grid sm:grid-cols-2 gap-4">
                            <div className="glass-card p-5 border-white/5 hover:border-primary-500/30 transition-all cursor-pointer">
                               <div className="flex items-center gap-3 mb-2">
                                 <FileText className="w-5 h-5 text-rose-400" />
                                 <span className="text-sm font-bold text-white">Security_Audit_Q3.pdf</span>
                               </div>
                               <p className="text-xs text-slate-500">"...PII data lifecycle management requires purging after a 7-year inactivity threshold..."</p>
                               <span className="inline-block mt-3 text-[10px] font-black text-primary-500 uppercase tracking-widest">See Source (Page 42)</span>
                            </div>
                            <div className="glass-card p-5 border-white/5 hover:border-primary-500/30 transition-all cursor-pointer">
                               <div className="flex items-center gap-3 mb-2">
                                 <FileText className="w-5 h-5 text-emerald-400" />
                                 <span className="text-sm font-bold text-white">Compliance_Matrix.xlsx</span>
                               </div>
                               <p className="text-xs text-slate-500">"Section 4.1: Retention period for customer logs set to 84 months (7 years)."</p>
                               <span className="inline-block mt-3 text-[10px] font-black text-primary-500 uppercase tracking-widest">See Source (Row 114)</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
               </div>
            </div>
          </div>
        </section>

        {/* Trust & Security Section */}
        <section className="section-container py-40">
          <div className="glass-card p-16 md:p-24 border-primary-500/10 bg-primary-500/[0.02] relative overflow-hidden text-center">
            <div className="absolute top-0 right-0 p-12 opacity-10">
              <Lock className="w-32 h-32 text-primary-500" />
            </div>
            
            <div className="relative z-10">
              <h2 className="text-4xl md:text-5xl font-extrabold mb-10 text-white tracking-tight">Your Data, Your Perimeter</h2>
              <p className="text-slate-400 text-xl max-w-2xl mx-auto mb-16 leading-relaxed">
                Security isn't a feature; it's our foundation. We provide enterprise-grade privacy for every interaction.
              </p>
              
              <div className="grid md:grid-cols-3 gap-12 text-left max-w-5xl mx-auto">
                <div className="space-y-4">
                  <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center mb-6">
                    <Shield className="w-6 h-6 text-accent-500" />
                  </div>
                  <h4 className="font-bold text-xl text-white">Isolated Environment</h4>
                  <p className="text-slate-500 leading-relaxed">Your documents are stored in a dedicated, encrypted container accessible only to your team.</p>
                </div>
                <div className="space-y-4">
                  <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center mb-6">
                    <Lock className="w-6 h-6 text-primary-400" />
                  </div>
                  <h4 className="font-bold text-xl text-white">No Public Training</h4>
                  <p className="text-slate-500 leading-relaxed">We never use your private data to train public models like ChatGPT or Claude.</p>
                </div>
                <div className="space-y-4">
                  <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center mb-6">
                    <CheckCircle className="w-6 h-6 text-indigo-400" />
                  </div>
                  <h4 className="font-bold text-xl text-white">SOC-2 Ready</h4>
                  <p className="text-slate-500 leading-relaxed">Built with audit-ready security protocols to meet the strictest corporate requirements.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section id="demo" className="section-container py-40">
          <div className="relative py-24 md:py-32 px-10 md:px-20 rounded-[4rem] overflow-hidden text-center group">
            <div className="absolute inset-0 bg-primary-600 -z-10 group-hover:scale-105 transition-transform duration-700" />
            <div className="absolute inset-0 bg-gradient-to-br from-primary-400 via-primary-600 to-accent-600 opacity-60 -z-10" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.2)_0%,transparent_100%)] -z-10" />
            
            <h2 className="text-4xl md:text-7xl font-black mb-10 tracking-tight text-white leading-tight">
              Ready to see it <br />in action?
            </h2>
            <p className="text-white/90 text-xl md:text-2xl max-w-2xl mx-auto mb-16 font-medium leading-relaxed">
              Let us show you how this can transform your team's workflow in a 15-minute demo.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <button 
                onClick={() => navigate('/signup')}
                className="px-10 py-5 bg-white text-primary-700 text-lg font-black rounded-3xl shadow-2xl hover:scale-105 active:scale-95 transition-all shadow-primary-900/50"
              >
                Schedule Your Demo
              </button>
              <button className="px-10 py-5 bg-slate-950/20 text-white text-lg font-black rounded-3xl backdrop-blur-2xl border border-white/20 hover:bg-slate-950/40 transition-all">
                Talk to an Expert
              </button>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/5 py-20 bg-slate-950 relative overflow-hidden">
        <div className="section-container flex flex-col md:flex-row justify-between items-start md:items-center gap-12 relative z-10">
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-slate-900 rounded-xl flex items-center justify-center border border-white/5">
                <Bot className="text-slate-400 w-6 h-6" />
              </div>
              <span className="text-2xl font-black tracking-tight text-white">AI Knowledge</span>
            </div>
            <p className="text-slate-500 max-w-xs leading-relaxed font-medium">
              Turning company documentation into searchable team intelligence.
            </p>
          </div>
          
          <div className="flex flex-wrap gap-x-16 gap-y-8">
            <div className="space-y-4">
              <h5 className="text-white font-bold text-sm uppercase tracking-widest">Product</h5>
              <ul className="space-y-3 text-sm text-slate-500 font-medium">
                <li><a href="#features" className="hover:text-primary-400 transition-colors">Features</a></li>
                <li><a href="#how-it-works" className="hover:text-primary-400 transition-colors">How It Works</a></li>
                <li><a href="#demo" className="hover:text-primary-400 transition-colors">Request Demo</a></li>
              </ul>
            </div>
            <div className="space-y-4">
              <h5 className="text-white font-bold text-sm uppercase tracking-widest">Company</h5>
              <ul className="space-y-3 text-sm text-slate-500 font-medium">
                <li><a href="#" className="hover:text-primary-400 transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-primary-400 transition-colors">Terms of Service</a></li>
                <li><a href="#" className="hover:text-primary-400 transition-colors">Security</a></li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="section-container mt-20 pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-sm text-slate-600 font-medium">
            © 2026 AI Knowledge Assistant. All rights reserved.
          </div>
          <div className="flex gap-6 text-slate-600 text-xs font-black uppercase tracking-[0.2em]">
             <span>Designed for internal use</span>
             <span className="text-slate-800">•</span>
             <span>Secure & Encrypted</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
