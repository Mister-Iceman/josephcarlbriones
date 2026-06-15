const stats = [
  { value: '20+', label: 'Years Experience' },
  { value: '500K+', label: 'Campaign Reach' },
  { value: '1,239+', label: 'Community Listings Built' },
  { value: '12,000', label: 'Event Capacity Managed' },
  { value: '4', label: 'Industry Awards' },
]

export default function TrustStrip() {
  return (
    <section
      style={{
        borderTop: '1px solid rgba(255,255,255,0.06)',
        borderBottom: '1px solid rgba(255,255,255,0.06)',
        padding: '32px 24px',
      }}
    >
      <div
        className="stats-grid"
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'repeat(5, 1fr)',
        }}
      >
        {stats.map((stat, i) => (
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
                fontSize: '1.75rem',
                fontWeight: 600,
                color: '#F5F5F3',
                lineHeight: 1.2,
                marginBottom: '6px',
              }}
            >
              {stat.value}
            </div>
            <div className="eyebrow" style={{ color: 'rgba(245,245,243,0.45)' }}>
              {stat.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
