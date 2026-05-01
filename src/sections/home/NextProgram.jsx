import React from 'react';
import { Link } from 'react-router-dom';

const NextProgram = () => {
    return (
        <section id="next-program" className="lumine-section">
            <div className="lumine-container">
                <div className="lumine-content">
                    <div className="l-folio">البرنامج القادم // 01</div>

                    <h2 className="l-title">
                        تجربة <br />
                        <span className="l-serif">السكينة المطلقة</span>
                    </h2>

                    <p className="l-desc">
                        مرافقة فاخرة لتوضيح رؤيتك وتهدئة عقلك. أعد بناء توازنك الداخلي بمنهجية وأناقة.
                    </p>

                    <div className="l-info-bar">
                        <div className="l-info-item">
                            <span className="li-label">البداية</span>
                            <span className="li-value">15 أكتوبر</span>
                        </div>
                        <div className="l-info-divider"></div>
                        <div className="l-info-item">
                            <span className="li-label">المكان</span>
                            <span className="li-value">عن بعد</span>
                        </div>
                    </div>

                    <div className="l-action">
                        <Link to="/program-details" className="btn-lumine">
                            احجز مكاني <span>←</span>
                        </Link>
                    </div>
                </div>
                <div className="lumine-media">
                    <div className="l-frame">
                        <img src="./program-bg.jpg" alt="Experience" className="l-img" />
                        <div className="l-frame-accent"></div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default NextProgram;
