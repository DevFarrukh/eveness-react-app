import React from "react";
import heroVideo from '../assets/hero-bg-video.mp4';
import blurBackground from '../assets/blur-rectangle.png'; // Import blur effect image

const Hero = () => {
  return (
    <div className="relative flex items-center justify-center pt-20 px-4">
      {/* Video Background */}
      <div className="relative w-full sm:w-[1447px] h-[500px] sm:h-[546px] rounded-[16px] overflow-hidden shadow-lg flex items-center justify-center">
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
          style={{ 
            backgroundImage: `url(${blurBackground})`, 
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        >
          <h1 className="text-xl sm:text-4xl font-bold text-black">Welcome back Christine</h1>
          <p className="text-sm sm:text-lg text-black/80 mt-2">
            Make your Face Radiate and Accentuate your Figure
          </p>

          {/* Buttons - Stack Vertically on Small Screens */}
          <div className="flex flex-col sm:flex-row justify-center gap-4 mt-6 w-full max-w-[500px]">
            <button className="bg-white/80 text-black rounded-lg px-4 py-2 sm:px-6 sm:py-3 hover:bg-white/90 transition shadow-md w-full sm:w-auto">
              View My Dashboard
            </button>
            <button className="bg-white/80 text-black rounded-lg px-4 py-2 sm:px-6 sm:py-3 hover:bg-white/90 transition shadow-md w-full sm:w-auto">
              Explore My Collection
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
