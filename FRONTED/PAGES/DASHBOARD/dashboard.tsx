import React, { useState } from 'react';
import {
  LayoutDashboard,
  BarChart3,
  History,
  Settings,
  Menu,
  X,
  Play,
  Cpu,
  User,
  Sliders,
  Briefcase,
  AlertCircle,
  TrendingUp,
  Clock,
  CheckCircle2,
  FileText,
  HelpCircle,
  Sparkles,
  ArrowRight
} from 'lucide-react';

export default function Dashboard() {
  // Navigation & Modal UI States
  const [currentTab, setCurrentTab] = useState('dashboard');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Form Input States (SRS Setup Module F01-F03)
  const [formData, setFormData] = useState({
    name: '',
    role: '',
    difficulty: ''
  });
  const [formError, setFormError] = useState('');

  // Sample Mock Session Metrics for Dashboard Overview Card
  const mockHistoricalSummary = {
    totalSimulations: 12,
    averageScore: '7.4/10',
    timePracticed: '4.5 hrs',
    topFlag: 'Confident'
  };

  // Handle Input Changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (formError) setFormError('');
  };

  // Form Validation and Submission (SRS Setup Module F04)
  const handleStartSimulation = (e) => {
    e.preventDefault();
    
    // F01 Validation: Name accepts 2-50 chars
    if (formData.name.trim().length < 2 || formData.name.trim().length > 50) {
      setFormError('Name must be between 2 and 50 characters.');
      return;
    }
    // F02 Validation: Target Role Selection
    if (!formData.role) {
      setFormError('Please select a valid target role pathway.');
      return;
    }
    // F03 Validation: Difficulty Matrix Selection
    if (!formData.difficulty) {
      setFormError('Please select an evaluation difficulty tier.');
      return;
    }

    setFormError('');
    setIsModalOpen(false);
    
    // Explicit Hand-off log indicating successful validation step
    console.log('Validation Passed. Initializing Multi-Agent Orchestrator Session with Context:', formData);
    alert(`Success! Launching panel for ${formData.name}. Role: ${formData.role} | Tier: ${formData.difficulty}`);
    
    // The multi-agent sequence pipeline triggers directly right here in subsequent views.
  };

  // Form Reset Helper
  const resetForm = () => {
    setFormData({ name: '', role: '', difficulty: '' });
    setFormError('');
  };

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-50 font-sans antialiased flex">

      {/* ================= SIDEBAR NAVIGATION PANEL ================= */}
      <aside className={`
        fixed inset-y-0 left-0 z-50 w-64 bg-zinc-950 border-r border-zinc-900 transform 
        lg:translate-x-0 lg:static lg:flex lg:flex-col transition-transform duration-300 ease-in-out
        ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}
      `}>
        {/* Brand Platform Header */}
        <div className="h-16 flex items-center justify-between px-6 border-b border-zinc-900">
          <div className="flex items-center gap-2.5">
            <div className="p-1.5 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg">
              <Cpu className="w-4 h-4 text-white" />
            </div>
            <span className="font-bold text-sm tracking-tight text-white font-mono">
              PANEL_BATTLE<span className="text-indigo-400">.AI</span>
            </span>
          </div>
          <button onClick={() => setIsSidebarOpen(false)} className="lg:hidden p-1 text-zinc-400 hover:text-white">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Global Launch Application Button */}
        <div className="px-4 pt-6 pb-2">
          <button
            onClick={() => { setIsModalOpen(true); resetForm(); }}
            className="w-full py-3 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white rounded-xl text-xs font-bold font-mono tracking-wide shadow-lg shadow-indigo-600/10 flex items-center justify-center gap-2 group transition-all"
          >
            <Play className="w-3.5 h-3.5 fill-current transition-transform group-hover:scale-110" />
            START SIMULATION
          </button>
        </div>

        {/* Navigation Routes */}
        <nav className="flex-1 px-4 py-4 space-y-1">
          <button
            onClick={() => { setCurrentTab('dashboard'); setIsSidebarOpen(false); }}
            className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-xs font-mono font-medium transition-all ${currentTab === 'dashboard' ? 'bg-zinc-900 text-zinc-100 border border-zinc-800' : 'text-zinc-400 hover:text-zinc-200 hover:bg-zinc-900/40'}`}
          >
            <LayoutDashboard className="w-4 h-4 text-indigo-400" />
            Control Center
          </button>

          <button
            onClick={() => { setCurrentTab('analytics'); setIsSidebarOpen(false); }}
            className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-xs font-mono font-medium transition-all ${currentTab === 'analytics' ? 'bg-zinc-900 text-zinc-100 border border-zinc-800' : 'text-zinc-400 hover:text-zinc-200 hover:bg-zinc-900/40'}`}
          >
            <BarChart3 className="w-4 h-4 text-purple-400" />
            Diagnostic Metrics
          </button>

          <button
            onClick={() => { setCurrentTab('archives'); setIsSidebarOpen(false); }}
            className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-xs font-mono font-medium transition-all ${currentTab === 'archives' ? 'bg-zinc-900 text-zinc-100 border border-zinc-800' : 'text-zinc-400 hover:text-zinc-200 hover:bg-zinc-900/40'}`}
          >
            <History className="w-4 h-4 text-emerald-400" />
            Session Archives
          </button>

          <button
            onClick={() => { setCurrentTab('settings'); setIsSidebarOpen(false); }}
            className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-xs font-mono font-medium transition-all ${currentTab === 'settings' ? 'bg-zinc-900 text-zinc-100 border border-zinc-800' : 'text-zinc-400 hover:text-zinc-200 hover:bg-zinc-900/40'}`}
          >
            <Settings className="w-4 h-4 text-zinc-400" />
            System Parameters
          </button>
        </nav>

        {/* Institutional Baseline Stamp Footer */}
        <div className="p-4 border-t border-zinc-900 bg-zinc-900/10 text-[10px] font-mono text-zinc-500 space-y-1">
          <div>Author: Diksha Rai [cite: 137]</div>
          <div className="flex items-center gap-1.5 text-emerald-500/80">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            Gemini Flash Engine Ready [cite: 139, 213]
          </div>
        </div>
      </aside>

      {/* ================= MAIN APPLICATION WRAPPER ================= */}
      <div className="flex-1 flex flex-col min-w-0 overflow-x-hidden">
        
        {/* Dynamic App Header */}
        <header className="h-16 border-b border-zinc-900 bg-zinc-950/50 backdrop-blur px-6 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-4">
            <button
              onClick={() => setIsSidebarOpen(true)}
              className="lg:hidden p-2 text-zinc-400 hover:text-white rounded-lg border border-zinc-800 bg-zinc-900"
            >
              <Menu className="w-4 h-4" />
            </button>
            <h2 className="text-xs uppercase font-bold font-mono tracking-wider text-zinc-400">
              Workspace // <span className="text-zinc-100">{currentTab}</span>
            </h2>
          </div>
        </header>

        {/* Dynamic Page Router Display Space */}
        <main className="flex-1 p-6 md:p-8 space-y-8 overflow-y-auto max-w-7xl w-full mx-auto">
          
          {/* VIEW 1: CONTROL CENTER DASHBOARD VIEW */}
          {currentTab === 'dashboard' && (
            <div className="space-y-6 animate-fade-in">
              
              {/* Primary Callout Alert Greeting */}
              <div className="relative border border-zinc-800 bg-gradient-to-r from-zinc-900/60 to-zinc-950 p-6 rounded-2xl overflow-hidden shadow-xl">
                <div className="absolute right-0 top-0 w-64 h-64 bg-indigo-500/5 blur-3xl rounded-full pointer-events-none" />
                <div className="max-w-xl space-y-3">
                  <div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-md bg-indigo-500/10 border border-indigo-500/20 text-[10px] font-mono text-indigo-400 font-semibold uppercase">
                    <Sparkles className="w-3 h-3" /> Core Placement Simulation Architecture [cite: 138]
                  </div>
                  <h3 className="text-lg font-bold text-white tracking-tight">Prepare to Face the Multi-Agent Panel [cite: 143]</h3>
                  <p className="text-xs text-zinc-400 font-normal leading-relaxed">
                    Test your behavioral precision and coding analysis under stress[cite: 146]. Our automated state machine routes responses through customized DSA, HR, Evaluator, and Trap agents iteratively[cite: 146, 181].
                  </p>
                  <div className="pt-2">
                    <button
                      onClick={() => { setIsModalOpen(true); resetForm(); }}
                      className="px-4 py-2 bg-zinc-100 hover:bg-zinc-200 text-zinc-950 font-bold text-xs rounded-lg font-mono transition-colors inline-flex items-center gap-1.5"
                    >
                      Configure Live Run <ArrowRight className="w-3 h-3" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Aggregated Statistical Cards Row */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 font-mono text-xs">
                <div className="bg-zinc-900/30 border border-zinc-900 p-4.5 rounded-xl">
                  <span className="text-zinc-500 block">SIMULATIONS RUN</span>
                  <span className="text-xl font-bold text-zinc-100 block mt-1">{mockHistoricalSummary.totalSimulations}</span>
                </div>
                <div className="bg-zinc-900/30 border border-zinc-900 p-4.5 rounded-xl">
                  <span className="text-zinc-500 block">AVG PERFORMANCE INDEX</span>
                  <span className="text-xl font-bold text-indigo-400 block mt-1">{mockHistoricalSummary.averageScore}</span>
                </div>
                <div className="bg-zinc-900/30 border border-zinc-900 p-4.5 rounded-xl">
                  <span className="text-zinc-500 block">AGGREGATE RUNTIME</span>
                  <span className="text-xl font-bold text-zinc-100 block mt-1">{mockHistoricalSummary.timePracticed}</span>
                </div>
                <div className="bg-zinc-900/30 border border-zinc-900 p-4.5 rounded-xl">
                  <span className="text-zinc-500 block">PREDOMINANT EMITTED TAG</span>
                  <span className="text-xl font-bold text-emerald-400 block mt-1">⚡ {mockHistoricalSummary.topFlag}</span>
                </div>
              </div>

              {/* Functional System Architecture Breakdown Reference List */}
              <div className="border border-zinc-900 bg-zinc-950 rounded-xl overflow-hidden">
                <div className="bg-zinc-900/40 px-5 py-3.5 border-b border-zinc-900 flex items-center justify-between">
                  <h4 className="text-xs font-bold font-mono tracking-wider text-zinc-300 uppercase">
                    Active Evaluation Panel Personas
                  </h4>
                  <span className="text-[10px] font-mono text-zinc-500">4 Active Nodes Connected [cite: 146]</span>
                </div>
                <div className="p-2 divide-y divide-zinc-900 text-xs">
                  <div className="p-3 flex items-center justify-between hover:bg-zinc-900/20 transition-colors">
                    <div>
                      <span className="font-bold text-zinc-200 block">Rahul (Tech Lead) — DSA Agent [cite: 185]</span>
                      <span className="text-zinc-500 text-[11px]">Asks advanced algorithmic and data structure problems contextualized to track roles[cite: 185, 196].</span>
                    </div>
                    <span className="px-2 py-0.5 bg-blue-500/10 border border-blue-500/20 text-blue-400 rounded text-[10px] font-mono uppercase font-semibold">Technical</span>
                  </div>
                  <div className="p-3 flex items-center justify-between hover:bg-zinc-900/20 transition-colors">
                    <div>
                      <span className="font-bold text-zinc-200 block">Priya (HR Manager) — HR Agent [cite: 185]</span>
                      <span className="text-zinc-500 text-[11px]">Fires role-contextualized behavioral, corporate alignment, and STAR method questions[cite: 185, 196].</span>
                    </div>
                    <span className="px-2 py-0.5 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 rounded text-[10px] font-mono uppercase font-semibold">Behavioral</span>
                  </div>
                  <div className="p-3 flex items-center justify-between hover:bg-zinc-900/20 transition-colors">
                    <div>
                      <span className="font-bold text-zinc-200 block">Arjun (Senior Dev) — Trap Agent [cite: 185]</span>
                      <span className="text-zinc-500 text-[11px]">Triggers dynamic follow-up checks when consistency warnings or low scores pass metrics[cite: 185, 196].</span>
                    </div>
                    <span className="px-2 py-0.5 bg-red-500/10 border border-red-500/20 text-red-400 rounded text-[10px] font-mono uppercase font-semibold">Stress Test</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* VIEW 2: DEDICATED DIAGNOSTIC METRICS */}
          {currentTab === 'analytics' && (
            <div className="space-y-6 font-mono text-xs animate-fade-in">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-zinc-900/30 border border-zinc-900 p-5 rounded-xl">
                  <span className="text-zinc-500 block">ACCUMULATED SCORE BASSET</span>
                  <span className="text-2xl font-extrabold text-white block mt-1">7.42 / 10 [cite: 204]</span>
                  <span className="text-[10px] text-emerald-400 flex items-center gap-1 mt-2">
                    <TrendingUp className="w-3 h-3" /> Baseline target parameter met 
                  </span>
                </div>
                <div className="bg-zinc-900/30 border border-zinc-900 p-5 rounded-xl">
                  <span className="text-zinc-500 block">RESPONSE TIME CALCULATION</span>
                  <span className="text-2xl font-extrabold text-indigo-400 block mt-1">1.84s </span>
                  <span className="text-[10px] text-zinc-500 flex items-center gap-1 mt-2">
                    <Clock className="w-3.5 h-3.5" /> High streaming prompt processing speed 
                  </span>
                </div>
                <div className="bg-zinc-900/30 border border-zinc-900 p-5 rounded-xl">
                  <span className="text-zinc-500 block">CONTRADICTION FLAG ALERTS</span>
                  <span className="text-2xl font-extrabold text-red-400 block mt-1">0 Warnings [cite: 202]</span>
                  <span className="text-[10px] text-zinc-500 flex items-center gap-1 mt-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" /> Coherent historical context stability [cite: 202]
                  </span>
                </div>
              </div>
              <div className="border border-zinc-900 bg-zinc-950 p-6 rounded-xl text-center text-zinc-500 py-16">
                Detailed real-time chart modules render here during an active multi-agent pipeline sequence.
              </div>
            </div>
          )}

          {/* VIEW 3: ARCHIVES PAGE VIEW */}
          {currentTab === 'archives' && (
            <div className="border border-zinc-900 bg-zinc-950 rounded-xl overflow-hidden font-mono text-xs animate-fade-in">
              <div className="bg-zinc-900/40 p-4 border-b border-zinc-900">
                <h3 className="font-bold text-zinc-300 uppercase">Transient Workspace Browser History [cite: 164, 218]</h3>
              </div>
              <div className="p-4 divide-y divide-zinc-900">
                <div className="py-3.5 flex items-center justify-between gap-4">
                  <div>
                    <span className="text-zinc-200 font-bold block">SDE Mock Run — Batch #042 [cite: 222]</span>
                    <span className="text-[11px] text-zinc-500">Completed 24 mins ago • 2 Rounds Standard [cite: 146, 224]</span>
                  </div>
                  <span className="px-2 py-1 bg-zinc-900 border border-zinc-800 rounded text-zinc-400 font-bold">7.42/10 [cite: 204]</span>
                </div>
                <div className="text-center text-zinc-600 py-16">
                  <FileText className="w-8 h-8 mx-auto mb-2 opacity-30" />
                  All data is transient. Refreshing browser purges local cache[cite: 164, 218].
                </div>
              </div>
            </div>
          )}

          {/* VIEW 4: SYSTEM PARAMETERS VIEW */}
          {currentTab === 'settings' && (
            <div className="max-w-xl bg-zinc-900/20 border border-zinc-900 rounded-xl p-6 space-y-4 font-mono text-xs animate-fade-in">
              <h3 className="font-bold text-zinc-300 uppercase tracking-wider border-b border-zinc-900 pb-2">
                System Interface Bounds
              </h3>
              <p className="text-zinc-400 leading-relaxed">
                Configure your API proxy connections and Web Speech transcription thresholds[cite: 153, 211]. Application operational parameters run locally entirely in stateless variables[cite: 164].
              </p>
            </div>
          )}

        </main>
      </div>

      {/* ================= SRS SEAMLESS INPUT SETUP MODAL (F01 - F04) ================= */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-zinc-950/80 backdrop-blur-sm animate-fade-in">
          <div className="w-full max-w-md border border-zinc-800 bg-zinc-950 rounded-2xl shadow-2xl overflow-hidden">
            
            {/* Modal Header */}
            <div className="bg-zinc-900/50 px-6 py-4 border-b border-zinc-900 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Sliders className="w-4 h-4 text-indigo-400" />
                <h3 className="text-xs font-bold font-mono tracking-wider text-zinc-200 uppercase">
                  Configure Interview Panel 
                </h3>
              </div>
              <button 
                onClick={() => setIsModalOpen(false)}
                className="p-1 rounded-md text-zinc-500 hover:text-zinc-300 hover:bg-zinc-900 transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Modal Setup Form */}
            <form onSubmit={handleStartSimulation} className="p-6 space-y-4 text-xs font-mono">
              
              {/* Validation Error Alert Layout */}
              {formError && (
                <div className="p-3 bg-red-500/10 border border-red-500/20 rounded-lg text-red-400 flex items-start gap-2">
                  <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
                  <span>{formError}</span>
                </div>
              )}

              {/* F01: Name Input Vector */}
              <div className="space-y-1.5">
                <label className="text-zinc-400 block uppercase font-medium">Candidate Profile Name </label>
                <div className="relative">
                  <User className="absolute left-3 top-2.5 w-4 h-4 text-zinc-600" />
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    [cite_start]placeholder="e.g., Diksha Rai" [cite: 137]
                    className="w-full bg-zinc-900 border border-zinc-800 rounded-lg pl-9 pr-3 py-2.5 text-zinc-100 focus:outline-none focus:border-indigo-500 transition-colors placeholder:text-zinc-600"
                  />
                </div>
              </div>

              {/* F02: Target Role Select Dropdown Vector */}
              <div className="space-y-1.5">
                <label className="text-zinc-400 block uppercase font-medium">Target Track Pathway </label>
                <div className="relative">
                  <Briefcase className="absolute left-3 top-2.5 w-4 h-4 text-zinc-600" />
                  <select
                    name="role"
                    value={formData.role}
                    onChange={handleInputChange}
                    className="w-full bg-zinc-900 border border-zinc-800 rounded-lg pl-9 pr-3 py-2.5 text-zinc-100 focus:outline-none focus:border-indigo-500 transition-colors appearance-none"
                  >
                    <option value="">-- Choose Specialization --</option>
                    <option value="SDE">Software Development Engineer (SDE) [cite: 146, 194]</option>
                    <option value="DataScience">Data Science / Machine Learning [cite: 146, 194]</option>
                    <option value="Product">Product Management (PM) [cite: 146, 194]</option>
                  </select>
                </div>
              </div>

              {/* F03: Difficulty Tier Vector */}
              <div className="space-y-1.5">
                <label className="text-zinc-400 block uppercase font-medium">Panel Strictness Matrix </label>
                <div className="grid grid-cols-3 gap-2">
                  {['Easy', 'Medium', 'Hard'].map((tier) => (
                    <label 
                      key={tier}
                      className={`
                        border rounded-lg p-2.5 text-center cursor-pointer transition-all block
                        ${formData.difficulty === tier 
                          ? 'border-indigo-500 bg-indigo-500/10 text-indigo-400 font-bold' 
                          : 'border-zinc-800 bg-zinc-900 text-zinc-400 hover:text-zinc-200 hover:bg-zinc-900/60'}
                      `}
                    >
                      <input
                        type="radio"
                        name="difficulty"
                        value={tier}
                        checked={formData.difficulty === tier}
                        onChange={handleInputChange}
                        className="sr-only"
                      />
                      {tier}
                    </label>
                  ))}
                </div>
              </div>

              {/* F04: Validation Dependent Activation Button Group */}
              <div className="pt-4 border-t border-zinc-900 flex justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="px-4 py-2 bg-zinc-900 border border-zinc-800 hover:bg-zinc-800 text-zinc-300 text-xs rounded-lg transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 bg-zinc-100 hover:bg-zinc-200 text-zinc-950 font-bold text-xs rounded-lg transition-colors"
                >
                  Initialize Battle
                </button>
              </div>

            </form>
          </div>
        </div>
      )}

    </div>
  );
}