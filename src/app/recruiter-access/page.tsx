import type { Metadata } from 'next'
import Link from 'next/link'
import { Download, ExternalLink, Trophy, CheckCircle2 } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Recruiter Access',
  description: 'Private recruiter access page for Joseph Carl Briones.',
  robots: { index: false, follow: false },
}

export default function RecruiterAccessPage() {
  return (
    <div style={{ backgroundColor: '#0A0F1E', minHeight: '100vh' }}>
      {/* Header */}
      <section style={{ padding: '80px 24px 48px', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
        <div style={{ maxWidth: '760px', margin: '0 auto' }}>
          <div
            style={{
              display: 'inline-block',
              fontSize: '0.75rem',
              fontWeight: 600,
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              color: '#4F8EF7',
              backgroundColor: 'rgba(79,142,247,0.1)',
              border: '1px solid rgba(79,142,247,0.2)',
              borderRadius: '4px',
              padding: '4px 10px',
              marginBottom: '24px',
            }}
          >
            Recruiter Access &mdash; Private
          </div>
          <h1 className="display-lg" style={{ color: '#F5F5F3', margin: '0 0 16px' }}>
            Joseph Carl Briones
          </h1>
          <p
            style={{
              fontSize: '1rem',
              color: 'rgba(245,245,243,0.45)',
              margin: '0 0 24px',
            }}
          >
            Marketing Strategist &nbsp;&middot;&nbsp; Community Platform Builder &nbsp;&middot;&nbsp; Multicultural Media Professional &nbsp;&middot;&nbsp; Los Angeles, CA
          </p>
          <p className="body-lg" style={{ color: 'rgba(245,245,243,0.6)', maxWidth: '600px', margin: 0 }}>
            20+ years building meaningful connections between brands, audiences, and communities &mdash; across
            broadcast media, major advertising agencies, and digital platforms. Award-winning. Bilingual
            (English/Tagalog). Open to marketing leadership, communications, and community affairs roles.
          </p>
        </div>
      </section>

      {/* Resume downloads */}
      <section style={{ padding: '48px 24px', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
        <div style={{ maxWidth: '760px', margin: '0 auto' }}>
          <p className="eyebrow" style={{ color: '#4F8EF7', marginBottom: '20px' }}>
            R&eacute;sum&eacute; Downloads
          </p>
          <p className="body-sm" style={{ color: 'rgba(245,245,243,0.5)', marginBottom: '20px' }}>
            Both versions are ATS-optimized for automated application systems. Job titles and employer names are
            exact matches to the résumé documents.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <a
              href="/downloads/JCB-Resume-Private.pdf"
              download
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                padding: '16px 20px',
                backgroundColor: 'rgba(79,142,247,0.08)',
                border: '1px solid rgba(79,142,247,0.25)',
                borderRadius: '10px',
                textDecoration: 'none',
                color: '#F5F5F3',
                fontSize: '0.9375rem',
                fontWeight: 500,
              }}
            >
              <Download size={16} style={{ color: '#4F8EF7' }} />
              R&eacute;sum&eacute; &mdash; General / Private Sector (PDF)
            </a>
            <a
              href="/downloads/JCB-Resume-Public.pdf"
              download
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                padding: '16px 20px',
                backgroundColor: 'rgba(79,142,247,0.08)',
                border: '1px solid rgba(79,142,247,0.25)',
                borderRadius: '10px',
                textDecoration: 'none',
                color: '#F5F5F3',
                fontSize: '0.9375rem',
                fontWeight: 500,
              }}
            >
              <Download size={16} style={{ color: '#4F8EF7' }} />
              R&eacute;sum&eacute; &mdash; Public Sector / Government (PDF)
            </a>
          </div>
        </div>
      </section>

      {/* Key highlights */}
      <section style={{ padding: '48px 24px', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
        <div style={{ maxWidth: '760px', margin: '0 auto' }}>
          <p className="eyebrow" style={{ color: '#4F8EF7', marginBottom: '20px' }}>
            Key Highlights
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '10px' }} className="highlights-grid">
            {[
              '20+ years marketing, media & advertising',
              '10+ years ABS-CBN International / TFC',
              '3AF Digital Campaign of the Year (2018)',
              'MVP \u2014 Most Outstanding Eventurer (2016)',
              'Google IT Support Professional Certificate',
              'U.S. Census Bureau Enumerator (Title 13)',
              'Founder: FilipinoFoodNearMe.org (1,239+ listings)',
              'Bilingual: English / Tagalog',
            ].map((item) => (
              <div
                key={item}
                style={{
                  display: 'flex',
                  gap: '10px',
                  alignItems: 'flex-start',
                  padding: '12px 16px',
                  backgroundColor: 'rgba(255,255,255,0.03)',
                  border: '1px solid rgba(255,255,255,0.06)',
                  borderRadius: '8px',
                }}
              >
                <CheckCircle2 size={15} style={{ color: '#4F8EF7', flexShrink: 0, marginTop: '1px' }} />
                <span style={{ fontSize: '0.875rem', color: 'rgba(245,245,243,0.7)' }}>{item}</span>
              </div>
            ))}
          </div>
        </div>

      </section>

      {/* Featured case studies */}
      <section style={{ padding: '48px 24px', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
        <div style={{ maxWidth: '760px', margin: '0 auto' }}>
          <p className="eyebrow" style={{ color: '#4F8EF7', marginBottom: '20px' }}>
            Case Studies
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {[
              { href: '/work/3af-digital-campaign-of-the-year', label: '3AF Digital Campaign of the Year \u2014 Remitly \u00d7 TFC', award: true },
              { href: '/work/asap-live-ny-barclays-center', label: 'ASAP Live NY \u2014 Barclays Center (12,000 cap.)', award: true },
              { href: '/work/the-bakers-son-brand-launch', label: "The Baker\u2019s Son \u2014 Brand Launch (Florida)", award: false },
              { href: '/work/filipinofoodnearme-platform', label: 'FilipinoFoodNearMe.org \u2014 Platform Founder', award: false },
              { href: '/work/us-census-bureau-field-operations', label: 'U.S. Census Bureau \u2014 Field Operations (2020)', award: false },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                  padding: '14px 18px',
                  backgroundColor: 'rgba(255,255,255,0.03)',
                  border: '1px solid rgba(255,255,255,0.06)',
                  borderRadius: '8px',
                  textDecoration: 'none',
                  color: '#F5F5F3',
                  fontSize: '0.9rem',
                }}
              >
                {item.award && <Trophy size={14} style={{ color: '#F7B84F', flexShrink: 0 }} />}
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Links */}
      <section style={{ padding: '48px 24px' }}>
        <div style={{ maxWidth: '760px', margin: '0 auto' }}>
          <p className="eyebrow" style={{ color: '#4F8EF7', marginBottom: '20px' }}>
            Profile & Contact
          </p>
          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', marginBottom: '24px' }}>
            <a
              href="https://linkedin.com/in/josephcarlbriones"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '10px 20px',
                backgroundColor: '#4F8EF7',
                borderRadius: '9999px',
                textDecoration: 'none',
                color: '#ffffff',
                fontSize: '0.875rem',
                fontWeight: 500,
              }}
            >
              <ExternalLink size={15} /> View LinkedIn
            </a>
            <Link
              href="/contact"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '10px 20px',
                border: '1px solid rgba(255,255,255,0.15)',
                borderRadius: '9999px',
                textDecoration: 'none',
                color: 'rgba(245,245,243,0.7)',
                fontSize: '0.875rem',
              }}
            >
              Send a message
            </Link>
          </div>
          <p style={{ fontSize: '0.8125rem', color: 'rgba(245,245,243,0.35)' }}>
            josephcarl.briones@gmail.com &middot; Los Angeles, CA &middot; Open to remote and hybrid roles
          </p>
        </div>
      </section>
    </div>
  )
}
