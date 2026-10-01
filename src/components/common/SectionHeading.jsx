import React from 'react';

export default function SectionHeading({ eyebrow, title, subtitle, align = 'center' }) {
  const alignmentClass = align === 'left' ? 'text-left items-start' : 'text-center items-center';

  return (
    <div className={`flex flex-col ${alignmentClass} mb-12 md:mb-16`}>
      {eyebrow && (
        <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-mono font-medium tracking-wide text-cyan-700 dark:text-cyan-400 bg-cyan-50/90 dark:bg-cyan-950/60 border border-cyan-200/90 dark:border-cyan-800/80 shadow-2xs mb-3">
          {eyebrow}
        </span>
      )}
      <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 max-w-2xl text-base md:text-lg text-slate-600 dark:text-slate-300">
          {subtitle}
        </p>
      )}
      <div className="w-16 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full mt-4 shadow-xs" />
    </div>
  );
}
