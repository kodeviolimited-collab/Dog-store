'use client';

import React, { useState } from 'react';
import { Camera, Upload, Plus, Info, ChevronRight } from 'lucide-react';

export const CreateCardView = () => {
  const [step, setStep] = useState(1);

  return (
    <div className="flex flex-col min-h-screen bg-brand-dark pb-24 relative overflow-hidden gaming-grid">
      <div className="scanline pointer-events-none" />
      
      {/* Header */}
      <div className="p-8 bg-gradient-to-b from-brand-red/20 to-transparent relative z-10">
        <h2 className="text-2xl font-black uppercase tracking-tighter italic text-white">Card Forge</h2>
        <p className="text-[10px] text-white/40 font-black uppercase tracking-[0.2em] mt-1">Initialize DNA Sequence</p>
        
        <div className="flex gap-3 mt-6">
          {[1, 2, 3].map((s) => (
            <div key={s} className="flex-1 flex flex-col gap-2">
              <div 
                className={`h-1.5 rounded-full transition-all duration-700 relative overflow-hidden ${
                  s <= step ? 'bg-brand-gold shadow-[0_0_10px_rgba(245,197,66,0.5)]' : 'bg-white/10'
                }`}
              >
                {s === step && (
                  <div className="absolute inset-0 bg-white/40 animate-pulse" />
                )}
              </div>
              <span className={`text-[8px] font-black uppercase tracking-widest text-center ${
                s <= step ? 'text-brand-gold' : 'text-white/20'
              }`}>
                Step 0{s}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="flex-1 overflow-y-auto p-6 relative z-10 no-scrollbar">
        {step === 1 && (
          <div className="space-y-8 animate-in fade-in slide-in-from-bottom-6 duration-700">
            <div className="text-center">
              <h3 className="text-sm font-black uppercase tracking-[0.2em] text-white mb-2">Visual Input</h3>
              <p className="text-[9px] text-white/40 font-bold uppercase tracking-widest leading-relaxed">High-resolution scans required for optimal results</p>
            </div>

            <div className="aspect-[3/4] rounded-3xl border-2 border-dashed border-brand-gold/20 bg-black/40 flex flex-col items-center justify-center gap-6 group hover:border-brand-gold/60 transition-all cursor-pointer relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-brand-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="w-20 h-20 rounded-full bg-brand-gold/10 flex items-center justify-center group-hover:scale-110 transition-transform relative">
                <div className="absolute inset-0 rounded-full border border-brand-gold/20 animate-ping" />
                <Camera className="w-10 h-10 text-brand-gold drop-shadow-[0_0_8px_rgba(245,197,66,0.5)]" />
              </div>
              <div className="text-center relative z-10">
                <p className="text-xs font-black uppercase tracking-[0.2em] text-white">Activate Scanner</p>
                <p className="text-[9px] text-white/30 font-bold uppercase mt-2 tracking-widest">or browse local database</p>
              </div>
              
              {/* Decorative corners */}
              <div className="absolute top-4 left-4 w-4 h-4 border-t-2 border-l-2 border-brand-gold/40" />
              <div className="absolute top-4 right-4 w-4 h-4 border-t-2 border-r-2 border-brand-gold/40" />
              <div className="absolute bottom-4 left-4 w-4 h-4 border-b-2 border-l-2 border-brand-gold/40" />
              <div className="absolute bottom-4 right-4 w-4 h-4 border-b-2 border-r-2 border-brand-gold/40" />
            </div>

            <div className="gaming-card p-5 flex gap-4 items-start bg-brand-red/5 border-brand-red/20">
              <Info className="w-6 h-6 text-brand-red shrink-0" />
              <p className="text-[10px] text-white/70 font-bold leading-relaxed uppercase tracking-wide">
                Neural networks will automatically isolate the subject and apply high-fidelity visual enhancements.
              </p>
            </div>

            <button 
              onClick={() => setStep(2)}
              className="w-full py-5 rounded-2xl bg-brand-gold text-black font-black uppercase tracking-[0.2em] text-xs flex items-center justify-center gap-3 shadow-[0_0_20px_rgba(245,197,66,0.3)] active:scale-95 transition-all"
            >
              Proceed to Metadata
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        )}

        {step === 2 && (
          <div className="space-y-8 animate-in fade-in slide-in-from-right-6 duration-700">
            <div className="space-y-6">
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-[0.2em] text-brand-gold ml-1">Subject Designation</label>
                <input 
                  type="text" 
                  placeholder="e.g. TITAN"
                  className="w-full bg-black/40 border border-white/10 rounded-xl py-5 px-5 text-xs font-black uppercase tracking-widest text-white focus:outline-none focus:border-brand-gold/50 transition-all"
                />
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-[0.2em] text-brand-gold ml-1">Genetic Lineage</label>
                <div className="relative">
                  <select className="w-full bg-black/40 border border-white/10 rounded-xl py-5 px-5 text-xs font-black uppercase tracking-widest text-white focus:outline-none focus:border-brand-gold/50 appearance-none transition-all">
                    <option>DAX LINE</option>
                    <option>MUSCLETONE</option>
                    <option>RAZORS EDGE</option>
                    <option>BULLY CAMP</option>
                  </select>
                  <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none">
                    <ChevronRight className="w-4 h-4 text-brand-gold rotate-90" />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-[0.2em] text-brand-gold ml-1">Cycle Count</label>
                  <input type="text" placeholder="2.5 YRS" className="w-full bg-black/40 border border-white/10 rounded-xl py-5 px-5 text-xs font-black uppercase tracking-widest text-white focus:outline-none focus:border-brand-gold/50 transition-all" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-[0.2em] text-brand-gold ml-1">Mass Index</label>
                  <input type="text" placeholder="85 LBS" className="w-full bg-black/40 border border-white/10 rounded-xl py-5 px-5 text-xs font-black uppercase tracking-widest text-white focus:outline-none focus:border-brand-gold/50 transition-all" />
                </div>
              </div>
            </div>

            <div className="space-y-4 pt-4">
              <button 
                onClick={() => setStep(3)}
                className="w-full py-5 rounded-2xl bg-brand-gold text-black font-black uppercase tracking-[0.2em] text-xs flex items-center justify-center gap-3 shadow-[0_0_20px_rgba(245,197,66,0.3)] active:scale-95 transition-all"
              >
                Initiate Synthesis
                <Plus className="w-5 h-5" />
              </button>
              <button 
                onClick={() => setStep(1)}
                className="w-full py-5 rounded-2xl bg-white/5 text-white/40 font-black uppercase tracking-[0.2em] text-xs active:scale-95 transition-all border border-white/5"
              >
                Abort Sequence
              </button>
            </div>
          </div>
        )}

        {step === 3 && (
          <div className="flex flex-col items-center justify-center gap-10 py-12 animate-in zoom-in duration-1000">
            <div className="relative w-64 aspect-[3/4] rounded-3xl overflow-hidden border-4 border-brand-gold shadow-[0_0_50px_rgba(245,197,66,0.5)] bg-black">
              <div className="absolute inset-0 bg-brand-dark flex items-center justify-center">
                <div className="flex flex-col items-center gap-6">
                  <div className="relative">
                    <div className="w-20 h-20 border-4 border-brand-gold border-t-transparent rounded-full animate-spin" />
                    <div className="absolute inset-0 w-20 h-20 border-4 border-brand-red border-b-transparent rounded-full animate-spin-slow opacity-40" />
                  </div>
                  <div className="text-center">
                    <p className="text-[11px] font-black uppercase tracking-[0.4em] text-brand-gold animate-pulse">Forging...</p>
                    <p className="text-[8px] font-bold uppercase tracking-widest text-white/20 mt-2">Neural Link Active</p>
                  </div>
                </div>
              </div>
              
              {/* Scanline effect over the card */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-brand-gold/10 to-transparent h-20 w-full animate-scan-slow opacity-40" />
            </div>
            
            <div className="text-center space-y-3">
              <h3 className="text-2xl font-black uppercase tracking-tighter italic text-white">Synthesis Active</h3>
              <p className="text-[10px] text-white/40 font-black uppercase tracking-[0.2em]">Applying Legendary Holographic Matrix</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
