import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, ShoppingBag, User, X, Plus, Minus, Menu, ShieldCheck } from 'lucide-react';
import './Navbar.css';
import { useCart } from '../CartContext';
import SearchOverlay from './SearchOverlay';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const { cartItems, isCartOpen, toggleCart, updateQuantity, checkoutWithWhatsApp, removeFromCart, getCartTotal } = useCart();
  const location = useLocation();
  const isHome = location.pathname === '/';
  
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollDirection, setScrollDirection] = useState('up');

  useEffect(() => {
    let lastScrollY = window.pageYOffset;
    
    const updateScroll = () => {
      const scrollY = window.pageYOffset;
      const direction = scrollY > lastScrollY ? 'down' : 'up';
      if (direction !== scrollDirection && (scrollY - lastScrollY > 10 || scrollY - lastScrollY < -10)) {
        setScrollDirection(direction);
      }
      lastScrollY = scrollY > 0 ? scrollY : 0;
      
      if (scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener('scroll', updateScroll);
    return () => window.removeEventListener('scroll', updateScroll);
  }, [scrollDirection]);
  
  const totalItems = cartItems.reduce((acc, item) => acc + item.quantity, 0);
  const totalPrice = getCartTotal ? getCartTotal() : 0;

  const headerClass = `navbar-wrapper ${isScrolled ? 'scrolled' : ''} ${isHome && !isScrolled ? 'transparent' : ''}`;

  return (
    <header className={headerClass}>
      <div className="announcement-bar items-center justify-center flex">
        <div className="ticker-container">
          <div className="ticker-content">
            <span className="sparkle">✦</span>
            <span className="highlight">FESTIVE EDIT</span> <span className="divider">|</span> 2 FOR ₹1199 <span className="divider">|</span> 3 FOR ₹1999 <span className="divider">|</span> <strong>FREEBIES ON ₹1199+</strong>
            <span className="sparkle">✦</span>
            <span className="highlight">FESTIVE EDIT</span> <span className="divider">|</span> 2 FOR ₹1199 <span className="divider">|</span> 3 FOR ₹1999 <span className="divider">|</span> <strong>FREEBIES ON ₹1199+</strong>
            <span className="sparkle">✦</span>
            <span className="highlight">FESTIVE EDIT</span> <span className="divider">|</span> 2 FOR ₹1199 <span className="divider">|</span> 3 FOR ₹1999 <span className="divider">|</span> <strong>FREEBIES ON ₹1199+</strong>
          </div>
        </div>
      </div>
      <nav className="navbar container flex justify-between items-center relative">
        <div className="logo-container" style={{ flex: 1, display: 'flex', justifyContent: 'flex-start', alignItems: 'center' }}>
          <Link to="/" className="logo">
            <img src="/logo.png" alt="Soft Edit Cosmetics" style={{ height: '70px', objectFit: 'contain' }} />
          </Link>
        </div>

        <div className="nav-links flex gap-8 items-center text-sm" style={{ flex: 1, justifyContent: 'center' }}>
          <Link to="/" className="nav-link">HOME</Link>
          <Link to="/lip-glosses" className="nav-link">LIP GLOSSES</Link>
          <Link to="/lipsticks" className="nav-link">LIPSTICKS</Link>
          <Link to="/about" className="nav-link">ABOUT</Link>
          <Link to="/contact" className="nav-link">CONTACT</Link>
        </div>

        <div className="nav-icons flex gap-4 items-center" style={{ flex: 1, justifyContent: 'flex-end', position: 'relative' }}>
          <button className="icon-btn" aria-label="Search" onClick={() => setIsSearchOpen(true)}><Search size={20} strokeWidth={1.5} /></button>
          <button className="icon-btn cart-btn" aria-label="Cart" onClick={toggleCart}>
            <ShoppingBag size={20} strokeWidth={1.5} />
            {totalItems > 0 && <span className="cart-count">{totalItems}</span>}
          </button>
          <button className="mobile-menu-btn icon-btn" onClick={() => setIsMobileMenuOpen(true)}>
            <Menu size={24} />
          </button>
        </div>
      </nav>

      {/* Cart Drawer Overlay */}
      {isCartOpen && (
        <div className="cart-drawer-overlay fade-in" onClick={toggleCart}>
          <div className="cart-drawer slide-in-right" onClick={(e) => e.stopPropagation()}>
            <div className="cart-drawer-header flex justify-between items-center border-b pb-4 mb-4">
              <h3 className="cart-drawer-title m-0">Your Edit</h3>
              <button onClick={toggleCart} className="icon-btn"><X size={24} /></button>
            </div>
            
            <div className="cart-drawer-body">
              {cartItems.length === 0 ? (
                <div className="empty-cart flex-col items-center justify-center text-center mt-12 gap-4">
                  <ShoppingBag size={48} strokeWidth={1} style={{color: 'var(--color-text-light)', opacity: 0.5}} />
                  <p className="text-light text-base fw-300">Your cart is beautifully empty.</p>
                  <button className="btn btn-outline mt-4" onClick={toggleCart}>CONTINUE SHOPPING</button>
                </div>
              ) : (
                <>
                  <div className="cart-items-list flex-col gap-4">
                    {cartItems.map(item => (
                      <div key={item.name} className="cart-item">
                        <div className="cart-item-img mr-3" style={{ flexShrink: 0 }}>
                          <img src={item.image} alt={item.name} style={{width: '60px', height: '60px', objectFit: 'cover', borderRadius: '4px'}} />
                        </div>
                        <div className="cart-item-info flex-1" style={{ minWidth: 0 }}>
                          <div className="flex justify-between w-full items-start gap-2">
                            <h4 style={{ margin: 0, paddingRight: '0.5rem', wordBreak: 'break-word' }}>{item.name.toUpperCase()}</h4>
                            <button className="icon-btn remove-btn" onClick={() => removeFromCart(item.name)} style={{ padding: '0.2rem', marginTop: '-0.2rem' }}><X size={16}/></button>
                          </div>
                          <span className="text-sm text-light mt-1 block">₹{item.price}</span>
                          <div className="cart-item-qty mt-3">
                            <button className="qty-btn" onClick={() => updateQuantity(item.name, -1)}><Minus size={12}/></button>
                            <span>{item.quantity}</span>
                            <button className="qty-btn" onClick={() => updateQuantity(item.name, 1)}><Plus size={12}/></button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <div className="cart-drawer-footer mt-auto pt-6">
                    <div className="cart-total mb-4">
                      <span className="text-lg">Total</span>
                      <span className="text-lg fw-500">₹{totalPrice}</span>
                    </div>
                    <button className="btn btn-primary cart-checkout-btn w-full py-4 text-sm" onClick={checkoutWithWhatsApp}>
                      CHECKOUT VIA WHATSAPP
                    </button>
                    <div className="payment-trust-section mt-4 flex-col items-center gap-2 border-t pt-4">
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
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="mobile-menu-overlay fade-in">
          <div className="mobile-menu-content">
            <button className="close-menu-btn icon-btn" onClick={() => setIsMobileMenuOpen(false)}>
              <X size={28} strokeWidth={1.5} />
            </button>
            <div className="mobile-nav-links">
              <Link to="/" className="mobile-nav-link" onClick={() => setIsMobileMenuOpen(false)}>HOME</Link>
              <Link to="/lip-glosses" className="mobile-nav-link" onClick={() => setIsMobileMenuOpen(false)}>LIP GLOSSES</Link>
              <Link to="/lipsticks" className="mobile-nav-link" onClick={() => setIsMobileMenuOpen(false)}>LIPSTICKS</Link>
              <Link to="/about" className="mobile-nav-link" onClick={() => setIsMobileMenuOpen(false)}>ABOUT</Link>
              <Link to="/contact" className="mobile-nav-link" onClick={() => setIsMobileMenuOpen(false)}>CONTACT</Link>
            </div>
          </div>
        </div>
      )}

      {/* Search Overlay */}
      <SearchOverlay isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
    </header>
  );
}
