import React from 'react';
import { motion } from 'framer-motion';

const ProgramHero = () => {
    return (
        <section className="hero-zenith" style={{ minHeight: '80vh', paddingTop: '160px' }}>
            <div className="liquid-container">
                <div className="liquid-orb orb-1"></div>
                <div className="liquid-orb orb-2"></div>
            </div>
            <div className="zenith-layout">
                <motion.div 
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                    className="zenith-content-container"
                >
                    <div className="zenith-meta">
                        <div className="meta-line"></div>
                        <span className="meta-text">برنامج حصري // 2024</span>
                    </div>
                    
                    <h1 className="zenith-title">
                        <span className="z-main">سكينة مطلقة</span>
                        <span className="z-sub">التجربة القصوى</span>
                    </h1>
                    <p className="zenith-desc">
                        أكثر من مجرد برنامج، إنه تحول جذري. انضم إلى النخبة في رحلة مدتها 12 أسبوعاً 
                        مخصصة لضبط النفس والتميز التشغيلي.
                    </p>
                    <div className="l-info-bar" style={{ background: 'transparent', margin: '40px 0' }}>
                        <div className="l-info-item">
                            <span className="li-label">المدة</span>
                            <span className="li-value">12 أسبوعاً</span>
                        </div>
                        <div className="l-info-divider"></div>
                        <div className="l-info-item">
                            <span className="li-label">الشكل</span>
                            <span className="li-value">هجين</span>
                        </div>
                        <div className="l-info-divider"></div>
                        <div className="l-info-item">
                            <span className="li-label">السعر</span>
                            <span className="li-value">0 درهم</span>
                        </div>
                    </div>
                </motion.div>
                <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                    className="zenith-portrait-container"
                >
                    <div className="l-frame">
                        <img src="./program-hero.png" alt="سكينة" className="zenith-img" style={{ width: '100%', height: 'auto' }} />
                        <div className="portrait-glow"></div>
                        <div className="accent-bracket top-right"></div>
                        <div className="accent-bracket bottom-left"></div>
                    </div>
                </motion.div>
            </div>
            <div className="huge-watermark">HARMONY</div>
        </section>
    );
};

export default ProgramHero;
