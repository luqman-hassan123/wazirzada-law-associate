import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import PageHero from '../components/ui/PageHero'
import SectionHeading from '../components/ui/SectionHeading'
import AnimatedCounter from '../components/ui/AnimatedCounter'
import LawyerCard from '../components/ui/LawyerCard'
import Button from '../components/ui/Button'
import { stats } from '../data/site'
import { lawyers } from '../data/lawyers'

const values = [
  {
    title: 'Excellence',
    description: 'We pursue the highest standards in every matter we handle.',
  },
  {
    title: 'Integrity',
    description: 'Ethical practice is the foundation of everything we do.',
  },
  {
    title: 'Discretion',
    description: 'Client confidentiality is paramount in our engagements.',
  },
  {
    title: 'Results',
    description: 'We focus on outcomes that advance our clients objectives.',
  },
]

export default function About() {
  return (
    <>
      <PageHero
        subtitle="About Us"
        title="Who We Are"
        description="A premier full-service corporate law firm built on trust, excellence, and results."
      />

      <section className="section-padding">
        <div className="container-main">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mx-auto max-w-3xl"
          >
            <SectionHeading
              subtitle="Our Story"
              title="Built on Trust. Driven by Results."
              align="left"
            />
            <p className="mb-4 text-sm leading-relaxed text-navy-700/70 sm:text-base">
              Wazirzada Law Associates is a premier full-service corporate law firm in Pakistan,
              providing strategic, results-driven legal services across diverse industries and
              practice areas.
            </p>
            <p className="text-sm leading-relaxed text-navy-700/70 sm:text-base">
              With a team of experienced legal professionals, we deliver practical,
              client-focused advice designed to address complex legal challenges and support our
              clients long-term business, financial, and personal objectives.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="bg-navy-900 py-14 sm:py-20">
        <div className="container-main">
          <div className="grid grid-cols-1 gap-8 xs:grid-cols-2 md:grid-cols-4 md:gap-8">
            {stats.map((stat) => (
              <AnimatedCounter
                key={stat.label}
                value={stat.value}
                suffix={stat.suffix}
                label={stat.label}
                light
              />
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-main">
          <SectionHeading subtitle="Our Values" title="What Drives Us" />
          <div className="grid gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4">
            {values.map((value, i) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -8, rotateY: 5 }}
                className="perspective-1000 rounded-2xl border border-cream-200 bg-white p-5 text-center shadow-sm transition-shadow hover:shadow-lg sm:p-6"
              >
                <h3 className="mb-2 text-lg font-semibold text-navy-900 sm:text-xl">{value.title}</h3>
                <p className="text-sm text-navy-700/60">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-cream-100 section-padding">
        <div className="container-main">
          <SectionHeading subtitle="Our Team" title="Meet Our Attorneys" />
          <div className="grid min-w-0 grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3 lg:gap-8 xl:grid-cols-4">
            {lawyers.map((lawyer, i) => (
              <LawyerCard key={lawyer.id} lawyer={lawyer} index={i} />
            ))}
          </div>
          <div className="mt-10 text-center sm:mt-12">
            <Link to="/contact" className="inline-block w-full sm:w-auto">
              <Button className="w-full sm:w-auto">Schedule a Consultation</Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
