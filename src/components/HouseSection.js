import React from "react";

const HouseSection = ({ imageOnRight, title, description, buttonText, image }) => {
  return (
    <div className="w-full px-4 py-8 md:py-12 mb-16 md:mb-32">
      <div className="max-w-[1000px] mx-auto">
        <div className={`flex flex-col-reverse md:flex-row items-center ${imageOnRight ? 'justify-end' : 'md:flex-row-reverse justify-start'} -mx-4 md:-mx-8`}>
          {/* Content */}
          <div className="w-full md:max-w-[380px] px-4 md:px-8 mt-8 md:mt-0 text-left md:text-center">
            <h2 className="text-2xl md:text-3xl font-medium mb-3">
              {title.split('\n').map((line, i) => (
                <React.Fragment key={i}>
                  {line}
                  {i < title.split('\n').length - 1 && <br />}
                </React.Fragment>
              ))}
            </h2>
            <p className="text-gray-600 mb-6 md:mb-4 leading-normal text-base max-w-[320px] ml-0 md:mx-auto">
              {description}
            </p>
            <button className="bg-[#181A1B] text-white px-8 md:px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors text-base w-full md:w-auto">
              {buttonText}
            </button>
          </div>

          {/* Image */}
          <div className="px-4 md:px-8 w-full md:w-auto">
            <div className="rounded-3xl overflow-hidden shadow-xl h-[400px] md:h-[565px] w-full md:w-[468px]">
              <img 
                src={image} 
                alt="Section Image" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HouseSection; 