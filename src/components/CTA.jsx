import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const CTA = () => {
  return (
    <section className="section-padding" style={{ padding: '4rem 0' }}>
      <div className="container">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          style={{
            padding: '6rem 4rem',
            background: 'var(--text-light)',
            borderRadius: '32px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
            color: 'var(--bg-dark)',
            position: 'relative',
            overflow: 'hidden'
          }}
        >
          {/* Decorative elements */}
          <div style={{ position: 'absolute', top: '-10%', right: '-5%', width: '300px', height: '300px', background: 'var(--accent-primary)', borderRadius: '50%', filter: 'blur(80px)', opacity: 0.4 }}></div>
          <div style={{ position: 'absolute', bottom: '-10%', left: '-5%', width: '300px', height: '300px', background: 'var(--accent-secondary)', borderRadius: '50%', filter: 'blur(80px)', opacity: 0.3 }}></div>

          <div style={{ position: 'relative', zIndex: 10 }}>
            <h2 className="heading-lg" style={{ color: 'var(--bg-dark)', marginBottom: '1.5rem', lineHeight: 1 }}>
              STOP WATCHING. <br/>
              START <span style={{ color: 'var(--accent-primary)' }}>BUILDING.</span>
            </h2>
            <p className="text-lg" style={{ color: '#4b5563', maxWidth: '600px', margin: '0 auto 3rem', fontWeight: 500 }}>
              Join the next batch of elite developers. Limited seats available for our intensive training programs.
            </p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <a href="#contact" className="btn btn-accent" style={{ color: '#000', padding: '1.2rem 3rem' }}>
                Enroll Now <ArrowRight size={20} />
              </a>
              <a href="#courses" className="btn" style={{ background: 'transparent', border: '1px solid #d1d5db', color: 'var(--bg-dark)', padding: '1.2rem 3rem' }}>
                View Curriculums
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
