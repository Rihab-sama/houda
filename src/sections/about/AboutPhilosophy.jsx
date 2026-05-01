import React from 'react';

const constellations = [
    {
        title: "الانسجام",
        desc: "إيجاد محورك المركزي وسط الفوضى.",
        pos: { top: "15%", left: "20%" },
        coords: { x: 200, y: 120 }
    },
    {
        title: "التوسع",
        desc: "تجاوز حدود منطقة الراحة الخاصة بك.",
        pos: { top: "45%", left: "50%" },
        coords: { x: 500, y: 360 }
    },
    {
        title: "الارتقاء",
        desc: "الوصول إلى قمم جديدة من الوعي.",
        pos: { top: "75%", left: "30%" },
        coords: { x: 300, y: 600 }
    },
    {
        title: "السكينة",
        desc: "هدوء داخلي مستمر وقوي.",
        pos: { top: "30%", left: "78%" },
        coords: { x: 780, y: 240 }
    }
];

const AboutPhilosophy = () => {
    return (
        <section className="celestial-values">
            {/* Local Clarity Elements matching the Hero theme */}

            <div className="constellation-bg">
                <svg className="constellation-svg" viewBox="0 0 1000 800" preserveAspectRatio="xMidYMid slice">
                    {/* Connection: Alignement to Expansion */}
                    <line
                        x1="200" y1="120" x2="500" y2="360"
                        className="const-line"
                        style={{ opacity: 0.8 }}
                    />
                    {/* Connection: Expansion to Élévation */}
                    <line
                        x1="500" y1="360" x2="300" y2="600"
                        className="const-line"
                        style={{ opacity: 0.8 }}
                    />
                    {/* Connection: Expansion to Sérénité */}
                    <line
                        x1="500" y1="360" x2="780" y2="240"
                        className="const-line"
                        style={{ opacity: 0.8 }}
                    />
                </svg>
            </div>

            <div className="celestial-values-container">
                <div className="values-header-celestial">
                    <h2 className="celestial-title-large" style={{ color: 'var(--gold)' }}>القيمة التي نعدك بتحقيقها</h2>
                </div>
                <div className="constellation-map">
                    {constellations.map((item, index) => (
                        <div
                            key={index}
                            className="const-point-wrapper"
                            style={{
                                top: item.pos.top,
                                left: item.pos.left,
                                transform: 'translate(-50%, -50%)',
                                opacity: 1
                            }}
                        >
                            <div className="const-point">
                                <div className="point-core"></div>
                                <div className="point-pulse"></div>
                            </div>
                            <div className="const-info">
                                <h3>{item.title}</h3>
                                <p>{item.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default AboutPhilosophy;
