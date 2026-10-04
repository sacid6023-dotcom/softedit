import { useState, useEffect, useRef } from 'react';
import { Search, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import './SearchOverlay.css';

const allProducts = [
  { name: "Barbie", category: "Lip Gloss", image: "/products/Barbie/Barbie.PNG" },
  { name: "Ph Tint", category: "Lip Gloss", image: "/products/PH TINT/PH TINT.PNG" },
  { name: "Cherry cola", category: "Lip Gloss", image: "/products/Cherry cola/Cherry cola.PNG" },
  { name: "Cranberry", category: "Lip Gloss", image: "/products/Cranberry/cranberry.PNG" },
  { name: "Martini", category: "Lip Gloss", image: "/products/Martini/Martini.PNG" },
  { name: "Chai", category: "Lip Gloss", image: "/products/Chai/Chai.PNG" },
  { name: "Bellini", category: "Lip Gloss", image: "/products/Bellini/Bellini.PNG" },
  { name: "Red flag", category: "Lipstick", image: "/products/Red flag/Red flag.PNG" },
  { name: "Pink Latte", category: "Lipstick", image: "/products/Pink latte/Pink latte.PNG" },
  { name: "Fudge", category: "Lipstick", image: "/products/Fudge/Fudge.PNG" },
  { name: "Currently obsessed", category: "Lipstick", image: "/products/Currently obsessed/Currently obsessed.PNG" }
];

export default function SearchOverlay({ isOpen, onClose }) {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const inputRef = useRef(null);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      setTimeout(() => inputRef.current.focus(), 100);
      setQuery('');
      setResults([]);
    }
  }, [isOpen]);

  useEffect(() => {
    if (query.trim().length > 0) {
      const lowerQuery = query.toLowerCase();
      const filtered = allProducts.filter(p => 
        p.name.toLowerCase().includes(lowerQuery) || 
        p.category.toLowerCase().includes(lowerQuery)
      );
      setResults(filtered);
    } else {
      setResults(allProducts); // Show all products by default
    }
  }, [query]);

  if (!isOpen) return null;

  return (
    <div className={`search-overlay ${isOpen ? 'open' : ''}`}>
      <div className="search-header">
        <div className="search-input-container">
          <Search size={24} className="search-icon" strokeWidth={1.5} style={{color: 'var(--color-text-medium)'}} />
          <input 
            ref={inputRef}
            type="text" 
            className="search-input" 
            placeholder="Search for glosses, lipsticks..." 
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            style={{color: 'var(--color-text-dark)'}}
          />
        </div>
        <button className="icon-btn close-search-btn" onClick={onClose} aria-label="Close search">
          <X size={28} strokeWidth={1.5} />
        </button>
      </div>
      
      <div className="search-results-container">
        <div className="search-results-inner">
          <h2 className="search-results-title">
            {query.trim().length > 0 
              ? `${results.length} ${results.length === 1 ? 'Result' : 'Results'} for "${query}"`
              : 'Our Collection'}
          </h2>
          {results.length > 0 ? (
            <div className="search-results-grid">
              {results.map((product, idx) => (
                <Link 
                  key={idx} 
                  to={`/product/${encodeURIComponent(product.name)}`} 
                  className="search-result-item"
                  onClick={() => {
                    window.scrollTo(0,0);
                    onClose();
                  }}
                >
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="search-result-image" 
                    onError={(e) => { e.target.src = '/products/Bellini/Bellini.PNG'; }}
                  />
                  <div className="search-result-info">
                    <h3 style={{color: 'var(--color-text-dark)'}}>{product.name}</h3>
                    <span className="search-result-category" style={{color: 'var(--color-text-medium)'}}>{product.category}</span>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="no-results">
              <p style={{color: 'var(--color-text-dark)'}}>No products found matching "{query}".</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
