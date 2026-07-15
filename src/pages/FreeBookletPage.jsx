import React from 'react';
import BookletHero from '../sections/free-booklet/BookletHero';
import BookletFeatures from '../sections/free-booklet/BookletFeatures';
import '../celestial.css';

const FreeBookletPage = () => {
    return (
        <main className="luminous-midnight-page" style={{ direction: 'rtl', textAlign: 'right' }}>
            {/* GLOBAL CELESTIAL BACKGROUND */}
            <div className="ambient-lights-container">
                <div className="stars-container">
                    <div className="star-field" style={{ opacity: 0.45 }}></div>
                    <div className="nebula-glow"></div>
                    <div className="nebula-gold"></div>
                    <div className="nebula-blue"></div>
                </div>
            </div>
            
            <div style={{ position: 'relative', zIndex: 5 }}>
                <BookletHero />
                <BookletFeatures />
            </div>
        </main>
    );
};

export default FreeBookletPage;
