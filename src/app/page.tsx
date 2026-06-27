import type { Metadata } from 'next'
import Hero from '@/components/home/Hero'
import TrustStrip from '@/components/home/TrustStrip'
import LogoStrip from '@/components/home/LogoStrip'
import FeaturedWork from '@/components/home/FeaturedWork'
import VenturesTeaser from '@/components/home/VenturesTeaser'
import AwardsTeaser from '@/components/home/AwardsTeaser'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Joseph Carl R. Briones — Marketing Strategist & Community Platform Builder',
  description:
    '20+ years building meaningful connections between brands, audiences, and communities. Award-winning marketing strategist, multicultural media professional, and community platform founder. Los Angeles-based.',
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Joseph Carl R. Briones',
  jobTitle: 'Marketing Strategist & Community Platform Builder',
  url: 'https://josephcarlbriones.com',
  sameAs: [
    'https://linkedin.com/in/josephcarlbriones',
    'https://linktr.ee/josephcarlbriones',
    'https://filipinofoodnearme.org',
    'https://filipinoeventsnearme.org',
  ],
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Los Angeles',
    addressRegion: 'CA',
  },
  knowsLanguage: ['English', 'Tagalog'],
}

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <Hero />
      <TrustStrip />
      <LogoStrip />
      <FeaturedWork />
      <VenturesTeaser />
      <AwardsTeaser />

      {/* Contact CTA */}
      <section
        style={{
          backgroundColor: 'rgba(255,255,255,0.02)',
          borderTop: '1px solid rgba(255,255,255,0.06)',
          padding: '96px 24px',
          textAlign: 'center',
        }}
      >
        <div style={{ maxWidth: '560px', margin: '0 auto' }}>
          <h2 className="display-lg" style={{ color: '#F5F5F3', margin: '0 0 16px' }}>
            Let&apos;s build something together.
          </h2>
          <p className="body-lg" style={{ color: 'rgba(245,245,243,0.55)', margin: '0 0 40px' }}>
            Open to marketing leadership roles, communications positions, and consulting partnerships.
          </p>
          <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/contact" className="btn-primary">
              Send a message
            </Link>
            <a
              href="https://linkedin.com/in/josephcarlbriones"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline"
            >
              View LinkedIn
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
