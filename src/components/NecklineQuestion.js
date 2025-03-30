import React from 'react';

const NecklineQuestion = ({text}) => {
  return (
    <div className="max-w-[1446px] mx-auto px-4 md:px-0 mb-20">
      <style>
        {`
          @keyframes gradient {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }

          @keyframes float {
            0% { transform: translate(0, 0) scale(1); }
            33% { transform: translate(30px, -50px) scale(1.1); }
            66% { transform: translate(-20px, 20px) scale(0.9); }
            100% { transform: translate(0, 0) scale(1); }
          }

          .animated-gradient {
            background: linear-gradient(-45deg, 
              #f5e6e6 0%, 
              #e8d1d1 25%, 
              #d4b3b3 50%, 
              #c19898 75%, 
              #b88282 100%
            );
            background-size: 400% 400%;
            animation: gradient 5s ease infinite;
            transition: all 0.5s ease;
            backdrop-filter: blur(30px) saturate(110%);
            -webkit-backdrop-filter: blur(30px) saturate(110%);
            box-shadow: inset 0 0 100px rgba(255, 255, 255, 0.2);
            border: 1px solid rgba(255, 255, 255, 0.3);
            position: relative;
            overflow: hidden;
          }

          .animated-gradient::before,
          .animated-gradient::after {
            content: '';
            position: absolute;
            background: rgba(180, 60, 60, 0.2);
            border-radius: 50%;
            filter: blur(50px);
            z-index: -1;
          }

          .animated-gradient::before {
            width: 200px;
            height: 200px;
            top: 20%;
            left: 20%;
            animation: float 8s ease-in-out infinite;
            background: rgba(139, 0, 0, 0.2);
          }

          .animated-gradient::after {
            width: 250px;
            height: 250px;
            bottom: 30%;
            right: 25%;
            animation: float 10s ease-in-out infinite reverse;
            background: rgba(180, 60, 60, 0.15);
          }

          .lava-blob {
            position: absolute;
            border-radius: 50%;
            filter: blur(80px);
            z-index: -1;
            mix-blend-mode: soft-light;
          }

          /* Custom styles for the input container */
          .input-container {
            background: rgba(75, 75, 75, 0.35);
            backdrop-filter: blur(12px);
            -webkit-backdrop-filter: blur(12px);
            border: 1px solid rgba(255, 255, 255, 0.1);
            border-radius: 12px;
          }
        `}
      </style>

      <div className="relative w-full sm:w-[600px] md:w-[750px] lg:w-[900px] xl:w-[1100px] h-[190px] sm:h-[250px] md:h-[300px] xl:h-[332px] mx-0 sm:mx-auto rounded-[16px] overflow-hidden">
        <div className="animated-gradient absolute inset-0">
          {/* Floating blobs with updated styling */}
          <div className="lava-blob" style={{
            width: '500px',
            height: '500px',
            top: '20%',
            left: '30%',
            animation: 'float 12s ease-in-out infinite 1s',
            background: 'rgba(139, 0, 0, 0.15)'
          }}/>
          <div className="lava-blob" style={{
            width: '500px',
            height: '500px',
            top: '40%',
            left: '45%',
            animation: 'float 9s ease-in-out infinite 2s',
            background: 'rgba(255, 200, 184, 1)'

          }}/>
          <div className="lava-blob" style={{
            width: '500px',
            height: '500px',
            top: '20%',
            left: '30%',
            animation: 'float 12s ease-in-out infinite 1s',
            background: 'rgba(142, 13, 22, 1)'
          }}/>
          
          <div className="lava-blob" style={{
            width: '500px',
            height: '500px',
            top: '40%',
            left: '45%',
            animation: 'float 9s ease-in-out infinite 2s',
            background: 'rgba(216, 234, 255, 1)'

          }}/>
          
        </div>

        {/* Content */}
        <div className="relative z-10 h-full flex flex-col items-center justify-center gap-4 sm:gap-6">
          <h2 className="font-poppins font-medium text-[24px] sm:text-[28px] md:text-[32px] xl:text-[36px] leading-[28px] sm:leading-[32px] md:leading-[36px] xl:leading-[38px] text-center text-[#22272A] px-4 sm:px-6 md:px-8">
            {text}
          </h2>
          <button 
            className="w-[160px] sm:w-[175px] md:w-[185px] xl:w-[193px] h-[35px] sm:h-[37px] md:h-[38px] xl:h-[39px] bg-[#22272A] text-white rounded-[8px] font-poppins font-normal text-[14px] sm:text-[15px] md:text-[16px] leading-[150%]"
            style={{
              boxShadow: '0px 0px 16px 0px rgba(0, 0, 0, 0.01)',
              backdropFilter: 'blur(36px)',
              position: 'relative',
              letterSpacing: '0%',
              textLeadingTrim: 'cap height'
            }}
          >
            Open Eveness GPT
          </button>
        </div>
      </div>
    </div>
  );
};

export default NecklineQuestion; 