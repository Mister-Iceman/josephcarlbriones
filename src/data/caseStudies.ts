export interface CaseStudyStat {
  value: string
  label: string
}

export interface CaseStudy {
  slug: string
  title: string
  client: string
  category: string
  year: string
  award: string | null
  featured: boolean
  tags: string[]
  audiences: string[]
  heroStat: CaseStudyStat
  stats: CaseStudyStat[]
  situation: string
  task: string
  action: string
  result: string
  demonstrates: string
  role?: string
}

export const caseStudies: CaseStudy[] = [
  {
    slug: '3af-digital-campaign-of-the-year',
    title: '3AF Digital Campaign of the Year',
    client: 'Remitly \u00d7 The Filipino Channel (TFC)',
    category: 'Digital Campaign \u00b7 Partnership Marketing',
    year: '2018',
    award: '3AF Asian-American Advertising Federation \u2014 Digital Campaign of the Year',
    featured: true,
    tags: ['Digital', 'Social Media', 'Partnership', 'Award-Winning'],
    audiences: ['private', 'clients'],
    heroStat: { value: '500K+', label: 'Global viewers reached' },
    stats: [
      { value: '30%', label: 'Remitly site traffic increase' },
      { value: '500K+', label: 'Viewers across NA, Middle East, Asia, Europe' },
      { value: '12 Days', label: 'Global Christmas caroling campaign' },
      { value: '#1', label: '3AF Digital Campaign of the Year' },
    ],
    situation:
      'For Overseas Filipinos (OFs), staying connected to the Philippines is essential \u2014 especially during the Christmas season. The Filipino Channel (TFC) serves as their gateway to cultural content, while Remitly is a leader in digital money remittance. Both organizations share a mission: connecting Filipinos worldwide with their families back home.',
    task: "Create a meaningful, culturally resonant digital campaign that engaged Overseas Filipinos through familiar holiday traditions while effectively positioning Remitly's brand and driving measurable site traffic and conversions during the peak December remittance season.",
    action:
      "Developed and executed a groundbreaking global Christmas caroling campaign spanning 12 days \u2014 sharing Filipino holiday traditions worldwide. Featured Remitly Ambassadors alongside TFC celebrities. Created fresh digital content with clickable, trackable links. Designed campaign visuals around Remitly's brand colors for subtle but consistent sponsorship reinforcement.",
    result:
      'The campaign achieved record December targets for Remitly, drove a 30% increase in site visits, and generated thousands of direct promo site visits. TFC reached over 500,000 viewers globally across North America, the Middle East, Asia, and Europe. Thousands of positive comments on Facebook from Filipinos worldwide \u2014 and a 3AF Digital Campaign of the Year award.',
    demonstrates:
      'Strategic cross-brand partnership development, culturally resonant content creation, measurable digital campaign execution, and multinational audience engagement \u2014 demonstrating both creative and analytical marketing capability applicable to any multicultural or community-facing communications program.',
    role: 'Account Executive and Team Lead, ABS-CBN International / The Filipino Channel. Co-conceived the campaign partnership with Ad Sales Director Ricky Resurreccion and pitched it to Remitly as a first-of-its-kind branded digital caroling partnership. Served as Team Lead and Project Manager throughout execution \u2014 coordinating between the U.S. client (Remitly), the TFC U.S. sales team, and the TFC Manila production team. Responsible for client relationship management, sponsorship delivery, cross-regional team coordination, and campaign performance oversight. Content production was executed by the TFC Manila creative and production team.',
  },
  {
    slug: 'asap-live-ny-barclays-center',
    title: 'ASAP Live NY \u2014 Barclays Center',
    client: 'ABS-CBN International / The Filipino Channel',
    category: 'Event Sponsorship \u00b7 Live Event Marketing',
    year: '2016',
    award: 'MVP \u2014 Most Outstanding Eventurer',
    featured: true,
    tags: ['Events', 'Sponsorship', 'Logistics', 'Cross-Regional', 'Award-Winning'],
    audiences: ['private', 'government', 'clients'],
    heroStat: { value: '12,000', label: 'Capacity sold-out event' },
    stats: [
      { value: '12,000', label: 'Sold-out Barclays Center' },
      { value: 'Exceeded', label: 'Ambitious sales targets' },
      { value: 'US\u2013PH', label: 'Cross-regional coordination' },
      { value: 'MVP', label: 'Most Outstanding Eventurer award' },
    ],
    situation:
      'ASAP (A Sunday Afternoon Party) is the most popular variety show in the Philippines, featuring 40+ top-tier celebrities from ABS-CBN. In 2016, TFC brought this grand live event to Barclays Center in New York to engage millions of Filipino-Americans \u2014 one of the largest Filipino-American live entertainment events ever staged on the East Coast.',
    task: 'As Head of Sponsorship and Ad Sales Logistics, manage high demand from U.S. and Philippine advertisers across diverse business sizes and product categories, coordinate inter-regional logistics between U.S. and Philippine teams, create a grand pre-show on-stage brand experience, and meet ambitious sales targets for a sold-out 12,000-capacity event.',
    action:
      'Established clearly structured sponsorship tiers to accommodate advertisers of all sizes. Managed effective inter-regional communication and coordination between U.S. and Philippines teams. Strategized, conceptualized, and executed the pre-show on-stage brand experience in collaboration with creative, production, and account teams. Spearheaded detailed logistical operations for on-site brand engagements and activations. Led creative sales packaging and direct salesmanship efforts.',
    result:
      'Advertisers across different sizes and product categories successfully participated in the grand event. The inter-regional U.S.\u2013Philippines team collaboration became a benchmark for future similar projects. The on-stage pre-show and on-site brand engagements were recognized as best practice for future events. Sales targets were exceeded for the sold-out 12,000-capacity event at Barclays Center. Recognized with the MVP Most Outstanding Eventurer award.',
    demonstrates:
      'Large-scale event logistics and operations management, cross-regional multi-stakeholder coordination, sponsorship architecture and sales execution, and the ability to deliver under high-stakes, high-visibility pressure \u2014 directly transferable to public agency event programming, major institutional communications, and enterprise-level marketing operations.',
  },
  {
    slug: 'the-bakers-son-brand-launch',
    title: "The Baker\u2019s Son \u2014 Brand Launch",
    client: "The Baker\u2019s Son by Valerio\u2019s",
    category: 'Brand Launch \u00b7 Integrated Campaign',
    year: '2022',
    award: null,
    featured: true,
    tags: ['Brand Launch', 'Integrated', 'OOH', 'Digital', 'TV', 'Direct Mail'],
    audiences: ['private', 'clients'],
    heroStat: { value: '3 Weeks', label: 'Products sold out \u2014 unprecedented demand' },
    stats: [
      { value: '250mi', label: 'Customers traveled to reach the store' },
      { value: '3 Weeks', label: 'Continuous sellout \u2014 demand rivaling Jollibee openings' },
      { value: 'Multi-platform', label: 'TV, Digital, OOH, Direct Mail, Social, In-Store' },
      { value: 'Expansion', label: 'Triggered by launch success' },
    ],
    situation:
      "The Baker\u2019s Son by Valerio\u2019s was an entirely new brand \u2014 unknown to the public. The parent brand, Valerio\u2019s bakeries, was beloved among first-generation Filipinos but operated simple, community-located stores. The Baker\u2019s Son targeted multi-generational Filipino-Americans AND mainstream consumers. The family had never set up stores outside the U.S. West Coast. Florida was the first foray into a new region.",
    task: "Launch a new bakery brand in Florida \u2014 from zero awareness \u2014 to multi-generational Filipino-Americans and mainstream consumers, while evolving the parent brand\u2019s look and feel into something modern, vibrant, and inviting without losing its Filipino heritage roots.",
    action:
      "Crafted a communications plan that evolved The Baker\u2019s Son\u2019s image into a vibrant, modern, inviting storefront appealing to multiple generations. Developed creative materials that positioned TBS products as high-quality, delightful, affordable, and familiar \u2014 \u2018tradition with a twist.\u2019 Implemented a targeted, multi-platform media campaign across TFC cable TV (nationwide), GMA Pinoy TV, digital billboards (geo-targeted in Jacksonville), direct mail (geo-targeted to Florida), social media ads, influencer engagement, and in-store merchandising.",
    result:
      'Overwhelming acceptance and high-volume sales \u2014 products literally off the shelves for three weeks straight, a level of demand only previously seen during Jollibee U.S. store openings. Filipino-Americans felt proud and honored. Customers drove up to 250 miles to visit. Long lines with several hours of wait time. Major social media buzz influencing non-Filipinos to try the products. Expansion plans triggered directly by the success of the launch.',
    demonstrates:
      'End-to-end integrated brand launch management \u2014 from strategy and creative direction to multi-platform media execution and measurable market penetration. Demonstrates the ability to connect deeply with multicultural audiences while simultaneously reaching mainstream consumers, producing real, quantifiable business outcomes from a standing start.',
  },
  {
    slug: 'goldilocks-usa-media-campaign',
    title: 'Goldilocks USA \u2014 Media Campaign',
    client: 'Goldilocks USA',
    category: 'Media Planning & Buying \u00b7 TV Production',
    year: '2021',
    award: null,
    featured: false,
    tags: ['Media Planning', 'TV', 'Cable', 'Digital', 'OTT'],
    audiences: ['private', 'clients'],
    heroStat: { value: 'National', label: 'Cable + Digital campaign reach' },
    stats: [
      { value: 'National', label: 'Cable TV reach across the U.S.' },
      { value: 'Multi-platform', label: 'Cable, OTT, Local Terrestrial, Regional Digital' },
      { value: 'TVC', label: 'Full TV commercial production (Ensaymada + Mamon spots)' },
    ],
    situation:
      'Goldilocks is the most iconic bakery brand in the Philippines \u2014 a household name for every Filipino. Goldilocks USA needed media planning and buying support to launch TV commercials across the U.S. Filipino-American market, connecting with both first-generation and multi-generational consumers.',
    task: 'Plan and execute a multi-platform media buy for Goldilocks USA TV commercials, ensuring optimal reach across Filipino-American audiences nationwide while maximizing efficiency across cable, terrestrial broadcast, OTT, and digital channels.',
    action:
      'Led media planning and buying across nationwide cable, local terrestrial broadcast, local digital/OTT, regional cable, and regional digital/OTT. Coordinated full TVC production for the Ensaymada and Mamon spots. Managed platform mix and scheduling to maximize GRP delivery against target Filipino-American audiences across key U.S. markets.',
    result:
      "Successfully delivered national cable and multi-platform campaign presence for Goldilocks USA, reaching Filipino-American households across the U.S. with culturally resonant advertising for two of the brand\u2019s most beloved bakery products.",
    demonstrates:
      'Media strategy, planning, and buying expertise across broadcast, cable, OTT, and digital \u2014 with specific experience in both nationwide campaigns and targeted multicultural market execution.',
  },
  {
    slug: 'martin-purefoods-digital-social',
    title: 'Martin Purefoods — Digital & Social Campaign',
    client: 'Martin Purefoods Corporation',
    category: 'Digital Campaign · Social Media · TV Production',
    year: '2021–2022',
    award: null,
    featured: false,
    tags: ['Digital', 'Social Media', 'TVC Production', 'Filipino Brand'],
    audiences: ['private', 'clients'],
    heroStat: { value: '8+', label: 'TVCs produced & placed' },
    stats: [
      { value: '8+', label: 'TVCs produced & placed' },
      { value: '6+', label: 'Platforms reached' },
      { value: 'National', label: 'Cable + digital + social' },
    ],
    situation:
      'Martin Purefoods Corporation is a major Filipino processed meats brand (tocino, longganisa, hotdogs, franks) seeking to grow its U.S. market presence among Filipino-American households and position itself as a mainstream crossover brand.',
    task: 'Campaign strategist, media planner/buyer, and social media manager. Responsible for full TVC production coordination, media planning across broadcast and digital platforms, and managing Martin Purefoods social media content on Facebook and Instagram (published as Carl Briones, social media manager).',
    action:
      'Led with full TVC production to establish brand authority and quality perception, then sustained awareness through targeted social media content aligned to Filipino-American cultural moments — National Lumpia Day, Filipino-American History Month (October), 4th of July, Super Bowl Sunday, and Christmas/holiday season. Produced and media-planned 8+ TV commercials across product lines (Pork Belly Tocino, Lumpia Shanghai, All-Beef Franks, Longanisa, Hot Dogs, Spaghetti). Placed across TFC nationwide cable, GMA Pinoy TV, and digital OTT platforms with YouTube Ads, Facebook/Instagram Ads, programmatic buys, and paid Google Search. Managed social media content calendar with culturally resonant seasonal posts. Platforms: TFC (nationwide cable), GMA Pinoy TV, YouTube Ads, Facebook Ads, Instagram Ads, Google Search (Paid), Rakuten VIKI, Programmatic display.',
    result:
      'Consistent national brand presence across Filipino-American media platforms and mainstream digital channels. Cultural calendar content strategy created year-round engagement with the Filipino-American audience — recognizing them during heritage events while sustaining presence during mainstream U.S. holidays.',
    demonstrates:
      'Full-funnel multicultural marketing execution — from TVC production coordination through media planning, digital activation, and social media content management. The breadth of platform coverage (broadcast cable, OTT, social, search, programmatic) and the culturally informed content calendar demonstrate both media planning discipline and cultural audience intelligence.',
  },
  {
    slug: 'filipinofoodnearme-platform',
    title: 'FilipinoFoodNearMe.org',
    client: 'Self-Founded \u00b7 FilAm Network',
    category: 'Digital Platform \u00b7 Community Product',
    year: '2024\u2013Present',
    award: null,
    featured: true,
    tags: ['Founder', 'Next.js', 'Community', 'SEO', 'Platform'],
    audiences: ['private', 'government', 'clients'],
    heroStat: { value: '1,239+', label: 'Listings nationwide' },
    stats: [
      { value: '1,239+', label: 'Business listings nationwide' },
      { value: '34', label: 'States covered' },
      { value: '422+', label: 'Cities represented' },
      { value: '5', label: 'Food categories' },
    ],
    situation:
      'No comprehensive, community-driven Filipino food business directory existed in the United States. Filipino-American restaurants, bakeries, grocery stores, and food trucks were scattered and hard to discover, limiting visibility for small Filipino-owned businesses and creating friction for Filipino-Americans seeking authentic cuisine.',
    task: 'Conceive, design, build, launch, and grow the first community-driven Filipino food directory in America \u2014 from zero, with no formal engineering background, using AI-assisted workflows and self-directed learning.',
    action:
      'Founded FilipinoFoodNearMe.org and built the full platform using Next.js 14 App Router, Tailwind CSS, Vercel deployment, and Sentry monitoring \u2014 the same production-grade stack used by professional engineering teams. Developed content strategy, SEO architecture, brand identity, advertiser program, social media presence, and growth strategy.',
    result:
      '1,239+ listings across 34 states and 422+ cities \u2014 the first and only community Filipino food directory in America at this scale. Active advertiser program. Organic SEO traction. Featured in the FilAm community as a go-to resource.',
    demonstrates:
      'Full-stack digital product development from concept to launch \u2014 strategy, branding, UX, engineering, content, SEO, and growth \u2014 demonstrating the rare ability to both think like a marketer and build like a developer. Directly applicable to public agency digital service initiatives, private-sector product marketing, and community outreach platform development.',
  },
  {
    slug: 'filipinoeventsnearme-platform',
    title: 'FilipinoEventsNearMe.org',
    client: 'Self-Founded \u00b7 FilAm Network',
    category: 'Digital Platform \u00b7 Community Calendar',
    year: '2024\u2013Present',
    award: null,
    featured: false,
    tags: ['Founder', 'Next.js', 'Community', 'Events', 'Platform'],
    audiences: ['private', 'government', 'clients'],
    heroStat: { value: '150+', label: 'Events listed nationally' },
    stats: [
      { value: '150+', label: 'Events and festivals listed' },
      { value: '92+', label: 'Cities covered' },
      { value: '38+', label: 'States covered' },
      { value: '8', label: 'Event categories' },
    ],
    situation:
      'Filipino-American festivals, fiestas, Simbang Gabi, OPM concerts, cultural events, and community gatherings were scattered across social media with no centralized, searchable national calendar.',
    task: 'Build a community-powered national calendar of Filipino-American events that serves as the go-to discovery platform for the Filipino-American diaspora across all 50 states.',
    action:
      'Founded FilipinoEventsNearMe.org as the second platform in the FilAm Network \u2014 built using the same Next.js/Vercel/Sentry stack as FFNM, with event submission workflows, category filtering, city-based browsing, cultural calendar features, and community partnership programs.',
    result:
      '150+ events listed across 92+ cities in 38+ states, spanning 8 event categories including Festivals & Fiestas, Food & Markets, Arts & Music, and Business & Networking. Growing weekly through community submissions.',
    demonstrates:
      "Community platform strategy, digital product iteration, content architecture, and ecosystem thinking \u2014 building interconnected digital properties that reinforce each other\u2019s reach and community value.",
  },
  {
    slug: 'us-census-bureau-field-operations',
    title: 'U.S. Census Bureau \u2014 Field Operations',
    client: 'U.S. Census Bureau (Federal Government)',
    category: 'Public Service \u00b7 Field Data Collection',
    year: '2020',
    award: null,
    featured: false,
    tags: ['Public Service', 'Field Ops', 'Government', 'Compliance', 'Multilingual'],
    audiences: ['government'],
    heroStat: { value: '100%', label: 'Case completion rate' },
    stats: [
      { value: '100%', label: 'Case file completion' },
      { value: 'Title 13', label: 'Federal data confidentiality compliance' },
      { value: 'COVID-19', label: 'Field operations under public health restrictions' },
      { value: 'Multilingual', label: 'English/Tagalog community outreach' },
    ],
    situation:
      'The 2020 U.S. Decennial Census required accurate population data collection during an unprecedented public health emergency. Los Angeles \u2014 with its massive, linguistically diverse, historically undercounted communities \u2014 presented particular challenges in ensuring complete, accurate enumeration.',
    task: 'Serve as a frontline enumerator conducting data collection in diverse LA communities, building trust with residents, navigating language and cultural barriers, and achieving accurate documentation under COVID-19 health restrictions.',
    action:
      'Conducted direct field enumeration across diverse cultural, linguistic, and socioeconomic communities in Los Angeles. Applied strong interpersonal and active listening skills to clarify resident concerns, navigate Tagalog and English language barriers, and encourage civic participation from historically undercounted populations. Maintained strict statutory confidentiality of all respondent data under Title 13 federal guidelines.',
    result:
      "100% completion of assigned case files \u2014 all household enumerations documented accurately within federal guidelines and timeframes. Contributed to the equitable distribution of federal resources and congressional representation for LA\u2019s diverse communities.",
    demonstrates:
      'Direct public-sector field experience, federal protocol compliance (Title 13), multilingual community engagement, documentation accuracy, and service orientation \u2014 precisely the competencies required for LA County and California State public communications, outreach, and community affairs roles.',
  },
]
