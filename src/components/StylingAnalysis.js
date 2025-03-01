import React from "react";
import hourGlass from '../assets/hourglass.png';
import ovalRound from '../assets/oval-round.png';

const StylingAnalysis = () => {
  return (
    <div className="max-w-[1446px] mx-auto px-2  mt-40 sm:mt-40">
      {/* Header Section */}
      <div className="px-3  pt-4 sm:pt-6 pb-3">
        <h1 className="font-bold text-[30px] leading-[32px] tracking-[0%] text-gray-900">
          Best colors, silhouettes, and necklines
        </h1>
        <p className="font-medium text-[16px] leading-[20px] tracking-[0%] text-[#797979]">
          Discover insights on your best colors, face shape, and body fit.
        </p>
        <button className="mt-2 sm:mt-8 bg-[#22272A] text-white px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg text-xs sm:text-sm">
          Explore My Full Analysis
        </button>
      </div>

      {/* Cards Container */}
      <div className="mt-6 sm:mt-16 flex md:grid md:grid-cols-3 overflow-x-auto md:overflow-visible gap-3 sm:gap-4 md:gap-[60px] px-3 pb-6 
                      scrollbar-hide snap-x snap-mandatory">
        {/* Card 1 */}
        <div className="w-[329.35px] h-[169.89px] md:h-[228px] 
                      rounded-[10.43px] md:rounded-[14px] overflow-hidden relative flex shrink-0 md:shrink
                      snap-center md:w-[442px] bg-[#FCF7F3]">
          {/* Image container */}
          <div className="w-[120px] md:w-[240px] h-full overflow-visible relative">
            <img 
              src={hourGlass} 
              alt="Hourglass body shape" 
              className="w-[260px] h-[362px] top-[-11px] left-[-188px]  
                        md:w-[417px] md:h-[582px] md:top-[-18px] md:left-[-302px] md:scale-x-[-1]"
            />
          </div>
          
          {/* Content container */}
          <div className="flex-1 relative">
            <div className="absolute right-2 top-1/2 -translate-y-1/2 
                        w-[192.77px] h-[102.42px] md:w-[234.53px] md:h-[132.56px] p-2 md:p-4 rounded-[5.94px] md:rounded-[10.97px]
                        text-center bg-[rgba(0,0,0,0.06)] md:flex md:flex-col md:gap-[10px]"
                 style={{ 
                   backdropFilter: 'blur(35.87px)',
                   boxShadow: '0px 0px 15.94px 0px rgba(0, 0, 0, 0.01)'
                 }}>
              <h3 className="font-medium md:font-bold text-gray-900 text-sm sm:text-base md:text-[18.28px] md:leading-[24px] md:tracking-[0%]">
                Hourglass
              </h3>
              <p className="text-xs sm:text-sm md:text-[10.97px] md:font-medium md:leading-[16px] md:tracking-[0%] text-[#22272A] mt-0">
                Your Body Shape Analysis
              </p>
              <button className="mt-1 sm:mt-1.5 md:mt-0 bg-gray-700/90 text-white text-xs sm:text-sm px-2 sm:px-3 py-1 sm:py-1.5 md:px-4 rounded-lg mx-auto">
                Click into Dashboard
              </button>
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="w-[329.35px] h-[169.89px] md:h-[228px] 
                      rounded-[10.43px] md:rounded-[14px] overflow-hidden relative flex shrink-0 md:shrink
                      snap-center md:w-[442px] bg-[#FCF7F3]">
          <div className="w-[120px] md:w-[240px] h-full overflow-visible relative">
            <img 
              src={ovalRound} 
              alt="Oval face shape" 
              className="w-[260px] h-[362px] top-[-11px] left-[-188px]
                        md:w-[843px] md:h-[1174px] md:top-[-43px] md:left-[-525px] md:scale-x-[-1] md:scale-y-100 object-cover object-center"
            />
          </div>
          
          <div className="flex-1 relative">
            <div className="absolute right-2 top-1/2 -translate-y-1/2 
                        w-[192.77px] h-[102.42px] md:w-[234.53px] md:h-[132.56px] p-2 md:p-4 rounded-[5.94px] md:rounded-[10.97px]
                        text-center bg-[rgba(0,0,0,0.06)] md:flex md:flex-col md:gap-[10px]"
                 style={{ 
                   backdropFilter: 'blur(35.87px)',
                   boxShadow: '0px 0px 15.94px 0px rgba(0, 0, 0, 0.01)'
                 }}>
              <h3 className="font-medium md:font-bold text-gray-900 text-sm sm:text-base md:text-[18.28px] md:leading-[24px] md:tracking-[0%]">
                Oval Round
              </h3>
              <p className="text-xs sm:text-sm md:text-[10.97px] md:font-medium md:leading-[16px] md:tracking-[0%] text-[#22272A] mt-0">
                Your Face Shape Analysis
              </p>
              <button className="mt-1 sm:mt-1.5 md:mt-0 bg-gray-700/90 text-white text-xs sm:text-sm px-2 sm:px-3 py-1 sm:py-1.5 md:px-4 rounded-lg mx-auto">
                Click into Dashboard
              </button>
            </div>
          </div>
        </div>

        {/* Card 3 */}
        <div className="w-[329.35px] h-[169.89px] md:h-[228px] 
                      rounded-[10.43px] md:rounded-[14px] overflow-hidden relative flex shrink-0 md:shrink
                      snap-center md:w-[442px] bg-[#FCF7F3]">
          <div className="w-[120px] md:w-[240px] h-full overflow-visible relative">
            <img 
              src={ovalRound} 
              alt="Oval face shape" 
              className="w-[260px] h-[362px] top-[-11px] left-[-188px] object-cover object-center
                        md:w-[843px] md:h-[1174px] md:top-[-43px] md:left-[-525px] md:scale-x-[-1] md:scale-y-100"
            />
          </div>
          
          <div className="flex-1 relative">
            <div className="absolute right-2 top-1/2 -translate-y-1/2 
                        w-[192.77px] h-[102.42px] md:w-[234.53px] md:h-[132.56px] p-2 md:p-4 rounded-[5.94px] md:rounded-[10.97px]
                        text-center bg-[rgba(0,0,0,0.06)] md:flex md:flex-col md:gap-[10px]"
                 style={{ 
                   backdropFilter: 'blur(35.87px)',
                   boxShadow: '0px 0px 15.94px 0px rgba(0, 0, 0, 0.01)'
                 }}>
              <h3 className="font-medium md:font-bold text-gray-900 text-sm sm:text-base md:text-[18.28px] md:leading-[24px] md:tracking-[0%]">
                Cool Summer
              </h3>
              <p className="text-xs sm:text-sm md:text-[10.97px] md:font-medium md:leading-[16px] md:tracking-[0%] text-[#22272A] mt-0">
                Your Seasonal Color Analysis
              </p>
              <button className="mt-1 sm:mt-1.5 md:mt-0 bg-gray-700/90 text-white text-xs sm:text-sm px-2 sm:px-3 py-1 sm:py-1.5 md:px-4 rounded-lg mx-auto">
                Click into Dashboard
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StylingAnalysis;
