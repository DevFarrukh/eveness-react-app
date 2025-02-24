import onboardingImage1 from "../assets/onboarding-step1.jpeg";
import onboardingImage2 from "../assets/onboarding-step2.jpeg";
import onboardingImage3 from "../assets/onboarding-step3.jpeg";

const OnboardingSteps = () => {
    return (
      <div className="w-full py-20 px-4 ">
        <div className="max-w-[1280px] mx-auto">
          <h2 className="text-center text-4xl mb-2 font-semibold">
            To access our Collection, Marketplace, Fashion GPT, and Recommendations
          </h2>
          <p className="text-center text-gray-600 mb-16">
            Take a short survey that trains your new fashion ecosystem on your features.
          </p>
  
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-16">
            {/* Step 1 */}
            <div className="relative pt-24">
              <div 
                className="absolute top-0 left-1/2 -translate-x-1/2 text-[91.89px] font-medium text-[#00000015] translate-y-4"
                style={{
                  fontFamily: 'Poppins',
                  lineHeight: '130px',
                  letterSpacing: '0%',
                  fontWeight: '1000'
                }}
              >
                01
              </div>
              <div className="rounded-[18px] overflow-hidden relative w-full max-w-[360px] h-[360px] mx-auto">
                <img 
                  src={onboardingImage1} 
                  alt="Answer Tailored Prompts" 
                  className="w-full h-full object-cover"
                />
                <div 
                  className="absolute bottom-12 left-1/2 -translate-x-1/2 w-[280px] h-[120px] bg-white/70 rounded-[32px]"
                  style={{
                    backdropFilter: 'blur(35.69px)',
                    padding: '20px 24px'
                  }}
                >
                  <div className="flex flex-col gap-2 h-full justify-center">
                    <h3 className="font-medium text-center">Answer Tailored Prompts</h3>
                    <p className="text-sm text-gray-600 text-center">Train Our Algorithm on your size needs</p>
                  </div>
                </div>
              </div>
            </div>
  
            {/* Step 2 */}
            <div className="relative pt-24">
              <div 
                className="absolute top-0 left-1/2 -translate-x-1/2 text-[91.89px] font-medium text-[#00000015] translate-y-4"
                style={{
                  fontFamily: 'Poppins',
                  lineHeight: '130px',
                  letterSpacing: '0%',
                  fontWeight: '1000'
                }}
              >
                02
              </div>
              <div className="rounded-[18px] overflow-hidden relative w-full max-w-[360px] h-[360px] mx-auto">
                <img 
                  src={onboardingImage2} 
                  alt="Upload Your Headshot" 
                  className="w-full h-full object-cover"
                />
                <div 
                  className="absolute bottom-12 left-1/2 -translate-x-1/2 w-[280px] h-[120px] bg-white/70 rounded-[32px]"
                  style={{
                    backdropFilter: 'blur(35.69px)',
                    padding: '20px 24px'
                  }}
                >
                  <div className="flex flex-col gap-2 h-full justify-center">
                    <h3 className="font-medium text-center">Upload Your Headshot</h3>
                    <p className="text-sm text-gray-600 text-center">Receive complimentary color analysis and face shape analysis</p>
                  </div>
                </div>
              </div>
            </div>
  
            {/* Step 3 */}
            <div className="relative pt-24">
              <div 
                className="absolute top-0 left-1/2 -translate-x-1/2 text-[91.89px] font-medium text-[#00000015] translate-y-4"
                style={{
                  fontFamily: 'Poppins',
                  lineHeight: '130px',
                  letterSpacing: '0%',
                  fontWeight: '1000'
                }}
              >
                03
              </div>
              <div className="rounded-[18px] overflow-hidden relative w-full max-w-[360px] h-[360px] mx-auto">
                <img 
                  src={onboardingImage3} 
                  alt="Access Ecosystem" 
                  className="w-full h-full object-cover"
                />
                <div 
                  className="absolute bottom-12 left-1/2 -translate-x-1/2 w-[280px] h-[120px] bg-white/70 rounded-[32px]"
                  style={{
                    backdropFilter: 'blur(35.69px)',
                    padding: '20px 24px'
                  }}
                >
                  <div className="flex flex-col gap-2 h-full justify-center">
                    <h3 className="font-medium text-center">Access Ecosystem</h3>
                    <p className="text-sm text-gray-600 text-center">Our House Algorithm Marketplace Fashion GPT</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default OnboardingSteps;