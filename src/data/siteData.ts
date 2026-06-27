export const person = {
  name: 'Joseph Carl R. Briones',
  displayFirst: 'Joseph Carl R.',
  displayLast: 'Briones',
  title: 'Marketing Strategist · Community Platform Builder · Multicultural Media Professional',
  tagline:
    '20+ years building meaningful connections between brands, audiences, and communities — across broadcast media, major advertising agencies, and digital platforms.',
  location: 'Los Angeles, CA',
  email: 'josephcarl.briones@gmail.com',
  linkedin: 'https://www.linkedin.com/in/josephcarlbriones/',
  linktree: 'https://linktr.ee/josephcarlbriones',
  github: 'https://github.com/Mister-Iceman',
}

export const trustStrip = [
  { value: '20+', unit: 'Years', label: 'Industry Experience' },
  { value: '#1', unit: '', label: '3AF Digital Campaign of the Year' },
  { value: '500K+', unit: '', label: 'Global Campaign Reach' },
  { value: '1,200+', unit: '', label: 'Community Listings Built' },
  { value: '2×', unit: '', label: 'Agency MVP Award' },
]

export const awardPills = [
  { text: 'Asian-American Digital Campaign of the Year', org: '3AF · 2018' },
  { text: 'MVP — Most Outstanding Eventurer', org: 'ASAP Live NY · 2016' },
  { text: 'Walk on Water Award', org: 'ABS-CBN International · 2009 & 2010' },
  { text: 'Agency of the Year — Best in Media', org: 'Two Consecutive Years' },
]

export interface Certification {
  title: string
  issuer: string
  year: string
  category: string
  highlight: boolean
}

export const certifications: Certification[] = [
  {
    title: 'Meta Certified Community Manager',
    issuer: 'Meta',
    year: '2024',
    category: 'Social Media',
    highlight: true,
  },
  {
    title: 'Google AI Essentials',
    issuer: 'Google',
    year: '2024',
    category: 'Artificial Intelligence',
    highlight: true,
  },
  {
    title: 'Google Cybersecurity Professional Certificate',
    issuer: 'Google / Coursera',
    year: '2024',
    category: 'Cybersecurity',
    highlight: true,
  },
  {
    title: 'Google IT Support Professional Certificate',
    issuer: 'Google / Coursera',
    year: '2024',
    category: 'IT Support',
    highlight: true,
  },
  {
    title: 'IT Support Technical Skills & Helpdesk',
    issuer: 'Coursera',
    year: '2024',
    category: 'IT Support',
    highlight: false,
  },
  {
    title: 'Asana — Project Management',
    issuer: 'Udemy',
    year: '2024',
    category: 'Project Management',
    highlight: true,
  },
  {
    title: 'Social Media Marketing',
    issuer: 'Coursera',
    year: '2024',
    category: 'Social Media',
    highlight: false,
  },
  {
    title: 'Social Media Management',
    issuer: 'Coursera',
    year: '2024',
    category: 'Social Media',
    highlight: false,
  },
]
