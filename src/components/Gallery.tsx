'use client'
import { motion } from 'framer-motion';
import React, { useState } from 'react';
import { ImageIcon } from 'lucide-react';

// import Image from 'next/image';

const categories = [
  'FESTIVALS',
  'CHURCH EVENTS',
  'CORPORATE',
  'GOVERNMENT EVENTS',
  'PERSONAL PHOTOSHOOT',
  'BRANDS'
];

const Gallery: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState(categories[0]);

  return (
    <section className="py-16 bg-white" id="gallery">
      <div className="max-w-6xl mx-auto px-4">
      <ImageIcon className="w-8 h-8 text-blue-600" />
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold mb-8"
        >
          Gallery
        </motion.h2>
        
        <div className="flex flex-wrap gap-4 mb-8">
          {categories.map((category, index) => (
            <motion.button
              key={category}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-4 py-2 rounded-full ${
                activeCategory === category 
                  ? 'bg-blue-600 text-white' 
                  : 'bg-gray-200 text-gray-800'
              }`}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </motion.button>
          ))}
        </div>

        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {/* Add your images here using Next.js Image component */}
          <motion.div
            layout
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="aspect-square relative bg-gray-100 rounded-lg overflow-hidden"
          >
            <p className="absolute inset-0 flex items-center justify-center text-gray-500">
              Add your images here
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
export default Gallery;