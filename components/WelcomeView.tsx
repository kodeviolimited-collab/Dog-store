'use client';

import React from 'react';
import { motion } from 'motion/react';
import { Zap, Trophy, Shield, ChevronRight } from 'lucide-react';

interface WelcomeViewProps {
  onStart: () => void;
}

export const WelcomeView: React.FC<WelcomeViewProps> = ({ onStart }) => {
  return (
    <div className="flex flex-col min-h-screen bg-brand-dark overflow-hidden relative gaming-grid">
      <div className="scanline pointer-events-none" />
      
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] bg-brand-blue/10 blur-[150px] rounded-full animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] bg-brand-gold/5 blur-[150px] rounded-full animate-pulse" />
      </div>

      {/* Content */}
      <div className="flex-1 flex flex-col items-center justify-center px-8 relative z-10">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="mb-16 relative"
        >
          <div className="relative z-10">
            <div className="w-32 h-32 rounded-[2rem] premium-gradient-gold flex items-center justify-center shadow-[0_0_60px_rgba(245,197,66,0.3)] rotate-12 metallic-border relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-white/40 to-transparent opacity-50" />
              <span className="text-black font-black italic text-6xl -rotate-12 relative z-10 drop-shadow-2xl">B</span>
              <div className="absolute inset-0 scanline-fast opacity-20" />
            </div>
            
            {/* HUD Elements around logo */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute -inset-8 border border-brand-gold/20 rounded-full border-dashed"
            />
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
              className="absolute -inset-12 border border-brand-blue/10 rounded-full border-dashed"
            />
          </div>
          
          {/* HUD Corners for Logo */}
          <div className="hud-corner hud-tl -top-4 -left-4 w-8 h-8 border-brand-gold/40" />
          <div className="hud-corner hud-tr -top-4 -right-4 w-8 h-8 border-brand-gold/40" />
          <div className="hud-corner hud-bl -bottom-4 -left-4 w-8 h-8 border-brand-gold/40" />
          <div className="hud-corner hud-br -bottom-4 -right-4 w-8 h-8 border-brand-gold/40" />
        </motion.div>

        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-center space-y-6"
        >
          <div className="relative inline-block">
            <h1 className="text-7xl font-display font-black uppercase tracking-tighter italic text-white leading-none neon-text-gold">
              BLOODLINE<span className="text-brand-gold">X</span>
            </h1>
            <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-transparent via-brand-gold to-transparent opacity-50" />
          </div>
          <div className="flex flex-col items-center gap-2">
            <p className="text-[10px] font-black text-white/40 uppercase tracking-[0.5em] italic">The Ultimate Bully Arena</p>
            <div className="flex items-center gap-4 w-full max-w-[200px]">
              <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent to-white/10" />
              <div className="w-1.5 h-1.5 rounded-full bg-brand-gold animate-ping" />
              <div className="h-[1px] flex-1 bg-gradient-to-l from-transparent to-white/10" />
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="grid grid-cols-3 gap-6 mt-20 w-full max-w-sm"
        >
          {[
            { icon: Trophy, label: 'Compete', color: 'brand-gold' },
            { icon: Zap, label: 'Collect', color: 'brand-blue' },
            { icon: Shield, label: 'Verify', color: 'brand-red' }
          ].map((item, idx) => (
            <div key={idx} className="flex flex-col items-center gap-3 group">
              <div className="hud-frame p-4 rounded-2xl metallic-border group-hover:scale-110 transition-transform duration-500">
                <item.icon className={`w-6 h-6 text-${item.color}`} />
              </div>
              <span className="text-[9px] font-black uppercase tracking-[0.2em] text-white/40 group-hover:text-white transition-colors">{item.label}</span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Footer Action */}
      <motion.div
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        transition={{ delay: 1, type: "spring", damping: 25 }}
        className="p-10 pb-16 relative z-10"
      >
        <div className="hud-frame p-1 rounded-[2rem] metallic-border shadow-[0_0_40px_rgba(0,0,0,0.5)]">
          <button
            onClick={onStart}
            className="w-full group relative overflow-hidden rounded-[1.8rem] premium-gradient-gold p-6 transition-all hover:scale-[1.02] active:scale-[0.98] shadow-2xl"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
            <div className="flex items-center justify-center gap-4 relative z-10">
              <span className="text-black font-black uppercase tracking-[0.3em] text-lg italic">Enter the Arena</span>
              <ChevronRight className="w-6 h-6 text-black group-hover:translate-x-1 transition-transform" />
            </div>
            <div className="absolute inset-0 scanline-fast opacity-10" />
          </button>
        </div>
        
        <div className="flex flex-col items-center gap-4 mt-8">
          <div className="flex items-center gap-3">
            <div className="w-1 h-1 rounded-full bg-brand-gold" />
            <p className="text-[10px] font-black text-white/20 uppercase tracking-[0.2em]">
              By entering, you agree to the <span className="text-brand-gold/60 underline cursor-pointer hover:text-brand-gold transition-colors">Rules of Engagement</span>
            </p>
            <div className="w-1 h-1 rounded-full bg-brand-gold" />
          </div>
          <div className="flex gap-2">
            {[1, 2, 3].map(i => (
              <div key={i} className="w-8 h-1 rounded-full bg-white/5" />
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
};
