import React from 'react';
import SectionHeading from '../common/SectionHeading';
import { experienceData } from '../../data/experience';
import { 
  Briefcase, 
  MapPin, 
  Calendar, 
  CheckCircle2, 
  Layers, 
  Code2, 
  Database, 
  ShieldCheck, 
  Terminal, 
  CreditCard 
} from 'lucide-react';

export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-slate-100/60 dark:bg-slate-900/40 border-y border-slate-200/70 dark:border-slate-800/70 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeading
          eyebrow="Work History"
          title="Professional Experience"
          subtitle="Real-world development experience delivering end-to-end web features, robust APIs, and performant data architecture."
        />

        <div className="max-w-4xl mx-auto">
          {experienceData.map((exp) => (
            <div key={exp.id} className="relative pl-6 sm:pl-8 border-l-2 border-cyan-500/40 pb-8 last:pb-0">
              
              {/* Timeline marker */}
              <div className="absolute -left-[17px] top-0 p-1.5 rounded-full bg-cyan-600 text-white shadow-md shadow-cyan-600/30">
                <Briefcase className="w-4 h-4" />
              </div>

              {/* Experience Card */}
              <div className="card-luminous p-6 sm:p-8 rounded-2xl space-y-6">
                
                {/* Header */}
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 pb-4 border-b border-slate-100 dark:border-slate-800">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
                      {exp.role}
                    </h3>
                    <div className="flex flex-wrap items-center gap-x-4 gap-y-1 mt-1 text-xs sm:text-sm text-slate-500 dark:text-slate-400">
                      <span className="font-medium text-cyan-600 dark:text-cyan-400">
                        {exp.organization}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5 text-slate-400" />
                        {exp.location}
                      </span>
                    </div>
                  </div>

                  <div className="flex flex-col sm:items-end gap-1">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-medium bg-cyan-50 dark:bg-cyan-950/60 text-cyan-700 dark:text-cyan-300 border border-cyan-200 dark:border-cyan-800">
                      <Calendar className="w-3.5 h-3.5" />
                      {exp.period}
                    </span>
                    {exp.employmentDetail && (
                      <span className="text-[11px] text-slate-500 dark:text-slate-400 italic">
                        {exp.employmentDetail}
                      </span>
                    )}
                  </div>
                </div>

                {/* Summary narrative */}
                <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                  {exp.summary}
                </p>

                {/* Responsibilities List */}
                <div>
                  <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-cyan-600 dark:text-cyan-400 mb-3">
                    Core Engineering Responsibilities
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                    {exp.responsibilities.map((resp, index) => (
                      <div
                        key={index}
                        className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200/60 dark:border-slate-800"
                      >
                        <CheckCircle2 className="w-4 h-4 text-cyan-500 shrink-0 mt-0.5" />
                        <span className="leading-snug">{resp}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tech Highlights */}
                <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex flex-wrap items-center gap-2">
                  <span className="text-xs font-mono text-slate-500 dark:text-slate-400 mr-2">
                    Key Stack:
                  </span>
                  {exp.technicalHighlights.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs font-mono px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700"
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
}
