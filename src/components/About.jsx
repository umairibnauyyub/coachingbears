import React from 'react';
import { motion } from 'framer-motion';
import { Target, TrendingUp, Users } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="section-padding" style={{ position: 'relative' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <h2 className="heading-lg">About <span className="text-gradient">Coaching Bears</span></h2>
          <p className="text-lg" style={{ maxWidth: '600px', margin: '1rem auto 0' }}>
            We are dedicated to transforming beginners into industry-ready IT professionals through hands-on, practical training.
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '2rem'
        }}>
          {[
            {
              icon: <Target size={32} color="var(--neon-blue)" />,
              title: "Our Mission",
              desc: "To bridge the gap between academic learning and industry requirements by providing real-world training."
            },
            {
              icon: <TrendingUp size={32} color="var(--neon-purple)" />,
              title: "Practical Approach",
              desc: "We focus 100% on practical learning. You don't just learn theory; you build projects and solve real problems."
            },
            {
              icon: <Users size={32} color="var(--neon-blue)" />,
              title: "Expert Mentors",
              desc: "Learn from industry veterans who have years of experience working with top tech companies."
            }
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass"
              style={{
                padding: '2rem',
                display: 'flex',
                flexDirection: 'column',
                gap: '1rem',
                transition: 'transform 0.3s ease'
              }}
              onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-10px)'}
              onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
            >
              <div style={{ background: 'rgba(255,255,255,0.05)', width: '64px', height: '64px', borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                {item.icon}
              </div>
              <h3 className="heading-md" style={{ fontSize: '1.5rem' }}>{item.title}</h3>
              <p style={{ color: 'var(--text-muted)' }}>{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
