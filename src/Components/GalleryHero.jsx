// components/GalleryHero.jsx
import React from "react";
import { motion } from "framer-motion";
import bgImage from "../assets/images/galleryhero.jpg"; // replace with your actual gallery hero image
import { Link } from "react-router-dom";

const GalleryHero = () => {
  return (
    <section
      className="relative w-full h-[70vh] md:h-[80vh] flex items-center justify-center text-white overflow-hidden"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60 z-0"></div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 text-center px-6 max-w-3xl"
      >
        {/* Shimmer Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight bg-gradient-to-r from-blue-400 via-blue-600 to-blue-400 bg-[length:200%_auto] text-transparent bg-clip-text animate-shimmer"
        >
          Our Gallery
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="mt-4 text-gray-200 text-base sm:text-lg md:text-xl leading-relaxed"
        >
          Discover the precision, innovation, and craftsmanship of Cosmo Hydraulic Industries
          through our visual showcase.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link
            to="/contact"
            className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-full text-white font-medium transition duration-300"
          >
            Contact Us
          </Link>
          <Link
            to="/products"
            className="bg-transparent border border-blue-500 hover:bg-blue-500 hover:text-white px-6 py-3 rounded-full text-blue-400 font-medium transition duration-300"
          >
            View Products
          </Link>
        </motion.div>
      </motion.div>

      {/* Shimmer Animation CSS */}
      <style>{`
        @keyframes shimmer {
          0% { background-position: 200% 0; }
          100% { background-position: -200% 0; }
        }
        .animate-shimmer {
          animation: shimmer 3s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default GalleryHero;
