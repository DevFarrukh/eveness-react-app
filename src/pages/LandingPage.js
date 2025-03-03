import React from "react";
import Navbar from "../components/Navbar";
import LpHero from "../components/LpHero";
import HeroBanner from "../components/HeroBanner"; // Import the new component
import Footer from "../components/Footer";
import lpVideo from "../assets/lp-video.mp4"; 
import OnboardingSteps from "../components/OnboardingSteps"; // Add this import
import TechnologySection from "../components/TechnologySection";
import HouseOfSymmetry from "../components/HouseOfSymmetry";
import CollectionPreview from "../components/CollectionPreview";
import TestimonialSlider from "../components/TestimonialSlider";
import JoinEvenessHero from "../components/JoinEvenessHero";
import DashboardPreview from "../components/DashboardPreview";

const LandingPage = () => {
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
    const handleUpload = () => {
        console.log("Upload button clicked");
    };
    const handleTakePhoto = () => {
        console.log("Take Photo button clicked");
    };  
    const handleGallerySelect = () => {
        console.log("Choose from Gallery button clicked");
    };
    const handleViewAll = () => {
        console.log("View All Photos button clicked");
    };
    
    const landingPageNavItems = [
        { label: "Login", path: "/login" },
        { label: "Get Started", path: "/signup"}
    ];

    return (
        <div>
            {/* Video Background Section */}
            <div style={{ position: 'relative' }}>
                <div style={{ 
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '200vh',
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
                            objectFit: 'cover'
                        }}
                    >
                        <source src={lpVideo} type="video/mp4" />
                    </video>
                    <div style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        background: '#FCF7F375',
                        backdropFilter: 'blur(108.0999984741211px)',
                        WebkitBackdropFilter: 'blur(108.0999984741211px)', // For Safari support
                    }}></div>
                    {/* Add bottom fade gradient */}
                    <div style={{
                        position: 'absolute',
                        bottom: 0,
                        left: 0,
                        width: '100%',
                        height: '100%', // Full height
                        background: 'linear-gradient(to bottom, rgba(252, 247, 243, 0) 0%, rgba(252, 247, 243, 0.0) 50%, var(--Oat-Milk, #FCF7F3) 85%)',
                        zIndex: 2
                    }}></div>
                </div>

                {/* Content overlaid on video */}
                <div style={{ position: 'relative', zIndex: 1 }}>
                    <Navbar navItems={landingPageNavItems} />
                    <LpHero />
                    <HeroBanner />
                </div>
            </div>

            {/* Rest of the Components */}
            <div style={{ 
                background: 'var(--Oat-Milk, #FCF7F3)',
                position: 'relative'
            }}>
                <OnboardingSteps />
                <TechnologySection />
                <HouseOfSymmetry />
                
                <div>
                    <CollectionPreview 
                        title="Designed by our Team to Accentuate your Figure"
                        subtitle="A glimpse into our collection"
                        buttons={[
                            {
                                text: "See All",
                                onClick: () => handleUpload(),
                                color: "bg-[#22272A]",
                                textColor: "text-[#FFFFFF]"
                            },
                            {
                                text: "Dresses",
                                onClick: () => handleTakePhoto(),
                                color: "bg-[#FFFFFF]",
                                textColor: "text-[#22272A]"
                            },
                            {
                                text: "Short",
                                onClick: () => handleGallerySelect(),
                                color: "bg-[#FFFFFF]",
                                textColor: "text-[#22272A]"
                            },
                            {
                                text: "Pant",
                                onClick: () => handleViewAll(),
                                color: "bg-[#FFFFFF]",
                                textColor: "text-[#22272A]"
                            }
                        ]}
                        products={products}
                    />
                </div>
                <DashboardPreview />
                <TestimonialSlider />
                <JoinEvenessHero />
            <Footer />
            </div>
        </div>
    );
};

export default LandingPage;
