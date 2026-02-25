import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Zap, Trash2, LayoutGrid, X } from 'lucide-react';

export default function Wallet() {
  const [cards, setCards] = useState([
    { id: 1, bank: "Santander", name: "LikeU", color: "bg-gradient-to-br from-[#2563eb] to-[#1e40af]" },
    { id: 2, bank: "BBVA", name: "Azul", color: "bg-gradient-to-br from-[#0f172a] to-[#1e293b]" }
  ]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newCard, setNewCard] = useState({ bank: '', name: '' });

  const addCard = () => {
    if (newCard.bank && newCard.name) {
      setCards([...cards, { ...newCard, id: Date.now(), color: "bg-gradient-to-br from-slate-700 to-slate-900" }]);
      setIsModalOpen(false);
      setNewCard({ bank: '', name: '' });
    }
  };

  return (
    <motion.div 
      layoutId="blue-surface"
      transition={{ layout: { duration: 0.4, ease: [0.22, 1, 0.36, 1] } }}
      style={{ borderRadius: "0px 0px 50px 50px", overflow: 'hidden' }}
      className="min-h-screen bg-gradient-to-br from-[#1e3a8a] via-[#2563eb] to-[#0ea5e9] text-white"
    >
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="pt-16 px-6 max-w-xl mx-auto pb-40">
        <div className="flex justify-between items-center mb-10">
          <h1 className="text-3xl font-black tracking-tighter">Mi Wallet</h1>
          <button 
            onClick={() => setIsModalOpen(true)}
            className="p-4 bg-white/15 rounded-2xl backdrop-blur-2xl border border-white/20 active:scale-90 transition-transform"
          >
            <Plus size={24} strokeWidth={3} />
          </button>
        </div>

        <div className="space-y-6">
          <AnimatePresence mode="popLayout">
            {cards.map(card => (
              <motion.div
                key={card.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, x: -100 }}
                className={`relative p-7 rounded-[2.5rem] h-48 flex flex-col justify-between shadow-2xl ${card.color}`}
              >
                <div className="flex justify-between items-start">
                   <div className="bg-white/15 px-3 py-1 rounded-full text-[9px] font-black uppercase tracking-widest">{card.bank}</div>
                   <button onClick={() => setCards(cards.filter(c => c.id !== card.id))} className="p-2.5 bg-black/10 hover:bg-rose-500 rounded-2xl transition-colors">
                     <Trash2 size={18} />
                   </button>
                </div>
                <div className="mt-auto"><h3 className="text-2xl font-black mb-1">{card.name}</h3></div>
              </motion.div>
            ))}
          </AnimatePresence>

          <div className="bg-white p-7 rounded-[2.5rem] flex items-center justify-between shadow-xl">
             <div className="flex items-center gap-5">
                <div className="p-4 bg-blue-50 rounded-[1.5rem] text-blue-600">
                   <Zap size={28} fill="currentColor" />
                </div>
                <div className="text-slate-900">
                   <p className="text-slate-400 text-[10px] font-black uppercase tracking-widest">Total Cashback</p>
                   <h4 className="text-2xl font-black">$1,245.50</h4>
                </div>
             </div>
             <LayoutGrid className="text-slate-200" size={24} />
          </div>
        </div>
      </motion.div>

      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-[110] flex items-center justify-center p-6">
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setIsModalOpen(false)} className="absolute inset-0 bg-black/40 backdrop-blur-sm" />
            <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.9, opacity: 0 }} className="relative bg-white w-full max-w-sm rounded-[2.5rem] p-8 shadow-2xl text-slate-900">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-black tracking-tight">Nueva Tarjeta</h2>
                <button onClick={() => setIsModalOpen(false)} className="p-2 bg-slate-100 rounded-full"><X size={20} /></button>
              </div>
              <div className="space-y-4">
                <input type="text" placeholder="Banco" className="w-full bg-slate-50 border-none rounded-2xl p-4 focus:ring-2 focus:ring-blue-500 outline-none font-bold text-sm" onChange={(e) => setNewCard({...newCard, bank: e.target.value})} />
                <input type="text" placeholder="Nombre de la Tarjeta" className="w-full bg-slate-50 border-none rounded-2xl p-4 focus:ring-2 focus:ring-blue-500 outline-none font-bold text-sm" onChange={(e) => setNewCard({...newCard, name: e.target.value})} />
                <button onClick={addCard} className="w-full bg-blue-600 text-white font-black py-4 rounded-2xl shadow-lg shadow-blue-200 active:scale-95 transition-transform mt-4">Guardar Tarjeta</button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}