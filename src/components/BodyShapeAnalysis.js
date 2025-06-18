import React from 'react';
import bodyShapeImage from '../assets/body-shape-hourglass.png'; 
import hourglassBorder from '../assets/hourglass-vector.png'; 
import AnalysisBottomBar from './AnalysisBottomBar';

const BodyShapeAnalysis = () => {
  return (
    <div className="relative flex flex-col">
      {/* Main Container */}
      <div 
        className="w-[358px] h-[421px] md:w-[702px] md:h-[520px] rounded-[16px] md:rounded-[14.4px] relative overflow-hidden"
        style={{
          background: 'linear-gradient(180deg, rgba(239, 222, 211, 0.6) 0%, rgba(255, 255, 255, 0.6) 100%)',
          backdropFilter: 'blur(36px)',
          border: '1.8px solid #969696',
          '@media (min-width: 768px)': {
            borderWidth: '1.8px'
          }
        }}
      >
        {/* Background Image Container */}
        <div className="absolute inset-0">
          {/* Mobile Image */}
          <img 
            src={bodyShapeImage} 
            alt="Hourglass body shape" 
            className="md:hidden w-full h-full object-cover"
          />
          {/* Desktop Image */}
          <img 
            src={bodyShapeImage} 
            alt="Hourglass body shape" 
            className="hidden md:block absolute w-[381px] h-[530px] object-contain"
            style={{ left: '137px', top: '10px' }}
          />
        </div>

        {/* Hourglass vector overlay - Desktop only */}
        <img 
          src={hourglassBorder}
          alt="Hourglass shape outline"
          className="hidden md:block absolute w-[126px] h-[223px]"
          style={{
            top: '172px',
            left: '267px'
          }}
        />

        {/* Content Layer */}
        <div className="relative z-20">
          {/* Trait Section */}
          <div 
            className="absolute w-[120px] h-[90px] md:w-[153.9px] md:h-[109.6px] top-[20px] md:top-[53px] left-[20px] md:left-[60px] rounded-[11.7px] p-[10px] md:p-[12.6px_14.4px] space-y-[4px] md:space-y-[5.4px]"
            style={{
              background: '#FFFFFFCC',
              backdropFilter: 'blur(32.90279px)'
            }}
          >
            <h3 className="font-['Poppins'] font-medium text-[9px] md:text-[10.8px] leading-[13px] md:leading-[15.75px] tracking-[0.01em] text-[#8E0D16]">
              Trait
            </h3>
            <p className="font-['Poppins'] font-normal text-[10px] md:text-[12.6px] leading-[13px] md:leading-[15.75px] tracking-[0.01em] text-[#22272A]">
              Even bust and hip measurements
              Naturally defined waist
            </p>
          </div>

          {/* Goal Section */}
          <div 
            className="absolute w-[100px] h-[80px] md:w-[125.1px] md:h-[94.6px] top-[180px] md:top-[250px] left-[20px] md:left-[87px] rounded-[11.7px] p-[10px] md:p-[12.6px_14.4px] space-y-[4px] md:space-y-[5.4px]"
            style={{
              background: '#FFFFFF99',
              backdropFilter: 'blur(18px)'
            }}
          >
            <h3 className="font-['Poppins'] font-medium text-[9px] md:text-[10.8px] leading-[13px] md:leading-[15.75px] tracking-[0.01em] text-[#8E0D16]">
              Goal
            </h3>
            <p className="font-['Poppins'] font-normal text-[10px] md:text-[12.6px] leading-[13px] md:leading-[15.75px] tracking-[0.01em] text-[#22272A]">
              Highlight your bodies natural balance
            </p>
          </div>

          {/* Avoid Section */}
          <div 
            className="absolute w-[150px] h-[65px] md:w-[190.8px] md:h-[78.6px] top-[130px] md:top-[188px] right-[20px] md:left-[446px] rounded-[11.7px] p-[10px] md:p-[12.6px_14.4px] space-y-[4px] md:space-y-[5.4px]"
            style={{
              background: '#FFFFFF99',
              backdropFilter: 'blur(18px)'
            }}
          >
            <h3 className="font-['Poppins'] font-medium text-[9px] md:text-[10.8px] leading-[13px] md:leading-[15.75px] tracking-[0.01em] text-[#8E0D16]">
              Avoid
            </h3>
            <p className="font-['Poppins'] font-normal text-[10px] md:text-[12.6px] leading-[13px] md:leading-[15.75px] tracking-[0.01em] text-[#22272A]">
              Overly baggy silhouettes
              that mask your shape
            </p>
          </div>
        </div>

        {/* Desktop AnalysisBottomBar */}
        <div className="hidden md:block absolute bottom-0 left-0 right-0">
          <AnalysisBottomBar 
            label="Your Body Shape Analysis"
            title="Hourglass"
            buttonText="Accentuate my Figure"
          />
        </div>
      </div>

      {/* Mobile AnalysisBottomBar */}
      <div className="block md:hidden mt-4 z-50">
        <AnalysisBottomBar 
          label="Your Body Shape Analysis"
          title="Hourglass"
          buttonText="Accentuate my Figure"
          isMobile={true}
        />
      </div>
    </div>
  );
};

export default BodyShapeAnalysis;
