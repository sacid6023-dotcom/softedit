import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import './Products.css';
import { useCart } from '../CartContext';
import Testimonials from '../components/Testimonials';
import FAQ from '../components/FAQ';

export default function Home() {
  const { addToCart } = useCart();
  const [heroIndex, setHeroIndex] = useState(0);

  const heroImages = [
    '/products/Bellini/Bellini2.PNG',
    '/products/Cherry cola/Cherry cola.PNG',
    '/products/Pink latte/Pink latte2.PNG'
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setHeroIndex((prev) => (prev + 1) % heroImages.length);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="home-page fade-in">
      {/* Hero Section */}
      <section className="hero-section flex items-center justify-center">
        {heroImages.map((img, idx) => (
          <div 
            key={idx} 
            className={`hero-bg ${idx === heroIndex ? 'active' : ''}`}
            style={{ backgroundImage: `url("${img}")` }}
          ></div>
        ))}
        <div className="hero-content text-center flex-col items-center gap-6">
          <h1 className="text-6xl text-white hero-title mt-4">Soft beauty. Your way.</h1>
          <p className="text-lg text-white fw-300" style={{opacity: 0.85, maxWidth: '480px', margin: '0 auto'}}>Premium lip cosmetics — curated, conscious, crafted in India.</p>
          <div className="hero-ctas flex gap-4 justify-center">
            <Link to="/lip-glosses" className="btn btn-light">SHOP LIP GLOSSES</Link>
            <Link to="/lipsticks" className="btn btn-light">SHOP LIPSTICKS</Link>
          </div>
        </div>
      </section>

      {/* Marquee Section */}
      <section className="marquee-section">
        <div className="marquee-container">
          <div className="marquee-content">
            <span className="marquee-item">PROUDLY MADE IN INDIA</span>
            <span className="marquee-separator">•</span>
            <span className="marquee-item">100% VEGAN</span>
            <span className="marquee-separator">•</span>
            <span className="marquee-item">CRUELTY FREE</span>
            <span className="marquee-separator">•</span>
            
            {/* Duplicate for infinite loop */}
            <span className="marquee-item">PROUDLY MADE IN INDIA</span>
            <span className="marquee-separator">•</span>
            <span className="marquee-item">100% VEGAN</span>
            <span className="marquee-separator">•</span>
            <span className="marquee-item">CRUELTY FREE</span>
            <span className="marquee-separator">•</span>
          </div>
        </div>
      </section>

      {/* Brand Statement */}
      <section className="brand-statement container text-center flex-col items-center justify-center">
        <h2 className="text-4xl">Beauty, thoughtfully edited.</h2>
        <p className="text-xl max-w-2xl mx-auto text-light fw-300" style={{marginTop: '1rem'}}>
          Designed for the modern individual who seeks elegance, simplicity, and confidence. We believe in soft, modern femininity without compromise — a curated edit for your everyday luxury.
        </p>
      </section>

      {/* Shop By Category */}
      <section className="shop-category container grid gap-4">
        <div className="category-card img-hover-zoom">
          <img src="/products/Cherry cola/Cherry cola.PNG" alt="Lip Glosses" />
          <div className="category-overlay flex-col justify-end">
            <h2 className="text-4xl text-white mb-4">Lip Glosses</h2>
            <Link to="/lip-glosses" className="btn btn-light" style={{alignSelf: 'flex-start'}}>DISCOVER</Link>
          </div>
        </div>
        <div className="category-card img-hover-zoom">
          <img src="/products/Red flag/Red flag.PNG" alt="Lipsticks" />
          <div className="category-overlay flex-col justify-end">
            <h2 className="text-4xl text-white mb-4">Lipsticks</h2>
            <Link to="/lipsticks" className="btn btn-light" style={{alignSelf: 'flex-start'}}>DISCOVER</Link>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="featured-products container">
        <div className="text-center flex-col items-center justify-center" style={{marginBottom: '3rem'}}>
          <h2 className="text-4xl">Featured Edits</h2>
          <p className="text-light fw-300" style={{marginTop: '0.5rem', letterSpacing: '0.03em'}}>Discover our most loved formulas.</p>
        </div>
        <div className="products-grid grid" style={{ gap: '3rem' }}>
          {[
            { name: "Cherry cola", image: "/products/Cherry cola/Cherry cola.PNG", originalPrice: 999, price: 699 },
            { name: "Pink Latte", image: "/products/Pink latte/Pink latte.PNG", originalPrice: 999, price: 699 },
            { name: "Barbie", image: "/products/Barbie/Barbie.PNG", originalPrice: 999, price: 699 },
            { name: "Fudge", image: "/products/Fudge/Fudge.PNG", originalPrice: 999, price: 699 }
          ].map((product, idx) => (
            <div key={idx} className="product-card">
              <Link to={`/product/${encodeURIComponent(product.name)}`} onClick={() => window.scrollTo(0,0)} style={{textDecoration: 'none', color: 'inherit', display: 'flex', flexDirection: 'column'}}>
                <div className="product-image-container img-hover-zoom">
                  <img src={product.image} alt={product.name} onError={(e) => { e.target.src = '/products/Bellini/Bellini.PNG'; }} />
                  <button className="quick-add btn" onClick={(e) => { e.preventDefault(); addToCart({ name: product.name, price: product.price, image: product.image }); }}>ADD TO CART</button>
                </div>
                <div className="product-info flex justify-between items-center mt-4">
                  <h3>{product.name.toUpperCase()}</h3>
                  <span className="price text-sm text-light fw-300">
                    <span style={{textDecoration: 'line-through', color: '#999', marginRight: '8px'}}>₹{product.originalPrice}</span>₹{product.price}
                  </span>
                </div>
              </Link>
            </div>
          ))}
        </div>
        <div className="text-center mt-12 flex-col items-center justify-center">
            <Link to="/lip-glosses" className="btn btn-outline" style={{ margin: '0 auto' }}>SHOP ALL PRODUCTS</Link>
        </div>
      </section>

      {/* The Soft Edit / Editorial */}
      <section className="editorial-section container grid items-center gap-12">
        <div className="editorial-text flex-col gap-6">
          <h2 className="text-5xl">The Soft Edit</h2>
          <p className="text-lg text-light fw-300">
            Our approach to beauty is minimal yet luxurious. We meticulously curate formulas and shades that enhance your natural beauty. Every product is a testament to our commitment to quality, aesthetic, and you.
          </p>
          <Link to="/about" className="btn btn-outline" style={{ alignSelf: 'flex-start', marginTop: '1rem' }}>DISCOVER OUR STORY</Link>
        </div>
        <div className="editorial-image img-hover-zoom">
          <img src="/products/Pink latte/Pink latte2.PNG" alt="Soft Edit Philosophy" />
        </div>
      </section>

      {/* Clean Beauty Promise */}
      <section className="promise-section container grid items-center gap-12">
        <div className="editorial-image img-hover-zoom promise-image">
          <img src="/products/PH TINT/PH TINT.PNG" alt="Clean Beauty Promise" onError={(e) => { e.target.src = '/products/Bellini/Bellini.PNG'; }} />
        </div>
        <div className="editorial-text promise-text flex-col gap-6">
          <h2 className="text-5xl">Clean & Conscious</h2>
          <p className="text-lg text-light fw-300">
            We believe that what you put on your skin matters. That’s why every Soft Edit Cosmetics product is meticulously crafted without harmful chemicals. Our 100% vegan and cruelty-free formulas ensure that you never have to choose between high-performance makeup and your values.
          </p>
        </div>
      </section>

      {/* Why Choose Us Full Width Banner */}
      <section className="why-choose-banner text-center flex-col items-center justify-center">
        <h2 className="text-4xl mb-4 text-white">Your everyday confidence.</h2>
        <p className="text-xl max-w-2xl mx-auto text-white fw-300 mb-8">
          From sheer tints to bold statements, our collections are designed to empower your unique style with effortless application and supreme comfort.
        </p>
      </section>

      {/* FAQ Section */}
      <FAQ />

      {/* Testimonials Section */}
      <Testimonials />

      {/* Brand Values */}
      <section className="values-section container grid text-center">
        <div className="value-item flex-col items-center gap-4">
          <h3 className="text-2xl fw-400">Luxurious Formulas</h3>
          <p className="text-base text-light fw-300 max-w-xl mx-auto">Infused with skin-loving ingredients for a flawless, comfortable finish that lasts all day.</p>
        </div>
        <div className="value-item flex-col items-center gap-4">
          <h3 className="text-2xl fw-400">Conscious Beauty</h3>
          <p className="text-base text-light fw-300 max-w-xl mx-auto">100% Vegan and Cruelty-Free. We believe in modern beauty without compromise.</p>
        </div>
        <div className="value-item flex-col items-center gap-4">
          <h3 className="text-2xl fw-400">Crafted in India</h3>
          <p className="text-base text-light fw-300 max-w-xl mx-auto">Proudly formulated and made in India, adhering to global standards of excellence.</p>
        </div>
      </section>

    </div>
  );
}
