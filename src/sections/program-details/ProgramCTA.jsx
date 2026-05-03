import React from 'react';
import { Link } from 'react-router-dom';

const ProgramCTA = () => {
    return (
        <section className="lumine-section" style={{ textAlign: 'center', padding: '80px 0' }}>
            <div className="lumine-container" style={{ display: 'block' }}>
                <h2 className="l-title">هل أنت مستعد <span className="l-serif">للتميز؟</span></h2>
                <div className="l-action" style={{ marginTop: '50px' }}>
                    <a href="https://wa.me/212661491819" target="_blank" rel="noopener noreferrer" className="btn-lumine">
                        احجز موعد المقابلة <span>←</span>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default ProgramCTA;
