import { Mic, BarChart3, ShieldCheck, FileText, Layers, RefreshCw } from 'lucide-react';

const features = [
  {
    icon: Mic,
    title: 'Voice Input STT Engine',
    description: 'Leverages native browser Web Speech APIs to support fully hands-free spoken answers with live real-time transcription.'
  },
  {
    icon: BarChart3,
    title: 'Granular Behavior Diagnostics',
    description: 'Automatically measures response times and word sizes to identify hesitation flags or vagueness indicators.'
  },
  {
    icon: ShieldCheck,
    title: 'Cross-Answer Continuity',
    description: 'The backend maps your answers together, triggering penalties if structural contradictions are detected across rounds.'
  },
  {
    icon: FileText,
    title: 'Downloadable Text Dossiers',
    description: 'Generate structured summaries containing performance scores, agent evaluations, and transcripts instantly upon session completion.'
  },
  {
    icon: Layers,
    title: 'Configurable Trajectories',
    description: 'Tailor prompt complexities dynamically across Software Engineering, Data Science, and Product Management vectors.'
  },
  {
    icon: RefreshCw,
    title: 'Stateless In-Memory Storage',
    description: 'Maximized security. Your metrics, tracking nodes, and prompt histories reside exclusively inside transient memory cycles.'
  }
];

export default function LandingFeatures() {
  return (
    <section id="features" className="relative overflow-hidden bg-zinc-950/90 border-y border-zinc-800 py-24">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-56 bg-[radial-gradient(circle_at_top,_rgba(99,102,241,0.18),_transparent_55%)] opacity-70" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-56 bg-[radial-gradient(circle_at_bottom,_rgba(14,165,233,0.12),_transparent_45%)] opacity-60" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-flex rounded-full border border-indigo-500/30 bg-indigo-500/10 px-4 py-1 text-sm font-semibold uppercase tracking-[0.24em] text-indigo-300 mb-4">
            Feature Showcase
          </span>
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl mb-4">
            Engineered for Authentic Placement Prep
          </h2>
          <p className="mx-auto max-w-2xl text-zinc-400 text-lg leading-8">
            Every component is dedicated to creating a comprehensive, objective mirror of enterprise interview loops.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                className="group flex flex-col gap-5 overflow-hidden rounded-[2rem] border border-zinc-800/90 bg-zinc-900/80 p-6 shadow-[0_20px_80px_-40px_rgba(15,23,42,0.9)] transition duration-300 hover:-translate-y-1 hover:border-indigo-500/40 hover:bg-zinc-900/95"
              >
                <div className="inline-flex h-14 w-14 items-center justify-center rounded-3xl bg-gradient-to-br from-indigo-500 to-sky-500 text-white shadow-lg shadow-sky-500/20 transition duration-300 group-hover:scale-105">
                  <Icon className="h-6 w-6" />
                </div>
                <div className="space-y-3">
                  <h3 className="text-xl font-semibold text-white leading-tight">{feature.title}</h3>
                  <p className="text-sm text-zinc-400 leading-relaxed">{feature.description}</p>
                </div>
                <div className="mt-auto flex items-center gap-2 text-sm font-medium text-indigo-300">
                  <span className="inline-flex h-9 items-center justify-center rounded-full bg-white/5 px-3 text-indigo-200 ring-1 ring-white/10">
                    Live insights
                  </span>
                  <span className="text-zinc-500">•</span>
                  <span>Modern UX</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
