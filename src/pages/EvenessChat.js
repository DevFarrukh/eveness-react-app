import React from "react";
import Navbar from "../components/Navbar";
import { IoSunnyOutline } from "react-icons/io5";
import { AiOutlineThunderbolt } from "react-icons/ai";
import { IoWarningOutline } from "react-icons/io5";
import { MdOutlineLightbulb } from "react-icons/md";
import { MdOutlineEditNote } from "react-icons/md";
import { RiDeleteBinLine } from "react-icons/ri";
import { MdLogout } from "react-icons/md";
import { MdOutlineChatBubbleOutline } from "react-icons/md";
import { LuUpload } from "react-icons/lu";
import { IoSearch } from "react-icons/io5";
import { VscSend } from "react-icons/vsc";

// Animated gradient styles
const gradientStyles = `
  @keyframes gradient {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
  }
  .animated-gradient-bg {
    background: linear-gradient(-45deg, #EDE3DD 0%, #E5D9D2 25%, #DDD0C7 50%, #D5C6BC 75%, #CDBDB2 100%);
    background-size: 400% 400%;
    animation: gradient 15s ease infinite;
    min-height: 100vh;
    width: 100vw;
    position: fixed;
    top: 0;
    left: 0;
    z-index: -1;
  }
  .content-blur {
    background: rgba(237, 227, 221, 0.4);
    backdrop-filter: blur(40px);
    -webkit-backdrop-filter: blur(40px);
  }
`;

