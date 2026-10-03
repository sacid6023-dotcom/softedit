import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ShieldCheck } from 'lucide-react';
import { useCart } from '../CartContext';
import './ProductDetail.css';
import Testimonials from '../components/Testimonials';

const productsInfo = {
  "Red flag": { 
    name: "Red flag", category: "Lipsticks", folder: "Red flag", image2_suffix: "2.PNG", 
    description: "The only red flag we’re willing to ignore. A bold red made for main-character moments.",
    features: ["Intense Colour", "Velvety-Smooth Finish", "Skincare-Meets-Makeup", "Vegan & Cruelty-Free"]
  },
  "Pink Latte": { 
    name: "Pink Latte", category: "Lipsticks", folder: "Pink latte", image2_suffix: "2.PNG",
    description: "Soft, creamy and effortlessly pretty. Your everyday pink with a little extra charm.",
    features: ["Intense Colour", "Velvety-Smooth Finish", "Skincare-Meets-Makeup", "Vegan & Cruelty-Free"]
  },
  "Fudge": { 
    name: "Fudge", category: "Lipsticks", folder: "Fudge", image2_suffix: "2.PNG",
    description: "Rich, warm and deliciously deep. A chocolate-toned lip made to melt into every look.",
    features: ["Intense Colour", "Velvety-Smooth Finish", "Skincare-Meets-Makeup", "Vegan & Cruelty-Free"]
  },
  "Currently obsessed": { 
    name: "Currently obsessed", category: "Lipsticks", folder: "Currently obsessed", image2_suffix: "2.PNG",
    description: "One swipe and you’ll get it. A wear-on-repeat shade worthy of its name.",
    features: ["Intense Colour", "Velvety-Smooth Finish", "Skincare-Meets-Makeup", "Vegan & Cruelty-Free"]
  },
  "Barbie": { 
    name: "Barbie", category: "Lip Glosses", folder: "Barbie", image2_suffix: "2.PNG",
    description: "Pink, glossy and unapologetically girly. Basically, your dream gloss.",
    features: ["High-Shine Finish", "Hydrating Formula", "Non-Sticky", "Vegan & Cruelty-Free"]
  },
  "Ph Tint": { 
    name: "Ph Tint", category: "Lip Glosses", folder: "PH TINT", image2_suffix: "2.PNG",
    description: "Your lips, but uniquely yours. A pH-reactive tint that develops into your own custom flush.",
    features: ["High-Shine Finish", "Hydrating Formula", "Non-Sticky", "Vegan & Cruelty-Free"]
  },
  "Cherry cola": { 
    name: "Cherry cola", category: "Lip Glosses", folder: "Cherry cola", image2_suffix: "2.PNG",
    description: "Juicy, deep and a little addictive. Cherry-red meets cola brown for the ultimate cool-girl lip.",
    features: ["High-Shine Finish", "Hydrating Formula", "Non-Sticky", "Vegan & Cruelty-Free"]
  },
  "Cranberry": { 
    name: "Cranberry", category: "Lip Glosses", folder: "Cranberry", image2_suffix: "2.PNG",
    description: "A juicy berry-red with just the right amount of drama. Rich, glossy and impossible to miss.",
    features: ["High-Shine Finish", "Hydrating Formula", "Non-Sticky", "Vegan & Cruelty-Free"]
  },
  "Martini": { 
    name: "Martini", category: "Lip Glosses", folder: "Martini", image2_suffix: "2.PNG",
    description: "Gloss with a little attitude. A sophisticated wash of shine made for after-hours energy.",
    features: ["High-Shine Finish", "Hydrating Formula", "Non-Sticky", "Vegan & Cruelty-Free"]
  },
  "Chai": { 
    name: "Chai", category: "Lip Glosses", folder: "Chai", image2_suffix: "2.PNG",
    description: "Warm, cozy and effortlessly flattering. A caramel-toned nude you’ll reach for every day.",
    features: ["High-Shine Finish", "Hydrating Formula", "Non-Sticky", "Vegan & Cruelty-Free"]
  },
  "Bellini": { 
    name: "Bellini", category: "Lip Glosses", folder: "Bellini", image2_suffix: "2.PNG",
    description: "Sweet, peachy and made to glow. A juicy coral-pink inspired by your favourite bubbly sip.",
    features: ["High-Shine Finish", "Hydrating Formula", "Non-Sticky", "Vegan & Cruelty-Free"]
  }
};

