"use client"
import React, { useState, useEffect } from 'react';
import { Menu, X, Briefcase } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-black/90 backdrop-blur-md shadow-lg py-2' 
          : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto py-1 px-4 md:px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            {/* <img src='/logox.png' height={50} width={50} className='bg-'></img> */}
            <span className="ml-2 text-xl font-bold text-white">HireLyft</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-white/80 hover:text-white transition-colors text-sm font-medium">
              Home
            </a>
            <a href="#about" className="text-white/80 hover:text-white transition-colors text-sm font-medium">
              About Us
            </a>
            <a href="#job" className="text-white/80 hover:text-white transition-colors text-sm font-medium">
              Job List
            </a>
            <a href="#contact" className="text-white/80 hover:text-white transition-colors text-sm font-medium">
              Contact Us
            </a>
          </nav>

          {/* CTA Button */}
          <a href='https://forms.gle/B15a3mZqYEL6saRA8'><button className="hidden md:block bg-gradient-to-r from-primary-500 to-secondary-500 hover:from-primary-600 hover:to-secondary-600 text-white px-6 py-2.5 rounded-full transition-all duration-300 font-medium text-sm shadow-lg hover:shadow-primary-500/25">
            Get Started
          </button>
          </a>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-black/90 backdrop-blur-md py-4 px-4 border-t border-white/10">
            <nav className="flex flex-col space-y-4">
              <a
                href="#"
                className="text-white/80 hover:text-white transition-colors text-sm font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </a>
              <a
                href="#about"
                className="text-white/80 hover:text-white transition-colors text-sm font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                About Us
              </a>
              <a
                href="#job"
                className="text-white/80 hover:text-white transition-colors text-sm font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Job List
              </a>
              
              <a
                href="#contact"
                className="text-white/80 hover:text-white transition-colors text-sm font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact Us
              </a>
              <a href='https://forms.gle/B15a3mZqYEL6saRA8'><button className="bg-gradient-to-r from-primary-500 to-secondary-500 hover:from-primary-600 hover:to-secondary-600 text-white px-6 py-2.5 rounded-full transition-all duration-300 font-medium text-sm shadow-lg hover:shadow-primary-500/25 w-fit">
                Get Started
              </button>
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;