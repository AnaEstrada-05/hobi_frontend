import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Utensils, Fuel, ShoppingCart, Calculator as CalcIcon, RefreshCcw, ArrowLeft } from 'lucide-react';
import { CategoryInput } from '../components/CategoryInput';
import { ResultCard } from '../components/ResultCard';

const CARD_BENEFITS_DB = [
  { id: 1, name: "Santander LikeU", annualFee: 0, cashbackRates: { restaurantes: 0.05, gasolina: 0.04, super: 0.01 }, color: "bg-rose-600" },
  { id: 2, name: "BBVA Azul", annualFee: 832, cashbackRates: { restaurantes: 0.01, gasolina: 0.01, super: 0.02 }, color: "bg-[#072146]" },
  { id: 3, name: "Amex Gold Elite", annualFee: 3500, cashbackRates: { restaurantes: 0.03, gasolina: 0.02, super: 0.05 }, color: "bg-amber-600" }
];

export default function Calculator({ onBack }) {
  const [expenses, setExpenses] = useState({ restaurantes: '', gasolina: '', super: '' });

  const calculateCashback = (card) => {
    const res = (Number(expenses.restaurantes) || 0) * card.cashbackRates.restaurantes;
    const gas = (Number(expenses.gasolina) || 0) * card.cashbackRates.gasolina;
    const sup = (Number(expenses.super) || 0) * card.cashbackRates.super;
    return res + gas + sup;
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      exit={{ opacity: 0 }} 
      className="min-h-screen bg-gray-50 pb-40"
    >
      <motion.div 
        layoutId="blue-surface"
        className="bg-gradient-to-br from-[#1e3a8a] via-[#2563eb] to-[#0ea5e9] pt-16 pb-30 px-6 shadow-xl"
        style={{ borderRadius: "0px 0px 3.5rem 3.5rem" }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      >
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="max-w-xl text-white"
        >
          <div className="flex items-center gap-3 mb-4">
            <motion.button 
              whileTap={{ scale: 0.9 }}
              onClick={onBack}
              className="p-2 hover:bg-white/10 rounded-full"
            >
              <ArrowLeft size={24} />
            </motion.button>
            <div className="p-3 bg-white/10 backdrop-blur-xl rounded-2xl border border-white/10">
              <CalcIcon size={24} />
            </div>
            <h1 className="text-3xl font-black tracking-tighter">Calculadora</h1>
          </div>
        </motion.div>
      </motion.div>

      <div className="max-w-xl mx-auto px-6 -mt-20 space-y-4 z-10 relative">
        <CategoryInput 
          label="Restaurantes" 
          icon={Utensils} 
          value={expenses.restaurantes} 
          onChange={(v)=>setExpenses({...expenses, restaurantes:v})} 
        />
        <CategoryInput 
          label="Gasolina" 
          icon={Fuel} 
          value={expenses.gasolina} 
          onChange={(v)=>setExpenses({...expenses, gasolina:v})} 
        />
        <CategoryInput 
          label="Súper" 
          icon={ShoppingCart} 
          value={expenses.super} 
          onChange={(v)=>setExpenses({...expenses, super:v})} 
        />

        <div className="pt-8 flex items-center justify-between">
          <h2 className="text-xl font-black text-slate-900 tracking-tight">Comparativa Anual</h2>
          <button 
            onClick={() => setExpenses({restaurantes: '', gasolina: '', super: ''})}
            className="p-2 text-blue-600 hover:bg-blue-50 rounded-full transition-colors"
          >
            <RefreshCcw size={20} />
          </button>
        </div>

        <div className="space-y-2">
          {CARD_BENEFITS_DB.map(card => (
            <ResultCard key={card.id} card={card} cashbackEarned={calculateCashback(card)} />
          ))}
        </div>
      </div>
    </motion.div>
  );
}