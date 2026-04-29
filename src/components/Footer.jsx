import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer style={{
      borderTop: '1px solid var(--glass-border)',
      background: 'rgba(10, 10, 15, 0.95)',
      paddingTop: '5rem',
      paddingBottom: '2rem'
    }}>
      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '4rem',
          marginBottom: '4rem'
        }}>
          
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
              {/* Consistent Square Logo Container */}
              <div style={{
                width: '45px', 
                height: '45px',
                background: 'var(--text-light)',
                borderRadius: '10px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                overflow: 'hidden'
              }}>
                <img 
                  src="/logo.png" 
                  alt="Coaching Bears Logo" 
                  style={{ width: '100%', height: '100%', objectFit: 'contain', padding: '4px' }} 
                />
              </div>
              <span className="heading-md" style={{ fontSize: '1.5rem' }}>Coaching<span style={{ color: 'var(--accent-primary)' }}>Bears.</span></span>
            </div>
            <p style={{ color: 'var(--text-muted)', marginBottom: '2rem', fontSize: '1.05rem', lineHeight: 1.6 }}>
              Transforming beginners into industry-ready IT professionals through practical, hands-on training.
            </p>
            <div style={{ display: 'flex', gap: '1rem' }}>
              <a href="#" style={{ color: 'var(--text-muted)', transition: 'color 0.3s' }} onMouseEnter={(e) => e.target.style.color = 'var(--accent-primary)'} onMouseLeave={(e) => e.target.style.color = 'var(--text-muted)'}><Facebook size={22} /></a>
              <a href="#" style={{ color: 'var(--text-muted)', transition: 'color 0.3s' }} onMouseEnter={(e) => e.target.style.color = 'var(--accent-primary)'} onMouseLeave={(e) => e.target.style.color = 'var(--text-muted)'}><Twitter size={22} /></a>
              <a href="#" style={{ color: 'var(--text-muted)', transition: 'color 0.3s' }} onMouseEnter={(e) => e.target.style.color = 'var(--accent-primary)'} onMouseLeave={(e) => e.target.style.color = 'var(--text-muted)'}><Instagram size={22} /></a>
              <a href="#" style={{ color: 'var(--text-muted)', transition: 'color 0.3s' }} onMouseEnter={(e) => e.target.style.color = 'var(--accent-primary)'} onMouseLeave={(e) => e.target.style.color = 'var(--text-muted)'}><Linkedin size={22} /></a>
            </div>
          </div>

          <div>
            <h4 style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: '1.5rem', color: 'var(--text-light)', fontFamily: 'var(--font-heading)', textTransform: 'uppercase' }}>Quick Links</h4>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <li><a href="#about" style={{ color: 'var(--text-muted)', transition: 'color 0.3s' }} onMouseEnter={(e) => e.target.style.color = 'white'} onMouseLeave={(e) => e.target.style.color = 'var(--text-muted)'}>About Us</a></li>
              <li><a href="#courses" style={{ color: 'var(--text-muted)', transition: 'color 0.3s' }} onMouseEnter={(e) => e.target.style.color = 'white'} onMouseLeave={(e) => e.target.style.color = 'var(--text-muted)'}>Our Courses</a></li>
              <li><a href="#features" style={{ color: 'var(--text-muted)', transition: 'color 0.3s' }} onMouseEnter={(e) => e.target.style.color = 'white'} onMouseLeave={(e) => e.target.style.color = 'var(--text-muted)'}>Why Choose Us</a></li>
              <li><a href="#contact" style={{ color: 'var(--text-muted)', transition: 'color 0.3s' }} onMouseEnter={(e) => e.target.style.color = 'white'} onMouseLeave={(e) => e.target.style.color = 'var(--text-muted)'}>Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: '1.5rem', color: 'var(--text-light)', fontFamily: 'var(--font-heading)', textTransform: 'uppercase' }}>Courses</h4>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <li><a href="#" style={{ color: 'var(--text-muted)', transition: 'color 0.3s' }} onMouseEnter={(e) => e.target.style.color = 'white'} onMouseLeave={(e) => e.target.style.color = 'var(--text-muted)'}>MySQL Mastery</a></li>
              <li><a href="#" style={{ color: 'var(--text-muted)', transition: 'color 0.3s' }} onMouseEnter={(e) => e.target.style.color = 'white'} onMouseLeave={(e) => e.target.style.color = 'var(--text-muted)'}>DevOps Engineering</a></li>
              <li><a href="#" style={{ color: 'var(--text-muted)', transition: 'color 0.3s' }} onMouseEnter={(e) => e.target.style.color = 'white'} onMouseLeave={(e) => e.target.style.color = 'var(--text-muted)'}>Full Stack Development</a></li>
            </ul>
          </div>

        </div>

        <div style={{
          borderTop: '1px solid rgba(255,255,255,0.05)',
          paddingTop: '2.5rem',
          textAlign: 'center',
          color: 'var(--text-muted)',
          fontSize: '0.95rem'
        }}>
          <p>&copy; {new Date().getFullYear()} Coaching Bears. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
