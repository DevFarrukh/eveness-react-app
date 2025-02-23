import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import StylingAnalysis from "../components/StylingAnalysis";
import CollectionPreview from "../components/CollectionPreview";
import MarketplacePreview from "../components/MarketplacePreview";
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
  const handleCollectionClick = () => {
    console.log("View Full Collection button clicked");
  };
  return (
    <div className="relative min-h-screen">
      {/* Video Background */}
      <div className="fixed top-0 left-0 w-full h-screen">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src={heroVideo} type="video/mp4" />
        </video>
        
        {/* Single unified blur + fade layer */}
        <div 
          className="absolute inset-0 backdrop-blur-[40px]"
          style={{
            background: 'linear-gradient(to bottom, rgba(252, 247, 243, 0.4) 0%, rgba(252, 247, 243, 0.6) 50%, rgba(252, 247, 243, 0.95) 90%, rgba(252, 247, 243, 1) 100%)'
          }}
        ></div>
      </div>

      {/* Content */}
      <div className="relative z-10">
        <Navbar />
        <div className="px-4 md:px-1 mt-16 max-w-[1400px] mx-auto space-y-8 md:space-y-16 pb-16">
          <Hero />
          <StylingAnalysis />
        </div>
      </div>

      {/* Rest of the content */}
      <div className="relative z-10 bg-[rgba(252,247,243,1)]">
        <div className="px-4 md:px-1 max-w-[1400px] mx-auto space-y-8 md:space-y-16 py-16">
          <CollectionPreview 
            title="Designed by our Team to Accentuate your Figure"
            subtitle="A glimpse into our collection"
            buttons={[
              {
                text: "View Full Collection",
                onClick: () => handleCollectionClick()
              }
            ]}
            products={products}
          />     
          <MarketplacePreview />
          <EvenessGPT />
          <ForAnyOccasion />
        </div>
        <Footer />
      </div>
    </div>

    
  );
};

export default Home;
