import React from 'react';

const DressCard = ({ image, title, description, backgroundColor = '#F4E8E0', showAvoidButton = false }) => (
  <div className="flex flex-col items-center">
    {/* Image Container */}
    <div 
      className="w-[170px] h-[121px] lg:w-[300px] lg:h-[300px] rounded-[8px] lg:rounded-[8.72px] relative overflow-hidden"
      style={{ 
        backgroundColor,
        boxShadow: '0px 0px 17.44px 0px #00000004',
        backdropFilter: 'blur(39.24px)'
      }}
    >
      <img 
        src={image} 
        alt={title}
        className="w-full h-full object-contain"
      />
      {showAvoidButton && (
        <button 
          className="absolute bottom-2 lg:bottom-4 left-2 lg:left-4 w-[70px] lg:w-[94px] h-[30px] lg:h-[39px] rounded-[8px] flex items-center justify-center text-white backdrop-blur-[36px]"
          style={{ 
            backgroundColor: '#8E0D16',
            boxShadow: '0px 0px 16px 0px #00000004'
          }}
        >
          <span className="font-['Poppins'] font-normal text-[14px] lg:text-[16px] leading-[150%] tracking-[0%]">
            Avoid
          </span>
        </button>
      )}
    </div>

    {/* Text Content Below Container */}
    <div className="text-center mt-4 lg:mt-6 max-w-[170px] lg:max-w-[300px]">
      <h3 className="font-['Poppins'] font-medium text-[18px] lg:text-[26px] leading-[20px] tracking-[0%] uppercase text-[#797979] mb-2 lg:mb-4">
        {title}
      </h3>
      <p className="font-['Poppins'] font-medium text-[14px] lg:text-[16px] leading-[20px] tracking-[0%] text-[#797979] p-2">
        {description}
      </p>
    </div>
  </div>
);

const DressTypes = ({ dresses }) => {
  return (
    <div className="max-w-[1512px] mx-auto px-4 lg:px-16 py-8 lg:py-16">
      <div className="flex flex-wrap justify-center gap-4 lg:gap-14 lg:gap-y-24">
        {dresses.map((dress, index) => (
          <DressCard
            key={index}
            image={dress.image}
            title={dress.title}
            description={dress.description}
            backgroundColor={dress.backgroundColor}
            showAvoidButton={dress.showAvoidButton}
          />
        ))}
      </div>
    </div>
  );
};

export default DressTypes; 