import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      style={{
        position: 'fixed',
        top: 0, left: 0, right: 0,
        zIndex: 100,
        padding: scrolled ? '1rem 0' : '1.5rem 0',
        transition: 'all 0.4s ease',
        background: scrolled ? 'rgba(0, 0, 0, 0.8)' : 'transparent',
        backdropFilter: scrolled ? 'blur(20px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(255,255,255,0.05)' : '1px solid transparent'
      }}
    >
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        
        {/* Consistent Square Logo Container */}
        <a href="#" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', zIndex: 101 }}>
          <div style={{
            width: '45px', 
            height: '45px',
            background: 'var(--text-light)',
            borderRadius: '10px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            overflow: 'hidden',
            transition: 'transform 0.3s ease'
          }}
          onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
          onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
          >
            <img 
              src="/logo.png" 
              alt="Coaching Bears Logo" 
              style={{ width: '100%', height: '100%', objectFit: 'contain', padding: '4px' }} 
            />
          </div>
          <span className="heading-md" style={{ fontSize: '1.4rem' }}>Coaching<span style={{ color: 'var(--accent-primary)' }}>Bears.</span></span>
        </a>

        {/* Desktop Links */}
        <div style={{ 
            display: 'flex', 
            gap: '3rem', 
            alignItems: 'center',
            background: scrolled ? 'transparent' : 'rgba(255,255,255,0.03)',
            padding: scrolled ? '0' : '0.6rem 2.5rem',
            borderRadius: '100px',
            border: scrolled ? 'none' : '1px solid rgba(255,255,255,0.05)',
            transition: 'all 0.3s ease'
          }} 
          className="desktop-nav"
        >
          {['About', 'Courses', 'Features'].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase()}`} 
              style={{ 
                fontWeight: 500, 
                fontSize: '0.95rem', 
                textTransform: 'uppercase', 
                letterSpacing: '1px',
                color: 'var(--text-light)',
                opacity: 0.8,
                transition: 'opacity 0.3s'
              }}
              onMouseEnter={(e) => e.target.style.opacity = 1}
              onMouseLeave={(e) => e.target.style.opacity = 0.8}
            >
              {item}
            </a>
          ))}
        </div>

        <div className="desktop-nav">
          <a href="#contact" className="btn btn-primary" style={{ padding: '0.8rem 1.8rem', fontSize: '0.9rem' }}>
            Book Session
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="mobile-nav-toggle" onClick={() => setIsOpen(!isOpen)} style={{ cursor: 'pointer', display: 'none', zIndex: 101 }}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            style={{
              position: 'fixed', top: 0, left: 0, right: 0, bottom: 0,
              background: 'rgba(0,0,0,0.95)', backdropFilter: 'blur(20px)',
              display: 'flex', flexDirection: 'column', 
              justifyContent: 'center', alignItems: 'center', gap: '2rem',
              zIndex: 100
            }}
          >
            {['About', 'Courses', 'Features', 'Contact'].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} onClick={() => setIsOpen(false)} className="heading-lg" style={{ fontSize: '2.5rem' }}>{item}</a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <style dangerouslySetInnerHTML={{__html: `
        @media (max-width: 992px) {
          .desktop-nav { display: none !important; }
          .mobile-nav-toggle { display: block !important; }
        }
      `}} />
    </motion.nav>
  );
};

export default Navbar;
