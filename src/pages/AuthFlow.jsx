import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Chrome,
    Apple,
    ChevronRight,
    Check,
    Zap,
    CreditCard,
    ArrowLeft,
    Mail,
    User,
    Lock,
} from 'lucide-react';
import logo from "../assets/logo_white.png";

const AVAILABLE_CARDS = [
    { id: 1, bank: 'Santander', name: 'LikeU', color: 'bg-gradient-to-br from-[#2563eb] to-[#1e40af]' },
    { id: 2, bank: 'BBVA', name: 'Azul', color: 'bg-gradient-to-br from-[#0f172a] to-[#1e293b]' },
    { id: 3, bank: 'Amex', name: 'Gold Elite', color: 'bg-gradient-to-br from-amber-600 to-yellow-600' },
    { id: 4, bank: 'Nu', name: 'Nu Card', color: 'bg-gradient-to-br from-purple-800 to-purple-600' },
];

const LogoHeader = ({ title, subtitle }) => (
    <div className="mb-50 text-center flex flex-col items-center">
        <img src={logo} alt="Hobi logo" className="w-50 h-50 object-contain " />
        <h1 className="text-5xl font-black text-white tracking-tighter leading-none mb-3">{title}</h1>
        <p className="text-blue-100/70 font-bold uppercase text-[10px] tracking-[0.2em]">{subtitle}</p>
    </div>
);

const ActionButton = ({ text, onClick, variant = 'outline' }) => (
    <button
        onClick={onClick}
        className={`w-full py-5 rounded-[1.8rem] font-black text-sm tracking-widest active:scale-[0.97] transition-all shadow-xl ${
            variant === 'white' ? 'bg-white text-blue-600' : 'bg-white/5 text-white border border-white/10'
        }`}
    >
        {text}
    </button>
);

const InputGroup = ({ icon, ...props }) => (
    <div className="flex items-center gap-4 bg-white/10 backdrop-blur-md rounded-[1.8rem] px-6 border border-white/10 focus-within:bg-white/20 transition-all shadow-inner">
        <div className="text-white/40">{icon}</div>
        <input {...props} className="w-full bg-transparent py-5 font-bold text-white placeholder:text-white/30 outline-none text-sm" />
    </div>
);

const SocialButton = ({ icon, text, onClick }) => (
    <button
        onClick={onClick}
        className="w-full py-5 px-6 bg-white/10 backdrop-blur-xl rounded-[1.8rem] border border-white/10 font-black text-white text-sm flex items-center justify-between group active:scale-[0.98] transition-all hover:bg-white/15"
    >
        <div className="flex items-center gap-4">
            <div className="bg-white/10 p-2.5 rounded-xl shadow-inner">{icon}</div>
            <span className="tracking-tight">Entrar con {text}</span>
        </div>
        <ChevronRight size={18} className="text-white/30" />
    </button>
);

const CardToggle = ({ card, isSelected, onToggle }) => (
    <motion.div
        layout
        whileTap={{ scale: 0.98 }}
        onClick={onToggle}
        className={`relative p-7 rounded-[2.5rem] h-44 flex flex-col justify-between transition-all duration-300 border-4 cursor-pointer overflow-hidden shadow-2xl ${
            isSelected 
                ? 'border-white scale-[1.02] shadow-black/30' 
                : 'border-white/5 opacity-60'
        } ${card.color}`}
    >
        <div className="flex justify-between items-start relative z-10">
            <div className="bg-white/20 px-3 py-1 rounded-full text-[9px] font-black uppercase tracking-widest text-white backdrop-blur-sm">
                {card.bank}
            </div>
            <div className={`p-2.5 rounded-2xl transition-all ${
                isSelected ? 'bg-white text-blue-600 scale-110 shadow-lg' : 'bg-black/10 text-white/20'
            }`}>
                <Check size={18} strokeWidth={4} />
            </div>
        </div>

        <div className="mt-auto relative z-10">
            <h4 className="text-2xl font-black text-white leading-tight">{card.name}</h4>
            <p className="text-[10px] font-bold text-white/50 uppercase tracking-tighter mt-1">
                {isSelected ? 'Seleccionada' : 'Tocar para añadir'}
            </p>
        </div>

        <CreditCard size={90} className="absolute -right-6 -bottom-6 text-white/10 -rotate-12 pointer-events-none" />
    </motion.div>
);

