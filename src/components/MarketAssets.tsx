import React from 'react';
import { motion } from 'framer-motion';
import { Play } from 'lucide-react';

// ─── Banners del carrusel web (todos juntos, no carousel) ───
const carruselBanners = [
  {
    src: '/assets/banners/carrusel/carrusel1-blank.png',
    titulo: '/assets/banners/carrusel/titulo1.png',
    label: '10% OFF en toda la web',
    tag: 'Descuentos',
    titlePos: 'right',
  },
  {
    src: '/assets/banners/carrusel/carrusel2.png',
    titulo: '/assets/banners/carrusel/titulo2.png',
    label: '6 cuotas sin interés',
    tag: 'Financiación',
    titlePos: 'left',
  },
  {
    src: '/assets/banners/carrusel/carrusel3.png',
    titulo: '/assets/banners/carrusel/titulo3.png',
    label: 'Nueva tienda online',
    tag: 'Lanzamiento',
    titlePos: 'left',
  },
  {
    src: '/assets/banners/carrusel/carrusel4.png',
    titulo: '/assets/banners/carrusel/titulo4.png',
    label: 'Envíos en el día',
    tag: 'Logística',
    titlePos: 'right',
  },
];

// ─── Campañas de producto con el banner completo ───
const campaigns = [
  {
    title: 'Campaña Alarmas',
    subtitle: 'Seguridad del Hogar',
    tag: 'Banner Web Grande',
    bg: '#0a0f2e',
    bannerSrc: '/assets/banners/alarmas/banner-alarmas.png',
    mockupSrc: '/assets/banners/alarmas/alarmas-mockup.png',
    tituloSrc: '/assets/banners/alarmas/alarmas-texto.png',
    logoSrc: '/assets/banners/alarmas/alarmas-logo.png',
    desc: 'Comunicación de alarmas y dispositivos de seguridad del hogar. Paleta oscura + azul oficial para transmitir confianza y tecnología.',
  },
  {
    title: 'Campaña Cámaras',
    subtitle: 'Monitoreo Inteligente',
    tag: 'Banner Web Grande',
    bg: '#1a1a2e',
    bannerSrc: '/assets/banners/camaras/banner-camaras.png',
    mockupSrc: '/assets/banners/camaras/camaras-mockup.png',
    tituloSrc: '/assets/banners/camaras/titulo-camaras.png',
    logoSrc: '/assets/banners/camaras/logos-camaras.png',
    desc: 'Línea de cámaras IP y vigilancia inteligente. Enfocada en el segmento Smart Home con marcas aliadas.',
  },
];

// Utility: sección label
const SectionLabel = ({ number, label, dark = false }: { number: string; label: string; dark?: boolean }) => (
  <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
    <div style={{ height: 1, width: 40, background: dark ? 'var(--em-gold)' : 'var(--em-blue)' }} />
    <span style={{
      fontFamily: 'var(--font-body)', fontSize: 12, fontWeight: 700,
      color: dark ? 'var(--em-gold)' : 'var(--em-blue)',
      textTransform: 'uppercase', letterSpacing: '0.15em',
    }}>
      {number} · {label}
    </span>
  </div>
);

const Tag = ({ label, dark = false }: { label: string; dark?: boolean }) => (
  <span style={{
    fontFamily: 'var(--font-body)', fontSize: 10, fontWeight: 700,
    border: `1px solid ${dark ? 'rgba(200,145,22,0.45)' : 'rgba(12,77,174,0.25)'}`,
    borderRadius: 100, padding: '3px 12px',
    color: dark ? 'var(--em-gold)' : 'var(--em-blue)',
    background: dark ? 'rgba(200,145,22,0.07)' : 'rgba(12,77,174,0.05)',
    whiteSpace: 'nowrap' as const,
  }}>
    {label}
  </span>
);

