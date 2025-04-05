import React from 'react';
import Navbar from '../components/Navbar';
import AccountNav from '../components/AccountNav';
import { homePageNavItems } from '../data/mockData';

const Account = () => {
  return (
    <div className="min-h-screen bg-[#EDE3DD]">
      <Navbar navItems={homePageNavItems} />
      
      <div className="max-w-[1512px] mx-auto px-4 pt-[120px] pb-8">
        <h1 className="font-['Poppins'] text-center text-[30px] font-bold leading-[32px] tracking-[0%] mb-8">
          Hi Christine
        </h1>

        <div className="mb-24 hidden lg:block">
          <AccountNav activeTab="account" />
        </div>

        <div className="flex flex-col lg:flex-row gap-[36px] relative mb-[50px]">
          {/* Main Form Container */}
          <div className="w-full lg:w-[742px] h-auto lg:h-[554px] mx-auto lg:ml-[125px]">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-[36px]">
              {/* First Name */}
              <div>
                <label className="block text-sm mb-2 font-['Poppins']">First Name</label>
                <input
                  type="text"
                  value="Christine"
                  className="w-full p-3 rounded-md bg-white/50 backdrop-blur-sm"
                />
              </div>

              {/* Last Name */}
              <div>
                <label className="block text-sm mb-2 font-['Poppins']">Last Name</label>
                <input
                  type="text"
                  value="Quinn"
                  className="w-full p-3 rounded-md bg-white/50 backdrop-blur-sm"
                />
              </div>

              {/* Email - Full Width */}
              <div className="lg:col-span-2">
                <label className="block text-sm mb-2 font-['Poppins']">Email Address</label>
                <input
                  type="email"
                  value="christinequinn@gmail.com"
                  className="w-full p-3 rounded-md bg-white/50 backdrop-blur-sm"
                />
              </div>

              {/* Phone - Full Width */}
              <div className="lg:col-span-2">
                <label className="block text-sm mb-2 font-['Poppins']">Phone Number</label>
                <input
                  type="tel"
                  value="(567) 982-9997"
                  className="w-full p-3 rounded-md bg-white/50 backdrop-blur-sm"
                />
              </div>

              {/* Address Section */}
              <div className="lg:col-span-2">
                <label className="block text-sm mb-2 font-['Poppins']">Address</label>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-[36px]">
                  <input
                    type="text"
                    placeholder="Address Line 1"
                    className="w-full p-3 rounded-md bg-white/50 backdrop-blur-sm"
                  />
                  <input
                    type="text"
                    placeholder="Address Line 2"
                    className="w-full p-3 rounded-md bg-white/50 backdrop-blur-sm"
                  />
                  <input
                    type="text"
                    placeholder="City"
                    className="w-full p-3 rounded-md bg-white/50 backdrop-blur-sm"
                  />
                  <input
                    type="text"
                    placeholder="State"
                    className="w-full p-3 rounded-md bg-white/50 backdrop-blur-sm"
                  />
                  <input
                    type="text"
                    placeholder="Country"
                    className="w-full p-3 rounded-md bg-white/50 backdrop-blur-sm"
                  />
                  <input
                    type="text"
                    placeholder="Postal Code"
                    className="w-full p-3 rounded-md bg-white/50 backdrop-blur-sm"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Right Side Content */}
          <div className="w-full lg:w-[457px] space-y-6 lg:translate-x-[-80px] lg:mt-1 mt-8 lg:mt-0">
            {/* Newsletter Box */}
            <div className="h-[174px] bg-[#FFFFFF5C] backdrop-blur-[40px] rounded-[18px] p-6 ml-0 lg:mx-0 max-w-[457px]">
              <h3 className="font-['Poppins'] font-normal text-[14px] leading-[150%] tracking-[0%] mb-4">
                News Letter
              </h3>
              <p className="font-['Poppins'] font-medium text-[14px] leading-[17.5px] tracking-[0%] text-[#797979] mb-6">
                Join our exclusive community and unlock perks like early access to sales, secret discounts, and offers made just for you
              </p>
              <label className="flex items-center gap-2">
                <input 
                  type="checkbox" 
                  className="rounded border-gray-300 text-[#797979] focus:ring-[#797979]" 
                />
                <span className="font-['Poppins'] font-medium text-[14px] leading-[17.5px] tracking-[0%] text-black">
                  Give me priority access!
                </span>
              </label>
            </div>

            {/* Delete Account Link */}
            <div className="w-[284px] h-[88px] bg-[#FFFFFF5C] backdrop-blur-[40px] rounded-[12px] p-4 flex flex-col gap-[10px] ml-0 lg:mx-0">
              <div className="space-y-1">
                <p className="font-['Poppins'] font-medium text-[12px] leading-[14px] tracking-[0%] text-[#797979]">
                  Want to close your account?
                </p>
                <p className="font-['Poppins'] font-medium text-[12px] leading-[14px] tracking-[0%] text-[#797979]">
                  This can't be undone - proceed with care.
                </p>
              </div>
              <button className="font-['Poppins'] font-normal text-[12px] leading-[150%] tracking-[-5%] underline decoration-solid text-left">
                Delete your account
              </button>
            </div>

            {/* Save Button */}
            <div className="lg:absolute lg:bottom-0 lg:left-[0px] lg:translate-y-[25px] flex justify-start">
              <button className="px-8 py-2 bg-[#797979] text-white rounded-md font-['Poppins']">
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Account; 