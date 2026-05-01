import React from 'react';
import { motion } from 'framer-motion';

const ServicesHero = () => (
    <section className="sh-section">
        <div className="sh-container">
            {/* Left side: Editorial Message */}
            <motion.div 
                className="sh-content"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            >
                <h1 className="sh-title">
                    L'Art de <span className="sh-serif">devenir</span> <br />
                    <span className="sh-gold-text">soi-même</span>
                </h1>
                <p className="sh-message">
                    "Une porte vers une version plus alignée, sereine et puissante de vous-même."
                </p>
                
                <div className="sh-signature-wrap">
                    <span className="sh-signature">Houda Harmony</span>
                </div>
            </motion.div>

            {/* Right side: Portrait */}
            <motion.div 
                className="sh-portrait-wrap"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            >
                <div className="sh-frame">
                    <img src="/houda-hero.png" alt="Houda Portrait" className="sh-img" />
                    <div className="sh-frame-accent" />
                </div>
            </motion.div>
        </div>

        <style>{`
            .sh-section {
                padding: 180px 5% 100px;
                background-color: var(--bg-light);
                position: relative;
                overflow: hidden;
            }

            .sh-container {
                max-width: 1300px;
                margin: 0 auto;
                display: grid;
                grid-template-columns: 1.2fr 0.8fr;
                gap: 80px;
                align-items: center;
            }

            .sh-folio {
                display: block;
                font-size: 0.7rem;
                font-weight: 700;
                letter-spacing: 6px;
                color: var(--gold-dark);
                margin-bottom: 24px;
                opacity: 0.6;
            }

            .sh-title {
                font-family: var(--font-sans);
                font-size: clamp(2.5rem, 6vw, 4.5rem);
                font-weight: 800;
                line-height: 1.1;
                color: var(--purple-deep);
                margin-bottom: 40px;
                text-transform: uppercase;
            }

            .sh-serif {
                font-family: var(--font-serif);
                font-style: italic;
                font-weight: 400;
                text-transform: none;
                color: var(--gold);
            }

            .sh-gold-text {
                background: var(--gold-shimmer);
                -webkit-background-clip: text;
                background-clip: text;
                -webkit-text-fill-color: transparent;
            }

            .sh-divider {
                width: 60px;
                height: 1px;
                background: var(--gold);
                margin-bottom: 40px;
            }

            .sh-message {
                font-size: 1.15rem;
                line-height: 1.8;
                color: rgba(45, 18, 68, 0.7);
                margin-bottom: 50px;
                font-weight: 300;
                max-width: 540px;
            }

            .sh-signature-wrap {
                display: flex;
                flex-direction: column;
                gap: 2px;
            }

            .sh-signature {
                font-family: var(--font-serif);
                font-style: italic;
                font-size: 2.2rem;
                color: var(--purple-deep);
            }

            .sh-role {
                font-size: 0.65rem;
                font-weight: 700;
                letter-spacing: 3px;
                text-transform: uppercase;
                color: var(--gold);
                opacity: 0.8;
            }

            /* Portrait Frame */
            .sh-portrait-wrap {
                position: relative;
            }

            .sh-frame {
                position: relative;
                padding: 20px;
                background: white;
                box-shadow: 0 40px 100px rgba(45, 18, 68, 0.1);
            }

            .sh-img {
                width: 100%;
                aspect-ratio: 4 / 5;
                object-fit: cover;
                display: block;
                filter: brightness(1.05) contrast(0.95) saturate(0.8);
            }

            .sh-frame-accent {
                position: absolute;
                inset: -15px;
                border: 1px solid var(--gold);
                opacity: 0.2;
                pointer-events: none;
                z-index: -1;
            }

            .sh-vertical-folio {
                position: absolute;
                top: 50%;
                right: -40px;
                transform: rotate(90deg) translate(-50%, 0);
                transform-origin: top right;
                font-size: 0.55rem;
                font-weight: 700;
                letter-spacing: 5px;
                color: var(--gold-dark);
                opacity: 0.4;
                white-space: nowrap;
            }

            /* Tablet / Mobile */
            @media (max-width: 1024px) {
                .sh-container {
                    grid-template-columns: 1fr;
                    gap: 60px;
                    text-align: center;
                }
                .sh-divider { margin: 0 auto 40px; }
                .sh-message { margin: 0 auto 50px; }
                .sh-signature-wrap { align-items: center; }
                .sh-vertical-folio { display: none; }
                .sh-portrait-wrap { max-width: 500px; margin: 0 auto; }
            }

            @media (max-width: 768px) {
                .sh-section { padding-top: 140px; }
                .sh-title { font-size: 2.8rem; }
            }
        `}</style>
    </section>
);

export default ServicesHero;
