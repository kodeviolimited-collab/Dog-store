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
    <div className="flex flex-col min-h-screen bg-brand-dark relative overflow-hidden gaming-grid">
      <div className="scanline pointer-events-none" />
      
      {/* Background Glows */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-blue/10 blur-[120px] rounded-full animate-pulse" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-gold/5 blur-[120px] rounded-full animate-pulse" />

      {/* Header */}
      <div className="p-8 flex items-center justify-between relative z-10">
        <button onClick={onBack} className="w-12 h-12 flex items-center justify-center bg-white/5 rounded-xl border border-white/10 hover:border-brand-gold/40 transition-all group">
          <ArrowLeft className="w-6 h-6 text-white/60 group-hover:text-brand-gold" />
        </button>
        <div className="text-right">
          <h2 className="text-[10px] font-black uppercase tracking-[0.3em] text-white/40 mb-1">Access Point</h2>
          <p className="text-lg font-black uppercase tracking-tighter italic text-brand-gold neon-text-gold">
            {mode === 'login' ? 'Authentication' : 'Registration'}
          </p>
        </div>
      </div>

      <div className="flex-1 flex flex-col px-8 pt-10 relative z-10">
        <div className="mb-16">
          <motion.div
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl font-display font-black uppercase tracking-tighter italic text-white mb-3 leading-none">
              {mode === 'login' ? 'WELCOME BACK' : 'JOIN THE PACK'}
            </h1>
            <div className="flex items-center gap-3">
              <div className="w-8 h-[2px] bg-brand-gold" />
              <p className="text-[11px] font-black text-white/40 uppercase tracking-[0.2em] italic">
                {mode === 'login' ? 'Enter your credentials to continue' : 'Create your breeder profile'}
              </p>
            </div>
          </motion.div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <AnimatePresence mode="wait">
            {mode === 'signup' && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="hud-frame p-1 rounded-2xl metallic-border"
              >
                <div className="relative">
                  <User className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-white/20" />
                  <input
                    type="text"
                    placeholder="USERNAME"
                    required
                    className="w-full bg-white/5 border border-transparent rounded-xl py-5 pl-14 pr-4 text-[11px] font-black uppercase tracking-[0.2em] text-white focus:outline-none focus:bg-white/10 transition-all placeholder:text-white/20"
                  />
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          <div className="hud-frame p-1 rounded-2xl metallic-border">
            <div className="relative">
              <Mail className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-white/20" />
              <input
                type="email"
                placeholder="EMAIL ADDRESS"
                required
                className="w-full bg-white/5 border border-transparent rounded-xl py-5 pl-14 pr-4 text-[11px] font-black uppercase tracking-[0.2em] text-white focus:outline-none focus:bg-white/10 transition-all placeholder:text-white/20"
              />
            </div>
          </div>

          <div className="hud-frame p-1 rounded-2xl metallic-border">
            <div className="relative">
              <Lock className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-white/20" />
              <input
                type="password"
                placeholder="PASSWORD"
                required
                className="w-full bg-white/5 border border-transparent rounded-xl py-5 pl-14 pr-4 text-[11px] font-black uppercase tracking-[0.2em] text-white focus:outline-none focus:bg-white/10 transition-all placeholder:text-white/20"
              />
            </div>
          </div>

          {mode === 'login' && (
            <div className="text-right">
              <button type="button" className="text-[10px] font-black text-brand-gold/60 uppercase tracking-[0.2em] hover:text-brand-gold transition-colors italic">
                Forgot Password?
              </button>
            </div>
          )}

          <div className="pt-4">
            <div className="hud-frame p-1 rounded-2xl metallic-border">
              <button
                disabled={isLoading}
                className="w-full py-6 rounded-xl premium-gradient-gold text-black font-black uppercase tracking-[0.3em] text-[13px] italic flex items-center justify-center gap-3 shadow-[0_0_40px_rgba(245,197,66,0.2)] disabled:opacity-50 group active:scale-95 transition-all"
              >
                {isLoading ? (
                  <div className="w-6 h-6 border-3 border-black border-t-transparent rounded-full animate-spin" />
                ) : (
                  <>
                    {mode === 'login' ? 'Initialize' : 'Register'}
                    <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </button>
            </div>
          </div>
        </form>

        <div className="mt-16">
          <div className="flex items-center gap-5 mb-10">
            <div className="flex-1 h-[1px] bg-gradient-to-r from-transparent to-white/10" />
            <span className="text-[9px] font-black text-white/20 uppercase tracking-[0.4em]">Connect With</span>
            <div className="flex-1 h-[1px] bg-gradient-to-l from-transparent to-white/10" />
          </div>

          <div className="grid grid-cols-2 gap-5">
            <button className="flex items-center justify-center gap-4 py-5 rounded-2xl bg-white/5 border border-white/10 hover:border-brand-gold/40 hover:bg-white/10 transition-all group">
              <Chrome className="w-5 h-5 text-white/40 group-hover:text-brand-gold transition-colors" />
              <span className="text-[11px] font-black uppercase tracking-[0.2em] text-white/40 group-hover:text-white transition-colors">Google</span>
            </button>
            <button className="flex items-center justify-center gap-4 py-5 rounded-2xl bg-white/5 border border-white/10 hover:border-brand-gold/40 hover:bg-white/10 transition-all group">
              <Github className="w-5 h-5 text-white/40 group-hover:text-brand-gold transition-colors" />
              <span className="text-[11px] font-black uppercase tracking-[0.2em] text-white/40 group-hover:text-white transition-colors">Github</span>
            </button>
          </div>
        </div>

        <div className="mt-auto pb-16 text-center">
          <button
            onClick={() => setMode(mode === 'login' ? 'signup' : 'login')}
            className="text-[11px] font-black text-white/30 uppercase tracking-[0.2em] group"
          >
            {mode === 'login' ? "Don&apos;t have an account? " : "Already have an account? "}
            <span className="text-brand-gold group-hover:neon-text-gold transition-all italic">
              {mode === 'login' ? 'Sign Up' : 'Log In'}
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};
