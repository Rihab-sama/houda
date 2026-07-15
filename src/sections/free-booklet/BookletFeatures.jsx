import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

const BookletFeatures = () => {
    const features = [
        "كيف تبدأ رحلة التشافي.",
        "أسئلة عميقة لفهم نفسك.",
        "تمارين عملية للتفريغ والوعي.",
        "خطوات بسيطة لاستعادة السلام الداخلي."
    ];

    return (
        <section className="celestial-story" style={{ marginTop: '-80px', padding: '0 0 100px', position: 'relative', zIndex: 10 }}>
            <div className="celestial-story-container">
                <div className="story-premium-island" style={{ borderRadius: '40px', padding: '60px 6%' }}>
                    <div className="section-intro" style={{ marginBottom: '40px' }}>
                        <h2 className="section-title-serif" style={{ color: 'var(--purple-deep)' }}>ماذا ستجد داخل الدليل؟</h2>
                        <span className="section-label-gold" style={{ marginTop: '8px' }}>من خلال هذا الكتيب ستكتشف:</span>
                    </div>

                    <div 
                        className="features-minimal-grid"
                        style={{ margin: 0, padding: 0 }}
                    >
                        {features.map((feature, index) => (
                            <motion.div 
                                key={index} 
                                className="feature-minimal-card"
                                whileHover={{ y: -5, borderColor: 'var(--gold)', boxShadow: '0 15px 35px rgba(62, 30, 94, 0.06)' }}
                                style={{ background: '#FAF6EE' }}
                            >
                                <div className="feature-icon-wrapper" style={{ background: 'rgba(220, 160, 17, 0.12)' }}>
                                    <Sparkles size={18} className="feature-icon" />
                                </div>
                                <p className="feature-text">{feature}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BookletFeatures;
