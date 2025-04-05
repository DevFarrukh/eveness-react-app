import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import BodyContent from '../components/BodyContent';
import bgImage from '../assets/face-picture-background.jpeg';
import FaceSummary from '../components/FaceSummary';
import NecklineQuestion from '../components/NecklineQuestion';
import ProductCardNarrow from '../components/ProductCardNarrow';
import { marketplaceProducts } from '../data/mockData';
import DressTypes from '../components/DressTypes';
import wrapDress from '../assets/wrap-dress.png';
import bodyconDress from '../assets/bodycon-dress.png';
import sheathDress1 from '../assets/sheath-dress-1.png';
import sheathDress2 from '../assets/sheath-dress-2.png';
import sheathDress3 from '../assets/sheath-dress-3.png';
import sheathDress4 from '../assets/sheath-dress-4.png';

const Colors = () => {
  const navItems = [
    { label: "Home", path: "/home" },
    { label: "Dashboard", path: "/", hasDropdown: true },
    { label: "Shop", path: "/shop" },
    { label: "Magazine", path: "/magazine" },
    { label: "Account", path: "/account" },
    { label: "Cart", path: "/cart" }
  ];

  const dressTypes = [
    {
      image: wrapDress,
      title: "WRAP DRESSES",
      description: "Tie at the waist accentuates natural curves",
      backgroundColor: "#F4E8E0"
    },
    {
      image: bodyconDress,
      title: "BODYCON DRESSES",
      description: "Clings to highlight every hourglass contour",
      backgroundColor: "#F4E8E0"
    },
    {
      image: sheathDress1,
      title: "SHEATH DRESSES",
      description: "Skims the figure with subtle tailoring",
      backgroundColor: "#F4E8E0"
    },
    {
      image: sheathDress1,
      title: "SHEATH DRESSES",
      description: "Skims the figure with subtle tailoring",
      backgroundColor: "#F4E8E0"
    },
    {
      image: sheathDress2,
      title: "SHEATH DRESSES",
      description: "Skims the figure with subtle tailoring",
      backgroundColor: "#FCD8DB",
      showAvoidButton: true
    },
    {
      image: sheathDress3,
      title: "SHEATH DRESSES",
      description: "Skims the figure with subtle tailoring",
      backgroundColor: "#FCD8DB",
      showAvoidButton: true
    },
    {
      image: sheathDress4,
      title: "SHEATH DRESSES",
      description: "Skims the figure with subtle tailoring",
      backgroundColor: "#FCD8DB",
      showAvoidButton: true
    },
  ];

  const categories = [
    "Dresses", "Tops", "Dress", "Short", "Pant", "Blouse", "Shirt", "Bag"
  ];

  return (
    <div className="relative min-h-screen bg-[#FCF7F3] overflow-x-hidden">
      <Navbar navItems={navItems} />

      {/* Background Image Container */}
      <div className="absolute top-0 left-0 w-full h-[1000px] overflow-hidden">
        {/* Blurred Background Image */}
        <div 
          className="absolute top-[50px] left-1/2 -translate-x-1/2 w-[2080px] h-[1342px] opacity-30"
          style={{
            backgroundImage: `url(${bgImage})`,
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

      {/* Main Content */}
      <div className="relative z-10 pt-[40px]">
        <BodyContent />
        <FaceSummary text="The goal for dressing an hourglass is to highlight your curves and maintain the balance between your upper and lower body" />
        
        {/* Title and Categories Section */}
        <div className="max-w-[1448px] mx-auto px-4 mt-40">
          <h2 className="font-['Poppins'] font-bold text-[30px] leading-[40px] text-center mb-8">
            Dress to Impress: Your Go-To Guide for Effortless<br />
            Style Across Every Category
          </h2>

          {/* Category Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {categories.map((category, index) => (
              <button
                key={index}
                className={`w-[110px] h-[39px] rounded-[8px] font-['Poppins'] font-normal text-[16px] leading-[150%] tracking-[0%] flex items-center justify-center backdrop-blur-[36px]`}
                style={{ 
                  backgroundColor: category === "Dresses" ? '#22272A' : 'white',
                  color: category === "Dresses" ? 'white' : '#22272A',
                  boxShadow: '0px 0px 16px 0px #00000004'
                }}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <DressTypes dresses={dressTypes} />
        <div className="mt-32 md:mt-32">
          <NecklineQuestion text="Still have questions about your dressing style?" />
        </div>
      </div>

      {/* Products Section */}
      <div className="max-w-[1446px] mx-auto mt-32 md:mt-72 mb-20 md:mb-40 px-4 md:px-0">
          {/* Header and Button */}
          <div className="flex flex-col items-start mb-8">
            <h2 className="font-mollen font-bold text-[20px] md:text-[30px] leading-[24px] md:leading-[32px] tracking-[0%] mb-4 md:mb-6">
              Shop Your Perfect Palette
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

      <Footer className="relative z-10" />
    </div>
  );
};

export default Colors; 