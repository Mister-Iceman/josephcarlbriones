'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { caseStudies } from '@/data/caseStudies'
import CaseStudyCard from '@/components/work/CaseStudyCard'
import VideoGallery from '@/components/VideoGallery'
import {
  videosAwardRecognition,
  videosDigitalCampaigns,
  videosTVCs,
  videosTVSegments,
  videosContentProduction,
} from '@/data/videoData'

/* ─── Campaign Work category tabs ───────────────────────────────────────── */
const CAMPAIGN_CATEGORIES = [
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

type CampaignCategoryId = (typeof CAMPAIGN_CATEGORIES)[number]['id']

/* ─── Non-video portfolio items ─────────────────────────────────────────── */
interface PortfolioItem {
  category: string
  client: string
  title: string
  description: string
  tags: string[]
  pdfPath?: string
  caseStudySlug?: string
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
    caseStudySlug: 'martin-purefoods-digital-social',
    imageThumb: '',
  },
  {
    category: 'social',
    client: 'Leano & Cruz, CPAs',
    title: 'Social Media Content — Taxation Education & Bookkeeping',
    description:
      'Educational social media series covering tax deductions, IRA contributions, child tax credits, EV credits, and bookkeeping services. Targeted to Filipino-American small business owners and families. Platform: Facebook.',
    tags: ['Social Media', 'Education Content', 'Small Business'],
    imageThumb: '/images/portfolio/leano-social.jpg',
  },
  {
    category: 'social',
    client: 'RJB Law Offices',
    title: 'Social Media Content — Bankruptcy & Debt Relief',
    description:
      'Facebook social media series for RJB Law Offices (Family Finance Lawyers) targeting Filipino-Americans facing financial distress. Emotional storytelling approach — "Libreng Konsulta" CTA. Serving LA, Orange, San Bernardino, Riverside, and Santa Barbara counties.',
    tags: ['Social Media', 'Legal Services', 'Filipino-American'],
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
    caseStudySlug: 'on-ground-activations-jcbsm',
    imageThumb: '/images/case-studies/activations-worldremit-independence-day.jpg',
  },
  {
    category: 'events',
    client: 'TFC / ABS-CBN International',
    title: 'ASAP Live in New York — Barclays Center',
    description:
      '12,000-capacity sold-out live event at Barclays Center. Head of Sponsorship and Ad Sales Logistics. Established sponsorship tier architecture, managed inter-regional U.S.–Philippines coordination, executed on-stage pre-show brand activations. Won MVP — Most Outstanding Eventurer.',
    tags: ['Live Event', 'Sponsorship', 'MVP Award'],
    caseStudySlug: 'asap-live-ny-barclays-center',
    imageThumb: '/images/case-studies/asap-barclays-stage.jpg',
  },
  {
    category: 'events',
    client: 'TFC / ABS-CBN International',
    title: 'TFC at the Movies — Community / Grassroots Marketing',
    description:
      "Supported launch of TFC's theatrical movie feature ('Quezon\\'s Game'). Installed posters and leave-behinds in strip malls with Filipino shops near theaters. 5-day, 54.3-mile coverage across North Hills/Panorama, DTLA/Vermont, Buena Park/Anaheim/Garden Grove, Carson City, and West Covina.",
    tags: ['Grassroots', 'Community Marketing', 'OOH Distribution'],
    caseStudySlug: 'on-ground-activations-jcbsm',
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
    caseStudySlug: 'the-bakers-son-brand-launch',
    imageThumb: '/images/case-studies/bakers-son-billboard.jpg',
  },
  {
    category: 'ooh',
    client: 'Goldilocks USA',
    title: 'Out-of-Home — Waze Map Ads',
    description:
      'Geo-targeted Waze map advertising highlighting Goldilocks store locations and pushing "$5 OFF with $50 purchase" promotions. Targeted users near Goldilocks Cerritos, Carson, Santa Clarita, and National City stores.',
    tags: ['OOH', 'Geo-targeting', 'Waze Ads'],
    caseStudySlug: 'goldilocks-usa-media-campaign',
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
    caseStudySlug: 'the-bakers-son-brand-launch',
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
    externalUrl: 'https://www.filipinofoodnearme.org',
  },
  {
    category: 'platforms',
    client: 'Self — Founder',
    title: 'FilipinoEventsNearMe.org',
    description:
      'National Filipino-American events calendar. 150+ events across 92+ cities. Built with Next.js, Tailwind CSS, Vercel, and Claude Code.',
    tags: ['Platform', 'Founder', 'Next.js'],
    externalUrl: 'https://www.filipinoeventsnearme.org',
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
export default function WorkPageClient() {
  const [activeTab, setActiveTab] = useState<'case-studies' | 'campaign-work'>('case-studies')
  const [activeCampaignCategory, setActiveCampaignCategory] = useState<CampaignCategoryId>('all')
  const [lightboxImage, setLightboxImage] = useState<{ src: string; alt: string } | null>(null)

  useEffect(() => {
    if (!lightboxImage) return
    const handler = (e: KeyboardEvent) => { if (e.key === 'Escape') setLightboxImage(null) }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [lightboxImage])

  const caseStudyList = caseStudies.filter((cs) => cs.type !== 'portfolio-work')

  const visibleVideoSections = videoSections.filter(
    (s) => (activeCampaignCategory === 'all' || activeCampaignCategory === s.id) && s.videos.length > 0,
  )

  const visibleItems = portfolioItems.filter(
    (item) => activeCampaignCategory === 'all' || item.category === activeCampaignCategory,
  )

  const activeCategoryLabel = CAMPAIGN_CATEGORIES.find((c) => c.id === activeCampaignCategory)?.label ?? ''

  return (
    <div style={{ backgroundColor: '#0A0F1E', minHeight: '100vh' }}>
      {/* Hero */}
      <section style={{ padding: '80px 24px 60px', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <p className="eyebrow" style={{ color: '#4F8EF7', marginBottom: '16px' }}>Work</p>
          <h1 className="display-lg" style={{ color: '#F5F5F3', margin: '0 0 16px' }}>Selected Work</h1>
          <p className="body-lg" style={{ color: 'rgba(245,245,243,0.55)', maxWidth: '600px', margin: 0 }}>
            Six documented case studies and campaign work spanning 20+ years &mdash; digital campaigns, live events,
            brand launches, founder-built platforms, and public sector field operations.
          </p>
        </div>
      </section>

      {/* Main tab switcher */}
      <div style={{ borderBottom: '1px solid rgba(255,255,255,0.06)', backgroundColor: 'rgba(255,255,255,0.01)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px', display: 'flex', gap: '0' }}>
          {(['case-studies', 'campaign-work'] as const).map((tab) => {
            const label = tab === 'case-studies' ? 'Case Studies' : 'Campaign Work'
            const isActive = activeTab === tab
            return (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                style={{
                  padding: '16px 24px',
                  fontSize: '0.9375rem',
                  fontWeight: 500,
                  background: 'none',
                  border: 'none',
                  borderBottom: isActive ? '2px solid #4F8EF7' : '2px solid transparent',
                  color: isActive ? '#4F8EF7' : 'rgba(245,245,243,0.5)',
                  cursor: 'pointer',
                  transition: 'color 0.2s ease, border-color 0.2s ease',
                  marginBottom: '-1px',
                }}
              >
                {label}
              </button>
            )
          })}
        </div>
      </div>

      {/* Tab content */}
      {activeTab === 'case-studies' ? (
        /* ── Case Studies tab ── */
        <section style={{ padding: '48px 24px 96px' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
            <div
              style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px' }}
              className="work-grid"
            >
              {caseStudyList.map((cs) => (
                <CaseStudyCard key={cs.slug} cs={cs} />
              ))}
            </div>
          </div>
        </section>
      ) : (
        /* ── Campaign Work tab ── */
        <div>
          {/* Category filter tabs */}
          <nav className="portfolio-tabs" aria-label="Filter campaign work by category">
            <div className="portfolio-tabs__scroll">
              {CAMPAIGN_CATEGORIES.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCampaignCategory(cat.id)}
                  className={`portfolio-tab${activeCampaignCategory === cat.id ? ' portfolio-tab--active' : ''}`}
                  aria-pressed={activeCampaignCategory === cat.id}
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
                  {activeCampaignCategory === 'all' ? 'Campaigns, Events & More' : activeCategoryLabel}
                </p>
                <div className="portfolio-items-grid">
                  {visibleItems.map((item, i) => (
                    <PortfolioItemCard
                      key={i}
                      item={item}
                      onImageClick={(src, alt) => setLightboxImage({ src, alt })}
                    />
                  ))}
                </div>
              </section>
            )}

            {visibleVideoSections.length === 0 && visibleItems.length === 0 && (
              <p className="portfolio-empty">No items in this category yet.</p>
            )}
          </div>
        </div>
      )}

      {/* Image lightbox */}
      {lightboxImage && (
        <div
          className="portfolio-lightbox"
          onClick={() => setLightboxImage(null)}
          role="dialog"
          aria-modal="true"
          aria-label={lightboxImage.alt}
        >
          <button
            className="portfolio-lightbox__close"
            onClick={() => setLightboxImage(null)}
            aria-label="Close image"
          >
            ✕ Close
          </button>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={lightboxImage.src}
            alt={lightboxImage.alt}
            className="portfolio-lightbox__img"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </div>
  )
}

/* ─── Portfolio Item Card ─────────────────────────────────────────────────── */
function PortfolioItemCard({
  item,
  onImageClick,
}: {
  item: PortfolioItem
  onImageClick?: (src: string, alt: string) => void
}) {
  return (
    <div className="portfolio-card">
      {item.imageThumb && (
        <button
          className="portfolio-card__thumb-btn"
          onClick={() => onImageClick?.(item.imageThumb!, item.title)}
          aria-label={`View larger: ${item.title}`}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={item.imageThumb}
            alt=""
            aria-hidden="true"
            className="portfolio-card__thumb-img"
          />
        </button>
      )}

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
      ) : item.caseStudySlug ? (
        <Link href={`/work/${item.caseStudySlug}`} className="portfolio-card__btn">
          View Case Study →
        </Link>
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
