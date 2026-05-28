import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import DashboardSidebar from '../components/dashboard/DashboardSidebar';
import DashboardTopbar from '../components/dashboard/DashboardTopbar';
import DashboardMain from '../components/dashboard/DashboardMain';
import DashboardFooter from '../components/dashboard/DashboardFooter';
import { authAPI, tokenStorage } from '../services/authService';

interface SessionData {
  name: string;
  email: string;
  role: string;
  track: string;
  level: string;
  faceAnalysis: string;
}

interface LiveMetrics {
  lastSession: string;
  overallRating: string;
  interviewType: string;
  currentSignal: string;
  technicalScore: string;
  hrScore: string;
  confidenceScore: string;
}

const initialLiveMetrics: LiveMetrics = {
  lastSession: 'Loading...',
  overallRating: '0%',
  interviewType: 'Initializing...',
  currentSignal: 'Connecting to agents',
  technicalScore: '0%',
  hrScore: '0%',
  confidenceScore: '0%'
};

export default function DashboardPage() {
  const navigate = useNavigate();
  const [currentTab, setCurrentTab] = useState('overview');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [sessionData, setSessionData] = useState<SessionData | null>(null);
  const [liveMetrics, setLiveMetrics] = useState<LiveMetrics>(initialLiveMetrics);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = tokenStorage.getToken();

    if (!token) {
      navigate('/login');
      return;
    }

    authAPI
      .getCurrentUser(token)
      .then((data: { user: { name: string; email: string } }) => {
        setSessionData({
          name: data.user.name,
          email: data.user.email,
          role: 'Software Development Engineer',
          track: 'Technical / DSA',
          level: 'Mid-level',
          faceAnalysis: 'Ready'
        });
        setLiveMetrics({
          lastSession: new Date().toLocaleTimeString(),
          overallRating: '78%',
          interviewType: 'Simulated Panel',
          currentSignal: 'Live agent sequence active',
          technicalScore: '79%',
          hrScore: '84%',
          confidenceScore: '76%'
        });
      })
      .catch(() => {
        tokenStorage.removeToken();
        navigate('/login');
      })
      .finally(() => setLoading(false));
  }, [navigate]);

  useEffect(() => {
    if (!sessionData) {
      return;
    }

    const interval = window.setInterval(() => {
      setLiveMetrics((prev) => {
        const parseValue = (value: string) => Number(value.replace('%', ''));
        const adjust = (value: string, min = 65, max = 95) => {
          const base = parseValue(value);
          const next = Math.min(max, Math.max(min, base + Math.round((Math.random() - 0.5) * 8)));
          return `${next}%`;
        };

        const signals = ['Live agent sequence active', 'Reviewing last interaction', 'Preparing next question', 'Adaptive feedback ready'];
        return {
          ...prev,
          lastSession: new Date().toLocaleTimeString(),
          overallRating: adjust(prev.overallRating, 70, 92),
          technicalScore: adjust(prev.technicalScore, 68, 92),
          hrScore: adjust(prev.hrScore, 72, 94),
          confidenceScore: adjust(prev.confidenceScore, 64, 88),
          currentSignal: signals[Math.floor(Math.random() * signals.length)]
        };
      });
    }, 4500);

    return () => window.clearInterval(interval);
  }, [sessionData]);

  const handleLogout = async () => {
    try {
      const token = tokenStorage.getToken();
      if (token) {
        await authAPI.logout();
      }
    } catch {
      // ignore logout failure, still clear local state
    } finally {
      tokenStorage.removeToken();
      navigate('/login');
    }
  };

  if (loading || !sessionData) {
    return (
      <div className="min-h-screen bg-zinc-950 text-zinc-50 flex items-center justify-center px-6">
        <div className="rounded-3xl border border-zinc-800 bg-zinc-950/95 p-10 text-center shadow-2xl shadow-black/40">
          <p className="text-sm uppercase tracking-[0.35em] text-zinc-500">Dashboard</p>
          <h2 className="mt-4 text-2xl font-bold text-white">Loading live session data…</h2>
          <p className="mt-3 text-sm text-zinc-400">Fetching your profile and preparing real-time interview telemetry.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-50 font-sans antialiased flex flex-col">
      <div className="flex flex-1 overflow-hidden">
        <DashboardSidebar user={sessionData} currentTab={currentTab} isOpen={isSidebarOpen} onTabChange={setCurrentTab} onClose={() => setIsSidebarOpen(false)} onLogout={handleLogout} />
        <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
          <DashboardTopbar userName={sessionData.name} currentRound={liveMetrics.interviewType} onToggleSidebar={() => setIsSidebarOpen(true)} />
          <DashboardMain currentTab={currentTab} sessionData={sessionData} liveMetrics={liveMetrics} />
        </div>
      </div>
      <DashboardFooter />
    </div>
  );
}
