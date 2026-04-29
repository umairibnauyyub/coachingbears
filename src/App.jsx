import React from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Courses from './components/Courses';
import Features from './components/Features';
import Testimonials from './components/Testimonials';
import CTA from './components/CTA';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import ScrollToTop from './components/ScrollToTop';

function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="app">
      {/* Scroll Progress Bar */}
      <motion.div 
        className="progress-bar" 
        style={{ 
          scaleX, 
          position: 'fixed', 
          top: 0, 
          left: 0, 
          right: 0, 
          height: '4px', 
          background: 'var(--accent-primary)', 
          transformOrigin: '0%', 
          zIndex: 1000 
        }} 
      />

      <Navbar />
      <main>
        <Hero />
        <About />
        <Courses />
        <Features />
        <Testimonials />
        <CTA />
        <Contact />
      </main>
      <Footer />
      <FloatingWhatsApp />
      <ScrollToTop />
    </div>
  );
}

export default App;
