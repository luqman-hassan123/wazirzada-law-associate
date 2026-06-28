import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Briefcase, MapPin } from 'lucide-react'
import type { Lawyer } from '../../data/lawyers'
import { getLawyerInitials } from '../../data/lawyers'

interface LawyerCardProps {
  lawyer: Lawyer
  index: number
  featured?: boolean
}

export default function LawyerCard({ lawyer, index, featured = false }: LawyerCardProps) {
  const [showBio, setShowBio] = useState(false)
  const excerpt = lawyer.bio.split('\n\n')[0]
  const initials = getLawyerInitials(lawyer.name)
  const showDiKhanBranch = lawyer.branch === 'D.I. Khan'

  const photoMaxHeight = featured
    ? 'max-h-[min(25rem,75vw)] sm:max-h-64 md:max-h-72 lg:max-h-80 xl:max-h-[25rem]'
    : 'max-h-[min(22rem,70vw)] sm:max-h-56 md:max-h-60 lg:max-h-64 xl:max-h-72'

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.45, delay: Math.min(index * 0.05, 0.3) }}
        className="group h-full min-w-0"
      >
        <div className="hover-card flex h-full flex-col overflow-hidden rounded-xl bg-white shadow-sm sm:rounded-2xl">
          <div className="relative flex w-full shrink-0 items-center justify-center bg-cream-100 px-2 pt-2 sm:px-3 sm:pt-3">
            {lawyer.image ? (
              <img
                src={lawyer.image}
                alt={lawyer.name}
                className={`block h-auto w-full object-contain object-center ${photoMaxHeight}`}
                loading="lazy"
              />
            ) : (
              <div className="flex h-48 w-full items-center justify-center bg-gradient-to-br from-navy-900 to-navy-800 sm:h-52">
                <span className="text-2xl font-bold text-gold-400 sm:text-3xl">{initials}</span>
              </div>
            )}
          </div>

          <div className="flex min-w-0 flex-1 flex-col p-3.5 sm:p-4 md:p-5">
            <h3 className="text-sm font-semibold leading-snug text-navy-900 sm:text-base md:text-lg">
              {lawyer.name}
            </h3>
            <p className="mt-1 line-clamp-2 text-xs leading-relaxed text-gold-500 sm:text-sm">
              {lawyer.credentials}
            </p>
            <p className="mt-1 flex items-start gap-1.5 text-xs text-navy-700/60 sm:text-sm">
              <Briefcase size={14} className="mt-0.5 shrink-0" />
              <span className="min-w-0 break-words">{lawyer.title}</span>
            </p>
            {showDiKhanBranch && (
              <p className="mt-1 flex items-center gap-1 text-xs text-gold-500 sm:text-sm">
                <MapPin size={12} className="shrink-0" />
                D.I. Khan Branch
              </p>
            )}
            <p className="mt-2 line-clamp-3 text-xs leading-relaxed text-navy-700/60 sm:mt-3 sm:text-sm">
              {excerpt}
            </p>
            <button
              type="button"
              onClick={() => setShowBio(true)}
              className="mt-auto pt-3 text-left text-xs font-semibold text-navy-900 transition-colors hover:text-gold-500 sm:pt-4 sm:text-sm"
            >
              Read Full Profile →
            </button>
          </div>
        </div>
      </motion.div>

      <AnimatePresence>
        {showBio && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] flex items-end justify-center bg-navy-900/70 backdrop-blur-sm sm:items-center sm:p-4"
            onClick={() => setShowBio(false)}
          >
            <motion.div
              initial={{ y: 40, opacity: 0 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ y: 40, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="max-h-[90dvh] w-full max-w-2xl overflow-y-auto rounded-t-2xl bg-white sm:max-h-[85vh] sm:rounded-2xl"
            >
              <div className="sticky top-0 z-10 flex items-start justify-between gap-3 border-b border-cream-200 bg-white p-4 sm:p-6">
                <div className="min-w-0 flex-1">
                  <h3 className="text-base font-semibold text-navy-900 sm:text-lg">{lawyer.name}</h3>
                  <p className="mt-1 text-xs text-gold-500 sm:text-sm">{lawyer.credentials}</p>
                  <p className="mt-1 text-xs text-navy-700/60 sm:text-sm">{lawyer.title}</p>
                </div>
                <button
                  type="button"
                  onClick={() => setShowBio(false)}
                  className="shrink-0 rounded-full p-2 text-navy-700/60 hover:bg-cream-100"
                  aria-label="Close profile"
                >
                  <X size={20} />
                </button>
              </div>
              <div className="space-y-4 p-4 sm:p-6">
                {lawyer.bio.split('\n\n').map((paragraph, i) => (
                  <p key={i} className="text-sm leading-relaxed text-navy-700/80 sm:text-base">
                    {paragraph}
                  </p>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
