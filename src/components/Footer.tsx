import React from 'react';

export const Footer: React.FC = () => (
  <footer style={{ background: '#0a0a0a', padding: '48px 2rem', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
    <div style={{ maxWidth: 1280, margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 24 }}>
      <div>
        <div style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 20, color: 'white', marginBottom: 4 }}>Electromorón</div>
        <div style={{ fontFamily: 'var(--font-body)', fontSize: 12, color: 'rgba(255,255,255,0.3)' }}>Manual de Marca · 2026 · Versión 1.0</div>
      </div>
      <div style={{ fontFamily: 'var(--font-body)', fontSize: 12, color: 'rgba(255,255,255,0.25)', textAlign: 'right' }}>
        <div>"Evolucionamos con vos, con responsabilidad y experiencia."</div>
        <div style={{ marginTop: 4 }}>Uso interno y externo autorizado</div>
      </div>
    </div>
  </footer>
);
