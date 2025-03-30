import React from 'react';

const ColorPalette = () => {
  return (
    <div className="h-full flex flex-col items-center justify-center">
      {/* Title and Description */}
      <div className="text-center mb-6 lg:mb-12">
        <h2 className="font-['Poppins'] font-semibold text-[20px] lg:text-[30px] leading-[24px] lg:leading-[32px] tracking-[0%] mb-2">
          Cool Winter
        </h2>
        <p className="font-['Poppins'] font-medium text-[12px] lg:text-[14px] leading-[14px] lg:leading-[17.5px] tracking-[0%] max-w-[300px] mx-auto px-4 lg:px-4 text-[#797979]">
        Embrace the Crisp, Icy Hues That Enhance Your Natural Cool Elegance
        </p>
      </div>

      {/* Color Categories Container */}
      <div className="space-y-4 lg:space-y-8">
        {/* Primary Colors */}
        <div className="flex items-center gap-4 lg:gap-8">
          <p className="font-['Poppins'] font-normal text-[12px] lg:text-[16px] leading-[150%] w-[60px] lg:w-[100px]">
            SKIN TONES
          </p>
          <div className="w-[140px] lg:w-[228px] h-[36px] lg:h-[56px] rounded-[8px] lg:rounded-[10px] bg-[#FFFFFF5C] backdrop-blur-[39.24px] flex items-center justify-center gap-2 lg:gap-5">
            <div className="w-[24px] lg:w-[32px] h-[24px] lg:h-[32px] rounded-[4px] lg:rounded-[3px] shadow-[0px_0px_8px_0px_#0000000D] backdrop-blur-[39.24px]" style={{ backgroundColor: '#E7D4C6' }} />
            <div className="w-[24px] lg:w-[32px] h-[24px] lg:h-[32px] rounded-[4px] lg:rounded-[3px] shadow-[0px_0px_8px_0px_#0000000D] backdrop-blur-[39.24px]" style={{ backgroundColor: '#DACCC4' }} />
            <div className="w-[24px] lg:w-[32px] h-[24px] lg:h-[32px] rounded-[4px] lg:rounded-[3px] shadow-[0px_0px_8px_0px_#0000000D] backdrop-blur-[39.24px]" style={{ backgroundColor: '#C4B2A1' }} />
            <div className="w-[24px] lg:w-[32px] h-[24px] lg:h-[32px] rounded-[4px] lg:rounded-[3px] shadow-[0px_0px_8px_0px_#0000000D] backdrop-blur-[39.24px]" style={{ backgroundColor: '#F1E2D4' }} />
          </div>
        </div>

        {/* Secondary Colors */}
        <div className="flex items-center gap-4 lg:gap-8">
          <p className="font-['Poppins'] font-normal text-[12px] lg:text-[16px] leading-[150%] w-[60px] lg:w-[100px]">
            HAIR
          </p>
          <div className="w-[140px] lg:w-[228px] h-[36px] lg:h-[56px] rounded-[8px] lg:rounded-[10px] bg-[#FFFFFF5C] backdrop-blur-[39.24px] flex items-center justify-center gap-2 lg:gap-5">
            <div className="w-[24px] lg:w-[32px] h-[24px] lg:h-[32px] rounded-[4px] lg:rounded-[3px] shadow-[0px_0px_8px_0px_#0000000D] backdrop-blur-[39.24px]" style={{ backgroundColor: '#2D2926' }} />
            <div className="w-[24px] lg:w-[32px] h-[24px] lg:h-[32px] rounded-[4px] lg:rounded-[3px] shadow-[0px_0px_8px_0px_#0000000D] backdrop-blur-[39.24px]" style={{ backgroundColor: '#594B3C' }} />
            <div className="w-[24px] lg:w-[32px] h-[24px] lg:h-[32px] rounded-[4px] lg:rounded-[3px] shadow-[0px_0px_8px_0px_#0000000D] backdrop-blur-[39.24px]" style={{ backgroundColor: '#443A34' }} />
            <div className="w-[24px] lg:w-[32px] h-[24px] lg:h-[32px] rounded-[4px] lg:rounded-[3px] shadow-[0px_0px_8px_0px_#0000000D] backdrop-blur-[39.24px]" style={{ backgroundColor: '#3B3B3B' }} />
          </div>
        </div>

        {/* Accent Colors */}
        <div className="flex items-center gap-4 lg:gap-8">
          <p className="font-['Poppins'] font-normal text-[12px] lg:text-[16px] leading-[150%] w-[60px] lg:w-[100px]">
            EYES
          </p>
          <div className="w-[140px] lg:w-[228px] h-[36px] lg:h-[56px] rounded-[8px] lg:rounded-[10px] bg-[#FFFFFF5C] backdrop-blur-[39.24px] flex items-center justify-center gap-2 lg:gap-5">
            <div className="w-[24px] lg:w-[32px] h-[24px] lg:h-[32px] rounded-[4px] lg:rounded-[3px] shadow-[0px_0px_8px_0px_#0000000D] backdrop-blur-[39.24px]" style={{ backgroundColor: '#4D96B2' }} />
            <div className="w-[24px] lg:w-[32px] h-[24px] lg:h-[32px] rounded-[4px] lg:rounded-[3px] shadow-[0px_0px_8px_0px_#0000000D] backdrop-blur-[39.24px]" style={{ backgroundColor: '#4F4F4F' }} />
            <div className="w-[24px] lg:w-[32px] h-[24px] lg:h-[32px] rounded-[4px] lg:rounded-[3px] shadow-[0px_0px_8px_0px_#0000000D] backdrop-blur-[39.24px]" style={{ backgroundColor: '#7C9F85' }} />
            <div className="w-[24px] lg:w-[32px] h-[24px] lg:h-[32px] rounded-[4px] lg:rounded-[3px] shadow-[0px_0px_8px_0px_#0000000D] backdrop-blur-[39.24px]" style={{ backgroundColor: '#3E2F28' }} />
          </div>
        </div>

        {/* Others section */}
        <div className="flex items-center gap-4 lg:gap-8">
          <p className="font-['Poppins'] font-normal text-[12px] lg:text-[16px] leading-[150%] w-[60px] lg:w-[100px]">
            OTHERS
          </p>
            <div className="w-[140px] lg:w-[160px] h-[36px] lg:h-[51px] rounded-[8px] lg:rounded-[10px] bg-[#FFFFFF5C] backdrop-blur-[39.24px] flex items-center justify-center px-2">
            <p className="font-['Poppins'] font-normal text-[12px] lg:text-[14px] leading-[150%]">
            High Contrast &  Warm Undertones
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ColorPalette; 