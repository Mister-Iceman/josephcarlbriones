export interface VentureStat {
  value: string
  label: string
}

export interface Venture {
  id: string
  name: string
  tagline: string
  description: string
  url: string
  stats: VentureStat[]
  stack: string[]
  year: string
}

export const ventures: Venture[] = [
  {
    id: 'ffnm',
    name: 'FilipinoFoodNearMe.org',
    tagline: 'The First Community Filipino Food Directory in America',
    description:
      'Flavor With Soul Deserves to Be Found. Connecting Filipino-American communities to authentic restaurants, bakeries, grocery stores, and food trucks nationwide.',
    url: 'https://filipinofoodnearme.org',
    stats: [
      { value: '1,239+', label: 'Listings' },
      { value: '34', label: 'States' },
      { value: '422+', label: 'Cities' },
      { value: '5', label: 'Categories' },
    ],
    stack: ['Next.js', 'Tailwind', 'Vercel', 'Sentry'],
    year: '2024',
  },
  {
    id: 'fenm',
    name: 'FilipinoEventsNearMe.org',
    tagline: 'The Community-Powered National Filipino Events Calendar',
    description:
      'Gather. Celebrate. Belong. From barrio fiestas to Simbang Gabi — the go-to discovery platform for Filipino-American events and cultural gatherings nationwide.',
    url: 'https://filipinoeventsnearme.org',
    stats: [
      { value: '150+', label: 'Events' },
      { value: '92+', label: 'Cities' },
      { value: '38+', label: 'States' },
      { value: '8', label: 'Categories' },
    ],
    stack: ['Next.js', 'Tailwind', 'Vercel', 'Sentry'],
    year: '2024',
  },
]
