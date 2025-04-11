import React from 'react';
import AnalysisBottomBar from './AnalysisBottomBar';
import faceShapeImage from '../assets/face-shape.png'; 
import necklineImage from '../assets/neckline.png';

const FaceShapeAnalysis = () => {
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
        {/* Center Image - Different positioning for mobile and desktop */}
        {/* Mobile Image */}
        <img 
          src={faceShapeImage} 
          alt="Oval face shape" 
          className="block md:hidden absolute w-[395px] h-[420px] object-cover left-1/2 -translate-x-1/2 top-[-0px]"
        />
        {/* Desktop Image */}
        <div className="hidden md:block absolute" style={{ left: '183px', top: '-66px' }}>
          <img 
            src={faceShapeImage} 
            alt="Oval face shape" 
            className="w-[328.49px] h-[458px] object-contain"
          />
          
          {/* Oval face shape border overlay - Desktop only */}
          <div 
            className="absolute w-[113px] h-[156px] top-[100px] left-[106px]"
            style={{
              border: '2px dashed #C7C7C7',
              borderRadius: '50% / 50%',
              transform: 'rotate(-2deg)'
            }}
          />
        </div>

        {/* Content Layer - Above Image */}
        <div className="relative z-20">
          {/* Fact Box */}
          <div 
            className="absolute w-[120px] h-[90px] md:w-[133.2px] md:h-[109.6px] top-[20px] md:top-[42.3px] left-[20px] md:left-[74px] rounded-[11.7px] p-[12px] md:p-[12.6px_14.4px] space-y-[4px] md:space-y-[5.4px]"
            style={{
              background: '#FFFFFF99',
              backdropFilter: 'blur(18px)'
            }}
          >
            <h3 className="font-['Poppins'] font-medium text-[9px] md:text-[10.8px] leading-[13px] md:leading-[15.75px] tracking-[0.01em] text-[#8E0D16]">
              Fact
            </h3>
            <p className="font-['Poppins'] font-normal text-[10px] md:text-[12.6px] leading-[13px] md:leading-[15.75px] tracking-[0.01em] text-[#22272A]">
              The oval face<br />
              shape is rare<br />
              and naturally<br />
              balanced!
            </p>
          </div>

          {/* Neckline Preference Box */}
          <div 
            className="absolute w-[140px] h-[75px] md:w-[146.7px] md:h-[82.2px] top-[130px] md:top-[97.2px] right-[20px] md:left-[471px] rounded-[11.7px] p-[12px] md:p-[12.6px] space-y-[6px] md:space-y-[9px]"
            style={{
              background: '#FFFFFF99',
              backdropFilter: 'blur(18px)'
            }}
          >
            <h3 className="font-['Poppins'] font-medium text-[9px] md:text-[10.8px] leading-[13px] md:leading-[15.75px] tracking-[0.01em] text-[#8E0D16]">
              Neckline Preference
            </h3>
            <p className="font-['Poppins'] font-normal text-[10px] md:text-[12.6px] leading-[13px] md:leading-[15.75px] tracking-[0.01em] flex items-center gap-2">
              Prefer Scoop styled necline
              <span className="inline-block">
                <img src={necklineImage} alt="Neckline" className="w-[22px] h-[20px] md:w-[27.9px] md:h-[26.1px]" />
              </span>
            </p>
          </div>
        </div>

        {/* Desktop AnalysisBottomBar */}
        <div className="hidden md:block absolute bottom-0 left-0 right-0">
          <AnalysisBottomBar 
            label="Your Face Shape Analysis"
            title="Oval Round"
            buttonText="More on Necklines"
          />
        </div>
      </div>

      {/* Mobile AnalysisBottomBar */}
      <div className="block md:hidden mt-4 z-50">
        <AnalysisBottomBar 
          label="Your Face Shape Analysis"
          title="Oval Round"
          buttonText="More on Necklines"
          isMobile={true}
        />
      </div>
    </div>
  );
};

export default FaceShapeAnalysis; 