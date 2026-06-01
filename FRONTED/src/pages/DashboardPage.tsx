import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import DashboardSidebar from '../components/dashboard/DashboardSidebar';
import DashboardTopbar from '../components/dashboard/DashboardTopbar';
import DashboardMain from '../components/dashboard/DashboardMain';
import DashboardFooter from '../components/dashboard/DashboardFooter';
import { authAPI, tokenStorage } from '../services/authService';
import { interviewAPI } from '../services/interviewService';

interface SessionData {
  name: string;
  email: string;
  role: string;
  track: string;
  level: string;
  faceAnalysis: string;
}

interface InterviewSession {
  candidateName: string;
  targetRole: string;
  interviewTrack: string;
  difficulty: string;
  company: string;
  resumeUrl: string;
  resumeKey: string;
  resumeOriginalName: string;
  status: string;
  createdAt: string;
  dsaQuestions?: Array<{
    id: string;
    title: string;
    description: string;
    topics: string[];
    company: string;
    difficulty: string;
    expectedApproach: {
      timeComplexity: string;
      spaceComplexity: string;
      reasoning: string;
    };
    tip: string;
  }>;
  resumeInsights?: {
    summary: string;
    strengths: string[];
    fileType: string;
  };
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
  lastSession: 'Awaiting configuration',
  overallRating: 'Pending',
  interviewType: 'Not configured',
  currentSignal: 'Interview setup required',
  technicalScore: 'Pending',
  hrScore: 'Pending',
  confidenceScore: 'Pending'
};

export default function DashboardPage() {
  const navigate = useNavigate();
  const [currentTab, setCurrentTab] = useState('overview');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [sessionData, setSessionData] = useState<SessionData | null>(null);
  const [interviewSession, setInterviewSession] = useState<InterviewSession | null>(null);
  const [liveMetrics, setLiveMetrics] = useState<LiveMetrics>(initialLiveMetrics);
  const [loading, setLoading] = useState(true);
  const [setupMessage, setSetupMessage] = useState<string>('');
  const [setupError, setSetupError] = useState<string>('');

  useEffect(() => {
    const token = tokenStorage.getToken();

    if (!token) {
      navigate('/login');
      return;
    }

    const loadData = async () => {
      try {
        const userResponse = await authAPI.getCurrentUser(token);
        setSessionData({
          name: userResponse.user.name,
          email: userResponse.user.email,
          role: 'Not configured',
          track: 'Not configured',
          level: 'Pending',
          faceAnalysis: 'Pending',
        });

        const sessionResponse = await interviewAPI.getLatestSession(token);
        if (sessionResponse.session) {
          setInterviewSession(sessionResponse.session);
          setSessionData((prev) => prev ? {
            ...prev,
            role: sessionResponse.session.targetRole,
            track: sessionResponse.session.interviewTrack,
          } : null);
          setLiveMetrics({
            lastSession: new Date(sessionResponse.session.createdAt).toLocaleString(),
            overallRating: 'Pending',
            interviewType: sessionResponse.session.interviewTrack,
            currentSignal: 'Interview configured',
            technicalScore: 'Pending',
            hrScore: 'Pending',
            confidenceScore: 'Pending',
          });
        }
      } catch (error) {
        tokenStorage.removeToken();
        navigate('/login');
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, [navigate]);

  const handleInterviewSetupSubmit = async (formData: FormData) => {
    setSetupError('');
    setSetupMessage('');

    const token = tokenStorage.getToken();
    if (!token) {
      navigate('/login');
      return;
    }

    try {
      const response = await interviewAPI.createSession(formData, token);
      setInterviewSession(response.session);
      setSessionData((prev) => prev ? {
        ...prev,
        role: response.session.targetRole,
        track: response.session.interviewTrack,
      } : null);
      setLiveMetrics({
        lastSession: new Date(response.session.createdAt).toLocaleString(),
        overallRating: 'Pending',
        interviewType: response.session.interviewTrack,
        currentSignal: 'Interview configured',
        technicalScore: 'Pending',
        hrScore: 'Pending',
        confidenceScore: 'Pending',
      });
      setSetupMessage('Interview setup saved successfully. Redirecting to generated DSA questions...');
      navigate('/dashboard/dsa-questions');
    } catch (error: any) {
      setSetupError(error.message || 'Unable to save interview setup');
    }
  };

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
          <DashboardMain
            currentTab={currentTab}
            sessionData={sessionData}
            liveMetrics={liveMetrics}
            interviewSession={interviewSession}
            onSubmitInterview={handleInterviewSetupSubmit}
            onViewDsaQuestions={() => navigate('/dashboard/dsa-questions')}
            setupMessage={setupMessage}
            setupError={setupError}
          />
        </div>
      </div>
      <DashboardFooter />
    </div>
  );
}
