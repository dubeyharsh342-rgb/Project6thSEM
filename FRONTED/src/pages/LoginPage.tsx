import AuthForm from '../components/auth/AuthForm';
import { Link } from 'react-router-dom';

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-50 flex items-center justify-center px-4 py-12">
      <div className="max-w-5xl w-full grid gap-16 lg:grid-cols-[1.25fr_1fr] items-center">
        <div className="space-y-6">
          <div className="max-w-md">
            <p className="text-sm uppercase tracking-[0.35em] text-indigo-400">Candidate Login</p>
            <h1 className="mt-4 text-4xl font-bold text-white">Access your interview dashboard.</h1>
            <p className="mt-4 text-zinc-400 leading-relaxed">
              Login to review your practice sessions, monitor agent feedback, and continue your placement preparation with the AI battleground.
            </p>
          </div>
          <div className="space-y-4 text-sm text-zinc-400">
            <p>Need an account? <Link to="/signup" className="text-indigo-300 hover:text-indigo-200">Sign up now.</Link></p>
            <p>Supported on modern browsers with secure session handling and responsive layouts.</p>
          </div>
        </div>

        <AuthForm mode="login" />
      </div>
    </div>
  );
}
