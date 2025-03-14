import React from 'react';
import NecklineCard from './NecklineCard';
import vneck from '../assets/vneck.svg';
import offShoulder from '../assets/off-shoulder.svg';
import sweetheart from '../assets/sweetheart.svg';
import round from '../assets/round.svg';
import square from '../assets/square.svg';
import scoop from '../assets/scoop.svg';
import deepV from '../assets/deep.svg';
import overlyWide from '../assets/overly-wide.svg';
import extremelyHigh from '../assets/extremely-high.svg';

const NecklinesSection = () => {
  const bestNecklines = [
    {
      title: "V-NECKS",
      description: "Elongate your neck subtly while maintaining facial harmony",
      imageSrc: vneck
    },
    {
      title: "OFF-SHOULDER",
      description: "Highlight your jawline and collarbone without overwhelming your face shape",
      imageSrc: offShoulder
    },
    {
      title: "SWEETHEART NECKLINES",
      description: "Create a flattering, feminine curve that complements your balanced proportions",
      imageSrc: sweetheart
    },
    {
      title: "ROUND NECKLINES",
      description: "Add softness and balance to your naturally proportionate features",
      imageSrc: round
    },
    {
      title: "SQUARE NECKLINES",
      description: "Provide structure and definition, enhancing your versatile look",
      imageSrc: square
    },
    {
      title: "SCOOP NECKS",
      description: "Offer a universally flattering option that works beautifully with your oval shape",
      imageSrc: scoop
    }
  ];

  const worstNecklines = [
    {
      title: "OVERLY WIDE HORIZONTAL NECKLINES",
      description: "May widen your upper body and detract from your naturally proportionate features",
      imageSrc: overlyWide
    },
    {
      title: "DEEP, DRAMATIC PLUNGING NECKLINES",
      description: "Risk elongating your face unnecessarily, disrupting your balanced proportions",
      imageSrc: deepV
    },
    {
      title: "EXTREMELY HIGH NECKLINES",
      description: "Can overwhelm your face and create an unbalanced silhouette",
      imageSrc: extremelyHigh
    },
  ]

  return (
    <div className="w-full sm:w-[600px] md:w-[750px] lg:w-[1000px] xl:w-[1314px] min-h-[1873px] mx-auto px-4 xl:px-8 mt-16 xl:mt-40">
      {/* Section Header */}
      <div className="text-center mb-8 xl:mb-12">
        <h2 className="font-poppins font-bold text-[24px] sm:text-[26px] md:text-[28px] lg:text-[30px] xl:text-[32px] leading-[32px] xl:leading-[40px] tracking-[0%] text-center mb-2">
          Your Best Necklines
        </h2>
        <p className="font-poppins font-medium text-[14px] sm:text-[14.5px] md:text-[15px] lg:text-[15.5px] xl:text-[16px] leading-[18px] xl:leading-[20px] tracking-[0%] text-center text-[#797979]">
          The best necklines to accentuate your face's natural balance
        </p>
      </div>

      {/* Necklines Grid */}
      <div className="grid grid-cols-2 xl:grid-cols-3 gap-x-4 sm:gap-x-5 md:gap-x-6 lg:gap-x-7 xl:gap-x-8 gap-y-16 xl:gap-y-36 mt-16 xl:mt-32">
        {bestNecklines.map((neckline, index) => (
          <NecklineCard
            key={index}
            title={neckline.title}
            description={neckline.description}
            imageSrc={neckline.imageSrc}
          />
        ))}
      </div>
      
      {/* Gradient Border Line */}      
      <div className="mx-auto w-full xl:w-[1314px] h-[1px] mt-24 xl:mt-48"
        style={{
          background: 'linear-gradient(90deg, #FCF7F3 0%, #797979 51.5%, #FCF7F3 100%)'
        }}
      />

      <div className="text-center mb-8 xl:mb-12 mt-24 xl:mt-48">
        <h2 className="font-poppins font-bold text-[24px] sm:text-[26px] md:text-[28px] lg:text-[30px] xl:text-[32px] leading-[32px] xl:leading-[40px] tracking-[0%] text-center mb-2">
          Necklines to Avoid
        </h2>
        <p className="font-poppins font-medium text-[14px] sm:text-[14.5px] md:text-[15px] lg:text-[15.5px] xl:text-[16px] leading-[18px] xl:leading-[20px] tracking-[0%] text-center text-[#797979]">
          Use these necklines with caution
        </p>
      </div>
      
      {/* Worst Necklines Grid */}
      <div className="grid grid-cols-2 xl:grid-cols-3 gap-x-4 sm:gap-x-5 md:gap-x-6 lg:gap-x-7 xl:gap-x-8 gap-y-16 xl:gap-y-36 mt-16 xl:mt-32">
        {worstNecklines.map((neckline, index) => (
          <div className={`${worstNecklines.length % 2 !== 0 && index === worstNecklines.length - 1 ? 'col-span-2 xl:col-span-1 mx-auto xl:mx-0' : ''}`}>
            <NecklineCard
              key={index}
              title={neckline.title}
              description={neckline.description}
              imageSrc={neckline.imageSrc}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default NecklinesSection; 