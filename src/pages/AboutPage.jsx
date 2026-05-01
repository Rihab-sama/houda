import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import '../celestial.css';
import AboutHero from '../sections/about/AboutHero';
import AboutStory from '../sections/about/AboutStory';
import AboutPhilosophy from '../sections/about/AboutPhilosophy';

const AboutPage = () => {
    const { scrollY } = useScroll();

    // Global Parallax for the entire page background
    const yStars = useTransform(scrollY, [0, 4000], [0, 600]);
    const yNebula = useTransform(scrollY, [0, 4000], [0, 300]);

    return (
        <motion.main
            className="luminous-midnight-page"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
        >
            {/* GLOBAL CELESTIAL BACKGROUND — Continuous across the whole page */}
            <div className="ambient-lights-container">
                <div className="stars-container">
                    <motion.div className="star-field" style={{ y: yStars, opacity: 0.4 }}></motion.div>
                    <motion.div className="nebula-glow" style={{ y: yNebula }}></motion.div>
                    <div className="nebula-gold"></div>
                    <div className="nebula-blue"></div>
                </div>

                {/* Floating ambient orbs for extra depth */}
                <div className="ambient-orb orb-gold"></div>
                <div className="ambient-orb orb-purple"></div>
            </div>

            {/* Sections — All transparent except AboutStory */}
            <AboutHero />
            <AboutStory />
            <AboutPhilosophy />
        </motion.main>
    );
};

export default AboutPage;
