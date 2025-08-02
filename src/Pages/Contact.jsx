import React from "react";
import { motion } from "framer-motion";
import {
  FaFacebookF,
  FaInstagram,
  FaMapMarkerAlt,
  FaIndustry,
  FaGlobeAsia,
} from "react-icons/fa";
import { SiGooglemaps, SiBaidu} from "react-icons/si";
import { FaHandshake } from "react-icons/fa6"; // For TradeIndia
import bgContact from "../assets/images/contact-bg.avif";

import ContactHero from "../Components/ContactHero";
import LocationMap from "../Components/LocationMap";

const ContactPage = () => {
  return (
    <>
      <ContactHero />
      <section
        id="contactsection"
        className="w-full min-h-screen py-16 flex flex-col lg:flex-row bg-[#051220] text-white"
      >
        {/* LEFT SECTION */}
        <motion.div
          initial={{ x: -60, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="w-full lg:w-1/2 px-6 sm:px-12 lg:px-20 py-16 flex flex-col justify-between"
        >
          <div className="flex flex-col justify-between h-full">
            <div>
              <h1 className="text-4xl sm:text-5xl font-bold mb-6 border-b-4 border-[#3b82f6] inline-block pb-2">
                Let’s Connect
              </h1>
              <p className="text-xl tracking-wide italic mb-10 text-gray-300">
                For premium hydraulic fittings, industrial solutions, or
                partnership inquiries — we’re here to help.
              </p>

              <div className="space-y-6 text-sm sm:text-base text-gray-300">
                <div>
                  <h4 className="font-bold">Phone</h4>
                  <p>+91 85870 44434</p>
                </div>
                <div>
                  <h4 className="font-bold">Email</h4>
                  <p>info@cosmohydraulic.com</p>
                </div>
                <div>
                  <h4 className="font-bold">Address</h4>
                  <p>
                    Cosmo Hydraulic Industries, near ARE Metal, I-149 Site C,
                    Surajpur Industrial Area, Surajpur, Greater Noida, Uttar
                    Pradesh 201306
                  </p>
                </div>
              </div>
            </div>

            {/* SOCIAL ICONS */}
            <div className="mt-10 flex flex-wrap gap-4 text-xl">
              <a
                href="https://share.google/zAcBdiaAZ86CLkt6m"
                target="_blank"
                rel="noreferrer"
                className="hover:text-[#3b82f6] transition"
              >
                <SiGooglemaps />
              </a>
              <a
                href="https://www.indiamart.com/cosmohydraulicindustries/profile.html"
                target="_blank"
                rel="noreferrer"
                className="hover:text-[#3b82f6] transition"
              >
                <FaHandshake />
              </a>
              <a
                href="https://www.instagram.com/cosmohyrdaulic/"
                target="_blank"
                rel="noreferrer"
                className="hover:text-[#3b82f6] transition"
              >
                <FaInstagram />
              </a>
              <a
                href="https://b2bstreets.com/cosmo-hydraulic-industries"
                target="_blank"
                rel="noreferrer"
                className="hover:text-[#3b82f6] transition"
              >
                <FaIndustry />
              </a>
              <a
                href="https://www.facebook.com/cosmohydraulic/"
                target="_blank"
                rel="noreferrer"
                className="hover:text-[#3b82f6] transition"
              >
                <FaFacebookF />
              </a>
              <a
                href="https://www.tradeindia.com/cosmo-hydraulic-industries-25155245/"
                target="_blank"
                rel="noreferrer"
                className="hover:text-[#3b82f6] transition"
              >
                <FaGlobeAsia />
              </a>
            </div>
          </div>
        </motion.div>

        {/* RIGHT FORM SECTION */}
        <motion.div
          initial={{ y: 60, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="w-full lg:w-1/2 relative flex items-center justify-center"
        >
          {/* BACKGROUND IMAGE */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${bgContact})` }}
          ></div>
          <div className="absolute inset-0 bg-black opacity-70"></div>

          {/* FORM */}
          <form
            action="https://formsubmit.co/info@cosmohydraulic.com"
            method="POST"
            className="relative z-10 w-full px-6 sm:px-12 lg:px-20 py-16 text-white"
          >
            <h3 className="text-2xl font-bold uppercase border-b-2 border-white pb-2 mb-6">
              Contact Form
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                type="text"
                name="name"
                placeholder="Name"
                required
                className="bg-transparent border-b border-white p-2 focus:outline-none text-white placeholder-gray-300"
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                required
                className="bg-transparent border-b border-white p-2 focus:outline-none text-white placeholder-gray-300"
              />
              <input
                type="text"
                name="phone"
                placeholder="Phone"
                required
                className="bg-transparent border-b border-white p-2 focus:outline-none text-white placeholder-gray-300"
              />
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                className="bg-transparent border-b border-white p-2 focus:outline-none text-white placeholder-gray-300"
              />
              <textarea
                name="message"
                placeholder="Tell us what you're interested in"
                required
                className="col-span-1 sm:col-span-2 bg-transparent border-b border-white p-2 focus:outline-none resize-none h-24 text-white placeholder-gray-300"
              ></textarea>
              <button
                type="submit"
                className="cursor-pointer col-span-1 sm:col-span-2 bg-[#3b82f6] text-white font-semibold py-3 mt-4 rounded-full hover:bg-white hover:text-[#3b82f6] transition-all duration-300"
              >
                Send Message
              </button>
            </div>

            {/* HIDDEN INPUTS */}
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_next" value="https://cosmohydraulic.com" />
          </form>
        </motion.div>
      </section>

      {/* MAP SECTION */}
      <LocationMap />
    </>
  );
};

export default ContactPage;
