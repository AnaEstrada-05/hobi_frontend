import React from 'react';
import { motion } from 'framer-motion';
import { Radar, Sparkles, ShieldCheck, ArrowLeft, ChevronRight } from 'lucide-react';
import { AlertItem } from '../components/Alertitem';

const Alerts = ({ onBack }) => {
  const alertsHistory = [
    {
      id: 1,
      brand: "Starbucks",
      location: "Centro Comercial Santa Fe",
      category: "Restaurantes", 
      card: "Santander LikeU",
      cashback: "5% cashback",
      time: "Hace 2 horas"
    },
    {
      id: 2,
      brand: "Pemex",
      location: "Av. Reforma 123",
      category: "Gasolineras",
      card: "BBVA Azul",
      cashback: "1% cashback",
      time: "Ayer"
    },
    {
      id: 3,
      brand: "7-Eleven",
      location: "Calle 10 #45",
      category: "Tiendas",
      card: "Todas",
      cashback: "Validación rápida",
      time: "Ayer"
    }
  ];

  return (
    <motion.div 
      layoutId="blue-surface"
      className="fixed inset-0 bg-gradient-to-br from-[#1e3a8a] via-[#2563eb] to-[#0ea5e9] text-white z-50 overflow-y-auto"
      style={{ borderRadius: "0px" }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
    >
      <motion.div 
        initial={{ opacity: 0, y: 20 }} 
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="pt-12 px-6 max-w-xl mx-auto pb-40"
      >
        <div className="flex justify-between items-center mb-6">
          <motion.button 
            whileTap={{ scale: 0.9 }}
            onClick={onBack}
            className="p-2 hover:bg-white/10 rounded-full transition-colors flex items-center justify-center"
          >
            <ArrowLeft size={24} />
          </motion.button>
          <h1 className="text-2xl font-black tracking-tighter">Comunidad</h1>
          <motion.div 
            whileTap={{ scale: 0.95 }}
            className="w-10 h-10 bg-white/15 rounded-xl flex items-center justify-center border border-white/20"
          >
            <ShieldCheck size={20} className="text-cyan-300" />
          </motion.div>
        </div>

        <motion.div 
          whileTap={{ scale: 0.98 }}
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="bg-white/10 backdrop-blur-md p-4 rounded-3xl border border-white/10 shadow-xl flex items-center gap-4 mb-8 cursor-pointer"
        >
          <div className="relative flex-shrink-0">
            <div className="absolute inset-0 bg-cyan-400/30 rounded-full animate-ping" />
            <div className="relative p-2.5 bg-white text-blue-600 rounded-full shadow-lg">
              <Radar size={20} />
            </div>
          </div>
          <div className="flex-1">
            <p className="text-cyan-300 text-[10px] font-black uppercase tracking-widest">Radar Activo</p>
            <p className="text-blue-50 text-xs font-medium">Buscando comercios cercanos...</p>
          </div>
          <ChevronRight size={16} className="text-white/40" />
        </motion.div>

        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-black text-white flex items-center gap-2">
              <Sparkles size={18} className="text-amber-400" />
              Validaciones Pendientes
            </h2>
            <span className="px-3 py-1 rounded-full text-[10px] font-bold uppercase bg-white/20">
              {alertsHistory.length} Nuevas
            </span>
          </div>
          
          <div className="flex flex-col gap-4 relative">
            {alertsHistory.map((alert, index) => (
                <motion.div
                key={alert.id}
                layout 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ 
                    delay: 0.2 + (index * 0.1),
                    duration: 0.4,
                    ease: "easeOut"
                }}
                className="relative w-full overflow-hidden rounded-[1.5rem] active:scale-[0.98] transition-transform"
                >
                <AlertItem {...alert} />
                </motion.div>
            ))}
            </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Alerts;