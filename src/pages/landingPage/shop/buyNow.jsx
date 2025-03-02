import React from "react";
import { FaCheckCircle, FaTruck, FaShieldAlt, FaCreditCard } from "react-icons/fa";
import { motion } from "framer-motion";
import Navbar from "../../../components/navbar";
import Footer from "../../../components/footer";

const BuyNow = () => {
  return (
    <>
    <Navbar/>
    <section className="bg-[#f8f8f8] py-20 px-6 md:px-12 lg:px-20">
      {/* Hero Section */}
      <div className="text-center max-w-3xl mx-auto">
        <motion.h2
          className="text-4xl font-extrabold text-gray-900"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Get Your <span className="text-green-600">Cashew Processing Machine</span> Today!
        </motion.h2>
        <p className="text-gray-600 mt-4 text-lg">
          Order now and revolutionize your cashew seed detaching process. Fast delivery & secure payment options available!
        </p>
      </div>

      {/* Pricing Plans */}
      <div className="grid md:grid-cols-3 gap-10 mt-12">
        {/* Basic Plan */}
        <motion.div
          className="bg-white p-6 rounded-lg shadow-md text-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, delay: 0.2 }}
        >
          <h3 className="text-xl font-bold text-gray-900">Standard Model</h3>
          <p className="text-gray-600 mt-2">Great for small-scale farmers</p>
          <p className="text-green-600 text-2xl font-bold mt-4">$999</p>
          <button className="mt-6 px-6 py-3 bg-green-600 text-white text-lg font-semibold rounded-full shadow-md hover:bg-green-700 transition">
            Buy Now
          </button>
        </motion.div>

        {/* Popular Plan */}
        <motion.div
          className="bg-green-600 text-white p-6 rounded-lg shadow-lg text-center transform scale-105"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, delay: 0.4 }}
        >
          <h3 className="text-xl font-bold">Premium Model</h3>
          <p className="mt-2">Perfect for commercial use</p>
          <p className="text-2xl font-bold mt-4">$1,499</p>
          <button className="mt-6 px-6 py-3 bg-white text-green-600 text-lg font-semibold rounded-full shadow-md hover:bg-gray-200 transition">
            Buy Now
          </button>
        </motion.div>

        {/* Advanced Plan */}
        <motion.div
          className="bg-white p-6 rounded-lg shadow-md text-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, delay: 0.6 }}
        >
          <h3 className="text-xl font-bold text-gray-900">Custom Model</h3>
          <p className="text-gray-600 mt-2">Tailored to your needs</p>
          <p className="text-green-600 text-2xl font-bold mt-4">Contact Us</p>
          <button className="mt-6 px-6 py-3 bg-green-600 text-white text-lg font-semibold rounded-full shadow-md hover:bg-green-700 transition">
            Get a Quote
          </button>
        </motion.div>
      </div>

      {/* Why Buy Now? */}
      <div className="grid md:grid-cols-2 gap-10 mt-16">
        <Feature icon={<FaTruck className="text-green-600 text-4xl" />} title="Fast Delivery" text="Get your machine delivered within days!" />
        <Feature icon={<FaShieldAlt className="text-green-600 text-4xl" />} title="1-Year Warranty" text="We offer a full 1-year warranty for your peace of mind." />
        <Feature icon={<FaCreditCard className="text-green-600 text-4xl" />} title="Secure Payment" text="Multiple payment options available, 100% secure." />
        <Feature icon={<FaCheckCircle className="text-green-600 text-4xl" />} title="Trusted by Farmers" text="Over 500+ farmers are benefiting from our machines." />
      </div>

      {/* CTA Section */}
      <div className="text-center mt-12">
        <motion.button
          className="px-6 py-3 bg-green-600 text-white text-lg font-semibold rounded-full shadow-md hover:bg-green-700 transition"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Order Now
        </motion.button>
      </div>
    </section>
    <Footer/>
    </>
  );
};

// Feature Component
const Feature = ({ icon, title, text }) => (
  <div className="flex items-center gap-4">
    {icon}
    <div>
      <h3 className="text-lg font-bold text-gray-900">{title}</h3>
      <p className="text-gray-600">{text}</p>
    </div>
  </div>
);

export default BuyNow;
