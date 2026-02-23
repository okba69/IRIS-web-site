import { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import TechSection from './components/TechSection';
import HealthSection from './components/HealthSection';
import SocialProof from './components/SocialProof';
import Reviews from './components/Reviews';
import ProductSection from './components/ProductSection';
import CartDrawer from './components/CartDrawer';
import ContactFAQ from './components/ContactFAQ';
import Footer from './components/Footer';
import { motion } from 'motion/react';

export default function App() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState<any[]>([]);

  const addToCart = (product: any) => {
    setCartItems(prev => {
      const existing = prev.find(item => item.id === product.id && item.color === product.color);
      if (existing) {
        return prev.map(item => 
          item.id === product.id && item.color === product.color 
            ? { ...item, quantity: item.quantity + product.quantity } 
            : item
        );
      }
      return [...prev, product];
    });
    setIsCartOpen(true);
  };

  const removeFromCart = (id: string) => {
    setCartItems(prev => prev.filter(item => item.id !== id));
  };

  const cartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen bg-bg-dark selection:bg-blue-500/30"
    >
      <Header onCartClick={() => setIsCartOpen(true)} cartCount={cartCount} />
      
      <main>
        <Hero />
        <SocialProof />
        <HealthSection />
        <TechSection />
        <ProductSection onAddToCart={addToCart} />
        <Reviews />
        <ContactFAQ />
      </main>

      <Footer />

      <CartDrawer 
        isOpen={isCartOpen} 
        onClose={() => setIsCartOpen(false)} 
        items={cartItems}
        onRemove={removeFromCart}
      />
    </motion.div>
  );
}
