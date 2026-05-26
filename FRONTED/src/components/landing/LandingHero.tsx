import { Link } from 'react-router-dom';
import { Play, Sparkles } from 'lucide-react';

export default function LandingHero() {
  return (
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
        <Link
          to="/signup"
          className="w-full sm:w-auto bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white font-semibold px-6 py-3 rounded-xl shadow-lg shadow-indigo-500/25 flex items-center justify-center gap-2 group transition-all transform hover:-translate-y-0.5"
        >
          <Play className="w-4 h-4 fill-white group-hover:scale-110 transition-transform" />
          Launch Free Simulation
        </Link>
        <a href="#agents" className="w-full sm:w-auto bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 text-zinc-300 font-medium px-6 py-3 rounded-xl transition-all text-center">
          Meet the Agents
        </a>
      </div>
    </section>
  );
}
