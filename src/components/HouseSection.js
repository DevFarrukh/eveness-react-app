import React from "react";
import { motion } from "framer-motion";

const HouseSection = ({ imageOnRight, title, description, buttonText, image }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ margin: "-100px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      exit={{ opacity: 0, y: -50 }}
      className="py-8 md:py-16 w-full overflow-hidden"
    >
      <div className="max-w-[1000px] mx-auto px-4 md:px-8 w-full">
        <div className={`flex flex-col-reverse md:flex-row items-center ${imageOnRight ? 'justify-end' : 'md:flex-row-reverse justify-start'} gap-8 md:gap-12`}>
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: imageOnRight ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            exit={{ opacity: 0, x: imageOnRight ? -50 : 50 }}
            className="w-full md:max-w-[380px] mt-8 md:mt-0 text-left"
          >
            <h2 className="text-[32px] md:text-3xl font-bold mb-6">
              {title.split('\n').map((line, i) => (
                <React.Fragment key={i}>
                  {line}
                  {i < title.split('\n').length - 1 && <br />}
                </React.Fragment>
              ))}
            </h2>
            <p className="text-[#797979] mb-6 md:mb-12 leading-[20px] text-base font-normal max-w-[320px]">
              {description}
            </p>
            <button className="bg-[#181A1B] text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors text-base w-[80%] md:w-auto text-left">
              {buttonText.split('\n').map((line, i) => (
                <React.Fragment key={i}>
                  {line}
                  {i < buttonText.split('\n').length - 1 && <br />}
                </React.Fragment>
              ))}
            </button>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: imageOnRight ? 50 : -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ margin: "-100px" }}
            transition={{ duration: 0.6 }}
            exit={{ opacity: 0, x: imageOnRight ? 50 : -50 }}
            className="w-full md:w-auto"
          >
            <div className="rounded-2xl overflow-hidden shadow-xl h-[300px] sm:h-[450px] md:h-[627px] w-full md:w-[515px]">
              <img 
                src={image} 
                alt="Section Image" 
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default HouseSection; 