import React from 'react';
import { ArrowRight } from 'lucide-react';

const CTA = () => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl overflow-hidden">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Content */}
            <div className="p-8 md:p-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
                Take Action Now with TokoJobs!
              </h2>
              <p className="text-indigo-100 mb-8">
                Start your journey toward professional success today. Join thousands of students and professionals who have found their perfect internship through our platform.
              </p>
              
              {/* Form */}
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <input 
                    type="text" 
                    placeholder="First Name" 
                    className="px-4 py-3 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-purple-300"
                  />
                  <input 
                    type="text" 
                    placeholder="Last Name" 
                    className="px-4 py-3 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-purple-300"
                  />
                </div>
                <input 
                  type="email" 
                  placeholder="Email Address" 
                  className="px-4 py-3 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-purple-300"
                />
                <button className="bg-white text-purple-600 hover:bg-indigo-50 px-6 py-3 rounded-lg w-full font-medium transition-colors duration-300 flex items-center justify-center">
                  Get Started Now
                  <ArrowRight className="ml-2 h-5 w-5" />
                </button>
              </div>

              <p className="text-indigo-200 text-sm mt-4">
                By signing up, you agree to our Terms of Service and Privacy Policy.
              </p>
            </div>

            {/* Image */}
            <div className="hidden md:block h-full">
              <div className="h-full bg-indigo-700 flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="w-64 h-64 mx-auto bg-indigo-600 rounded-full flex items-center justify-center">
                    <p className="text-white text-lg font-medium">Illustration Placeholder</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;