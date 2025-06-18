import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import shopVideoBackground from '../assets/shop-video-background.mp4';
import ProductCardWide from '../components/ProductCardWide';
import ProductCardNarrow from '../components/ProductCardNarrow';
import narrowImage from '../assets/narrow-image1.png';
import wideImage from '../assets/wide-image1.png';
import narrowImage2 from '../assets/narrow-image2.png';
import { marketplaceProducts, marketplacePreviewProducts } from '../data/mockData';
import dress1 from '../assets/dress1.png';
import dress2 from '../assets/dress2.png';
import dress3 from '../assets/dress3.png';
import dress4 from '../assets/dress4.png';  
import wideImage2 from '../assets/wide-image2.png';
import wideImage3 from '../assets/wide-image3.png';
import wideImage4 from '../assets/wide-image4.png';
import narrowImage3 from '../assets/narrow-image3.png';
import narrowImage4 from '../assets/narrow-image4.png';
import CategoryCard from '../components/CategoryCard';


const Shop = () => {
  return (
    <div className=" relative min-h-screen bg-[#FCF7F3]">
      <Navbar navItems={[
        { label: "Home", path: "/home" },
        { label: "Dashboard", path: "/dashboard", hasDropdown: true },
        { label: "Shop", path: "/shop" },
        { label: "Eveness Chat", path: "/evenesschat" },
        { label: "Account", path: "/account" },
        { label: "Cart", path: "/cart" }
      ]} />       
      {/* Video Background Container */}
      <div className="relative w-full h-[675px] overflow-hidden">
        <video 
          className="absolute top-0 left-0 w-full h-full object-cover"
          autoPlay 
          loop 
          muted 
          playsInline
        >
          <source src={shopVideoBackground} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        
      </div>

      <div className="max-w-[1446px] mx-auto mt-8 px-4 md:px-6">
        {/* Collection Section */}
        <div className="w-full py-8 md:py-16">
          {/* Collection Header */}
          <div className="mb-12">
            <h2 className="font-poppins font-medium text-[16px] leading-[20px] tracking-[0%] text-[#797979] mb-2">
              Women Collection
            </h2>
            <p className="font-mollen font-bold text-[24px] md:text-[30px] leading-[26px] md:leading-[32px] tracking-[0%]">
              The new collection brings in its shapes and colors the sway of the waves, the sand and the coconut trees on the seashore.
            </p>
          </div>

          {/* Categories */}
          <div className="mb-24 flex gap-6 md:gap-4 overflow-x-auto whitespace-nowrap">
            <button className="w-[102px] h-[38px] md:h-[39px] rounded-[8px] bg-[#22272A] shadow-[0px_0px_16px_0px_#00000004] backdrop-blur-[36px] text-white font-normal md:font-medium text-[14px] leading-[150%] tracking-[0%] px-4">
              See All
            </button>
            <button className="w-[102px] h-[38px] md:h-[39px] rounded-[8px] bg-[#FFFFFF5C] shadow-[0px_0px_16px_0px_#00000004] backdrop-blur-[36px] font-normal md:font-medium text-[14px] leading-[150%] tracking-[0%] px-4">
              Tops
            </button>
            <button className="w-[96px] md:w-[102px] h-[38px] md:h-[39px] rounded-[8px] bg-[#FFFFFF5C] shadow-[0px_0px_16px_0px_#00000004] backdrop-blur-[36px] font-normal md:font-medium text-[14px] leading-[150%] tracking-[0%]">
              Dress
            </button>
            <button className="w-[96px] md:w-[102px] h-[38px] md:h-[39px] rounded-[8px] bg-[#FFFFFF5C] shadow-[0px_0px_16px_0px_#00000004] backdrop-blur-[36px] font-normal md:font-medium text-[14px] leading-[150%] tracking-[0%]">
              Short
            </button>
            <button className="w-[96px] md:w-[102px] h-[38px] md:h-[39px] rounded-[8px] bg-[#FFFFFF5C] shadow-[0px_0px_16px_0px_#00000004] backdrop-blur-[36px] font-normal md:font-medium text-[14px] leading-[150%] tracking-[0%]">
              Pant
            </button>
            <button className="w-[96px] md:w-[102px] h-[38px] md:h-[39px] rounded-[8px] bg-[#FFFFFF5C] shadow-[0px_0px_16px_0px_#00000004] backdrop-blur-[36px] font-normal md:font-medium text-[14px] leading-[150%] tracking-[0%]">
              Blouse
            </button>
            <button className="w-[96px] md:w-[102px] h-[38px] md:h-[39px] rounded-[8px] bg-[#FFFFFF5C] shadow-[0px_0px_16px_0px_#00000004] backdrop-blur-[36px] font-normal md:font-medium text-[14px] leading-[150%] tracking-[0%]">
              Shirt
            </button>
            <button className="w-[96px] md:w-[102px] h-[38px] md:h-[39px] rounded-[8px] bg-[#FFFFFF5C] shadow-[0px_0px_16px_0px_#00000004] backdrop-blur-[36px] font-normal md:font-medium text-[14px] leading-[150%] tracking-[0%]">
              Bag
            </button>
          </div>

          {/* Filter and Sort */}
          <div className="flex gap-4 mb-8">
            <button className="w-[150px] h-[39px] rounded-[8px] bg-[#FFFFFF99] shadow-[0px_0px_16px_0px_#00000004] backdrop-blur-[36px] flex items-center justify-between px-4">
              <div className="flex items-center gap-4">
                <svg width="18" height="12" viewBox="0 0 18 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0 0H18V2H0V0ZM3 5H15V7H3V5ZM6 10H12V12H6V10Z" fill="black"/>
                </svg>
                <span className="font-poppins text-black">Filter by</span>
              </div>
            </button>
            <button className="w-[150px] h-[39px] rounded-[8px] bg-[#FFFFFF99] shadow-[0px_0px_16px_0px_#00000004] backdrop-blur-[36px] flex items-center justify-between px-8">
              <div className="flex items-center gap-4">
                <span className="font-poppins text-black">Sort by</span>
                <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 1L6 6L11 1" stroke="black" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </div>
            </button>
          </div>

          {/* Products Grid - First Row (Wide + Narrow) */}
          <div className="overflow-x-auto md:overflow-visible pb-12 md:pb-24">
            <div className="flex gap-4 md:gap-6 min-w-max md:min-w-0">
              <div className="w-[358px] md:w-[706px] flex-shrink-0">
                <ProductCardWide 
                  image={wideImage}
                  matchPercentage="85"
                  faceMatch="76"
                  colorMatch={true}
                  name="Belted Mini Dress - Soft Jute Material"
                  price="660"
                />
              </div>
              <div className="hidden md:block w-[336px] flex-shrink-0">
                <ProductCardNarrow 
                  image={narrowImage}
                  matchPercentage="76"
                  name="Short Full Dress"
                  price="660"
                />
              </div>
              <div className="hidden md:block w-[336px] flex-shrink-0">
                <ProductCardNarrow 
                  image={narrowImage2}
                  matchPercentage="92"
                  name="Checkered Skater Dress"
                  price="660"
                />
              </div>
            </div>
          </div>

          {/* Mobile view for Narrow Cards from First Row */}
          <div className="grid grid-cols-2 gap-4 pb-12 md:hidden">
            <div className="w-full">
              <ProductCardNarrow 
                image={narrowImage}
                matchPercentage="76"
                name="Short Full Dress"
                price="660"
              />
            </div>
            <div className="w-full">
              <ProductCardNarrow 
                image={narrowImage2}
                matchPercentage="92"
                name="Checkered Skater Dress"
                price="660"
              />
            </div>
          </div>

          {/* Products Grid - Second Row (Narrow Only) */}
          <div className="grid grid-cols-2 md:flex gap-4 md:gap-7 pb-12 md:pb-24">
            {[dress1, dress2, dress3, dress4].map((image, index) => (
              <div key={index} className="w-full md:w-[336px] md:flex-shrink-0">
                <ProductCardNarrow 
                  image={image}
                  matchPercentage={["90", "85", "92", "76"][index]}
                  name={["Short Dress with Bows", "Ribbed Godet Dress", "Starpless Midi Dress", "Draped Midi Dress"][index]}
                  price="660"
                />
              </div>
            ))}
          </div>

          {/* Products Grid - Third Row (Wide Only) */}
          <div className="overflow-x-auto md:overflow-visible pb-12 md:pb-24">
            <div className="flex gap-4 md:gap-5 min-w-max md:min-w-0">
              {[wideImage2, wideImage3].map((image, index) => (
                <div key={index} className="w-[358px] md:w-[706px] flex-shrink-0">
                  <ProductCardWide 
                    image={image}
                    matchPercentage={["90", "85"][index]}
                    faceMatch={["70", "90"][index]}
                    colorMatch={true}
                    name={["Satin Midi Dress - V Neck with adjustable Starps", "Long Sleeve T-Shirt"][index]}
                    price="660"
                  />
                </div>
              ))}
            </div>
          </div>


          {/* Products Grid - Fourth Row (Narrow Only) */}
          <div className="grid grid-cols-2 md:flex gap-4 md:gap-7 pb-12 md:pb-24">
            {marketplaceProducts.map((product) => (
              <div key={product.id} className="w-full md:w-[336px] md:flex-shrink-0">
                <ProductCardNarrow 
                  image={product.image}
                  matchPercentage={product.match}
                  name={product.name}
                  price={product.price}
                />
              </div>
            ))}
          </div>

          {/* Last Row - Wide + Narrow */}
          <div className="overflow-x-auto md:overflow-visible pb-12 md:pb-60">
            <div className="flex gap-4 md:gap-6 min-w-max md:min-w-0">
              
              <div className="hidden md:block w-[336px] flex-shrink-0">
                <ProductCardNarrow 
                  image={narrowImage3}
                  matchPercentage="90"
                  name="Strapless Dress with Lapels"
                  price="660"
                />
              </div>
              <div className="hidden md:block w-[336px] flex-shrink-0">
                <ProductCardNarrow 
                  image={narrowImage4}
                  matchPercentage="90"
                  name="Bell Bottom Trousers"
                  price="660"
                />
              </div>
              <div className="w-[358px] md:w-[706px] flex-shrink-0">
                <ProductCardWide 
                  image={wideImage4}
                  matchPercentage="85"
                  faceMatch="90"
                  colorMatch={true}
                  name="Wide Strap Polyamide Vest Top"
                  price="660"
                />
              </div>
            </div>
          </div>

          {/* Mobile view for Narrow Cards from Last Row */}
          <div className="grid grid-cols-2 gap-4 pb-12 md:hidden">
            <div className="w-full">
              <ProductCardNarrow 
                image={narrowImage3}
                matchPercentage="90"
                name="Strapless Dress with Lapels"
                price="660"
              />
            </div>
            <div className="w-full">
              <ProductCardNarrow 
                image={narrowImage4}
                matchPercentage="90"
                name="Bell Bottom Trousers"
                price="660"
              />
            </div>
          </div>

          {/* Marketplace Preview Products Header */}
          <div className="mb-12 px-4 md:px-0">
            <h2 className="font-mollen font-bold text-[24px] md:text-[30px] leading-[26px] md:leading-[32px] tracking-[0%] mb-2">
              Explore the Essence of Fashion
            </h2>
            <p className="font-poppins font-normal md:font-medium text-[14px] md:text-[16px] leading-[16px] md:leading-[20px] tracking-[0%] text-[#797979]">
              From statement pieces to everyday luxury, browse expertly curated categories tailored to perfection
            </p>
          </div>

          {/* Marketplace Preview Products */}
          <div className="overflow-x-auto pb-16">
            <div className="flex gap-8 min-w-max">
              {marketplacePreviewProducts.map((product) => (
                <div key={product.id} className="w-[336px] flex-shrink-0">
                  <CategoryCard 
                    image={product.image}
                    category={product.name}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Shop;