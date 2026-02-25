import React from 'react';
import { Home, Wallet, Calculator, Bell, User } from 'lucide-react';

const NavItem = ({ icon, label, active, onClick }) => (
  <button 
    onClick={onClick}
    className={`flex flex-col items-center gap-1 transition-colors outline-none ${
      active ? 'text-blue-600' : 'text-slate-400'
    }`}
  >
    {icon}
    <span className="text-[10px] font-bold">{label}</span>
  </button>
);

export const BottomNav = ({ activeTab, setActiveTab }) => {
  return (
    <nav className="fixed bottom-0 w-full bg-white/80 backdrop-blur-lg border-t border-gray-100 flex justify-around pt-3 pb-8 px-4 z-50">
      <NavItem icon={<Home size={22} />} label="Inicio" active={activeTab === 'inicio'} onClick={() => setActiveTab('inicio')} />
      <NavItem icon={<Wallet size={22} />} label="Wallet" active={activeTab === 'wallet'} onClick={() => setActiveTab('wallet')} />
      <NavItem icon={<Calculator size={22} />} label="Calcular" active={activeTab === 'calculator'} onClick={() => setActiveTab('calculator')} />
      <NavItem icon={<Bell size={22} />} label="Alertas" active={activeTab === 'alertas'} onClick={() => setActiveTab('alertas')} />
      <NavItem icon={<User size={22} />} label="Perfil" active={activeTab === 'perfil'} onClick={() => setActiveTab('perfil')} />
    </nav>
  );
};