import { useState, useEffect, useRef } from 'react';
import { X } from 'lucide-react';
import { Link } from 'react-router-dom';
import './PromoPopup.css';

export default function PromoPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [hasClosed, setHasClosed] = useState(false);
  const exitIntentTriggered = useRef(false);
  const hasClosedRef = useRef(false);

  useEffect(() => {
    // Show popup after 8 seconds
    const timer = setTimeout(() => {
      if (!hasClosedRef.current) {
        setIsOpen(true);
      }
    }, 8000);
    
    // Exit intent detection
    const handleMouseLeave = (e) => {
      if (e.clientY <= 0 && !exitIntentTriggered.current) {
        exitIntentTriggered.current = true;
        setIsOpen(true);
      }
    };
    
    document.addEventListener('mouseleave', handleMouseLeave);
    
    return () => {
      clearTimeout(timer);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  const closePopup = () => {
    setIsOpen(false);
    setHasClosed(true);
    hasClosedRef.current = true;
  };

  if (!isOpen && !hasClosed) return null;

  return (
    <div className={`promo-popup-overlay ${isOpen ? 'open' : ''}`} onClick={closePopup}>
      <div className="promo-popup-content" onClick={(e) => e.stopPropagation()}>
        <button className="promo-close-btn" onClick={closePopup} aria-label="Close">
          <X size={20} strokeWidth={1.5} />
        </button>
        
        <div className="promo-image-container">
          <div className="promo-image-placeholder">
            <span className="sparkle-icon">✦</span>
          </div>
        </div>
        
        <div className="promo-text-content">
          <h2 className="promo-title">THE FESTIVE EDIT</h2>
          <div className="promo-divider"></div>
          
          <div className="promo-offers flex-col gap-2 mb-6 w-full">
            <p className="promo-offer-item">2 FOR <strong>₹1199</strong></p>
            <p className="promo-offer-item">3 FOR <strong>₹1999</strong></p>
            <div className="promo-offer-highlight mt-2">
              PLUS: FREEBIES ON ORDERS ₹1199+
            </div>
          </div>
          
          <Link to="/" className="btn btn-primary w-full text-center block" onClick={closePopup}>
            SHOP THE OFFER
          </Link>
          
          <button className="promo-no-thanks" onClick={closePopup}>
            No thanks, I'll pay full price
          </button>
        </div>
      </div>
    </div>
  );
}
