import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaQuoteLeft, FaStar } from "react-icons/fa";

// Local Indian profile images
import img1 from "../assets/images/testimonials/img4.jpg";
import img2 from "../assets/images/testimonials/img1.jpg";
import img3 from "../assets/images/testimonials/img5.jpg";
import img4 from "../assets/images/testimonials/img2.jpg";
import img5 from "../assets/images/testimonials/img6.jpg";
import img6 from "../assets/images/testimonials/img3.jpg";
import img7 from "../assets/images/testimonials/img7.jpg";

const testimonials = [
  { name: "Riya Sharma", position: "Quality Supervisor, IndusTech", review: "Cosmo Hydraulic exceeded our expectations with consistent precision and quality service, making them an indispensable partner for our projects.", stars: 5, image: img1 },
  { name: "Ankit Verma", position: "Procurement Head, SteelLine", review: "Reliable and always punctual, Cosmo Hydraulic’s fittings have never failed us, and their dedication to excellence is truly commendable.", stars: 4, image: img2 },
  { name: "Priya Desai", position: "Engineer, BharatWorks", review: "Their products showcase unmatched craftsmanship, and every delivery has been on point, making our work process smoother and more efficient.", stars: 5, image: img3 },
  { name: "Rahul Mehta", position: "Operations Manager, FlowTech", review: "The best hydraulic supplier we’ve engaged with; their professional approach and premium components ensure smooth operations without delays.", stars: 4, image: img4 },
  { name: "Sneha Kapoor", position: "Maintenance Lead, InfraBuild", review: "Exceptional durability in every part we receive; Cosmo Hydraulic continues to set high industry standards with every shipment delivered.", stars: 5, image: img5 },
  { name: "Vikram Singh", position: "Project Engineer, MechSolutions", review: "From consultation to delivery, every step was handled with professionalism, ensuring top-notch results and complete customer satisfaction.", stars: 4, image: img6 },
  { name: "Neha Agarwal", position: "Plant Manager, IndEquip", review: "We’ve seen remarkable improvements in production efficiency since adopting their products, and their customer service is equally exceptional.", stars: 5, image: img7 },
];

const TestimonialSlider = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 640);
  const avatarRowRef = useRef(null);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 640);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Auto slide review & avatar focus
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // Smooth scroll for avatar row
  useEffect(() => {
    if (isMobile && avatarRowRef.current) {
      const container = avatarRowRef.current;
      const avatar = container.children[activeIndex];
      if (avatar) {
        const offset =
          avatar.offsetLeft -
          container.offsetWidth / 2 +
          avatar.offsetWidth / 2;
        container.scrollTo({
          left: offset,
          behavior: "smooth",
        });
      }
    }
  }, [activeIndex, isMobile]);

  return (
    <section className="relative py-10 w-full text-center px-4 sm:px-6 overflow-hidden">
      <div className="relative z-10">
        {/* Heading */}
        <div className="mb-10 text-black">
          <h2 className="text-3xl sm:text-4xl font-bold">Hear From Our Happy Clients</h2>
          <p className="mt-2 max-w-2xl mx-auto text-blue-900 text-sm sm:text-base">
            Discover what industry leaders across India say about our unmatched
            quality, timely service, and professional expertise.
          </p>
        </div>

        {/* Avatar Row */}
        <div
          ref={avatarRowRef}
          className={`flex items-center gap-4 mb-6 py-4 transition-all duration-500 ease-linear ${
            isMobile ? "overflow-x-auto" : "justify-center"
          }`}
          style={{
            scrollbarWidth: "none",
            msOverflowStyle: "none",
          }}
        >
          {testimonials.map((item, index) => (
            <motion.div
              key={index}
              className={`flex-shrink-0 w-14 h-14 sm:w-16 sm:h-16 rounded-full border-2 overflow-hidden shadow-sm cursor-pointer ${
                index === activeIndex
                  ? "border-black scale-110 z-10"
                  : "border-gray-300 opacity-50"
              }`}
              onClick={() => setActiveIndex(index)}
              whileHover={{ scale: 1.05 }}
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-full object-cover rounded-full"
              />
            </motion.div>
          ))}
        </div>

        {/* Hide scrollbar */}
        <style>
          {`
            .overflow-x-auto::-webkit-scrollbar {
              display: none;
            }
          `}
        </style>

        {/* Testimonial Box */}
        <div className="relative max-w-3xl mx-auto bg-gray-50 rounded-2xl shadow-2xl px-4 sm:px-8 md:px-14 py-6 sm:py-10 border border-blue-600">
          <FaQuoteLeft className="text-3xl sm:text-4xl text-blue-700 absolute top-4 sm:top-6 left-4 sm:left-6" />
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.6 }}
            >
              {/* Stars */}
              <div className="flex justify-center mb-3 text-yellow-400">
                {[...Array(testimonials[activeIndex].stars)].map((_, i) => (
                  <FaStar key={i} />
                ))}
              </div>

              {/* Review */}
              <p className="text-gray-700 text-sm sm:text-base md:text-lg italic leading-relaxed px-2">
                “{testimonials[activeIndex].review}”
              </p>

              {/* Name & Position */}
              <div className="mt-4 sm:mt-6">
                <p className="font-semibold text-blue-900 text-base sm:text-lg">
                  {testimonials[activeIndex].name}
                </p>
                <p className="text-xs sm:text-sm text-gray-500">
                  {testimonials[activeIndex].position}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSlider;
