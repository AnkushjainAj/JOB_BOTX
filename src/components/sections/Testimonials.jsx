"use client"
import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Sarah Wilson',
    role: 'Software Developer',
    company: 'TechCorp',
    content: 'TokoJobs helped me land my dream internship which turned into a full-time role. The platform is intuitive and the career guidance was invaluable.',
    rating: 5,
  },
  {
    id: 2,
    name: 'Michael Chen',
    role: 'Marketing Specialist',
    company: 'Brand Innovators',
    content: 'As someone transitioning careers, TokoJobs made it easy to find relevant opportunities. Their skill assessment tools helped me identify areas for growth.',
    rating: 5,
  },
  {
    id: 3,
    name: 'Jessica Taylor',
    role: 'UX Designer',
    company: 'Creative Solutions',
    content: 'The quality of internships on TokoJobs is unmatched. I was able to build my portfolio and make industry connections that launched my career.',
    rating: 4,
  },
  {
    id: 4,
    name: 'David Miller',
    role: 'Data Analyst',
    company: 'Insight Analytics',
    content: 'TokoJobs connected me with companies I would have never found on my own. Their personalized recommendations were spot-on for my skills and interests.',
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
            Testimonials
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Hear from students and professionals who found success through our platform.
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