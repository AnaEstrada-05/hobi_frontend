const CashbackItem = ({ brand, category, percentage }) => (
  <div className="flex items-center justify-between p-4 bg-white rounded-2xl border border-slate-100 shadow-sm">
    <div className="flex items-center gap-3">
      <div className="w-10 h-10 bg-blue-50 rounded-full flex items-center justify-center text-blue-600 font-bold">
        {brand[0]}
      </div>
      <div>
        <h4 className="text-sm font-bold text-slate-900">{brand}</h4>
        <p className="text-[10px] text-slate-500 uppercase font-medium">{category}</p>
      </div>
    </div>
    <div className="text-emerald-600 font-black text-sm">+{percentage}%</div>
  </div>
);