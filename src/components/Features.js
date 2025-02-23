import React from "react";

const Features = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-900">Why Choose EVENÈSS?</h2>
        <p className="text-gray-600 mt-4 max-w-xl mx-auto">
          We provide outstanding solutions to boost your brand’s success.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 max-w-6xl mx-auto px-6">
        <div className="p-6 shadow-lg rounded-lg bg-gray-50 text-center">
          <h3 className="text-2xl font-semibold text-gray-900">High Quality</h3>
          <p className="text-gray-600 mt-2">We ensure top-notch quality in every project.</p>
        </div>
        <div className="p-6 shadow-lg rounded-lg bg-gray-50 text-center">
          <h3 className="text-2xl font-semibold text-gray-900">Expert Team</h3>
          <p className="text-gray-600 mt-2">Our professionals bring years of experience.</p>
        </div>
        <div className="p-6 shadow-lg rounded-lg bg-gray-50 text-center">
          <h3 className="text-2xl font-semibold text-gray-900">24/7 Support</h3>
          <p className="text-gray-600 mt-2">We are available anytime you need assistance.</p>
        </div>
      </div>
    </section>
  );
};

export default Features;