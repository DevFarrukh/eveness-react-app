import aboutHero from "../assets/about-hero.jpeg";

const AboutHero = () => {
  return (
    <div className="max-w-[1446px] mx-auto px-4 flex justify-center">
      <style>
        {`
          .mobile-blur {
            background: rgba(255, 255, 255, 0.66);
            box-shadow: 0px 0px 16px 0px rgba(0, 0, 0, 0.01);
            backdrop-filter: blur(36px);
          }

          @media (min-width: 768px) {
            .mobile-blur {
              background: transparent;
              backdrop-filter: none;
              box-shadow: none;
            }
          }
        `}
      </style>
      <div 
        className="relative w-[358px] sm:w-[500px] md:w-[650px] lg:w-[800px] xl:w-[1447px] h-[553px] xl:h-[546px] mt-[100px] sm:mt-[120px] md:mt-[140px] lg:mt-[160px] xl:mt-[174px] rounded-[16px] overflow-hidden"
        style={{ boxShadow: '0px 0px 78.3px 0px #0000001A' }}
      >
        {/* Hero Background Image */}
        <div className="absolute top-0 xl:top-[-216px] left-0 xl:left-[-282px] w-full xl:w-[1735px] h-full xl:h-[977px]">
          <img 
            src={aboutHero} 
            alt="About Hero" 
            className="w-full h-full object-cover"
          />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 w-full h-full">
          <div 
            className={`absolute 
              top-[75%] sm:top-[70%] md:top-[65%] lg:top-[60%] xl:top-[217px] 
              left-[65%] sm:left-[60%] md:left-[55%] lg:left-[50%] xl:left-[691px] 
              -translate-x-1/2 xl:translate-x-0 
              -translate-y-1/2 xl:translate-y-0 
              w-[238.62px] sm:w-[350px] md:w-[400px] lg:w-[450px] xl:w-[576px] 
              h-[246.27px] sm:h-[180px] md:h-[160px] lg:h-[140px] xl:h-[112px] 
              flex flex-col gap-[12px] sm:gap-[14px] md:gap-[16px] lg:gap-[18px] xl:gap-[20px] 
              p-6 xl:p-0 
              rounded-[20px] xl:rounded-none
              xl:bg-transparent
              ${window.innerWidth < 768 ? 'mobile-blur' : ''}`}
          >
            <h1 className="font-bold text-[24px] sm:text-[26px] md:text-[28px] lg:text-[30px] xl:text-[32px] leading-[30px] sm:leading-[32px] md:leading-[34px] lg:leading-[36px] xl:leading-[38px] text-center text-[#22272A] xl:text-white">
              In Every Movie, There's Magic
            </h1>
            <p className="font-['Poppins'] font-normal text-[14px] sm:text-[14.5px] md:text-[15px] lg:text-[15.5px] xl:text-[16px] leading-[16px] sm:leading-[16.5px] md:leading-[17px] lg:leading-[17.5px] xl:leading-[18px] text-center text-[#797979] xl:text-[#FCF7F3]">
              In every film, people are captivated by how actors transform into stars. Behind their flawless looks lies hours of styling expertise—color analysis, tailored silhouettes, and attention to detail.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutHero; 