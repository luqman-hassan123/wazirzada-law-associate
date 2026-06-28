import {
  Building2,
  FileText,
  Scale,
  Briefcase,
  HardHat,
  Lightbulb,
  Landmark,
  Home,
  Fuel,
} from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

export interface Service {
  id: string
  slug: string
  title: string
  shortDescription: string
  fullDescription: string
  icon: LucideIcon
  features: string[]
}

export const services: Service[] = [
  {
    id: '1',
    slug: 'litigation',
    title: 'Litigation & Dispute Resolution',
    shortDescription:
      'Strategic representation before courts, tribunals, and arbitral forums, delivering effective advocacy and practical dispute resolution.',
    fullDescription:
      'Our litigation team provides comprehensive representation before all levels of courts, tribunals, and arbitral forums in Pakistan. We combine aggressive advocacy with strategic thinking to achieve favorable outcomes for our clients in complex commercial, corporate, and civil disputes.',
    icon: Scale,
    features: [
      'Civil & commercial litigation',
      'Appellate advocacy',
      'Injunction proceedings',
      'Enforcement of judgments',
    ],
  },
  {
    id: '2',
    slug: 'document-preparation',
    title: 'Document Preparation & Legal Vetting',
    shortDescription:
      'Comprehensive drafting and legal vetting of commercial, corporate, and financial documents to ensure compliance and risk mitigation.',
    fullDescription:
      'We draft, review, and vet a wide range of legal documents including contracts, agreements, memoranda, and corporate resolutions. Our meticulous approach ensures every document meets regulatory requirements and protects your interests.',
    icon: FileText,
    features: [
      'Contract drafting & review',
      'Corporate documentation',
      'Legal due diligence',
      'Compliance vetting',
    ],
  },
  {
    id: '3',
    slug: 'arbitration',
    title: 'Commercial Arbitration & ADR',
    shortDescription:
      'Expert representation in mediation and arbitration proceedings, combining litigation strength with strategic alternative dispute resolution.',
    fullDescription:
      'Our ADR specialists represent clients in domestic and international arbitration under ICC, LCIA, and local rules. We also facilitate mediation and negotiation to resolve disputes efficiently outside the courtroom.',
    icon: Briefcase,
    features: [
      'Domestic & international arbitration',
      'Mediation & negotiation',
      'Arbitral award enforcement',
      'ADR strategy consulting',
    ],
  },
  {
    id: '4',
    slug: 'corporate',
    title: 'Corporate & Commercial Law',
    shortDescription:
      'End-to-end legal advisory for business formation, governance, contracts, and regulatory compliance.',
    fullDescription:
      'From company incorporation to complex M&A transactions, we provide full-spectrum corporate legal services. Our team advises on governance, shareholder agreements, joint ventures, and regulatory compliance across industries.',
    icon: Building2,
    features: [
      'Company formation & structuring',
      'Mergers & acquisitions',
      'Corporate governance',
      'Regulatory compliance',
    ],
  },
  {
    id: '5',
    slug: 'construction',
    title: 'Construction Contracts',
    shortDescription:
      'Specialized legal support for construction projects, including contract drafting, claims management, and dispute resolution.',
    fullDescription:
      'We advise developers, contractors, and consultants on all aspects of construction law including FIDIC contracts, claims management, delay analysis, and dispute resolution in infrastructure and real estate projects.',
    icon: HardHat,
    features: [
      'FIDIC contract advisory',
      'Claims & variations',
      'Project dispute resolution',
      'EPC & turnkey agreements',
    ],
  },
  {
    id: '6',
    slug: 'intellectual-property',
    title: 'Intellectual Property Law',
    shortDescription:
      'Protection and enforcement of trademarks, patents, and intellectual assets to safeguard innovation and brand value.',
    fullDescription:
      'Our IP practice covers trademark registration, patent filings, copyright protection, and enforcement actions. We help businesses protect their innovations, brands, and creative works in Pakistan and internationally.',
    icon: Lightbulb,
    features: [
      'Trademark registration',
      'Patent & copyright protection',
      'IP licensing agreements',
      'Infringement enforcement',
    ],
  },
  {
    id: '7',
    slug: 'banking',
    title: 'Banking & Finance',
    shortDescription:
      'Trusted legal advisory for banks and financial institutions on transactions, regulatory compliance, and financial disputes.',
    fullDescription:
      'We represent banks, NBFCs, and financial institutions on lending transactions, regulatory compliance with SBP guidelines, debt recovery, and financial dispute resolution.',
    icon: Landmark,
    features: [
      'Loan documentation',
      'SBP regulatory compliance',
      'Debt recovery proceedings',
      'Islamic finance advisory',
    ],
  },
  {
    id: '8',
    slug: 'real-estate',
    title: 'Real Estate Law',
    shortDescription:
      'Comprehensive legal services for real estate development, transactions, regulatory approvals, and project execution.',
    fullDescription:
      'Our real estate team handles property transactions, development agreements, land acquisition, zoning approvals, and dispute resolution for residential, commercial, and mixed-use projects.',
    icon: Home,
    features: [
      'Property transactions',
      'Development agreements',
      'Land acquisition',
      'Regulatory approvals',
    ],
  },
  {
    id: '9',
    slug: 'oil-gas',
    title: 'Oil & Gas',
    shortDescription:
      'Comprehensive legal services for oil and gas concessions, exploration, production, infrastructure development, and regulatory compliance.',
    fullDescription:
      'We advise upstream and downstream oil & gas companies on concessions, production sharing agreements, joint operating agreements, pipeline infrastructure, and compliance with DGPC and petroleum regulatory frameworks.',
    icon: Fuel,
    features: [
      'Concession agreements',
      'Production sharing contracts',
      'Pipeline & infrastructure',
      'DGPC regulatory compliance',
    ],
  },
]
