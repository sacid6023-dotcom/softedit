import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import './FAQ.css';

const faqs = [
  {
    question: "Are your products vegan and cruelty-free?",
    answer: "Yes, all Soft Edit Cosmetics products are 100% vegan and cruelty-free. We never test on animals and ensure our ingredients are ethically sourced."
  },
  {
    question: "Where are your products manufactured?",
    answer: "Our products are proudly formulated and manufactured in India, adhering to the highest global standards of quality, safety, and aesthetics."
  },
  {
    question: "How long does shipping take?",
    answer: "Orders are typically processed within 1-2 business days. Standard shipping within India usually takes about 3-5 business days depending on your location."
  },
  {
    question: "Can I return or exchange a product?",
    answer: "Due to hygiene reasons, we do not accept returns on opened cosmetics. However, if you receive a damaged or incorrect item, please contact us within 48 hours for a replacement."
  },
  {
    question: "Do you offer international shipping?",
    answer: "Currently, we ship exclusively across India. We are working hard to expand and bring Soft Edit Cosmetics to our international community soon!"
  },
  {
    question: "How can I track my order?",
    answer: "Once your order is dispatched, you will receive a tracking link via email and WhatsApp to monitor your package's journey in real-time."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="faq-section-wrapper">
      <section className="faq-section container">
        <div className="text-center flex-col items-center justify-center mb-12">
          <h2 className="text-4xl">Frequently Asked Questions</h2>
          <p className="text-light fw-300 mt-2" style={{letterSpacing: '0.03em'}}>Everything you need to know about our products and services.</p>
        </div>
        <div className="faq-container">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className={`faq-item ${openIndex === index ? 'active' : ''}`}
            >
              <button 
                className="faq-question flex justify-between items-center w-full"
                onClick={() => toggleFAQ(index)}
              >
                <h3 className="text-lg fw-400 m-0 text-left">{faq.question}</h3>
                <span className="faq-icon">
                  <ChevronDown size={20} strokeWidth={1.5} />
                </span>
              </button>
              <div className="faq-answer">
                <div className="faq-answer-inner text-base text-light fw-300 lh-lg text-left">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
