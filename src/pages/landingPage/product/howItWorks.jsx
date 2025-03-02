import React from "react";
import { motion } from "framer-motion";
import { FaCheckCircle } from "react-icons/fa";
import extractorBg  from "../../../assets/images/extractorBg.png";
import Navbar from "../../../components/navbar";
import Footer from "../../../components/footer";

const HowItWorks = () => {
  return (
    <>
    <Navbar/>
      {/* Hero Section */}
      {/* */}

      {/* How It Works Section */}
      <section className="container mx-auto px-6 py-16 text-center bg-[#f8f8f8]">
        <motion.h3
          className="text-green-700 font-bold text-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          Welcome to CashewTech
        </motion.h3>

        <motion.h2
          className="text-4xl font-bold text-gray-900 my-2"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Efficient Cashew Seed Detaching Made Easy!
        </motion.h2>

        <motion.p
          className="text-gray-600 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          Our innovative Cashew Seeds Detaching Machine helps farmers save time and reduce labor costs, making cashew processing faster and more efficient.
        </motion.p>

        {/* Features Section */}
        <motion.div
          className="grid md:grid-cols-2 gap-8 mt-8 text-left mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <div className="flex flex-col gap-4 ml-50">
            <Feature text="Load cashew fruits into the hopper" />
            <Feature text="Automated system detaches seeds with precision" />
            <Feature text="Minimizes manual effort, increasing productivity" />
            <Feature text="Customizable sizes & easy to operate" />
          </div>

          <div className="flex flex-col gap-4">
            <Feature text="Reduces workforce needed on farms" />
            <Feature text="Speeds up cashew seed processing time" />
            <Feature text="Designed for small & large-scale farmers" />
            <Feature text="Durable and cost-effective solution" />
          </div>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          className="flex justify-center gap-16 mt-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <Stat number="500+" label="Farmers Benefiting" />
          <Stat number="80%" label="Time Saved" />
        </motion.div>

        {/* CTA Button */}
        <motion.button
          className="mt-8 px-6 py-3 bg-green-600 text-white rounded-lg text-lg font-semibold hover:bg-green-700 transition"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Learn More About Our Machine
        </motion.button>
      </section>
      <Footer/>
    </>
  );
};

// Feature Component
const Feature = ({ text }) => (
  <motion.div
    className="flex items-center gap-3"
    initial={{ opacity: 0, x: -20 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.6 }}
  >
    <FaCheckCircle className="text-green-600 text-lg" />
    <span className="text-gray-800">{text}</span>
  </motion.div>
);

// Stats Component
const Stat = ({ number, label }) => (
  <motion.div
    className="text-center"
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.6, delay: 0.2 }}
  >
    <h3 className="text-green-600 text-4xl font-bold">{number}</h3>
    <p className="text-gray-700 text-lg font-semibold">{label}</p>
  </motion.div>
  
);

export default HowItWorks;
