import { motion } from 'framer-motion'

interface SectionHeadingProps {
  subtitle?: string
  title: string
  description?: string
  light?: boolean
  align?: 'left' | 'center'
}

export default function SectionHeading({
  subtitle,
  title,
  description,
  light = false,
  align = 'center',
}: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6 }}
      className={`mb-6 xs:mb-8 sm:mb-10 md:mb-12 lg:mb-16 ${align === 'center' ? 'text-center' : 'text-left'}`}
    >
      {subtitle && (
        <span
          className={`mb-2 inline-block text-xs font-semibold uppercase tracking-[0.15em] sm:mb-3 sm:text-sm sm:tracking-[0.2em] ${
            light ? 'text-gold-400' : 'text-gold-500'
          }`}
        >
          {subtitle}
        </span>
      )}
      <h2
        className={`text-xl leading-tight font-semibold xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl ${
          light ? 'text-white' : 'text-navy-900'
        }`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`mx-auto mt-3 max-w-2xl text-sm leading-relaxed sm:mt-4 sm:text-base md:text-lg ${
            align === 'center' ? '' : 'mx-0'
          } ${light ? 'text-white/70' : 'text-navy-700/70'}`}
        >
          {description}
        </p>
      )}
    </motion.div>
  )
}
