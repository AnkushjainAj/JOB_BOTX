"use client"
import React from 'react';
import { Search } from 'lucide-react';
import HeroAnimation from '../animations/HeroAnimation';
import { TypeAnimation } from 'react-type-animation';
const Hero = () => {
  return (
    <section className="min-h-screen pt-32 pb-16 md:pt-40 md:pb-24 bg-gradient-to-br from-indigo-950 via-black to-purple-950 relative overflow-hidden px-5">
      {/* Animated gradient overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(129,140,248,0.05)_50%,transparent_75%,transparent_100%)] bg-300% animate-gradient"></div>
      
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-purple-600/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="text-center md:text-left relative">
            <div className="inline-block px-6 py-2 rounded-full bg-gradient-to-r from-indigo-500/10 to-purple-500/10 backdrop-blur-sm border border-indigo-500/20 mb-6">
              <span className="bg-gradient-to-r from-indigo-400 to-purple-400 text-transparent bg-clip-text font-medium">
                🚀 Launch Your Career Today
              </span>
            </div>
            
             <div className="text-center md:text-left">
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
        <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 text-transparent bg-clip-text block">
          <TypeAnimation
  sequence={[
    'Unlock Your Potential', 2000,
    'Launch Your Career', 2000,
    'Take your first step', 2000,
  ]}
  wrapper="span"
  speed={40}                 // slower = smoother typing
  deletionSpeed={30}         // smooth deletion
  repeat={Infinity}
  cursor={true}              // show blinking cursor
  style={{
    display: 'inline-block',
    whiteSpace: 'pre-line',  // allows multiline rendering
  }}
/>
        </span>
        <span className="block mt-2 text-white text-5xl">Find Your Perfect Internship</span>
      </h1>

      <p className="text-indigo-200 mb-8 text-lg max-w-xl mx-auto md:mx-0 leading-relaxed">
        Connect with top companies offering exciting internship opportunities. Your journey to professional success starts here with <strong>HireLyft</strong>.
      </p>
    </div>

            {/* Search Box */}
            <div className="relative max-w-xl mx-auto md:mx-0 mb-5 group">
              {/* <input
                type="text"
                placeholder="Search for jobs, companies, or keywords..."
                className="w-full py-4 px-6 pl-12 rounded-full bg-white/10 backdrop-blur-md border border-indigo-500/20 text-white placeholder-indigo-300/50 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-transparent transition-all duration-300"
              /> */}
              {/* <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-indigo-400 h-5 w-5" /> */}
              <a href='https://forms.gle/B15a3mZqYEL6saRA8'><button className="-transform -translate-y-1/2 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white px-6 py-2 rounded-full transition-all duration-300 shadow-lg hover:shadow-purple-500/25 font-medium">
                Apply Now
              </button>
              </a>
            </div>

            {/* Category Pills */}
            <div className="flex flex-wrap justify-center md:justify-start gap-3 mb-12">
              {[
                'Web Development', 'App Development', 'ML/AI', 'UI/UX', 'Python Programming', 'Java Programming','Data Science'
              ].map((category, index) => (
                <span
                  key={category}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 hover:scale-105 cursor-pointer
                    ${index % 3 === 0 ? 'bg-indigo-500/20 text-indigo-300 hover:bg-indigo-500/30' :
                      index % 3 === 1 ? 'bg-purple-500/20 text-purple-300 hover:bg-purple-500/30' :
                      'bg-pink-500/20 text-pink-300 hover:bg-pink-500/30'}`}
                >
                  {category}
                </span>
              ))}
            </div>

            {/* Stats */}
            <div className="grid grid-rows-3 sm:grid-cols-3 gap-6 mt-12">
              {[
                { value: '1300+', label: 'Jobs Available' },
                { value: '300+', label: 'Top Companies' },
                { value: '3000+', label: 'Success Stories' }
              ].map(({ value, label }) => (
                <div key={label} className="text-center p-4 rounded-2xl bg-gradient-to-br from-indigo-500/10 to-purple-500/10 backdrop-blur-sm border border-indigo-500/20">
                  <h3 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 text-transparent bg-clip-text mb-1">
                    {value}
                  </h3>
                  <p className="text-indigo-200 text-sm">{label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Hero Image Animation */}
          <div className="hidden md:block relative">
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 rounded-3xl blur-3xl"></div>
            <div className="relative z-10">
              <HeroAnimation />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;