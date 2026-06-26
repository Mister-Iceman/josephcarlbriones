export interface VideoEntry {
  type: 'youtube'
  youtubeId: string
  title: string
  description: string
  role?: string
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

  const thumbUrl = `https://img.youtube.com/vi/${video.youtubeId}/mqdefault.jpg`
  const watchUrl = `https://www.youtube.com/watch?v=${video.youtubeId}`

  return (
    <a
      href={watchUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="vg-card"
      aria-label={`Watch: ${video.title} (opens YouTube)`}
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
        <span className="vg-cta">Watch on YouTube →</span>
      </div>
    </a>
  )
}
