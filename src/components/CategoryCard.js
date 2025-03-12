import React from 'react';

const CategoryCard = ({ image, category }) => {
  return (
    <div className="relative w-[336px] pb-[32px]">
      {/* Image Container */}
      <div className="relative w-[336px] h-[402px] overflow-hidden rounded-[12px]">
        <img 
          src={image} 
          alt={category} 
          className="w-full h-full object-cover object-center scale-100"
        />
      </div>
      
      {/* Floating Button */}
      <div className="absolute left-1/2 -translate-x-1/2 bottom-[8px]">
        <button className="w-[180.8px] h-[48.8px] rounded-[8.8px] bg-[#FFFFFF99] shadow-[0px_4px_20px_0px_rgba(0,0,0,0.15)] backdrop-blur-[28.8px] flex items-center justify-center">
          <span className="font-poppins text-[18px] font-medium leading-[150%] tracking-[0%]">
            {category}
          </span>
        </button>
      </div>
    </div>
  );
};

export default CategoryCard; 