import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import AnimatedBackground from './AnimatedBackgorund';

const Header: React.FC = () => {
  return (
    <header className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      <AnimatedBackground />
      
      {/* Logo with crown */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 mb-8"
      >
        <div className="relative w-48 h-16">
          <Image
            src="/images/logo.png" // Add your crown logo image
            alt="Noah Eric Logo"
            layout="fill"
            objectFit="contain"
            priority
          />
        </div>
      </motion.div>

      {/* Main title content */}
      <motion.div
        className="relative z-10 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        <h1 className="mb-2">
          <span className="block text-4xl font-cursive mb-4">creative</span>
          <span className="text-6xl font-bold tracking-wide">PORTFOLIO</span>
        </h1>
        <p className="text-lg mt-4">By NOAH ERIC</p>
      </motion.div>

      {/* Phone rotation notice */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="absolute bottom-12 text-center z-10"
      >
        <p className="text-sm mb-2">FLIP YOUR PHONE TO LANDSCAPE</p>
        <div className="w-8 h-8 mx-auto">
          <Image
            src="/images/phone-rotate.png" // Add your phone rotation icon
            alt="Rotate Phone"
            width={32}
            height={32}
            className="transform rotate-90"
          />
        </div>
      </motion.div>
    </header>
  );
};

export default Header;