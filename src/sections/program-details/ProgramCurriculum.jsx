import React from 'react';
import { motion } from 'framer-motion';

const ProgramCurriculum = () => {
    const curriculum = [
        {
            phase: "المرحلة 01",
            title: "الوضوح والرؤية",
            desc: "حدد العوائق الذهنية وحدد أهداف حياتك بدقة متناهية."
        },
        {
            phase: "المرحلة 02",
            title: "الهندسة الداخلية",
            desc: "ابنِ روتينات عالية الأداء وثبت انضباطاً هادئاً في حياتك اليومية."
        },
        {
            phase: "المرحلة 03",
            title: "الإشعاع والتأثير",
            desc: "ضاعف تأثيرك وقم بإدارة طاقتك لتحقيق نجاح مستدام وسكينة تامة."
        }
    ];

    return (
        <section className="about-avant-garde">
            <div className="mesh-orb orb-1"></div>
            <div className="mesh-orb orb-2"></div>
            
            <div className="avant-container">
                <div className="l-folio" style={{ color: 'var(--gold-light)' }}>المسار // 02</div>
                <h2 className="l-title" style={{ color: 'white', marginBottom: '80px' }}>
                    تحولك <span className="l-serif" style={{ color: 'var(--gold)' }}>الخاص</span>
                </h2>
                <div className="curriculum-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '40px' }}>
                    {curriculum.map((item, index) => (
                        <motion.div 
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.2 }}
                            className="curriculum-card"
                            style={{ 
                                background: 'rgba(255,255,255,0.03)', 
                                padding: '50px', 
                                border: '1px solid rgba(220,160,17,0.1)',
                                borderRadius: '4px'
                            }}
                        >
                            <div className="li-label" style={{ color: 'var(--gold)' }}>{item.phase}</div>
                            <h3 className="l-title" style={{ fontSize: '1.5rem', color: 'white', margin: '20px 0' }}>{item.title}</h3>
                            <p className="l-desc" style={{ color: 'rgba(255,255,255,0.6)', margin: 0 }}>{item.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProgramCurriculum;
