import type { Metadata } from 'next'
import Link from 'next/link'
import { certifications } from '@/data/siteData'

export const metadata: Metadata = {
  title: 'Résumé — Joseph Carl R. Briones',
  description:
    'Professional résumé for Joseph Carl R. Briones — Marketing Strategist, Multicultural Media Professional, Community Platform Founder. 20+ years experience. Los Angeles, CA.',
  robots: { index: true, follow: true },
}

export default function ResumePage() {
  return (
    <div style={{ backgroundColor: '#0A0F1E', minHeight: '100vh' }}>
      {/* Header */}
      <section style={{ padding: '80px 24px 48px', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
        <div style={{ maxWidth: '760px', margin: '0 auto' }}>
          <p className="eyebrow" style={{ color: '#4F8EF7', marginBottom: '16px' }}>
            Résumé
          </p>
          <h1 className="display-lg" style={{ color: '#F5F5F3', margin: '0 0 8px' }}>
            Joseph Carl R. Briones
          </h1>
          <p style={{ fontSize: '1rem', color: '#4F8EF7', fontWeight: 500, margin: '0 0 8px' }}>
            Marketing Strategist &nbsp;&middot;&nbsp; Multicultural Media Professional &nbsp;&middot;&nbsp; Community Platform Founder
          </p>
          <p style={{ fontSize: '0.9375rem', color: 'rgba(245,245,243,0.45)', margin: '0 0 32px' }}>
            Los Angeles, CA &nbsp;&middot;&nbsp; josephcarl.briones@gmail.com &nbsp;&middot;&nbsp; Open to remote and hybrid roles
          </p>
          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
            <Link href="/contact?as=recruiter-private" className="btn-primary">
              Request Full PDF R&eacute;sum&eacute;
            </Link>
            <Link href="/recruiter-access" className="btn-outline">
              Recruiter Access
            </Link>
          </div>
        </div>
      </section>

      {/* Summary */}
      <section style={{ padding: '48px 24px', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
        <div style={{ maxWidth: '760px', margin: '0 auto' }}>
          <p className="eyebrow" style={{ color: '#4F8EF7', marginBottom: '16px' }}>
            Summary
          </p>
          <p className="body-lg" style={{ color: 'rgba(245,245,243,0.65)', margin: 0 }}>
            Marketing strategist and multicultural media professional with 20+ years of experience across broadcast
            media, major advertising agencies, and digital platforms. Award-winning campaign architect with a track
            record of connecting global brands to Filipino-American and Asian-American audiences. Founder of two
            community platforms now serving 1,239+ business listings and 150+ events nationwide. Google IT Support
            certified. Bilingual: English / Tagalog.
          </p>
        </div>
      </section>

      {/* Experience */}
      <section style={{ padding: '48px 24px', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
        <div style={{ maxWidth: '760px', margin: '0 auto' }}>
          <p className="eyebrow" style={{ color: '#4F8EF7', marginBottom: '32px' }}>
            Work Experience
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
            {[
              {
                period: 'June 2024 – Present',
                role: 'Freelance Marketing & Technology Consultant',
                org: 'Self-Employed — Founder, FilipinoFoodNearMe.org & FilipinoEventsNearMe.org',
                location: 'Los Angeles, CA',
                bullets: [
                  'Built and launched FilipinoFoodNearMe.org — 1,239+ listings, 34 states, 422+ cities.',
                  'Built and launched FilipinoEventsNearMe.org — 150+ events, 38+ states, 92+ cities.',
                  'Full-stack development using Next.js, Tailwind CSS, Vercel, and Sentry.',
                ],
              },
              {
                period: 'Oct 2019 – May 2023',
                role: 'Founder | Principal Partner',
                org: 'JCB Strategic Media LLC',
                location: 'Los Angeles, CA',
                bullets: [
                  'Led integrated campaigns for The Baker’s Son by Valerio’s (brand launch), Goldilocks USA (national media buy), and Martin Purefoods.',
                  'Principal consultant for michaelwernecke.com — brand architecture and digital presence.',
                  'Managed media budgets across linear TV, OOH, and digital for multicultural campaigns.',
                ],
              },
              {
                period: '2021',
                role: 'Account Director',
                org: 'Westates Marketing & Automotive Promotions',
                location: 'Los Angeles, CA',
                bullets: null,
              },
              {
                period: 'Aug – Oct 2020',
                role: 'Enumerator',
                org: 'U.S. Census Bureau',
                location: 'Los Angeles, CA',
                bullets: ['Community outreach and enumeration under Title 13 federal compliance. Bilingual operations.'],
              },
              {
                period: 'May 2009 – Sep 2019',
                role: 'Account Executive, Advertising Sales',
                org: 'ABS-CBN International / The Filipino Channel (TFC)',
                location: 'Greater Los Angeles Area',
                bullets: [
                  '10 years, 5 months. Built advertising partnerships with McDonald’s, AT&T, Verizon, Toyota, Walmart, U.S. Bank, Sony Pictures, and Remitly.',
                  'Won 3AF Digital Campaign of the Year (2018) for Remitly \xd7 TFC global Christmas campaign.',
                  'Won MVP — Most Outstanding Eventurer (2016) for ASAP Live NY at Barclays Center (12,000 cap.).',
                ],
              },
              {
                period: '2008',
                role: 'Senior Planner',
                org: 'Universal McCann, Los Angeles',
                location: 'Greater Los Angeles Area',
                bullets: [
                  'Planned and bought media for Sony Pictures Entertainment across seven film releases: The House Bunny, Underworld: Rise of the Lycans, Seven Pounds, Pink Panther 2, Lakeview Terrace, Mardi Gras, The International.',
                ],
              },
            ].map((item, i) => (
              <div key={i}>
                <div style={{ display: 'flex', justifyContent: 'space-between', gap: '16px', flexWrap: 'wrap', marginBottom: '4px' }}>
                  <p style={{ fontSize: '1rem', fontWeight: 600, color: '#F5F5F3', margin: 0 }}>{item.role}</p>
                  <p style={{ fontSize: '0.8125rem', color: 'rgba(245,245,243,0.35)', margin: 0, whiteSpace: 'nowrap' }}>{item.period}</p>
                </div>
                <p style={{ fontSize: '0.875rem', color: '#4F8EF7', fontWeight: 500, margin: '0 0 4px' }}>{item.org}</p>
                <p style={{ fontSize: '0.8125rem', color: 'rgba(245,245,243,0.35)', margin: '0 0 10px' }}>{item.location}</p>
                {item.bullets && (
                  <ul style={{ margin: 0, paddingLeft: '18px', display: 'flex', flexDirection: 'column', gap: '4px' }}>
                    {item.bullets.map((b, j) => (
                      <li key={j} style={{ fontSize: '0.875rem', color: 'rgba(245,245,243,0.55)', lineHeight: 1.65 }}>{b}</li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Awards */}
      <section style={{ padding: '48px 24px', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
        <div style={{ maxWidth: '760px', margin: '0 auto' }}>
          <p className="eyebrow" style={{ color: '#4F8EF7', marginBottom: '24px' }}>
            Awards & Recognition
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {[
              { award: '3AF Digital Campaign of the Year', org: 'Asian American Advertising Federation (3AF)', year: '2018' },
              { award: 'MVP — Most Outstanding Eventurer', org: 'ABS-CBN International / The Filipino Channel', year: '2016' },
              { award: '"Walk on Water" Award', org: 'ABS-CBN International', year: '2009 & 2010' },
              { award: 'Agency of the Year — Best in Media', org: "4A's Philippines (Starcom, McDonald's team)", year: '2000 & 2001' },
            ].map((item) => (
              <div key={item.award} style={{ display: 'flex', justifyContent: 'space-between', gap: '12px', flexWrap: 'wrap' }}>
                <div>
                  <span style={{ fontSize: '0.9375rem', fontWeight: 500, color: '#F5F5F3' }}>{item.award}</span>
                  <span style={{ fontSize: '0.875rem', color: 'rgba(245,245,243,0.4)', marginLeft: '8px' }}>— {item.org}</span>
                </div>
                <span style={{ fontSize: '0.8125rem', color: 'rgba(245,245,243,0.3)', whiteSpace: 'nowrap' }}>{item.year}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications & Education */}
      <section style={{ padding: '48px 24px', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
        <div style={{ maxWidth: '760px', margin: '0 auto' }}>
          <p className="eyebrow" style={{ color: '#4F8EF7', marginBottom: '24px' }}>
            Certifications & Education
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {certifications.map((cert) => (
              <div key={cert.title} style={{ display: 'flex', justifyContent: 'space-between', gap: '12px', flexWrap: 'wrap' }}>
                <div>
                  <span style={{ fontSize: '0.875rem', fontWeight: 500, color: 'rgba(245,245,243,0.8)' }}>{cert.title}</span>
                  <span style={{ fontSize: '0.8125rem', color: 'rgba(245,245,243,0.4)', marginLeft: '8px' }}>— {cert.issuer}</span>
                </div>
                <span style={{ fontSize: '0.8125rem', color: 'rgba(245,245,243,0.3)', whiteSpace: 'nowrap' }}>{cert.year}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: '64px 24px' }}>
        <div style={{ maxWidth: '760px', margin: '0 auto' }}>
          <p className="eyebrow" style={{ color: '#4F8EF7', marginBottom: '16px' }}>
            Get the Full R&eacute;sum&eacute;
          </p>
          <p className="body-lg" style={{ color: 'rgba(245,245,243,0.55)', margin: '0 0 24px' }}>
            ATS-optimized PDF versions (Private Sector and Public Sector) available on request. Use the
            contact form to introduce yourself and I&apos;ll send the appropriate version.
          </p>
          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
            <Link href="/contact?as=recruiter-private" className="btn-primary">
              Contact for PDF &rarr;
            </Link>
            <Link href="/work" className="btn-outline">
              View case studies
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
