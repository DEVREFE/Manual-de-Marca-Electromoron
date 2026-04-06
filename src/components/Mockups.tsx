import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ZoomIn } from 'lucide-react';

// 17 ads from Ads Electromorón
const ads = [
  { src: '/assets/ads/ad1.png',  tag: 'Social Ad', label: 'Pieza 01' },
  { src: '/assets/ads/ad2.png',  tag: 'Social Ad', label: 'Pieza 02' },
  { src: '/assets/ads/ad3.png',  tag: 'Campaña',   label: 'Pieza 03' },
  { src: '/assets/ads/ad4.png',  tag: 'Social Ad', label: 'Pieza 04' },
  { src: '/assets/ads/ad5.png',  tag: 'Campaña',   label: 'Pieza 05' },
  { src: '/assets/ads/ad6.png',  tag: 'Social Ad', label: 'Pieza 06' },
  { src: '/assets/ads/ad7.png',  tag: 'Social Ad', label: 'Pieza 07' },
  { src: '/assets/ads/ad8.png',  tag: 'Campaña',   label: 'Pieza 08' },
  { src: '/assets/ads/ad9.jpg',  tag: 'Social Ad', label: 'Pieza 09' },
  { src: '/assets/ads/ad10.png', tag: 'Campaña',   label: 'Pieza 10' },
  { src: '/assets/ads/ad11.png', tag: 'Social Ad', label: 'Pieza 11' },
  { src: '/assets/ads/ad12.png', tag: 'Campaña',   label: 'Pieza 12' },
  { src: '/assets/ads/ad13.png', tag: 'Social Ad', label: 'Pieza 13' },
  { src: '/assets/ads/ad14.png', tag: 'Campaña',   label: 'Pieza 14' },
  { src: '/assets/ads/ad15.png', tag: 'Social Ad', label: 'Pieza 15' },
  { src: '/assets/ads/ad16.png', tag: 'Campaña',   label: 'Pieza 16' },
  { src: '/assets/ads/ad17.png', tag: 'Social Ad', label: 'Pieza 17' },
];

const tagColors: Record<string, string> = {
  'Social Ad': 'rgba(96,165,250,0.2)',
  'Campaña':   'rgba(200,145,22,0.2)',
};

const tagBorder: Record<string, string> = {
  'Social Ad': 'rgba(96,165,250,0.4)',
  'Campaña':   'rgba(200,145,22,0.4)',
};

const tagText: Record<string, string> = {
  'Social Ad': '#93c5fd',
  'Campaña':   '#c89116',
};

