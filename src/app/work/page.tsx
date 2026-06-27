import type { Metadata } from 'next'
import { caseStudies } from '@/data/caseStudies'
import CaseStudyCard from '@/components/work/CaseStudyCard'

export const metadata: Metadata = {
  title: 'Work',
  description:
    'Case studies spanning 20+ years: digital campaigns, live events, brand launches, community platforms, and public service. Joseph Carl R. Briones portfolio.',
}

const filterTabs = ['All', 'Case Studies', 'Campaign Work', 'Digital', 'Live Event', 'Brand', 'Platform', 'Public Sector', 'Social Media']

export default function WorkPage() {
  return (
    <div style={{ backgroundColor: '#0A0F1E', minHeight: '100vh' }}>
      {/* Hero */}
      <section
        style={{
          padding: '80px 24px 60px',
          borderBottom: '1px solid rgba(255,255,255,0.06)',
        }}
      >
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <p className="eyebrow" style={{ color: '#4F8EF7', marginBottom: '16px' }}>
            Portfolio
          </p>
          <h1 className="display-lg" style={{ color: '#F5F5F3', margin: '0 0 16px' }}>
            Selected Work
          </h1>
          <p className="body-lg" style={{ color: 'rgba(245,245,243,0.55)', maxWidth: '600px', margin: 0 }}>
            Five documented case studies and seven campaign work samples across digital campaigns, live events,
            brand launches, founder-built platforms, and public sector field operations.
          </p>
        </div>
      </section>

      {/* Filter tabs - visual only for V1 */}
      <section style={{ padding: '24px 24px 0', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ display: 'flex', gap: '4px', overflowX: 'auto', paddingBottom: '24px' }}>
            {filterTabs.map((tab, i) => (
              <span
                key={tab}
                style={{
                  padding: '6px 16px',
                  borderRadius: '9999px',
                  fontSize: '0.8125rem',
                  fontWeight: 500,
                  whiteSpace: 'nowrap',
                  cursor: 'pointer',
                  backgroundColor: i === 0 ? 'rgba(79,142,247,0.15)' : 'transparent',
                  border: i === 0 ? '1px solid rgba(79,142,247,0.3)' : '1px solid rgba(255,255,255,0.08)',
                  color: i === 0 ? '#4F8EF7' : 'rgba(245,245,243,0.5)',
                }}
              >
                {tab}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Case studies grid */}
      <section style={{ padding: '48px 24px 96px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '20px',
            }}
            className="work-grid"
          >
            {caseStudies.map((cs) => (
              <CaseStudyCard key={cs.slug} cs={cs} />
            ))}
          </div>
        </div>
      </section>

    </div>
  )
}
