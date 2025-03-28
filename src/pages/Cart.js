import React from 'react';
import Navbar from '../components/Navbar';
import { Link } from 'react-router-dom';
import firstImage from "../assets/wide-image1.png";
import secondImage from "../assets/product-description-1.png";
import { homePageNavItems } from '../data/mockData';

const CartItem = ({ image, name, size, color, price, quantity, onRemove, onEdit, id }) => (
  <div className="flex items-start py-3 lg:py-4 border-b border-[#E5E5E5] last:border-b-0">
    <div className="w-[70px] lg:w-[90px] h-[98px] lg:h-[118px] rounded-[10px] bg-[#FFFFFF5C] backdrop-blur-[40px] flex items-center justify-center">
      <img src={image} alt={name} className="w-[64px] lg:w-[84px] h-[92px] lg:h-[112px] object-cover rounded-lg" />
    </div>
    <div className="flex flex-1 justify-between ml-3 lg:ml-4">
      <div className="flex flex-col h-[98px] lg:h-[118px]">
        <div>
          <h3 className="font-['Poppins'] font-bold text-[16px] lg:text-[20px] leading-[24px] lg:leading-[29.25px]">{name}</h3>
          <div className="flex flex-col gap-1 mt-1">
            <span className="font-['Poppins'] font-medium text-[14px] lg:text-[16px] leading-[13.71px] text-[#797979]">{size}</span>
            <div className="flex items-center mt-1">
              <div className="w-[10px] lg:w-[12px] h-[10px] lg:h-[12px] rounded-[3px] shadow-[0px_0px_16px_0px_#00000004] backdrop-blur-[36px]" 
                style={{ backgroundColor: color === 'Coral Reef' ? '#E8C5B0' : '#95B1D0' }}
              />
              <span className="font-['Poppins'] font-medium text-[14px] lg:text-[16px] leading-[13.71px] text-[#797979] ml-1">{color}</span>
            </div>
          </div>
        </div>
        <div className="flex items-center mt-auto">
          <div className="flex w-[85px] h-[26px] items-center justify-between px-[10px] bg-[#FFFFFF99] shadow-[0px_0px_16px_0px_#00000004] backdrop-blur-[36px] rounded-[4px]">
            <button className="w-4 h-full flex items-center justify-center text-[#797979]">-</button>
            <span className="text-[14px] text-[#797979]">{quantity}</span>
            <button className="w-4 h-full flex items-center justify-center text-[#797979]">+</button>
          </div>
          <button 
            className="font-normal text-[12px] leading-[150%] tracking-[-0.05em] underline ml-6 text-black" 
            onClick={() => onRemove(id)}
          >
            Remove
          </button>
        </div>
      </div>
      <div className="hidden lg:flex flex-col justify-between h-[98px] lg:h-[118px]">
        <span className="font-['Poppins'] font-bold text-[18px] leading-[29.25px] text-right">${price}</span>
        <button 
          className="font-normal text-[12px] leading-[150%] tracking-[-0.05em] underline text-black" 
          onClick={() => onEdit(id)}
        >
          Edit
        </button>
      </div>
    </div>
  </div>
);

