import { useState, useRef, useEffect } from 'react';
import { CheckCircle2, Code2, Users, Brain } from 'lucide-react';

const OPTIONS = [
  {
    id: 'dsa',
    title: 'DSA',
    icon: Code2,
    accent: '#6366F1',
    descriptionLines: [
      'Practice data-structures and algorithms under timed, interview-style constraints.',
      'Receive step-by-step hints and targeted feedback to improve solutions.',
      'Focus on problem patterns, space/time trade-offs and clean code.'
    ]
  },
  {
    id: 'hr',
    title: 'HR',
    icon: Users,
    accent: '#A78BFA',
    descriptionLines: [
      'Mock behavioral and fit interviews with common HR prompts.',
      'Get guidance on structuring answers and highlighting impact.',
      'Practice storytelling, metrics, and concise follow-ups.'
    ]
  },
  {
    id: 'projects',
    title: 'PROJECTS',
    icon: CheckCircle2,
    accent: '#F59E0B',
    descriptionLines: [
      'Prepare project walkthroughs with STAR-style talking points.',
      'Highlight architecture, trade-offs, and measurable results.',
      'Anticipate follow-up questions and technical deep-dives.'
    ]
  },
  {
    id: 'behavioural',
    title: 'BEHAVIOURAL',
    icon: Brain,
    accent: '#10B981',
    descriptionLines: [
      'Work on communication, tone, and confidence in responses.',
      'Practice concise intros, transitions, and reflective answers.',
      'Receive tips to manage pacing, clarity, and presence.'
    ]
  },
  {
    id: 'core-question',
    title: 'CORE QUESTION',
    icon: Code2,
    accent: '#06B6D4',
    descriptionLines: [
      'Target the most commonly asked core CS questions by topic.',
      'Review canonical solutions, complexity analysis, and pitfalls.',
      'Get quick checks for correctness and optimization ideas.'
    ]
  }
];

export default function LandingPreview() {
  const [selected] = useState(OPTIONS[0].id);
  const [hovered, setHovered] = useState<string | null>(null);
  const [currentActive, setCurrentActive] = useState<string>(OPTIONS[0].id);
  const hoverTimeout = useRef<number | null>(null);

  useEffect(() => {
    return () => {
      if (hoverTimeout.current) {
        clearTimeout(hoverTimeout.current);
      }
    };
  }, []);

  const clearHoveredWithDelay = (delay = 120) => {
    if (hoverTimeout.current) clearTimeout(hoverTimeout.current);
    // schedule clearing hovered and reverting currentActive to default
    hoverTimeout.current = window.setTimeout(() => {
      setHovered(null);
      setCurrentActive(selected);
    }, delay);
  };

  const handleEnter = (id: string) => {
    if (hoverTimeout.current) {
      clearTimeout(hoverTimeout.current);
      hoverTimeout.current = null;
    }
    setHovered(id);
    setCurrentActive(id);
  };

  const handleLeave = () => {
    clearHoveredWithDelay(120);
  };

  const active = OPTIONS.find(o => o.id === currentActive) ?? OPTIONS[0];

  return (
    <div className="relative py-20">
      <div className="pointer-events-none absolute left-0 top-1/2 h-72 w-72 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,_rgba(251,207,232,0.45),_transparent_55%)] blur-3xl" />
      <div className="pointer-events-none absolute right-0 top-1/2 h-72 w-72 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,_rgba(251,207,232,0.45),_transparent_55%)] blur-3xl" />

      <div className="relative max-w-6xl mx-auto mb-24 overflow-hidden rounded-[28px] border border-zinc-800 bg-zinc-950/95 shadow-2xl">
        <div className="grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr] gap-8 lg:gap-8 items-start p-6 lg:p-8">
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/10 to-purple-500/10 rounded-2xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="relative border border-zinc-800 rounded-2xl overflow-hidden shadow-2xl backdrop-blur-sm">
              <img
                src="/previewImg.png"
                alt="Interview Preview"
                className="w-full h-full object-cover rounded-2xl"
              />
            </div>
          </div>

          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h3 className="text-3xl lg:text-4xl font-bold text-zinc-50">
                Mock Your Complete Interview
              </h3>
            </div>

            <div className="flex gap-3 flex-wrap">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900/60 border border-zinc-800 text-sm text-zinc-200">
                <Brain className="w-4 h-4 text-emerald-300" />
                <span className="font-medium">AI-powered</span>
              </div>

              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900/60 border border-zinc-800 text-sm text-zinc-200">
                <Users className="w-4 h-4 text-purple-300" />
                <span className="font-medium">360° complete prep</span>
              </div>

              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900/60 border border-zinc-800 text-sm text-zinc-200">
                <CheckCircle2 className="w-4 h-4 text-amber-300" />
                <span className="font-medium">Real-world scenarios</span>
              </div>
            </div>

            <div>
              <nav className="flex gap-6 flex-wrap text-sm lg:text-base h-8 items-end">
                {OPTIONS.map(opt => (
                  <button
                    key={opt.id}
                    onMouseEnter={() => handleEnter(opt.id)}
                    onMouseLeave={() => handleLeave()}
                    onFocus={() => handleEnter(opt.id)}
                    onBlur={() => handleLeave()}
                    className="relative py-1 px-1 focus:outline-none h-8 flex items-center"
                  >
                    <span
                      className="relative z-10 transition-colors duration-200"
                      style={{ color: hovered === opt.id ? opt.accent : undefined }}
                    >
                      {opt.title}
                    </span>

                    <span
                      className="absolute left-0 right-0 bottom-0 h-[2px] rounded-full transition-transform duration-300"
                      style={{ backgroundColor: opt.accent, transform: hovered === opt.id ? 'scaleX(1)' : 'scaleX(0)', transformOrigin: 'left' }}
                    />
                  </button>
                ))}
              </nav>

              <div className="mt-4 border border-zinc-800 rounded-2xl p-5 bg-zinc-900/60 transition-all duration-300">
                <h4 className="text-lg font-semibold" style={{ color: active.accent }}>{active.title}</h4>
                <div className="mt-3 text-sm text-zinc-300 leading-relaxed">
                  <ul className="list-disc pl-5 space-y-2 h-24 overflow-hidden">
                    {active.descriptionLines.map((line, i) => (
                      <li key={i} className="transition-opacity duration-200">{line}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
