import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { Trophy, ArrowLeft, ArrowRight } from 'lucide-react'
import { caseStudies } from '@/data/caseStudies'
import CaseStudyGallery from '@/components/CaseStudyGallery'
import VideoGallery, { type VideoEntry } from '@/components/VideoGallery'
import { gallery3AF, galleryASAP, galleryActivations, galleryBakersSon, galleryMartinSocial, type GalleryImage } from '@/data/galleryImages'
import { videos3AF, videosMartin } from '@/data/videoData'

const galleryMap: Record<string, GalleryImage[]> = {
  '3af-digital-campaign-of-the-year': gallery3AF,
  'asap-live-ny-barclays-center': galleryASAP,
  'on-ground-activations-jcbsm': galleryActivations,
  'the-bakers-son-brand-launch': galleryBakersSon,
  'martin-purefoods-digital-social': galleryMartinSocial,
}

const videoMap: Record<string, VideoEntry[]> = {
  '3af-digital-campaign-of-the-year': videos3AF,
  'martin-purefoods-digital-social': videosMartin,
}

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return caseStudies.map((cs) => ({ slug: cs.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const cs = caseStudies.find((c) => c.slug === slug)
  if (!cs) return {}
  return {
    title: cs.title,
    description: `${cs.category} \u2014 ${cs.client} (${cs.year}). ${cs.demonstrates.slice(0, 140)}...`,
  }
}

export default async function CaseStudyPage({ params }: Props) {
  const { slug } = await params
  const cs = caseStudies.find((c) => c.slug === slug)
  if (!cs) notFound()

  const currentIndex = caseStudies.findIndex((c) => c.slug === slug)
  const prev = currentIndex > 0 ? caseStudies[currentIndex - 1] : null
  const next = currentIndex < caseStudies.length - 1 ? caseStudies[currentIndex + 1] : null

  return (
    <div style={{ backgroundColor: '#0A0F1E', minHeight: '100vh' }}>
      {/* Breadcrumb */}
      <div
        style={{
          padding: '24px 24px 0',
          borderBottom: '1px solid rgba(255,255,255,0.06)',
          paddingBottom: '24px',
        }}
      >
        <div
          style={{
            maxWidth: '800px',
            margin: '0 auto',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            fontSize: '0.8125rem',
            color: 'rgba(245,245,243,0.4)',
          }}
        >
          <Link href="/work" style={{ color: '#4F8EF7', textDecoration: 'none' }}>
            Work
          </Link>
          <span>/</span>
          <span style={{ color: 'rgba(245,245,243,0.5)' }}>{cs.title}</span>
        </div>
      </div>

      {/* Hero */}
      <section style={{ padding: '60px 24px 48px', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <p className="eyebrow" style={{ color: '#4F8EF7', marginBottom: '16px' }}>
            {cs.category}
          </p>

          {cs.award && (
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                backgroundColor: 'rgba(43,110,219,0.12)',
                border: '0.5px solid rgba(91,151,255,0.3)',
                borderRadius: '4px',
                padding: '6px 14px',
                marginBottom: '20px',
                fontSize: '0.8125rem',
                color: 'var(--jcb-blue-bright)',
              }}
            >
              <Trophy size={14} />
              {cs.award}
            </div>
          )}

          <h1 className="display-lg" style={{ color: '#F5F5F3', margin: '0 0 12px' }}>
            {cs.title}
          </h1>
          <p style={{ fontSize: '0.9375rem', color: 'rgba(245,245,243,0.5)', margin: '0 0 32px' }}>
            {cs.client} &middot; {cs.year}
          </p>

          {/* Tags */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
            {cs.tags.map((tag) => (
              <span
                key={tag}
                style={{
                  fontSize: '0.75rem',
                  backgroundColor: 'rgba(255,255,255,0.05)',
                  border: '1px solid rgba(255,255,255,0.08)',
                  borderRadius: '4px',
                  padding: '4px 10px',
                  color: 'rgba(245,245,243,0.55)',
                }}
              >
                {tag}
              </span>
            ))}
          </div>

          {/* PDF download — only shown when pdfPath is set */}
          {cs.pdfPath && (
            <div className="cs-pdf-download">
              <a href={cs.pdfPath} download className="cs-pdf-btn">
                <span aria-hidden="true">↓</span> Download Original Case Study
                <span className="sr-only">(PDF)</span>
              </a>
              <a
                href={cs.pdfPath}
                target="_blank"
                rel="noopener noreferrer"
                className="cs-pdf-btn cs-pdf-btn--view"
              >
                <span aria-hidden="true">↗</span> View PDF
                <span className="sr-only">(opens in new tab)</span>
              </a>
            </div>
          )}
        </div>
      </section>

      {/* Stats row */}
      <section
        style={{
          borderBottom: '1px solid rgba(255,255,255,0.06)',
          padding: '32px 24px',
          backgroundColor: 'rgba(255,255,255,0.02)',
        }}
      >
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: `repeat(${cs.stats.length}, 1fr)`,
              gap: '0',
            }}
            className="stats-row"
          >
            {cs.stats.map((stat, i) => (
              <div
                key={stat.label}
                style={{
                  textAlign: 'center',
                  padding: '16px 12px',
                  borderLeft: i > 0 ? '1px solid rgba(255,255,255,0.06)' : 'none',
                }}
              >
                <div
                  style={{
                    fontSize: '1.5rem',
                    fontWeight: 600,
                    color: '#4F8EF7',
                    lineHeight: 1.2,
                    marginBottom: '6px',
                  }}
                >
                  {stat.value}
                </div>
                <div style={{ fontSize: '0.75rem', color: 'rgba(245,245,243,0.45)', lineHeight: 1.4 }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STAR sections */}
      <section style={{ padding: '64px 24px' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '48px' }}>
          {[
            { label: 'Situation', content: cs.situation },
            { label: 'Task', content: cs.task },
            { label: 'Action', content: cs.action },
            { label: 'Result', content: cs.result },
          ].map((section) => (
            <div key={section.label}>
              <h2
                style={{
                  fontSize: '0.6875rem',
                  fontWeight: 600,
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  color: '#4F8EF7',
                  margin: '0 0 16px',
                }}
              >
                {section.label}
              </h2>
              <p className="body-lg" style={{ color: 'rgba(245,245,243,0.7)', margin: 0 }}>
                {section.content}
              </p>
            </div>
          ))}

          {/* Image gallery — shown for slugs with gallery entries */}
          {galleryMap[cs.slug] && (
            <CaseStudyGallery
              images={galleryMap[cs.slug]}
              title="Campaign Visual Evidence"
            />
          )}

          {/* Video gallery — only shown when there are videos with confirmed YouTube IDs */}
          {videoMap[cs.slug]?.some((v) => v.youtubeId) && (
            <VideoGallery
              videos={videoMap[cs.slug].filter((v) => v.youtubeId)}
              sectionTitle="Video Evidence"
            />
          )}

          {/* What This Demonstrates */}
          <div
            style={{
              backgroundColor: 'rgba(79,142,247,0.06)',
              border: '1px solid rgba(79,142,247,0.2)',
              borderRadius: '12px',
              padding: '28px 32px',
            }}
          >
            <h2
              style={{
                fontSize: '0.6875rem',
                fontWeight: 600,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                color: '#4F8EF7',
                margin: '0 0 16px',
              }}
            >
              What This Demonstrates
            </h2>
            <p className="body-lg" style={{ color: 'rgba(245,245,243,0.75)', margin: 0 }}>
              {cs.demonstrates}
            </p>
          </div>
        </div>
      </section>

      {/* Navigation + CTA */}
      <section
        style={{
          padding: '48px 24px 80px',
          borderTop: '1px solid rgba(255,255,255,0.06)',
        }}
      >
        <div
          style={{
            maxWidth: '800px',
            margin: '0 auto',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '20px',
          }}
        >
          <div style={{ display: 'flex', gap: '16px' }}>
            {prev && (
              <Link
                href={`/work/${prev.slug}`}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  fontSize: '0.875rem',
                  color: 'rgba(245,245,243,0.5)',
                  textDecoration: 'none',
                }}
              >
                <ArrowLeft size={14} /> Previous
              </Link>
            )}
            {next && (
              <Link
                href={`/work/${next.slug}`}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  fontSize: '0.875rem',
                  color: 'rgba(245,245,243,0.5)',
                  textDecoration: 'none',
                }}
              >
                Next <ArrowRight size={14} />
              </Link>
            )}
          </div>
          <div style={{ display: 'flex', gap: '12px' }}>
            <Link href="/work">
              <button
                style={{
                  backgroundColor: 'transparent',
                  color: 'rgba(245,245,243,0.6)',
                  border: '1px solid rgba(255,255,255,0.12)',
                  borderRadius: '9999px',
                  padding: '10px 20px',
                  fontSize: '0.875rem',
                  cursor: 'pointer',
                }}
              >
                View more work
              </button>
            </Link>
            <Link href="/contact">
              <button
                style={{
                  backgroundColor: '#4F8EF7',
                  color: '#ffffff',
                  border: 'none',
                  borderRadius: '9999px',
                  padding: '10px 20px',
                  fontSize: '0.875rem',
                  fontWeight: 500,
                  cursor: 'pointer',
                }}
              >
                Get in touch
              </button>
            </Link>
          </div>
        </div>
      </section>

    </div>
  )
}
