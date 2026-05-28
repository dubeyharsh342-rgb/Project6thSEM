import { useState, type ChangeEvent, type FormEvent } from 'react';
import { Link } from 'react-router-dom';

interface AuthFormProps {
  mode: 'login' | 'signup';
}

export default function AuthForm({ mode }: AuthFormProps) {
  const [formData, setFormData] = useState({ name: '', email: '', password: '', confirmPassword: '' });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError('');
    setLoading(true);

    try {
      const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5001/api';

      if (mode === 'signup' && formData.password !== formData.confirmPassword) {
        setError('Passwords must match.');
        setLoading(false);
        return;
      }

      const endpoint = mode === 'login' ? 'login' : 'signup';
      const payload = mode === 'login' 
        ? { email: formData.email, password: formData.password }
        : { name: formData.name, email: formData.email, password: formData.password, confirmPassword: formData.confirmPassword };

      const response = await fetch(`${API_BASE_URL}/auth/${endpoint}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || `${mode === 'login' ? 'Login' : 'Signup'} failed`);
      }

      // Store token in localStorage
      if (data.token) {
        localStorage.setItem('authToken', data.token);
        localStorage.setItem('user', JSON.stringify(data.user));
      }

      // Redirect to dashboard
      window.location.href = '/dashboard';
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-md w-full bg-zinc-950/95 border border-zinc-800 rounded-3xl p-8 shadow-2xl shadow-black/40">
      <div className="mb-8 text-center">
        <p className="text-xs uppercase tracking-[0.35em] text-indigo-400">Secure Candidate Portal</p>
        <h1 className="mt-4 text-3xl font-bold text-white">{mode === 'login' ? 'Sign in' : 'Create account'}</h1>
        <p className="mt-2 text-sm text-zinc-400">Access your interview dashboard and track simulation progress.</p>
      </div>

      {error && (
        <div className="mb-4 p-3 rounded-lg bg-red-900/20 border border-red-800 text-red-400 text-sm">
          {error}
        </div>
      )}

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
              disabled={loading}
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
            disabled={loading}
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
            disabled={loading}
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
              disabled={loading}
            />
          </label>
        )}

        <button
          type="submit"
          disabled={loading}
          className="w-full rounded-2xl bg-gradient-to-r from-indigo-500 to-purple-600 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-500/20 transition hover:opacity-95 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {loading ? (mode === 'login' ? 'Signing in...' : 'Creating account...') : (mode === 'login' ? 'Sign in' : 'Create account')}
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
