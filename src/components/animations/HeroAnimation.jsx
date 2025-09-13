import React from 'react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

const HeroAnimation = () => {
  return (
    <div className="relative h-full flex items-center justify-center px-5">
      <div className="w-full h-[600px] bg-gradient-to-br from-indigo-950/50 to-purple-950/50 rounded-3xl shadow-2xl backdrop-blur-sm border border-indigo-500/20 p-8 flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(129,140,248,0.05)_50%,transparent_75%,transparent_100%)] bg-300% animate-gradient"></div>
        
        {/* <div className="relative z-10 w-96 h-96 bg-gradient-to-br from-indigo-500/20 to-purple-500/20 rounded-full flex items-center justify-center backdrop-blur-sm border border-indigo-500/20 animate-float-slow"> */}
          {/* <div className="w-80 h-80 bg-gradient-to-br from-indigo-600/20 to-purple-600/20 rounded-full flex items-center justify-center backdrop-blur-sm border border-indigo-500/20 animate-float-medium">
            <div className="w-64 h-64 bg-gradient-to-br from-indigo-700/20 to-purple-700/20 rounded-full flex items-center justify-center backdrop-blur-sm border border-indigo-500/20 animate-float-fast">
              <p className="text-2xl font-semibold bg-gradient-to-r from-indigo-400 to-purple-400 text-transparent bg-clip-text">TokoJobs</p>
            </div>
          </div> */}
          <img
                    src="https://app.svgator.com/assets/svgator.webapp/log-in-girl.svg"
                    alt="Illustration"
                    className="w-full "
                  />
        {/* </div> */}
      </div>
      
      {/* Decorative Elements */}
      <div className="absolute -top-8 right-1/4 w-20 h-20 bg-purple-500/20 rounded-full blur-xl animate-float-medium"></div>
      <div className="absolute top-1/3 -left-4 w-24 h-24 bg-indigo-500/20 rounded-full blur-xl animate-float-slow"></div>
      <div className="absolute -bottom-4 right-1/3 w-16 h-16 bg-pink-500/20 rounded-full blur-xl animate-float-fast"></div>
    </div>
  );
};

export default HeroAnimation;