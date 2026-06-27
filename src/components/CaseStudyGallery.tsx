'use client'

import Image from 'next/image'
import { useState } from 'react'

interface GalleryImage {
  src: string
  alt: string
  caption?: string
  linkUrl?: string
}

interface CaseStudyGalleryProps {
  images: GalleryImage[]
  title?: string
}

export default function CaseStudyGallery({ images, title }: CaseStudyGalleryProps) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)

  // Only images without linkUrl are eligible for the lightbox
  const lightboxImages = images.filter((img) => !img.linkUrl)

  function openLightbox(img: GalleryImage) {
    const idx = lightboxImages.findIndex((i) => i.src === img.src)
    if (idx !== -1) setLightboxIndex(idx)
  }

  return (
    <section className="cs-gallery" aria-label={title ?? 'Campaign images'}>
      {title && (
        <p className="cs-gallery__label" aria-hidden="true">
          {title}
        </p>
      )}

      {/* Grid */}
      <div className="cs-gallery__grid">
        {images.map((img, i) =>
          img.linkUrl ? (
            /* External link — opens Facebook / source page */
            <a
              key={i}
              href={img.linkUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="cs-gallery__item"
              aria-label={`View ${img.alt} on Facebook (opens in new tab)`}
            >
              <div className="cs-gallery__img-wrap">
                <ImageWithFallback src={img.src} alt={img.alt} width={600} height={400} />
                <span className="cs-gallery__ext-badge" aria-hidden="true">View on Facebook</span>
              </div>
              {img.caption && <p className="cs-gallery__caption">{img.caption}</p>}
            </a>
          ) : (
            /* Internal lightbox */
            <button
              key={i}
              className="cs-gallery__item"
              onClick={() => openLightbox(img)}
              aria-label={`View image: ${img.alt}`}
            >
              <div className="cs-gallery__img-wrap">
                <ImageWithFallback src={img.src} alt={img.alt} width={600} height={400} />
              </div>
              {img.caption && <p className="cs-gallery__caption">{img.caption}</p>}
            </button>
          ),
        )}
      </div>

      {/* Lightbox — only for non-linked images */}
      {lightboxIndex !== null && (
        <div
          className="cs-lightbox"
          role="dialog"
          aria-modal="true"
          aria-label="Image lightbox"
          onClick={() => setLightboxIndex(null)}
        >
          <button
            className="cs-lightbox__close"
            onClick={() => setLightboxIndex(null)}
            aria-label="Close image"
          >
            ✕
          </button>
          <div className="cs-lightbox__content" onClick={(e) => e.stopPropagation()}>
            <ImageWithFallback
              src={lightboxImages[lightboxIndex].src}
              alt={lightboxImages[lightboxIndex].alt}
              width={1200}
              height={800}
            />
            {lightboxImages[lightboxIndex].caption && (
              <p className="cs-lightbox__caption">{lightboxImages[lightboxIndex].caption}</p>
            )}
            <div className="cs-lightbox__nav">
              <button
                onClick={() =>
                  setLightboxIndex((prev) =>
                    prev !== null && prev > 0 ? prev - 1 : lightboxImages.length - 1,
                  )
                }
                aria-label="Previous image"
                disabled={lightboxImages.length <= 1}
              >
                ← Prev
              </button>
              <span className="cs-lightbox__counter">
                {lightboxIndex + 1} / {lightboxImages.length}
              </span>
              <button
                onClick={() =>
                  setLightboxIndex((prev) =>
                    prev !== null && prev < lightboxImages.length - 1 ? prev + 1 : 0,
                  )
                }
                aria-label="Next image"
                disabled={lightboxImages.length <= 1}
              >
                Next →
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

function ImageWithFallback({
  src,
  alt,
  width,
  height,
}: {
  src: string
  alt: string
  width: number
  height: number
}) {
  const [errored, setErrored] = useState(false)

  if (errored) {
    return (
      <div className="image-placeholder" role="img" aria-label={alt} style={{ height: '100%', borderRadius: 0, border: 'none' }}>
        <span className="image-placeholder__icon" aria-hidden="true">🖼</span>
        <span className="image-placeholder__text">{alt}</span>
        <span className="image-placeholder__hint">{src}</span>
      </div>
    )
  }

  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      className="cs-gallery__img"
      onError={() => setErrored(true)}
      style={{ objectFit: 'cover', width: '100%', height: '100%' }}
    />
  )
}
