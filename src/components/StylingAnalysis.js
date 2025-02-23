import React from "react";
import hourGlass from '../assets/hourglass.png';
import ovalRound from '../assets/oval-round.png';

const StylingAnalysis = () => {
  return (
    <div className="max-w-[1446px] mx-auto px-4 sm:px-6 mt-12">
      {/* Header Section */}
      <div className="px-4 md:px-6 pt-8 pb-4">
        <h1 className="text-xl md:text-2xl font-semibold text-gray-900">
          Best colors, silhouettes, and necklines
        </h1>
        <p className="text-sm text-gray-600 mt-1">
          Discover insights on your best colors, face shape, and body fit.
        </p>
        <button className="mt-4 bg-gray-900 text-white px-4 py-2 rounded-lg text-sm">
          Explore My Full Analysis
        </button>
      </div>

      {/* Cards Container - grid for desktop, flex-scroll for mobile */}
      <div className="flex md:grid md:grid-cols-3 overflow-x-auto md:overflow-visible gap-4 px-4 md:px-6 pb-6">
        {/* Card 1 */}
        <div className="min-w-[340px] md:min-w-0 h-[160px] md:h-[240px] rounded-2xl overflow-hidden relative flex shrink-0 md:shrink"
             style={{ 
               background: 'rgba(252, 247, 243, 1)',
               backdropFilter: 'blur(36.56px)'
             }}>
          {/* Image container */}
          <div className="w-[160px] md:w-[240px] h-full overflow-hidden">
            <img 
              src={hourGlass} 
              alt="Hourglass body shape" 
              className="h-full w-full object-cover object-[center_20%] scale-[2.5]"
            />
          </div>
          
          {/* Content container */}
          <div className="flex-1 relative">
            <div className="absolute right-3 top-1/2 -translate-y-1/2 
                        w-[180px] md:w-[240px] p-3 md:p-4 rounded-xl
                        text-center"
                 style={{ 
                   background: 'rgba(0, 0, 0, 0.06)',
                   backdropFilter: 'blur(35.87px)',
                   boxShadow: '0px 0px 15.94px 0px rgba(0, 0, 0, 0.01)'
                 }}>
              <h3 className="font-medium text-gray-900">Hourglass</h3>
              <p className="text-sm text-gray-600">Your Body Shape Analysis</p>
              <button className="mt-2 bg-gray-700/90 text-white text-sm px-3 py-1.5 md:px-4 md:py-1.5 rounded-lg mx-auto">
                Click into Dashboard
              </button>
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="min-w-[340px] md:min-w-0 h-[160px] md:h-[240px] rounded-2xl overflow-hidden relative flex shrink-0 md:shrink"
             style={{ 
               background: 'rgba(252, 247, 243, 1)',
               backdropFilter: 'blur(36.56px)'
             }}>
          <div className="w-[160px] md:w-[240px] h-full overflow-hidden">
            <img 
              src={ovalRound} 
              alt="Oval face shape" 
              className="h-full w-full object-cover object-center scale-150"
            />
          </div>
          
          <div className="flex-1 relative">
            <div className="absolute right-3 top-1/2 -translate-y-1/2 
                        w-[180px] md:w-[240px] p-3 md:p-4 rounded-xl
                        text-center"
                 style={{ 
                   background: 'rgba(0, 0, 0, 0.06)',
                   backdropFilter: 'blur(35.87px)',
                   boxShadow: '0px 0px 15.94px 0px rgba(0, 0, 0, 0.01)'
                 }}>
              <h3 className="font-medium text-gray-900">Oval Round</h3>
              <p className="text-sm text-gray-600">Your Face Shape Analysis</p>
              <button className="mt-2 bg-gray-700/90 text-white text-sm px-3 py-1.5 md:px-4 md:py-1.5 rounded-lg mx-auto">
                Click into Dashboard
              </button>
            </div>
          </div>
        </div>

        {/* Card 3 */}
        <div className="min-w-[340px] md:min-w-0 h-[160px] md:h-[240px] rounded-2xl overflow-hidden relative flex shrink-0 md:shrink"
             style={{ 
               background: 'rgba(252, 247, 243, 1)',
               backdropFilter: 'blur(36.56px)'
             }}>
          <div className="w-[160px] md:w-[240px] h-full overflow-hidden">
            <img 
              src={ovalRound} 
              alt="Cool summer" 
              className="h-full w-full object-cover object-center scale-150"
            />
          </div>
          
          <div className="flex-1 relative">
            <div className="absolute right-3 top-1/2 -translate-y-1/2 
                        w-[180px] md:w-[240px] p-3 md:p-4 rounded-xl
                        text-center"
                 style={{ 
                   background: 'rgba(0, 0, 0, 0.06)',
                   backdropFilter: 'blur(35.87px)',
                   boxShadow: '0px 0px 15.94px 0px rgba(0, 0, 0, 0.01)'
                 }}>
              <h3 className="font-medium text-gray-900">Cool Summer</h3>
              <p className="text-sm text-gray-600">Your Seasonal Color Analysis</p>
              <button className="mt-2 bg-gray-700/90 text-white text-sm px-3 py-1.5 md:px-4 md:py-1.5 rounded-lg mx-auto">
                Click into Dashboard
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StylingAnalysis;
