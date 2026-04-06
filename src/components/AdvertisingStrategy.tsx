import React from 'react';
import { motion } from 'framer-motion';

export const AdvertisingStrategy: React.FC = () => {
  const slides = Array.from({ length: 24 }, (_, i) => `/assets/estrategia/slide_${String(i + 1).padStart(2, '0')}.jpg`);

  return (
    <section id="estrategia" style={{ padding: '120px 2rem', background: 'var(--em-beige)' }}>
      <div style={{ maxWidth: 1000, margin: '0 auto' }}>
        
        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
            <div style={{ height: 1, width: 40, background: 'var(--em-gold)' }} />
            <span style={{ fontFamily: 'var(--font-body)', fontSize: 12, fontWeight: 700, color: 'var(--em-gold)', textTransform: 'uppercase', letterSpacing: '0.15em' }}>
              07 · Estrategia Digital
            </span>
          </div>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(40px, 5vw, 64px)', fontWeight: 800, lineHeight: 1.05, color: 'var(--em-black)', marginBottom: 16 }}>
            Pauta &<br />
            <span style={{ color: 'var(--em-blue)' }}>Comunicación</span>
          </h2>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: 16, color: 'var(--em-gray-500)', maxWidth: 600, lineHeight: 1.7, marginBottom: 80 }}>
            Conoce el framework estratégico diseñado para los canales digitales de Electromorón. Objetivos comerciales, arquetipos de cliente, y el tono de comunicación necesario para conectar.
          </p>
        </motion.div>

        {/* Visor Panorámico Vertical */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: 24,
          alignItems: 'center',
          background: 'var(--em-white)',
          padding: '40px 20px',
          borderRadius: 32,
          boxShadow: '0 20px 60px rgba(0,0,0,0.05)'
        }}>
          {slides.map((src, index) => (
            <motion.div
              key={src}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-10% 0px' }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              style={{
                width: '100%',
                maxWidth: 900,
                borderRadius: 16,
                overflow: 'hidden',
                boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
                border: '1px solid var(--em-gray-200)'
              }}
            >
              <img 
                src={src} 
                alt={`Slide de estrategia ${index + 1}`}
                style={{ width: '100%', height: 'auto', display: 'block' }}
                loading="lazy"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
