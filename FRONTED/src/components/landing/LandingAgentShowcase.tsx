import { useState, useEffect } from 'react';

type AgentBadge = 'blue' | 'purple' | 'rose' | 'slate';

const agents: Array<{
  id: string;
  title: string;
  subtitle: string;
  role: string;
  description: string;
  tone: string;
  badge: AgentBadge;
}> = [
  {
    id: 'dsa',
    title: 'DSA Agent',
    subtitle: 'Algorithm Coach',
    role: 'Problem Solver',
    description: 'Launches core data structure and algorithm challenges with interview-style constraints, hints, and clean solution checks.',
    tone: 'Start of Technical Round',
    badge: 'blue'
  },
  {
    id: 'project',
    title: 'Project Agent',
    subtitle: 'Product Specialist',
    role: 'Portfolio Reviewer',
    description: 'Evaluates your project story, architecture decisions, and technical trade-offs with realistic product-focused follow-ups.',
    tone: 'Project Walkthrough',
    badge: 'purple'
  },
  {
    id: 'hr-questions',
    title: 'HR Questions Agent',
    subtitle: 'People Partner',
    role: 'Behavioral Assessor',
    description: 'Fires common HR and culture-fit questions, then scores answers for clarity, empathy, and impact.',
    tone: 'Behavioral Round',
    badge: 'rose'
  },
  {
    id: 'behavioural',
    title: 'Behavioural Agent',
    subtitle: 'Soft Skill Coach',
    role: 'Communication Mentor',
    description: 'Coaches confident storytelling, strong body language prompts, and structured response delivery.',
    tone: 'Behavioral Feedback',
    badge: 'slate'
  },
  {
    id: 'confidence',
    title: 'Confidence Checker',
    subtitle: 'Readiness Sensor',
    role: 'Mindset Guide',
    description: 'Assesses answer delivery, tone, and composure to help you feel more assured in every response.',
    tone: 'Confidence Review',
    badge: 'blue'
  },
  {
    id: 'core-question',
    title: 'Core Question Agent',
    subtitle: 'CS Interviewer',
    role: 'Concept Tester',
    description: 'Targets fundamental computer science questions with canonical answers, complexity checks, and common pitfalls.',
    tone: 'Core Concept Drill',
    badge: 'purple'
  },
  {
    id: 'resume-analyzer',
    title: 'Resume Analyzer',
    subtitle: 'Career Auditor',
    role: 'Resume Optimizer',
    description: 'Reviews your resume structure, keywords, and impact statements so your experience reads stronger to recruiters.',
    tone: 'Resume Audit',
    badge: 'rose'
  },
  {
    id: 'performance',
    title: 'Performance Generator',
    subtitle: 'Outcome Engine',
    role: 'Result Synthesizer',
    description: 'Summarizes your overall performance with strengths, weaknesses, and a concise improvement plan.',
    tone: 'End of Session',
    badge: 'slate'
  }
];

const badgeColors: Record<AgentBadge, string> = {
  blue: 'bg-blue-600',
  purple: 'bg-purple-600',
  rose: 'bg-rose-600',
  slate: 'bg-zinc-800'
};

