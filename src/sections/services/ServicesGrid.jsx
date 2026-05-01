import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Tag, MapPin, ArrowLeft, LayoutGrid, List } from 'lucide-react';

// ─── DATA ─────────────────────────────────────────────────────────────────────
const ALL_SERVICES = [
  {
    id: 1, title: 'كوتشينج فردي',
    tag: 'وضوح',
    description: 'وضح أهدافك، وتجاوز عوائقك وامضِ قدماً بثقة مطلقة بفضل متابعة مخصصة.',
    image: '/service-seances.png', category: 'coaching',
    price: '0 درهم', location: 'عبر الإنترنت',
  },
  {
    id: 2, title: 'كوتشينج جماعي',
    tag: 'حلقة',
    description: "ابنِ رؤيتك بالتعاون مع مجموعة داعمة ومغيرة.",
    image: '/service-seances.png', category: 'coaching',
    price: '0 درهم', location: 'عبر الإنترنت',
  },
  {
    id: 3, title: 'برنامج VIP لمدة 3 أشهر',
    tag: 'نخبة',
    description: "اتصال عميق، انسجام وعمل — لأولئك الذين يختارون التميز.",
    image: '/service-seances.png', category: 'coaching',
    price: '8 درهم', location: 'عبر الإنترنت',
  },
  {
    id: 4, title: 'تأمل موجه',
    tag: 'سكينة',
    description: 'ثبّت جسدك، وهدئ عقلك، وازرع سلاماً داخلياً مستداماً يومياً.',
    image: '/service-meditation.png', category: 'meditation',
    price: '0 درهم', location: 'عبر الإنترنت',
  },
  {
    id: 5, title: 'خلوة اليقظة الذهنية',
    tag: 'انغماس',
    description: "يومان لتجديد الطاقة، والتخلي عن الضغوط، والعودة إلى الجوهر بعيداً عن الروتين اليومي.",
    image: '/service-meditation.png', category: 'meditation',
    price: '0 درهم', location: 'عبر الإنترنت',
  },
  {
    id: 6, title: 'طقس الصباح الصوتي',
    tag: 'طاقة',
    description: 'طقس موجه لبدء كل يوم بنية وطاقة إيجابية.',
    image: '/service-meditation.png', category: 'meditation',
    price: '90 درهم', location: 'عبر الإنترنت',
  },
  {
    id: 7, title: "التميز الأنثوي",
    tag: 'ماستركلاس',
    description: 'جسدي قيادتك الطبيعية وأشعي في جميع مجالات حياتك.',
    image: '/service-cours.png', category: 'courses',
    price: '0 درهم', location: 'عبر الإنترنت',
  },
  {
    id: 8, title: 'دورة تدريبية لمدة 8 أسابيع',
    tag: 'تطور',
    description: 'أعد برمجة معتقداتك المقيدة واصنع أنماطاً ناجحة جديدة.',
    image: '/service-cours.png', category: 'courses',
    price: '0 درهم', location: 'عبر الإنترنت',
  },
  {
    id: 9, title: 'ماستركلاس الثقة',
    tag: 'هرموني',
    description: 'طوّر تأثيرك الشخصي والمهني في 3 ساعات مكثفة.',
    image: '/service-cours.png', category: 'courses',
    price: '0 درهم', location: 'عبر الإنترنت',
  },
];

const FILTERS = [
  { key: 'all', label: 'جميع الخدمات' },
  { key: 'coaching', label: 'حصص فردية ' },
  { key: 'meditation', label: 'تأمل' },
  { key: 'courses', label: 'دورات وماستركلاس' },
];

// ─── CARD LOGIC ───────────────────────────────────────────────────────────────
const handleCardMouseMove = (e, card) => {
  const rect = card.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;
  card.style.setProperty('--m-x', `${(x / rect.width) * 100}%`);
  card.style.setProperty('--m-y', `${(y / rect.height) * 100}%`);

  // Removed 3D tilt
};

const handleCardMouseLeave = (card) => {
  card.style.setProperty('--m-x', `50%`);
  card.style.setProperty('--m-y', `50%`);
};

