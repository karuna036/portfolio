import React, { useState } from 'react';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Experience from './components/Experience/Experience';
import Projects from './components/Projects/Projects';
import Expertise from './components/Expertise/Expertise';
import Workflow from './components/Workflow/Workflow';
import Resume from './components/Resume/Resume';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import ScrollToTop from './components/common/ScrollToTop';
import ResumeModal from './components/common/ResumeModal';
import { useTheme } from './hooks/useTheme';
import { useScrollSpy } from './hooks/useScrollSpy';

const SECTION_IDS = [
  'hero',
  'about',
  'skills',
  'experience',
  'projects',
  'expertise',
  'workflow',
  'resume',
  'contact',
];

export default function App() {
  const { theme, toggleTheme } = useTheme();
  const activeSection = useScrollSpy(SECTION_IDS, 140);
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#f8fafc] dark:bg-[#070b12] text-slate-800 dark:text-slate-100 flex flex-col font-sans transition-colors duration-300 relative overflow-x-hidden selection:bg-cyan-500 selection:text-white">
      
      {/* Background Architectural Grid Pattern */}
      <div 
        className="fixed inset-0 bg-grid-mesh pointer-events-none z-0 opacity-80 dark:opacity-40" 
        aria-hidden="true" 
      />

      {/* Radiant Atmospheric Lighting - Illuminated in Light Mode, Subtle in Dark Mode */}
      <div 
        className="fixed -top-40 left-1/2 -translate-x-1/2 w-[700px] sm:w-[900px] h-[450px] bg-gradient-to-tr from-cyan-400/25 via-sky-300/20 to-blue-300/15 dark:from-cyan-500/10 dark:via-blue-500/8 dark:to-teal-500/5 blur-3xl pointer-events-none z-0 rounded-full" 
        aria-hidden="true" 
      />
      <div 
        className="fixed top-1/3 -left-48 w-[500px] h-[500px] bg-teal-400/15 dark:bg-cyan-600/5 blur-3xl pointer-events-none z-0 rounded-full" 
        aria-hidden="true" 
      />
      <div 
        className="fixed bottom-1/4 -right-48 w-[500px] h-[500px] bg-sky-400/15 dark:bg-blue-600/5 blur-3xl pointer-events-none z-0 rounded-full" 
        aria-hidden="true" 
      />

      {/* Sticky Navigation */}
      <Navbar
        theme={theme}
        toggleTheme={toggleTheme}
        activeSection={activeSection}
        onOpenResume={() => setIsResumeModalOpen(true)}
      />

      {/* Main Content Sections */}
      <main className="flex-grow relative z-10">
        <Hero onOpenResume={() => setIsResumeModalOpen(true)} />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Expertise />
        <Workflow />
        <Resume onOpenResume={() => setIsResumeModalOpen(true)} />
        <Contact />
      </main>

      {/* Footer */}
      <Footer onOpenResume={() => setIsResumeModalOpen(true)} />

      {/* Floating Scroll to Top button */}
      <ScrollToTop />

      {/* Interactive In-Browser Resume Modal */}
      <ResumeModal
        isOpen={isResumeModalOpen}
        onClose={() => setIsResumeModalOpen(false)}
      />
    </div>
  );
}
