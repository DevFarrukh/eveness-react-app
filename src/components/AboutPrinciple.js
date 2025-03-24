import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const AboutPrinciple = ({ imageOnRight, title, description, image }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { 
    once: false,
    margin: "-10% 0px -10% 0px"
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.5, when: "beforeChildren" } }
  };

  const contentVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.2 } }
  };

  const imageVariants = {
    hidden: { opacity: 0, x: imageOnRight ? 50 : -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6, delay: 0.3 } }
  };

  return (
    <motion.div 
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className="w-[358px] sm:w-[600px] md:w-[800px] lg:w-[950px] xl:w-[1512px] h-auto xl:h-[982px] mx-auto relative bg-[#FCF7F3] px-4 xl:px-0 overflow-x-hidden"
    >
      {/* Blur effect background */}
      <motion.div 
        variants={contentVariants}
        className="absolute w-[358px] sm:w-[600px] md:w-[800px] lg:w-[950px] xl:w-[1185px] h-[300px] xl:h-[469px] opacity-54 rounded-[1750px] z-0 left-1/2 -translate-x-1/2 top-[10%]"
        style={{ 
          background: 'rgba(239, 222, 211, 0.8)',
          filter: 'blur(60px)',
          borderRadius: '1750px',
        }}
      />

      {/* Mobile Layout */}
      <div className="xl:hidden relative flex flex-col gap-6 z-10 mt-10">
        <motion.div 
          variants={imageVariants}
          className="w-full sm:w-[500px] md:w-[600px] lg:w-[700px] h-[309px] sm:h-[400px] md:h-[450px] lg:h-[500px] rounded-[16px] overflow-hidden mx-auto"
        >
          <img 
            src={image} 
            alt={title} 
            className="w-full h-full object-cover"
          />
        </motion.div>
        <motion.div 
          variants={contentVariants}
          className="w-full sm:w-[500px] md:w-[600px] lg:w-[700px] flex flex-col text-left mx-auto"
        >
          <h3 className="font-['Roboto'] font-bold text-[28px] sm:text-[30px] md:text-[32px] lg:text-[34px] leading-[32px] sm:leading-[34px] md:leading-[36px] lg:leading-[38px] mb-4">
            {title}
          </h3>
          <p className="font-['Poppins'] font-normal text-[16px] sm:text-[17px] md:text-[18px] lg:text-[19px] leading-[24px] sm:leading-[26px] md:leading-[28px] lg:leading-[30px] text-[#797979] whitespace-pre-line">
            {description}
          </p>
        </motion.div>
      </div>

      {/* Desktop Layout - only show at xl breakpoint */}
      <div className="hidden xl:block">
        <div className="absolute w-[1269px] h-[627px] top-[178px] left-[121.5px] flex gap-[143px] z-10">
          {!imageOnRight ? (
            <>
              <motion.div 
                variants={imageVariants}
                className="w-[515px] h-[627px] rounded-[16px] overflow-hidden"
              >
                <img 
                  src={image} 
                  alt={title} 
                  className="w-full h-full object-cover"
                />
              </motion.div>
              <motion.div 
                variants={contentVariants}
                className="flex-1 flex flex-col justify-center"
              >
                <h3 className="font-['Roboto'] font-bold text-[36px] leading-[39px] mb-6">
                  {title}
                </h3>
                <p className="font-['Poppins'] font-normal text-[20px] leading-[24px] text-[#797979] whitespace-pre-line">
                  {description}
                </p>
              </motion.div>
            </>
          ) : (
            <>
              <motion.div 
                variants={contentVariants}
                className="flex-1 flex flex-col justify-center"
              >
                <h3 className="font-['Roboto'] font-bold text-[36px] leading-[39px] mb-6">
                  {title}
                </h3>
                <p className="font-['Poppins'] font-normal text-[20px] leading-[24px] text-[#797979] whitespace-pre-line">
                  {description}
                </p>
              </motion.div>
              <motion.div 
                variants={imageVariants}
                className="w-[515px] h-[627px] rounded-[16px] overflow-hidden"
              >
                <img 
                  src={image} 
                  alt={title} 
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default AboutPrinciple; 