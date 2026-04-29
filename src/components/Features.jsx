import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Users, Award } from 'lucide-react';

const Features = () => {
  const steps = [
    { title: "1. 100% Hands-on Training", desc: "No more boring lectures. You code from day one in our interactive lab environments." },
    { title: "2. Live Interactive Classes", desc: "Engage with expert instructors in real-time. Ask questions and solve problems together." },
    { title: "3. Build Real-world Projects", desc: "Develop a portfolio of enterprise-grade projects that prove your skills to employers." },
    { title: "4. Career & Placement Support", desc: "Resume reviews, mock interviews, and direct referrals to our hiring partners." }
  ];

  return (
    <section id="features" className="section-padding" style={{ position: 'relative', background: '#050505' }}>
      {/* Background Glow */}
      <div style={{ position: 'absolute', top: '20%', right: '0', width: '400px', height: '400px', background: 'var(--accent-primary)', filter: 'blur(150px)', opacity: 0.05, zIndex: 0, pointerEvents: 'none' }}></div>

      <div className="container" style={{ position: 'relative', zIndex: 10 }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '6rem',
          alignItems: 'center'
        }} className="features-grid">
          
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <div className="badge" style={{ marginBottom: '1.5rem', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)' }}>Our Advantage</div>
            <h2 className="heading-lg" style={{ marginBottom: '1.5rem' }}>THE <br/><span style={{ color: 'var(--text-muted)' }}>COACHING BEARS</span><br/> ADVANTAGE</h2>
            <p className="text-lg" style={{ marginBottom: '2.5rem' }}>
              We've engineered our curriculum from the ground up to focus on exactly what the IT industry demands. Stop learning outdated theory and start building the future.
            </p>
            
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '1.5rem', marginBottom: '3rem' }}>
              <div style={{ background: 'var(--bg-card)', border: '1px solid var(--glass-border)', padding: '2rem 1.5rem', borderRadius: '20px', textAlign: 'center', transition: 'transform 0.3s' }} className="feature-small-card">
                <Users size={32} color="var(--text-light)" style={{ margin: '0 auto 1rem' }} />
                <h4 style={{ fontSize: '1.1rem', fontWeight: 700, textTransform: 'uppercase' }}>1-on-1 Mentorship</h4>
              </div>
              <div style={{ background: 'var(--bg-card)', border: '1px solid var(--glass-border)', padding: '2rem 1.5rem', borderRadius: '20px', textAlign: 'center', transition: 'transform 0.3s' }} className="feature-small-card">
                <Award size={32} color="var(--text-light)" style={{ margin: '0 auto 1rem' }} />
                <h4 style={{ fontSize: '1.1rem', fontWeight: 700, textTransform: 'uppercase' }}>Certifications</h4>
              </div>
            </div>

            <a href="#courses" className="btn btn-secondary">Explore Curriculum</a>
          </motion.div>

          {/* Timeline Flow */}
          <div style={{ position: 'relative' }}>
            {steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="timeline-item"
              >
                <div className="timeline-dot">
                  <CheckCircle2 size={24} color="var(--accent-primary)" strokeWidth={2.5} />
                </div>
                <div className="glass glass-card" style={{ padding: '2.5rem', marginLeft: '2rem', background: 'var(--bg-card)' }}>
                  <h4 className="heading-md" style={{ fontSize: '1.4rem', marginBottom: '0.8rem', textTransform: 'uppercase' }}>{step.title}</h4>
                  <p style={{ color: 'var(--text-muted)', lineHeight: 1.7, fontSize: '1.05rem' }}>{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{__html: `
        .feature-small-card:hover {
          transform: translateY(-5px);
          border-color: rgba(255,255,255,0.2);
          background: rgba(25,25,25,0.6);
        }
        @media (max-width: 992px) {
          .features-grid { grid-template-columns: 1fr !important; gap: 4rem !important; }
        }
      `}} />
    </section>
  );
};

export default Features;
