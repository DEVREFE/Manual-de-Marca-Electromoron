import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const sections = [
  { id: 'paleta', label: 'Colores' },
  { id: 'tipografia', label: 'Tipografía' },
  { id: 'logo', label: 'Logo' },
  { id: 'valores', label: 'Valores' },
  { id: 'tono', label: 'Tono de Voz' },
  { id: 'piezas', label: 'Piezas' },
  { id: 'fotografia', label: 'Fotografía' },
  { id: 'mockups', label: 'Mockups' },
  { id: 'descargas', label: 'Descargas' },
];

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  return (
    <motion.header
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.25, 0.4, 0.25, 1] }}
      style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
        background: scrolled ? 'rgba(255,255,255,0.96)' : 'transparent',
        backdropFilter: scrolled ? 'blur(16px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(12,77,174,0.1)' : 'none',
        transition: 'all 0.3s ease',
        padding: '0 2rem',
      }}
    >
      <div style={{ maxWidth: 1280, margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 72 }}>
        {/* Logo real */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 12, cursor: 'pointer' }} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <img
            src="/assets/logos/electromoron/Isotipo blanco@4x.png"
            alt="Electromorón"
            style={{
              width: 36, height: 36, objectFit: 'contain',
              filter: scrolled ? 'none' : 'brightness(10)',
              background: scrolled ? 'var(--em-blue)' : 'transparent',
              borderRadius: 10,
              padding: scrolled ? 4 : 0,
              transition: 'all 0.3s ease',
            }}
          />
          <div>
            <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 14, color: scrolled ? 'var(--em-black)' : 'white', lineHeight: 1, transition: 'color 0.3s' }}>
              Manual de Marca
            </div>
            <div style={{ fontFamily: 'var(--font-body)', fontSize: 10, color: scrolled ? 'var(--em-blue)' : 'rgba(200,145,22,0.9)', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', transition: 'color 0.3s' }}>
              Electromorón
            </div>
          </div>
        </div>

        {/* Desktop nav */}
        <nav style={{ display: 'flex', gap: 4, alignItems: 'center' }} className="desktop-nav">
          {sections.map(s => (
            <button
              key={s.id}
              onClick={() => scrollTo(s.id)}
              style={{
                background: 'transparent',
                color: scrolled ? 'var(--em-gray-600)' : 'rgba(255,255,255,0.7)',
                border: 'none', cursor: 'pointer',
                padding: '6px 12px', borderRadius: 100,
                fontFamily: 'var(--font-body)', fontSize: 12, fontWeight: 500,
                transition: 'all 0.2s',
              }}
              onMouseEnter={e => {
                (e.target as HTMLButtonElement).style.color = scrolled ? 'var(--em-blue)' : 'white';
                (e.target as HTMLButtonElement).style.background = scrolled ? 'rgba(12,77,174,0.07)' : 'rgba(255,255,255,0.1)';
              }}
              onMouseLeave={e => {
                (e.target as HTMLButtonElement).style.color = scrolled ? 'var(--em-gray-600)' : 'rgba(255,255,255,0.7)';
                (e.target as HTMLButtonElement).style.background = 'transparent';
              }}
            >
              {s.label}
            </button>
          ))}
        </nav>

        {/* Mobile menu btn */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          style={{ background: 'none', border: 'none', cursor: 'pointer', color: scrolled ? 'var(--em-black)' : 'white', display: 'none' }}
          className="mobile-menu-btn"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            style={{ background: 'white', borderTop: '1px solid var(--em-gray-200)', padding: '1rem 2rem' }}
          >
            {sections.map(s => (
              <button key={s.id} onClick={() => scrollTo(s.id)}
                style={{
                  display: 'block', width: '100%', textAlign: 'left', background: 'none',
                  border: 'none', padding: '10px 0', cursor: 'pointer',
                  fontFamily: 'var(--font-body)', fontSize: 15, color: 'var(--em-black)',
                  borderBottom: '1px solid var(--em-gray-200)'
                }}>
                {s.label}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: block !important; }
        }
      `}</style>
    </motion.header>
  );
};
