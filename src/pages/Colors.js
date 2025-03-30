import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ColorsContent from '../components/ColorsContent';
import ColorGrid from '../components/ColorGrid';
import bgImage from '../assets/face-picture-background.jpeg';
import FaceSummary from '../components/FaceSummary';
import FabricGrid from '../components/FabricGrid';
import woolImage from '../assets/structured-wool.jpeg';
import silkImage from '../assets/luxurious-silk.png';
import velvetImage from '../assets/rich-velvet.jpeg';
import NecklineQuestion from '../components/NecklineQuestion';
import ProductCardNarrow from '../components/ProductCardNarrow';
import { marketplaceProducts } from '../data/mockData';

const Colors = () => {
  const navItems = [
    { label: "Home", path: "/home" },
    { label: "Dashboard", path: "/", hasDropdown: true },
    { label: "Shop", path: "/shop" },
    { label: "Magazine", path: "/magazine" },
    { label: "Account", path: "/account" },
    { label: "Cart", path: "/cart" }
  ];

  const neutralColors = [
    { color: '#000000', name: 'BLACK' },
    { color: '#484848', name: 'CHARCOAL GREY' },
    { color: '#000035', name: 'DEEP NAVY' },
    { color: '#8C92AC', name: 'COOL GREY' },
    { color: '#DADFE1', name: 'ICY GRAY', textColor: '#000000' },
    { color: '#F8F8FF', name: 'FROST WHITE', textColor: '#000000' },
    { color: '#A9A9A9', name: 'PEWTER' },
    { color: '#708090', name: 'SLATE GREY' },
    { color: '#3B2F2F', name: 'DARK ESPRESSO' },
    { color: '#0A0C11', name: 'BLUE-BLACK' }
  ];

  const bestColors = [
    { name: "CRIMSON RED", color: "#DC143C" },
    { name: "ROYAL BLUE", color: "#4169E1" },
    { name: "BRIGHT WHITE", color: "#FFFFFF", textColor: '#000000' },
    { name: "HOT PINK", color: "#FF69B4" },
    { name: "TURQUOISE", color: "#40E0D0", textColor: '#000000' },
    { name: "TRUE RED", color: "#FF0000" },
    { name: "BRIGHT NAVY", color: "#1974D2" },
    { name: "DEEP ROSE", color: "#C21E56" },
    { name: "EMERALD GREEN", color: "#50C878" },
    { name: "ELECTRIC PURPLE", color: "#BF00FF" },
    { name: "AMETHYST", color: "#9966CC" },
    { name: "RASPBERRY", color: "#E30B5D" },
    { name: "SAPPHIRE BLUE", color: "#0F52BA" },
    { name: "JADE GREEN", color: "#00A86B" },
    { name: "COBALT BLUE", color: "#0047AB" },
  ];

  const colorsToAvoid = [
    { name: "BEIGE", color: "#F5F5DC", textColor: '#000000' },
    { name: "ORANGE", color: "#FFA500", textColor: '#000000' },
    { name: "GOLD", color: "#FFD700", textColor: '#000000' },
    { name: "CAMEL", color: "#C19A6B", textColor: '#000000' },
    { name: "TERRACOTTA", color: "#E2725B", textColor: '#000000' },
    { name: "MUSTARD YELLOW", color: "#FFDB58", textColor: '#000000' },
    { name: "WARM BROWN", color: "#964B00" },
    { name: "PEACH", color: "#FFE5B4" , textColor: '#000000'},
    { name: "SALMON PINK", color: "#FF9999" , textColor: '#000000'},
    { name: "MAROON", color: "#800000" }
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
        <ColorsContent />
        <FaceSummary text="You are a deep winter by your high contrast and cool undertones" />
        <div className="mt-24 md:mt-40">
          <ColorGrid 
            title="Best Neutrals"
            description="Cool neutrals like black, charcoal, and white enhance your sharp contrast."
            colors={neutralColors}
          />
          <ColorGrid 
            title="Best Colors"
            description="Dark, cool, and rich tones like navy blue, forest green, and burgundy flatter your palette."
            colors={bestColors}
          />
          <ColorGrid 
            title="Colors to Avoid"
            description="Light, warm, muted tones and overly bright shades may wash you out or feel overpowering. If you want to wear these be careful with fabric selection and aim to wear them further from your face."
            colors={colorsToAvoid}
          />
        </div>
        <div className="text-center mb-24 mt-40">
          <h2 className="font-['Poppins'] font-bold text-[32px] leading-[40px] tracking-[0%] mb-2">
            Best Fabrics
          </h2>
          <p className="font-['Poppins'] font-medium text-[16px] leading-[20px] tracking-[0%] text-[#797979] text-center max-w-[600px] mx-auto px-8">
            Structured and rich materials like wool, velvet, satin, and leather work best, while muted, warm, or overly soft textures should be avoided.
          </p>
        </div>
        <FabricGrid 
          title="DRESSES"
          fabrics={[
            { name: "STRUCTURED WOOL", image: woolImage },
            { name: "LUXURIOUS SILK", image: silkImage },
            { name: "RICH VELVET", image: velvetImage }
          ]}
        />
         <FabricGrid 
          title="KNITWEAR"
          fabrics={[
            { name: "LUXURIOUS SILK", image: silkImage },
            { name: "STRUCTURED WOOL", image: woolImage },
            { name: "RICH VELVET", image: velvetImage }
          ]}
        />
        <FabricGrid 
          title="COATS"
          fabrics={[
            { name: "STRUCTURED WOOL", image: woolImage },
            { name: "RICH VELVET", image: velvetImage },
            { name: "LUXURIOUS SILK", image: silkImage },
          ]}
        />
        <FabricGrid 
          title="JACKETS"
          fabrics={[
            { name: "STRUCTURED WOOL", image: woolImage },
            { name: "LUXURIOUS SILK", image: silkImage },
            { name: "RICH VELVET", image: velvetImage },
          ]}
        />
        <FabricGrid 
          title="SKIRTS"
          fabrics={[
            { name: "LUXURIOUS SILK", image: silkImage },
            { name: "STRUCTURED WOOL", image: woolImage },
            { name: "RICH VELVET", image: velvetImage },
          ]}
        />
        <div className="mt-32 md:mt-48">
          <NecklineQuestion text="Still have questions about your colors?" />
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