import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import evenessLogo from '../assets/eveness-logo.png';
import newChatIcon from '../assets/new-chat-icon-mobile.svg';
import { IoMenu } from "react-icons/io5";
import { TbEditCircle } from "react-icons/tb";

const Navbar = ({ navItems }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1280);
  const location = useLocation();

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1280);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Initial dropdown items
  const initialDropdownItems = [
    { label: "Face", path: "/face" },
    { label: "Body Shape", path: "/body" },
    { label: "Style Guide", path: "/style-guide" },
  ];

  // Get the main nav item and dropdown items based on current location
  const getNavConfiguration = () => {
    const defaultMainItem = navItems.find(item => item.hasDropdown);
    const currentDropdownItem = initialDropdownItems.find(item => item.path === location.pathname);
    
    if (currentDropdownItem) {
      // If a dropdown item is selected, it becomes the main item
      return {
        mainItem: { label: currentDropdownItem.label, path: currentDropdownItem.path },
        dropdownItems: [
          { label: defaultMainItem.label, path: defaultMainItem.path },
          ...initialDropdownItems.filter(item => item.path !== currentDropdownItem.path)
        ]
      };
    }
    
    // Default configuration
    return {
      mainItem: defaultMainItem,
      dropdownItems: initialDropdownItems
    };
  };

  const { mainItem, dropdownItems } = getNavConfiguration();

  return (
    <div className="fixed top-0 left-0 w-full z-50">
      <nav className="mx-auto px-4 md:px-6 py-3 md:py-4 flex justify-between items-center">
        {location.pathname === '/evenesschat' && isMobile ? (
          <>
            {/* Mobile Chat Screen Layout */}
            <button 
              className="bg-white/80 backdrop-blur-lg rounded-lg p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <IoMenu size={20} />
            </button>
            <div className="bg-white/80 backdrop-blur-lg rounded-lg py-2 px-4">
              <span className="font-gopher font-light text-lg">EVENESS</span>
            </div>
            <button className="bg-white/80 backdrop-blur-lg rounded-lg p-3">
              <img src={newChatIcon} alt="New Chat" className="h-4 w-4" />
            </button>
          </>
        ) : (
          <>
            {/* Regular Layout for Desktop and Other Pages */}
            <Link to="/" className="bg-white/80 backdrop-blur-lg rounded-lg py-2 px-4 flex items-center gap-2">
              <img src={evenessLogo} alt="EVENESS" className="h-5 md:h-6" />
              <span className="font-gopher font-light text-base md:text-lg">EVENESS</span>
            </Link>

            {/* Menu Links - Hidden on Mobile/Tablet */}
            <div className="hidden xl:flex items-center gap-3 xl:gap-6 bg-white/80 backdrop-blur-lg rounded-lg py-2 px-3 xl:px-4">
              {navItems.map((item, index) => {
                if (item.hasDropdown) {
                  return (
                    <div key={index} className="relative flex items-center">
                      <div className="flex items-center gap-1">
                        <Link
                          to={mainItem.path}
                          className={`${location.pathname === mainItem.path ? 'text-black font-medium' : 'text-gray-500'} hover:text-black`}
                        >
                          {mainItem.label}
                        </Link>
                        <button
                          className="text-gray-500 hover:text-black"
                          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                        >
                          <svg className={`w-4 h-4 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        </button>
                      </div>
                      {isDropdownOpen && (
                        <div className="absolute top-full left-0 mt-2 w-48 bg-white/80 backdrop-blur-lg rounded-lg py-2 shadow-lg">
                          {dropdownItems.map((dropItem, idx) => (
                            <Link
                              key={idx}
                              to={dropItem.path}
                              className={`block px-4 py-2 hover:bg-gray-100 ${location.pathname === dropItem.path ? 'font-medium text-black' : 'text-gray-500'}`}
                              onClick={() => setIsDropdownOpen(false)}
                            >
                              {dropItem.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                }
                return (
                  <Link
                    key={index}
                    to={item.path}
                    className={`${item.isButton ? "bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800" : `${location.pathname === item.path ? 'font-medium text-black' : 'text-gray-500 hover:text-black'}`}`}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </div>

            {/* Mobile Menu Button for Other Pages */}
            <div className="xl:hidden">
              <button className="p-2 hover:bg-gray-200 rounded-lg bg-white/80 backdrop-blur-lg" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </>
        )}
      </nav>

      {/* Mobile Menu - Updated to work for both chat and non-chat pages */}
      {isMenuOpen && isMobile && (
        <div className="xl:hidden bg-white/80 backdrop-blur-lg mt-2 mx-6 rounded-lg p-4">
          <div className="flex flex-col gap-4">
            {location.pathname === '/evenesschat' ? (
              // Chat-specific menu items
              <>
                <Link
                  to="/home"
                  className="text-gray-500 hover:text-black"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Home
                </Link>
                <button
                  className="text-gray-500 hover:text-black text-left"
                  onClick={() => {
                    // Handle clear conversations
                    setIsMenuOpen(false);
                  }}
                >
                  Clear conversations
                </button>
                <Link
                  to="/account"
                  className="text-gray-500 hover:text-black"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Account
                </Link>
                <button
                  className="text-gray-500 hover:text-black text-left"
                  onClick={() => {
                    // Handle logout
                    setIsMenuOpen(false);
                  }}
                >
                  Log out
                </button>
              </>
            ) : (
              // Regular menu items for other pages
              navItems.map((item, index) => {
                if (item.hasDropdown) {
                  return (
                    <div key={index} className="flex flex-col gap-2">
                      <button
                        className={`flex items-center justify-between ${
                          dropdownItems.some(dropItem => dropItem.path === location.pathname)
                            ? 'text-black font-medium'
                            : 'text-gray-500'
                        } hover:text-black`}
                        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                      >
                        {mainItem.label}
                        <svg 
                          className={`w-4 h-4 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} 
                          fill="none" 
                          stroke="currentColor" 
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>
                      {isDropdownOpen && (
                        <div className="pl-4 flex flex-col gap-2">
                          {dropdownItems.map((dropItem, idx) => (
                            <Link
                              key={idx}
                              to={dropItem.path}
                              className={`${
                                location.pathname === dropItem.path 
                                  ? 'font-medium text-black' 
                                  : 'text-gray-500 hover:text-black'
                              }`}
                              onClick={() => {
                                setIsDropdownOpen(false);
                                setIsMenuOpen(false);
                              }}
                            >
                              {dropItem.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                }
                return (
                  <Link
                    key={index}
                    to={item.path}
                    className={`${
                      item.isButton 
                        ? "bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800"
                        : `${location.pathname === item.path 
                            ? 'font-medium text-black' 
                            : 'text-gray-500 hover:text-black'}`
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                );
              })
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
