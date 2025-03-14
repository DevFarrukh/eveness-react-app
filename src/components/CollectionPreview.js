import React from "react";

const CollectionPreview = ({ 
  title = title,
  subtitle = subtitle,
  buttons = buttons,
  products 
}) => {
  return (
    <div className="max-w-[1446px] mx-auto px-4 sm:px-6 mt-60">
      {/* Heading Section */}
      <div className="text-left mb-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-black">
          {title}
        </h2>
        <p className="text-gray-600 mt-1 text-sm sm:text-base">
          {subtitle}
        </p>
        <div className="flex gap-4 mt-4 overflow-x-auto scrollbar-hide">
          {buttons.map((button, index) => (
            <button 
              key={index}
              onClick={button.onClick}
              className={`${button.color || 'bg-black'} ${button.textColor || 'bg-white'} px-3 sm:px-6 py-2.5 rounded-lg hover:opacity-90 transition text-base whitespace-nowrap flex-shrink-0`}
            >
              {button.text}
            </button>
          ))}
        </div>
      </div>

      {/* Scrollable Cards Container */}
      <div 
        className="overflow-x-auto scrollbar-hide mt-12 mb-16 py-16"
      >
        <div className="flex gap-6">
          {products.map((product, index) => (
            <div 
              key={index} 
            >
              {/* Product Card */}
              <div className="relative w-[300px] sm:w-[336px] h-[420px] sm:h-[460px] bg-white rounded-[12px] overflow-hidden shadow-lg">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />

                {/* Match Percentage Badge with Blur Effect */}
                <div className="absolute bottom-4 left-4 w-32 h-[38px] flex items-center justify-center text-xs text-black bg-white/50 backdrop-blur-lg rounded-[11px]">
                  <span className="font-semibold">{product.match}%</span><span className="ml-1">Match</span>
                </div>
              </div>

              {/* Product Details - Name & Price Outside */}
              <div className="mt-3 w-[300px] sm:w-[336px] flex justify-between">
                <p className="text-sm sm:text-base text-black font-medium">{product.name}</p>
                <p className="text-sm sm:text-base text-black font-semibold">${product.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CollectionPreview;
