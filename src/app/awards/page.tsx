import type { Metadata } from 'next'
import Link from 'next/link'
import { Trophy, ArrowRight, GraduationCap } from 'lucide-react'
import { awards } from '@/data/awards'
import { certifications } from '@/data/siteData'

export const metadata: Metadata = {
  title: 'Awards & Certifications',
  description:
    'Industry awards, professional certifications, and academic credentials for Joseph Carl R. Briones — marketing strategist and community platform founder.',
}

export default function AwardsPage() {
  return (
    <div style={{ backgroundColor: '#0A0F1E', minHeight: '100vh' }}>
      {/* Hero */}
      <section style={{ padding: '80px 24px 60px', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <p className="eyebrow" style={{ color: '#4F8EF7', marginBottom: '16px' }}>
            Recognition
          </p>
          <h1 className="display-lg" style={{ color: '#F5F5F3', margin: '0 0 16px' }}>
            Awards & Certifications
          </h1>
          <p className="body-lg" style={{ color: 'rgba(245,245,243,0.55)', maxWidth: '520px', margin: 0 }}>
            Industry recognition, professional development, and verified credentials spanning a 20+ year career.
          </p>
        </div>
      </section>

      {/* Industry Awards */}
      <section style={{ padding: '64px 24px', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <p className="eyebrow" style={{ color: '#4F8EF7', marginBottom: '32px' }}>
            Industry & Company Awards
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {awards.map((award) => (
              <div
                key={award.id}
                className="jcb-card"
                style={{
                  padding: '24px',
                  display: 'flex',
                  gap: '20px',
                  alignItems: 'flex-start',
                }}
              >
                {/* Icon */}
                <div
                  style={{
                    width: '44px',
                    height: '44px',
                    borderRadius: '4px',
                    backgroundColor: 'rgba(43,110,219,0.12)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                  }}
                >
                  <Trophy size={18} style={{ color: 'var(--jcb-blue-bright)' }} />
                </div>

                {/* Content */}
                <div style={{ flex: 1 }}>
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'flex-start',
                      gap: '12px',
                      flexWrap: 'wrap',
                    }}
                  >
                    <h3
                      style={{
                        fontSize: '1rem',
                        fontWeight: 500,
                        color: '#F5F5F3',
                        margin: '0 0 4px',
                      }}
                    >
                      {award.title}
                    </h3>
                    <span
                      style={{
                        fontSize: '0.8125rem',
                        color: 'rgba(245,245,243,0.35)',
                        whiteSpace: 'nowrap',
                      }}
                    >
                      {award.year}
                    </span>
                  </div>
                  <p style={{ fontSize: '0.8125rem', color: '#4F8EF7', margin: '0 0 10px', fontWeight: 500 }}>
                    {award.issuer}
                  </p>
                  <p className="body-sm" style={{ color: 'rgba(245,245,243,0.55)', margin: '0 0 10px' }}>
                    {award.description}
                  </p>
                  {award.roleContext && (
                    <p style={{ fontSize: '0.8125rem', color: 'rgba(245,245,243,0.38)', margin: '0 0 8px', fontStyle: 'italic' }}>
                      {award.roleContext}
                    </p>
                  )}
                  {award.campaigns && award.campaigns.length > 0 && (
                    <ul style={{ margin: '0 0 10px', padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '3px' }}>
                      {award.campaigns.map((campaign, j) => (
                        <li key={j} style={{ fontSize: '0.8125rem', color: 'rgba(245,245,243,0.45)', lineHeight: 1.5 }}>
                          — {campaign}
                        </li>
                      ))}
                    </ul>
                  )}
                  {award.linkedCaseStudy && (
                    <Link
                      href={`/work/${award.linkedCaseStudy}`}
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '4px',
                        fontSize: '0.8125rem',
                        color: '#4F8EF7',
                        textDecoration: 'none',
                      }}
                    >
                      View case study <ArrowRight size={13} />
                    </Link>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section style={{ padding: '64px 24px', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <p className="eyebrow" style={{ color: '#4F8EF7', marginBottom: '32px' }}>
            Professional Certifications
          </p>

          {/* Highlighted certs — card grid */}
          <div className="cert-grid">
            {certifications.filter((c) => c.highlight).map((cert) => {
              let badgeClass = 'cert-card__badge--default'
              let badgeLetter = cert.issuer.charAt(0)
              if (cert.issuer.includes('Google')) {
                badgeClass = 'cert-card__badge--google'
                badgeLetter = 'G'
              } else if (cert.issuer === 'Meta') {
                badgeClass = 'cert-card__badge--meta'
                badgeLetter = 'M'
              } else if (cert.issuer === 'Udemy') {
                badgeClass = 'cert-card__badge--udemy'
                badgeLetter = 'U'
              } else if (cert.issuer.includes('Coursera')) {
                badgeClass = 'cert-card__badge--coursera'
                badgeLetter = 'C'
              }
              return (
                <div key={cert.title} className="cert-card">
                  <div className={`cert-card__badge ${badgeClass}`}>{badgeLetter}</div>
                  <p className="cert-card__category">{cert.category}</p>
                  <h3 className="cert-card__title">{cert.title}</h3>
                  <p className="cert-card__issuer">{cert.issuer} · {cert.year}</p>
                </div>
              )
            })}
          </div>

          {/* Other certs — simple list */}
          <div className="cert-list">
            {certifications.filter((c) => !c.highlight).map((cert) => (
              <div key={cert.title} className="cert-list-item">
                <span className="cert-list-item__title">{cert.title}</span>
                <span className="cert-list-item__meta">{cert.issuer} · {cert.year}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education & Credential */}
      <section style={{ padding: '64px 24px' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <p className="eyebrow" style={{ color: '#4F8EF7', marginBottom: '32px' }}>
            Education & Credential Verification
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <div
              className="jcb-card"
              style={{ padding: '24px', display: 'flex', gap: '16px', alignItems: 'flex-start' }}
            >
              <GraduationCap size={18} style={{ color: 'var(--jcb-blue-bright)', flexShrink: 0, marginTop: '2px' }} />
              <div>
                <h3 style={{ fontSize: '0.9375rem', fontWeight: 500, color: 'var(--jcb-white)', margin: '0 0 4px' }}>
                  San Beda University &middot; Manila, Philippines
                </h3>
                <p style={{ fontSize: '0.8125rem', color: 'var(--jcb-blue-bright)', margin: '0 0 6px' }}>
                  Bachelor of Science in Management &middot; 1996
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  )
}
