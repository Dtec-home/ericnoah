import React from 'react';
import { stats } from '@/data/content';
import { Stat } from '@/types';
import { User } from 'lucide-react';

const StatCard: React.FC<{ stat: Stat }> = ({ stat }) => {
  const Icon = stat.icon;
  
  return (
    <div className="text-center p-6 bg-gray-50 rounded-lg">
      {Icon && <Icon className="w-8 h-8 mx-auto mb-4 text-blue-600" />}
      <h3 className="text-2xl font-bold">{stat.number}</h3>
      <p className="text-gray-600">{stat.label}</p>
    </div>
  );
};

const About: React.FC = () => {
  return (
    <section className="py-16 bg-white" id="about">
      <div className="max-w-6xl mx-auto px-4">
      <User className="w-8 h-8 text-blue-600" />
        <h2 className="text-3xl font-bold mb-8">About Me</h2>
        <p className="text-lg mb-8">
          I&apos;m a professional corporate event photographer with more than 10 years full time experience in
          the sector. I also do travel photography, photography for annual reports, headshots,
          interiors, fashion shoots, you name it! You&apos;re in safe hands. I&apos;m currently based in Kenya with
          photographers in London, Zambia and Ghana.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-12">
          {stats.map((stat, index) => (
            <StatCard key={index} stat={stat} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;