import React, { useRef, useEffect, useState } from 'react';
import { motion, useAnimationFrame, useMotionValue } from 'framer-motion';

const testimonials = [
  { id: 1, image: '/t1.jpeg' },
  { id: 2, image: '/T2.jpeg' },
  { id: 3, image: '/T3.jpeg' },
  { id: 4, image: '/T4.jpeg' },
  { id: 5, image: '/T5.jpeg' },
  { id: 6, image: '/T6.jpeg' },
  { id: 7, image: '/T7.jpeg' },
  { id: 8, image: '/T8.jpeg' },
  { id: 9, image: '/T9.jpeg' },
  { id: 10, image: '/T10.jpeg' },
  { id: 11, image: '/T11.jpeg' },
];

const Testimonials = ({ isCompact = false }) => {
  const x = useMotionValue(0);
  const [trackWidth, setTrackWidth] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const trackRef = useRef(null);

  const repeatedTestimonials = [...testimonials, ...testimonials];

  useEffect(() => {
    if (trackRef.current) {
      setTrackWidth(trackRef.current.scrollWidth / 2);
    }
  }, []);

  useAnimationFrame((t, delta) => {
    if (isPaused || trackWidth <= 0) return;
    let moveBy = -0.8; 
    let currentX = x.get() + moveBy;
    if (currentX <= -trackWidth) {
      currentX += trackWidth;
    }
    x.set(currentX);
  });

  return (
    <section className={`testimonials-ticker-section ${isCompact ? 'compact-mode' : ''}`}>
      {!isCompact && (
        <div className="ticker-title-wrapper">
          <span className="ticker-mini-title">صدى التأثير</span>
          <h2 className="ticker-main-title">مشاعر حقيقية.. وقصص تحول</h2>
        </div>
      )}

      {isCompact && (
        <div className="ticker-title-wrapper compact" style={{ marginBottom: '30px' }}>
          <span className="ticker-mini-title" style={{ fontSize: '0.65rem' }}>تجارب المشتركين</span>
        </div>
      )}

      <div 
        className="testimonials-ticker-container"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        style={{ cursor: 'grab', overflow: 'hidden' }}
      >
        <motion.div 
          ref={trackRef}
          className="testimonials-ticker-track"
          style={{ x }}
          drag="x"
          onDragStart={() => setIsPaused(true)}
          onDragEnd={() => {
            setIsPaused(false);
            let currentX = x.get();
            if (currentX > 0) x.set(currentX - trackWidth);
            if (currentX < -trackWidth) x.set(currentX + trackWidth);
          }}
        >
          {repeatedTestimonials.map((item, idx) => (
            <div key={idx} className="testimonial-ticker-item">
              <img 
                src={item.image} 
                alt="Review" 
                className={`ticker-img-pure ${isCompact ? 'small-img' : ''}`}
                draggable="false"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
