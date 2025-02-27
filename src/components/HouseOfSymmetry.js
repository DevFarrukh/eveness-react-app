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
      title: "Personalized \nFashion Dashboard",
      description: "Learn the best colors, silhouettes, and necklines based on your Color Analysis, Face, and Body Shape. ",
      buttonText: "Explore Color Analysis and \nAccentuate my Figure",
      image: secondImage
    },
    {
      imageOnRight: true,
      title: "Eveness \nMarketplace",
      description: "The Eveness Algorithm expanded to more than the collection. Shop from a variety of brands with our help pieces that highlight you.",
      buttonText: "Access My Marketplace",
      image: thirdImage
    },
    {
      imageOnRight: false,
      title: "Eveness GPT",
      description: "The Eveness GPT is your on the go fashion stylist. Find out whether a garment matches your features and how to style it.",
      buttonText: "My Personal AI Stylist",
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