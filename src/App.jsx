import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import Products from './pages/Products';
import ProductDetail from './pages/ProductDetail';
import About from './pages/About';

import Contact from './pages/Contact';
import LegalPage from './pages/LegalPage';
import PromoPopup from './components/PromoPopup';

// Legal Page Contents
const privacyContent = (
  <>
    <p>At Soft Edit Cosmetics, we take your privacy seriously. This Privacy Policy explains how we collect, use, and protect your personal information.</p>
    <h2>Information We Collect</h2>
    <p>We collect information you provide directly to us when you make a purchase, sign up for our newsletter, or contact our customer support.</p>
    <h2>How We Use Your Information</h2>
    <p>We use the information we collect to fulfill your orders, communicate with you about products and promotions, and improve our services.</p>
    <h2>Information Sharing</h2>
    <p>We do not sell or share your personal information with third parties except as necessary to fulfill your orders (e.g., shipping carriers) or comply with the law.</p>
  </>
);

const termsContent = (
  <div className="legal-content-wrapper flex-col gap-4">
    <p>Welcome to The Soft Edit. By accessing or purchasing from our website, you agree to the following Terms & Conditions.</p>
    
    <h2 className="text-xl fw-500 mt-4">1. General</h2>
    <p>The Soft Edit reserves the right to update, modify, or discontinue any product, service, price, or website content without prior notice.</p>
    
    <h2 className="text-xl fw-500 mt-4">2. Products & Product Information</h2>
    <p>We make every effort to display product colours, shades, ingredients, and descriptions as accurately as possible. However, colours may appear slightly different depending on your screen and lighting conditions.</p>
    
    <h2 className="text-xl fw-500 mt-4">3. Orders & Payments</h2>
    <p>All orders are subject to product availability and successful payment confirmation. We reserve the right to cancel or refuse an order in certain circumstances, including suspected fraudulent transactions or incorrect pricing.</p>
    
    <h2 className="text-xl fw-500 mt-4">4. Pricing</h2>
    <p>All prices displayed on the website are in Indian Rupees (INR) unless stated otherwise. Prices may be changed at any time without prior notice.</p>
    
    <h2 className="text-xl fw-500 mt-4">5. Shipping & Delivery</h2>
    <p>Delivery timelines provided on the website are estimates and may vary depending on the delivery location, courier service, weather, holidays, or circumstances beyond our control.</p>
    
    <h2 className="text-xl fw-500 mt-4">6. Returns & Exchanges</h2>
    <p>Returns and exchanges are governed by our Return & Refund Policy. Due to the hygienic nature of cosmetic products, opened or used products may not be eligible for return or exchange unless the product is damaged, defective, or incorrectly delivered.</p>
    
    <h2 className="text-xl fw-500 mt-4">7. Damaged or Incorrect Orders</h2>
    <p>If you receive a damaged, defective, or incorrect product, please contact us within 48 hours of delivery with your order number and clear photographs/video of the package and product.</p>
    
    <h2 className="text-xl fw-500 mt-4">8. Intellectual Property</h2>
    <p>All website content, including the brand name, logo, product photographs, graphics, text, videos, and designs, belongs to The Soft Edit and may not be copied, reproduced, or used without prior written permission.</p>
    
    <h2 className="text-xl fw-500 mt-4">9. Website Usage</h2>
    <p>You agree not to misuse the website, attempt unauthorized access, introduce malicious software, or use the website for fraudulent or unlawful purposes.</p>
    
    <h2 className="text-xl fw-500 mt-4">10. Limitation of Liability</h2>
    <p>The Soft Edit shall not be responsible for delays, losses, or damages caused by circumstances beyond our reasonable control, including courier delays, natural events, technical issues, or third-party service disruptions.</p>
    
    <h2 className="text-xl fw-500 mt-4">11. Privacy</h2>
    <p>Your personal information is handled in accordance with our Privacy Policy.</p>
  </div>
);

const shippingContent = (
  <>
    <p>We aim to process and ship all orders within 1-2 business days. Shipping times vary depending on your location.</p>
    <h2>Domestic Shipping (India)</h2>
    <p>Standard shipping typically takes 3-5 business days. Expedited shipping options are available at checkout.</p>
    <h2>International Shipping</h2>
    <p>We currently do not offer international shipping, but we hope to expand our reach in the near future.</p>
  </>
);

const returnsContent = (
  <div className="legal-content-wrapper flex-col gap-4">
    <p>At The Soft Edit, we want you to be completely happy with your order. As our products are cosmetic products intended for direct application to the lips, we follow strict hygiene standards.</p>
    
    <h2 className="text-xl fw-500 mt-4">Returns & Exchanges</h2>
    <p>We do not accept returns or exchanges for products that have been opened, used, swatched or tampered with.</p>
    <p>However, if you receive a product that is damaged, defective, leaking, incorrect, or missing from your order, please contact us within 48 hours of delivery.</p>
    
    <h2 className="text-xl fw-500 mt-4">Damaged or Incorrect Orders</h2>
    <p>To help us resolve the issue quickly, please send us:</p>
    <ul className="list-disc ml-6 mt-2 mb-2">
      <li>Your order number</li>
      <li>Clear photographs of the product received</li>
      <li>Photographs of the outer packaging</li>
      <li>A clear unboxing video, if available</li>
      <li>A brief description of the issue</li>
    </ul>
    <p>Once we receive the details, our team will review the claim. If the issue is verified, we may offer a replacement or refund, depending on the circumstances and product availability.</p>
    
    <h2 className="text-xl fw-500 mt-4">Change of Mind</h2>
    <p>We do not accept returns or refunds because of:</p>
    <ul className="list-disc ml-6 mt-2 mb-2">
      <li>Change of mind</li>
      <li>Shade preference after purchase</li>
      <li>Personal colour preference</li>
      <li>Product being opened or used</li>
      <li>Allergic or individual reactions where the product has been used</li>
    </ul>
    <p>We recommend checking the product description, shade information, and ingredient list before placing your order.</p>
    
    <h2 className="text-xl fw-500 mt-4">Refunds</h2>
    <p>Where a refund is approved, it will generally be processed to the original payment method. Processing times may vary depending on your bank or payment provider.</p>
    
    <h2 className="text-xl fw-500 mt-4">Important</h2>
    <p>Please do not ship any product back to us without contacting our customer support team first. Unauthorised returns may not be accepted.</p>
  </div>
);

function App() {
  const location = useLocation();
  const isHome = location.pathname === '/';

  return (
    <div className="app-container flex flex-col min-h-screen">
      <ScrollToTop />
      <PromoPopup />
      <Navbar />
      <main className={isHome ? '' : 'main-content'} style={{ flex: '1 0 auto' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/lip-glosses" element={<Products category="Lip Glosses" />} />
          <Route path="/lipsticks" element={<Products category="Lipsticks" />} />
          <Route path="/ph-tint" element={<Products category="PH Tint" />} />
          <Route path="/product/:productName" element={<ProductDetail />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy" element={<LegalPage title="Privacy Policy" content={privacyContent} />} />
          <Route path="/terms" element={<LegalPage title="Terms of Service" content={termsContent} />} />
          <Route path="/shipping" element={<LegalPage title="Shipping Policy" content={shippingContent} />} />
          <Route path="/returns" element={<LegalPage title="Returns & Exchanges" content={returnsContent} />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
