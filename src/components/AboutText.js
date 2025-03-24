const AboutText = () => {
  return (
    <div className="w-[358px] sm:w-[600px] md:w-[720px] lg:w-[800px] xl:w-[904px] h-auto xl:h-[150px] mx-auto mt-[40px] sm:mt-[60px] md:mt-[70px] xl:mt-[80px] px-4 xl:px-0">
      <p className="font-['Poppins'] font-medium text-[24px] sm:text-[28px] md:text-[32px] lg:text-[36px] xl:text-[40px] leading-[32px] sm:leading-[36px] md:leading-[40px] lg:leading-[45px] xl:leading-[50px] text-center text-black">
        At Eveness, we bring that magic to life.
        <span className="block xl:hidden"> </span>
        <br className="hidden xl:block" />
        We design pieces that don't just look good
        <span className="block xl:hidden"> </span>
        <br className="hidden xl:block" />
        but make you feel like the star you are
      </p>
    </div>
  );
};

export default AboutText; 