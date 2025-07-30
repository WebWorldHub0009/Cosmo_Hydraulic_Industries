import React from "react";
import { Link } from "react-router-dom";
import { FaEnvelope, FaPhoneAlt } from "react-icons/fa";

const Navbar = () => {
  return (
    <header className="w-full shadow-md z-50">
      {/* Top Header */}
      <div className="bg-gradient-to-r from-gray-800 to-gray-700 text-gray-200 text-sm px-4 py-2 flex flex-wrap justify-between items-center">
        <div className="flex flex-col sm:flex-row gap-x-6 gap-y-1">
          <span>UDYAM-UP-28-0082609</span>
          <span>GSTIN: 09BFSPK5332M1ZS</span>
        </div>
        <div className="flex gap-4 items-center mt-1 sm:mt-0">
          <a
            href="mailto:Info@cosmohydraulic.com"
            className="flex items-center gap-1 hover:text-blue-400 transition"
          >
            <FaEnvelope className="text-sm" />
            Info@cosmohydraulic.com
          </a>
          <a
            href="tel:+918587044434"
            className="flex items-center gap-1 hover:text-blue-400 transition"
          >
            <FaPhoneAlt className="text-sm" />
            +91 85870 44434
          </a>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className="bg-[#1b1f23] text-white px-6 py-3 flex justify-between items-center shadow-lg border-b border-blue-500 relative">
        {/* Logo or Brand */}
        <Link to="/" className="text-2xl font-bold tracking-wide text-blue-400">
          COSMO<span className="text-white"> HYDRAULIC</span>
        </Link>

        {/* Navigation Links */}
        <div className="hidden md:flex space-x-8 font-medium text-sm tracking-wider">
          <Link
            to="/"
            className="hover:text-blue-400 transition duration-300 relative group"
          >
            Home
            <span className="block w-0 h-[2px] bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link
            to="/about"
            className="hover:text-blue-400 transition duration-300 relative group"
          >
            About Us
            <span className="block w-0 h-[2px] bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link
            to="/products"
            className="hover:text-blue-400 transition duration-300 relative group"
          >
            Products
            <span className="block w-0 h-[2px] bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link
            to="/gallery"
            className="hover:text-blue-400 transition duration-300 relative group"
          >
            Gallery
            <span className="block w-0 h-[2px] bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link
            to="/certificates"
            className="hover:text-blue-400 transition duration-300 relative group"
          >
            Certificates
            <span className="block w-0 h-[2px] bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link
            to="/contact"
            className="hover:text-blue-400 transition duration-300 relative group"
          >
            Contact Us
            <span className="block w-0 h-[2px] bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
