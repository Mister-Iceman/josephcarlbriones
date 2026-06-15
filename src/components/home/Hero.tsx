import Link from 'next/link'

const awardPills = [
  { icon: '\uD83C\uDFC6', label: '3AF Digital Campaign of the Year' },
  { icon: '\u2B50', label: 'MVP \u2014 Most Outstanding Eventurer' },
  { icon: '\uD83C\uDFC5', label: 'Agency of the Year in Media \u00d7 2' },
]

export default function Hero() {
  return (
    <section
      style={{
        minHeight: '90vh',
        display: 'flex',
        alignItems: 'center',
        background: 'radial-gradient(ellipse at 30% 40%, rgba(79,142,247,0.06) 0%, transparent 60%), #0A0F1E',
        padding: '80px 24px 60px',
      }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto', width: '100%' }}>
        {/* Eyebrow */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '24px' }}>
          <div style={{ width: '24px', height: '1px', backgroundColor: '#4F8EF7', flexShrink: 0 }} />
          <span className="eyebrow" style={{ color: '#4F8EF7' }}>
            Award-Winning Marketing & Media Professional
          </span>
        </div>

        {/* Name */}
        <h1 className="display-xl" style={{ color: '#F5F5F3', margin: '0 0 16px' }}>
          Joseph Carl Briones
        </h1>

        {/* Title */}
        <p
          style={{
            fontSize: '1rem',
            color: 'rgba(245,245,243,0.45)',
            letterSpacing: '0.01em',
            margin: '0 0 24px',
            lineHeight: 1.6,
          }}
        >
          Marketing Strategist &nbsp;&middot;&nbsp; Community Platform Builder &nbsp;&middot;&nbsp; Multicultural Media Professional
        </p>

        {/* Bio */}
        <p
          className="body-lg"
          style={{
            color: 'rgba(245,245,243,0.6)',
            maxWidth: '560px',
            margin: '0 0 40px',
          }}
        >
          20+ years building meaningful connections between brands, audiences, and communities &mdash; across broadcast
          media, major advertising agencies, and digital platforms. Award-winning. Bilingual. Los Angeles-based.
        </p>

        {/* CTAs */}
        <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', marginBottom: '40px' }}>
          <Link href="/work" className="btn-primary">
            View my work &rarr;
          </Link>
          <Link href="/contact" className="btn-outline">
            Get in touch
          </Link>
        </div>

        {/* Award Pills */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
          {awardPills.map((pill) => (
            <div
              key={pill.label}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                backgroundColor: 'rgba(79,142,247,0.1)',
                border: '1px solid rgba(79,142,247,0.25)',
                borderRadius: '9999px',
                padding: '6px 14px',
                fontSize: '0.8125rem',
                color: 'rgba(245,245,243,0.75)',
              }}
            >
              <span style={{ color: '#F7B84F' }}>{pill.icon}</span>
              {pill.label}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
