import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import FaceHero from '../components/FaceHero';
import FaceSummary from '../components/FaceSummary';
import facePageBackground from "../assets/face-picture-background.jpeg";
import NecklinesSection from '../components/NecklinesSection';
import { marketplaceProducts } from '../data/mockData';
import ProductCardNarrow from '../components/ProductCardNarrow';

const FacePage = () => {
  return (
    <div className="relative min-h-screen bg-[#FCF7F3]">
      <Navbar navItems={[
        { label: "Home", path: "/home" },
        { label: "Dashboard", path: "/", hasDropdown: true },
        { label: "Shop", path: "/shop" },
        { label: "Magazine", path: "/magazine" },
        { label: "Account", path: "/account" },
        { label: "Cart", path: "/cart" }
      ]} />

      {/* Background Image Container */}
      <div className="absolute top-0 left-0 w-full h-[800px] overflow-hidden">
        <div 
          className="absolute top-[50px] left-[-284.22px] w-[2080.45px] h-[1342px] opacity-30 border border-white"
          style={{
            backgroundImage: `url(${facePageBackground})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter: 'blur(100px)',
          }}
        />
        {/* Gradient Overlay */}
        <div 
          className="absolute bottom-0 left-0 w-full h-[50%]"
          style={{
            background: 'linear-gradient(to bottom, transparent, #FCF7F3)',
            zIndex: 1
          }}
        />
      </div>

      {/* Content Container */}
      <div className="relative z-10">
        {/* Hero Section - Remove px-8 */}
        <div className="pt-[120px]">
          <FaceHero />
        </div>

        {/* Summary Section */}
        <div className="">
          <FaceSummary />
        </div>

        {/* Necklines Section */}
        <div className="mt-16">
          <NecklinesSection />
        </div>

        
        
        {/* Products Section */}
        <div className="max-w-[1446px] mx-auto mt-32 md:mt-72 mb-20 md:mb-40 px-4 md:px-0">
          {/* Header and Button */}
          <div className="flex flex-col items-start mb-8">
            <h2 className="font-mollen font-bold text-[20px] md:text-[30px] leading-[24px] md:leading-[32px] tracking-[0%] mb-4 md:mb-6">
              Shop Your Perfect Neckline
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

      <Footer className="relative z-10" />
    </div>
  );
};

export default FacePage;