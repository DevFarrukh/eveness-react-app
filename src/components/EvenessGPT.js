import React from "react";

const EvenessGPT = () => {
  return (
    <div className="flex justify-center mt-12 px-0 w-full">
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
      {/* Main Container - Full Width on Mobile */}
      <div 
        className="w-full md:max-w-[1375px] md:rounded-[16px] shadow-2xl flex flex-col items-center justify-center relative p-6 md:p-12"
        style={{
          boxShadow: "0px 0px 139.7px 0px #0000001A",
          width: "100%",  // Full width on mobile
        }}
      >
        {/* Inner Blurred Section */}
        <div 
          className="animated-gradient w-full h-auto min-h-[600px] md:h-[448px] p-6 flex flex-col items-start justify-start relative overflow-hidden"
          style={{
            borderRadius: "16px",
            backgroundColor: "rgba(255, 255, 255, 0.15)",
          }}
        >
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
            width: '600px',
            height: '600px',
            top: '40%',
            left: '45%',
            animation: 'float 9s ease-in-out infinite 2s',
            background: 'rgba(180, 60, 60, 0.12)'
          }}/>

          {/* Floating Chat Bubbles */}
          <div className="relative w-full mb-8 md:mb-0 mt-8">
            <div className="absolute left-4 px-4 py-3 rounded-[20px] shadow-sm text-sm max-w-[250px]" 
              style={{ 
                border: "1px solid rgba(174, 174, 174, 1)",
                background: "rgba(225, 225, 225, 0.95)"
              }}>
              💡 What do I wear with this little black dress?
            </div>
            <div className="absolute top-20 right-4 px-4 py-3 rounded-[20px] shadow-sm text-sm max-w-[200px]"
              style={{ 
                border: "1px solid rgba(174, 174, 174, 1)",
                background: "rgba(225, 225, 225, 0.95)"
              }}>
              💖 Does this dress suit me?
            </div>
          </div>

          {/* Centered Content */}
          <div className="text-center w-full mt-auto mb-auto">
            <h2 className="text-2xl font-medium tracking-wide">EVENESS GPT</h2>
            <h1 className="text-2xl font-normal mt-4">What can I help you with ?</h1>

            {/* Action Buttons */}
            <div className="mt-6 flex flex-row justify-center gap-3 w-full px-4 md:px-0">
              {/* Upload button - Text hidden on mobile */}
              <button className="input-container px-4 py-3 flex items-center gap-2 text-white/90 hover:bg-[rgba(85,85,85,0.4)] transition">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M17 8l-5-5-5 5M12 3v12"/>
                </svg>
                <span className="hidden md:inline">Upload & Analyze</span>
              </button>
              
              {/* Input field */}
              <div className="input-container flex items-center px-4 py-3 flex-1 max-w-[500px]">
                <input 
                  type="text" 
                  placeholder="Ask Eveness GPT" 
                  className="w-full outline-none bg-transparent text-white/90 placeholder-white/50 text-sm"
                />
              </div>
              
              {/* Send button */}
              <button className="input-container px-5 py-3 flex items-center text-white/90 hover:bg-[rgba(85,85,85,0.4)] transition">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z"/>
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Call-to-Action */}
        <div className="text-center mt-8 w-full">
          <h3 className="text-xl font-semibold">Powered by your Features</h3>
          <p className="text-gray-600 mt-2">Ask me anything fashion related</p>
          <button className="mt-4 bg-black text-white px-6 py-3 rounded-xl hover:bg-gray-800 transition">
            Open Eveness GPT
          </button>
          <p className="text-gray-500 text-sm mt-4">@ eveness.ai</p>
        </div>
      </div>
    </div>
  );
};

export default EvenessGPT;
