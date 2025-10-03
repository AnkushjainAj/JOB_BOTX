"use client"
import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Sarah Wilson',
    role: 'Software Developer',
    company: 'TechCorp',
    content: 'Job BotX saved me hours of manual job searching! I uploaded my resume and received 50+ relevant job matches in Excel format within 24 hours. Found my current role through their automated system.',
    rating: 5,
  },
  {
    id: 2,
    name: 'Michael Chen',
    role: 'Marketing Specialist',
    company: 'Brand Innovators',
    content: 'The automated LinkedIn job scraping is incredible. Job BotX found opportunities I never would have discovered manually. The Excel reports are perfectly organized and easy to track.',
    rating: 5,
  },
  {
    id: 3,
    name: 'Jessica Taylor',
    role: 'UX Designer',
    company: 'Creative Solutions',
    content: 'No more endless scrolling through job boards! Job BotX delivers personalized matches directly to my email. The AI really understands my skills and preferences.',
    rating: 4,
  },
  {
    id: 4,
    name: 'David Miller',
    role: 'Data Analyst',
    company: 'Insight Analytics',
    content: 'Job BotX is like having a personal job search assistant working 24/7. The quality of matches and the convenience of email delivery made my job hunt stress-free.',
    rating: 5,
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const testimonialsPerPage = window.innerWidth >= 768 ? 3 : 1;
  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + testimonialsPerPage >= testimonials.length ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - testimonialsPerPage : prevIndex - 1
    );
  };

  const visibleTestimonials = testimonials.slice(
    currentIndex,
    currentIndex + testimonialsPerPage
  );

  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-indigo-50 to-purple-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            Success Stories
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover how Job BotX transformed job searches for professionals across industries with automated LinkedIn scraping and personalized job matching.
          </p>
        </div>

        {/* Testimonial Cards */}
        <div className="relative">
          <div className="flex flex-nowrap overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${currentIndex * (100 / testimonials.length)}%)`,
              }}
            >
              {testimonials.map((testimonial) => (
                <div
                  key={testimonial.id}
                  className="min-w-full md:min-w-[33.333%] px-4"
                >
                  <div className="bg-white rounded-xl p-8 shadow-sm h-full">
                    {/* Rating */}
                    <div className="flex mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-5 w-5 ${
                            i < testimonial.rating
                              ? 'text-yellow-400 fill-yellow-400'
                              : 'text-gray-300'
                          }`}
                        />
                      ))}
                    </div>

                    {/* Content */}
                    <p className="text-gray-600 mb-6">{testimonial.content}</p>

                    {/* User Info */}
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-gray-300 rounded-full mr-4"></div>
                      <div>
                        <h4 className="font-semibold text-gray-900">
                          {testimonial.name}
                        </h4>
                        <p className="text-sm text-gray-600">
                          {testimonial.role}, {testimonial.company}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-1/2 bg-white p-3 rounded-full shadow-md hover:bg-gray-100 transition-colors z-10 hidden md:block"
          >
            <ChevronLeft className="h-5 w-5 text-gray-600" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/2 bg-white p-3 rounded-full shadow-md hover:bg-gray-100 transition-colors z-10 hidden md:block"
          >
            <ChevronRight className="h-5 w-5 text-gray-600" />
          </button>
        </div>

        {/* Mobile Navigation Dots */}
        <div className="flex justify-center space-x-2 mt-8 md:hidden">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-2 w-2 rounded-full ${
                index === currentIndex ? 'bg-purple-600' : 'bg-gray-300'
              }`}
            ></button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;