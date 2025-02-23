import React from "react";
import heroVideo from '../assets/join-eveness-bg-video.mp4';
import blurBackground from '../assets/blur-rectangle.png';
const JoinEvenessHero = () => {
  return (
    <div className="relative flex items-center justify-center pt-20 px-4 ">
      {/* Video Background Container */}
      <div className="relative w-full sm:w-[1447px] h-[500px] sm:h-[546px] rounded-[16px] overflow-hidden shadow-lg flex items-center justify-center 
                      sm:max-w-[1447px] max-w-[358px] max-h-[553px]">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline 
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src={heroVideo} type="video/mp4" />
        </video>

        {/* Inner Container */}
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
          {/* Heading */}
          <h2 className="text-lg sm:text-4xl font-semibold text-black leading-tight sm:leading-normal">
            Experience our ecosystem where luxury<br className="hidden sm:inline"/> fashion meets user-focused technology
          </h2>

          {/* Buttons - Adjusted for Mobile */}
          <div className="flex flex-col sm:flex-row justify-center gap-4 mt-6 w-full max-w-[500px]">
            <button className="bg-black text-white rounded-lg px-4 py-2 sm:px-6 sm:py-3 hover:bg-black/90 transition shadow-md 
                               w-full sm:w-auto max-w-[358px] sm:max-w-none">
              Join Eveness
            </button>
          </div>
        </div>
      </div>

      
    </div>
  );
};

export default JoinEvenessHero;
