import React from 'react';
import { motion } from 'framer-motion';

const AnimatedBackground: React.FC = () => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <svg
        className="w-full h-full"
        viewBox="0 0 1920 1080"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ background: 'black' }}
      >
        {/* Base layer with gradient */}
        <motion.rect
          width="100%"
          height="100%"
          fill="url(#gradient)"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        />

        {/* Animated camera icons */}
        {[...Array(5)].map((_, i) => (
          <motion.g
            key={`camera-${i}`}
            initial={{ 
              opacity: 0,
              scale: 0.8,
              x: Math.random() * 1920,
              y: Math.random() * 1080
            }}
            animate={{ 
              opacity: [0, 0.15, 0],
              scale: [0.8, 1, 0.8],
              x: Math.random() * 1920,
              y: Math.random() * 1080
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              delay: i * 2
            }}
          >
            <path
              d="M-25 -15 H25 a10,10 0 0 1 10,10 v30 a10,10 0 0 1 -10,10 h-50 a10,10 0 0 1 -10,-10 v-30 a10,10 0 0 1 10,-10 z"
              fill="white"
            />
            <circle cx="0" cy="10" r="12" fill="white" />
          </motion.g>
        ))}

        {/* Floating aperture elements */}
        {[...Array(8)].map((_, i) => (
          <motion.path
            key={`aperture-${i}`}
            d="M-20 -10 L20 -10 L0 20 Z"
            fill="white"
            initial={{ 
              opacity: 0,
              scale: 0.5,
              x: Math.random() * 1920,
              y: Math.random() * 1080,
              rotate: 0
            }}
            animate={{ 
              opacity: [0, 0.1, 0],
              scale: [0.5, 1, 0.5],
              x: Math.random() * 1920,
              y: Math.random() * 1080,
              rotate: 360
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              delay: i * 0.75
            }}
          />
        ))}

        {/* Light rays */}
        {[...Array(6)].map((_, i) => (
          <motion.line
            key={`ray-${i}`}
            x1={i * 400}
            y1="0"
            x2={(i * 400) + 200}
            y2="1080"
            stroke="white"
            strokeWidth="1"
            initial={{ opacity: 0, pathLength: 0 }}
            animate={{ 
              opacity: [0, 0.05, 0],
              pathLength: [0, 1, 0]
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              delay: i * 0.5
            }}
          />
        ))}

        {/* Focus rings */}
        {[...Array(4)].map((_, i) => (
          <motion.circle
            key={`ring-${i}`}
            cx="960"
            cy="540"
            r={200 + i * 150}
            stroke="white"
            strokeWidth="1"
            fill="none"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0, 0.08, 0]
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              delay: i * 1.25
            }}
          />
        ))}

        {/* Shutter elements */}
        {[...Array(6)].map((_, i) => {
          const angle = (i * 60) * (Math.PI / 180);
          const x = 960 + Math.cos(angle) * 300;
          const y = 540 + Math.sin(angle) * 300;
          
          return (
            <motion.path
              key={`shutter-${i}`}
              d="M-40 -10 L40 -10 L0 60 Z"
              fill="white"
              initial={{ 
                opacity: 0,
                scale: 0.5,
                x,
                y,
                rotate: angle * (180 / Math.PI)
              }}
              animate={{ 
                opacity: [0, 0.12, 0],
                scale: [0.5, 0.8, 0.5],
                rotate: [angle * (180 / Math.PI), (angle + Math.PI) * (180 / Math.PI)]
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                delay: i * 0.5
              }}
            />
          );
        })}

        {/* Definitions for gradients and filters */}
        <defs>
          <radialGradient 
            id="gradient" 
            cx="50%" 
            cy="50%" 
            r="50%"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0%" stopColor="#000000" />
            <stop offset="70%" stopColor="#1a1a1a" />
            <stop offset="100%" stopColor="#000000" />
          </radialGradient>
        </defs>
      </svg>
    </div>
  );
};

export default AnimatedBackground;