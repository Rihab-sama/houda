import React from 'react';
import { motion } from 'framer-motion';

const ProgramHero = ({ data }) => {
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
                        <span className="meta-text">{data.tag}</span>
                    </div>

                    <h1 className="zenith-title">
                        <span className="z-main">{data.title}</span>
                        <span className="z-sub">{data.tagline}</span>
                    </h1>
                    <p className="zenith-desc">
                        {data.description}
                    </p>

                    {/* Image for Mobile (placed here in the flow) */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                        className="zenith-portrait-container mobile-hero-img"
                    >
                        <div className="l-frame">
                            <img src={data.image} alt={data.title} className="zenith-img" style={{ width: '100%', height: 'auto' }} />
                            <div className="portrait-glow"></div>
                            <div className="accent-bracket top-right"></div>
                            <div className="accent-bracket bottom-left"></div>
                        </div>
                    </motion.div>

                    <div className="l-info-bar" style={{ background: 'transparent', margin: '40px 0', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '60px', textAlign: 'center' }}>
                        <div className="l-info-item" style={{ textAlign: 'center' }}>
                            <span className="li-label">المدة</span>
                            <span className="li-value">
                                {data.stats.duration.includes('(') ? (
                                    <>{data.stats.duration.split('(')[0]} <br /> ({data.stats.duration.split('(')[1]}</>
                                ) : data.stats.duration}
                            </span>
                        </div>
                        <div className="l-info-divider"></div>
                        <div className="l-info-item" style={{ textAlign: 'center' }}>
                            <span className="li-label">الشكل</span>
                            <span className="li-value">
                                {data.stats.format.includes('(') ? (
                                    <>{data.stats.format.split('(')[0]} <br /> ({data.stats.format.split('(')[1]}</>
                                ) : data.stats.format}
                            </span>
                        </div>
                        <div className="l-info-divider"></div>
                        <div className="l-info-item" style={{ textAlign: 'center' }}>
                            <span className="li-label">السعر</span>
                            <span className="li-value" style={{ direction: 'ltr', display: 'inline-block' }}>
                                {data.stats.price.includes('DH') ? (
                                    <>{data.stats.price.split('DH')[0]} DH <br /> {data.stats.price.split('DH')[1]}</>
                                ) : data.stats.price}
                            </span>
                        </div>
                    </div>

                    <div className="hero-action" style={{ marginTop: '40px', display: 'flex', justifyContent: 'center' }}>
                        <a href="#payment-section" className="btn-register">
                            سجلي الآن: طرق الدفع <span>←</span>
                        </a>
                    </div>
                </motion.div>

                {/* Desktop Image (Side version) */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                    className="zenith-portrait-container desktop-hero-img"
                >
                    <div className="l-frame">
                        <img src={data.image} alt={data.title} className="zenith-img" style={{ width: '100%', height: 'auto' }} />
                        <div className="portrait-glow"></div>
                        <div className="accent-bracket top-right"></div>
                        <div className="accent-bracket bottom-left"></div>
                    </div>
                </motion.div>
            </div>

            <style>{`




                @media (max-width: 1100px) {
                    .desktop-hero-img { display: none !important; }
                    .mobile-hero-img { display: block !important; margin: 30px auto; width: 90%; }
                    .zenith-content-container { display: flex; flex-direction: column; align-items: center; text-align: center; }
                }
                @media (min-width: 1101px) {
                    .mobile-hero-img { display: none !important; }
                    .desktop-hero-img { display: block !important; }
                }
            `}</style>

            <div className="huge-watermark">HARMONY</div>
        </section>
    );
};

export default ProgramHero;
