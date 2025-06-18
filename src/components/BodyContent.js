import React from 'react';
import bodyImage from '../assets/body-background.jpeg'; // Make sure to add your image

const BodyContent = () => {
  return (
    <div className="max-w-[1448px] mx-auto px-4 pt-[120px] pb-[80px]">
      {/* Welcome Text */}
      <div className="text-center mb-12">
        <h1 className="font-['Poppins'] font-bold text-[26px] leading-[32px] text-[#22272A] mb-2">
          Hi Christine
        </h1>
        <p className="font-['Poppins'] text-[16px] leading-[24px] text-[#797979]">
          Here is our guide to accentuating your figure.
        </p>
      </div>

      {/* Two Containers Grid */}
      <div className="flex flex-col lg:flex-row gap-8 justify-center items-center">
        {/* Left Container - Image with annotations */}
        <div 
          className="order-1 w-[358px] h-[384px] lg:w-[937px] lg:h-[589px] rounded-[12px] lg:rounded-[16px] overflow-hidden relative"
          style={{
            boxShadow: '0px 0px 78.3px 0px #0000001A'
          }}
        >
          {/* Image wrapper with specific dimensions */}
          <div className="absolute w-[1149px] h-[564px] top-[-123px] left-[-227px] lg:w-[1778px] lg:h-[874px] lg:top-[-200px] lg:left-[-230px]">
            <img
              src={bodyImage}
              alt="Body Shape Example"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Mobile Annotations */}
          <div className="lg:hidden flex flex-col gap-3 absolute right-3 top-1/2 -translate-y-1/2">
            <div className="bg-white/80 backdrop-blur-sm rounded-[10px] p-3 w-[170px]">
              <p className="font-['Poppins'] text-[12px] leading-[16px] text-left">
                Shoulders and hips are approximately the same width
              </p>
            </div>

            <div className="bg-white/80 backdrop-blur-sm rounded-[10px] p-3 w-[170px]">
              <p className="font-['Poppins'] text-[12px] leading-[16px] text-left">
                Well-balanced upper and lower body with a naturally defined waist
              </p>
            </div>

            <div className="bg-white/80 backdrop-blur-sm rounded-[10px] p-3 w-[170px]">
              <p className="font-['Poppins'] text-[12px] leading-[16px] text-left">
                Curves are naturally proportioned, creating an elegant silhouette
              </p>
            </div>
          </div>

          {/* Desktop Annotations */}
          <div className="hidden lg:flex items-center">
            {/* Horizontal Line */}
            <div 
              className="absolute"
              style={{
                width: '224px',
                top: '198px',
                left: '188px',
                height: '1px',
                background: 'transparent',
                border: '1px solid #C7C7C7'
              }}
            />
            
            {/* Annotation Box */}
            <div 
              className="absolute bg-white/80 backdrop-blur-sm"
              style={{
                width: '266px',
                height: '59px',
                top: '168px',
                left: '431px',
                borderRadius: '10px',
                padding: '10px 20px'
              }}
            >
              <p className="font-['Poppins'] text-[14px] leading-[150%] text-left">
                Shoulders and hips are approximately the same width
              </p>
            </div>
          </div>
          
          <div className="hidden lg:flex items-center">
            {/* Horizontal Line */}
            <div 
              className="absolute"
              style={{
                width: '254px',
                top: '477px',
                left: '193px',
                height: '1px',
                background: 'transparent',
                border: '1px solid #C7C7C7'
              }}
            />
            
            {/* Annotation Box */}
            <div 
              className="absolute bg-white/80 backdrop-blur-sm"
              style={{
                width: '284px',
                height: '59px',
                top: '453px',
                left: '466px',
                borderRadius: '10px',
                padding: '10px 20px'
              }}
            >
              <p className="font-['Poppins'] text-[14px] leading-[150%] text-left">
                Curves are naturally proportioned, creating an elegant silhouette
              </p>
            </div>
          </div>
          
          <div className="hidden lg:flex items-center">
            {/* Gradient Line */}
            <div 
              className="absolute"
              style={{
                width: '196px',
                top: '367px',
                left: '300px',
                height: '1px',
                background: 'linear-gradient(90deg, #C7C7C7 0%, #FFFFFF 100%)'
              }}
            />
            
            {/* Annotation Box */}
            <div 
              className="absolute bg-white/80 backdrop-blur-sm"
              style={{
                width: '295px',
                height: '59px',
                top: '337px',
                left: '515px',
                borderRadius: '10px',
                padding: '10px 20px'
              }}
            >
              <p className="font-['Poppins'] text-[14px] leading-[150%] text-center">
                Well-balanced upper and lower body with a naturally defined waist
              </p>
            </div>
          </div>
        </div>

        {/* Right Container - Body Shape Info */}
        <div className="order-2 w-[333px] min-h-[384px] h-auto lg:h-[589px] lg:w-[479px] rounded-[20px] lg:rounded-[18px] bg-[#FFFFFF5C] backdrop-blur-[40px] relative z-10 -mt-16 lg:mt-0">
          {/* Title Container */}
          <div className="relative lg:absolute w-full lg:w-[228px] pt-8 lg:pt-0 lg:h-[114px] lg:top-[48px] lg:left-[125px] flex flex-col items-center gap-[11px] px-4 lg:px-0">
            <h2 className="font-['Poppins'] font-semibold text-[24px] lg:text-[30px] leading-[34px] text-center">
              Hourglass Body Shape
            </h2>
            <p className="font-['Poppins'] text-[14px] lg:text-[14px] leading-[18px] text-[#797979] text-center">
              Balanced proportions with curves in all the right places.
            </p>
          </div>

          {/* Content Container */}
          <div className="pt-8 lg:pt-[216px] px-4 lg:px-8 pb-8 lg:pb-0">
            {/* Traits Section */}
            <div className="w-full mb-8">
              <div className="flex flex-col lg:flex-row lg:items-center gap-2 lg:gap-[11px] mt-2">
                <p className="font-['Poppins'] font-normal text-[16px] leading-[150%] tracking-[0%] lg:w-[80px]">
                  Traits
                </p>
                <div className="w-full lg:w-[289px] bg-white/40 backdrop-blur-[40px] rounded-[10px] py-[18px] px-4">
                  <ul className="list-disc pl-4 space-y-2">
                    <li className="font-['Poppins'] font-normal text-[14px] leading-[150%] tracking-[0%]">
                      Even bust and hip measurements
                    </li>
                    <li className="font-['Poppins'] font-normal text-[14px] leading-[150%] tracking-[0%]">
                      Defined waist
                    </li>
                    <li className="font-['Poppins'] font-normal text-[14px] leading-[150%] tracking-[0%]">
                      Curvy hips and bust
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Styling Goal Section */}
            <div className="w-full">
              <div className="flex flex-col lg:flex-row lg:items-center gap-2 lg:gap-[11px]">
                <p className="font-['Poppins'] font-normal text-[16px] leading-[150%] tracking-[0%] lg:w-[80px]">
                  Styling<br className="hidden lg:block" />Goal
                </p>
                <div className="w-full lg:w-[289px] bg-white/40 backdrop-blur-[40px] rounded-[10px] py-[18px] px-4">
                  <ul className="list-disc pl-4 space-y-2">
                    <li className="font-['Poppins'] font-normal text-[14px] leading-[150%] tracking-[0%]">
                      Highlight the waist and curves rather than hide them
                    </li>
                    <li className="font-['Poppins'] font-normal text-[14px] leading-[150%] tracking-[0%]">
                      Use fitted or waist-defining cuts to preserve balance
                    </li>
                    <li className="font-['Poppins'] font-normal text-[14px] leading-[150%] tracking-[0%]">
                      Avoid overly boxy or baggy pieces that mask your shape
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BodyContent; 