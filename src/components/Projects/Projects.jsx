import React, { useState } from 'react';
import SectionHeading from '../common/SectionHeading';
import { projectsData } from '../../data/projects';
import { 
  FolderGit2, 
  CheckCircle2, 
  Sparkles,
  Layers
} from 'lucide-react';

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('all');

  const categories = ['all', ...Array.from(new Set(projectsData.map((p) => p.category)))];

  const filteredProjects = activeFilter === 'all'
    ? projectsData
    : projectsData.filter((p) => p.category === activeFilter);

  return (
    <section id="projects" className="py-16 md:py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeading
          eyebrow="Portfolio Showcase"
          title="Featured Engineering Projects"
          subtitle="Production web applications, workflow automation platforms, and low-level system integrations engineered with scalable architectures."
        />

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10 md:mb-14">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setActiveFilter(cat)}
              className={`px-3.5 py-1.5 md:px-4 md:py-2 text-xs font-medium rounded-xl transition-all duration-200 ${
                activeFilter === cat
                  ? 'bg-cyan-600 text-white shadow-md shadow-cyan-600/25 font-semibold'
                  : 'bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white border border-slate-200/80 dark:border-slate-800'
              }`}
            >
              {cat === 'all' ? 'All Projects' : cat}
            </button>
          ))}
        </div>

        {/* Projects Grid: fully responsive across mobile (1 col), tablet/laptop (2 cols on md), and wide desktop (3 cols on lg) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="card-luminous flex flex-col justify-between rounded-2xl group overflow-hidden relative before:absolute before:top-0 before:left-0 before:right-0 before:h-1 before:bg-gradient-to-r before:from-cyan-500 before:to-blue-500 before:opacity-0 hover:before:opacity-100 before:transition-opacity duration-300"
            >
              <div>
                {/* Card Header & Category Badge */}
                <div className="p-5 sm:p-6 border-b border-slate-100 dark:border-slate-800/80 bg-slate-50/60 dark:bg-slate-900/60">
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="text-[11px] font-mono font-medium px-2.5 py-0.5 rounded-full bg-cyan-50 dark:bg-cyan-950/80 text-cyan-700 dark:text-cyan-300 border border-cyan-200 dark:border-cyan-800">
                      {project.category}
                    </span>
                    <span className="p-1.5 rounded-lg bg-white dark:bg-slate-800 text-cyan-500 border border-slate-200/60 dark:border-slate-700 shadow-2xs">
                      <FolderGit2 className="w-4 h-4" />
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 font-mono">
                    {project.subtitle || project.highlight}
                  </p>
                </div>

                {/* Card Body */}
                <div className="p-5 sm:p-6 space-y-5">
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                    {project.shortDescription}
                  </p>

                  {/* Key Features */}
                  <div>
                    <h4 className="text-[11px] font-mono font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-2.5">
                      Key Highlights & Features
                    </h4>
                    <ul className="space-y-2">
                      {project.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-xs text-slate-700 dark:text-slate-300">
                          <CheckCircle2 className="w-3.5 h-3.5 text-cyan-500 shrink-0 mt-0.5" />
                          <span className="leading-snug">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div className="pt-2 border-t border-slate-100 dark:border-slate-800/60">
                    <h4 className="text-[11px] font-mono font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-2">
                      Technologies & Stack
                    </h4>
                    <div className="flex flex-wrap gap-1.5">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-0.5 rounded text-[11px] font-mono bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200/80 dark:border-slate-700"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Clean bottom card footer accent */}
              <div className="px-5 sm:px-6 py-3 border-t border-slate-100 dark:border-slate-800/80 bg-slate-50/40 dark:bg-slate-900/40 flex items-center justify-between text-[11px] text-slate-500 dark:text-slate-400 font-mono">
                <span className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                  Production Proven
                </span>
                <span className="text-cyan-600 dark:text-cyan-400 font-medium">
                  Full Stack
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
