import { CheckCircle2 } from 'lucide-react';

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
    id: 'rahul',
    title: 'Rahul',
    subtitle: 'Tech Lead',
    role: 'DSA Agent',
    description: 'Launches core technical, algorithmic, and role-contextualized data structure problem constraints.',
    tone: 'Start of DSA Round',
    badge: 'blue'
  },
  {
    id: 'priya',
    title: 'Priya',
    subtitle: 'HR Manager',
    role: 'HR Agent',
    description: 'Deploys precise behavioral, cultural integration, and situational constraints mapping onto STAR methodologies.',
    tone: 'After DSA Concludes',
    badge: 'purple'
  },
  {
    id: 'arjun',
    title: 'Arjun',
    subtitle: 'Senior Dev',
    role: 'Trap Agent',
    description: 'Probes weak, hesitant, or contradicting declarations. Interjects to stress-test candidate honesty and mastery depth.',
    tone: 'Score < 5 or Contradiction',
    badge: 'rose'
  },
  {
    id: 'system',
    title: 'System',
    subtitle: 'Silent',
    role: 'Evaluator Agent',
    description: 'Whispers calculations on correctness, language clarity, and alignment metrics across every line submitted.',
    tone: 'Immediate Post-Submission',
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

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
        {agents.map((agent) => (
          <div key={agent.id} className="bg-zinc-900/40 border border-zinc-800 rounded-xl p-6 hover:border-zinc-700 transition-all">
            <div className={`w-10 h-10 rounded-lg text-white flex items-center justify-center mb-4 font-bold shadow-lg ${badgeColors[agent.badge]}`}>
              {agent.title[0]}
            </div>
            <h3 className="text-lg font-semibold text-zinc-100 flex items-center justify-between">
              {agent.title} <span className="text-xs font-normal text-zinc-500 font-mono">{agent.subtitle}</span>
            </h3>
            <p className="text-xs font-mono text-zinc-400 mb-3 uppercase tracking-wider">{agent.role}</p>
            <p className="text-sm text-zinc-400 leading-relaxed mb-4">{agent.description}</p>
            <div className="text-xs font-mono text-zinc-500 bg-zinc-950 px-2.5 py-1.5 rounded border border-zinc-800">
              Trigger: {agent.tone}
            </div>
          </div>
        ))}
      </div>

      <div className="border-y border-zinc-800 bg-zinc-900/20 max-w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-3xl font-extrabold text-white tracking-tight">~1.5 Million</div>
            <div className="text-xs font-medium text-zinc-500 uppercase tracking-wider mt-1">Graduates Addressed Yearly</div>
          </div>
          <div>
            <div className="text-3xl font-extrabold text-white tracking-tight">4 Personas</div>
            <div className="text-xs font-medium text-zinc-500 uppercase tracking-wider mt-1">Symphonized AI Panel</div>
          </div>
          <div>
            <div className="text-3xl font-extrabold text-white tracking-tight">100% Free</div>
            <div className="text-xs font-medium text-zinc-500 uppercase tracking-wider mt-1">No Login, No Signup Needed</div>
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
