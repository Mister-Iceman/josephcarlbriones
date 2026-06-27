import type { Metadata } from 'next'
import { Inter, Space_Grotesk } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react'
import Nav from '@/components/layout/Nav'
import Footer from '@/components/layout/Footer'
import { validateEnv } from '@/lib/env'
import './globals.css'

validateEnv()

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  weight: ['500', '600'],
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://josephcarlbriones.com'),
  title: {
    default: 'Joseph Carl R. Briones — Marketing Strategist & Community Platform Builder',
    template: '%s | Joseph Carl R. Briones',
  },
  description:
    '20+ years building meaningful connections between brands, audiences, and communities — across broadcast media, advertising agencies, and digital platforms. Award-winning. Bilingual. Los Angeles-based.',
  keywords: [
    'marketing strategist',
    'Los Angeles',
    'multicultural marketing',
    'Filipino American',
    'advertising',
    'media professional',
    'digital platforms',
    'community builder',
  ],
  authors: [{ name: 'Joseph Carl R. Briones' }],
  creator: 'Joseph Carl R. Briones',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://josephcarlbriones.com',
    siteName: 'Joseph Carl R. Briones',
    title: 'Joseph Carl R. Briones — Marketing Strategist & Community Platform Builder',
    description: '20+ years building meaningful connections between brands, audiences, and communities.',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'Joseph Carl R. Briones' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Joseph Carl R. Briones — Marketing Strategist',
    description: '20+ years in marketing, advertising, and digital platforms. Los Angeles.',
  },
  robots: { index: true, follow: true },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body style={{ backgroundColor: '#090E1A', color: '#F4F6FA', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
        <a href="#main-content" className="skip-to-content">Skip to main content</a>
        <Nav />
        <main id="main-content" style={{ flex: 1, paddingTop: '64px' }}>{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  )
}
