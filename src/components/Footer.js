import React from "react";
import { FaArrowUp } from "react-icons/fa";
import evenessLogo from "../assets/eveness-logo.png"; // Import logo

const Footer = () => {
  return (
    <footer className="bg-[#181A1B] text-white py-10 px-6 mt-16">
      <div className="max-w-[1446px] mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 items-end">
        {/* Left Section - Larger Logo & Help */}
        <div className="flex flex-col items-start">
          <div className="flex items-center gap-3 mb-6">
            <img src={evenessLogo} alt="EVENESS Logo" className="h-10" />
            <span className="text-2xl font-semibold">EVENESS</span>
          </div>
          <div className="text-sm text-gray-400 mb-4">
            <p className="font-semibold uppercase text-xs mb-2">Help</p>
            <p>
              Our support team is available to assist you by email at{" "}
              <a href="mailto:support@eveness.ai" className="underline">support@eveness.ai</a>
            </p>
          </div>
          <div className="text-sm text-gray-400">
            <p className="font-semibold uppercase text-xs mb-2">Careers</p>
            <p>
              Feel equipped to contribute to the Eveness mission?{" "}
              <a href="mailto:careers@eveness.ai" className="underline">careers@eveness.ai</a>
            </p>
          </div>
        </div>

        {/* Services Section */}
        <div className="flex flex-col items-start">
          <p className="font-semibold uppercase text-xs text-gray-400 mb-2">Services</p>
          <ul className="text-sm space-y-2 text-gray-300">
            <li><a href="#" className="hover:underline">Collection</a> / <a href="#" className="hover:underline">Eveness GPT</a></li>
            <li><a href="#" className="hover:underline">Style Dashboard</a> / <a href="#" className="hover:underline">Marketplace</a></li>
          </ul>
        </div>

        {/* Social Media */}
        <div className="flex flex-col items-start">
          <p className="font-semibold uppercase text-xs text-gray-400 mb-2">Social Media</p>
          <ul className="text-sm space-y-2 text-gray-300">
            <li><a href="#" className="hover:underline">Instagram</a></li>
            <li><a href="#" className="hover:underline">TikTok</a></li>
            <li><a href="#" className="hover:underline">YouTube</a></li>
          </ul>
        </div>

        {/* Rightmost Section - Newsletter + Copyright & Scroll-to-Top */}
        <div className="flex flex-col items-start">
          <p className="font-semibold uppercase text-xs text-gray-400 mb-2">Newsletter Sign-Up</p>
          <p className="text-sm text-gray-300 mb-8">
            Sign-Up Be first to experience our latest fashion-tech, collections, and styling innovations.
          </p>
          <div className="flex justify-between items-center w-full text-gray-400 text-sm">
            <p>© 2025 — Eveness</p>
            <button 
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="bg-white text-black p-3 rounded-full hover:bg-gray-300 transition flex items-center justify-center"
            >
              <FaArrowUp />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
