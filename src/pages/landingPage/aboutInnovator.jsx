import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import innovatorImage from "../../assets/images/innovator.jpg";
import { FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";

const AboutInnovator = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="py-16 text-center">
      <h2 className="text-3xl font-bold text-dark-variant">Meet the Innovator</h2>
      <p className="mt-4 text-lg text-gray-700 max-w-2xl mx-auto">
        Discover the visionary behind our groundbreaking cashew processing technology.
      </p>
      
      {/* Button to Open Modal */}
      <button
        onClick={() => setIsOpen(true)}
        className="mt-6 bg-cashew-green text-white px-6 py-3 rounded-full font-semibold shadow-lg hover:bg-green-700 transition"
      >
        Learn More
      </button>
      
      {/* Modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div 
              className="bg-white p-6 rounded-lg shadow-xl max-w-lg w-full relative text-center"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 50, opacity: 0 }}
            >
              {/* Close Button */}
              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-3 right-3 text-gray-600 hover:text-gray-800"
              >
                <X size={24} />
              </button>
              
              {/* Innovator Content */}
              <div className="relative w-40 h-40 mx-auto rounded-full overflow-hidden shadow-xl border-4 border-cashew-orange">
                <img 
                  src={innovatorImage} 
                  alt="Innovator" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-2xl font-semibold mt-4">Kwaku Effah</h3>
              <p className="text-gray-600 mt-2">
                A pioneer in cashew processing technology, dedicated to sustainable and efficient farming solutions.
              </p>
              
              {/* Social Media Handles */}
              <div className="mt-4 flex justify-center gap-4">
                <a href="#" className="text-cashew-orange hover:text-orange-600 transition">
                  <FaLinkedin size={24} />
                </a>
                <a href="#" className="text-cashew-orange hover:text-orange-600 transition">
                  <FaTwitter size={24} />
                </a>
                <a href="#" className="text-cashew-orange hover:text-orange-600 transition">
                  <FaInstagram size={24} />
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default AboutInnovator;
