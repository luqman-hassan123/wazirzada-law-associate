import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import type { Service } from '../../data/services'

interface ServiceCardProps {
  service: Service
  index: number
}

export default function ServiceCard({ service, index }: ServiceCardProps) {
  const Icon = service.icon

  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.45, delay: index * 0.06 }}
      className="group h-full"
    >
      <div className="hover-card hover-card-3d relative flex h-full flex-col overflow-hidden rounded-2xl border border-cream-200 bg-white p-5 sm:p-6 md:p-7">
        <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-gold-400/5 transition-all duration-500 group-hover:scale-150 group-hover:bg-gold-400/10" />

        <div className="mb-4 inline-flex w-fit rounded-xl bg-navy-900/5 p-2.5 text-navy-900 transition-all duration-300 group-hover:bg-gold-400/20 group-hover:text-gold-500 sm:mb-5 sm:p-3">
          <Icon size={24} strokeWidth={1.5} className="sm:h-7 sm:w-7" />
        </div>

        <h3 className="mb-2 text-lg font-semibold text-navy-900 transition-colors duration-300 group-hover:text-gold-500 sm:mb-3 sm:text-xl">
          {service.title}
        </h3>
        <p className="mb-4 flex-1 text-sm leading-relaxed text-navy-700/70 sm:mb-5">
          {service.shortDescription}
        </p>

        <Link
          to={`/services/${service.slug}`}
          className="inline-flex items-center gap-1 text-sm font-semibold text-gold-500 transition-all duration-300 group-hover:gap-2.5"
        >
          Learn More
          <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-0.5" />
        </Link>
      </div>
    </motion.div>
  )
}
