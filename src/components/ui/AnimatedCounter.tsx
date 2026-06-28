import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'

interface AnimatedCounterProps {
  value: number
  suffix?: string
  label: string
  light?: boolean
}

export default function AnimatedCounter({
  value,
  suffix = '',
  label,
  light = false,
}: AnimatedCounterProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!isInView) return

    let start = 0
    const duration = 2000
    const startTime = performance.now()

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime
      const progress = Math.min(elapsed / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      start = Math.floor(eased * value)
      setCount(start)
      if (progress < 1) requestAnimationFrame(animate)
    }

    requestAnimationFrame(animate)
  }, [isInView, value])

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="text-center"
    >
      <div
        className={`text-3xl font-bold sm:text-4xl md:text-5xl ${
          light ? 'text-gold-400' : 'text-navy-900'
        }`}
      >
        {count}
        {suffix}
      </div>
      <p
        className={`mt-1.5 text-[10px] font-medium uppercase tracking-wide sm:mt-2 sm:text-xs sm:tracking-wider ${
          light ? 'text-white/60' : 'text-navy-700/60'
        }`}
      >
        {label}
      </p>
    </motion.div>
  )
}
