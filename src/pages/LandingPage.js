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
                            objectFit: 'cover',
                            filter: 'blur(15px)',
                            transform: 'scale(1.1)'
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
                        background: 'linear-gradient(180deg, rgba(252, 247, 243, 0.3) 0%, rgba(252, 247, 243, 0.6) 50%, rgba(239, 222, 211, 0.9) 100%)'
                    }}></div>
                </div>

                {/* Content overlaid on video */}
                <div style={{ position: 'relative', zIndex: 1 }}>
                    <Navbar />
                    <LpHero />
                    <HeroBanner />
                </div>
            </div>

            {/* Rest of the Components */}
            <div style={{ 
                background: 'linear-gradient(180deg, rgba(239, 222, 211, 0.9) 0%, rgba(252, 247, 243, 1) 20%)',
                position: 'relative'
            }}>
                <OnboardingSteps />
                <TechnologySection />
                <HouseOfSymmetry />
                
                <div>
                    <CollectionPreview 
                        title="Your Personal Style Journey"
                        subtitle="Discover your unique style"
                        buttons={[
                            {
                                text: "Upload More Photos",
                                onClick: () => handleUpload()
                            },
                            {
                                text: "Take Photo",
                                onClick: () => handleTakePhoto()
                            },
                            {
                                text: "Choose from Gallery",
                                onClick: () => handleGallerySelect()
                            },
                            {
                                text: "View All Photos",
                                onClick: () => handleViewAll()
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
