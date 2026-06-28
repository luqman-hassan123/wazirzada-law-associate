import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { MapPin, Phone, User, Building2 } from 'lucide-react'
import SectionHeading from '../ui/SectionHeading'
import Button from '../ui/Button'
import { siteConfig } from '../../data/site'

export default function BranchesSection() {
  return (
    <section className="bg-cream-100 section-padding">
      <div className="container-main">
        <SectionHeading
          subtitle="Our Offices"
          title="Branches Across Pakistan"
          description="Visit our Islamabad head office or connect with our D.I. Khan branch for legal services across the region."
        />

        <div className="grid min-w-0 grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6">
          {siteConfig.offices.map((office, i) => (
            <motion.article
              key={office.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="hover-card flex h-full flex-col rounded-xl border border-cream-200 bg-white p-5 shadow-sm sm:rounded-2xl sm:p-6"
            >
              <div className="mb-4 flex items-start gap-3">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gold-400/15 text-gold-500">
                  <Building2 size={22} />
                </div>
                <div className="min-w-0">
                  <h3 className="text-base font-semibold text-navy-900 sm:text-lg">{office.name}</h3>
                  {office.id === 'islamabad' && (
                    <p className="mt-1 text-xs text-gold-500 sm:text-sm">Primary office</p>
                  )}
                </div>
              </div>

              <ul className="flex flex-1 flex-col gap-3 text-sm text-navy-700/75">
                <li className="flex items-start gap-3">
                  <MapPin size={16} className="mt-0.5 shrink-0 text-gold-500" />
                  <span className="min-w-0 break-words">{office.address}</span>
                </li>
                {'phone' in office && office.phone && (
                  <li className="flex items-center gap-3">
                    <Phone size={16} className="shrink-0 text-gold-500" />
                    <a href={`tel:${office.phone}`} className="hover:text-gold-500">
                      {office.phone}
                    </a>
                  </li>
                )}
                {office.mobile && (
                  <li className="flex items-center gap-3">
                    <Phone size={16} className="shrink-0 text-gold-500" />
                    <a
                      href={`tel:${office.mobile.replace(/\s/g, '')}`}
                      className="break-all hover:text-gold-500"
                    >
                      {office.mobile}
                    </a>
                  </li>
                )}
                {'contactPerson' in office && office.contactPerson && (
                  <li className="flex items-center gap-3">
                    <User size={16} className="shrink-0 text-gold-500" />
                    <span>{office.contactPerson}</span>
                  </li>
                )}
              </ul>
            </motion.article>
          ))}
        </div>

        <div className="mt-8 text-center sm:mt-10">
          <Link to="/contact" className="inline-block w-full sm:w-auto">
            <Button variant="secondary" className="w-full sm:w-auto">
              Contact a Branch
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
