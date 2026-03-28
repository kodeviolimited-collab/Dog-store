'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'motion/react';
import { ChevronLeft, Share2, Info } from 'lucide-react';

interface PedigreeNodeProps {
  name: string;
  rarity: string;
  img: string;
  label: string;
  color: string;
}

const PedigreeNode: React.FC<PedigreeNodeProps> = ({ name, rarity, img, label, color }) => (
  <div className="flex flex-col items-center gap-1">
    <span className="text-[7px] font-black uppercase tracking-[0.2em] text-white/40 mb-1">{label}</span>
    <div className={`relative w-20 aspect-[3/4] rounded-lg overflow-hidden border-2 bg-black/40 ${color} shadow-lg`}>
      <Image
        src={`https://picsum.photos/seed/${img}/300/400`}
        alt={name}
        fill
        className="object-cover opacity-80"
        referrerPolicy="no-referrer"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent" />
      <div className="absolute bottom-1.5 inset-x-0 text-center px-1">
        <p className={`text-[5px] font-black uppercase tracking-widest mb-0.5 ${color.includes('gold') ? 'text-brand-gold' : color.includes('purple') ? 'text-brand-purple' : 'text-blue-400'}`}>{rarity}</p>
        <p className="text-[8px] font-black uppercase tracking-tighter text-white truncate">{name}</p>
      </div>
    </div>
  </div>
);

export const PedigreeView = ({ onBack }: { onBack: () => void }) => {
  return (
    <div className="flex flex-col min-h-screen bg-brand-dark pb-24 relative overflow-hidden gaming-grid">
      <div className="scanline pointer-events-none" />
      
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b border-white/5 relative z-10 bg-brand-dark/80 backdrop-blur-md">
        <button onClick={onBack} className="p-2 bg-white/5 rounded-xl border border-white/10 hover:border-brand-gold/50 transition-colors">
          <ChevronLeft className="w-5 h-5 text-brand-gold" />
        </button>
        <h2 className="text-sm font-black uppercase tracking-widest italic text-white">Bloodline Tree</h2>
        <button className="p-2 bg-white/5 rounded-xl border border-white/10">
          <Share2 className="w-5 h-5 text-white/60" />
        </button>
      </div>

      <div className="flex-1 overflow-y-auto px-4 py-12 relative z-10">
        <div className="flex flex-col items-center gap-12">
          {/* Level 1: Main Dog */}
          <div className="relative">
            <PedigreeNode 
              name="TITAN" 
              rarity="LEGENDARY" 
              img="titan" 
              label="CHAMPION" 
              color="border-brand-gold shadow-[0_0_20px_rgba(245,197,66,0.3)]" 
            />
            {/* Connection Lines */}
            <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 w-[160px] h-12">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[2px] h-6 bg-brand-gold/40 shadow-[0_0_10px_rgba(245,197,66,0.5)]" />
              <div className="absolute top-6 left-0 right-0 h-[2px] bg-brand-gold/40 shadow-[0_0_10px_rgba(245,197,66,0.5)]" />
              <div className="absolute top-6 left-0 w-[2px] h-6 bg-brand-gold/40 shadow-[0_0_10px_rgba(245,197,66,0.5)]" />
              <div className="absolute top-6 right-0 w-[2px] h-6 bg-brand-gold/40 shadow-[0_0_10px_rgba(245,197,66,0.5)]" />
            </div>
          </div>

          {/* Level 2: Parents */}
          <div className="flex gap-16 relative">
            <PedigreeNode 
              name="VENOM" 
              rarity="LEGENDARY" 
              img="venom" 
              label="SIRE" 
              color="border-brand-gold shadow-[0_0_10px_rgba(245,197,66,0.2)]" 
            />
            <PedigreeNode 
              name="LOLA V" 
              rarity="RARE" 
              img="lola" 
              label="DAM" 
              color="border-blue-400 shadow-[0_0_10px_rgba(96,165,250,0.2)]" 
            />
            
            {/* Connection Lines for Sire */}
            <div className="absolute -bottom-12 left-[40px] -translate-x-1/2 w-[100px] h-12">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1px] h-6 bg-brand-gold/20" />
              <div className="absolute top-6 left-0 right-0 h-[1px] bg-brand-gold/20" />
              <div className="absolute top-6 left-0 w-[1px] h-6 bg-brand-gold/20" />
              <div className="absolute top-6 right-0 w-[1px] h-6 bg-brand-gold/20" />
            </div>

            {/* Connection Lines for Dam */}
            <div className="absolute -bottom-12 right-[40px] translate-x-1/2 w-[100px] h-12">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1px] h-6 bg-blue-400/20" />
              <div className="absolute top-6 left-0 right-0 h-[1px] bg-blue-400/20" />
              <div className="absolute top-6 left-0 w-[1px] h-6 bg-blue-400/20" />
              <div className="absolute top-6 right-0 w-[1px] h-6 bg-blue-400/20" />
            </div>
          </div>

          {/* Level 3: Grandparents */}
          <div className="flex gap-4">
            <div className="flex gap-4">
              <PedigreeNode name="CHAOS" rarity="ELITE" img="chaos" label="G-SIRE" color="border-brand-purple shadow-[0_0_10px_rgba(106,0,255,0.2)]" />
              <PedigreeNode name="BELLA" rarity="ELITE" img="bella" label="G-DAM" color="border-brand-purple shadow-[0_0_10px_rgba(106,0,255,0.2)]" />
            </div>
            <div className="flex gap-4">
              <PedigreeNode name="BELLA" rarity="RARE" img="bella-2" label="G-SIRE" color="border-blue-400 shadow-[0_0_10px_rgba(96,165,250,0.2)]" />
              <PedigreeNode name="NOVA" rarity="RARE" img="nova" label="G-DAM" color="border-blue-400 shadow-[0_0_10px_rgba(96,165,250,0.2)]" />
            </div>
          </div>
        </div>

        {/* Stats Summary */}
        <div className="mt-16 gaming-card p-6">
          <div className="flex items-center gap-2 mb-6">
            <Info className="w-4 h-4 text-brand-gold" />
            <h3 className="text-xs font-black uppercase tracking-widest italic text-white">Bloodline Analysis</h3>
          </div>
          <div className="space-y-5">
            <div className="flex justify-between items-center">
              <span className="text-[10px] text-white/40 font-bold uppercase tracking-widest">Inbreeding Coeff.</span>
              <span className="text-xs font-black text-brand-gold">2.4%</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-[10px] text-white/40 font-bold uppercase tracking-widest">Generation Count</span>
              <span className="text-xs font-black text-white">5 Generations</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-[10px] text-white/40 font-bold uppercase tracking-widest">Champion Density</span>
              <span className="text-xs font-black text-brand-purple">High (82%)</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
