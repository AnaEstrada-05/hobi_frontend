import React from 'react';

export const CategoryInput = ({ label, icon: Icon, value, onChange }) => (
  <div className="bg-white p-5 rounded-[2rem] border border-slate-100 shadow-sm flex items-center gap-4">
    <div className="p-3 bg-slate-50 rounded-2xl text-slate-900">
      <Icon size={20} />
    </div>
    <div className="flex-1">
      <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-1">{label}</p>
      <div className="flex items-center">
        <span className="font-bold text-slate-900 mr-1">$</span>
        <input 
          type="number" 
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="w-full bg-transparent font-bold text-lg outline-none text-slate-900"
          placeholder="0"
        />
      </div>
    </div>
  </div>
);