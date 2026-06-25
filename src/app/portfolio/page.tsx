import type { Metadata } from 'next'
import PortfolioClient from './PortfolioClient'

export const metadata: Metadata = {
  title: 'Portfolio & Work Samples',
  description:
    'Categorized portfolio of campaigns, TV commercials, social media content, events, and community activations by Joseph Carl R. Briones.',
}

export default function PortfolioPage() {
  return <PortfolioClient />
}
