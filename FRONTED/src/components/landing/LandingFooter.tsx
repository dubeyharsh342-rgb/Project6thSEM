export default function LandingFooter() {
  return (
    <footer className="border-t border-zinc-800 bg-zinc-950 text-zinc-500 text-xs font-mono">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-2 text-zinc-400 font-sans font-bold text-sm">
          <span>BattleSimulator<span className="text-indigo-400">.ai</span></span>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
          <span>Built by Diksha Rai</span>
          <span>Powered by Google Gemini</span>
          <span>Vite + React + Node.js</span>
        </div>
        <div>&copy; {new Date().getFullYear()} All Rights Reserved.</div>
      </div>
    </footer>
  );
}
