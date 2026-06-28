import { siteConfig } from '../data/site'

export interface ContactFormPayload {
  name: string
  email: string
  phone?: string
  service: string
  description?: string
}

/**
 * Sends consultation requests via Web3Forms (https://web3forms.com).
 * Set VITE_WEB3FORMS_ACCESS_KEY in .env — get a free key at web3forms.com (one-time email verify).
 * Emails arrive in your inbox with a clean subject line, not FormSubmit branding.
 */
export async function submitContactForm(data: ContactFormPayload): Promise<void> {
  const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY

  if (!accessKey) {
    throw new Error(
      `Contact form is not configured. Please email us directly at ${siteConfig.emails[1]}.`,
    )
  }

  const response = await fetch('https://api.web3forms.com/submit', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify({
      access_key: accessKey,
      subject: `New Legal Consultation — ${data.service}`,
      from_name: `${siteConfig.name} Website`,
      name: data.name,
      email: data.email,
      phone: data.phone?.trim() || 'Not provided',
      service: data.service,
      message: data.description?.trim() || 'Not provided',
      botcheck: '',
      autoresponse: `Dear ${data.name},

Thank you for contacting ${siteConfig.name}.

We have received your consultation request regarding "${data.service}" and a member of our team will review your message and respond as soon as possible, typically within one to two business days.

If your matter is urgent, please call us at ${siteConfig.phone} or ${siteConfig.phoneLandline}.

Kind regards,
${siteConfig.name}
${siteConfig.emails[1]}`,
    }),
  })

  let result: { success?: boolean; message?: string } = {}
  try {
    result = await response.json()
  } catch {
    throw new Error('Unable to send your message. Please try again or email us directly.')
  }

  if (!response.ok || !result.success) {
    throw new Error(
      result.message ?? 'Unable to send your message. Please try again or email us directly.',
    )
  }
}
