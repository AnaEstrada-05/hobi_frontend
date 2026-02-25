import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { User, Settings, Shield, CreditCard, LogOut, Award, Star, ChevronRight } from 'lucide-react';
import { StatCard } from '../components/StatCard';
import { SettingsPage } from './Settings';
import { SecurityPage } from './Security';
import { LogoutModal } from '../components/LogoutModal'; // Importamos el modal

export default function Profile({ setActiveTab }) {
  const [subPage, setSubPage] = useState(null);
  const [isLogoutOpen, setIsLogoutOpen] = useState(false); // Estado para el modal

  const handleConfirmLogout = () => {
    // Lógica real de limpieza de sesión aquí
    window.location.reload();
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-40">
      {/* Modal de Cierre de Sesión */}
      <LogoutModal 
        isOpen={isLogoutOpen} 
        onClose={() => setIsLogoutOpen(false)} 
        onConfirm={handleConfirmLogout} 
      />

      <AnimatePresence>
        {subPage === 'settings' && <SettingsPage onBack={() => setSubPage(null)} />}
        {subPage === 'security' && <SecurityPage onBack={() => setSubPage(null)} />}
      </AnimatePresence>

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        {/* HEADER */}
        <div className="bg-gradient-to-br from-[#1e3a8a] via-[#2563eb] to-[#0ea5e9] pt-16 pb-24 px-6 rounded-b-[3.5rem] shadow-xl relative text-center">
          <div className="max-w-xl mx-auto flex flex-col items-center">
            <div className="w-24 h-24 bg-white/20 backdrop-blur-xl rounded-[2.5rem] p-1 border border-white/30 flex items-center justify-center text-white">
              <User size={48} />
            </div>
            <h1 className="mt-4 text-3xl font-black text-white tracking-tighter">Alex Rivera</h1>
            <p className="text-blue-100/70 text-xs font-bold uppercase tracking-widest mt-1">Ahorrador Nivel 12</p>
          </div>
        </div>

        <div className="max-w-xl mx-auto px-6 -mt-10 space-y-4">
          <div className="flex gap-3">
            <StatCard label="Ahorro" value="$12.4k" icon={Star} />
            <StatCard label="Aportes" value="48" icon={Award} />
            <button className="flex-1" onClick={() => setActiveTab('wallet')}>
              <StatCard label="Cards" value="3" icon={CreditCard} />
            </button>
          </div>

          <div className="bg-white rounded-[2.5rem] border border-slate-100 shadow-xl overflow-hidden divide-y divide-slate-50">
            <button onClick={() => setSubPage('settings')} className="w-full p-6 flex items-center justify-between hover:bg-slate-50">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-slate-50 rounded-2xl text-slate-600"><Settings size={20} /></div>
                <div className="text-left"><p className="text-sm font-black text-slate-900">Ajustes</p><p className="text-[10px] font-bold text-slate-400 uppercase">Notificaciones y cuenta</p></div>
              </div>
              <ChevronRight size={16} className="text-slate-300" />
            </button>

            <button onClick={() => setSubPage('security')} className="w-full p-6 flex items-center justify-between hover:bg-slate-50">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-slate-50 rounded-2xl text-slate-600"><Shield size={20} /></div>
                <div className="text-left"><p className="text-sm font-black text-slate-900">Seguridad</p><p className="text-[10px] font-bold text-slate-400 uppercase">FaceID y PIN</p></div>
              </div>
              <ChevronRight size={16} className="text-slate-300" />
            </button>

            {/* Este botón ahora activa el modal personalizado */}
            <button 
              onClick={() => setIsLogoutOpen(true)} 
              className="w-full p-6 flex items-center justify-between hover:bg-rose-50/30 transition-colors text-rose-500"
            >
              <div className="flex items-center gap-4">
                <div className="p-3 bg-rose-50 rounded-2xl"><LogOut size={20} /></div>
                <div className="text-left"><p className="text-sm font-black">Cerrar Sesión</p><p className="text-[10px] font-bold opacity-60 uppercase">Salir de la cuenta</p></div>
              </div>
              <ChevronRight size={16} className="opacity-30" />
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
}