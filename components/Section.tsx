import React from 'react';

interface SectionProps {
  title?: string;
  children: React.ReactNode;
  className?: string;
  id?: string;
}

export const Section: React.FC<SectionProps> = ({ title, children, className = "", id }) => {
  return (
    <section id={id} className={`py-12 md:py-16 ${className}`}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {title && (
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-8 border-l-4 border-blue-600 pl-4">
            {title}
          </h2>
        )}
        {children}
      </div>
    </section>
  );
};
