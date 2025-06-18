import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import StylingAnalysis from "../components/StylingAnalysis";
import CollectionPreview from "../components/CollectionPreview";
import EvenessGPT from "../components/EvenessGPT";
import MarketplacePreview from "../components/MarketplacePreview";
import Footer from "../components/Footer";
import heroVideo from "../assets/hero-bg-video.mp4"; // Use the same video as Hero.js
import { products, marketplaceProducts, homePageNavItems } from "../data/mockData";

const Home = () => {

  const handleCollectionClick = () => {
    console.log("View Full Collection button clicked");
  };
  return (

<div style={{ background: '#FCF7F3' }}>
            {/* Video Background Section */}
            <div style={{ position: 'relative' }}>
                <div style={{ 
                    position: 'absolute',
                    top: '-130px',
                    left: 0,
                    right: 0,
                    bottom: 0,
                    width: '100%',
                    height: '100vh',
                    minHeight: '1418px',
                    overflow: 'hidden',
                    zIndex: 0
                }}>
                    <video
                        autoPlay
                        loop
                        muted
                        playsInline
                        style={{
                            position: 'absolute',
                            top: '50%',
                            left: '50%',
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover',
                            transform: 'translate(-50%, -50%) scale(1.1)',
                            filter: 'blur(108.1px)',
                            minWidth: '100%',
                            minHeight: '100%'
                        }}
                    >
                        <source src={heroVideo} type="video/mp4" />
                    </video>
                    <div style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        width: '100%',
                        height: '100%',
                        background: 'linear-gradient(180deg, rgba(252, 247, 243, 0.56) 0%, rgba(252, 247, 243, 0.56) 85%, rgba(252, 247, 243, 0.75) 92%, rgba(252, 247, 243, 0.9) 96%, #FCF7F3 100%)',
                        zIndex: 1
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
                background: '#FCF7F3',
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
              <MarketplacePreview />
              <Footer />
            </div>
        </div>
  );
};

export default Home;
