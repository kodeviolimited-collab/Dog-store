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
    <nav className="fixed bottom-0 left-0 right-0 z-[60] bg-brand-dark/95 backdrop-blur-2xl border-t border-brand-gold/20 pb-safe shadow-[0_-10px_30px_rgba(0,0,0,0.5)]">
      <div className="flex items-center justify-around h-20 max-w-md mx-auto relative px-2">
        {/* Top accent line */}
        <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-brand-gold/40 to-transparent" />
        
        {tabs.map((tab) => {
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`relative flex flex-col items-center justify-center gap-1.5 w-full h-full transition-all duration-300 ${
                isActive ? 'text-brand-gold' : 'text-white/30 hover:text-white/60'
              }`}
            >
              <div className={`relative p-2 rounded-xl transition-all duration-500 ${
                isActive ? 'bg-brand-gold/10 shadow-[inset_0_0_10px_rgba(245,197,66,0.2)]' : ''
              }`}>
                <tab.icon className={`w-6 h-6 transition-transform duration-500 ${isActive ? 'scale-110 drop-shadow-[0_0_8px_rgba(245,197,66,0.5)]' : ''}`} />
                {isActive && (
                  <div className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-brand-red animate-pulse shadow-[0_0_8px_rgba(255,59,59,0.8)]" />
                )}
              </div>
              <span className={`text-[9px] font-black uppercase tracking-[0.1em] transition-all duration-300 ${
                isActive ? 'opacity-100 translate-y-0' : 'opacity-60 translate-y-0.5'
              }`}>
                {tab.label}
              </span>
              
              {isActive && (
                <div className="absolute -bottom-1 w-12 h-[2px] bg-brand-gold shadow-[0_0_10px_#F5C542] rounded-full" />
              )}
            </button>
          );
        })}
      </div>
    </nav>
  );
};
