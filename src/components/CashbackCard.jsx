import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, ArrowUpRight, Zap } from 'lucide-react';

export const CashbackCard = ({ amount = "0.00", percentage = "0" }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ y: -5 }}
      className="mx-4 sm:mx-8 lg:mx-auto lg:max-w-4xl -mt-10 sm:-mt-14 relative group"
    >
      <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-cyan-400 rounded-[24px] sm:rounded-[32px] blur opacity-10 group-hover:opacity-30 transition duration-1000"></div>
      
      <div className="relative bg-white/90 backdrop-blur-2xl p-5 sm:p-7 rounded-[22px] sm:rounded-[30px] shadow-[0_20px_40px_rgba(37,99,235,0.06)] border border-white/60 overflow-hidden">
        
        <motion.div 
          initial={{ x: '-150%' }}
          animate={{ x: '150%' }}
          transition={{ duration: 3, repeat: Infinity, repeatDelay: 5, ease: "linear" }}
          className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-50/50 to-transparent skew-x-12 pointer-events-none"
        />

        <div className="flex justify-between items-start relative z-10">
          <div className="flex-1">
            <div className="flex items-center gap-2 text-blue-600/80 mb-2 sm:mb-3">
              <div className="p-1 sm:p-1.5 bg-blue-50 rounded-lg">
                <Zap size={12} className="text-blue-600 fill-blue-600 sm:w-[14px]" />
              </div>
              <span className="text-[10px] sm:text-[12px] font-bold uppercase tracking-wider">
                Tu recompensa
              </span>
            </div>
            
            <div className="flex flex-col">
              <span className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900">
                ${amount}
              </span>
              
              <div className="flex items-center gap-1.5 mt-3 px-2.5 py-1 bg-emerald-50 w-fit rounded-full border border-emerald-100/50">
                <TrendingUp size={12} className="text-emerald-600 sm:w-[14px]" />
                <p className="text-emerald-700 font-bold text-[10px] sm:text-xs">
                  +{percentage}% 
                  <span className="hidden xs:inline font-medium opacity-80 ml-1">vs mes anterior</span>
                </p>
              </div>
            </div>
          </div>

          <motion.div 
            whileHover={{ scale: 1.1, backgroundColor: '#1e40af' }}
            whileTap={{ scale: 0.9 }}
            className="p-2.5 sm:p-3.5 bg-slate-900 rounded-xl sm:rounded-2xl text-white shadow-lg shadow-blue-100 cursor-pointer transition-colors"
          >
            <ArrowUpRight size={18} className="sm:w-5 sm:h-5" strokeWidth={2.5} />
          </motion.div>
        </div>

        <div className="absolute -bottom-6 -right-6 w-16 h-16 sm:w-24 sm:h-24 bg-blue-50 rounded-full blur-2xl" />
      </div>
    </motion.div>
  );
};