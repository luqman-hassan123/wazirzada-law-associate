export interface Client {
  name: string
  slug: string
  location?: string
}

export interface ClientCategory {
  id: string
  title: string
  clients: Client[]
}

export const clientIntro =
  'We are privileged to have represented a diverse range of clients across key sectors, including banking, government, construction, tourism, and finance. Below is a selection of organizations that have entrusted Wazirzada Law Associates with their legal matters.'

export const clientCategories: ClientCategory[] = [
  {
    id: 'banking',
    title: 'Banking & Financial Institutions',
    clients: [
      { name: 'SME Bank Limited', slug: 'sme-bank-limited', location: 'Islamabad' },
      { name: 'Prime Commercial Bank Limited', slug: 'prime-commercial-bank', location: 'Islamabad' },
      { name: 'Faysal Bank Limited', slug: 'faysal-bank-limited', location: 'Islamabad' },
      { name: 'Askari Bank Limited', slug: 'askari-bank' },
      { name: 'Habib Bank Limited', slug: 'habib-bank-limited' },
      { name: 'Meezan Bank Limited (North Region)', slug: 'meezan-bank-limited', location: 'Islamabad' },
      { name: 'JS Bank Limited', slug: 'js-bank-limited' },
      { name: 'Bank of Khyber', slug: 'bank-of-khyber' },
      { name: 'Muslim Commercial Bank', slug: 'muslim-commercial-bank' },
      { name: 'MCB Islamic Bank Limited', slug: 'mcb-islamic-bank' },
      { name: 'Halan Microfinance Bank Limited', slug: 'halan-microfinance-bank' },
    ],
  },
  {
    id: 'government',
    title: 'Government Entities & Regulatory Authorities',
    clients: [
      { name: 'Agri. Support Fund (Section 42 Company)', slug: 'agri-support-fund' },
      { name: 'Pakistan Telecommunication Company Limited (PTCL)', slug: 'ptcl' },
      { name: 'Ravi Urban Development Authority (RUDA)', slug: 'ruda' },
      { name: 'Federal Government Employees Housing Authority (FGEHA)', slug: 'fgeha' },
      { name: 'Balochistan Revenue Authority (BRA)', slug: 'bra' },
      { name: 'Pakistan Engineering Council (PEC)', slug: 'pec' },
      { name: 'Kamra Aviation Industries Limited (KAIL)', slug: 'kail' },
      { name: 'Shaheen Airport Services (SAPS)', slug: 'saps' },
      { name: 'National Cyber Crime Investigation Agency (NCCIA)', slug: 'nccia' },
    ],
  },
  {
    id: 'construction',
    title: 'Construction & Engineering Firms',
    clients: [
      { name: 'China Harbour Engineering Company', slug: 'china-harbour-engineering' },
      { name: 'Shikhan Construction (Pvt.) Limited', slug: 'shikhan-construction' },
      { name: 'Hasas Construction (Pvt.) Limited', slug: 'hasas-construction' },
      { name: 'HKC (Pvt.) Limited', slug: 'hkc' },
      { name: 'King Crete', slug: 'king-crete' },
    ],
  },
  {
    id: 'real-estate',
    title: 'Real Estate & Developers',
    clients: [
      { name: 'TPL Properties', slug: 'tpl-properties' },
      { name: 'HMR (Pvt) Limited (Karachi Waterfront) | Giga Group', slug: 'hmr-giga-group' },
      { name: 'Emaar Pakistan', slug: 'emaar-pakistan' },
      { name: 'Wusat Developers (Pvt.) Ltd.', slug: 'wusat-developers' },
      { name: 'Aryan Land Linkers (Developers)', slug: 'aryan-land-linkers' },
      { name: 'Giga Group of Companies', slug: 'giga-group' },
    ],
  },
  {
    id: 'tourism',
    title: 'Tourism, Leisure & Hospitality',
    clients: [
      { name: 'Islamabad One Murree Hills', slug: 'islamabad-one-murree-hills' },
      { name: 'Mr. Cod Pakistan (Pvt.) Limited', slug: 'mr-cod-pakistan' },
      { name: 'M/s Yousafzai Adventures', slug: 'yousafzai-adventures', location: 'Islamabad' },
    ],
  },
  {
    id: 'financial-services',
    title: 'Financial & Leasing Services',
    clients: [
      { name: 'Grays Leasing (Pvt.) Limited', slug: 'grays-leasing', location: 'Islamabad' },
      { name: 'Saudi Pak Consultancy Company Limited', slug: 'saudi-pak-consultancy' },
      { name: 'Parwaaz Financial Services Limited (PFSL)', slug: 'parwaaz-financial-services' },
      { name: 'Saudi Pak Industrial and Agricultural Company Limited', slug: 'saudi-pak-industrial' },
    ],
  },
  {
    id: 'technology',
    title: 'Technology & Digital Companies',
    clients: [
      { name: 'CodeStudio', slug: 'codestudio' },
      { name: 'Sigma Digital', slug: 'sigma-digital' },
    ],
  },
  {
    id: 'capital-markets',
    title: 'Capital Markets',
    clients: [{ name: 'Pakistan Stock Exchange (PSX)', slug: 'pakistan-stock-exchange' }],
  },
]

