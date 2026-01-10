import React from 'react';
import { Section } from './Section';
import { CONTACT } from '../constants';

export const Contact: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
        <h2 className="text-2xl font-bold text-white mb-6">Let's Connect</h2>
        <div className="flex flex-col md:flex-row justify-center items-center gap-6 md:gap-12 mb-8">
          <a href={`mailto:${CONTACT.email}`} className="hover:text-white transition-colors flex items-center gap-2">
            <span>✉️</span> {CONTACT.email}
          </a>
          <a href={`tel:${CONTACT.phone.replace(/\s/g, '')}`} className="hover:text-white transition-colors flex items-center gap-2">
            <span>📞</span> {CONTACT.phone}
          </a>
        </div>
        <div className="flex justify-center gap-6">
            <a href={CONTACT.github} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors underline decoration-slate-600 underline-offset-4">
                GitHub
            </a>
            <a href={CONTACT.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors underline decoration-slate-600 underline-offset-4">
                LinkedIn
            </a>
        </div>
        <div className="mt-12 text-sm text-slate-500">
            © {new Date().getFullYear()} Haohan Cheng. Built with React & Tailwind.
        </div>
      </div>
    </footer>
  );
};
