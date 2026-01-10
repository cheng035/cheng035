import React from 'react';
import { Section } from './Section';
import { EDUCATION } from '../constants';

export const Education: React.FC = () => {
  return (
    <Section title="Education" className="bg-slate-50" id="education">
      <div className="grid gap-6 md:grid-cols-2">
        {EDUCATION.map((edu, index) => (
          <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
            <h3 className="text-lg font-bold text-slate-900 mb-1">{edu.school}</h3>
            <p className="text-blue-600 font-medium text-sm mb-3">{edu.degree}</p>
            <div className="flex justify-between text-sm text-slate-500 mb-2">
              <span>{edu.location}</span>
              <span>{edu.duration}</span>
            </div>
            {edu.gpa && (
               <div className="text-sm text-slate-700 font-medium">GPA: {edu.gpa}</div>
            )}
            {edu.honors && (
                <div className="text-sm text-slate-600 italic mt-1">{edu.honors}</div>
            )}
          </div>
        ))}
      </div>
    </Section>
  );
};
