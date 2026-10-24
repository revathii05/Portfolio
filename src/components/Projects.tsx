import React, { useState } from 'react';
import { Shield, Users, CheckCircle, ArrowUpRight, Cpu, Sliders } from 'lucide-react';
import { projects } from '../data/portfolioData';
import { Project } from '../types';
import { InteractiveFraudSimulator } from './InteractiveFraudSimulator';
import { GithubIcon } from './Icons';

export const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeTab, setActiveTab] = useState<'all' | 'simulator'>('all');

  return (
    <section id="projects" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-teal-500/10 text-teal-400 border border-teal-500/20">
            Featured Engineering
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Production-Grade Projects
          </h2>
          <p className="text-slate-400 text-base">
            End-to-end applications demonstrating FastAPI REST architectures, reactive web frontends, secure JWT flows, and relational database systems.
          </p>

          {/* Toggle between project showcase and interactive simulator */}
          <div className="pt-4 flex items-center justify-center gap-2">
            <button
              onClick={() => setActiveTab('all')}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                activeTab === 'all'
                  ? 'bg-teal-500 text-slate-950 shadow-md'
                  : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
              }`}
            >
              Project Case Studies
            </button>
            <button
              onClick={() => setActiveTab('simulator')}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all flex items-center gap-1.5 ${
                activeTab === 'simulator'
                  ? 'bg-teal-500 text-slate-950 shadow-md'
                  : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
              }`}
            >
              <Sliders className="w-3.5 h-3.5" />
              <span>Interactive Fraud Engine Demo</span>
            </button>
          </div>
        </div>

        {/* Tab 1: Interactive Simulator spotlight if active */}
        {activeTab === 'simulator' && (
          <div className="mb-14 animate-fadeIn">
            <InteractiveFraudSimulator />
          </div>
        )}

        {/* Tab 2: Project Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-slate-700/80 transition-all duration-300 shadow-xl overflow-hidden flex flex-col justify-between group"
            >
              <div>
                {/* Visual Project Preview Header Banner */}
                <div className="relative h-56 bg-slate-950 border-b border-slate-800 p-6 flex flex-col justify-between overflow-hidden">
                  {/* Subtle Background Glow */}
                  <div className={`absolute -right-10 -bottom-10 w-44 h-44 rounded-full blur-3xl pointer-events-none ${
                    project.id === 'fraud-shield' ? 'bg-teal-500/20' : 'bg-indigo-500/20'
                  }`} />

                  {/* Top Bar of Preview */}
                  <div className="flex items-center justify-between z-10">
                    <div className="flex items-center gap-2">
                      <div className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-white">
                        {project.id === 'fraud-shield' ? (
                          <Shield className="w-5 h-5 text-teal-400" />
                        ) : (
                          <Users className="w-5 h-5 text-indigo-400" />
                        )}
                      </div>
                      <span className="font-mono text-xs text-slate-400">
                        {project.timeline}
                      </span>
                    </div>

                    <span className="text-xs font-mono px-2.5 py-1 rounded-full bg-slate-900 text-teal-300 border border-slate-800 font-medium">
                      {project.category}
                    </span>
                  </div>

                  {/* Architecture Mini Diagram Visualization */}
                  <div className="z-10 bg-slate-900/90 border border-slate-800/80 rounded-xl p-3 backdrop-blur-md">
                    <div className="text-[10px] font-mono text-slate-400 uppercase mb-2 flex items-center justify-between">
                      <span>System Architecture Flow</span>
                      <span className="text-teal-400 flex items-center gap-1">
                        <Cpu className="w-3 h-3" />
                        REST API
                      </span>
                    </div>
                    <div className="flex items-center justify-between gap-1 text-[11px] font-mono">
                      <span className="px-2 py-1 rounded bg-slate-950 text-slate-300 border border-slate-800">
                        {project.id === 'fraud-shield' ? 'React Dashboard' : 'Angular Client'}
                      </span>
                      <span className="text-slate-600">&harr;</span>
                      <span className="px-2 py-1 rounded bg-teal-950/60 text-teal-300 border border-teal-500/30 font-semibold">
                        FastAPI + JWT
                      </span>
                      <span className="text-slate-600">&harr;</span>
                      <span className="px-2 py-1 rounded bg-slate-950 text-indigo-300 border border-slate-800">
                        {project.id === 'fraud-shield' ? 'SQL Database' : 'SQL / MySQL'}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Card Content Body */}
                <div className="p-6 sm:p-7 space-y-4">
                  <div>
                    <h3 className="text-2xl font-bold text-white group-hover:text-teal-300 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-xs font-medium text-teal-400/90 font-mono mt-1">
                      {project.subtitle}
                    </p>
                  </div>

                  <p className="text-sm text-slate-300 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Problem & Solution Snippet */}
                  <div className="p-3.5 rounded-xl bg-slate-950/60 border border-slate-800 space-y-2 text-xs">
                    <div>
                      <span className="text-slate-400 font-semibold">The Problem: </span>
                      <span className="text-slate-300">{project.problem}</span>
                    </div>
                    <div className="pt-1.5 border-t border-slate-800/80">
                      <span className="text-teal-400 font-semibold">The Solution: </span>
                      <span className="text-slate-300">{project.solution}</span>
                    </div>
                  </div>

                  {/* Key Highlights / Features */}
                  <div className="space-y-2">
                    <div className="text-xs font-semibold text-slate-400 uppercase font-mono tracking-wider">
                      Key Capabilities & Contributions:
                    </div>
                    <div className="space-y-1.5">
                      {project.contributions.slice(0, 3).map((item, idx) => (
                        <div key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                          <CheckCircle className="w-3.5 h-3.5 text-teal-400 shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Tech Stack Chips */}
                  <div className="pt-2">
                    <div className="flex flex-wrap gap-1.5">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="text-[11px] font-mono px-2.5 py-0.5 rounded-lg bg-slate-950 text-slate-300 border border-slate-800"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Card Footer Actions */}
              <div className="p-6 pt-0 border-t border-slate-800/80 mt-4 flex items-center justify-between gap-3">
                <button
                  onClick={() => setSelectedProject(project)}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-teal-400 hover:text-teal-300 transition-colors py-2"
                >
                  <span>Project Deep Dive & Specifications</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>

                <div className="flex items-center gap-2">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 border border-slate-800 hover:border-slate-700 text-slate-400 hover:text-white transition-all"
                      title="View GitHub Repository"
                    >
                      <GithubIcon className="w-4 h-4" />
                    </a>
                  )}
                  {project.id === 'fraud-shield' && (
                    <button
                      onClick={() => setActiveTab('simulator')}
                      className="px-3 py-1.5 text-xs font-semibold rounded-lg bg-teal-500/10 text-teal-300 border border-teal-500/30 hover:bg-teal-500/20 transition-colors"
                    >
                      Live Demo
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Project Detail Modal */}
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-fadeIn">
            <div className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-2xl bg-slate-900 border border-slate-800 shadow-2xl p-6 sm:p-8 space-y-6">
              
              {/* Modal Header */}
              <div className="flex items-start justify-between gap-4 pb-4 border-b border-slate-800">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xs font-mono px-2 py-0.5 rounded bg-teal-500/10 text-teal-400 border border-teal-500/20">
                      {selectedProject.timeline}
                    </span>
                    <span className="text-xs font-mono px-2 py-0.5 rounded bg-slate-800 text-slate-300">
                      {selectedProject.category}
                    </span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                    {selectedProject.title}
                  </h3>
                  <p className="text-sm text-teal-400 font-mono mt-0.5">
                    {selectedProject.subtitle}
                  </p>
                </div>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="p-2 rounded-lg bg-slate-800 text-slate-400 hover:text-white transition-colors"
                >
                  ✕
                </button>
              </div>

              {/* Problem Statement */}
              <div className="space-y-2">
                <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 font-bold">
                  Problem & Objective
                </h4>
                <p className="text-sm text-slate-300 leading-relaxed bg-slate-950 p-4 rounded-xl border border-slate-800">
                  {selectedProject.problem}
                </p>
              </div>

              {/* Solution & Implementation */}
              <div className="space-y-2">
                <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 font-bold">
                  Architectural Solution
                </h4>
                <p className="text-sm text-slate-300 leading-relaxed bg-slate-950 p-4 rounded-xl border border-slate-800">
                  {selectedProject.solution}
                </p>
              </div>

              {/* Detailed Contributions */}
              <div className="space-y-3">
                <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 font-bold">
                  Documented Technical Contributions
                </h4>
                <div className="space-y-2">
                  {selectedProject.contributions.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                      <CheckCircle className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technologies Used */}
              <div className="space-y-2">
                <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 font-bold">
                  Technology Stack
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.technologies.map((t) => (
                    <span
                      key={t}
                      className="px-3 py-1 rounded-lg text-xs font-mono bg-slate-950 text-teal-300 border border-slate-800 font-medium"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Modal Actions */}
              <div className="pt-4 border-t border-slate-800 flex flex-wrap items-center justify-between gap-3">
                <div className="text-xs text-slate-500 font-mono">
                  Verified Project Portfolio Documentation
                </div>
                <div className="flex items-center gap-3">
                  {selectedProject.githubUrl && (
                    <a
                      href={selectedProject.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold text-white bg-slate-800 hover:bg-slate-700 border border-slate-700 transition-colors"
                    >
                      <GithubIcon className="w-4 h-4" />
                      <span>View GitHub Repo</span>
                    </a>
                  )}
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="px-4 py-2 rounded-xl text-xs font-semibold text-slate-950 bg-teal-400 hover:bg-teal-300 transition-colors"
                  >
                    Close
                  </button>
                </div>
              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
};
