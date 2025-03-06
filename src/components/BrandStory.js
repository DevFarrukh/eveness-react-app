import React from "react";
import BrandStorySection from "./BrandStorySection";
import { brandStorySections } from "../data/mockData";

const BrandStory = () => {
  const sections = brandStorySections;

  return (
    <div className="">
      {sections.map((section, index) => (
        <BrandStorySection
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

export default BrandStory;