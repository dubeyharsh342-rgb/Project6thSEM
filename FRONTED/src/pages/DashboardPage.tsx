import { useState } from 'react';
import DashboardSidebar from '../components/dashboard/DashboardSidebar';
import DashboardTopbar from '../components/dashboard/DashboardTopbar';
import DashboardMain from '../components/dashboard/DashboardMain';
import DashboardFooter from '../components/dashboard/DashboardFooter';

const sessionData = {
  name: 'Diksha Rai',
  role: 'Software Development Engineer',
  track: 'Technical / DSA',
  level: 'Mid-level',
  lastSession: 'May 20, 2026',
  overallRating: '78%',
  interviewType: 'Simulated Panel',
  faceAnalysis: 'Ready'
};

export default function DashboardPage() {
  const [currentTab, setCurrentTab] = useState('overview');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-50 font-sans antialiased flex flex-col">
      <div className="flex flex-1 overflow-hidden">
        <DashboardSidebar currentTab={currentTab} isOpen={isSidebarOpen} onTabChange={setCurrentTab} onClose={() => setIsSidebarOpen(false)} />
        <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
          <DashboardTopbar userName={sessionData.name} currentRound={sessionData.interviewType} onToggleSidebar={() => setIsSidebarOpen(true)} />
          <DashboardMain currentTab={currentTab} sessionData={sessionData} />
        </div>
      </div>
      <DashboardFooter />
    </div>
  );
}
