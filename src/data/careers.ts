export interface CareerPosition {
  id: string
  title: string
  department: string
  type: string
  location: string
  description: string
  requirements: string[]
}

export const careerBenefits = [
  {
    title: 'Professional Growth',
    description: 'Mentorship from senior advocates and exposure to high-profile cases across diverse practice areas.',
  },
  {
    title: 'Competitive Compensation',
    description: 'Market-leading salary packages with performance bonuses and annual increments.',
  },
  {
    title: 'Collaborative Culture',
    description: 'A supportive team environment that values integrity, excellence, and continuous learning.',
  },
  {
    title: 'Work-Life Balance',
    description: 'Flexible working arrangements and a healthy balance between professional and personal life.',
  },
]

export const openPositions: CareerPosition[] = [
  {
    id: '1',
    title: 'Associate Lawyer — Corporate & Commercial',
    department: 'Corporate Law',
    type: 'Full-time',
    location: 'Islamabad',
    description:
      'We are seeking a talented associate lawyer with 2–4 years of experience in corporate and commercial law to join our growing team.',
    requirements: [
      'LL.B from a recognized university',
      '2–4 years of corporate law experience',
      'Strong drafting and research skills',
      'Excellent written and verbal communication',
    ],
  },
  {
    id: '2',
    title: 'Litigation Associate',
    department: 'Litigation',
    type: 'Full-time',
    location: 'Islamabad',
    description:
      'Join our litigation team to handle complex civil and commercial disputes before courts and tribunals across Pakistan.',
    requirements: [
      'LL.B with litigation experience',
      'Experience before High Courts preferred',
      'Strong advocacy and analytical skills',
      'Ability to manage multiple cases simultaneously',
    ],
  },
  {
    id: '3',
    title: 'Legal Intern',
    department: 'All Departments',
    type: 'Internship',
    location: 'Islamabad',
    description:
      'An excellent opportunity for law students to gain hands-on experience in a premier corporate law firm environment.',
    requirements: [
      'Currently enrolled in LL.B program (3rd year or above)',
      'Strong academic record',
      'Passion for legal practice',
      'Commitment of at least 3 months',
    ],
  },
]
