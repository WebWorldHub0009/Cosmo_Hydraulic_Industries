import React from "react";
import { FaFilePdf, FaEye, FaDownload, FaCheckCircle } from "react-icons/fa";

import DocumentsHero from "../Components/DocumentsHero";

// Certificate PDFs
import udyamPDF from "../assets/Certificates/udyam.pdf";
import gstPDF from "../assets/Certificates/gst.pdf";
import isoPDF from "../assets/Certificates/iso.pdf";
import appendixPDF from "../assets/Certificates/appendix.pdf";

const certificates = [
  {
    title: "Udyam Registration Certificate",
    company: "Cosmo Hydraulic Industries",
    description:
      "Registered under the Udyam scheme by the Government of India, certifying our MSME status for quality manufacturing.",
    pdf: udyamPDF,
  },
  {
    title: "GST Registration Certificate",
    company: "Cosmo Hydraulic Industries",
    description:
      "Legally registered under India's GST framework, ensuring tax compliance and transparent operations.",
    pdf: gstPDF,
  },
  {
    title: "ISO 9001:2015 Certificate",
    company: "Cosmo Hydraulic Industries",
    description:
      "Certified for Quality Management Systems under ISO 9001:2015 standards, validating our commitment to excellence.",
    pdf: isoPDF,
  },
  {
    title: "Appendix Certificate",
    company: "Cosmo Hydraulic Industries",
    description:
      "Official appendix certification for our specialized manufacturing and export compliance.",
    pdf: appendixPDF,
  },
];

const Certificates = () => {
  return (
    <>
      <DocumentsHero />
      <section className="w-full bg-[#0a1626] min-h-screen px-6 py-20 text-white font-sans">
        {/* Header */}
        <div className="text-center mb-14">
          <h1 className="text-4xl md:text-5xl font-bold text-[#3b82f6] mb-4">
            Company Certifications
          </h1>
          {/* <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
            Cosmo Hydraulic Industries is a fully registered and certified manufacturer.  
            View or download our government-approved and internationally recognized certifications.
          </p> */}
        </div>

        {/* Certificate Cards */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
          {certificates.map((cert, idx) => (
            <div
              key={idx}
              className="relative overflow-hidden bg-[#1b2838] rounded-2xl border border-gray-700 shadow-md hover:shadow-[#3b82f6]/40 transition-all duration-300 group p-6 flex flex-col justify-between"
            >
              {/* Ribbon */}
              <span className="absolute top-4 right-4 bg-[#3b82f6] text-white px-3 py-1 text-xs rounded-md shadow-md tracking-wide">
                Verified
              </span>

              {/* Icon */}
              <div className="flex items-center gap-4 mb-6">
                <div className="p-4 bg-[#0f2238] rounded-full shadow-inner border border-[#3b82f6]/40">
                  <FaFilePdf className="text-4xl text-[#3b82f6]" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold">{cert.title}</h3>
                  <p className="text-sm text-gray-400 mt-1">{cert.company}</p>
                </div>
              </div>

              {/* Description */}
              <p className="text-sm text-gray-300 leading-relaxed flex-grow">
                {cert.description}
              </p>

              {/* Buttons */}
              <div className="flex justify-between items-center mt-6 gap-4">
                <a
                  href={cert.pdf}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full px-4 py-2 bg-[#3b82f6] text-white rounded-lg hover:bg-[#2563eb] transition-all duration-300 text-sm font-medium"
                >
                  <FaEye />
                  View Document
                </a>
                <a
                  href={cert.pdf}
                  download
                  className="flex items-center justify-center gap-2 w-full px-4 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-600 transition-all duration-300 text-sm font-medium"
                >
                  <FaDownload />
                  Download PDF
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Note */}
        <div className="mt-16 text-center">
          <FaCheckCircle className="text-3xl mx-auto mb-3 text-[#3b82f6]" />
          <p className="text-sm text-gray-400">
            These documents validate Cosmo Hydraulic Industries as a trusted, certified, and quality-driven manufacturer in the hydraulic industry.
          </p>
        </div>
      </section>
    </>
  );
};

export default Certificates;
