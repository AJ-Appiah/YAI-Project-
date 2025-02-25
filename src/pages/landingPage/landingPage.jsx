import React from "react";
import HeroSection from "./heroSection";
import AboutUs from "./aboutUs";
import WhyChooseUs from "./whyChooseUs";
import FeaturedProducts from "./featuredProducts";
import Testimonials from "./testimonials";
import Newsletter from "./newsLetter";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";

const LandingPage = () => {
  return (
    <div className="bg-white text-gray-900">
      <Navbar />
      <HeroSection />
      <AboutUs />
      <WhyChooseUs />
      <FeaturedProducts />
      <Testimonials />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default LandingPage;
