
import { motion } from 'framer-motion';
import React from 'react';
import AnimatedBackground from './AnimatedBackgorund';

const Header: React.FC = () => {
  return (
    <header className="relative bg-black text-white min-h-screen flex items-center justify-center">
      <AnimatedBackground />
      <div className="relative z-10 text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <h1 className="text-6xl md:text-7xl font-bold mb-4 tracking-tight">
            Noah Eric
          </h1>
          <p className="text-2xl md:text-3xl text-gray-300">
            Creative Portfolio
          </p>
        </motion.div>
      </div>
    </header>
  );
};

export default Header;