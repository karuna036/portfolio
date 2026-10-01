import React from 'react';
import { Download, FileText, CheckCircle2, ArrowRight } from 'lucide-react';
import { profileData } from '../../data/profile';

export default function Resume({ onOpenResume }) {
  return (
    <section id="resume" className="py-20 bg-slate-100/60 dark:bg-slate-900/40 border-y border-slate-200/70 dark:border-slate-800/70 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 border border-slate-800 p-8 sm:p-12 lg:p-16 text-white shadow-[0_20px_50px_-10px_rgba(15,23,42,0.2)] dark:shadow-2xl dark:shadow-cyan-950/30 ring-1 ring-slate-800">
          
          {/* Subtle decorative glow */}
          <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 rounded-full bg-cyan-500/10 blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-blue-500/10 blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-3xl mx-auto text-center space-y-6">
            
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-medium text-cyan-400 bg-cyan-950/80 border border-cyan-800">
              <FileText className="w-3.5 h-3.5" />
              <span>Curriculum Vitae</span>
            </span>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight">
              Interested in working together?
            </h2>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto">
              Download my resume to learn more about my experience and technical skills. Available for full-time engineering roles and strategic project collaborations.
            </p>

            {/* Quick checkmarks */}
            <div className="flex flex-wrap items-center justify-center gap-4 text-xs font-mono text-slate-400 pt-2">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                {profileData.experienceYears} Experience
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                Full Stack & REST APIs
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                {profileData.availability}
              </span>
            </div>

            {/* Buttons */}
            <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
              <a
                href={profileData.resume.downloadUrl}
                download={profileData.resume.fileName}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 shadow-lg shadow-cyan-600/30 hover:shadow-cyan-600/50 transition-all focus:outline-none focus:ring-2 focus:ring-cyan-400"
              >
                <Download className="w-4 h-4" />
                <span>Download Resume</span>
              </a>

              <button
                type="button"
                onClick={onOpenResume}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-sm font-semibold text-slate-200 bg-slate-800 hover:bg-slate-700 border border-slate-700 hover:border-slate-600 transition-all focus:outline-none focus:ring-2 focus:ring-cyan-400"
              >
                <FileText className="w-4 h-4 text-cyan-400" />
                <span>View Resume</span>
              </button>
            </div>

            <p className="text-[11px] text-slate-500 font-mono">
              Resume path configured via <code className="text-cyan-400">profile.js</code> • Instant preview available
            </p>

          </div>

        </div>

      </div>
    </section>
  );
}
