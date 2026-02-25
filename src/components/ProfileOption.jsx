import React from 'react';
import { ChevronRight } from 'lucide-react';

export const ProfileOption = ({ icon: Icon, label, sublabel, onClick }) => (
  <button 
    onClick={onClick}
    className="w-full flex items-center justify-between p-5 bg-white rounded-[2rem] border border-slate-50 hover:bg-slate-50 transition-colors mb-3"
  >
    <div className="flex items-center gap-4">
      <div className="p-3 bg-slate-100 rounded-2xl text-slate-600">
        <Icon size={20} />
      </div>
      <div className="text-left">
        <p className="text-sm font-black text-slate-900 leading-none mb-1">{label}</p>
        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-tighter">{sublabel}</p>
      </div>
    </div>
    <ChevronRight size={18} className="text-slate-300" />
  </button>
);