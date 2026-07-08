import { services } from './services'

export const contactServiceOptions = [...services.map((s) => s.title), 'Others']

export const siteConfig = {
  name: 'Wazirzada Law Associates',
  tagline: 'Built on Trust. Driven by Results.',
  /** Form visible on site. Set true after client approval to send emails via Web3Forms (.env key). */
  enableContactFormEmail: false,
  phone: '+92 3215383346',
  phoneLandline: '(051) 6112374',
  email: 'wazirzada@wazirzadalaw.com',
  emails: ['wazirzada@wazirzadalaw.com', 'info@wazirzadalaw.com'],
  address: 'House No. 12, Street No. 41, Sector F-6/1, Islamabad, Pakistan',
  /** Logo: public/images/logo.png */
  logo: '/images/logo.png',
  /** Hero: public/images/hero-attorney.jpeg (Mr. Owais) */
  heroImage: '/images/hero-attorney.jpeg',
  whatsapp: '923215383346',
  offices: [
    {
      id: 'islamabad',
      name: 'Islamabad — Head Office',
      address: 'House No. 12, Street No. 41, Sector F-6/1, Islamabad, Pakistan',
      phone: '(051) 6112374',
      mobile: '+92 3215383346',
    },
    {
      id: 'di-khan',
      name: 'D.I. Khan Branch',
      address: 'D.I. Khan, Khyber Pakhtunkhwa, Pakistan',
      contactPerson: 'Atif Ali Khan',
      mobile: '+92 345 9871007',
    },
  ],
  social: {
    facebook: 'https://facebook.com',
    twitter: 'https://twitter.com',
    instagram: 'https://instagram.com',
    linkedin: 'https://linkedin.com',
    gmb: 'https://google.com',
  },
}

export const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  {
    label: 'Services',
    path: '/services',
    children: [
      { label: 'Litigation & Dispute Resolution', path: '/services/litigation' },
      { label: 'Document Preparation', path: '/services/document-preparation' },
      { label: 'Commercial Arbitration & ADR', path: '/services/arbitration' },
      { label: 'Corporate & Commercial Law', path: '/services/corporate' },
      { label: 'Construction Contracts', path: '/services/construction' },
      { label: 'Intellectual Property', path: '/services/intellectual-property' },
      { label: 'Banking & Finance', path: '/services/banking' },
      { label: 'Real Estate Law', path: '/services/real-estate' },
      { label: 'Oil & Gas', path: '/services/oil-gas' },
    ],
  },
  { label: 'Pricing', path: '/pricing' },
  { label: 'Careers', path: '/careers' },
  { label: 'Contact', path: '/contact' },
]

export const stats = [
  { value: 25, suffix: '+', label: 'Best Attorneys' },
  { value: 15, suffix: '+', label: 'Years of Experience' },
  { value: 98, suffix: '%', label: 'Cases Won' },
  { value: 500, suffix: '+', label: 'Trusted Clients' },
]
