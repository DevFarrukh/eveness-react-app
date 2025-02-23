import React from 'react';
import dashboardPreview from "../assets/dashboardpreview.jpeg";
const DashboardPreview = () => {
  return (
    <div className="w-full py-24  mt-32">
      <div className="max-w-[1400px] mx-auto px-4 md:px-1 text-center">
        <h2 className=" text-[40px] leading-[42px] font-bold mb-8">The Dashboard <br />
        By Our Fashion Design and Styling Team</h2>
        <p className="text-gray-600 mb-8">
          Learn The Colors, Silhouettes, and Necklines That Best Accentuate You
        </p>
        <button className="bg-black text-white px-6 py-2 rounded-[10px] hover:bg-gray-800 transition-colors">
          Begin My Journey
        </button>
      </div>
      
      <div className="mt-12">
        <img 
          src={dashboardPreview} 
          alt="Dashboard Interface Preview" 
          className="w-full h-[500px] object-cover mx-auto shadow-xl"
        />
      </div>
    </div>
  );
};

export default DashboardPreview; 