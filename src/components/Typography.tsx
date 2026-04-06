import React from 'react';
import { motion } from 'framer-motion';

export const Typography: React.FC = () => (
  <section id="tipografia" style={{ padding: '120px 2rem', background: 'var(--em-beige)' }}>
    <div style={{ maxWidth: 1280, margin: '0 auto' }}>
      {/* Header */}
      <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
          <div style={{ height: 1, width: 40, background: 'var(--em-blue)' }} />
          <span style={{ fontFamily: 'var(--font-body)', fontSize: 12, fontWeight: 700, color: 'var(--em-blue)', textTransform: 'uppercase', letterSpacing: '0.15em' }}>
            02 · Tipografía
          </span>
        </div>
        <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(40px, 5vw, 72px)', fontWeight: 800, lineHeight: 1.05, marginBottom: 64, color: 'var(--em-black)' }}>
          Las fuentes<br /><span style={{ color: 'var(--em-blue)' }}>de la marca.</span>
        </h2>
      </motion.div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))', gap: 24 }}>

        {/* Poppins */}
        <motion.div
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          style={{ background: 'var(--em-blue)', borderRadius: 28, padding: '48px 40px', color: 'white' }}
        >
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 32 }}>
            <div>
              <div style={{ fontFamily: 'var(--font-body)', fontSize: 11, fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.5)', marginBottom: 6 }}>Tipografía Principal</div>
              <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 28, fontWeight: 700, color: 'white' }}>Poppins</h3>
            </div>
            <div style={{ background: 'rgba(255,255,255,0.1)', borderRadius: 12, padding: '6px 14px' }}>
              <span style={{ fontFamily: 'var(--font-body)', fontSize: 12, color: 'rgba(255,255,255,0.7)', fontWeight: 600 }}>Google Fonts</span>
            </div>
          </div>

          <div style={{ fontFamily: 'var(--font-display)', fontSize: 108, fontWeight: 900, lineHeight: 0.85, color: 'white', marginBottom: 32 }}>Aa</div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 12 }}>
            {[300, 400, 500, 600, 700, 800].map(w => (
              <div key={w} style={{ background: 'rgba(255,255,255,0.06)', borderRadius: 10, padding: '10px 14px' }}>
                <div style={{ fontFamily: 'var(--font-display)', fontWeight: w, fontSize: 22, color: 'white', lineHeight: 1 }}>Aa</div>
                <div style={{ fontFamily: 'var(--font-body)', fontSize: 10, color: 'rgba(255,255,255,0.45)', marginTop: 4 }}>{w}</div>
              </div>
            ))}
          </div>

          <p style={{ fontFamily: 'var(--font-body)', fontSize: 12, color: 'rgba(255,255,255,0.5)', marginTop: 24, lineHeight: 1.6 }}>
            Uso: Titulares, subtítulos, botones, elementos de UI destacados.
          </p>
        </motion.div>

        {/* Open Sans */}
        <motion.div
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
          style={{ background: 'white', borderRadius: 28, padding: '48px 40px', border: '1px solid var(--em-gray-200)' }}
        >
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 32 }}>
            <div>
              <div style={{ fontFamily: 'var(--font-body)', fontSize: 11, fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--em-gray-400)', marginBottom: 6 }}>Tipografía de Texto</div>
              <h3 style={{ fontFamily: 'var(--font-body)', fontSize: 28, fontWeight: 700, color: 'var(--em-black)' }}>Open Sans</h3>
            </div>
            <div style={{ background: 'var(--em-beige)', borderRadius: 12, padding: '6px 14px' }}>
              <span style={{ fontFamily: 'var(--font-body)', fontSize: 12, color: 'var(--em-gray-600)', fontWeight: 600 }}>Google Fonts</span>
            </div>
          </div>

          <div style={{ fontFamily: 'var(--font-body)', fontSize: 108, fontWeight: 300, lineHeight: 0.85, color: 'var(--em-black)', marginBottom: 32 }}>Aa</div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 12 }}>
            {[300, 400, 500, 600, 700, 800].map(w => (
              <div key={w} style={{ background: 'var(--em-gray-100)', borderRadius: 10, padding: '10px 14px' }}>
                <div style={{ fontFamily: 'var(--font-body)', fontWeight: w, fontSize: 22, color: 'var(--em-black)', lineHeight: 1 }}>Aa</div>
                <div style={{ fontFamily: 'var(--font-body)', fontSize: 10, color: 'var(--em-gray-400)', marginTop: 4 }}>{w}</div>
              </div>
            ))}
          </div>

          <p style={{ fontFamily: 'var(--font-body)', fontSize: 12, color: 'var(--em-gray-400)', marginTop: 24, lineHeight: 1.6 }}>
            Uso: Párrafos, descripciones, labels, textos de interfaz corridos.
          </p>
        </motion.div>
      </div>

      {/* Type scale demo */}
      <motion.div
        initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
        style={{ background: 'white', borderRadius: 28, padding: '48px 40px', marginTop: 24, border: '1px solid var(--em-gray-200)' }}
      >
        <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 18, fontWeight: 700, color: 'var(--em-gray-400)', marginBottom: 32, textTransform: 'uppercase', letterSpacing: '0.1em' }}>Jerarquía Tipográfica</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 24, borderLeft: '2px solid var(--em-blue)', paddingLeft: 32 }}>
          {[
            { tag: 'H1', size: '72px', weight: 800, text: 'Electromorón — Materiales Eléctricos', font: 'display' },
            { tag: 'H2', size: '48px', weight: 700, text: 'Soluciones integrales para tu proyecto', font: 'display' },
            { tag: 'H3', size: '32px', weight: 600, text: 'Calidad, cercanía y asesoramiento real', font: 'display' },
            { tag: 'Body', size: '16px', weight: 400, text: 'Ayudamos a profesionales a encontrar soluciones integrales en electricidad y seguridad de manera práctica y confiable.', font: 'body' },
            { tag: 'Caption', size: '12px', weight: 600, text: 'MATERIALES ELÉCTRICOS · DESDE 1997', font: 'body' },
          ].map(({ tag, size, weight, text, font }) => (
            <div key={tag} style={{ display: 'flex', alignItems: 'baseline', gap: 20 }}>
              <span style={{ fontFamily: 'var(--font-body)', fontSize: 10, fontWeight: 700, color: 'var(--em-blue)', letterSpacing: '0.1em', minWidth: 52 }}>{tag} / {size}</span>
              <span style={{
                fontFamily: font === 'display' ? 'var(--font-display)' : 'var(--font-body)',
                fontSize: Math.min(parseInt(size), 36),
                fontWeight: weight,
                color: 'var(--em-black)',
                lineHeight: 1.2,
                letterSpacing: tag === 'Caption' ? '0.15em' : '-0.01em',
                textTransform: tag === 'Caption' ? 'uppercase' : 'none',
              }}>
                {text}
              </span>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  </section>
);
