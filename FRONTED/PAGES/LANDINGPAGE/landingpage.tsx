import React, { useState } from 'react';
import { 
  Terminal, 
  Cpu, 
  Mic, 
  FileText, 
  ShieldCheck, 
  Zap, 
  Layers, 
  ChevronRight, 
  Play, 
  User, 
  Code, 
  AlertTriangle, 
  CheckCircle2, 
  Sparkles,
  BarChart3,
  RefreshCw
} from 'lucide-react';

export default function LandingPage() {
  const [activeTab, setActiveTab] = useState('dsa');

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-50 font-sans antialiased selection:bg-indigo-500 selection:text-white">
      
      {/* Background Subtle Gradients */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[500px] bg-gradient-to-b from-indigo-500/10 via-purple-500/5 to-transparent blur-3xl pointer-events-none" />

      {/* Navigation */}
      <header className="sticky top-0 z-50 w-full border-b border-zinc-800 bg-zinc-950/80 backdrop-blur">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="p-2 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl shadow-lg shadow-indigo-500/20">
              <Cpu className="w-5 h-5 text-white" />
            </div>
            <span className="font-bold text-lg tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-zinc-400">
              BattleSimulator<span className="text-indigo-400">.ai</span>
            </span>
          </div>
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-400">
            <a href="#agents" className="hover:text-zinc-100 transition-colors">AI Panel</a>
            <a href="#features" className="hover:text-zinc-100 transition-colors">Core Engine</a>
            <a href="#pricing" className="hover:text-zinc-100 transition-colors">Pricing</a>
          </nav>
          <div className="flex items-center gap-4">
            <span className="hidden sm:inline-flex items-center gap-1.5 text-xs font-medium text-zinc-400 bg-zinc-900 border border-zinc-800 px-2.5 py-1 rounded-full">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
              Gemini 1.5 Flash Tier
            </span>
            <button className="bg-zinc-100 text-zinc-950 hover:bg-zinc-200 transition-all text-sm font-semibold px-4 py-2 rounded-lg shadow-sm shadow-white/10 flex items-center gap-1">
              Start Battle <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-24 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-zinc-900 border border-zinc-800 rounded-full text-xs text-zinc-400 mb-6 animate-fade-in">
          <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
          <span>Multi-Agent AI Recruitment Architecture</span>
        </div>
        
        <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white max-w-4xl mx-auto leading-[1.15] mb-6">
          Conquer Your Placement Panel. <br />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400">
            Survive the AI Interview Battle.
          </span>
        </h1>
        
        <p className="text-zinc-400 text-base sm:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
          Face an unyielding, synchronized panel of 4 specialized AI agents. Real-time coding evaluations, deep behavioral cross-examinations, and hidden trap logic designed to stress-test your absolute boundaries.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto mb-16">
          <button className="w-full sm:w-auto bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white font-semibold px-6 py-3 rounded-xl shadow-lg shadow-indigo-500/25 flex items-center justify-center gap-2 group transition-all transform hover:-translate-y-0.5">
            <Play className="w-4 h-4 fill-white group-hover:scale-110 transition-transform" /> 
            Launch Free Simulation
          </button>
          <a href="#agents" className="w-full sm:w-auto bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 text-zinc-300 font-medium px-6 py-3 rounded-xl transition-all text-center">
            Meet the Agents
          </a>
        </div>

        {/* Dynamic Interactive UI Preview Widget */}
        <div className="relative max-w-4xl mx-auto border border-zinc-800 rounded-2xl bg-zinc-900/40 p-2 shadow-2xl backdrop-blur-sm group">
          <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/5 to-purple-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
          <div className="border border-zinc-800 bg-zinc-950 rounded-xl overflow-hidden text-left shadow-inner">
            
            {/* Window Controls */}
            <div className="bg-zinc-900/50 border-b border-zinc-800 px-4 py-3 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-zinc-800" />
                <span className="w-3 h-3 rounded-full bg-zinc-800" />
                <span className="w-3 h-3 rounded-full bg-zinc-800" />
                <span className="text-xs text-zinc-500 font-mono ml-2">ROUND_1_DSA_SIMULATOR.exe</span>
              </div>
              <div className="text-xs font-mono text-indigo-400 bg-indigo-500/10 border border-indigo-500/20 px-2 py-0.5 rounded">
                ACTIVE SESSION
              </div>
            </div>

            {/* Chat Simulation Area */}
            <div className="p-6 space-y-6 max-h-[380px] overflow-y-auto font-sans">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-lg bg-blue-600 text-white flex items-center justify-center font-bold text-xs shrink-0 shadow-md">
                  R
                </div>
                <div className="space-y-1.5 max-w-xl">
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-semibold text-zinc-200">Rahul (Tech Lead)</span>
                    <span className="text-[10px] bg-blue-500/10 text-blue-400 border border-blue-500/20 px-1.5 py-0.2 rounded font-mono">DSA AGENT</span>
                  </div>
                  <div className="bg-zinc-900 text-zinc-300 text-sm p-3.5 rounded-xl rounded-tl-none border border-zinc-800 leading-relaxed">
                    Given an array of integers representing stock prices, optimize an algorithm to find the maximum profit from k transactions. Walk me through your spatial and runtime trade-offs.
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-4 justify-end">
                <div className="space-y-1.5 max-w-xl text-right">
                  <div className="flex items-center gap-2 justify-end">
                    <span className="text-[10px] bg-zinc-800 text-zinc-400 px-1.5 py-0.2 rounded font-mono">INPUT: VOICE</span>
                    <span className="text-sm font-semibold text-zinc-200">You (Candidate)</span>
                  </div>
                  <div className="bg-zinc-800/60 text-zinc-100 text-sm p-3.5 rounded-xl rounded-tr-none border border-zinc-700/60 text-left inline-block shadow-sm">
                    "We can approach this using dynamic programming. We'll maintain a grid where rows represent... uh... the number of transactions and columns track the timeline days. I think it is $O(n^2)$ but we can look into optimizing it down using memory arrays..."
                  </div>
                  <div className="flex items-center gap-2 justify-end pt-1">
                    <span className="text-xs bg-amber-500/10 text-amber-500 border border-amber-500/20 px-2 py-0.5 rounded-md font-medium">⚠️ Hesitant</span>
                    <span className="text-xs bg-zinc-800 text-zinc-400 px-2 py-0.5 rounded-md font-medium">92.4s Response Time</span>
                  </div>
                </div>
                <div className="w-8 h-8 rounded-lg bg-zinc-700 text-zinc-200 flex items-center justify-center font-bold text-xs shrink-0">
                  U
                </div>
              </div>

              <div className="flex items-start gap-4 animate-pulse">
                <div className="w-8 h-8 rounded-lg bg-crimson bg-rose-600 text-white flex items-center justify-center font-bold text-xs shrink-0 shadow-md">
                  A
                </div>
                <div className="space-y-1.5 max-w-xl">
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-semibold text-zinc-200">Arjun (Senior Dev)</span>
                    <span className="text-[10px] bg-rose-500/10 text-rose-400 border border-rose-500/20 px-1.5 py-0.2 rounded font-mono">TRAP AGENT ACTIVATED</span>
                  </div>
                  <div className="bg-zinc-900 text-zinc-300 text-sm p-3.5 rounded-xl rounded-tl-none border border-rose-900/30 bg-rose-950/10 text-left">
                    Hold on. You stated you can minimize it with memory arrays, but then claimed it remains $O(n^2)$. If you optimize state transitions properly, what is the absolute best time complexity you can fetch?
                  </div>
                </div>
              </div>
            </div>

            {/* Dashboard Live Status Bar */}
            <div className="bg-zinc-900/30 border-t border-zinc-800 px-6 py-4 flex flex-wrap items-center justify-between gap-4 text-xs font-mono">
              <div className="flex items-center gap-6">
                <div>DSA ROUND: <span className="text-blue-400 font-bold">7.2/10</span></div>
                <div>HR ROUND: <span className="text-purple-400 font-bold">Pending</span></div>
              </div>
              <div className="flex items-center gap-2 text-zinc-500">
                <Terminal className="w-3.5 h-3.5" /> No Database Required • Zero Friction Session
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Metrics Row */}
      <div className="border-y border-zinc-800 bg-zinc-900/20 max-w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-3xl font-extrabold text-white tracking-tight">~1.5 Million</div>
            <div className="text-xs font-medium text-zinc-500 uppercase tracking-wider mt-1">Graduates Addressed Yearly [cite: 231]</div>
          </div>
          <div>
            <div className="text-3xl font-extrabold text-white tracking-tight">4 Personas</div>
            <div className="text-xs font-medium text-zinc-500 uppercase tracking-wider mt-1">Symphonized AI Panel [cite: 146]</div>
          </div>
          <div>
            <div className="text-3xl font-extrabold text-white tracking-tight">100% Free</div>
            <div className="text-xs font-medium text-zinc-500 uppercase tracking-wider mt-1">No Login, No Signup Needed [cite: 146, 169]</div>
          </div>
          <div>
            <div className="text-3xl font-extrabold text-white tracking-tight">&lt; 5 Seconds</div>
            <div className="text-xs font-medium text-zinc-500 uppercase tracking-wider mt-1">Ultra-Low AI Latency Responses [cite: 206]</div>
          </div>
        </div>
      </div>

      {/* The AI Panel Personas Showcase */}
      <section id="agents" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl mb-4">
            Meet the Interview Committee
          </h2>
          <p className="text-zinc-400 text-lg">
            Unlike standard flat chat simulators, our core architecture manages four dynamic, hyper-specific system prompts that actively observe and build on each other's behaviors[cite: 151, 183].
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          
          {/* Agent 1 */}
          <div className="bg-zinc-900/40 border border-zinc-800 rounded-xl p-6 relative overflow-hidden group hover:border-zinc-700 transition-all">
            <div className="w-10 h-10 rounded-lg bg-blue-600 text-white flex items-center justify-center mb-4 font-bold shadow-lg shadow-blue-600/10">R</div>
            <h3 className="text-lg font-semibold text-zinc-100 flex items-center justify-between">
              Rahul <span className="text-xs font-normal text-zinc-500 font-mono">Tech Lead [cite: 185]</span>
            </h3>
            <p className="text-xs font-mono text-blue-400 mb-3 uppercase tracking-wider">DSA Agent [cite: 185]</p>
            <p className="text-sm text-zinc-400 leading-relaxed mb-4">
              Launches core technical, algorithmic, and role-contextualized data structure problem constraints[cite: 185, 196]. 
            </p>
            <div className="text-xs font-mono text-zinc-500 bg-zinc-950 px-2.5 py-1.5 rounded border border-zinc-800">
              Trigger: Start of DSA Round [cite: 185]
            </div>
          </div>

          {/* Agent 2 */}
          <div className="bg-zinc-900/40 border border-zinc-800 rounded-xl p-6 relative overflow-hidden group hover:border-zinc-700 transition-all">
            <div className="w-10 h-10 rounded-lg bg-purple-600 text-white flex items-center justify-center mb-4 font-bold shadow-lg shadow-purple-600/10">P</div>
            <h3 className="text-lg font-semibold text-zinc-100 flex items-center justify-between">
              Priya <span className="text-xs font-normal text-zinc-500 font-mono">HR Manager [cite: 185]</span>
            </h3>
            <p className="text-xs font-mono text-purple-400 mb-3 uppercase tracking-wider">HR Agent [cite: 185]</p>
            <p className="text-sm text-zinc-400 leading-relaxed mb-4">
              Deploys precise behavioral, cultural integration, and situational constraints mapping onto STAR methodologies[cite: 185, 196].
            </p>
            <div className="text-xs font-mono text-zinc-500 bg-zinc-950 px-2.5 py-1.5 rounded border border-zinc-800">
              Trigger: After DSA Concludes [cite: 185]
            </div>
          </div>

          {/* Agent 3 */}
          <div className="bg-zinc-900/40 border border-zinc-800 rounded-xl p-6 relative overflow-hidden group hover:border-zinc-700 transition-all">
            <div className="w-10 h-10 rounded-lg bg-rose-600 text-white flex items-center justify-center mb-4 font-bold shadow-lg shadow-rose-600/10">A</div>
            <h3 className="text-lg font-semibold text-zinc-100 flex items-center justify-between">
              Arjun <span className="text-xs font-normal text-zinc-500 font-mono">Senior Dev [cite: 185]</span>
            </h3>
            <p className="text-xs font-mono text-rose-400 mb-3 uppercase tracking-wider">Trap Agent [cite: 185]</p>
            <p className="text-sm text-zinc-400 leading-relaxed mb-4">
              Probes weak, hesitant, or contradicting declarations. Interjects to stress-test candidate honesty and mastery depth[cite: 159, 185].
            </p>
            <div className="text-xs font-mono text-zinc-500 bg-zinc-950 px-2.5 py-1.5 rounded border border-zinc-800">
              Trigger: Score &lt; 5 or Contradiction [cite: 185]
            </div>
          </div>

          {/* Agent 4 */}
          <div className="bg-zinc-900/40 border border-zinc-800 rounded-xl p-6 relative overflow-hidden group hover:border-zinc-700 transition-all">
            <div className="w-10 h-10 rounded-lg bg-zinc-800 text-zinc-300 flex items-center justify-center mb-4 font-bold shadow-lg">Σ</div>
            <h3 className="text-lg font-semibold text-zinc-100 flex items-center justify-between">
              System <span className="text-xs font-normal text-zinc-500 font-mono">Silent [cite: 185]</span>
            </h3>
            <p className="text-xs font-mono text-zinc-400 mb-3 uppercase tracking-wider">Evaluator Agent [cite: 185]</p>
            <p className="text-sm text-zinc-400 leading-relaxed mb-4">
              Whispers calculations on correctness, language clarity, and alignment metrics across every line submitted[cite: 185, 226].
            </p>
            <div className="text-xs font-mono text-zinc-500 bg-zinc-950 px-2.5 py-1.5 rounded border border-zinc-800">
              Trigger: Immediate Post-Submission [cite: 185]
            </div>
          </div>

        </div>
      </section>

      {/* Core Architectural Features Engine */}
      <section id="features" className="bg-zinc-900/30 border-y border-zinc-800 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl mb-4">
              Engineered for Authentic Placement Prep
            </h2>
            <p className="text-zinc-400 text-lg">
              Every component is dedicated to creating a comprehensive, objective mirror of enterprise interview loops.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            <div className="flex gap-4">
              <div className="shrink-0 p-3 bg-zinc-900 border border-zinc-800 rounded-xl text-indigo-400 w-12 h-12 flex items-center justify-center shadow-sm">
                <Mic className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-zinc-100 mb-1.5">Voice Input STT Engine</h3>
                <p className="text-sm text-zinc-400 leading-relaxed">
                  Leverages native browser Web Speech APIs to support fully hands-free spoken answers with live real-time transcription[cite: 153, 166].
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="shrink-0 p-3 bg-zinc-900 border border-zinc-800 rounded-xl text-indigo-400 w-12 h-12 flex items-center justify-center shadow-sm">
                <BarChart3 className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-zinc-100 mb-1.5">Granular Behavior Diagnostics</h3>
                <p className="text-sm text-zinc-400 leading-relaxed">
                  Automatically measures response times and word sizes to identify hesitation flags or vagueness indicators[cite: 146, 202].
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="shrink-0 p-3 bg-zinc-900 border border-zinc-800 rounded-xl text-indigo-400 w-12 h-12 flex items-center justify-center shadow-sm">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-zinc-100 mb-1.5">Cross-Answer Continuity</h3>
                <p className="text-sm text-zinc-400 leading-relaxed">
                  The backend maps your answers together, triggering penalties if structural contradictions are detected across rounds[cite: 146, 181].
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="shrink-0 p-3 bg-zinc-900 border border-zinc-800 rounded-xl text-indigo-400 w-12 h-12 flex items-center justify-center shadow-sm">
                <FileText className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-zinc-100 mb-1.5">Downloadable Text Dossiers</h3>
                <p className="text-sm text-zinc-400 leading-relaxed">
                  Generate structured summaries containing performance scores, agent evaluations, and transcripts instantly upon session completion[cite: 154, 166].
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="shrink-0 p-3 bg-zinc-900 border border-zinc-800 rounded-xl text-indigo-400 w-12 h-12 flex items-center justify-center shadow-sm">
                <Layers className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-zinc-100 mb-1.5">Configurable Trajectories</h3>
                <p className="text-sm text-zinc-400 leading-relaxed">
                  Tailor prompt complexities dynamically across Software Engineering, Data Science, and Product Management vectors[cite: 146, 194].
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="shrink-0 p-3 bg-zinc-900 border border-zinc-800 rounded-xl text-indigo-400 w-12 h-12 flex items-center justify-center shadow-sm">
                <RefreshCw className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-zinc-100 mb-1.5">Stateless In-Memory Storage</h3>
                <p className="text-sm text-zinc-400 leading-relaxed">
                  Maximized security. Your metrics, tracking nodes, and prompt histories reside exclusively inside transient memory cycles[cite: 164, 181].
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Pricing Tiers Section */}
      <section id="pricing" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl mb-4">
            Flexible Models for Every Phase
          </h2>
          <p className="text-zinc-400 text-lg">
            Start sharpening your interview responses for free, or power up your placement cell with targeted company packs[cite: 233, 242].
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          
          {/* Free Tier */}
          <div className="bg-zinc-900/40 border border-zinc-800 rounded-2xl p-8 relative flex flex-col justify-between">
            <div>
              <h3 className="text-lg font-semibold text-zinc-200 mb-2">Free Core Tier [cite: 233]</h3>
              <p className="text-zinc-500 text-sm mb-6">Perfect for solo practice loops[cite: 233].</p>
              <div className="mb-6">
                <span className="text-4xl font-extrabold text-white">₹0</span>
                <span className="text-zinc-500 text-sm font-medium"> / permanent [cite: 233]</span>
              </div>
              <ul className="space-y-3.5 text-sm text-zinc-400 mb-8 border-t border-zinc-800/60 pt-6">
                <li className="flex items-center gap-2.5"><CheckCircle2 className="w-4 h-4 text-indigo-400 shrink-0" /> 3 Complete Sessions / Month [cite: 233]</li>
                <li className="flex items-center gap-2.5"><CheckCircle2 className="w-4 h-4 text-indigo-400 shrink-0" /> Full 4-Agent Panel Access [cite: 146]</li>
                <li className="flex items-center gap-2.5"><CheckCircle2 className="w-4 h-4 text-indigo-400 shrink-0" /> Standard Plain Text Reports [cite: 233]</li>
                <li className="flex items-center gap-2.5 text-zinc-600"><CheckCircle2 className="w-4 h-4 text-zinc-700 shrink-0" /> No Company Specific Packs [cite: 233]</li>
              </ul>
            </div>
            <button className="w-full py-2.5 bg-zinc-800 hover:bg-zinc-700 text-zinc-200 text-sm font-semibold rounded-lg transition-colors">
              Launch Free Simulator
            </button>
          </div>

          {/* Premium Tier */}
          <div className="bg-zinc-900 border-2 from-indigo-500/20 to-purple-500/20 border-indigo-500 rounded-2xl p-8 relative flex flex-col justify-between shadow-xl shadow-indigo-500/5">
            <div className="absolute top-0 right-6 -translate-y-1/2 bg-gradient-to-r from-indigo-500 to-purple-600 text-white text-[11px] font-bold px-2.5 py-0.5 rounded-full uppercase tracking-wider shadow-md">
              Most Popular
            </div>
            <div>
              <h3 className="text-lg font-semibold text-zinc-100 mb-2">Premium Individual [cite: 233]</h3>
              <p className="text-zinc-400 text-sm mb-6">For candidates targeting high-growth companies[cite: 233].</p>
              <div className="mb-6">
                <span className="text-4xl font-extrabold text-white">₹299</span>
                <span className="text-zinc-400 text-sm font-medium"> / month [cite: 233]</span>
              </div>
              <ul className="space-y-3.5 text-sm text-zinc-300 mb-8 border-t border-zinc-800 pt-6">
                <li className="flex items-center gap-2.5"><CheckCircle2 className="w-4 h-4 text-indigo-400 shrink-0" /> Unlimited Interview Sessions [cite: 233]</li>
                <li className="flex items-center gap-2.5"><CheckCircle2 className="w-4 h-4 text-indigo-400 shrink-0" /> Company-Specific Prep Packs [cite: 233]</li>
                <li className="flex items-center gap-2.5"><CheckCircle2 className="w-4 h-4 text-indigo-400 shrink-0" /> Rich PDF Summary History Exports [cite: 233]</li>
                <li className="flex items-center gap-2.5"><CheckCircle2 className="w-4 h-4 text-indigo-400 shrink-0" /> Predictive Evaluation Scoring [cite: 233]</li>
              </ul>
            </div>
            <button className="w-full py-2.5 bg-gradient-to-r from-indigo-500 to-purple-600 text-white text-sm font-semibold rounded-lg shadow-md hover:opacity-90 transition-opacity">
              Upgrade to Premium
            </button>
          </div>

          {/* College License */}
          <div className="bg-zinc-900/40 border border-zinc-800 rounded-2xl p-8 relative flex flex-col justify-between">
            <div>
              <h3 className="text-lg font-semibold text-zinc-200 mb-2">College License [cite: 233]</h3>
              <p className="text-zinc-500 text-sm mb-6">White-labeled infrastructure for placement cells[cite: 233].</p>
              <div className="mb-6">
                <span className="text-2xl font-extrabold text-white">₹15k – ₹50k</span>
                <span className="text-zinc-500 text-sm font-medium"> / year [cite: 233]</span>
              </div>
              <ul className="space-y-3.5 text-sm text-zinc-400 mb-8 border-t border-zinc-800/60 pt-6">
                <li className="flex items-center gap-2.5"><CheckCircle2 className="w-4 h-4 text-indigo-400 shrink-0" /> Unlimited Student Provisioning [cite: 233]</li>
                <li className="flex items-center gap-2.5"><CheckCircle2 className="w-4 h-4 text-indigo-400 shrink-0" /> TPO Analytics Dashboard Suite [cite: 233]</li>
                <li className="flex items-center gap-2.5"><CheckCircle2 className="w-4 h-4 text-indigo-400 shrink-0" /> White-Label Institutional Domains [cite: 233]</li>
                <li className="flex items-center gap-2.5"><CheckCircle2 className="w-4 h-4 text-indigo-400 shrink-0" /> Dedicated Batch Performance Reports [cite: 233]</li>
              </ul>
            </div>
            <button className="w-full py-2.5 bg-zinc-800 hover:bg-zinc-700 text-zinc-200 text-sm font-semibold rounded-lg transition-colors">
              Contact Institution Sales
            </button>
          </div>

        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-zinc-800 bg-zinc-950 text-zinc-500 text-xs font-mono">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2 text-zinc-400 font-sans font-bold text-sm">
            <span>BattleSimulator<span className="text-indigo-400">.ai</span></span>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
            <span>Built by Diksha Rai [cite: 137]</span>
            <span>Powered by Google Gemini [cite: 139]</span>
            <span>Vite + React + Node.js [cite: 139]</span>
          </div>
          <div>
            &copy; {new Date().getFullYear()} All Rights Reserved.
          </div>
        </div>
      </footer>

    </div>
  );
}