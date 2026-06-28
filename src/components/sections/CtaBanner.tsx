import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import Button from '../ui/Button'

export default function CtaBanner() {
  return (
    <section className="gradient-hero relative overflow-hidden section-padding">
      <div className="grid-pattern absolute inset-0" />
      <motion.div
        animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute top-1/2 left-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold-400/10 blur-3xl sm:h-96 sm:w-96"
      />

      <div className="container-main relative max-w-4xl text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-2xl font-semibold text-white sm:text-3xl md:text-4xl lg:text-5xl"
        >
          Corporate Law Expertise You Can Build On!
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-3 text-base text-white/70 sm:mt-4 sm:text-lg"
        >
          Protecting Your Company. Powering Your Growth.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-6 sm:mt-8"
        >
          <Link to="/contact" className="inline-block w-full sm:w-auto">
            <Button className="w-full sm:w-auto">Contact Us</Button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
