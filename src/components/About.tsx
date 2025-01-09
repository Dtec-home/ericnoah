// src/components/About.tsx
import React from 'react';
import { User } from 'lucide-react';
import Image from 'next/image';
import { motion } from 'framer-motion';

interface AboutProps {
  className?: string;
}

const About: React.FC<AboutProps> = ({ className = '' }) => {
  return (
    <section className={`py-16 bg-[#FFF5E1] ${className}`} id="about">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center space-x-2 mb-8"
        >
          <User className="w-8 h-8 text-blue-600" />
          <h2 className="text-3xl font-bold">About Me</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="text-lg leading-relaxed">
              I'm a professional corporate event photographer with more than 10 years full time experience in
              the sector. I also do travel photography, photography for annual reports, headshots,
              interiors, fashion shoots, you name it! You're in safe hands. I'm currently based in Kenya with
              photographers in London, Zambia and Ghana.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative h-[400px] w-full rounded-lg overflow-hidden"
          >
            <Image
              src="/noah-portrait.jpg"
              alt="Noah Eric Portrait"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;