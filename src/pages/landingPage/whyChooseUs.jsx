import React from "react";
import { motion } from "framer-motion";
import { FaTools, FaSeedling, FaShippingFast, FaHandshake } from "react-icons/fa";

const WhyChooseUs = () => {
  const features = [
    {
      icon: <FaTools className="w-12 h-12 text-cashew-green" />,
      title: "High-Quality & Locally Manufactured",
      description: "Our machines are built with premium materials, ensuring durability and efficiency.",
    },
    {
      icon: <FaSeedling className="w-12 h-12 text-cashew-orange" />,
      title: "Eco-Friendly & Sustainable",
      description: "Designed with sustainability in mind, minimizing environmental impact.",
    },
    {
      icon: <FaShippingFast className="w-12 h-12 text-cashew-green" />,
      title: "Fast & Reliable Delivery",
      description: "We ensure quick and efficient delivery to meet farmers' needs.",
    },
    {
      icon: <FaHandshake className="w-12 h-12 text-cashew-orange" />,
      title: "Farmer-Centric Approach",
      description: "We prioritize farmers' needs, offering tailored solutions and excellent support.",
    },
  ];

  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto px-6">
        {/* HEADER */}
        <div className="text-center mb-12">
          <h2 className="text-5xl font-extrabold text-gray-900">
            Why Choose Us?
          </h2>
          <p className="text-gray-600 mt-4 text-lg">
            Here’s why farmers trust us for their agricultural solutions.
          </p>
        </div>

        {/* FEATURES GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 rounded-xl shadow-lg flex flex-col items-center text-center hover:shadow-2xl transition duration-300"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              {/* ICON */}
              <div className="mb-4">{feature.icon}</div>
              
              {/* TITLE */}
              <h3 className="text-xl font-bold text-gray-800">{feature.title}</h3>

              {/* DESCRIPTION */}
              <p className="text-gray-600 mt-2">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
