import React from 'react';
import { motion } from 'framer-motion';
import { Database, Server, Terminal, ArrowUpRight } from 'lucide-react';

const Courses = () => {
  const courses = [
    {
      title: "MySQL Mastery",
      icon: <Database size={42} />,
      desc: "Deep dive into architecture, complex queries, indexing, and tuning.",
      duration: "8 Weeks",
      tags: ["SQL", "Optimization", "DB Design"],
      color: "#f59e0b", // Orange/Yellow
      urgencyBadge: "Batch Full 🔥",
      badgeColor: "rgba(239, 68, 68, 0.15)",
      badgeTextColor: "#ef4444",
      badgeBorder: "rgba(239, 68, 68, 0.3)"
    },
    {
      title: "DevOps & AWS",
      icon: <Server size={42} />,
      desc: "Master CI/CD pipelines, Docker, Kubernetes, AWS, and modern automation.",
      duration: "12 Weeks",
      tags: ["Docker", "K8s", "AWS"],
      color: "var(--accent-primary)", // Teal
      urgencyBadge: "All Seats Filled 🚀",
      badgeColor: "rgba(239, 68, 68, 0.15)",
      badgeTextColor: "#ef4444",
      badgeBorder: "rgba(239, 68, 68, 0.3)"
    },
    {
      title: "Full Stack Dev",
      icon: <Terminal size={42} />,
      desc: "End-to-end web dev utilizing React, Node.js, and scalable cloud deployments.",
      duration: "16 Weeks",
      tags: ["React", "Node", "System Design"],
      color: "var(--accent-secondary)", // Blue
      urgencyBadge: "Next Batch Coming Soon ⚡",
      badgeColor: "rgba(16, 185, 129, 0.15)",
      badgeTextColor: "#10b981",
      badgeBorder: "rgba(16, 185, 129, 0.3)"
    }
  ];

  return (
    <section id="courses" className="section-padding" style={{ position: 'relative', background: '#050505' }}>
      <div className="container" style={{ position: 'relative', zIndex: 10 }}>
        
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '5rem', flexWrap: 'wrap', gap: '2rem' }}>
          <div>
            <div className="badge" style={{ marginBottom: '1.5rem', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)' }}>Our Curriculums</div>
            <h2 className="heading-lg">ELITE <br/><span style={{ color: 'var(--text-muted)' }}>PROGRAMS.</span></h2>
          </div>
          <p className="text-lg" style={{ maxWidth: '500px', margin: 0, color: 'var(--text-muted)' }}>
            Industry-aligned courses designed to transform you into an engineer that top tech companies actively hire.
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
          gap: '2.5rem'
        }}>
          {courses.map((course, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="course-card-premium"
              style={{
                background: 'var(--bg-card)',
                padding: '3rem 2.5rem',
                borderRadius: '24px',
                border: '1px solid var(--glass-border)',
                position: 'relative',
                display: 'flex',
                flexDirection: 'column',
                cursor: 'pointer',
                transition: 'all 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
                '--course-color': course.color
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '2.5rem' }}>
                <div style={{ 
                  width: '80px', height: '80px', 
                  borderRadius: '20px', 
                  background: 'rgba(255,255,255,0.02)', 
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: course.color,
                  border: '1px solid rgba(255,255,255,0.05)'
                }}>
                  {course.icon}
                </div>
                
                {/* Inline Premium Urgency Ribbon */}
                <div style={{ 
                  background: course.badgeColor, 
                  color: course.badgeTextColor,
                  border: `1px solid ${course.badgeBorder}`,
                  padding: '0.4rem 1rem',
                  borderRadius: '100px',
                  fontSize: '0.8rem',
                  fontWeight: 700,
                  letterSpacing: '0.5px',
                  textTransform: 'uppercase',
                  boxShadow: `0 0 15px ${course.badgeColor}`,
                  whiteSpace: 'nowrap'
                }}>
                  {course.urgencyBadge}
                </div>
              </div>
              
              <h3 className="heading-md" style={{ marginBottom: '1.2rem', textTransform: 'uppercase' }}>{course.title}</h3>
              <p style={{ color: 'var(--text-muted)', marginBottom: '2.5rem', flexGrow: 1, fontSize: '1.1rem', lineHeight: 1.6 }}>{course.desc}</p>
              
              <div style={{ display: 'flex', gap: '0.6rem', flexWrap: 'wrap', marginBottom: '3rem' }}>
                {course.tags.map((tag, idx) => (
                  <span key={idx} style={{ 
                    border: '1px solid rgba(255,255,255,0.1)', 
                    background: 'rgba(255,255,255,0.02)',
                    padding: '0.5rem 1.2rem', 
                    borderRadius: '100px', 
                    fontSize: '0.85rem', 
                    fontWeight: 500,
                    color: 'var(--text-light)',
                    textTransform: 'uppercase',
                    letterSpacing: '1px'
                  }}>
                    {tag}
                  </span>
                ))}
              </div>

              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid rgba(255,255,255,0.08)', paddingTop: '2rem' }}>
                <span style={{ fontWeight: 600, fontSize: '1.1rem', color: 'var(--text-light)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <span style={{ width: '8px', height: '8px', background: course.color, borderRadius: '50%' }}></span>
                  {course.duration}
                </span>
                <div style={{ 
                  width: '50px', height: '50px', 
                  borderRadius: '50%', 
                  background: 'var(--text-light)', 
                  color: 'var(--bg-dark)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)'
                }} className="course-arrow">
                  <ArrowUpRight size={24} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <style>{`
        .course-card-premium:hover {
          transform: translateY(-8px);
          border-color: rgba(255,255,255,0.2);
          box-shadow: 0 20px 40px rgba(0,0,0,0.4), 0 0 40px var(--course-color)20;
          background: rgba(25,25,25,0.8);
        }
        .course-card-premium:hover .course-arrow {
          transform: scale(1.15) rotate(15deg);
          background: var(--course-color);
          color: #000;
          box-shadow: 0 0 20px var(--course-color);
        }
      `}</style>
    </section>
  );
};

export default Courses;
