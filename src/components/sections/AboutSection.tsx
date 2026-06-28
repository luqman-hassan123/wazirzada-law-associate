import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import SectionHeading from '../ui/SectionHeading'
import AnimatedCounter from '../ui/AnimatedCounter'
import Button from '../ui/Button'
import { stats } from '../../data/site'

export default function AboutSection() {
  return (
    <section className="section-padding">
      <div className="container-main">
        <div className="grid items-center gap-10 sm:gap-12 lg:grid-cols-2 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <SectionHeading
              subtitle="Who We Are"
              title="Premier Full-Service Corporate Law Firm"
              align="left"
            />
            <p className="mb-6 leading-relaxed text-navy-700/70">
              Wazirzada Law Associates is a premier full-service corporate law firm in Pakistan,
              providing strategic, results-driven legal services across diverse industries and
              practice areas.
            </p>
            <p className="mb-8 leading-relaxed text-navy-700/70">
              We offer tailored legal consultancy and dispute resolution solutions grounded in
              excellence, integrity, and discretion, while adhering to both national and
              international professional standards.
            </p>
            <Link to="/about" className="inline-block w-full sm:w-auto">
              <Button variant="secondary" className="w-full sm:w-auto">About Us</Button>
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="grid grid-cols-1 gap-4 xs:grid-cols-2 sm:gap-6"
          >
            {stats.map((stat) => (
              <motion.div
                key={stat.label}
                whileHover={{ scale: 1.05, rotateY: 5 }}
                className="perspective-1000 rounded-2xl border border-cream-200 bg-white p-4 shadow-sm transition-shadow hover:shadow-lg sm:p-6"
              >
                <AnimatedCounter
                  value={stat.value}
                  suffix={stat.suffix}
                  label={stat.label}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
