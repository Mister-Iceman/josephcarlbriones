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
    role: 'Award Recognition',
  },
]

/* ── DIGITAL CAMPAIGNS ──────────────────────────────────────────────────── */
export const videosDigitalCampaigns: VideoEntry[] = [
  {
    type: 'youtube',
    youtubeId: '5ji1iN0RbfU',
    facebookUrl: 'https://www.facebook.com/reel/1630410013684053/?s=single_unit',
    title: '12 Days of Filipino Christmas Caroling — Remitly × TFC',
    description: 'Award-winning Facebook Live campaign · December 2018 · 500K+ global viewers',
    role: 'Campaign Strategy · Team Lead · Project Management · ABS-CBN / TFC',
  },
]

/* ── TV COMMERCIALS: confirmed IDs defined first, then assembled ─────────── */

// Baker's Son — all IDs confirmed
export const videosBakersSon: VideoEntry[] = [
  { type: 'youtube', youtubeId: 'f2HA82Ix9XQ', title: "The Baker's Son — TVC-30s 'Fresh'",    description: "30-second brand TVC · KRON4, TFC",          role: 'Full Production · Media Planning & Buying' },
  { type: 'youtube', youtubeId: 'hwWarFrRWwA', title: "The Baker's Son — TVC-15s 'Special'",  description: "15-second product TV spot",                  role: 'Full Production · Media Planning & Buying' },
  { type: 'youtube', youtubeId: 'YqYLFJ1L9G8', title: "The Baker's Son — TVC-15s 'Everyday'", description: "15-second product TV spot",                  role: 'Full Production · Media Planning & Buying' },
  { type: 'youtube', youtubeId: 'B9giH9PvY0o', title: "The Baker's Son — Christmas TVC",       description: "Holiday TV commercial",                      role: 'Full Production · Media Planning & Buying' },
  { type: 'youtube', youtubeId: 'LEUabPYQVy0', title: "The Baker's Son launches in Florida — Tayo / ABS-CBN", description: "ABS-CBN news feature · brand launch coverage", role: 'Media Planning & Buying' },
]

// Martin Purefoods — all IDs confirmed
export const videosMartin: VideoEntry[] = [
  { type: 'youtube', youtubeId: '0Zx24YQ81ns', title: "Martin Purefoods — Pork Belly Tocino TVC (v1)",       description: "16-second TV commercial · TFC, GMA Pinoy TV", role: 'Full Production · Media Planning & Buying' },
  { type: 'youtube', youtubeId: 'qc667boR86A', title: "Martin Purefoods — Pork Belly Tocino TVC (v2)",       description: "16-second TV commercial",                    role: 'Full Production · Media Planning & Buying' },
  { type: 'youtube', youtubeId: 'WwzEbxSWjJ0', title: "Martin Purefoods — Lumpia Shanghai TVC (v1)",         description: "31-second TV commercial",                    role: 'Full Production · Media Planning & Buying' },
  { type: 'youtube', youtubeId: 'SQTsVGuROUA', title: "Martin Purefoods — Lumpia Shanghai TVC (v2)",         description: "31-second TV commercial",                    role: 'Full Production · Media Planning & Buying' },
  { type: 'youtube', youtubeId: 'wg9_zWTJHpg', title: "Martin Purefoods — All-Beef Franks TVC",              description: "16-second product TV commercial",            role: 'Full Production · Media Planning & Buying' },
  { type: 'youtube', youtubeId: 'lqPEwDtGZ1U', title: "Martin Purefoods — Spaghetti with Red Hotdogs TVC",  description: "Product TV commercial",                      role: 'Full Production · Media Planning & Buying' },
  { type: 'youtube', youtubeId: 'DSFipS-zSfI', title: "Martin Purefoods — Longganisa TVC",                   description: "16-second product TV commercial",            role: 'Full Production · Media Planning & Buying' },
  { type: 'youtube', youtubeId: '1UgXI_GQlYE', title: "Martin Purefoods — All Beef and Pork Hotdogs TVC",   description: "Product TV commercial",                      role: 'Full Production · Media Planning & Buying' },
  { type: 'youtube', youtubeId: 'eqguvrfstpA', title: "Martin Purefoods — Christmas Campaign TVC",           description: "Holiday TV commercial · Sarap Ng Pasko",    role: 'Full Production · Media Planning & Buying' },
]