export default function LandingAgentShowcase() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (isHovered) return undefined;

    const t = setInterval(() => {
      setActiveIndex(i => (i + 1) % agents.length);
    }, 1800);
    return () => clearInterval(t);
  }, [isHovered]);

  const effectiveIndex = activeIndex;
  const cardOffsets = [-2, -1, 0, 1, 2];
  const visibleAgents = cardOffsets.map(offset => {
    const index = (effectiveIndex + offset + agents.length) % agents.length;
    return { agent: agents[index], offset };
  });

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <section id="agents" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl mb-4">
          Meet the Interview Committee
        </h2>
        <p className="text-zinc-400 text-lg">
          Unlike standard flat chat simulators, our core architecture manages four dynamic, hyper-specific system prompts that actively observe and build on each other's behaviors.
        </p>
      </div>

      <div className="mb-20">
        <div className="relative overflow-hidden h-[360px]">
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="w-full h-[1px] bg-white/10" />
          </div>

          {visibleAgents.map(({ agent, offset }) => {
            const distance = Math.abs(offset);
            const isActive = offset === 0;
            const isSide = distance === 1;
            const x = offset * 190;
            const scale = isActive ? 1 : isSide ? 0.88 : 0.75;
            const translateY = isActive && isHovered ? -10 : isActive ? 0 : 10;
            const opacity = isActive ? 1 : isSide ? 0.7 : 0.45;
            const filter = isActive ? 'none' : 'blur(3px)';
            const zIndex = isActive ? 30 : isSide ? 20 : 10;
            return (
              <div
                key={agent.id}
                onMouseEnter={() => isActive && setIsHovered(true)}
                onMouseLeave={() => isActive && setIsHovered(false)}
                className={
                  `absolute top-1/2 left-1/2 w-[280px] max-w-[280px] rounded-3xl border p-5 transition-all duration-500 ease-out shadow-xl overflow-hidden ` +
                  (isActive
                    ? `bg-zinc-900/95 border-indigo-500 ring-1 ring-indigo-500/20 cursor-pointer ${isHovered ? 'shadow-[0_35px_120px_-40px_rgba(99,102,241,0.8)] bg-zinc-950/95' : 'bg-zinc-900/90'}`
                    : isSide
                    ? 'bg-zinc-900/60 border-zinc-800 opacity-70'
                    : 'bg-zinc-900/40 border-zinc-800 opacity-50 pointer-events-none')
                }
                style={{
                  transform: `translate(calc(-50% + ${x}px), calc(-50% + ${translateY}px)) scale(${scale})`,
                  opacity,
                  filter,
                  zIndex,
                }}
              >
                <div className="flex items-center gap-3">
                  <div className={`w-11 h-11 rounded-2xl text-white flex items-center justify-center font-bold shadow-lg ${badgeColors[agent.badge]}`}>
                    {agent.title[0]}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-zinc-100">{agent.title}</h3>
                    <p className="text-xs text-zinc-500 uppercase tracking-wider">{agent.subtitle}</p>
                  </div>
                </div>
                <div className={`mt-5 space-y-3 transition-all duration-300 ${isActive && isHovered ? 'max-h-[420px] opacity-100' : 'max-h-0 opacity-0'} overflow-hidden`}>
                  <p className="text-xs font-mono text-zinc-400 uppercase tracking-wider">{agent.role}</p>
                  <p className="text-sm text-zinc-300 leading-relaxed">{agent.description}</p>
                  <div className="text-xs font-mono text-zinc-500 bg-zinc-950 px-2.5 py-2 rounded border border-zinc-800 inline-block">
                    Trigger: {agent.tone}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="border-y border-zinc-800 bg-zinc-900/20 max-w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-3xl font-extrabold text-white tracking-tight">~1.5 Million</div>
            <div className="text-xs font-medium text-zinc-500 uppercase tracking-wider mt-1">Graduates Addressed Yearly</div>
          </div>
          <div>
            <div className="text-3xl font-extrabold text-white tracking-tight">6-7 Personas</div>
            <div className="text-xs font-medium text-zinc-500 uppercase tracking-wider mt-1">Symphonized AI Panel</div>
          </div>
          <div>
            <div className="text-3xl font-extrabold text-white tracking-tight">100% Free</div>
            <div className="text-xs font-medium text-zinc-500 uppercase tracking-wider mt-1">Login Once, mock unlimited</div>
          </div>
          <div>
            <div className="text-3xl font-extrabold text-white tracking-tight">&lt; 5 Seconds</div>
            <div className="text-xs font-medium text-zinc-500 uppercase tracking-wider mt-1">Ultra-Low AI Latency Responses</div>
          </div>
        </div>
      </div>
    </section>
  );
}
