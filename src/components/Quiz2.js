import { useState } from 'react'
import hourglass from '../assets/hourglass.png'
import cloudadd from '../assets/cloud-add.png'
const Quiz2 = () => {
  const [selectedFile, setSelectedFile] = useState(null)

  const handleFileSelect = (file) => {
    setSelectedFile(file)
  }

  return (
    <div className=" mt-24 mx-auto px-4 md:px-0">
      <h1 className="text-[20px] md:text-[30px] font-bold leading-[28px] md:leading-[32px] tracking-[0%] text-center mx-auto mb-2">
        Upload a Headshot for your Face Shape and Color Analysis
      </h1>
      <p className="text-[14px] md:text-base text-[#797979] text-center mb-4 md:mb-8">
        For the best analysis, follow these guidelines:
      </p>

      <div className="mt-8 md:mt-24 flex flex-col md:flex-row justify-between items-center gap-4 md:gap-[32px] md:w-[1334px] md:h-[488px] md:mx-auto">
        {/* Left side - Example Image with Guidelines */}
        <div className="relative w-[358px] h-[379px] md:w-[710px] md:h-[487px] rounded-[16px] bg-[#EDE3DD] overflow-hidden">
          <img 
            src={hourglass} 
            alt="Example headshot"
            className="w-[358px] h-[876px] md:w-[751px] md:h-[500px] scale-x-[-1] object-cover object-top translate-y-[-42px] rounded-[16px] relative"
          />
          
          {/* Guidelines */}
          <div className="absolute top-[60.31px] left-4 md:top-[77.5px] md:left-[112px]">
            <span className="bg-[#FFFFFF8F] backdrop-blur-[36px] rounded-[7.78px] md:rounded-[10px] shadow-[0px_0px_16px_0px_#00000004] md:px-3 md:py-1 text-[12px] w-[137.24px] md:w-[164px] h-[29.79px] md:h-[38px] flex items-center justify-center gap-[8.56px]">
              Hair off your face
            </span>
          </div>
          
          <div className="absolute top-[108.31px] left-4 md:top-[185.5px] md:left-[72px]">
            <span className="bg-[#FFFFFF8F] backdrop-blur-[36px] rounded-[7.78px] md:rounded-[10px] shadow-[0px_0px_16px_0px_#00000004] md:px-3 md:py-1 text-[12px] w-[169.24px] md:w-[201px] h-[29.79px] md:h-[38px] flex items-center justify-center gap-[8.56px]">
              Minimal to no makeup
            </span>
          </div>
          
          <div className="absolute top-[156.31px] right-4 md:top-[150.5px] md:left-[400px]">
            <span className="bg-[#FFFFFF8F] backdrop-blur-[36px] rounded-[7.78px] md:rounded-[10px] shadow-[0px_0px_16px_0px_#00000004] md:px-3 md:py-1 text-[12px] w-[176.24px] md:w-[266px] h-[58.79px] md:h-[59px] flex items-center justify-center flex-col gap-[8.56px]">
              Arms distance, eye level<br/>
              head/torso looking straight
            </span>
          </div>
          
          <div className="absolute top-[219.31px] left-4 md:top-[293.5px] md:left-[80px]">
            <span className="bg-[#FFFFFF8F] backdrop-blur-[36px] rounded-[7.78px] md:rounded-[10px] shadow-[0px_0px_16px_0px_#00000004] md:px-3 md:py-1 text-[12px] w-[147.24px] md:w-[176px] h-[47.79px] md:h-[61px] flex items-center justify-center flex-col ">
              Good lighting
              <span className="text-gray-500 text-[12px]">(little to no shadows)</span>
            </span>
          </div>
          
          <div className="absolute top-[290.31px] right-4 md:top-[369.5px] md:left-[402px]">
            <span className="bg-[#FFFFFF8F] backdrop-blur-[36px] rounded-[7.78px] md:rounded-[10px] shadow-[0px_0px_16px_0px_#00000004] px-3 md:px-3 md:py-1 text-[12px] w-[168.24px] md:w-[218px] h-[56.79px] md:h-[59px] flex items-center justify-center">
              <div className=" items-center">
                Use as high resolution as possible <span className="text-gray-500 text-[10px] ml-1">(clear & large)</span>
              </div>
            </span>
          </div>
          
          {/* Example text */}
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 z-0 w-full text-center">
            <span className="text-[12px] md:text-sm text-gray-500">(Example)</span>
          </div>
        </div>

        {/* Right side - Upload Box */}
        <div className="w-full md:w-[592px] md:h-[488px] flex flex-col items-center justify-center md:border-[4px] md:border-dashed md:border-[#79797980] md:rounded-[18px] md:p-6 md:bg-white/50">
          {/* Only show on desktop */}
          <div className="hidden md:block mb-4">
            <img src={cloudadd} alt="Upload icon" className="w-12 h-12" />
          </div>
          <h3 className="hidden md:block font-poppins font-semibold text-[26px] leading-[28px] tracking-[0%] text-center text-[#292D32] mb-4">
            Choose a file or drag & drop it here
          </h3>
          <p className="hidden md:block font-poppins font-medium text-[16px] leading-[100%] tracking-[0%] text-center text-[#797979] mb-8">
            JPEG, PNG, JPG and MP4 formats, up to 50MB
          </p>
          
          {/* Buttons */}
          <div className="flex flex-row gap-4 w-full md:w-auto mt-16 md:mt-0">
            <button className="w-[136px] md:w-[148px] h-[50px] rounded-[8px] bg-[#22272A] md:bg-[#FFFFFF99] text-white md:text-[#292D32] shadow-[0px_0px_16px_0px_#00000004] backdrop-blur-[36px] hover:bg-opacity-90 font-poppins font-medium text-[14px] leading-[150%] tracking-[0%]">
              Take Image
            </button>
            <button className="w-[184px] md:w-[202px] h-[50px] rounded-[8px] bg-[#22272A] md:bg-[#FFFFFF99] text-white md:text-[#292D32] shadow-[0px_0px_16px_0px_#00000004] backdrop-blur-[36px] hover:bg-opacity-90 font-poppins font-medium text-[14px] leading-[150%] tracking-[0%]">
              Upload your photo
            </button>
          </div>
        </div>
      </div>

      {/* Hide continue button on mobile */}
      <div className="hidden md:flex mt-24 justify-center">
        <button
          onClick={() => {/* Handle continue */}}
          disabled={!selectedFile}
          className={`w-[262px] h-[51px] rounded-[8px] bg-[#22272A] shadow-[0px_0px_16px_0px_#00000004] backdrop-blur-[36px] text-white transition-all ${
            !selectedFile ? 'opacity-50 cursor-not-allowed' : 'hover:opacity-90'
          }`}
        >
          Continue
        </button>
      </div>
    </div>
  )
}

export default Quiz2    