import type { VideoEntry } from '@/components/VideoGallery'

/* ─────────────────────────────────────────────────────────────────────────
   CONFIRMED YouTube IDs (live and verified):
   ─────────────────────────────────────────────────────────────────────────
   3AF ceremony:  4HUlDijjiEE  (YouTube Shorts, 0:50, uploaded June 25 2026)
   ─────────────────────────────────────────────────────────────────────────
   HOW TO ADD MORE:
   From https://www.youtube.com/watch?v=XXXXXXXXXXX  → ID = XXXXXXXXXXX
   From https://youtu.be/XXXXXXXXXXX               → ID = XXXXXXXXXXX
   From https://youtube.com/shorts/XXXXXXXXXXX     → ID = XXXXXXXXXXX
   ───────────────────────────────────────────────────────────────────────── */

/* ── AWARD RECOGNITION ──────────────────────────────────────────────────── */
export const videosAwardRecognition: VideoEntry[] = [
  {
    type: 'youtube',
    youtubeId: '4HUlDijjiEE',
    title: '3AF Award — On-Stage Acknowledgment',
    description:
      'TFC Ad Sales Director Ricky Resurreccion acknowledges Carl Briones on stage for outstanding project management · 3AF Excellence Awards · June 2018',
  },
]

/* ── DIGITAL CAMPAIGNS ──────────────────────────────────────────────────── */
export const videosDigitalCampaigns: VideoEntry[] = [
  {
    type: 'youtube',
    youtubeId: '',
    title: '12 Days of Filipino Christmas Caroling — Remitly × TFC',
    description:
      'Award-winning Facebook Live campaign · December 2018 · 500K+ global viewers',
  },
]

/* ── TV COMMERCIALS (TVCs) ──────────────────────────────────────────────── */
export const videosTVCs: VideoEntry[] = [
  // Baker's Son
  {
    type: 'youtube',
    youtubeId: '',
    title: "The Baker's Son by Valerio's — Brand Launch TVC",
    description: "First TV commercial · Brand introduction · KRON4, TFC",
  },
  {
    type: 'youtube',
    youtubeId: '',
    title: "The Baker's Son — 'Special' TVC (15s)",
    description: 'Product TV spot · 15-second',
  },
  {
    type: 'youtube',
    youtubeId: '',
    title: "The Baker's Son — Merry Christmas TVC",
    description: 'Holiday TV commercial',
  },
  {
    type: 'youtube',
    youtubeId: '',
    title: "The Baker's Son — 'Everyday' TVC (15s)",
    description: 'Product TV spot · 15-second',
  },
  // Goldilocks USA
  {
    type: 'youtube',
    youtubeId: '',
    title: 'Goldilocks USA — Holiday 2021 TVC',
    description: '30-second holiday TV commercial · TFC, KRON4, KRON ON',
  },
  {
    type: 'youtube',
    youtubeId: '',
    title: 'Goldilocks USA — Ensaymada TVC',
    description: 'Product TV commercial · 30-second',
  },
  {
    type: 'youtube',
    youtubeId: '',
    title: 'Goldilocks USA — Mamon TVC',
    description: 'Product TV commercial · 30-second',
  },
  // Martin Purefoods
  {
    type: 'youtube',
    youtubeId: '',
    title: 'Martin Purefoods — Pork Belly Tocino TVC',
    description: '16-second TV commercial · TFC, GMA Pinoy TV',
  },
  {
    type: 'youtube',
    youtubeId: '',
    title: 'Martin Purefoods — Lumpia Shanghai TVC',
    description: '31-second TV commercial',
  },
  {
    type: 'youtube',
    youtubeId: '',
    title: 'Martin Purefoods — All-Beef Franks TVC',
    description: '16-second product TVC',
  },
  {
    type: 'youtube',
    youtubeId: '',
    title: 'Martin Purefoods — Sarap Ng Pasko',
    description: '31-second holiday campaign TVC',
  },
  {
    type: 'youtube',
    youtubeId: '',
    title: 'Martin Purefoods — Longanisa Favorites TVC',
    description: '16-second product TVC',
  },
  // RJB Law Offices
  {
    type: 'youtube',
    youtubeId: '',
    title: 'RJB Law Offices — Brand TVC',
    description: '30-second TV commercial · bulaonlaw.com · KRON4, Ampersand',
  },
]

/* ── TV SEGMENTS ────────────────────────────────────────────────────────── */
export const videosTVSegments: VideoEntry[] = [
  {
    type: 'youtube',
    youtubeId: '',
    title: 'Goldilocks USA — "By the Way" Facebook Live Segment',
    description: 'Facebook Live stream · Hosted segment with GELO · TFC',
  },
  {
    type: 'youtube',
    youtubeId: '',
    title: 'Goldilocks USA — Holiday Gift Baskets Segment',
    description: 'TV news segment · KRON4 · goldilocks-usa.com promotion',
  },
  {
    type: 'youtube',
    youtubeId: '',
    title: "The Baker's Son — Gift Basket Feature",
    description: "TV segment featuring the Baker's Son product line · TFC / BUSA",
  },
  {
    type: 'youtube',
    youtubeId: '',
    title: "The Baker's Son — BRG 'Our Daily Bread' Feature",
    description: 'Community TV segment feature',
  },
]

/* ── CONTENT PRODUCTION — MAN ON THE STREET ────────────────────────────── */
export const videosContentProduction: VideoEntry[] = [
  {
    type: 'youtube',
    youtubeId: '',
    title: 'New Yorkers Try Ensaymada for the First Time!',
    description:
      'Goldilocks USA · Man on the Street · Times Square, New York · YouTube + Facebook + TikTok',
  },
  {
    type: 'youtube',
    youtubeId: '',
    title: 'Strangers in LA Try Ensaymada for the First Time',
    description:
      'Goldilocks USA · Man on the Street · Hollywood Walk of Fame, Los Angeles · YouTube + Facebook + TikTok',
  },
]

/* ── CONVENIENCE EXPORTS: by case study slug ────────────────────────────── */
export const videos3AF: VideoEntry[] = [
  ...videosAwardRecognition,
  ...videosDigitalCampaigns,
]

export const videosASAP: VideoEntry[] = []

export const videosBakersSon: VideoEntry[] = videosTVCs.filter((v) =>
  v.title.includes("Baker's Son"),
)

export const videosGoldilocks: VideoEntry[] = [
  ...videosTVCs.filter((v) => v.title.includes('Goldilocks')),
  ...videosTVSegments.filter((v) => v.title.includes('Goldilocks')),
  ...videosContentProduction,
]

export const videosMartin: VideoEntry[] = videosTVCs.filter((v) =>
  v.title.includes('Martin'),
)
