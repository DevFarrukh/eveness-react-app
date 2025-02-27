import React from "react";
import heroVideo from '../assets/lp-video.mp4';
import blurBackground from '../assets/blur-rectangle.png'; // Import blur effect image

const LpHero = () => {
  return (
    <div className="relative flex items-center justify-center pt-44 px-4">
      {/* Video Background */}
      <div className="relative w-full sm:w-[1266px] h-[500px] sm:h-[713px] rounded-[16px] overflow-hidden shadow-lg flex items-center justify-center">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline 
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src={heroVideo} type="video/mp4" />
        </video>

        {/* Inner Container with Blur Background (Now Responsive) */}
        <div 
          className="absolute flex flex-col justify-center items-center text-center 
                     rounded-[16px] bg-no-repeat bg-cover bg-center px-6 py-4 w-full h-full"
        >
          <h1 className="text-2xl sm:text-4xl font-poppins font-bold text-black max-w-[500px] relative">
            <span className="absolute inset-0 mix-blend-difference text-white">
              Experience the
              <br />
              Future of Fashion
            </span>
            <span className="opacity-0">
              Experience the
              <br />
              Future of Fashion
            </span>
          </h1>
          

          {/* Buttons - Stack Vertically on Small Screens */}
          <div className="flex flex-col sm:flex-row justify-center gap-4 mt-6 w-full max-w-[500px]">
            <button className="w-[60%] mx-auto sm:w-auto bg-white/80 text-black rounded-lg px-4 py-2 sm:px-6 sm:py-3 hover:bg-white/90 transition shadow-md">
              Start Journey
            </button>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default LpHero;
