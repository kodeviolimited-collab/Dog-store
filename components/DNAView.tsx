'use client';

import React from 'react';
import { motion } from 'motion/react';
import { ChevronLeft, Share2, Activity, Shield, Zap, Target } from 'lucide-react';

export const DNAView = ({ onBack }: { onBack: () => void }) => {
  const dnaSegments = [
    { label: 'MUSCLE DENSITY', value: '98%', color: 'text-brand-gold' },
    { label: 'BONE STRUCTURE', value: '94%', color: 'text-brand-red' },
    { label: 'TEMPERAMENT', value: '99%', color: 'text-blue-400' },
    { label: 'STAMINA', value: '92%', color: 'text-emerald-400' },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-brand-dark pb-24 font-mono relative overflow-hidden gaming-grid">
      <div className="scanline pointer-events-none" />
      
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b border-white/5 relative z-10 bg-brand-dark/80 backdrop-blur-md">
        <button onClick={onBack} className="p-2 bg-white/5 rounded-xl border border-white/10 hover:border-brand-gold/50 transition-colors">
          <ChevronLeft className="w-5 h-5 text-brand-gold" />
        </button>
        <div className="text-center">
          <h2 className="text-[10px] font-black uppercase tracking-[0.2em] text-white/40">Genetic Profile</h2>
          <p className="text-xs font-black uppercase tracking-widest text-brand-gold">TITAN-X900</p>
        </div>
        <button className="p-2 bg-white/5 rounded-xl border border-white/10">
          <Share2 className="w-5 h-5 text-white/60" />
        </button>
      </div>

      <div className="flex-1 overflow-y-auto px-6 py-8 relative z-10">
        {/* DNA Helix Visualization (Abstract) */}
        <div className="relative h-48 flex items-center justify-center mb-12 bg-black/40 rounded-3xl border border-white/5 overflow-hidden">
          <div className="absolute inset-0 flex items-center justify-center opacity-20">
            <div className="w-full h-[1px] bg-brand-gold/50" />
          </div>
          <div className="flex gap-4 items-center relative z-10">
            {[...Array(12)].map((_, i) => (
              <motion.div
                key={i}
                animate={{
                  height: [20, 100, 20],
                  opacity: [0.2, 1, 0.2],
                  backgroundColor: i % 2 === 0 ? '#F5C542' : '#FF3B3B'
                }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  delay: i * 0.15,
                }}
                className="w-1 rounded-full shadow-[0_0_10px_rgba(245,197,66,0.5)]"
              />
            ))}
          </div>
          <div className="absolute top-4 left-4 text-[8px] text-brand-gold font-black uppercase tracking-widest">Sequence: ATGC-992-X</div>
          <div className="absolute bottom-4 right-4 text-[8px] text-brand-red font-black uppercase tracking-widest">Status: Verified</div>
          
          {/* Grid Overlay */}
          <div className="absolute inset-0 pointer-events-none opacity-10" style={{ backgroundImage: 'radial-gradient(circle, #F5C542 1px, transparent 1px)', backgroundSize: '10px 10px' }} />
        </div>

        {/* Genetic Stats Grid */}
        <div className="grid grid-cols-2 gap-4 mb-8">
          {dnaSegments.map((segment, i) => (
            <div key={i} className="gaming-card p-4 flex flex-col gap-2">
              <span className="text-[8px] font-bold text-white/40 uppercase tracking-widest">{segment.label}</span>
              <span className={`text-xl font-black ${segment.color}`}>{segment.value}</span>
              <div className="w-full h-1.5 bg-white/5 rounded-full overflow-hidden border border-white/10">
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: segment.value }}
                  transition={{ duration: 1.5, delay: 0.5 }}
                  className={`h-full bg-current shadow-[0_0_10px_rgba(245,197,66,0.3)] ${segment.color}`} 
                />
              </div>
            </div>
          ))}
        </div>

        {/* Technical Breakdown */}
        <div className="space-y-6">
          <div className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/10">
            <div className="p-3 rounded-lg bg-brand-gold/10 border border-brand-gold/20">
              <Shield className="w-5 h-5 text-brand-gold" />
            </div>
            <div className="flex-1">
              <div className="flex justify-between items-end mb-1.5">
                <span className="text-[10px] font-black text-white uppercase tracking-widest">Health Score</span>
                <span className="text-xs font-black text-brand-gold">EXCELLENT</span>
              </div>
              <div className="h-1.5 bg-white/5 rounded-full overflow-hidden border border-white/5">
                <div className="h-full w-[98%] bg-brand-gold shadow-[0_0_10px_rgba(245,197,66,0.5)]" />
              </div>
            </div>
          </div>

          <div className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/10">
            <div className="p-3 rounded-lg bg-brand-red/10 border border-brand-red/20">
              <Zap className="w-5 h-5 text-brand-red" />
            </div>
            <div className="flex-1">
              <div className="flex justify-between items-end mb-1.5">
                <span className="text-[10px] font-black text-white uppercase tracking-widest">Power Output</span>
                <span className="text-xs font-black text-brand-red">MAXIMUM</span>
              </div>
              <div className="h-1.5 bg-white/5 rounded-full overflow-hidden border border-white/5">
                <div className="h-full w-[95%] bg-brand-red shadow-[0_0_10px_rgba(255,59,59,0.5)]" />
              </div>
            </div>
          </div>

          <div className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/10">
            <div className="p-3 rounded-lg bg-blue-400/10 border border-blue-400/20">
              <Target className="w-5 h-5 text-blue-400" />
            </div>
            <div className="flex-1">
              <div className="flex justify-between items-end mb-1.5">
                <span className="text-[10px] font-black text-white uppercase tracking-widest">Breed Purity</span>
                <span className="text-xs font-black text-blue-400">100% PURE</span>
              </div>
              <div className="h-1.5 bg-white/5 rounded-full overflow-hidden border border-white/5">
                <div className="h-full w-full bg-blue-400 shadow-[0_0_10px_rgba(96,165,250,0.5)]" />
              </div>
            </div>
          </div>
        </div>

        {/* Raw Data Log */}
        <div className="mt-12 p-5 rounded-xl bg-black/60 border border-white/5 font-mono text-[9px] text-white/30 leading-relaxed uppercase tracking-widest relative overflow-hidden">
          <div className="absolute top-0 left-0 w-1 h-full bg-brand-gold/40" />
          <p className="text-brand-gold/60 mb-3 font-black">System Log v2.0.4</p>
          <p className="mb-1">[SCANNING GENOME...] DONE</p>
          <p className="mb-1">[ANALYZING PHENOTYPE...] 99.8% MATCH</p>
          <p className="mb-1">[BLOODLINE VERIFIED] ID: BLX-9921-001</p>
          <p className="mb-1">[ENCRYPTION KEY] ********************</p>
          <p className="mt-4 text-brand-red/40 animate-pulse">WARNING: HIGH POTENTIAL DETECTED</p>
        </div>
      </div>
    </div>
  );
};
