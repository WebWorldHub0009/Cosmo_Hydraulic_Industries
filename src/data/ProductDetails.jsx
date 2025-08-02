


import {
  FaWrench, FaWater, FaShieldAlt, FaBolt,
  FaCogs, FaLayerGroup, FaToolbox
} from "react-icons/fa";

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

const productDetails = {
  "Hydraulic Ferrule Fittings": {
    name: "Hydraulic Ferule Fittings",
    image: p1,
    description:
      "Engineered for high-pressure systems, our Hydraulic Ferule Fittings provide tight and secure sealing, ensuring zero leakage. Designed to handle rigorous industrial environments.",
    features: [
      { label: "Leak-Free Sealing", icon: FaWater },
      { label: "High Strength Build", icon: FaBolt },
      { label: "Secure Fit", icon: FaShieldAlt },
      { label: "Rust Resistant", icon: FaCogs },
    ],
  },
  "Hydraulic Fittings": {
    name: "Hydraulic Fittings",
    image: p2,
    description:
      "Precision-machined hydraulic fittings made for performance and durability in demanding applications. Ensures seamless integration in hydraulic setups.",
    features: [
      { label: "Tough Build", icon: FaToolbox },
      { label: "Precision Fit", icon: FaWrench },
      { label: "Leak Proof", icon: FaWater },
      { label: "Corrosion Safe", icon: FaShieldAlt },
    ],
  },
  "SS Fittings": {
    name: "SS Fittings",
    image: p3,
    description:
      "Stainless steel fittings crafted from 304/316 grade steel. Corrosion-resistant and ideal for sanitary and industrial environments where strength is essential.",
    features: [
      { label: "304/316 SS Grade", icon: FaShieldAlt },
      { label: "Corrosion Resistant", icon: FaWater },
      { label: "Compact Design", icon: FaWrench },
      { label: "Precision Threads", icon: FaCogs },
    ],
  },
  "Equal Elbow": {
    name: "Equal Elbow",
    image: p4,
    description:
      "A high-quality elbow connector designed to redirect flow with minimal resistance. Perfect for tight piping layouts in hydraulic systems.",
    features: [
      { label: "Smooth Flow", icon: FaWater },
      { label: "Reliable Bends", icon: FaToolbox },
      { label: "Durable Body", icon: FaCogs },
      { label: "Easy Fit", icon: FaWrench },
    ],
  },
  "Equal Tee": {
    name: "Equal Tee",
    image: p5,
    description:
      "Provides three-way connection for equal flow in hydraulic lines. Durable, pressure-rated, and designed for tight space configurations.",
    features: [
      { label: "3-Way Split", icon: FaLayerGroup },
      { label: "Tough Joints", icon: FaWrench },
      { label: "Leak Resistant", icon: FaWater },
      { label: "Compact Structure", icon: FaBolt },
    ],
  },
  "Dowty Seal": {
    name: "Dowty Seal",
    image: p6,
    description:
      "Bonded seal combining metal washer and rubber insert to prevent leakage under extreme pressure. Ideal for hydraulic applications.",
    features: [
      { label: "High Pressure Rated", icon: FaBolt },
      { label: "Oil Resistant", icon: FaWater },
      { label: "Dual Material", icon: FaLayerGroup },
      { label: "Long-Lasting", icon: FaShieldAlt },
    ],
  },
  "Swivel Elbow": {
    name: "Swivel Elbow",
    image: p7,
    description:
      "Rotating elbow connector designed for dynamic piping systems. Enables flexibility and vibration resistance in hydraulic setups.",
    features: [
      { label: "Rotates Freely", icon: FaLayerGroup },
      { label: "Compact Design", icon: FaWrench },
      { label: "High Strength", icon: FaBolt },
      { label: "Anti-Friction", icon: FaCogs },
    ],
  },
  "Bulkhead Union": {
    name: "Bulkhead Union",
    image: p8,
    description:
      "Bulkhead unions enable piping through panels or walls with secure sealing and strong mechanical hold, ideal for pressurized lines.",
    features: [
      { label: "Threaded Union", icon: FaToolbox },
      { label: "Reliable Seal", icon: FaCogs },
      { label: "Panel Mount", icon: FaLayerGroup },
      { label: "Rustproof", icon: FaShieldAlt },
    ],
  },
  "Male Connector": {
    name: "Male Connector",
    image: p9,
    description:
      "Universal male connector for hydraulic and pneumatic systems. Provides consistent threading, alignment and tight fluid seal.",
    features: [
      { label: "Universal Threading", icon: FaBolt },
      { label: "Tight Fit", icon: FaToolbox },
      { label: "Compact Build", icon: FaWrench },
      { label: "Corrosion Safe", icon: FaShieldAlt },
    ],
  },
  "Stainless Steel Pipe": {
    name: "Stainless Steel Pipe",
    image: p10,
    description:
      "Seamless SS pipe with high corrosion resistance, perfect for fluid transport and mechanical structures exposed to harsh environments.",
    features: [
      { label: "304 Grade", icon: FaShieldAlt },
      { label: "Corrosion-Free", icon: FaWater },
      { label: "High Strength", icon: FaBolt },
      { label: "Precision Cut", icon: FaWrench },
    ],
  },
  "Stainless Steel Coil": {
    name: "Stainless Steel Coil",
    image: p11,
    description:
      "Cold rolled stainless coil offering flexibility and strength. Used in manufacturing, fabrication, and building projects.",
    features: [
      { label: "Flexible Coil", icon: FaCogs },
      { label: "Rustproof Surface", icon: FaBolt },
      { label: "Smooth Finish", icon: FaLayerGroup },
      { label: "Industrial Grade", icon: FaShieldAlt },
    ],
  },
  "Galvanized Steel Coil": {
    name: "Galvanized Steel Coil",
    image: p12,
    description:
      "Zinc-coated galvanized coil ideal for roofing and external fabrication. Durable, weather-resistant and long-lasting.",
    features: [
      { label: "Zinc Coated", icon: FaLayerGroup },
      { label: "Weather-Proof", icon: FaToolbox },
      { label: "Rigid Build", icon: FaWrench },
      { label: "Rust Protection", icon: FaShieldAlt },
    ],
  },
  "Galvalnized Steel Sheet": {
    name: "Galvalnized Steel Sheet",
    image: p13,
    description:
      "Protective coated sheet designed for high strength and weather protection. Ideal for both industrial and architectural use.",
    features: [
      { label: "Durable Finish", icon: FaBolt },
      { label: "Smooth Surface", icon: FaWrench },
      { label: "Easy Fabrication", icon: FaToolbox },
      { label: "Corrosion Safe", icon: FaWater },
    ],
  },
  "PPGI Coil": {
    name: "PPGI Coil",
    image: p14,
    description:
      "Pre-painted galvanized coil used in construction and auto industry. Combines durability, strength, and aesthetic coating.",
    features: [
      { label: "Color Coated", icon: FaCogs },
      { label: "High Strength", icon: FaLayerGroup },
      { label: "Weatherproof", icon: FaBolt },
      { label: "Smooth Finish", icon: FaToolbox },
    ],
  },
  "Aluminium Sheet": {
    name: "Aluminium Sheet",
    image: p15,
    description:
      "Lightweight and corrosion-free sheet for transport, packaging, and construction applications. Offers high malleability and reflectiveness.",
    features: [
      { label: "Lightweight", icon: FaBolt },
      { label: "Highly Reflective", icon: FaLayerGroup },
      { label: "Non-Rusting", icon: FaWater },
      { label: "Recyclable", icon: FaCogs },
    ],
  },
  "Hydraulic PVC Clamp": {
    name: "Hydraulic PVC Clamp",
    image: p16,
    description:
      "Noise-dampening clamp used to support hydraulic pipelines with smooth, vibration-free performance in industrial systems.",
    features: [
      { label: "Noise-Free", icon: FaWater },
      { label: "Anti-Vibe", icon: FaToolbox },
      { label: "Easy Mount", icon: FaWrench },
      { label: "Durable PVC", icon: FaCogs },
    ],
  },
  "PVC Heavy Clamp": {
    name: "PVC Heavy Clamp",
    image: p17,
    description:
      "Heavy-duty clamp made from reinforced PVC to handle larger piping systems and extreme conditions.",
    features: [
      { label: "Heavy Duty", icon: FaCogs },
      { label: "Secure Grip", icon: FaLayerGroup },
      { label: "Weatherproof", icon: FaShieldAlt },
      { label: "Quick Fit", icon: FaWrench },
    ],
  },
  "Rubber Coated Clamp": {
    name: "Rubber Coated Clamp",
    image: p18,
    description:
      "Clamp with rubber padding to prevent slip, reduce vibration, and protect delicate pipes from scratches and rust.",
    features: [
      { label: "Rustproof", icon: FaBolt },
      { label: "Noise Reduction", icon: FaWater },
      { label: "Slip Resistant", icon: FaLayerGroup },
      { label: "Soft Grip", icon: FaCogs },
    ],
  },
  "U-Bolt Clamp": {
    name: "U-Bolt Clamp",
    image: p19,
    description:
      "U-bolt style clamp providing excellent tensioning and anchoring of pipes in industrial, mechanical and automotive use.",
    features: [
      { label: "Tight Hold", icon: FaToolbox },
      { label: "Long Lasting", icon: FaCogs },
      { label: "Anti-Vibe", icon: FaWrench },
      { label: "Easy Bolt Fit", icon: FaShieldAlt },
    ],
  },
  "Heavy Duty Pipe Clamp": {
    name: "Heavy Duty Pipe Clamp",
    image: p20,
    description:
      "Designed to hold large diameter pipes securely in industrial settings. Offers vibration absorption and structural integrity.",
    features: [
      { label: "Robust Design", icon: FaWrench },
      { label: "Vibration Absorb", icon: FaLayerGroup },
      { label: "Reinforced Frame", icon: FaBolt },
      { label: "High Load Cap", icon: FaCogs },
    ],
  },
  "Split Type Clamp": {
    name: "Split Type Clamp",
    image: p21,
    description:
      "Split body clamp allows easy installation without disturbing the pipe. Ideal for maintenance-intensive environments.",
    features: [
      { label: "Quick Install", icon: FaToolbox },
      { label: "Split Design", icon: FaWrench },
      { label: "Secure Fit", icon: FaCogs },
      { label: "Reusable", icon: FaLayerGroup },
    ],
  },
};

export default productDetails;
