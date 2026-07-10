import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react'
import { testimonials } from '../../data/testimonials'

export default function TestimonialCarousel() {
  const [current, setCurrent] = useState(0)
  const [direction, setDirection] = useState(1)

  const next = useCallback(() => {
    setDirection(1)
    setCurrent((prev) => (prev + 1) % testimonials.length)
  }, [])

  const prev = () => {
    setDirection(-1)
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  useEffect(() => {
    const timer = setInterval(next, 6000)
    return () => clearInterval(timer)
  }, [next])

  const testimonial = testimonials[current]

  return (
    <div className="relative mx-auto max-w-4xl px-1 sm:px-0">
      <AnimatePresence mode="wait" custom={direction}>
        <motion.div
          key={current}
          custom={direction}
          initial={{ opacity: 0, x: direction * 40 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: direction * -40 }}
          transition={{ duration: 0.5 }}
          className="rounded-2xl border border-cream-200 bg-white p-5 shadow-lg sm:p-8 md:p-12"
        >
          <Quote className="mb-4 text-gold-400 sm:mb-6" size={32} strokeWidth={1} />
          <p className="text-base leading-relaxed text-navy-700/80 sm:text-lg md:text-xl">
            &ldquo;{testimonial.quote}&rdquo;
          </p>
          <div className="mt-6 flex items-center gap-3 sm:mt-8 sm:gap-4">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-navy-900 text-xs font-bold text-gold-400 sm:h-12 sm:w-12 sm:text-sm">
              {testimonial.name
                .split(' ')
                .map((n) => n[0])
                .join('')}
            </div>
            <div className="min-w-0">
              <p className="truncate font-semibold text-navy-900">{testimonial.name}</p>
              {(testimonial.role || testimonial.company) && (
                <p className="truncate text-xs text-navy-700/60 sm:text-sm">
                  {[testimonial.role, testimonial.company].filter(Boolean).join(', ')}
                </p>
              )}
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      <div className="mt-6 flex items-center justify-center gap-3 px-2 sm:mt-8 sm:gap-4">
        <button
          onClick={prev}
          className="rounded-full border border-cream-200 p-2 text-navy-900 transition-all hover:border-gold-400 hover:bg-gold-400/10"
          aria-label="Previous testimonial"
        >
          <ChevronLeft size={20} />
        </button>
        <div className="flex gap-2">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => {
                setDirection(i > current ? 1 : -1)
                setCurrent(i)
              }}
              className={`h-2 rounded-full transition-all duration-300 ${
                i === current ? 'w-8 bg-gold-400' : 'w-2 bg-cream-200 hover:bg-gold-300'
              }`}
              aria-label={`Go to testimonial ${i + 1}`}
            />
          ))}
        </div>
        <button
          onClick={next}
          className="rounded-full border border-cream-200 p-2 text-navy-900 transition-all hover:border-gold-400 hover:bg-gold-400/10"
          aria-label="Next testimonial"
        >
          <ChevronRight size={20} />
        </button>
      </div>
    </div>
  )
}
