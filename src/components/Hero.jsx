import React from 'react';
import { motion } from 'framer-motion';
import { Code2, ArrowRight, PlayCircle } from 'lucide-react';

const Hero = () => {
  return (
    <section style={{
      position: 'relative',
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      paddingTop: '120px',
      overflow: 'hidden'
    }}>
      {/* Abstract Background */}
      <div className="bg-grid"></div>
      <div className="bg-radial-fade"></div>
      
      {/* Accent Glow */}
      <div style={{ position: 'absolute', top: '20%', right: '10%', width: '400px', height: '400px', background: 'var(--accent-glow)', filter: 'blur(120px)', borderRadius: '50%', zIndex: 0, opacity: 0.4 }}></div>

      <div className="container" style={{ position: 'relative', zIndex: 10 }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }} className="hero-content">
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="badge"
            style={{ marginBottom: '2rem' }}
          >
            <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--accent-primary)', boxShadow: '0 0 10px var(--accent-primary)' }}></span>
            Premium IT Education Platform
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="heading-xl"
            style={{ marginBottom: '1.5rem' }}
          >
            ELEVATE YOUR <br />
            <span style={{ color: 'var(--accent-primary)' }}>TECH CAREER</span> TO <br />
            THE NEXT LEVEL.
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg" 
            style={{ maxWidth: '700px', marginBottom: '3rem' }}
          >
            Master MySQL, DevOps, and Full Stack Development through immersive, project-based learning. Learn the tools top tech companies use to build scalable systems.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap', justifyContent: 'center', width: '100%' }}
            className="hero-buttons"
          >
            <a href="#courses" className="btn btn-accent">
              Explore Programs <ArrowRight size={20} />
            </a>
            <a href="#contact" className="btn btn-secondary">
              <PlayCircle size={20} /> View Demo
            </a>
          </motion.div>

        </div>

        {/* Sheryians Style Marquee */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          style={{ marginTop: '6rem' }}
        >
          <div className="marquee-container">
            <div className="marquee-content">
              {[...Array(6)].map((_, i) => (
                <div className="marquee-item" key={i}>
                  <span>MYSQL MASTERY</span>
                  <span style={{ color: '#000', opacity: 0.5 }}>✦</span>
                  <span>DEVOPS</span>
                  <span style={{ color: '#000', opacity: 0.5 }}>✦</span>
                  <span>AWS CLOUD</span>
                  <span style={{ color: '#000', opacity: 0.5 }}>✦</span>
                  <span>FULL STACK</span>
                  <span style={{ color: '#000', opacity: 0.5 }}>✦</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

      </div>
      <style dangerouslySetInnerHTML={{__html: `
        @media (max-width: 768px) {
          .hero-content { padding-top: 2rem; }
          .hero-buttons { flex-direction: column; }
        }
      `}} />
    </section>
  );
};

export default Hero;
