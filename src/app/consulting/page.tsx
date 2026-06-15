import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, CheckCircle2 } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Consulting',
  description:
    'Marketing strategy, campaign coordination, digital presence, and multicultural outreach consulting. Joseph Carl Briones, Los Angeles.',
}

const services = [
  'Marketing & Advertising Strategy',
  'Campaign Planning & Coordination',
  'Social Media Planning & Content Systems',
  'Website Strategy & Digital Presence',
  'AI-Assisted Content Workflows',
  'Multicultural Audience Outreach & Messaging',
  'Small Business Visibility Support',
]

const industries = [
  { label: 'Small to mid-size businesses', icon: '\uD83C\uDFE2' },
  { label: 'Startups', icon: '\uD83D\uDE80' },
  { label: 'Community organizations', icon: '\uD83E\uDD1D' },
  { label: 'Brands reaching Filipino-American & Asian-American audiences', icon: '\uD83C\uDF0F' },
]

export default function ConsultingPage() {
  return (
    <div style={{ backgroundColor: '#0A0F1E', minHeight: '100vh' }}>
      {/* Hero */}
      <section
        style={{
          padding: '80px 24px 60px',
          borderBottom: '1px solid rgba(255,255,255,0.06)',
        }}
      >
        <div style={{ maxWidth: '760px', margin: '0 auto' }}>
          <p className="eyebrow" style={{ color: '#4F8EF7', marginBottom: '16px' }}>
            Consulting
          </p>
          <h1 className="display-lg" style={{ color: '#F5F5F3', margin: '0 0 16px' }}>
            Selected Consulting & Project Work
          </h1>
          <p className="body-lg" style={{ color: 'rgba(245,245,243,0.55)', maxWidth: '560px', margin: 0 }}>
            Available for marketing strategy, campaign coordination, digital presence, and multicultural outreach
            projects.
          </p>
        </div>
      </section>

      {/* Services */}
      <section style={{ padding: '64px 24px', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
        <div style={{ maxWidth: '760px', margin: '0 auto' }}>
          <p className="eyebrow" style={{ color: '#4F8EF7', marginBottom: '32px' }}>
            Services
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {services.map((service) => (
              <div
                key={service}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  padding: '16px 20px',
                  backgroundColor: 'rgba(255,255,255,0.03)',
                  border: '1px solid rgba(255,255,255,0.06)',
                  borderRadius: '10px',
                }}
              >
                <CheckCircle2 size={16} style={{ color: '#4F8EF7', flexShrink: 0 }} />
                <span style={{ fontSize: '0.9375rem', color: 'rgba(245,245,243,0.8)' }}>{service}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who I work with */}
      <section style={{ padding: '64px 24px', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
        <div style={{ maxWidth: '760px', margin: '0 auto' }}>
          <p className="eyebrow" style={{ color: '#4F8EF7', marginBottom: '32px' }}>
            Who I Work With
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {industries.map((item) => (
              <div
                key={item.label}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '14px',
                  padding: '16px 20px',
                  backgroundColor: 'rgba(255,255,255,0.02)',
                  border: '1px solid rgba(255,255,255,0.06)',
                  borderRadius: '10px',
                }}
              >
                <span style={{ fontSize: '1.25rem' }}>{item.icon}</span>
                <span style={{ fontSize: '0.9375rem', color: 'rgba(245,245,243,0.7)' }}>{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Past clients highlight */}
      <section style={{ padding: '64px 24px', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
        <div style={{ maxWidth: '760px', margin: '0 auto' }}>
          <p className="eyebrow" style={{ color: '#4F8EF7', marginBottom: '20px' }}>
            Recent Project Work
          </p>
          <p className="body-lg" style={{ color: 'rgba(245,245,243,0.6)', margin: '0 0 24px' }}>
            Recent consulting engagements have included brand launch campaigns, national media buys, integrated
            digital campaigns, and community platform development for clients ranging from food brands to
            nonprofit organizations.
          </p>
          <Link
            href="/work"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              fontSize: '0.875rem',
              color: '#4F8EF7',
              textDecoration: 'none',
              fontWeight: 500,
            }}
          >
            View case studies <ArrowRight size={14} />
          </Link>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: '80px 24px', textAlign: 'center' }}>
        <div style={{ maxWidth: '520px', margin: '0 auto' }}>
          <h2 className="display-md" style={{ color: '#F5F5F3', margin: '0 0 16px' }}>
            Tell me about your project.
          </h2>
          <p className="body-lg" style={{ color: 'rgba(245,245,243,0.55)', margin: '0 0 32px' }}>
            Let&apos;s talk about what you&apos;re building and how I can help.
          </p>
          <Link href="/contact?as=consulting-client">
            <button
              style={{
                backgroundColor: '#4F8EF7',
                color: '#ffffff',
                border: 'none',
                borderRadius: '9999px',
                padding: '14px 32px',
                fontSize: '0.9375rem',
                fontWeight: 500,
                cursor: 'pointer',
              }}
            >
              Start a conversation
            </button>
          </Link>
        </div>
      </section>
    </div>
  )
}
