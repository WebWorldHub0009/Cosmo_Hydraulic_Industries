import React from "react";
import { useNavigate } from "react-router-dom";
import { FaBolt, FaToolbox, FaWater, FaCogs, FaLayerGroup, FaWrench } from "react-icons/fa";
import allProducts from "../Pages/productData"; 

const ProductCarousel = () => {
  const navigate = useNavigate();

  return (
    <section className="py-12 bg-gradient-to-b from-gray-900 via-gray-800 to-black">
      <h2 className="text-4xl font-bold text-center text-white mb-10 tracking-wide">
        Our Premium Products
      </h2>

      <div className="marquee-wrapper">
        <div className="marquee">
          {[...allProducts, ...allProducts].map((p, idx) => (
            <div key={idx} className="marquee-item">
              <img src={p.image} alt={p.name} />
              <div className="marquee-item-content">
                <h3>{p.name}</h3>
                <p>{p.shortDescription}</p>
                <div className="icons">
                  {p.icons.map((Icon, i) => (
                    <Icon key={i} className="text-blue-600 text-lg" />
                  ))}
                </div>
                <button onClick={() => navigate(`/products/${p.slug}`)}>
                  Enquire Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductCarousel;
