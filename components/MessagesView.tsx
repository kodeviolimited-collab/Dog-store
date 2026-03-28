'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowLeft, Search, MoreVertical, Send, CheckCheck, Phone, Video, Info, ShieldCheck } from 'lucide-react';

interface Message {
  id: string;
  text: string;
  sender: 'me' | 'them';
  timestamp: string;
  status?: 'sent' | 'delivered' | 'read';
}

interface Conversation {
  id: string;
  name: string;
  avatar: string;
  lastMessage: string;
  timestamp: string;
  unreadCount: number;
  online: boolean;
  verified: boolean;
  messages: Message[];
}

const MOCK_CONVERSATIONS: Conversation[] = [
  {
    id: '1',
    name: 'Royal Bully Camp',
    avatar: 'https://images.unsplash.com/photo-1518717758536-85ae29035b6d?auto=format&fit=crop&q=80&w=100&h=100',
    lastMessage: 'The pedigree for Titan is ready for review.',
    timestamp: '2m ago',
    unreadCount: 3,
    online: true,
    verified: true,
    messages: [
      { id: '1', text: 'Hello! I saw your interest in Titan.', sender: 'them', timestamp: '10:00 AM' },
      { id: '2', text: 'Yes, I am looking for a stud with strong structure.', sender: 'me', timestamp: '10:05 AM' },
      { id: '3', text: 'Titan is perfect for that. I can send over the DNA report.', sender: 'them', timestamp: '10:06 AM' },
      { id: '4', text: 'The pedigree for Titan is ready for review.', sender: 'them', timestamp: '10:07 AM' },
    ]
  },
  {
    id: '2',
    name: 'Iron Jaw Kennels',
    avatar: 'https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?auto=format&fit=crop&q=80&w=100&h=100',
    lastMessage: 'Let me know when you want to schedule the visit.',
    timestamp: '1h ago',
    unreadCount: 0,
    online: false,
    verified: true,
    messages: []
  },
  {
    id: '3',
    name: 'Elite Bully Source',
    avatar: 'https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?auto=format&fit=crop&q=80&w=100&h=100',
    lastMessage: 'We have a new litter arriving next week!',
    timestamp: '3h ago',
    unreadCount: 0,
    online: true,
    verified: false,
    messages: []
  }
];

interface MessagesViewProps {
  onBack: () => void;
}

