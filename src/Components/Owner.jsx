import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaUserTie, FaWhatsapp } from "react-icons/fa";

const Owner = () => {
  return (
    <section className="w-full bg-gradient-to-br from-[#0f0f0f] via-[#1b1f23] to-[#101214] py-20 px-4 md:px-10 text-white font-body relative overflow-hidden">
      <motion.div
        className="max-w-6xl mx-auto bg-gradient-to-br from-[#1f2937] via-[#1c1e21] to-[#111315] rounded-3xl shadow-2xl border border-blue-900 px-6 md:px-12 py-14 flex flex-col md:flex-row items-center justify-between gap-10 relative z-10"
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {/* Left: Owner Thought Card with Glowing Trace Border */}
        <motion.div
          className="relative flex-1 w-full p-8 text-center rounded-2xl bg-[#15191d] shadow-inner border border-blue-700/20 hover:shadow-blue-500/30 transition-shadow duration-500 overflow-hidden trace-border"
          initial={{ x: -30, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          {/* Tracing border lines */}
          <span className="animate-border-top absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent"></span>
          <span className="animate-border-right absolute top-0 right-0 h-full w-1 bg-gradient-to-b from-transparent via-blue-500 to-transparent"></span>
          <span className="animate-border-bottom absolute bottom-0 right-0 w-full h-1 bg-gradient-to-l from-transparent via-blue-500 to-transparent"></span>
          <span className="animate-border-left absolute bottom-0 left-0 h-full w-1 bg-gradient-to-t from-transparent via-blue-500 to-transparent"></span>

          {/* Owner Icon */}
          <div className="flex justify-center mb-5 z-10 relative">
            <motion.div
              animate={{
                scale: [1, 1.05, 1],
                boxShadow: [
                  "0 0 0px #3b82f6",
                  "0 0 20px #3b82f6",
                  "0 0 0px #3b82f6",
                ],
              }}
              transition={{ repeat: Infinity, duration: 3 }}
              className="p-4 bg-[#10141b] rounded-full border-2 border-blue-500"
            >
              <FaUserTie className="text-5xl text-blue-400" />
            </motion.div>
          </div>

          <h2 className="text-2xl font-semibold text-blue-400 mb-3 relative z-10">
            Vision from Our Founder
          </h2>
          <p className="text-gray-300 text-base md:text-lg italic mb-5 leading-relaxed relative z-10">
            "Our mission is simple — to power industries with precision, strength,
            and innovative hydraulic solutions made for tomorrow."
          </p>
          <p className="text-white font-bold uppercase text-sm tracking-wide relative z-10">
            — Rahul Kumar Singh <br /> (Founder, Cosmo Hydraulic Industries)
          </p>
        </motion.div>

        {/* Right: CTA */}
        <motion.div
          className="flex-1 w-full text-center md:text-left"
          initial={{ x: 30, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4 leading-tight">
            Let’s Build the Future Together
          </h2>
          <p className="text-gray-400 text-base md:text-lg mb-8">
            Whether you're seeking custom-engineered fittings or full-scale industrial supplies,
            our team is ready to innovate with you.
          </p>

          <div className="flex flex-col sm:flex-row justify-center md:justify-start items-center gap-4">
            {/* Contact Us Button */}
            <Link
              to="/contact"
              className="bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 px-8 py-3 text-white rounded-full text-base md:text-lg font-medium shadow-md transition duration-300"
            >
              Contact Us
            </Link>

            {/* WhatsApp Button */}
            <a
              href="https://wa.me/918587044434"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 text-green-400 border border-green-400 rounded-full text-base md:text-lg font-medium hover:bg-green-500 hover:text-white transition duration-300"
            >
              <FaWhatsapp className="text-lg" />
              WhatsApp Now
            </a>
          </div>
        </motion.div>
      </motion.div>

      {/* Glowy Background Orbs */}
      <div className="absolute -top-10 -left-10 w-80 h-80 bg-blue-500 opacity-10 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-10 -right-10 w-96 h-96 bg-blue-700 opacity-10 rounded-full blur-3xl"></div>

      {/* Custom Keyframes + Styling */}
      <style>{`
        .animate-border-top {
          animation: moveTop 4s linear infinite;
        }
        .animate-border-right {
          animation: moveRight 4s linear infinite;
        }
        .animate-border-bottom {
          animation: moveBottom 4s linear infinite;
        }
        .animate-border-left {
          animation: moveLeft 4s linear infinite;
        }

        @keyframes moveTop {
          0% { transform: translateX(-100%); opacity: 0; }
          20% { opacity: 1; }
          50% { transform: translateX(0%); opacity: 1; }
          100% { transform: translateX(100%); opacity: 0; }
        }

        @keyframes moveRight {
          0% { transform: translateY(-100%); opacity: 0; }
          20% { opacity: 1; }
          50% { transform: translateY(0%); opacity: 1; }
          100% { transform: translateY(100%); opacity: 0; }
        }

        @keyframes moveBottom {
          0% { transform: translateX(100%); opacity: 0; }
          20% { opacity: 1; }
          50% { transform: translateX(0%); opacity: 1; }
          100% { transform: translateX(-100%); opacity: 0; }
        }

        @keyframes moveLeft {
          0% { transform: translateY(100%); opacity: 0; }
          20% { opacity: 1; }
          50% { transform: translateY(0%); opacity: 1; }
          100% { transform: translateY(-100%); opacity: 0; }
        }
      `}</style>
    </section>
  );
};

export default Owner;
