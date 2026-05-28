import { ClipboardList, FileText, Sparkles, Video, Users } from 'lucide-react';

interface SessionData {
  name: string;
  email: string;
  role: string;
  track: string;
  level: string;
  faceAnalysis: string;
}

interface LiveMetrics {
  lastSession: string;
  overallRating: string;
  interviewType: string;
  currentSignal: string;
  technicalScore: string;
  hrScore: string;
  confidenceScore: string;
}

interface DashboardMainProps {
  currentTab: string;
  sessionData: SessionData;
  liveMetrics: LiveMetrics;
}

const featureCards = [
  {
    title: 'Multi-Agent Evaluation',
    description: 'DSA, HR, Core, and Behavioral agents collaborate on each interview cycle.',
    icon: Users,
    accent: 'from-indigo-500 to-purple-600'
  },
  {
    title: 'Automated Candidate Input',
    description: 'Collect user profile, resume metadata, role intent, and preferred interview track before launch.',
    icon: ClipboardList,
    accent: 'from-cyan-500 to-sky-500'
  },
  {
    title: 'Facial Expression Support',
    description: 'Video analysis readiness for emotion and confidence feedback during evaluation.',
    icon: Video,
    accent: 'from-emerald-500 to-lime-500'
  },
  {
    title: 'Report Card Vision',
    description: 'Review scorecards and insights for every simulation in a dedicated report page.',
    icon: FileText,
    accent: 'from-rose-500 to-fuchsia-500'
  }
];

