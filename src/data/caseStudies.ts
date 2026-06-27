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
  pdfPath?: string
}

export const caseStudies: CaseStudy[] = [
  {
    slug: '3af-digital-campaign-of-the-year',
    title: '3AF Digital Campaign of the Year \u2014 Remitly \u00d7 TFC',
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
      'For Filipino overseas workers, Christmas is the most emotionally charged time of year \u2014 homesickness peaks, remittance sending spikes, and connection to family back home becomes urgent. The Filipino Channel (TFC), the global network for Filipinos worldwide, and Remitly, a leading digital remittance platform, identified a shared mission: connect Filipinos anywhere in the world with their loved ones back home. The question was how to do it in a way that felt culturally authentic rather than transactional.',
    task:
      'Co-developed with TFC Ad Sales Director Ricky Resurreccion, the campaign concept was pitched to Remitly as a first-of-its-kind branded digital caroling experience \u2014 \u201cNamamasko Po!\u201d \u2014 The Kapamilya Christmas Carols. Rather than a standard sponsorship placement, this was a cultural event: 12 consecutive days of live caroling performances broadcast on Facebook Live and TFC.tv, featuring Remitly Ambassadors and TFC celebrities delivering holiday entertainment to Filipino communities worldwide. Campaign visuals and merchandise were designed around Remitly brand colors for subtle but consistent sponsor presence. All digital content included clickable, trackable links directly to Remitly promotional pages.',
    action:
      'Managed as Team Lead and Project Coordinator across U.S. and Philippines teams. Coordinated between Remitly (U.S. client), the TFC U.S. sales team, and the TFC Manila production team who executed all creative, talent, and broadcast production. 12-day broadcast schedule across U.S. & Canada (West Coast 4PM / East Coast 7PM), UK (12MN), Australia (11AM), and Manila (8AM) \u2014 simultaneous global reach across 4 time zones. All content distributed on Facebook Live and TFC.tv with embedded Remitly promotional links.',
    result:
      'Half a million viewers reached globally across North America, the Middle East, Asia, and Europe, with thousands tuning in daily throughout the 12-day campaign. For Remitly: hundreds of Facebook comments expressing brand gratitude and pride, a 30% increase in site traffic immediately following campaign launch, thousands of direct promotional site visits, and record December revenue targets achieved. For TFC audiences: thousands of appreciative comments from Filipinos worldwide. Won the 2018 Digital Campaign of the Year from the Asian-American Advertising Federation (3AF) \u2014 the premier recognition in Asian-American advertising.',
    demonstrates:
      'This campaign demonstrates the ability to conceive a novel partnership format, sell it to a major brand client, and then execute it at global scale across four time zones and two production teams on opposite sides of the Pacific. The 30% Remitly traffic lift and record December targets are hard commercial outcomes. The 3AF award confirms industry recognition of the campaign\u2019s innovation. For government evaluators: this is multicultural community outreach with documented audience impact across North America, the Middle East, Asia, and Europe. For private-sector evaluators: this is partnership development, campaign innovation, and measurable ROI at global scale.',
    role: 'Account Executive and Team Lead, ABS-CBN International / The Filipino Channel. Co-conceived the campaign partnership with Ad Sales Director Ricky Resurreccion and pitched it to Remitly as a first-of-its-kind branded digital caroling partnership. Served as Team Lead and Project Manager throughout execution \u2014 coordinating between the U.S. client (Remitly), the TFC U.S. sales team, and the TFC Manila production team. Responsible for client relationship management, sponsorship delivery, cross-regional team coordination, and campaign performance oversight. Content production was executed by the TFC Manila creative and production team.',
    pdfPath: '/pdfs/3AF-Digital-Campaign-of-the-Year.pdf',
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
      "A Sunday Afternoon Party (ASAP) is the Philippines\u2019 most popular variety show, featuring 40+ top-tier ABS-CBN celebrities. In 2016, The Filipino Channel brought this landmark live event to Barclays Center in New York \u2014 one of the largest and most prestigious entertainment venues in the United States \u2014 to engage the millions of Filipino-Americans on the East Coast. The event, branded \u201cASAP New York Invasion,\u201d was a sold-out tent-pole cultural moment for the Filipino-American community.",
    task:
      'Build a sponsorship architecture broad enough to accommodate advertisers from Fortune 500 brands down to local Filipino-American businesses, while delivering premium on-stage experiences for flagship sponsors. Create a grand pre-show brand activation to generate audience energy and maximize sponsor visibility before the main event. Exceed ambitious revenue targets in a competitive live event market.',
    action:
      'As Head of Sponsorship and Ad Sales Logistics: established clearly structured sponsorship tiers (Platinum, Gold, Silver, Bronze, Community Partner, Custom) to accommodate the full range of U.S. and Philippine advertisers. Led inter-regional coordination between U.S. and Philippines teams across all planning and logistical requirements. Strategized, conceptualized, and executed the grand pre-show on-stage brand experience in collaboration with internal creative, production, and account teams. Spearheaded all on-site logistical operations for brand engagements and activations on event day. Led all creative sales packaging and salesmanship efforts.',
    result:
      'Barclays Center sold out \u2014 12,000 Filipino-Americans. Exceeded ambitious sales targets. Advertisers across diverse sizes and product categories successfully participated in the event. The inter-regional U.S.\u2013Philippines team working relationship established during this project became a benchmark for all subsequent similar projects. The on-stage pre-show and on-site brand engagement model was recognized as a best-in-class standard for future TFC events. Awarded MVP \u2014 Most Outstanding Eventurer by TFC / ABS-CBN International leadership.',
    demonstrates:
      'Large-scale event logistics and operations management, cross-regional multi-stakeholder coordination, sponsorship architecture and sales execution, and the ability to deliver under high-stakes, high-visibility pressure \u2014 directly transferable to public agency event programming, major institutional communications, and enterprise-level marketing operations.',
    pdfPath: '/pdfs/ASAP-Live-New-York-MVP.pdf',
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
    pdfPath: '/pdfs/JCBSM-Case-Study-The-Bakers-Son.pdf',
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
