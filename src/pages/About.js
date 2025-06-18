import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import AboutHero from "../components/AboutHero";
import AboutText from "../components/AboutText";
import AboutCrafted from "../components/AboutCrafted";
import AboutAnalysis from "../components/AboutAnalysis";
import AboutTechnology from "../components/AboutTechnology";
import AboutGoal from "../components/AboutGoal";
import { homePageNavItems } from "../data/mockData";
import aboutHero from "../assets/about-hero.jpeg";
import firstImage from "../assets/principle-1.jpeg";
import secondImage from "../assets/principle-2.jpeg";
import thirdImage from "../assets/principle-3.jpeg";
import AboutPrinciple from "../components/AboutPrinciple";
const About = () => {
  const evesnessPrinciples = [
    {
      imageOnRight: true,
      title: "Naturally Sustainable",
      description: "Every brand loves to use sustainability to market themselves.\n\nWe have no interest in glorifying ourselves for doing the essential.\n\nAll of our manufacturers are certified to meet ethical standards, We won't use opportunistic agendas to profit off what should be a norm.\n\nWe want sustainability to be normalized.",
      image: firstImage,

    },
    {
      imageOnRight: false,
      title: "Your Privacy Matters",
      description: "We're a house of flattery, not a house of data exploitation.\n\nWe collect details to craft the best possible fits—for you.\n\nWe use tech to help recommend the best colors and necklines—for you.\n\nWe understand you're sharing personal details with us,\n\nso we're protective of them.\n\nWe encrypt, we secure, and we care for your data. ",
      image: secondImage
    },
    {
      imageOnRight: true,
      title: "No Gatekeeping",
      description: "We are not gatekeepers...\n\nWe made tech we find revolutionary and opened it\n\nFor you to have a personal stylist one query away or for any fashion company to integrate Eveness into their website.\n\nApple may make everyone use blue text but we won't.\n\nWe don't want to take over the fashion industry—we want to empower it.",
      image: thirdImage
    }
  ];
  return (
    <div className="min-h-screen bg-[#FCF7F3]">
      {/* Background Image Container */}
      <div className="absolute w-full h-[1200px] z-0 overflow-hidden">
        <div className="relative w-full h-full">
          <img 
            src={aboutHero} 
            alt="About Hero" 
            className="w-full h-full object-cover"
          />
          <div 
            className="absolute inset-0 bg-gradient-to-b from-[#FCF7F3C2] via-[#FCF7F3C2] to-[#FCF7F3] backdrop-blur-[108.1px]"
            style={{ 
              backdropFilter: 'blur(108.1px)',
              backgroundImage: 'linear-gradient(to bottom, #FCF7F3C2 70%, #FCF7F3 100%)'
            }}
          />
        </div>
      </div>

      {/* Main Content Wrapper */}
      <div className="relative z-10 min-h-screen flex flex-col">
        <div className="max-w-[1920px] w-full mx-auto flex-1">
          <Navbar navItems={homePageNavItems} />
          
          {/* Content Container */}
          <div className="flex-grow">
            <AboutHero />
            <AboutText />
            <div className="w-full bg-[#FCF7F3] relative z-20">
              <div className="max-w-[1920px] mx-auto">
                <AboutCrafted />
                <AboutAnalysis />
                <AboutTechnology />
                <div className="w-[358px] md:w-[555px] h-auto md:h-[116px] mx-auto mt-20 md:mt-40 px-4 md:px-0">
                  <div className="text-center">
                    <h2 className="font-bold text-[24px] md:text-[32px] leading-[32px] md:leading-[40px] mb-3 md:mb-4">
                      Eveness Principles
                    </h2>
                    <p className="font-['Poppins'] font-medium text-[14px] md:text-[16px] leading-[18px] md:leading-[20px] text-[#797979]">
                      Our Company is an extension of self-help. We find it critical to be rooted in care in everything we do--even when it's not visible.
                    </p>
                  </div>
                </div>
                <div className="w-full bg-[#FCF7F3]">
                  <div className="flex flex-col gap-10 max-w-[1920px] mx-auto">
                    {evesnessPrinciples.map((principle, index) => (
                      <AboutPrinciple
                        key={index}
                        imageOnRight={principle.imageOnRight}
                        title={principle.title}
                        description={principle.description}
                        image={principle.image}
                      />
                    ))}
                  </div>
                </div>
                <AboutGoal />
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </div>
  );
};

export default About;