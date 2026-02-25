import React from 'react';
import { motion } from 'framer-motion';
import { Bell, Radar, MapPin, Sparkles, ShieldCheck } from 'lucide-react';
import { AlertItem } from '../components/Alertitem';

export default function Alerts() {
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
    }
  ];

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="min-h-screen bg-gray-50 pb-40">
      <div className="bg-slate-900 pt-16 pb-20 px-6 rounded-b-[3.5rem] shadow-xl relative overflow-hidden">
        <div className="max-w-xl mx-auto relative z-10 text-white">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className="p-3 bg-white/10 rounded-2xl">
                <ShieldCheck size={24} className="text-emerald-400" />
              </div>
              <h1 className="text-3xl font-black tracking-tighter">Comunidad</h1>
            </div>
          </div>
          <p className="text-slate-400 text-sm font-medium">Ayúdanos a validar los negocios para que todos ganen cashback real.</p>
        </div>
      </div>

      <div className="max-w-xl mx-auto px-6 -mt-10 space-y-6">
        <div className="bg-white p-6 rounded-[2.5rem] border border-slate-100 shadow-xl flex flex-col items-center text-center">
          <div className="relative mb-4">
            <div className="absolute inset-0 bg-blue-500/10 rounded-full animate-ping" />
            <div className="relative p-4 bg-blue-50 rounded-full text-blue-600">
              <Radar size={32} />
            </div>
          </div>
          <p className="text-blue-600 text-xs font-black uppercase tracking-widest">Buscando comercios...</p>
        </div>

        <div>
          <h2 className="text-xl font-black text-slate-900 mb-6 flex items-center gap-2">
            <Sparkles size={18} className="text-amber-500" />
            Validaciones Pendientes
          </h2>
          {alertsHistory.map((alert) => (
            <AlertItem key={alert.id} {...alert} />
          ))}
        </div>
      </div>
    </motion.div>
  );
}