import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import PageHero from '../components/ui/PageHero'
import SectionHeading from '../components/ui/SectionHeading'
import LawyerCard from '../components/ui/LawyerCard'
import Button from '../components/ui/Button'
import { adrBenefits, adrIntro, adrServices, adrTeamSlugs } from '../data/adr'
import { lawyers } from '../data/lawyers'

const adrTeam = adrTeamSlugs
  .map((slug) => lawyers.find((lawyer) => lawyer.slug === slug))
  .filter((lawyer): lawyer is NonNullable<typeof lawyer> => Boolean(lawyer))

export default function ADR() {
  return (
    <>
      <PageHero
        subtitle="Alternative Dispute Resolution"
        title="ADR & Mediation"
        description="Resolve disputes outside the courtroom through mediation, arbitration, and negotiation—with an accredited ADR panel."
      />

      <section className="section-padding">
        <div className="container-main">
          <div className="mx-auto max-w-3xl">
            <SectionHeading
              subtitle="Overview"
              title={adrIntro.title}
              description="A practical path to settling disputes with speed, discretion, and professional guidance."
              align="left"
            />
            <div className="space-y-4">
              {adrIntro.paragraphs.map((paragraph) => (
                <p key={paragraph.slice(0, 48)} className="text-sm leading-relaxed text-navy-700/75 sm:text-base">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>

          <div className="mt-12 grid gap-4 sm:mt-16 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4">
            {adrBenefits.map((benefit, i) => (
              <motion.article
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="rounded-2xl border border-cream-200 bg-white p-5 shadow-sm sm:p-6"
              >
                <h3 className="text-base font-semibold text-navy-900 sm:text-lg">{benefit.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-navy-700/70">{benefit.description}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-cream-100 section-padding">
        <div className="container-main">
          <SectionHeading
            subtitle="Our Services"
            title="How We Support ADR Matters"
            description="From early negotiation to arbitration and award strategy, we guide clients through every stage of dispute resolution."
          />
          <div className="mx-auto grid max-w-5xl gap-5 sm:grid-cols-2 sm:gap-6">
            {adrServices.map((service, i) => (
              <motion.article
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="rounded-2xl border border-cream-200 bg-white p-5 shadow-sm sm:p-6"
              >
                <h3 className="text-lg font-semibold text-navy-900">{service.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-navy-700/75">{service.description}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-main">
          <SectionHeading
            subtitle="ADR Team"
            title="Mediator & ADR Panel"
            description="Accredited mediators and dispute resolution specialists dedicated to efficient, principled outcomes."
          />
          <div className="grid min-w-0 grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3 xl:grid-cols-5">
            {adrTeam.map((lawyer, i) => (
              <LawyerCard key={lawyer.id} lawyer={lawyer} index={i} />
            ))}
          </div>
          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:mt-12 sm:flex-row sm:gap-4">
            <Link to="/contact" className="inline-block w-full sm:w-auto">
              <Button className="w-full sm:w-auto">Discuss Your ADR Matter</Button>
            </Link>
            <Link to="/pricing" className="inline-block w-full sm:w-auto">
              <Button variant="secondary" className="w-full sm:w-auto">
                View Pricing
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
