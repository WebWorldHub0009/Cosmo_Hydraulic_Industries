import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaCogs, FaToolbox, FaWrench, FaBolt, FaWater,
  FaLayerGroup, FaChevronRight, FaTimesCircle
} from "react-icons/fa";
import { Link } from "react-router-dom";

// import ProductHero from "../components/ProductHero";
import productDetails from "../data/productDetails";

// Product Images
import p1 from "../assets/images/productsPage/p1.png";
import p2 from "../assets/images/productsPage/p2.png";
import p3 from "../assets/images/productsPage/p3.png";
import p4 from "../assets/images/productsPage/p4.png";
import p5 from "../assets/images/productsPage/p5.png";
import p6 from "../assets/images/productsPage/p6.png";
import p7 from "../assets/images/productsPage/p7.png";
import p8 from "../assets/images/productsPage/p8.png";
import p9 from "../assets/images/productsPage/p9.png";
import p10 from "../assets/images/productsPage/p10.png";
import p11 from "../assets/images/productsPage/p11.png";
import p12 from "../assets/images/productsPage/p12.png";
import p13 from "../assets/images/productsPage/p13.png";
import p14 from "../assets/images/productsPage/p14.png";
import p15 from "../assets/images/productsPage/p15.png";
import p16 from "../assets/images/productsPage/p16.png";
import p17 from "../assets/images/productsPage/17.png";
import p18 from "../assets/images/productsPage/18.png";
import p19 from "../assets/images/productsPage/19.png";
import p20 from "../assets/images/productsPage/20.png";
import p21 from "../assets/images/productsPage/21.png";
import ProductHero from "../Components/ProductHero";

