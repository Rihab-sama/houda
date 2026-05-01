import React from 'react';
import { Link } from 'react-router-dom';

const ProgramCTA = () => {
    return (
        <section className="lumine-section" style={{ textAlign: 'center', padding: '150px 0' }}>
            <div className="lumine-container" style={{ display: 'block' }}>
                <div className="l-folio">انضم إلينا // 03</div>
                <h2 className="l-title">هل أنت مستعد <span className="l-serif">للتميز؟</span></h2>
                <div className="l-action" style={{ marginTop: '50px' }}>
                    <a href="https://wa.me/212643354739" target="_blank" rel="noopener noreferrer" className="btn-lumine">
                        احجز موعد المقابلة <span>←</span>
                    </a>
                </div>
                <div style={{ marginTop: '30px' }}>
                    <Link to="/" className="meta-text" style={{ fontSize: '0.65rem', borderBottom: '1px solid var(--gold)', paddingBottom: '5px', textDecoration: 'none', color: 'var(--gold-dark)' }}>
                        العودة للرئيسية
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default ProgramCTA;
