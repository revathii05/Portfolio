import React from 'react';
import { X, Download, Printer, FileText, Phone, Mail, MapPin } from 'lucide-react';
import { personalInfo, experiences, projects, educationHistory, certifications, achievements } from '../data/portfolioData';
import { LinkedinIcon } from './Icons';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/85 backdrop-blur-md overflow-y-auto animate-fadeIn">
      <div className="relative w-full max-w-4xl max-h-[92vh] flex flex-col rounded-2xl bg-slate-900 border border-slate-800 shadow-2xl overflow-hidden my-auto">
        
        {/* Modal Top Control Bar */}
        <div className="flex items-center justify-between px-6 py-4 bg-slate-950 border-b border-slate-800 shrink-0">
          <div className="flex items-center gap-2">
            <FileText className="w-5 h-5 text-teal-400" />
            <div>
              <h3 className="text-sm font-bold text-white">
                Official Resume Document — {personalInfo.name}
              </h3>
              <p className="text-[11px] text-slate-400 font-mono">
                Source: public/Revathi_Palla_Resume.docx
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 transition-colors"
              title="Print or Save to PDF"
            >
              <Printer className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Print / Save PDF</span>
            </button>

            <a
              href={personalInfo.resumePath}
              download="Revathi_Palla_Resume.docx"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-bold bg-teal-400 hover:bg-teal-300 text-slate-950 shadow-sm transition-all"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download (.docx)</span>
            </a>

            <button
              onClick={onClose}
              className="p-1.5 rounded-lg bg-slate-800 text-slate-400 hover:text-white transition-colors ml-1"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Formatted Resume Preview Body */}
        <div className="p-6 sm:p-10 overflow-y-auto bg-slate-950 text-slate-200 space-y-8 print:p-0 print:bg-white print:text-black">
          
          {/* Header */}
          <div className="text-center pb-6 border-b border-slate-800 space-y-2">
            <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white uppercase">
              {personalInfo.name}
            </h1>
            <p className="text-sm font-bold text-teal-400 tracking-wide font-mono">
              Data Science | Data Analyst | Full-Stack Developer
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 text-xs text-slate-400 pt-1 font-mono">
              <span className="flex items-center gap-1">
                <Phone className="w-3.5 h-3.5 text-teal-400" />
                {personalInfo.phone}
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <Mail className="w-3.5 h-3.5 text-teal-400" />
                {personalInfo.email}
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-teal-400" />
                {personalInfo.location}
              </span>
              <span>•</span>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1 text-teal-400 hover:underline"
              >
                <LinkedinIcon className="w-3.5 h-3.5" />
                linkedin.com/in/revathi-p8280342b8
              </a>
            </div>
          </div>

          {/* Professional Summary */}
          <div className="space-y-2">
            <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-teal-400 border-b border-teal-500/20 pb-1">
              Professional Summary
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed text-justify">
              {personalInfo.summary}
            </p>
          </div>

          {/* Technical Skills */}
          <div className="space-y-2.5">
            <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-teal-400 border-b border-teal-500/20 pb-1">
              Technical Skills
            </h2>
            <div className="grid grid-cols-1 gap-1.5 text-xs">
              <div>
                <strong className="text-white">Programming Languages: </strong>
                <span className="text-slate-300">Python, Java, SQL, C, JavaScript</span>
              </div>
              <div>
                <strong className="text-white">Frontend Development: </strong>
                <span className="text-slate-300">HTML, CSS, JavaScript, React.js, Angular</span>
              </div>
              <div>
                <strong className="text-white">Backend Development: </strong>
                <span className="text-slate-300">FastAPI, REST APIs, JWT Authentication, SQL, MySQL</span>
              </div>
              <div>
                <strong className="text-white">Data Science & Machine Learning: </strong>
                <span className="text-slate-300">Pandas, NumPy, Scikit-learn, Matplotlib</span>
              </div>
              <div>
                <strong className="text-white">Data Visualization & BI: </strong>
                <span className="text-slate-300">Power BI, Power Query, DAX, Excel</span>
              </div>
              <div>
                <strong className="text-white">Tools & Platforms: </strong>
                <span className="text-slate-300">Git, GitHub, Postman, VS Code, Linux/Unix</span>
              </div>
              <div>
                <strong className="text-white">Core Concepts: </strong>
                <span className="text-slate-300">OOP, Data Structures & Algorithms, DBMS, Data Preprocessing, EDA, Machine Learning, Statistics</span>
              </div>
            </div>
          </div>

          {/* Internship Experience */}
          <div className="space-y-4">
            <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-teal-400 border-b border-teal-500/20 pb-1">
              Internship Experience
            </h2>

            {experiences.map((exp) => (
              <div key={exp.id} className="space-y-1.5 text-xs">
                <div className="flex justify-between items-baseline">
                  <div>
                    <span className="font-bold text-white text-sm">{exp.role}</span>
                    <span className="text-slate-400">, {exp.company}</span>
                  </div>
                  <span className="font-mono text-slate-400 text-[11px]">{exp.timeline}</span>
                </div>
                <div className="space-y-1">
                  {exp.highlights.map((h, i) => (
                    <div key={i} className="flex items-start gap-2 text-slate-300">
                      <span className="text-teal-400 mt-0.5">•</span>
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Projects */}
          <div className="space-y-4">
            <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-teal-400 border-b border-teal-500/20 pb-1">
              Featured Projects
            </h2>

            {projects.map((proj) => (
              <div key={proj.id} className="space-y-1.5 text-xs">
                <div className="flex justify-between items-baseline">
                  <div>
                    <span className="font-bold text-white text-sm">{proj.title}</span>
                    <span className="text-slate-400 text-xs"> — {proj.subtitle}</span>
                  </div>
                  <span className="font-mono text-slate-400 text-[11px]">{proj.timeline}</span>
                </div>
                <div className="text-[11px] font-mono text-teal-300">
                  {proj.technologies.join(', ')}
                </div>
                <div className="space-y-1">
                  {proj.contributions.map((c, i) => (
                    <div key={i} className="flex items-start gap-2 text-slate-300">
                      <span className="text-teal-400 mt-0.5">•</span>
                      <span>{c}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Education */}
          <div className="space-y-3">
            <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-teal-400 border-b border-teal-500/20 pb-1">
              Education
            </h2>
            <div className="space-y-2 text-xs">
              {educationHistory.map((edu, idx) => (
                <div key={idx} className="flex justify-between items-baseline">
                  <div>
                    <span className="font-bold text-white">{edu.degree}</span>
                    <span className="text-slate-400"> — {edu.institution}</span>
                    <span className="text-teal-300 font-semibold ml-2">({edu.score})</span>
                  </div>
                  <span className="font-mono text-slate-400 text-[11px]">{edu.period}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications & Achievements */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
            <div className="space-y-2">
              <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-teal-400 border-b border-teal-500/20 pb-1">
                Certifications
              </h2>
              <div className="space-y-1 text-xs text-slate-300">
                {certifications.map((cert, idx) => (
                  <div key={idx} className="flex items-start gap-1.5">
                    <span className="text-teal-400">•</span>
                    <span><strong className="text-white">{cert.title}</strong> — {cert.issuer}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-2">
              <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-teal-400 border-b border-teal-500/20 pb-1">
                Achievements & Leadership
              </h2>
              <div className="space-y-2 text-xs text-slate-300">
                {achievements.map((ach, idx) => (
                  <div key={idx} className="space-y-0.5">
                    <div className="font-semibold text-white">
                      • {ach.title} ({ach.roleBadge})
                    </div>
                    <div className="text-[11px] text-slate-400 pl-3">
                      {ach.description}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>

        {/* Modal Bottom Footer */}
        <div className="flex items-center justify-between px-6 py-3.5 bg-slate-950 border-t border-slate-800 shrink-0">
          <span className="text-xs text-slate-400 font-mono">
            Original Word document ready for download
          </span>
          <div className="flex items-center gap-3">
            <a
              href={personalInfo.resumePath}
              download="Revathi_Palla_Resume.docx"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold bg-teal-400 hover:bg-teal-300 text-slate-950 transition-colors"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download Word Resume</span>
            </a>
            <button
              onClick={onClose}
              className="px-4 py-2 rounded-xl text-xs font-semibold bg-slate-800 hover:bg-slate-700 text-white transition-colors"
            >
              Close
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
