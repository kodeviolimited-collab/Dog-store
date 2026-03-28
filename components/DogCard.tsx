'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'motion/react';
import { Shield, Zap, Star, Info } from 'lucide-react';

interface DogCardProps {
  name: string;
  bloodline: string;
  type: string;
  rarity: 'Legendary' | 'Rare' | 'Elite' | 'Champion';
  studFee: string;
  offspring: number;
  score: number;
  imageUrl: string;
  breeder: string;
}

export const DogCard: React.FC<DogCardProps> = ({
  name,
  bloodline,
  type,
  rarity,
  studFee,
  offspring,
  score,
  imageUrl,
  breeder,
}) => {
  return (
    <motion.div
      whileHover={{ scale: 1.02, y: -5 }}
      className="gaming-card w-full group cursor-pointer"
    >
      {/* Image Section */}
      <div className="aspect-[4/5] relative overflow-hidden">
        <Image
          src={imageUrl}
          alt={name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
          referrerPolicy="no-referrer"
        />
        
        {/* Score Badge */}
        <div className="absolute top-2 left-2 w-8 h-8 rounded-full bg-black/80 border border-brand-gold/50 flex items-center justify-center backdrop-blur-sm z-10">
          <span className="text-[10px] font-black text-brand-gold">{score}</span>
        </div>

        {/* Rarity Badge */}
        <div className="absolute top-2 right-2">
          <div className="badge-slanted px-2 py-0.5 text-[7px] font-black italic">
            {rarity}
          </div>
        </div>

        {/* Bottom Overlay */}
        <div className="absolute bottom-0 inset-x-0 p-3 bg-gradient-to-t from-black via-black/40 to-transparent">
          <p className="text-[7px] text-brand-gold font-bold uppercase tracking-[0.2em] mb-0.5">
            {bloodline}
          </p>
          <h4 className="text-sm font-black uppercase tracking-tighter text-white truncate">
            {name}
          </h4>
        </div>
      </div>

      {/* Stats Section */}
      <div className="p-3 bg-gradient-to-b from-white/5 to-transparent border-t border-white/5">
        <div className="grid grid-cols-3 gap-1.5 mb-3">
          <div className="bg-white/5 rounded px-1 py-1.5 flex flex-col items-center justify-center border border-white/5">
            <span className="text-[6px] text-white/40 font-bold uppercase mb-0.5 tracking-tighter">FEE</span>
            <span className="text-[9px] font-black text-white">{studFee}</span>
          </div>
          <div className="bg-white/5 rounded px-1 py-1.5 flex flex-col items-center justify-center border border-white/5">
            <span className="text-[6px] text-white/40 font-bold uppercase mb-0.5 tracking-tighter">PUPS</span>
            <span className="text-[9px] font-black text-white">{offspring}</span>
          </div>
          <div className="bg-brand-red/10 rounded px-1 py-1.5 flex flex-col items-center justify-center border border-brand-red/20">
            <span className="text-[6px] text-brand-red/60 font-bold uppercase mb-0.5 tracking-tighter">TYPE</span>
            <span className="text-[9px] font-black text-brand-red truncate w-full text-center">{type}</span>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1.5">
            <div className="w-5 h-5 rounded-full bg-white/10 border border-white/20 overflow-hidden">
              <Image
                src={`https://picsum.photos/seed/${breeder}/50/50`}
                alt={breeder}
                width={20}
                height={20}
                className="object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <span className="text-[8px] font-bold text-white/60 uppercase truncate w-16">
              {breeder}
            </span>
          </div>
          <button className="px-3 py-1 rounded bg-brand-gold/10 border border-brand-gold/30 text-[8px] font-black uppercase tracking-widest text-brand-gold hover:bg-brand-gold hover:text-black transition-all">
            VIEW
          </button>
        </div>
      </div>
    </motion.div>
  );
};
