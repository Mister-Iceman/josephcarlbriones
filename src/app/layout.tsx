import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react'
import Nav from '@/components/layout/Nav'
import Footer from '@/components/layout/Footer'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://josephcarlbriones.com'),
  title: {
    default: 'Joseph Carl Briones \u2014 Marketing Strategist & Community Platform Builder',
    template: '%s | Joseph Carl Briones',
  },
  description:
    '20+ years building meaningful connections between brands, audiences, and communities \u2014 across broadcast media, advertising agencies, and digital platforms. Award-winning. Bilingual. Los Angeles-based.',
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
  authors: [{ name: 'Joseph Carl Briones' }],
  creator: 'Joseph Carl Briones',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://josephcarlbriones.com',
    siteName: 'Joseph Carl Briones',
    title: 'Joseph Carl Briones \u2014 Marketing Strategist & Community Platform Builder',
    description: '20+ years building meaningful connections between brands, audiences, and communities.',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'Joseph Carl Briones' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Joseph Carl Briones \u2014 Marketing Strategist',
    description: '20+ years in marketing, advertising, and digital platforms. Los Angeles.',
  },
  robots: { index: true, follow: true },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <body style={{ backgroundColor: '#0A0F1E', color: '#F5F5F3', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
        <Nav />
        <main style={{ flex: 1, paddingTop: '64px' }}>{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  )
}
