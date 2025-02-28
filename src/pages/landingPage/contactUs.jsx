import React from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

const ContactUs = () => {
  return (
    <section className="bg-white py-16 text-center">
      <div className="container mx-auto px-6 md:px-12 lg:px-16">
        <h2 className="text-3xl font-bold text-cashew-green">Get in Touch</h2>
        <p className="mt-4 text-lg text-gray-700 max-w-2xl mx-auto">
          Have any questions or want to collaborate? Reach out to us today!
        </p>
        
        <div className="mt-8 grid md:grid-cols-2 gap-8">
          {/* Contact Info */}
          <div className="text-left space-y-6">
            <div className="flex items-center gap-4">
              <FaMapMarkerAlt className="text-cashew-orange text-2xl" />
              <p className="text-lg text-gray-800">123 Cashew Lane, Accra, Ghana</p>
            </div>
            <div className="flex items-center gap-4">
              <FaEnvelope className="text-cashew-orange text-2xl" />
              <p className="text-lg text-gray-800">info@cashewextractor.com</p>
            </div>
            <div className="flex items-center gap-4">
              <FaPhone className="text-cashew-orange text-2xl" />
              <p className="text-lg text-gray-800">+233 24 876 1124</p>
            </div>
          </div>

          {/* Contact Form */}
          <motion.form 
            className="bg-gray-100 p-6 rounded-lg shadow-lg" 
            initial={{ opacity: 0, y: 30 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.6 }}
          >
            <div className="mb-4">
              <input 
                type="text" 
                placeholder="Your Name" 
                className="w-full p-3 rounded-md border focus:outline-none focus:ring-2 focus:ring-cashew-green" 
              />
            </div>
            <div className="mb-4">
              <input 
                type="email" 
                placeholder="Your Email" 
                className="w-full p-3 rounded-md border focus:outline-none focus:ring-2 focus:ring-cashew-green" 
              />
            </div>
            <div className="mb-4">
              <textarea 
                placeholder="Your Message" 
                rows="4" 
                className="w-full p-3 rounded-md border focus:outline-none focus:ring-2 focus:ring-cashew-green"
              ></textarea>
            </div>
            <button 
              type="submit" 
              className="bg-cashew-green text-white px-6 py-3 rounded-md font-semibold hover:bg-green-700 w-full"
            >
              Send Message
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
