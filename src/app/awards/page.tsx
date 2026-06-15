import type { Metadata } from 'next'
import Link from 'next/link'
import { Trophy, CheckCircle2, ArrowRight, GraduationCap } from 'lucide-react'
import { awards, certifications } from '@/data/awards'

export const metadata: Metadata = {
  title: 'Awards & Certifications',
  description:
    'Industry awards, professional certifications, and academic credentials for Joseph Carl Briones \u2014 marketing strategist and community platform founder.',
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
                    borderRadius: '10px',
                    backgroundColor: award.featured ? 'rgba(247,184,79,0.15)' : 'rgba(255,255,255,0.04)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                  }}
                >
                  <Trophy size={18} style={{ color: award.featured ? '#F7B84F' : 'rgba(245,245,243,0.3)' }} />
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
                  <p className="body-sm" style={{ color: 'rgba(245,245,243,0.55)', margin: '0 0 12px' }}>
                    {award.description}
                  </p>
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
            Certifications
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {certifications.filter((c) => c.type === 'certification').map((cert) => (
              <div
                key={cert.id}
                className="jcb-card"
                style={{
                  padding: '20px 24px',
                  display: 'flex',
                  gap: '16px',
                  alignItems: 'flex-start',
                }}
              >
                <CheckCircle2
                  size={18}
                  style={{ color: '#4F8EF7', flexShrink: 0, marginTop: '2px' }}
                />
                <div>
                  <h3 style={{ fontSize: '0.9375rem', fontWeight: 500, color: '#F5F5F3', margin: '0 0 4px' }}>
                    {cert.title}
                  </h3>
                  <p style={{ fontSize: '0.8125rem', color: '#4F8EF7', margin: '0 0 6px' }}>
                    {cert.issuer} &middot; {cert.year}
                  </p>
                  <p className="body-sm" style={{ color: 'rgba(245,245,243,0.5)', margin: 0 }}>
                    {cert.description}
                  </p>
                </div>
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
              <GraduationCap size={18} style={{ color: '#4F8EF7', flexShrink: 0, marginTop: '2px' }} />
              <div>
                <h3 style={{ fontSize: '0.9375rem', fontWeight: 500, color: '#F5F5F3', margin: '0 0 4px' }}>
                  San Beda University
                </h3>
                <p style={{ fontSize: '0.8125rem', color: '#4F8EF7', margin: '0 0 6px' }}>
                  Bachelor&apos;s Degree in Management
                </p>
                <p className="body-sm" style={{ color: 'rgba(245,245,243,0.5)', margin: 0 }}>
                  Philippines
                </p>
              </div>
            </div>

            {certifications.filter((c) => c.type === 'education-verification').map((cert) => (
              <div
                key={cert.id}
                className="jcb-card"
                style={{ padding: '24px', display: 'flex', gap: '16px', alignItems: 'flex-start' }}
              >
                <CheckCircle2 size={18} style={{ color: '#F7B84F', flexShrink: 0, marginTop: '2px' }} />
                <div>
                  <h3 style={{ fontSize: '0.9375rem', fontWeight: 500, color: '#F5F5F3', margin: '0 0 4px' }}>
                    {cert.title}
                  </h3>
                  <p style={{ fontSize: '0.8125rem', color: '#4F8EF7', margin: '0 0 6px' }}>
                    {cert.issuer} &middot; {cert.year}
                  </p>
                  <p className="body-sm" style={{ color: 'rgba(245,245,243,0.5)', margin: 0 }}>
                    {cert.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
