import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import './Testimonials.css';

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    { name: "Aanya S.", review: "Absolutely love the Cherry Cola gloss! It’s non-sticky, super hydrating, and gives the perfect hint of color. Definitely my everyday go-to now.", rating: 5 },
    { name: "Priya M.", review: "The pigment on the Red Flag lipstick is insane. It lasts all day without drying out my lips. So impressed with the quality!", rating: 5 },
    { name: "Simran K.", review: "I've been looking for a vegan and cruelty-free brand that actually delivers on its promise. Soft Edit is a game changer. The Pink Latte shade is beautiful.", rating: 5 },
    { name: "Meera R.", review: "Such luxurious packaging and the formula feels so premium. The Fudge gloss is a beautiful everyday shade. Worth every penny.", rating: 5 },
    { name: "Riya D.", review: "Love how lightweight the lipsticks feel. They glide on so smoothly. Highly recommend the Barbie shade for a fun pop of color!", rating: 5 }
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      nextTestimonial();
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="testimonials-section">
      <div className="container">
        <div className="text-center flex-col items-center justify-center mb-12">
          <h2 className="text-4xl text-white testimonial-title">Soft Words</h2>
          <p className="text-white fw-300 mt-2 testimonial-subtitle">What our community is saying.</p>
        </div>
        
        <div className="testimonial-carousel">
          <button className="carousel-control prev" onClick={prevTestimonial}>
            <ChevronLeft size={24} />
          </button>
          
          <div className="carousel-track-container">
            <div 
              className="carousel-track" 
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial, idx) => (
                <div key={idx} className={`carousel-slide ${currentIndex === idx ? 'active' : ''}`}>
                  <div className="testimonial-card flex-col gap-6">
                    <div className="stars flex justify-center gap-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} size={18} fill="#c9a77c" color="#c9a77c" />
                      ))}
                    </div>
                    <p className="testimonial-text text-xl fw-300 text-center lh-lg">
                      "{testimonial.review}"
                    </p>
                    <h4 className="testimonial-name text-sm fw-500 text-center uppercase">
                      — {testimonial.name}
                    </h4>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <button className="carousel-control next" onClick={nextTestimonial}>
            <ChevronRight size={24} />
          </button>
        </div>
        
        <div className="carousel-dots flex justify-center gap-2 mt-8">
          {testimonials.map((_, idx) => (
            <button 
              key={idx} 
              className={`dot ${currentIndex === idx ? 'active' : ''}`}
              onClick={() => setCurrentIndex(idx)}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
