import React from 'react';
import SectionHeading from '../common/SectionHeading';
import { expertiseData } from '../../data/expertise';
import { 
  Layout, 
  Server, 
  Database, 
  Cpu, 
  CheckCircle2, 
  ArrowUpRight 
} from 'lucide-react';

const iconsMap = {
  Layout: Layout,
  Server: Server,
  Database: Database,
  Cpu: Cpu,
};

export default function Expertise() {
  return (
    <section id="expertise" className="py-20 bg-slate-100/60 dark:bg-slate-900/40 border-y border-slate-200/70 dark:border-slate-800/70 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeading
          eyebrow="Specialization"
          title="Technical Expertise"
          subtitle="Specific engineering proficiencies across client-side architecture, server design, data integrity, and external integrations."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {expertiseData.map((category) => {
            const Icon = iconsMap[category.icon] || Server;

            return (
              <div
                key={category.id}
                className="card-luminous p-6 sm:p-8 rounded-2xl space-y-6"
              >
                {/* Header */}
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-xl bg-cyan-50 dark:bg-cyan-950/70 text-cyan-600 dark:text-cyan-400 border border-cyan-100 dark:border-cyan-900/40">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                      {category.category}
                    </h3>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                      {category.description}
                    </p>
                  </div>
                </div>

                {/* Capabilities grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  {category.capabilities.map((item) => (
                    <div
                      key={item.name}
                      className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200/60 dark:border-slate-800"
                    >
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-cyan-500 shrink-0" />
                        <h4 className="text-xs font-semibold text-slate-900 dark:text-white">
                          {item.name}
                        </h4>
                      </div>
                      <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-1 pl-6 leading-relaxed">
                        {item.detail}
                      </p>
                    </div>
                  ))}
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
