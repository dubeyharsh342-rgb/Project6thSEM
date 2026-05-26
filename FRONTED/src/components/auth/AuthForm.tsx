import { useState, type ChangeEvent, type FormEvent } from 'react';
import { Link } from 'react-router-dom';

interface AuthFormProps {
  mode: 'login' | 'signup';
}

export default function AuthForm({ mode }: AuthFormProps) {
  const [formData, setFormData] = useState({ name: '', email: '', password: '', confirmPassword: '' });

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Placeholder logic for demo mode. Replace with your auth API integration.
    if (mode === 'signup' && formData.password !== formData.confirmPassword) {
      alert('Passwords must match.');
      return;
    }

    alert(`${mode === 'login' ? 'Logged in' : 'Account created'} successfully.`);
  };

  return (
    <div className="max-w-md w-full bg-zinc-950/95 border border-zinc-800 rounded-3xl p-8 shadow-2xl shadow-black/40">
      <div className="mb-8 text-center">
        <p className="text-xs uppercase tracking-[0.35em] text-indigo-400">Secure Candidate Portal</p>
        <h1 className="mt-4 text-3xl font-bold text-white">{mode === 'login' ? 'Sign in' : 'Create account'}</h1>
        <p className="mt-2 text-sm text-zinc-400">Access your interview dashboard and track simulation progress.</p>
      </div>

      <form className="space-y-5" onSubmit={handleSubmit}>
        {mode === 'signup' && (
          <label className="block">
            <span className="text-sm text-zinc-300">Full name</span>
            <input
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="mt-2 w-full rounded-2xl border border-zinc-800 bg-zinc-900 px-4 py-3 text-zinc-100 outline-none transition focus:border-indigo-500"
              placeholder="Enter your name"
              required
            />
          </label>
        )}

        <label className="block">
          <span className="text-sm text-zinc-300">Email address</span>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="mt-2 w-full rounded-2xl border border-zinc-800 bg-zinc-900 px-4 py-3 text-zinc-100 outline-none transition focus:border-indigo-500"
            placeholder="you@example.com"
            required
          />
        </label>

        <label className="block">
          <span className="text-sm text-zinc-300">Password</span>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="mt-2 w-full rounded-2xl border border-zinc-800 bg-zinc-900 px-4 py-3 text-zinc-100 outline-none transition focus:border-indigo-500"
            placeholder="Enter your password"
            required
          />
        </label>

        {mode === 'signup' && (
          <label className="block">
            <span className="text-sm text-zinc-300">Confirm password</span>
            <input
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              className="mt-2 w-full rounded-2xl border border-zinc-800 bg-zinc-900 px-4 py-3 text-zinc-100 outline-none transition focus:border-indigo-500"
              placeholder="Re-enter your password"
              required
            />
          </label>
        )}

        <button
          type="submit"
          className="w-full rounded-2xl bg-gradient-to-r from-indigo-500 to-purple-600 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-500/20 transition hover:opacity-95"
        >
          {mode === 'login' ? 'Sign in' : 'Create account'}
        </button>
      </form>

      <div className="mt-6 text-center text-sm text-zinc-400">
        {mode === 'login' ? (
          <>
            New here?{' '}
            <Link to="/signup" className="text-indigo-300 hover:text-indigo-200">
              Create an account
            </Link>
            .
          </>
        ) : (
          <>
            Already registered?{' '}
            <Link to="/login" className="text-indigo-300 hover:text-indigo-200">
              Sign in
            </Link>
            .
          </>
        )}
      </div>
    </div>
  );
}
