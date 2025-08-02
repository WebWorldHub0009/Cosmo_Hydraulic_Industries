import React, { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import Captions from "yet-another-react-lightbox/plugins/captions";
import { motion } from "framer-motion";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/captions.css";

import { FaWrench } from "react-icons/fa";
import GalleryHero from "../Components/GalleryHero";

// Gallery Images
import g1 from "../assets/images/showcase/g11.png";
import g2 from "../assets/images/showcase/g22.png";
import g3 from "../assets/images/showcase/g33.png";
import g5 from "../assets/images/showcase/g55.png";
import g6 from "../assets/images/showcase/g66.png";
import g7 from "../assets/images/showcase/g77.png";
import g8 from "../assets/images/showcase/g88.png";
import g9 from "../assets/images/showcase/g99.png";
import g10 from "../assets/images/showcase/g1010.png";
import g12 from "../assets/images/showcase/g66.png";
import g13 from "../assets/images/showcase/g1010.png";
import g14 from "../assets/images/showcase/g66.png";

const galleryImages = [
  { src: g1 },
  { src: g2 },
  { src: g3 },
  { src: g5 },
  { src: g6 },
  { src: g7 },
  { src: g8 },
  { src: g9 },
  { src: g10 },
  { src: g12 },
  { src: g13 },
  { src: g14 },
];

const PremiumGallery = () => {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  return (
    <>
      <GalleryHero />
      <section className="w-full relative py-20 px-6 text-white font-sans animate-gradient bg-gradient-to-br from-[#070a11] via-[#08192b] to-[#011029]">
        {/* Glow Overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(59,130,246,0.15),transparent_70%),radial-gradient(circle_at_bottom_right,_rgba(37,99,235,0.15),transparent_70%)] pointer-events-none"></div>

        {/* Section Heading */}
        <div className="relative text-center mb-12 max-w-3xl mx-auto z-10">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#3b82f6]">
            Explore Our Premium Work
          </h2>
          <p className="text-gray-300 mt-3 text-base md:text-lg">
            A glimpse into the precision and craftsmanship that goes into every
            Cosmo Hydraulic component.
          </p>
        </div>

        {/* Masonry / Bricks Layout */}
        <div className="relative columns-1 sm:columns-2 lg:columns-3 gap-6 max-w-7xl mx-auto space-y-6 z-10">
          {galleryImages.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              viewport={{ once: true }}
              className="relative overflow-hidden rounded-2xl cursor-pointer border border-gray-700 bg-[#0f2238] hover:border-[#3b82f6] shadow-md hover:shadow-[#3b82f6]/40 transition-all duration-300 break-inside-avoid"
              onClick={() => {
                setIndex(i);
                setOpen(true);
              }}
            >
              <img
                src={img.src}
                alt={`Cosmo Hydraulic Showcase ${i + 1}`}
                className="w-full object-cover rounded-2xl transition-transform duration-500 hover:scale-105"
                style={{ height: "260px" }}
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#3b82f6]/30 to-transparent opacity-0 hover:opacity-100 transition duration-500" />
            </motion.div>
          ))}
        </div>

        {/* Lightbox */}
        {open && (
          <Lightbox
            open={open}
            close={() => setOpen(false)}
            slides={galleryImages}
            index={index}
            plugins={[Captions]}
          />
        )}

        {/* CTA Section */}
        <div className="relative mt-16 text-center z-10">
          <h3 className="text-2xl md:text-3xl font-semibold mb-4 text-white">
            Want to Discuss Your Hydraulic Needs?
          </h3>
          <a
            href="tel:+918587044434"
            className="inline-flex items-center gap-3 bg-[#3b82f6] text-white px-6 py-3 rounded-full shadow-md hover:bg-[#2563eb] hover:scale-105 transition-all duration-300 text-lg font-medium focus:outline-none focus:ring-4 focus:ring-blue-300"
          >
            <FaWrench className="text-xl" />
            <span>Talk to Our Expert</span>
          </a>
        </div>

        {/* Gradient Animation CSS */}
        <style>{`
          @keyframes gradientShift {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }
          .animate-gradient {
            background-size: 300% 300%;
            animation: gradientShift 10s ease infinite;
          }
        `}</style>
      </section>
    </>
  );
};

export default PremiumGallery;
