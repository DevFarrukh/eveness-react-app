import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import AccountNav from '../components/AccountNav';
import { homePageNavItems } from '../data/mockData';

const Profile = () => {
  const [unit, setUnit] = useState('imperial');
  const [selectedSize, setSelectedSize] = useState('XS');

  // Convert measurements based on unit
  const getMeasurement = (imperial, metric) => {
    return unit === 'imperial' ? imperial : metric;
  };

  const measurements = {
    height: getMeasurement("5'18\"", "173cm"),
    weight: getMeasurement("129lbs", "58.5kg"),
    waist: getMeasurement("30 in", "76.2cm"),
    inseam: getMeasurement("54\" in", "137.2cm"),
  };

  const labelStyle = "font-['Poppins'] text-[16px] font-normal leading-[150%] tracking-[0%]";

  const inputStyle = `
    w-[218px] h-[42px] 
    bg-[#FFFFFF5C] rounded-[8px] 
    shadow-[0px_0px_16px_0px_#00000004] 
    backdrop-blur-[36px]
    font-['Poppins'] font-normal text-[14px] leading-[150%] tracking-[0%]
    px-3
  `;

  const selectStyle = `
    ${inputStyle}
    appearance-auto
    pr-8
    cursor-pointer
  `;

  return (
    <div className="min-h-screen bg-[#EDE3DD]">
      <Navbar navItems={homePageNavItems} />
      
      <div className="max-w-[1512px] mx-auto px-4 pt-[120px] pb-8">
        <h1 className="font-['Poppins'] text-center text-[30px] font-bold leading-[32px] tracking-[0%] mb-8">
          Hi Christine
        </h1>

        <div className="mb-24 hidden lg:block">
          <AccountNav activeTab="profile" />
        </div>

        {/* Content container */}
        <div className="max-w-[1369px] mx-auto">
          {/* Unit toggle */}
          <div className="flex items-center gap-4 mb-12">
            <div className="w-[179px] h-[43px] bg-[#FFFFFF99] rounded-[8px] shadow-[0px_0px_16px_0px_#00000004] backdrop-blur-[36px] flex">
              <button 
                onClick={() => setUnit('imperial')}
                className={`flex-1 font-['Poppins'] text-[14px] font-medium leading-[150%] ${
                  unit === 'imperial' ? 'text-black' : 'text-gray-500'
                }`}
              >
                Imperial
              </button>
              <button 
                onClick={() => setUnit('metric')}
                className={`flex-1 font-['Poppins'] text-[14px] font-medium leading-[150%] ${
                  unit === 'metric' ? 'text-black' : 'text-gray-500'
                }`}
              >
                Metric
              </button>
            </div>
          </div>

          {/* Size selection */}
          <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-24 mb-8 md:mb-12">
            <p className={labelStyle}>Size</p>
            <div className="w-full md:w-[535px] h-[63px] bg-[#FFFFFF5C] rounded-[8px] shadow-[0px_0px_16px_0px_#00000004] backdrop-blur-[36px] flex items-center justify-center gap-[20px] md:gap-[50px] px-4 overflow-x-auto">
              {['XS', 'S', 'M', 'L', 'XL', 'XXL'].map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`
                    w-[41px] h-[31px] rounded-[4px] p-[10px]
                    font-['Poppins'] text-[16px] font-medium leading-[150%]
                    flex items-center justify-center
                    ${size === selectedSize 
                      ? 'bg-[#00000099] text-white' 
                      : 'bg-[#FFFFFF5C] text-black'
                    }
                  `}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Measurements grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-x-4 xl:gap-x-16 gap-y-6 xl:gap-y-12 mb-12 xl:mb-24">
            {/* Height field */}
            <div className="flex items-center gap-[24px]">
              <p className={`${labelStyle} min-w-[100px]`}>Height</p>
              <div className="flex-1 max-w-[218px]">
                <input
                  type="text"
                  className={inputStyle}
                  value={measurements.height}
                  readOnly
                />
              </div>
            </div>
            <div className="flex items-center gap-[24px]">
              <p className={`${labelStyle} min-w-[100px]`}>Weight</p>
              <div className="flex-1 max-w-[218px]">
                <input
                  type="text"
                  className={inputStyle}
                  value={measurements.weight}
                  readOnly
                />
              </div>
            </div>
            <div className="flex items-center gap-[24px]">
              <p className={`${labelStyle} min-w-[100px]`}>Face Shape</p>
              <div className="flex-1 max-w-[218px]">
                <select className={selectStyle}>
                  <option>Oblong</option>
                </select>
              </div>
            </div>
            <div className="flex items-center gap-[24px]">
              <p className={`${labelStyle} min-w-[100px]`}>Body Shape</p>
              <div className="flex-1 max-w-[218px]">
                <select className={selectStyle}>
                  <option>Hourglass Shape</option>
                </select>
              </div>
            </div>

            <div className="flex items-center gap-[24px]">
              <p className={`${labelStyle} min-w-[100px]`}>Waist Size</p>
              <div className="flex-1 max-w-[218px]">
                <input
                  type="text"
                  className={inputStyle}
                  value={measurements.waist}
                  readOnly
                />
              </div>
            </div>
            <div className="flex items-center gap-[24px]">
              <p className={`${labelStyle} min-w-[100px]`}>Inseam</p>
              <div className="flex-1 max-w-[218px]">
                <input
                  type="text"
                  className={inputStyle}
                  value={measurements.inseam}
                  readOnly
                />
              </div>
            </div>
            <div className="flex items-center gap-[24px]">
              <p className={`${labelStyle} min-w-[100px]`}>Hair Color</p>
              <div className="flex-1 max-w-[218px]">
                <select className={selectStyle}>
                  <option>Black</option>
                </select>
              </div>
            </div>
            <div className="flex items-center gap-[24px]">
              <p className={`${labelStyle} min-w-[100px]`}>Eye Color</p>
              <div className="flex-1 max-w-[218px]">
                <select className={selectStyle}>
                  <option>Brown</option>
                </select>
              </div>
            </div>

            <div className="flex items-center gap-[24px]">
              <p className={`${labelStyle} min-w-[100px]`}>Bra Band Size</p>
              <div className="flex-1 max-w-[218px]">
                <select className={selectStyle}>
                  <option>34</option>
                </select>
              </div>
            </div>
            <div className="flex items-center gap-[24px]">
              <p className={`${labelStyle} min-w-[100px]`}>Bra Cup Size</p>
              <div className="flex-1 max-w-[218px]">
                <select className={selectStyle}>
                  <option>D</option>
                </select>
              </div>
            </div>
            <div className="flex items-center gap-[24px]">
              <p className={`${labelStyle} min-w-[100px]`}>Complexion</p>
              <div className="flex-1 max-w-[218px]">
                <select className={selectStyle}>
                  <option>Light to Medium</option>
                </select>
              </div>
            </div>
            <div className="flex items-center gap-[24px]">
              <p className={`${labelStyle} min-w-[100px]`}>Undertone</p>
              <div className="flex-1 max-w-[218px]">
                <select className={selectStyle}>
                  <option>Neutral</option>
                </select>
              </div>
            </div>
          </div>

          {/* Action buttons */}
          <div className="flex flex-col lg:flex-row gap-4 justify-center">
            <button className="w-full lg:w-[312px] h-[48px] bg-[#22272A] rounded-[8px] shadow-[0px_0px_16px_0px_#00000004] backdrop-blur-[36px] text-white">
              Start Survey Again
            </button>
            <button className="w-full lg:w-[312px] h-[48px] bg-[#22272A] rounded-[8px] shadow-[0px_0px_16px_0px_#00000004] backdrop-blur-[36px] text-white">
              View Dashboard
            </button>
            <button className="w-full lg:w-[158px] h-[48px] bg-[#797979] rounded-[8px] shadow-[0px_0px_16px_0px_#00000004] backdrop-blur-[36px] text-white">
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile; 