'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'motion/react';
import { Shield, Zap, Star, Info, ChevronLeft, Share2, Heart } from 'lucide-react';

export const CardDetailView = ({ onBack }: { onBack: () => void }) => {
  const [isFlipped, setIsFlipped] = React.useState(false);

  return (
    <div className="flex flex-col min-h-screen bg-brand-dark pb-24 relative overflow-hidden gaming-grid">
      <div className="scanline pointer-events-none" />
      
      {/* Top Bar */}
      <div className="flex items-center justify-between p-4 relative z-10">
        <button onClick={onBack} className="p-2 bg-white/5 rounded-xl border border-white/10 hover:border-brand-gold/50 transition-colors">
          <ChevronLeft className="w-5 h-5 text-brand-gold" />
        </button>
        <div className="flex items-center gap-2">
          <button className="p-2 bg-white/5 rounded-xl border border-white/10">
            <Share2 className="w-5 h-5 text-white/60" />
          </button>
          <button className="p-2 bg-white/5 rounded-xl border border-white/10">
            <Heart className="w-5 h-5 text-brand-red" />
          </button>
        </div>
      </div>

      {/* Card Container */}
      <div className="flex-1 flex flex-col items-center justify-center px-6 py-4 relative z-10">
        <div 
          className="relative w-full aspect-[2/3] max-w-[340px] perspective-1000 cursor-pointer"
          onClick={() => setIsFlipped(!isFlipped)}
        >
          <motion.div
            animate={{ rotateY: isFlipped ? 180 : 0 }}
            transition={{ duration: 0.6, type: 'spring', stiffness: 260, damping: 20 }}
            className="w-full h-full relative preserve-3d"
          >
            {/* Front Side */}
            <div className="absolute inset-0 backface-hidden rounded-[2rem] overflow-hidden border-4 border-brand-gold shadow-[0_0_40px_rgba(245,197,66,0.2)] bg-black">
              <Image
                src="https://picsum.photos/seed/titan-card/800/1200"
                alt="Titan"
                fill
                className="object-cover opacity-80"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
              
              {/* Card Header */}
              <div className="absolute top-6 inset-x-0 flex flex-col items-center">
                <div className="badge-slanted px-6 py-1 text-[10px] font-black uppercase tracking-[0.2em] shadow-lg">
                  LEGENDARY
                </div>
              </div>

              {/* Card Footer */}
              <div className="absolute bottom-8 inset-x-0 px-8 text-center">
                <h2 className="text-5xl font-display font-black uppercase tracking-tighter italic text-white drop-shadow-2xl mb-1">
                  TITAN
                </h2>
                <p className="text-xs text-brand-gold font-bold uppercase tracking-widest mb-2">Venom Bloodline</p>
                <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-brand-gold/50 to-transparent mb-2" />
                <p className="text-[10px] text-white/60 font-black uppercase tracking-widest">Royal Bully Camp</p>
              </div>

              {/* Decorative Corners */}
              <div className="absolute top-4 left-4 w-8 h-8 border-t-2 border-l-2 border-brand-gold/30" />
              <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-brand-gold/30" />
              <div className="absolute bottom-4 left-4 w-8 h-8 border-b-2 border-l-2 border-brand-gold/30" />
              <div className="absolute bottom-4 right-4 w-8 h-8 border-b-2 border-r-2 border-brand-gold/30" />
            </div>

            {/* Back Side */}
            <div className="absolute inset-0 backface-hidden rounded-[2rem] overflow-hidden border-4 border-brand-red bg-brand-dark rotate-y-180 p-8 flex flex-col shadow-[0_0_40px_rgba(239,68,68,0.2)]">
              <div className="flex items-center justify-between mb-8">
                <h3 className="text-sm font-black uppercase tracking-widest italic text-brand-red">Structure Stats</h3>
                <div className="w-10 h-10 rounded-lg bg-brand-red/10 border border-brand-red/20 flex items-center justify-center">
                  <Zap className="w-5 h-5 text-brand-red" />
                </div>
              </div>

              <div className="space-y-5 mb-8">
                {[
                  { label: 'Head', value: 92 },
                  { label: 'Chest', value: 90 },
                  { label: 'Frame', value: 88 },
                  { label: 'Bone', value: 87 },
                  { label: 'Movement', value: 86 }
                ].map((stat) => (
                  <div key={stat.label}>
                    <div className="flex justify-between text-[10px] uppercase font-black mb-2">
                      <span className="text-white/40 tracking-widest">{stat.label}</span>
                      <span className="text-white">{stat.value}</span>
                    </div>
                    <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden border border-white/10">
                      <motion.div 
                        initial={{ width: 0 }}
                        animate={{ width: `${stat.value}%` }}
                        className="h-full bg-gradient-to-r from-brand-red to-red-800 shadow-[0_0_10px_rgba(239,68,68,0.5)]"
                      />
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-auto pt-6 border-t border-white/10">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-[8px] text-white/40 uppercase font-black mb-1">Production</p>
                    <p className="text-xs font-black text-white">6 Litters / 32 Offspring</p>
                  </div>
                  <div className="text-right">
                    <p className="text-[8px] text-white/40 uppercase font-black mb-1">Arena Record</p>
                    <p className="text-xs font-black text-brand-red">18 Wins / 4 Losses</p>
                  </div>
                </div>
                <div className="mt-8 text-center">
                  <p className="text-[8px] text-white/20 uppercase font-black tracking-widest">BloodlineX ID: #BX-002341</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
        
        <p className="mt-8 text-[10px] text-white/40 font-bold uppercase tracking-widest animate-pulse flex items-center gap-2">
          <span className="w-1 h-1 rounded-full bg-brand-gold" />
          Tap card to flip
          <span className="w-1 h-1 rounded-full bg-brand-gold" />
        </p>
      </div>
    </div>
  );
};
