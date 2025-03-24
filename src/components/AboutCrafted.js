import craftedImage from "../assets/crafted-image.png"; // You'll need to add this image

const AboutCrafted = () => {
  return (
    <div className="w-[358px] sm:w-[600px] md:w-[720px] lg:w-[900px] xl:w-[1077px] mx-auto mt-20 md:mt-40 xl:mt-80 px-4 xl:px-0">
      {/* Main container with relative positioning */}
      <div className="relative w-full">
        {/* Blur background */}
        <div 
          className="absolute w-full h-[300px] md:h-[400px] xl:h-[469px] top-[-20px] left-1/2 -translate-x-1/2 z-0"
          style={{ 
            background: 'rgba(239, 222, 211, 0.8)',
            filter: 'blur(60px)',
            borderRadius: '1750px',
          }}
        />

        {/* Content wrapper */}
        <div className="relative z-10 flex flex-col md:flex-row md:justify-between md:items-start gap-8 md:gap-12">
          {/* Image container */}
          <div className="w-full md:w-[45%] lg:w-[450px] xl:w-[515px]">
            <div className="w-full h-[309px] md:h-[450px] xl:h-[627px] rounded-[16px] overflow-hidden">
              <img 
                src={craftedImage} 
                alt="Crafted materials" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Text content */}
          <div className="w-full md:w-[45%] lg:w-[400px] xl:w-[435px] md:mt-[60px] xl:mt-[120px]">
            <h2 className="font-['Roboto'] font-bold text-[28px] md:text-[32px] xl:text-[36px] leading-[140%] text-black mb-6 md:mb-8">
              Crafted With You in Mind
            </h2>

            <div className="space-y-4 md:space-y-6">
              <p className="font-['Poppins'] font-medium text-[18px] md:text-[19px] xl:text-[20px] leading-[24px] md:leading-[28px] xl:leading-[30px] text-black">
                Our design journey begins with you.
                Who will wear this piece?
                What makes them unique?
              </p>

              <ul className="space-y-3 md:space-y-4">
                {[
                  "Designed to balance proportions.",
                  "Thoughtful details enhance beauty.",
                  "Flattering cuts define and highlight."
                ].map((text, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="w-[6px] h-[6px] rounded-full bg-[#797979] flex-shrink-0 mt-2"/>
                    <span className="font-['Poppins'] font-normal text-[16px] md:text-[18px] xl:text-[20px] leading-[24px] md:leading-[28px] xl:leading-[30px] text-[#797979]">
                      {text}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutCrafted; 