'use client';

import React from 'react';
import { Bell, User, Menu, MessageSquare, Search, Mic } from 'lucide-react';
import Image from 'next/image';

interface HeaderProps {
  onNotificationClick?: () => void;
  onMessageClick?: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onNotificationClick, onMessageClick }) => {
  return (
    <header className="sticky top-0 z-50 bg-brand-dark/95 backdrop-blur-2xl border-b border-white/10 px-4 pt-6 pb-4 overflow-hidden shadow-2xl">
      <div className="digital-noise absolute inset-0 opacity-20" />
      <div className="scanline pointer-events-none" />
      
      {/* Top Status Bar (Hijibiji) */}
      <div className="flex items-center justify-between mb-4 px-2 relative z-10">
        <div className="flex items-center gap-5">
          <div className="flex flex-col">
            <span className="micro-label text-brand-gold/80 font-black">LAT: 32.7767 N</span>
            <span className="micro-label text-brand-gold/80 font-black">LON: 96.7970 W</span>
          </div>
          <div className="h-5 w-[1px] bg-white/20" />
          <div className="flex items-center gap-2 px-2 py-0.5 rounded bg-brand-red/10 border border-brand-red/20">
            <div className="w-1.5 h-1.5 bg-brand-red rounded-full animate-ping" />
            <span className="micro-label text-brand-red font-black tracking-[0.2em]">LIVE_FEED</span>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-end gap-1 h-3">
            {[0.4, 0.6, 0.8, 0.3].map((h, i) => (
              <div key={i} className="w-1 bg-brand-gold rounded-t-sm" style={{ height: `${h * 100}%` }} />
            ))}
          </div>
          <div className="hud-frame p-0.5 rounded-sm metallic-border w-10 h-4">
            <div className="h-full w-4/5 bg-gradient-to-r from-green-500 to-green-400 rounded-sm shadow-[0_0_5px_rgba(34,197,94,0.5)]" />
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between gap-5 relative z-10">
        <div className="flex items-center gap-4">
          <button className="w-10 h-10 flex items-center justify-center bg-white/5 rounded-xl border border-white/10 hover:border-brand-gold/40 transition-all group">
            <Menu className="w-6 h-6 text-white/60 group-hover:text-brand-gold" />
          </button>
          <h1 className="text-2xl font-display font-black tracking-tighter italic text-white flex items-center neon-text-gold">
            BLOODLINE<span className="text-brand-red text-3xl ml-1 drop-shadow-[0_0_10px_rgba(230,30,30,0.5)]">X</span>
          </h1>
        </div>
        
        <div className="flex items-center gap-3">
          <button 
            onClick={onNotificationClick}
            className="relative w-11 h-11 flex items-center justify-center bg-white/5 rounded-xl border border-white/10 hover:border-brand-gold/40 transition-all group"
          >
            <Bell className="w-5 h-5 text-white/60 group-hover:text-brand-gold" />
            <div className="absolute top-2 right-2 w-2.5 h-2.5 bg-brand-red rounded-full border-2 border-brand-dark shadow-[0_0_8px_rgba(230,30,30,0.6)]" />
          </button>
          <button 
            onClick={onMessageClick}
            className="relative w-11 h-11 flex items-center justify-center bg-white/5 rounded-xl border border-white/10 hover:border-brand-gold/40 transition-all group"
          >
            <MessageSquare className="w-5 h-5 text-white/60 group-hover:text-brand-gold" />
            <div className="absolute -top-1.5 -right-1.5 premium-gradient-red text-[9px] font-black px-1.5 py-0.5 rounded-lg border border-brand-dark shadow-[0_0_10px_rgba(230,30,30,0.4)]">3</div>
          </button>
        </div>
      </div>

      <div className="mt-5 relative group z-10">
        <div className="hud-frame p-1 rounded-2xl metallic-border">
          <div className="relative">
            <div className="absolute left-4 top-1/2 -translate-y-1/2 flex items-center gap-2">
              <Search className="w-4 h-4 text-white/20 group-focus-within:text-brand-gold transition-colors" />
            </div>
            <input
              type="text"
              placeholder="Search dogs, bloodlines, breeders..."
              className="w-full bg-white/5 border border-transparent rounded-xl py-3.5 pl-12 pr-12 text-[11px] font-black uppercase tracking-[0.2em] text-white focus:outline-none focus:bg-white/10 transition-all placeholder:text-white/20"
            />
            <div className="absolute right-4 top-1/2 -translate-y-1/2">
              <Mic className="w-4 h-4 text-white/40 hover:text-brand-gold cursor-pointer transition-colors" />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
