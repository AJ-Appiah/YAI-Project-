import React from "react";
import { motion } from "framer-motion";
import Navbar from "../../../components/navbar";
import Footer from "../../../components/footer";
import heroImage from "../../../assets/images/heroImage.png";
import smallCircleImage from "../../../assets/images/smallCircleImage.jpg";

const About = () => {
  return (
    <div className="text-[--color-dark-variant]">
      <Navbar />
      {/* Hero Section */}
      <section className="relative bg-[--color-cashew-yellow] py-24 px-6 md:px-12 lg:flex lg:items-center">
        <div className="lg:w-1/2 text-center lg:text-left">
          <h1 className="text-4xl md:text-5xl font-bold text-[--color-dark-variant]">
            Unlocking the Future of Cashew Processing
          </h1>
          <p className="mt-4 text-lg text-gray-800">
            Transforming cashew production with sustainable and innovative technology.
          </p>
          <div className="mt-6 flex flex-col md:flex-row md:gap-4 justify-center lg:justify-start">
            <button className="bg-[--color-cashew-green] text-white px-6 py-3 rounded-full font-semibold shadow-lg hover:bg-green-700">
              Partner With Us
            </button>
            <button className="bg-[--color-cashew-orange] text-white px-6 py-3 rounded-full font-semibold shadow-lg hover:bg-orange-700">
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
            <motion.img
              src={smallCircleImage}
              alt="Cashew Small Detail"
              className="absolute top-0 right-0 w-24 md:w-32 lg:w-40 transform translate-x-1/4 -translate-y-1/4 rounded-full border-4 border-white shadow-lg"
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 1.2 }}
            />
          </div>
        </motion.div>
      </section>

      {/* About Us */}
      <section className="container mx-auto px-6 py-16 text-center md:text-left">
        <h2 className="text-3xl font-bold text-[--color-cashew-orange]">Who We Are</h2>
        <p className="mt-4 text-lg max-w-3xl">
          At Cashew Extractor, we are committed to revolutionizing cashew processing with cutting-edge technology and sustainable practices. Our goal is to create efficient, eco-friendly solutions that benefit both producers and consumers.
        </p>
      </section>

      {/* Why Choose Us */}
      <section className="bg-[--color-cashew-yellow] py-16 text-center">
        <h2 className="text-3xl font-bold text-[--color-dark-variant]">Why Choose Us?</h2>
        <div className="mt-6 flex flex-wrap justify-center gap-8">
          <div className="max-w-sm p-6 bg-white shadow-lg rounded-lg">
            <h3 className="text-xl font-semibold">Sustainable Practices</h3>
            <p className="mt-2">Our processes are designed to minimize waste and promote eco-friendliness.</p>
          </div>
          <div className="max-w-sm p-6 bg-white shadow-lg rounded-lg">
            <h3 className="text-xl font-semibold">Innovative Solutions</h3>
            <p className="mt-2">We use advanced technology to enhance efficiency and quality in cashew processing.</p>
          </div>
          <div className="max-w-sm p-6 bg-white shadow-lg rounded-lg">
            <h3 className="text-xl font-semibold">Community Impact</h3>
            <p className="mt-2">We empower farmers and small-scale producers through knowledge and technology.</p>
          </div>
        </div>
      </section>

      {/* Meet the Innovator */}
      <section className="container mx-auto px-6 py-16 text-center md:text-left">
        <h2 className="text-3xl font-bold text-[--color-cashew-orange]">Meet the Innovator</h2>
        <div className="mt-6 flex flex-col md:flex-row items-center gap-8">
          <img src="/placeholder-ceo.jpg" alt="CEO" className="w-48 h-48 rounded-full shadow-lg" />
          <div>
            <h3 className="text-2xl font-semibold">[Innovator's Name]</h3>
            <p className="mt-2 text-lg max-w-3xl">
              A visionary in the cashew industry, dedicated to transforming cashew processing with sustainable solutions. Their passion for innovation drives our mission forward, ensuring a brighter future for cashew farmers and processors.
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-[--color-cashew-green] text-white py-16 text-center">
        <h2 className="text-3xl font-bold">Partner with Us</h2>
        <p className="mt-4 text-lg max-w-2xl mx-auto">
          Join us in reshaping the cashew processing industry. Whether you're a farmer, investor, or tech enthusiast, let's work together for a sustainable future.
        </p>
        <button className="mt-6 bg-white text-[--color-cashew-green] px-6 py-3 rounded-full font-semibold shadow-lg hover:bg-gray-200">
          Get Started
        </button>
      </section>
      <Footer />
    </div>
  );
};

export default About;
