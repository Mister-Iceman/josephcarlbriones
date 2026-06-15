import { featuredClients } from '@/data/clients'

export default function LogoStrip() {
  return (
    <section
      style={{
        backgroundColor: 'rgba(255,255,255,0.02)',
        borderTop: '1px solid rgba(255,255,255,0.04)',
        borderBottom: '1px solid rgba(255,255,255,0.04)',
        padding: '48px 24px',
      }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <p
          className="eyebrow"
          style={{ color: 'rgba(245,245,243,0.4)', textAlign: 'center', marginBottom: '32px' }}
        >
          Brands & Organizations I&apos;ve Worked With
        </p>
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '32px 48px',
          }}
        >
          {featuredClients.map((name) => (
            <span key={name} className="logo-text">
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
