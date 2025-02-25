import React from "react";
import { FaEnvelope, FaPhone, FaHome } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-green-900 text-white py-12">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-6">
        {/* Brand & Newsletter */}
        <div className="flex flex-col items-start">
          <h2 className="text-2xl font-bold flex items-center gap-2">
            <span className="bg-white text-green-900 p-2 rounded-full">🥜</span>
            Cashew Extractor
          </h2>
          <p className="text-gray-200 mt-3">
            Unlocking the full potential of cashew processing for a sustainable future.
          </p>
          <div className="mt-4 flex items-center bg-white rounded-full overflow-hidden w-full md:w-3/4 border border-gray-300">
            <input
              type="email"
              placeholder="Your Email"
              className="p-2 w-full text-gray-700 outline-none"
            />
            <button className="bg-orange-500 text-white px-4 py-2 font-bold">
              GO
            </button>
          </div>
        </div>

        {/* Explore */}
        <div>
          <h3 className="text-xl font-semibold">Explore</h3>
          <ul className="mt-3 space-y-2 text-gray-300">
            <li>
              <a href="#" className="hover:text-orange-400 transition duration-200">About Us</a>
            </li>
            <li>
              <a href="#" className="hover:text-orange-400 transition duration-200">Technology</a>
            </li>
            <li>
              <a href="#" className="hover:text-orange-400 transition duration-200">Processing Solutions</a>
            </li>
            <li>
              <a href="#" className="hover:text-orange-400 transition duration-200">Our Partners</a>
            </li>
            <li>
              <a href="#" className="hover:text-orange-400 transition duration-200">Contact Us</a>
            </li>
            <li>
              <a href="#" className="hover:text-orange-400 transition duration-200">FAQs</a>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-xl font-semibold">Contact Info</h3>
          <ul className="mt-3 space-y-3 text-gray-300">
            <li className="flex items-center gap-2">
              <FaHome /> <span>Cashew Processing Hub, Accra, Ghana</span>
            </li>
            <li className="flex items-center gap-2">
              <FaEnvelope /> 
              <a href="mailto:info@cashewextractor.com" className="hover:text-orange-400 transition duration-200">
                info@cashewextractor.com
              </a>
            </li>
            <li className="flex items-center gap-2">
              <FaPhone /> 
              <a href="tel:+233501234567" className="hover:text-orange-400 transition duration-200">
                +233 50 123 4567
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
