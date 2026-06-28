import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import Button from '../ui/Button'
import { siteConfig } from '../../data/site'

const trustStats = [
  { value: '25+', label: 'Years Experience' },
  { value: '500+', label: 'Trusted Clients' },
  { value: '98%', label: 'Success Rate' },
]

export default function Hero() {
  return (
    <section className="gradient-hero relative overflow-hidden pt-[4.25rem] pb-8 xs:pt-[4.5rem] xs:pb-10 sm:pt-24 sm:pb-12 md:pt-28 md:pb-14 lg:min-h-screen lg:pt-32 lg:pb-16">
      <div className="grid-pattern absolute inset-0" />

      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 120, repeat: Infinity, ease: 'linear' }}
        className="pointer-events-none absolute top-1/4 -right-8 h-24 w-24 rounded-full border border-white/5 xs:h-32 xs:w-32 sm:h-48 sm:w-48 md:h-56 md:w-56"
      />

      <div className="container-main relative">
        {/* Mobile & tablet: stacked. Desktop: side-by-side */}
        <div className="flex flex-col items-center gap-6 xs:gap-8 md:flex-row md:items-center md:gap-8 lg:gap-12">
          <div className="w-full min-w-0 flex-1 text-center md:text-left">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="text-[1.35rem] leading-[1.25] font-semibold text-white xs:text-2xl sm:text-4xl md:text-[2.1rem] lg:text-5xl xl:text-[3rem] xl:leading-[1.12]"
            >
              Your Partners in Law, Strategy, and Success.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="mx-auto mt-3 max-w-lg text-[13px] leading-relaxed text-white/75 xs:text-sm sm:mt-4 sm:text-base md:mx-0 md:max-w-xl md:text-lg"
            >
              Built on excellence, ethics, and discretion, Wazirzada Law Associates provides
              high-quality legal representation aligned with national and international standards.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.45 }}
              className="mt-5 sm:mt-6"
            >
              <Link to="/contact" className="block w-full sm:inline-block sm:w-auto">
                <Button className="w-full sm:w-auto">Schedule Consultation</Button>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.6 }}
              className="mt-5 grid grid-cols-3 gap-1.5 xs:gap-2 sm:mt-6 sm:gap-3"
            >
              {trustStats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-lg border border-white/10 bg-white/5 px-1.5 py-2 backdrop-blur-sm xs:px-2.5 sm:rounded-xl sm:px-4 sm:py-2.5"
                >
                  <p className="text-xs font-bold text-gold-400 xs:text-sm sm:text-lg lg:text-xl">
                    {stat.value}
                  </p>
                  <p className="mt-0.5 text-[7px] leading-tight tracking-wide text-white/60 uppercase xs:text-[8px] sm:text-[10px] lg:text-xs">
                    {stat.label}
                  </p>
                </div>
              ))}
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.35 }}
            className="w-full shrink-0 md:w-[42%] md:max-w-[260px] lg:max-w-[300px] xl:max-w-[320px]"
          >
            <div className="relative mx-auto w-full max-w-[220px] xs:max-w-[240px] sm:max-w-[260px] md:mx-0 md:max-w-none">
              <div className="pointer-events-none absolute -inset-1 rounded-2xl bg-gradient-to-br from-gold-400/35 to-transparent sm:-inset-2" />
              <div className="relative flex w-full items-center justify-center overflow-hidden rounded-xl bg-navy-800/40 p-1 shadow-2xl shadow-black/40 sm:rounded-2xl sm:p-1.5">
                <img
                  src={siteConfig.heroImage}
                  alt="Wazirzada Muhammad Owais — Managing Partner"
                  className="block h-auto max-h-[min(25rem,70vh)] w-full object-contain object-center"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
