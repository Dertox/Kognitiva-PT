import React, { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';
import { Lock } from 'lucide-react';

export const Login: React.FC = () => {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { login, isAuthenticated } = useAuth();
  const navigate = useNavigate();

  // If already logged in, redirect home
  React.useEffect(() => {
    if (isAuthenticated) {
        navigate('/');
    }
  }, [isAuthenticated, navigate]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (login(password)) {
      navigate('/');
    } else {
      setError('Fel lösenord. Försök igen.');
    }
  };

  return (
    <div className="min-h-[70vh] flex items-center justify-center bg-fall-cream px-4">
      <div className="bg-white p-10 rounded-3xl shadow-xl w-full max-w-md border border-stone-100">
        <div className="flex justify-center mb-8">
            <div className="bg-brand-50 p-5 rounded-full text-brand-700">
                <Lock size={32} />
            </div>
        </div>
        <h2 className="text-3xl font-serif font-bold text-center text-brand-900 mb-2">Admin Inloggning</h2>
        <p className="text-center text-stone-500 mb-10 text-sm font-light">Ange lösenord för att redigera innehåll</p>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-xs font-bold text-stone-500 mb-2 uppercase tracking-widest">Lösenord</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-6 py-4 rounded-xl bg-stone-50 border border-stone-200 focus:ring-2 focus:ring-brand-200 focus:border-brand-500 outline-none transition-all"
              placeholder="••••••••"
            />
            <p className="text-xs text-stone-400 mt-3 italic text-right">(Tips: använd 'admin123')</p>
          </div>
          
          {error && (
            <div className="bg-red-50 text-red-600 p-4 rounded-xl text-sm text-center border border-red-100">
              {error}
            </div>
          )}

          <button
            type="submit"
            className="w-full bg-brand-800 text-white font-bold py-4 rounded-xl hover:bg-brand-900 transition-colors shadow-lg hover:shadow-xl"
          >
            Logga in
          </button>
        </form>
      </div>
    </div>
  );
};