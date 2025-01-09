'use client'

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
    Menu, 
    X, 
    User, 
    Briefcase, 
    Award,
    BookOpen,
    Image as ImageIcon,
    Building2,
    Contact,
    Camera
  } from 'lucide-react';

  const Navbar: React.FC = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
    const navItems = [
      { title: 'About', href: '#about', icon: User },
      { title: 'Skills', href: '#skills', icon: Award },
      { title: 'Experience', href: '#experience', icon: Briefcase },
      { title: 'Projects', href: '#projects', icon: BookOpen },
      { title: 'Gallery', href: '#gallery', icon: ImageIcon },
      { title: 'Brands', href: '#brands', icon: Building2 },
      { title: 'Contact', href: '#contact', icon: Contact }
    ];
  
    useEffect(() => {
      const handleScroll = () => {
        setIsScrolled(window.scrollY > 20);
      };
  
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }, []);
  
    return (
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed w-full z-50 transition-all duration-300 ${
          isScrolled ? 'bg-white shadow-lg' : 'bg-transparent'
        }`}
      >
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="flex-shrink-0 flex items-center space-x-2"
            >
              <Camera className={`w-6 h-6 ${isScrolled ? 'text-blue-600' : 'text-white'}`} />
              <a href="#" className={`text-xl font-bold ${isScrolled ? 'text-blue-600' : 'text-white'}`}>
                Noah Eric
              </a>
            </motion.div>
  
            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-6">
              {navItems.map((item, index) => (
                <motion.a
                  key={item.title}
                  href={item.href}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className={`text-sm font-medium transition-colors hover:text-blue-600 flex items-center space-x-1 ${
                    isScrolled ? 'text-gray-900' : 'text-white'
                  }`}
                >
                  <item.icon className="w-4 h-4" />
                  <span>{item.title}</span>
                </motion.a>
              ))}
            </div>
  
            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className={`p-2 rounded-md ${
                  isScrolled ? 'text-gray-900' : 'text-white'
                }`}
              >
                {isMobileMenuOpen ? <X /> : <Menu />}
              </button>
            </div>
          </div>
  
          {/* Mobile Menu */}
          <motion.div
            initial={false}
            animate={{ height: isMobileMenuOpen ? 'auto' : 0 }}
            className="md:hidden overflow-hidden bg-white"
          >
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <a
                  key={item.title}
                  href={item.href}
                  className="flex items-center space-x-2 px-3 py-2 text-base font-medium text-gray-900 hover:text-blue-600"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <item.icon className="w-5 h-5" />
                  <span>{item.title}</span>
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.nav>
    );
  };
  

export default Navbar;