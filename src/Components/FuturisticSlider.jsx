import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaWrench,
  FaCogs,
  FaTools,
  FaLink,
  FaAngleDoubleRight,
  FaCompressArrowsAlt,
  FaTimes,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";
import { BsFillGearFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

import img1 from "../assets/images/hero/bg1.jpg";
import img2 from "../assets/images/ms.jpg";
import img3 from "../assets/images/msadapters.jpg";
import img4 from "../assets/images/mselbow.jpg";
import img5 from "../assets/images/brasssheet.jpg";
import img6 from "../assets/images/clamps.jpg";
import bgOverlay from "../assets/images/sliderbg.jpg";

const sliderItems = [
  {
    image: img1,
    title: "Hydraulic Fittings",
    icon: <FaWrench />,
    desc: "High-pressure hydraulic fittings built for secure, leak-proof connections in industrial systems.",
  },
  {
    image: img2,
    title: "MS Connectors",
    icon: <FaLink />,
    desc: "Durable MS connectors designed for seamless pipe connections under heavy loads.",
  },
  {
    image: img3,
    title: "MS Adapters",
    icon: <FaCompressArrowsAlt />,
    desc: "Robust adapters for connecting mismatched threads and diameters with ease and security.",
  },
  {
    image: img4,
    title: "MS Elbows",
    icon: <FaAngleDoubleRight />,
    desc: "Precision MS elbows that ensure reliable directional flow with minimal pressure drop.",
  },
  {
    image: img5,
    title: "Brass Sheet Cutting Parts",
    icon: <BsFillGearFill />,
    desc: "Premium-grade brass components cut to perfection for both mechanical and aesthetic use.",
  },
  {
    image: img6,
    title: "Hydraulic PVC Clamps",
    icon: <FaTools />,
    desc: "Sturdy PVC clamps designed to minimize vibration and securely hold hydraulic pipes in place.",
  },
];

const FuturisticSlider = () => {
  const containerRef = useRef(null);
  const navigate = useNavigate();
  const [selected, setSelected] = useState(null);

  // Auto-slide
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const scrollAmount = container.offsetWidth / 3 + 20;

    const interval = setInterval(() => {
      if (container.scrollLeft + scrollAmount >= container.scrollWidth) {
        container.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        container.scrollBy({ left: scrollAmount, behavior: "smooth" });
      }
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  // Manual Scroll
  const scrollLeft = () => {
    const container = containerRef.current;
    if (!container) return;
    container.scrollBy({ left: -(container.offsetWidth / 2), behavior: "smooth" });
  };

  const scrollRight = () => {
    const container = containerRef.current;
    if (!container) return;
    container.scrollBy({ left: container.offsetWidth / 2, behavior: "smooth" });
  };

  return (
    <div
      className="relative w-full py-20 px-4 text-white overflow-hidden"
      style={{
        backgroundImage: `url(${bgOverlay})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Section Heading */}
      <div className="relative z-10 text-center mb-14">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold text-blue-400 tracking-wide"
        >
          Explore the Future of Engineering
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-gray-300 mt-4 text-lg max-w-xl mx-auto"
        >
          Discover next-gen hydraulic components and mechanical brilliance at a glance.
        </motion.p>
      </div>

      {/* Slider Container */}
      <div className="relative">
        {/* Left Button */}
        <button
          onClick={scrollLeft}
          className="absolute left-0 top-1/2 -translate-y-1/2 bg-[#1b1f23]/80 text-blue-400 p-3 rounded-full shadow-lg hover:scale-110 hover:text-white hover:bg-blue-500 transition-all duration-300 z-20"
        >
          <FaChevronLeft />
        </button>

        {/* Slider Items */}
        <div
          ref={containerRef}
          className="relative z-10 flex gap-6 overflow-x-auto px-4 pb-4 scroll-smooth slider-track snap-x snap-mandatory"
        >
          {sliderItems.map((item, index) => (
            <motion.div
              key={index}
              onClick={() => setSelected(item)}
              whileHover={{ scale: 1.03 }}
              className="snap-start min-w-[90%] sm:min-w-[48%] lg:min-w-[32%] cursor-pointer bg-[#1c1c1e] border border-blue-500/10 backdrop-blur-xl rounded-2xl hover:shadow-[0_0_25px_rgba(59,130,246,0.4)] hover:border-blue-400 transition-all duration-500 ease-in-out"
            >
              <div className="relative group overflow-hidden rounded-t-2xl">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-72 object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/60 transition-colors duration-500" />
              </div>
              <div className="p-5 space-y-2">
                <div className="flex items-center gap-3 text-xl font-semibold text-white">
                  <span className="text-blue-400 text-2xl">{item.icon}</span>
                  <span>{item.title}</span>
                </div>
                <p className="text-gray-400 text-sm line-clamp-3">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Right Button */}
        <button
          onClick={scrollRight}
          className="absolute right-0 top-1/2 -translate-y-1/2 bg-[#1b1f23]/80 text-blue-400 p-3 rounded-full shadow-lg hover:scale-110 hover:text-white hover:bg-blue-500 transition-all duration-300 z-20"
        >
          <FaChevronRight />
        </button>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.8, y: 40 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.8, y: 40 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              className="bg-[#1b1f23] max-w-xl w-full rounded-2xl shadow-lg p-6 relative"
            >
              <button
                onClick={() => setSelected(null)}
                className="absolute top-3 right-4 text-gray-400 hover:text-white text-xl"
              >
                <FaTimes />
              </button>
              <img
                src={selected.image}
                alt={selected.title}
                className="w-full h-56 object-contain rounded-lg mb-4"
              />
              <div className="flex items-center gap-3 text-xl font-semibold text-white mb-2">
                <span className="text-blue-400 text-2xl">{selected.icon}</span>
                <span>{selected.title}</span>
              </div>
              <p className="text-gray-300 mb-6">{selected.desc}</p>
              <button
                onClick={() => navigate("/contact")}
                className="px-6 py-2 rounded-full bg-blue-500 hover:bg-blue-600 transition duration-300 font-medium"
              >
                Get Enquiry
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hide scrollbar */}
      <style>{`
        .slider-track::-webkit-scrollbar {
          display: none;
        }
        .slider-track {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        @media (min-width: 1024px) {
          .slider-track > div {
            flex: 0 0 calc(33.333% - 16px);
          }
        }
      `}</style>
    </div>
  );
};

export default FuturisticSlider;
