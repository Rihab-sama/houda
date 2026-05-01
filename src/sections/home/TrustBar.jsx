import React from 'react';

const TrustBar = () => {
    const brands = [
        "شغف", "سلام داخلي", "الحضور", "الهدوء", "السكينة", "الاستمتاع", "الحب", "الرحمة", "التميز", "التناغم", "التحول", "الوعي", "التوازن", "التحرر", "الارتقاء"
    ];

    // Repeat words many times to fill any screen width
    const repeatedBrands = Array(10).fill(brands).flat();

    return (
        <section className="trust-bar-editorial">
            <div className="ticker-fade-left"></div>
            <div className="ticker-fade-right"></div>
            
            <div className="ticker-container">
                <div className="ticker-track">
                    {repeatedBrands.map((brand, idx) => (
                        <div key={idx} className="ticker-item">
                            <span className="ticker-symbol">✦</span>
                            <span className="ticker-text">{brand}</span>
                        </div>
                    ))}
                </div>
            </div>

            <style jsx>{`
                .trust-bar-editorial {
                    padding: 30px 0;
                    background: var(--midnight);
                    border-top: 1px solid rgba(220, 160, 17, 0.15);
                    border-bottom: 1px solid rgba(220, 160, 17, 0.15);
                    overflow: hidden;
                    position: relative;
                    z-index: 5;
                    /* Force LTR for predictable animation behavior */
                    direction: ltr;
                }

                .ticker-container {
                    display: flex;
                    width: 100%;
                }

                .ticker-track {
                    display: flex;
                    gap: 80px;
                    white-space: nowrap;
                    animation: marquee 120s linear infinite;
                    width: fit-content;
                }

                @keyframes marquee {
                    0% {
                        transform: translateX(0);
                    }
                    100% {
                        /* Moves by a large enough fraction to keep it seamless */
                        transform: translateX(-50%);
                    }
                }

                .ticker-item {
                    display: flex;
                    align-items: center;
                    gap: 20px;
                }

                .ticker-symbol {
                    color: var(--gold);
                    font-size: 1rem;
                }

                .ticker-text {
                    color: white;
                    font-family: var(--font-sans);
                    font-size: 1.1rem;
                    font-weight: 700;
                    letter-spacing: 1px;
                    opacity: 0.8;
                }

                .ticker-fade-left, .ticker-fade-right {
                    position: absolute;
                    top: 0;
                    bottom: 0;
                    width: 150px;
                    z-index: 2;
                    pointer-events: none;
                }

                .ticker-fade-left {
                    left: 0;
                    background: linear-gradient(to right, var(--midnight), transparent);
                }

                .ticker-fade-right {
                    right: 0;
                    background: linear-gradient(to left, var(--midnight), transparent);
                }

                @media (max-width: 768px) {
                    .ticker-track {
                        gap: 40px;
                        animation-duration: 60s;
                    }
                }
            `}</style>
        </section>
    );
};

export default TrustBar;
