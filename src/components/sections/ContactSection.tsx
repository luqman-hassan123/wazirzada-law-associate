import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { motion } from 'framer-motion'
import { Send, CheckCircle, AlertCircle } from 'lucide-react'
import SectionHeading from '../ui/SectionHeading'
import Button from '../ui/Button'
import { contactServiceOptions, siteConfig } from '../../data/site'
import { submitContactForm } from '../../lib/submitContactForm'

const schema = z.object({
  name: z.string().min(2, 'Name is required'),
  email: z.string().email('Valid email required'),
  phone: z.string().optional(),
  service: z.string().min(1, 'Please select a service'),
  description: z.string().optional(),
})

type FormData = z.infer<typeof schema>

export default function ContactSection() {
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: { service: contactServiceOptions[0] },
  })

  const onSubmit = async (data: FormData) => {
    setSubmitStatus('idle')
    setErrorMessage('')

    try {
      await submitContactForm(data)
      reset({ service: contactServiceOptions[0] })
      setSubmitStatus('success')
    } catch (error) {
      setSubmitStatus('error')
      setErrorMessage(
        error instanceof Error ? error.message : 'Something went wrong. Please try again.',
      )
    }
  }

  return (
    <section className="bg-cream-100 section-padding">
      <div className="container-main">
        <SectionHeading
          subtitle="Get In Touch"
          title="Schedule a Legal Consultation"
          description="Provide your information to discuss your legal requirements with our attorneys."
        />

        {import.meta.env.DEV && (
          <p className="mx-auto mb-6 max-w-2xl rounded-lg border border-gold-400/30 bg-gold-400/10 px-4 py-2 text-center text-xs text-navy-800">
            {import.meta.env.VITE_WEB3FORMS_ACCESS_KEY
              ? 'Test mode: form is connected to Web3Forms. Submissions go to the inbox linked to your access key.'
              : `Add VITE_WEB3FORMS_ACCESS_KEY to .env — or email ${siteConfig.emails[1]} directly.`}
          </p>
        )}

        <motion.form
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          onSubmit={handleSubmit(onSubmit)}
          className="mx-auto max-w-2xl rounded-2xl border border-cream-200 bg-white p-4 shadow-lg sm:p-6 md:p-10"
        >
          {submitStatus === 'success' && (
            <div className="mb-6 flex items-start gap-3 rounded-lg border border-green-200 bg-green-50 p-4 text-sm text-green-800">
              <CheckCircle size={20} className="mt-0.5 shrink-0" />
              <p>
                Thank you! Your message has been sent to our team. We will contact you shortly.
              </p>
            </div>
          )}

          {submitStatus === 'error' && (
            <div className="mb-6 flex items-start gap-3 rounded-lg border border-red-200 bg-red-50 p-4 text-sm text-red-800">
              <AlertCircle size={20} className="mt-0.5 shrink-0" />
              <p>{errorMessage}</p>
            </div>
          )}

          <div className="grid gap-4 sm:gap-6 md:grid-cols-2">
            <div>
              <label className="mb-2 block text-sm font-medium text-navy-900">
                Full Name *
              </label>
              <input
                {...register('name')}
                className="w-full rounded-lg border border-cream-200 bg-cream-50 px-4 py-3 text-sm transition-colors focus:border-gold-400 focus:outline-none"
                placeholder="Your full name"
              />
              {errors.name && (
                <p className="mt-1 text-xs text-red-500">{errors.name.message}</p>
              )}
            </div>
            <div>
              <label className="mb-2 block text-sm font-medium text-navy-900">Email *</label>
              <input
                {...register('email')}
                type="email"
                className="w-full rounded-lg border border-cream-200 bg-cream-50 px-4 py-3 text-sm transition-colors focus:border-gold-400 focus:outline-none"
                placeholder="your@email.com"
              />
              {errors.email && (
                <p className="mt-1 text-xs text-red-500">{errors.email.message}</p>
              )}
            </div>
            <div>
              <label className="mb-2 block text-sm font-medium text-navy-900">Phone</label>
              <input
                {...register('phone')}
                className="w-full rounded-lg border border-cream-200 bg-cream-50 px-4 py-3 text-sm transition-colors focus:border-gold-400 focus:outline-none"
                placeholder="+92 300 0000000"
              />
            </div>
            <div>
              <label className="mb-2 block text-sm font-medium text-navy-900">
                Service Required *
              </label>
              <select
                {...register('service')}
                className="w-full rounded-lg border border-cream-200 bg-cream-50 px-4 py-3 text-sm transition-colors focus:border-gold-400 focus:outline-none"
              >
                {contactServiceOptions.map((title) => (
                  <option key={title} value={title}>
                    {title}
                  </option>
                ))}
              </select>
              {errors.service && (
                <p className="mt-1 text-xs text-red-500">{errors.service.message}</p>
              )}
            </div>
          </div>
          <div className="mt-6">
            <label className="mb-2 block text-sm font-medium text-navy-900">
              Description <span className="font-normal text-navy-700/50">(optional)</span>
            </label>
            <textarea
              {...register('description')}
              rows={4}
              className="w-full resize-none rounded-lg border border-cream-200 bg-cream-50 px-4 py-3 text-sm transition-colors focus:border-gold-400 focus:outline-none"
              placeholder="Describe your legal requirements..."
            />
            {errors.description && (
              <p className="mt-1 text-xs text-red-500">{errors.description.message}</p>
            )}
          </div>
          <div className="mt-8">
            <Button type="submit" className="w-full md:w-auto" disabled={isSubmitting}>
              <Send size={16} />
              {isSubmitting ? 'Sending...' : 'Submit'}
            </Button>
          </div>
        </motion.form>
      </div>
    </section>
  )
}
