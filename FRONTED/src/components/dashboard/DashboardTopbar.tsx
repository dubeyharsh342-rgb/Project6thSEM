import { Bell, Menu, Sparkles } from 'lucide-react';

interface DashboardTopbarProps {
  userName: string;
  currentRound: string;
  onToggleSidebar: () => void;
}

export default function DashboardTopbar({ userName, currentRound, onToggleSidebar }: DashboardTopbarProps) {
  return (
    <header className="h-20 border-b border-zinc-900 bg-zinc-950/80 backdrop-blur px-4 sm:px-6 flex items-center justify-between gap-4 shrink-0">
      <div className="flex items-center gap-4">
        <button onClick={onToggleSidebar} className="md:hidden p-2 text-zinc-400 hover:text-white rounded-lg border border-zinc-800 bg-zinc-900">
          <Menu className="w-5 h-5" />
        </button>
        <div>
          <p className="text-xs uppercase tracking-[0.35em] text-zinc-500">Welcome back</p>
          <h1 className="text-2xl font-bold text-white">{userName}</h1>
        </div>
      </div>

      <div className="hidden lg:flex items-center gap-4">
        <div className="rounded-2xl bg-zinc-900 border border-zinc-800 px-4 py-3 text-sm text-zinc-200">
          <p className="text-[10px] uppercase tracking-[0.35em] text-zinc-500">Current interview flow</p>
          <p className="mt-1 font-semibold">{currentRound}</p>
        </div>
        <button className="inline-flex items-center gap-2 rounded-2xl bg-zinc-900 border border-zinc-800 px-4 py-3 text-sm text-zinc-200 hover:bg-zinc-800 transition">
          <Bell className="w-4 h-4 text-indigo-400" />
          Agent alerts
        </button>
      </div>
    </header>
  );
}
