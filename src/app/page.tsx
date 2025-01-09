'use client'

import Header from '@/components/Header';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Gallery from '@/components/Gallery';
import Brands from '@/components/Brands';
import Contact from '@/components/Contact';
import Experience from '@/components/Exprience';
import { motion } from 'framer-motion';
import Navbar from '@/components/NavBar';

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100">
      <Navbar />
      <motion.div
        initial="initial"
        animate="animate"
        variants={{
          animate: {
            transition: {
              staggerChildren: 0.1
            }
          }
        }}
      >
        <Header />
        <motion.div variants={fadeInUp}>
          <About />
        </motion.div>
        <motion.div variants={fadeInUp}>
          <Skills />
        </motion.div>
        <motion.div variants={fadeInUp}>
          <Experience />
        </motion.div>
        <motion.div variants={fadeInUp}>
          <Projects />
        </motion.div>
        <motion.div variants={fadeInUp}>
          <Gallery />
        </motion.div>
        <motion.div variants={fadeInUp}>
          <Brands />
        </motion.div>
        <motion.div variants={fadeInUp}>
          <Contact />
        </motion.div>
      </motion.div>
    </main>
  );
}
