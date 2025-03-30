import React from 'react';

const FabricBox = ({ image, name }) => (
  <div 
    className="w-[168px] h-[110px] lg:w-[402px] lg:h-[166px] rounded-[8px] lg:rounded-[8.72px] shadow-[0px_0px_17.44px_0px_#00000004] backdrop-blur-[39.24px] relative overflow-hidden"
    style={{
      backgroundImage: `url(${image})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    }}
  >
    <div className="absolute bottom-3 left-3 lg:bottom-6 lg:left-6">
      <p className="font-['Poppins'] font-medium text-[14px] lg:text-[20px] leading-[14px] lg:leading-[20px] tracking-[0%] uppercase text-white">
        {name}
      </p>
    </div>
  </div>
);

const FabricGrid = ({ title, fabrics }) => {
  return (
    <div className="max-w-[1448px] mx-auto px-4 py-8 lg:py-16">
      <div className="text-center mb-8 lg:mb-16">
        <h2 className="font-['Poppins'] font-semibold text-[26px] leading-[20px] tracking-[0%] mb-2">
          {title}
        </h2>
      </div>

      <div className="flex flex-wrap justify-center gap-4 lg:gap-8">
        {fabrics.map((fabricItem, index) => {
          const isLastItemAlone = index === fabrics.length - 1 && fabrics.length % 2 === 1;
          const isLastItemAloneDesktop = index === fabrics.length - 1 && fabrics.length % 3 === 1;
          const isSecondLastItemInPair = index === fabrics.length - 2 && fabrics.length % 3 === 2;
          
          return (
            <div 
              key={fabricItem.name}
              className={`
                ${isLastItemAlone ? 'w-full flex justify-center lg:w-auto' : ''}
                ${isLastItemAloneDesktop ? 'lg:col-span-3 lg:flex lg:justify-center' : ''}
                ${isSecondLastItemInPair ? 'lg:col-span-2 lg:flex lg:justify-center' : ''}
              `}
            >
              <FabricBox image={fabricItem.image} name={fabricItem.name} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FabricGrid; 