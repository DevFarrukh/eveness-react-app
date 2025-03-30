import React from 'react';

const ColorBox = ({ color, name, textColor = 'white' }) => (
  <div 
    className="w-[170px] h-[76px] lg:w-[362px] lg:h-[147px] rounded-[8.72px] shadow-[0px_0px_17.44px_0px_#00000004] backdrop-blur-[39.24px] relative overflow-hidden"
    style={{ backgroundColor: color }}
  >
    <div className="absolute bottom-3 left-3 lg:bottom-6 lg:left-6">
      <p className={`font-['Poppins'] font-medium text-[14px] lg:text-[20px] leading-[14px] lg:leading-[20px] tracking-[0%] uppercase`}
         style={{ color: textColor }}>
        {name}
      </p>
    </div>
  </div>
);

const ColorGrid = ({ title, description, colors }) => {
  return (
    <div className="max-w-[1448px] mx-auto px-4 py-8 lg:py-16">
      <div className="text-center mb-12 lg:mb-24">
        <h2 className="font-['Poppins'] font-bold text-[32px] leading-[40px] tracking-[0%] mb-2">
          {title}
        </h2>
        <p className="font-['Poppins'] font-medium text-[16px] leading-[20px] tracking-[0%] text-[#797979] text-center max-w-[600px] mx-auto px-8">
          {description}
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-4 lg:gap-[66px]">
        {colors.map((colorItem, index) => {
          const isLastItemAlone = index === colors.length - 1 && colors.length % 2 === 1;
          const isLastItemAloneDesktop = index === colors.length - 1 && colors.length % 3 === 1;
          const isSecondLastItemInPair = index === colors.length - 2 && colors.length % 3 === 2;
          
          return (
            <div 
              key={colorItem.name}
              className={`
                ${isLastItemAlone ? 'w-full flex justify-center lg:w-auto' : ''}
                ${isLastItemAloneDesktop ? 'lg:col-span-3 lg:flex lg:justify-center' : ''}
                ${isSecondLastItemInPair ? 'lg:col-span-2 lg:flex lg:justify-center' : ''}
              `}
            >
              <ColorBox 
                color={colorItem.color} 
                name={colorItem.name} 
                textColor={colorItem.textColor} 
              />
            </div>
          );
        })}
      </div>
      <div className="mx-auto w-full xl:w-[1314px] h-[1px] mt-12 lg:mt-24 xl:mt-48"
        style={{
          background: 'linear-gradient(90deg, #FCF7F3 0%, #797979 51.5%, #FCF7F3 100%)'
        }}
      />
    </div>
  );
};

export default ColorGrid; 