export default function ProductDetail() {
  const { productName } = useParams();
  const { addToCart } = useCart();
  
  const decodedName = decodeURIComponent(productName);
  const product = productsInfo[decodedName];

  if (!product) {
    return (
      <div className="product-detail-page flex items-center justify-center p-20">
        <h2 className="text-3xl">Product not found.</h2>
        <Link to="/" className="btn btn-outline mt-4">Return Home</Link>
      </div>
    );
  }

  const image1 = `/products/${product.folder}/${product.folder}.PNG`;
  const image2 = `/products/${product.folder}/${product.folder}${product.image2_suffix}`;
  const images = [image1, image2];
  
  const [currentImageIdx, setCurrentImageIdx] = useState(0);

  const nextImage = () => {
    setCurrentImageIdx((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };
  
  const prevImage = () => {
    setCurrentImageIdx((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  // Find related products (same category, excluding current)
  const relatedProducts = Object.values(productsInfo)
    .filter(p => p.category === product.category && p.name !== product.name)
    .slice(0, 4);

  return (
    <div className="product-detail-page fade-in">
      <div className="container product-detail-grid mt-12 mb-20">
        {/* Left Side: Images Carousel */}
        <div className="product-detail-images">
          <div className="carousel-container">
            <button className="carousel-btn prev-btn" onClick={prevImage}>&lt;</button>
            <div className="main-image img-hover-zoom">
              <img key={images[currentImageIdx]} src={images[currentImageIdx]} alt={`${product.name} preview`} onError={(e) => { e.target.src = '/products/Bellini/Bellini.PNG'; }} />
            </div>
            <button className="carousel-btn next-btn" onClick={nextImage}>&gt;</button>
            <div className="carousel-indicators">
              {images.map((_, idx) => (
                <span 
                  key={idx} 
                  className={`indicator ${idx === currentImageIdx ? 'active' : ''}`}
                  onClick={() => setCurrentImageIdx(idx)}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Right Side: Info */}
        <div className="product-detail-info flex-col gap-6" style={{ position: 'sticky', top: '100px', alignSelf: 'start' }}>
          <div className="breadcrumb text-sm text-light uppercase mb-2">
            <Link to="/">Home</Link> &gt; <Link to={`/${product.category.toLowerCase().replace(' ', '-')}`}>{product.category}</Link> &gt; {product.name}
          </div>
          
          <h1 className="text-5xl mb-2 uppercase">{product.name}</h1>
          <p className="price-display text-2xl fw-300">
            <span style={{textDecoration: 'line-through', color: '#999', marginRight: '12px'}}>₹999</span>
            <span style={{color: 'var(--color-text-dark)'}}>₹699</span>
          </p>
          
          <div className="product-description mt-4 mb-4">
            <p className="text-lg text-light fw-300 lh-lg">{product.description}</p>
          </div>
          
          <button 
            className="btn btn-primary w-full text-center py-4 text-lg add-to-cart-cta"
            onClick={() => addToCart({ name: product.name, image: image1, price: 699 })}
          >
            ADD TO CART — ₹699
          </button>
          
          <div className="payment-trust-section mt-4 flex-col items-center gap-2 pt-2">
            <div className="flex items-center gap-1 text-xs fw-500" style={{ color: 'var(--color-text-medium)' }}>
              <ShieldCheck size={14} strokeWidth={2} style={{ color: '#4CAF50' }} />
              <span style={{letterSpacing: '0.02em'}}>100% SECURE PAYMENT</span>
            </div>
            <div className="payment-icons flex justify-center gap-2 mt-2">
              <div className="pay-badge upi">UPI</div>
              <div className="pay-badge gpay">GPay</div>
              <div className="pay-badge phonepe">PhonePe</div>
              <div className="pay-badge paytm">Paytm</div>
            </div>
          </div>
          
          <div className="offers-box mt-4 p-4 bg-soft-cream">
            <h4 className="uppercase text-sm fw-500 mb-2">Special Offers</h4>
            <ul className="text-sm text-light fw-300 lh-lg ml-4" style={{listStyleType: 'disc'}}>
              <li>Buy 2 for ₹1199</li>
              <li>Buy 3 for ₹1999</li>
              <li>Freebies on orders above ₹1199</li>
            </ul>
          </div>
          
          <div className="product-features mt-6 border-t pt-6">
            <h4 className="uppercase text-sm fw-500 mb-4">Why you'll love it</h4>
            <div className="features-grid grid grid-cols-2 gap-4">
              {product.features.map((feature, idx) => (
                <div key={idx} className="feature-item flex items-center gap-2 text-sm text-light fw-300">
                  <span className="feature-icon">✨</span> {feature}
                </div>
              ))}
            </div>
          </div>
          
          <div className="accordion mt-6 border-t pt-6">
            <h4 className="uppercase text-sm fw-500 mb-2">Formula & Ingredients</h4>
            <p className="text-sm text-light fw-300 lh-lg">
              {product.category === 'Lip Glosses' 
                ? "Formulated with Hyaluronic Acid, Peptides, and Collagen for a deeply hydrating, lip-care-inspired finish without the stickiness." 
                : "A skincare-meets-makeup approach crafted to provide velvety-smooth, intense color while keeping lips soft and conditioned."}
            </p>
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <Testimonials />

      {/* Related Products Section */}
      <section className="related-products-section container mt-20 mb-20">
        <div className="text-center" style={{ marginBottom: '4rem' }}>
          <h2 className="text-4xl related-title">Complete Your Edit</h2>
        </div>
        <div className="products-grid related-grid">
          {relatedProducts.map((rp, idx) => {
            const rpImage = `/products/${rp.folder}/${rp.folder}.PNG`;
            return (
              <div key={idx} className="product-card">
                <Link to={`/product/${encodeURIComponent(rp.name)}`} onClick={() => { window.scrollTo(0,0); setCurrentImageIdx(0); }} style={{textDecoration: 'none', color: 'inherit'}}>
                  <div className="product-image-container img-hover-zoom">
                    <img src={rpImage} alt={rp.name} onError={(e) => { e.target.src = '/products/Bellini/Bellini.PNG'; }} />
                    <button 
                      className="quick-add btn" 
                      onClick={(e) => { 
                        e.preventDefault(); 
                        addToCart({ name: rp.name, price: 699, image: rpImage }); 
                      }}
                    >
                      ADD TO CART
                    </button>
                  </div>
                  <div className="product-info flex justify-between items-center mt-4">
                    <h3>{rp.name.toUpperCase()}</h3>
                    <span className="price text-sm text-light fw-300">
                      <span style={{textDecoration: 'line-through', color: '#999', marginRight: '8px'}}>₹999</span>₹699
                    </span>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
