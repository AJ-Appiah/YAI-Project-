import React from "react";
import { FaLeaf, FaClock, FaTools, FaCheckCircle } from "react-icons/fa";
import { motion } from "framer-motion";
import Navbar from "../../../components/navbar";
import Footer from "../../../components/footer";

const Features = () => {
  const features = [
    {
      icon: <FaLeaf className="text-green-600 text-4xl" />,
      title: "Eco-Friendly Processing",
      description: "Designed with sustainability in mind, minimizing waste and maximizing efficiency.",
    },
    {
      icon: <FaClock className="text-green-600 text-4xl" />,
      title: "Time-Saving Automation",
      description: "Significantly reduces processing time, allowing farmers to focus on growth.",
    },
    {
      icon: <FaTools className="text-green-600 text-4xl" />,
      title: "Low Maintenance",
      description: "Built with durable materials to ensure long-lasting performance with minimal upkeep.",
    },
    {
      icon: <FaCheckCircle className="text-green-600 text-4xl" />,
      title: "Precision Seed Detachment",
      description: "Uses advanced mechanisms to detach seeds efficiently without damage.",
    },
  ];

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
          Discover Our <span className="text-green-600">Powerful Features</span>
        </motion.h2>
        <p className="text-gray-600 mt-4 text-lg">
          Our cashew seed detaching machine is designed to revolutionize cashew processing, making it faster, easier, and more efficient.
        </p>
      </div>

      {/* Features Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mt-12">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            className="bg-white p-6 rounded-lg shadow-md text-center flex flex-col items-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: index * 0.2 }}
          >
            {feature.icon}
            <h3 className="text-xl font-bold mt-4 text-gray-900">{feature.title}</h3>
            <p className="text-gray-600 mt-2">{feature.description}</p>
          </motion.div>
        ))}
      </div>

      {/* CTA Section */}
      <div className="text-center mt-12">
        <motion.button
          className="px-6 py-3 bg-green-600 text-white text-lg font-semibold rounded-full shadow-md hover:bg-green-700 transition"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Learn More
        </motion.button>
      </div>
    </section>
    <Footer/>
    </>
  );
};

export default Features;