// Goldilocks — IDs confirmed
const _goldilocksPlaceholderTVCs: VideoEntry[] = [
  { type: 'youtube', youtubeId: '-q3qVD4r8wc', title: 'Goldilocks USA — Holiday 2021 TVC',  description: '30-second holiday TV commercial · TFC, KRON4, KRON ON', role: 'Media Planning & Buying' },
  { type: 'youtube', youtubeId: 'EczqH2HECNg', title: 'Goldilocks USA — Ensaymada TVC',     description: 'Product TV commercial · 30-second',                    role: 'Media Planning & Buying' },
  { type: 'youtube', youtubeId: 'J1ABwrKXa6M', title: 'Goldilocks USA — Mamon TVC',         description: 'Product TV commercial · 30-second',                    role: 'Media Planning & Buying' },
]

// RJB Law — ID confirmed
const _rjbPlaceholderTVC: VideoEntry[] = [
  { type: 'youtube', youtubeId: '7KlWFnjV9Ew', title: 'RJB Law Offices — Brand TVC', description: '30-second TV commercial · bulaonlaw.com · KRON4, Ampersand', role: 'Media Planning & Buying' },
]

// Assembled TVC list — Baker's Son and Martin show live thumbnails; Goldilocks and RJB show "Coming soon"
export const videosTVCs: VideoEntry[] = [
  ...videosBakersSon,
  ..._goldilocksPlaceholderTVCs,
  ...videosMartin,
  ..._rjbPlaceholderTVC,
]

/* ── TV SEGMENTS ────────────────────────────────────────────────────────── */
export const videosTVSegments: VideoEntry[] = [
  { type: 'youtube', youtubeId: 'wooTeJJ0B0Q', title: 'Goldilocks USA — Holiday Gift Baskets Feature · KRON4', description: 'TV news segment · KRON4 Bay Area · holiday gift basket promotion', role: 'Media Planning & Buying' },
  { type: 'youtube', youtubeId: 'yQFsyNiwbqg', title: 'Goldilocks USA — TFC TV Segment',              description: 'TV segment · The Filipino Channel',           role: 'Media Planning & Buying' },
  { type: 'youtube', youtubeId: 'KaWd2tMlqEo', title: "The Baker's Son — TFC TV Segment (with GELO)", description: 'TV segment · The Filipino Channel',           role: 'Full Production · Media Planning & Buying' },
]

/* ── CONTENT PRODUCTION — MAN ON THE STREET ────────────────────────────── */
export const videosContentProduction: VideoEntry[] = [
  { type: 'youtube', youtubeId: 'wiZfB517o3I', title: "New Yorkers Try Ensaymada for the First Time!",      description: "Goldilocks USA · Man on the Street · Times Square, NYC",        role: 'Full Content Production' },
  { type: 'youtube', youtubeId: 'QwGG7gk37xk', title: "Strangers in LA Try Ensaymada for the First Time",   description: "Goldilocks USA · Man on the Street · Hollywood Walk of Fame, LA", role: 'Full Content Production' },
]

/* ── CONVENIENCE EXPORTS: by case study slug ────────────────────────────── */
export const videos3AF: VideoEntry[] = [
  ...videosAwardRecognition,
  ...videosDigitalCampaigns,
]

export const videosASAP: VideoEntry[] = []

export const videosGoldilocks: VideoEntry[] = [
  ..._goldilocksPlaceholderTVCs,
  ...videosTVSegments.filter((v) => v.title.includes('Goldilocks')),
  ...videosContentProduction,
]
