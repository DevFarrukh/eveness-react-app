import React from "react";
import HouseSection from "../components/HouseSection";
import wardrobeImage from "../assets/wardrobe-interface.jpeg";
import secondImage from "../assets/wardrobe-interface2.jpeg"; // You'll need these images
import thirdImage from "../assets/wardrobe-interface3.jpeg";
import fourthImage from "../assets/wardrobe-interface4.jpeg";

const HouseOfSymmetry   = () => {
  const sections = [
    {
      imageOnRight: true,
      title: "The House of\nSymmetry",
      description: "Our story starts with a simple question: Who? Once we know whom we're designing for, we craft the perfect silhouette to balance and accentuate their shape.",
      buttonText: "Accentuate My Figure",
      image: wardrobeImage
    },
    {
      imageOnRight: false,
      title: "The House of\nStyle",
      description: "Discover your unique style identity through our curated collection of fashion pieces that speak to your personality.",
      buttonText: "Find My Style",
      image: secondImage
    },
    {
      imageOnRight: true,
      title: "The House of\nElegance",
      description: "Every detail matters in creating a look that's uniquely yours. We help you master the art of refined fashion.",
      buttonText: "Explore Elegance",
      image: thirdImage
    },
    {
      imageOnRight: false,
      title: "The House of\nConfidence",
      description: "When your outfit perfectly matches your vision, confidence naturally follows. Let us help you find that perfect match.",
      buttonText: "Boost Confidence",
      image: fourthImage
    }
  ];

  return (
    <div className="">
      {sections.map((section, index) => (
        <HouseSection
          key={index}
          imageOnRight={section.imageOnRight}
          title={section.title}
          description={section.description}
          buttonText={section.buttonText}
          image={section.image}
        />
      ))}
    </div>
  );
};

export default HouseOfSymmetry;