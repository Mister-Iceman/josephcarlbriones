'use client'

import { useState, useEffect, useCallback } from 'react'

export interface VideoEntry {
  type: 'youtube' | 'file' | 'facebook'
  youtubeId: string
  title: string
  description: string
  role?: string
  facebookUrl?: string
}

interface VideoGalleryProps {
  videos: VideoEntry[]
  sectionTitle?: string
}

export default function VideoGallery({ videos, sectionTitle }: VideoGalleryProps) {
  if (videos.length === 0) return null

  return (
    <div className="vg-section">
      {sectionTitle && (
        <p className="cs-gallery__label" aria-hidden="true">
          {sectionTitle}
        </p>
      )}
      <div className="vg-grid">
        {videos.map((video, i) => (
          <VideoCard key={i} video={video} />
        ))}
      </div>
    </div>
  )
}

function VideoCard({ video }: { video: VideoEntry }) {
  const [lightboxOpen, setLightboxOpen] = useState(false)

  const close = useCallback(() => setLightboxOpen(false), [])

  useEffect(() => {
    if (!lightboxOpen) return
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close()
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [lightboxOpen, close])

  // Facebook reel — embedding blocked by Facebook; open externally
  if (video.type === 'facebook') {
    return (
      <div className="vg-card vg-card--pending">
        <div className="vg-thumb vg-thumb--placeholder" aria-hidden="true">
          <span className="vg-play-icon">▶</span>
        </div>
        <div className="vg-body">
          <p className="vg-title">{video.title}</p>
          <p className="vg-desc">{video.description}</p>
          {video.role && <span className="cs-video__role">{video.role}</span>}
          {video.facebookUrl ? (
            <a
              href={video.facebookUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="vg-cta"
            >
              Watch on Facebook →
            </a>
          ) : (
            <span className="vg-badge">Coming soon</span>
          )}
        </div>
      </div>
    )
  }

  // No confirmed YouTube ID yet
  if (!video.youtubeId) {
    return (
      <div className="vg-card vg-card--pending">
        <div className="vg-thumb vg-thumb--placeholder" aria-hidden="true">
          <span className="vg-play-icon">▶</span>
        </div>
        <div className="vg-body">
          <p className="vg-title">{video.title}</p>
          <p className="vg-desc">{video.description}</p>
          {video.role && <span className="cs-video__role">{video.role}</span>}
          <span className="vg-badge">Coming soon</span>
        </div>
      </div>
    )
  }

  // YouTube — inline lightbox
  const thumbUrl = `https://img.youtube.com/vi/${video.youtubeId}/mqdefault.jpg`
  const embedUrl = `https://www.youtube-nocookie.com/embed/${video.youtubeId}?autoplay=1&rel=0&modestbranding=1`

  return (
    <>
      <button
        className="vg-card vg-card--clickable"
        onClick={() => setLightboxOpen(true)}
        aria-label={`Watch: ${video.title}`}
      >
        <div className="vg-thumb">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={thumbUrl}
            alt=""
            aria-hidden="true"
            className="vg-thumb-img"
            width={320}
            height={180}
          />
          <span className="vg-play" aria-hidden="true">▶</span>
        </div>
        <div className="vg-body">
          <p className="vg-title">{video.title}</p>
          <p className="vg-desc">{video.description}</p>
          {video.role && <span className="cs-video__role">{video.role}</span>}
          <span className="vg-cta">Watch video →</span>
        </div>
      </button>

      {lightboxOpen && (
        <div
          className="cs-video-lightbox"
          onClick={close}
          role="dialog"
          aria-modal="true"
          aria-label={video.title}
        >
          {/* Inner div stops propagation so clicking the frame doesn't close the overlay */}
          <div
            className="cs-video-lightbox__inner"
            onClick={(e) => e.stopPropagation()}
          >
            <iframe
              className="cs-video-lightbox__frame"
              src={embedUrl}
              allow="autoplay; encrypted-media; fullscreen"
              allowFullScreen
              title={video.title}
            />
            <button className="cs-video-lightbox__close" onClick={close}>
              ✕ Close
            </button>
          </div>
        </div>
      )}
    </>
  )
}
