import React from "react";
import { motion } from "framer-motion";
import Footer from "../../../components/footer";
import Navbar from "../../../components/navbar";

const BulkOrders = () => {
  return (
    <>
    <Navbar/>
    <section className="bg-white py-16 px-6 md:px-12 lg:px-20">
      {/* Header */}
      <div className="text-center">
        <motion.h2
          className="text-3xl font-extrabold text-gray-900"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Special Discounts on <span className="text-green-600">Bulk Orders</span>
        </motion.h2>
        <p className="text-gray-600 mt-4 text-lg">
          Get exclusive discounts when you purchase in bulk! Perfect for cooperatives, distributors, and large-scale farms.
        </p>
      </div>

      {/* Bulk Order Pricing Tiers */}
      <div className="grid md:grid-cols-3 gap-8 mt-12 text-center">
        <PricingCard quantity="10+" discount="5% Off" />
        <PricingCard quantity="50+" discount="10% Off" />
        <PricingCard quantity="100+" discount="15% Off" />
      </div>

      {/* CTA Section */}
      <div className="text-center mt-12">
        <motion.button
          className="px-6 py-3 bg-green-600 text-white text-lg font-semibold rounded-full shadow-md hover:bg-green-700 transition"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Request a Bulk Quote
        </motion.button>
      </div>
    </section>
    <Footer/>
    </>
  );
};

// Reusable Pricing Card Component
const PricingCard = ({ quantity, discount }) => (
  <motion.div
    className="bg-gray-100 p-6 rounded-lg shadow-md flex flex-col items-center"
    whileHover={{ scale: 1.05 }}
    transition={{ duration: 0.3 }}
  >
    <h3 className="text-xl font-bold text-gray-900">{quantity} Units</h3>
    <p className="text-green-600 text-lg font-semibold mt-2">{discount}</p>
  </motion.div>
);

export default BulkOrders;
