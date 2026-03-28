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
    { name: 'TITAN', bloodline: 'Venom Bloodline', type: 'Pocket', rarity: 'Legendary' as const, studFee: '$3,000', offspring: 24, score: 92, imageUrl: 'https://picsum.photos/seed/market-titan/400/600', breeder: 'V-Kennels' },
    { name: 'BELLA x VENOM', bloodline: 'Dax Bloodline', type: 'Standard', rarity: 'Elite' as const, studFee: '$8k-$10k', offspring: 12, score: 92, imageUrl: 'https://picsum.photos/seed/market-bella/400/600', breeder: 'Dax-Line' },
    { name: 'NOVA', bloodline: 'Muscletone Bloodline', type: 'Pocket', rarity: 'Rare' as const, studFee: '$2,500', offspring: 8, score: 89, imageUrl: 'https://picsum.photos/seed/market-nova/400/600', breeder: 'MT-Bullies' },
    { name: 'CHAOS', bloodline: 'Razors Edge', type: 'XL', rarity: 'Champion' as const, studFee: '$2,000', offspring: 15, score: 90, imageUrl: 'https://picsum.photos/seed/market-chaos/400/600', breeder: 'RE-Kennels' }
  ];

  return (
    <div className="flex flex-col pb-24 relative overflow-hidden gaming-grid min-h-screen">
      <div className="scanline pointer-events-none" />
      
      {/* Search & Filters */}
      <div className="px-4 pt-4 flex flex-col gap-4 sticky top-16 z-40 bg-brand-dark/80 backdrop-blur-md pb-4 border-b border-white/5">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40" />
          <input
            type="text"
            placeholder="Search marketplace..."
            className="w-full bg-white/5 border border-white/10 rounded-xl py-2.5 pl-10 pr-4 text-sm focus:outline-none focus:border-brand-gold/50 transition-all"
          />
        </div>
        
        <div className="flex gap-2 overflow-x-auto no-scrollbar">
          {['All Breeds', 'Venom Bloodline', 'Any Location', 'Price Range'].map((filter) => (
            <button key={filter} className="flex-shrink-0 flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-[10px] font-bold text-white/60 whitespace-nowrap">
              {filter} <ChevronDown className="w-3 h-3" />
            </button>
          ))}
        </div>

        <div className="flex items-center justify-between">
          <div className="flex gap-2">
            <button 
              onClick={() => setLayout('grid')}
              className={`p-2 rounded-lg transition-colors ${layout === 'grid' ? 'bg-brand-gold text-black' : 'bg-white/5 text-white/40'}`}
            >
              <LayoutGrid className="w-4 h-4" />
            </button>
            <button 
              onClick={() => setLayout('list')}
              className={`p-2 rounded-lg transition-colors ${layout === 'list' ? 'bg-brand-gold text-black' : 'bg-white/5 text-white/40'}`}
            >
              <List className="w-4 h-4" />
            </button>
          </div>
          <button 
            onClick={() => setShowFilters(true)}
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-[10px] font-black uppercase tracking-widest hover:border-brand-gold/50 transition-colors"
          >
            Filters <Filter className="w-3 h-3" />
          </button>
        </div>
      </div>

      {/* Featured Listing */}
      <div className="px-4 mt-6">
        <div className="relative rounded-2xl overflow-hidden aspect-[16/9] border border-brand-gold/30 group">
          <Image
            src="https://picsum.photos/seed/beastmode/800/450"
            alt="Beast Mode"
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
          <div className="absolute top-3 left-3 flex items-center gap-1.5 px-2 py-1 rounded bg-brand-gold/20 backdrop-blur-md border border-brand-gold/40">
            <Flame className="w-3 h-3 text-brand-gold fill-brand-gold" />
            <span className="text-[8px] font-black text-brand-gold uppercase tracking-widest">Top Stud This Month</span>
          </div>
          <div className="absolute bottom-4 left-4">
            <h3 className="text-2xl font-display font-black uppercase tracking-tighter italic text-white mb-0.5">BEAST MODE</h3>
            <p className="text-[9px] text-white/60 font-bold uppercase tracking-widest">King City Bullies, Texas</p>
          </div>
          <div className="absolute bottom-4 right-4 text-right">
            <p className="text-xs font-black text-brand-gold">$4,500</p>
            <p className="text-[8px] text-white/40 uppercase font-bold">Stud Fee</p>
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
