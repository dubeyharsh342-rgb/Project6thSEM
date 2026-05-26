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
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div key={feature.title} className="flex gap-4">
                <div className="shrink-0 p-3 bg-zinc-900 border border-zinc-800 rounded-xl text-indigo-400 w-12 h-12 flex items-center justify-center shadow-sm">
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-zinc-100 mb-1.5">{feature.title}</h3>
                  <p className="text-sm text-zinc-400 leading-relaxed">{feature.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
