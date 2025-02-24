import React from "react";
import hourGlass from '../assets/hourglass.png';
import ovalRound from '../assets/oval-round.png';

const StylingAnalysis = () => {
  return (
    <div className="max-w-[1446px] mx-auto px-2 sm:px-6 mt-8 sm:mt-12">
      {/* Header Section */}
      <div className="px-3 sm:px-6 pt-6 sm:pt-8 pb-4">
        <h1 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-900">
          Best colors, silhouettes, and necklines
        </h1>
        <p className="text-xs sm:text-sm text-gray-600 mt-1">
          Discover insights on your best colors, face shape, and body fit.
        </p>
        <button className="mt-3 sm:mt-4 bg-gray-900 text-white px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg text-xs sm:text-sm">
          Explore My Full Analysis
        </button>
      </div>

      {/* Cards Container - improved mobile scrolling experience */}
      <div className="flex md:grid md:grid-cols-3 overflow-x-auto md:overflow-visible gap-3 sm:gap-4 px-3 sm:px-6 pb-6 
                      scrollbar-hide snap-x snap-mandatory">
        {/* Card 1 */}
        <div className="min-w-[280px] sm:min-w-[340px] md:min-w-0 h-[140px] sm:h-[160px] md:h-[240px] 
                      rounded-xl sm:rounded-2xl overflow-hidden relative flex shrink-0 md:shrink
                      snap-center"
             style={{ 
               background: 'rgba(252, 247, 243, 1)',
               backdropFilter: 'blur(36.56px)'
             }}>
          {/* Image container */}
          <div className="w-[140px] sm:w-[160px] md:w-[240px] h-full overflow-hidden">
            <img 
              src={hourGlass} 
              alt="Hourglass body shape" 
              className="h-full w-full object-cover object-[center_20%] scale-[2.5]"
            />
          </div>
          
          {/* Content container */}
          <div className="flex-1 relative">
            <div className="absolute right-2 sm:right-3 top-1/2 -translate-y-1/2 
                        w-[200px] sm:w-[180px] md:w-[240px] p-2 sm:p-3 md:p-4 rounded-lg sm:rounded-xl
                        text-center bg-[rgba(0,0,0,0.06)]"
                 style={{ 
                   backdropFilter: 'blur(35.87px)',
                   boxShadow: '0px 0px 15.94px 0px rgba(0, 0, 0, 0.01)'
                 }}>
              <h3 className="font-medium text-gray-900 text-sm sm:text-base">Hourglass</h3>
              <p className="text-xs sm:text-sm text-gray-600">Your Body Shape Analysis</p>
              <button className="mt-1.5 sm:mt-2 bg-gray-700/90 text-white text-xs sm:text-sm px-2 sm:px-3 py-1 sm:py-1.5 md:px-4 rounded-lg mx-auto">
                Click into Dashboard
              </button>
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="min-w-[280px] sm:min-w-[340px] md:min-w-0 h-[140px] sm:h-[160px] md:h-[240px] 
                      rounded-xl sm:rounded-2xl overflow-hidden relative flex shrink-0 md:shrink
                      snap-center"
             style={{ 
               background: 'rgba(252, 247, 243, 1)',
               backdropFilter: 'blur(36.56px)'
             }}>
          <div className="w-[140px] sm:w-[160px] md:w-[240px] h-full overflow-hidden">
            <img 
              src={ovalRound} 
              alt="Oval face shape" 
              className="h-full w-full object-cover object-center scale-150"
            />
          </div>
          
          <div className="flex-1 relative">
            <div className="absolute right-2 sm:right-3 top-1/2 -translate-y-1/2 
                        w-[200px] sm:w-[180px] md:w-[240px] p-2 sm:p-3 md:p-4 rounded-lg sm:rounded-xl
                        text-center bg-[rgba(0,0,0,0.06)]"
                 style={{ 
                   backdropFilter: 'blur(35.87px)',
                   boxShadow: '0px 0px 15.94px 0px rgba(0, 0, 0, 0.01)'
                 }}>
              <h3 className="font-medium text-gray-900 text-sm sm:text-base">Oval Round</h3>
              <p className="text-xs sm:text-sm text-gray-600">Your Face Shape Analysis</p>
              <button className="mt-1.5 sm:mt-2 bg-gray-700/90 text-white text-xs sm:text-sm px-2 sm:px-3 py-1 sm:py-1.5 md:px-4 rounded-lg mx-auto">
                Click into Dashboard
              </button>
            </div>
          </div>
        </div>

        {/* Card 3 */}
        <div className="min-w-[280px] sm:min-w-[340px] md:min-w-0 h-[140px] sm:h-[160px] md:h-[240px] 
                      rounded-xl sm:rounded-2xl overflow-hidden relative flex shrink-0 md:shrink
                      snap-center"
             style={{ 
               background: 'rgba(252, 247, 243, 1)',
               backdropFilter: 'blur(36.56px)'
             }}>
          <div className="w-[140px] sm:w-[160px] md:w-[240px] h-full overflow-hidden">
            <img 
              src={ovalRound} 
              alt="Cool summer" 
              className="h-full w-full object-cover object-center scale-150"
            />
          </div>
          
          <div className="flex-1 relative">
            <div className="absolute right-2 sm:right-3 top-1/2 -translate-y-1/2 
                        w-[200px] sm:w-[180px] md:w-[240px] p-2 sm:p-3 md:p-4 rounded-lg sm:rounded-xl
                        text-center bg-[rgba(0,0,0,0.06)]"
                 style={{ 
                   backdropFilter: 'blur(35.87px)',
                   boxShadow: '0px 0px 15.94px 0px rgba(0, 0, 0, 0.01)'
                 }}>
              <h3 className="font-medium text-gray-900 text-sm sm:text-base">Cool Summer</h3>
              <p className="text-xs sm:text-sm text-gray-600">Your Seasonal Color Analysis</p>
              <button className="mt-1.5 sm:mt-2 bg-gray-700/90 text-white text-xs sm:text-sm px-2 sm:px-3 py-1 sm:py-1.5 md:px-4 rounded-lg mx-auto">
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
