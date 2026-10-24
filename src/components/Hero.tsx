import React, { useState } from 'react';
import { ArrowRight, Download, Mail, MapPin, Sparkles, Terminal, CheckCircle2, ShieldCheck, Database, Cpu } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import { GithubIcon, LinkedinIcon } from './Icons';

interface HeroProps {
  onOpenResumeModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResumeModal }) => {
  const [activeTab, setActiveTab] = useState<'stack' | 'api' | 'metrics'>('stack');
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  return (
    <section id="home" className="relative min-h-[92vh] flex items-center pt-24 pb-16 overflow-hidden">
      {/* Background ambient glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-to-tr from-teal-500/15 via-indigo-600/10 to-transparent blur-3xl rounded-full pointer-events-none" />
      <div className="absolute top-20 right-10 w-72 h-72 bg-teal-500/10 blur-[100px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-indigo-500/10 blur-[120px] pointer-events-none" />

      {/* Tech grid pattern */}
      <div className="absolute inset-0 tech-grid opacity-30 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Hero Introduction */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* Opportunity Status Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-medium bg-teal-950/60 border border-teal-500/30 text-teal-300 shadow-sm backdrop-blur-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-teal-500"></span>
              </span>
              <span>Available for Software Engineering & Data Roles</span>
            </div>

            {/* Name & Headline */}
            <div className="space-y-3">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white">
                Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-emerald-300 to-indigo-400">{personalInfo.name}</span>
              </h1>
              <p className="text-xl sm:text-2xl font-semibold text-slate-200">
                {personalInfo.role}
              </p>
              <div className="flex items-center gap-4 text-xs sm:text-sm text-slate-400">
                <span className="flex items-center gap-1.5">
                  <MapPin className="w-4 h-4 text-teal-400" />
                  Visakhapatnam, AP, India
                </span>
                <span className="hidden sm:inline text-slate-600">•</span>
                <span className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-indigo-400"></span>
                  B.Tech CS & Data Science (CGPA: 8.13)
                </span>
              </div>
            </div>

            {/* Concise Bio */}
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl">
              Specializing in the intersection of <strong className="text-white font-medium">Data Science & Machine Learning</strong> with <strong className="text-white font-medium">Modern Full-Stack Systems</strong>. Proven experience architecting secure FastAPI backends, reactive React dashboards, and end-to-end data pipelines.
            </p>

            {/* Quick Credential Highlights */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-1">
              <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800/80 backdrop-blur-sm">
                <div className="text-xs text-slate-400">Academic Merit</div>
                <div className="text-sm sm:text-base font-bold text-teal-300">8.13 CGPA</div>
                <div className="text-[11px] text-slate-500">Vignan's Inst. for Women</div>
              </div>
              <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800/80 backdrop-blur-sm">
                <div className="text-xs text-slate-400">National Hackathon</div>
                <div className="text-sm sm:text-base font-bold text-amber-300">3rd Place Winner</div>
                <div className="text-[11px] text-slate-500">HACKERS 2025 • SIH R2</div>
              </div>
              <div className="col-span-2 sm:col-span-1 p-3 rounded-xl bg-slate-900/60 border border-slate-800/80 backdrop-blur-sm">
                <div className="text-xs text-slate-400">Experience</div>
                <div className="text-sm sm:text-base font-bold text-indigo-300">3 Internships</div>
                <div className="text-[11px] text-slate-500">Analytics, BI & Web</div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-3.5">
              <a
                href="#projects"
                className="inline-flex items-center gap-2.5 px-6 py-3 rounded-xl font-semibold text-sm text-slate-950 bg-teal-400 hover:bg-teal-300 shadow-lg shadow-teal-500/20 transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                <span>View Featured Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <button
                onClick={onOpenResumeModal}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl font-semibold text-sm text-white bg-slate-900/90 hover:bg-slate-800 border border-slate-700/80 hover:border-teal-500/40 transition-all hover:scale-[1.02]"
              >
                <Download className="w-4 h-4 text-teal-400" />
                <span>Resume & Qualifications</span>
              </button>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl font-medium text-sm text-slate-300 hover:text-white bg-transparent hover:bg-slate-900/50 border border-slate-800 transition-colors"
              >
                <span>Contact Me</span>
              </a>
            </div>

            {/* Social & Contact Quick Links */}
            <div className="pt-3 flex items-center gap-4 text-slate-400">
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg bg-slate-900/80 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-700 transition-all hover:-translate-y-0.5"
                title="LinkedIn Profile"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg bg-slate-900/80 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-700 transition-all hover:-translate-y-0.5"
                title="GitHub Profile"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
              <button
                onClick={handleCopyEmail}
                className="flex items-center gap-2 px-3 py-2 rounded-lg bg-slate-900/80 border border-slate-800 text-xs text-slate-300 hover:text-white hover:border-slate-700 transition-all"
                title="Click to copy email address"
              >
                <Mail className="w-4 h-4 text-teal-400" />
                <span>{personalInfo.email}</span>
                {copiedEmail && (
                  <span className="text-[11px] text-teal-400 font-semibold bg-teal-500/10 px-1.5 py-0.5 rounded">
                    Copied!
                  </span>
                )}
              </button>
            </div>
          </div>

          {/* Right Column: Interactive Developer Telemetry / System Card */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl bg-slate-900/90 border border-slate-800 shadow-2xl overflow-hidden backdrop-blur-xl">
              
              {/* Terminal Window Header */}
              <div className="flex items-center justify-between px-4 py-3 bg-slate-950/90 border-b border-slate-800">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block"></span>
                  <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block"></span>
                  <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block"></span>
                  <span className="ml-2 font-mono text-xs text-slate-400 flex items-center gap-1.5">
                    <Terminal className="w-3.5 h-3.5 text-teal-400" />
                    revathi-workspace // developer-spec
                  </span>
                </div>
                <div className="flex items-center gap-1 text-[11px] text-slate-400 font-mono">
                  <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                  Active
                </div>
              </div>

              {/* Tabs */}
              <div className="flex border-b border-slate-800/80 bg-slate-950/40 text-xs">
                <button
                  onClick={() => setActiveTab('stack')}
                  className={`flex-1 py-2.5 px-3 font-mono font-medium transition-colors ${
                    activeTab === 'stack'
                      ? 'text-teal-400 border-b-2 border-teal-400 bg-teal-500/5'
                      : 'text-slate-400 hover:text-slate-300'
                  }`}
                >
                  Core Stack
                </button>
                <button
                  onClick={() => setActiveTab('api')}
                  className={`flex-1 py-2.5 px-3 font-mono font-medium transition-colors ${
                    activeTab === 'api'
                      ? 'text-teal-400 border-b-2 border-teal-400 bg-teal-500/5'
                      : 'text-slate-400 hover:text-slate-300'
                  }`}
                >
                  Live Architecture
                </button>
                <button
                  onClick={() => setActiveTab('metrics')}
                  className={`flex-1 py-2.5 px-3 font-mono font-medium transition-colors ${
                    activeTab === 'metrics'
                      ? 'text-teal-400 border-b-2 border-teal-400 bg-teal-500/5'
                      : 'text-slate-400 hover:text-slate-300'
                  }`}
                >
                  Credentials
                </button>
              </div>

              {/* Terminal Body */}
              <div className="p-5 font-mono text-xs space-y-4">
                {activeTab === 'stack' && (
                  <div className="space-y-3.5 animate-fadeIn">
                    <div className="text-slate-400 text-[11px]">
                      // Primary Technology Ecosystem
                    </div>
                    
                    <div className="space-y-2">
                      <div className="flex items-center justify-between p-2 rounded-lg bg-slate-950/60 border border-slate-800">
                        <span className="text-slate-300 flex items-center gap-2">
                          <Cpu className="w-3.5 h-3.5 text-teal-400" />
                          Backend & Logic
                        </span>
                        <span className="text-teal-300 font-semibold">Python • FastAPI • Java</span>
                      </div>

                      <div className="flex items-center justify-between p-2 rounded-lg bg-slate-950/60 border border-slate-800">
                        <span className="text-slate-300 flex items-center gap-2">
                          <Database className="w-3.5 h-3.5 text-indigo-400" />
                          Data Science & ML
                        </span>
                        <span className="text-indigo-300 font-semibold">Pandas • Scikit-learn • NumPy</span>
                      </div>

                      <div className="flex items-center justify-between p-2 rounded-lg bg-slate-950/60 border border-slate-800">
                        <span className="text-slate-300 flex items-center gap-2">
                          <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                          Frontend & UI
                        </span>
                        <span className="text-emerald-300 font-semibold">React.js • Angular • Tailwind</span>
                      </div>

                      <div className="flex items-center justify-between p-2 rounded-lg bg-slate-950/60 border border-slate-800">
                        <span className="text-slate-300 flex items-center gap-2">
                          <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                          BI & Dashboards
                        </span>
                        <span className="text-amber-300 font-semibold">Power BI • DAX • Power Query</span>
                      </div>
                    </div>

                    <div className="p-2.5 rounded-lg bg-teal-950/30 border border-teal-500/20 text-teal-200 text-[11px] leading-relaxed">
                      ✓ Hands-on full lifecycle: Exploratory Data Analysis &rarr; Scikit-learn Modeling &rarr; FastAPI REST Endpoints &rarr; Reactive Web Dashboards.
                    </div>
                  </div>
                )}

                {activeTab === 'api' && (
                  <div className="space-y-3 animate-fadeIn">
                    <div className="text-slate-400 text-[11px]">
                      // Featured System Endpoints
                    </div>

                    <div className="p-2.5 rounded-lg bg-slate-950/70 border border-slate-800/80 space-y-1">
                      <div className="flex items-center justify-between text-teal-400 font-bold">
                        <span>POST /api/v1/fraud-shield/evaluate</span>
                        <span className="text-emerald-400 text-[10px]">200 OK</span>
                      </div>
                      <p className="text-slate-400 text-[11px]">
                        Evaluates velocity, IP divergence & risk scoring with JWT authentication.
                      </p>
                    </div>

                    <div className="p-2.5 rounded-lg bg-slate-950/70 border border-slate-800/80 space-y-1">
                      <div className="flex items-center justify-between text-indigo-400 font-bold">
                        <span>GET /api/v1/civix/petitions/trending</span>
                        <span className="text-emerald-400 text-[10px]">200 OK</span>
                      </div>
                      <p className="text-slate-400 text-[11px]">
                        Retrieves geo-filtered public petitions & real-time sentiment distribution.
                      </p>
                    </div>

                    <div className="p-2.5 rounded-lg bg-slate-950/70 border border-slate-800/80 space-y-1">
                      <div className="flex items-center justify-between text-amber-400 font-bold">
                        <span>BI_DASHBOARD: K-Square Analytics</span>
                        <span className="text-teal-400 text-[10px]">DAX Engine</span>
                      </div>
                      <p className="text-slate-400 text-[11px]">
                        Calculated measures, interactive slicers & dynamic executive KPIs.
                      </p>
                    </div>
                  </div>
                )}

                {activeTab === 'metrics' && (
                  <div className="space-y-3 animate-fadeIn">
                    <div className="text-slate-400 text-[11px]">
                      // Verified Credentials & Recognition
                    </div>

                    <div className="space-y-2">
                      <div className="flex items-start gap-2 text-slate-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-teal-400 mt-0.5 shrink-0" />
                        <div>
                          <div className="text-white font-semibold">NPTEL Programming in Java</div>
                          <div className="text-slate-400 text-[11px]">Elite + Silver Medal Certification</div>
                        </div>
                      </div>

                      <div className="flex items-start gap-2 text-slate-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-teal-400 mt-0.5 shrink-0" />
                        <div>
                          <div className="text-white font-semibold">HACKERS 2025 National Hackathon</div>
                          <div className="text-slate-400 text-[11px]">3rd Place Winner & Team Lead (Team Vision Well)</div>
                        </div>
                      </div>

                      <div className="flex items-start gap-2 text-slate-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-teal-400 mt-0.5 shrink-0" />
                        <div>
                          <div className="text-white font-semibold">Rice University via Coursera</div>
                          <div className="text-slate-400 text-[11px]">Python for Data Science Specialization</div>
                        </div>
                      </div>

                      <div className="flex items-start gap-2 text-slate-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-teal-400 mt-0.5 shrink-0" />
                        <div>
                          <div className="text-white font-semibold">Google Developer Groups (GDG)</div>
                          <div className="text-slate-400 text-[11px]">AI for Cybersecurity & Cloud Security</div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Terminal status bar */}
                <div className="pt-2 border-t border-slate-800/80 flex items-center justify-between text-[10px] text-slate-500">
                  <span>Stack: Python • FastAPI • React • SQL</span>
                  <span>UTF-8 • Git Verified</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
