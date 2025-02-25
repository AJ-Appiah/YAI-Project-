import React from "react";
import { motion } from "framer-motion";
import aboutUs from "../../assets/images/aboutUs.jpg";
import { FaTractor, FaToolbox } from "react-icons/fa";

const AboutUs = () => {
  return (
    <section className="py-30 bg-white">
      {/* FLEX CONTAINER FOR SIDE-BY-SIDE LAYOUT */}
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-10">
        
        {/* LEFT SIDE: IMAGE + YELLOW CARD */}
        <div className="md:w-[40%] relative ">
          <motion.img 
            src={aboutUs} 
            alt="Cashew fruit"
            className="rounded-xl shadow-lg w-full object-cover"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          />

          {/* YELLOW CARD */}
          <motion.div 
            className="bg-cashew-yellow p-6 rounded-xl shadow-lg absolute bottom-6 left-6 w-[80%] md:w-[70%]"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="flex items-center gap-3">
              <FaTractor className="w-8 h-7" />
              <h3 className="text-xl font-bold">100% Locally Designed & Manufactured</h3>
            </div>
            <p className="text-gray-700 mt-2">
              Our machine is crafted with high-quality components, ensuring durability and efficiency.
            </p>
          </motion.div>
        </div>

        {/* RIGHT SIDE: TEXT CONTENT */}
        <div className="md:w-1/2 mt-6 md:mt-0 md:pb-10 md:pr-30">
          <h2 className="text-5xl font-extrabold text-gray-900 leading-tight">
            Innovating Agriculture with Locally Made Solutions
          </h2>
          <p className="text-gray-500 mt-5">
            Many cashew farmers struggle with high labor costs and time-consuming manual seed detachment.
            Our <strong>Cashew Seeds Detaching Machine</strong> is designed to solve this problem, 
            improving efficiency and making farming more cost-effective.
          </p>

          {/* METRIC SECTION */}
          <div className="mt-10 flex items-center">
            <h3 className="text-8xl font-bold text-cashew-green">25M+</h3>
            <div className="ml-3">
              <p className="font-semibold text-gray-800">Seeds Processed With Our Machine</p>
            </div>
          </div>

          {/* GREEN CARD - NOW INSIDE TEXT AREA TO ALIGN PROPERLY */}
          <motion.div 
            className="bg-cashew-green p-6 rounded-xl text-white shadow-md mt-8 w-full"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="flex items-center gap-3">
              <FaToolbox className="w-8 h-7" />
              <h3 className="text-xl font-bold">Empowering Farmers with Innovation</h3>
            </div>
            <p className="mt-2">
              Our solution is tailored to local needs, promoting efficiency and reducing reliance on expensive imports.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
