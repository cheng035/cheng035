import React from 'react';
import { Section } from './Section';
import { SKILLS } from '../constants';

export const Skills: React.FC = () => {
  return (
    <Section title="Technical Skills" className="bg-slate-50" id="skills">
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {SKILLS.map((group, index) => (
          <div key={index} className="bg-white rounded-xl p-5 border border-slate-100 shadow-sm">
            <h3 className="font-bold text-slate-900 mb-4 border-b border-slate-100 pb-2">
                {group.category}
            </h3>
            <div className="flex flex-wrap gap-2">
              {group.items.map((skill) => (
                <span 
                  key={skill} 
                  className="px-3 py-1 bg-slate-50 text-slate-700 text-sm rounded-md border border-slate-200 hover:border-blue-300 hover:text-blue-700 transition-colors cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};
