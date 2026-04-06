import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, Copy } from 'lucide-react';

const colors = [
  { name: 'Azul Principal', hex: '#0c4dae', label: 'Azul', usage: '30%', desc: 'Color dominante. Fondos, botones, elementos principales.', light: false },
  { name: 'Azul Oscuro', hex: '#0c2067', label: 'Azul Oscuro', usage: '6%', desc: 'Fondos de alto contraste, textos sobre azul.', light: false },
  { name: 'Gris Claro', hex: '#f1ece1', label: 'Beige/Gris Claro', usage: '30%', desc: 'Fondos neutros, secciones de descanso visual.', light: true },
  { name: 'Blanco', hex: '#ffffff', label: 'Blanco', usage: '20%', desc: 'Fondos base, texto sobre colores oscuros.', light: true, border: true },
  { name: 'Negro', hex: '#202020', label: 'Negro/Gris Oscuro', usage: '2%', desc: 'Texto principal, elementos de alto contraste.', light: false },
  { name: 'Oro', hex: '#c89116', label: 'Oro', usage: '2%', desc: 'Acento especial. Usar con moderación para highlights.', light: false },
];

const ColorCard: React.FC<typeof colors[0]> = ({ name, hex, label, usage, desc, light, border }) => {
  const [copied, setCopied] = useState(false);
  const copy = () => {
    navigator.clipboard.writeText(hex);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -4 }}
      transition={{ duration: 0.5 }}
      style={{
        borderRadius: 24, overflow: 'hidden',
        boxShadow: '0 8px 40px rgba(12,77,174,0.08)',
        border: border ? '1px solid #e5e5e5' : 'none',
        cursor: 'pointer',
      }}
      onClick={copy}
    >
      {/* Swatch */}
      <div style={{
        background: hex,
        height: 140,
        display: 'flex', alignItems: 'flex-end', justifyContent: 'flex-end',
        padding: 12,
      }}>
        <div style={{
          background: light ? 'rgba(0,0,0,0.08)' : 'rgba(255,255,255,0.15)',
          borderRadius: 8, padding: '4px 10px',
          display: 'flex', alignItems: 'center', gap: 6,
        }}>
          {copied
            ? <Check size={12} color={light ? '#333' : 'white'} />
            : <Copy size={12} color={light ? '#333' : 'white'} />
          }
          <span style={{ fontFamily: 'var(--font-body)', fontSize: 11, fontWeight: 600, color: light ? '#333' : 'white' }}>
            {copied ? 'Copiado!' : hex.toUpperCase()}
          </span>
        </div>
      </div>

      {/* Info */}
      <div style={{ background: 'white', padding: '16px 20px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 6 }}>
          <span style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 14, color: 'var(--em-black)' }}>{name}</span>
          <span style={{
            background: 'var(--em-beige)', borderRadius: 100, padding: '2px 10px',
            fontFamily: 'var(--font-body)', fontSize: 11, fontWeight: 600, color: 'var(--em-gray-600)'
          }}>{usage}</span>
        </div>
        <p style={{ fontFamily: 'var(--font-body)', fontSize: 12, color: 'var(--em-gray-400)', lineHeight: 1.5 }}>{desc}</p>
      </div>
    </motion.div>
  );
};

export const ColorPalette: React.FC = () => (
  <section id="paleta" style={{ padding: '120px 2rem', background: 'var(--em-white)' }}>
    <div style={{ maxWidth: 1280, margin: '0 auto' }}>
      {/* Header */}
      <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
          <div style={{ height: 1, width: 40, background: 'var(--em-blue)' }} />
          <span style={{ fontFamily: 'var(--font-body)', fontSize: 12, fontWeight: 700, color: 'var(--em-blue)', textTransform: 'uppercase', letterSpacing: '0.15em' }}>
            01 · Identidad Visual
          </span>
        </div>
        <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(40px, 5vw, 72px)', fontWeight: 800, color: 'var(--em-black)', lineHeight: 1.05, marginBottom: 16 }}>
          Paleta de<br />
          <span style={{ color: 'var(--em-blue)' }}>Colores</span>
        </h2>
        <p style={{ fontFamily: 'var(--font-body)', fontSize: 16, color: 'var(--em-gray-400)', maxWidth: 520, lineHeight: 1.7, marginBottom: 64 }}>
          Los colores oficiales de Electromorón. Hacé clic en cada tarjeta para copiar el código HEX.
        </p>
      </motion.div>

      {/* Grid */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
        gap: 20,
      }}>
        {colors.map(c => <ColorCard key={c.hex} {...c} />)}
      </div>

      {/* Usage box */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        style={{
          marginTop: 48,
          background: 'var(--em-blue)',
          borderRadius: 24, padding: '32px 40px',
          display: 'flex', gap: 40, flexWrap: 'wrap', alignItems: 'center',
        }}
      >
        <div>
          <h3 style={{ fontFamily: 'var(--font-display)', color: 'white', fontWeight: 700, fontSize: 20, marginBottom: 8 }}>Proporción de uso</h3>
          <p style={{ fontFamily: 'var(--font-body)', color: 'rgba(255,255,255,0.65)', fontSize: 14, lineHeight: 1.6 }}>
            Azul 30% · Gris Claro 30% · Blanco 20% · Azul Oscuro 6% · Oro 2% · Negro 2%
          </p>
        </div>
        <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
          {[['#0c4dae','30%'], ['#f1ece1','30%'], ['#ffffff','20%'], ['#0c2067','6%'], ['#c89116','2%'], ['#202020','2%']].map(([c, p]) => (
            <div key={c} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6 }}>
              <div style={{ width: 40, height: 40, borderRadius: 10, background: c, border: c === '#ffffff' ? '1px solid rgba(255,255,255,0.3)' : 'none' }} />
              <span style={{ color: 'rgba(255,255,255,0.7)', fontSize: 11, fontFamily: 'var(--font-body)', fontWeight: 600 }}>{p}</span>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  </section>
);
