import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';

export const Hero: React.FC = () => {
  const scrollDown = () => document.getElementById('paleta')?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section 
      className="animate-gradient"
      style={{
        minHeight: '100vh',
        background: 'linear-gradient(150deg, #010b1a 0%, #0c2067 50%, #0c4dae 100%, #0c2067 150%)',
        display: 'flex', flexDirection: 'column',
        justifyContent: 'center', alignItems: 'center',
        position: 'relative', overflow: 'hidden',
        padding: '0 2rem',
    }}>
      {/* Subtle radial glow */}
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none',
        background: 'radial-gradient(ellipse 80% 60% at 50% 60%, rgba(12,77,174,0.35) 0%, transparent 70%)',
      }} />

      {/* Gold accent line top */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1.2, ease: [0.25, 0.4, 0.25, 1] }}
        style={{
          position: 'absolute', top: 0, left: 0, right: 0,
          height: 3,
          background: 'linear-gradient(90deg, transparent 0%, #c89116 40%, #f0c040 60%, transparent 100%)',
          transformOrigin: 'left',
        }}
      />

      {/* Year badge */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        style={{
          display: 'inline-flex', alignItems: 'center', gap: 8,
          border: '1px solid rgba(200,145,22,0.4)',
          borderRadius: 100, padding: '6px 18px',
          marginBottom: 52,
          background: 'rgba(200,145,22,0.08)',
        }}
      >
        <div style={{ width: 6, height: 6, borderRadius: '50%', background: '#c89116' }} />
        <span style={{ color: 'rgba(255,255,255,0.75)', fontFamily: 'var(--font-body)', fontSize: 12, fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase' }}>
          Manual de Marca · 2026
        </span>
      </motion.div>

      {/* Logo real */}
      <motion.div
        initial={{ opacity: 0, scale: 0.88, y: 30 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 1, ease: [0.25, 0.4, 0.25, 1] }}
        style={{ marginBottom: 48, display: 'flex', justifyContent: 'center' }}
      >
        <img
          src="/assets/logos/electromoron/Logo svg blanco horizontal 1.svg"
          alt="Electromorón"
          style={{
            width: 'clamp(240px, 40vw, 520px)',
            filter: 'drop-shadow(0 0 40px rgba(12,77,174,0.6)) drop-shadow(0 4px 24px rgba(0,0,0,0.4))',
          }}
        />
      </motion.div>

      {/* Divider line */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ delay: 0.9, duration: 0.8 }}
        style={{
          width: 'clamp(120px, 20vw, 200px)',
          height: 1,
          background: 'linear-gradient(90deg, transparent, rgba(200,145,22,0.6), transparent)',
          marginBottom: 32,
        }}
      />

      {/* Subtitle */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.0, duration: 0.8 }}
        style={{
          fontFamily: 'var(--font-body)',
          fontSize: 'clamp(14px, 2vw, 18px)',
          color: 'rgba(255,255,255,0.5)',
          textAlign: 'center',
          maxWidth: 540,
          lineHeight: 1.7,
          fontWeight: 400,
        }}
      >
        Guía completa de identidad visual y comunicación.<br />
        La brújula que define cómo somos y cómo nos presentamos.
      </motion.p>

      {/* Philosophy tagline */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.3, duration: 1 }}
        style={{
          marginTop: 48,
          padding: '16px 36px',
          background: 'rgba(255,255,255,0.04)',
          border: '1px solid rgba(255,255,255,0.1)',
          borderRadius: 16,
          backdropFilter: 'blur(10px)',
          textAlign: 'center',
        }}
      >
        <span style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(13px, 1.5vw, 16px)', color: 'rgba(255,255,255,0.85)', fontStyle: 'italic', fontWeight: 300 }}>
          "Evolucionamos con vos, con responsabilidad y experiencia."
        </span>
      </motion.div>

      {/* Stats row */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        style={{
          marginTop: 56, display: 'flex', gap: 'clamp(24px, 6vw, 72px)',
          flexWrap: 'wrap', justifyContent: 'center',
        }}
      >
        {[
          { value: '28+', label: 'Años de experiencia' },
          { value: '100%', label: 'Compromiso con el cliente' },
          { value: '1', label: 'Identidad de marca' },
        ].map((s) => (
          <div key={s.label} style={{ textAlign: 'center' }}>
            <div style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(28px, 4vw, 42px)', fontWeight: 800, color: '#c89116', lineHeight: 1 }}>{s.value}</div>
            <div style={{ fontFamily: 'var(--font-body)', fontSize: 11, color: 'rgba(255,255,255,0.4)', marginTop: 6, textTransform: 'uppercase', letterSpacing: '0.12em', fontWeight: 600 }}>{s.label}</div>
          </div>
        ))}
      </motion.div>

      {/* Scroll indicator */}
      <motion.button
        onClick={scrollDown}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 6, 0] }}
        transition={{ delay: 1.8, duration: 0.5, y: { duration: 2, repeat: Infinity, ease: 'easeInOut' } }}
        style={{
          position: 'absolute', bottom: 40,
          background: 'none', border: '1px solid rgba(255,255,255,0.18)',
          borderRadius: '50%', width: 48, height: 48,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          cursor: 'pointer', color: 'rgba(255,255,255,0.5)',
        }}
      >
        <ArrowDown size={20} />
      </motion.button>
    </section>
  );
};
