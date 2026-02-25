import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Trash2, Plus, CreditCard } from 'lucide-react';

export const WalletCardItem = ({ card, onRemove }) => (
  <motion.div
    layout
    initial={{ opacity: 0, scale: 0.9 }}
    animate={{ opacity: 1, scale: 1 }}
    exit={{ opacity: 0, x: -100 }}
    className={`relative overflow-hidden p-5 rounded-[2rem] text-white shadow-lg h-44 flex flex-col justify-between ${card.color}`}
  >
    <div className="flex justify-between items-start z-10">
      <div>
        <p className="text-[10px] uppercase tracking-widest opacity-80">{card.bank}</p>
        <h3 className="text-lg font-bold">{card.name}</h3>
      </div>
      <button 
        onClick={() => onRemove(card.id)}
        className="p-2 bg-white/10 hover:bg-rose-500/40 rounded-full transition-colors backdrop-blur-md"
      >
        <Trash2 size={18} />
      </button>
    </div>
    
    <div className="z-10">
      <div className="flex justify-between items-center mt-2">
        <p className="text-[10px] opacity-80 uppercase">Exp: 12/28</p>
        <CreditCard size={24} className="opacity-50" />
      </div>
    </div>
  </motion.div>
);