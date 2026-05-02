import React, { useRef, useEffect, useState } from 'react';
import { motion, useAnimation, useMotionValue } from 'framer-motion';

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
  const [trackWidth, setTrackWidth] = useState(0);
  const trackRef = useRef(null);
  const controls = useAnimation();
  const x = useMotionValue(0);

  // مضاعفة الصور لضمان سلاسة الحركة
  const repeatedTestimonials = [...testimonials, ...testimonials, ...testimonials];

  useEffect(() => {
    if (trackRef.current) {
      setTrackWidth(trackRef.current.scrollWidth / 2);
    }
  }, []);

  // تشغيل الحركة التلقائية
  useEffect(() => {
    controls.start({
      x: -trackWidth,
      transition: {
        duration: 60,
        ease: "linear",
        repeat: Infinity,
      },
    });
  }, [trackWidth, controls]);

  return (
    <section className="testimonials-ticker-section">
      <div className="ticker-title-wrapper">
        <span className="ticker-mini-title">صدى التأثير</span>
        <h2 className="ticker-main-title">مشاعر حقيقية.. وقصص تحول</h2>
      </div>

      <div className="testimonials-ticker-container" style={{ cursor: 'grab' }}>
        <motion.div
          ref={trackRef}
          className="testimonials-ticker-track"
          style={{ x }}
          drag="x"
          dragConstraints={{ left: -trackWidth, right: 0 }}
          onMouseEnter={() => controls.stop()} // يتوقف عند مرور الفأرة
          onMouseLeave={() => {
            // يستأنف الحركة عند ابتعاد الفأرة
            controls.start({
              x: -trackWidth,
              transition: {
                duration: 60,
                ease: "linear",
                repeat: Infinity,
              },
            });
          }}
          onDragStart={() => controls.stop()}
          onDragEnd={() => {
            controls.start({
              x: -trackWidth,
              transition: {
                duration: 60,
                ease: "linear",
                repeat: Infinity,
              },
            });
          }}
          animate={controls}
        >
          {repeatedTestimonials.map((item, idx) => (
            <div key={idx} className="testimonial-ticker-item">
              <img
                src={item.image}
                alt="Review"
                className="ticker-img-pure"
                draggable="false"
                onError={(e) => {
                  e.target.src = 'https://via.placeholder.com/300x500?text=Review';
                }}
              />
            </div>
          ))}
        </motion.div>
      </div>

      <style jsx>{`
        /* سنبقي التنسيقات في index.css ولكن سنحذف الـ animation من هناك لنستخدم framer-motion */
      `}</style>
    </section>
  );
};

export default Testimonials;
