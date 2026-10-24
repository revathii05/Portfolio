import React, { useState } from 'react';
import { Code2, Server, Layout, Database, BarChart3, Terminal, Search, Sparkles } from 'lucide-react';
import { skillCategories } from '../data/portfolioData';

export const Skills: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categoryIcons: Record<string, React.ReactNode> = {
    "Programming Languages": <Code2 className="w-4 h-4 text-teal-400" />,
    "Backend & APIs": <Server className="w-4 h-4 text-indigo-400" />,
    "Frontend Engineering": <Layout className="w-4 h-4 text-emerald-400" />,
    "Data Science & Machine Learning": <Database className="w-4 h-4 text-cyan-400" />,
    "Data Visualization & Business Intelligence": <BarChart3 className="w-4 h-4 text-amber-400" />,
    "Developer Tools & Core Concepts": <Terminal className="w-4 h-4 text-rose-400" />,
  };

  const categories = ['All', ...skillCategories.map((c) => c.category)];

  const filteredCategories = skillCategories.map((cat) => {
    const matchesCategory = selectedCategory === 'All' || cat.category === selectedCategory;
    if (!matchesCategory) return null;

    const filteredSkills = cat.skills.filter((skill) => {
      if (!searchQuery.trim()) return true;
      const q = searchQuery.toLowerCase();
      return (
        skill.name.toLowerCase().includes(q) ||
        skill.description.toLowerCase().includes(q) ||
        skill.tags?.some((t) => t.toLowerCase().includes(q))
      );
    });

    if (filteredSkills.length === 0) return null;

    return {
      ...cat,
      skills: filteredSkills,
    };
  }).filter(Boolean);

  return (
    <section id="skills" className="py-24 bg-slate-950/50 relative border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-teal-500/10 text-teal-400 border border-teal-500/20">
            Technical Stack
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Verified Skills & Technologies
          </h2>
          <p className="text-slate-400 text-base">
            Grounded in rigorous academic coursework, three targeted internships, and full-stack software development.
          </p>
        </div>

        {/* Search & Filter Controls */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10">
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-1.5 p-1.5 rounded-xl bg-slate-900/90 border border-slate-800 w-full md:w-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-all ${
                  selectedCategory === cat
                    ? 'bg-teal-500 text-slate-950 font-bold shadow-sm'
                    : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
                }`}
              >
                {cat === 'All' ? 'All Skills' : cat.split(' ')[0]}
              </button>
            ))}
          </div>

          {/* Quick Search */}
          <div className="relative w-full md:w-64">
            <Search className="w-4 h-4 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search skill (e.g. FastAPI)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-3 py-1.5 rounded-xl text-xs bg-slate-900/90 border border-slate-800 text-white placeholder-slate-500 focus:outline-none focus:border-teal-500 transition-colors"
            />
          </div>
        </div>

        {/* Skills Display Grid */}
        <div className="space-y-10">
          {filteredCategories.map((group) => {
            if (!group) return null;
            return (
              <div key={group.category} className="space-y-4">
                <div className="flex items-center gap-2.5 pb-2 border-b border-slate-800/80">
                  <div className="p-1.5 rounded-lg bg-slate-900 border border-slate-800">
                    {categoryIcons[group.category] || <Code2 className="w-4 h-4 text-teal-400" />}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white tracking-tight">
                      {group.category}
                    </h3>
                    <p className="text-xs text-slate-400">
                      {group.description}
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
                  {group.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className={`p-4 rounded-xl border transition-all duration-200 group flex flex-col justify-between ${
                        skill.highlight
                          ? 'bg-slate-900/90 border-slate-700/80 hover:border-teal-500/50 hover:bg-slate-850 shadow-md'
                          : 'bg-slate-900/50 border-slate-800/60 hover:border-slate-700 hover:bg-slate-900/80'
                      }`}
                    >
                      <div>
                        <div className="flex items-center justify-between gap-2 mb-1.5">
                          <span className="font-bold text-sm text-white group-hover:text-teal-300 transition-colors flex items-center gap-1.5">
                            {skill.name}
                            {skill.highlight && (
                              <Sparkles className="w-3.5 h-3.5 text-teal-400" />
                            )}
                          </span>
                          {skill.highlight && (
                            <span className="text-[10px] uppercase font-mono px-2 py-0.5 rounded-full bg-teal-500/10 text-teal-300 border border-teal-500/20 font-semibold">
                              Core
                            </span>
                          )}
                        </div>
                        <p className="text-xs text-slate-400 leading-relaxed mb-3">
                          {skill.description}
                        </p>
                      </div>

                      {skill.tags && (
                        <div className="flex flex-wrap gap-1.5 pt-2 border-t border-slate-800/50">
                          {skill.tags.map((tag) => (
                            <span
                              key={tag}
                              className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-950 text-slate-300 border border-slate-800"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            );
          })}

          {filteredCategories.length === 0 && (
            <div className="text-center py-12 text-slate-500 text-sm">
              No skills found matching "{searchQuery}". Try searching for Python, SQL, FastAPI, or Power BI.
            </div>
          )}
        </div>

      </div>
    </section>
  );
};
