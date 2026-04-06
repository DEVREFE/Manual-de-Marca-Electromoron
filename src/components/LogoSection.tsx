import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Download, Shield, Minimize2, Maximize2 } from 'lucide-react';

// Base SVGs for vector masks
const maskPaths = {
  horizontal: 'Logo svg blanco horizontal 1.svg',
  vertical: 'logo-vertical-azul.svg',
  isotipo: 'Recurso 7.svg'
};

const logos = [
  { name: 'Horizontal Azul', type: 'horizontal', color: 'var(--em-blue)', bg: '#ffffff', border: true },
  { name: 'Horizontal Blanco', type: 'horizontal', color: '#ffffff', bg: 'var(--em-blue)', border: false },
  { name: 'Vertical Azul', type: 'vertical', color: 'var(--em-blue)', bg: 'var(--em-beige)', border: false },
  { name: 'Vertical Blanco', type: 'vertical', color: '#ffffff', bg: '#202020', border: false },
  { name: 'Gris Beige', type: 'horizontal', color: '#857764', bg: '#ffffff', border: true },
  { name: 'Isotipo Blanco', type: 'isotipo', color: '#ffffff', bg: 'var(--em-blue)', border: false },
] as const;

const usageRules = [
  { icon: '✅', label: 'Fondo azul oficial', ok: true },
  { icon: '✅', label: 'Fondo blanco o beige', ok: true },
  { icon: '✅', label: 'Fondo negro o gris oscuro', ok: true },
  { icon: '❌', label: 'Fondo de color no aprobado', ok: false },
  { icon: '❌', label: 'Estirar o deformar el logo', ok: false },
  { icon: '❌', label: 'Cambiar los colores del logo', ok: false },
  { icon: '❌', label: 'Aplicar efectos o sombras', ok: false },
  { icon: '❌', label: 'Versión outline no aprobada', ok: false },
];

const minSizes = [
  { media: 'Web', min: '120px', rec: '180px', icon: '🖥' },
  { media: 'Redes sociales (horizontal)', min: '200px', rec: '300px', icon: '📱' },
  { media: 'Impresión', min: '30mm', rec: '50mm', icon: '🖨' },
  { media: 'Isotipo solo', min: '24px', rec: '40px', icon: '🔷' },
];