export const MessagesView: React.FC<MessagesViewProps> = ({ onBack }) => {
  const [selectedChat, setSelectedChat] = useState<Conversation | null>(null);
  const [messageInput, setMessageInput] = useState('');

  const handleSendMessage = () => {
    if (!messageInput.trim() || !selectedChat) return;
    // In a real app, we'd update the state or send to a server
    setMessageInput('');
  };

  return (
    <div className="flex flex-col h-screen bg-brand-dark relative overflow-hidden gaming-grid">
      <div className="scanline pointer-events-none" />

      <AnimatePresence mode="wait">
        {!selectedChat ? (
          <motion.div 
            key="list"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="flex flex-col h-full"
          >
            {/* Header */}
            <header className="px-6 py-8 border-b border-white/10 bg-brand-dark/90 backdrop-blur-xl shadow-[0_10px_30px_rgba(0,0,0,0.5)]">
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-5">
                  <button onClick={onBack} className="w-12 h-12 flex items-center justify-center bg-white/5 rounded-xl border border-white/10 hover:border-brand-gold/40 transition-all group">
                    <ArrowLeft className="w-6 h-6 text-white/60 group-hover:text-brand-gold" />
                  </button>
                  <div className="flex flex-col">
                    <h2 className="text-3xl font-black uppercase tracking-tighter italic text-white neon-text-gold">Comms Hub</h2>
                    <span className="micro-label text-brand-gold/60">ENCRYPTED_CHANNEL: RBC-SECURE-V4</span>
                  </div>
                </div>
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-brand-red/10 border border-brand-red/20">
                  <div className="w-2 h-2 rounded-full bg-brand-red animate-pulse shadow-[0_0_10px_rgba(230,30,30,0.8)]" />
                  <span className="text-[9px] font-black uppercase tracking-[0.3em] text-brand-red">Secure</span>
                </div>
              </div>

              <div className="hud-frame p-1 rounded-xl metallic-border">
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/20" />
                  <input 
                    type="text" 
                    placeholder="Search encrypted channels..."
                    className="w-full bg-white/5 border border-transparent rounded-lg py-3.5 pl-12 pr-4 text-[11px] font-black uppercase tracking-[0.2em] text-white focus:outline-none focus:bg-white/10 transition-all placeholder:text-white/20"
                  />
                </div>
              </div>
            </header>

            {/* Conversation List */}
            <div className="flex-1 overflow-y-auto px-4 py-8 no-scrollbar">
              <div className="space-y-4">
                {MOCK_CONVERSATIONS.map((chat) => (
                  <motion.div
                    key={chat.id}
                    whileHover={{ y: -2 }}
                    onClick={() => setSelectedChat(chat)}
                    className="gaming-card p-5 flex items-center gap-5 cursor-pointer relative group overflow-hidden"
                  >
                    <div className="relative">
                      <div className="w-16 h-16 rounded-2xl border border-white/10 overflow-hidden relative shadow-lg">
                        <Image 
                          src={chat.avatar} 
                          alt={chat.name} 
                          fill 
                          className="object-cover group-hover:scale-110 transition-transform duration-700"
                          referrerPolicy="no-referrer"
                        />
                      </div>
                      {chat.online && (
                        <div className="absolute -bottom-1 -right-1 w-5 h-5 rounded-lg bg-brand-gold border-2 border-brand-dark shadow-[0_0_12px_rgba(245,197,66,0.6)]" />
                      )}
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between mb-1.5">
                        <div className="flex items-center gap-2">
                          <h4 className="text-[14px] font-black uppercase tracking-tighter text-white truncate">{chat.name}</h4>
                          {chat.verified && <ShieldCheck className="w-3.5 h-3.5 text-brand-gold" />}
                        </div>
                        <span className="text-[9px] font-black text-white/20 uppercase tracking-widest">{chat.timestamp}</span>
                      </div>
                      <p className="text-[11px] text-white/40 font-medium truncate italic tracking-tight">&quot;{chat.lastMessage}&quot;</p>
                    </div>

                    {chat.unreadCount > 0 && (
                      <div className="w-6 h-6 rounded-lg premium-gradient-red flex items-center justify-center shadow-[0_0_15px_rgba(230,30,30,0.4)]">
                        <span className="text-[10px] font-black text-white">{chat.unreadCount}</span>
                      </div>
                    )}

                    <div className="absolute top-0 left-0 w-1.5 h-full bg-brand-gold opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        ) : (
          <motion.div 
            key="chat"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            className="flex flex-col h-full"
          >
            {/* Chat Header */}
            <header className="px-6 py-8 border-b border-white/10 bg-brand-dark/90 backdrop-blur-xl flex items-center justify-between shadow-2xl relative z-50">
              <div className="flex items-center gap-5">
                <button onClick={() => setSelectedChat(null)} className="w-12 h-12 flex items-center justify-center bg-white/5 rounded-xl border border-white/10 hover:border-brand-gold/40 transition-all group">
                  <ArrowLeft className="w-6 h-6 text-white/60 group-hover:text-brand-gold" />
                </button>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl border border-white/10 overflow-hidden relative shadow-lg">
                    <Image 
                      src={selectedChat.avatar} 
                      alt={selectedChat.name} 
                      fill 
                      className="object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div>
                    <h4 className="text-[14px] font-black uppercase tracking-tighter text-white neon-text-gold">{selectedChat.name}</h4>
                    <div className="flex items-center gap-2">
                      <div className={`w-2 h-2 rounded-full ${selectedChat.online ? 'bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.6)] animate-pulse' : 'bg-white/20'}`} />
                      <span className="text-[9px] font-black text-white/40 uppercase tracking-widest">
                        {selectedChat.online ? 'Channel Active' : 'Offline'}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <button className="w-11 h-11 flex items-center justify-center bg-white/5 rounded-xl border border-white/10 hover:border-brand-gold/40 transition-all group">
                  <Phone className="w-5 h-5 text-white/60 group-hover:text-brand-gold" />
                </button>
                <button className="w-11 h-11 flex items-center justify-center bg-white/5 rounded-xl border border-white/10 hover:border-brand-gold/40 transition-all group">
                  <MoreVertical className="w-5 h-5 text-white/60 group-hover:text-brand-gold" />
                </button>
              </div>
            </header>

            {/* Messages Area */}
            <div className="flex-1 overflow-y-auto px-6 py-10 space-y-8 no-scrollbar bg-brand-dark/40">
              <div className="flex justify-center mb-10">
                <div className="px-5 py-2 rounded-lg bg-white/5 border border-white/10 backdrop-blur-sm">
                  <span className="text-[9px] font-black text-white/30 uppercase tracking-[0.3em] italic">Today - Encrypted Transmission Established</span>
                </div>
              </div>

              {selectedChat.messages.map((msg) => (
                <div 
                  key={msg.id} 
                  className={`flex ${msg.sender === 'me' ? 'justify-end' : 'justify-start'}`}
                >
                  <div className={`max-w-[80%] relative flex flex-col ${msg.sender === 'me' ? 'items-end' : 'items-start'}`}>
                    <div className={`p-5 rounded-2xl text-[13px] font-medium leading-relaxed tracking-tight relative overflow-hidden ${
                      msg.sender === 'me' 
                        ? 'bg-brand-gold text-black rounded-tr-none shadow-[0_0_25px_rgba(245,197,66,0.15)]' 
                        : 'bg-white/5 border border-white/10 text-white rounded-tl-none backdrop-blur-sm'
                    }`}>
                      {msg.sender === 'me' && <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-br from-white/20 to-transparent pointer-events-none" />}
                      <span className="relative z-10">{msg.text}</span>
                    </div>
                    <div className={`flex items-center gap-2 mt-2.5 ${msg.sender === 'me' ? 'justify-end' : 'justify-start'}`}>
                      <span className="text-[9px] font-black text-white/20 uppercase tracking-widest">{msg.timestamp}</span>
                      {msg.sender === 'me' && <CheckCheck className="w-3.5 h-3.5 text-brand-gold" />}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Input Area */}
            <div className="p-8 bg-brand-dark/95 backdrop-blur-2xl border-t border-white/10 relative z-50">
              <div className="flex items-center gap-4 max-w-5xl mx-auto">
                <div className="flex-1 relative hud-frame p-1 rounded-2xl metallic-border">
                  <input 
                    type="text" 
                    value={messageInput}
                    onChange={(e) => setMessageInput(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                    placeholder="Transmit encrypted data..."
                    className="w-full bg-white/5 border border-transparent rounded-xl py-4.5 pl-6 pr-14 text-[12px] font-black uppercase tracking-[0.1em] text-white focus:outline-none focus:bg-white/10 transition-all placeholder:text-white/20"
                  />
                  <button className="absolute right-4 top-1/2 -translate-y-1/2 p-2 text-white/20 hover:text-brand-gold transition-colors">
                    <PlusSquare className="w-6 h-6" />
                  </button>
                </div>
                <button 
                  onClick={handleSendMessage}
                  className="w-16 h-16 rounded-2xl premium-gradient-gold flex items-center justify-center shadow-[0_0_30px_rgba(245,197,66,0.3)] active:scale-95 transition-all group"
                >
                  <Send className="w-7 h-7 text-black group-hover:scale-110 transition-transform" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

import { PlusSquare } from 'lucide-react';
