export interface Award {
  id: string
  title: string
  issuer: string
  year: string
  description: string
  roleContext?: string
  campaigns?: string[]
  type: string
  featured: boolean
  linkedCaseStudy: string | null
}

export interface Certification {
  id: string
  title: string
  issuer: string
  year: string
  description: string
  verificationUrl: string | null
  type: string
  featured: boolean
}

export const awards: Award[] = [
  {
    id: 'aaf-3af-digital-campaign',
    title: '3AF Digital Campaign of the Year',
    issuer: 'Asian American Advertising Federation (3AF)',
    year: '2018',
    description:
      'For the Remitly × TFC global Christmas caroling campaign — reaching 500,000+ viewers across four continents and driving a 30% increase in Remitly site traffic during the peak December remittance season.',
    type: 'industry-award',
    featured: true,
    linkedCaseStudy: '3af-digital-campaign-of-the-year',
  },
  {
    id: 'mvp-asap-ny',
    title: 'MVP — Most Outstanding Eventurer',
    issuer: 'ABS-CBN International / The Filipino Channel',
    year: '2016',
    description:
      'For leading sponsorship architecture, inter-regional logistics coordination, and on-site brand activation for ASAP Live at Barclays Center — a sold-out 12,000-capacity event that exceeded ambitious sales targets.',
    type: 'company-award',
    featured: true,
    linkedCaseStudy: 'asap-live-ny-barclays-center',
  },
  {
    id: 'walk-on-water',
    title: '"Walk on Water" Award',
    issuer: 'ABS-CBN International',
    year: '2009 & 2010',
    description:
      'Recognition for outstanding performance and excellence in execution — awarded by ABS-CBN International leadership for two consecutive years.',
    type: 'company-award',
    featured: false,
    linkedCaseStudy: null,
  },
  {
    id: 'agency-of-the-year-media',
    title: 'Agency of the Year — Best in Media',
    issuer: "4A's Philippines (Association of Accredited Advertising Agencies)",
    year: '2000 & 2001',
    description:
      "Won as Team Leader of the McDonald's Media Group during tenure as Media Manager at Starcom, Manila. Two consecutive years.",
    roleContext: "Team Leader, McDonald's Media Group · Starcom Philippines, Manila",
    campaigns: [
      "2000: McDonald's × Hello Kitty collaboration campaign",
      "2001: McDonald's 20th Anniversary campaign + Globe Telecom SMS Pass collaboration",
    ],
    type: 'industry-award',
    featured: false,
    linkedCaseStudy: null,
  },
]

export const certifications: Certification[] = [
  {
    id: 'google-it-support',
    title: 'Google IT Support Professional Certificate',
    issuer: 'Google / Coursera',
    year: '2024',
    description:
      'Comprehensive IT support training covering technical support fundamentals, networking, operating systems, system administration, and IT security.',
    verificationUrl: null,
    type: 'certification',
    featured: true,
  },
  {
    id: 'cybersecurity-detection-response',
    title: 'Cybersecurity: Sound the Alarm — Detection and Response',
    issuer: 'Google / Coursera',
    year: '2024',
    description: 'Incident detection and response protocols — Google Cybersecurity Certificate series.',
    verificationUrl: null,
    type: 'certification',
    featured: false,
  },
  {
    id: 'cybersecurity-risk-management',
    title: 'Cybersecurity: Play It Safe — Manage Security Risks',
    issuer: 'Google / Coursera',
    year: '2024',
    description: 'Security risk frameworks and controls — Google Cybersecurity Certificate series.',
    verificationUrl: null,
    type: 'certification',
    featured: false,
  },
  {
    id: 'os-power-user',
    title: 'IT Support: Operating Systems and You — Becoming a Power User',
    issuer: 'Google / Coursera',
    year: '2024',
    description: 'Operating systems fundamentals — Google IT Support Professional Certificate series.',
    verificationUrl: null,
    type: 'certification',
    featured: false,
  },
  {
    id: 'office-365-it-support',
    title: 'Office 365 for IT Support',
    issuer: 'Microsoft / Coursera',
    year: '2024',
    description: 'Office 365 administration and IT support — operating systems and productivity tools.',
    verificationUrl: null,
    type: 'certification',
    featured: false,
  },
  {
    id: 'wes-credential',
    title: 'WES International Academic Credential Evaluation',
    issuer: 'World Education Services (WES)',
    year: '2024',
    description:
      "Bachelor's degree in Management from San Beda University (Philippines) evaluated and verified as equivalent to a bachelor's degree from a regionally accredited U.S. institution. Evaluation Ref #6631434/lwd, November 2024.",
    verificationUrl: null,
    type: 'education-verification',
    featured: true,
  },
]
