import React from "react";
import HeroSection from "./heroSection";
import AboutUs from "./aboutUs";
import WhyChooseUs from "./whyChooseUs";
import FeaturedProducts from "./featuredProducts";
import Testimonials from "./testimonials";
import Newsletter from "./newsLetter";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import AboutInnovator from "./aboutInnovator";
import ContactUs from "./contactUs";

const LandingPage = () => {
  return (
    <div className="bg-white text-gray-900">
      <Navbar />
      <HeroSection />
      <AboutUs />
      <AboutInnovator />
      <WhyChooseUs />
      <FeaturedProducts />
      <Testimonials />
      <ContactUs />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default LandingPage;
