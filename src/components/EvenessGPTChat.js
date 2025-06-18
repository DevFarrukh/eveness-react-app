import React from 'react';
import pencilIcon from '../assets/pencil-icon.png';
import bulbIcon from '../assets/bulb-icon.png';

const AnnotationBubble = ({ icon, text, className, screenSize }) => (
  <div 
    className={`
      ${screenSize === 'small' ? 'w-[120px] h-auto py-2' : 
        screenSize === 'medium' ? 'w-[135px] h-auto py-2.5' : 
        'min-w-[155px] h-[84px]'} 
      rounded-[13px] p-[10px_12px] flex flex-col gap-[6px] absolute ${className}
    `}
    style={{
      border: '1px solid #AEAEAE',
      background: '#FFFFFFCC',
      backdropFilter: 'blur(36.56px)',
      WebkitBackdropFilter: 'blur(36.56px)',
      width: 'fit-content',
      maxWidth: screenSize === 'small' ? '150px' : 
                screenSize === 'medium' ? '165px' : '180px'
    }}
  >
    <img 
      src={icon} 
      alt="icon" 
      className={`
        ${screenSize === 'small' ? 'w-4 h-4' : 
          screenSize === 'medium' ? 'w-[18px] h-[18px]' : 
          'w-5 h-5'}
      `} 
    />
    <p className={`
      font-['Poppins'] font-normal 
      ${screenSize === 'small' ? 'text-xs' : 
        screenSize === 'medium' ? 'text-[13px]' : 
        'text-[14px]'} 
      leading-[17.5px] tracking-[0.01em] text-[#22272A] whitespace-pre-wrap
    `}>
      {text}
    </p>
  </div>
);

const EvenessGPTChat = () => {
  return (
    <div className="flex flex-col items-center w-full mt-8 sm:mt-12 xl:mt-24 px-4 sm:px-6 xl:px-0">
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

          .input-container {
            background: rgba(75, 75, 75, 0.35);
            backdrop-filter: blur(12px);
            -webkit-backdrop-filter: blur(12px);
            border: 1px solid rgba(255, 255, 255, 0.1);
            border-radius: 12px;
          }
        `}
      </style>

      {/* Main Container */}
      <div className="w-full sm:w-[90%] xl:w-[1447px] h-[500px] sm:h-[600px] xl:h-[448px] rounded-none sm:rounded-[16px] relative mb-4 sm:mb-6 xl:mb-8">
        {/* Blurred Background Container */}
        <div 
          className="animated-gradient w-full h-full rounded-none sm:rounded-[16px] p-4 sm:p-5 xl:p-6 flex flex-col items-center justify-start xl:justify-center relative overflow-hidden"
          style={{
            backgroundColor: "rgba(255, 255, 255, 0.15)",
          }}
        >
          {/* Floating Annotations */}
          <div className="relative w-full mb-8 sm:mb-12 xl:mb-0">
            {/* Mobile/Tablet Annotations */}
            <div className="block xl:hidden">
              <AnnotationBubble 
                icon={pencilIcon}
                text="Does this dress suit me?"
                className="left-4 top-0"
                screenSize="small"
              />
              <AnnotationBubble 
                icon={bulbIcon}
                text="What do I wear with this little black dress?"
                className="right-4 top-0"
                screenSize="small"
              />
            </div>
            
            {/* Desktop Annotations */}
            <div className="hidden xl:block">
              <AnnotationBubble 
                icon={pencilIcon}
                text="Does this dress suit me?"
                className="left-24 top-40"
                screenSize="large"
              />
              <AnnotationBubble 
                icon={bulbIcon}
                text="What do I wear with this little black dress?"
                className="right-24 top-16"
                screenSize="large"
              />
            </div>
          </div>

          {/* Floating blobs */}
          <div className="lava-blob" style={{
            width: '500px',
            height: '500px',
            top: '20%',
            left: '30%',
            animation: 'float 12s ease-in-out infinite 1s',
            background: 'rgba(139, 0, 0, 0.15)'
          }}/>
          <div className="lava-blob" style={{
            width: '600px',
            height: '600px',
            top: '40%',
            left: '45%',
            animation: 'float 9s ease-in-out infinite 2s',
            background: 'rgba(180, 60, 60, 0.12)'
          }}/>

          {/* Content Container */}
          <div className="relative mt-auto mb-auto w-full">
            {/* Header */}
            <div className="text-center mb-8 sm:mb-12 xl:mb-24">
              <h2 className="text-[20px] sm:text-[23px] xl:text-[26px] font-gopher font-light leading-[30px] sm:leading-[34px] xl:leading-[38px] tracking-[0%] text-white mb-4 sm:mb-6 xl:mb-8">
                EVENESS GPT
              </h2>
              <h1 className="text-[24px] sm:text-[30px] xl:text-[36px] font-poppins font-medium leading-[30px] sm:leading-[34px] xl:leading-[38px] tracking-[0%] mt-2 text-[#22272A]">
                What can I help you with ?
              </h1>
            </div>

            {/* Input Section */}
            <div className="flex gap-2 sm:gap-2.5 xl:gap-3 justify-center px-2 sm:px-4 xl:px-0">
              <button className="input-container h-[44px] sm:h-[48px] xl:h-[52px] px-4 sm:px-5 xl:px-6 flex items-center gap-2 text-white/90">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M17 8l-5-5-5 5M12 3v12"/>
                </svg>
                <span className="hidden xl:inline">Upload & Analyze</span>
              </button>

              <div className="input-container flex-1 sm:flex-none sm:w-[450px] xl:w-[654px] flex items-center px-4 sm:px-5 xl:px-6">
                <input 
                  type="text" 
                  placeholder="Ask Eveness GPT"
                  className="w-full h-[44px] sm:h-[48px] xl:h-[52px] outline-none bg-transparent text-white/90 placeholder-white/50 text-sm sm:text-[14px] xl:text-[16px]"
                />
              </div>

              <button className="input-container h-[44px] sm:h-[48px] xl:h-[52px] w-[44px] sm:w-[48px] xl:w-[52px] flex items-center justify-center text-white/90">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z"/>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Button outside and centered */}
      <button className="bg-[#22272A] text-white px-4 sm:px-5 xl:px-6 py-2 sm:py-2.5 xl:py-3 rounded-xl hover:bg-gray-800 transition text-sm sm:text-[14px] xl:text-base mb-12 sm:mb-16 xl:mb-24">
        Open Eveness GPT
      </button>
    </div>
  );
};

export default EvenessGPTChat; 