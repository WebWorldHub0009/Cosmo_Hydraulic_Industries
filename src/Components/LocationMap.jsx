import React from "react";
import { FaMapMarkedAlt } from "react-icons/fa";

const LocationMap = () => {
  return (
    <section className="px-6 lg:px-20 py-20 bg-[#0a1626] text-white relative overflow-hidden">
      {/* Glowing Background Accent */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[#3b82f6] opacity-20 blur-[180px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-[#1b1f23] opacity-40 blur-[150px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
        {/* LEFT CONTENT */}
        <div className="space-y-6">
          <div className="flex items-center gap-4">
            <FaMapMarkedAlt className="text-5xl text-[#3b82f6] drop-shadow-lg" />
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight">
              Find <span className="text-[#3b82f6]">Cosmo Hydraulic Industries</span>
            </h2>
          </div>

          <p className="text-gray-300 text-lg leading-relaxed">
            Visit our state-of-the-art manufacturing facility and explore our
            premium hydraulic fittings and industrial solutions. We’re located
            in the heart of Greater Noida’s Surajpur Industrial Area.
          </p>

          <div className="bg-[#1b1f23] border border-gray-700 rounded-2xl p-6 shadow-lg shadow-[#3b82f6]/20">
            <h4 className="text-xl font-semibold mb-2 text-[#3b82f6]">
              Address
            </h4>
            <p className="text-gray-300">
              Cosmo Hydraulic Industries, near ARE Metal, I-149 Site C, Surajpur
              Industrial Area, Surajpur, Greater Noida, Uttar Pradesh 201306
            </p>
          </div>
        </div>

        {/* RIGHT MAP */}
        <div className="overflow-hidden rounded-3xl shadow-lg shadow-[#3b82f6]/30 border border-gray-700">
          <iframe
            title="Cosmo Hydraulic Industries Location"
            src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d112183.85914847662!2d77.43271418850226!3d28.51730084300848!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x390d0313844cfa09%3A0xcbffafc649d50ccd!2sCosmo%20Hydraulic%20Industries%2C%20near%20ARE%20Metal%2C%20I-149%20Site%20C%2C%20Surajpur%20Industrial%20Area%2C%20Surajpur%2C%20Greater%20Noida%2C%20Uttar%20Pradesh%20201306!3m2!1d28.517325699999997!2d77.5151156!5e0!3m2!1sen!2sin!4v1754125921151!5m2!1sen!2sin"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full h-[300px] sm:h-[400px] lg:h-[450px]"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default LocationMap;
