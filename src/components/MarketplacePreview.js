import React from "react";

const MarketplacePreview = () => {
  const products = [
    {
      image: require("../assets/preview1.png"),
      match: "90%",
      name: "Short Dress with Bows",
      price: "$660",
    },
    {
      image: require("../assets/preview2.png"),
      match: "85%",
      name: "Ribbed Godet Dress",
      price: "$660",
    },
    {
      image: require("../assets/preview3.png"),
      match: "92%",
      name: "Starpless Midi Dress",
      price: "$660",
    },
    {
      image: require("../assets/preview4.png"),
      match: "76%",
      name: "Draped Midi Dress",
      price: "$660",
    },
    {
      image: require("../assets/preview4.png"),
      match: "76%",
      name: "Draped Midi Dress",
      price: "$660",
    },
  ];

  return (
    <div className="max-w-[1446px] mx-auto px-4 sm:px-6 mt-12">
      {/* Heading Section */}
      <div className="text-left mb-8">
        <h2 className="text-xl sm:text-3xl font-bold text-black">
          Designed by our Team to Accentuate your Figure
        </h2>
        <p className="text-gray-600 mt-1 text-sm sm:text-base">
          A glimpse into our collection
        </p>
        <button className="mt-4 bg-black text-white px-4 py-2 sm:px-6 sm:py-3 rounded-lg hover:bg-gray-800 transition">
          View Full Collection
        </button>
      </div>

      {/* Scrollable Cards Container */}
      <div 
        className="overflow-x-auto sm:overflow-hidden pb-4 sm:pb-0 scrollbar-hide" 
        style={{ scrollSnapType: "x mandatory", WebkitOverflowScrolling: "touch" }}
      >
        <div className="flex gap-6">
          {products.map((product, index) => (
            <div key={index} className="flex flex-col items-center snap-start">
              {/* Product Card */}
              <div className="relative w-[300px] sm:w-[336px] h-[420px] sm:h-[460px] bg-white rounded-[12px] overflow-hidden shadow-lg">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />

                {/* Match Percentage Badge with Blur Effect */}
                <div className="absolute bottom-4 left-4 px-3 py-1 text-xs font-semibold text-black bg-white/50 backdrop-blur-lg rounded-full">
                  {product.match} Match
                </div>
              </div>

              {/* Product Details - Name & Price Outside */}
              <div className="mt-3 w-[300px] sm:w-[336px] flex justify-between">
                <p className="text-sm sm:text-base text-black font-medium">{product.name}</p>
                <p className="text-sm sm:text-base text-black font-semibold">{product.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MarketplacePreview;
