import type { Metadata } from 'next'
import Link from 'next/link'
import { CheckCircle2, ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'About',
  description:
    'Joseph Carl R. Briones \u2014 20+ years in marketing, broadcast media, advertising, and digital platform development. Los Angeles-based. Bilingual English/Tagalog.',
}

const timeline = [
  {
    period: 'June 2024 \u2013 Present',
    role: 'Freelance Marketing & Technology Consultant',
    org: 'Founder \u2014 FilipinoFoodNearMe.org & FilipinoEventsNearMe.org',
    location: 'Los Angeles, CA',
    notes: null,
    bullets: null,
  },
  {
    period: 'Oct 2019 \u2013 May 2023',
    role: 'Founder | Principal Partner',
    org: 'JCB Strategic Media LLC',
    location: 'Los Angeles, CA',
    notes: null,
    bullets: [
      'Led integrated campaigns for The Baker\u2019s Son by Valerio\u2019s (brand launch + broadcast), Goldilocks USA (national media buy), and Martin Purefoods (campaign management).',
      'Served as principal consultant for michaelwernecke.com \u2014 brand architecture, content strategy, and digital presence development.',
      'Executed digital strategy for Westates Automotive Group, including digital ad placements and regional audience targeting.',
      'Managed media budgets across linear TV, out-of-home, and digital channels for multicultural-focused campaigns.',
      'Leveraged AI-assisted workflows and platform development tools to deliver strategic value at reduced cost vs. traditional agency models.',
    ],
  },
  {
    period: '2021',
    role: 'Account Director',
    org: 'Westates Marketing & Automotive Promotions',
    location: 'Los Angeles, CA',
    notes: null,
    bullets: null,
  },
  {
    period: 'August 2020 \u2013 October 2020',
    role: 'Enumerator',
    org: 'U.S. Census Bureau',
    location: 'Los Angeles, CA',
    notes: null,
    bullets: null,
  },
  {
    period: 'May 2009 \u2013 September 2019',
    role: 'Account Executive, Advertising Sales',
    org: 'ABS-CBN International / The Filipino Channel (TFC)',
    location: 'Greater Los Angeles Area',
    notes: '10 years, 5 months',
    bullets: null,
  },
  {
    period: '2008',
    role: 'Senior Planner',
    org: 'Universal McCann, Los Angeles',
    location: 'Greater Los Angeles Area',
    notes:
      'Clients: Sony Pictures Entertainment \u2014 The House Bunny, Underworld: Rise of the Lycans, Seven Pounds, Pink Panther 2, Lakeview Terrace, Mardi Gras, The International',
    bullets: null,
  },
]

const jcbClients = [
  "The Baker's Son by Valerio's",
  'Goldilocks USA',
  'Martin Purefoods',
  'Westates Automotive Group',
  'michaelwernecke.com',
]

const consultingServices = [
  'Marketing & Advertising Strategy',
  'Campaign Planning & Coordination',
  'Social Media Planning & Content Systems',
  'Website Strategy & Digital Presence',
  'AI-Assisted Content Workflows',
  'Multicultural Audience Outreach & Messaging',
  'Small Business Visibility Support',
]

const competencies = [
  'Community-Facing Communication',
  'Multilingual Outreach (English / Tagalog)',
  'Documentation & Reporting',
  'Stakeholder Coordination',
  'Federal Protocol Compliance (Title 13)',
  'Digital Platform Development',
  'Project Management & Execution',
  'Multicultural Audience Strategy',
]

const skills = [
  'Marketing Strategy',
  'Advertising & Media Sales',
  'Campaign Management',
  'Digital Platform Development',
  'Project Coordination',
  'Multicultural Market Expertise',
  'AI-Assisted Workflows',
  'IT Support (Google Certified)',
  'Basic Python / Web Development',
  'Bilingual: English / Tagalog',
]

