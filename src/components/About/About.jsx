import React from 'react';
import SectionHeading from '../common/SectionHeading';
import { profileData } from '../../data/profile';
import { 
  CheckCircle2, 
  Clock, 
  Layers, 
  ShieldCheck, 
  Zap, 
  CreditCard, 
  Terminal, 
  GraduationCap, 
  Sparkles, 
  Globe2 
} from 'lucide-react';

export default function About() {
  const highlights = [
    {
      title: "2.10 Years Experience",
      detail: "Associate Full Stack Developer at NETAXIS IT SOLUTIONS (P) LTD building production web apps.",
      icon: Clock,
    },
    {
      title: "Angular & React.js",
      detail: "Creating interactive, dynamic, and responsive interfaces with modular component architecture.",
      icon: Layers,
    },
    {
      title: "Laravel & PHP Backend",
      detail: "Designing robust backend services, secure REST API endpoints, and modular MVC architecture.",
      icon: ShieldCheck,
    },
    {
      title: "Database Normalization",
      detail: "MySQL database normalization, performance tuning, and efficient data retrieval for high-traffic apps.",
      icon: Zap,
    },
    {
      title: "Firebase FCM & Real-Time",
      detail: "Engineered real-time notification engines with Firebase FCM and asynchronous message queuing.",
      icon: Sparkles,
    },
    {
      title: "DNS & Lua Scripting",
      detail: "Custom Lua scripts for PowerDNS handling, programmatic traffic control, and request efficiency.",
      icon: Terminal,
    },
  ];

  return (
    <section id="about" className="py-20 bg-slate-100/60 dark:bg-slate-900/40 border-y border-slate-200/70 dark:border-slate-800/70 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeading
          eyebrow="Professional Profile"
          title="About & Engineering Background"
          subtitle="Associate Full Stack Developer with 2.10 years of experience delivering scalable web applications from the ground up."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Main Narrative */}
          <div className="lg:col-span-7 space-y-6">
            <div className="card-luminous p-6 sm:p-8 rounded-2xl space-y-4">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white flex flex-wrap items-center gap-2">
                <span>Associate Full Stack Developer</span>
                <span className="text-xs font-mono font-medium px-2.5 py-0.5 rounded-full bg-cyan-100 dark:bg-cyan-950 text-cyan-700 dark:text-cyan-300 border border-cyan-300 dark:border-cyan-800">
                  NETAXIS IT SOLUTIONS (P) LTD
                </span>
              </h3>

              {profileData.aboutBio.map((paragraph, index) => (
                <p key={index} className="text-sm sm:text-base leading-relaxed text-slate-600 dark:text-slate-300">
                  {paragraph}
                </p>
              ))}

              {/* Core Strengths */}
              <div className="pt-4 border-t border-slate-100 dark:border-slate-800/80">
                <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-cyan-600 dark:text-cyan-400 mb-3">
                  Key Professional Competencies
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs text-slate-700 dark:text-slate-300">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-cyan-500 shrink-0" />
                    <span>2.10 years building responsive apps from ground up</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-cyan-500 shrink-0" />
                    <span>Angular & React.js frontend development</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-cyan-500 shrink-0" />
                    <span>PHP & Laravel modular backend architecture</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-cyan-500 shrink-0" />
                    <span>MySQL normalization & performance tuning</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-cyan-500 shrink-0" />
                    <span>Firebase FCM real-time notification engines</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-cyan-500 shrink-0" />
                    <span>Custom Lua scripting for PowerDNS filtering</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-cyan-500 shrink-0" />
                    <span>Payment APIs & automated webhook synchronization</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-cyan-500 shrink-0" />
                    <span>AI-assisted workflow: Copilot, Claude & Cursor AI</span>
                  </div>
                </div>
              </div>

              {/* Education & Languages Preview */}
              <div className="pt-4 border-t border-slate-100 dark:border-slate-800/80 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs">
                <div className="flex items-center gap-2 text-slate-700 dark:text-slate-300">
                  <GraduationCap className="w-4 h-4 text-cyan-500 shrink-0" />
                  <span><strong>B.Tech IT</strong> — Anna University (2022)</span>
                </div>
                <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400 font-mono text-[11px]">
                  <Globe2 className="w-3.5 h-3.5 text-cyan-500 shrink-0" />
                  <span>Languages: English, Tamil</span>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Metrics & Highlights Grid */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
            {highlights.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className="card-luminous p-4 sm:p-5 rounded-xl flex items-start gap-4"
                >
                  <div className="p-2.5 rounded-lg bg-cyan-50 dark:bg-cyan-950/70 text-cyan-600 dark:text-cyan-400 shrink-0">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-slate-900 dark:text-white">
                      {item.title}
                    </h4>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 leading-relaxed">
                      {item.detail}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