export default function DashboardMain({ currentTab, sessionData, liveMetrics }: DashboardMainProps) {
  return (
    <main className="flex-1 p-4 sm:p-6 lg:p-8 overflow-y-auto space-y-6">
      <div className="grid gap-6 xl:grid-cols-[1.4fr_0.8fr]">
        <section className="space-y-6">
          <div className="rounded-3xl border border-zinc-800 bg-zinc-950 p-8 shadow-2xl shadow-black/20">
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <div>
                <p className="text-xs uppercase tracking-[0.35em] text-zinc-500">Dashboard Overview</p>
                <h2 className="mt-3 text-3xl font-bold text-white">Interview Control Center</h2>
                <p className="mt-3 max-w-2xl text-sm text-zinc-400 leading-relaxed">
                  This dashboard shows the interview flow, key metrics, and preparation steps before the AI-driven session begins.
                </p>
              </div>
              <div className="grid gap-3 sm:grid-cols-3">
                <div className="rounded-3xl bg-zinc-900 border border-zinc-800 p-4 text-center">
                  <p className="text-[10px] uppercase tracking-[0.35em] text-zinc-500">Last session</p>
                  <p className="mt-3 text-xl font-semibold text-white">{liveMetrics.lastSession}</p>
                </div>
                <div className="rounded-3xl bg-zinc-900 border border-zinc-800 p-4 text-center">
                  <p className="text-[10px] uppercase tracking-[0.35em] text-zinc-500">Overall rating</p>
                  <p className="mt-3 text-xl font-semibold text-emerald-400">{liveMetrics.overallRating}</p>
                </div>
                <div className="rounded-3xl bg-zinc-900 border border-zinc-800 p-4 text-center">
                  <p className="text-[10px] uppercase tracking-[0.35em] text-zinc-500">Mode</p>
                  <p className="mt-3 text-xl font-semibold text-white">{liveMetrics.interviewType}</p>
                </div>
              </div>
            </div>
          </div>

          {currentTab === 'overview' && (
            <>
              <div className="grid gap-4 xl:grid-cols-2">
                {featureCards.map((card) => {
                  const Icon = card.icon;
                  return (
                    <div key={card.title} className="rounded-3xl border border-zinc-800 bg-zinc-950 p-6 shadow-lg shadow-black/10">
                      <div className={`inline-flex items-center justify-center rounded-3xl bg-gradient-to-r ${card.accent} p-3 text-white shadow-lg shadow-zinc-900/10 mb-5`}>
                        <Icon className="w-5 h-5" />
                      </div>
                      <h3 className="text-lg font-semibold text-white">{card.title}</h3>
                      <p className="mt-3 text-sm text-zinc-400 leading-relaxed">{card.description}</p>
                    </div>
                  );
                })}
              </div>

              <div className="rounded-3xl border border-zinc-800 bg-zinc-950 p-6 shadow-xl shadow-black/20">
                <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <p className="text-xs uppercase tracking-[0.35em] text-zinc-500">Realtime simulation telemetry</p>
                    <h3 className="mt-2 text-2xl font-semibold text-white">Live candidate performance</h3>
                  </div>
                  <span className="inline-flex items-center gap-2 rounded-full border border-zinc-800 bg-zinc-900 px-4 py-2 text-xs uppercase tracking-[0.3em] text-emerald-300">
                    <span className="h-2 w-2 rounded-full bg-emerald-500" />
                    {liveMetrics.currentSignal}
                  </span>
                </div>

                <div className="mt-6 grid gap-4 sm:grid-cols-3">
                  {[
                    { label: 'Technical Score', value: liveMetrics.technicalScore, tone: 'Updated live' },
                    { label: 'Behavior Score', value: liveMetrics.hrScore, tone: 'Adaptive feedback' },
                    { label: 'Confidence', value: liveMetrics.confidenceScore, tone: 'Realtime signal' }
                  ].map((metric) => (
                    <div key={metric.label} className="rounded-3xl bg-zinc-900 border border-zinc-800 p-5">
                      <p className="text-xs uppercase tracking-[0.35em] text-zinc-500">{metric.label}</p>
                      <p className="mt-3 text-3xl font-bold text-white">{metric.value}</p>
                      <p className="mt-2 text-sm text-zinc-400">{metric.tone}</p>
                    </div>
                  ))}
                </div>
              </div>
            </>
          )}

          {currentTab === 'setup' && (
            <div className="rounded-3xl border border-zinc-800 bg-zinc-950 p-8 shadow-2xl shadow-black/20">
              <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <h3 className="text-2xl font-bold text-white">Pre-Interview Intake</h3>
                  <p className="mt-2 text-sm text-zinc-400">Collect candidate identity and role details before the AI agents begin.</p>
                </div>
                <span className="inline-flex items-center gap-2 rounded-full border border-zinc-800 bg-zinc-900 px-4 py-2 text-xs uppercase tracking-[0.3em] text-zinc-400">
                  Required step
                </span>
              </div>

              <div className="grid gap-4 lg:grid-cols-2">
                <div className="space-y-4">
                  <label className="block text-sm text-zinc-300">
                    Candidate name
                    <input className="mt-2 w-full rounded-3xl border border-zinc-800 bg-zinc-900 px-4 py-3 text-white outline-none focus:border-indigo-500" placeholder="Diksha Rai" />
                  </label>
                  <label className="block text-sm text-zinc-300">
                    Role applied
                    <input className="mt-2 w-full rounded-3xl border border-zinc-800 bg-zinc-900 px-4 py-3 text-white outline-none focus:border-indigo-500" placeholder="Software Development Engineer" />
                  </label>
                  <label className="block text-sm text-zinc-300">
                    Interview track
                    <select className="mt-2 w-full rounded-3xl border border-zinc-800 bg-zinc-900 px-4 py-3 text-white outline-none focus:border-indigo-500">
                      <option>Technical / DSA</option>
                      <option>HR & Behavioral</option>
                      <option>Core System Design</option>
                    </select>
                  </label>
                </div>
                <div className="space-y-4">
                  <label className="block text-sm text-zinc-300">
                    Resume status
                    <div className="mt-2 rounded-3xl border border-dashed border-zinc-800 bg-zinc-900 p-4 text-zinc-400">
                      Resume uploaded
                    </div>
                  </label>
                  <label className="block text-sm text-zinc-300">
                    Interview difficulty
                    <select className="mt-2 w-full rounded-3xl border border-zinc-800 bg-zinc-900 px-4 py-3 text-white outline-none focus:border-indigo-500">
                      <option>Medium</option>
                      <option>Easy</option>
                      <option>Hard</option>
                    </select>
                  </label>
                  <div className="rounded-3xl border border-zinc-800 bg-zinc-900 p-5 text-sm text-zinc-400">
                    <p className="font-semibold text-white">Next step</p>
                    <p className="mt-2">When the candidate profile is ready, the system will forward to the AI agent orchestrator for DSA, HR, and behavioral evaluation.</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 flex flex-wrap items-center justify-between gap-4">
                <span className="text-sm text-zinc-400">This dashboard is a design preview. The intake card is visually complete and ready for integration.</span>
                <button className="rounded-3xl bg-gradient-to-r from-indigo-500 to-purple-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-500/20 hover:opacity-95 transition">
                  Confirm profile details
                </button>
              </div>
            </div>
          )}

          {currentTab === 'agent-panel' && (
            <div className="grid gap-4 lg:grid-cols-2">
              {[
                { title: 'DSA Agent', description: 'Technical problem synthesis with performance and complexity evaluation.', status: 'Active', color: 'from-blue-500 to-cyan-500' },
                { title: 'HR Agent', description: 'Behavioral and cultural fit analysis using scenario-based questioning.', status: 'Active', color: 'from-purple-500 to-fuchsia-500' },
                { title: 'Core Agent', description: 'System design and architecture evaluation with cross-round context.', status: 'Ready', color: 'from-sky-500 to-indigo-500' },
                { title: 'Facial Analysis', description: 'Video-supported expression evaluation to measure confidence and clarity.', status: 'Ready', color: 'from-emerald-500 to-lime-500' }
              ].map((agent) => (
                <div key={agent.title} className="rounded-3xl border border-zinc-800 bg-zinc-950 p-6 shadow-lg shadow-black/10">
                  <div className={`inline-flex items-center rounded-3xl bg-gradient-to-r ${agent.color} p-3 text-white mb-5`}>
                    <Sparkles className="w-5 h-5" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">{agent.title}</h3>
                  <p className="mt-3 text-sm text-zinc-400 leading-relaxed">{agent.description}</p>
                  <div className="mt-6 inline-flex rounded-full bg-zinc-900 px-4 py-2 text-xs uppercase tracking-[0.35em] text-zinc-300">{agent.status}</div>
                </div>
              ))}
            </div>
          )}

          {currentTab === 'report-card' && (
            <div className="space-y-6">
              <div className="rounded-3xl border border-zinc-800 bg-zinc-950 p-8 shadow-2xl shadow-black/20">
                <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <p className="text-xs uppercase tracking-[0.35em] text-zinc-500">Report Card Preview</p>
                    <h3 className="mt-3 text-3xl font-bold text-white">Candidate scorecard</h3>
                  </div>
                  <span className="rounded-full bg-zinc-900 px-4 py-2 text-xs uppercase tracking-[0.35em] text-zinc-400">Overall insights</span>
                </div>
                <div className="mt-8 grid gap-4 md:grid-cols-3">
                  {[
                    { label: 'Technical', value: '78%', tone: 'Strong' },
                    { label: 'Behavior', value: '84%', tone: 'Consistent' },
                    { label: 'Confidence', value: '72%', tone: 'Balanced' }
                  ].map((metric) => (
                    <div key={metric.label} className="rounded-3xl bg-zinc-900 border border-zinc-800 p-6 text-center">
                      <p className="text-sm uppercase tracking-[0.35em] text-zinc-500">{metric.label}</p>
                      <p className="mt-3 text-3xl font-bold text-white">{metric.value}</p>
                      <p className="mt-2 text-sm text-zinc-400">{metric.tone}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-3xl border border-zinc-800 bg-zinc-950 p-8 shadow-lg shadow-black/10">
                <p className="text-sm uppercase tracking-[0.35em] text-zinc-500">Notes</p>
                <ul className="mt-5 space-y-4 text-sm text-zinc-400">
                  <li>• The report card page will include drill-down summaries for each agent evaluation.</li>
                  <li>• Future integration adds facial expression scores alongside verbal performance.</li>
                  <li>• Placeholder charts help stakeholders compare historical candidate outcomes.</li>
                </ul>
              </div>
            </div>
          )}

          {currentTab === 'video-support' && (
            <div className="grid gap-6 xl:grid-cols-[1.3fr_0.7fr]">
              <div className="rounded-3xl border border-zinc-800 bg-zinc-950 p-6 shadow-2xl shadow-black/20">
                <div className="aspect-[16/9] overflow-hidden rounded-3xl bg-zinc-900 border border-zinc-800">
                  <div className="flex h-full items-center justify-center text-zinc-500">Video feed preview</div>
                </div>
                <div className="mt-6 space-y-3 text-sm text-zinc-400">
                  <p>Video support will allow live analysis of facial expression, eye contact, and confidence during the interview session.</p>
                  <p>When enabled, the agent network will also capture emotional cadence and posture indicators automatically.</p>
                </div>
              </div>
              <div className="space-y-4">
                {[
                  { label: 'Expression match', value: '91%' },
                  { label: 'Confidence signal', value: '78%' },
                  { label: 'Eye contact', value: '82%' }
                ].map((item) => (
                  <div key={item.label} className="rounded-3xl border border-zinc-800 bg-zinc-950 p-6 text-sm text-zinc-400">
                    <p className="text-xs uppercase tracking-[0.35em] text-zinc-500">{item.label}</p>
                    <p className="mt-3 text-2xl font-semibold text-white">{item.value}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {currentTab === 'settings' && (
            <div className="rounded-3xl border border-zinc-800 bg-zinc-950 p-8 shadow-lg shadow-black/10 text-zinc-400">
              <p className="text-sm uppercase tracking-[0.35em] text-zinc-500">System configuration</p>
              <h3 className="mt-3 text-2xl font-semibold text-white">Dashboard settings</h3>
              <p className="mt-4 text-sm leading-relaxed">No live controls are enabled in this design preview. This screen will become the central configuration hub for interview automation and agent orchestration.</p>
            </div>
          )}
        </section>

        <aside className="space-y-6">
          <div className="rounded-3xl border border-zinc-800 bg-zinc-950 p-6 shadow-lg shadow-black/10">
            <p className="text-xs uppercase tracking-[0.35em] text-zinc-500">Candidate profile</p>
            <h3 className="mt-3 text-xl font-semibold text-white">{sessionData.name}</h3>
            <p className="mt-2 text-sm text-zinc-400">{sessionData.role} • {sessionData.track}</p>
            <div className="mt-6 grid gap-3 text-sm text-zinc-400">
              <div className="rounded-3xl bg-zinc-900/70 p-4 border border-zinc-800">
                <p className="text-[10px] uppercase tracking-[0.35em] text-zinc-500">Experience level</p>
                <p className="mt-2 text-white">{sessionData.level}</p>
              </div>
              <div className="rounded-3xl bg-zinc-900/70 p-4 border border-zinc-800">
                <p className="text-[10px] uppercase tracking-[0.35em] text-zinc-500">Face analysis</p>
                <p className="mt-2 text-white">{sessionData.faceAnalysis}</p>
              </div>
            </div>
            <div className="mt-6 grid gap-3">
              <div className="rounded-3xl border border-zinc-800 bg-zinc-900 p-4 text-sm text-zinc-400">
                <p className="text-[10px] uppercase tracking-[0.35em] text-zinc-500">Email</p>
                <p className="mt-2 text-white truncate">{sessionData.email}</p>
              </div>
              <div className="grid gap-3 sm:grid-cols-2">
                <div className="rounded-3xl bg-zinc-900/70 p-4 border border-zinc-800">
                  <p className="text-[10px] uppercase tracking-[0.35em] text-zinc-500">Last session</p>
                  <p className="mt-2 text-white">{liveMetrics.lastSession}</p>
                </div>
                <div className="rounded-3xl bg-zinc-900/70 p-4 border border-zinc-800">
                  <p className="text-[10px] uppercase tracking-[0.35em] text-zinc-500">Live rating</p>
                  <p className="mt-2 text-white">{liveMetrics.overallRating}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-3xl border border-zinc-800 bg-zinc-950 p-6 shadow-lg shadow-black/10">
            <p className="text-xs uppercase tracking-[0.35em] text-zinc-500">Upcoming stages</p>
            <div className="mt-5 space-y-3 text-sm text-zinc-400">
              {['Profile review', 'Agent assignment', 'Interview execution', 'Report generation'].map((step) => (
                <div key={step} className="rounded-3xl border border-zinc-800 bg-zinc-900 p-4">
                  {step}
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-zinc-800 bg-zinc-950 p-6 shadow-lg shadow-black/10 text-sm text-zinc-400">
            <p className="text-xs uppercase tracking-[0.35em] text-zinc-500">Design note</p>
            <p className="mt-3 leading-relaxed">This interface is built to present an authentic interview automation dashboard with a clean, agent-driven navigation structure.</p>
          </div>
        </aside>
      </div>
    </main>
  );
}
