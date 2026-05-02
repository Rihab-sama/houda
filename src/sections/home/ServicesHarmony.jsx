import React from 'react';
import { motion } from 'framer-motion';

const ServicesHarmony = () => {
    return (
        <section id="services" className="harmony-section">
            <div className="harmony-container">
                <div className="harmony-header">
                    <h2 className="harmony-main-title">
                        برامجي <span className="harmony-serif">وخدماتي</span>
                    </h2>
                    <p className="harmony-subtitle">
                        أرافقك من خلال برامج عملية وجلسات موجهة لتحقيق التوازن وبناء الثقة في نفسك.
                    </p>
                </div>

                <div className="harmony-grid">
                    {/* 01 - Large Card Left */}
                    <motion.a
                        href="/services"
                        className="harmony-card card-large"
                        style={{ textDecoration: 'none', display: 'block' }}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="card-image-wrap">
                            <img src="./service-seances.png" alt="مرافقة عبر الإنترنت" />
                        </div>
                        <div className="card-glass-content">
                            <span className="card-num">01 / مرافقة فردية</span>
                            <h2 className="card-title">حصص <br /> خاصة فردية</h2>
                            <p className="card-desc">انغماس حي. اتصلي من أي مكان لجلسة كوتشينج عالية الجودة تضمن لك الوضوح والنتيجة.</p>
                            <div className="card-btn-primary"> الاطلاع على كل الحصص <span>←</span></div>
                        </div>
                    </motion.a>

                    {/* Right Column Stack */}
                    <div className="harmony-right-col">
                        {/* 02 - Medium Card Top */}
                        <motion.a
                            href="/services"
                            className="harmony-card card-medium"
                            style={{ textDecoration: 'none', display: 'block' }}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                        >
                            <div className="card-image-wrap">
                                <img src="./service-cours.png" alt="دورات ماستركلاس" />
                            </div>
                            <div className="card-glass-content">
                                <span className="card-num">02 / دورات تعليمية</span>
                                <h3 className="card-title">دورات ماستركلاس</h3>
                                <p className="card-desc">تعلمي مهارات جديدة وطوري وعيك من خلال دورات متخصصة ومكثفة.</p>
                                <div className="card-btn-primary"> الاطلاع على كل الدورات <span>←</span></div>
                            </div>
                        </motion.a>

                        {/* 03 - Medium Card Bottom */}
                        <motion.a
                            href="/services"
                            className="harmony-card card-medium"
                            style={{ textDecoration: 'none', display: 'block' }}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                        >
                            <div className="card-image-wrap">
                                <img src="./service-meditation.png" alt="فضاء التأمل" />
                            </div>
                            <div className="card-glass-content">
                                <span className="card-num">03 / فضاء السكينة</span>
                                <h3 className="card-title">فضاء التأمل</h3>
                                <p className="card-desc">استمتعي بلحظات من الهدوء لتجديد طاقتك وتصفية ذهنك يومياً.</p>
                                <div className="card-btn-primary"> للاطلاع على كل التاملات <span>←</span></div>
                            </div>
                        </motion.a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ServicesHarmony;
