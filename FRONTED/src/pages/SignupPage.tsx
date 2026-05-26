import AuthForm from '../components/auth/AuthForm';
import { Link } from 'react-router-dom';

export default function SignupPage() {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-50 flex items-center justify-center px-4 py-12">
      <div className="max-w-5xl w-full grid gap-16 lg:grid-cols-[1.25fr_1fr] items-center">
        <div className="space-y-6">
          <div className="max-w-md">
            <p className="text-sm uppercase tracking-[0.35em] text-indigo-400">Candidate Signup</p>
            <h1 className="mt-4 text-4xl font-bold text-white">Create your placement prep profile.</h1>
            <p className="mt-4 text-zinc-400 leading-relaxed">
              Sign up with your email to unlock the full BattleSimulator.ai experience and save your interview history securely.
            </p>
          </div>
          <div className="space-y-4 text-sm text-zinc-400">
            <p>Already have an account? <Link to="/login" className="text-indigo-300 hover:text-indigo-200">Sign in here.</Link></p>
            <p>We keep your simulation details private and provide industry-grade UI patterns for faster onboarding.</p>
          </div>
        </div>

        <AuthForm mode="signup" />
      </div>
    </div>
  );
}
