import React, { useState } from 'react';

const faqData = [
    {
        question: "ما الذي يجعل تجربة الكوتشينج مع هدى استثنائية؟",
        answer: "إنها رحلة تتجاوز التوجيه التقليدي؛ نحن نغوص في أعماق الوعي لإعادة تشكيل واقعك، مدمجين بين الحكمة العميقة والاستراتيجيات العملية لتحقيق سيادة كاملة على حياتك."
    },
    {
        question: "كم من الوقت أحتاج لألمس تغييراً جذرياً في حياتي؟",
        answer: "التغيير الحقيقي يبدأ من اللحظة الأولى للوعي، لكن بناء أسس متينة لارتقائك يتطلب عادةً التزاماً يمتد من 3 إلى 6 أشهر، لنضمن تجلي النتائج واستدامتها."
    },
    {
        question: "هل يمكنني التحرر من ثقل الماضي وتأنيب الضمير وجلد الذات؟",
        answer: "الماضي وجد ليعلمنا لا ليعاقبنا. تعتبر 'دورة شفاء الماضي' هي الحل الجذري والمسار الأمثل الذي نصممه للتحرر من هذه القيود، حيث نستخدم أدوات عميقة لتحويل الندم إلى حكمة وجلد الذات إلى سلام داخلي، لتبدأ صفحة جديدة بقلب نقي وروح حرة."
    },
    {
        question: "هل يمكنني التغلب على المخاوف التي تمنعني من التقدم في حياتي؟",
        answer: "الخوف هو مجرد وهم يتبدد بالمواجهة والوعي. من خلال 'دورة التحرر من الخوف'، نقدم لك المفاتيح النفسية لكسر قيود القلق والتردد، مما يفتح لك آفاقاً جديدة من الشجاعة والثقة لتحقيق طموحاتك دون عوائق."
    },
    {
        question: "كيف أبدأ رحلة التحول والارتقاء معكِ اليوم؟",
        answer: "كل ما يتطلبه الأمر هو قرار شجاع منك. يمكنك حجز جلستك الاستشارية الأولى الآن، لنرسم معاً خارطة الطريق التي تناسب تطلعاتك الفريدة ونبدأ في صياغة واقعك الجديد بأفضل السبل الممكنة."
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


            </div>
        </section>
    );
};

export default FAQ;
