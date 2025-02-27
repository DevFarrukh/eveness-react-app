import React from "react";
import heroVideo from '../assets/join-eveness-bg-video.mp4';
import blurBackground from '../assets/blur-rectangle.png';
const JoinEvenessHero = () => {
  return (
    <div className="relative flex items-center justify-center pt-20 px-4 ">
      {/* Video Background Container */}
      <div className="relative w-full sm:w-[1249px] h-[500px] sm:h-[650px] rounded-[16px] overflow-hidden shadow-lg flex items-center justify-center 
                      sm:max-w-[1249px] max-w-[358px] max-h-[650px]">
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
          <h2 className="text-[26px] font-bold leading-[28px] sm:text-[30px] sm:font-medium sm:leading-[37.5px] text-black text-center font-poppins tracking-[0%]">
            Experience our ecosystem where luxury<br className="hidden sm:inline"/> fashion meets user-focused technology
          </h2>

          {/* Buttons - Adjusted for Mobile */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-6 w-full max-w-[500px]">
            <button className="w-[134px] h-[38px] bg-[#22272A] text-white rounded-lg px-4 py-2 sm:w-[146px] sm:h-[39px] hover:bg-[#22272A]/90 transition shadow-md 
                               rounded-[8px]">
              Join Eveness
            </button>
          </div>
        </div>
      </div>

      
    </div>
  );
};

export default JoinEvenessHero;
