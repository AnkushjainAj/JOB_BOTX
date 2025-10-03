import React from 'react';
import { Upload, Search, Mail, FileSpreadsheet } from 'lucide-react';
import FeaturesAnimation from '../animations/FeaturesAnimation';

const Features = () => {
  return (
    <section className="py-16 md:py-24 bg-white px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2 text-gray-900">
          Automated Job Search
        </h2>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-purple-600">
          Made Simple
        </h2>
        <p className="text-gray-600 mb-10 text-base sm:text-lg">
          Job BotX revolutionizes your job search by automatically fetching relevant opportunities from LinkedIn based on your resume and delivering personalized job matches directly to your inbox.
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
                  Icon: Upload,
                  title: 'Smart Resume Analysis',
                  desc: 'Upload your resume and let our AI analyze your skills, experience, and career preferences for targeted job matching.'
                },
                {
                  Icon: Search,
                  title: 'LinkedIn Job Scraping',
                  desc: 'Our advanced bot automatically searches and extracts the most relevant job opportunities from LinkedIn based on your profile.'
                },
                {
                  Icon: FileSpreadsheet,
                  title: 'Organized Excel Reports',
                  desc: 'Get comprehensive job listings organized in Excel format with company details, requirements, and application links.'
                },
                {
                  Icon: Mail,
                  title: 'Direct Email Delivery',
                  desc: 'Receive your personalized job matches directly in your inbox - no need to constantly check job boards.'
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
                  Start Job Search
                </button>
              </a>
              <a href="#about">
                <button className="border border-purple-600 text-purple-600 hover:bg-purple-50 px-6 py-3 rounded-full font-medium transition">
                  How It Works
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
