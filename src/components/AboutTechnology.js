const AboutTechnology = () => {
  return (
    <div className="w-[392px] sm:w-[600px] md:w-[800px] lg:w-[950px] xl:w-[1375px] h-[724px] xl:h-[716px] mx-auto relative mt-40 rounded-[16px]" style={{
      background: '#22272A',
      boxShadow: '0px 0px 139.7px 0px rgba(0, 0, 0, 0.1)'
    }}>
      {/* Content Container */}
      <div className="w-[359px] sm:w-[550px] md:w-[700px] lg:w-[850px] xl:w-[1275px] mx-auto xl:mx-0 xl:absolute xl:top-[120px] xl:left-[56px] flex flex-col gap-[40px] xl:gap-[74px] pt-10 xl:pt-0">
        {/* Title and Description */}
        <div className="text-center">
          <h2 className="font-['Poppins'] font-bold text-[24px] sm:text-[28px] md:text-[32px] xl:text-[36px] leading-[32px] xl:leading-[38px] mb-[16px] xl:mb-[24px] text-white">
            The Technology Doesn't Matter...
          </h2>
          <p className="font-['Poppins'] font-medium text-[14px] sm:text-[15px] xl:text-[16px] leading-[20px] xl:leading-[18px] text-[#797979] max-w-[320px] sm:max-w-[500px] md:max-w-[600px] lg:max-w-[700px] xl:max-w-[900px] mx-auto">
            Our only goal is to make people feel more confident. Technology is our enabler, but it is not what matters—you matter. Over the next years, we know our technology will advance, But our mission to help people feel more confident will remain.
          </p>
        </div>

        {/* Process Flow Container with Animated Gradient */}
        <div className="w-[359px] sm:w-[550px] md:w-[700px] lg:w-[850px] xl:w-full h-[430px] sm:h-[350px] xl:h-[309px] mx-auto xl:mx-0 rounded-[16px] relative overflow-hidden xl:mt-0">
          {/* Multiple animated gradient layers */}
          <div className="absolute inset-0">
            <div className="absolute inset-0 animate-gradient-1" 
              style={{
                background: 'radial-gradient(circle at 50% 50%, #162848 0%, transparent 60%)',
                filter: 'blur(80px)',
              }}
            />
            <div className="absolute inset-0 animate-gradient-2" 
              style={{
                background: 'radial-gradient(circle at 50% 50%, #313F66 0%, transparent 60%)',
                filter: 'blur(80px)',
              }}
            />
            <div className="absolute inset-0 animate-gradient-3" 
              style={{
                background: 'radial-gradient(circle at 50% 50%, #8E0D16 0%, transparent 60%)',
                filter: 'blur(80px)',
              }}
            />
          </div>
          
          {/* Content with backdrop blur */}
          <div className="relative h-full z-10 backdrop-blur-[20px] bg-black/10 flex flex-col items-center justify-center px-4">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-12 sm:gap-3 md:gap-4 lg:gap-6 xl:gap-8">
              <div className="font-['Poppins'] font-normal text-[24px] sm:text-[18px] md:text-[20px] lg:text-[24px] xl:text-[30px] leading-[26px] sm:leading-[22px] md:leading-[24px] lg:leading-[28px] xl:leading-[38px] tracking-[0%] text-white text-center whitespace-nowrap">
                User inputs
              </div>
              <div className="font-['Poppins'] font-normal text-[24px] sm:text-[28px] md:text-[32px] lg:text-[36px] xl:text-[42px] leading-[26px] tracking-[0%] text-white">
                <span className="block sm:hidden ">V</span>
                <span className="hidden sm:block">&gt;</span>
              </div>
              <div className="font-['Poppins'] font-normal text-[24px] sm:text-[18px] md:text-[20px] lg:text-[24px] xl:text-[30px] leading-[26px] sm:leading-[22px] md:leading-[24px] lg:leading-[28px] xl:leading-[38px] tracking-[0%] text-white text-center">
                Personalized
                <br className="block sm:hidden" />
                <span className="whitespace-nowrap">Recommendations</span>
              </div>
              <div className="font-['Poppins'] font-normal text-[24px] sm:text-[28px] md:text-[32px] lg:text-[36px] xl:text-[42px] leading-[26px] tracking-[0%] text-white">
                <span className="block sm:hidden">V</span>
                <span className="hidden sm:block">&gt;</span>
              </div>
              <div className="font-['Poppins'] font-normal text-[24px] sm:text-[18px] md:text-[20px] lg:text-[24px] xl:text-[30px] leading-[26px] sm:leading-[22px] md:leading-[24px] lg:leading-[28px] xl:leading-[38px] tracking-[0%] text-white text-center whitespace-nowrap">
                Final Product
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes gradient1 {
          0% { transform: translate(-50%, -50%) scale(1.5); }
          25% { transform: translate(50%, -25%) scale(2); }
          50% { transform: translate(25%, 50%) scale(1.5); }
          75% { transform: translate(-25%, 25%) scale(2); }
          100% { transform: translate(-50%, -50%) scale(1.5); }
        }
        @keyframes gradient2 {
          0% { transform: translate(50%, 50%) scale(2); }
          25% { transform: translate(-25%, 50%) scale(1.5); }
          50% { transform: translate(-50%, -25%) scale(2); }
          75% { transform: translate(25%, -50%) scale(1.5); }
          100% { transform: translate(50%, 50%) scale(2); }
        }
        @keyframes gradient3 {
          0% { transform: translate(0%, 0%) scale(1.5); }
          33% { transform: translate(25%, -50%) scale(2); }
          66% { transform: translate(-50%, 25%) scale(1.5); }
          100% { transform: translate(0%, 0%) scale(1.5); }
        }
        .animate-gradient-1 {
          animation: gradient1 8s ease-in-out infinite;
        }
        .animate-gradient-2 {
          animation: gradient2 9s ease-in-out infinite;
        }
        .animate-gradient-3 {
          animation: gradient3 7s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default AboutTechnology; 