import { Link } from 'react-router-dom'
import { Mail, Phone, MapPin } from 'lucide-react'
import { navLinks, siteConfig } from '../../data/site'
import SiteLogo from '../ui/SiteLogo'

const usefulLinks = [
  { label: 'Terms & Conditions', path: '/contact' },
  { label: 'Privacy Policy', path: '/contact' },
  { label: 'Disclaimer', path: '/contact' },
  { label: 'FAQ', path: '/contact' },
]

export default function Footer() {
  return (
    <footer className="bg-navy-900 text-white">
      <div className="container-main py-12 sm:py-16">
        <div className="grid gap-10 sm:grid-cols-2 sm:gap-12 lg:grid-cols-4">
          <div>
            <Link to="/" className="mb-4 inline-flex items-center gap-3">
              <SiteLogo size="footer" />
              <span className="text-xl font-semibold tracking-wide text-gold-400">WLA</span>
            </Link>
            <p className="mt-2 text-sm font-medium text-white/80">{siteConfig.name}</p>
            <p className="mt-2 text-sm leading-relaxed text-white/60">
              Experienced, skilled, knowledgeable, adept, compassionate.
            </p>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-gold-400">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {navLinks.map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className="text-sm text-white/60 transition-colors hover:text-gold-400"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-gold-400">
              Useful Links
            </h4>
            <ul className="space-y-2">
              {usefulLinks.map((item) => (
                <li key={item.label}>
                  <Link
                    to={item.path}
                    className="text-sm text-white/60 transition-colors hover:text-gold-400"
                  >
                    {item.label}
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