export default function AuthFlow({ onFinish }) {
    const [view, setView] = useState('landing');
    const [selectedCards, setSelectedCards] = useState([]);

    const toggleCard = (id) => {
        setSelectedCards((prev) => (prev.includes(id) ? prev.filter((c) => c !== id) : [...prev, id]));
    };

    const variants = {
        initial: { opacity: 0, x: 20 },
        animate: { opacity: 1, x: 0 },
        exit: { opacity: 0, x: -20 },
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-[#1e3a8a] via-[#2563eb] to-[#0ea5e9] flex flex-col relative overflow-hidden font-sans">
            <div className="absolute -right-20 -top-20 w-64 h-64 bg-white/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -left-20 -bottom-20 w-64 h-64 bg-black/10 rounded-full blur-3xl pointer-events-none" />

            <AnimatePresence mode="wait">
                {view === 'landing' && (
                    <motion.div key="landing" {...variants} className="flex-1 flex flex-col justify-center px-8 z-10">
                        <div className="max-w-md mx-auto w-full text-center">
                            <LogoHeader title="Hobi" subtitle="Maximiza cada compra" />
                            <div className="space-y-4 mt-12">
                                <ActionButton text="INICIAR SESIÓN" variant="white" onClick={() => setView('login')} />
                                <ActionButton text="CREAR CUENTA" onClick={() => setView('signup')} />
                            </div>
                        </div>
                    </motion.div>
                )}

                {(view === 'login' || view === 'signup') && (
                    <motion.div key="form" {...variants} className="flex-1 flex flex-col justify-center px-8 z-10">
                        <div className="max-w-md mx-auto w-full">
                            <button
                                onClick={() => setView('landing')}
                                className="mb-8 p-3 bg-white/10 rounded-full text-white w-fit leading-none flex items-center justify-center transition-transform active:scale-90"
                            >
                                <ArrowLeft size={20} />
                            </button>

                            <h2 className="text-4xl font-black text-white tracking-tighter mb-2 leading-none">
                                {view === 'login' ? 'Bienvenido de vuelta' : 'Crea tu perfil'}
                            </h2>

                            <p className="text-blue-100/60 font-bold uppercase text-[10px] tracking-[0.2em] mb-8">
                                {view === 'login' ? 'Ingresa tus datos' : 'Únete a la comunidad'}
                            </p>

                            <div className="space-y-4">
                                {view === 'signup' && <InputGroup icon={<User size={18} />} placeholder="Nombre completo" />}
                                <InputGroup icon={<Mail size={18} />} placeholder="Email" type="email" />
                                <InputGroup icon={<Lock size={18} />} placeholder="Contraseña" type="password" />

                                <ActionButton
                                    text={view === 'login' ? 'ENTRAR' : 'CONTINUAR'}
                                    variant="white"
                                    onClick={() => (view === 'login' ? onFinish() : setView('cards'))}
                                />

                                <div className="py-6 flex items-center gap-4 text-white/20 text-[9px] font-black uppercase tracking-[0.3em]">
                                    <div className="h-[1px] bg-white/10 flex-1" /> O <div className="h-[1px] bg-white/10 flex-1" />
                                </div>

                                <SocialButton icon={<Chrome size={20} />} text="Google" onClick={() => (view === 'login' ? onFinish() : setView('cards'))} />
                                <SocialButton icon={<Apple size={22} />} text="Apple ID" onClick={() => (view === 'login' ? onFinish() : setView('cards'))} />
                            </div>
                        </div>
                    </motion.div>
                )}

                {view === 'cards' && (
                    <motion.div key="cards" {...variants} className="flex-1 flex flex-col pt-16 px-6 z-10 overflow-y-auto pb-40">
                        <div className="max-w-md mx-auto w-full">
                            <div className="flex items-center justify-between mb-10 text-white">
                                <div className="flex flex-col">
                                    <h2 className="text-3xl font-black tracking-tighter leading-none">Tus Tarjetas</h2>
                                    <p className="text-blue-100/60 text-[10px] font-black uppercase tracking-widest mt-2">¿Cuáles usas hoy?</p>
                                </div>
                                <div className="p-4 bg-white/15 rounded-3xl border border-white/10">
                                    <CreditCard size={24} />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 gap-6">
                                {AVAILABLE_CARDS.map((card) => (
                                    <CardToggle 
                                        key={card.id} 
                                        card={card} 
                                        isSelected={selectedCards.includes(card.id)} 
                                        onToggle={() => toggleCard(card.id)} 
                                    />
                                ))}
                            </div>

                            <motion.button
                                whileTap={{ scale: 0.95 }}
                                onClick={onFinish}
                                className={`fixed bottom-10 left-6 right-6 max-w-sm mx-auto py-5 rounded-[2rem] font-black text-sm tracking-widest transition-all shadow-2xl flex items-center justify-center gap-3 ${
                                    selectedCards.length > 0 ? 'bg-white text-blue-600' : 'bg-white/10 text-white/20 pointer-events-none'
                                }`}
                            >
                                FINALIZAR REGISTRO <ChevronRight size={20} />
                            </motion.button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}