import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FaCogs, FaToolbox, FaWrench, FaBolt, FaWater,
  FaLayerGroup, FaChevronRight
} from "react-icons/fa";
import { Link } from "react-router-dom";

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


import p22 from "../assets/images/productsPage/p22.jpg";
import p23 from "../assets/images/productsPage/p23.jpg";
import p24 from "../assets/images/productsPage/p24.jpg";
import p25 from "../assets/images/productsPage/p25.png";
import p26 from "../assets/images/productsPage/p26.png";
import p27 from "../assets/images/productsPage/p27.jpg";
import p28 from "../assets/images/productsPage/p28.png";
import p29 from "../assets/images/productsPage/p29.jpg";
import p30 from "../assets/images/productsPage/p30.jpg";
import p31 from "../assets/images/productsPage/p31.jpg";
import p32 from "../assets/images/productsPage/p32.webp";
import p33 from "../assets/images/productsPage/p33.png";
// import p34 from "../assets/images/productsPage/p34.png";
import p35 from "../assets/images/productsPage/p35.png";
import p36 from "../assets/images/productsPage/p36.png";
import p37 from "../assets/images/productsPage/p37.jpg";
import p38 from "../assets/images/productsPage/p38.jpg";
import p39 from "../assets/images/productsPage/p39.jpg";
import p40 from "../assets/images/productsPage/p40.png";
import p41 from "../assets/images/productsPage/p41.jpg";
import p42 from "../assets/images/productsPage/p42.png";
import p43 from "../assets/images/productsPage/p43.jpg";
import p44 from "../assets/images/productsPage/p44.jpg";
import union from "../assets/images/productsPage/union.png";


import pp from "../assets/images/productsPage/pp.png";

import ProductHero from "../Components/ProductHero";

