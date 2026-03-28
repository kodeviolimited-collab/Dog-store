'use client';

import React from 'react';
import { Home, Search, PlusSquare, Trophy, User } from 'lucide-react';

interface MobileNavProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export const MobileNav: React.FC<MobileNavProps> = ({ activeTab, setActiveTab }) => {
  const tabs = [
    { id: 'home', icon: Home, label: 'Home' },
    { id: 'marketplace', icon: Search, label: 'Market' },
    { id: 'create', icon: PlusSquare, label: 'Create' },
    { id: 'champions', icon: Trophy, label: 'Champs' },
    { id: 'profile', icon: User, label: 'Profile' },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-[60] bg-brand-dark/98 backdrop-blur-3xl border-t border-white/10 pb-safe shadow-[0_-20px_50px_rgba(0,0,0,0.8)]">
      <div className="digital-noise absolute inset-0 opacity-10" />
      <div className="scanline pointer-events-none opacity-20" />
      
      <div className="flex items-center justify-around h-24 max-w-md mx-auto relative px-4">
        {/* Top accent line with glow */}
        <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-brand-gold to-transparent opacity-50 shadow-[0_0_15px_rgba(245,197,66,0.5)]" />
        
        {tabs.map((tab) => {
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`relative flex flex-col items-center justify-center gap-2 w-full h-full transition-all duration-500 group ${
                isActive ? 'text-brand-gold' : 'text-white/20 hover:text-white/50'
              }`}
            >
              <div className={`relative p-3 rounded-2xl transition-all duration-500 ${
                isActive 
                  ? 'hud-frame metallic-border bg-brand-gold/10 shadow-[0_0_20px_rgba(245,197,66,0.15)] scale-110 -translate-y-2' 
                  : 'hover:bg-white/5'
              }`}>
                <tab.icon className={`w-6 h-6 transition-all duration-500 ${
                  isActive 
                    ? 'scale-110 drop-shadow-[0_0_12px_rgba(245,197,66,0.8)] text-brand-gold' 
                    : 'group-hover:scale-110'
                }`} />
                
                {isActive && (
                  <>
                    <div className="hud-corner hud-tl w-2 h-2" />
                    <div className="hud-corner hud-tr w-2 h-2" />
                    <div className="hud-corner hud-bl w-2 h-2" />
                    <div className="hud-corner hud-br w-2 h-2" />
                    <div className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-brand-red animate-ping shadow-[0_0_10px_rgba(230,30,30,0.8)]" />
                  </>
                )}
              </div>
              
              <span className={`text-[10px] font-black uppercase tracking-[0.2em] transition-all duration-500 italic ${
                isActive ? 'opacity-100 translate-y-[-4px] neon-text-gold' : 'opacity-40 translate-y-0'
              }`}>
                {tab.label}
              </span>
              
              {isActive && (
                <div className="absolute bottom-2 w-10 h-1 bg-brand-gold shadow-[0_0_15px_#F5C542] rounded-full animate-pulse" />
              )}
            </button>
          );
        })}
      </div>
    </nav>
  );
};
