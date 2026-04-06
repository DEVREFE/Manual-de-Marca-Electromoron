import React from 'react';
import { motion } from 'framer-motion';
import { Download, FileText, Image, Package } from 'lucide-react';

const downloads = [
  {
    icon: FileText,
    title: 'Brandbook Completo',
    desc: 'Documento estratégico completo: propósito, valores, tono de voz, públicos y mensajes clave.',
    file: '#request-access',
    label: 'Privado',
    color: 'var(--em-blue)',
    isPrivate: true,
  },
  {
    icon: Image,
    title: 'Identidad Visual',
    desc: 'Guía completa con logos, paleta de colores, tipografía y reglas de aplicación.',
    file: '../Electromorón/02. Identidad de Marca/IDENTIDAD VISUAL/Identidad visual E morón v7 - Presentaciones de Google.pdf',
    label: 'PDF · 5.5 MB',
    color: '#7c3aed',
  },
  {
    icon: Package,
    title: 'Pack de Logos',
    desc: 'Todas las variantes del logo en SVG y PNG de alta resolución, organizadas por fondo.',
    file: '#logo',
    label: 'SVG + PNG',
    color: 'var(--em-gold)',
    isAnchor: true,
  },
];

export const Downloads: React.FC = () => (
  <section id="descargas" style={{ padding: '120px 2rem', background: 'var(--em-blue)' }}>
    <div style={{ maxWidth: 1280, margin: '0 auto' }}>
      <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
          <div style={{ height: 1, width: 40, background: 'rgba(255,255,255,0.4)' }} />
          <span style={{ fontFamily: 'var(--font-body)', fontSize: 12, fontWeight: 700, color: 'rgba(255,255,255,0.6)', textTransform: 'uppercase', letterSpacing: '0.15em' }}>
            06 · Descargas
          </span>
        </div>
        <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(40px, 5vw, 72px)', fontWeight: 800, color: 'white', lineHeight: 1.05, marginBottom: 16 }}>
          Recursos<br />oficiales.
        </h2>
        <p style={{ fontFamily: 'var(--font-body)', fontSize: 16, color: 'rgba(255,255,255,0.55)', maxWidth: 520, lineHeight: 1.7, marginBottom: 64 }}>
          Todos los archivos oficiales de Electromorón para uso en comunicaciones, diseño y producción.
        </p>
      </motion.div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: 16 }}>
        {downloads.map((d, i) => {
          const Icon = d.icon;
          return (
            <motion.div
              key={d.title}
              initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
              whileHover={{ y: -6 }}
              style={{
                background: 'rgba(255,255,255,0.07)',
                border: '1px solid rgba(255,255,255,0.12)',
                borderRadius: 24, padding: 32,
                display: 'flex', flexDirection: 'column', gap: 20,
              }}
            >
              <div style={{ width: 52, height: 52, borderRadius: 16, background: 'rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Icon size={24} color="white" strokeWidth={1.5} />
              </div>
              <div>
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 20, fontWeight: 700, color: 'white', marginBottom: 8 }}>{d.title}</h3>
                <p style={{ fontFamily: 'var(--font-body)', fontSize: 13, color: 'rgba(255,255,255,0.55)', lineHeight: 1.6 }}>{d.desc}</p>
              </div>
              <div style={{ marginTop: 'auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontFamily: 'var(--font-body)', fontSize: 11, color: 'rgba(255,255,255,0.4)', fontWeight: 600 }}>{d.label}</span>
                <a
                  href={d.isPrivate ? 'mailto:direccion@electromoron.com?subject=Solicitud de Acceso a Brandbook' : d.file}
                  download={!d.isAnchor && !d.isPrivate}
                  onClick={d.isAnchor ? (e) => { e.preventDefault(); document.getElementById('logo')?.scrollIntoView({ behavior: 'smooth' }); } : undefined}
                  style={{
                    display: 'flex', alignItems: 'center', gap: 8,
                    background: d.isPrivate ? 'rgba(255,255,255,0.15)' : 'white', 
                    color: d.isPrivate ? 'white' : 'var(--em-blue)',
                    border: d.isPrivate ? '1px solid rgba(255,255,255,0.3)' : 'none',
                    padding: '10px 20px', borderRadius: 100,
                    textDecoration: 'none',
                    fontFamily: 'var(--font-display)', fontSize: 13, fontWeight: 700,
                    cursor: 'pointer',
                  }}
                >
                  <Download size={14} />
                  {d.isPrivate ? 'Solicitar Acceso' : 'Descargar'}
                </a>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  </section>
);
