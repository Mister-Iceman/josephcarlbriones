import Link from 'next/link'

const awardPills = [
  { label: '3AF Digital Campaign of the Year' },
  { label: 'MVP — Most Outstanding Eventurer' },
  { label: 'Agency of the Year in Media × 2' },
  { label: 'Walk on Water Award × 2' },
]

export default function Hero() {
  return (
    <section
      style={{
        minHeight: '90vh',
        display: 'flex',
        alignItems: 'center',
        background: 'var(--grad-hero)',
        padding: '80px 24px 60px',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Texture glow overlay */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: 0,
          background: 'var(--tex-glow)',
          pointerEvents: 'none',
        }}
      />

      {/* Decorative geometry — top right hairline rectangles */}
      <div
        aria-hidden="true"
        style={{ position: 'absolute', top: '80px', right: '40px', pointerEvents: 'none' }}
      >
        <div style={{ width: '120px', height: '80px', border: '0.5px solid var(--jcb-border2)', position: 'absolute', top: 0, right: 0 }} />
        <div style={{ width: '90px', height: '60px', border: '0.5px solid var(--jcb-border)', position: 'absolute', top: 16, right: 16 }} />
        <div style={{ width: '60px', height: '40px', border: '0.5px solid rgba(255,255,255,0.05)', position: 'absolute', top: 32, right: 32 }} />
      </div>

      <div style={{ maxWidth: '1200px', margin: '0 auto', width: '100%', position: 'relative', zIndex: 1 }}>
        {/* Eyebrow */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '32px' }}>
          <div style={{ width: '24px', height: '1px', backgroundColor: 'var(--jcb-blue-bright)', flexShrink: 0 }} />
          <span
            style={{
              fontSize: '0.6875rem',
              fontWeight: 500,
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: 'var(--jcb-blue-bright)',
            }}
          >
            Marketing Strategist &nbsp;&middot;&nbsp; Los Angeles, CA
          </span>
        </div>

        {/* Display name — two lines */}
        <h1
          style={{
            fontFamily: 'var(--font-space-grotesk), sans-serif',
            fontSize: 'clamp(2.75rem, 6vw, 4.5rem)',
            fontWeight: 500,
            letterSpacing: '-0.02em',
            lineHeight: 1.05,
            color: 'var(--jcb-white)',
            margin: '0 0 0',
          }}
        >
          Joseph Carl R.
          <br />
          Briones
        </h1>

        {/* Gradient accent line */}
        <div
          style={{
            width: '48px',
            height: '2px',
            background: 'var(--grad-cta)',
            margin: '20px 0 24px',
          }}
        />

        {/* Tagline */}
        <p
          style={{
            fontSize: '0.9375rem',
            color: 'var(--jcb-gray-200)',
            maxWidth: '560px',
            margin: '0 0 40px',
            lineHeight: 1.75,
          }}
        >
          20+ years building meaningful connections between brands, audiences, and communities — across broadcast
          media, major advertising agencies, and digital platforms.
        </p>

        {/* CTAs */}
        <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', marginBottom: '48px' }}>
          <Link href="/work" className="btn-primary">
            See my work &rarr;
          </Link>
          <Link href="/contact" className="btn-outline">
            Get in touch
          </Link>
        </div>

        {/* Award Pills */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
          {awardPills.map((pill) => (
            <div
              key={pill.label}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                backgroundColor: 'rgba(43,110,219,0.10)',
                border: '0.5px solid rgba(91,151,255,0.3)',
                borderRadius: '4px',
                padding: '6px 14px',
                fontSize: '0.8125rem',
                color: 'var(--jcb-blue-bright)',
              }}
            >
              {pill.label}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
