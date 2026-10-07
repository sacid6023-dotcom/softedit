import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Products.css';
import { useCart } from '../CartContext';

const productsData = {
  "Lip Glosses": [
    { name: "Barbie", image: "/products/Barbie/Barbie.PNG" },
    { name: "Cherry cola", image: "/products/Cherry cola/Cherry cola.PNG" },
    { name: "Cranberry", image: "/products/Cranberry/cranberry.PNG" },
    { name: "Martini", image: "/products/Martini/Martini.PNG" },
    { name: "Chai", image: "/products/Chai/Chai.PNG" },
    { name: "Bellini", image: "/products/Bellini/Bellini.PNG" }
  ],
  "Lipsticks": [
    { name: "Red flag", image: "/products/Red flag/Red flag.PNG" },
    { name: "Pink Latte", image: "/products/Pink latte/Pink latte.PNG" },
    { name: "Fudge", image: "/products/Fudge/Fudge.PNG" },
    { name: "Currently obsessed", image: "/products/Currently obsessed/Currently obsessed.PNG" }
  ],
  "PH Tint": [
    { name: "Ph Tint", image: "/products/PH TINT/PH TINT.PNG" }
  ]
};

export default function Products({ category }) {
  const products = productsData[category] || [];
  const { addToCart } = useCart();

  return (
    <div className="products-page fade-in">
      <div className="container">
      <header className="category-header text-center flex-col items-center justify-center gap-6">
        <h1 className="text-6xl">{category}</h1>
        <p className="text-xl text-light max-w-2xl fw-300 mx-auto">
          Discover our luxurious collection of {category.toLowerCase()}, thoughtfully formulated for comfort, longevity, and everyday elegance.
        </p>
      </header>

      <div className="products-grid grid">
        {products.map((product, idx) => (
          <div key={idx} className="product-card">
            <Link to={`/product/${encodeURIComponent(product.name)}`} onClick={() => window.scrollTo(0,0)} style={{textDecoration: 'none', color: 'inherit', display: 'flex', flexDirection: 'column'}}>
              <div className="product-image-container img-hover-zoom">
                <img src={product.image} alt={product.name} onError={(e) => { e.target.src = '/products/Bellini/Bellini.PNG'; }} />
                <button className="quick-add btn" onClick={(e) => { e.preventDefault(); addToCart(product); }}>ADD TO CART</button>
              </div>
              <div className="product-info flex justify-between items-center">
                <h3>{product.name.toUpperCase()}</h3>
                <span className="price text-sm text-light fw-300">
                  <span style={{textDecoration: 'line-through', color: '#999', marginRight: '8px'}}>₹999</span>₹699
                </span>
              </div>
            </Link>
          </div>
        ))}
      </div>
      </div>

      {/* Category Specific Content */}
      <div className="category-content-sections">
        {category === "Lip Glosses" && (
          <>
            <section className="content-section container grid items-center gap-12 mt-12">
               <div className="content-image img-hover-zoom">
                 <img src="/products/Cherry cola/Cherry cola.PNG" alt="Lip Gloss Application" onError={(e) => { e.target.src = '/products/Bellini/Bellini.PNG'; }} />
               </div>
               <div className="content-text flex-col gap-6">
                 <h2 className="text-5xl">The Perfect Glaze</h2>
                 <p className="text-lg text-light fw-300">
                   Unlike traditional glosses, our formula is designed for ultimate comfort. We've eliminated the sticky feel, replacing it with a nourishing, balm-like texture that delivers a high-shine, glass-like finish. Infused with hydrating ingredients, it keeps your lips soft and plump all day.
                 </p>
               </div>
            </section>
            
            <section className="content-section-centered text-center flex-col items-center justify-center mt-12 bg-soft-cream p-12">
              <h2 className="text-4xl mb-8">How to Wear It</h2>
              <div className="container grid grid-cols-3 gap-12 text-left">
                 <div className="flex-col gap-4">
                   <h3 className="text-2xl">1. The Natural Look</h3>
                   <p className="text-base text-light fw-300">Apply a single swipe on bare lips for a sheer, healthy-looking tint that enhances your natural lip color.</p>
                 </div>
                 <div className="flex-col gap-4">
                   <h3 className="text-2xl">2. The Dimension</h3>
                   <p className="text-base text-light fw-300">Layer over your favorite Soft Edit lipstick, concentrating on the center of your lips for a fuller, plumper effect.</p>
                 </div>
                 <div className="flex-col gap-4">
                   <h3 className="text-2xl">3. The Bold Shine</h3>
                   <p className="text-base text-light fw-300">Pair with a slightly darker lip liner, blending the edges for a dimensional, 90s-inspired glossy pout.</p>
                 </div>
              </div>
            </section>

            <section className="content-section container grid items-center gap-12 mt-12">
               <div className="content-text flex-col gap-6">
                 <h2 className="text-5xl">Formula & Ingredients</h2>
                 <p className="text-lg text-light fw-300">
                   Our glosses are created with a lip-care-inspired approach, combining makeup with ingredients selected to help keep lips feeling comfortable and conditioned.
                 </p>
                 <div className="ingredients-list flex-col gap-4 mt-4">
                   <div>
                     <h4 className="text-xl fw-400">Hyaluronic Acid</h4>
                     <p className="text-base text-light fw-300">helps support a hydrated-feeling lip.</p>
                   </div>
                   <div>
                     <h4 className="text-xl fw-400">Peptides</h4>
                     <p className="text-base text-light fw-300">included as part of our lip-care-inspired formula.</p>
                   </div>
                   <div>
                     <h4 className="text-xl fw-400">Collagen</h4>
                     <p className="text-base text-light fw-300">included as part of the formula’s conditioning approach.</p>
                   </div>
                 </div>
               </div>
               <div className="content-image img-hover-zoom">
                 <img src="/products/PH TINT/PH TINT.PNG" alt="Lip Gloss Ingredients" onError={(e) => { e.target.src = '/products/Bellini/Bellini.PNG'; }} />
               </div>
            </section>
          </>
        )}

        {category === "Lipsticks" && (
          <>
            <section className="content-section container grid items-center gap-12 mt-12">
               <div className="content-image img-hover-zoom">
                 <img src="/products/Red flag/Red flag.PNG" alt="Lipstick Application" onError={(e) => { e.target.src = '/products/Pink latte/Pink latte.PNG'; }} />
               </div>
               <div className="content-text flex-col gap-6">
                 <h2 className="text-5xl">Bold Color, Soft Feel</h2>
                 <p className="text-lg text-light fw-300">
                   Experience lip color that doesn't compromise on comfort. Our lipsticks deliver intense, one-swipe pigmentation while maintaining a featherlight feel. The formulation glides on effortlessly, providing a long-lasting finish that won't dry out your lips.
                 </p>
               </div>
            </section>
            
            <section className="content-section-centered text-center flex-col items-center justify-center mt-12 bg-soft-cream p-12">
              <h2 className="text-4xl mb-8">Application & Care</h2>
              <div className="container grid grid-cols-3 gap-12 text-left">
                 <div className="flex-col gap-4">
                   <h3 className="text-2xl">1. Prep</h3>
                   <p className="text-base text-light fw-300">Gently exfoliate lips and apply a light lip balm. Let it absorb before applying lipstick for the smoothest canvas.</p>
                 </div>
                 <div className="flex-col gap-4">
                   <h3 className="text-2xl">2. Define</h3>
                   <p className="text-base text-light fw-300">For maximum precision and longevity, outline your lips with a matching liner before filling in with your chosen shade.</p>
                 </div>
                 <div className="flex-col gap-4">
                   <h3 className="text-2xl">3. Set</h3>
                   <p className="text-base text-light fw-300">For a transfer-resistant finish, lightly blot with a tissue and apply a second thin layer of color.</p>
                 </div>
              </div>
            </section>

            <section className="content-section container grid items-center gap-12 mt-12">
               <div className="content-text flex-col gap-6">
                 <h2 className="text-5xl">Formula & Ingredients</h2>
                 <p className="text-lg text-light fw-300">
                   A richly pigmented lipstick designed to deliver intense colour with a soft, velvety-smooth finish. The formula glides effortlessly onto the lips, leaving them feeling comfortable, soft and beautifully conditioned.
                 </p>
                 <p className="text-lg text-light fw-300">
                   Unlike a traditional lipstick, our formula is created with a skincare-meets-makeup approach, combining statement colour with carefully selected lip-loving ingredients.
                 </p>
               </div>
               <div className="content-image img-hover-zoom">
                 <img src="/products/Fudge/Fudge.PNG" alt="Lipstick Formula" onError={(e) => { e.target.src = '/products/Pink latte/Pink latte.PNG'; }} />
               </div>
            </section>
          </>
        )}
      </div>
    </div>
  );
}
