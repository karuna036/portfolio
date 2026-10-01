import React, { useEffect } from 'react';
import { X, Download, Printer, Mail, MapPin, Phone, Briefcase, GraduationCap, Code2, CheckCircle2, Globe2, Sparkles } from 'lucide-react';
import { profileData } from '../../data/profile';
import { skillsCategories } from '../../data/skills';
import { experienceData } from '../../data/experience';
import { projectsData } from '../../data/projects';

export default function ResumeModal({ isOpen, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/75 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="resume-title"
    >
      <div 
        className="relative w-full max-w-4xl max-h-[94vh] flex flex-col bg-white dark:bg-slate-900 rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-800 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Bar */}
        <div className="flex items-center justify-between px-5 sm:px-6 py-4 border-b border-slate-200 dark:border-slate-800 bg-slate-50/90 dark:bg-slate-900/90">
          <div className="flex items-center gap-3">
            <span className="p-2 rounded-lg bg-cyan-100 dark:bg-cyan-950/60 text-cyan-600 dark:text-cyan-400">
              <Briefcase className="w-5 h-5" />
            </span>
            <div>
              <h3 id="resume-title" className="text-sm sm:text-base font-semibold text-slate-900 dark:text-white">
                Resume Preview — {profileData.name}
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                {profileData.role} • {profileData.experienceYears} Experience
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={handlePrint}
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg text-slate-700 dark:text-slate-300 bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-750 transition-colors"
              title="Print Resume"
            >
              <Printer className="w-4 h-4 text-slate-500" />
              <span>Print</span>
            </button>

            <a
              href={profileData.resume.downloadUrl}
              download={profileData.resume.fileName}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg text-white bg-cyan-600 hover:bg-cyan-500 transition-colors shadow-sm"
              title="Download PDF"
            >
              <Download className="w-4 h-4" />
              <span>Download PDF</span>
            </a>

            <button
              type="button"
              onClick={onClose}
              className="p-1.5 rounded-lg text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              aria-label="Close resume preview"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable Resume Content */}
        <div className="flex-1 overflow-y-auto p-5 sm:p-10 text-slate-800 dark:text-slate-200 font-sans space-y-7 print:p-0 print:text-black">
          
          {/* Resume Header */}
          <div className="border-b border-slate-200 dark:border-slate-800 pb-5 text-center sm:text-left">
            <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-950 dark:text-white uppercase">
              {profileData.name}
            </h1>
            <p className="text-base sm:text-lg font-semibold text-cyan-600 dark:text-cyan-400 mt-0.5">
              {profileData.role}
            </p>
            
            <div className="flex flex-wrap items-center justify-center sm:justify-start gap-y-2 gap-x-4 mt-3 text-xs sm:text-sm text-slate-600 dark:text-slate-400 font-mono">
              <span className="flex items-center gap-1">
                <Phone className="w-3.5 h-3.5 text-cyan-500" />
                {profileData.contact.phone}
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <Mail className="w-3.5 h-3.5 text-cyan-500" />
                {profileData.contact.email}
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-cyan-500" />
                {profileData.contact.location}
              </span>
            </div>
          </div>

          {/* Summary */}
          <div>
            <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-cyan-600 dark:text-cyan-400 pb-1 border-b border-slate-200 dark:border-slate-800 mb-2.5">
              Summary
            </h2>
            <p className="text-xs sm:text-sm leading-relaxed text-slate-700 dark:text-slate-300">
              Full Stack Developer with 2.10 years of experience building responsive web applications from the ground up. Technically proficient in Angular, React.js, PHP (Laravel), and MySQL, with a focus on performance optimization and seamless API integration. Skilled at transforming complex requirements into user-friendly UI solutions while maintaining high standards for code quality and collaborative efficiency.
            </p>
          </div>

          {/* Professional Experience */}
          <div>
            <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-cyan-600 dark:text-cyan-400 pb-1 border-b border-slate-200 dark:border-slate-800 mb-3">
              Experience
            </h2>
            {experienceData.map((exp) => (
              <div key={exp.id} className="space-y-3">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                  <div>
                    <h3 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white">
                      {exp.role}
                    </h3>
                    <p className="text-xs sm:text-sm font-semibold text-cyan-600 dark:text-cyan-400 uppercase tracking-wide">
                      {exp.organization}
                    </p>
                  </div>
                  <div className="text-right">
                    <span className="text-xs font-mono text-slate-500 dark:text-slate-400 block">
                      {exp.period}
                    </span>
                    <span className="text-[11px] text-slate-400 dark:text-slate-500 block italic">
                      ({exp.employmentDetail})
                    </span>
                  </div>
                </div>

                <ul className="space-y-2 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                  {exp.responsibilities.map((resp, idx) => (
                    <li key={idx} className="flex items-start gap-2 leading-relaxed">
                      <span className="text-cyan-500 font-bold shrink-0 mt-0.5">•</span>
                      <span>{resp}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Projects (All 4 verified from resume) */}
          <div>
            <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-cyan-600 dark:text-cyan-400 pb-1 border-b border-slate-200 dark:border-slate-800 mb-3">
              Projects
            </h2>
            <div className="space-y-4">
              {projectsData.map((project) => (
                <div key={project.id} className="p-3.5 rounded-xl border border-slate-200/90 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/40">
                  <div className="flex flex-wrap justify-between items-baseline gap-2">
                    <h3 className="text-sm font-bold text-slate-900 dark:text-white">
                      {project.title} <span className="font-normal text-slate-500 dark:text-slate-400">— {project.subtitle}</span>
                    </h3>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mt-1 leading-relaxed">
                    {project.shortDescription}
                  </p>
                  <div className="mt-2.5 flex flex-wrap gap-1.5">
                    {project.technologies.map((tech) => (
                      <span key={tech} className="text-[11px] font-mono px-2 py-0.5 rounded bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Skills & Abilities */}
          <div>
            <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-cyan-600 dark:text-cyan-400 pb-1 border-b border-slate-200 dark:border-slate-800 mb-3">
              Skills & Abilities
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm">
              {skillsCategories.map((cat) => (
                <div key={cat.id} className="p-3 rounded-lg bg-slate-50/70 dark:bg-slate-800/50 border border-slate-200/80 dark:border-slate-800">
                  <span className="font-bold text-slate-900 dark:text-white block mb-1 text-xs">
                    {cat.title}
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {cat.skills.map((s) => (
                      <span 
                        key={s.name}
                        className="px-2 py-0.5 rounded text-[11px] bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 font-mono"
                      >
                        {s.name}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-cyan-600 dark:text-cyan-400 pb-1 border-b border-slate-200 dark:border-slate-800 mb-3">
              Education
            </h2>
            <div className="space-y-2.5">
              {profileData.education.map((edu, idx) => (
                <div key={idx} className="flex flex-col sm:flex-row sm:items-center sm:justify-between text-xs sm:text-sm">
                  <div>
                    <span className="font-bold text-slate-900 dark:text-white">{edu.degree}</span>
                    <span className="text-slate-600 dark:text-slate-400 block sm:inline sm:ml-2">— {edu.institution}</span>
                  </div>
                  {edu.year && (
                    <span className="font-mono text-cyan-600 dark:text-cyan-400 text-xs">
                      {edu.year}
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Languages */}
          <div>
            <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-cyan-600 dark:text-cyan-400 pb-1 border-b border-slate-200 dark:border-slate-800 mb-2">
              Languages
            </h2>
            <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300">
              {profileData.languages.join(' | ')}
            </p>
          </div>

          {/* Declaration */}
          <div className="pt-4 border-t border-slate-200 dark:border-slate-800">
            <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-cyan-600 dark:text-cyan-400 mb-1.5">
              Declaration
            </h2>
            <p className="text-xs text-slate-600 dark:text-slate-400 italic">
              "I hereby declare that the information provided above is true and correct to the best of my knowledge and belief."
            </p>
            <p className="text-xs font-bold text-slate-900 dark:text-white mt-1 uppercase">
              {profileData.name}
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}