export const Mockups: React.FC = () => {
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <section id="mockups" style={{ padding: '120px 2rem', background: 'var(--em-beige)' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>

        {/* Header */}
        <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
            <div style={{ height: 1, width: 40, background: 'var(--em-blue)' }} />
            <span style={{ fontFamily: 'var(--font-body)', fontSize: 12, fontWeight: 700, color: 'var(--em-blue)', textTransform: 'uppercase', letterSpacing: '0.15em' }}>
              07 · Look & Feel
            </span>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 64, flexWrap: 'wrap', gap: 24 }}>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(40px, 5vw, 72px)', fontWeight: 800, lineHeight: 1.05, color: 'var(--em-black)' }}>
              La marca<br /><span style={{ color: 'var(--em-blue)' }}>en acción.</span>
            </h2>
            <div style={{ background: 'var(--em-blue)', color: 'white', borderRadius: 16, padding: '16px 24px', maxWidth: 340 }}>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: 13, lineHeight: 1.6 }}>
                <strong style={{ fontFamily: 'var(--font-display)' }}>Galería de campaña:</strong><br />
                Estas piezas muestran cómo el sistema visual de Electromorón se aplica en comunicaciones reales de redes sociales y publicidad digital.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          style={{ display: 'flex', gap: 16, marginBottom: 48, flexWrap: 'wrap' }}
        >
          {[
            { n: '17', label: 'Piezas producidas' },
            { n: '2', label: 'Productos clave' },
            { n: '100%', label: 'Sistema visual aplicado' },
          ].map(s => (
            <div key={s.label} style={{
              background: 'white', borderRadius: 16, padding: '16px 28px',
              border: '1px solid var(--em-gray-200)',
              display: 'flex', alignItems: 'center', gap: 16,
            }}>
              <span style={{ fontFamily: 'var(--font-display)', fontSize: 32, fontWeight: 800, color: 'var(--em-blue)' }}>{s.n}</span>
              <span style={{ fontFamily: 'var(--font-body)', fontSize: 13, color: 'var(--em-gray-400)', maxWidth: 100, lineHeight: 1.4 }}>{s.label}</span>
            </div>
          ))}
        </motion.div>

        {/* Masonry-style grid */}
        <div style={{
          columns: 'auto 260px',
          columnGap: 16,
          orphans: 1, widows: 1,
        }}>
          {ads.map((ad, i) => (
            <motion.div
              key={ad.src}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: (i % 4) * 0.07 }}
              onClick={() => setSelected(i)}
              style={{
                breakInside: 'avoid',
                marginBottom: 16,
                borderRadius: 20, overflow: 'hidden',
                position: 'relative', cursor: 'pointer',
                boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
                display: 'block',
              }}
              whileHover={{ scale: 1.015, y: -4 }}
            >
              <img src={ad.src} alt={ad.label} style={{ width: '100%', display: 'block' }} />
              <div style={{
                position: 'absolute', inset: 0,
                background: 'linear-gradient(to top, rgba(0,0,0,0.65) 0%, transparent 50%)',
                opacity: 0, transition: 'opacity 0.3s',
              }}
                className="ad-overlay"
              />
              {/* Footer info */}
              <div style={{
                position: 'absolute', bottom: 0, left: 0, right: 0,
                padding: '16px 16px 14px',
                background: 'linear-gradient(to top, rgba(0,0,0,0.75), transparent)',
                display: 'flex', justifyContent: 'space-between', alignItems: 'center',
              }}>
                <span style={{ fontFamily: 'var(--font-display)', fontSize: 12, fontWeight: 600, color: 'white' }}>{ad.label}</span>
                <span style={{
                  fontFamily: 'var(--font-body)', fontSize: 10, fontWeight: 700,
                  background: tagColors[ad.tag], border: `1px solid ${tagBorder[ad.tag]}`,
                  color: tagText[ad.tag], borderRadius: 100, padding: '3px 10px',
                }}>{ad.tag}</span>
              </div>
              {/* Zoom icon */}
              <div style={{
                position: 'absolute', top: 12, right: 12,
                background: 'rgba(0,0,0,0.4)', borderRadius: '50%',
                width: 32, height: 32, display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}>
                <ZoomIn size={14} color="white" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Lightbox */}
        <AnimatePresence>
          {selected !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelected(null)}
              style={{
                position: 'fixed', inset: 0, zIndex: 1000,
                background: 'rgba(0,0,0,0.9)', backdropFilter: 'blur(12px)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                padding: '2rem',
              }}
            >
              <motion.div
                initial={{ scale: 0.85, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.85, opacity: 0 }}
                onClick={e => e.stopPropagation()}
                style={{ maxWidth: 900, width: '100%', position: 'relative' }}
              >
                <img
                  src={ads[selected].src}
                  alt={ads[selected].label}
                  style={{ width: '100%', borderRadius: 24, display: 'block', maxHeight: '80vh', objectFit: 'contain' }}
                />
                <div style={{
                  marginTop: 16, display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                }}>
                  <div>
                    <span style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 16, color: 'white' }}>{ads[selected].label}</span>
                    <span style={{
                      marginLeft: 12, fontFamily: 'var(--font-body)', fontSize: 11, fontWeight: 700,
                      background: tagColors[ads[selected].tag], border: `1px solid ${tagBorder[ads[selected].tag]}`,
                      color: tagText[ads[selected].tag], borderRadius: 100, padding: '3px 12px',
                    }}>{ads[selected].tag}</span>
                  </div>
                  <div style={{ display: 'flex', gap: 8 }}>
                    <button
                      onClick={() => setSelected(i => i! === 0 ? ads.length - 1 : i! - 1)}
                      style={{ background: 'rgba(255,255,255,0.1)', border: 'none', borderRadius: 100, padding: '8px 18px', color: 'white', cursor: 'pointer', fontFamily: 'var(--font-body)', fontSize: 13 }}
                    >← Anterior</button>
                    <button
                      onClick={() => setSelected(i => i! === ads.length - 1 ? 0 : i! + 1)}
                      style={{ background: 'rgba(255,255,255,0.1)', border: 'none', borderRadius: 100, padding: '8px 18px', color: 'white', cursor: 'pointer', fontFamily: 'var(--font-body)', fontSize: 13 }}
                    >Siguiente →</button>
                  </div>
                </div>
                <button
                  onClick={() => setSelected(null)}
                  style={{
                    position: 'absolute', top: -16, right: -16,
                    width: 40, height: 40, borderRadius: '50%',
                    background: 'white', border: 'none', cursor: 'pointer',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    boxShadow: '0 4px 16px rgba(0,0,0,0.3)',
                  }}
                >
                  <X size={18} color="#202020" />
                </button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
};
