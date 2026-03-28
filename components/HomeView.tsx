'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'motion/react';
import { Shield, Zap, Star, Flame, Trophy, ChevronRight } from 'lucide-react';

export const HomeView = () => {
  return (
    <div className="flex flex-col gap-6 pb-24 relative overflow-hidden gaming-grid hex-grid">
      <div className="digital-noise absolute inset-0 pointer-events-none" />
      <div className="scanline pointer-events-none" />
      
      {/* Trending Bloodline */}
      <section className="px-4 pt-4 relative">
        <div className="hud-frame rounded-2xl overflow-hidden aspect-[16/9] metallic-border group shadow-[0_0_50px_rgba(230,30,30,0.15)]">
          <div className="hud-corner hud-tl" />
          <div className="hud-corner hud-tr" />
          <div className="hud-corner hud-bl" />
          <div className="hud-corner hud-br" />
          
          <div className="absolute top-4 left-6 z-20 flex flex-col gap-0.5">
            <span className="micro-label text-brand-gold/60">SYSTEM_STATUS: OPTIMIZED</span>
            <span className="micro-label text-brand-gold/60">CORE_TEMP: 32°C</span>
          </div>
          <Image
            src="https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?auto=format&fit=crop&q=80&w=800&h=450"
            alt="Trending"
            fill
            className="object-cover opacity-60 group-hover:scale-105 transition-transform duration-1000"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/40 to-transparent" />
          <div className="absolute inset-0 p-6 flex flex-col justify-end">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-2 h-2 rounded-full bg-brand-red animate-pulse shadow-[0_0_10px_rgba(230,30,30,0.8)]" />
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-brand-red">Hot Bloodline</span>
            </div>
            <h2 className="text-5xl font-display font-black uppercase tracking-tighter italic text-white leading-none mb-2 neon-text-gold">
              VENOM
            </h2>
            <p className="text-[12px] text-white/50 font-black uppercase tracking-[0.4em] mb-6">Royal Bully Camp</p>
            
            <div className="flex gap-8 border-t border-white/10 pt-6">
              <div className="flex flex-col">
                <span className="text-white font-black text-xl tracking-tighter">216</span>
                <span className="text-[8px] text-white/30 uppercase font-black tracking-widest">Descendents</span>
              </div>
              <div className="flex flex-col">
                <span className="text-white font-black text-xl tracking-tighter">36</span>
                <span className="text-[8px] text-white/30 uppercase font-black tracking-widest">Active Studs</span>
              </div>
              <div className="flex flex-col">
                <span className="text-white font-black text-xl tracking-tighter">14</span>
                <span className="text-[8px] text-white/30 uppercase font-black tracking-widest">Litters</span>
              </div>
            </div>

            <button className="mt-6 w-full py-3.5 rounded-xl premium-gradient-red text-[10px] font-black uppercase tracking-[0.3em] text-white shadow-[0_0_20px_rgba(230,30,30,0.3)] active:scale-95 transition-all">
              Initialize Exploration
            </button>
          </div>
        </div>
      </section>

      {/* Monthly Champions */}
      <section className="px-4">
        <div className="section-header-line mb-6">
          <Trophy className="w-4 h-4 text-brand-gold animate-pulse" />
          <h3 className="text-[11px] font-black uppercase tracking-[0.3em] italic text-white/90">Elite Champions</h3>
        </div>
        <div className="flex gap-5 overflow-x-auto pb-6 no-scrollbar">
          {[
            { name: 'TITAN', score: 95, img: 'https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?auto=format&fit=crop&q=80&w=300&h=400', kennel: 'Royal Bully Camp', fee: '$3K', price: '$23,000' },
            { name: 'Bella x Venom Jr.', score: 92, img: 'https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?auto=format&fit=crop&q=80&w=300&h=400', kennel: 'Iron Bloodline Kennels', fee: '6 Puppies', price: '4-2' },
            { name: 'Nova', score: 94, img: 'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&q=80&w=300&h=400', kennel: 'Iron Bloodline Kennels', fee: 'Offspring', price: '18' }
          ].map((champ) => (
            <div key={champ.name} className="flex-shrink-0 w-[160px] gaming-card group">
              <div className="aspect-[4/5] relative">
                <Image
                  src={champ.img}
                  alt={champ.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-transparent to-transparent opacity-60" />
                <div className="absolute top-3 left-3 w-8 h-8 rounded-lg bg-black/80 border border-brand-gold/40 flex items-center justify-center backdrop-blur-sm">
                  <span className="text-[10px] font-black text-brand-gold">{champ.score}</span>
                </div>
              </div>
              <div className="p-4 bg-gradient-to-b from-white/5 to-transparent">
                <h4 className="text-[11px] font-black uppercase tracking-tighter text-white truncate mb-0.5">{champ.name}</h4>
                <p className="text-[8px] text-white/30 font-black uppercase tracking-widest truncate mb-3">{champ.kennel}</p>
                <div className="flex items-center justify-between border-t border-white/5 pt-3">
                  <div className="flex flex-col">
                    <span className="text-[7px] text-white/30 font-black uppercase tracking-widest">Stud Fee</span>
                    <span className="text-[10px] font-black text-white">{champ.fee}</span>
                  </div>
                  <div className="flex flex-col items-end">
                    <span className="text-[10px] font-black text-brand-gold neon-text-gold">{champ.price}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Trending Dogs */}
      <section className="px-4">
        <div className="section-header-line mb-6">
          <Flame className="w-4 h-4 text-brand-red animate-pulse" />
          <h3 className="text-[11px] font-black uppercase tracking-[0.3em] italic text-white/90">Trending Units</h3>
        </div>
        <div className="flex gap-4 overflow-x-auto pb-6 no-scrollbar">
          {[
            { name: 'TITAN', kennel: 'Royal Bully Camp', score1: 95, score2: 95, img: 'https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?auto=format&fit=crop&q=80&w=200&h=200' },
            { name: 'CHAOS', kennel: 'Dynasty Bullies', score1: 93, score2: 93, img: 'https://images.unsplash.com/photo-1598133894008-61f7fdb8cc3a?auto=format&fit=crop&q=80&w=200&h=200' },
            { name: 'VENOM JR', kennel: 'Venomline', score1: 94, score2: 94, img: 'https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?auto=format&fit=crop&q=80&w=200&h=200' },
            { name: 'NOVA', kennel: 'Iron Bloodline', score1: 92, score2: 92, img: 'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&q=80&w=200&h=200' }
          ].map((dog) => (
            <div key={dog.name} className="flex-shrink-0 w-[110px] gaming-card group">
              <div className="aspect-[1/1] relative">
                <Image
                  src={dog.img}
                  alt={dog.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/80 via-transparent to-transparent" />
              </div>
              <div className="p-3">
                <h4 className="text-[10px] font-black uppercase tracking-tighter text-white truncate mb-0.5">{dog.name}</h4>
                <p className="text-[7px] text-white/30 font-black uppercase tracking-widest truncate mb-3">{dog.kennel}</p>
                <div className="grid grid-cols-2 gap-1.5">
                  <div className="bg-white/5 rounded-md px-1.5 py-1 flex items-center justify-between border border-white/5">
                    <Trophy className="w-2 h-2 text-brand-gold" />
                    <span className="text-[8px] font-black text-white">{dog.score1}</span>
                  </div>
                  <div className="bg-brand-red/10 rounded-md px-1.5 py-1 flex items-center justify-between border border-brand-red/20">
                    <span className="text-[8px] font-black text-brand-red">{dog.score2}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <button className="w-full mt-2 py-4 rounded-xl bg-white/5 border border-white/10 text-[9px] font-black uppercase tracking-[0.3em] text-white/60 hover:text-white hover:bg-white/10 transition-all">
          Access Marketplace
        </button>
      </section>

      {/* Top Studs */}
      <section className="px-4 mb-12">
        <div className="section-header-line mb-6">
          <Flame className="w-4 h-4 text-brand-red animate-pulse" />
          <h3 className="text-[11px] font-black uppercase tracking-[0.3em] italic text-white/90">Elite Studs</h3>
        </div>
        <div className="flex flex-col gap-3">
          {[
            { rank: 1, name: 'TITAN', kennel: 'Royal Bully Camp', price: '$34,500', score: 95, img: 'https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?auto=format&fit=crop&q=80&w=100&h=100' },
            { rank: 2, name: 'VENOM JR', kennel: 'Venomline', price: '$34,000', score: 94, img: 'https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?auto=format&fit=crop&q=80&w=100&h=100' },
            { rank: 3, name: 'CHAOS', kennel: 'Dynasty Bullies', price: '$34,800', score: 93, img: 'https://images.unsplash.com/photo-1598133894008-61f7fdb8cc3a?auto=format&fit=crop&q=80&w=100&h=100' }
          ].map((stud) => (
            <div key={stud.rank} className="flex items-center gap-4 p-3 rounded-xl bg-white/5 border border-white/5 hover:border-white/10 transition-all group cursor-pointer">
              <span className="text-2xl font-display font-black italic text-white/10 w-6 group-hover:text-brand-gold transition-colors">{stud.rank}</span>
              <div className="w-12 h-12 rounded-lg overflow-hidden border border-white/10 relative">
                <Image
                  src={stud.img}
                  alt={stud.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="flex-1">
                <h4 className="text-[12px] font-black uppercase tracking-tighter text-white">{stud.name}</h4>
                <p className="text-[8px] text-white/30 font-black uppercase tracking-widest">{stud.kennel}</p>
              </div>
              <div className="flex items-center gap-5">
                <span className="text-[11px] font-black text-white/50 tracking-tighter">{stud.price}</span>
                <div className="badge-slanted min-w-[55px] flex items-center justify-center neon-glow-red">
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
