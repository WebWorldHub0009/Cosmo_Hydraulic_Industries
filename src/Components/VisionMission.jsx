import React from "react";
import bgImage from "../assets/images/visionmissionbg.jpg"; // Replace with a relevant hydraulic background if needed

const VisionMissionModern = () => {
  return (
    <section
      className="relative w-full min-h-screen flex items-center justify-center text-white overflow-hidden"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/70 z-0" />

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 py-24 space-y-20 text-center">
        {/* Mission */}
        <div className="space-y-6">
          <div className="flex items-center justify-center gap-4">
            <span className="w-3 h-3 bg-blue-500 rounded-full animate-pulse"></span>
            <div className="w-20 h-[2px] bg-blue-500 animate-pulse"></div>
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold uppercase tracking-wide">
            Our Mission
          </h2>
          <p className="text-gray-300 text-base md:text-lg max-w-3xl mx-auto leading-relaxed">
            To deliver high-precision, durable hydraulic fittings and components that empower
            industries with performance, reliability, and innovation. At Cosmo Hydraulic Industries,
            we are driven by quality, built on trust.
          </p>
        </div>

        {/* Vision */}
        <div className="space-y-6">
          <div className="flex items-center justify-center gap-4">
            <span className="w-3 h-3 bg-blue-500 rounded-full animate-pulse"></span>
            <div className="w-20 h-[2px] bg-blue-500 animate-pulse"></div>
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold uppercase tracking-wide">
            Our Vision
          </h2>
          <p className="text-gray-300 text-base md:text-lg max-w-3xl mx-auto leading-relaxed">
            To become a global benchmark in hydraulic manufacturing — known for innovation,
            craftsmanship, and delivering dependable solutions that shape the future of
            industrial machinery worldwide.
          </p>
        </div>
      </div>
    </section>
  );
};

export default VisionMissionModern;
