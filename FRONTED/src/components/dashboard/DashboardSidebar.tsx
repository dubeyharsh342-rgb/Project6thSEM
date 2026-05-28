import { ClipboardList, LayoutDashboard, Menu, Video, FileText, Users, Settings, X, UserCircle, LogOut, SlidersHorizontal } from 'lucide-react';

interface DashboardSidebarProps {
  currentTab: string;
  isOpen: boolean;
  user: {
    name: string;
    email: string;
  };
  onTabChange: (tab: string) => void;
  onClose: () => void;
  onLogout: () => void;
}

const navItems = [
  { id: 'overview', label: 'Overview', icon: LayoutDashboard },
  { id: 'setup', label: 'Interview Setup', icon: ClipboardList },
  { id: 'agent-panel', label: 'Agent Panel', icon: Users },
  { id: 'report-card', label: 'Report Card', icon: FileText },
  { id: 'video-support', label: 'Video Support', icon: Video },
  { id: 'settings', label: 'Settings', icon: Settings }
];

export default function DashboardSidebar({ currentTab, isOpen, user, onTabChange, onClose, onLogout }: DashboardSidebarProps) {
  return (
    <aside className={`fixed inset-y-0 left-0 z-50 w-72 bg-zinc-950 border-r border-zinc-900 transform md:translate-x-0 md:static md:flex md:flex-col transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}`}>
      <div className="h-20 flex items-center justify-between px-6 border-b border-zinc-900">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl shadow-md shadow-indigo-500/20">
            <LayoutDashboard className="w-5 h-5 text-white" />
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-zinc-500">BattleSimulator</p>
            <p className="text-sm font-semibold text-white">Interview Control</p>
          </div>
        </div>
        <button onClick={onClose} className="md:hidden p-2 rounded-lg text-zinc-400 hover:text-white hover:bg-zinc-900">
          <X className="w-5 h-5" />
        </button>
      </div>

      <div className="px-6 py-5 border-b border-zinc-900">
        <div className="group relative rounded-3xl border border-zinc-800 bg-zinc-950/80 p-4 transition hover:border-indigo-500">
          <div className="flex items-center gap-3">
            <div className="grid h-12 w-12 place-items-center rounded-2xl bg-indigo-500/15 text-indigo-300 shadow-inner shadow-indigo-500/10">
              <UserCircle className="w-6 h-6" />
            </div>
            <div className="min-w-0">
              <p className="text-sm font-semibold text-white truncate">{user.name}</p>
              <p className="text-xs text-zinc-500 truncate">{user.email}</p>
            </div>
          </div>
          <div className="pointer-events-none absolute inset-x-0 bottom-0 mx-4 mb-4 h-0.5 bg-gradient-to-r from-indigo-500/0 via-indigo-500/40 to-indigo-500/0 opacity-0 transition duration-200 group-hover:opacity-100" />

          <div className="mt-4 space-y-2 opacity-0 transition duration-200 group-hover:opacity-100 group-hover:pointer-events-auto">
            <button
              onClick={() => onTabChange('overview')}
              className="w-full rounded-2xl bg-zinc-900/80 px-3 py-2 text-left text-sm text-zinc-200 hover:bg-zinc-900/100"
            >
              <span className="inline-flex items-center gap-2">
                <UserCircle className="w-4 h-4 text-indigo-400" />
                Profile
              </span>
            </button>
            <button
              onClick={() => onTabChange('settings')}
              className="w-full rounded-2xl bg-zinc-900/80 px-3 py-2 text-left text-sm text-zinc-200 hover:bg-zinc-900/100"
            >
              <span className="inline-flex items-center gap-2">
                <SlidersHorizontal className="w-4 h-4 text-indigo-400" />
                Settings
              </span>
            </button>
            <button
              onClick={onLogout}
              className="w-full rounded-2xl bg-zinc-900/80 px-3 py-2 text-left text-sm text-rose-400 hover:bg-zinc-900/100"
            >
              <span className="inline-flex items-center gap-2">
                <LogOut className="w-4 h-4" />
                Logout
              </span>
            </button>
          </div>
        </div>
      </div>

      <div className="px-6 py-5 border-b border-zinc-900">
        <button
          onClick={() => onTabChange('setup')}
          className="w-full inline-flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-indigo-500 to-purple-600 px-4 py-3 text-sm font-semibold text-white shadow-xl shadow-indigo-500/10 hover:opacity-95 transition"
        >
          <ClipboardList className="w-4 h-4" />
          Interview Setup
        </button>
      </div>

      <nav className="flex-1 px-4 py-6 space-y-2">
        {navItems.map((item) => {
          const Icon = item.icon;
          return (
            <button
              key={item.id}
              onClick={() => onTabChange(item.id)}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-2xl text-sm font-medium text-left transition-all ${currentTab === item.id ? 'bg-zinc-900 text-white border border-zinc-800 shadow-sm shadow-zinc-900/30' : 'text-zinc-400 hover:text-zinc-100 hover:bg-zinc-900/40'}`}
            >
              <Icon className="w-4 h-4" />
              {item.label}
            </button>
          );
        })}
      </nav>

      <div className="p-5 border-t border-zinc-900 bg-zinc-900/10 text-xs font-mono text-zinc-400 space-y-3">
        <div className="rounded-3xl bg-zinc-900/60 p-3">
          <p className="text-[10px] uppercase tracking-[0.35em] text-zinc-500">Agent Suite</p>
          <p className="mt-2 text-sm text-zinc-200">DSA, HR, Core Eval, Behavioral AI</p>
        </div>
        <div className="flex items-center gap-2 text-[10px] text-zinc-500">
          <span className="w-2 h-2 rounded-full bg-emerald-500" />
          Ready for pre-screening inputs
        </div>
      </div>
    </aside>
  );
}
