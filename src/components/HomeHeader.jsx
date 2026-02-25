import React from 'react';
import { Bell, Wallet, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

export const HomeHeader = ({ name = "Alex", onWalletClick, onAlertsClick }) => {
  return (
    <motion.div 
      layoutId="header-surface" // Cambiado a header-surface para unificar con Calculator y Profile
      transition={{ 
        layout: { duration: 0.6, type: "spring", bounce: 0.2 },
        borderRadius: { duration: 0.2 }
      }}
      className="relative bg-gradient-to-br from-[#1e3a8a] via-[#2563eb] to-[#0ea5e9] text-white pt-16 pb-20 px-6 shadow-xl z-10 rounded-b-[3.5rem]"
    >
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        <div className="relative z-10 max-w-xl mx-auto">
          <div className="flex justify-between items-center">
            {/* Botón Wallet */}
            <button 
              onClick={onWalletClick}
              className="bg-white/10 p-3 rounded-2xl backdrop-blur-xl border border-white/10 shadow-lg active:scale-90 transition-transform"
            >
              <Wallet size={20} strokeWidth={2} />
            </button>

            {/* Botón Notificaciones (Ahora funcional) */}
            <div className="relative">
              <button 
                onClick={onAlertsClick}
                className="p-3 bg-white/10 rounded-2xl backdrop-blur-xl border border-white/10 active:scale-90 transition-transform"
              >
                <Bell size={20} strokeWidth={2} />
              </button>
              {/* Indicador de notificación activa */}
              <span className="absolute -top-1 -right-1 w-3 h-3 bg-cyan-300 rounded-full border-2 border-[#1e3a8a] animate-pulse" />
            </div>
          </div>

          <div className="mt-8">
            <div className="flex items-center gap-2 mb-1">
              <Sparkles size={12} className="text-cyan-300" />
              <span className="text-[10px] uppercase tracking-[0.2em] font-black text-blue-100/80">Dashboard Personal</span>
            </div>
            <h1 className="text-4xl font-black tracking-tighter leading-none">¡Hola, {name}!</h1>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};