const allProducts = [
   {
    name: "Allen Plug",
    slug: "allen-plug",
    category: "Fittings",
    tags: ["Sealing", "Reliable"],
    icons: [FaBolt, FaToolbox],
    image: p22,
    shortDescription: "Strong allen plugs for secure hydraulic sealing applications.",
  },
  {
    name: "Banjo Connector",
    slug: "banjo-connector",
    category: "Fittings",
    tags: ["Compact", "Leak-Free"],
    icons: [FaWater, FaCogs],
    image: p25,
    shortDescription: "Banjo connectors for compact, leak-proof hydraulic systems.",
  },
  {
    name: "Banjo Tee Connector",
    slug: "banjo-tee-connector",
    category: "Fittings",
    tags: ["Triple Flow", "Secure"],
    icons: [FaLayerGroup, FaToolbox],
    image: p23,
    shortDescription: "Banjo tee connectors for multiple fluid pathways in tight spaces.",
  },
  {
    name: "Bonded Seal",
    slug: "bonded-seal",
    category: "Seals",
    tags: ["Leak-Proof", "Durable"],
    icons: [FaBolt, FaWater],
    image: p24,
    shortDescription: "Reliable bonded seals designed for high-pressure conditions.",
  },
  {
    name: "Bulkhead Elbow Coupling",
    slug: "bulkhead-elbow-coupling",
    category: "Fittings",
    tags: ["Secure", "Angle Mount"],
    icons: [FaWrench, FaCogs],
    image: p26,
    shortDescription: "Elbow couplings for bulkhead-mounted hydraulic connections.",
  },


  {
    name: "Coupling Nut",
    slug: "coupling-nut",
    category: "Fittings",
    tags: ["Threaded", "Tight Fit"],
    icons: [FaToolbox, FaLayerGroup],
    image: p27,
    shortDescription: "High-strength coupling nuts for reliable hydraulic fastening.",
  },
  {
    name: "Equal Cross Coupling",
    slug: "equal-cross-coupling",
    category: "Fittings",
    tags: ["Balanced", "Multi-Directional"],
    icons: [FaWater, FaBolt],
    image: p28,
    shortDescription: "Cross couplings for balanced multi-directional flow systems.",
  },
  {
    name: "Half Adapter",
    slug: "half-adapter",
    category: "Adapters",
    tags: ["Durable", "Precision"],
    icons: [FaCogs, FaWrench],
    image: p29,
    shortDescription: "Half adapters for versatile hydraulic system connections.",
  },
  {
    name: "Hex Plug",
    slug: "hex-plug",
    category: "Fittings",
    tags: ["Sealing", "Threaded"],
    icons: [FaToolbox, FaBolt],
    image: p30,
    shortDescription: "Threaded hex plugs for strong and leak-proof sealing.",
  },
  {
    name: "Hose Elbow",
    slug: "hose-elbow",
    category: "Hoses",
    tags: ["Flexible", "Durable"],
    icons: [FaLayerGroup, FaWater],
    image: p31,
    shortDescription: "Durable hose elbows designed for fluid flow redirection.",
  },



  {
    name: "Hose Nut",
    slug: "hose-nut",
    category: "Hoses",
    tags: ["Secure", "Threaded"],
    icons: [FaWrench, FaBolt],
    image: p32,
    shortDescription: "Threaded hose nuts for leak-free hydraulic hose fittings.",
  },
  {
    name: "Hydraulic Adapter",
    slug: "hydraulic-adapter",
    category: "Adapters",
    tags: ["Versatile", "Reliable"],
    icons: [FaToolbox, FaCogs],
    image: p33,
    shortDescription: "Adapters for versatile hydraulic system connections.",
  },
 
  {
    name: "Hydraulic Check Valve",
    slug: "hydraulic-check-valve",
    category: "Valves",
    tags: ["One-Way", "Reliable"],
    icons: [FaWater, FaCogs],
    image: p35,
    shortDescription: "Check valves for ensuring one-way hydraulic flow and safety.",
  },
  {
    name: "Hydraulic Ferrule",
    slug: "hydraulic-ferrule",
    category: "Fittings",
    tags: ["Leak-Proof", "Secure"],
    icons: [FaToolbox, FaBolt],
    image: p36,
    shortDescription: "High-quality ferrules for secure hydraulic pipe fittings.",
  },
  {
    name: "Hydraulic Flow Control Valve",
    slug: "hydraulic-flow-control-valve",
    category: "Valves",
    tags: ["Flow Control", "Efficient"],
    icons: [FaCogs, FaWrench],
    image: p37,
    shortDescription: "Flow control valves for precise regulation of hydraulic systems.",
  },
  

  {
    name: "Hydraulic Welding Nipple",
    slug: "hydraulic-welding-nipple",
    category: "Fittings",
    tags: ["Strong", "Leak-Free"],
    icons: [FaBolt, FaToolbox],
    image: p38,
    shortDescription: "Welding nipples for permanent and durable hydraulic connections.",
  },
  {
    name: "Parallel Male Stud Coupling",
    slug: "parallel-male-stud-coupling",
    category: "Couplings",
    tags: ["Threaded", "Secure"],
    icons: [FaLayerGroup, FaCogs],
    image: pp,
    shortDescription: "Parallel male stud couplings for precise hydraulic connections.",
  },
  {
    name: "Quick Release Coupling",
    slug: "quick-release-coupling",
    category: "Couplings",
    tags: ["Fast", "Convenient"],
    icons: [FaWrench, FaBolt],
    image: p40,
    shortDescription: "Quick release couplings for fast hydraulic connections.",
  },
  {
    name: "Straight Equal Coupling",
    slug: "straight-equal-coupling",
    category: "Couplings",
    tags: ["Strong", "Leak-Free"],
    icons: [FaToolbox, FaWater],
    image: p41,
    shortDescription: "Straight couplings for leak-proof hydraulic flow.",
  },
  {
    name: "Straight Union Coupling",
    slug: "straight-union-coupling",
    category: "Couplings",
    tags: ["Reliable", "Durable"],
    icons: [FaCogs, FaLayerGroup],
    image: union,
    shortDescription: "Union couplings for secure, inline hydraulic pipe connections.",
  },



  {
    name: "Swivel Elbow Coupling",
    slug: "swivel-elbow-coupling",
    category: "Couplings",
    tags: ["Flexible", "Secure"],
    icons: [FaBolt, FaToolbox],
    image: p42,
    shortDescription: "Swivel elbow couplings for flexible hydraulic piping.",
  },
  {
    name: "Swivel Male Stud Coupling",
    slug: "swivel-male-stud-coupling",
    category: "Couplings",
    tags: ["Threaded", "Flexible"],
    icons: [FaWrench, FaLayerGroup],
    image: p43,
    shortDescription: "Swivel male stud couplings for versatile hydraulic connections.",
  },
  {
    name: "Thread Reducer",
    slug: "thread-reducer",
    category: "Fittings",
    tags: ["Threaded", "Adjustable"],
    icons: [FaToolbox, FaCogs],
    image: p44,
    shortDescription: "Thread reducers for adapting hydraulic threads of different sizes.",
  },
  {
    name: "Hydraulic Ferrule Fittings",
    slug: "hydraulic-ferrule-fittings",
    category: "Fittings",
    tags: ["Leak-Proof", "Heavy Duty"],
    icons: [FaToolbox, FaWater],
    image: p1,
    shortDescription:
      "Precision-engineered ferrule fittings for secure, high-pressure hydraulic connections.",
  },
  {
    name: "Hydraulic Fittings",
    slug: "hydraulic-fittings",
    category: "Fittings",
    tags: ["Durable", "Precision"],
    icons: [FaWrench, FaCogs],
    image: p2,
    shortDescription:
      "High-strength hydraulic fittings designed for maximum efficiency and reliability.",
  },
  {
    name: "SS Fittings",
    slug: "ss-fittings",
    category: "Fittings",
    tags: ["Rustproof", "Long Life"],
    icons: [FaBolt, FaLayerGroup],
    image: p3,
    shortDescription:
      "Corrosion-resistant stainless steel fittings for critical industrial applications.",
  },


  
  {
    name: "Equal Elbow",
    slug: "equal-elbow",
    category: "Fittings",
    tags: ["Smooth Flow", "Reliable"],
    icons: [FaWater, FaToolbox],
    image: p4,
    shortDescription:
      "Engineered elbows to ensure seamless directional flow without performance loss.",
  },
  {
    name: "Equal Tee",
    slug: "equal-tee",
    category: "Fittings",
    tags: ["Balanced Flow", "Tough"],
    icons: [FaCogs, FaToolbox],
    image: p5,
    shortDescription:
      "Triple-way tee connectors for balanced fluid distribution under high pressure.",
  },
  {
    name: "Dowty Seal",
    slug: "dowty-seal",
    category: "Fittings",
    tags: ["High Pressure", "Leak-Free"],
    icons: [FaBolt, FaWater],
    image: p6,
    shortDescription:
      "High-grade bonded seals for reliable, leak-proof hydraulic systems.",
  },
  {
    name: "Swivel Elbow",
    slug: "swivel-elbow",
    category: "Fittings",
    tags: ["Flexible", "Secure"],
    icons: [FaWrench, FaLayerGroup],
    image: p7,
    shortDescription:
      "360° swivel elbows for smooth movement under vibration or rotation.",
  },
  {
    name: "Bulkhead Union",
    slug: "bulkhead-union",
    category: "Fittings",
    tags: ["Panel Mount", "Robust"],
    icons: [FaToolbox, FaCogs],
    image: p8,
    shortDescription:
      "Bulkhead unions for secure connections across panels in pressurized systems.",
  },
  {
    name: "Male Connector",
    slug: "male-connector",
    category: "Fittings",
    tags: ["Threaded", "Strong"],
    icons: [FaBolt, FaToolbox],
    image: p9,
    shortDescription:
      "Reliable male connectors designed for seamless hydraulic coupling.",
  },
  {
    name: "Stainless Steel Pipe",
    slug: "stainless-steel-pipe",
    category: "Sheets & Coils",
    tags: ["304 Grade", "Corrosion-Free"],
    icons: [FaLayerGroup, FaWrench],
    image: p10,
    shortDescription:
      "Premium-grade stainless pipes for industrial transport and structural use.",
  },
  {
    name: "Stainless Steel Coil",
    slug: "stainless-steel-coil",
    category: "Sheets & Coils",
    tags: ["Flexible", "Rustproof"],
    icons: [FaCogs, FaBolt],
    image: p11,
    shortDescription:
      "Flexible stainless coils for fabrication and precision manufacturing.",
  },
  {
    name: "Galvanized Steel Coil",
    slug: "galvanized-steel-coil",
    category: "Sheets & Coils",
    tags: ["Zinc-Coated", "Tough"],
    icons: [FaLayerGroup, FaToolbox],
    image: p12,
    shortDescription:
      "Weather-resistant zinc-coated steel for heavy-duty applications.",
  },
  {
    name: "Galvanized Steel Sheet",
    slug: "galvanized-steel-sheet",
    category: "Sheets & Coils",
    tags: ["Anti-Corrosion", "Smooth Finish"],
    icons: [FaBolt, FaWrench],
    image: p13,
    shortDescription:
      "High-quality galvanized sheets for industrial and construction use.",
  },
  {
    name: "PPGI Coil",
    slug: "ppgi-coil",
    category: "Sheets & Coils",
    tags: ["Color Coated", "Strong"],
    icons: [FaLayerGroup, FaCogs],
    image: p14,
    shortDescription:
      "Pre-painted galvanized iron coils for roofing and industrial applications.",
  },
  {
    name: "Aluminium Sheet",
    slug: "aluminium-sheet",
    category: "Sheets & Coils",
    tags: ["Lightweight", "Rustproof"],
    icons: [FaBolt, FaLayerGroup],
    image: p15,
    shortDescription:
      "Lightweight aluminium sheets with superior corrosion resistance.",
  },
  {
    name: "Hydraulic PVC Clamp",
    slug: "hydraulic-pvc-clamp",
    category: "Clamps",
    tags: ["Noise-Free", "Secure"],
    icons: [FaWrench, FaToolbox],
    image: p16,
    shortDescription:
      "Durable PVC clamps for vibration-free and noise-free hydraulic setups.",
  },
  {
    name: "PVC Heavy Clamp",
    slug: "pvc-heavy-clamp",
    category: "Clamps",
    tags: ["Heavy Duty", "Stable"],
    icons: [FaCogs, FaLayerGroup],
    image: p17,
    shortDescription:
      "Industrial-grade heavy clamps for large-scale pipe installations.",
  },
  {
    name: "Rubber Coated Clamp",
    slug: "rubber-coated-clamp",
    category: "Clamps",
    tags: ["Anti-Vibration", "Rustproof"],
    icons: [FaWater, FaBolt],
    image: p18,
    shortDescription:
      "Protective rubber-coated clamps for secure and corrosion-free fittings.",
  },
  {
    name: "U-Bolt Clamp",
    slug: "u-bolt-clamp",
    category: "Clamps",
    tags: ["Tight Grip", "Durable"],
    icons: [FaToolbox, FaCogs],
    image: p19,
    shortDescription:
      "Heavy-duty U-bolt clamps for maximum grip and stability.",
  },
  {
    name: "Heavy Duty Pipe Clamp",
    slug: "heavy-duty-pipe-clamp",
    category: "Clamps",
    tags: ["Strong Hold", "Anti-Vibe"],
    icons: [FaLayerGroup, FaWrench],
    image: p20,
    shortDescription:
      "Robust clamps for vibration absorption in heavy pipelines.",
  },
  {
    name: "Split Type Clamp",
    slug: "split-type-clamp",
    category: "Clamps",
    tags: ["Easy Install", "Secure"],
    icons: [FaToolbox, FaWrench],
    image: p21,
    shortDescription:
      "Quick-install split clamps for efficient pipe maintenance.",
  },
];


