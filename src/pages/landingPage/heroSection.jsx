import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import extractorImage from "../../assets/images/cashew-extractor.jpg";
import extractorBg from "../../assets/images/extractorBg.png";

const Hero = () => {
  return (
    <section className="relative w-full bg-[#f8f5f0] py-6 px-6 md:px-12 lg:px-16">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between min-h-[70vh] md:min-h-[75vh]">
        
        {/* LEFT: Text Content */}
        <div className="md:w-1/2 text-left -mt-8">
          <motion.h1 
            className="text-5xl md:text-6xl font-bold leading-tight"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            The Future of 
            <span className="text-yellow-600"> Cashew </span>
            <span className="text-green-700"> Extraction</span>
          </motion.h1>
          
          <motion.p 
            className="mt-4 text-gray-700 text-lg max-w-lg"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            Experience efficiency and precision with our advanced cashew fruit extractor, designed to maximize yield and minimize waste.
          </motion.p>

          {/* CTA Button */}
          <motion.div 
            className="mt-6"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <Link 
              to="/read-more"
              className="bg-yellow-500 text-white px-6 py-3 rounded-lg text-lg font-medium hover:bg-yellow-600 transition flex items-center w-max"
            >
              READ MORE <span className="ml-2">→</span>
            </Link>
          </motion.div>
        </div>

        {/* RIGHT: Image with Leaves */}
        <div className="relative md:w-1/2 flex justify-end mt-6 md:mt-0 -mt-8">
          {/* Background Leaves */}
          <img 
            // src={extractorBg} 
            alt="Background Leaves"
            className="absolute -top-14 -right-16 md:w-[120%] opacity-90 z-0"
          />
          
          {/* Cashew Extractor Image */}
          <motion.img 
            src={extractorBg} 
            alt="Cashew Extractor"
            className="relative w-[85%] max-w-lg md:max-w-xl z-10"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
