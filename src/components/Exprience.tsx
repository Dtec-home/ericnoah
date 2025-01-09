import React from 'react';
import { workExperience } from '@/data/content';
import { Briefcase } from 'lucide-react';

const Experience: React.FC = () => {
  return (
    <section className="py-16 bg-white" id="experience">
      <div className="max-w-6xl mx-auto px-4">
      <Briefcase className="w-8 h-8 text-blue-600" />
        <h2 className="text-3xl font-bold mb-8">Work Experience</h2>
        <div className="relative">
          {workExperience.map((work, index) => (
            <div key={index} className="flex mb-8">
              <div className="w-1 bg-blue-600 relative">
                <div className="w-4 h-4 bg-blue-600 rounded-full absolute -left-2"></div>
              </div>
              <div className="ml-8">
                <h3 className="text-xl font-bold">{work.company}</h3>
                <p className="text-gray-600">{work.years}</p>
                <p className="text-lg">{work.role}</p>
                {work.projects && (
                  <ul className="mt-2">
                    {work.projects.map((project, idx) => (
                      <li key={idx} className="text-gray-600">{project}</li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;