import React, { useEffect, useState } from "react";
import { Typewriter } from "react-simple-typewriter";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaCogs,
  FaIndustry,
  FaWrench,
  FaShieldAlt,
  FaTools,
  FaCheckCircle,
} from "react-icons/fa";
import bg1 from "../assets/images/hero/bg1.jpg";
import bg2 from "../assets/images/hero/bg1.jpg";
import bg3 from "../assets/images/hero/bg1.jpg";
import bg4 from "../assets/images/hero/bg1.jpg";

const images = [bg1, bg2, bg3, bg4];

const HeroSection = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const features = [
    {
      icon: <FaShieldAlt className="text-3xl text-blue-400" />,
      title: "ISO Certified",
      description: "We follow global quality standards with full certification.",
    },
    {
      icon: <FaTools className="text-3xl text-blue-400" />,
      title: "Custom Engineering",
      description: "Tailored fittings for diverse hydraulic applications.",
    },
    {
      icon: <FaCheckCircle className="text-3xl text-blue-400" />,
      title: "Precision Guarantee",
      description: "100% tested products ensuring leak-proof performance.",
    },
  ];

  return (
    <div className="relative h-screen w-full overflow-hidden bg-[#1b1f23] text-white font-body">
      {/* Background slideshow */}
      <AnimatePresence>
        <motion.div
          key={currentImage}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2 }}
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${images[currentImage]})`,
            filter: "brightness(0.4)",
          }}
        />
      </AnimatePresence>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col md:flex-row items-center justify-between px-6 md:px-20 py-10">
        {/* Left Text Block */}
        <div className="w-full md:w-1/2 text-center md:text-left space-y-6">
          <div className="min-h-[140px]">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-blue-400 font-heading leading-snug max-w-3xl mx-auto md:mx-0">
              <Typewriter
                words={[
  "Reliable Hydraulic Engineering",
  "Precision Meets Performance",
  "Built on Trust & Quality",
  "Cosmo Hydraulic Industries"
]
}
                loop={0}
                cursor
                cursorStyle="_"
                typeSpeed={60}
                deleteSpeed={30}
                delaySpeed={2000}
              />
            </h1>
          </div>

          <motion.p
            className="text-[#e5e7eb] text-base sm:text-lg md:text-xl leading-relaxed max-w-xl mx-auto md:mx-0"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.5 }}
          >
            Manufacturing top-grade hydraulic & pipe fittings with unmatched strength,
            reliability, and performance — trusted across industries.
          </motion.p>

          <div className="flex gap-6 text-blue-400 text-2xl mt-3 justify-center md:justify-start">
            <FaCogs title="Engineering Excellence" className="hover:scale-125 transition-transform duration-300" />
            <FaIndustry title="Industrial Quality" className="hover:scale-125 transition-transform duration-300" />
            <FaWrench title="Precision Fittings" className="hover:scale-125 transition-transform duration-300" />
          </div>
        </div>

        {/* Right Feature Cards */}
        <div className="w-full md:w-1/2 grid gap-6 mt-12 md:mt-0">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 80 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 * index }}
              whileHover={{ scale: 1.05 }}
              className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-blue-400 shadow-md cursor-pointer"
            >
              <div className="flex items-start gap-4">
                {feature.icon}
                <div>
                  <h3 className="text-white text-lg font-semibold mb-1 font-heading">{feature.title}</h3>
                  <p className="text-sm text-[#e5e7eb]">{feature.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
