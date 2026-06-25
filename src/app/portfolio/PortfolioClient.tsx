'use client'

import { useState } from 'react'
import VideoGallery from '@/components/VideoGallery'
import {
  videosAwardRecognition,
  videosDigitalCampaigns,
  videosTVCs,
  videosTVSegments,
  videosContentProduction,
} from '@/data/videoData'

/* ─── Category definitions ───────────────────────────────────────────────── */
const CATEGORIES = [
  { id: 'all',          label: 'All Work' },
  { id: 'award',        label: 'Award Recognition' },
  { id: 'digital',      label: 'Digital Campaigns' },
  { id: 'tvc',          label: 'TV Commercials' },
  { id: 'tv-segments',  label: 'TV Segments' },
  { id: 'content',      label: 'Content Production' },
  { id: 'social',       label: 'Social Media' },
  { id: 'events',       label: 'Events & Activation' },
  { id: 'ooh',          label: 'Out of Home' },
  { id: 'direct-mail',  label: 'Direct Mail' },
  { id: 'platforms',    label: 'Platforms & Digital' },
] as const

type CategoryId = (typeof CATEGORIES)[number]['id']

/* ─── Non-video portfolio items ─────────────────────────────────────────── */
interface PortfolioItem {
  category: string
  client: string
  title: string
  description: string
  tags: string[]
  pdfPath: string
  externalUrl?: string
  imageThumb?: string
}

