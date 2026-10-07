import { createContext, useContext, useState, useEffect } from 'react';

const CartContext = createContext();

export function useCart() {
  return useContext(CartContext);
}

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState(() => {
    try {
      const savedCart = localStorage.getItem('cartItems');
      return savedCart ? JSON.parse(savedCart) : [];
    } catch (error) {
      console.error("Failed to parse cart items from local storage:", error);
      return [];
    }
  });
  const [isCartOpen, setIsCartOpen] = useState(false);

  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (product) => {
    setCartItems(prev => {
      const existing = prev.find(item => item.name === product.name);
      if (existing) {
        return prev.map(item => item.name === product.name ? { ...item, quantity: item.quantity + 1 } : item);
      }
      return [...prev, { ...product, quantity: 1, price: 699 }]; // updated default price
    });
    setIsCartOpen(true);
  };

  const removeFromCart = (name) => {
    setCartItems(prev => prev.filter(item => item.name !== name));
  };

  const updateQuantity = (name, delta) => {
    setCartItems(prev => prev.map(item => {
      if (item.name === name) {
        const newQ = item.quantity + delta;
        return newQ > 0 ? { ...item, quantity: newQ } : item;
      }
      return item;
    }));
  };

  const toggleCart = () => setIsCartOpen(prev => !prev);

  const getCartTotal = () => {
    const totalQuantity = cartItems.reduce((acc, item) => acc + item.quantity, 0);
    const numThrees = Math.floor(totalQuantity / 3);
    const remThrees = totalQuantity % 3;
    const numTwos = Math.floor(remThrees / 2);
    const numOnes = remThrees % 2;
    return (numThrees * 1999) + (numTwos * 1199) + (numOnes * 699);
  };

  const checkoutWithWhatsApp = () => {
    if (cartItems.length === 0) return;
    
    let message = `Hello Soft Edit Cosmetics! I would like to place an order:%0A%0A`;
    cartItems.forEach(item => {
      message += `- ${item.name} x ${item.quantity} (₹${item.price})%0A`;
    });
    
    const total = getCartTotal();
    message += `%0ATotal: ₹${total}%0A`;
    
    if (total >= 1199) {
      message += `(Qualifies for freebies!)%0A`;
    }
    
    message += `%0APlease let me know the next steps!`;
    
    const whatsappUrl = `https://wa.me/919717122676?text=${message}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <CartContext.Provider value={{
      cartItems, addToCart, removeFromCart, updateQuantity,
      isCartOpen, toggleCart, checkoutWithWhatsApp, setIsCartOpen,
      getCartTotal
    }}>
      {children}
    </CartContext.Provider>
  );
}
