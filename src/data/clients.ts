export interface Client {
  name: string
  category: string
}

export const clientLogos: Client[] = [
  { name: "McDonald's", category: 'Food & Beverage' },
  { name: 'AT&T', category: 'Telecommunications' },
  { name: 'Verizon', category: 'Telecommunications' },
  { name: 'Toyota', category: 'Automotive' },
  { name: 'Ford', category: 'Automotive' },
  { name: 'Walmart', category: 'Retail' },
  { name: 'U.S. Bank', category: 'Financial Services' },
  { name: 'Remitly', category: 'Financial Services' },
  { name: 'MoneyGram', category: 'Financial Services' },
  { name: 'Sony Pictures', category: 'Entertainment' },
  { name: 'DirecTV', category: 'Media' },
  { name: 'Goldilocks USA', category: 'Food & Beverage' },
  { name: 'U.S. Census Bureau', category: 'Government' },
  { name: 'Tobacco Free California', category: 'Public Health' },
  { name: 'Los Angeles Fire Department', category: 'Government' },
  { name: 'EVA Air', category: 'Travel' },
]

export const featuredClients = [
  "McDonald's",
  'AT&T',
  'Verizon',
  'Toyota',
  'Walmart',
  'U.S. Bank',
  'Sony Pictures',
  'U.S. Census Bureau',
]
