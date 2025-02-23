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
    <div className="max-w-[1446px] mx-auto px-6 mt-12">
      {/* Heading Section */}
      <div className="text-left mb-8">
        <h2 className="text-3xl font-bold text-black">For Any Occasion</h2>
        <p className="text-gray-600 mt-1">
          From Jeans to Eyewear, Find The Fashion Piece That Accentuates Your Favorite Parts of Yourself
        </p>
        <button className="mt-4 bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition">
          Visit Marketplace
        </button>
      </div>

      {/* ✅ Desktop: 4-column grid | ✅ Mobile: Horizontal Scroll */}
      <div className="hidden md:grid grid-cols-4 gap-10">
        {products.map((product, index) => (
          <div 
            key={index} 
            className="relative w-[336px] h-[402px] rounded-[12px] overflow-visible shadow-lg"
          >
            {/* Image */}
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover rounded-[12px]"
            />
            
            {/* Floating Button */}
            <div className="absolute bottom-[-24px] left-1/2 transform -translate-x-1/2 
                            bg-white/70 backdrop-blur-lg w-[180px] h-[48px] text-sm font-medium 
                            flex items-center justify-center rounded-[8.8px] shadow-lg border border-white">
              {product.name}
            </div>
          </div>
        ))}
      </div>

      {/* ✅ Mobile Scrollable Layout */}
      <div className="md:hidden flex gap-6 overflow-x-auto scrollbar-hide px-4 py-4">
        {products.map((product, index) => (
          <div 
            key={index} 
            className="relative min-w-[336px] h-[402px] rounded-[12px] overflow-visible shadow-lg flex-shrink-0"
          >
            {/* Image */}
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover rounded-[12px]"
            />
            
            {/* Floating Button */}
            <div className="absolute bottom-[-24px] left-1/2 transform -translate-x-1/2 
                            bg-white/70 backdrop-blur-lg w-[180px] h-[48px] text-sm font-medium 
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