const portfolioItems: PortfolioItem[] = [
  // Social Media
  {
    category: 'social',
    client: 'Martin Purefoods Corporation',
    title: 'Social Media Content Strategy — Martin Purefoods',
    description:
      'Seasonal holiday posts, Filipino-American cultural calendar content, and US mainstream event tie-ins (National Lumpia Day, 4th of July, Super Bowl). Published by Carl Briones as social media manager. Platforms: Facebook, Instagram.',
    tags: ['Social Media', 'Content Strategy', 'Filipino-American'],
    pdfPath: '/pdfs/JCBSM-Digital-Social-Media-Campaigns.pdf',
    imageThumb: '/images/portfolio/martin-social.jpg',
  },
  {
    category: 'social',
    client: 'Leano & Cruz, CPAs',
    title: 'Social Media Content — Taxation Education & Bookkeeping',
    description:
      'Educational social media series covering tax deductions, IRA contributions, child tax credits, EV credits, and bookkeeping services. Targeted to Filipino-American small business owners and families. Platform: Facebook.',
    tags: ['Social Media', 'Education Content', 'Small Business'],
    pdfPath: '/pdfs/JCBSM-Digital-Social-Media-Campaigns.pdf',
    imageThumb: '/images/portfolio/leano-social.jpg',
  },
  {
    category: 'social',
    client: 'RJB Law Offices',
    title: 'Social Media Content — Bankruptcy & Debt Relief',
    description:
      'Facebook social media series for RJB Law Offices (Family Finance Lawyers) targeting Filipino-Americans facing financial distress. Emotional storytelling approach — "Libreng Konsulta" CTA. Serving LA, Orange, San Bernardino, Riverside, and Santa Barbara counties.',
    tags: ['Social Media', 'Legal Services', 'Filipino-American'],
    pdfPath: '/pdfs/JCBSM-Digital-Social-Media-Campaigns.pdf',
    imageThumb: '/images/portfolio/rjb-social.jpg',
  },
  // Events & Activation
  {
    category: 'events',
    client: 'WorldRemit + Ding',
    title: 'On-Ground Brand Activations — Filipino-American Events',
    description:
      'Booth activations at Philippine Independence Day (Carson City, CA), Star Magic Concert (LA), TFC Concerts (LA + SF), and Jollibee partnership activations (Eagle Rock Mall + West Covina, CA). Brands: WorldRemit and Ding (digital top-up).',
    tags: ['Events', 'Brand Activation', 'Multicultural'],
    pdfPath: '/pdfs/JCBSM-Events-Outdoor-Activation.pdf',
    imageThumb: '/images/case-studies/activations-worldremit-independence-day.jpg',
  },
  {
    category: 'events',
    client: 'TFC / ABS-CBN International',
    title: 'ASAP Live in New York — Barclays Center',
    description:
      '12,000-capacity sold-out live event at Barclays Center. Head of Sponsorship and Ad Sales Logistics. Established sponsorship tier architecture, managed inter-regional U.S.–Philippines coordination, executed on-stage pre-show brand activations. Won MVP — Most Outstanding Eventurer.',
    tags: ['Live Event', 'Sponsorship', 'MVP Award'],
    pdfPath: '/pdfs/MVP-ASAP-Live-New-York.pdf',
    imageThumb: '/images/case-studies/asap-barclays-stage.jpg',
  },
  {
    category: 'events',
    client: 'TFC / ABS-CBN International',
    title: 'TFC at the Movies — Community / Grassroots Marketing',
    description:
      "Supported launch of TFC's theatrical movie feature ('Quezon\\'s Game'). Installed posters and leave-behinds in strip malls with Filipino shops near theaters. 5-day, 54.3-mile coverage across North Hills/Panorama, DTLA/Vermont, Buena Park/Anaheim/Garden Grove, Carson City, and West Covina.",
    tags: ['Grassroots', 'Community Marketing', 'OOH Distribution'],
    pdfPath: '/pdfs/JCBSM-Actual-Advertising-Campaigns.pdf',
    imageThumb: '/images/portfolio/tfc-movies-grassroots.jpg',
  },
  // Out of Home
  {
    category: 'ooh',
    client: "The Baker's Son by Valerio's",
    title: 'Out-of-Home Campaign — Static & Digital Billboards',
    description:
      'Billboard campaign in the vicinity of The Baker\'s Son Florida locations. "NOW OPEN — Take Exit 48" messaging. Static and digital billboard units. Campaign presence: Outfront Media placements.',
    tags: ['OOH', 'Billboard', 'Brand Launch'],
    pdfPath: '/pdfs/JCBSM-Events-Outdoor-Activation.pdf',
    imageThumb: '/images/case-studies/bakers-son-billboard.jpg',
  },
  {
    category: 'ooh',
    client: 'Goldilocks USA',
    title: 'Out-of-Home — Waze Map Ads',
    description:
      'Geo-targeted Waze map advertising highlighting Goldilocks store locations and pushing "$5 OFF with $50 purchase" promotions. Targeted users near Goldilocks Cerritos, Carson, Santa Clarita, and National City stores.',
    tags: ['OOH', 'Geo-targeting', 'Waze Ads'],
    pdfPath: '/pdfs/JCBSM-Events-Outdoor-Activation.pdf',
    imageThumb: '/images/portfolio/goldilocks-waze.jpg',
  },
  // Direct Mail
  {
    category: 'direct-mail',
    client: "Ding · The Baker's Son · RJB Law Offices",
    title: 'Direct Mail Campaigns — Geo-Targeted to Filipino Households',
    description:
      'Guided concept ideation and creative development for geo-targeted direct mail pieces. Ding: "Sa Ding PADA-LOAD, libre ang first ₱50 na load" — door drop to Filipino households. Baker\'s Son: "Dear Neighbor" grand opening letter + product mailer. RJB Law Offices: "Second Notice" style mailer for debt relief outreach.',
    tags: ['Direct Mail', 'Geo-targeting', 'Filipino-American'],
    pdfPath: '/pdfs/JCBSM-Actual-Advertising-Campaigns.pdf',
    imageThumb: '/images/portfolio/direct-mail-collage.jpg',
  },
  // Platforms
  {
    category: 'platforms',
    client: 'Self — Founder',
    title: 'FilipinoFoodNearMe.org',
    description:
      'National directory of Filipino food businesses across the U.S. 1,200+ listings across 34+ states. Built with Next.js, Tailwind CSS, Vercel, and Claude Code.',
    tags: ['Platform', 'Founder', 'Next.js'],
    pdfPath: '',
    externalUrl: 'https://www.filipinofoodnerarme.org',
  },
  {
    category: 'platforms',
    client: 'Self — Founder',
    title: 'FilipinoEventsNearMe.org',
    description:
      'National Filipino-American events calendar. 150+ events across 92+ cities. Built with Next.js, Tailwind CSS, Vercel, and Claude Code.',
    tags: ['Platform', 'Founder', 'Next.js'],
    pdfPath: '',
    externalUrl: 'https://www.filipinoeventsnerarme.org',
  },
]

