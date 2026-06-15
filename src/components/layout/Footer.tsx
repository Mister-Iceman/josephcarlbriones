'use client'

import { ExternalLink } from 'lucide-react'

export default function Footer() {
  return (
    <footer
      style={{
        borderTop: '1px solid rgba(255,255,255,0.06)',
        backgroundColor: '#050812',
        padding: '32px 24px',
      }}
    >
      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '16px',
        }}
      >
        {/* Left */}
        <p style={{ fontSize: '0.8125rem', color: 'rgba(245,245,243,0.4)', margin: 0 }}>
          &copy; 2026 Joseph Carl Briones &middot; Los Angeles, CA
        </p>

        {/* Center links */}
        <div style={{ display: 'flex', gap: '24px', alignItems: 'center' }}>
          {[
            { href: 'https://linkedin.com/in/josephcarlbriones', label: 'LinkedIn' },
            { href: 'https://linktr.ee/josephcarlbriones', label: 'Linktree' },
            { href: 'https://filipinofoodnearme.org', label: 'FilAm Network' },
          ].map((link) => (
            <a
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontSize: '0.8125rem',
                color: 'rgba(245,245,243,0.5)',
                textDecoration: 'none',
                transition: 'color 0.2s ease',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#4F8EF7')}
              onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(245,245,243,0.5)')}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Right icons */}
        <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
          {[
            { href: 'https://linkedin.com/in/josephcarlbriones', label: 'LinkedIn' },
            { href: 'https://linktr.ee/josephcarlbriones', label: 'Linktree' },
            { href: 'https://filipinofoodnearme.org', label: 'FilAm Network' },
          ].map((link) => (
            <a
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: 'rgba(245,245,243,0.4)', transition: 'color 0.2s ease' }}
              aria-label={link.label}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#4F8EF7')}
              onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(245,245,243,0.4)')}
            >
              <ExternalLink size={16} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}
