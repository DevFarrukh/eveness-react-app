import React from 'react';

const FaceSummary = ({ text }) => {
  return (
    <div className="flex flex-col items-center w-full">
      <div className="mt-40 w-[358px] xl:w-[904px] h-[124px] xl:min-h-[271px] mx-auto">
        <p className="font-roboto font-light text-[16px] xl:text-[20px] leading-[100%] tracking-[0%] text-[#00000099] mb-4 text-center">
          Eveness GPT - Summary
        </p>
        
        <div 
          className="font-poppins font-medium text-[19px] xl:text-[39px] leading-[24px] xl:leading-[120%] tracking-[0%] text-center px-4 xl:px-2 mx-auto xl:mb-12"
          style={{
            background: 'linear-gradient(94.93deg, #F2AF9B 22.59%, #BA555C 48.39%, #94BDEB 73.18%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text'
          }}
        >
          {text}
        </div>

        {/* <div className="flex justify-center">
          <button className="hidden xl:block w-[156px] h-[39px] rounded-[8px] bg-white shadow-[0px_0px_16px_0px_#00000004] backdrop-blur-[36px] font-poppins font-normal text-[16px] leading-[150%] tracking-[0%]">
            Ask Questions
          </button>
        </div> */}
      </div>
    </div>
  );
};

export default FaceSummary; 