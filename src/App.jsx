import React, { useState } from 'react';
import Home from './pages/Home';
import Wallet from './pages/Wallet';
import Calculator from './pages/Calculator';
import Alerts from './pages/Alerts';
import Profile from './pages/Profile';
import { BottomNav } from './components/BottomNav';

export default function App() {
  const [activeTab, setActiveTab] = useState('inicio');

  return (
    <div className="min-h-screen bg-gray-50">
      <main className="pb-24">
        {activeTab === 'inicio' && <Home setActiveTab={setActiveTab} />}
        {activeTab === 'wallet' && <Wallet />}
        {activeTab === 'calculator' && <Calculator />}
        {activeTab === 'alertas' && <Alerts />}
        {activeTab === 'perfil' && <Profile />}
      </main>
      
      <BottomNav activeTab={activeTab} setActiveTab={setActiveTab} />
    </div>
  );
}