import React from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Phone, MessageSquare } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="section-padding" style={{ position: 'relative' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
          <h2 className="heading-lg">Get in <span className="text-gradient">Touch</span></h2>
          <p className="text-lg">Take the first step towards your tech career.</p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: '1.2fr 1fr',
          gap: '5rem'
        }} className="contact-grid">
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="glass glass-card" style={{ padding: '3rem', borderRadius: '24px' }}>
              <h3 className="heading-md" style={{ marginBottom: '2rem' }}>Send us a message</h3>
              <form style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }} className="form-row">
                  <div>
                    <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-muted)', fontSize: '0.9rem' }}>First Name</label>
                    <input type="text" placeholder="John" className="contact-input" />
                  </div>
                  <div>
                    <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-muted)', fontSize: '0.9rem' }}>Last Name</label>
                    <input type="text" placeholder="Doe" className="contact-input" />
                  </div>
                </div>
                <div>
                  <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-muted)', fontSize: '0.9rem' }}>Email Address</label>
                  <input type="email" placeholder="john@example.com" className="contact-input" />
                </div>
                <div>
                  <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-muted)', fontSize: '0.9rem' }}>Phone Number</label>
                  <input type="tel" placeholder="+91 98765 43210" className="contact-input" />
                </div>
                <div>
                  <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-muted)', fontSize: '0.9rem' }}>Message</label>
                  <textarea placeholder="I'm interested in the DevOps course..." rows="4" className="contact-input" style={{ resize: 'none' }}></textarea>
                </div>
                <button type="button" className="btn btn-primary" style={{ width: '100%', marginTop: '1rem', padding: '1.2rem' }}>Send Message</button>
              </form>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem', justifyContent: 'center' }}
          >
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1.5rem' }}>
              <div style={{ width: '64px', height: '64px', borderRadius: '16px', background: 'rgba(14, 165, 233, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, border: '1px solid rgba(14, 165, 233, 0.2)' }}>
                <MapPin color="var(--neon-blue)" size={28} />
              </div>
              <div>
                <h4 style={{ fontSize: '1.2rem', fontWeight: 600, marginBottom: '0.3rem' }}>Our Office</h4>
                <p style={{ color: 'var(--text-muted)', lineHeight: 1.6 }}>NIBM road, opp. Nyati Erica,<br/>Undri, Pune, Maharashtra 411060</p>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1.5rem' }}>
              <div style={{ width: '64px', height: '64px', borderRadius: '16px', background: 'rgba(139, 92, 246, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, border: '1px solid rgba(139, 92, 246, 0.2)' }}>
                <Phone color="var(--neon-purple)" size={28} />
              </div>
              <div>
                <h4 style={{ fontSize: '1.2rem', fontWeight: 600, marginBottom: '0.3rem' }}>Phone</h4>
                <p style={{ color: 'var(--text-muted)' }}>+91 8483833253</p>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', marginTop: '0.2rem' }}>Mon-Sat: 9am - 7pm</p>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1.5rem' }}>
              <div style={{ width: '64px', height: '64px', borderRadius: '16px', background: 'rgba(6, 182, 212, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, border: '1px solid rgba(6, 182, 212, 0.2)' }}>
                <Mail color="var(--neon-cyan)" size={28} />
              </div>
              <div>
                <h4 style={{ fontSize: '1.2rem', fontWeight: 600, marginBottom: '0.3rem' }}>Email</h4>
                <p style={{ color: 'var(--text-muted)' }}>hello@coachingbears.com</p>
              </div>
            </div>

            <div style={{ marginTop: '1rem', padding: '2rem', background: 'linear-gradient(135deg, rgba(37, 211, 102, 0.1), rgba(37, 211, 102, 0.02))', borderRadius: '24px', border: '1px solid rgba(37, 211, 102, 0.2)' }}>
              <h4 style={{ fontSize: '1.3rem', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                <MessageSquare color="#25D366" /> Direct WhatsApp
              </h4>
              <p style={{ color: 'var(--text-muted)', marginBottom: '1.5rem' }}>Get instant answers from our admission counselors.</p>
              <a href="https://wa.me/918483833253" target="_blank" rel="noopener noreferrer" className="btn" style={{ background: '#25D366', color: 'white', width: '100%', boxShadow: '0 10px 20px rgba(37, 211, 102, 0.2)' }}>
                Chat on WhatsApp
              </a>
            </div>
          </motion.div>

        </div>
      </div>

      <style dangerouslySetInnerHTML={{__html: `
        .contact-input {
          width: 100%; padding: 1.2rem; background: rgba(255,255,255,0.03);
          border: 1px solid var(--glass-border); borderRadius: 12px; color: white;
          fontFamily: inherit; outline: none; transition: all 0.3s ease;
        }
        .contact-input:focus {
          border-color: var(--neon-blue);
          background: rgba(255,255,255,0.06);
          box-shadow: 0 0 15px rgba(14, 165, 233, 0.15);
        }
        @media (max-width: 992px) {
          .contact-grid { grid-template-columns: 1fr !important; gap: 4rem; }
          .form-row { grid-template-columns: 1fr !important; }
        }
      `}} />
    </section>
  );
};

export default Contact;
