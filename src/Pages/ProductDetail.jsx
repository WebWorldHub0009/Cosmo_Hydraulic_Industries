import React from "react";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import allProducts from "../Pages/productData";
import ProductSlider from "../Components/ProductSlider";

// Floating bubble background component
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
    className="absolute rounded-full border border-blue-800/30"
    style={{
      left: `${x}%`,
      top: `${y}%`,
      width: size,
      height: size,
      boxShadow: "0 0 20px rgba(59,130,246,0.4)",
    }}
  />
);

const ProductDetail = () => {
  const { slug } = useParams();
  const product = allProducts.find((p) => p.slug === slug);

  if (!product) {
    return (
      <div className="p-10 text-center text-red-600 text-lg">
        Product not found
      </div>
    );
  }

  return (
    <>
  
    <div className="min-h-screen bg-gray-100 relative overflow-hidden">
      {/* Floating Rings */}
      <FloatingRing x={10} y={20} size="120px" delay={0} />
      <FloatingRing x={80} y={30} size="160px" delay={1.5} />
      <FloatingRing x={50} y={70} size="100px" delay={0.8} />
      <FloatingRing x={20} y={80} size="140px" delay={2} />

      {/* Hero Section (kept same as you wanted) */}
      <div className="relative bg-gradient-to-r from-blue-900 to-indigo-900 text-white py-20 text-center shadow-lg z-10">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
          Premium Hydraulic Solutions
        </h1>
        <p className="text-lg md:text-xl opacity-90 max-w-2xl mx-auto">
          Engineered for strength. Designed for reliability. Trusted worldwide.
        </p>
      </div>

      {/* Product Detail Section */}
      <div className="relative max-w-7xl mx-auto px-6 py-16 z-10">
        {/* Product Title & Quote */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {product.name}
          </h2>
          <p className="text-lg md:text-xl text-gray-600 italic">
            “{product.shortDescription}”
          </p>
        </div>

        {/* Product Image + About */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div className="flex justify-center">
            <motion.img
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              src={product.image}
              alt={product.name}
              className="rounded-2xl shadow-2xl max-h-[420px] object-contain bg-white p-6 border border-gray-200"
            />
          </div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="text-2xl font-semibold mb-4 text-gray-900">
              About this product
            </h3>
            <p className="text-gray-700 leading-relaxed text-lg">
              {product.longDescription}
            </p>
          </motion.div>
        </div>

        {/* Specifications + Features */}
        <div className="grid md:grid-cols-2 gap-12">
          {/* Specifications Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl hover:scale-[1.02] transition"
          >
            <h3 className="text-xl font-bold mb-4 text-gray-900 border-b pb-2">
              Specifications
            </h3>
            <ul className="space-y-3 text-gray-700">
              {Object.entries(product.specs).map(([key, value]) => (
                <li
                  key={key}
                  className="flex justify-between border-b pb-2 text-base"
                >
                  <span className="font-medium capitalize">{key}</span>
                  <span className="text-gray-600">{value}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Features Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl hover:scale-[1.02] transition"
          >
            <h3 className="text-xl font-bold mb-4 text-gray-900 border-b pb-2">
              Key Features
            </h3>
            <ul className="list-disc pl-5 space-y-2 text-gray-700">
              {product.features.map((feature, idx) => (
                <li
                  key={idx}
                  className="leading-relaxed text-base text-gray-700"
                >
                  {feature}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </div>
    <ProductSlider/>
  </>
  );
};

export default ProductDetail;
