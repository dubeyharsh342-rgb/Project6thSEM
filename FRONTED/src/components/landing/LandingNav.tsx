import { ChevronRight, Cpu } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function LandingNav() {
  return (
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
          <a href="#agents" className="hover:text-zinc-100 transition-colors">
            AI Panel
          </a>
          <a href="#features" className="hover:text-zinc-100 transition-colors">
            Core Engine
          </a>
          <a href="#pricing" className="hover:text-zinc-100 transition-colors">
            Pricing
          </a>
        </nav>

        <div className="flex items-center gap-3">
          <Link
            to="/login"
            className="text-sm font-medium text-zinc-300 hover:text-white transition-colors"
          >
            Login
          </Link>
          <Link
            to="/signup"
            className="hidden sm:inline-flex items-center gap-1.5 bg-zinc-100 text-zinc-950 hover:bg-zinc-200 transition-all text-sm font-semibold px-4 py-2 rounded-lg shadow-sm shadow-white/10"
          >
            Get Started <ChevronRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </header>
  );
}
