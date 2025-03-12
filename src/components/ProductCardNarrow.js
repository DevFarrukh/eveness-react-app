import React from 'react';

const ProductCardNarrow = ({ image, matchPercentage, name, price }) => {
  return (
    <div className="relative w-[172.72px] h-[236.46px] md:w-[336px] md:h-[460px]">
      <div className="relative h-[192px] md:h-[400px]">
        <img 
          src={image} 
          alt={name} 
          className="w-full h-full object-cover object-[center_20%] rounded-[6.17px] md:rounded-[12px]"
        />
        {/* Match indicator */}
        {matchPercentage && (
          <div className="absolute bottom-2 md:bottom-4 left-2 md:left-4">
            <div className="bg-[#FFFFFF99] shadow-[0px_0px_16px_0px_#00000004] backdrop-blur-[36px] rounded-[6.17px] md:rounded-[11px] px-2 md:px-4 py-1 md:py-2 font-poppins text-[10px] md:text-[14px] leading-[150%] tracking-[0%] font-normal">
              <span className="font-bold">{matchPercentage}%</span> Match
            </div>
          </div>
        )}
      </div>
      <div className="mt-1 flex justify-between items-center h-[32px] md:h-[44px]">
        <h3 className="text-[12px] md:text-[16px] font-medium truncate max-w-[100px] md:max-w-[200px]">{name}</h3>
        <span className="text-[14px] md:text-[18px] font-medium">${price}</span>
      </div>
    </div>
  );
};

export default ProductCardNarrow; 