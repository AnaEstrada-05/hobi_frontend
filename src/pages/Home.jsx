import React from "react";
import { motion } from "framer-motion";
import { HomeHeader } from "../components/HomeHeader";
import { CashbackCard } from "../components/CashbackCard";
import { LocationAlert } from "../components/LocationAlert";
import { QuickActions } from "../components/QuickActions";
import { CardList } from "../components/CardList";

export default function Home({ setActiveTab }) {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="min-h-screen bg-gray-50 pb-32">
      <HomeHeader name="Usuario" cardsCount={3} onWalletClick={() => setActiveTab('wallet')} />
      <div className="max-w-xl mx-auto px-4 sm:px-6 -mt-8 relative z-20 space-y-4">
        <CashbackCard amount="1,245.50" percentage="15.2" />
        <LocationAlert place="Starbucks" location="Santa Fe" offer="5% Cashback" />
        <QuickActions setActiveTab={setActiveTab} />
        <CardList onSeeAll={() => setActiveTab('wallet')} />
      </div>
    </motion.div>
  );
}