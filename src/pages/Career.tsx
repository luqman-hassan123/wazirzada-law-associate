import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Briefcase, MapPin, Clock, ChevronDown, Send } from 'lucide-react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import PageHero from '../components/ui/PageHero'
import SectionHeading from '../components/ui/SectionHeading'
import Button from '../components/ui/Button'
import { openPositions, careerBenefits } from '../data/careers'

const applySchema = z.object({
  name: z.string().min(2, 'Name is required'),
  email: z.string().email('Valid email required'),
  phone: z.string().min(10, 'Phone is required'),
  position: z.string().min(1, 'Select a position'),
  coverLetter: z.string().min(20, 'Please write a brief cover letter'),
})

type ApplyForm = z.infer<typeof applySchema>

export default function Career() {
  const [expandedId, setExpandedId] = useState<string | null>(null)
  const [showForm, setShowForm] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ApplyForm>({
    resolver: zodResolver(applySchema),
  })

  const onSubmit = async (_data: ApplyForm) => {
    await new Promise((r) => setTimeout(r, 1000))
    reset()
    setShowForm(false)
    alert('Application submitted! We will review and get back to you.')
  }

  return (
    <>
      <PageHero
        subtitle="Careers"
        title="Join Our Team"
        description="Build your legal career with one of Pakistan's premier corporate law firms."
      />

      <section className="section-padding">
        <div className="container-main">
          <SectionHeading
            subtitle="Why Join Us"
            title="Grow With Wazirzada Law"
            description="We invest in our people because exceptional legal talent drives exceptional client outcomes."
          />
          <div className="grid gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4">
            {careerBenefits.map((benefit, i) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -8, rotateX: 5 }}
                className="perspective-1000 rounded-2xl border border-cream-200 bg-white p-5 shadow-sm transition-shadow hover:shadow-xl sm:p-6"
              >
                <h3 className="mb-2 text-lg font-semibold text-navy-900">{benefit.title}</h3>
                <p className="text-sm leading-relaxed text-navy-700/60">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-cream-100 section-padding">
        <div className="container-main">
          <SectionHeading
            subtitle="Open Positions"
            title="Current Opportunities"
            description="Explore our open roles and find where you fit."
          />

          <div className="mx-auto max-w-3xl space-y-4">
            {openPositions.map((position, i) => (
              <motion.div
                key={position.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="overflow-hidden rounded-2xl border border-cream-200 bg-white shadow-sm transition-shadow hover:shadow-lg"
              >
                <button
                  onClick={() =>
                    setExpandedId(expandedId === position.id ? null : position.id)
                  }
                  className="flex w-full items-start justify-between gap-3 p-4 text-left sm:items-center sm:gap-4 sm:p-6"
                >
                  <div className="min-w-0 flex-1">
                    <h3 className="text-base font-semibold text-navy-900 sm:text-lg">{position.title}</h3>
                    <div className="mt-2 flex flex-col gap-2 text-xs text-navy-700/50 xs:flex-row xs:flex-wrap xs:gap-4 sm:text-sm">
                      <span className="flex items-center gap-1">
                        <Briefcase size={14} />
                        {position.department}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin size={14} />
                        {position.location}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock size={14} />
                        {position.type}
                      </span>
                    </div>
                  </div>
                  <motion.div
                    animate={{ rotate: expandedId === position.id ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="mt-1 shrink-0 sm:mt-0"
                  >
                    <ChevronDown size={20} className="text-navy-700/40" />
                  </motion.div>
                </button>

                <AnimatePresence>
                  {expandedId === position.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="border-t border-cream-200 px-4 pt-4 pb-5 sm:px-6 sm:pb-6">
                        <p className="mb-4 text-sm leading-relaxed text-navy-700/70">
                          {position.description}
                        </p>
                        <h4 className="mb-2 text-sm font-semibold text-navy-900">
                          Requirements:
                        </h4>
                        <ul className="mb-6 space-y-1">
                          {position.requirements.map((req) => (
                            <li
                              key={req}
                              className="flex items-start gap-2 text-sm text-navy-700/60"
                            >
                              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold-400" />
                              {req}
                            </li>
                          ))}
                        </ul>
                        <Button
                          onClick={() => {
                            setShowForm(true)
                            setExpandedId(null)
                          }}
                        >
                          Apply Now
                        </Button>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <AnimatePresence>
        {showForm && (
          <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-end justify-center bg-navy-900/60 p-0 backdrop-blur-sm sm:items-center sm:p-4"
            onClick={() => setShowForm(false)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="max-h-[92dvh] w-full max-w-lg overflow-y-auto rounded-t-2xl bg-white p-5 shadow-2xl sm:max-h-[90vh] sm:rounded-2xl sm:p-8"
            >
              <h3 className="mb-5 text-xl font-semibold text-navy-900 sm:mb-6 sm:text-2xl">Apply for a Position</h3>
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <div>
                  <label className="mb-1 block text-sm font-medium">Full Name *</label>
                  <input
                    {...register('name')}
                    className="w-full rounded-lg border border-cream-200 bg-cream-50 px-4 py-3 text-sm focus:border-gold-400 focus:outline-none"
                  />
                  {errors.name && (
                    <p className="mt-1 text-xs text-red-500">{errors.name.message}</p>
                  )}
                </div>
                <div>
                  <label className="mb-1 block text-sm font-medium">Email *</label>
                  <input
                    {...register('email')}
                    type="email"
                    className="w-full rounded-lg border border-cream-200 bg-cream-50 px-4 py-3 text-sm focus:border-gold-400 focus:outline-none"
                  />
                  {errors.email && (
                    <p className="mt-1 text-xs text-red-500">{errors.email.message}</p>
                  )}
                </div>
                <div>
                  <label className="mb-1 block text-sm font-medium">Phone *</label>
                  <input
                    {...register('phone')}
                    className="w-full rounded-lg border border-cream-200 bg-cream-50 px-4 py-3 text-sm focus:border-gold-400 focus:outline-none"
                  />
                  {errors.phone && (
                    <p className="mt-1 text-xs text-red-500">{errors.phone.message}</p>
                  )}
                </div>
                <div>
                  <label className="mb-1 block text-sm font-medium">Position *</label>
                  <select
                    {...register('position')}
                    className="w-full rounded-lg border border-cream-200 bg-cream-50 px-4 py-3 text-sm focus:border-gold-400 focus:outline-none"
                  >
                    <option value="">Select a position</option>
                    {openPositions.map((p) => (
                      <option key={p.id} value={p.title}>
                        {p.title}
                      </option>
                    ))}
                  </select>
                  {errors.position && (
                    <p className="mt-1 text-xs text-red-500">{errors.position.message}</p>
                  )}
                </div>
                <div>
                  <label className="mb-1 block text-sm font-medium">Cover Letter *</label>
                  <textarea
                    {...register('coverLetter')}
                    rows={4}
                    className="w-full resize-none rounded-lg border border-cream-200 bg-cream-50 px-4 py-3 text-sm focus:border-gold-400 focus:outline-none"
                    placeholder="Tell us why you'd be a great fit..."
                  />
                  {errors.coverLetter && (
                    <p className="mt-1 text-xs text-red-500">{errors.coverLetter.message}</p>
                  )}
                </div>
                <div className="flex flex-col-reverse gap-3 pt-2 sm:flex-row sm:items-center">
                  <Button type="submit" disabled={isSubmitting} className="w-full sm:w-auto">
                    <Send size={16} />
                    {isSubmitting ? 'Submitting...' : 'Submit Application'}
                  </Button>
                  <Button
                    type="button"
                    variant="ghost"
                    onClick={() => setShowForm(false)}
                    className="w-full sm:w-auto"
                  >
                    Cancel
                  </Button>
                </div>
              </form>
            </motion.div>
          </motion.section>
        )}
      </AnimatePresence>
    </>
  )
}
