'use client';

import React, { useState } from 'react';
import { Header } from '@/components/Header';
import { MobileNav } from '@/components/MobileNav';
import { HomeView } from '@/components/HomeView';
import { MarketplaceView } from '@/components/MarketplaceView';
import { ProfileView } from '@/components/ProfileView';
import { ChampionsView } from '@/components/ChampionsView';
import { CreateCardView } from '@/components/CreateCardView';
import { CardDetailView } from '@/components/CardDetailView';
import { PedigreeView } from '@/components/PedigreeView';
import { DNAView } from '@/components/DNAView';
import { NotificationsView } from '@/components/NotificationsView';
import { WelcomeView } from '@/components/WelcomeView';
import { AuthView } from '@/components/AuthView';
import { motion, AnimatePresence } from 'motion/react';

export default function Home() {
  const [appState, setAppState] = useState<'welcome' | 'auth' | 'main'>('welcome');
  const [activeTab, setActiveTab] = useState('home');
  const [selectedDog, setSelectedDog] = useState<string | null>(null);
  const [viewingPedigree, setViewingPedigree] = useState(false);
  const [viewingDNA, setViewingDNA] = useState(false);
  const [viewingNotifications, setViewingNotifications] = useState(false);

  const renderContent = () => {
    if (appState === 'welcome') {
      return <WelcomeView onStart={() => setAppState('auth')} />;
    }

    if (appState === 'auth') {
      return <AuthView onAuthSuccess={() => setAppState('main')} onBack={() => setAppState('welcome')} />;
    }

    if (viewingNotifications) {
      return <NotificationsView onBack={() => setViewingNotifications(false)} />;
    }

    if (viewingDNA) {
      return <DNAView onBack={() => setViewingDNA(false)} />;
    }

    if (viewingPedigree) {
      return <PedigreeView onBack={() => setViewingPedigree(false)} />;
    }

    if (selectedDog) {
      return <CardDetailView onBack={() => setSelectedDog(null)} />;
    }

    switch (activeTab) {
      case 'home':
        return <HomeView />;
      case 'marketplace':
        return <MarketplaceView />;
      case 'profile':
        return <ProfileView />;
      case 'champions':
        return <ChampionsView />;
      case 'create':
        return <CreateCardView />;
      default:
        return <HomeView />;
    }
  };

  return (
    <div className="flex justify-center bg-black min-h-screen">
      {/* Mobile Container */}
      <div className="w-full max-w-md bg-brand-dark min-h-screen relative shadow-2xl overflow-x-hidden">
        {appState === 'main' && !selectedDog && !viewingPedigree && !viewingDNA && !viewingNotifications && (
          <Header onNotificationClick={() => setViewingNotifications(true)} />
        )}
        
        <main className="flex-1">
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedDog ? 'detail' : appState === 'main' ? activeTab : appState}
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -10 }}
              transition={{ duration: 0.2 }}
            >
              {renderContent()}
            </motion.div>
          </AnimatePresence>
        </main>

        {appState === 'main' && !selectedDog && (
          <MobileNav activeTab={activeTab} setActiveTab={setActiveTab} />
        )}

        {/* Global Demo Trigger - In a real app, clicking a card would set this */}
        {appState === 'main' && activeTab === 'home' && !selectedDog && !viewingPedigree && !viewingDNA && (
          <div className="fixed bottom-24 left-1/2 -translate-x-1/2 z-50 flex gap-3">
            <button 
              onClick={() => setSelectedDog('titan')}
              className="px-4 py-2 rounded-lg bg-black/60 backdrop-blur-md border border-brand-gold/40 text-[9px] font-black uppercase tracking-[0.2em] text-brand-gold hover:bg-brand-gold hover:text-black transition-all shadow-[0_0_15px_rgba(245,197,66,0.2)]"
            >
              Card
            </button>
            <button 
              onClick={() => setViewingPedigree(true)}
              className="px-4 py-2 rounded-lg bg-black/60 backdrop-blur-md border border-brand-red/40 text-[9px] font-black uppercase tracking-[0.2em] text-brand-red hover:bg-brand-red hover:text-white transition-all shadow-[0_0_15px_rgba(255,59,59,0.2)]"
            >
              Tree
            </button>
            <button 
              onClick={() => setViewingDNA(true)}
              className="px-4 py-2 rounded-lg bg-black/60 backdrop-blur-md border border-brand-gold/40 text-[9px] font-black uppercase tracking-[0.2em] text-brand-gold hover:bg-brand-gold hover:text-black transition-all shadow-[0_0_15px_rgba(245,197,66,0.2)]"
            >
              DNA
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
