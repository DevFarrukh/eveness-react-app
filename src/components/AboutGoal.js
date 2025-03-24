import { useRef } from "react";
import goalVideo from "../assets/aboutpage-video.mp4";

const AboutGoal = () => {
  return (
    <div className="w-[358px] sm:w-[600px] md:w-[720px] lg:w-[960px] xl:w-[1249px] h-[728px] md:h-[650px] mx-auto relative mt-40 md:mt-40">
      {/* Background video container */}
      <div className="absolute inset-0 overflow-hidden">
        <video 
          src={goalVideo}
          autoPlay
          muted
          loop
          className="w-full h-full object-cover rounded-[16px] md:rounded-[18px]"
        />
      </div>

      {/* Content container with blur effect */}
      <div 
        className="absolute top-[70%] sm:top-[65%] md:top-[60%] lg:top-[240px] xl:top-[240px] 
        left-[50%] lg:left-[50px] xl:left-[50px] 
        transform -translate-x-1/2 lg:translate-x-0 xl:translate-x-0 
        -translate-y-1/2 lg:translate-y-0 xl:translate-y-0 
        w-[329px] sm:w-[500px] md:w-[600px] lg:w-[650px] xl:w-[702px] 
        h-[409.59px] sm:h-[380px] md:h-[370px] lg:h-[360px] xl:h-[360px] 
        rounded-[20px] overflow-hidden"
        style={{
          background: 'rgba(255, 255, 255, 0.72)',
          boxShadow: '0px 0px 16px 0px rgba(0, 0, 0, 0.015)',
          backdropFilter: 'blur(36px)'
        }}
      >
        {/* Mobile/Tablet Layout */}
        <div className="block lg:hidden p-8 flex flex-col h-full">
          <div className="flex-grow">
            <h2 className="font-['Poppins'] font-medium text-[16px] sm:text-[18px] md:text-[19px] leading-[24px] tracking-[-0.01em] mb-2">
              Our goal is to design pieces that make people say
              <br />
              <span className="font-['Poppins'] font-semibold text-[32px] sm:text-[34px] md:text-[36px] leading-[38px] sm:leading-[40px] md:leading-[42px] tracking-[-0.01em] block mt-2">
                You look amazing
              </span>
            </h2>

            <div className="space-y-4 mt-4">
              <p className="font-['Poppins'] font-normal text-[14px] sm:text-[15px] md:text-[16px] leading-[18px] sm:leading-[19px] md:leading-[20px] text-[#797979]">
                Sometimes you can wear an outfit that looks cool but overshadows you, That is not us… We prioritize showcasing your elegance and beauty in every piece of ours.
              </p>
              <p className="font-['Poppins'] font-normal text-[14px] sm:text-[15px] md:text-[16px] leading-[18px] sm:leading-[19px] md:leading-[20px] text-[#797979]">
                And if a piece of ours doesn't accentuate you, We don't want you to wear it, regardless of how it looks on other people.
              </p>
            </div>
          </div>

          <button 
            className="w-[147px] sm:w-[160px] md:w-[170px] h-[39px] rounded-[10px] bg-[#22272A] text-white font-['Poppins'] font-normal text-[14px] sm:text-[15px] md:text-[16px] leading-[150%] tracking-[0%] mt-6"
            style={{
              boxShadow: '0px 0px 16px 0px rgba(0, 0, 0, 0.01)',
              backdropFilter: 'blur(36px)'
            }}
          >
            Experience Eveness
          </button>
        </div>

        {/* Desktop Layout */}
        <div className="hidden lg:block p-12">
          <h2 className="font-['Poppins'] font-medium text-[20px] leading-[47px] tracking-[-0.01em] mb-2">
            Our goal is to design pieces that make people say
            <br />
            <span className="font-['Poppins'] font-semibold text-[40px] leading-[47px] tracking-[-0.01em]">
              You look amazing
            </span>
          </h2>

          <div className="space-y-4 mb-8">
            <p className="font-['Poppins'] font-normal text-[16px] leading-[20px] text-[#797979]">
              Sometimes you can wear an outfit that looks cool but overshadows you, That is not us… We prioritize showcasing your elegance and beauty in every piece of ours.
            </p>
            <p className="font-['Poppins'] font-normal text-[16px] leading-[20px] text-[#797979]">
              And if a piece of ours doesn't accentuate you, We don't want you to wear it, regardless of how it looks on other people.
            </p>
          </div>

          <button 
            className="w-[181px] h-[39px] rounded-[10px] bg-[#22272A] text-white font-['Poppins'] font-normal text-[16px] leading-[150%] tracking-[0%] block"
            style={{
              boxShadow: '0px 0px 16px 0px rgba(0, 0, 0, 0.01)',
              backdropFilter: 'blur(36px)'
            }}
          >
            Experience Eveness
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutGoal; 