export const MarketAssets: React.FC = () => (
  <section id="piezas" style={{ padding: '120px 2rem', background: 'var(--em-black)' }}>
    <div style={{ maxWidth: 1280, margin: '0 auto' }}>

      {/* ── HEADER ── */}
      <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
        <SectionLabel number="06" label="Piezas de Mercado" dark />
        <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(40px, 5vw, 72px)', fontWeight: 800, lineHeight: 1.05, color: 'white', marginBottom: 16 }}>
          Salida al<br /><span style={{ color: 'var(--em-gold)' }}>mercado.</span>
        </h2>
        <p style={{ fontFamily: 'var(--font-body)', fontSize: 16, color: 'rgba(255,255,255,0.45)', maxWidth: 560, lineHeight: 1.7, marginBottom: 80 }}>
          Piezas diseñadas para la presencia digital de Electromorón: banners de carrusel, campañas de producto y categorías de shop. Cada pieza aplica el sistema visual con coherencia y propósito.
        </p>
      </motion.div>

      {/* ══════════════════════════════════════════
          01 — CARRUSEL WEB (grid de 4, sin carousel)
      ══════════════════════════════════════════ */}
      <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} style={{ marginBottom: 80 }}>
        <div style={{ display: 'flex', alignItems: 'baseline', gap: 16, marginBottom: 28 }}>
          <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 22, fontWeight: 700, color: 'white' }}>
            Banners de Carrusel Web
          </h3>
          <span style={{ fontFamily: 'var(--font-body)', fontSize: 12, color: 'rgba(255,255,255,0.35)' }}>
            Slider principal de la tienda — 4 piezas
          </span>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(560px, 1fr))', gap: 16 }}>
          {carruselBanners.map((b, i) => (
            <motion.div
              key={b.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              style={{ borderRadius: 20, overflow: 'hidden', background: '#0a0f1e' }}
            >
              <img src={b.src} alt={b.label} style={{ width: '100%', display: 'block', objectFit: 'cover', maxHeight: 260 }} />
              <div style={{ padding: '14px 20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 12 }}>
                <span style={{ fontFamily: 'var(--font-body)', fontSize: 13, color: 'rgba(255,255,255,0.85)', fontWeight: 500 }}>
                  {b.label}
                </span>
                <Tag label={b.tag} dark />
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* ══════════════════════════════════════════
          02 — CAMPAÑAS DE PRODUCTO
      ══════════════════════════════════════════ */}
      <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} style={{ marginBottom: 80 }}>
        <div style={{ display: 'flex', alignItems: 'baseline', gap: 16, marginBottom: 28 }}>
          <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 22, fontWeight: 700, color: 'white' }}>
            Campañas de Producto
          </h3>
          <span style={{ fontFamily: 'var(--font-body)', fontSize: 12, color: 'rgba(255,255,255,0.35)' }}>
            Alarmas y Cámaras — sistema de seguridad
          </span>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 40 }}>
          {campaigns.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              style={{
                borderRadius: 24, overflow: 'hidden',
                background: c.bg,
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              {/* Top — Banner principal completo simulando ser un Video */}
              <div 
                style={{ position: 'relative', width: '100%', cursor: 'pointer' }} 
                onMouseEnter={e => {
                  (e.currentTarget.lastChild as HTMLElement).style.background = 'rgba(0,0,0,0.4)';
                  ((e.currentTarget.lastChild as HTMLElement).firstChild as HTMLElement).style.transform = 'scale(1.1)';
                  ((e.currentTarget.lastChild as HTMLElement).firstChild as HTMLElement).style.background = 'var(--em-blue)';
                  ((e.currentTarget.lastChild as HTMLElement).firstChild as HTMLElement).style.border = '2px solid transparent';
                }}
                onMouseLeave={e => {
                  (e.currentTarget.lastChild as HTMLElement).style.background = 'transparent';
                  ((e.currentTarget.lastChild as HTMLElement).firstChild as HTMLElement).style.transform = 'scale(1)';
                  ((e.currentTarget.lastChild as HTMLElement).firstChild as HTMLElement).style.background = 'rgba(255,255,255,0.15)';
                  ((e.currentTarget.lastChild as HTMLElement).firstChild as HTMLElement).style.border = '2px solid rgba(255,255,255,0.4)';
                }}
              >
                <img
                  src={c.bannerSrc}
                  alt={c.title}
                  style={{ width: '100%', display: 'block', objectFit: 'contain' }}
                />
                
                {/* Overlay del botón Play */}
                <div style={{
                  position: 'absolute', inset: 0, 
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  background: 'transparent',
                  transition: 'all 0.3s'
                }}>
                  <div style={{
                    width: 72, height: 72, borderRadius: '50%',
                    background: 'rgba(255,255,255,0.15)', backdropFilter: 'blur(10px)',
                    border: '2px solid rgba(255,255,255,0.4)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    transition: 'all 0.3s ease-out',
                  }}>
                    <Play size={28} fill="white" color="white" style={{ marginLeft: 6 }} />
                  </div>
                </div>
              </div>

              {/* Bottom — Info + elementos + mockup */}
              <div style={{ padding: '36px 40px', display: 'flex', flexWrap: 'wrap', gap: 32, justifyContent: 'space-between' }}>
                <div style={{ flex: '1 1 300px', maxWidth: 500 }}>
                  <Tag label={c.tag} dark />
                  <h4 style={{ fontFamily: 'var(--font-display)', fontSize: 26, fontWeight: 800, color: 'white', marginTop: 14, marginBottom: 6, lineHeight: 1.15 }}>
                    {c.title}
                  </h4>
                  <p style={{ fontFamily: 'var(--font-display)', fontSize: 14, fontWeight: 300, color: 'rgba(255,255,255,0.5)', marginBottom: 16 }}>
                    {c.subtitle}
                  </p>
                  <p style={{ fontFamily: 'var(--font-body)', fontSize: 13, color: 'rgba(255,255,255,0.55)', lineHeight: 1.65, marginBottom: 24 }}>
                    {c.desc}
                  </p>
                  
                  <span style={{ display: 'block', fontFamily: 'var(--font-body)', fontSize: 10, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'rgba(255,255,255,0.3)', marginBottom: 12 }}>
                    Elementos de la campaña
                  </span>
                  <div style={{ display: 'flex', gap: 12, alignItems: 'stretch' }}>
                    <div style={{ background: 'rgba(255,255,255,0.07)', borderRadius: 12, padding: '10px 14px', border: '1px solid rgba(255,255,255,0.1)' }}>
                      <div style={{ fontFamily: 'var(--font-body)', fontSize: 9, color: 'rgba(255,255,255,0.3)', marginBottom: 6, textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                        Texto / Titular
                      </div>
                      <img src={c.tituloSrc} alt="Título campaña" style={{ height: 22, objectFit: 'contain', filter: 'brightness(0) invert(1)', display: 'block' }} />
                    </div>
                    <div style={{ background: 'rgba(255,255,255,0.07)', borderRadius: 12, padding: '10px 14px', border: '1px solid rgba(255,255,255,0.1)' }}>
                      <div style={{ fontFamily: 'var(--font-body)', fontSize: 9, color: 'rgba(255,255,255,0.3)', marginBottom: 6, textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                        Marcas asociadas
                      </div>
                      <img src={c.logoSrc} alt="Logos" style={{ height: 22, objectFit: 'contain', display: 'block' }} />
                    </div>
                  </div>
                </div>

                {/* Mockup en contexto thumbnail */}
                <div style={{ flex: '1 1 300px', display: 'flex', flexDirection: 'column', borderRadius: 16, overflow: 'hidden', border: '1px solid rgba(255,255,255,0.1)' }}>
                  <div style={{ background: 'rgba(255,255,255,0.05)', fontFamily: 'var(--font-body)', fontSize: 10, fontWeight: 700, color: 'rgba(255,255,255,0.5)', padding: '12px 16px', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                    Mockup en contexto
                  </div>
                  <img
                    src={c.mockupSrc}
                    alt="Mockup"
                    style={{ width: '100%', height: '100%', display: 'block', objectFit: 'cover', minHeight: 180 }}
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

    </div>
  </section>
);
