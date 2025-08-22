import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from './images/black2_logo.svg';

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  // Detect when the page is scrolled
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Function to handle smooth scrolling to an element
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out border-b-2 border-black ${
        isScrolled ? 'w-3/4 bg-gray-800/80' : 'w-full bg-transparent'
      } mx-auto flex items-center justify-center h-16`}
      style={{
        maxWidth: isScrolled ? '65%' : '100%',
        backdropFilter: isScrolled ? 'blur(10px)' : 'none',
        marginTop: isScrolled ? '2px' : '0px',
        borderRadius: isScrolled ? '15px' : '0px',
        paddingLeft: isScrolled ? '0px' : '55px',
      }}
    >
      <div className="flex items-center justify-center w-full px-4">
        {/* Logo */}
        <div className="flex-shrink-0">
          <img className="h-16 w-auto" src={logo} alt="AyurGarden Uttarakhand" />
        </div>

        {/* Links */}
        
          <Link to="/" className="px-3 py-2 text-lg font-medium text-white hover:text-green-400">
            Home
          </Link>
          <Link to="/" className="px-3 py-2 text-lg font-medium text-white hover:text-customColor">
            Our Goal
          </Link>
          <Link to="/Garden" className="px-3 py-2 text-lg font-medium text-white hover:text-green-400">
            Garden
          </Link>
          <Link to="/ContactUs" className="px-3 py-2 text-lg font-medium text-white hover:text-customColor">
            Contact Us
          </Link>
        </div>
      
    </nav>
  );
}

export default Navbar;
