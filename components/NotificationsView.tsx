'use client';

import React from 'react';
import { Bell, MessageSquare, Heart, Star, ChevronLeft } from 'lucide-react';

const NotificationItem = ({ icon: Icon, color, title, time, desc }: any) => (
  <div className="gaming-card flex gap-4 p-5 mb-4 relative overflow-hidden group hover:border-brand-gold/40 transition-all">
    <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 border border-white/5 bg-black/40 ${color} shadow-inner`}>
      <Icon className="w-6 h-6 drop-shadow-[0_0_5px_currentColor]" />
    </div>
    <div className="flex-1">
      <div className="flex justify-between items-start mb-1.5">
        <h4 className="text-[11px] font-black uppercase tracking-[0.15em] text-white group-hover:text-brand-gold transition-colors">{title}</h4>
        <span className="text-[8px] font-black text-white/20 uppercase tracking-widest">{time}</span>
      </div>
      <p className="text-[10px] text-white/50 font-bold leading-relaxed uppercase tracking-wide">{desc}</p>
    </div>
    
    {/* Decorative corner */}
    <div className="absolute top-0 right-0 w-6 h-6 bg-gradient-to-bl from-white/5 to-transparent" />
  </div>
);

export const NotificationsView = ({ onBack }: { onBack: () => void }) => {
  return (
    <div className="flex flex-col min-h-screen bg-brand-dark pb-24 relative overflow-hidden gaming-grid">
      <div className="scanline pointer-events-none" />
      
      {/* Header */}
      <div className="flex items-center justify-between p-6 bg-gradient-to-b from-brand-red/20 to-transparent relative z-10">
        <button onClick={onBack} className="p-3 bg-black/40 rounded-xl border border-brand-gold/20 hover:border-brand-gold transition-all active:scale-90">
          <ChevronLeft className="w-6 h-6 text-brand-gold" />
        </button>
        <div className="text-center">
          <h2 className="text-lg font-black uppercase tracking-tighter italic text-white">Comms Center</h2>
          <p className="text-[8px] font-black text-brand-red uppercase tracking-[0.3em] mt-0.5 animate-pulse">Encryption Active</p>
        </div>
        <div className="w-12" /> {/* Spacer */}
      </div>

      <div className="flex-1 overflow-y-auto p-6 relative z-10 no-scrollbar">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-brand-gold shadow-[0_0_5px_rgba(245,197,66,0.8)]" />
            <h3 className="text-[10px] font-black uppercase tracking-[0.3em] text-white/40">Incoming Transmission</h3>
          </div>
          <button className="text-[9px] font-black text-brand-gold uppercase tracking-widest border-b border-brand-gold/20 pb-0.5 hover:border-brand-gold transition-all">Clear Log</button>
        </div>

        <div className="space-y-2">
          <NotificationItem 
            icon={Heart} 
            color="text-brand-red" 
            title="Engagement Detected" 
            time="2m ago" 
            desc="King City Bullies liked your Titan card. Social standing increased." 
          />
          <NotificationItem 
            icon={MessageSquare} 
            color="text-blue-400" 
            title="Secure Message" 
            time="15m ago" 
            desc="Encrypted inquiry received regarding Venom's stud availability." 
          />
          <NotificationItem 
            icon={Star} 
            color="text-brand-gold" 
            title="Milestone Reached" 
            time="1h ago" 
            desc="Subject 'Titan' has surpassed 1,000 visual scans. Legendary status confirmed." 
          />
          <NotificationItem 
            icon={Bell} 
            color="text-brand-red" 
            title="System Alert" 
            time="3h ago" 
            desc="DNA verification protocols updated. High-fidelity genetic mapping online." 
          />
        </div>
      </div>
    </div>
  );
};
