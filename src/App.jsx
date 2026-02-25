import React, { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import Home from './pages/Home';
import Wallet from './pages/Wallet';
import Calculator from './pages/Calculator';
import Alerts from './pages/Alerts';
import Profile from './pages/Profile';
import { BottomNav } from './components/BottomNav';

function App() {
  const [activeTab, setActiveTab] = useState('inicio');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [activeTab]);

  const goBack = () => setActiveTab('inicio');

  return (
    <div className="min-h-screen bg-gray-50 overflow-x-hidden font-sans">
        {activeTab === 'inicio' && (
          <Home key="home" setActiveTab={setActiveTab} />
        )}

        {activeTab === 'wallet' && (
          <Wallet key="wallet" onBack={goBack} />
        )}

        {activeTab === 'calculator' && (
          <Calculator key="calculator" onBack={goBack} />
        )}

        {activeTab === 'alertas' && (
          <Alerts key="alertas" onBack={goBack} />
        )}

        {activeTab === 'perfil' && (
          <Profile key="perfil" onBack={goBack} />
        )}
      <BottomNav activeTab={activeTab} setActiveTab={setActiveTab} />
    </div>
  );
}

export default App;