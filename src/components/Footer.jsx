import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Plus, Minus } from 'lucide-react';
import './Footer.css';

export default function Footer() {
  const [openCols, setOpenCols] = useState({});

  const toggleCol = (col) => {
    setOpenCols(prev => ({...prev, [col]: !prev[col]}));
  };

  return (
    <footer className="footer">
      {/* Newsletter Banner */}
      <div className="footer-newsletter">
        <div className="container footer-newsletter-inner">
          <div className="footer-newsletter-text">
            <h3 className="text-3xl">Join The Soft Edit</h3>
            <p className="text-sm text-light fw-300">Be the first to discover new edits, product launches and exclusive beauty stories.</p>
          </div>
          <form className="footer-newsletter-form" onSubmit={(e) => e.preventDefault()}>
            <input type="email" placeholder="Your email address" required />
            <button type="submit" className="btn btn-primary">SUBSCRIBE</button>
          </form>
        </div>
      </div>

      <div className="footer-main">
        <div className="container footer-grid">
          {/* Brand Column */}
          <div className="footer-brand">
            <h2 className="footer-logo">SOFT EDIT</h2>
            <p className="footer-tagline">COSMETICS</p>
            <p className="footer-brand-desc text-sm text-light">
              A curated edit for your everyday luxury. Premium lip cosmetics that are 100% vegan, cruelty-free, and proudly crafted in India.
            </p>
            <div className="footer-social">
              <a href="#" className="social-icon" aria-label="Instagram">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
              </a>
              <a href="#" className="social-icon" aria-label="Facebook">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
              </a>
              <a href="#" className="social-icon" aria-label="YouTube">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19.13C5.12 19.56 12 19.56 12 19.56s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"/><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"/></svg>
              </a>
            </div>
          </div>

          {/* Shop Links */}
          <div className="footer-col">
            <h4 className="footer-col-title" onClick={() => toggleCol('shop')}>
              Shop
              <span className="footer-col-icon">
                {openCols['shop'] ? <Minus size={16} /> : <Plus size={16} />}
              </span>
            </h4>
            <div className={`footer-nav-container ${openCols['shop'] ? 'open' : ''}`}>
              <nav className="footer-nav footer-nav-inner">
                <Link to="/lip-glosses">Lip Glosses</Link>
                <Link to="/lipsticks">Lipsticks</Link>
                <Link to="/">All Products</Link>
              </nav>
            </div>
          </div>

          {/* Company Links */}
          <div className="footer-col">
            <h4 className="footer-col-title" onClick={() => toggleCol('company')}>
              Company
              <span className="footer-col-icon">
                {openCols['company'] ? <Minus size={16} /> : <Plus size={16} />}
              </span>
            </h4>
            <div className={`footer-nav-container ${openCols['company'] ? 'open' : ''}`}>
              <nav className="footer-nav footer-nav-inner">
                <Link to="/">Home</Link>
                <Link to="/about">About Us</Link>
                <Link to="/contact">Contact</Link>
              </nav>
            </div>
          </div>

          {/* Help Links */}
          <div className="footer-col">
            <h4 className="footer-col-title" onClick={() => toggleCol('help')}>
              Help
              <span className="footer-col-icon">
                {openCols['help'] ? <Minus size={16} /> : <Plus size={16} />}
              </span>
            </h4>
            <div className={`footer-nav-container ${openCols['help'] ? 'open' : ''}`}>
              <nav className="footer-nav footer-nav-inner">
                <Link to="/shipping">Shipping Policy</Link>
                <Link to="/returns">Returns & Exchanges</Link>
                <Link to="/privacy">Privacy Policy</Link>
                <Link to="/terms">Terms of Service</Link>
              </nav>
            </div>
          </div>

          {/* Contact Column */}
          <div className="footer-col">
            <h4 className="footer-col-title" onClick={() => toggleCol('contact')}>
              Get In Touch
              <span className="footer-col-icon">
                {openCols['contact'] ? <Minus size={16} /> : <Plus size={16} />}
              </span>
            </h4>
            <div className={`footer-nav-container ${openCols['contact'] ? 'open' : ''}`}>
              <div className="footer-contact-info footer-nav-inner">
                <a href="mailto:samridhiarora79@gmail.com">samridhiarora79@gmail.com</a>
                <p>Moradabad, India</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="footer-bottom">
        <div className="container footer-bottom-inner">
          <p>&copy; {new Date().getFullYear()} Soft Edit Cosmetics. All rights reserved.</p>
          <div className="footer-bottom-links">
            <Link to="/privacy">Privacy</Link>
            <span className="footer-dot">&middot;</span>
            <Link to="/terms">Terms</Link>
            <span className="footer-dot">&middot;</span>
            <Link to="/shipping">Shipping</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
