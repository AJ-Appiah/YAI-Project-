import React, { useState, useEffect } from "react";
import { Star } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import testimony1 from "../../assets/images/testimony1.jpg";
import testimony2 from "../../assets/images/testimony2.jpg";
import testimony3 from "../../assets/images/testimony3.jpg";

// Testimonials Data
const testimonials = [
  {
    id: 1,
    name: "Kwame Boateng",
    position: "Golden Cashew Farms",
    image: testimony1,
    rating: 5,
    review:
      "This cashew processing machine has been a game-changer for our farm. It has reduced labor costs significantly and improved efficiency.",
  },
  {
    id: 2,
    name: "Ama Serwaa",
    position: "Organic Cashew Co.",
    image: testimony3,
    rating: 4.8,
    review:
      "The solar-powered drying system works perfectly! It helps us maintain cashew quality without worrying about electricity bills.",
  },
  {
    id: 3,
    name: "Michael Ofori",
    position: "Cashew Farmers Network",
    image: testimony2,
    rating: 4.5,
    review:
      "Great investment! The shelling machine processes large volumes quickly. Highly recommended for commercial farmers.",
  },
];

// Star Rating Component (Handles Full & Partial Fills)
const StarRating = ({ rating }) => {
  return (
    <div className="flex mt-2 relative">
      {[...Array(5)].map((_, i) => {
        const percentage = Math.min(Math.max(rating - i, 0), 1) * 100; // Fill percentage per star
        return (
          <div key={i} className="relative w-5 h-5">
            {/* Background Star (Gray) */}
            <Star size={20} className="text-gray-300 absolute" />
            {/* Filled Star (Yellow) */}
            <div
              className="absolute top-0 left-0 overflow-hidden"
              style={{
                width: `${percentage}%`,
              }}
            >
              <Star size={20} className="text-yellow-500" fill="currentColor" />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default function Testimonials() {
  const [index, setIndex] = useState(0);

  // Change testimonial every 6 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="w-full max-w-5xl mx-auto py-16 px-6 flex flex-col items-center">
      {/* ✅ Title Section Added Back */}
      <h2 className="text-4xl font-bold text-gray-900 text-center mb-8">
        What Our Customers Say About Us
      </h2>

      <div className="grid md:grid-cols-2 gap-10 items-center bg-white shadow-lg rounded-xl p-8">
        {/* Image Section */}
        <div className="relative">
          <img
            src={testimonials[index].image}
            alt={testimonials[index].name}
            className="w-full h-72 object-cover rounded-lg shadow-md"
          />
        </div>

        {/* Text Section */}
        <AnimatePresence mode="wait">
          <motion.div
            key={testimonials[index].id}
            className="text-left"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.6 }}
          >
            {/* Quote */}
            <p className="text-2xl text-gray-700 font-light italic leading-relaxed">
              “{testimonials[index].review}”
            </p>

            <div className="border-t mt-4 pt-4">
              <h3 className="text-lg font-bold text-gray-900">
                {testimonials[index].name}
              </h3>
              <p className="text-green-600 text-sm font-medium">
                {testimonials[index].position}
              </p>

              {/* Updated Star Ratings */}
              <StarRating rating={testimonials[index].rating} />
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
