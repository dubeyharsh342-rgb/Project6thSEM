import { Terminal, Sparkles, ChevronRight } from 'lucide-react';

export default function LandingPreview() {
  return (
    <div className="relative max-w-4xl mx-auto border border-zinc-800 rounded-2xl bg-zinc-900/40 p-2 shadow-2xl backdrop-blur-sm group mb-24">
      <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/5 to-purple-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
      <div className="border border-zinc-800 bg-zinc-950 rounded-xl overflow-hidden text-left shadow-inner">
        <div className="bg-zinc-900/50 border-b border-zinc-800 px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-zinc-800" />
            <span className="w-3 h-3 rounded-full bg-zinc-800" />
            <span className="w-3 h-3 rounded-full bg-zinc-800" />
            <span className="text-xs text-zinc-500 font-mono ml-2">ROUND_1_DSA_SIMULATOR.exe</span>
          </div>
          <div className="text-xs font-mono text-indigo-400 bg-indigo-500/10 border border-indigo-500/20 px-2 py-0.5 rounded">
            ACTIVE SESSION
          </div>
        </div>

        <div className="p-6 space-y-6 max-h-[380px] overflow-y-auto font-sans">
          <div className="flex items-start gap-4">
            <div className="w-8 h-8 rounded-lg bg-blue-600 text-white flex items-center justify-center font-bold text-xs shrink-0 shadow-md">R</div>
            <div className="space-y-1.5 max-w-xl">
              <div className="flex items-center gap-2">
                <span className="text-sm font-semibold text-zinc-200">Rahul (Tech Lead)</span>
                <span className="text-[10px] bg-blue-500/10 text-blue-400 border border-blue-500/20 px-1.5 py-0.2 rounded font-mono">DSA AGENT</span>
              </div>
              <div className="bg-zinc-900 text-zinc-300 text-sm p-3.5 rounded-xl rounded-tl-none border border-zinc-800 leading-relaxed">
                Given an array of integers representing stock prices, optimize an algorithm to find the maximum profit from k transactions. Walk me through your spatial and runtime trade-offs.
              </div>
            </div>
          </div>

          <div className="flex items-start gap-4 justify-end">
            <div className="space-y-1.5 max-w-xl text-right">
              <div className="flex items-center gap-2 justify-end">
                <span className="text-[10px] bg-zinc-800 text-zinc-400 px-1.5 py-0.2 rounded font-mono">INPUT: VOICE</span>
                <span className="text-sm font-semibold text-zinc-200">You (Candidate)</span>
              </div>
              <div className="bg-zinc-800/60 text-zinc-100 text-sm p-3.5 rounded-xl rounded-tr-none border border-zinc-700/60 text-left inline-block shadow-sm">
                "We can approach this using dynamic programming. We'll maintain a grid where rows represent... uh... the number of transactions and columns track the timeline days. I think it is $O(n^2)$ but we can look into optimizing it down using memory arrays..."
              </div>
              <div className="flex items-center gap-2 justify-end pt-1">
                <span className="text-xs bg-amber-500/10 text-amber-500 border border-amber-500/20 px-2 py-0.5 rounded-md font-medium">⚠️ Hesitant</span>
                <span className="text-xs bg-zinc-800 text-zinc-400 px-2 py-0.5 rounded-md font-medium">92.4s Response Time</span>
              </div>
            </div>
            <div className="w-8 h-8 rounded-lg bg-zinc-700 text-zinc-200 flex items-center justify-center font-bold text-xs shrink-0">U</div>
          </div>

          <div className="flex items-start gap-4 animate-pulse">
            <div className="w-8 h-8 rounded-lg bg-rose-600 text-white flex items-center justify-center font-bold text-xs shrink-0 shadow-md">A</div>
            <div className="space-y-1.5 max-w-xl">
              <div className="flex items-center gap-2">
                <span className="text-sm font-semibold text-zinc-200">Arjun (Senior Dev)</span>
                <span className="text-[10px] bg-rose-500/10 text-rose-400 border border-rose-500/20 px-1.5 py-0.2 rounded font-mono">TRAP AGENT ACTIVATED</span>
              </div>
              <div className="bg-zinc-900 text-zinc-300 text-sm p-3.5 rounded-xl rounded-tl-none border border-rose-900/30 bg-rose-950/10 text-left">
                Hold on. You stated you can minimize it with memory arrays, but then claimed it remains $O(n^2)$. If you optimize state transitions properly, what is the absolute best time complexity you can fetch?
              </div>
            </div>
          </div>
        </div>

        <div className="bg-zinc-900/30 border-t border-zinc-800 px-6 py-4 flex flex-wrap items-center justify-between gap-4 text-xs font-mono">
          <div className="flex items-center gap-6">
            <div>
              DSA ROUND: <span className="text-blue-400 font-bold">7.2/10</span>
            </div>
            <div>
              HR ROUND: <span className="text-purple-400 font-bold">Pending</span>
            </div>
          </div>
          <div className="flex items-center gap-2 text-zinc-500">
            <Terminal className="w-3.5 h-3.5" /> No Database Required • Zero Friction Session
          </div>
        </div>
      </div>
    </div>
  );
}
