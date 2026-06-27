import Link from 'next/link'
import { ArrowRight, Trophy } from 'lucide-react'
import type { CaseStudy } from '@/data/caseStudies'

interface Props {
  cs: CaseStudy
}

export default function CaseStudyCard({ cs }: Props) {
  return (
    <Link href={`/work/${cs.slug}`} style={{ textDecoration: 'none' }}>
      <article
        className="jcb-card"
        style={{
          padding: '24px',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        {/* Type badge + Category + Award row */}
        <div
          style={{
            display: 'flex',
            alignItems: 'flex-start',
            justifyContent: 'space-between',
            marginBottom: '16px',
            flexWrap: 'wrap',
            gap: '8px',
          }}
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
            <span
              style={{
                display: 'inline-block',
                alignSelf: 'flex-start',
                fontSize: '0.625rem',
                fontWeight: 600,
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                color: cs.type === 'portfolio-work' ? 'rgba(245,245,243,0.4)' : '#4F8EF7',
                backgroundColor: cs.type === 'portfolio-work' ? 'rgba(255,255,255,0.05)' : 'rgba(79,142,247,0.1)',
                border: cs.type === 'portfolio-work' ? '0.5px solid rgba(255,255,255,0.1)' : '0.5px solid rgba(79,142,247,0.25)',
                borderRadius: '3px',
                padding: '2px 6px',
              }}
            >
              {cs.type === 'portfolio-work' ? 'Campaign Work' : 'Case Study'}
            </span>
            <span className="eyebrow" style={{ color: '#4F8EF7' }}>
              {cs.category}
            </span>
          </div>
          {cs.award && (
            <span
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '4px',
                fontSize: '0.6875rem',
                color: '#F7B84F',
                backgroundColor: 'rgba(247,184,79,0.1)',
                border: '1px solid rgba(247,184,79,0.2)',
                borderRadius: '4px',
                padding: '3px 8px',
              }}
            >
              <Trophy size={10} /> Award
            </span>
          )}
        </div>

        {/* Title */}
        <h3
          style={{
            fontSize: '1rem',
            fontWeight: 500,
            color: '#F5F5F3',
            margin: '0 0 6px',
            lineHeight: 1.4,
          }}
        >
          {cs.title}
        </h3>

        {/* Client + year */}
        <p style={{ fontSize: '0.8125rem', color: 'rgba(245,245,243,0.45)', margin: '0 0 16px' }}>
          {cs.client} &middot; {cs.year}
        </p>

        {/* Situation excerpt */}
        <p
          className="body-sm"
          style={{
            color: 'rgba(245,245,243,0.55)',
            margin: '0 0 24px',
            display: '-webkit-box',
            WebkitLineClamp: 3,
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden',
          }}
        >
          {cs.situation}
        </p>

        {/* Hero stat */}
        <div style={{ marginTop: 'auto', marginBottom: '20px' }}>
          <div
            style={{
              fontSize: '1.5rem',
              fontWeight: 600,
              color: '#4F8EF7',
              lineHeight: 1.2,
              marginBottom: '4px',
            }}
          >
            {cs.heroStat.value}
          </div>
          <div style={{ fontSize: '0.75rem', color: 'rgba(245,245,243,0.4)' }}>{cs.heroStat.label}</div>
        </div>

        {/* Tags */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '16px' }}>
          {cs.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              style={{
                fontSize: '0.6875rem',
                backgroundColor: 'rgba(255,255,255,0.05)',
                border: '1px solid rgba(255,255,255,0.08)',
                borderRadius: '4px',
                padding: '3px 8px',
                color: 'rgba(245,245,243,0.5)',
              }}
            >
              {tag}
            </span>
          ))}
        </div>

        {/* CTA */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '4px',
            fontSize: '0.8125rem',
            color: '#4F8EF7',
            fontWeight: 500,
          }}
        >
          {cs.type === 'portfolio-work' ? 'View campaign work' : 'Read case study'} <ArrowRight size={14} />
        </div>
      </article>
    </Link>
  )
}
