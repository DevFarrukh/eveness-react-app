import React from 'react';

const NecklineCard = ({ title, description, imageSrc }) => {
  return (
    <div className="flex flex-col items-center">
      {/* Card Image Container */}
      <div className="w-[170px] md:w-[345px] h-[121px] md:h-[224px] bg-[#F4E8E0] rounded-[8px] md:rounded-[8.72px] shadow-[0px_0px_17.44px_0px_#00000004] backdrop-blur-[39.24px] flex items-center justify-center mb-4 md:mb-6">
        <img 
          src={imageSrc} 
          alt={title} 
          className="w-[69px] md:w-[139px] h-[110px] md:h-[221px] object-contain" 
        />
      </div>
      
      {/* Title and Description */}
      <h3 className="font-poppins font-medium text-[16px] md:text-[26px] leading-[14px] md:leading-[28px] tracking-[0%] text-center uppercase text-[#797979] mb-2 md:mb-6 px-4 md:px-7">
        {title}
      </h3>
      <p className="font-poppins font-normal md:font-medium text-[12px] md:text-[16px] leading-[14px] md:leading-[20px] tracking-[0%] text-center text-[#797979] px-2 md:px-6">
        {description}
      </p>
    </div>
  );
};

export default NecklineCard; 