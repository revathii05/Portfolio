import React from 'react';
import { ArrowUp, Mail } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import { GithubIcon, LinkedinIcon } from './Icons';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 border-t border-slate-800/80 py-12 relative text-xs text-slate-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Left info */}
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-xl bg-gradient-to-tr from-teal-500 to-indigo-600 flex items-center justify-center font-bold text-white text-sm">
              RP
            </div>
            <div>
              <div className="font-bold text-slate-200 text-sm">
                {personalInfo.name}
              </div>
              <p className="text-slate-400 text-xs">
                {personalInfo.role} • Visakhapatnam, India
              </p>
            </div>
          </div>

          {/* Quick nav links */}
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 font-medium">
            <a href="#about" className="hover:text-teal-300 transition-colors">About</a>
            <a href="#skills" className="hover:text-teal-300 transition-colors">Skills</a>
            <a href="#projects" className="hover:text-teal-300 transition-colors">Projects</a>
            <a href="#experience" className="hover:text-teal-300 transition-colors">Experience</a>
            <a href="#education" className="hover:text-teal-300 transition-colors">Education</a>
            <a href="#contact" className="hover:text-teal-300 transition-colors">Contact</a>
          </div>

          {/* Social and back to top */}
          <div className="flex items-center gap-3">
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-slate-900 border border-slate-800 hover:text-white transition-colors"
              title="LinkedIn"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-slate-900 border border-slate-800 hover:text-white transition-colors"
              title="GitHub"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              className="p-2 rounded-lg bg-slate-900 border border-slate-800 hover:text-white transition-colors"
              title="Email"
            >
              <Mail className="w-4 h-4" />
            </a>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-slate-900 border border-slate-800 hover:bg-slate-800 text-teal-400 transition-colors ml-2"
              title="Back to Top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>

        </div>

        <div className="mt-8 pt-6 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between text-slate-500 text-[11px] gap-2">
          <div>
            Built with React, Vite, TypeScript & Tailwind CSS • Grounded strictly on verified resume credentials.
          </div>
          <div>
            © {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};
