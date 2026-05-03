import React from 'react';
import { motion } from 'framer-motion';

const LegalPage = () => {
    return (
        <motion.main 
            className="legal-page"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            style={{ 
                padding: '150px 20px 100px',
                maxWidth: '900px',
                margin: '0 auto',
                direction: 'rtl',
                color: 'var(--purple-deep)',
                lineHeight: '1.8'
            }}
        >
            <h1 style={{ marginBottom: '40px', fontSize: '2.5rem', textAlign: 'center' }}>الشروط القانونية وسياسة الخصوصية</h1>
            
            <section style={{ marginBottom: '50px' }}>
                <h2 style={{ borderBottom: '1px solid #ddd', paddingBottom: '10px', marginBottom: '20px' }}>أولاً: سياسة الخصوصية</h2>
                <p>نحن في <strong>Houda Harmony</strong> نلتزم بأقصى درجات السرية والخصوصية لبياناتكم. المعلومات التي يتم جمعها تستخدم فقط للأغراض التالية:</p>
                <ul>
                    <li>تنسيق الجلسات الاستشارية والدورات التدريبية.</li>
                    <li>إرسال التحديثات والمواد التعليمية الخاصة بالبرامج المشترك بها.</li>
                    <li>تحسين تجربة المستخدم على الموقع.</li>
                </ul>
                <p>نحن نضمن عدم مشاركة أي معلومات شخصية أو تفاصيل الجلسات الخاصة مع أي طرف ثالث تحت أي ظرف من الظروف.</p>
            </section>

            <section style={{ marginBottom: '50px' }}>
                <h2 style={{ borderBottom: '1px solid #ddd', paddingBottom: '10px', marginBottom: '20px' }}>ثانياً: الشروط والأحكام</h2>
                <p>باستخدامكم لهذا الموقع والخدمات المقدمة، فإنكم توافقون على الشروط التالية:</p>
                
                <h3 style={{ fontSize: '1.2rem', marginTop: '20px' }}>1. طبيعة الخدمة</h3>
                <p>خدمات الكوتشينج (التوجيه) المقدمة هي رحلة تطويرية تهدف لمساعدة العميل على تحقيق أهدافه. هي ليست بديلاً عن العلاج النفسي أو الاستشارة الطبية المتخصصة.</p>
                
                <h3 style={{ fontSize: '1.2rem', marginTop: '20px' }}>2. الملكية الفكرية</h3>
                <p>جميع محتويات الدورات والبرامج والمقالات المنشورة هي ملك حصري لـ <strong>هدى أبحمان</strong>، ولا يجوز إعادة نشرها أو استخدامها لأغراض تجارية دون إذن كتابي مسبق.</p>
            </section>

            <section style={{ textAlign: 'center', marginTop: '60px', opacity: 0.7 }}>
                <p>© 2026 HOUDA HARMONY. جميع الحقوق محفوظة.</p>
            </section>
        </motion.main>
    );
};

export default LegalPage;