const Cart = () => {
  const cartItems = [
    {
      id: 1,
      image: firstImage,
      name: "Belted Mini Dress - Soft Jute Material",
      size: "M",
      color: "Coral Reef",
      price: 660,
      quantity: 1
    },
    {
      id: 2,
      image: secondImage,
      name: "Gradient tulle dress",
      size: "M",
      color: "Pale Cerulean",
      price: 550,
      quantity: 1
    }
  ];

  return (
    <div className="min-h-screen bg-[#EDE3DD]">
      <Navbar navItems={homePageNavItems}/>
      
      <div className="max-w-[1512px] mx-auto px-4 lg:px-[24px] pt-[80px]">
        <h1 className="text-center text-[26px] font-bold leading-[32px] mb-6 lg:hidden">
          Checkout
        </h1>

        <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 xl:gap-14 lg:justify-between xl:justify-start mt-4 lg:mt-8">
          {/* Cart Items */}
          <div className="w-full lg:w-[55%] xl:w-[773px]">
            <div className="w-full bg-[#FFFFFF99] backdrop-blur-[40px] rounded-[18px] p-1 lg:p-6">
              <div className="flex flex-col">
                {cartItems.map(item => (
                  <CartItem 
                    key={item.id}
                    {...item}
                    onRemove={(id) => console.log('Remove', id)}
                    onEdit={(id) => console.log('Edit', id)}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Order Summary */}
          <div className="w-full lg:w-[42%] xl:w-[633px]">
            <div className="bg-[#FFFFFF99] backdrop-blur-[40px] rounded-[18px] p-6 lg:p-8 xl:p-10 h-auto lg:h-[783px] mb-8">
              <h2 className="font-['Poppins'] font-bold text-[24px] lg:text-[28px] xl:text-[30px] leading-[32px] mb-8 lg:mb-12 xl:mb-16">
                Order Summary
              </h2>

              <div className="flex justify-between mb-8 lg:mb-10">
                <span className="font-['Poppins'] font-medium text-[14px] lg:text-[16px] leading-[20px] text-[#22272A]">SUBTOTAL</span>
                <span className="font-['Poppins'] font-bold text-[16px] lg:text-[18px] leading-[29.25px] text-right">
                  ${cartItems.reduce((sum, item) => sum + item.price, 0)}
                </span>
              </div>

              <div className="mb-8 lg:mb-10">
                <div className="flex flex-col">
                  <div className="flex justify-between">
                    <span className="font-['Poppins'] font-medium text-[14px] lg:text-[16px] leading-[20px] text-[#22272A] mb-2">SHIPPING ADDRESS</span>
                  </div>
                  <div className="flex justify-between items-end">
                    <p className="font-['Poppins'] font-normal text-[14px] lg:text-[16px] leading-[20px] text-[#797979] max-w-[75%] lg:max-w-[80%]">
                      #7409, Jermey Inlet, 745 Cartwright Squares Suite, Nebraska, Port Harmonyshire, United States - 32291
                    </p>
                    <button className="font-['Poppins'] text-[11px] lg:text-[12px] underline">Change</button>
                  </div>
                </div>
              </div>

              <div className="flex justify-between mb-8 lg:mb-10">
                <span className="font-['Poppins'] font-medium text-[14px] lg:text-[16px] leading-[20px] text-[#22272A]">SHIPPING COST</span>
                <span className="font-['Poppins'] font-bold text-[16px] lg:text-[18px] leading-[29.25px] text-right">$10.50</span>
              </div>

              <button className="w-full text-left font-['Poppins'] font-medium text-[14px] lg:text-[16px] leading-[20px] text-[#22272A] mb-32 lg:mb-40 flex items-center">
                <span className="underline">ADD COUPON CODE</span>
                <span className="ml-1">›</span>
              </button>

              <div className="flex justify-between pt-6 lg:pt-8 xl:pt-12 border-t border-[#E5E5E5] mb-6 lg:mb-8 xl:mb-10">
                <span className="font-['Poppins'] font-medium text-[16px] lg:text-[18px] xl:text-[20px] leading-[20px] text-[#22272A]">SUBTOTAL</span>
                <span className="font-['Poppins'] font-bold text-[20px] lg:text-[22px] xl:text-[26px] leading-[29.25px] text-right">
                  ${(cartItems.reduce((sum, item) => sum + item.price, 0) + 10.50).toFixed(2)}
                </span>
              </div>

              <div className="w-full flex justify-center">
                <button className="w-full lg:w-[90%] xl:w-[567px] h-[42px] lg:h-[48px] bg-[#22272A] text-white rounded-[8px] 
                  font-normal text-[14px] lg:text-[16px] leading-[150%] shadow-[0px_0px_16px_0px_#00000004] 
                  backdrop-blur-[36px]">
                  Checkout
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart; 