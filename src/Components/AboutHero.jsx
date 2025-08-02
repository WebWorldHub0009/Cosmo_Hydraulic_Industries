import React from "react";
import { motion } from "framer-motion";
import { FaInfoCircle, FaPhoneAlt } from "react-icons/fa";
import bgImage from "../assets/images/sliderbg.jpg"; // background image
import hardwareImage from "../assets/images/hydraulicbg.png"; // transparent PNG image
import { Link } from "react-router-dom";

const AboutHero = () => {
  return (
    <section
      className="w-full min-h-[80vh] flex items-center justify-center bg-cover bg-center bg-no-repeat px-6 md:px-12 py-20 relative overflow-hidden"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-[#0d1117]/70 z-0" />

      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="relative z-10 max-w-7xl w-full flex flex-col md:flex-row items-center justify-between gap-10"
      >
        {/* LEFT CONTENT */}
        <div className="flex-1 text-white text-left">
          <motion.h1
            initial={{ x: -30, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.7 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-extrabold leading-tight mb-6"
          >
            About <span className="text-blue-500">Cosmo Hydraulic</span>
          </motion.h1>

          <motion.p
            initial={{ x: -20, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            viewport={{ once: true }}
            className="text-lg md:text-xl text-gray-300 max-w-xl leading-relaxed mb-8"
          >
            At Cosmo Hydraulic Industries, we engineer precision — delivering
            robust, reliable, and cutting-edge hydraulic components for
            industrial power.
          </motion.p>

          {/* BUTTONS */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            viewport={{ once: true }}
            className="flex flex-wrap gap-4"
          >
            <Link
              to="/certificates"
              className="cursor-pointer flex items-center gap-2 bg-[#3b82f6] hover:bg-[#2563eb] text-white px-6 py-3 rounded-full font-semibold shadow-lg shadow-blue-500/20 transition-all duration-300"
            >
              <FaInfoCircle />
              Learn More
            </Link>
            <Link
              to="/contact"
              className="cursor-pointer flex items-center gap-2 bg-transparent border-2 border-[#3b82f6] hover:bg-[#3b82f6] hover:text-white text-[#3b82f6] px-6 py-3 rounded-full font-semibold transition-all duration-300"
            >
              <FaPhoneAlt />
              Contact Us
            </Link>
          </motion.div>
        </div>

        {/* RIGHT IMAGE */}
        <motion.div
          className="flex-1 max-w-md w-full"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <motion.div
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="relative"
          >
            <img
              src={hardwareImage}
              alt="Hydraulic Hardware"
              className="w-full object-contain drop-shadow-xl"
            />
            {/* Glow Aura */}
            <div className="absolute -inset-4 rounded-3xl bg-gradient-to-r from-blue-500 via-blue-700 to-blue-500 opacity-10 blur-2xl z-[-1]" />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default AboutHero;
