import React from 'react';

const AnalysisBottomBar = ({ 
  label,          
  title,          
  buttonText,   
  isMobile  
}) => {
  // Mobile-specific styles
  if (isMobile) {
    return (
      <div 
        className="w-[358px] h-[84px] rounded-[16px] p-[16px] flex items-center"
        style={{
          background: '#FFFFFF99',
          border: '0.9px solid #C2C2C2',
          boxShadow: '0px 0px 15.7px 0px #00000004',
          backdropFilter: 'saturate(180%) blur(35.318px)',
        }}
      >
        <div className="flex flex-col">
          <p className="font-['Poppins'] font-medium text-[10px] leading-[16px] text-[#22272A] ">
            {label}
          </p>
          <h2 className="font-['Poppins'] font-bold text-[16px] leading-[24px] text-[#22272A]">
            {title}
          </h2>
        </div>
        <div className="ml-auto">
          <button 
            className="h-[32px] rounded-[8px] text-white text-[10px] font-medium  px-[20px] min-w-[140px] flex items-center text-left"
            style={{
              background: '#22272ACC',
              boxShadow: '0px 0px 14.4px 0px #00000004',
              backdropFilter: 'blur(32.4px)'
            }}
          >
            {buttonText}
          </button>
        </div>
      </div>
    );
  }

  return (
    <div 
      className="absolute w-[652px] h-[72px] bottom-[20px] left-[25px] rounded-[10.8px] p-[18px] flex items-center"
      style={{
        background: '#FFFFFF99',
        border: '0.9px solid #C2C2C2',
        boxShadow: '0px 0px 15.7px 0px #00000004',
        backdropFilter: 'saturate(180%) blur(35.318px)'
      }}
    >
      <div className="flex flex-col">
        <p className="font-['Poppins'] font-medium text-[10.8px] leading-[18px] text-[#22272A] whitespace-nowrap">
          {label}
        </p>
        <h2 className="font-['Poppins'] font-bold text-[18px] leading-[28.8px] text-[#22272A]">
          {title}
        </h2>
      </div>
      <div className="ml-auto">
        <button 
          className="h-[35.2px] rounded-[7.2px] text-white text-[14.4px] font-medium whitespace-nowrap px-[28.8px] min-w-[193.8px] flex items-center justify-center"
          style={{
            background: '#22272ACC',
            boxShadow: '0px 0px 14.4px 0px #00000004',
            backdropFilter: 'blur(32.4px)'
          }}
        >
          {buttonText}
        </button>
      </div>
    </div>
  );
};

export default AnalysisBottomBar; 