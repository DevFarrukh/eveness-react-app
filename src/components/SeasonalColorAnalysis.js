import React from 'react';
import AnalysisBottomBar from './AnalysisBottomBar';
import seasonalImage from '../assets/seasonal-color.png';
import { FaCheck, FaTimes } from 'react-icons/fa';

const SeasonalColorAnalysis = () => {
  return (
    <div className="relative flex flex-col">
      {/* Main Container */}
      <div 
        className="w-[358px] h-[300px] md:w-[714px] md:h-[307px] rounded-[16px] relative overflow-hidden"
        style={{
          background: 'linear-gradient(180deg, rgba(239, 222, 211, 0.6) 0%, rgba(255, 255, 255, 0.6) 100%)',
          backdropFilter: 'blur(36px)',
          border: '1.8px solid #969696',
          '@media (min-width: 768px)': {
            borderWidth: '1.8px'
          }
        }}
      >
        {/* Left side image */}
        <div className="absolute left-[-100px] top-[-33px] md:left-[-66px] md:top-[-0px] z-20 md:z-0 scale-x-[-1]">
          <img 
            src={seasonalImage} 
            alt="Seasonal color" 
            className="w-[333px] h-[340px] md:w-[341px] md:h-[317px] object-cover"
          />
        </div>

        {/* Right side color information */}
        <div className="absolute right-4 md:right-8 top-4 md:top-8 flex flex-col items-end gap-3 md:gap-6 z-10">
          {/* Best Colors */}
          <div className="flex flex-col items-end gap-1 md:gap-2">
            <div className="flex items-center gap-2">
              <p className="font-['Poppins'] font-medium text-[10px] md:text-[12px] leading-[12px] md:leading-[14px] text-[#797979]">
                Best Colors: Jewel tones
              </p>
              <FaCheck className="w-2.5 md:w-3 h-2.5 md:h-3 text-[#797979]" />
            </div>
            <div className="w-[200px] md:w-[334px] h-[32px] md:h-[39px] rounded-[7.2px] bg-[#B8C6D9] flex items-center justify-end pr-3 md:pr-4">
              <span className="font-['Poppins'] font-medium text-[10px] md:text-[12.6px] leading-[16px] md:leading-[18px] text-white text-right">
                Sapphire Blue
              </span>
            </div>
          </div>

          {/* Colors to Avoid */}
          <div className="flex flex-col items-end gap-1 md:gap-2">
            <div className="flex items-center gap-2">
              <p className="font-['Poppins'] font-medium text-[10px] md:text-[12px] leading-[12px] md:leading-[14px] text-[#797979]">
                Colors to Avoid: Muted shades
              </p>
              <FaTimes className="w-2.5 md:w-3 h-2.5 md:h-3 text-[#797979]" />
            </div>
            <div className="w-[200px] md:w-[334px] h-[32px] md:h-[39px] rounded-[7.2px] bg-[#E4B7D5] flex items-center justify-end pr-3 md:pr-4">
              <span className="font-['Poppins'] font-medium text-[10px] md:text-[12.6px] leading-[16px] md:leading-[18px] text-white text-right">
                THISTLE
              </span>
            </div>
          </div>
        </div>

        {/* Desktop AnalysisBottomBar */}
        <div className="hidden md:block absolute bottom-0 left-0 right-0">
          <AnalysisBottomBar 
            label="Your Seasonal Color Analysis"
            title="Cool Winter"
            buttonText="Find my best colors and Fabrics"
          />
        </div>
      </div>

      {/* Mobile AnalysisBottomBar */}
      <div className="block md:hidden mt-4 z-50">
        <AnalysisBottomBar 
          label="Your Seasonal Color Analysis"
          title="Cool Winter"
          buttonText="Find my best colors and Fabrics"
          isMobile={true}
        />
      </div>
    </div>
  );
};

export default SeasonalColorAnalysis; 