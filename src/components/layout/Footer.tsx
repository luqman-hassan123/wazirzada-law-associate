import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin } from 'lucide-react'
import { siteConfig } from '../../data/site'
import SiteLogo from '../ui/SiteLogo'

export default function Footer() {
  return (
    <footer className="bg-navy-900 text-white">
      <div className="container-main py-12 sm:py-16">
        <div className="grid gap-10 sm:grid-cols-2 sm:gap-12 lg:grid-cols-3">
          <div>
            <div className="mb-4">
              <SiteLogo size="footer" />
            </div>
            <p className="text-sm leading-relaxed text-white/60">
              Experienced, skilled, knowledgeable, adept, compassionate.
            </p>
            <div className="mt-6">
              <h4 className="mb-3 text-sm font-semibold uppercase tracking-wider text-gold-400">
                Subscribe Our Newsletter
              </h4>
              <form onSubmit={(e) => e.preventDefault()} className="flex flex-col gap-2 sm:flex-row">
                <input
                  type="email"
                  placeholder="Enter your email"
                  required
                  className="min-w-0 flex-1 rounded-lg border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-white placeholder:text-white/40 focus:border-gold-400 focus:outline-none"
                />
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  type="submit"
                  className="w-full shrink-0 rounded-lg bg-gold-400 px-4 py-2.5 text-sm font-semibold text-navy-900 sm:w-auto"
                >
                  Subscribe
                </motion.button>
              </form>
            </div>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-gold-400">
              Useful Links
            </h4>
            <ul className="space-y-2">
              {['Terms & Conditions', 'Privacy Policy', 'Disclaimer', 'FAQ'].map((item) => (
                <li key={item}>
                  <Link
                    to="/contact"
                    className="text-sm text-white/60 transition-colors hover:text-gold-400"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-gold-400">
              Contact Us
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Mail size={16} className="mt-0.5 shrink-0 text-gold-400" />
                <div className="min-w-0">
                  <p className="text-xs text-white/40">Email</p>
                  <div className="space-y-1">
                    {siteConfig.emails.map((email) => (
                      <a
                        key={email}
                        href={`mailto:${email}`}
                        className="block break-all text-sm text-white/70 hover:text-gold-400"
                      >
                        {email}
                      </a>
                    ))}
                  </div>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Phone size={16} className="mt-0.5 shrink-0 text-gold-400" />
                <div>
                  <p className="text-xs text-white/40">Phone</p>
                  <p className="text-sm break-words text-white/70">{siteConfig.phoneLandline}</p>
                  <p className="text-sm break-words text-white/70">{siteConfig.phone}</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={16} className="mt-0.5 shrink-0 text-gold-400" />
                <div className="min-w-0">
                  <p className="text-xs text-white/40">Location</p>
                  <p className="text-sm break-words text-white/70">{siteConfig.address}</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-white/10 pt-6 text-center sm:mt-12 sm:pt-8">
          <p className="px-2 text-xs text-white/40 sm:text-sm">
            Designed & Developed with excellence · Copyright © {new Date().getFullYear()}. All
            rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
