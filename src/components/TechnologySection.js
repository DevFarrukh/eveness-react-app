import technologyImage from "../assets/technology-hero.jpeg";

const TechnologySection = () => {
  return (
    <div className="w-full px-4 pt-40 pb-40">
      <div className="max-w-[1280px] mx-auto">
        <div className="rounded-3xl overflow-hidden relative h-[600px] mb-60">
          {/* Full width image */}
          <img 
            src={technologyImage} 
            alt="Fashion Model Portrait" 
            className="w-full h-full object-cover scale-x-[-1]"
          />
          
          {/* Floating content card */}
          <div className="relative mt-[-380px] sm:mt-[-40px] z-10 flex justify-center sm:justify-start sm:absolute sm:right-16 sm:top-[70%] sm:-translate-y-1/2 p-4 sm:p-0">
            <div className="bg-white/80 backdrop-blur-lg rounded-3xl p-8 max-w-[580px]">
              <h2 className="text-[22px] sm:text-3xl font-bold mb-3 sm:mb-4 leading-tight">
                Technology that Accentuates Your Beauty
              </h2>
              <p className="text-gray-600 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">
                Our Fashion Design and Styling Team with backgrounds from Gucci, IsArlington, and Tom Ford join AI Engineers and Data Analysts to make the most personalized fashion experience.
              </p>
              <button className="bg-white/60 text-black px-4 sm:px-6 py-2 sm:py-2.5 rounded-[10px] hover:bg-white/70 transition-colors text-sm sm:text-base">
                Get Started
              </button>
            </div>
          </div>
        </div>

        {/* Typography section */}
        <div className="text-center max-w-[800px] mx-auto">
          <h2 className="text-[28px] sm:text-[32px] font-bold mb-8">
            How We Personalize Fashion
          </h2>
          <p className="text-[#797979] leading-relaxed text-[16px] font-medium text-center">
            Our Fashion Ecosystem Blends the User-Focused Nature of Tech with Our Love for Fashion. Experience New Ways to Accentuate your Favorite Parts of Yourself. We Build our Tech to Democratize Personal Styling Services and Remind the Industry that the User comes First.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TechnologySection; 