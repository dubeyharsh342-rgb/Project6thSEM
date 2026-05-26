export default function DashboardFooter() {
  return (
    <footer className="border-t border-zinc-900 bg-zinc-950/80 px-6 py-5 text-sm text-zinc-400">
      <div className="mx-auto flex max-w-7xl flex-col gap-3 md:flex-row md:justify-between md:items-center">
        <div>
          <p className="font-semibold text-white">Interview Dashboard</p>
          <p className="mt-1 text-xs text-zinc-500">Static design preview for candidate intake, agent navigation, and reporting flow.</p>
        </div>
        <div className="flex flex-wrap gap-3 text-xs">
          <span className="rounded-full bg-zinc-900 px-3 py-1">No live functionality</span>
          <span className="rounded-full bg-zinc-900 px-3 py-1">UI only</span>
          <span className="rounded-full bg-zinc-900 px-3 py-1">Future report / video pages</span>
        </div>
      </div>
    </footer>
  );
}
