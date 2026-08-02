import React from 'react';

const stats = [
  { label: 'Problems Solved', value: '450+', platform: 'LeetCode, GFG, Codeforces' },
  { label: 'Contest Rating', value: '1580+', platform: 'LeetCode' },
  { label: 'Top Percentile', value: 'Top 15%', platform: 'LeetCode' },
  { label: 'Professional Experience', value: '3+ Months', platform: 'Software Development' },
  { label: 'Contest Rating', value: '1492+', platform: 'CodeChef' },
];

const StatsCards = () => {
  return (
    <section className="w-full bg-[#080809] py-6">
      <div className="max-w-3xl mx-auto px-6">

        {/* Section divider with parallel lines */}
        <div className="w-full flex flex-col gap-1 mb-6">
          <div className="h-px w-full bg-white/10" />
          <div className="h-px w-full bg-white/5" />
        </div>

        {/* Header label */}
        <div className="flex items-center justify-between mb-3">
          <span className="text-[11px] font-mono font-semibold text-neutral-400 uppercase tracking-widest">
            // Developer Stats & Rankings
          </span>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {stats.map((s) => (
            <div
              key={s.label}
              className="relative group overflow-hidden border border-white/10 bg-white/[0.02] hover:bg-white/[0.05] hover:border-white/25 rounded-lg p-3.5 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              {/* Top parallel highlight line */}
              <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

              <div className="flex flex-col h-full justify-between gap-0.5 relative z-10">
                <span className="text-xl md:text-2xl font-extrabold text-white tracking-tight group-hover:text-emerald-300 transition-colors">
                  {s.value}
                </span>
                <div>
                  <p className="text-xs font-medium text-neutral-300 leading-snug">
                    {s.label}
                  </p>
                  <span className="text-[10px] font-mono text-neutral-500 uppercase tracking-wider block mt-0.5">
                    {s.platform}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Section divider with parallel lines */}
        <div className="w-full flex flex-col gap-1 mt-8">
          <div className="h-px w-full bg-white/10" />
          <div className="h-px w-full bg-white/5" />
        </div>
      </div>
    </section>
  );
};

export default StatsCards;
