'use client';

import React from 'react';
import { motion } from 'motion/react';
import { Zap, Trophy, Shield, ChevronRight } from 'lucide-react';

interface WelcomeViewProps {
  onStart: () => void;
}

export const WelcomeView: React.FC<WelcomeViewProps> = ({ onStart }) => {
  return (
    <div className="flex flex-col min-h-screen bg-brand-dark overflow-hidden relative">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-brand-purple/20 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-brand-gold/10 blur-[120px] rounded-full" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full opacity-10">
          <div className="w-full h-full bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:20px_20px]" />
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 flex flex-col items-center justify-center px-8 relative z-10">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-12"
        >
          <div className="relative">
            <div className="w-24 h-24 rounded-3xl bg-brand-purple flex items-center justify-center shadow-[0_0_50px_rgba(139,92,246,0.5)] rotate-12">
              <span className="text-white font-black italic text-5xl -rotate-12">B</span>
            </div>
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
              className="absolute -inset-4 border border-brand-gold/20 rounded-full border-dashed"
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-center space-y-4"
        >
          <h1 className="text-5xl font-display font-black uppercase tracking-tighter italic text-white leading-none">
            BLOODLINE<span className="text-brand-gold">X</span>
          </h1>
          <p className="text-xs font-bold text-white/40 uppercase tracking-[0.3em]">The Ultimate Bully Arena</p>
        </motion.div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="grid grid-cols-3 gap-8 mt-16 w-full max-w-xs"
        >
          <div className="flex flex-col items-center gap-2">
            <div className="p-3 rounded-xl bg-white/5 border border-white/10">
              <Trophy className="w-5 h-5 text-brand-gold" />
            </div>
            <span className="text-[8px] font-black uppercase tracking-widest text-white/40">Compete</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <div className="p-3 rounded-xl bg-white/5 border border-white/10">
              <Zap className="w-5 h-5 text-brand-purple" />
            </div>
            <span className="text-[8px] font-black uppercase tracking-widest text-white/40">Collect</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <div className="p-3 rounded-xl bg-white/5 border border-white/10">
              <Shield className="w-5 h-5 text-blue-400" />
            </div>
            <span className="text-[8px] font-black uppercase tracking-widest text-white/40">Verify</span>
          </div>
        </motion.div>
      </div>

      {/* Footer Action */}
      <motion.div
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        transition={{ delay: 0.8, type: "spring", damping: 20 }}
        className="p-8 pb-12 relative z-10"
      >
        <button
          onClick={onStart}
          className="w-full group relative overflow-hidden rounded-2xl bg-brand-gold p-5 transition-all hover:scale-[1.02] active:scale-[0.98]"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
          <div className="flex items-center justify-center gap-3">
            <span className="text-black font-black uppercase tracking-[0.2em] text-sm italic">Enter the Arena</span>
            <ChevronRight className="w-5 h-5 text-black" />
          </div>
        </button>
        <p className="text-center mt-6 text-[10px] font-bold text-white/20 uppercase tracking-widest">
          By entering, you agree to the <span className="text-white/40 underline">Rules of Engagement</span>
        </p>
      </motion.div>
    </div>
  );
};
