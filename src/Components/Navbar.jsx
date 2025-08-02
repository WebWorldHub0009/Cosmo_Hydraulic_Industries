import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaBars,
  FaTimes,
  FaHome,
  FaInfoCircle,
  FaCogs,
  FaImages,
  FaPhoneAlt,
  FaFileAlt,
  FaEnvelope,
  FaPhone,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";
import logo from "../assets/images/newlogo2d.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", icon: <FaHome />, href: "/" },
    { name: "About Us", icon: <FaInfoCircle />, href: "/about" },
    { name: "Products", icon: <FaCogs />, href: "/products" },
    { name: "Gallery", icon: <FaImages />, href: "/gallery" },
    { name: "Certificates", icon: <FaFileAlt />, href: "/certificates" },
    { name: "Contact Us", icon: <FaPhoneAlt />, href: "/contact" },
  ];

  return (
    <header className="w-full shadow-md z-50 relative">
      {/* Top Header */}
      <div className="bg-[#2d2d2d] text-gray-200 text-sm px-4 py-2 flex flex-wrap justify-between items-center">
        <div className="hidden md:flex flex-col sm:flex-row gap-x-6 gap-y-1">
          <span className="text-sm md:text-md">UDYAM-UP-28-0082609</span>
          <span>GSTIN: 09BFSPK5332M1ZS</span>
        </div>
        <div className="flex gap-4 items-center mt-1 sm:mt-0">
          <a
            href="mailto:Info@cosmohydraulic.com"
            className="flex items-center gap-1 hover:text-[#3b82f6] transition"
          >
            <FaEnvelope className="text-sm" />
            Info@cosmohydraulic.com
          </a>
          <a
            href="tel:+918587044434"
            className="flex items-center gap-1 hover:text-[#3b82f6] transition"
          >
            <FaPhone className="text-sm" />
            +91 85870 44434
          </a>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className="bg-[#1b1f23] text-white px-6 py-3 flex justify-between items-center border-b border-[#3b82f6]">
        {/* Logo */}
        <Link to="/">
          <img src={logo} alt="Cosmo Hydraulic Logo" className="h-10 md:h-14 w-auto object-contain" />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex space-x-8 font-medium text-sm tracking-wider">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              className="flex items-center gap-4 hover:text-[#3b82f6] transition duration-300 relative group"
            >
              {link.name}
              {/* <span className="block w-0 h-[2px] bg-[#3b82f6] transition-all duration-300 group-hover:w-full"></span> */}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(true)}
            className="text-white text-2xl hover:text-[#3b82f6]"
          >
            <FaBars />
          </button>
        </div>
      </nav>

      {/* Mobile Sliding Menu */}
      <div
        className={`fixed top-0 left-0 w-72 h-full bg-[#1b1f23] text-white shadow-2xl z-50 transform transition-transform duration-300 ease-in-out ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Logo & Close */}
        <div className="flex items-center justify-between px-4 py-4 border-b border-gray-700">
          <img src={logo} alt="Logo" className="h-10" />
          <button
            onClick={() => setMenuOpen(false)}
            className="text-white text-2xl hover:text-red-500"
          >
            <FaTimes />
          </button>
        </div>

        {/* Nav Links */}
        <div className="flex flex-col space-y-5 px-6 py-4 border-b border-gray-700">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              onClick={() => setMenuOpen(false)}
              className="flex items-center gap-3 hover:text-[#3b82f6] font-medium"
            >
              {link.icon}
              <span>{link.name}</span>
            </Link>
          ))}
        </div>

        {/* Contact Info */}
        <div className="px-6 py-4 space-y-2 text-sm text-gray-300">
          <div className="flex items-center gap-2">
            <FaEnvelope />
            <a href="mailto:Info@cosmohydraulic.com" className="hover:underline">
              Info@cosmohydraulic.com
            </a>
          </div>
          <div className="flex items-center gap-2">
            <FaPhone />
            <a href="tel:+918587044434" className="hover:underline">
              +91 85870 44434
            </a>
          </div>
        </div>

        {/* Social Links */}
        <div className="flex gap-4 px-6 mt-4 text-lg text-gray-300">
          <a href="https://facebook.com" target="_blank" rel="noreferrer" className="hover:text-[#3b82f6]">
            <FaFacebookF />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:text-[#3b82f6]">
            <FaInstagram />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-[#3b82f6]">
            <FaLinkedinIn />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noreferrer" className="hover:text-[#3b82f6]">
            <FaTwitter />
          </a>
        </div>
      </div>

      {/* Overlay */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
          onClick={() => setMenuOpen(false)}
        ></div>
      )}
    </header>
  );
};

export default Navbar;
