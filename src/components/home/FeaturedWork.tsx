import Link from 'next/link'
import { caseStudies } from '@/data/caseStudies'
import { ArrowRight } from 'lucide-react'

const featured = caseStudies.filter(
  (cs) =>
    cs.featured &&
    !['filipinofoodnearme-platform', 'filipinoeventsnearme-platform'].includes(cs.slug),
).slice(0, 3)

export default function FeaturedWork() {
  return (
    <section style={{ padding: '96px 24px' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        {/* Section header */}
        <div style={{ marginBottom: '56px' }}>
          <p className="eyebrow" style={{ color: '#4F8EF7', marginBottom: '12px' }}>
            Portfolio
          </p>
          <h2 className="display-lg" style={{ color: '#F5F5F3', margin: '0 0 16px' }}>
            Selected Work
          </h2>
          <p className="body-lg" style={{ color: 'rgba(245,245,243,0.55)', maxWidth: '520px', margin: 0 }}>
            Campaigns, brand launches, digital platforms, and live events spanning 20+ years
          </p>
        </div>

        {/* Cards grid */}
        <div
          className="work-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '20px',
          }}
        >
          {featured.map((cs) => (
            <Link key={cs.slug} href={`/work/${cs.slug}`} style={{ textDecoration: 'none' }}>
              <article
                className="jcb-card"
                style={{
                  padding: '24px',
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                }}
              >
                {/* Category */}
                <span className="eyebrow" style={{ color: '#4F8EF7', marginBottom: '16px', display: 'block' }}>
                  {cs.category}
                </span>

                {/* Award badge */}
                {cs.award && (
                  <div
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '6px',
                      backgroundColor: 'rgba(247,184,79,0.1)',
                      border: '1px solid rgba(247,184,79,0.2)',
                      borderRadius: '4px',
                      padding: '4px 10px',
                      marginBottom: '12px',
                      fontSize: '0.75rem',
                      color: '#F7B84F',
                      alignSelf: 'flex-start',
                    }}
                  >
                    Award-Winning
                  </div>
                )}

                {/* Title */}
                <h3
                  style={{
                    fontSize: '1rem',
                    fontWeight: 500,
                    color: '#F5F5F3',
                    margin: '0 0 8px',
                    lineHeight: 1.4,
                  }}
                >
                  {cs.title}
                </h3>

                {/* Client */}
                <p style={{ fontSize: '0.8125rem', color: 'rgba(245,245,243,0.45)', margin: '0 0 20px' }}>
                  {cs.client} &middot; {cs.year}
                </p>

                {/* Hero stat */}
                <div style={{ marginTop: 'auto', marginBottom: '20px' }}>
                  <div
                    style={{
                      fontSize: '1.75rem',
                      fontWeight: 600,
                      color: '#4F8EF7',
                      lineHeight: 1.2,
                      marginBottom: '4px',
                    }}
                  >
                    {cs.heroStat.value}
                  </div>
                  <div style={{ fontSize: '0.75rem', color: 'rgba(245,245,243,0.45)' }}>
                    {cs.heroStat.label}
                  </div>
                </div>

                {/* Link */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '4px',
                    fontSize: '0.8125rem',
                    color: '#4F8EF7',
                    fontWeight: 500,
                  }}
                >
                  View case study <ArrowRight size={14} />
                </div>
              </article>
            </Link>
          ))}
        </div>

        {/* View all */}
        <div style={{ textAlign: 'center', marginTop: '48px' }}>
          <Link
            href="/work"
            style={{
              fontSize: '0.9375rem',
              color: 'rgba(245,245,243,0.6)',
              textDecoration: 'none',
              borderBottom: '1px solid rgba(245,245,243,0.2)',
              paddingBottom: '2px',
            }}
          >
            View all work &rarr;
          </Link>
        </div>
      </div>
    </section>
  )
}
