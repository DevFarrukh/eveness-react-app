import React from 'react';
import faceShapeDiagram from "../assets/facepage-hero.jpeg";

const FaceHero = () => {
  return (
    <>
      {/* Header text outside hero - desktop only */}
      <div className="hidden md:block mt-12 text-center mb-24">
        <h1 className="font-poppins font-semibold text-[26px] leading-[20px] tracking-[0%] text-center mb-2">
          Hi Christine
        </h1>
        <p className="font-poppins font-normal text-[20px] leading-[32px] tracking-[-2%] text-center text-[#797979]">
          Our guide to making necklines harmonize with your face shape
        </p>
      </div>

      {/* Hero Container */}
      <div className="relative w-[358px] sm:w-[600px] md:w-[750px] lg:w-[1000px] xl:w-[1446px] h-[522px] xl:h-[589px] mx-auto mt-[4px] xl:mt-0 rounded-[12px] xl:rounded-[16px] shadow-[0px_0px_78.3px_0px_#0000001A] bg-white xl:overflow-hidden">
        {/* Mobile and tablet layout */}
        <div className="block xl:hidden relative h-full">
          <div className="w-full h-full">
            <img 
              src={faceShapeDiagram} 
              alt="Face Shape Diagram" 
              className="w-full h-full object-cover rounded-[12px]"
            />
            {/* Face shape outline */}
            <svg 
              className="absolute top-[154px] sm:top-[154px] md:top-[154px] lg:top-[154px] left-[45px] sm:left-[160px] md:left-[240px] lg:left-[360px] w-[145px] h-[150px]"
              viewBox="0 0 258 375"
            >
              <ellipse
                cx="129"
                cy="187.5"
                rx="126"
                ry="183"
                fill="none"
                stroke="#C7C7C7"
                strokeWidth="4.42"
                strokeDasharray="15 15"
                filter="drop-shadow(0px 0px 1px rgba(0, 0, 0, 0.25))"
              />
            </svg>

            {/* Measurement indicators */}
            <div className="absolute bottom-24 left-4 right-4 flex flex-col gap-2">
              <div className="w-[132px] h-[54px] ml-auto rounded-[8px] px-[22px] py-[14px] bg-[#FFFFFF75] shadow-[0px_0px_16px_0px_#00000004] backdrop-blur-[36px] flex items-center">
                <span className="font-poppins font-normal text-[14px] leading-[16px] tracking-[0%] text-right">
                  Longer than Wide Face
                </span>
              </div>
              <div className="w-[217px] h-[54px] ml-auto rounded-[8px] px-[22px] py-[14px] bg-[#FFFFFF75] shadow-[0px_0px_16px_0px_#00000004] backdrop-blur-[36px] flex items-center">
                <span className="font-poppins font-normal text-[14px] leading-[16px] tracking-[0%] text-right">
                  Similar Forehead, Cheek and Jaw Width
                </span>
              </div>
              <div className="w-[185px] h-[54px] ml-auto rounded-[8px] px-[22px] py-[14px] bg-[#FFFFFF33] shadow-[0px_0px_16px_0px_#00000004] backdrop-blur-[36px] flex items-center">
                <span className="font-poppins font-normal text-[14px] leading-[16px] tracking-[0%] text-right">
                  Round Cheekbones and Jaw
                </span>
              </div>
            </div>
          </div>

          {/* Floating info box */}
          <div className="absolute w-[326px] sm:w-[360px] md:w-[400px] lg:w-[450px] h-[134px] -bottom-28 left-1/2 -translate-x-1/2 rounded-[18px] py-[26px] px-[20px] bg-[#FFFFFF99] backdrop-blur-[40px] flex flex-col gap-[10px] z-20">
            <h2 className="font-poppins font-semibold text-[24px] leading-[28px] tracking-[0%] text-center">
              Diamond Face Shape
            </h2>
            <p className="font-poppins font-medium text-[14px] leading-[20px] tracking-[0%] text-center text-[#797979]">
              Embrace necklines that create softness around your cheekbones while gently highlighting your forehead and chin
            </p>
          </div>
        </div>

        {/* Desktop layout */}
        <div className="hidden xl:block">
          {/* Face shape outline */}
          <svg 
            className="absolute top-[138px] left-[672px] w-[258px] h-[375px] z-20"
            viewBox="0 0 258 375"
          >
            <ellipse
              cx="129"
              cy="187.5"
              rx="126"
              ry="183"
              fill="none"
              stroke="#C7C7C7"
              strokeWidth="4.42"
              strokeDasharray="15 15"
              filter="drop-shadow(0px 0px 1px rgba(0, 0, 0, 0.25))"
            />
          </svg>

          {/* Measurement lines */}
          <div 
            className="absolute top-[231px] left-[812px] w-[224px] h-[3px] bg-[#C7C7C7] z-20" 
          />
          <div 
            className="absolute top-[365px] left-[897px] w-[196px] h-[3px] z-20"
            style={{
              background: 'linear-gradient(90deg, #C7C7C7 0%, #FFFFFF 100%)'
            }}
          />
          <div 
            className="absolute top-[494px] left-[812px] w-[206px] h-[3px] bg-[#C7C7C7] z-20"
          />

          {/* Left side info box */}
          <div className="absolute top-[260px] left-[59px] w-[457px] h-[174px] bg-[#FFFFFF99] backdrop-blur-[36px] p-6 rounded-[12px] z-10 flex flex-col items-center justify-center">
            <h2 className="font-poppins font-semibold text-[30px] leading-[32px] tracking-[0%] text-center mb-4">
              Diamond Face Shape
            </h2>
            <p className="font-poppins font-medium text-[14px] leading-[17.5px] tracking-[0%] text-center text-[#797979] px-8">
              Embrace necklines that create softness around your cheekbones while gently highlighting your forehead and chin
            </p>
          </div>

          {/* Face measurement indicators */}
          <div className="absolute top-[214px] left-[1055px] w-[204px] h-[38px] rounded-[10px] px-[22px] py-[14px] bg-[#FFFFFF75] shadow-[0px_0px_16px_0px_#00000004] backdrop-blur-[36px] flex items-center z-20">
            <span className="font-poppins font-normal text-[14px] leading-[150%] tracking-[0%]">
              Longer than Wide Face
            </span>
          </div>
          <div className="absolute top-[335px] left-[1112px] w-[217px] h-[59px] rounded-[10px] px-[22px] py-[14px] bg-[#FFFFFF75] shadow-[0px_0px_16px_0px_#00000004] backdrop-blur-[36px] flex items-center z-20">
            <span className="font-poppins font-normal text-[14px] leading-[150%] tracking-[0%]">
              Similar Forehead, Cheek and Jaw Width
            </span>
          </div>
          <div className="absolute top-[470px] left-[1037px] w-[244px] h-[38px] rounded-[10px] bg-[#FFFFFF33] shadow-[0px_0px_16px_0px_#00000004] backdrop-blur-[36px] flex items-center justify-center z-20">
            <span className="font-poppins font-normal text-[14px] leading-[150%] tracking-[0%] text-black">
              Round Cheekbones and Jaw
            </span>
          </div>

          {/* Full width image */}
          <div className="absolute top-[-237px] left-[-669px] w-[3269px] h-[1281px]">
            <img 
              src={faceShapeDiagram} 
              alt="Face Shape Diagram" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default FaceHero;