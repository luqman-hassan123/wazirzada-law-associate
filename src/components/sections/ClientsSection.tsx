import { useState } from 'react'
import { motion } from 'framer-motion'
import { Building2, ChevronDown } from 'lucide-react'
import SectionHeading from '../ui/SectionHeading'
import ClientLogoMarquee from './ClientLogoMarquee'
import { clientCategories, clientIntro, clientLogo } from '../../data/clients'

function ClientLogo({ name, slug }: { name: string; slug: string }) {
  const [failed, setFailed] = useState(false)
  const initials = name
    .split(/[\s|(]+/)
    .filter((w) => w.length > 1 && w[0] === w[0]?.toUpperCase())
    .slice(0, 2)
    .map((w) => w[0])
    .join('')
    .toUpperCase()

  if (failed) {
    return (
      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-navy-900/5 text-xs font-bold text-navy-900">
        {initials || name.slice(0, 2).toUpperCase()}
      </div>
    )
  }

  return (
    <img
      src={clientLogo(slug)}
      alt={name}
      onError={() => setFailed(true)}
      className="h-12 w-12 shrink-0 rounded-lg border border-cream-200 bg-white object-contain p-1"
      loading="lazy"
    />
  )
}

export default function ClientsSection() {
  const [openId, setOpenId] = useState<string | null>(clientCategories[0]?.id ?? null)

  return (
    <section className="border-y border-cream-200 bg-white section-padding">
      <div className="container-main">
        <SectionHeading
          subtitle="Our Clients"
          title="Trusted by Leading Organizations"
          description={clientIntro}
        />

        <ClientLogoMarquee />

        <div className="mx-auto max-w-5xl space-y-3">
          {clientCategories.map((category, catIndex) => {
            const isOpen = openId === category.id
            return (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: catIndex * 0.05 }}
                className="overflow-hidden rounded-2xl border border-cream-200 bg-cream-50/50 transition-shadow duration-300 hover:shadow-md"
              >
                <button
                  type="button"
                  onClick={() => setOpenId(isOpen ? null : category.id)}
                  className="flex w-full items-center justify-between gap-4 p-4 text-left sm:p-5"
                >
                  <div className="flex min-w-0 items-center gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gold-400/15 text-gold-500">
                      <Building2 size={20} />
                    </div>
                    <div className="min-w-0">
                      <h3 className="text-sm font-semibold text-navy-900 sm:text-base">
                        {category.title}
                      </h3>
                      <p className="text-xs text-navy-700/50">
                        {category.clients.length} client
                        {category.clients.length !== 1 ? 's' : ''}
                      </p>
                    </div>
                  </div>
                  <motion.div animate={{ rotate: isOpen ? 180 : 0 }} className="shrink-0">
                    <ChevronDown size={18} className="text-navy-700/40" />
                  </motion.div>
                </button>

                {isOpen && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="border-t border-cream-200 px-4 pb-4 sm:px-5 sm:pb-5"
                  >
                    <ul className="grid gap-2 pt-3 sm:grid-cols-2 lg:grid-cols-3">
                      {category.clients.map((client) => (
                        <li
                          key={client.slug}
                          className="hover-card flex items-center gap-3 rounded-xl border border-cream-200 bg-white p-3 transition-all duration-300"
                        >
                          <ClientLogo name={client.name} slug={client.slug} />
                          <div className="min-w-0">
                            <p className="text-xs leading-snug font-medium text-navy-900 sm:text-sm">
                              {client.name}
                            </p>
                            {client.location && (
                              <p className="mt-0.5 text-[10px] text-navy-700/45 sm:text-xs">
                                {client.location}
                              </p>
                            )}
                          </div>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                )}
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