export const LogoSection: React.FC = () => {
  const basePath = '/assets/logos/electromoron/';

  return (
    <section id="logo" style={{ padding: '120px 2rem', background: 'var(--em-white)' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        {/* Header */}
        <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
            <div style={{ height: 1, width: 40, background: 'var(--em-blue)' }} />
            <span style={{ fontFamily: 'var(--font-body)', fontSize: 12, fontWeight: 700, color: 'var(--em-blue)', textTransform: 'uppercase', letterSpacing: '0.15em' }}>
              03 · Logotipo
            </span>
          </div>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(40px, 5vw, 72px)', fontWeight: 800, lineHeight: 1.05, marginBottom: 16, color: 'var(--em-black)' }}>
            Variantes<br /><span style={{ color: 'var(--em-blue)' }}>del Logo</span>
          </h2>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: 16, color: 'var(--em-gray-400)', maxWidth: 520, lineHeight: 1.7, marginBottom: 64 }}>
            Cada versión está diseñada para contextos específicos. Usá siempre el archivo original provisto, nunca recrees el logo manualmente.
          </p>
        </motion.div>

        {/* Logo grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: 16, marginBottom: 64 }}>
          {logos.map((logo, i) => {
            const svgFile = maskPaths[logo.type];
            return (
              <motion.div
                key={logo.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07 }}
              whileHover={{ y: -4 }}
              style={{
                borderRadius: 24, overflow: 'hidden',
                boxShadow: '0 4px 24px rgba(0,0,0,0.06)',
                border: logo.border ? '1px solid var(--em-gray-200)' : 'none',
              }}
            >
              <div style={{
                background: logo.bg,
                height: 180,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                padding: 32,
              }}>
                <div style={{
                  width: '100%', height: '100%',
                  maskImage: `url('${basePath}${svgFile}')`,
                  WebkitMaskImage: `url('${basePath}${svgFile}')`,
                  maskSize: 'contain',
                  WebkitMaskSize: 'contain',
                  maskRepeat: 'no-repeat',
                  WebkitMaskRepeat: 'no-repeat',
                  maskPosition: 'center',
                  WebkitMaskPosition: 'center',
                  backgroundColor: logo.color,
                }} />
              </div>
              <div style={{
                background: 'white', padding: '14px 20px',
                display: 'flex', justifyContent: 'space-between', alignItems: 'center'
              }}>
                <span style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 13, color: 'var(--em-black)' }}>{logo.name}</span>
                <a
                  href={`${basePath}${svgFile}`}
                  download
                  onClick={e => e.stopPropagation()}
                  style={{
                    display: 'flex', alignItems: 'center', gap: 6,
                    background: 'var(--em-blue)', color: 'white',
                    padding: '6px 14px', borderRadius: 100,
                    textDecoration: 'none',
                    fontFamily: 'var(--font-body)', fontSize: 11, fontWeight: 600,
                  }}
                >
                  <Download size={12} />
                  Descargar
                </a>
              </div>
            </motion.div>
            );
          })}
        </div>

        {/* === ZONA DE PROTECCIÓN === */}
        <motion.div
          initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          style={{ marginBottom: 48 }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 24 }}>
            <Shield size={20} color="var(--em-blue)" />
            <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 22, fontWeight: 700, color: 'var(--em-black)' }}>
              Zona de Protección
            </h3>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: 20 }}>
            <div style={{ background: 'var(--em-beige)', borderRadius: 24, padding: 36 }}>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: 14, color: 'var(--em-gray-600)', lineHeight: 1.7, marginBottom: 24 }}>
                El logo debe tener siempre un espacio mínimo de protección a su alrededor. Ese espacio equivale a la<strong> altura de la "E" del isotipo</strong>. Ningún elemento gráfico, texto o borde puede invadir esa área.
              </p>
              {/* Visual zona de protección */}
              <div style={{ background: 'white', borderRadius: 16, padding: 24, border: '1px solid var(--em-gray-200)' }}>
                <div style={{
                  border: '2px dashed rgba(200,145,22,0.5)',
                  borderRadius: 12,
                  padding: 28,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  position: 'relative',
                }}>
                  <div style={{
                    minWidth: 200, height: 100,
                    width: '70%',
                    maskImage: `url('${basePath}${maskPaths.horizontal}')`,
                    WebkitMaskImage: `url('${basePath}${maskPaths.horizontal}')`,
                    maskSize: 'contain',
                    WebkitMaskSize: 'contain',
                    maskRepeat: 'no-repeat',
                    WebkitMaskRepeat: 'no-repeat',
                    maskPosition: 'center',
                    WebkitMaskPosition: 'center',
                    backgroundColor: 'var(--em-blue)',
                  }} />
                  {/* Labels */}
                  <div style={{ position: 'absolute', top: 4, left: '50%', transform: 'translateX(-50%)', fontFamily: 'var(--font-body)', fontSize: 10, color: 'var(--em-gold)', fontWeight: 700 }}>↕ x</div>
                  <div style={{ position: 'absolute', left: 4, top: '50%', transform: 'translateY(-50%)', fontFamily: 'var(--font-body)', fontSize: 10, color: 'var(--em-gold)', fontWeight: 700, writingMode: 'vertical-rl' }}>x</div>
                </div>
                <p style={{ fontFamily: 'var(--font-body)', fontSize: 11, color: 'var(--em-gray-400)', marginTop: 12, textAlign: 'center' }}>
                  La zona "x" = altura de la "E" del isotipo
                </p>
              </div>
            </div>

            {/* Tamaños mínimos */}
            <div style={{ background: '#f8f8f7', borderRadius: 24, padding: 36, border: '1px solid var(--em-gray-200)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 20 }}>
                <Minimize2 size={18} color="var(--em-blue)" />
                <h4 style={{ fontFamily: 'var(--font-display)', fontSize: 16, fontWeight: 700, color: 'var(--em-black)' }}>Tamaños mínimos recomendados</h4>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                {minSizes.map(s => (
                  <div key={s.media} style={{
                    background: 'white', borderRadius: 14, padding: '14px 18px',
                    display: 'flex', alignItems: 'center', gap: 16,
                    border: '1px solid var(--em-gray-200)',
                  }}>
                    <span style={{ fontSize: 20 }}>{s.icon}</span>
                    <div style={{ flex: 1 }}>
                      <div style={{ fontFamily: 'var(--font-display)', fontSize: 13, fontWeight: 600, color: 'var(--em-black)', marginBottom: 2 }}>{s.media}</div>
                      <div style={{ fontFamily: 'var(--font-body)', fontSize: 12, color: 'var(--em-gray-400)' }}>
                        Mín: <strong style={{ color: 'var(--em-black)' }}>{s.min}</strong>
                        <span style={{ margin: '0 8px', color: 'var(--em-gray-200)' }}>|</span>
                        Recomendado: <strong style={{ color: 'var(--em-blue)' }}>{s.rec}</strong>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* === ISOTIPO STANDALONE === */}
        <motion.div
          className="animate-gradient"
          initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          style={{
            background: 'linear-gradient(135deg, #010b1a 0%, #0c2067 50%, #0c4dae 100%, #0c2067 150%)',
            borderRadius: 28, padding: '40px 48px',
            display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: 40, alignItems: 'center',
            marginBottom: 48,
          }}
        >
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 16 }}>
              <Maximize2 size={18} color="var(--em-gold)" />
              <span style={{ fontFamily: 'var(--font-body)', fontSize: 11, fontWeight: 700, color: 'var(--em-gold)', textTransform: 'uppercase', letterSpacing: '0.12em' }}>
                Uso del isotipo
              </span>
            </div>
            <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 26, fontWeight: 800, color: 'white', lineHeight: 1.2, marginBottom: 16 }}>
              ¿Cuándo usar<br />solo el isotipo?
            </h3>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: 14, color: 'rgba(255,255,255,0.6)', lineHeight: 1.7, marginBottom: 20 }}>
              El isotipo puede usarse de forma independiente en contextos donde la marca ya es reconocida y el espacio es muy reducido.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {['Favicon de sitio web', 'Ícono de app móvil', 'Avatar de redes sociales', 'Sticker o sello pequeño'].map(use => (
                <div key={use} style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                  <div style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--em-gold)', flexShrink: 0 }} />
                  <span style={{ fontFamily: 'var(--font-body)', fontSize: 13, color: 'rgba(255,255,255,0.75)' }}>{use}</span>
                </div>
              ))}
            </div>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 24, flexWrap: 'wrap' }}>
            {[80, 48, 32, 24].map(size => (
              <div key={size} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 10 }}>
                <div style={{
                  width: size + 16, height: size + 16,
                  background: 'var(--em-blue)', borderRadius: size > 50 ? 16 : size > 35 ? 12 : 8,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}>
                  <img
                    src={`${basePath}isotipo-blanco.png`}
                    alt="Isotipo"
                    style={{ width: size, height: size, objectFit: 'contain' }}
                  />
                </div>
                <span style={{ fontFamily: 'var(--font-body)', fontSize: 10, color: 'rgba(255,255,255,0.45)', fontWeight: 600 }}>{size}px</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Usage rules */}
        <motion.div
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 16 }}
        >
          <div style={{ background: 'var(--em-beige)', borderRadius: 24, padding: 32 }}>
            <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 18, fontWeight: 700, color: 'var(--em-black)', marginBottom: 20 }}>✅ Uso Correcto</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {usageRules.filter(r => r.ok).map(r => (
                <div key={r.label} style={{ display: 'flex', alignItems: 'center', gap: 12, background: 'white', borderRadius: 12, padding: '10px 16px' }}>
                  <span style={{ fontSize: 16 }}>{r.icon}</span>
                  <span style={{ fontFamily: 'var(--font-body)', fontSize: 13, color: 'var(--em-black)' }}>{r.label}</span>
                </div>
              ))}
            </div>
          </div>

          <div style={{ background: '#fff5f5', borderRadius: 24, padding: 32 }}>
            <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 18, fontWeight: 700, color: 'var(--em-black)', marginBottom: 20 }}>❌ Uso Incorrecto</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {usageRules.filter(r => !r.ok).map(r => (
                <div key={r.label} style={{ display: 'flex', alignItems: 'center', gap: 12, background: 'white', borderRadius: 12, padding: '10px 16px' }}>
                  <span style={{ fontSize: 16 }}>{r.icon}</span>
                  <span style={{ fontFamily: 'var(--font-body)', fontSize: 13, color: 'var(--em-black)' }}>{r.label}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
