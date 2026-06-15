import type { Metadata } from 'next'
import { Download, ExternalLink } from 'lucide-react'
import ContactForm from '@/components/ui/ContactForm'

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Get in touch with Joseph Carl Briones \u2014 marketing strategist, community platform founder, and multicultural media professional. Los Angeles-based.',
}

export default function ContactPage() {
  return (
    <div style={{ backgroundColor: '#0A0F1E', minHeight: '100vh' }}>
      {/* Hero */}
      <section style={{ padding: '80px 24px 60px', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
        <div style={{ maxWidth: '760px', margin: '0 auto' }}>
          <p className="eyebrow" style={{ color: '#4F8EF7', marginBottom: '16px' }}>
            Contact
          </p>
          <h1 className="display-lg" style={{ color: '#F5F5F3', margin: '0 0 16px' }}>
            Get in touch.
          </h1>
          <p className="body-lg" style={{ color: 'rgba(245,245,243,0.55)', maxWidth: '520px', margin: 0 }}>
            Whether you&apos;re a recruiter, a brand with a project, or someone who wants to collaborate &mdash; I&apos;d love to
            hear from you.
          </p>
        </div>
      </section>

      {/* Contact form */}
      <section style={{ padding: '64px 24px', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
        <div style={{ maxWidth: '640px', margin: '0 auto' }}>
          <ContactForm />
        </div>
      </section>

      {/* Resume downloads */}
      <section style={{ padding: '64px 24px', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
        <div style={{ maxWidth: '640px', margin: '0 auto' }}>
          <p className="eyebrow" style={{ color: '#4F8EF7', marginBottom: '24px' }}>
            R&eacute;sum&eacute;
          </p>
          <p className="body-sm" style={{ color: 'rgba(245,245,243,0.5)', marginBottom: '20px' }}>
            Files open as PDFs. ATS-optimized for automated application systems.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <a
              href="/downloads/JCB-Resume-Private.pdf"
              download
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                padding: '16px 20px',
                backgroundColor: 'rgba(79,142,247,0.08)',
                border: '1px solid rgba(79,142,247,0.2)',
                borderRadius: '10px',
                textDecoration: 'none',
                color: '#F5F5F3',
                fontSize: '0.9375rem',
                fontWeight: 500,
                transition: 'background 0.2s ease',
              }}
            >
              <Download size={16} style={{ color: '#4F8EF7', flexShrink: 0 }} />
              Download R&eacute;sum&eacute; &mdash; General / Private Sector
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
                border: '1px solid rgba(79,142,247,0.2)',
                borderRadius: '10px',
                textDecoration: 'none',
                color: '#F5F5F3',
                fontSize: '0.9375rem',
                fontWeight: 500,
              }}
            >
              <Download size={16} style={{ color: '#4F8EF7', flexShrink: 0 }} />
              Download R&eacute;sum&eacute; &mdash; Public Sector / Government
            </a>
          </div>
        </div>
      </section>

      {/* Other ways to connect */}
      <section style={{ padding: '64px 24px' }}>
        <div style={{ maxWidth: '640px', margin: '0 auto' }}>
          <p className="eyebrow" style={{ color: '#4F8EF7', marginBottom: '24px' }}>
            Other Ways to Connect
          </p>
          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
            <a
              href="https://linkedin.com/in/josephcarlbriones"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '10px 20px',
                border: '1px solid rgba(255,255,255,0.12)',
                borderRadius: '9999px',
                textDecoration: 'none',
                color: 'rgba(245,245,243,0.7)',
                fontSize: '0.875rem',
              }}
            >
              <ExternalLink size={15} /> LinkedIn
            </a>
            <a
              href="https://linktr.ee/josephcarlbriones"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '10px 20px',
                border: '1px solid rgba(255,255,255,0.12)',
                borderRadius: '9999px',
                textDecoration: 'none',
                color: 'rgba(245,245,243,0.7)',
                fontSize: '0.875rem',
              }}
            >
              Linktree
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
