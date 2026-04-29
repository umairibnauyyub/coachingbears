import React from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const [emblaRef] = useEmblaCarousel({ loop: true, align: 'start' });

  const reviews = [
    {
      name: "Rahul S.",
      role: "Database Administrator @ TechCorp",
      text: "The MySQL training at Coaching Bears was incredible. I went from knowing nothing to optimizing complex queries in my new job. The hands-on labs were a game changer.",
      rating: 5,
      image: "https://i.pravatar.cc/150?img=11"
    },
    {
      name: "Priya M.",
      role: "DevOps Engineer @ CloudSys",
      text: "Practical, project-based learning is what sets them apart. The AWS and Docker modules helped me clear my technical interviews easily. Highly recommended!",
      rating: 5,
      image: "https://i.pravatar.cc/150?img=5"
    },
    {
      name: "Amit K.",
      role: "Backend Developer @ StartupX",
      text: "Expert mentors who actually work in the industry. They gave me insights you just can't find in generic online courses. Best investment for my career.",
      rating: 5,
      image: "https://i.pravatar.cc/150?img=12"
    },
    {
      name: "Sneha R.",
      role: "Systems Analyst",
      text: "I loved the step-by-step approach. Even complex topics like Kubernetes were explained simply. The placement support team was also very helpful.",
      rating: 5,
      image: "https://i.pravatar.cc/150?img=9"
    }
  ];

  return (
    <section className="section-padding" style={{ position: 'relative', background: 'var(--bg-surface)' }}>
      <div className="bg-glow" style={{ top: '30%', right: '-20%', filter: 'blur(100px)' }}></div>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <h2 className="heading-lg">Success <span className="text-gradient">Stories</span></h2>
          <p className="text-lg" style={{ maxWidth: '600px', margin: '1rem auto 0' }}>
            Don't just take our word for it. Hear from the professionals who upgraded their careers with us.
          </p>
        </div>

        {/* Embla Carousel Viewport */}
        <div className="embla" ref={emblaRef} style={{ cursor: 'grab' }}>
          <div className="embla__container">
            {reviews.map((review, i) => (
              <div className="embla__slide" key={i}>
                <div className="glass" style={{ padding: '2.5rem', height: '100%', display: 'flex', flexDirection: 'column', position: 'relative' }}>
                  <Quote size={40} color="rgba(255,255,255,0.05)" style={{ position: 'absolute', top: '1.5rem', right: '1.5rem' }} />
                  
                  <div style={{ display: 'flex', gap: '4px', marginBottom: '1.5rem' }}>
                    {[...Array(review.rating)].map((_, index) => (
                      <Star key={index} size={18} fill="var(--neon-blue)" color="var(--neon-blue)" />
                    ))}
                  </div>
                  
                  <p style={{ fontStyle: 'italic', color: 'var(--text-light)', flexGrow: 1, lineHeight: 1.7, fontSize: '1.05rem', marginBottom: '2rem' }}>
                    "{review.text}"
                  </p>
                  
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', borderTop: '1px solid var(--glass-border)', paddingTop: '1.5rem' }}>
                    <img 
                      src={review.image} 
                      alt={review.name} 
                      style={{ width: '50px', height: '50px', borderRadius: '50%', border: '2px solid var(--neon-purple)' }}
                    />
                    <div>
                      <h4 style={{ fontWeight: 600, fontSize: '1.1rem' }}>{review.name}</h4>
                      <p style={{ fontSize: '0.85rem', color: 'var(--neon-cyan)' }}>{review.role}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div style={{ textAlign: 'center', marginTop: '2rem', color: 'var(--text-muted)', fontSize: '0.9rem' }}>
          &larr; Swipe to read more &rarr;
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
