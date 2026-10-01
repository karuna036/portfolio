import React from 'react';
import { ArrowRight, Download, Mail, Github, Linkedin, Terminal, Sparkles, CheckCircle2 } from 'lucide-react';
import { profileData } from '../../data/profile';

export default function Hero({ onOpenResume }) {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative pt-28 pb-16 md:pt-36 md:pb-24 lg:pt-40 lg:pb-28 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[350px] sm:w-[650px] h-[250px] sm:h-[350px] bg-gradient-to-tr from-cyan-400/25 via-sky-300/20 to-teal-300/15 dark:from-cyan-500/15 dark:via-blue-500/10 dark:to-teal-500/5 blur-3xl pointer-events-none -z-10 rounded-full" />
      <div className="absolute top-20 right-5 sm:right-10 w-48 sm:w-72 h-48 sm:h-72 bg-cyan-400/10 dark:bg-cyan-400/5 blur-3xl pointer-events-none -z-10 rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* Left Column: Developer Headline & CTAs */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Status Pill with high contrast */}
            <div className="inline-flex flex-wrap items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-medium bg-emerald-50 dark:bg-emerald-950/50 text-emerald-800 dark:text-emerald-300 border border-emerald-300 dark:border-emerald-800/80 shadow-xs max-w-full">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse shrink-0" />
              <span>{profileData.availability}</span>
              <span className="text-slate-300 dark:text-slate-700 hidden sm:inline">|</span>
              <span className="text-slate-600 dark:text-slate-400">{profileData.location}</span>
            </div>

            {/* Name & Headline */}
            <div>
              <p className="font-mono text-cyan-600 dark:text-cyan-400 font-semibold text-xs sm:text-sm tracking-wide uppercase">
                Hello, I'm
              </p>
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white mt-1">
                {profileData.name}
              </h1>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gradient mt-2">
                {profileData.role}
              </h2>
            </div>

            {/* Short Description */}
            <p className="text-sm sm:text-base md:text-lg text-slate-600 dark:text-slate-300 max-w-xl leading-relaxed">
              "{profileData.heroSubtitle}"
            </p>

            {/* Action Buttons: Responsive for mobile, laptop, and desktop */}
            <div className="flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-3 pt-2">
              <button
                type="button"
                onClick={() => scrollTo('projects')}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 shadow-md shadow-cyan-600/20 hover:shadow-cyan-600/30 transition-all focus:outline-none focus:ring-2 focus:ring-cyan-400"
              >
                <span>View Projects</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                type="button"
                onClick={onOpenResume}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold text-slate-800 dark:text-slate-200 bg-white/90 dark:bg-slate-800/80 backdrop-blur-sm border border-slate-300 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700/80 shadow-sm transition-all focus:outline-none focus:ring-2 focus:ring-cyan-500"
              >
                <Download className="w-4 h-4 text-cyan-500" />
                <span>Download Resume</span>
              </button>

              <button
                type="button"
                onClick={() => scrollTo('contact')}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold text-cyan-700 dark:text-cyan-300 bg-cyan-50/90 dark:bg-cyan-950/60 backdrop-blur-sm border border-cyan-200 dark:border-cyan-800/60 hover:bg-cyan-100 dark:hover:bg-cyan-900/60 transition-all focus:outline-none focus:ring-2 focus:ring-cyan-500"
              >
                <Mail className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
                <span>Contact Me</span>
              </button>
            </div>

            {/* Social Links & Stack Tags */}
            <div className="pt-4 flex flex-col sm:flex-row flex-wrap items-start sm:items-center gap-4 sm:gap-6 border-t border-slate-200/80 dark:border-slate-800/80">
              <div className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400">
                <span>Profiles:</span>
                <div className="flex items-center gap-1.5">
                  <a
                    href={profileData.contact.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg text-slate-700 dark:text-slate-300 hover:text-cyan-600 dark:hover:text-cyan-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                    aria-label="GitHub Profile"
                    title="GitHub"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                  <a
                    href={profileData.contact.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                    aria-label="LinkedIn Profile"
                    title="LinkedIn"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-2">
                <span className="text-xs font-mono text-slate-500 dark:text-slate-400">Core:</span>
                <div className="flex flex-wrap gap-1.5 text-xs font-mono">
                  <span className="px-2 py-0.5 rounded bg-slate-100/90 dark:bg-slate-800/90 text-slate-700 dark:text-slate-300 border border-slate-200/80 dark:border-slate-700">React.js</span>
                  <span className="px-2 py-0.5 rounded bg-slate-100/90 dark:bg-slate-800/90 text-slate-700 dark:text-slate-300 border border-slate-200/80 dark:border-slate-700">Laravel</span>
                  <span className="px-2 py-0.5 rounded bg-slate-100/90 dark:bg-slate-800/90 text-slate-700 dark:text-slate-300 border border-slate-200/80 dark:border-slate-700">MySQL</span>
                  <span className="px-2 py-0.5 rounded bg-slate-100/90 dark:bg-slate-800/90 text-slate-700 dark:text-slate-300 border border-slate-200/80 dark:border-slate-700">REST APIs</span>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Clean Developer Terminal Card */}
          <div className="lg:col-span-5 w-full">
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              
              {/* Outer decorative card frame */}
              <div className="relative rounded-2xl bg-gradient-to-b from-slate-900 to-slate-950 p-1 shadow-[0_20px_50px_-10px_rgba(15,23,42,0.18)] dark:shadow-2xl dark:shadow-cyan-950/20 ring-1 ring-slate-900/10 dark:ring-slate-800/90 overflow-hidden">
                
                {/* Terminal Header */}
                <div className="flex items-center justify-between px-4 py-3 bg-slate-900/90 rounded-t-xl border-b border-slate-800">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                    <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                    <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                    <span className="ml-2 text-xs font-mono text-slate-400 truncate max-w-[150px] sm:max-w-none">karunakaran.config.json</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-[11px] font-mono text-cyan-400">
                    <Terminal className="w-3.5 h-3.5" />
                    <span>bash</span>
                  </div>
                </div>

                {/* Code Body */}
                <div className="p-4 sm:p-5 font-mono text-[11px] sm:text-[13px] leading-relaxed text-slate-300 overflow-x-auto space-y-2 bg-[#090d16] rounded-b-xl">
                  <div>
                    <span className="text-purple-400">const</span>{" "}
                    <span className="text-yellow-300">developer</span> = &#123;
                  </div>
                  <div className="pl-3 sm:pl-4">
                    <span className="text-slate-400">name:</span>{" "}
                    <span className="text-emerald-300">"{profileData.name}"</span>,
                  </div>
                  <div className="pl-3 sm:pl-4">
                    <span className="text-slate-400">role:</span>{" "}
                    <span className="text-emerald-300">"{profileData.role}"</span>,
                  </div>
                  <div className="pl-3 sm:pl-4">
                    <span className="text-slate-400">company:</span>{" "}
                    <span className="text-emerald-300">"NETAXIS IT SOLUTIONS"</span>,
                  </div>
                  <div className="pl-3 sm:pl-4">
                    <span className="text-slate-400">experience:</span>{" "}
                    <span className="text-emerald-300">"2.10 Years"</span>,
                  </div>
                  <div className="pl-3 sm:pl-4">
                    <span className="text-slate-400">location:</span>{" "}
                    <span className="text-emerald-300">"Chennai, India"</span>,
                  </div>
                  <div className="pl-3 sm:pl-4">
                    <span className="text-slate-400">stack:</span> &#91;
                  </div>
                  <div className="pl-6 sm:pl-8 text-cyan-300">
                    "Angular", "React.js", "Laravel", "PHP", "MySQL", "Lua"
                  </div>
                  <div className="pl-3 sm:pl-4">&#93;,</div>
                  <div className="pl-3 sm:pl-4">
                    <span className="text-slate-400">specialties:</span> &#91;
                  </div>
                  <div className="pl-6 sm:pl-8 text-cyan-300">
                    "REST APIs", "PowerDNS", "Payment APIs", "Firebase FCM"
                  </div>
                  <div className="pl-3 sm:pl-4">&#93;,</div>
                  <div className="pl-3 sm:pl-4">
                    <span className="text-slate-400">status:</span>{" "}
                    <span className="text-emerald-400">"Immediately Available"</span>
                  </div>
                  <div>&#125;;</div>
                  
                  <div className="pt-2 text-slate-500">
                    <span className="text-cyan-500">$</span> php artisan serve --port=8000
                  </div>
                  <div className="text-emerald-400 text-[11px]">
                    ✓ Application ready & listening for requests
                  </div>
                </div>

              </div>

              {/* Subtle tech badge chip */}
              <div className="mt-4 flex items-center justify-between px-3 py-2 bg-white/70 dark:bg-slate-900/70 backdrop-blur-sm rounded-xl border border-slate-200/80 dark:border-slate-800 text-xs">
                <span className="text-slate-500 dark:text-slate-400">Architecture:</span>
                <span className="font-mono text-cyan-600 dark:text-cyan-400 font-medium text-[11px] sm:text-xs">
                  MVC • REST APIs • Modular UI • Lua Scripts
                </span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
