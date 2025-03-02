import React from "react";
import { motion } from "framer-motion";
import Navbar from "../../../components/navbar";
import Footer from "../../../components/footer";
import heroImage from "../../../assets/images/heroImage.png";
import { FaTools, FaSeedling, FaShippingFast, FaHandshake } from "react-icons/fa";


const About = () => {
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
    <div className="text-dark-variant">
      <Navbar />
      {/* Hero Section */}
      <section className="relative bg-[#f8f5f0] py-28 px-6 md:px-12 lg:flex lg:items-center">
        <div className="lg:w-1/2 text-center lg:text-left space-y-6"> 
          <h1 className="text-5xl md:text-6xl font-extrabold text-dark-variant leading-tight">
            Unlocking the Future <br /> 
            <span className="text-cashew-green">of Cashew Processing</span>
          </h1>

          <p className="text-lg text-gray-800 max-w-xl">
            Transforming cashew production with <span className="font-semibold text-dark-variant">
            sustainable</span> and <span className="font-semibold text-cashew-orange">innovative technology</span>.
          </p>

          <div className="flex flex-col md:flex-row gap-4 justify-center lg:justify-start">
            <button className="bg-cashew-green text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:bg-green-700 transition duration-300 transform hover:scale-105">
              Partner With Us
            </button>
            <button className="bg-cashew-orange text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:bg-orange-700 transition duration-300 transform hover:scale-105">
              Learn More
            </button>
          </div>
        </div>

        {/* Animated Hero Images */}
        <motion.div 
          className="relative lg:w-1/2 flex justify-center lg:justify-end mt-8 lg:mt-0"
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <div className="relative w-[80%] md:w-[60%] lg:w-[75%]">
            <motion.img 
              src={heroImage} 
              alt="Cashew Processing" 
              className="rounded-lg shadow-xl"
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1.2 }}
            />
          </div>
        </motion.div>
      </section>

      {/* About Us */}
      <section className="container mx-auto px-6 py-20 text-center">
  <h2 className="text-4xl font-extrabold text-cashew-orange">Who We Are</h2>
  <p className="text-lg text-gray-700 max-w-3xl mx-auto mt-4">
    At <span className="font-semibold text-cashew-orange">Cashew Extractor</span>, we are committed to revolutionizing cashew processing with 
    cutting-edge technology and sustainable practices. Our goal is to create efficient, eco-friendly solutions 
    that benefit both producers and consumers.
  </p>

  {/* Features Section */}
  <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-12">
    
    {/* Feature 1 */}
    <div className="flex flex-col items-center">
      <div className="w-20 h-20 flex items-center justify-center border-2 border-green-500 rounded-full">
        <img src="/icons/guarantee.svg" alt="Guarantee" className="w-10 h-10" />
      </div>
      <h3 className="text-lg font-bold mt-4">Quality Processing</h3>
      <p className="text-gray-600 mt-2 text-sm">
        We ensure top-notch cashew processing for premium quality.
      </p>
    </div>

    {/* Feature 2 */}
    <div className="flex flex-col items-center">
      <div className="w-20 h-20 flex items-center justify-center border-2 border-green-500 rounded-full">
        <img src="/icons/environment.svg" alt="Environment" className="w-10 h-10" />
      </div>
      <h3 className="text-lg font-bold mt-4">Eco-Friendly Practices</h3>
      <p className="text-gray-600 mt-2 text-sm">
        Sustainable methods that reduce waste and promote green solutions.
      </p>
    </div>

    {/* Feature 3 */}
    <div className="flex flex-col items-center">
      <div className="w-20 h-20 flex items-center justify-center border-2 border-green-500 rounded-full">
        <img src="/icons/support.svg" alt="Support" className="w-10 h-10" />
      </div>
      <h3 className="text-lg font-bold text-green-600 mt-4">Dedicated Support</h3>
      <p className="text-gray-600 mt-2 text-sm">
        Our team provides expert guidance for cashew processing businesses.
      </p>
    </div>

    {/* Feature 4 */}
    <div className="flex flex-col items-center">
      <div className="w-20 h-20 flex items-center justify-center border-2 border-green-500 rounded-full">
        <img src="/icons/watering.svg" alt="Watering" className="w-10 h-10" />
      </div>
      <h3 className="text-lg font-bold mt-4">Sustainable Farming</h3>
      <p className="text-gray-600 mt-2 text-sm">
        Supporting cashew farmers with eco-friendly cultivation techniques.
      </p>
    </div>

  </div>
</section>


      {/* Why Choose Us */}
      <section className="py-20 bg-[#f8f5f0]">
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

      {/* Meet the Innovator
      <section className="container mx-auto px-6 py-16 text-center md:text-left">
        <h2 className="text-3xl font-bold text-cashew-orange">Meet the Innovator</h2>
        <div className="mt-6 flex flex-col md:flex-row items-center gap-8">
          <img src="/placeholder-ceo.jpg" alt="CEO" className="w-48 h-48 rounded-full shadow-lg" />
          <div>
            <h3 className="text-2xl font-semibold">[Innovator's Name]</h3>
            <p className="mt-2 text-lg max-w-3xl">
              A visionary in the cashew industry, dedicated to transforming cashew processing with sustainable solutions. Their passion for innovation drives our mission forward, ensuring a brighter future for cashew farmers and processors.
            </p>
          </div>
        </div>
      </section> */}

      {/* Call to Action */}
      <section className="bg-white text-dark-variant py-16 text-center">
        <h2 className="text-3xl font-bold">Partner with Us</h2>
        <p className="mt-4 text-lg max-w-2xl mx-auto">
          Join us in reshaping the cashew processing industry. Whether you're a farmer, investor, or tech enthusiast, let's work together for a sustainable future.
        </p>
        <button className="mt-6 bg-white text-cashew-green px-6 py-3 rounded-full font-semibold shadow-lg hover:bg-gray-200">
          Get Started
        </button>
      </section>
      <Footer />
    </div>
  );
};

export default About;
