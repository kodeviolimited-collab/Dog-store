'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'motion/react';
import { Filter, Search, LayoutGrid, List, ChevronDown, Flame, X } from 'lucide-react';
import { DogCard } from './DogCard';

export const MarketplaceView = () => {
  const [showFilters, setShowFilters] = useState(false);
  const [layout, setLayout] = useState<'grid' | 'list'>('grid');

  const marketplaceDogs = [
    { name: 'TITAN', bloodline: 'Venom Bloodline', type: 'Pocket', rarity: 'Legendary' as const, studFee: '$3,000', offspring: 24, score: 92, imageUrl: 'https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?auto=format&fit=crop&q=80&w=800&h=1200', breeder: 'V-Kennels' },
    { name: 'BELLA x VENOM', bloodline: 'Dax Bloodline', type: 'Standard', rarity: 'Elite' as const, studFee: '$8k-$10k', offspring: 12, score: 92, imageUrl: 'https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?auto=format&fit=crop&q=80&w=800&h=1200', breeder: 'Dax-Line' },
    { name: 'NOVA', bloodline: 'Muscletone Bloodline', type: 'Pocket', rarity: 'Rare' as const, studFee: '$2,500', offspring: 8, score: 89, imageUrl: 'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&q=80&w=800&h=1200', breeder: 'MT-Bullies' },
    { name: 'CHAOS', bloodline: 'Razors Edge', type: 'XL', rarity: 'Champion' as const, studFee: '$2,000', offspring: 15, score: 90, imageUrl: 'https://images.unsplash.com/photo-1598133894008-61f7fdb8cc3a?auto=format&fit=crop&q=80&w=800&h=1200', breeder: 'RE-Kennels' }
  ];

  return (
    <div className="flex flex-col pb-24 relative overflow-hidden gaming-grid hex-grid min-h-screen">
      <div className="digital-noise absolute inset-0 pointer-events-none" />
      <div className="scanline pointer-events-none" />
      
      {/* Search & Filters */}
      <div className="px-4 pt-6 flex flex-col gap-6 sticky top-16 z-40 bg-brand-dark/90 backdrop-blur-xl pb-6 border-b border-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.5)]">
        <div className="flex items-center justify-between">
          <div className="flex flex-col">
            <h2 className="text-2xl font-black uppercase tracking-tighter italic text-white neon-text-gold">Marketplace</h2>
            <span className="micro-label text-brand-gold/60">GLOBAL_TRADE_TERMINAL_V2.0</span>
          </div>
          <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-brand-gold/10 border border-brand-gold/20">
            <div className="w-1.5 h-1.5 rounded-full bg-brand-gold animate-ping" />
            <span className="text-[8px] font-black uppercase tracking-widest text-brand-gold">Live Feed</span>
          </div>
        </div>

        <div className="hud-frame p-1 rounded-xl metallic-border">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/20" />
            <input
              type="text"
              placeholder="Search by bloodline, type, or kennel..."
              className="w-full bg-white/5 border border-transparent rounded-lg py-3.5 pl-12 pr-4 text-[11px] font-black uppercase tracking-[0.2em] text-white focus:outline-none focus:bg-white/10 transition-all placeholder:text-white/20"
            />
          </div>
        </div>
        
        <div className="flex gap-2 overflow-x-auto no-scrollbar">
          {['All Units', 'Venom Bloodline', 'Dax Bloodline', 'Muscletone'].map((filter) => (
            <button 
              key={filter} 
              className={`flex-shrink-0 px-4 py-2 rounded-lg text-[9px] font-black uppercase tracking-widest transition-all ${
                filter === 'All Units' 
                  ? 'premium-gradient-gold text-black shadow-[0_0_15px_rgba(245,197,66,0.3)]' 
                  : 'bg-white/5 text-white/40 border border-white/5 hover:border-white/20'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        <div className="flex items-center justify-between">
          <div className="flex gap-2">
            <button 
              onClick={() => setLayout('grid')}
              className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all ${layout === 'grid' ? 'premium-gradient-gold text-black shadow-[0_0_15px_rgba(245,197,66,0.2)]' : 'bg-white/5 text-white/40 border border-white/5'}`}
            >
              <LayoutGrid className="w-4 h-4" />
            </button>
            <button 
              onClick={() => setLayout('list')}
              className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all ${layout === 'list' ? 'premium-gradient-gold text-black shadow-[0_0_15px_rgba(245,197,66,0.2)]' : 'bg-white/5 text-white/40 border border-white/5'}`}
            >
              <List className="w-4 h-4" />
            </button>
          </div>
          <button 
            onClick={() => setShowFilters(true)}
            className="flex items-center gap-3 px-6 py-2.5 rounded-xl bg-white/5 border border-white/10 text-[10px] font-black uppercase tracking-[0.3em] text-white/80 hover:border-brand-gold/50 hover:text-white transition-all"
          >
            Filters <Filter className="w-3 h-3 text-brand-gold" />
          </button>
        </div>
      </div>

      {/* Featured Listing */}
      <div className="px-4 mt-8 relative">
        <div className="hud-frame rounded-2xl overflow-hidden aspect-[16/9] metallic-border group shadow-[0_0_40px_rgba(245,197,66,0.1)]">
          <div className="hud-corner hud-tl" />
          <div className="hud-corner hud-tr" />
          <div className="hud-corner hud-bl" />
          <div className="hud-corner hud-br" />
          
          <div className="absolute top-4 left-6 z-20 flex flex-col gap-0.5">
            <span className="micro-label text-brand-gold/60">FEATURED_ASSET: 0X-BM</span>
            <span className="micro-label text-brand-gold/60">STATUS: TOP_STUD</span>
          </div>
          <Image
            src="https://images.unsplash.com/photo-1598133894008-61f7fdb8cc3a?auto=format&fit=crop&q=80&w=800&h=450"
            alt="Beast Mode"
            fill
            className="object-cover opacity-60 transition-transform duration-1000 group-hover:scale-105"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/40 to-transparent" />
          <div className="absolute top-4 right-4 flex items-center gap-2 px-3 py-1.5 rounded-lg bg-brand-gold/20 backdrop-blur-md border border-brand-gold/40">
            <Flame className="w-3 h-3 text-brand-gold fill-brand-gold animate-pulse" />
            <span className="text-[9px] font-black text-brand-gold uppercase tracking-[0.2em]">Elite Asset</span>
          </div>
          <div className="absolute bottom-6 left-6">
            <h3 className="text-3xl font-display font-black uppercase tracking-tighter italic text-white mb-1 neon-text-gold">BEAST MODE</h3>
            <p className="text-[10px] text-white/50 font-black uppercase tracking-[0.4em]">King City Bullies, Texas</p>
          </div>
          <div className="absolute bottom-6 right-6 text-right">
            <p className="text-xl font-black text-brand-gold tracking-tighter">$4,500</p>
            <p className="text-[8px] text-white/30 uppercase font-black tracking-widest">Stud Fee</p>
          </div>
        </div>
      </div>

      {/* Grid Listings */}
      <div className={`px-4 mt-8 grid gap-4 ${layout === 'grid' ? 'grid-cols-2' : 'grid-cols-1'}`}>
        {marketplaceDogs.map((dog) => (
          layout === 'grid' ? (
            <DogCard key={dog.name} {...dog} />
          ) : (
            <div key={dog.name} className="gaming-card p-3 flex gap-4 items-center">
              <div className="relative w-24 h-24 rounded-xl overflow-hidden border border-white/10 flex-shrink-0">
                <Image
                  src={dog.imageUrl}
                  alt={dog.name}
                  fill
                  className="object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-[8px] text-brand-gold font-bold uppercase tracking-widest mb-0.5">{dog.bloodline}</p>
                <h4 className="text-sm font-black uppercase tracking-tighter text-white truncate mb-1">{dog.name}</h4>
                <div className="flex items-center gap-3">
                  <div className="flex flex-col">
                    <span className="text-[7px] text-white/40 font-bold uppercase">Fee</span>
                    <span className="text-[10px] font-black text-white">{dog.studFee}</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[7px] text-white/40 font-bold uppercase">Score</span>
                    <span className="text-[10px] font-black text-brand-gold">{dog.score}</span>
                  </div>
                </div>
              </div>
              <button className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-[8px] font-black uppercase tracking-widest hover:bg-brand-gold hover:text-black transition-all">
                View
              </button>
            </div>
          )
        ))}
      </div>

      {/* Filter Drawer */}
      <AnimatePresence>
        {showFilters && (
          <>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowFilters(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[60]"
            />
            <motion.div 
              initial={{ y: '100%' }}
              animate={{ y: 0 }}
              exit={{ y: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed inset-x-0 bottom-0 z-[70] bg-brand-dark border-t border-white/10 rounded-t-[32px] p-8 max-w-md mx-auto"
            >
              <div className="w-12 h-1 bg-white/10 rounded-full mx-auto mb-8" />
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-black uppercase tracking-tighter italic">Filter Marketplace</h3>
                <button onClick={() => setShowFilters(false)} className="p-2 bg-white/5 rounded-full">
                  <X className="w-4 h-4 text-white/40" />
                </button>
              </div>
              
              <div className="space-y-8">
                <div>
                  <span className="text-[10px] font-black uppercase tracking-widest text-white/40 mb-4 block">Bloodline</span>
                  <div className="flex flex-wrap gap-2">
                    {['VENOM', 'DAX', 'MUSCLETONE', 'RAZORS EDGE'].map((r) => (
                      <button key={r} className="px-4 py-2 rounded-full border border-white/10 text-[8px] font-black uppercase tracking-widest hover:border-brand-gold hover:text-brand-gold transition-colors">
                        {r}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <span className="text-[10px] font-black uppercase tracking-widest text-white/40 mb-4 block">Price Range</span>
                  <div className="flex items-center gap-4">
                    <input type="text" placeholder="Min" className="flex-1 bg-white/5 border border-white/10 rounded-xl py-3 px-4 text-xs font-bold uppercase" />
                    <div className="w-2 h-[1px] bg-white/20" />
                    <input type="text" placeholder="Max" className="flex-1 bg-white/5 border border-white/10 rounded-xl py-3 px-4 text-xs font-bold uppercase" />
                  </div>
                </div>

                <button 
                  onClick={() => setShowFilters(false)}
                  className="w-full py-4 rounded-2xl bg-brand-gold text-black font-black uppercase tracking-widest text-xs shadow-[0_0_20px_rgba(245,197,66,0.2)]"
                >
                  Apply Filters
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};
