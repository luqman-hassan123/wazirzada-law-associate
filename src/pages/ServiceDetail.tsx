import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowLeft, CheckCircle } from 'lucide-react'
import PageHero from '../components/ui/PageHero'
import Button from '../components/ui/Button'
import { services } from '../data/services'

export default function ServiceDetail() {
  const { slug } = useParams()
  const service = services.find((s) => s.slug === slug)

  if (!service) {
    return (
      <div className="flex min-h-[60vh] flex-col items-center justify-center px-4 text-center">
        <h1 className="text-xl font-semibold sm:text-2xl">Service not found</h1>
        <Link to="/services" className="mt-4 text-gold-500 hover:underline">
          Back to Services
        </Link>
      </div>
    )
  }

  const Icon = service.icon

  return (
    <>
      <PageHero subtitle="Practice Area" title={service.title} />

      <section className="section-padding">
        <div className="container-main">
          <Link
            to="/services"
            className="mb-6 inline-flex items-center gap-2 text-sm font-medium text-navy-700/60 transition-colors hover:text-gold-500 sm:mb-8"
          >
            <ArrowLeft size={16} />
            Back to Services
          </Link>

          <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="min-w-0"
            >
              <div className="mb-4 inline-flex rounded-xl bg-navy-900/5 p-3 text-navy-900 sm:mb-6 sm:p-4">
                <Icon size={32} strokeWidth={1.5} className="sm:h-10 sm:w-10" />
              </div>
              <p className="text-sm leading-relaxed text-navy-700/70 sm:text-base md:text-lg">
                {service.fullDescription}
              </p>
              <div className="mt-6 sm:mt-8">
                <Link to="/contact" className="inline-block w-full sm:w-auto">
                  <Button className="w-full sm:w-auto">Schedule Consultation</Button>
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="rounded-2xl border border-cream-200 bg-white p-5 shadow-lg sm:p-8"
            >
              <h3 className="mb-4 text-lg font-semibold text-navy-900 sm:mb-6 sm:text-xl">
                Key Services
              </h3>
              <ul className="space-y-3 sm:space-y-4">
                {service.features.map((feature, i) => (
                  <motion.li
                    key={feature}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-start gap-2.5 sm:items-center sm:gap-3"
                  >
                    <CheckCircle size={18} className="mt-0.5 shrink-0 text-gold-500 sm:mt-0 sm:h-5 sm:w-5" />
                    <span className="text-sm text-navy-700/70 sm:text-base">{feature}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  )
}
