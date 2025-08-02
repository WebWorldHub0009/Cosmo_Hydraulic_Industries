import React from "react";
import { motion } from "framer-motion";
import { FaFileAlt } from "react-icons/fa";
import docBg from "../assets/images/documents-bg.jpg"; // Replace with your background image

const DocumentsHero = () => {
  return (
    <section
      className="relative w-full h-[70vh] md:h-[80vh] flex items-center justify-center text-white overflow-hidden"
      style={{
        backgroundImage: `url(${docBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/70 z-0" />

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 text-center px-6"
      >
        {/* Icon */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="flex justify-center mb-5"
        >
          <div className="p-4 bg-[#3b82f6]/20 rounded-full border border-[#3b82f6] shadow-lg">
            <FaFileAlt className="text-4xl text-[#3b82f6]" />
          </div>
        </motion.div>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-4xl md:text-5xl font-extrabold"
        >
          Official Certifications & Documents
        </motion.h1>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mt-4 text-gray-300 max-w-2xl mx-auto text-lg"
        >
          Recognized and verified by government and international bodies.  
          Download and view our official certificates anytime.
        </motion.p>
      </motion.div>
    </section>
  );
};

export default DocumentsHero;
