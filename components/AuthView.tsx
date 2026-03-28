'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, Lock, User, ChevronRight, Github, Chrome, ArrowLeft } from 'lucide-react';

interface AuthViewProps {
  onAuthSuccess: () => void;
  onBack: () => void;
}

export const AuthView: React.FC<AuthViewProps> = ({ onAuthSuccess, onBack }) => {
  const [mode, setMode] = useState<'login' | 'signup'>('login');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate auth
    setTimeout(() => {
      setIsLoading(false);
      onAuthSuccess();
    }, 1500);
  };

  return (
    <div className="flex flex-col min-h-screen bg-brand-dark relative overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-brand-purple/10 blur-[100px] rounded-full" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-gold/5 blur-[100px] rounded-full" />

      {/* Header */}
      <div className="p-6 flex items-center justify-between relative z-10">
        <button onClick={onBack} className="p-2 bg-white/5 rounded-xl border border-white/10">
          <ArrowLeft className="w-5 h-5 text-white/60" />
        </button>
        <div className="text-right">
          <h2 className="text-xs font-black uppercase tracking-widest text-white/40">Access Point</h2>
          <p className="text-sm font-black uppercase tracking-tighter italic text-brand-gold">
            {mode === 'login' ? 'Authentication' : 'Registration'}
          </p>
        </div>
      </div>

      <div className="flex-1 flex flex-col px-8 pt-8 relative z-10">
        <div className="mb-12">
          <h1 className="text-4xl font-display font-black uppercase tracking-tighter italic text-white mb-2">
            {mode === 'login' ? 'WELCOME BACK' : 'JOIN THE PACK'}
          </h1>
          <p className="text-xs font-bold text-white/40 uppercase tracking-widest">
            {mode === 'login' ? 'Enter your credentials to continue' : 'Create your breeder profile'}
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <AnimatePresence mode="wait">
            {mode === 'signup' && (
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                className="relative"
              >
                <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/20" />
                <input
                  type="text"
                  placeholder="USERNAME"
                  required
                  className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-12 pr-4 text-xs font-black uppercase tracking-widest focus:outline-none focus:border-brand-gold/50 transition-all"
                />
              </motion.div>
            )}
          </AnimatePresence>

          <div className="relative">
            <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/20" />
            <input
              type="email"
              placeholder="EMAIL ADDRESS"
              required
              className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-12 pr-4 text-xs font-black uppercase tracking-widest focus:outline-none focus:border-brand-gold/50 transition-all"
            />
          </div>

          <div className="relative">
            <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/20" />
            <input
              type="password"
              placeholder="PASSWORD"
              required
              className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-12 pr-4 text-xs font-black uppercase tracking-widest focus:outline-none focus:border-brand-gold/50 transition-all"
            />
          </div>

          {mode === 'login' && (
            <div className="text-right">
              <button type="button" className="text-[10px] font-bold text-brand-gold uppercase tracking-widest">
                Forgot Password?
              </button>
            </div>
          )}

          <button
            disabled={isLoading}
            className="w-full py-5 rounded-2xl bg-brand-gold text-black font-black uppercase tracking-[0.2em] text-xs italic flex items-center justify-center gap-2 shadow-[0_0_30px_rgba(245,197,66,0.2)] disabled:opacity-50"
          >
            {isLoading ? (
              <div className="w-5 h-5 border-2 border-black border-t-transparent rounded-full animate-spin" />
            ) : (
              <>
                {mode === 'login' ? 'Initialize' : 'Register'}
                <ChevronRight className="w-4 h-4" />
              </>
            )}
          </button>
        </form>

        <div className="mt-12">
          <div className="flex items-center gap-4 mb-8">
            <div className="flex-1 h-[1px] bg-white/5" />
            <span className="text-[8px] font-black text-white/20 uppercase tracking-[0.3em]">Or Connect With</span>
            <div className="flex-1 h-[1px] bg-white/5" />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <button className="flex items-center justify-center gap-3 py-4 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
              <Chrome className="w-4 h-4 text-white/60" />
              <span className="text-[10px] font-black uppercase tracking-widest text-white/60">Google</span>
            </button>
            <button className="flex items-center justify-center gap-3 py-4 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
              <Github className="w-4 h-4 text-white/60" />
              <span className="text-[10px] font-black uppercase tracking-widest text-white/60">Github</span>
            </button>
          </div>
        </div>

        <div className="mt-auto pb-12 text-center">
          <button
            onClick={() => setMode(mode === 'login' ? 'signup' : 'login')}
            className="text-[10px] font-bold text-white/40 uppercase tracking-widest"
          >
            {mode === 'login' ? "Don&apos;t have an account? " : "Already have an account? "}
            <span className="text-brand-gold">
              {mode === 'login' ? 'Sign Up' : 'Log In'}
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};
