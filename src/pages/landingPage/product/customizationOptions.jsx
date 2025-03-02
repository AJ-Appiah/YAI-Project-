import React from "react";
import { FaCogs, FaPalette, FaExpandArrowsAlt, FaTools } from "react-icons/fa";
import { motion } from "framer-motion";
import Navbar from "../../../components/navbar";
import Footer from "../../../components/footer";

const CustomizationOptions = () => {
  const options = [
    {
      icon: <FaCogs className="text-green-600 text-4xl" />,
      title: "Adjustable Settings",
      description: "Modify processing speed and efficiency based on your needs.",
    },
    {
      icon: <FaPalette className="text-green-600 text-4xl" />,
      title: "Color Customization",
      description: "Choose from various colors to match your brand or farm setup.",
    },
    {
      icon: <FaExpandArrowsAlt className="text-green-600 text-4xl" />,
      title: "Size Variations",
      description: "Select different sizes depending on the scale of your operations.",
    },
    {
      icon: <FaTools className="text-green-600 text-4xl" />,
      title: "Modular Add-Ons",
      description: "Upgrade with additional features for enhanced efficiency.",
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
          Tailor Your <span className="text-green-600">Cashew Processing Machine</span>
        </motion.h2>
        <p className="text-gray-600 mt-4 text-lg">
          Customize your machine to fit your farm’s specific needs, ensuring efficiency and convenience.
        </p>
      </div>

      {/* Customization Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mt-12">
        {options.map((option, index) => (
          <motion.div
            key={index}
            className="bg-white p-6 rounded-lg shadow-md text-center flex flex-col items-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: index * 0.2 }}
          >
            {option.icon}
            <h3 className="text-xl font-bold mt-4 text-gray-900">{option.title}</h3>
            <p className="text-gray-600 mt-2">{option.description}</p>
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
          Start Customizing
        </motion.button>
      </div>
    </section>
    <Footer/>
    </>
  );
};

export default CustomizationOptions;
