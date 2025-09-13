import React from 'react';
import { Briefcase, Users, Calendar, Award } from 'lucide-react';
import FeaturesAnimation from '../animations/FeaturesAnimation';

const Features = () => {
  return (
    <section className="py-16 md:py-24 bg-white px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2 text-gray-900">
          Your Bridge to
        </h2>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-purple-600">
          Professional Growth
        </h2>
        <p className="text-gray-600 mb-10 text-base sm:text-lg">
          Take advantage of our extensive network of top companies offering exciting internship opportunities. Our platform is designed to connect talented individuals with their dream careers.
        </p>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Column - Animation */}
          <div className="order-2 md:order-2">
            <FeaturesAnimation />
          </div>

          {/* Right Column - Features */}
          <div className="order-1 md:order-1">
            <div className="space-y-6 flex flex-col">
              {[
                {
                  Icon: Briefcase,
                  title: 'Exclusive Internship Programs',
                  desc: 'Access to exclusive internship opportunities from leading companies across various industries.'
                },
                {
                  Icon: Users,
                  title: 'Career Guidance & Mentorship',
                  desc: 'Get personalized career advice and mentorship from industry professionals to accelerate your growth.'
                },
                {
                  Icon: Calendar,
                  title: 'Skill Development Workshops',
                  desc: 'Enhance your skills through specialized workshops and training programs designed for career advancement.'
                },
                {
                  Icon: Award,
                  title: 'Comprehensive Resume Support',
                  desc: 'Expert resume and portfolio review to highlight your strengths and increase your chances of getting hired.'
                }
              ].map(({ Icon, title, desc }, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 p-4 rounded-lg hover:bg-purple-50 transition duration-300"
                >
                  <div className="bg-purple-100 p-3 rounded-full">
                    <Icon className="h-6 w-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">{title}</h3>
                    <p className="text-gray-600 text-sm sm:text-base">{desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Buttons */}
            <div className="mt-10 flex flex-wrap gap-4">
              <a href="#job">
                <button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-full font-medium transition">
                  Explore Internships
                </button>
              </a>
              <a href="#about">
                <button className="border border-purple-600 text-purple-600 hover:bg-purple-50 px-6 py-3 rounded-full font-medium transition">
                  Learn More
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
