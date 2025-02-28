import React, { useState } from 'react';

const TestimonialSlider = () => {
  const testimonials = [
    {
      quote: "Our mission is to help people accentuate their beauty through fashion and technology, not to deceive customers into clearing our inventory. If we feel a garment of ours doesn't work with your figure or color analysis, our algorithm advises you not to purchase it. Each garment is crafted with the purpose of helping people accentuate their favorite parts of themselves. This can only happen if we start with you.",
      author: "Amir Razipour",
      title: "CEO and Founder"
    },
    {
        quote: "Our mission is to help people accentuate their beauty through fashion and technology, not to deceive customers into clearing our inventory. If we feel a garment of ours doesn't work with your figure or color analysis, our algorithm advises you not to purchase it. Each garment is crafted with the purpose of helping people accentuate their favorite parts of themselves. This can only happen if we start with you.",
        author: "Farrukh Ahmed",
        title: "CTO and Co-Founder"
      },
    // Add more testimonials here
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  return (
    <div className="w-full py-24 mt-32 ">
      <div className="max-w-[1400px] mx-auto px-4 md:px-1 text-center">
        <h2 className="text-[24px] md:text-[32px] leading-[32px] md:leading-[40px] font-[700] text-center tracking-[0%] mb-6 md:mb-4">
          Reinstate Innovation in the Fashion Industry with Eveness
        </h2>
        <p className="text-gray-600 mb-8 md:mb-4 text-sm md:text-base">The Most User-Focused Fashion Home</p>
        <div className="hidden md:flex justify-center mb-16 md:mb-32">
          <button className="bg-black text-white px-6 py-2 rounded-[10px] hover:bg-gray-800 transition-colors">
            Begin My Journey
          </button>
        </div>
        <div className="relative max-w-4xl mx-auto">
          <button 
            className="absolute left-0 top-1/2 transform -translate-y-1/2 px-2"
            onClick={() => setCurrentSlide(prev => (prev > 0 ? prev - 1 : testimonials.length - 1))}
          >
            <span className="text-4xl font-thin" style={{ fontFamily: 'sans-serif' }}>‹</span>
          </button>
          
          <div className="px-8 md:px-16">
            <p className="text-base md:text-lg mb-6 md:mb-8 leading-relaxed">
              "{testimonials[currentSlide].quote}"
            </p>
            <p className="font-bold text-sm md:text-base">{testimonials[currentSlide].author}</p>
            <p className="text-gray-600 text-xs md:text-base">{testimonials[currentSlide].title}</p>
          </div>

          <button 
            className="absolute right-0 top-1/2 transform -translate-y-1/2 px-2"
            onClick={() => setCurrentSlide(prev => (prev < testimonials.length - 1 ? prev + 1 : 0))}
          >
            <span className="text-4xl font-thin" style={{ fontFamily: 'sans-serif' }}>›</span>
          </button>
        </div>

        <div className="flex justify-center gap-2 mt-6 md:mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`h-1.5 md:h-2 w-1.5 md:w-2 rounded-full ${
                currentSlide === index ? 'bg-black' : 'bg-gray-300'
              }`}
              onClick={() => setCurrentSlide(index)}
            />
          ))}
        </div>
      </div>
      <div className="flex justify-center mt-12 md:hidden">
        <button className="bg-black text-white px-6 py-2 rounded-[10px] hover:bg-gray-800 transition-colors">
          Begin My Journey
        </button>
      </div>
    </div>
  );
};

export default TestimonialSlider; 