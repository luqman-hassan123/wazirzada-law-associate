import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Clock, User } from 'lucide-react'
import PageHero from '../components/ui/PageHero'
import ContactSection from '../components/sections/ContactSection'
import { siteConfig } from '../data/site'

export default function Contact() {
  return (
    <>
      <PageHero
        subtitle="Contact"
        title="Get In Touch"
        description="We are here to help with your legal needs. Reach out to schedule a consultation at our Islamabad head office or D.I. Khan branch."
      />

      <section className="section-padding">
        <div className="container-main">
          <div className="mb-10 grid gap-4 sm:grid-cols-2 sm:gap-6">
            {siteConfig.offices.map((office, i) => (
              <motion.div
                key={office.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="rounded-2xl border border-cream-200 bg-white p-5 shadow-sm sm:p-6"
              >
                <h3 className="text-lg font-semibold text-navy-900">{office.name}</h3>
                <ul className="mt-4 space-y-3 text-sm text-navy-700/70">
                  <li className="flex items-start gap-3">
                    <MapPin size={16} className="mt-0.5 shrink-0 text-gold-500" />
                    <span>{office.address}</span>
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
                        className="hover:text-gold-500"
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
              </motion.div>
            ))}
          </div>

          <div className="grid gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4">
            {[
              {
                icon: Mail,
                label: 'Email',
                emails: siteConfig.emails,
              },
              {
                icon: Phone,
                label: 'Phone',
                phones: [siteConfig.phoneLandline, siteConfig.phone],
              },
              {
                icon: Clock,
                label: 'Office Hours',
                value: 'Mon – Fri: 9:00 AM – 6:00 PM',
              },
            ].map((info, i) => (
              <motion.div
                key={info.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -4 }}
                className="rounded-2xl border border-cream-200 bg-white p-5 text-center shadow-sm sm:p-6"
              >
                <div className="mx-auto mb-3 inline-flex rounded-xl bg-gold-400/10 p-2.5 text-gold-500">
                  <info.icon size={22} />
                </div>
                <h3 className="mb-2 text-sm font-semibold text-navy-900">{info.label}</h3>
                {'emails' in info && info.emails ? (
                  <div className="space-y-1">
                    {info.emails.map((email) => (
                      <a
                        key={email}
                        href={`mailto:${email}`}
                        className="block break-all text-xs text-navy-700/60 hover:text-gold-500 sm:text-sm"
                      >
                        {email}
                      </a>
                    ))}
                  </div>
                ) : 'phones' in info && info.phones ? (
                  <div className="space-y-1">
                    {info.phones.map((phone) => (
                      <a
                        key={phone}
                        href={`tel:${phone.replace(/\s/g, '')}`}
                        className="block text-xs text-navy-700/60 hover:text-gold-500 sm:text-sm"
                      >
                        {phone}
                      </a>
                    ))}
                  </div>
                ) : (
                  <p className="text-xs text-navy-700/60 sm:text-sm">{info.value}</p>
                )}
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-8 overflow-hidden rounded-2xl shadow-lg sm:mt-12"
          >
            <iframe
              title="Islamabad Office Location"
              src="https://maps.google.com/maps?q=F-6/1+Islamabad+Pakistan&output=embed"
              className="h-56 w-full border-0 sm:h-72 md:h-80"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </motion.div>
        </div>
      </section>

      <ContactSection />
    </>
  )
}
