import React from 'react';
import { projects } from '@/data/content';
import { BookOpen } from 'lucide-react';

const Projects: React.FC = () => {
  return (
    <section className="py-16 bg-gray-50" id="projects">
      <div className="max-w-6xl mx-auto px-4">
      <BookOpen className="w-8 h-8 text-blue-600" />
        <h2 className="text-3xl font-bold mb-8">Notable Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-bold mb-4">{project.title}</h3>
              <p className="text-gray-600">{project.description}</p>
              <span className="inline-block mt-4 px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                {project.category}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
