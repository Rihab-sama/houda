import React from 'react';

const Testimonials = () => {
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

  // مضاعفة الصور لضمان سلاسة الحركة
  const repeatedTestimonials = [...testimonials, ...testimonials, ...testimonials, ...testimonials];

  return (
    <section className="testimonials-ticker-section">
      <div className="ticker-fade-left"></div>
      <div className="ticker-fade-right"></div>
      
      <div className="testimonials-ticker-container">
        <div className="testimonials-ticker-track">
          {repeatedTestimonials.map((item, idx) => (
            <div key={idx} className="testimonial-ticker-item">
              <img 
                src={item.image} 
                alt="Review" 
                className="ticker-img-pure"
                onError={(e) => {
                  e.target.src = 'https://via.placeholder.com/300x500?text=Review';
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
