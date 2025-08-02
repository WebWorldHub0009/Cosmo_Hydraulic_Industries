import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaEnvelope,
  FaWhatsapp,
  FaLinkedin,
  FaPhoneAlt,
  FaGlobeAsia,
} from "react-icons/fa";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import VisitorCounter from "./VisitorCounter";
import Translator from "./Translator";
import logo from "../assets/images/logo3d.png";

const containerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const services = [
  "Hydraulic Fittings",
  "Hydraulic Ferrules",
  "Dowty Seal",
  "Equal Elbow",
  "Equal Tee",
  "Hydraulic Clamps",
  "Swivel Elbow",
  "Bulkhead Fittings",
  "Banjo Fittings",
];

export default function Footer() {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.2 });

  useEffect(() => {
    controls.start(inView ? "visible" : "hidden");
  }, [inView, controls]);

  return (
    <motion.footer
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={controls}
      className="bg-gradient-to-br from-[#ecf2ff] via-white to-[#dbeafe] text-black px-6 md:px-16 pt-20 pb-10 relative overflow-hidden"
    >
      {/* Background Accents */}
      <div className="absolute -top-20 left-[-100px] w-[300px] h-[300px] bg-blue-500 blur-[130px] opacity-10 rounded-full -z-10" />
      <div className="absolute -bottom-20 right-[-100px] w-[300px] h-[300px] bg-blue-700 blur-[150px] opacity-10 rounded-full -z-10" />

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 text-sm z-10 relative">
        {/* About Cosmo Hydraulic Industries */}
        <div className="flex flex-col space-y-3 mt-2">
          <img src={logo} alt="Cosmo Hydraulic Industries Logo" className="w-[80px] md:w-[150px]" />
          <h4 className="text-blue-900 font-semibold mt-6">About Cosmo Hydraulic</h4>
          <p className="leading-relaxed text-gray-800 ">
            Cosmo Hydraulic Industries, based in Surajpur, Greater Noida, is a trusted name in high-performance hydraulic fittings and industrial solutions — offering precision manufacturing with innovation since inception.
          </p>
        </div>

        {/* Quick Links + Contact */}
        <div>
          <h4 className="text-blue-900 font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-gray-800">
            {[
              ["Home", "/"],
              ["About", "/about"],
              ["Products", "/products"],
              ["Showcase", "/showcase"],
              ["Contact", "/contact"],
              ["Documents", "/documents"],
            ].map(([text, link], i) => (
              <li key={i}>
                <Link to={link} className="hover:text-blue-800 transition duration-300">
                  {text}
                </Link>
              </li>
            ))}
          </ul>

          <h4 className="mt-6 text-blue-900 font-semibold">Contact</h4>
          <ul className="mt-2 space-y-2 text-gray-800">
            <li>
              <a
                href="mailto:Info@cosmohydraulic.com"
                className="flex items-center space-x-2 hover:text-blue-700 transition"
              >
                <FaEnvelope className="text-blue-700" />
                <span>Info@cosmohydraulic.com</span>
              </a>
            </li>
            <li>
              <a
                href="tel:+918587044434"
                className="flex items-center space-x-2 hover:text-blue-700 transition"
              >
                <FaPhoneAlt className="text-blue-700" />
                <span>+91 85870 44434</span>
              </a>
            </li>
          </ul>
        </div>

        {/* Raw Materials */}
        <div>
          <h4 className="text-blue-900 font-semibold mb-4">Raw Materials</h4>
          <ul className="space-y-2 text-gray-800">
            {services.map((item, i) => (
              <li key={i}>
                <Link
                  to="/products"
                  className="hover:text-blue-700 transition duration-300"
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Address & Socials */}
        <div>
          <h4 className="text-blue-900 font-semibold mb-4">Our Address</h4>
          <address className="not-italic leading-relaxed text-gray-800 mb-4">
            Cosmo Hydraulic Industries<br />
            Near ARE Metal, I-149 Site C<br />
            Surajpur Industrial Area, Surajpur<br />
            Greater Noida, Uttar Pradesh 201306
          </address>

          <div className="flex">
            <Translator />
            <div className="w-32 md:w-16"></div>
          </div>

          {/* Social Icons */}
          <div className="mt-6 flex flex-wrap gap-4">
            <a
              href="https://wa.me/918587044434"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-900 hover:text-green-600 transition"
            >
              <FaWhatsapp size={20} />
            </a>
            <a
              href="https://www.instagram.com/cosmohyrdaulic/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-900 hover:text-pink-600 transition"
            >
              <FaInstagram size={20} />
            </a>
            <a
              href="https://www.facebook.com/cosmohydraulic/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-900 hover:text-blue-600 transition"
            >
              <FaFacebookF size={20} />
            </a>
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-900 hover:text-blue-800 transition"
            >
              <FaLinkedin size={20} />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-900 hover:text-black transition"
            >
              <FaTwitter size={20} />
            </a>
            <a
              href="https://share.google/zAcBdiaAZ86CLkt6m"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-900 hover:text-yellow-600 transition"
            >
              <FaGlobeAsia size={20} />
            </a>
          
          </div>
        </div>
      </div>

      {/* Bottom Strip */}
      <div className="mt-10 text-center text-xs text-gray-700 border-t border-gray-300 pt-6 space-y-2 relative z-10">
        <VisitorCounter />
        <p>© {new Date().getFullYear()} Cosmo Hydraulic Industries. All rights reserved.</p>
        <p>
          Designed & Developed by{" "}
          <a
            href="https://webworldhub.co.in"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-blue-900 hover:text-blue-700 transition"
          >
            Web World Hub
          </a>
        </p>
      </div>
    </motion.footer>
  );
}
