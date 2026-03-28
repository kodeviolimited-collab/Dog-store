'use client';

import React from 'react';
import { Bell, User, Menu, MessageSquare, Search, Mic } from 'lucide-react';
import Image from 'next/image';

interface HeaderProps {
  onNotificationClick?: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onNotificationClick }) => {
  return (
    <header className="sticky top-0 z-50 bg-brand-dark/90 backdrop-blur-md border-b border-white/5 px-4 py-3">
      <div className="flex items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <Menu className="w-6 h-6 text-white/60" />
          <h1 className="text-xl font-display font-black tracking-tighter italic text-white flex items-center">
            BLOODLINE<span className="text-brand-red text-2xl ml-0.5">X</span>
          </h1>
        </div>
        
        <div className="flex items-center gap-3">
          <button 
            onClick={onNotificationClick}
            className="relative p-2 bg-white/5 rounded-lg border border-white/10"
          >
            <Bell className="w-5 h-5 text-white/60" />
            <div className="absolute top-1.5 right-1.5 w-2 h-2 bg-brand-red rounded-full border border-brand-dark" />
          </button>
          <button className="p-2 bg-white/5 rounded-lg border border-white/10 relative">
            <MessageSquare className="w-5 h-5 text-white/60" />
            <div className="absolute -top-1 -right-1 bg-brand-red text-[8px] font-black px-1 rounded-sm border border-brand-dark">3</div>
          </button>
        </div>
      </div>

      <div className="mt-4 relative group">
        <div className="absolute left-3 top-1/2 -translate-y-1/2 flex items-center gap-2">
          <Search className="w-4 h-4 text-white/20" />
        </div>
        <input
          type="text"
          placeholder="Search dogs, bloodlines, breeders, or kennels"
          className="w-full bg-white/5 border border-white/10 rounded-xl py-2.5 pl-10 pr-10 text-[11px] font-bold text-white/40 focus:outline-none focus:border-brand-gold/50 transition-all placeholder:text-white/20"
        />
        <div className="absolute right-3 top-1/2 -translate-y-1/2">
          <Mic className="w-4 h-4 text-white/40" />
        </div>
      </div>
    </header>
  );
};
