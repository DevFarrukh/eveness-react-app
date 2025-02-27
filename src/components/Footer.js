import React from "react";
import { FaArrowUp } from "react-icons/fa";
import evenessLogo from "../assets/eveness-logo.png"; // Import logo

const Footer = () => {
  return (
    <footer className="bg-[#22272A] text-white py-10 px-6 mt-16 md:h-[345px] min-h-[345px]">
      {/* Desktop Layout */}
      <div className="hidden md:block h-full">
        <div className="mx-auto grid grid-cols-12 gap-8 h-full">
          {/* Left Section - Larger Logo & Help */}
          <div className="col-span-4 flex flex-col justify-between h-full">
            <div className="flex items-center gap-3">
              <img src={evenessLogo} alt="EVENESS Logo" className="h-10 brightness-0 invert" />
              <span className="font-['Gopher'] text-[27.13px] font-light">EVENESS</span>
            </div>
            <div>
              <div className="text-sm text-gray-400 mb-4">
                <p className="font-['Poppins'] text-[10px] leading-[13px] tracking-[0.04em] font-medium text-[#D4D5D9 60] uppercase mb-2">Help</p>
                <p className="text-[#D4D5D9]">
                  Our support team is available to assist you by email at{" "}
                  <a href="mailto:support@eveness.ai" className="underline">support@eveness.ai</a>
                </p>
              </div>
              <div className="text-sm text-gray-400">
                <p className="font-['Poppins'] text-[10px] leading-[13px] tracking-[0.04em] font-medium text-[#D4D5D9 60] uppercase mb-2">Careers</p>
                <p className="text-[#D4D5D9]">
                  Feel equipped to contribute to the Eveness mission?{" "}
                  <a href="mailto:careers@eveness.ai" className="underline">careers@eveness.ai</a>
                </p>
              </div>
            </div>
          </div>

          {/* Services Section */}
          <div className="col-span-2 flex flex-col justify-end h-full text-gray-400">
            <p className="font-['Poppins'] text-[10px] leading-[13px] tracking-[0.04em] font-medium text-[#D4D5D9 60] uppercase mb-2">Services</p>
            <ul className="text-sm space-y-2 text-[#D4D5D9]">
              <li><a href="#" className="hover:underline">Collection</a> / <a href="#" className="hover:underline">Eveness GPT</a></li>
              <li><a href="#" className="hover:underline">Style Dashboard</a> / <a href="#" className="hover:underline">Marketplace</a></li>
            </ul>
          </div>

          {/* Social Media */}
          <div className="col-span-2 flex flex-col justify-end h-full text-gray-400">
            <p className="font-['Poppins'] text-[10px] leading-[13px] tracking-[0.04em] font-medium text-[#D4D5D9 60] uppercase mb-2">Social Media</p>
            <ul className="text-sm space-y-2 text-[#D4D5D9]">
              <li><a href="#" className="hover:underline">Instagram</a></li>
              <li><a href="#" className="hover:underline">TikTok</a></li>
              <li><a href="#" className="hover:underline">YouTube</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="col-span-2 flex flex-col justify-end h-full text-gray-400">
            <p className="font-['Poppins'] text-[10px] leading-[13px] tracking-[0.04em] font-medium text-[#D4D5D9 60] uppercase mb-2">Newsletter Sign-Up</p>
            <p className="text-sm text-[#D4D5D9]">
              Sign-Up Be first to experience our latest fashion-tech, collections, and styling innovations.
            </p>
          </div>

          {/* Rightmost Section - Copyright & Scroll-to-Top */}
          <div className="col-span-2 flex flex-col justify-between h-full">
            <button 
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="bg-gray-200 text-black p-3 rounded-full hover:bg-gray-300 transition flex items-center justify-center ml-auto mt-auto mb-24"
            >
              <FaArrowUp />
            </button>
            <div className="text-gray-400 text-sm text-right">
              <p>© 2025 — Eveness</p>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Layout */}
      <div className="md:hidden flex flex-col space-y-8">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <img src={evenessLogo} alt="EVENESS Logo" className="h-10 brightness-0 invert" />
          <span className="font-['Gopher'] text-[27.13px] font-light">EVENESS</span>
        </div>

        {/* Help Section */}
        <div className="text-sm text-gray-400">
          <p className="font-['Poppins'] text-[10px] leading-[13px] tracking-[0.04em] font-medium text-[#D4D5D9 60] uppercase mb-2">Help</p>
          <p className="text-[#D4D5D9]">
            Our support team is available to assist you by email at{" "}
            <a href="mailto:support@eveness.ai" className="underline">support@eveness.ai</a>
          </p>
        </div>

        {/* Careers Section */}
        <div className="text-sm text-gray-400">
          <p className="font-['Poppins'] text-[10px] leading-[13px] tracking-[0.04em] font-medium text-[#D4D5D9 60] uppercase mb-2">Careers</p>
          <p className="text-[#D4D5D9]">
            Feel equipped to contribute to the Eveness mission?{" "}
            <a href="mailto:careers@eveness.ai" className="underline">careers@eveness.ai</a>
          </p>
        </div>

        {/* Services Section */}
        <div className="text-gray-400">
          <p className="font-['Poppins'] text-[10px] leading-[13px] tracking-[0.04em] font-medium text-[#D4D5D9 60] uppercase mb-2">Services</p>
          <ul className="text-sm space-y-2 text-[#D4D5D9]">
            <li><a href="#" className="hover:underline">Collection</a> / <a href="#" className="hover:underline">Eveness GPT</a></li>
            <li><a href="#" className="hover:underline">Style Dashboard</a> / <a href="#" className="hover:underline">Marketplace</a></li>
          </ul>
        </div>

        {/* Social Media */}
        <div className="text-gray-400">
          <p className="font-['Poppins'] text-[10px] leading-[13px] tracking-[0.04em] font-medium text-[#D4D5D9 60] uppercase mb-2">Social Media</p>
          <ul className="text-sm space-y-2 text-[#D4D5D9]">
            <li><a href="#" className="hover:underline">Instagram</a></li>
            <li><a href="#" className="hover:underline">TikTok</a></li>
            <li><a href="#" className="hover:underline">YouTube</a></li>
          </ul>
        </div>

        {/* Newsletter and Copyright in a row */}
        <div className="flex gap-8">
          {/* Newsletter */}
          <div className="text-gray-400 flex-1">
            <p className="font-['Poppins'] text-[10px] leading-[13px] tracking-[0.04em] font-medium text-[#D4D5D9 60] uppercase mb-2">Newsletter Sign-Up</p>
            <p className="text-sm text-[#D4D5D9]">
              Sign-Up Be first to experience our latest fashion-tech, collections, and styling innovations.
            </p>
          </div>

          {/* Copyright & Scroll-to-Top */}
          <div className="flex flex-col items-end">
            <button 
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="bg-gray-200 text-black p-3 rounded-full hover:bg-gray-300 transition flex items-center justify-center"
            >
              <FaArrowUp />
            </button>
            <div className="text-gray-400 text-sm mt-4">
              <p>© 2025 — Eveness</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