// ─── CARD COMPONENT ──────────────────────────────────────────────────────────
const ServiceCard = ({ service }) => (
  <motion.a
    href="/program-details"
    className="atlas-card-mini"
    onMouseMove={(e) => handleCardMouseMove(e, e.currentTarget)}
    onMouseLeave={(e) => handleCardMouseLeave(e.currentTarget)}
    style={{ textDecoration: 'none' }}
  >
    <div className="card-bg-wrap">
      <img src={service.image} alt={service.title} className="card-img" loading="lazy" />
      <div className="card-gradient" />
    </div>

    <div className="card-info">
      <span className="card-kicker">{service.tag}</span>
      <h3 className="card-title-mini">{service.title}</h3>

      <div className="card-footer">
        <span className="card-price">{service.price}</span>
        <div className="card-btn-cta">
          <span>اكتشف المزيد</span>
          <ArrowLeft size={14} />
        </div>
      </div>
    </div>
  </motion.a>
);


// ─── MAIN ─────────────────────────────────────────────────────────────────────
const ServicesGrid = () => {
  const [active, setActive] = useState('all');

  const filtered =
    active === 'all' ? ALL_SERVICES : ALL_SERVICES.filter((s) => s.category === active);

  return (
    <section className="sg-layout-section" id="services-catalogue">
      {/* Background Decor */}
      <div className="sg-mesh" />

      <div className="sg-editorial-container">
        {/* LEFT: MAIN GRID */}
        {/* LEFT: MAIN GRID */}
        <div className="sg-main-content">
          <header className="sg-header">
            <h1 className="sg-page-title">اكتشف <span className="sg-serif">خدماتنا</span></h1>
            <p className="sg-page-desc">مجموعة مختارة ومخصصة من برامج المرافقة، الماستركلاس والتأملات لدعم توسعك الشخصي.</p>
          </header>

          <div className="sg-content-divider" />

          <div className="sg-catalog-grid">
            {filtered.map((s) => (
              <ServiceCard key={s.id} service={s} />
            ))}
          </div>
        </div>

        {/* RIGHT: SIDEBAR */}
        <aside className="sg-sidebar">
          <div className="sg-sidebar-inner">
            <h4 className="sg-sidebar-title">الفئات</h4>
            <nav className="sg-nav-list">
              {FILTERS.map((f) => (
                <button
                  key={f.key}
                  className={`sg-nav-item ${active === f.key ? 'active' : ''}`}
                  onClick={() => setActive(f.key)}
                >
                  <span className="sg-nav-bullet" />
                  <span className="sg-nav-label">{f.label}</span>
                  <span className="sg-nav-count">
                    {f.key === 'all'
                      ? ALL_SERVICES.length
                      : ALL_SERVICES.filter((s) => s.category === f.key).length}
                  </span>
                </button>
              ))}
            </nav>

            <div className="sg-sidebar-promo">
              <span className="sg-promo-tag">هل تحتاج إلى مساعدة؟</span>
              <p className="sg-promo-text">اتصل بي للحصول على استشارة شخصية.</p>
              <a href="#contact" className="sg-promo-link">اتصل بي</a>
            </div>
          </div>
        </aside>
      </div>

      <style>{`
        .sg-layout-section {
          background: var(--bg-light);
          padding: 120px 0 120px;
          position: relative;
        }

        .sg-header {
          margin-bottom: 50px;
          text-align: center;
        }
        .sg-page-title {
          font-family: var(--font-sans);
          font-size: 4rem;
          font-weight: 800;
          color: var(--purple-deep);
          text-transform: uppercase;
          letter-spacing: -1px;
          margin-bottom: 15px;
          line-height: 1.1;
        }
        .sg-serif {
          font-family: var(--font-serif);
          font-style: italic;
          font-weight: 400;
          text-transform: none;
          color: var(--gold);
        }
        .sg-page-desc {
          font-size: 1.15rem;
          color: rgba(45,18,68,0.6);
          max-width: 700px;
          line-height: 1.6;
          margin: 0 auto;
        }

        .sg-mesh {
          position: absolute; inset: 0;
          background: radial-gradient(circle at 80% 20%, rgba(220,160,17,0.03), transparent 40%),
                      radial-gradient(circle at 20% 80%, rgba(45,18,68,0.03), transparent 40%);
          pointer-events: none;
        }

        .sg-content-divider {
          height: 1px;
          background: rgba(220, 160, 17, 0.15);
          margin-bottom: 50px;
        }

        .sg-editorial-container {
          max-width: 1400px;
          margin: 0 auto;
          padding: 0 5%;
          display: grid;
          grid-template-columns: 1fr 300px;
          gap: 60px;
          position: relative;
          z-index: 2;
        }

        /* Top Bar */
        .sg-top-bar {
          display: flex; justify-content: space-between; align-items: center;
          margin-bottom: 50px;
          padding: 15px 0;
          border-bottom: 1px solid rgba(220, 160, 17, 0.15);
        }
        .sg-sort-links { display: flex; align-items: center; gap: 30px; }
        .sg-sort-label { 
          font-size: 0.65rem; font-weight: 800; text-transform: uppercase; 
          color: var(--purple-deep); opacity: 0.4; letter-spacing: 2px; 
        }
        .sg-sort-btn {
          background: none; border: none; padding: 5px 0;
          font-size: 0.75rem; font-weight: 700; color: rgba(45, 18, 68, 0.5);
          cursor: pointer; transition: all 0.4s ease;
          position: relative;
          text-transform: uppercase; letter-spacing: 1px;
        }
        .sg-sort-btn::after {
          content: ''; position: absolute; bottom: 0; left: 0;
          width: 0; height: 1px; background: var(--gold);
          transition: width 0.4s ease;
        }
        .sg-sort-btn.active { color: var(--purple-deep); }
        .sg-sort-btn.active::after, .sg-sort-btn:hover::after { width: 100%; }
        
        .sg-results-count { 
          font-size: 0.75rem; color: var(--purple-deep); font-weight: 600; 
          background: rgba(220, 160, 17, 0.05); padding: 8px 16px; 
          border-radius: 50px; border: 1px solid rgba(220, 160, 17, 0.1);
        }
        .sg-results-count span { color: var(--gold-dark); font-weight: 800; margin-left: 4px; }

        /* Grid */
        .sg-catalog-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
          gap: 25px;
        }

        /* Sidebar */
        .sg-sidebar-inner {
          position: sticky; top: 120px;
          background: rgba(255, 255, 255, 0.4);
          backdrop-filter: blur(10px); -webkit-backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.6);
          border-radius: 12px;
          padding: 32px;
          box-shadow: 0 20px 40px rgba(0,0,0,0.03);
        }
        .sg-sidebar-title {
          font-size: 0.65rem; font-weight: 800; letter-spacing: 4px;
          text-transform: uppercase; color: var(--purple-deep);
          margin-bottom: 32px;
          position: relative;
        }
        .sg-sidebar-title::after {
          content: ''; position: absolute; bottom: -8px; left: 0;
          width: 30px; height: 1px; background: var(--gold);
        }
        
        .sg-nav-list { display: flex; flex-direction: column; gap: 4px; margin-bottom: 40px; }
        .sg-nav-item {
          display: flex; align-items: center; gap: 12px;
          padding: 12px 0; background: none; border: none;
          text-align: right; width: 100%; cursor: pointer;
          transition: all 0.3s;
        }
        .sg-nav-bullet { width: 4px; height: 4px; border-radius: 50%; background: var(--gold); opacity: 0; transition: all 0.3s; }
        .sg-nav-label { font-size: 0.82rem; font-weight: 600; color: rgba(45,18,68,0.5); flex: 1; transition: all 0.3s; }
        .sg-nav-count { font-size: 0.7rem; color: rgba(0,0,0,0.2); font-weight: 700; }
        
        .sg-nav-item:hover .sg-nav-label { color: var(--purple-deep); transform: translateX(-8px); }
        .sg-nav-item.active .sg-nav-label { color: var(--purple-deep); font-weight: 800; }
        .sg-nav-item.active .sg-nav-bullet { opacity: 1; transform: scale(1.5); }
        .sg-nav-item.active .sg-nav-count { color: var(--gold-dark); }

        .sg-sidebar-promo {
          background: var(--purple-deep);
          border-radius: 8px; padding: 24px;
          text-align: center;
        }
        .sg-promo-tag {
          font-size: 0.55rem; font-weight: 800; letter-spacing: 2px;
          text-transform: uppercase; color: var(--gold);
          display: block; margin-bottom: 12px;
        }
        .sg-promo-text { font-size: 0.8rem; color: rgba(255,255,255,0.7); line-height: 1.5; margin-bottom: 16px; }
        .sg-promo-link {
          font-size: 0.72rem; font-weight: 700; color: #fff;
          text-decoration: underline; text-underline-offset: 4px;
        }

        /* ── Mini Card ── */
        .atlas-card-mini {
          position: relative;
          aspect-ratio: 4 / 5.2;
          border-radius: 8px;
          overflow: hidden;
          background: #0d0616;
          cursor: pointer;
          transition: transform 0.5s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.5s ease;
        }
        .atlas-card-mini:hover { 
          transform: translateY(-12px);
          box-shadow: 0 30px 60px rgba(13,6,22,0.4); 
        }

        .card-bg-wrap { position: absolute; inset: 0; z-index: 1; }
        .card-img {
          width: 100%; height: 100%; object-fit: cover;
          opacity: 0.9; transition: transform 1.2s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .atlas-card-mini:hover .card-img { transform: scale(1.1); }
        .card-gradient {
          position: absolute; inset: 0;
          background: linear-gradient(to top, 
            rgba(13,6,22,0.95) 0%,
            rgba(13,6,22,0.4) 40%,
            rgba(13,6,22,0) 100%
          );
        }

        .card-info {
          position: relative; z-index: 2;
          height: 100%; display: flex; flex-direction: column; justify-content: flex-end;
          padding: 20px;
        }
        .card-kicker {
          font-size: 0.5rem; font-weight: 800; letter-spacing: 3px;
          text-transform: uppercase; color: var(--gold);
          margin-bottom: 6px; display: block; opacity: 0.9;
        }
        .card-title-mini {
          font-family: var(--font-sans);
          font-size: 1.05rem; font-weight: 800;
          color: white; line-height: 1.1; margin-bottom: 12px;
          letter-spacing: -0.2px;
        }
        .card-footer {
          display: flex; justify-content: space-between; align-items: center;
          padding-top: 12px; border-top: 1px solid rgba(255,255,255,0.1);
        }
        .card-price { font-size: 0.75rem; font-weight: 700; color: rgba(255,255,255,0.8); }
        .card-btn-cta {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 6px 14px;
          background: var(--gold);
          color: var(--purple-deep);
          border-radius: 50px;
          font-size: 0.68rem;
          font-weight: 800;
          text-decoration: none;
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
          box-shadow: 0 4px 15px rgba(220, 160, 17, 0.15);
        }
        .card-btn-cta span { margin-top: 2px; }
        .card-btn-cta:hover {
          background: white;
          transform: translateY(-2px);
          box-shadow: 0 10px 25px rgba(0,0,0,0.1);
        }
        .atlas-card-mini:hover .card-btn-cta { 
           /* Optional: scale up slightly */
        }

        /* Responsive */
        @media (max-width: 1200px) {
          .sg-editorial-container { grid-template-columns: 1fr 260px; gap: 40px; }
        }
        @media (max-width: 900px) {
          .sg-editorial-container { 
            display: flex;
            flex-direction: column;
            gap: 30px;
          }
          .sg-main-content { 
            display: contents; /* Allows children to be ordered relative to sidebar */
          }
          
          .sg-header { 
            order: 1; 
            text-align: center;
            margin-bottom: 30px;
          }
          .sg-page-title { font-size: 3rem; }
          .sg-page-desc {
            margin: 0 auto;
            font-size: 1.05rem;
          }
          .sg-content-divider { order: 2; margin-bottom: 20px; }
          .sg-sidebar { 
            order: 3; 
            display: block; 
            margin-bottom: 20px;
          }
          .sg-catalog-grid { order: 4; }

          .sg-sidebar-inner { 
            position: relative; top: 0; 
            padding: 15px; 
            background: rgba(255, 255, 255, 0.4);
            border: none;
            box-shadow: none;
          }
          .sg-sidebar-title { display: none; }
          .sg-nav-list { 
            display: flex;
            flex-wrap: wrap; 
            gap: 12px;
            justify-content: center;
          }
          
          .sg-nav-bullet { display: none; }
          
          .sg-nav-item { 
            white-space: nowrap; 
            width: auto; 
            padding: 10px 20px;
            background: rgba(255, 255, 255, 0.8);
            border-radius: 50px;
            border: 1px solid rgba(0,0,0,0.05);
          }
          .sg-nav-item.active { 
            background: var(--purple-deep); 
          }
          .sg-nav-item.active .sg-nav-label { color: white; }
          .sg-nav-item.active .sg-nav-count { color: var(--gold); opacity: 1; }
          .sg-sidebar-promo { display: none; }
        }
        @media (max-width: 600px) {
          .sg-catalog-grid { grid-template-columns: repeat(2, 1fr); gap: 15px; }
          .sg-page-title { font-size: 4rem; }
        }
      `}</style>
    </section>
  );
};

export default ServicesGrid;
