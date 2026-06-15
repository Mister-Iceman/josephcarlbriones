import Link from 'next/link'
import { awards } from '@/data/awards'
import { ArrowRight, Trophy } from 'lucide-react'

const featuredAwards = awards.filter((a) => a.featured)

export default function AwardsTeaser() {
  return (
    <section style={{ padding: '80px 24px' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ marginBottom: '40px' }}>
          <p className="eyebrow" style={{ color: '#4F8EF7', marginBottom: '12px' }}>
            Recognition
          </p>
          <h2 className="display-md" style={{ color: '#F5F5F3', margin: 0 }}>
            Awards & Recognition
          </h2>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '32px' }}>
          {featuredAwards.map((award) => (
            <div
              key={award.id}
              className="jcb-card"
              style={{
                padding: '20px 24px',
                display: 'flex',
                alignItems: 'flex-start',
                gap: '16px',
              }}
            >
              <div
                style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '8px',
                  backgroundColor: 'rgba(247,184,79,0.12)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                }}
              >
                <Trophy size={16} style={{ color: '#F7B84F' }} />
              </div>
              <div>
                <h3
                  style={{
                    fontSize: '0.9375rem',
                    fontWeight: 500,
                    color: '#F5F5F3',
                    margin: '0 0 4px',
                  }}
                >
                  {award.title}
                </h3>
                <p style={{ fontSize: '0.8125rem', color: 'rgba(245,245,243,0.45)', margin: 0 }}>
                  {award.issuer} &middot; {award.year}
                </p>
              </div>
            </div>
          ))}
        </div>

        <Link
          href="/awards"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '6px',
            fontSize: '0.875rem',
            color: 'rgba(245,245,243,0.6)',
            textDecoration: 'none',
            borderBottom: '1px solid rgba(245,245,243,0.2)',
            paddingBottom: '2px',
          }}
        >
          View all awards & certifications <ArrowRight size={14} />
        </Link>
      </div>
    </section>
  )
}
