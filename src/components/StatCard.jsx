import React from 'react';
import { motion } from 'framer-motion';

export const StatCard = ({ label, value, icon: Icon, delay }) => (
  <motion.div 
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay }}
    className="bg-white/80 backdrop-blur-md p-4 rounded-[2rem] border border-white shadow-[0_8px_30px_rgb(0,0,0,0.04)] flex flex-col items-center flex-1"
  >
    <div className="p-2 bg-slate-50 rounded-xl text-slate-900 mb-2">
      <Icon size={18} />
    </div>
    <span className="text-[9px] font-black uppercase tracking-tighter text-slate-400">{label}</span>
    <span className="text-sm font-black text-slate-900">{value}</span>
  </motion.div>
);