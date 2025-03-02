import React from "react";
import { FaCcVisa, FaCcMastercard, FaPaypal, FaMobileAlt, FaShieldAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import Footer from "../../../components/footer";
import Navbar from "../../../components/navbar";

const PaymentMethods = () => {
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
          Secure & Convenient <span className="text-green-600">Payment Options</span>
        </motion.h2>
        <p className="text-gray-600 mt-4 text-lg">
          Choose from multiple secure payment methods for a seamless transaction.
        </p>
      </div>

      {/* Payment Methods Grid */}
      <div className="grid md:grid-cols-3 gap-8 mt-12 text-center">
        <PaymentOption icon={<FaCcVisa className="text-blue-600 text-5xl" />} title="Visa" />
        <PaymentOption icon={<FaCcMastercard className="text-red-600 text-5xl" />} title="MasterCard" />
        <PaymentOption icon={<FaPaypal className="text-blue-500 text-5xl" />} title="PayPal" />
        <PaymentOption icon={<FaMobileAlt className="text-green-600 text-5xl" />} title="Mobile Money" />
        <PaymentOption icon={<FaShieldAlt className="text-gray-700 text-5xl" />} title="Secure Payment" />
      </div>

      {/* CTA Section */}
      <div className="text-center mt-12">
        <motion.button
          className="px-6 py-3 bg-green-600 text-white text-lg font-semibold rounded-full shadow-md hover:bg-green-700 transition"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Proceed to Payment
        </motion.button>
      </div>
    </section>
    <Footer/>
    </>
  );
};

// Reusable Payment Option Component
const PaymentOption = ({ icon, title }) => (
  <motion.div
    className="bg-gray-100 p-6 rounded-lg shadow-md flex flex-col items-center"
    whileHover={{ scale: 1.05 }}
    transition={{ duration: 0.3 }}
  >
    {icon}
    <h3 className="text-lg font-bold text-gray-900 mt-4">{title}</h3>
  </motion.div>
);

export default PaymentMethods;