const allProducts = [
  {
    name: "Hydraulic Ferrule Fittings",
    category: "Fittings",
    tags: ["Leak-Proof", "Heavy Duty"],
    icons: [FaToolbox, FaWater],
    image: p1,
    shortDescription: "Precision-engineered ferrule fittings for secure, high-pressure hydraulic connections.",
  },
  {
    name: "Hydraulic Fittings",
    category: "Fittings",
    tags: ["Durable", "Precision"],
    icons: [FaWrench, FaCogs],
    image: p2,
    shortDescription: "High-strength hydraulic fittings designed for maximum efficiency and reliability.",
  },
  {
    name: "SS Fittings",
    category: "Fittings",
    tags: ["Rustproof", "Long Life"],
    icons: [FaBolt, FaLayerGroup],
    image: p3,
    shortDescription: "Corrosion-resistant stainless steel fittings for critical industrial applications.",
  },
  {
    name: "Equal Elbow",
    category: "Fittings",
    tags: ["Smooth Flow", "Reliable"],
    icons: [FaWater, FaToolbox],
    image: p4,
    shortDescription: "Engineered elbows to ensure seamless directional flow without performance loss.",
  },
  {
    name: "Equal Tee",
    category: "Fittings",
    tags: ["Balanced Flow", "Tough"],
    icons: [FaCogs, FaToolbox],
    image: p5,
    shortDescription: "Triple-way tee connectors for balanced fluid distribution under high pressure.",
  },
  {
    name: "Dowty Seal",
    category: "Fittings",
    tags: ["High Pressure", "Leak-Free"],
    icons: [FaBolt, FaWater],
    image: p6,
    shortDescription: "High-grade bonded seals for reliable, leak-proof hydraulic systems.",
  },
  {
    name: "Swivel Elbow",
    category: "Fittings",
    tags: ["Flexible", "Secure"],
    icons: [FaWrench, FaLayerGroup],
    image: p7,
    shortDescription: "360° swivel elbows for smooth movement under vibration or rotation.",
  },
  {
    name: "Bulkhead Union",
    category: "Fittings",
    tags: ["Panel Mount", "Robust"],
    icons: [FaToolbox, FaCogs],
    image: p8,
    shortDescription: "Bulkhead unions for secure connections across panels in pressurized systems.",
  },
  {
    name: "Male Connector",
    category: "Fittings",
    tags: ["Threaded", "Strong"],
    icons: [FaBolt, FaToolbox],
    image: p9,
    shortDescription: "Reliable male connectors designed for seamless hydraulic coupling.",
  },
  {
    name: "Stainless Steel Pipe",
    category: "Sheets & Coils",
    tags: ["304 Grade", "Corrosion-Free"],
    icons: [FaLayerGroup, FaWrench],
    image: p10,
    shortDescription: "Premium-grade stainless pipes for industrial transport and structural use.",
  },
  {
    name: "Stainless Steel Coil",
    category: "Sheets & Coils",
    tags: ["Flexible", "Rustproof"],
    icons: [FaCogs, FaBolt],
    image: p11,
    shortDescription: "Flexible stainless coils for fabrication and precision manufacturing.",
  },
  {
    name: "Galvanized Steel Coil",
    category: "Sheets & Coils",
    tags: ["Zinc-Coated", "Tough"],
    icons: [FaLayerGroup, FaToolbox],
    image: p12,
    shortDescription: "Weather-resistant zinc-coated steel for heavy-duty applications.",
  },
  {
    name: "Galvanized Steel Sheet",
    category: "Sheets & Coils",
    tags: ["Anti-Corrosion", "Smooth Finish"],
    icons: [FaBolt, FaWrench],
    image: p13,
    shortDescription: "High-quality galvanized sheets for industrial and construction use.",
  },
  {
    name: "PPGI Coil",
    category: "Sheets & Coils",
    tags: ["Color Coated", "Strong"],
    icons: [FaLayerGroup, FaCogs],
    image: p14,
    shortDescription: "Pre-painted galvanized iron coils for roofing and industrial applications.",
  },
  {
    name: "Aluminium Sheet",
    category: "Sheets & Coils",
    tags: ["Lightweight", "Rustproof"],
    icons: [FaBolt, FaLayerGroup],
    image: p15,
    shortDescription: "Lightweight aluminium sheets with superior corrosion resistance.",
  },
  {
    name: "Hydraulic PVC Clamp",
    category: "Clamps",
    tags: ["Noise-Free", "Secure"],
    icons: [FaWrench, FaToolbox],
    image: p16,
    shortDescription: "Durable PVC clamps for vibration-free and noise-free hydraulic setups.",
  },
  {
    name: "PVC Heavy Clamp",
    category: "Clamps",
    tags: ["Heavy Duty", "Stable"],
    icons: [FaCogs, FaLayerGroup],
    image: p17,
    shortDescription: "Industrial-grade heavy clamps for large-scale pipe installations.",
  },
  {
    name: "Rubber Coated Clamp",
    category: "Clamps",
    tags: ["Anti-Vibration", "Rustproof"],
    icons: [FaWater, FaBolt],
    image: p18,
    shortDescription: "Protective rubber-coated clamps for secure and corrosion-free fittings.",
  },
  {
    name: "U-Bolt Clamp",
    category: "Clamps",
    tags: ["Tight Grip", "Durable"],
    icons: [FaToolbox, FaCogs],
    image: p19,
    shortDescription: "Heavy-duty U-bolt clamps for maximum grip and stability.",
  },
  {
    name: "Heavy Duty Pipe Clamp",
    category: "Clamps",
    tags: ["Strong Hold", "Anti-Vibe"],
    icons: [FaLayerGroup, FaWrench],
    image: p20,
    shortDescription: "Robust clamps for vibration absorption in heavy pipelines.",
  },
  {
    name: "Split Type Clamp",
    category: "Clamps",
    tags: ["Easy Install", "Secure"],
    icons: [FaToolbox, FaWrench],
    image: p21,
    shortDescription: "Quick-install split clamps for efficient pipe maintenance.",
  },
];

const categories = ["All", "Fittings", "Sheets & Coils", "Clamps"];

