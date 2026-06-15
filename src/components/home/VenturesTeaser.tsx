import Link from 'next/link'
import { ventures } from '@/data/ventures'
import { ArrowRight, ExternalLink } from 'lucide-react'

export default function VenturesTeaser() {
  return (
    <section
      style={{
        backgroundColor: 'rgba(79,142,247,0.03)',
        borderTop: '1px solid rgba(255,255,255,0.06)',
        borderBottom: '1px solid rgba(255,255,255,0.06)',
        padding: '96px 24px',
      }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        {/* Header */}
        <div style={{ marginBottom: '56px', maxWidth: '600px' }}>
          <p className="eyebrow" style={{ color: '#4F8EF7', marginBottom: '12px' }}>
            The FilAm Network
          </p>
          <h2 className="display-lg" style={{ color: '#F5F5F3', margin: '0 0 16px' }}>
            Founder & Builder
          </h2>
          <p className="body-lg" style={{ color: 'rgba(245,245,243,0.55)', margin: 0 }}>
            Community-driven platforms serving Filipino-Americans nationwide &mdash; designed, built, and launched
            from scratch using modern web technology.
          </p>
        </div>

        {/* Venture cards */}
        <div
          className="ventures-grid"
          style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '20px' }}
        >
          {ventures.map((v) => (
            <div key={v.id} className="jcb-card" style={{ padding: '32px' }}>
              {/* Name */}
              <a
                href={v.url}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  fontSize: '1.0625rem',
                  fontWeight: 600,
                  color: '#4F8EF7',
                  textDecoration: 'none',
                  marginBottom: '6px',
                }}
              >
                {v.name} <ExternalLink size={14} />
              </a>

              {/* Tagline */}
              <p style={{ fontSize: '0.8125rem', color: 'rgba(245,245,243,0.45)', margin: '0 0 20px' }}>
                {v.tagline}
              </p>

              {/* Description */}
              <p className="body-sm" style={{ color: 'rgba(245,245,243,0.6)', margin: '0 0 24px' }}>
                {v.description}
              </p>

              {/* Stats */}
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(4, 1fr)',
                  borderTop: '1px solid rgba(255,255,255,0.06)',
                  paddingTop: '20px',
                }}
              >
                {v.stats.map((stat, i) => (
                  <div
                    key={stat.label}
                    style={{
                      textAlign: 'center',
                      borderLeft: i > 0 ? '1px solid rgba(255,255,255,0.06)' : 'none',
                      padding: '0 8px',
                    }}
                  >
                    <div
                      style={{ fontSize: '1.125rem', fontWeight: 600, color: '#F5F5F3', marginBottom: '4px' }}
                    >
                      {stat.value}
                    </div>
                    <div
                      style={{
                        fontSize: '0.625rem',
                        color: 'rgba(245,245,243,0.4)',
                        textTransform: 'uppercase',
                        letterSpacing: '0.06em',
                      }}
                    >
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div style={{ textAlign: 'center', marginTop: '40px' }}>
          <Link
            href="/ventures"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              fontSize: '0.9375rem',
              color: '#4F8EF7',
              textDecoration: 'none',
              fontWeight: 500,
            }}
          >
            Learn about the FilAm Network <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  )
}
