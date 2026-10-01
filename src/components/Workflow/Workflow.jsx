import React from 'react';
import SectionHeading from '../common/SectionHeading';
import { workflowSteps } from '../../data/workflow';
import { 
  FileSearch, 
  Layers, 
  Layout, 
  Server, 
  Database, 
  GitMerge, 
  CheckCircle2, 
  Zap, 
  CloudUpload, 
  Wrench 
} from 'lucide-react';

const iconMap = {
  FileSearch,
  Layers,
  Layout,
  Server,
  Database,
  GitMerge,
  CheckCircle2,
  Zap,
  CloudUpload,
  Wrench,
};

export default function Workflow() {
  return (
    <section id="workflow" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeading
          eyebrow="Methodology"
          title="Development Workflow"
          subtitle="A structured, disciplined engineering process from initial requirement discovery through deployment and long-term maintenance."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {workflowSteps.map((step) => {
            const Icon = iconMap[step.icon] || Layers;

            return (
              <div
                key={step.step}
                className="card-luminous relative p-5 rounded-2xl flex flex-col justify-between group"
              >
                <div>
                  {/* Step Number & Icon */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-mono font-bold text-cyan-600 dark:text-cyan-400 px-2 py-0.5 rounded-md bg-cyan-50 dark:bg-cyan-950/80 border border-cyan-200 dark:border-cyan-800">
                      Step {step.step}
                    </span>
                    <span className="p-2 rounded-xl bg-slate-50 dark:bg-slate-800 text-slate-500 dark:text-slate-400 group-hover:text-cyan-500 transition-colors">
                      <Icon className="w-4 h-4" />
                    </span>
                  </div>

                  <h3 className="text-sm font-bold text-slate-900 dark:text-white mb-2 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
                    {step.title}
                  </h3>

                  <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                    {step.description}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-end">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-500/50 group-hover:bg-cyan-500 group-hover:scale-125 transition-all" />
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
