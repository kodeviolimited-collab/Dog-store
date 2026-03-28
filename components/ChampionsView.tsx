'use client';

import React from 'react';
import Image from 'next/image';
import { Trophy, Medal, Crown, TrendingUp, Search } from 'lucide-react';

const ChampionItem = ({ rank, name, bloodline, points, img, trend }: any) => (
  <div className="gaming-card flex items-center gap-4 p-4 mb-3 relative overflow-hidden group">
    <div className="absolute top-0 left-0 w-1 h-full bg-brand-gold/40 group-hover:bg-brand-gold transition-colors" />
    <div className="w-8 flex justify-center">
      {rank === 1 ? <Crown className="w-6 h-6 text-brand-gold drop-shadow-[0_0_8px_rgba(245,197,66,0.5)]" /> : 
       rank === 2 ? <Medal className="w-5 h-5 text-slate-300" /> :
       rank === 3 ? <Medal className="w-5 h-5 text-brand-red" /> :
       <span className="text-sm font-black text-white/20 italic">{rank}</span>}
    </div>
    <div className="relative w-12 h-12 rounded-full overflow-hidden border border-white/10 shadow-inner">
      <Image
        src={`https://picsum.photos/seed/${img}/100/100`}
        alt={name}
        fill
        className="object-cover"
        referrerPolicy="no-referrer"
      />
    </div>
    <div className="flex-1">
      <h4 className="text-xs font-black uppercase tracking-widest text-white">{name}</h4>
      <p className="text-[9px] font-bold text-white/40 uppercase tracking-tighter">{bloodline}</p>
    </div>
    <div className="text-right">
      <p className="text-xs font-black text-brand-gold">{points}</p>
      <div className="flex items-center justify-end gap-1">
        <TrendingUp className="w-3 h-3 text-emerald-400" />
        <span className="text-[8px] font-bold text-emerald-400">{trend}</span>
      </div>
    </div>
  </div>
);

export const ChampionsView = () => {
  return (
    <div className="flex flex-col min-h-screen bg-brand-dark pb-24 relative overflow-hidden gaming-grid">
      <div className="scanline pointer-events-none" />
      
      {/* Header */}
      <div className="p-8 bg-gradient-to-b from-brand-red/20 to-transparent relative z-10">
        <div className="flex items-center gap-3 mb-2">
          <Trophy className="w-8 h-8 text-brand-gold drop-shadow-[0_0_10px_rgba(245,197,66,0.5)]" />
          <h2 className="text-2xl font-black uppercase tracking-tighter italic text-white">Hall of Fame</h2>
        </div>
        <p className="text-[10px] text-white/40 font-black uppercase tracking-[0.2em]">Season 4 • March 2026</p>
      </div>

      {/* Top 3 Podium */}
      <div className="flex justify-center items-end gap-4 px-6 mb-12 h-56 relative z-10">
        {/* 2nd Place */}
        <div className="flex flex-col items-center gap-2 flex-1">
          <div className="relative w-16 h-16 rounded-full border-2 border-slate-300 p-1 bg-black/40 shadow-[0_0_15px_rgba(203,213,225,0.2)]">
            <div className="relative w-full h-full rounded-full overflow-hidden">
              <Image src="https://picsum.photos/seed/dog2/100/100" alt="2nd" fill className="object-cover" referrerPolicy="no-referrer" />
            </div>
          </div>
          <div className="w-full h-20 bg-gradient-to-t from-slate-300/20 to-transparent rounded-t-xl border-x border-t border-slate-300/30 flex items-center justify-center relative">
            <span className="text-3xl font-black text-slate-300/20 italic">2</span>
            <div className="absolute top-0 left-0 w-full h-[1px] bg-slate-300/40" />
          </div>
        </div>

        {/* 1st Place */}
        <div className="flex flex-col items-center gap-2 flex-1">
          <Crown className="w-8 h-8 text-brand-gold animate-bounce drop-shadow-[0_0_10px_rgba(245,197,66,0.8)]" />
          <div className="relative w-24 h-24 rounded-full border-4 border-brand-gold p-1 shadow-[0_0_30px_rgba(245,197,66,0.4)] bg-black/40">
            <div className="relative w-full h-full rounded-full overflow-hidden">
              <Image src="https://picsum.photos/seed/dog1/100/100" alt="1st" fill className="object-cover" referrerPolicy="no-referrer" />
            </div>
          </div>
          <div className="w-full h-28 bg-gradient-to-t from-brand-gold/20 to-transparent rounded-t-xl border-x border-t border-brand-gold/40 flex items-center justify-center relative">
            <span className="text-4xl font-black text-brand-gold/20 italic">1</span>
            <div className="absolute top-0 left-0 w-full h-[2px] bg-brand-gold/60" />
          </div>
        </div>

        {/* 3rd Place */}
        <div className="flex flex-col items-center gap-2 flex-1">
          <div className="relative w-16 h-16 rounded-full border-2 border-brand-red p-1 bg-black/40 shadow-[0_0_15px_rgba(255,59,59,0.2)]">
            <div className="relative w-full h-full rounded-full overflow-hidden">
              <Image src="https://picsum.photos/seed/dog3/100/100" alt="3rd" fill className="object-cover" referrerPolicy="no-referrer" />
            </div>
          </div>
          <div className="w-full h-16 bg-gradient-to-t from-brand-red/20 to-transparent rounded-t-xl border-x border-t border-brand-red/30 flex items-center justify-center relative">
            <span className="text-3xl font-black text-brand-red/20 italic">3</span>
            <div className="absolute top-0 left-0 w-full h-[1px] bg-brand-red/40" />
          </div>
        </div>
      </div>

      {/* Search & Filter */}
      <div className="px-6 mb-8 relative z-10">
        <div className="relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-brand-gold/60" />
          <input 
            type="text" 
            placeholder="Search Champions..." 
            className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-12 pr-4 text-xs font-black uppercase tracking-widest text-white focus:outline-none focus:border-brand-gold/50 transition-all"
          />
        </div>
      </div>

      {/* List */}
      <div className="px-6 overflow-y-auto relative z-10 no-scrollbar">
        <ChampionItem rank={4} name="GHOST" bloodline="DAX LINE" points="12,450" img="dog4" trend="+12%" />
        <ChampionItem rank={5} name="DIABLO" bloodline="MUSCLETONE" points="11,900" img="dog5" trend="+5%" />
        <ChampionItem rank={6} name="LUNA" bloodline="BULLY CAMP" points="10,200" img="dog6" trend="+8%" />
        <ChampionItem rank={7} name="REX" bloodline="RAZORS EDGE" points="9,800" img="dog7" trend="+2%" />
        <ChampionItem rank={8} name="MAMBA" bloodline="DAX LINE" points="8,500" img="dog8" trend="+15%" />
      </div>
    </div>
  );
};
;
