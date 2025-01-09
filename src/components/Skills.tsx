import React from 'react';
import { Camera } from 'lucide-react';
import { Award } from 'lucide-react';

const Skills: React.FC = () => {
  const skills = [
    'Weddings Photography',
    'Corporate Events',
    'Religious Events',
    'Product Photography'
  ];

  return (
    <section className="py-16 bg-gray-50" id="skills">
      <div className="max-w-6xl mx-auto px-4">
      <Award className="w-8 h-8 text-blue-600" />
        <h2 className="text-3xl font-bold mb-8">Personal Skills</h2>
        <p className="text-lg mb-8">
          Over the years I have developed skills in several fields of Photography including
          Weddings, Corporates, Religious Events and product photography
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <div key={index} className="p-6 bg-white rounded-lg shadow-sm">
              <Camera className="w-8 h-8 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">{skill}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;