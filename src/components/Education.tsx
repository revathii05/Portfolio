import React from 'react';
import { GraduationCap, Calendar, School } from 'lucide-react';
import { educationHistory } from '../data/portfolioData';

export const Education: React.FC = () => {
  return (
    <section id="education" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-teal-500/10 text-teal-400 border border-teal-500/20">
            Academic Track
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Education & Academic Credentials
          </h2>
          <p className="text-slate-400 text-base">
            Formal education in Computer Science and Data Science, with a consistent record of academic excellence.
          </p>
        </div>

        {/* Education Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {educationHistory.map((edu, idx) => (
            <div
              key={idx}
              className={`p-6 sm:p-7 rounded-2xl border transition-all duration-300 flex flex-col justify-between ${
                idx === 0
                  ? 'bg-slate-900/90 border-teal-500/40 shadow-xl shadow-teal-500/5 relative overflow-hidden'
                  : 'bg-slate-900/60 border-slate-800 hover:border-slate-700 hover:bg-slate-900/80'
              }`}
            >
              {idx === 0 && (
                <div className="absolute top-0 right-0 bg-gradient-to-l from-teal-500 to-emerald-600 text-[10px] uppercase font-mono font-bold text-slate-950 px-3 py-1 rounded-bl-xl shadow-sm">
                  Current Degree
                </div>
              )}

              <div className="space-y-4">
                <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 w-fit">
                  {idx === 0 ? (
                    <GraduationCap className="w-6 h-6 text-teal-400" />
                  ) : (
                    <School className="w-6 h-6 text-indigo-400" />
                  )}
                </div>

                <div>
                  <div className="flex items-center gap-2 text-xs font-mono text-slate-400 mb-1">
                    <Calendar className="w-3.5 h-3.5 text-slate-500" />
                    <span>{edu.period}</span>
                  </div>
                  <h3 className="text-lg font-bold text-white leading-snug">
                    {edu.degree}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 font-medium mt-1">
                    {edu.institution}
                  </p>
                </div>

                <div className="inline-block p-2 rounded-lg bg-slate-950/80 border border-slate-800">
                  <span className="text-xs font-mono font-bold text-teal-300">
                    {edu.score}
                  </span>
                </div>

                {edu.details && (
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {edu.details}
                  </p>
                )}

                {edu.highlights && (
                  <div className="space-y-1.5 pt-2 border-t border-slate-800/80">
                    {edu.highlights.map((h, i) => (
                      <div key={i} className="text-[11px] text-slate-400 flex items-center gap-1.5">
                        <span className="w-1 h-1 rounded-full bg-teal-400"></span>
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <div className="pt-4 mt-4 border-t border-slate-800/60 text-[11px] font-mono text-slate-500">
                Verified Record
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