const categories = ["All", "Fittings", "Sheets & Coils", "Clamps"];

// Floating glowing ring component
const FloatingRing = ({ x, y, size, delay }) => (
  <motion.div
    initial={{ opacity: 0, scale: 1 }}
    animate={{
      opacity: [0.2, 0.6, 0.2],
      scale: [0.8, 1.1, 0.8],
      y: [0, -15, 0],
    }}
    transition={{
      duration: 6,
      repeat: Infinity,
      delay,
    }}
    className="absolute rounded-full border border-blue-400/30"
    style={{
      left: `${x}%`,
      top: `${y}%`,
      width: size,
      height: size,
      boxShadow: "0 0 20px rgba(59,130,246,0.4)",
    }}
  />
);

const ProductPage = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProducts =
    activeCategory === "All"
      ? allProducts
      : allProducts.filter((p) => p.category === activeCategory);

  return (
    <>
      <ProductHero />

      <section id="products" className="relative w-full min-h-screen bg-[#1b1f23] text-white px-4 py-20 md:px-10 lg:px-20 overflow-hidden">
        
        {/* Floating Rings Background */}
        {Array.from({ length: 150 }).map((_, i) => (
          <FloatingRing
            key={i}
            x={Math.random() * 100}
            y={Math.random() * 100}
            size={`${20 + Math.random() * 35}px`}
            delay={Math.random() * 3}
          />
        ))}

        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4 relative z-10">
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
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 relative z-10">
          {filteredProducts.map((product, i) => {
            const [Tag1Icon, Tag2Icon] = product.icons;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.03, duration: 0.5 }}
                className="cursor-pointer bg-[#2d2d2d] border border-gray-700 rounded-2xl shadow hover:shadow-lg p-5 flex flex-col items-center text-center transition duration-300 hover:scale-[1.02]"
              >
                <img src={product.image} alt={product.name} className="w-36 h-36 object-contain mb-4" />
                <h3 className="text-lg font-bold text-white mb-1">{product.name}</h3>
                <p className="text-gray-400 text-sm mb-3 line-clamp-1">{product.shortDescription}</p>
                <div className="flex gap-2 text-sm text-gray-300 mb-5">
                  <span className="flex items-center gap-1 bg-blue-900/30 px-2 py-1 rounded-full">
                    <Tag1Icon /> {product.tags[0]}
                  </span>
                  <span className="flex items-center gap-1 bg-yellow-900/30 px-2 py-1 rounded-full">
                    <Tag2Icon /> {product.tags[1]}
                  </span>
                </div>
                <Link to={`/products/${product.slug}`}>
                  <button className="cursor-pointer mt-auto flex items-center gap-2 text-white bg-blue-600 px-4 py-2 rounded-full font-semibold hover:bg-[#3b82f6] transition">
                    Read More <FaChevronRight className="text-sm" />
                  </button>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default ProductPage;
