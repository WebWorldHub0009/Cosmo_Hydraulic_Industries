import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import bgVideo from "../assets/videos/bg.mp4"; // Background video

const ProductHero = () => {
  return (
    <section className="relative w-full h-[70vh] md:h-[80vh] flex items-center justify-center text-white overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src={bgVideo} type="video/mp4" />
      </video>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-[#00000073] z-0"></div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 text-center px-4 sm:px-6 max-w-3xl"
      >
        {/* Shimmer Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight bg-gradient-to-r from-blue-300 via-blue-500 to-blue-300 bg-[length:200%_auto] text-transparent bg-clip-text animate-shimmer"
        >
          Premium Hydraulic Components
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="mt-3 sm:mt-4 text-sm sm:text-base md:text-lg lg:text-xl text-gray-200 leading-relaxed"
        >
          Explore our wide range of hydraulic fittings, connectors, and clamps —
          engineered for performance, durability, and precision.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mt-6 sm:mt-8 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4"
        >
          <a
            href="#products"
            className="bg-blue-600 hover:bg-blue-700 px-4 py-2 sm:px-6 sm:py-3 rounded-full text-sm sm:text-base text-white font-medium transition duration-300"
          >
            View Products
          </a>
          <Link
            to="/contact"
            className="bg-transparent border border-blue-500 hover:bg-blue-500 hover:text-white px-4 py-2 sm:px-6 sm:py-3 rounded-full text-sm sm:text-base text-blue-400 font-medium transition duration-300"
          >
            Contact Us
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

export default ProductHero;
