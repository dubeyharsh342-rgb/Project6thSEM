import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { interviewAPI } from '../services/interviewService';
import { tokenStorage } from '../services/authService.js';
import DashboardTopbar from '../components/dashboard/DashboardTopbar';
import { ArrowLeft } from 'lucide-react';

interface DsaQuestion {
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
}

interface InterviewSession {
  candidateName: string;
  targetRole: string;
  interviewTrack: string;
  difficulty: string;
  company: string;
  dsaQuestions?: DsaQuestion[];
  resumeInsights?: {
    summary: string;
    strengths: string[];
    fileType: string;
  };
}

export default function DsaQuestionsPage() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [session, setSession] = useState<InterviewSession | null>(null);
  const [error, setError] = useState('');

  useEffect(() => {
    const loadQuestions = async () => {
      const token = tokenStorage.getToken();
      if (!token) {
        navigate('/login');
        return;
      }

      try {
        const response = await interviewAPI.getLatestSession(token);
        setSession(response.session);
      } catch (err: any) {
        setError(err.message || 'Unable to load DSA questions');
      } finally {
        setLoading(false);
      }
    };

    loadQuestions();
  }, [navigate]);

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-50 font-sans antialiased">
      <DashboardTopbar userName={session?.candidateName || 'Candidate'} currentRound={session?.interviewTrack || 'DSA agent'} onToggleSidebar={() => {}} />
      <main className="max-w-6xl mx-auto px-4 py-8">
        <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <button
              onClick={() => navigate('/dashboard')}
              className="inline-flex items-center gap-2 rounded-full border border-zinc-800 bg-zinc-900 px-4 py-2 text-sm text-zinc-300 hover:bg-zinc-800 transition"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to dashboard
            </button>
            <p className="mt-4 text-xs uppercase tracking-[0.35em] text-zinc-500">DSA Agent</p>
            <h1 className="mt-3 text-4xl font-bold text-white">Generated interview questions</h1>
            <p className="mt-2 max-w-2xl text-sm text-zinc-400">This page shows the dedicated DSA question set created from your interview profile and uploaded resume.</p>
          </div>
          <div className="rounded-3xl border border-zinc-800 bg-zinc-900 p-5 text-sm text-zinc-300">
            <p className="font-semibold text-white">Current status</p>
            <p className="mt-2">{session ? 'Questions ready' : 'Waiting for configured session'}</p>
          </div>
        </div>

        {loading && (
          <div className="rounded-3xl border border-zinc-800 bg-zinc-900 p-8 text-center text-zinc-400">Loading generated questions…</div>
        )}

        {error && (
          <div className="rounded-3xl border border-rose-500/30 bg-rose-500/10 p-6 text-sm text-rose-200">{error}</div>
        )}

        {!loading && !session && !error && (
          <div className="rounded-3xl border border-zinc-800 bg-zinc-900 p-8 text-zinc-400">No interview session was found. Please configure your interview first.</div>
        )}

        {session && (
          <div className="space-y-6">
            <div className="grid gap-4 lg:grid-cols-3">
              <div className="rounded-3xl border border-zinc-800 bg-zinc-900 p-6">
                <p className="text-xs uppercase tracking-[0.35em] text-zinc-500">Candidate</p>
                <p className="mt-2 text-lg font-semibold text-white">{session.candidateName}</p>
              </div>
              <div className="rounded-3xl border border-zinc-800 bg-zinc-900 p-6">
                <p className="text-xs uppercase tracking-[0.35em] text-zinc-500">Target company</p>
                <p className="mt-2 text-lg font-semibold text-white">{session.company}</p>
              </div>
              <div className="rounded-3xl border border-zinc-800 bg-zinc-900 p-6">
                <p className="text-xs uppercase tracking-[0.35em] text-zinc-500">Difficulty</p>
                <p className="mt-2 text-lg font-semibold text-white">{session.difficulty}</p>
              </div>
            </div>

            {session.resumeInsights && (
              <div className="rounded-3xl border border-zinc-800 bg-zinc-950/60 p-6 text-sm text-zinc-300">
                <p className="text-xs uppercase tracking-[0.35em] text-zinc-500">Resume analysis</p>
                <p className="mt-3 text-white">{session.resumeInsights.summary}</p>
                <p className="mt-2 text-zinc-400">Detected strengths: {session.resumeInsights.strengths.join(', ')}</p>
              </div>
            )}

            <section className="space-y-4">
              {(session.dsaQuestions && session.dsaQuestions.length > 0) ? (
                session.dsaQuestions.map((question) => (
                  <div key={question.id} className="rounded-3xl border border-zinc-800 bg-zinc-900 p-6 shadow-lg shadow-black/10">
                    <div className="flex flex-wrap items-center justify-between gap-3">
                      <div>
                        <p className="text-xs uppercase tracking-[0.35em] text-zinc-500">{question.company} • {question.difficulty}</p>
                        <h2 className="mt-2 text-2xl font-semibold text-white">{question.title}</h2>
                      </div>
                      <div className="rounded-full bg-zinc-950/80 px-4 py-2 text-xs uppercase tracking-[0.35em] text-zinc-400">{question.topics.join(' · ')}</div>
                    </div>
                    <p className="mt-4 text-sm leading-relaxed text-zinc-300">{question.description}</p>
                    <div className="mt-4 grid gap-3 sm:grid-cols-2">
                      <div className="rounded-3xl bg-zinc-950/60 p-4 text-sm text-zinc-300">
                        <p className="text-xs uppercase tracking-[0.35em] text-zinc-500">Expected approach</p>
                        <p className="mt-2 text-zinc-200">{question.expectedApproach.reasoning}</p>
                        <p className="mt-2 text-xs text-zinc-500">Time: {question.expectedApproach.timeComplexity}</p>
                      </div>
                      <div className="rounded-3xl bg-zinc-950/60 p-4 text-sm text-zinc-300">
                        <p className="text-xs uppercase tracking-[0.35em] text-zinc-500">Tip</p>
                        <p className="mt-2 text-zinc-200">{question.tip}</p>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <div className="rounded-3xl border border-zinc-800 bg-zinc-900 p-8 text-zinc-400">No DSA questions were generated yet. Please complete the interview setup first.</div>
              )}
            </section>
          </div>
        )}
      </main>
    </div>
  );
}
