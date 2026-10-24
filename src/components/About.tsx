import React from 'react';
import { Database, Layout, ShieldCheck, Terminal, Users, CheckCircle, Code } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export const About: React.FC = () => {
  const pillars = [
    {
      icon: <Database className="w-5 h-5 text-teal-400" />,
      title: "Data Science & Predictive ML",
      description: "Hands-on experience in exploratory data analysis (EDA), data cleaning, feature preprocessing, and training predictive models using Pandas, NumPy, and Scikit-learn to extract high-confidence business insights."
    },
    {
      icon: <Terminal className="w-5 h-5 text-indigo-400" />,
      title: "FastAPI & REST Backend Architecture",
      description: "Designing structured, low-latency RESTful APIs using Python and FastAPI. Implemented token-based authentication (JWT), OTP verification, role-based authorization (RBAC), and relational SQL databases."
    },
    {
      icon: <Layout className="w-5 h-5 text-emerald-400" />,
      title: "Full-Stack & Reactive Dashboards",
      description: "Building responsive, modern user interfaces in React.js and Angular. Creating operational command panels, dynamic filtering, real-time alert systems, and fluid data visualization components."
    },
    {
      icon: <ShieldCheck className="w-5 h-5 text-amber-400" />,
      title: "Business Intelligence & Analytics",
      description: "Constructing executive Power BI dashboards with automated Power Query ETL pipelines, complex DAX measures, time-intelligence calculations, and drill-through matrices at K-Square Company."
    }
  ];

  return (
    <section id="about" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-teal-500/10 text-teal-400 border border-teal-500/20">
            About Me
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Engineering Data-Driven Intelligence & Scalable Web Applications
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            A developer who bridges the analytical precision of Data Science with the robust engineering of modern Full-Stack systems.
          </p>
        </div>

        {/* Narrative & Pillars Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Authentic Story & Academic Anchor */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 sm:p-7 rounded-2xl bg-slate-900/80 border border-slate-800 shadow-xl space-y-5">
              <h3 className="text-xl font-bold text-white flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-teal-400"></span>
                My Background & Approach
              </h3>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                I am a Computer Science & Data Science student at <strong className="text-white font-medium">{personalInfo.college}</strong> maintaining a strong academic standing with an <strong className="text-teal-300 font-semibold">{personalInfo.cgpa} CGPA</strong>.
              </p>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                Rather than treating data science and software engineering as separate disciplines, I specialize in combining them: extracting actionable insights from data, deploying intelligent backend logic via <strong className="text-teal-300 font-medium">FastAPI</strong>, and presenting results through intuitive <strong className="text-teal-300 font-medium">React</strong> and <strong className="text-amber-300 font-medium">Power BI</strong> interfaces.
              </p>

              <div className="pt-2 border-t border-slate-800 space-y-3">
                <div className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold">
                  Key Strengths at a Glance
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-300">
                    <CheckCircle className="w-4 h-4 text-teal-400 shrink-0" />
                    <span>Rigorous Computer Science fundamentals (OOP, DSA, DBMS)</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-300">
                    <CheckCircle className="w-4 h-4 text-teal-400 shrink-0" />
                    <span>FastAPI & REST API engineering with JWT security</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-300">
                    <CheckCircle className="w-4 h-4 text-teal-400 shrink-0" />
                    <span>Machine Learning model training & exploratory data analysis</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-300">
                    <CheckCircle className="w-4 h-4 text-teal-400 shrink-0" />
                    <span>Agile teamwork and proven hackathon leadership (HACKERS 2025)</span>
                  </div>
                </div>
              </div>

              {/* Leadership badge */}
              <div className="p-3.5 rounded-xl bg-slate-950/60 border border-slate-800 flex items-center gap-3">
                <div className="p-2 rounded-lg bg-teal-500/10 text-teal-400">
                  <Users className="w-4 h-4" />
                </div>
                <div className="text-xs">
                  <span className="font-semibold text-white">GeeksForGeeks Student Club</span>
                  <p className="text-slate-400">Content & Documentation Lead, college chapter</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: 4 Technical Pillars */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {pillars.map((pillar, idx) => (
              <div
                key={idx}
                className="p-5 sm:p-6 rounded-2xl bg-slate-900/60 border border-slate-800/80 hover:border-slate-700 hover:bg-slate-900/90 transition-all duration-300 group flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="p-3 rounded-xl bg-slate-950/80 border border-slate-800 w-fit group-hover:scale-105 transition-transform shadow-sm">
                    {pillar.icon}
                  </div>
                  <h4 className="text-base font-bold text-white group-hover:text-teal-300 transition-colors">
                    {pillar.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
                <div className="pt-4 mt-2 border-t border-slate-800/60 flex items-center gap-1.5 text-[11px] font-mono text-slate-500 group-hover:text-teal-400 transition-colors">
                  <Code className="w-3 h-3" />
                  <span>Production & Project Tested</span>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
