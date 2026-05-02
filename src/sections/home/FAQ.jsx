import React, { useState } from 'react';

const faqData = [
    {
        question: "ما هو كوتشينج الحياة المتميز؟",
        answer: "الكوتشينج المتميز هو تجربة مخصصة تجمع بين الإستراتيجية عالية المستوى وإيقاظ الوعي لنتائج مستدامة وعميقة."
    },
    {
        question: "ما هي مدة البرنامج؟",
        answer: "تتراوح برامجنا عادة من 3 إلى 6 أشهر، حسب أهدافك المحددة ووتيرة تطورك."
    },
    {
        question: "هل الجلسات حضورية أم عبر الإنترنت؟",
        answer: "نحن نقدم كلا التنسيقين. تتيح الجلسات عبر الإنترنت مرونة كاملة، بينما يوفر الحضور الشخصي انغماساً خاصاً."
    },
    {
        question: "كيف أعرف إذا كان هذا البرنامج مناسباً لي؟",
        answer: "إذا كنت تشعر بالحاجة للارتقاء بحياتك، وإيجاد توازن عميق وكنت مستعداً للاستثمار في نفسك، فإن أول تواصل بيننا سيسمح لنا بتأكيد ذلك."
    },
    {
        question: "هل تقدمون متابعة بعد البرنامج؟",
        answer: "نعم، نحن نقدم وحدات صيانة ومجتمعاً حصرياً لضمان استمرارية تحولك."
    }
];

const FAQItem = ({ question, answer, isOpen, toggle }) => {
    return (
        <div className={`faq-liquid-item ${isOpen ? 'active' : ''}`} onClick={toggle}>
            <div className="faq-glass-card">
                <button className="faq-trigger" style={{ flexDirection: 'row-reverse' }}>
                    <span className="faq-q-text" style={{ textAlign: 'right' }}>{question}</span>
                    <div className={`faq-chevron ${isOpen ? 'rotated' : ''}`}>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <line x1="12" y1="5" x2="12" y2="19" className="plus-line-v" />
                            <line x1="5" y1="12" x2="19" y2="12" className="plus-line-h" />
                        </svg>
                    </div>
                </button>
                {isOpen && (
                    <div className="faq-answer-wrap">
                        <div className="faq-a-text" style={{ textAlign: 'right' }}>
                            {answer}
                        </div>
                    </div>
                )}
            </div>
            <div className="faq-item-glow"></div>
        </div>
    );
};

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState(null);

    return (
        <section id="faq" className="faq-liquid-section">
            <div className="faq-mesh-bg">
                <div className="faq-orb orb-1"></div>
                <div className="faq-orb orb-2"></div>
            </div>

            <div className="faq-liquid-container">
                <div className="faq-liquid-header">
                    <span className="faq-pretitle">المساعدة والوضوح</span>
                    <h2 className="faq-liquid-title">
                        إجابات لارتقائك
                    </h2>
                    <div className="header-divider"></div>
                </div>

                <div className="faq-liquid-grid">
                    {faqData.map((faq, index) => (
                        <FAQItem
                            key={index}
                            question={faq.question}
                            answer={faq.answer}
                            isOpen={openIndex === index}
                            toggle={() => setOpenIndex(openIndex === index ? null : index)}
                        />
                    ))}
                </div>

                <div className="faq-footer-action">
                    <p>هل لديك أسئلة أخرى؟</p>
                    <a href="#contact" className="glow-link">اتصل بي مباشرة</a>
                </div>
            </div>
        </section>
    );
};

export default FAQ;