const ProductPage = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedProduct, setSelectedProduct] = useState(null);

  const filteredProducts =
    activeCategory === "All"
      ? allProducts
      : allProducts.filter((p) => p.category === activeCategory);

  const closeModal = () => setSelectedProduct(null);

  return (
    <>
      <ProductHero />

      <section id="products" className="w-full min-h-screen bg-[#1b1f23] text-white px-4 py-20 md:px-10 lg:px-20">
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <h2 className="text-4xl md:text-5xl font-extrabold leading-tight text-[#3b82f6]">
            Premium{" "}
            <span className="bg-gradient-to-r from-[#ffffff] to-[#999] bg-clip-text text-transparent">
              Hydraulic & Industrial Components
            </span>
          </h2>
          <p className="text-gray-300 text-base md:text-lg">
            Engineered with precision, built for reliability — explore Cosmo Hydraulic Industries’ trusted product range.
          </p>
          <div className="mt-8 flex justify-center gap-4 flex-wrap">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2 rounded-full font-semibold text-sm transition-all border
                  ${
                    activeCategory === cat
                      ? "bg-[#3b82f6] text-white border-transparent"
                      : "bg-[#2d2d2d] text-gray-300 border-gray-600 hover:bg-[#3b82f6] hover:text-white"
                  }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {filteredProducts.map((product, i) => {
            const [Tag1Icon, Tag2Icon] = product.icons;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.03, duration: 0.5 }}
                onClick={() => setSelectedProduct(product.name)}
                className="cursor-pointer bg-[#2d2d2d] border border-gray-700 rounded-2xl shadow hover:shadow-lg p-5 flex flex-col items-center text-center transition duration-300 hover:scale-[1.02]"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-28 h-28 object-contain mb-4"
                />
                <h3 className="text-lg font-bold text-white mb-1">
                  {product.name}
                </h3>
                <p className="text-gray-400 text-sm mb-3 line-clamp-1">
                  {product.shortDescription}
                </p>
                <div className="flex gap-2 text-sm text-gray-300 mb-5">
                  <span className="flex items-center gap-1 bg-blue-900/30 px-2 py-1 rounded-full">
                    <Tag1Icon /> {product.tags[0]}
                  </span>
                  <span className="flex items-center gap-1 bg-yellow-900/30 px-2 py-1 rounded-full">
                    <Tag2Icon /> {product.tags[1]}
                  </span>
                </div>
                <button className="mt-auto flex items-center gap-2 text-white bg-[#3b82f6] px-4 py-2 rounded-full font-semibold hover:bg-blue-600 transition">
                  View Details <FaChevronRight className="text-sm" />
                </button>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Product Modal */}
      <AnimatePresence>
        {selectedProduct && (
          <motion.div
            className="fixed inset-0 bg-black/60 backdrop-blur-lg z-50 flex justify-center items-center px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              initial={{ scale: 0.9, y: 40 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 40 }}
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
              className="bg-[#1b1f23] text-white w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-xl shadow-lg relative grid md:grid-cols-2 sm:grid-cols-1"
            >
              <button
                className="absolute top-4 right-4 text-gray-400 hover:text-red-500 text-xl z-10"
                onClick={closeModal}
              >
                <FaTimesCircle />
              </button>

              <div className="bg-[#2d2d2d] flex justify-center items-center p-6">
                <img
                  src={productDetails[selectedProduct]?.image}
                  alt={selectedProduct}
                  className="w-full max-w-xs object-contain"
                />
              </div>

              <div className="p-6 flex flex-col justify-center text-center md:text-left">
                <h3 className="text-2xl font-bold mb-4">
                  {productDetails[selectedProduct]?.name}
                </h3>
                <p className="text-gray-300 mb-6">
                  {productDetails[selectedProduct]?.description}
                </p>
                <div className="grid grid-cols-2 gap-3 mb-6">
                  {productDetails[selectedProduct]?.features?.map((f, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-2 bg-[#2d2d2d] px-3 py-2 rounded-md text-sm text-gray-300"
                    >
                      <f.icon className="text-[#3b82f6]" />
                      {f.label}
                    </div>
                  ))}
                </div>
                <Link to="/contact">
                  <button className="cursor-pointer bg-[#3b82f6] text-white px-6 py-2 rounded-full font-semibold hover:bg-blue-600 transition-all">
                    Get Enquiry
                  </button>
                </Link>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ProductPage;
