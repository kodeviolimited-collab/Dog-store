'use client';

import React, { useRef } from 'react';
import Image from 'next/image';
import { motion, useMotionValue, useTransform, useSpring } from 'motion/react';
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
  const cardRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const rarityColor = rarity === 'Legendary' ? 'brand-gold' : rarity === 'Elite' ? 'brand-red' : 'white';

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      whileHover={{ scale: 1.02 }}
      className="gaming-card w-full group cursor-pointer relative perspective-1000 overflow-hidden"
    >
      <div className="digital-noise absolute inset-0 z-0 pointer-events-none" />
      
      {/* Corner Brackets (Hijibiji) */}
      <div className="corner-bracket corner-tl group-hover:scale-110 transition-transform z-20" />
      <div className="corner-bracket corner-tr group-hover:scale-110 transition-transform z-20" />
      <div className="corner-bracket corner-bl group-hover:scale-110 transition-transform z-20" />
      <div className="corner-bracket corner-br group-hover:scale-110 transition-transform z-20" />

      {/* Glowing Border Overlay */}
      <div className="absolute -inset-[1px] rounded-xl bg-gradient-to-br from-brand-gold/0 via-brand-gold/0 to-brand-gold/0 group-hover:from-brand-gold/40 group-hover:via-brand-red/20 group-hover:to-brand-gold/40 transition-all duration-500 -z-10 blur-[2px]" />
      
      {/* Image Section */}
      <div className="aspect-[4/5] relative overflow-hidden rounded-t-xl" style={{ transform: "translateZ(20px)" }}>
        <Image
          src={imageUrl}
          alt={name}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110 group-hover:rotate-1"
          referrerPolicy="no-referrer"
        />
        
        {/* Scanning Brackets (Hijibiji) */}
        <div className="absolute inset-4 border border-white/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-10">
          <div className="absolute top-0 left-0 w-3 h-3 border-t border-l border-brand-gold/60" />
          <div className="absolute top-0 right-0 w-3 h-3 border-t border-r border-brand-gold/60" />
          <div className="absolute bottom-0 left-0 w-3 h-3 border-b border-l border-brand-gold/60" />
          <div className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-brand-gold/60" />
          <div className="scanline-fast" />
        </div>

        {/* Micro-Labels (Hijibiji) */}
        <div className="absolute bottom-12 left-3 flex flex-col gap-0.5 z-20 opacity-0 group-hover:opacity-100 transition-opacity">
          <span className="micro-label text-brand-gold/80">DNA_STATUS: VERIFIED</span>
          <span className="micro-label text-brand-gold/80">GEN_ID: {score}X-BLLN</span>
        </div>

        {/* Scanline Effect */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/5 to-transparent h-20 w-full -translate-y-full group-hover:animate-scan-slow opacity-0 group-hover:opacity-30 pointer-events-none" />

        {/* Score Badge */}
        <div className="absolute top-2 left-2 w-8 h-8 rounded-full bg-black/80 border border-brand-gold/50 flex items-center justify-center backdrop-blur-sm z-10 shadow-[0_0_10px_rgba(245,197,66,0.2)]">
          <span className="text-[10px] font-black text-brand-gold">{score}</span>
        </div>

        {/* Rarity Badge */}
        <div className="absolute top-2 right-2" style={{ transform: "translateZ(30px)" }}>
          <div className="badge-slanted px-2 py-0.5 text-[7px] font-black italic shadow-lg">
            {rarity}
          </div>
        </div>

        {/* Bottom Overlay */}
        <div className="absolute bottom-0 inset-x-0 p-3 bg-gradient-to-t from-black via-black/60 to-transparent" style={{ transform: "translateZ(25px)" }}>
          <p className={`text-[7px] text-${rarityColor} font-bold uppercase tracking-[0.2em] mb-0.5 drop-shadow-sm`}>
            {bloodline}
          </p>
          <h4 className="text-sm font-black uppercase tracking-tighter text-white truncate drop-shadow-md">
            {name}
          </h4>
        </div>
      </div>

      {/* Stats Section */}
      <div className="p-3 bg-gradient-to-b from-white/5 to-transparent border-t border-white/5 rounded-b-xl" style={{ transform: "translateZ(10px)" }}>
        <div className="grid grid-cols-3 gap-1.5 mb-3">
          <div className="bg-white/5 rounded px-1 py-1.5 flex flex-col items-center justify-center border border-white/5 group-hover:border-white/10 transition-colors">
            <span className="text-[6px] text-white/40 font-bold uppercase mb-0.5 tracking-tighter">FEE</span>
            <span className="text-[9px] font-black text-white">{studFee}</span>
          </div>
          <div className="bg-white/5 rounded px-1 py-1.5 flex flex-col items-center justify-center border border-white/5 group-hover:border-white/10 transition-colors">
            <span className="text-[6px] text-white/40 font-bold uppercase mb-0.5 tracking-tighter">PUPS</span>
            <span className="text-[9px] font-black text-white">{offspring}</span>
          </div>
          <div className="bg-brand-red/10 rounded px-1 py-1.5 flex flex-col items-center justify-center border border-brand-red/20 group-hover:border-brand-red/40 transition-colors">
            <span className="text-[6px] text-brand-red/60 font-bold uppercase mb-0.5 tracking-tighter">TYPE</span>
            <span className="text-[9px] font-black text-brand-red truncate w-full text-center">{type}</span>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1.5">
            <div className="w-5 h-5 rounded-full bg-white/10 border border-white/20 overflow-hidden shadow-inner">
              <Image
                src="https://images.unsplash.com/photo-1518717758536-85ae29035b6d?auto=format&fit=crop&q=80&w=50&h=50"
                alt={breeder}
                width={20}
                height={20}
                className="object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <span className="text-[8px] font-bold text-white/60 uppercase truncate w-16 group-hover:text-white/80 transition-colors">
              {breeder}
            </span>
          </div>
          <button className="px-3 py-1 rounded bg-brand-gold/10 border border-brand-gold/30 text-[8px] font-black uppercase tracking-widest text-brand-gold hover:bg-brand-gold hover:text-black transition-all shadow-[0_0_10px_rgba(245,197,66,0.1)] hover:shadow-[0_0_15px_rgba(245,197,66,0.3)]">
            VIEW
          </button>
        </div>
      </div>
    </motion.div>
  );
};
