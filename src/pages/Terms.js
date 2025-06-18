import React from 'react';
import Navbar from '../components/Navbar';
import { homePageNavItems } from '../data/mockData';
import { privacyPolicyText } from '../data/termsContent';

const Terms = () => {
  return (
    <div className="min-h-screen bg-[#EDE3DD]">
      <Navbar navItems={homePageNavItems} />
      
      <div className="max-w-[1512px] mx-auto px-4 pt-[120px] pb-8">
        <div className="max-w-[1169px] mx-auto flex flex-col items-center">
          {/* Terms Container */}
          <div className="relative w-full h-[650px] bg-[#FFFFFF5C] backdrop-blur-[40px] rounded-[18px] p-12 mb-8">
            <div className="h-full overflow-y-auto pr-8
              scrollbar-thin scrollbar-track-[#F5F5F5] scrollbar-thumb-[#C7C7C7] 
              [&::-webkit-scrollbar]:w-[7px]
              [&::-webkit-scrollbar]:absolute
              [&::-webkit-scrollbar]:right-4
              [&::-webkit-scrollbar-track]:rounded-[12px]
              [&::-webkit-scrollbar-thumb]:rounded-[12px]
              [&::-webkit-scrollbar-track]:bg-[#F5F5F5]
              [&::-webkit-scrollbar-thumb]:bg-[#C7C7C7]
              [&::-webkit-scrollbar-track]:mt-[16px]
              [&::-webkit-scrollbar-track]:mb-[16px]">
              <div className="font-['Inter'] text-[16px] font-normal leading-[150%] tracking-[0%] whitespace-pre-line">
                {privacyPolicyText}
              </div>
            </div>
          </div>

          {/* Agreement Button */}
          <button className="w-[312px] h-[48px] bg-[#22272A] rounded-[8px] shadow-[0px_0px_16px_0px_#00000004] backdrop-blur-[36px] text-white font-['Inter'] font-medium text-[16px] leading-[150%]">
            Agree Terms / Conditions and Policy
          </button>
        </div>
      </div>
    </div>
  );
};

export default Terms;