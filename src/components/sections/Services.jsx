import React from 'react';
import { Search, BookOpen, Briefcase } from 'lucide-react';

const Services = () => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            TokoJobs' Service Offerings
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We provide comprehensive services to help you land your dream internship and kickstart your career journey.
          </p>
        </div>

        {/* Services Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="bg-white border border-gray-100 rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300 group">
            <div className="bg-purple-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6 group-hover:bg-purple-600 transition-colors duration-300">
              <Search className="h-8 w-8 text-purple-600 group-hover:text-white transition-colors duration-300" />
            </div>
            <h3 className="text-xl font-bold mb-4 text-gray-900">Internship Matching</h3>
            <p className="text-gray-600 mb-6">
              Our advanced matching algorithm connects you with internships that align perfectly with your skills, interests, and career goals.
            </p>
            <button className="text-purple-600 font-medium flex items-center hover:text-purple-700 transition-colors">
              Learn More
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
              </svg>
            </button>
          </div>

          {/* Card 2 */}
          <div className="bg-white border border-gray-100 rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300 group">
            <div className="bg-purple-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6 group-hover:bg-purple-600 transition-colors duration-300">
              <BookOpen className="h-8 w-8 text-purple-600 group-hover:text-white transition-colors duration-300" />
            </div>
            <h3 className="text-xl font-bold mb-4 text-gray-900">Skill Development</h3>
            <p className="text-gray-600 mb-6">
              Access curated courses, workshops, and resources to develop the skills employers are looking for in today's competitive job market.
            </p>
            <button className="text-purple-600 font-medium flex items-center hover:text-purple-700 transition-colors">
              Learn More
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
              </svg>
            </button>
          </div>

          {/* Card 3 */}
          <div className="bg-white border border-gray-100 rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300 group">
            <div className="bg-purple-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6 group-hover:bg-purple-600 transition-colors duration-300">
              <Briefcase className="h-8 w-8 text-purple-600 group-hover:text-white transition-colors duration-300" />
            </div>
            <h3 className="text-xl font-bold mb-4 text-gray-900">Career Counseling</h3>
            <p className="text-gray-600 mb-6">
              Get personalized career advice and guidance from industry experts to make informed decisions about your professional journey.
            </p>
            <button className="text-purple-600 font-medium flex items-center hover:text-purple-700 transition-colors">
              Learn More
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
              </svg>
            </button>
          </div>
        </div>

        {/* CTA Button */}
        <div className="text-center mt-12">
          <button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-full font-medium transition-colors duration-300">
            Explore All Services
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;