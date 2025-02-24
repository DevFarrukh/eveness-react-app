import React from "react";

const ForAnyOccasion = () => {
  const products = [
    { image: require("../assets/jeans.png"), name: "Jeans" },
    { image: require("../assets/heels.png"), name: "Shoes" },
    { image: require("../assets/bags.png"), name: "Bags" },
    { image: require("../assets/eyewear.png"), name: "Eyewear" },
    { image: require("../assets/heels.png"), name: "Shoes" },
    { image: require("../assets/jeans.png"), name: "Jeans" },
    { image: require("../assets/eyewear.png"), name: "Eyewear" },
    { image: require("../assets/bags.png"), name: "Bags" },
  ];

  return (
    <div className="max-w-[1446px] mx-auto px-4 sm:px-6 mt-8 sm:mt-12">
      {/* Heading Section */}
      <div className="text-left mb-6 sm:mb-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-black">For Any Occasion</h2>
        <p className="text-sm sm:text-base text-gray-600 mt-1">
          From Jeans to Eyewear, Find The Fashion Piece That Accentuates Your Favorite Parts of Yourself
        </p>
        <button className="mt-3 sm:mt-4 bg-black text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg hover:bg-gray-800 transition text-sm sm:text-base">
          Visit Marketplace
        </button>
      </div>

      {/* Desktop Grid */}
      <div className="hidden md:grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-10">
        {products.map((product, index) => (
          <div 
            key={index} 
            className="relative w-full h-[300px] sm:h-[350px] lg:h-[402px] rounded-[12px] overflow-visible shadow-lg"
          >
            {/* Image */}
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover rounded-[12px]"
            />
            
            {/* Floating Button */}
            <div className="absolute bottom-[-20px] sm:bottom-[-24px] left-1/2 transform -translate-x-1/2 
                            bg-white/70 backdrop-blur-lg w-[140px] sm:w-[180px] h-[40px] sm:h-[48px] text-xs sm:text-sm font-medium 
                            flex items-center justify-center rounded-[8.8px] shadow-lg border border-white">
              {product.name}
            </div>
          </div>
        ))}
      </div>

      {/* Mobile Scrollable Layout */}
      <div className="md:hidden flex gap-2 overflow-x-auto scrollbar-hide px-2 py-4">
        {products.map((product, index) => (
          <div 
            key={index} 
            className="relative min-w-[200px] h-[250px] rounded-[12px] overflow-visible shadow-lg flex-shrink-0"
          >
            {/* Image */}
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover rounded-[12px]"
            />
            
            {/* Floating Button */}
            <div className="absolute bottom-[-20px] left-1/2 transform -translate-x-1/2 
                            bg-white/70 backdrop-blur-lg w-[120px] h-[36px] text-xs font-medium 
                            flex items-center justify-center rounded-[8.8px] shadow-lg border border-white">
              {product.name}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ForAnyOccasion;
