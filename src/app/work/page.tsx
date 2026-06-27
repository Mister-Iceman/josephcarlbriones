import type { Metadata } from 'next'
import WorkPageClient from './WorkPageClient'

export const metadata: Metadata = {
  title: 'Work',
  description:
    'Case studies and campaign work spanning 20+ years: digital campaigns, live events, brand launches, community platforms, and public service. Joseph Carl R. Briones portfolio.',
}

export default function WorkPage() {
  return <WorkPageClient />
}
