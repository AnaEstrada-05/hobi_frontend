import React from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ShieldCheck, Fingerprint, Lock, EyeOff } from 'lucide-react';

export const SecurityPage = ({ onBack }) => {
  return (
    <motion.div 
      initial={{ x: '100%' }} animate={{ x: 0 }} exit={{ x: '100%' }}
      className="fixed inset-0 bg-gray-50 z-[60] pb-20"
    >
      <div className="bg-slate-900 p-6 pt-16 flex items-center gap-4 text-white">
        <button onClick={onBack} className="p-2 bg-white/10 rounded-xl"><ChevronLeft /></button>
        <h2 className="text-xl font-black tracking-tight">Seguridad</h2>
      </div>

      <div className="p-6 space-y-4">
        <div className="bg-emerald-50 p-6 rounded-[2.5rem] border border-emerald-100 flex items-center gap-4">
          <div className="p-3 bg-emerald-500 rounded-2xl text-white"><ShieldCheck /></div>
          <div>
            <p className="text-sm font-black text-emerald-900">Tu cuenta está segura</p>
            <p className="text-[10px] font-bold text-emerald-600 uppercase">Encriptación de 256 bits activa</p>
          </div>
        </div>

        <div className="bg-white rounded-[2.5rem] border border-slate-100 shadow-sm overflow-hidden">
          {[
            { icon: Fingerprint, label: "Face ID / Huella", status: "Activado" },
            { icon: Lock, label: "Cambiar PIN", status: "Configurado" },
            { icon: EyeOff, label: "Modo Incógnito", status: "Desactivado" }
          ].map((item, i) => (
            <div key={i} className="p-5 flex items-center justify-between border-b border-slate-50 last:border-0">
              <div className="flex items-center gap-4">
                <item.icon size={20} className="text-slate-400" />
                <span className="font-bold text-sm">{item.label}</span>
              </div>
              <span className="text-[10px] font-black text-blue-600 uppercase bg-blue-50 px-2 py-1 rounded-md">{item.status}</span>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};