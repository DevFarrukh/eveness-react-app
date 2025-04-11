import React from 'react';

const WelcomeHeader = ({ name = "Christine" }) => {
  return (
    <div className="mb-7">
      <h1 className="font-sans text-[36px] font-bold leading-[38px] tracking-normal text-[#22272A] mb-3">
        Hi {name}
      </h1>
      
      <p className="font-['Poppins'] text-[14px] font-medium leading-[16px] tracking-normal text-[#797979] max-w-xl">
        Welcome to your Personalized Fashion Dashboard. Created exclusively for you by our Design and Stylist team. Each section provides expertly curated suggestions on your most accentuating silhouettes, fabrics, colors, necklines, and more.
      </p>
    </div>
  );
};

export default WelcomeHeader;
