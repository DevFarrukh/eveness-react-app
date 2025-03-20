import React, { useState, useEffect } from 'react'

const Quiz3 = () => {
  const [measurements, setMeasurements] = useState({
    height: '',
    weight: '',
    waistSize: '',
    inseam: '',
    size: 'XS',
    braBandSize: '34',
    braCupSize: 'D'
  })

  const [unit, setUnit] = useState('imperial')

  const sizes = ['XS', 'S', 'M', 'L', 'XL', 'XXL']

  const [isMobile, setIsMobile] = useState(window.matchMedia('(max-width: 767px)').matches)

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 767px)')
    
    const handleViewportChange = (e) => {
      setIsMobile(e.matches)
    }

    mediaQuery.addListener(handleViewportChange)

    return () => {
      mediaQuery.removeListener(handleViewportChange)
    }
  }, [])

  const getPlaceholder = (field, isMobile) => {
    const placeholders = {
      height: {
        imperial: {
          mobile: "Height (5' 18'')",
          desktop: "5' 18''"
        },
        metric: {
          mobile: "Height (180cm)",
          desktop: "180cm"
        }
      },
      weight: {
        imperial: {
          mobile: "Weight (129lbs)",
          desktop: "129lbs"
        },
        metric: {
          mobile: "Weight (58kg)",
          desktop: "58kg"
        }
      },
      waist: {
        imperial: {
          mobile: "Waist Size (30in)",
          desktop: "30in"
        },
        metric: {
          mobile: "Waist Size (76cm)",
          desktop: "76cm"
        }
      },
      inseam: {
        imperial: {
          mobile: "Inseam (28in)",
          desktop: "28in"
        },
        metric: {
          mobile: "Inseam (71cm)",
          desktop: "71cm"
        }
      }
    }

    return isMobile 
      ? placeholders[field][unit].mobile 
      : placeholders[field][unit].desktop
  }

  return (
    <div className="max-w-[800px] mx-auto px-4 mt-20">
      <h1 className="text-[20px] md:text-[26px] font-semibold text-center mb-12 whitespace-nowrap">
        What size do you typically wear?
      </h1>

      {/* Unit Toggle */}
      <div className="flex justify-center mb-16">
        <div className="inline-flex w-[195px] h-[56px] gap-4 rounded-[8px] p-[10px] bg-[#FFFFFF5C] backdrop-blur-[36px] shadow-[0px_0px_16px_0px_#00000004] items-center">
          <button
            className={`w-[95px] h-[36px] rounded-[4px] flex items-center justify-center transition-all font-poppins font-medium text-[14px] leading-[150%] tracking-[0%] ${
              unit === 'imperial' ? 'bg-[#00000099] text-white' : 'bg-[#FFFFFF5C] text-[#797979]'
            }`}
            onClick={() => setUnit('imperial')}
          >
            Imperial
          </button>
          <button
            className={`w-[64px] h-[30px] rounded-[4px] flex items-center justify-center transition-all font-poppins font-medium text-[14px] leading-[150%] tracking-[0%] ${
              unit === 'metric' ? 'bg-[#00000099] text-white' : 'bg-[#FFFFFF5C] text-[#797979]'
            }`}
            onClick={() => setUnit('metric')}
          >
            Metric
          </button>
        </div>
      </div>

      {/* Measurement Grid Container */}
      <div className="w-full md:w-[742px] h-auto md:h-[431px] mx-auto mb-8 px-4 md:px-0">
        {/* First Row - Height and Weight */}
        <div className="flex flex-col md:flex-row w-full md:w-[742px] h-auto md:h-[42px] gap-6 md:gap-[40px] mb-6 md:mb-12">
          <div className="w-full md:flex-1">
            <div className="flex items-center justify-between mb-2">
              <label className="hidden md:block font-poppins font-normal text-[16px] leading-[150%] tracking-[0%] text-[#000000]">
                Height
              </label>
              <input
                type="text"
                className="w-full md:w-[206.19px] h-[42px] rounded-[8px] bg-[#FFFFFF5C] shadow-[0px_0px_16px_0px_#00000004] backdrop-blur-[36px] p-3 text-[#797979] focus:outline-none"
                placeholder={getPlaceholder('height', isMobile)}
                value={measurements.height}
                onChange={(e) => setMeasurements({...measurements, height: e.target.value})}
              />
            </div>
          </div>
          <div className="w-full md:flex-1">
            <div className="flex items-center justify-between mb-2 md:ml-[40px]">
              <label className="hidden md:block font-poppins font-normal text-[16px] leading-[150%] tracking-[0%] text-[#000000]">
                Weight
              </label>
              <input
                type="text"
                className="w-full md:w-[161.71px] h-[42px] rounded-[8px] bg-[#FFFFFF5C] shadow-[0px_0px_16px_0px_#00000004] backdrop-blur-[36px] p-3 text-[#797979] focus:outline-none"
                placeholder={getPlaceholder('weight', isMobile)}
                value={measurements.weight}
                onChange={(e) => setMeasurements({...measurements, weight: e.target.value})}
              />
            </div>
          </div>
        </div>

        {/* Second Row - Waist and Inseam */}
        <div className="flex flex-col md:flex-row w-full md:w-[742px] h-auto md:h-[42px] gap-6 md:gap-[40px] mb-6 md:mb-12">
          <div className="w-full md:flex-1">
            <div className="flex items-center justify-between mb-2">
              <label className="hidden md:block font-poppins font-normal text-[16px] leading-[150%] tracking-[0%] text-[#000000]">
                Waist Size
              </label>
              <input
                type="text"
                className="w-full md:w-[206.19px] h-[42px] rounded-[8px] bg-[#FFFFFF5C] shadow-[0px_0px_16px_0px_#00000004] backdrop-blur-[36px] p-3 text-[#797979] focus:outline-none"
                placeholder={getPlaceholder('waist', isMobile)}
                value={measurements.waistSize}
                onChange={(e) => setMeasurements({...measurements, waistSize: e.target.value})}
              />
            </div>
          </div>
          <div className="w-full md:flex-1">
            <div className="flex items-center justify-between mb-2 md:ml-[40px] relative">
              <span className="absolute -top-5 md:static left-0 text-[10px] text-[#797979] font-poppins md:flex md:items-center">
                <label className="hidden md:block font-poppins font-normal text-[16px] leading-[150%] tracking-[0%] text-[#000000] mr-1">
                  Inseam
                </label>
                (Optional)
              </span>
              <label className="hidden font-poppins font-normal text-[16px] leading-[150%] tracking-[0%] text-[#000000]">
                Inseam
              </label>
              <input
                type="text"
                className="w-full md:w-[161.71px] h-[42px] rounded-[8px] bg-[#FFFFFF5C] shadow-[0px_0px_16px_0px_#00000004] backdrop-blur-[36px] p-3 text-[#797979] focus:outline-none"
                placeholder={getPlaceholder('inseam', isMobile)}
                value={measurements.inseam}
                onChange={(e) => setMeasurements({...measurements, inseam: e.target.value})}
              />
            </div>
          </div>
        </div>

        {/* Third Row - Size */}
        <div className="w-full md:w-[742px] h-auto md:h-[63px] mb-6 md:mb-12">
          <div className="flex flex-row items-center justify-between w-full">
            <label className="hidden md:block font-poppins font-normal text-[16px] leading-[150%] tracking-[0%] text-[#000000]">
              Size
            </label>
            <div className="w-full md:w-[603px] h-auto md:h-[63px] rounded-[14px] p-4 md:pt-[16px] md:pr-[26px] md:pb-[16px] md:pl-[26px] bg-[#FFFFFF5C] shadow-[0px_0px_16px_0px_#00000004] backdrop-blur-[36px]">
              <div className="flex justify-between gap-2 md:gap-0 w-full items-center">
                {sizes.map((size) => (
                  <button
                    key={size}
                    className={`min-w-[40px] h-[31px] rounded-[4px] px-[10px] font-poppins font-medium text-[16px] leading-[150%] tracking-[0%] text-center transition-all ${
                      measurements.size === size
                        ? 'bg-[#00000099] text-white'
                        : 'bg-[#FFFFFF5C] text-[#797979]'
                    }`}
                    onClick={() => setMeasurements({...measurements, size})}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Fourth Row - Bra Sizes */}
        <div className="flex w-full md:w-[742px] h-auto md:h-[42px] mb-6 md:mb-12">
          <div className="flex w-full items-center justify-between gap-4">
            <div className="flex items-center gap-2 md:gap-[30px] w-1/2">
              <label className="hidden md:block font-poppins font-normal text-[16px] leading-[150%] tracking-[0%] text-[#000000] whitespace-nowrap">
                Bra Band size
              </label>
              <div className="relative w-full md:w-[193px]">
                <select
                  className="w-full h-[42px] rounded-[8px] bg-[#FFFFFF5C] shadow-[0px_0px_16px_0px_#00000004] backdrop-blur-[36px] pl-4 pr-8 text-[#797979] appearance-none focus:outline-none"
                  value={measurements.braBandSize}
                  onChange={(e) => setMeasurements({...measurements, braBandSize: e.target.value})}
                >
                  <option value="">Band Size</option>
                  <option value="34">34</option>
                  <option value="36">36</option>
                  <option value="38">38</option>
                </select>
                <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
                  <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 1L6 6L11 1" stroke="#797979" strokeWidth="2"/>
                  </svg>
                </div>
              </div>
            </div>

            <div className="flex md: flex-1 items-center gap-2 md:gap-[60px] w-1/2">
              <label className="hidden md:block font-poppins font-normal text-[16px] leading-[150%] tracking-[0%] text-[#000000] whitespace-nowrap">
                Bra Cup Size
              </label>
              <div className="relative w-full md:w-[193px] ">
                <select
                  className="w-full h-[42px] rounded-[8px] bg-[#FFFFFF5C] shadow-[0px_0px_16px_0px_#00000004] backdrop-blur-[36px] pl-4 pr-8 text-[#797979] appearance-none focus:outline-none"
                  value={measurements.braCupSize}
                  onChange={(e) => setMeasurements({...measurements, braCupSize: e.target.value})}
                >
                  <option value="">Cup Size</option>
                  <option value="D">D</option>
                  <option value="DD">DD</option>
                  <option value="E">E</option>
                </select>
                <div className="absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none">
                  <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 1L6 6L11 1" stroke="#797979" strokeWidth="2"/>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* More Measurements Link */}
        <div className="text-center mt-6 md:mt-0">
          <button className="text-[#292D32] underline text-sm">
            More Measurements
          </button>
        </div>
      </div>

      {/* Continue Button */}
      <div className="flex mt-8 justify-center px-4 md:px-0">
        <button
          onClick={() => {/* Handle continue */}}
          disabled={!measurements.height || !measurements.weight || !measurements.waistSize || !measurements.inseam || !measurements.braBandSize || !measurements.braCupSize}
          className={`w-full md:w-[262px] h-[51px] rounded-[8px] bg-[#22272A] shadow-[0px_0px_16px_0px_#00000004] backdrop-blur-[36px] text-white transition-all ${
            !measurements.height || !measurements.weight || !measurements.waistSize || !measurements.inseam || !measurements.braBandSize || !measurements.braCupSize
              ? 'opacity-50 cursor-not-allowed'
              : 'hover:opacity-90'
          }`}
        >
          Continue
        </button>
      </div>
    </div>
  )
}

export default Quiz3