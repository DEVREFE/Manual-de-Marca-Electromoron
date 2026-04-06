import React from 'react';
import { motion } from 'framer-motion';
import { Lightbulb, Award, HeartHandshake, MousePointerClick } from 'lucide-react';

const values = [
  {
    icon: Lightbulb,
    name: 'Innovación',
    why: 'Porque evolucionamos junto al mercado y las necesidades actuales de nuestros clientes.',
    desc: 'Incorporamos tecnología y nuevas ideas para ofrecer soluciones más eficientes, seguras y accesibles.',
    color: 'var(--em-blue)',
    bg: 'var(--em-blue)',
    dark: true,
    size: 'large',
  },
  {
    icon: Award,
    name: 'Experiencia',
    why: 'Porque contamos con más de 28 años de trayectoria que nos respaldan.',
    desc: 'Sabemos lo que hacemos porque lo vivimos día a día: conocemos el rubro, los desafíos y cómo resolverlos.',
    color: 'var(--em-gold)',
    bg: '#202020',
    dark: true,
    size: 'tall',
  },
  {
    icon: MousePointerClick,
    name: 'Accesibilidad',
    why: 'Facilitamos el acceso a nuestros productos con una experiencia de compra simple y cercana.',
    desc: 'Tanto en el local como desde la web, para que cada cliente encuentre lo que necesita sin complicaciones.',
    color: 'var(--em-blue)',
    bg: 'var(--em-white)',
    dark: false,
    size: 'small',
  },
  {
    icon: HeartHandshake,
    name: 'Responsabilidad',
    why: 'Porque cumplimos con compromiso y seriedad en cada proyecto.',
    desc: 'Nuestra palabra vale tanto como nuestros productos: actuamos con coherencia, ética y profesionalismo.',
    color: 'var(--em-gold)',
    bg: 'var(--em-white)',
    dark: false,
    size: 'small',
  },
];

export const BrandValues: React.FC = () => (
  <section id="valores" style={{ padding: '120px 2rem', background: 'var(--em-beige)' }}>
    <div style={{ maxWidth: 1280, margin: '0 auto' }}>
      {/* Header */}
      <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
          <div style={{ height: 1, width: 40, background: 'var(--em-blue)' }} />
          <span style={{ fontFamily: 'var(--font-body)', fontSize: 12, fontWeight: 700, color: 'var(--em-blue)', textTransform: 'uppercase', letterSpacing: '0.15em' }}>
            04 · Valores de Marca
          </span>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 64, flexWrap: 'wrap', gap: 24 }}>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(40px, 5vw, 72px)', fontWeight: 800, lineHeight: 1.05, color: 'var(--em-black)' }}>
            Los pilares<br /><span style={{ color: 'var(--em-blue)' }}>que nos definen.</span>
          </h2>
          <div style={{ background: 'var(--em-blue)', color: 'white', borderRadius: 16, padding: '16px 24px', maxWidth: 320 }}>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: 13, lineHeight: 1.6 }}>
              <strong style={{ fontFamily: 'var(--font-display)' }}>Esencia de marca:</strong><br />
              Crecimiento — La razón de ser de Electromorón es crecer y hacer crecer a quienes nos eligen.
            </p>
          </div>
        </div>
      </motion.div>

      {/* Bento grid */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gridTemplateRows: 'auto auto',
        gap: 16,
      }}>
        {values.map((val, i) => {
          const Icon = val.icon;
          return (
            <motion.div
              key={val.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -6 }}
              style={{
                background: val.bg,
                border: !val.dark ? '1px solid var(--em-gray-200)' : 'none',
                borderRadius: 28, padding: '40px 36px',
                gridColumn: val.size === 'large' ? 'span 2' : val.size === 'tall' ? 'span 1' : 'span 1',
                gridRow: val.size === 'tall' ? 'span 2' : 'span 1',
                display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
                minHeight: val.size === 'tall' ? 400 : 240,
                position: 'relative', overflow: 'hidden',
                boxShadow: val.dark ? '0 20px 60px rgba(0,0,0,0.15)' : '0 4px 24px rgba(12,77,174,0.06)',
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                <div style={{
                  width: 52, height: 52, borderRadius: 16,
                  background: val.dark ? 'rgba(255,255,255,0.1)' : 'var(--em-beige)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}>
                  <Icon size={26} color={val.dark ? 'white' : val.color} strokeWidth={1.5} />
                </div>
                <span style={{
                  fontFamily: 'var(--font-body)', fontSize: 10, fontWeight: 700,
                  letterSpacing: '0.12em', textTransform: 'uppercase',
                  color: val.dark ? 'rgba(255,255,255,0.4)' : 'var(--em-gray-400)',
                  border: `1px solid ${val.dark ? 'rgba(255,255,255,0.15)' : 'var(--em-gray-200)'}`,
                  borderRadius: 100, padding: '4px 12px',
                }}>
                  Valor {i + 1}
                </span>
              </div>

              <div style={{ marginTop: val.size === 'tall' ? 'auto' : 24, paddingTop: val.size === 'tall' ? 0 : 0 }}>
                {val.size === 'tall' && (
                  <div style={{ marginBottom: 24 }}>
                    <span style={{ fontFamily: 'var(--font-display)', fontSize: 72, fontWeight: 900, color: 'white', lineHeight: 0.9 }}>28</span>
                    <span style={{ fontFamily: 'var(--font-display)', fontSize: 32, fontWeight: 300, color: 'rgba(255,255,255,0.5)', marginLeft: 8 }}>años</span>
                    <p style={{ fontFamily: 'var(--font-body)', fontSize: 12, color: 'rgba(255,255,255,0.5)', marginTop: 16, lineHeight: 1.6, borderLeft: '2px solid var(--em-gold)', paddingLeft: 12 }}>
                      {val.why}
                    </p>
                  </div>
                )}
                <h3 style={{
                  fontFamily: 'var(--font-display)', fontWeight: 700,
                  fontSize: val.size === 'large' ? 28 : 20,
                  color: val.dark ? 'white' : 'var(--em-black)',
                  marginBottom: 12,
                }}>
                  {val.name}
                </h3>
                <p style={{
                  fontFamily: 'var(--font-body)', fontSize: 14, lineHeight: 1.65,
                  color: val.dark ? 'rgba(255,255,255,0.6)' : 'var(--em-gray-400)',
                  maxWidth: val.size === 'large' ? 480 : 260,
                }}>
                  {val.size !== 'tall' ? val.why + ' ' : ''}{val.desc}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>

    <style>{`
      @media (max-width: 768px) {
        #valores .bento-grid { grid-template-columns: 1fr !important; }
      }
    `}</style>
  </section>
);
