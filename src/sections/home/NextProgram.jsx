import React from 'react';
import { Link } from 'react-router-dom';
import coursesData from '../../data/courses.json';

const NextProgram = () => {
    // Find the newest featured course (like "التحرر من الغضب")
    const featuredCourse = coursesData.find(c => c.isFeatured) || coursesData[0];

    return (
        <section id="next-program" className="lumine-section">
            <style>{`
                .l-img {
                    transition: transform 0.8s cubic-bezier(0.16, 1, 0.3, 1);
                }
                .l-frame:hover .l-img {
                    transform: scale(1.05);
                }
                .l-desc {
                    font-weight: 400;
                    opacity: 0.85;
                    line-height: 1.8;
                }
            `}</style>
            <div className="lumine-container">
                <div className="lumine-content">
                    <div className="zenith-meta">
                        <div className="meta-line"></div>
                        <div className="meta-text">{featuredCourse.hero.tag}</div>
                    </div>

                    <h2 className="l-title">
                        {featuredCourse.hero.title.split(' ')[0]} <br />
                        <span className="l-serif">{featuredCourse.hero.title.split(' ').slice(1).join(' ')}</span>
                    </h2>

                    <div className="lumine-media">
                        <div className="l-frame">
                            <img src={featuredCourse.hero.image} alt={featuredCourse.hero.title} className="l-img" />
                            <div className="l-frame-accent"></div>
                        </div>
                    </div>

                    <p className="l-desc">
                        {featuredCourse.hero.tagline}. {featuredCourse.hero.description.slice(0, 150)}...
                    </p>

                    <div className="l-info-bar">
                        <div className="l-info-item">
                            <span className="li-label">البداية</span>
                            <span className="li-value">{featuredCourse.hero.stats.duration}</span>
                        </div>
                        <div className="l-info-divider"></div>
                        <div className="l-info-item">
                            <span className="li-label">المكان</span>
                            <span className="li-value">عن بعد (Zoom)</span>
                        </div>
                    </div>

                    <div className="l-action">
                        <Link to={`/program-details/${featuredCourse.slug}`} className="btn-lumine">
                            اكتشفي المزيد <span>←</span>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default NextProgram;
