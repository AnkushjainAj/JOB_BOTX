import React from 'react';
import Image from 'next/image';

const FeaturesAnimation = () => {
  return (
    <div className="relative w-full flex items-center justify-center sm:px-6">
      {/* Animated Container */}
      <div className="w-full max-w-xl sm:max-w-lg md:max-w-xl bg-gradient-to-r from-indigo-100 to-purple-100 rounded-2xl shadow-lg flex items-center justify-center aspect-square">
        <div className="p-6 sm:p-8 text-center">
          <div className="mx-auto w-60 h-60 sm:w-72 sm:h-72 md:w-80 md:h-80 bg-white rounded-full shadow-md flex items-center justify-center">
            <Image
              src="/xxx.jpg"
              alt="Illustration"
              width={300}
              height={300}
              className="w-3/4 h-3/4 object-contain"
            />
          </div>
        </div>
      </div>

      {/* Decorative Floating Circles */}
      <div className="absolute -top-4 right-1/4 w-10 h-10 sm:w-12 sm:h-12 bg-purple-400 rounded-full opacity-20 animate-float-medium"></div>
      <div className="absolute top-1/3 -left-2 w-12 h-12 sm:w-16 sm:h-16 bg-indigo-500 rounded-full opacity-20 animate-float-slow"></div>
      <div className="absolute -bottom-4 right-1/3 w-8 h-8 sm:w-10 sm:h-10 bg-purple-600 rounded-full opacity-20 animate-float-fast"></div>
    </div>
  );
};

export default FeaturesAnimation;
