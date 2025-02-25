import React from "react";
import { motion } from "framer-motion";
import { Star } from "lucide-react";
import extractorBg from "../../assets/images/extractorBg.png";

const products = [
  {
    id: 1,
    name: "Cashew Processing Machine - 500kg/h",
    image: extractorBg,
    rating: 4.8,
    price: "Ghc30,500",
    details: "Processes up to 500kg of cashews per hour. Ideal for small to medium-scale farmers.",
  },
  {
    id: 2,
    name: "Cashew Nut Shelling Machine - 1 Ton/h",
    image: extractorBg,
    rating: 5,
    price: "Ghc60,800",
    details: "High-efficiency shelling machine for bulk processing. Suitable for commercial use.",
  },
  {
    id: 3,
    name: "Solar-Powered Cashew Dryer",
    image: extractorBg,
    rating: 4.6,
    price: "Ghc29,900",
    details: "Eco-friendly solar-powered drying system for cashew nuts. Reduces moisture efficiently.",
  },
  {
    id: 4,
    name: "Compact Cashew Peeling Machine",
    image: extractorBg,
    rating: 4.7,
    price: "Ghc40,200",
    details: "Compact, energy-efficient peeling machine for small businesses and cooperatives.",
  },
];

export default function FeaturedProducts() {
  return (
    <div className="w-full max-w-6xl mx-auto py-16 px-6">
      <h2 className="text-4xl font-extrabold text-center text-gray-900 mb-10">Featured Products</h2>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
        {products.map((product) => (
          <motion.div
            key={product.id}
            className="bg-white shadow-lg rounded-xl p-6 text-center hover:scale-105 transition-transform"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            {/* Product Image */}
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-56 object-cover rounded-lg"
            />

            {/* Product Name */}
            <h3 className="mt-4 text-xl font-semibold">{product.name}</h3>

            {/* Product Price */}
            <p className="text-lg font-bold text-cashew-green mt-2">{product.price}</p>

            {/* Product Details */}
            <p className="text-gray-600 text-sm mt-2">{product.details}</p>

            {/* Ratings */}
            <div className="flex justify-center mt-3">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  size={20}
                  className={i < Math.round(product.rating) ? "text-yellow-500" : "text-gray-300"}
                />
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
