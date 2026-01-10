import React from 'react';
import { Section } from './Section';
import { EXPERIENCE } from '../constants';

export const Experience: React.FC = () => {
  return (
    <Section title="Professional Experience" className="bg-white" id="experience">
      <div className="space-y-12">
        {EXPERIENCE.map((job, index) => (
          <div key={index} className="relative border-l-2 border-slate-200 pl-8 ml-2 md:ml-4 space-y-8">
             {/* Company Header */}
            <div className="relative">
              <span className="absolute -left-[41px] top-1 h-5 w-5 rounded-full border-4 border-white bg-blue-600 ring-2 ring-blue-100"></span>
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                <h3 className="text-xl font-bold text-slate-900">{job.role}</h3>
                <span className="text-sm font-semibold text-slate-500 bg-slate-100 px-3 py-1 rounded-full w-fit mt-2 sm:mt-0">
                  {job.duration}
                </span>
              </div>
              <div className="text-lg font-medium text-blue-600 mb-1">{job.company}</div>
              <div className="text-sm text-slate-500 mb-4">{job.location}</div>
            </div>

            {/* Projects */}
            <div className="space-y-6">
              {job.projects.map((project, pIndex) => (
                <div key={pIndex} className="bg-slate-50 rounded-lg p-5 border border-slate-100 hover:border-blue-100 transition-colors">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-3">
                    <h4 className="font-bold text-slate-800 text-md">{project.title}</h4>
                    <div className="flex flex-wrap gap-2">
                        {project.techStack.map(tech => (
                            <span key={tech} className="text-xs font-medium px-2 py-0.5 rounded bg-blue-50 text-blue-700 border border-blue-100">
                                {tech}
                            </span>
                        ))}
                    </div>
                  </div>
                  <ul className="space-y-2">
                    {project.points.map((point, ptIndex) => (
                      <li key={ptIndex} className="text-slate-600 text-sm leading-relaxed flex items-start">
                        <span className="mr-2 mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-blue-400"></span>
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};
