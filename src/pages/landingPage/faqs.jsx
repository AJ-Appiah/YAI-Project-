import React from "react";
import { FaChevronDown } from "react-icons/fa";
import { useState } from "react";
import Footer from "../../components/footer";
import Navbar from "../../components/navbar";

const faqs = [
  {
    question: "What is the Cashew Seeds Detaching Machine?",
    answer:
      "The Cashew Seeds Detaching Machine is an innovative agricultural tool designed to separate cashew seeds from their fruit efficiently, reducing labor costs and processing time.",
  },
  {
    question: "How does the machine work?",
    answer:
      "The machine uses an automated system with a hopper, gears, and a belt mechanism to detach cashew seeds from the fruit, making the process faster and more efficient.",
  },
  {
    question: "Who can use this machine?",
    answer:
      "It is designed for cashew farmers (small-scale & large-scale), cooperatives, and cashew processing industries.",
  },
  {
    question: "What power source does the machine use?",
    answer:
      "The machine operates using electricity or fuel-powered engines, depending on the model you choose.",
  },
  {
    question: "How much does the machine cost?",
    answer: "The price starts at GHS 30,000, depending on the model and customization options.",
  },
  {
    question: "What payment methods are available?",
    answer:
      "We accept Mobile Money (MoMo), Credit & Debit Cards, Bank Transfers, and Installment plans for bulk purchases.",
  },
  {
    question: "Do you offer delivery?",
    answer: "Yes, delivery is available upon request. Delivery charges may apply depending on your location.",
  },
  {
    question: "Is there a warranty?",
    answer: "Yes, we offer a 12-month warranty covering manufacturing defects.",
  },
  {
    question: "Do you offer machine training?",
    answer:
      "Yes, we provide a user manual and free virtual training upon purchase.",
  },
];

const FAQs = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
    <Navbar/>
    <section className="py-16 bg-gray-100 px-6 md:px-12 lg:px-20">
      <h2 className="text-3xl font-bold text-center text-[--color-cashew-green]">
        Frequently Asked Questions
      </h2>
      <div className="mt-8 max-w-3xl mx-auto">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="mb-4 bg-white p-5 rounded-lg shadow-md cursor-pointer"
            onClick={() => toggleFAQ(index)}
          >
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-semibold text-gray-800">{faq.question}</h3>
              <FaChevronDown
                className={`transition-transform duration-300 ${
        openIndex === index ? "rotate-180" : "rotate-0"
      }`}
              />
            </div>
            {openIndex === index && (
              <p className="mt-3 text-gray-600">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
    </section>
    <Footer/>
    </>
  );
};

export default FAQs;
