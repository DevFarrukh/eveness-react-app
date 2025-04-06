import React from 'react';
import Navbar from '../components/Navbar';
import AccountNav from '../components/AccountNav';
import { homePageNavItems } from '../data/mockData';
import firstImage from "../assets/wide-image1.png";
import secondImage from "../assets/product-description-1.png";

const Orders = () => {
    const orders = [
        {
          id: '968',
          image: firstImage,
          name: 'Belted Mini Dress - Soft Jute Material',
          price: '$660',
          size: 'M',
          color: { name: 'Coral Reef', hex: '#CCBBA9' },
          status: 'Dispatched'
        },
        {
          id: '968',
          image: secondImage,
          name: 'Gradient tulle dress',
          price: '$550',
          size: 'M',
          color: { name: 'Pale Cerulean', hex: '#92AACD' },
          status: 'Delivered'
        }
      ];

  return (
    <div className="min-h-screen bg-[#EDE3DD]">
      <Navbar navItems={homePageNavItems} />
      
      <div className="max-w-[1512px] mx-auto px-4 pt-[120px] pb-8">
        <h1 className="font-['Poppins'] text-center text-[30px] font-bold leading-[32px] tracking-[0%] mb-8">
          Hi Christine
        </h1>

        <div className="mb-24 hidden lg:block">
          <AccountNav activeTab="orders" />
        </div>

        {/* Orders Container */}
        <div className="w-full lg:w-[833px] h-auto lg:h-[432px] mx-auto bg-[#FFFFFF5C] backdrop-blur-[40px] rounded-[18px] p-6 lg:p-[52px]">
          {/* Scrollable Content Container */}
          <div className="w-full lg:w-[729px] h-full overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-transparent">
            {orders.map((order) => (
              <div 
                key={order.id} 
                className="py-[20px] border-b border-[#E5E5E5] last:border-b-0"
              >
                {/* Order Content Container */}
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6 lg:gap-0">
                  {/* Left Section */}
                  <div className="flex gap-6">
                    {/* Image Container */}
                    <div className="w-[90px] h-[118px] bg-[#FFFFFF99] backdrop-blur-[40px] rounded-[10px] overflow-hidden flex-shrink-0">
                      <img 
                        src={order.image} 
                        alt={order.name}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* Product Details */}
                    <div className="flex flex-col justify-between h-[118px] flex-1">
                      <div>
                        <h3 className="font-['Poppins'] text-[16px] font-medium mb-2">
                          {order.name}
                        </h3>
                        <p className="font-['Poppins'] text-[20px] font-semibold mb-4">
                          {order.price}
                        </p>
                        <p className="text-[14px]">
                          {order.size}
                        </p>
                      </div>
                      <div className="flex items-center gap-2 self-start">
                        <span className="w-[12px] h-[12px] rounded-[3px]" style={{ backgroundColor: order.color.hex }}></span>
                        <span className="text-[14px] text-[#797979]">{order.color.name}</span>
                      </div>
                    </div>
                  </div>

                  {/* Right Section */}
                  <div className="flex flex-col lg:items-end justify-between gap-4 lg:gap-0 lg:h-[118px] w-full lg:w-auto">
                    <div className="flex justify-between lg:justify-end gap-8">
                      {/* Order ID */}
                      <div className="flex flex-col">
                        <span className="text-[14px] text-[#797979]">Order ID</span>
                        <span className="text-[14px] font-medium">#{order.id}</span>
                      </div>
                      {/* Order Status */}
                      <div className="flex flex-col">
                        <span className="text-[14px] text-[#797979]">Order Status</span>
                        <span className="text-[14px] font-medium">{order.status}</span>
                      </div>
                    </div>
                    <button className="w-full lg:w-[140px] h-[38px] bg-[#22272A] rounded-[8px] shadow-[0px_0px_16px_0px_#00000004] backdrop-blur-[36px] text-white font-['Poppins'] font-medium text-[14px] leading-[150%] tracking-[0%]">
                      More Details
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Add container padding for iPad */}
        <style jsx>{`
          @media (min-width: 768px) and (max-width: 1023px) {
            .max-w-[1512px] {
              padding-left: 32px;
              padding-right: 32px;
            }
          }
        `}</style>
      </div>
    </div>
  );
};

export default Orders; 