/** Clients that share the same logo file (marquee shows once) */
const clientLogoAlias: Record<string, string> = {
  'mcb-islamic-bank': 'muslim-commercial-bank',
}

const resolveLogoSlug = (slug: string) => clientLogoAlias[slug] ?? slug

/** File extension per client slug (after logos are copied to public/images/clients/) */
const clientLogoExt: Record<string, string> = {
  'sme-bank-limited': 'png',
  'prime-commercial-bank': 'jpeg',
  'faysal-bank-limited': 'png',
  'askari-bank': 'svg',
  'habib-bank-limited': 'jpeg',
  'meezan-bank-limited': 'png',
  'js-bank-limited': 'png',
  'bank-of-khyber': 'png',
  'muslim-commercial-bank': 'png',
  'mcb-islamic-bank': 'png',
  'halan-microfinance-bank': 'jpeg',
  'agri-support-fund': 'jpeg',
  ptcl: 'png',
  ruda: 'jpeg',
  fgeha: 'jpeg',
  bra: 'jpeg',
  pec: 'png',
  kail: 'jpeg',
  saps: 'jpeg',
  nccia: 'jpeg',
  'china-harbour-engineering': 'png',
  'shikhan-construction': 'jpeg',
  'hasas-construction': 'png',
  hkc: 'png',
  'tpl-properties': 'jpeg',
  'hmr-giga-group': 'png',
  'emaar-pakistan': 'png',
  'wusat-developers': 'png',
  'aryan-land-linkers': 'jpeg',
  'giga-group': 'jpeg',
  'mr-cod-pakistan': 'png',
  'grays-leasing': 'png',
  'saudi-pak-consultancy': 'jpeg',
  'parwaaz-financial-services': 'png',
  'saudi-pak-industrial': 'jpeg',
  codestudio: 'png',
  'sigma-digital': 'jpeg',
  'pakistan-stock-exchange': 'jpeg',
}

export const clientLogo = (slug: string) => {
  const resolved = resolveLogoSlug(slug)
  const ext = clientLogoExt[resolved] ?? clientLogoExt[slug]
  return ext ? `/images/clients/${resolved}.${ext}` : `/images/clients/${slug}.png`
}

export const hasClientLogo = (slug: string) =>
  slug in clientLogoExt || slug in clientLogoAlias

/** Flat list of all clients — used for the logo marquee */
export const allClients = clientCategories.flatMap((category) => category.clients)

/** Clients that have a logo file in public/images/clients/ */
export const clientsWithLogos = allClients.filter((c) => hasClientLogo(c.slug))

/** One entry per unique logo (no duplicate MCB, etc.) */
export const clientsWithUniqueLogos = clientsWithLogos.filter(
  (client, index, list) =>
    list.findIndex((c) => resolveLogoSlug(c.slug) === resolveLogoSlug(client.slug)) === index,
)
