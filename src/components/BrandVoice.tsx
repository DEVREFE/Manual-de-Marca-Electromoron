import React from 'react';
import { motion } from 'framer-motion';

const traits = [
  { label: 'Somos', items: ['Confiables', 'Profesionales', 'Cercanos', 'Atentos', 'Responsables', 'Claros', 'Transparentes', 'Prácticos', 'Empáticos'] },
  { label: 'No somos', items: ['Fríos', 'Distantes', 'Impersonales', 'Desinteresados', 'Prepotentes', 'Improvisados', 'Confusos', 'Inaccesibles'] },
];

const toneScales = [
  { left: 'Divertido', right: 'Serio', value: 70 },
  { left: 'Formal', right: 'Informal', value: 40 },
  { left: 'Respetuoso', right: 'Irreverente', value: 20 },
  { left: 'Entusiasta', right: 'Informativo', value: 55 },
  { left: 'Convencional', right: 'Disruptivo', value: 45 },
];

export const BrandVoice: React.FC = () => (
  <section id="tono" style={{ padding: '120px 2rem', background: 'var(--em-black)' }}>
    <div style={{ maxWidth: 1280, margin: '0 auto' }}>
      {/* Header */}
      <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
          <div style={{ height: 1, width: 40, background: 'var(--em-gold)' }} />
          <span style={{ fontFamily: 'var(--font-body)', fontSize: 12, fontWeight: 700, color: 'var(--em-gold)', textTransform: 'uppercase', letterSpacing: '0.15em' }}>
            05 · Tono de Voz
          </span>
        </div>
        <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(40px, 5vw, 72px)', fontWeight: 800, lineHeight: 1.05, color: 'white', marginBottom: 16 }}>
          Cómo hablamos<br /><span style={{ color: 'var(--em-gold)' }}>con el mundo.</span>
        </h2>
        <p style={{ fontFamily: 'var(--font-body)', fontSize: 16, color: 'rgba(255,255,255,0.45)', maxWidth: 520, lineHeight: 1.7, marginBottom: 64 }}>
          La voz de Electromorón es clara, directa y empática. Simplificamos lo técnico y acercamos la tecnología a cada persona.
        </p>
      </motion.div>

      {/* Main quote */}
      <motion.div
        initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
        style={{
          background: 'var(--em-blue)', borderRadius: 28, padding: '48px 48px',
          marginBottom: 24, position: 'relative', overflow: 'hidden',
        }}
      >
        <div style={{ position: 'absolute', top: -20, right: 40, fontFamily: 'var(--font-display)', fontSize: 200, fontWeight: 900, color: 'rgba(255,255,255,0.04)', lineHeight: 1, pointerEvents: 'none' }}>"</div>
        <div style={{ fontFamily: 'var(--font-body)', fontSize: 11, fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.5)', marginBottom: 20 }}>Tono de voz oficial</div>
        <p style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(20px, 3vw, 32px)', fontWeight: 300, color: 'white', lineHeight: 1.4, maxWidth: 800 }}>
          Hablaremos con la <strong style={{ fontWeight: 700 }}>seguridad de quienes saben lo que hacen</strong>, transmitiendo confianza y profesionalismo sin perder la cercanía.
        </p>
        <p style={{ fontFamily: 'var(--font-body)', fontSize: 16, color: 'rgba(255,255,255,0.6)', marginTop: 20, lineHeight: 1.6, maxWidth: 680 }}>
          Usaremos un lenguaje <strong style={{ color: 'white' }}>claro, directo y empático</strong> que simplifique lo técnico y acerque la tecnología a cada persona. Cada mensaje refleja experiencia, compromiso y servicio humano.
        </p>
        <div style={{ marginTop: 28, display: 'flex', gap: 12, flexWrap: 'wrap' }}>
          {['Claro', 'Fácil', 'Cercano', 'Confiable', 'Didáctico', 'Profesional sin rigidez'].map(t => (
            <span key={t} style={{
              background: 'rgba(255,255,255,0.12)', border: '1px solid rgba(255,255,255,0.15)',
              borderRadius: 100, padding: '6px 16px',
              fontFamily: 'var(--font-body)', fontSize: 12, fontWeight: 600, color: 'white',
            }}>{t}</span>
          ))}
        </div>
      </motion.div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: 16, marginBottom: 24 }}>
        {/* Somos / No somos */}
        {traits.map((t, i) => (
          <motion.div
            key={t.label}
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
            style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 24, padding: 32 }}
          >
            <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 18, fontWeight: 700, marginBottom: 20, color: i === 0 ? '#4ade80' : '#f87171' }}>{t.label}</h3>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
              {t.items.map(item => (
                <span key={item} style={{
                  background: i === 0 ? 'rgba(74,222,128,0.1)' : 'rgba(248,113,113,0.1)',
                  border: `1px solid ${i === 0 ? 'rgba(74,222,128,0.2)' : 'rgba(248,113,113,0.2)'}`,
                  borderRadius: 100, padding: '5px 14px',
                  fontFamily: 'var(--font-body)', fontSize: 12, fontWeight: 500,
                  color: i === 0 ? 'rgba(74,222,128,0.9)' : 'rgba(248,113,113,0.9)',
                }}>{item}</span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Tone scales */}
      <motion.div
        initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
        style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 24, padding: 40 }}
      >
        <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 20, fontWeight: 700, color: 'white', marginBottom: 32 }}>Dimensiones del tono</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
          {toneScales.map(s => (
            <div key={s.left}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 8 }}>
                <span style={{ fontFamily: 'var(--font-body)', fontSize: 13, color: 'rgba(255,255,255,0.7)', fontWeight: 600 }}>{s.left}</span>
                <span style={{ fontFamily: 'var(--font-body)', fontSize: 13, color: 'rgba(255,255,255,0.7)', fontWeight: 600 }}>{s.right}</span>
              </div>
              <div style={{ height: 4, background: 'rgba(255,255,255,0.1)', borderRadius: 4, position: 'relative' }}>
                <div style={{ position: 'absolute', left: `calc(${s.value}% - 10px)`, top: '50%', transform: 'translateY(-50%)', width: 20, height: 20, borderRadius: '50%', background: 'var(--em-blue)', border: '3px solid white', boxShadow: '0 0 0 3px rgba(12,77,174,0.3)' }} />
                <div style={{ height: '100%', width: `${s.value}%`, background: 'linear-gradient(90deg, var(--em-blue), rgba(12,77,174,0.3))', borderRadius: 4 }} />
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  </section>
);
