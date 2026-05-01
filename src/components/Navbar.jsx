import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState('home');
    const location = useLocation();
    const isHome = location.pathname === '/';

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        if (!isHome) return;

        const options = {
            threshold: 0.5,
            rootMargin: '0px 0px -20% 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setActiveSection(entry.target.id);
                }
            });
        }, options);

        const sections = ['home', 'services', 'faq'];
        sections.forEach(id => {
            const el = document.getElementById(id);
            if (el) observer.observe(el);
        });

        return () => observer.disconnect();
    }, [isHome]);

    const scrollToSection = (e, id) => {
        e.preventDefault();
        const el = document.getElementById(id);
        if (el) {
            const offset = 80;
            const bodyRect = document.body.getBoundingClientRect().top;
            const elementRect = el.getBoundingClientRect().top;
            const elementPosition = elementRect - bodyRect;
            const offsetPosition = elementPosition - offset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    };

    return (
        <nav className={`navbar glass-nav ${isScrolled ? 'scrolled' : ''}`}>
            <div className="nav-container">
                <Link to="/" className="logo">
                    <span className="logo-icon">✶</span> Houda Harmony
                </Link>
                <ul className="nav-links">
                    <li>
                        {isHome ? (
                            <a
                                href="#home"
                                onClick={(e) => scrollToSection(e, 'home')}
                                className={activeSection === 'home' ? 'active' : ''}
                            >الرئيسية</a>
                        ) : (
                            <Link to="/" className={location.pathname === '/' ? 'active' : ''}>
                                الرئيسية
                            </Link>
                        )}
                    </li>
                    <li>
                        <Link
                            to="/about"
                            className={location.pathname === '/about' ? 'active' : ''}
                        >
                            من أنا
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/services"
                            className={location.pathname === '/services' ? 'active' : ''}
                        >
                            الخدمات
                        </Link>
                    </li>

                    <li>
                        {isHome ? (
                            <a
                                href="#faq"
                                onClick={(e) => scrollToSection(e, 'faq')}
                                className={activeSection === 'faq' ? 'active' : ''}
                            >الأسئلة</a>
                        ) : (
                            <Link to="/">الأسئلة</Link>
                        )}
                    </li>
                    <li>
                        <a
                            href="https://wa.me/212643354739"
                            target="_blank"
                            rel="noopener noreferrer"
                        >اتصل بي</a>
                    </li>
                </ul>
                <a href="https://wa.me/212643354739" target="_blank" rel="noopener noreferrer" className="btn btn-nav">احجز جلسة <span>←</span></a>
            </div>
        </nav>
    );
};

export default Navbar;
