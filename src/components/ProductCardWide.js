import React from 'react';

const ProductCardWide = ({ image, matchPercentage, faceMatch, colorMatch, name, price }) => {
  return (
    <div className="relative w-[358px] h-[366px] md:w-[706px] md:h-[460px]">
      <div className="relative h-[306px] md:h-[400px]">
        <img 
          src={image} 
          alt={name} 
          className="w-full h-full object-cover object-[center_20%] rounded-[10px] md:rounded-[12px]"
        />
        {/* Match indicators */}
        <div className="absolute bottom-4 left-4 flex flex-col md:flex-row gap-2 md:gap-4">
          {matchPercentage && (
            <div className="bg-[#FFFFFF99] shadow-[0px_0px_16px_0px_#00000004] backdrop-blur-[36px] rounded-[11px] px-4 py-2 font-poppins text-[14px] leading-[150%] tracking-[0%] font-normal">
              <span className="font-bold">{matchPercentage}%</span> Overall Match
            </div>
          )}
          {faceMatch && (
            <div className="bg-[#FFFFFF99] shadow-[0px_0px_16px_0px_#00000004] backdrop-blur-[36px] rounded-[11px] px-4 py-2 font-poppins text-[14px] leading-[150%] tracking-[0%] font-normal">
              <span className="font-bold">{faceMatch}%</span> Face Match
            </div>
          )}
          {colorMatch && (
            <div className="bg-[#FFFFFF99] shadow-[0px_0px_16px_0px_#00000004] backdrop-blur-[36px] rounded-[11px] px-4 py-2 font-poppins text-[14px] leading-[150%] tracking-[0%] font-normal">
              Perfect Color
            </div>
          )}
        </div>
      </div>
      <div className="mt-1 flex justify-between items-center h-[44px]">
        <h3 className="text-[16px] font-medium">{name}</h3>
        <span className="text-[18px] font-medium">${price}</span>
      </div>
    </div>
  );
};

export default ProductCardWide; 