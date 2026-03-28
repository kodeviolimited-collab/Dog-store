'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'motion/react';
import { Shield, Zap, Star, Flame, Trophy, ChevronRight } from 'lucide-react';

export const HomeView = () => {
  return (
    <div className="flex flex-col gap-6 pb-24 relative overflow-hidden gaming-grid">
      <div className="scanline pointer-events-none" />
      
      {/* Trending Bloodline */}
      <section className="px-4 pt-4">
        <div className="relative rounded-2xl overflow-hidden aspect-[16/9] border border-white/20 shadow-[0_0_20px_rgba(0,0,0,0.5)] metallic-border">
          <Image
            src="https://picsum.photos/seed/venom-trending/800/450"
            alt="Trending"
            fill
            className="object-cover opacity-80"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
          <div className="absolute inset-0 p-5 flex flex-col justify-end">
            <div className="flex items-center gap-2 mb-1">
              <Flame className="w-4 h-4 text-brand-red fill-brand-red" />
              <span className="text-[11px] font-black uppercase tracking-widest text-white/80">Trending Bloodline</span>
            </div>
            <h2 className="text-4xl font-display font-black uppercase tracking-tighter italic text-white leading-none mb-1">
              VENOM
            </h2>
            <p className="text-[11px] text-white/60 font-bold uppercase tracking-widest mb-4">Royal Bully Camp</p>
            
            <div className="flex gap-6 border-t border-white/10 pt-4">
              <div className="flex flex-col">
                <span className="text-white font-black text-base">216</span>
                <span className="text-[9px] text-white/40 uppercase font-bold tracking-widest">Descendents</span>
              </div>
              <div className="flex flex-col">
                <span className="text-white font-black text-base">36</span>
                <span className="text-[9px] text-white/40 uppercase font-bold tracking-widest">Active Studs</span>
              </div>
              <div className="flex flex-col">
                <span className="text-white font-black text-base">14</span>
                <span className="text-[9px] text-white/40 uppercase font-bold tracking-widest">Litters</span>
              </div>
            </div>

            <button className="mt-4 w-full py-2.5 rounded-lg bg-brand-red/20 border border-brand-red/40 text-[10px] font-black uppercase tracking-widest text-white hover:bg-brand-red/30 transition-all">
              Explore Bloodline
            </button>
          </div>
        </div>
      </section>

      {/* Monthly Champions */}
      <section className="px-4">
        <div className="section-header-line mb-4">
          <Trophy className="w-4 h-4 text-brand-gold" />
          <h3 className="text-[11px] font-black uppercase tracking-widest italic text-white/80">Monthly Champions</h3>
        </div>
        <div className="flex gap-4 overflow-x-auto pb-4 no-scrollbar">
          {[
            { name: 'TITAN', score: 95, img: 'titan', kennel: 'Royal Bully Camp', fee: '$3K', price: '$23,000' },
            { name: 'Bella x Venom Jr.', score: 92, img: 'bella', kennel: 'Iron Bloodline Kennels', fee: '6 Puppies', price: '4-2' },
            { name: 'Nova', score: 94, img: 'nova', kennel: 'Iron Bloodline Kennels', fee: 'Offspring', price: '18' }
          ].map((champ) => (
            <div key={champ.name} className="flex-shrink-0 w-[140px] gaming-card">
              <div className="aspect-[4/5] relative">
                <Image
                  src={`https://picsum.photos/seed/${champ.img}/300/400`}
                  alt={champ.name}
                  fill
                  className="object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-2 left-2 w-7 h-7 rounded-full bg-black/80 border border-white/20 flex items-center justify-center">
                  <span className="text-[10px] font-black text-white">{champ.score}</span>
                </div>
              </div>
              <div className="p-3 bg-gradient-to-b from-white/5 to-transparent">
                <h4 className="text-[11px] font-black uppercase tracking-tighter text-white truncate">{champ.name}</h4>
                <p className="text-[8px] text-white/40 font-bold uppercase truncate mb-2">{champ.kennel}</p>
                <div className="flex items-center justify-between border-t border-white/5 pt-2">
                  <div className="flex flex-col">
                    <span className="text-[8px] text-white/40 font-bold uppercase">Stud Fee</span>
                    <span className="text-[10px] font-black text-white">{champ.fee}</span>
                  </div>
                  <div className="flex flex-col items-end">
                    <span className="text-[10px] font-black text-brand-gold">{champ.price}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Trending Dogs */}
      <section className="px-4">
        <div className="section-header-line mb-4">
          <Flame className="w-4 h-4 text-brand-red" />
          <h3 className="text-[11px] font-black uppercase tracking-widest italic text-white/80">Trending Dogs</h3>
        </div>
        <div className="flex gap-3 overflow-x-auto pb-4 no-scrollbar">
          {[
            { name: 'TITAN', kennel: 'Royal Bully Camp', score1: 95, score2: 95, img: 'titan' },
            { name: 'CHAOS', kennel: 'Dynasty Bullies', score1: 93, score2: 93, img: 'chaos' },
            { name: 'VENOM JR', kennel: 'Venomline', score1: 94, score2: 94, img: 'venom' },
            { name: 'NOVA', kennel: 'Iron Bloodline', score1: 92, score2: 92, img: 'nova' }
          ].map((dog) => (
            <div key={dog.name} className="flex-shrink-0 w-[100px] gaming-card">
              <div className="aspect-[1/1] relative">
                <Image
                  src={`https://picsum.photos/seed/trending-${dog.img}/200/200`}
                  alt={dog.name}
                  fill
                  className="object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="p-2">
                <h4 className="text-[10px] font-black uppercase tracking-tighter text-white truncate">{dog.name}</h4>
                <p className="text-[7px] text-white/40 font-bold uppercase truncate mb-2">{dog.kennel}</p>
                <div className="grid grid-cols-2 gap-1">
                  <div className="bg-white/5 rounded px-1 py-0.5 flex items-center justify-between">
                    <Trophy className="w-2 h-2 text-brand-gold" />
                    <span className="text-[8px] font-black text-white">{dog.score1}</span>
                  </div>
                  <div className="bg-brand-red/20 rounded px-1 py-0.5 flex items-center justify-between">
                    <span className="text-[8px] font-black text-brand-red">{dog.score2}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <button className="w-full mt-2 py-2 rounded-lg bg-white/5 border border-white/10 text-[9px] font-black uppercase tracking-widest text-white/60">
          View Marketplace
        </button>
      </section>

      {/* Top Studs */}
      <section className="px-4 mb-12">
        <div className="section-header-line mb-4">
          <Flame className="w-4 h-4 text-brand-red" />
          <h3 className="text-[11px] font-black uppercase tracking-widest italic text-white/80">Top Studs</h3>
        </div>
        <div className="flex flex-col gap-2">
          {[
            { rank: 1, name: 'TITAN', kennel: 'Royal Bully Camp', price: '$34,500', score: 95 },
            { rank: 2, name: 'VENOM JR', kennel: 'Venomline', price: '$34,000', score: 94 },
            { rank: 3, name: 'CHAOS', kennel: 'Dynasty Bullies', price: '$34,800', score: 93 }
          ].map((stud) => (
            <div key={stud.rank} className="flex items-center gap-3 p-2 rounded-lg bg-white/5 border border-white/5">
              <span className="text-lg font-display font-black italic text-white/20 w-4">{stud.rank}</span>
              <div className="w-10 h-10 rounded overflow-hidden border border-white/10">
                <Image
                  src={`https://picsum.photos/seed/stud-${stud.rank}/100/100`}
                  alt={stud.name}
                  width={40}
                  height={40}
                  className="object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="flex-1">
                <h4 className="text-[11px] font-black uppercase tracking-tighter text-white">{stud.name}</h4>
                <p className="text-[8px] text-white/40 font-bold uppercase">{stud.kennel}</p>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-[11px] font-black text-white/60">{stud.price}</span>
                <div className="badge-slanted min-w-[50px] flex items-center justify-center">
                  {stud.score}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
