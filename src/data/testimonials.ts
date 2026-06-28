export interface Testimonial {
  id: string
  quote: string
  name: string
  role: string
  company: string
}

/** Placeholder reviews — replace names/details when client approvals are received */
export const testimonials: Testimonial[] = [
  {
    id: '1',
    quote:
      'Wazirzada Law Associates handled our banking and regulatory matters with exceptional professionalism. Their strategic advice helped us navigate complex litigation and achieve a favourable outcome.',
    name: 'Ahmed Hassan',
    role: 'General Counsel',
    company: 'Habib Bank Limited',
  },
  {
    id: '2',
    quote:
      'The firm provided thorough legal support on our corporate and compliance requirements. Their attention to detail and commitment to our interests were evident throughout the engagement.',
    name: 'Fatima Khan',
    role: 'Director Legal Affairs',
    company: 'Pakistan Telecommunication Company Limited (PTCL)',
  },
  {
    id: '3',
    quote:
      'We relied on Wazirzada Law for real estate and development agreements. Their expertise, responsiveness, and practical counsel added real value to our projects.',
    name: 'Usman Malik',
    role: 'Chief Executive Officer',
    company: 'Emaar Pakistan',
  },
  {
    id: '4',
    quote:
      'From contract drafting to dispute resolution, the team demonstrated strong commercial understanding and effective advocacy. We would confidently recommend their services.',
    name: 'Sara Javed',
    role: 'Head of Legal',
    company: 'Pakistan Stock Exchange (PSX)',
  },
]
