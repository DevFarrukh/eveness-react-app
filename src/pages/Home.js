import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import StylingAnalysis from "../components/StylingAnalysis";
import CollectionPreview from "../components/CollectionPreview";
import EvenessGPT from "../components/EvenessGPT";
import ForAnyOccasion from "../components/ForAnyOccasion";
import Footer from "../components/Footer";
import heroVideo from "../assets/hero-bg-video.mp4"; // Use the same video as Hero.js

const Home = () => {
  const products = [
    {
      image: require("../assets/dress1.png"),
      match: "90%",
      name: "Short Dress with Bows",
      price: "$660",
    },
    {
      image: require("../assets/dress2.png"),
      match: "85%",
      name: "Ribbed Godet Dress",
      price: "$660",
    },
    {
      image: require("../assets/dress3.png"),
      match: "92%",
      name: "Starpless Midi Dress",
      price: "$660",
    },
    {
      image: require("../assets/dress4.png"),
      match: "76%",
      name: "Draped Midi Dress",
      price: "$660",
    },
    {
      image: require("../assets/dress4.png"),
      match: "76%",
      name: "Draped Midi Dress",
      price: "$660",
    },
  ];

  const marketplaceProducts = [
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

  const homePageNavItems = [
    { label: "Home", path: "/home" },
    { label: "Dashboard", path: "/dashboard"},
    { label: "Shop", path: "/shop"},
    { label: "Magazine", path: "/magazine"},
    { label: "Account", path: "/account"},
    { label: "Cart", path: "/cart"},
  ];

  const handleCollectionClick = () => {
    console.log("View Full Collection button clicked");
  };
  return (

<div style={{ background: '#FCF7F3' }}>
            {/* Video Background Section */}
            <div style={{ position: 'relative' }}>
                <div style={{ 
                    position: 'absolute',
                    top: '-218px',
                    left: '-503px',
                    height: '1418px',
                    overflow: 'hidden',
                    zIndex: 0
                }}>
                    <video
                        autoPlay
                        loop
                        muted
                        playsInline
                        style={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover',
                            filter: 'blur(108.1px)',
                            transform: 'scale(1.1)'
                        }}
                    >
                        <source src={heroVideo} type="video/mp4" />
                    </video>
                    <div style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        background: 'linear-gradient(180deg, rgba(252, 247, 243, 0) 0%, rgba(252, 247, 243, 0) 95%, #FCF7F3 98%)'
                    }}></div>
                </div>

                {/* Content overlaid on video */}
                <div style={{ position: 'relative', zIndex: 1 }}>
                    <Navbar navItems={homePageNavItems} />
                    <Hero />
                    <StylingAnalysis />
                </div>
            </div>

            {/* Rest of the Components */}
            <div style={{ 
                background: '#FCF7F3',  // Changed to Oat Milk color
                position: 'relative'
            }}>
              <div>
                <CollectionPreview 
                    title="Designed by our Team to Accentuate your Figure"
                    subtitle="A glimpse into our collection"
                    buttons={[
                      {
                        text: "View Full Collection",
                        onClick: () => handleCollectionClick(),
                        color: "bg-[#22272A]",
                        textColor: "text-[#FFFFFF]"
                      }
                    ]}
                    products={products}
                  />     
                </div>
                
                <div>
                  <CollectionPreview 
                    title="The Marketplace"
                    subtitle="Our AI Algorithm Expanded"
                    buttons={[
                      {
                        text: "Visit Marketplace",
                        onClick: () => handleCollectionClick(),
                        color: "bg-[#22272A]",
                        textColor: "text-[#FFFFFF]"
                      }
                    ]}
                    products={marketplaceProducts}
                  />     
                </div>
              <EvenessGPT />
              <ForAnyOccasion />
              <Footer />
            </div>
        </div>
  );
};

export default Home;
