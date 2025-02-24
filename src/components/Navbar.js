import React, { useState } from "react";
import { Link } from "react-router-dom";
import evenessLogo from '../assets/eveness-logo.png';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="fixed top-0 left-0 w-full z-50">
      <nav className="max-w-[1400px] mx-auto px-6 py-4 flex justify-between items-center">
        
        {/* Logo Container */}
        <Link to="/" className="bg-white/80 backdrop-blur-lg rounded-lg py-2 px-4 flex items-center gap-2">
          <img src={evenessLogo} alt="EVENESS" className="h-6" />
          <span className="font-gopher font-light text-lg">EVENESS</span>
        </Link>

        {/* Menu Links */}
        <div className="hidden md:flex items-center gap-6 bg-white/80 backdrop-blur-lg rounded-lg py-2 px-4">
          <Link to="/home" className="text-black font-medium">Home</Link>
          <Link to="/dashboard" className="text-gray-500 hover:text-black">Dashboard</Link>
          <Link to="/shop" className="text-gray-500 hover:text-black">Shop</Link>
          <Link to="/magazine" className="text-gray-500 hover:text-black">Magazine</Link>
          <Link to="/account" className="text-gray-500 hover:text-black">Account</Link>
          <Link to="/cart" className="text-gray-500 hover:text-black">Cart</Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="bg-white/80 backdrop-blur-lg rounded-lg md:hidden">
          <button 
            className="p-2 hover:bg-gray-200 rounded-lg"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white/80 backdrop-blur-lg mt-2 mx-6 rounded-lg p-4">
          <div className="flex flex-col gap-4">
            <Link to="/home" className="text-black font-medium">Home</Link>
            <Link to="/dashboard" className="text-gray-500 hover:text-black">Dashboard</Link>
            <Link to="/shop" className="text-gray-500 hover:text-black">Shop</Link>
            <Link to="/magazine" className="text-gray-500 hover:text-black">Magazine</Link>
            <Link to="/account" className="text-gray-500 hover:text-black">Account</Link>
            <Link to="/cart" className="text-gray-500 hover:text-black">Cart</Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
