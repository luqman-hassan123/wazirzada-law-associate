import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Check } from 'lucide-react'
import PageHero from '../components/ui/PageHero'
import SectionHeading from '../components/ui/SectionHeading'
import Button from '../components/ui/Button'

const plans = [
  {
    name: 'Consultation',
    price: 'PKR 15,000',
    period: 'per session',
    description: 'Initial legal consultation for individuals and small businesses.',
    features: [
      '60-minute consultation',
      'Case assessment',
      'Legal strategy overview',
      'Written summary of advice',
    ],
    popular: false,
  },
  {
    name: 'Business Retainer',
    price: 'PKR 75,000',
    period: 'per month',
    description: 'Ongoing legal support for growing businesses and startups.',
    features: [
      'Unlimited email/phone advice',
      'Contract review (up to 5/month)',
      'Regulatory compliance guidance',
      'Priority scheduling',
      'Quarterly legal health check',
    ],
    popular: true,
  },
  {
    name: 'Corporate',
    price: 'Custom',
    period: 'tailored',
    description: 'Comprehensive legal partnership for established corporations.',
    features: [
      'Dedicated legal team',
      'Full litigation support',
      'M&A advisory',
      'Board governance counsel',
      '24/7 emergency support',
      'Custom SLA agreements',
    ],
    popular: false,
  },
]

export default function Pricing() {
  return (
    <>
      <PageHero
        subtitle="Pricing"
        title="Transparent Legal Pricing"
        description="Flexible plans designed to meet the needs of individuals, businesses, and corporations."
      />

      <section className="section-padding">
        <div className="container-main">
          <SectionHeading
            title="Choose Your Plan"
            description="All plans include a confidential initial assessment. Contact us for custom enterprise solutions."
          />
          <div className="grid gap-6 sm:grid-cols-2 sm:gap-8 lg:grid-cols-3">
            {plans.map((plan, i) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                whileHover={{ y: -12, rotateY: plan.popular ? 0 : 3 }}
                className={`perspective-1000 relative rounded-2xl border p-5 transition-shadow hover:shadow-2xl sm:p-8 ${
                  plan.popular
                    ? 'border-gold-400 bg-navy-900 text-white shadow-xl shadow-navy-900/20 sm:col-span-2 lg:col-span-1'
                    : 'border-cream-200 bg-white shadow-sm'
                }`}
              >
                {plan.popular && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gold-400 px-3 py-1 text-[10px] font-bold text-navy-900 sm:px-4 sm:text-xs">
                    MOST POPULAR
                  </span>
                )}
                <h3
                  className={`text-lg font-semibold sm:text-xl ${plan.popular ? 'text-white' : 'text-navy-900'}`}
                >
                  {plan.name}
                </h3>
                <div className="mt-3 flex flex-wrap items-baseline gap-x-2 gap-y-1 sm:mt-4">
                  <span
                    className={`text-2xl font-bold sm:text-3xl ${plan.popular ? 'text-gold-400' : 'text-navy-900'}`}
                  >
                    {plan.price}
                  </span>
                  <span
                    className={`text-xs sm:text-sm ${plan.popular ? 'text-white/60' : 'text-navy-700/50'}`}
                  >
                    {plan.period}
                  </span>
                </div>
                <p
                  className={`mt-3 text-sm sm:mt-4 ${plan.popular ? 'text-white/70' : 'text-navy-700/60'}`}
                >
                  {plan.description}
                </p>
                <ul className="mt-6 space-y-2.5 sm:mt-8 sm:space-y-3">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2.5 text-sm sm:items-center sm:gap-3">
                      <Check
                        size={16}
                        className={`mt-0.5 shrink-0 sm:mt-0 ${plan.popular ? 'text-gold-400' : 'text-gold-500'}`}
                      />
                      <span className={plan.popular ? 'text-white/80' : 'text-navy-700/70'}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
                <div className="mt-6 sm:mt-8">
                  <Link to="/contact">
                    <Button variant={plan.popular ? 'primary' : 'secondary'} className="w-full">
                      Get Started
                    </Button>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
