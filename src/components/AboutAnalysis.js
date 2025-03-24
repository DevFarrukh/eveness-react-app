import bodyAnalysis from "../assets/hourglass.png";
import faceAnalysis from "../assets/oval-round.png";
import colorAnalysis from "../assets/cool-summer.png";

const AboutAnalysis = () => {
  return (
    <div className="w-[358px] sm:w-[600px] md:w-[800px] xl:w-[1514px] h-auto xl:h-[735px] mx-auto relative mt-40 xl:mt-80 px-4 xl:px-0">
      {/* Blur glow background - hidden on tablet, visible on mobile and desktop */}
      <div 
        className="absolute w-full sm:hidden xl:block xl:w-[1466px] h-[1200px] xl:h-[786px] top-0 xl:top-[-19px] left-0 xl:left-[-57px] z-0 overflow-hidden"
        style={{ 
          background: 'rgba(239, 222, 211, 1)',
          filter: 'blur(155.7px)',
          borderRadius: '1750px',
        }}
      />

      {/* Content Container */}
      <div className="relative z-10 w-full h-full flex flex-col items-center overflow-hidden">
        {/* Text Content */}
        <div className="xl:text-center mt-[40px] xl:mt-[80px] px-4 xl:px-0">
          <h2 className="font-['Roboto'] font-bold text-[24px] sm:text-[32px] xl:text-[36px] leading-[32px] xl:leading-[44px] mb-[16px] xl:mb-[24px] sm:text-center">
            Finding what suits you can feel overwhelming,
            <br className="hidden xl:block" />
            from color and fabric to neckline choices
          </h2>
          <p className="font-['Poppins'] text-[16px] sm:text-[18px] xl:text-[20px] leading-[24px] xl:leading-[30px] text-[#797979] sm:text-center">
            Our technology makes styling effortless with no courses, no stylists, and just confidence
          </p>
        </div>

        {/* Analysis Cards */}
        <div className="relative w-full xl:absolute xl:w-[1257px] xl:h-[228px] xl:top-[365px] xl:left-[128px] flex flex-col sm:flex-row gap-[24px] sm:gap-[30px] xl:gap-[60px] mt-[40px] xl:mt-0">
          {/* Body Shape Analysis Card */}
          <div className="w-[310px] sm:w-[180px] md:w-[240px] lg:w-[300px] xl:w-[379px] h-[170px] sm:h-[200px] xl:h-[228px] rounded-[10.43px] xl:rounded-[14px] overflow-hidden bg-[#FCF7F3]/60 relative">
            <div className="w-[260px] sm:w-[300px] xl:w-[417px] h-[362px] sm:h-[400px] xl:h-[582px] absolute -translate-y-[11px] -translate-x-[72px] xl:-translate-y-[18px] xl:-translate-x-[110px] xl:scale-x-[-1]">
              <img 
                src={bodyAnalysis} 
                alt="Body Shape Analysis" 
                className="w-full h-full object-cover"
              />
            </div>
            <button 
              className="absolute w-[162px] h-[56px] top-[50%] xl:top-[86.5px] left-[65%] xl:left-[194px] -translate-x-1/2 -translate-y-1/2 xl:translate-y-0 xl:translate-x-0 rounded-[10.97px] flex items-center justify-center gap-[18px] p-[24px]"
              style={{
                background: 'rgba(0, 0, 0, 0.06)',
                boxShadow: '0px 0px 15.94px 0px rgba(0, 0, 0, 0.015)',
                backdropFilter: 'blur(35.87px)'
              }}
            >
              <span className="font-['Poppins'] font-medium text-[10.97px] leading-[18.28px] text-[#22272A] whitespace-nowrap">
                Body Shape Analysis
              </span>
            </button>
          </div>

          {/* Face Shape Analysis Card */}
          <div className="w-[310px] sm:w-[180px] md:w-[240px] lg:w-[300px] xl:w-[379px] h-[170px] sm:h-[200px] xl:h-[228px] rounded-[10.43px] xl:rounded-[14px] overflow-hidden bg-[#FCF7F3]/60 relative">
            <div className="absolute w-[843px] h-[1174px] top-[-43px] xl:-translate-x-[320px] -translate-x-[640px] scale-x-[-1]">
              <img 
                src={faceAnalysis} 
                alt="Face Shape Analysis" 
                className="w-[310px] sm:w-[200px] xl:w-full h-[910px] xl:h-full object-cover"
              />
            </div>
            <button 
              className="absolute w-[162px] h-[56px] top-[50%] xl:top-[86.5px] left-[65%] xl:left-[194px] -translate-x-1/2 -translate-y-1/2 xl:translate-y-0 xl:translate-x-0 rounded-[10.97px] flex items-center justify-center gap-[18px] p-[24px]"
              style={{
                background: 'rgba(0, 0, 0, 0.06)',
                boxShadow: '0px 0px 15.94px 0px rgba(0, 0, 0, 0.015)',
                backdropFilter: 'blur(35.87px)'
              }}
            >
              <span className="font-['Poppins'] font-medium text-[10.97px] leading-[18.28px] text-[#22272A] whitespace-nowrap">
                Face Shape Analysis
              </span>
            </button>
          </div>

          {/* Color Analysis Card */}
          <div className="w-[310px] sm:w-[180px] md:w-[240px] lg:w-[300px] xl:w-[379px] h-[170px] sm:h-[200px] xl:h-[228px] rounded-[10.43px] xl:rounded-[14px] overflow-hidden bg-[#FCF7F3]/60 relative">
            <div className="absolute w-[178px] h-[246px] top-[-9px] left-[-2px]">
              <img 
                src={colorAnalysis} 
                alt="Color Analysis" 
                className="w-full h-full object-cover"
              />
            </div>
            <button 
              className="absolute w-[162px] h-[56px] top-[50%] xl:top-[86.5px] left-[65%] xl:left-[194px] -translate-x-1/2 -translate-y-1/2 xl:translate-y-0 xl:translate-x-0 rounded-[10.97px] flex items-center justify-center gap-[18px] p-[24px]"
              style={{
                background: 'rgba(0, 0, 0, 0.06)',
                boxShadow: '0px 0px 15.94px 0px rgba(0, 0, 0, 0.015)',
                backdropFilter: 'blur(35.87px)'
              }}
            >
              <span className="font-['Poppins'] font-medium text-[10.97px] leading-[18.28px] text-[#22272A] whitespace-nowrap">
                Color Analysis
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutAnalysis; 