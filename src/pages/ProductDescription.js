import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { motion, useScroll } from "framer-motion";
import productDescription1 from '../assets/product-description-1.png';
import productDescription2 from '../assets/product-description-2.png';
import productDescription3 from '../assets/product-description-3.png';
import { useState, useEffect } from 'react';
import ProductCardNarrow from '../components/ProductCardNarrow';
import { marketplaceProducts } from '../data/mockData';

const ProductDescription = () => {
  const [scrollY, setScrollY] = useState(0);
  const [hasReachedBottom, setHasReachedBottom] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const images = [productDescription1, productDescription2, productDescription3];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const rightColumn = document.querySelector('.right-column');
      const infoBox = document.querySelector('.info-box');
      
      if (rightColumn && infoBox) {
        const rightColumnRect = rightColumn.getBoundingClientRect();
        const maxScroll = rightColumnRect.height - infoBox.offsetHeight;
        const shouldPin = scrollPosition > rightColumnRect.top + window.scrollY + maxScroll;
        
        setHasReachedBottom(shouldPin);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="w-full min-h-screen overflow-x-hidden bg-[#FCF7F3] scrollbar-hide">
      <div className="relative w-full xl:w-[1512px] mx-auto">
        <Navbar navItems={[
          { label: "Home", path: "/home" },
          { label: "Dashboard", path: "/dashboard", hasDropdown: true },
          { label: "Shop", path: "/shop" },
          { label: "Magazine", path: "/magazine" },
          { label: "Account", path: "/account" },
          { label: "Cart", path: "/cart" }
        ]} />

        {/* Mobile Layout */}
        <div className="block xl:hidden">
          {/* Image Slideshow */}
          <div className="relative w-full h-[500px] sm:h-[600px] md:h-[800px] lg:h-[1000px] pt-[80px]">
            {/* Images */}
            <div className="relative w-full h-full">
              {images.map((image, index) => (
                <div 
                  key={index}
                  className={`absolute w-full h-full transition-opacity duration-300 ${
                    currentSlide === index ? 'opacity-100' : 'opacity-0'
                  }`}
                >
                  <img 
                    src={image}
                    alt={`Product view ${index + 1}`}
                    className="w-full h-full object-contain sm:object-contain md:object-contain lg:object-contain"
                  />
                </div>
              ))}
            </div>

            {/* Slide Indicators */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
              {images.map((_, index) => (
                <button
                  key={index}
                  className={`w-8 h-[2px] rounded-full ${
                    currentSlide === index ? 'bg-[#22272A]' : 'bg-[#22272A]/30'
                  }`}
                  onClick={() => setCurrentSlide(index)}
                />
              ))}
            </div>
          </div>

          {/* Product Info Container */}
          <div className="w-[358px] sm:w-[500px] md:w-[700px] lg:w-[900px] mx-auto mt-24">
            <div 
              className="w-[329px] sm:w-[450px] md:w-[650px] lg:w-[850px] mx-auto rounded-[16px] px-4 sm:px-6 md:px-8 lg:px-10 pt-6 pb-6"
              style={{
                backgroundColor: 'rgba(255, 255, 255, 0.42)',
                backdropFilter: 'blur(40px)',
                WebkitBackdropFilter: 'blur(40px)',
              }}
            >
              {/* Title and Price */}
              <div className="flex justify-between items-center mb-4 sm:mb-6">
                <h1 className="font-['Poppins'] font-medium text-[24px] sm:text-[28px] md:text-[32px] leading-[32px] sm:leading-[36px] md:leading-[40px]">
                  Gradient tulle dress
                </h1>
                <div className="font-['Poppins'] font-medium text-[24px] sm:text-[28px] md:text-[32px] leading-[32px] sm:leading-[36px] md:leading-[40px]">
                  $55
                </div>
              </div>

              {/* Match Stats - Adjusted for larger screens */}
              <div className="flex gap-2 sm:gap-4 mb-4 sm:mb-6">
                <div className="flex items-center gap-1 sm:gap-2 bg-[#FFFFFF75] rounded-[11px] px-3 sm:px-4 py-2 sm:py-3">
                  <span className="font-['Poppins'] font-semibold text-[14px] sm:text-[16px] md:text-[18px]">85%</span>
                  <span className="font-['Poppins'] text-[14px] sm:text-[16px] md:text-[18px] text-[#797979]">Overall Match</span>
                </div>
                <div className="flex items-center gap-1 sm:gap-2 bg-[#FFFFFF75] rounded-[11px] px-3 sm:px-4 py-2 sm:py-3">
                  <span className="font-['Poppins'] font-semibold text-[14px] sm:text-[16px] md:text-[18px]">76%</span>
                  <span className="font-['Poppins'] text-[14px] sm:text-[16px] md:text-[18px] text-[#797979]">Face Match</span>
                </div>
              </div>

              {/* Rest of the content with adjusted sizes */}
              <p className="text-[14px] sm:text-[16px] md:text-[18px] leading-[20px] sm:leading-[24px] md:leading-[28px] text-[#797979] mb-6 sm:mb-8">
                Tulle dress with viscose knit combination. Fitted piece with gradient print. Long sleeved design and midi length. Cutouts reminiscent of surfing clothes 
                <span className="text-[#797979] underline ml-1">read more</span>
              </p>

              {/* Color Selection */}
              <div className="flex items-center mb-4">
                <span className="w-[60px] text-[14px] text-[#797979]">Color</span>
                <div className="flex items-center gap-2 bg-[#FFFFFF75] rounded-[8px] px-3 py-2">
                  <div className="w-[18px] h-[18px] rounded-[3px] bg-[#95B1D0]"></div>
                  <span className="text-[14px]">Pale Cerulean</span>
                  <button className="text-[12px] underline ml-2">Change</button>
                </div>
              </div>

              {/* Size Selection */}
              <div className="flex items-center mb-4">
                <span className="w-[60px] text-[14px] text-[#797979]">Size</span>
                <div className="flex items-center gap-2 bg-[#FFFFFF75] rounded-[8px] px-3 py-2">
                  <div className="bg-black/60 rounded px-2 py-1">
                    <span className="text-white text-[14px]">M</span>
                  </div>
                  <span className="text-[12px] text-[#797979]">(Eveness Recommended)</span>
                  <div className="flex gap-2 ml-2">
                    <button className="text-[12px] underline">Change Size</button>
                    <button className="text-[12px] underline">Size Guide</button>
                  </div>
                </div>
              </div>

              {/* Material */}
              <div className="flex items-center mb-6">
                <span className="w-[60px] text-[14px] text-[#797979]">Material</span>
                <div className="flex items-center gap-2 bg-[#FFFFFF75] rounded-[8px] px-3 py-2">
                  <span className="text-[14px]">85% polyamide 15% elastane</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-3 sm:gap-4">
                <button className="flex-1 h-[42px] sm:h-[50px] md:h-[56px] bg-[#22272A] text-white rounded-[8px] text-[14px] sm:text-[16px] md:text-[18px] font-medium">
                  ADD TO BAG
                </button>
                <button className="w-[42px] sm:w-[50px] md:w-[56px] h-[42px] sm:h-[50px] md:h-[56px] bg-[#FFFFFF75] rounded-[8px] flex items-center justify-center">
                  <span className="text-[14px] sm:text-[16px] md:text-[18px]">♡</span>
                </button>
              </div>
            </div>
          </div>

          {/* Rest of mobile content */}
          <div className="mt-16 sm:mt-20 md:mt-24">
            {/* Scrollable Products Section */}
            <div className="px-4">
              {/* Header and Button */}
              <div className="flex flex-col items-start mb-8">
                <h2 className="font-mollen font-bold text-[20px] leading-[24px] tracking-[0%] mb-4">
                  You may also like
                </h2>
                <button className="h-[39px] w-[102px] rounded-[10px] bg-[#22272A] shadow-[0px_0px_16px_0px_#00000004] backdrop-blur-[36px] flex items-center justify-center">
                  <span className="font-poppins font-normal text-[14px] leading-[150%] tracking-[0%] text-white">
                    View All
                  </span>
                </button>
              </div>

              {/* Scrollable Products */}
              <div className="mt-8 overflow-x-auto scrollbar-hide pb-8">
                <div className="flex gap-x-[16px] min-w-max">
                  {[...marketplaceProducts, {
                    image: require("../assets/preview3.png"),
                    match: "92",
                    name: "Starpless Midi Dress",
                    price: "660",
                  }].map((product, index) => (
                    <ProductCardNarrow
                      key={index}
                      image={product.image}
                      matchPercentage={product.match}
                      name={product.name}
                      price={product.price}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="w-full mt-16">
              <Footer />
            </div>
          </div>
        </div>

        {/* Desktop Layout - Keep existing code */}
        <div className="hidden xl:block">
          {/* Main container - remove fixed width on xl breakpoint */}
          <div className="relative w-[358px] sm:w-[600px] md:w-[800px] lg:w-[1200px] xl:w-full h-[2000px] sm:h-[2500px] md:h-[2800px] xl:h-[3131px] mx-auto mb-40">
            {/* Background gradient with blur - make it full width */}
            <div className="w-full">
              {/* Blur layer */}
              <div 
                className="absolute inset-0 w-full"
                style={{
                  background: 'linear-gradient(180deg, #E8DCD8 0%, #E8DCD8 91.85%, #F5EBE7 100%)',
                  filter: 'blur(60px)',
                }}
              />
            </div>

            {/* Content */}
            <div className="relative z-10">
              <Navbar navItems={[
                { label: "Home", path: "/home" },
                { label: "Dashboard", path: "/dashboard", hasDropdown: true },
                { label: "Shop", path: "/shop" },
                { label: "Magazine", path: "/magazine" },
                { label: "Account", path: "/account" },
                { label: "Cart", path: "/cart" }
              ]} />     

              {/* Two Column Layout - center the content */}
              <div className="relative w-full max-w-[1512px] mx-auto flex flex-col xl:flex-row px-4 xl:px-0">
                {/* Left Column - Images */}
                <div className="w-full xl:w-[765px] flex flex-col gap-8">
                  <div className="w-full aspect-[3/4] rounded-lg overflow-hidden">
                    <img 
                      src={productDescription1} 
                      alt="Product view 1"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="w-full aspect-[3/4] rounded-lg overflow-hidden">
                    <img 
                      src={productDescription2} 
                      alt="Product view 2"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="w-full aspect-[3/4] rounded-lg overflow-hidden">
                    <img 
                      src={productDescription3} 
                      alt="Product view 3"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                {/* Right Column - Product Info */}
                <div className="right-column w-full xl:w-[716px] xl:h-[3131px] relative ">
                  <div 
                    className="info-box w-[716px] h-[719px] rounded-[16px] flex items-center"
                    style={{
                      backgroundColor: 'rgba(255, 255, 255, 0.42)',
                      backdropFilter: 'blur(40px)',
                      WebkitBackdropFilter: 'blur(40px)',
                      position: hasReachedBottom ? 'absolute' : 'fixed',
                      top: hasReachedBottom ? 'auto' : '140px',
                      bottom: hasReachedBottom ? '0' : 'auto',
                      right: hasReachedBottom ? '0' : `${(window.innerWidth - 1512) / 2 + 31}px`
                    }}
                  >
                    {/* Inner content container */}
                    <div className="w-[648px] h-[616px] ml-[35px]">
                      {/* Product Title and Price */}
                      <div className="flex justify-between items-center mb-4">
                        <h1 className="font-['Poppins'] font-medium text-[24px] leading-[32px]">
                          Gradient tulle dress
                        </h1>
                        <div className="font-['Poppins'] font-medium text-[24px] leading-[32px] text-right">
                          $55
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-[14px] leading-[20px] text-[#797979] mb-10">
                        Tulle dress with viscose knit combination. Fitted piece with gradient print. Long sleeved design and midi length. Cutouts reminiscent of surfing clothes 
                        <span className="text-[#797979] underline ml-1 cursor-pointer">read more</span>
                      </p>

                      {/* Match Stats */}
                      <div className="flex gap-4 mb-10">
                        <div 
                          className="w-[205px] h-[43px] rounded-[11px] flex items-center justify-center"
                          style={{
                            background: 'rgba(255, 255, 255, 0.36)',
                            boxShadow: '0px 0px 16px 0px rgba(0, 0, 0, 0.04)',
                            backdropFilter: 'blur(36px)',
                          }}
                        >
                          <div className="flex items-center gap-2">
                            <span className="font-['Poppins'] font-semibold text-[16px] leading-[150%]">85%</span>
                            <span className="font-['Poppins'] font-normal text-[16px] leading-[150%] text-[#797979]">Overall Match</span>
                          </div>
                        </div>

                        <div 
                          className="w-[205px] h-[43px] rounded-[11px] flex items-center justify-center"
                          style={{
                            background: 'rgba(255, 255, 255, 0.36)',
                            boxShadow: '0px 0px 16px 0px rgba(0, 0, 0, 0.04)',
                            backdropFilter: 'blur(36px)',
                          }}
                        >
                          <div className="flex items-center gap-2">
                            <span className="font-['Poppins'] font-semibold text-[16px] leading-[150%]">76%</span>
                            <span className="font-['Poppins'] font-normal text-[16px] leading-[150%] text-[#797979]">Face Match</span>
                          </div>
                        </div>

                        <div 
                          className="w-[205px] h-[43px] rounded-[11px] flex items-center justify-center"
                          style={{
                            background: 'rgba(255, 255, 255, 0.36)',
                            boxShadow: '0px 0px 16px 0px rgba(0, 0, 0, 0.04)',
                            backdropFilter: 'blur(36px)',
                          }}
                        >
                          <div className="flex items-center gap-2">
                            <span className="font-['Poppins'] font-normal text-[16px] leading-[150%] text-[#797979]">Perfect Color</span>
                          </div>
                        </div>
                      </div>

                      {/* Color, Size, Material Section */}
                      <div className="flex flex-col gap-4 mb-10">
                        {/* Color Selection */}
                        <div className="flex items-center">
                          <h2 className="font-['Poppins'] font-normal text-[16px] leading-[150%] w-[100px]">Color</h2>
                          <div 
                            className="h-[38px] rounded-[8px] flex items-center px-4"
                            style={{
                              background: 'rgba(255, 255, 255, 0.36)',
                              boxShadow: '0px 0px 16px 0px rgba(0, 0, 0, 0.04)',
                              backdropFilter: 'blur(36px)',
                            }}
                          >
                            <div className="flex items-center gap-4">
                              <div className="flex items-center gap-2">
                                <div className="w-[18px] h-[18px] rounded-[3px] bg-[#95B1D0]"></div>
                                <span className="font-['Poppins'] font-normal text-[14px] leading-[150%]">Pale Cerulean</span>
                              </div>
                              <button className="font-normal text-[12px] leading-[150%] tracking-[-5%] underline">Change</button>
                            </div>
                          </div>
                        </div>

                        {/* Size Selection */}
                        <div className="flex items-center">
                          <h2 className="font-['Poppins'] font-normal text-[16px] leading-[150%] w-[100px]">Size</h2>
                          <div 
                            className="h-[38px] rounded-[8px] flex items-center px-4"
                            style={{
                              background: 'rgba(255, 255, 255, 0.36)',
                              boxShadow: '0px 0px 16px 0px rgba(0, 0, 0, 0.04)',
                              backdropFilter: 'blur(36px)',
                            }}
                          >
                            <div className="flex items-center gap-4">
                              <div className="flex items-center gap-2">
                                <div 
                                  className="w-[29px] h-[23px] rounded-[4px] flex items-center justify-center"
                                  style={{
                                    background: 'rgba(0, 0, 0, 0.6)',
                                    padding: '6px 6px 6px 8px',
                                  }}
                                >
                                  <span className="font-['Poppins'] font-medium text-[16px] leading-[150%] text-white">M</span>
                                </div>
                                <span className="font-light text-[12px] leading-[150%] tracking-[-5%]">(Eveness Recommended)</span>
                              </div>
                              <div className="flex items-center gap-4">
                                <button className="font-normal text-[12px] leading-[150%] tracking-[-5%] underline">Change Size</button>
                                <button className="font-normal text-[12px] leading-[150%] tracking-[-5%] underline">Size Guide</button>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Material */}
                        <div className="flex items-center">
                          <h2 className="font-['Poppins'] font-normal text-[16px] leading-[150%] w-[100px]">Material</h2>
                          <div 
                            className="h-[38px] rounded-[8px] flex items-center px-4"
                            style={{
                              background: 'rgba(255, 255, 255, 0.36)',
                              boxShadow: '0px 0px 16px 0px rgba(0, 0, 0, 0.04)',
                              backdropFilter: 'blur(36px)',
                            }}
                          >
                            <span className="font-['Poppins'] font-normal text-[14px] leading-[150%]">85% polyamide 15% elastane</span>
                          </div>
                        </div>
                      </div>

                      {/* Fit Question */}
                      <div className="mb-10">
                        <div 
                          className="w-[317px] h-[46px] rounded-[10px] px-4 py-[10px] flex items-center justify-between"
                          style={{
                            background: 'rgba(255, 255, 255, 0.36)',
                            boxShadow: '0px 0px 16px 0px rgba(0, 0, 0, 0.04)',
                            backdropFilter: 'blur(36px)',
                          }}
                        >
                          <span 
                            className="font-['Roboto'] font-medium text-[22px] leading-[100%] text-center"
                            style={{
                              background: 'linear-gradient(92.33deg, #F2AF9B -11.34%, #BA555C 51.73%, #94BDEB 112.33%)',
                              WebkitBackgroundClip: 'text',
                              WebkitTextFillColor: 'transparent',
                              backgroundClip: 'text',
                            }}
                          >
                            Does this fit me?
                          </span>
                          <button className="font-normal text-[12px] leading-[150%] tracking-[-5%] underline">
                            Ask Eveness AI
                          </button>
                        </div>
                      </div>

                      {/* Product Links */}
                      <div className="flex gap-6 mb-10">
                        <button className="font-normal text-[12px] leading-[150%] tracking-[-5%] underline">
                          Product Details
                        </button>
                        <button className="font-normal text-[12px] leading-[150%] tracking-[-5%] underline">
                          Shipping
                        </button>
                        <button className="font-normal text-[12px] leading-[150%] tracking-[-5%] underline">
                          Returns
                        </button>
                      </div>

                      {/* Action Buttons */}
                      <div className="flex gap-[21px]">
                        <button 
                          className="w-[648px] h-[51px] rounded-[8px] bg-[#22272A] text-white flex items-center justify-center"
                        >
                          <span className="font-['Poppins'] font-medium text-[16px] leading-[150%]">
                            ADD TO BAG
                          </span>
                        </button>
                        <button 
                          className="w-[141px] h-[51px] rounded-[8px] flex items-center justify-center font-['Poppins'] font-medium text-[16px] leading-[150%]"
                          style={{
                            background: 'rgba(255, 255, 255, 0.6)',
                            boxShadow: '0px 0px 16px 0px rgba(0, 0, 0, 0.04)',
                            backdropFilter: 'blur(36px)',
                          }}
                        >
                          Wishlist
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Products Section - make it full width */}
              <div className="w-full bg-[#FCF7F3]">
                <div className="max-w-[1446px] mx-auto mt-32 md:mt-72 mb-20 md:mb-40 px-4 md:px-0">
                  {/* Header and Button */}
                  <div className="flex flex-col items-start mb-8">
                    <h2 className="font-mollen font-bold text-[20px] md:text-[30px] leading-[24px] md:leading-[32px] tracking-[0%] mb-4 md:mb-6">
                      You may also like
                    </h2>
                    <button className="h-[39px] w-[102px] md:w-[110px] rounded-[10px] bg-[#22272A] shadow-[0px_0px_16px_0px_#00000004] backdrop-blur-[36px] flex items-center justify-center">
                      <span className="font-poppins font-normal text-[14px] md:text-[16px] leading-[150%] tracking-[0%] text-white">
                        View All
                      </span>
                    </button>
                  </div>

                  {/* Scrollable Products */}
                  <div className="mt-8 md:mt-16 overflow-x-auto scrollbar-hide pb-8">
                    <div className="flex gap-x-[16px] md:gap-x-[32px] min-w-max">
                      {[...marketplaceProducts, {
                        image: require("../assets/preview3.png"),
                        match: "92",
                        name: "Starpless Midi Dress",
                        price: "660",
                      }].map((product, index) => (
                        <ProductCardNarrow
                          key={index}
                          image={product.image}
                          matchPercentage={product.match}
                          name={product.name}
                          price={product.price}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Footer - make it full width */}
              <div className="w-full">
                <Footer />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDescription;
