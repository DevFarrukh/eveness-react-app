import React from "react";

const HeroBanner = () => {
  return (
    <div className="w-full flex justify-center items-center py-16 md:py-32 px-4">
      <div className="text-center max-w-3xl">
        <h1 className="text-3xl sm:text-3xl md:text-4xl font-medium text-black leading-tight sm:leading-relaxed">
          <span className="inline-block mb-2">Where AI Engineers and Luxury Designers</span>
          <span className="inline-block mb-2">Collaborate on Exclusive Designs and</span>
          <span className="inline-block">Personalized Styling Information</span>
        </h1>
      </div>
    </div>
  );
};

export default HeroBanner;
