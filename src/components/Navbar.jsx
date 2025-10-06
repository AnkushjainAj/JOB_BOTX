"use client"
import React, { useState, useEffect } from 'react';
import { Menu, X, Briefcase } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';
import { usePathname } from 'next/navigation';
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { user, signInWithGoogle, logout } = useAuth();
  const pathname = usePathname();

  const handleGetStarted = async () => {
    try {
      if (user) {
        // If user is already logged in, redirect to internal job form
        window.location.href = '/job-form';
      } else {
        // Show loading state
        const button = document.querySelector('[data-get-started]');
        if (button) {
          button.textContent = 'Signing in...';
          button.disabled = true;
        }
        
        // If not logged in, trigger Google authentication
        const userResult = await signInWithGoogle();
        
        if (userResult) {
          // Store user data immediately after successful auth
          localStorage.setItem('authToken', userResult.accessToken || 'authenticated');
          localStorage.setItem('userEmail', userResult.email || '');
          localStorage.setItem('userName', userResult.displayName || userResult.email?.split('@')[0] || 'User');
          
          // Reset button state
          if (button) {
            button.textContent = 'Redirecting...';
          }
          
          // After successful authentication, redirect to internal job form
          setTimeout(() => {
            window.location.href = '/job-form';
          }, 500); // Reduced delay for better UX
        } else {
          // Reset button if auth failed
          if (button) {
            button.textContent = 'Get Started';
            button.disabled = false;
          }
          throw new Error('Authentication failed - no user returned');
        }
      }
    } catch (error) {
      console.error('Authentication error:', error);
      
      // Reset button state
      const button = document.querySelector('[data-get-started]');
      if (button) {
        button.textContent = 'Get Started';
        button.disabled = false;
      }
      
      // Show user-friendly error message
      if (error.code === 'auth/popup-closed-by-user') {
        alert('Sign-in was cancelled. Please try again.');
      } else if (error.code === 'auth/popup-blocked') {
        alert('Pop-up was blocked. Please allow pop-ups and try again.');
      } else {
        alert('Authentication failed. Please check your internet connection and try again.');
      }
    }
  };

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
            <span className="ml-2 text-xl font-bold text-white">Job BotX</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-white/80 hover:text-white transition-colors text-sm font-medium">
              Home
            </a>
           
              
                <a href="#about" className="text-white/80 hover:text-white transition-colors text-sm font-medium">
                  About Us
                </a>
                {/* <a href="#job" className="text-white/80 hover:text-white transition-colors text-sm font-medium">
                  Job List
                </a> */}
                {/* <a href="#contact" className="text-white/80 hover:text-white transition-colors text-sm font-medium">
                  Contact Us
                </a> */}
        
          </nav>

          {/* User Profile and Actions */}
          <div className="hidden md:flex items-center space-x-4">
            {user && (
              <div className="flex items-center space-x-3 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 border border-white/20">
                <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-sm font-bold">
                    {user.displayName?.charAt(0)?.toUpperCase() || 'U'}
                  </span>
                </div>
                <span className="text-white text-sm font-medium">
                  Welcome, {user.displayName?.split(' ')[0] || 'User'}
                </span>
              </div>
            )}
            
            {user && (
              <button
                onClick={logout}
                className="text-white/80 hover:text-white transition-colors text-sm font-medium px-4 py-2 rounded-full border border-white/20 hover:bg-white/10 backdrop-blur-sm"
              >
                Logout
              </button>
            )}
            
            {/* CTA Button - Hide on form page */}
            {pathname !== '/job-form' && (
              <button 
                data-get-started
                onClick={handleGetStarted}
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 disabled:from-gray-600 disabled:to-gray-700 disabled:cursor-not-allowed text-white px-6 py-2.5 rounded-full transition-all duration-300 font-medium text-sm shadow-lg hover:shadow-blue-500/25"
              >
                {user ? 'Apply Now' : 'Get Started'}
              </button>
            )}
          </div>

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
              
              {user && (
                <>
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
                </>
              )}

              {user && (
                <div className="flex items-center justify-between py-3 border-t border-white/10 mt-4 pt-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-sm font-bold">
                        {user.displayName?.charAt(0)?.toUpperCase() || 'U'}
                      </span>
                    </div>
                    <span className="text-white text-sm font-medium">
                      {user.displayName?.split(' ')[0] || 'User'}
                    </span>
                  </div>
                  <button
                    onClick={() => {
                      setIsMenuOpen(false);
                      logout();
                    }}
                    className="text-white/80 hover:text-white transition-colors text-sm font-medium px-3 py-1 rounded-full border border-white/20 hover:bg-white/10"
                  >
                    Logout
                  </button>
                </div>
              )}
              
              {pathname !== '/job-form' && (
                <button 
                  data-get-started
                  onClick={() => {
                    setIsMenuOpen(false);
                    handleGetStarted();
                  }}
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 disabled:from-gray-600 disabled:to-gray-700 disabled:cursor-not-allowed text-white px-6 py-2.5 rounded-full transition-all duration-300 font-medium text-sm shadow-lg hover:shadow-blue-500/25 w-fit"
                >
                  {user ? 'Apply Now' : 'Get Started'}
                </button>
              )}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;