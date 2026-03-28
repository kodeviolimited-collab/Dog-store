'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'motion/react';
import { ShieldCheck, MapPin, MessageSquare, Plus, Users, LayoutGrid, Trophy, Globe, Instagram, Mail, Phone } from 'lucide-react';

export const ProfileView = () => {
  return (
    <div className="flex flex-col min-h-screen bg-brand-dark pb-24 relative overflow-hidden gaming-grid hex-grid">
      <div className="digital-noise absolute inset-0 pointer-events-none" />
      <div className="scanline pointer-events-none" />
      
      {/* Profile Header Banner */}
      <div className="relative h-72 w-full overflow-hidden metallic-border border-b border-white/10">
        <div className="hud-corner hud-tl" />
        <div className="hud-corner hud-tr" />
        <div className="absolute top-6 left-8 z-20 flex flex-col gap-1">
          <span className="micro-label text-brand-gold/60">DOSSIER_ID: RBC-TX-09</span>
          <span className="micro-label text-brand-gold/60">CLEARANCE: LEVEL_4_ALPHA</span>
        </div>
        <Image
          src="https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?auto=format&fit=crop&q=80&w=1200&h=400"
          alt="Banner"
          fill
          className="object-cover opacity-40 scale-105 transition-transform duration-1000"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/60 to-transparent" />
        <div className="scanline pointer-events-none" />
        
        {/* Decorative elements */}
        <div className="absolute bottom-6 left-8 flex items-center gap-3">
          <div className="w-2.5 h-2.5 rounded-full bg-brand-red animate-pulse shadow-[0_0_12px_rgba(230,30,30,0.8)]" />
          <span className="text-[10px] font-black uppercase tracking-[0.4em] text-brand-red">Operator Online</span>
        </div>
      </div>

      <div className="px-6 -mt-28 relative z-10">
        <div className="flex items-end gap-6 mb-10">
          <div className="relative group">
            <div className="absolute -inset-1.5 bg-gradient-to-br from-brand-gold via-brand-red to-brand-blue rounded-3xl blur opacity-30 group-hover:opacity-60 transition-opacity duration-500" />
            <div className="w-36 h-36 rounded-2xl border-2 border-brand-gold/40 overflow-hidden shadow-[0_0_40px_rgba(0,0,0,0.8)] relative bg-brand-dark p-1">
              <div className="w-full h-full rounded-xl overflow-hidden relative">
                <Image
                  src="https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?auto=format&fit=crop&q=80&w=200&h=200"
                  alt="Avatar"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              </div>
            </div>
            <div className="absolute -bottom-2 -right-2 w-11 h-11 rounded-xl premium-gradient-gold flex items-center justify-center shadow-[0_0_20px_rgba(245,197,66,0.4)] border border-black/20">
              <ShieldCheck className="w-7 h-7 text-black" />
            </div>
          </div>
          
          <div className="flex-1 pb-4">
            <div className="flex items-center gap-3 mb-2">
              <h2 className="text-4xl font-black uppercase tracking-tighter italic text-white neon-text-gold">Royal Bully Camp</h2>
            </div>
            <div className="flex items-center gap-3 text-brand-gold/60">
              <MapPin className="w-3.5 h-3.5" />
              <span className="text-[11px] font-black uppercase tracking-[0.3em]">Sector: Texas, USA</span>
            </div>
          </div>
        </div>

        {/* Stats Row */}
        <div className="hud-frame p-1 rounded-2xl mb-10 metallic-border">
          <div className="hud-corner hud-tl" />
          <div className="hud-corner hud-tr" />
          <div className="hud-corner hud-bl" />
          <div className="hud-corner hud-br" />
          <div className="grid grid-cols-3 gap-1 bg-white/5 rounded-xl overflow-hidden">
            {[
              { label: 'Champions', value: '14', color: 'brand-gold' },
              { label: 'Lineage', value: '27', color: 'brand-red' },
              { label: 'Followers', value: '7.1k', color: 'white' }
            ].map((stat, idx) => (
              <div key={stat.label} className={`py-6 text-center relative group overflow-hidden ${idx !== 2 ? 'border-r border-white/5' : ''}`}>
                <p className={`text-2xl font-black italic text-${stat.color} drop-shadow-[0_0_10px_rgba(245,197,66,0.2)] tracking-tighter`}>{stat.value}</p>
                <p className="text-[9px] text-white/30 uppercase font-black tracking-[0.2em] mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Bio Section */}
        <div className="gaming-card p-6 mb-8 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-1 h-full bg-brand-gold" />
          <h3 className="text-[10px] font-black uppercase tracking-[0.3em] text-brand-gold mb-3 flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-brand-gold animate-pulse" />
            Breeder Dossier
          </h3>
          <p className="text-xs leading-relaxed text-white/70 font-medium italic">
            &quot;Specializing in extreme pocket bullies with world-class temperaments and structure. 
            Over 15 years of dedicated breeding excellence in the heart of Texas. 
            Home of the legendary Titan and Venom bloodlines. We don&apos;t just breed dogs, we forge legacies.&quot;
          </p>
        </div>

        {/* Contact Info */}
        <div className="grid grid-cols-2 gap-4 mb-8">
          <div className="gaming-card p-4 flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center border border-white/10">
              <Globe className="w-4 h-4 text-brand-gold" />
            </div>
            <div>
              <p className="text-[8px] text-white/40 uppercase font-black tracking-widest">Website</p>
              <p className="text-[10px] text-white font-bold">royalbully.com</p>
            </div>
          </div>
          <div className="gaming-card p-4 flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center border border-white/10">
              <Instagram className="w-4 h-4 text-brand-red" />
            </div>
            <div>
              <p className="text-[8px] text-white/40 uppercase font-black tracking-widest">Social</p>
              <p className="text-[10px] text-white font-bold">@royal_bully</p>
            </div>
          </div>
          <div className="gaming-card p-4 flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center border border-white/10">
              <Mail className="w-4 h-4 text-blue-400" />
            </div>
            <div>
              <p className="text-[8px] text-white/40 uppercase font-black tracking-widest">Comms</p>
              <p className="text-[10px] text-white font-bold">contact@rbc.io</p>
            </div>
          </div>
          <div className="gaming-card p-4 flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center border border-white/10">
              <Phone className="w-4 h-4 text-green-400" />
            </div>
            <div>
              <p className="text-[8px] text-white/40 uppercase font-black tracking-widest">Secure Line</p>
              <p className="text-[10px] text-white font-bold">+1 (555) BULLY</p>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-4 mb-12">
          <button className="flex-1 bg-brand-gold h-14 rounded-xl flex items-center justify-center gap-3 text-black font-black uppercase tracking-[0.2em] text-xs shadow-[0_0_20px_rgba(245,197,66,0.3)] active:scale-95 transition-all">
            <Plus className="w-5 h-5" /> Follow
          </button>
          <button className="flex-1 bg-white/5 border border-white/10 h-14 rounded-xl flex items-center justify-center gap-3 text-white font-black uppercase tracking-[0.2em] text-xs active:scale-95 transition-all">
            <MessageSquare className="w-5 h-5 text-brand-gold" /> Message
          </button>
        </div>

        {/* Gallery Section */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <LayoutGrid className="w-4 h-4 text-brand-gold" />
            <h3 className="text-sm font-black uppercase tracking-[0.2em] italic text-white">Active Dog Gallery</h3>
          </div>
          <div className="flex gap-2">
            <button className="px-3 py-1 rounded bg-white/5 border border-white/10 text-[8px] font-black uppercase text-brand-gold">All</button>
            <button className="px-3 py-1 rounded bg-transparent border border-white/5 text-[8px] font-black uppercase text-white/40">Elite</button>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-5 mb-8">
          {[
            { name: 'TITAN', rarity: 'Legendary', score: 95, img: 'https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?auto=format&fit=crop&q=80&w=400&h=600', color: 'brand-gold' },
            { name: 'VENOM JR', rarity: 'Elite', score: 93, img: 'https://images.unsplash.com/photo-1598133894008-61f7fdb8cc3a?auto=format&fit=crop&q=80&w=400&h=600', color: 'brand-red' },
            { name: 'GHOST', rarity: 'Rare', score: 88, img: 'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&q=80&w=400&h=600', color: 'white' },
            { name: 'RUBY', rarity: 'Elite', score: 91, img: 'https://images.unsplash.com/photo-1541364983171-a8ba01e95cfc?auto=format&fit=crop&q=80&w=400&h=600', color: 'brand-red' }
          ].map((dog) => (
            <div key={dog.name} className="gaming-card aspect-[3/4] relative group overflow-hidden cursor-pointer">
              <Image
                src={dog.img}
                alt={dog.name}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
              
              <div className="absolute top-3 right-3 px-2 py-1 rounded bg-black/80 border border-brand-gold/40 text-[10px] font-black text-brand-gold shadow-lg">
                {dog.score}
              </div>
              
              <div className="absolute bottom-4 left-4">
                <div className="flex items-center gap-1 mb-1">
                  <div className={`w-1.5 h-1.5 rounded-full bg-${dog.color} shadow-[0_0_5px_rgba(255,59,59,0.5)]`} />
                  <p className={`text-[8px] text-${dog.color} font-black uppercase tracking-[0.2em]`}>{dog.rarity}</p>
                </div>
                <p className="text-sm font-black uppercase tracking-tighter text-white drop-shadow-md">{dog.name}</p>
              </div>
              
              {/* Scanline overlay for cards */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/5 to-transparent h-10 w-full animate-scan-slow opacity-20 pointer-events-none" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
