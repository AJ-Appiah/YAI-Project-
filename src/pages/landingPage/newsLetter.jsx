import React from "react";
import { motion } from "framer-motion";

export default function Newsletter() {
  return (
    <section className="w-full bg-green-100 py-16 px-6 flex items-center justify-center">
      <div className="max-w-4xl w-full bg-white shadow-lg rounded-xl p-8 text-center">
        {/* Title */}
        <motion.h2
          className="text-3xl font-bold text-gray-900"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Subscribe to Our Newsletter
        </motion.h2>
        
        {/* Description */}
        <p className="text-gray-600 mt-2">
          Get the latest updates, articles, and exclusive offers straight to your inbox.
        </p>

        {/* Input Field */}
        <div className="mt-6 flex flex-col sm:flex-row gap-4 items-center justify-center">
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full sm:w-2/3 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          <motion.button
            className="w-full sm:w-auto px-6 py-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Subscribe
          </motion.button>
        </div>
      </div>
    </section>
  );
}
