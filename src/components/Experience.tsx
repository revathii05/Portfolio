import React from 'react';
import { Calendar, CheckCircle2, Building } from 'lucide-react';
import { experiences } from '../data/portfolioData';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24 bg-slate-950/60 relative border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-teal-500/10 text-teal-400 border border-teal-500/20">
            Work History
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Internship & Professional Experience
          </h2>
          <p className="text-slate-400 text-base">
            Verified internship contributions across Business Intelligence, AI Data Analytics, and Full-Stack Web Development.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative border-l-2 border-slate-800 ml-4 sm:ml-8 md:ml-12 pl-6 sm:pl-8 space-y-12">
          {experiences.map((exp) => (
            <div key={exp.id} className="relative group">
              
              {/* Timeline Indicator Node */}
              <div className="absolute -left-[35px] sm:-left-[43px] top-1.5 w-6 h-6 rounded-full bg-slate-900 border-2 border-teal-400 flex items-center justify-center group-hover:scale-110 group-hover:bg-teal-400 transition-all shadow-md shadow-teal-500/20">
                <span className="w-2 h-2 rounded-full bg-teal-400 group-hover:bg-slate-950 transition-colors"></span>
              </div>

              {/* Experience Card */}
              <div className="p-6 sm:p-7 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-slate-700/80 hover:bg-slate-900 transition-all shadow-lg space-y-4">
                
                {/* Role Header */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div>
                    <div className="flex flex-wrap items-center gap-2 mb-1">
                      <span className={`text-xs font-mono px-2.5 py-0.5 rounded-full border font-semibold ${exp.badgeColor}`}>
                        {exp.type}
                      </span>
                      <span className="text-xs font-mono text-slate-400 flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5 text-slate-500" />
                        {exp.timeline}
                      </span>
                    </div>

                    <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-teal-300 transition-colors">
                      {exp.role}
                    </h3>
                  </div>

                  <div className="flex items-center gap-2 text-sm font-semibold text-slate-300 bg-slate-950 px-3.5 py-1.5 rounded-xl border border-slate-800 w-fit">
                    <Building className="w-4 h-4 text-teal-400" />
                    <span>{exp.company}</span>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {exp.description}
                </p>

                {/* Key Achievements & Bullet Points */}
                <div className="space-y-2 pt-1">
                  <div className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold">
                    Core Responsibilities & Deliverables:
                  </div>
                  <div className="space-y-2">
                    {exp.highlights.map((point, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                        <CheckCircle2 className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                        <span>{point}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Technologies Badge Group */}
                <div className="pt-3 border-t border-slate-800/80 flex flex-wrap gap-1.5">
                  {exp.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-[11px] font-mono px-2.5 py-1 rounded bg-slate-950 text-slate-300 border border-slate-800"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
