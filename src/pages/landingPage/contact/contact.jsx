import React from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";
import Footer from "../../../components/footer";
import Navbar from "../../../components/navbar";

const Contact = () => {
  return (
    <>
      <Navbar />
      <section className="bg-white py-16 px-6 md:px-12 lg:px-20">
        {/* Header */}
        <div className="text-center">
          <motion.h2
            className="text-3xl font-extrabold text-gray-900"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Get in <span className="text-green-600">Touch</span>
          </motion.h2>
          <p className="text-gray-600 mt-4 text-lg">
            Have questions or want to collaborate? Contact us today!
          </p>
        </div>

        {/* Contact Details & Form */}
        <div className="mt-12 grid md:grid-cols-2 gap-8">
          {/* Contact Information */}
          <div className="space-y-6">
            <ContactInfo icon={<FaMapMarkerAlt />} text="123 Cashew Lane, Accra, Ghana" />
            <ContactInfo icon={<FaEnvelope />} text="info@cashewextractor.com" />
            <ContactInfo icon={<FaPhone />} text="+233 24 876 1124" />
          </div>

          {/* Contact Form */}
          <motion.form
            className="bg-gray-100 p-6 rounded-lg shadow-lg"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <InputField type="text" placeholder="Your Name" />
            <InputField type="email" placeholder="Your Email" />
            <TextareaField placeholder="Your Message" />
            <button
              type="submit"
              className="w-full mt-4 px-6 py-3 bg-green-600 text-white rounded-md font-semibold hover:bg-green-700 transition"
            >
              Send Message
            </button>
          </motion.form>
        </div>

        {/* Google Map Section */}
        <div className="mt-12">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-4">Find Us</h3>
          <div className="w-full h-96 rounded-lg overflow-hidden shadow-lg">
            <iframe
              className="w-full h-full"
              title="Cashew Extractor Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31712.384124147832!2d-0.2132075!3d5.6037178!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdf9b67b1e0b0c3%3A0xd9a16b9c63c8b843!2sAccra%2C%20Ghana!5e0!3m2!1sen!2sgh!4v1709400000000"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

// Reusable Contact Info Component
const ContactInfo = ({ icon, text }) => (
  <div className="flex items-center gap-4">
    <span className="text-green-600 text-2xl">{icon}</span>
    <p className="text-lg text-gray-800">{text}</p>
  </div>
);

// Reusable Input Field Component
const InputField = ({ type, placeholder }) => (
  <div className="mb-4">
    <input
      type={type}
      placeholder={placeholder}
      className="w-full p-3 rounded-md border focus:outline-none focus:ring-2 focus:ring-green-600"
    />
  </div>
);

// Reusable Textarea Component
const TextareaField = ({ placeholder }) => (
  <div className="mb-4">
    <textarea
      placeholder={placeholder}
      rows="4"
      className="w-full p-3 rounded-md border focus:outline-none focus:ring-2 focus:ring-green-600"
    ></textarea>
  </div>
);

export default Contact;
