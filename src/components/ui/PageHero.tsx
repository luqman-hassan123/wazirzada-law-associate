import { motion } from 'framer-motion'

interface PageHeroProps {
  title: string
  subtitle?: string
  description?: string
}

export default function PageHero({ title, subtitle, description }: PageHeroProps) {
  return (
    <section className="gradient-hero relative overflow-hidden pt-[4.25rem] pb-10 xs:pt-[4.5rem] sm:pt-28 sm:pb-14 md:pt-32 md:pb-16 lg:pb-20">
      <div className="grid-pattern absolute inset-0" />
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
        className="pointer-events-none absolute -top-16 -right-16 h-48 w-48 rounded-full border border-white/5 sm:-top-24 sm:-right-24 sm:h-64 sm:w-64 md:h-80 md:w-80"
      />
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 80, repeat: Infinity, ease: 'linear' }}
        className="pointer-events-none absolute -bottom-24 -left-24 h-56 w-56 rounded-full border border-gold-400/10 sm:-bottom-32 sm:-left-32 sm:h-72 sm:w-72 md:h-96 md:w-96"
      />

      <div className="container-main relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl"
        >
          {subtitle && (
            <span className="mb-3 inline-block text-xs font-semibold uppercase tracking-[0.15em] text-gold-400 sm:mb-4 sm:text-sm sm:tracking-[0.2em]">
              {subtitle}
            </span>
          )}
          <h1 className="text-2xl leading-tight font-semibold text-white xs:text-3xl sm:text-4xl md:text-[2.75rem] lg:text-5xl">
            {title}
          </h1>
          {description && (
            <p className="mt-4 text-sm leading-relaxed text-white/70 sm:mt-6 sm:text-base md:text-lg">
              {description}
            </p>
          )}
        </motion.div>
      </div>
    </section>
  )
}
