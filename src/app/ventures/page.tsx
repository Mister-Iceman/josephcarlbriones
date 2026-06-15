import type { Metadata } from 'next'
import { ventures } from '@/data/ventures'
import { ExternalLink } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Ventures',
  description:
    'The FilAm Network \u2014 FilipinoFoodNearMe.org and FilipinoEventsNearMe.org. Community-driven digital platforms serving Filipino-Americans nationwide, founded and built by Joseph Carl Briones.',
}

export default function VenturesPage() {
  return (
    <div style={{ backgroundColor: '#0A0F1E', minHeight: '100vh' }}>
      {/* Hero */}
      <section
        style={{
          padding: '80px 24px 60px',
          borderBottom: '1px solid rgba(255,255,255,0.06)',
          background: 'radial-gradient(ellipse at 60% 30%, rgba(79,142,247,0.05) 0%, transparent 60%), #0A0F1E',
        }}
      >
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <p className="eyebrow" style={{ color: '#4F8EF7', marginBottom: '16px' }}>
            The FilAm Network
          </p>
          <h1 className="display-lg" style={{ color: '#F5F5F3', margin: '0 0 24px' }}>
            Founder & Builder
          </h1>
          <p className="body-lg" style={{ color: 'rgba(245,245,243,0.6)', maxWidth: '640px', margin: 0 }}>
            Before building your own platform, you plan it. You research it. You write the copy. You pick the
            stack. You build it, break it, fix it, and launch it. Then you watch it grow.
          </p>
        </div>
      </section>

      {/* Positioning */}
      <section
        style={{
          padding: '60px 24px',
          borderBottom: '1px solid rgba(255,255,255,0.06)',
          backgroundColor: 'rgba(79,142,247,0.02)',
        }}
      >
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <p className="body-lg" style={{ color: 'rgba(245,245,243,0.65)', margin: 0, lineHeight: 1.8 }}>
            FilipinoFoodNearMe.org and FilipinoEventsNearMe.org are not side projects. They are proof &mdash;
            that strategy, marketing, community insight, and modern technology can work together to build
            something people genuinely use.
          </p>
        </div>
      </section>

      {/* Platform sections */}
      {ventures.map((v, i) => (
        <section
          key={v.id}
          style={{
            padding: '80px 24px',
            borderBottom: '1px solid rgba(255,255,255,0.06)',
            backgroundColor: i % 2 === 1 ? 'rgba(255,255,255,0.015)' : 'transparent',
          }}
        >
          <div style={{ maxWidth: '900px', margin: '0 auto' }}>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '60px',
                alignItems: 'start',
              }}
              className="venture-row"
            >
              {/* Left: info */}
              <div>
                <p className="eyebrow" style={{ color: 'rgba(245,245,243,0.35)', marginBottom: '12px' }}>
                  {v.year} &mdash; Present
                </p>
                <h2 className="display-md" style={{ color: '#F5F5F3', margin: '0 0 8px' }}>
                  {v.name}
                </h2>
                <p style={{ fontSize: '0.9rem', color: '#4F8EF7', margin: '0 0 20px', fontWeight: 500 }}>
                  {v.tagline}
                </p>
                <p className="body-lg" style={{ color: 'rgba(245,245,243,0.6)', margin: '0 0 28px' }}>
                  {v.description}
                </p>

                {/* Stack badges */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '28px' }}>
                  {v.stack.map((tech) => (
                    <span
                      key={tech}
                      style={{
                        fontSize: '0.75rem',
                        backgroundColor: 'rgba(79,142,247,0.08)',
                        border: '1px solid rgba(79,142,247,0.2)',
                        borderRadius: '4px',
                        padding: '4px 10px',
                        color: '#7AAFF9',
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <a
                  href={v.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                    backgroundColor: '#4F8EF7',
                    color: '#ffffff',
                    border: 'none',
                    borderRadius: '9999px',
                    padding: '10px 20px',
                    fontSize: '0.875rem',
                    fontWeight: 500,
                    textDecoration: 'none',
                  }}
                >
                  Visit live site <ExternalLink size={14} />
                </a>
              </div>

              {/* Right: stats */}
              <div>
                <div
                  style={{
                    backgroundColor: 'rgba(255,255,255,0.03)',
                    border: '1px solid rgba(255,255,255,0.07)',
                    borderRadius: '16px',
                    padding: '32px',
                  }}
                >
                  <p
                    style={{
                      fontSize: '0.6875rem',
                      fontWeight: 600,
                      letterSpacing: '0.08em',
                      textTransform: 'uppercase',
                      color: 'rgba(245,245,243,0.35)',
                      margin: '0 0 24px',
                    }}
                  >
                    Live Stats
                  </p>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '24px' }}>
                    {v.stats.map((stat) => (
                      <div key={stat.label}>
                        <div
                          style={{
                            fontSize: '2rem',
                            fontWeight: 600,
                            color: '#4F8EF7',
                            lineHeight: 1.1,
                            marginBottom: '6px',
                          }}
                        >
                          {stat.value}
                        </div>
                        <div
                          style={{
                            fontSize: '0.75rem',
                            color: 'rgba(245,245,243,0.45)',
                            textTransform: 'uppercase',
                            letterSpacing: '0.05em',
                          }}
                        >
                          {stat.label}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

        </section>
      ))}

      {/* What This Demonstrates */}
      <section
        style={{
          padding: '80px 24px',
          backgroundColor: 'rgba(79,142,247,0.04)',
          borderTop: '1px solid rgba(79,142,247,0.1)',
        }}
      >
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <p className="eyebrow" style={{ color: '#4F8EF7', marginBottom: '20px' }}>
            What This Demonstrates
          </p>
          <p className="body-lg" style={{ color: 'rgba(245,245,243,0.65)', margin: 0, lineHeight: 1.8 }}>
            These platforms represent the convergence of every skill developed over 20+ years: audience
            understanding, content strategy, SEO, brand development, community engagement, and now &mdash;
            full-stack digital product development. Built without formal engineering training. Shipped to
            production. Growing every week.
          </p>
        </div>
      </section>
    </div>
  )
}