const EvenessChat = () => {
  return (
    <div style={{ minHeight: "100vh", width: "100vw", position: "relative", overflowX: "hidden" }}>
      <style>{`
        ${gradientStyles}
        body, html { overflow-x: hidden; }
        @media (max-width: 1535px) {
          .eveness-sidebar { width: 20vw !important; min-width: 200px !important; max-width: 287px !important; height: 80vh !important; min-height: 400px !important; max-height: 822px !important; }
          .eveness-main { width: 70vw !important; min-width: 350px !important; max-width: 1129px !important; height: 70vh !important; min-height: 400px !important; max-height: 734px !important; }
          .eveness-input { width: 70vw !important; min-width: 350px !important; max-width: 1129px !important; }
        }
        @media (max-width: 1024px) {
          .eveness-sidebar { width: 30vw !important; min-width: 150px !important; }
          .eveness-main, .eveness-input { width: 90vw !important; min-width: 200px !important; }
        }
      `}</style>
      <div className="animated-gradient-bg" />
      <Navbar navItems={[
        { label: "Home", path: "/home" },
        { label: "Dashboard", path: "/dashboard", hasDropdown: true },
        { label: "Shop", path: "/shop" },
        { label: "Eveness Chat", path: "/evenesschat" },
        { label: "Account", path: "/account" },
        { label: "Cart", path: "/cart" }
      ]} />
      <div className="flex flex-row items-stretch justify-center w-full max-w-[1800px] mx-auto gap-8 mt-24 mb-12" style={{ height: 'min(90vh, 822px)', minHeight: 400 }}>
        {/* Desktop layout - only show on xl screens */}
        <div className="hidden xl:flex flex-col items-center w-full min-h-screen" style={{ minWidth: 1440, minHeight: 1000 }}>
          {/* Margin for navbar */}
          <div style={{ height: 64 }} />
          {/* Main content row */}
          <div className="flex flex-row justify-center items-end w-full pb-8 mt-8" style={{ height: 822 }}>
            {/* Sidebar */}
            <aside className="bg-white/40 rounded-[16px] p-4 flex flex-col gap-2 shadow-lg" style={{ width: 287, height: 822, borderRadius: 16 }}>
              <button className="bg-transparent border border-[#00000066] rounded-xl flex items-center mx-auto w-full max-w-[264.43px]" style={{ 
                width: '264.43px',
                height: '49.42px',
                borderWidth: '1.08px',
                paddingTop: '15.71px',
                paddingRight: '156.01px',
                paddingBottom: '15.71px',
                paddingLeft: '14.08px',
                gap: '13px',
                fontFamily: 'Roboto',
                fontWeight: 400,
                fontSize: '15.17px',
                lineHeight: '17.88px',
                letterSpacing: '0%',
                verticalAlign: 'middle'
              }}><span className="whitespace-nowrap">+ New chat</span></button>
              <ul className="flex-1 mt-6 overflow-y-auto space-y-4 max-w-[264.43px] pl-[5.08px]" style={{
                scrollbarWidth: 'thin',
                scrollbarColor: '#00000040 transparent',
                maxHeight: 'calc(100% - 120px)'
              }}>
                {[
                  "How to wear bodycon",
                  "Neckline suggestion for date",
                  "Explaining why Hourglass is better",
                  "Yellow Silk fabric skirt",
                  "Summer dress recommendations",
                  "Best jeans for pear shape",
                  "Color matching tips",
                  "Wedding guest outfit ideas"
                ].map((text, index) => (
                  <li className="flex items-center gap-3 text-ellipsis overflow-hidden whitespace-nowrap py-1" style={{
                    fontFamily: 'Roboto',
                    fontWeight: 400,
                    fontSize: '15.17px',
                    lineHeight: '21.67px',
                    letterSpacing: '0%',
                    verticalAlign: 'middle'
                  }} key={index}>
                    <MdOutlineChatBubbleOutline size={20} className="mb-2" />
                    <span className="truncate">{text}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-auto space-y-4 pl-[5.08px]">
                <button className="flex items-center gap-3 text-ellipsis overflow-hidden whitespace-nowrap py-1 w-full" style={{
                  fontFamily: 'Roboto',
                  fontWeight: 400,
                  fontSize: '15.17px',
                  lineHeight: '21.67px',
                  letterSpacing: '0%',
                  verticalAlign: 'middle'
                }}>
                  <RiDeleteBinLine size={20} className="mb-2" />
                  <span className="truncate">Clear conversations</span>
                </button>
                <button className="flex items-center gap-3 text-ellipsis overflow-hidden whitespace-nowrap py-1 w-full" style={{
                  fontFamily: 'Roboto',
                  fontWeight: 400,
                  fontSize: '15.17px',
                  lineHeight: '21.67px',
                  letterSpacing: '0%',
                  verticalAlign: 'middle'
                }}>
                  <MdLogout size={20} className="mb-2" />
                  <span className="truncate">Log out</span>
                </button>
              </div>
            </aside>
            {/* Main + Input Bar Column */}
            <div className="flex flex-col justify-center items-center ml-8" style={{ height: 822 }}>
              {/* Main Content */}
              <div className="flex items-center justify-center bg-white/40 rounded-[16px] shadow-lg backdrop-blur-md" style={{ width: 1129, height: 734, borderRadius: 16 }}>
                <div className="flex flex-col items-center">
                  <h1 className="text-3xl md:text-4xl font-normal text-center mb-10" style={{ fontFamily: 'Poppins', fontSize: '30px', lineHeight: '43.34px', letterSpacing: '0%' }}>Eveness GPT</h1>
                  <div className="w-full flex justify-center">
                    <div className="grid grid-cols-3 gap-16 w-full max-w-4xl">
                      {/* Examples Column */}
                      <div className="flex flex-col items-center">
                        <div className="flex flex-col items-center mb-8">
                          <IoSunnyOutline size={32} className="mb-2" />
                          <span style={{ fontFamily: 'Roboto', fontWeight: 400, fontSize: '18.42px', lineHeight: '23.29px', letterSpacing: '0%', textAlign: 'center' }}>Examples</span>
                        </div>
                        <div className="w-full flex flex-col gap-4">
                          <div className="border border-[#AEAEAE] bg-[#FFFFFF5C] backdrop-blur-[36.56px] rounded-xl p-1.5 pl-3 shadow flex flex-col items-start gap-1" style={{ width: 185, height: 84, overflow: 'hidden' }}>
                            <MdOutlineEditNote size={20} className="mb-2" style={{ color: '#CE5AD6' }} />
                            <span className="line-clamp-2" style={{ fontFamily: 'Poppins', fontWeight: 400, fontSize: '14px', lineHeight: '17.5px', letterSpacing: '1%' }}>Does this dress suits me for a date?</span>
                          </div>
                          <div className="border border-[#AEAEAE] bg-[#FFFFFF5C] backdrop-blur-[36.56px] rounded-xl p-1.5 pl-3 shadow flex flex-col items-start gap-1" style={{ width: 185, height: 84, overflow: 'hidden' }}>
                            <MdOutlineEditNote size={20} className="mb-2" style={{ color: '#CE5AD6' }} />
                            <span className="line-clamp-2" style={{ fontFamily: 'Poppins', fontWeight: 400, fontSize: '14px', lineHeight: '17.5px', letterSpacing: '1%' }}>What do I wear with this little black dress?</span>
                          </div>
                        </div>
                      </div>
                      {/* Capabilities Column */}
                      <div className="flex flex-col items-center">
                        <div className="flex flex-col items-center mb-8">
                          <AiOutlineThunderbolt size={32} className="mb-2" />
                          <span style={{ fontFamily: 'Roboto', fontWeight: 400, fontSize: '18.42px', lineHeight: '23.29px', letterSpacing: '0%', textAlign: 'center' }}>Capabilities</span>
                        </div>
                        <div className="w-full flex flex-col gap-4">
                          <div className="border border-[#AEAEAE] bg-[#FFFFFF5C] backdrop-blur-[36.56px] rounded-xl p-1.5 pl-3 shadow flex flex-col items-start gap-1" style={{ width: 185, height: 84, overflow: 'hidden' }}>
                            <span className="text-lg mb-0"><MdOutlineLightbulb size={20} className="mb-2" style={{ color: '#DA773D' }} />                            </span>
                            <span className="line-clamp-2" style={{ fontFamily: 'Poppins', fontWeight: 400, fontSize: '14px', lineHeight: '17.5px', letterSpacing: '1%' }}>Understands Your Unique Style</span>
                          </div>
                          <div className="border border-[#AEAEAE] bg-[#FFFFFF5C] backdrop-blur-[36.56px] rounded-xl p-1.5 pl-3 shadow flex flex-col items-start gap-1" style={{ width: 185, height: 84, overflow: 'hidden' }}>
                          <span className="text-lg mb-0"><MdOutlineLightbulb size={20} className="mb-2" style={{ color: '#DA773D' }} />                            </span>
                          <span className="line-clamp-2" style={{ fontFamily: 'Poppins', fontWeight: 400, fontSize: '14px', lineHeight: '17.5px', letterSpacing: '1%' }}>Ensures Smart and Secure Shopping</span>
                          </div>
                        </div>
                      </div>
                      {/* Limitations Column */}
                      <div className="flex flex-col items-center">
                        <div className="flex flex-col items-center mb-8">
                          <IoWarningOutline size={32} className="mb-2" />
                          <span style={{ fontFamily: 'Roboto', fontWeight: 400, fontSize: '18.42px', lineHeight: '23.29px', letterSpacing: '0%', textAlign: 'center' }}>Limitations</span>
                        </div>
                        <div className="w-full flex flex-col gap-4">
                          <div className="border border-[#AEAEAE] bg-[#FFFFFF5C] backdrop-blur-[36.56px] rounded-xl p-1.5 pl-3 shadow flex flex-col items-start gap-1" style={{ width: 185, height: 84, overflow: 'hidden' }}>
                          <span className="text-lg mb-0"><IoWarningOutline size={20} className="mb-2" style={{ color: '#DA3D3D' }} />                            </span>
                          <span className="line-clamp-2" style={{ fontFamily: 'Poppins', fontWeight: 400, fontSize: '14px', lineHeight: '17.5px', letterSpacing: '1%' }}>AI Cannot Replace Personal Taste</span>
                          </div>
                          <div className="border border-[#AEAEAE] bg-[#FFFFFF5C] backdrop-blur-[36.56px] rounded-xl p-1.5 pl-3 shadow flex flex-col items-start gap-1" style={{ width: 185, height: 84, overflow: 'hidden' }}>
                          <span className="text-lg mb-0"><IoWarningOutline size={20} className="mb-2" style={{ color: '#DA3D3D' }} />                            </span>
                          <span className="line-clamp-2" style={{ fontFamily: 'Poppins', fontWeight: 400, fontSize: '14px', lineHeight: '17.5px', letterSpacing: '1%' }}>Limited Context Awareness</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Gap between main and input bar */}
              <div style={{ height: 22 }} />
              {/* Input Bar */}
              <div className="flex flex-row items-center gap-4 w-full max-w-[1129px] h-14">
                {/* Left: Upload & Analyze */}
                <button className="flex items-center gap-2 backdrop-blur-md bg-white/70 rounded-xl px-6 py-3.5 shadow text-gray-800 hover:bg-white/80 transition-all duration-150">
                  <LuUpload size={15} />
                  <span style={{
                    fontFamily: 'Poppins',
                    fontWeight: 400,
                    fontSize: '14px',
                    lineHeight: '20px',
                    letterSpacing: '0%'
                  }}>Upload & Analyze</span>
                </button>
                {/* Center: Input with search icon */}
                <div className="flex flex-row items-center flex-1 backdrop-blur-md bg-white/70 rounded-xl px-4 py-3 shadow">
                    <IoSearch size={20} className="mr-2" />
                  <input className="flex-1 bg-transparent outline-none text-gray-800 placeholder-gray-400 text-base" placeholder="Ask Eveness GPT" />
                </div>
                {/* Right: Send button */}
                <button className="flex items-center justify-center backdrop-blur-md bg-white/70 rounded-xl w-12 h-12 shadow hover:bg-white/80 transition-all duration-150">
                  <VscSend size={20}  />
                </button>
              </div>
            </div>
          </div>
          {/* Margin for bottom */}
          <div style={{ height: 64 }} />
        </div>

        {/* Mobile/Tablet layout */}
        <div className="flex xl:hidden flex-col w-full">
          {/* Center content */}
          <div className="flex flex-col items-center px-4">
            {/* Title in center */}
            <div className="flex items-center justify-center" style={{ marginTop: '35%' }}>
              <h1 className="text-4xl font-normal text-white" style={{ fontFamily: 'Poppins' }}>Hi Christine</h1>
            </div>
          </div>

          {/* Bottom section with cards and input */}
          <div className="mt-auto">
            {/* Cards right above input */}
            <div className="w-full flex justify-center gap-3 mb-4 px-4">
              <div className="bg-white/40 backdrop-blur-md border border-[#AEAEAE] flex flex-col items-start p-2" style={{
                width: '152px',
                height: '72px',
                borderRadius: '13px',
                borderWidth: '1px'
              }}>
                <MdOutlineEditNote size={20} className="mb-2" style={{ color: '#CE5AD6' }}/>
                <span className="text-[11px] leading-tight line-clamp-2" style={{ fontFamily: 'Poppins' }}>Does this dress suits me for a date?</span>
              </div>
              <div className="bg-white/40 backdrop-blur-md border border-[#AEAEAE] flex flex-col items-start p-2" style={{
                width: '152px',
                height: '72px',
                borderRadius: '13px',
                borderWidth: '1px'
              }}>
                <MdOutlineLightbulb size={20} className="mb-2" style={{ color: '#DA773D' }}/>
                <span className="text-[11px] leading-tight line-clamp-2" style={{ fontFamily: 'Poppins' }}>Understands Your Unique Style</span>
              </div>
            </div>

            {/* Input container */}
            <div className="w-full px-2 sm:px-4 py-4">
              {/* Input row */}
              <div className="flex items-center gap-1.5 sm:gap-2">
                <button className="p-3 sm:p-4 rounded-xl bg-white/40 backdrop-blur-md">
                  <LuUpload size={15} />
                </button>
                <div className="flex-1 flex items-center gap-2 bg-white/40 backdrop-blur-md rounded-xl px-3 sm:px-4 py-3">
                  <IoSearch size={20} className="mr-2" />
                  <input className="flex-1 bg-transparent outline-none placeholder-gray-500 text-sm" placeholder="Ask Eveness GPT" style={{ fontFamily: 'Poppins' }} />
                </div>
                <button className="p-3 sm:p-4 rounded-xl bg-white/40 backdrop-blur-md">
                  <VscSend size={20} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EvenessChat; 