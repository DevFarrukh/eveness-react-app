import { useState } from 'react'
import hourglass from '../assets/quiz1-hourglass.png'
import rectangle from '../assets/quiz1-rectangle.png'
import invertedTriangle from '../assets/quiz1-invertedtriangle.png'
import triangle from '../assets/quiz1-triangle.png'
import apple from '../assets/quiz1-apple.png'

const bodyTypes = [
  {
    id: 'hourglass',
    name: 'Hourglass',
    description: 'Shoulders and hips are even in width with a narrower waist',
    image: hourglass
  },
  {
    id: 'rectangle',
    name: 'Rectangle',
    description: 'Mostly uniform width of the shoulders, waist, and hips',
    image: rectangle
  },
  {
    id: 'inverted-triangle',
    name: 'Inverted Triangle',
    description: 'Slightly wider shoulders than hips with a visible waistline',
    image: invertedTriangle
  },
  {
    id: 'triangle',
    name: 'Triangle',
    description: 'Hips are wider than the shoulders',
    image: triangle
  },
  {
    id: 'apple',
    name: 'Apple',
    description: 'Shoulders and hips are narrower, comparison to waist',
    image: apple
  }
]

const Quiz1 = () => {
  const [selectedType, setSelectedType] = useState(null)

  return (
    <div className="max-w-[1446px] mt-36 mx-auto">
      <h1 className="w-[358px] md:w-[532px] text-[17px] md:text-[30px] font-bold leading-[28px] md:leading-[32px] tracking-[0%] text-center mx-auto mb-2 whitespace-nowrap  md:px-0">
        Which body-type best represents you?
      </h1>
      <p className="text-[12px] md:text-[16px] text-center text-[#797979] mb-8">
        Select your body-type from option below
      </p>

      <div className="mt-16 md:mt-32 grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {bodyTypes.slice(0, 3).map((type) => (
          <button
            key={type.id}
            onClick={() => setSelectedType(type.id)}
            className={`pl-0 pr-6 py-0 rounded-[11.6px] backdrop-blur-[36.56px] bg-[#FCF7F3] shadow-sm transition-all w-[360px] md:w-[432px] h-[90px] md:h-[228px] relative mx-auto ${
              selectedType === type.id ? 'ring-2 ring-black' : ''
            }`}
          >
            <div className="flex md:flex-row items-center h-full">
              <div className="w-20 md:w-[128px] h-full flex items-center justify-center md:ml-10">
                <img 
                  src={type.image} 
                  alt={type.name}
                  className="w-full h-[90px] md:h-full md:max-h-[228px] md:object-cover object-contain"
                />
              </div>
              <div className="bg-transparent md:absolute md:left-[193px] md:top-[115px] md:bg-[#FDFAF83D] md:backdrop-blur-[35.87px] md:rounded-[10.97px] md:shadow-[0px_0px_30.5px_0px_#0000000F] p-4 md:p-[24px] w-[240px] md:w-[217px] h-[60px] md:h-[91.97px] flex flex-col gap-[8px] justify-center items-center">
                <h3 className="font-poppins font-medium md:font-bold text-[14px] md:text-[18.28px] leading-[24.24px] md:leading-[29.25px] tracking-[0%] text-center">
                  {type.name}
                </h3>
                <p className="font-poppins font-normal md:font-medium text-[12px] md:text-[10.97px] leading-[13px] md:leading-[13.71px] tracking-[0%] text-center text-gray-600">
                  {type.description}
                </p>
              </div>
            </div>
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 md:flex md:justify-center md:gap-12">
        <div className="col-span-full md:col-start-2 md:col-span-1 grid grid-cols-1 md:grid-cols-2 md:gap-12 gap-6">
          {bodyTypes.slice(3).map((type) => (
            <button
              key={type.id}
              onClick={() => setSelectedType(type.id)}
              className={`pl-0 pr-6 py-0 rounded-[11.6px] backdrop-blur-[36.56px] bg-[#FCF7F3] shadow-sm transition-all w-[360px] md:w-[432px] h-[90px] md:h-[228px] relative mx-auto ${
                selectedType === type.id ? 'ring-2 ring-black' : ''
              }`}
            >
              <div className="flex md:flex-row items-center h-full">
                <div className="w-20 md:w-[128px] h-full flex items-center justify-center md:ml-10">
                  <img 
                    src={type.image} 
                    alt={type.name}
                    className="w-full h-[90px] md:h-full md:max-h-[228px] md:object-cover object-contain"                    />
                </div>
                <div className="bg-transparent md:absolute md:left-[193px] md:top-[115px] md:bg-[#FDFAF83D] md:backdrop-blur-[35.87px] md:rounded-[10.97px] md:shadow-[0px_0px_30.5px_0px_#0000000F] p-4 md:p-[24px] w-[240px] md:w-[217px] h-[60px] md:h-[91.97px] flex flex-col gap-[8px] justify-center items-center">
                  <h3 className="font-poppins font-medium md:font-bold text-[14px] md:text-[18.28px] leading-[24.24px] md:leading-[29.25px] tracking-[0%] text-center">
                    {type.name}
                  </h3>
                  <p className="font-poppins font-normal md:font-medium text-[12px] md:text-[10.97px] leading-[13px] md:leading-[13.71px] tracking-[0%] text-center text-gray-600">
                    {type.description}
                  </p>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

      <div className="mt-24 flex justify-center mb-8">
        <button
          onClick={() => {/* Handle continue action */}}
          disabled={!selectedType}
          className={`w-[262px] h-[51px] rounded-[8px] bg-[#22272A] shadow-[0px_0px_16px_0px_#00000004] backdrop-blur-[36px] text-white transition-all ${
            !selectedType ? 'opacity-50 cursor-not-allowed' : 'hover:opacity-90'
          }`}
        >
          Continue
        </button>
      </div>
    </div>
  )
}

export default Quiz1