/* ─── Video sections ─────────────────────────────────────────────────────── */
const videoSections = [
  { id: 'award' as const,       label: 'Award Recognition',  videos: videosAwardRecognition },
  { id: 'digital' as const,     label: 'Digital Campaigns',  videos: videosDigitalCampaigns },
  { id: 'tvc' as const,         label: 'TV Commercials',     videos: videosTVCs },
  { id: 'tv-segments' as const, label: 'TV Segments',        videos: videosTVSegments },
  { id: 'content' as const,     label: 'Content Production', videos: videosContentProduction },
]

/* ─── Component ──────────────────────────────────────────────────────────── */
export default function PortfolioClient() {
  const [activeCategory, setActiveCategory] = useState<CategoryId>('all')

  const visibleVideoSections = videoSections.filter(
    (s) => activeCategory === 'all' || activeCategory === s.id,
  )

  const visibleItems = portfolioItems.filter(
    (item) => activeCategory === 'all' || item.category === activeCategory,
  )

  const hasContent =
    visibleVideoSections.some((s) => s.videos.length > 0) || visibleItems.length > 0

  const activeCategoryLabel = CATEGORIES.find((c) => c.id === activeCategory)?.label ?? ''

  return (
    <main id="main-content" className="portfolio-page">
      <div className="portfolio-hero">
        <p className="eyebrow" style={{ color: 'var(--jcb-blue-bright)', marginBottom: '0.5rem' }}>
          Portfolio &amp; Work Samples
        </p>
        <h1>20+ Years of Campaigns, Content &amp; Community</h1>
        <p className="portfolio-hero__sub">
          A comprehensive record of campaigns, TV commercials, social content, live events,
          out-of-home, direct mail, and platform work — across Filipino-American and mainstream
          U.S. markets.
        </p>
      </div>

      {/* Category filter tabs */}
      <nav className="portfolio-tabs" aria-label="Filter work by category">
        <div className="portfolio-tabs__scroll">
          {CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`portfolio-tab${activeCategory === cat.id ? ' portfolio-tab--active' : ''}`}
              aria-pressed={activeCategory === cat.id}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </nav>

      <div className="portfolio-content">
        {/* Video sections */}
        {visibleVideoSections.map((section) => (
          <section key={section.id} aria-label={section.label}>
            <VideoGallery videos={section.videos} sectionTitle={section.label} />
          </section>
        ))}

        {/* Non-video portfolio items */}
        {visibleItems.length > 0 && (
          <section aria-label="Campaign and project work">
            <p className="cs-gallery__label" aria-hidden="true">
              {activeCategory === 'all' ? 'Campaigns, Events & More' : activeCategoryLabel}
            </p>
            <div className="portfolio-items-grid">
              {visibleItems.map((item, i) => (
                <PortfolioItemCard key={i} item={item} />
              ))}
            </div>
          </section>
        )}

        {!hasContent && (
          <p className="portfolio-empty">No items in this category yet.</p>
        )}
      </div>
    </main>
  )
}

/* ─── Portfolio Item Card ─────────────────────────────────────────────────── */
function PortfolioItemCard({ item }: { item: PortfolioItem }) {
  return (
    <div className="portfolio-card">
      {item.externalUrl ? (
        <a
          href={item.externalUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="portfolio-card__link"
          aria-label={`Visit ${item.title} (opens in new tab)`}
        >
          <span aria-hidden="true">↗</span>
        </a>
      ) : item.pdfPath ? (
        <div className="portfolio-card__actions">
          <a
            href={item.pdfPath}
            target="_blank"
            rel="noopener noreferrer"
            className="portfolio-card__btn"
          >
            View PDF<span className="sr-only"> (opens in new tab)</span>
          </a>
          <a href={item.pdfPath} download className="portfolio-card__btn portfolio-card__btn--ghost">
            Download
          </a>
        </div>
      ) : null}

      <p className="portfolio-card__client">{item.client}</p>
      <h3 className="portfolio-card__title">{item.title}</h3>
      <p className="portfolio-card__desc">{item.description}</p>
      <div className="portfolio-card__tags">
        {item.tags.map((tag) => (
          <span key={tag} className="portfolio-card__tag">
            {tag}
          </span>
        ))}
      </div>
    </div>
  )
}