export default function AboutPage() {
  return (
    <div style={{ backgroundColor: '#0A0F1E', minHeight: '100vh' }}>
      {/* Hero */}
      <section style={{ padding: '80px 24px 60px', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <p className="eyebrow" style={{ color: '#4F8EF7', marginBottom: '16px' }}>
            About
          </p>
          <h1 className="display-lg" style={{ color: '#F5F5F3', margin: '0 0 12px' }}>
            Joseph Carl R. Briones
          </h1>
          <p
            style={{
              fontSize: '1rem',
              color: 'rgba(245,245,243,0.45)',
              margin: '0 0 32px',
              letterSpacing: '0.01em',
            }}
          >
            Marketing Strategist &nbsp;&middot;&nbsp; Community Platform Builder &nbsp;&middot;&nbsp; Multicultural Media Professional &nbsp;&middot;&nbsp; Los Angeles, CA
          </p>
          <p className="body-lg" style={{ color: 'rgba(245,245,243,0.65)', maxWidth: '680px', margin: 0 }}>
            20+ years building meaningful connections between brands, audiences, and communities &mdash; across
            broadcast media, major advertising agencies, and digital platforms. Award-winning. Bilingual. Now
            building the infrastructure for Filipino-American community discovery online.
          </p>
        </div>
      </section>

      {/* Career Narrative */}
      <section style={{ padding: '80px 24px', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <p className="eyebrow" style={{ color: '#4F8EF7', marginBottom: '32px' }}>
            Career Narrative
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
            <div>
              <h3
                style={{
                  fontSize: '0.9375rem',
                  fontWeight: 600,
                  color: 'rgba(245,245,243,0.9)',
                  margin: '0 0 12px',
                }}
              >
                The Broadcast Media & Agency Years
              </h3>
              <p className="body-lg" style={{ color: 'rgba(245,245,243,0.6)', margin: 0 }}>
                My career started in the thick of major advertising \u2014 at Universal McCann Los Angeles, planning and
                buying media for Sony Pictures Entertainment across seven film releases. From there, a decade at
                ABS-CBN International / The Filipino Channel shaped everything. Over 10 years as an Account Executive
                in Advertising Sales, I built campaigns and partnerships for marquee brands including McDonald&apos;s,
                AT&amp;T, Verizon, Toyota, Walmart, U.S. Bank, Sony Pictures, and Remitly \u2014 connecting them with the
                4+ million Filipino-Americans who called TFC their cultural home. A 3AF Digital Campaign of the Year
                award and an MVP Most Outstanding Eventurer award marked the decade&apos;s high points.
              </p>
            </div>

            <div>
              <h3
                style={{
                  fontSize: '0.9375rem',
                  fontWeight: 600,
                  color: 'rgba(245,245,243,0.9)',
                  margin: '0 0 12px',
                }}
              >
                The Entrepreneurial Chapter
              </h3>
              <p className="body-lg" style={{ color: 'rgba(245,245,243,0.6)', margin: 0 }}>
                In 2019, I founded JCB Strategic Media LLC and began serving clients directly as a marketing
                strategist and media consultant \u2014 leading integrated campaigns for The Baker&apos;s Son by Valerio&apos;s
                (brand launch), Goldilocks USA (national media buy), and others. During the COVID-19 pandemic, I
                took on a public service role as a U.S. Census Bureau Enumerator \u2014 an experience that deepened my
                appreciation for multilingual community outreach, federal compliance, and civic data integrity.
              </p>
            </div>

            <div>
              <h3
                style={{
                  fontSize: '0.9375rem',
                  fontWeight: 600,
                  color: 'rgba(245,245,243,0.9)',
                  margin: '0 0 12px',
                }}
              >
                The Builder Chapter
              </h3>
              <p className="body-lg" style={{ color: 'rgba(245,245,243,0.6)', margin: 0 }}>
                In 2024, I built FilipinoFoodNearMe.org and FilipinoEventsNearMe.org from scratch \u2014 two
                community platforms now serving 1,239+ business listings and 150+ events across the U.S., using
                the same Next.js / Vercel / Sentry production stack used by professional engineering teams. I
                didn&apos;t have a formal CS degree. I had strategy, curiosity, and AI-assisted development workflows.
                The platforms grew because the need was real and the community responded. That&apos;s how I build
                everything: with audience insight first, technology second.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Timeline */}
      <section style={{ padding: '80px 24px', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <p className="eyebrow" style={{ color: '#4F8EF7', marginBottom: '40px' }}>
            Experience
          </p>

          <div style={{ position: 'relative' }}>
            {timeline.map((item, i) => (
              <div
                key={i}
                style={{
                  display: 'grid',
                  gridTemplateColumns: '160px 1fr',
                  gap: '24px',
                  marginBottom: '40px',
                  alignItems: 'start',
                }}
                className="timeline-row"
              >
                {/* Date */}
                <div
                  style={{
                    fontSize: '0.8125rem',
                    color: 'rgba(245,245,243,0.4)',
                    paddingTop: '2px',
                    textAlign: 'right',
                    lineHeight: 1.5,
                  }}
                  className="timeline-date"
                >
                  {item.period}
                </div>

                {/* Content */}
                <div
                  style={{
                    borderLeft: '1px solid rgba(255,255,255,0.08)',
                    paddingLeft: '24px',
                    position: 'relative',
                  }}
                >
                  {/* Dot */}
                  <div
                    style={{
                      position: 'absolute',
                      left: '-5px',
                      top: '6px',
                      width: '8px',
                      height: '8px',
                      borderRadius: '50%',
                      backgroundColor: '#4F8EF7',
                    }}
                  />
                  <p style={{ fontSize: '1rem', fontWeight: 600, color: '#F5F5F3', margin: '0 0 4px' }}>
                    {item.role}
                  </p>
                  <p style={{ fontSize: '0.875rem', color: '#4F8EF7', margin: '0 0 4px', fontWeight: 500 }}>
                    {item.org}
                  </p>
                  <p style={{ fontSize: '0.8125rem', color: 'rgba(245,245,243,0.4)', margin: '0 0 8px' }}>
                    {item.location}
                  </p>
                  {item.notes && (
                    <p style={{ fontSize: '0.8125rem', color: 'rgba(245,245,243,0.5)', margin: 0, fontStyle: 'italic' }}>
                      {item.notes}
                    </p>
                  )}
                  {item.bullets && (
                    <ul style={{ margin: '8px 0 0', padding: '0 0 0 16px', display: 'flex', flexDirection: 'column', gap: '6px' }}>
                      {item.bullets.map((bullet, j) => (
                        <li key={j} style={{ fontSize: '0.8125rem', color: 'rgba(245,245,243,0.55)', lineHeight: 1.6 }}>
                          {bullet}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Selected JCB Strategic Media Clients */}
          <div
            style={{
              marginTop: '8px',
              padding: '24px',
              backgroundColor: 'rgba(79,142,247,0.04)',
              border: '0.5px solid rgba(79,142,247,0.18)',
              borderRadius: '8px',
            }}
          >
            <p
              style={{
                fontSize: '0.6875rem',
                fontWeight: 600,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                color: 'rgba(245,245,243,0.35)',
                margin: '0 0 14px',
              }}
            >
              Selected JCB Strategic Media Clients
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
              {jcbClients.map((client) => (
                <span
                  key={client}
                  style={{
                    fontSize: '0.8125rem',
                    color: 'rgba(245,245,243,0.65)',
                    backgroundColor: 'rgba(255,255,255,0.04)',
                    border: '0.5px solid rgba(255,255,255,0.1)',
                    borderRadius: '4px',
                    padding: '5px 12px',
                  }}
                >
                  {client}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Competencies */}
      <section style={{ padding: '80px 24px', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <p className="eyebrow" style={{ color: '#4F8EF7', marginBottom: '32px' }}>
            Core Competencies
          </p>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(2, 1fr)',
              gap: '12px',
            }}
            className="competency-grid"
          >
            {competencies.map((c) => (
              <div
                key={c}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                  padding: '14px 16px',
                  backgroundColor: 'rgba(255,255,255,0.03)',
                  border: '1px solid rgba(255,255,255,0.06)',
                  borderRadius: '8px',
                }}
              >
                <CheckCircle2 size={16} style={{ color: '#4F8EF7', flexShrink: 0 }} />
                <span style={{ fontSize: '0.875rem', color: 'rgba(245,245,243,0.75)' }}>{c}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education */}
      <section style={{ padding: '80px 24px', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <p className="eyebrow" style={{ color: '#4F8EF7', marginBottom: '32px' }}>
            Education
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div
              style={{
                padding: '20px 24px',
                backgroundColor: 'rgba(255,255,255,0.03)',
                border: '0.5px solid rgba(91,151,255,0.18)',
                borderRadius: '8px',
              }}
            >
              <p style={{ fontSize: '0.9375rem', fontWeight: 600, color: 'var(--jcb-white)', margin: '0 0 4px' }}>
                San Beda University &middot; Manila, Philippines
              </p>
              <p style={{ fontSize: '0.875rem', color: 'var(--jcb-blue-bright)', margin: '0 0 4px' }}>
                Bachelor of Science in Management &middot; 1996
              </p>
            </div>
            <div
              style={{
                padding: '20px 24px',
                backgroundColor: 'rgba(43,110,219,0.06)',
                border: '0.5px solid var(--jcb-blue-mid)',
                borderRadius: '8px',
              }}
            >
              <p style={{ fontSize: '0.9375rem', fontWeight: 600, color: 'var(--jcb-white)', margin: '0 0 4px' }}>
                WES International Academic Credential Evaluation
              </p>
              <p style={{ fontSize: '0.875rem', color: 'var(--jcb-blue-bright)', margin: '0 0 8px' }}>
                World Education Services (WES) &middot; November 2024
              </p>
              <p style={{ fontSize: '0.8125rem', color: 'var(--jcb-gray-200)', margin: 0 }}>
                WES-evaluated equivalent to a bachelor&apos;s degree from a regionally accredited U.S. institution.
                Reference #6631434/lwd &middot; November 2024.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Consulting & Freelance Work */}
      <section style={{ padding: '80px 24px', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <p className="eyebrow" style={{ color: '#4F8EF7', marginBottom: '32px' }}>
            Consulting & Freelance Work
          </p>

          <p className="body-lg" style={{ color: 'rgba(245,245,243,0.6)', margin: '0 0 32px' }}>
            Available for marketing strategy, campaign coordination, digital presence, and multicultural outreach
            projects. Serving small to mid-size businesses, startups, community organizations, and brands
            reaching Filipino-American &amp; Asian-American audiences.
          </p>

          {/* Services */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '40px' }}>
            {consultingServices.map((service) => (
              <div
                key={service}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  padding: '12px 16px',
                  backgroundColor: 'rgba(255,255,255,0.03)',
                  border: '1px solid rgba(255,255,255,0.06)',
                  borderRadius: '8px',
                }}
              >
                <CheckCircle2 size={15} style={{ color: '#4F8EF7', flexShrink: 0 }} />
                <span style={{ fontSize: '0.875rem', color: 'rgba(245,245,243,0.75)' }}>{service}</span>
              </div>
            ))}
          </div>

          {/* Recent Client Work */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '40px' }}>
            <div
              style={{
                padding: '20px 24px',
                backgroundColor: 'rgba(255,255,255,0.03)',
                border: '0.5px solid rgba(91,151,255,0.18)',
                borderRadius: '8px',
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '12px', marginBottom: '6px' }}>
                <h3 style={{ fontSize: '0.9375rem', fontWeight: 600, color: '#F5F5F3', margin: 0 }}>
                  michaelwernecke.com
                </h3>
                <span style={{ fontSize: '0.8125rem', color: 'rgba(245,245,243,0.35)', whiteSpace: 'nowrap' }}>2022 &ndash; 2023</span>
              </div>
              <p style={{ fontSize: '0.8125rem', color: '#4F8EF7', margin: '0 0 8px', fontWeight: 500 }}>
                Brand Architecture &middot; Content Strategy &middot; Digital Presence
              </p>
              <p className="body-sm" style={{ color: 'rgba(245,245,243,0.55)', margin: '0 0 12px' }}>
                Principal consultant for Michael Wernecke&apos;s personal brand site &mdash; brand architecture,
                content strategy, and full digital presence development.
              </p>
              <a
                href="https://www.michaelwernecke.com"
                target="_blank"
                rel="noopener noreferrer"
                style={{ display: 'inline-flex', alignItems: 'center', gap: '4px', fontSize: '0.8125rem', color: '#4F8EF7', textDecoration: 'none' }}
              >
                Visit site <ArrowRight size={13} />
              </a>
            </div>
            <div
              style={{
                padding: '20px 24px',
                backgroundColor: 'rgba(255,255,255,0.02)',
                border: '0.5px solid rgba(255,255,255,0.08)',
                borderRadius: '8px',
              }}
            >
              <p style={{ fontSize: '0.9375rem', fontWeight: 500, color: '#F5F5F3', margin: '0 0 6px' }}>
                JCB Strategic Media Engagements &mdash; 2019&ndash;2023
              </p>
              <p className="body-sm" style={{ color: 'rgba(245,245,243,0.5)', margin: '0 0 12px' }}>
                Brand launch campaigns, national media buys, and integrated digital campaigns for The Baker&apos;s Son
                by Valerio&apos;s, Goldilocks USA, Martin Purefoods, and Westates Automotive Group.
              </p>
              <Link
                href="/work"
                style={{ display: 'inline-flex', alignItems: 'center', gap: '4px', fontSize: '0.8125rem', color: '#4F8EF7', textDecoration: 'none' }}
              >
                View case studies <ArrowRight size={13} />
              </Link>
            </div>
          </div>

          {/* CTA */}
          <Link href="/contact?as=consulting-client">
            <button
              style={{
                backgroundColor: '#4F8EF7',
                color: '#ffffff',
                border: 'none',
                borderRadius: '9999px',
                padding: '12px 28px',
                fontSize: '0.9375rem',
                fontWeight: 500,
                cursor: 'pointer',
              }}
            >
              Tell me about your project
            </button>
          </Link>
        </div>
      </section>

      {/* Skills */}
      <section style={{ padding: '80px 24px' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <p className="eyebrow" style={{ color: '#4F8EF7', marginBottom: '32px' }}>
            Top Skills
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
            {skills.map((skill) => (
              <span
                key={skill}
                style={{
                  fontSize: '0.875rem',
                  backgroundColor: 'rgba(79,142,247,0.08)',
                  border: '1px solid rgba(79,142,247,0.2)',
                  borderRadius: '9999px',
                  padding: '8px 16px',
                  color: 'rgba(245,245,243,0.75)',
                }}
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
