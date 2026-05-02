import React, { useRef, useState, useEffect } from 'react';
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

const Testimonials = () => {
  const x = useMotionValue(0);
  const [trackWidth, setTrackWidth] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const trackRef = useRef(null);

  // تكرار الصور لضمان سلاسة الدوران
  const repeatedTestimonials = [...testimonials, ...testimonials];

  useEffect(() => {
    if (trackRef.current) {
      setTrackWidth(trackRef.current.scrollWidth / 2);
    }
  }, []);

  // محرك الحركة: يضيف قيمة بسيطة للموضع في كل إطار (Frame)
  useAnimationFrame((t, delta) => {
    if (isPaused || trackWidth <= 0) return;

    let moveBy = -0.8; // سرعة ثابتة وهادئة
    let currentX = x.get() + moveBy;

    // الدوران اللانهائي (Seamless Loop)
    if (currentX <= -trackWidth) {
      currentX += trackWidth;
    }
    
    x.set(currentX);
  });

  return (
    <section className="testimonials-ticker-section">
      <div className="ticker-title-wrapper">
        <span className="ticker-mini-title">صدى التأثير</span>
        <h2 className="ticker-main-title">مشاعر حقيقية.. وقصص تحول</h2>
      </div>

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
            // تصحيح الموضع عند انتهاء السحب لضمان الدوران
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
                className="ticker-img-pure"
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
