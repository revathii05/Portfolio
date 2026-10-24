import React from 'react';
import { Award, GraduationCap, Briefcase, Trophy } from 'lucide-react';
import { quickStats } from '../data/portfolioData';

export const MetricsBar: React.FC = () => {
  const icons = [
    <GraduationCap className="w-5 h-5 text-teal-400" />,
    <Briefcase className="w-5 h-5 text-indigo-400" />,
    <Trophy className="w-5 h-5 text-amber-400" />,
    <Award className="w-5 h-5 text-emerald-400" />
  ];

  return (
    <div className="relative z-10 -mt-6 sm:-mt-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 p-4 sm:p-6 rounded-2xl bg-slate-900/90 border border-slate-800 shadow-xl backdrop-blur-xl">
        {quickStats.map((stat, idx) => (
          <div
            key={idx}
            className="flex items-center gap-3.5 p-3 rounded-xl bg-slate-950/40 border border-slate-800/60 hover:border-slate-700/80 transition-all group"
          >
            <div className="p-2.5 rounded-lg bg-slate-900 border border-slate-800 shrink-0 group-hover:scale-105 transition-transform">
              {icons[idx]}
            </div>
            <div>
              <div className="text-xl sm:text-2xl font-black text-white tracking-tight flex items-center gap-1">
                {stat.value}
              </div>
              <div className="text-xs font-semibold text-slate-300">
                {stat.label}
              </div>
              <div className="text-[11px] text-slate-500 font-medium truncate">
                {stat.detail}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
