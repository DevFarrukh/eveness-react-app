import React from 'react';
import ColorPalette from './ColorPalette';
import winterImage from '../assets/facepage-hero.jpeg';

const ColorsContent = () => {
  return (
    <div className="max-w-[1448px] mx-auto px-4 pt-[120px] pb-[80px]">
      {/* Welcome Text */}
      <div className="text-center mb-12">
        <h1 className="font-['Poppins'] font-bold text-[26px] leading-[32px] text-[#22272A] mb-2">
          Hi Christine
        </h1>
        <p className="font-['Poppins'] text-[16px] leading-[24px] text-[#797979]">
          Here is our guide to making you glow
        </p>
      </div>

      {/* Two Containers Grid */}
      <div className="flex flex-col lg:flex-row gap-8 justify-center items-center">
        {/* Image Container - First on mobile */}
        <div 
          className="order-1 lg:order-2 w-[358px] h-[296px] lg:w-[937px] lg:h-[589px] rounded-[12px] lg:rounded-[16px] overflow-hidden"
          style={{
            boxShadow: '0px 0px 78.3px 0px #0000001A'
          }}
        >
          <img
            src={winterImage}
            alt="Cool Winter Example"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Color Palette Container - Second on mobile */}
        <div className="order-2 lg:order-1 w-[333px] h-[384px] lg:w-[479px] lg:h-[589px] rounded-[20px] lg:rounded-[18px] bg-[#FFFFFF5C] backdrop-blur-[40px] p-8 -mt-16 lg:mt-0 relative z-10">
          <ColorPalette />
        </div>
      </div>
    </div>
  );
};

export default ColorsContent; 