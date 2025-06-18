import React from 'react';
import WelcomeHeader from '../components/WelcomeHeader';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { homePageNavItems } from '../data/mockData';
import BodyShapeAnalysis from '../components/BodyShapeAnalysis';
import FaceShapeAnalysis from '../components/FaceShapeAnalysis';
import SeasonalColorAnalysis from '../components/SeasonalColorAnalysis';
import EvenessGPTChat from '../components/EvenessGPTChat';

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-[#FCF7F3]">
      {/* Main Content Wrapper */}
      <div className="relative z-10 min-h-screen flex flex-col">
        <div className="max-w-[1920px] w-full mx-auto flex-1">
          <Navbar navItems={homePageNavItems} />
          
          {/* Content Container */}
          <div className="flex-grow">
            {/* Dashboard Content */}
            <div className="max-w-[1512px] mx-auto px-4 sm:px-6 md:px-8 
                          pt-[60px] sm:pt-[80px] md:pt-[100px] xl:pt-[120px]">
              <div className="flex flex-col xl:flex-row gap-4 sm:gap-6 md:gap-8">
                {/* Left column */}
                <div className="flex flex-col gap-4 sm:gap-6 md:gap-8 xl:gap-0 w-full">
                  <div className="w-full flex justify-center xl:justify-start">
                    <WelcomeHeader name="Christine" />
                  </div>
                  
                  <div className="w-full flex justify-center xl:justify-start">
                    <BodyShapeAnalysis />
                  </div>

                  <div className="w-full flex justify-center xl:hidden">
                    <SeasonalColorAnalysis />
                  </div>
                  
                  <div className="w-full flex justify-center xl:hidden">
                    <FaceShapeAnalysis />
                  </div>
                </div>
                
                {/* Right column - Only show in desktop layout */}
                <div className="hidden xl:flex flex-col gap-8 w-full">
                  <div className="w-full flex justify-start">
                    <SeasonalColorAnalysis />
                  </div>
                  
                  <div className="w-full flex justify-start">
                    <FaceShapeAnalysis />
                  </div>
                </div>
              </div>

              <div className="mt-4 sm:mt-6 md:mt-8 xl:mt-8 w-full">
                <EvenessGPTChat />
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </div>
  );
};

export default Dashboard; 