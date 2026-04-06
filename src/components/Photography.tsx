import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export const Photography: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  // Slides 24 to 37 (14 slides en total)
  const lookSlides = Array.from({ length: 14 }, (_, i) => `/assets/lookandfeel/slide_${String(24 + i).padStart(2, '0')}.jpg`);

  const next = () => setCurrentIndex(prev => (prev + 1) % lookSlides.length);
  const prev = () => setCurrentIndex(prev => (prev - 1 + lookSlides.length) % lookSlides.length);

  return (
    <section id="fotografia" style={{ background: 'var(--em-white)', paddingBottom: 60 }}>
      <div style={{ maxWidth: 1000, margin: '0 auto', padding: '120px 2rem 60px 2rem' }}>
        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
            <div style={{ height: 1, width: 40, background: 'var(--em-gold)' }} />
            <span style={{ fontFamily: 'var(--font-body)', fontSize: 12, fontWeight: 700, color: 'var(--em-gold)', textTransform: 'uppercase', letterSpacing: '0.15em' }}>
              08 · Dirección de Arte
            </span>
          </div>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(40px, 5vw, 64px)', fontWeight: 800, lineHeight: 1.05, color: 'var(--em-black)', marginBottom: 16 }}>
            Fotografía &<br />
            <span style={{ color: 'var(--em-gold)' }}>Look and Feel</span>
          </h2>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: 16, color: 'var(--em-gray-500)', maxWidth: 600, lineHeight: 1.7 }}>
            Inspiración fotográfica que refleja la esencia de Electromorón. Una cuidada curaduría de imágenes que integran nuestros valores: seguridad, innovación comercial, e infraestructura.
          </p>
        </motion.div>
      </div>

      {/* Slider Panorámico (Carrusel UI) */}
      <div style={{ 
        position: 'relative', 
        width: '100%', 
        maxWidth: 1600, /* Ancho máximo para pantallas muy grandes, pero edge-to-edge en pantallas normales */
        margin: '0 auto', 
        aspectRatio: '16/9', 
        background: '#040b16', /* Fondo sutil oscuro */
        overflow: 'hidden'
      }}>
        
        {/* Contenedor de Slide */}
        <AnimatePresence mode="wait">
          <motion.img
            key={currentIndex}
            src={lookSlides[currentIndex]}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            style={{ 
              width: '100%', height: '100%', 
              objectFit: 'contain', 
              position: 'absolute', top: 0, left: 0 
            }}
          />
        </AnimatePresence>

        {/* Botón Prev */}
        <button 
          onClick={prev} 
          style={{
            position: 'absolute', left: '2%', top: '50%', transform: 'translateY(-50%)',
            background: 'rgba(255,255,255,0.15)', backdropFilter: 'blur(8px)', 
            border: '1px solid rgba(255,255,255,0.3)', cursor: 'pointer',
            width: 56, height: 56, borderRadius: '50%', 
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            color: 'white', zIndex: 10,
            transition: 'background 0.2s, transform 0.2s'
          }}
          onMouseEnter={e => (e.currentTarget.style.background = 'var(--em-blue)', e.currentTarget.style.transform = 'translateY(-50%) scale(1.05)') }
          onMouseLeave={e => (e.currentTarget.style.background = 'rgba(255,255,255,0.15)', e.currentTarget.style.transform = 'translateY(-50%) scale(1)') }
        >
          <ChevronLeft size={32} />
        </button>

        {/* Botón Next */}
        <button 
          onClick={next} 
          style={{
            position: 'absolute', right: '2%', top: '50%', transform: 'translateY(-50%)',
            background: 'rgba(255,255,255,0.15)', backdropFilter: 'blur(8px)', 
            border: '1px solid rgba(255,255,255,0.3)', cursor: 'pointer',
            width: 56, height: 56, borderRadius: '50%', 
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            color: 'white', zIndex: 10,
            transition: 'background 0.2s, transform 0.2s'
          }}
          onMouseEnter={e => (e.currentTarget.style.background = 'var(--em-blue)', e.currentTarget.style.transform = 'translateY(-50%) scale(1.05)') }
          onMouseLeave={e => (e.currentTarget.style.background = 'rgba(255,255,255,0.15)', e.currentTarget.style.transform = 'translateY(-50%) scale(1)') }
        >
          <ChevronRight size={32} />
        </button>

        {/* Puntos (Dots) */}
        <div style={{ 
          position: 'absolute', bottom: 24, left: '50%', transform: 'translateX(-50%)', 
          display: 'flex', gap: 10, zIndex: 10,
          background: 'rgba(0,0,0,0.3)', padding: '8px 16px', borderRadius: 100, backdropFilter: 'blur(4px)'
        }}>
          {lookSlides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              style={{
                width: 10, height: 10, borderRadius: '50%', border: 'none', cursor: 'pointer', padding: 0,
                background: currentIndex === idx ? 'var(--em-gold)' : 'rgba(255,255,255,0.4)',
                transform: currentIndex === idx ? 'scale(1.2)' : 'scale(1)',
                transition: 'all 0.3s'
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
