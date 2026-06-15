export interface Award {
  id: string
  title: string
  issuer: string
  year: string
  description: string
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
      'For the Remitly \u00d7 TFC global Christmas caroling campaign \u2014 reaching 500,000+ viewers across four continents and driving a 30% increase in Remitly site traffic during the peak December remittance season.',
    type: 'industry-award',
    featured: true,
    linkedCaseStudy: '3af-digital-campaign-of-the-year',
  },
  {
    id: 'mvp-asap-ny',
    title: 'MVP \u2014 Most Outstanding Eventurer',
    issuer: 'ABS-CBN International / TFC',
    year: '2016',
    description:
      'For leading sponsorship architecture, inter-regional logistics coordination, and on-site brand activation for ASAP Live at Barclays Center \u2014 a sold-out 12,000-capacity event that exceeded ambitious sales targets.',
    type: 'company-award',
    featured: true,
    linkedCaseStudy: 'asap-live-ny-barclays-center',
  },
  {
    id: 'walk-on-water-2010',
    title: '\u201cWalk on Water\u201d Award',
    issuer: 'ABS-CBN International / TFC',
    year: '2010',
    description:
      'Annual recognition for exceptional performance, client service, and advertising innovation. Awarded for 2009 and 2010 \u2014 two consecutive years.',
    type: 'company-award',
    featured: false,
    linkedCaseStudy: null,
  },
  {
    id: 'walk-on-water-2009',
    title: '\u201cWalk on Water\u201d Award',
    issuer: 'ABS-CBN International / TFC',
    year: '2009',
    description: 'Annual recognition for exceptional performance. First of two consecutive years awarded.',
    type: 'company-award',
    featured: false,
    linkedCaseStudy: null,
  },
  {
    id: 'agency-of-the-year-media-2',
    title: 'Agency of the Year \u2014 Best in Media',
    issuer: 'ABS-CBN International / TFC',
    year: '2010\u20132011',
    description: 'Agency-level recognition for Best in Media performance, awarded for two consecutive years.',
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
    year: '2023',
    description:
      'Comprehensive IT support training covering technical support fundamentals, networking, operating systems, system administration, and IT security.',
    verificationUrl: null,
    type: 'certification',
    featured: true,
  },
  {
    id: 'cybersecurity-detection-response',
    title: 'Cybersecurity \u2014 Detection and Response',
    issuer: 'Google / Coursera',
    year: '2023',
    description: 'Sound the Alarm: Detection and Response \u2014 incident detection and response protocols.',
    verificationUrl: null,
    type: 'certification',
    featured: false,
  },
  {
    id: 'cybersecurity-risk-management',
    title: 'Cybersecurity \u2014 Security Risk Management',
    issuer: 'Google / Coursera',
    year: '2023',
    description: 'Play It Safe: Manage Security Risks \u2014 security risk frameworks and controls.',
    verificationUrl: null,
    type: 'certification',
    featured: false,
  },
  {
    id: 'office-365-it-support',
    title: 'Office 365 for IT Support',
    issuer: 'Microsoft / Coursera',
    year: '2023',
    description: 'Office 365 administration and IT support \u2014 operating systems and productivity tools.',
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
      "Verified international academic qualification \u2014 Bachelor\u2019s degree in Management from San Beda University (Philippines) evaluated and authenticated by WES for U.S. equivalency.",
    verificationUrl: null,
    type: 'education-verification',
    featured: true,
  },
]
