import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Phone, ChevronDown } from 'lucide-react'
import { siteConfig, navLinks } from '../../data/site'
import SiteLogo from '../ui/SiteLogo'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
    setServicesOpen(false)
    setMobileServicesOpen(false)
  }, [location.pathname])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [mobileOpen])

  const navLinkClass = (active: boolean) =>
    `nav-link rounded-lg px-2 py-2 text-xs font-medium lg:px-2.5 lg:text-sm xl:px-3 ${
      active ? 'text-gold-500' : 'text-navy-900'
    }`

  return (
    <header
      className={`fixed top-0 right-0 left-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-cream-50/95 py-2 shadow-md shadow-navy-900/5 backdrop-blur-md'
          : 'bg-cream-50 py-2.5 sm:py-3'
      }`}
    >
      <div className="container-main flex min-w-0 items-center justify-between gap-2 lg:gap-3">
        <Link to="/" className="shrink-0" aria-label="Home">
          <SiteLogo size="header" />
        </Link>

        {/* Desktop / tablet landscape nav — visible from 1024px (lg) */}
        <nav className="hidden min-w-0 flex-1 items-center justify-center gap-0 lg:flex lg:gap-0.5 xl:gap-1">
          {navLinks.map((link) =>
            link.children ? (
              <div
                key={link.label}
                className="relative"
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
              >
                <button
                  type="button"
                  className="nav-link flex items-center gap-1 px-2 py-2 text-xs font-medium text-navy-900 lg:px-2.5 lg:text-sm xl:px-3"
                >
                  {link.label}
                  <ChevronDown
                    size={14}
                    className={`shrink-0 transition-transform duration-300 ${servicesOpen ? 'rotate-180' : ''}`}
                  />
                </button>
                <AnimatePresence>
                  {servicesOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 8 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-0 z-50 max-h-[70vh] w-72 overflow-y-auto rounded-xl border border-cream-200 bg-white p-2 shadow-xl"
                    >
                      {link.children.map((child) => (
                        <Link
                          key={child.path}
                          to={child.path}
                          className="block rounded-lg px-4 py-2.5 text-sm text-navy-900 hover:bg-cream-100 hover:text-gold-500"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ) : (
              <Link
                key={link.label}
                to={link.path}
                className={navLinkClass(location.pathname === link.path)}
              >
                {link.label}
              </Link>
            ),
          )}
        </nav>

        <div className="flex shrink-0 items-center gap-1">
          <a
            href={`tel:${siteConfig.phone}`}
            className="hover-lift hidden items-center gap-1.5 rounded-lg px-2 py-1.5 text-xs font-semibold text-navy-900 lg:flex xl:gap-2 xl:text-sm"
            title={siteConfig.phone}
          >
            <Phone size={16} className="shrink-0" />
            <span className="hidden whitespace-nowrap xl:inline">{siteConfig.phone}</span>
          </a>

          {/* Hamburger — phones & tablets under 1024px */}
          <button
            type="button"
            onClick={() => setMobileOpen(!mobileOpen)}
            className="rounded-lg p-2 text-navy-900 hover:bg-cream-200 lg:hidden"
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 top-14 z-40 bg-navy-900/40 lg:hidden"
              onClick={() => setMobileOpen(false)}
            />
            <motion.nav
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2 }}
              className="absolute top-full right-0 left-0 z-50 max-h-[calc(100dvh-3.5rem)] overflow-y-auto border-t border-cream-200 bg-cream-50 shadow-lg lg:hidden"
            >
              <div className="container-main flex flex-col gap-0.5 py-3">
                {navLinks.map((link) =>
                  link.children ? (
                    <div key={link.label}>
                      <button
                        type="button"
                        onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                        className="flex w-full items-center justify-between rounded-lg px-3 py-3 text-sm font-medium text-navy-900 hover:bg-cream-200"
                      >
                        {link.label}
                        <ChevronDown
                          size={16}
                          className={`shrink-0 transition-transform ${mobileServicesOpen ? 'rotate-180' : ''}`}
                        />
                      </button>
                      {mobileServicesOpen && (
                        <div className="mb-1 ml-2 flex flex-col gap-0.5 border-l-2 border-gold-400/30 pl-3">
                          {link.children.map((child) => (
                            <Link
                              key={child.path}
                              to={child.path}
                              className="rounded-lg px-3 py-2.5 text-sm text-navy-700/80 hover:bg-cream-200 hover:text-gold-500"
                            >
                              {child.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      key={link.label}
                      to={link.path}
                      className={`rounded-lg px-3 py-3 text-sm font-medium ${
                        location.pathname === link.path
                          ? 'bg-cream-200 text-gold-500'
                          : 'text-navy-900 hover:bg-cream-200'
                      }`}
                    >
                      {link.label}
                    </Link>
                  ),
                )}
                <a
                  href={`tel:${siteConfig.phone}`}
                  className="mt-1 flex items-center gap-2 rounded-lg px-3 py-3 text-sm font-semibold text-gold-500 hover:bg-cream-200"
                >
                  <Phone size={16} className="shrink-0" />
                  {siteConfig.phone}
                </a>
              </div>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </header>
  )
}
