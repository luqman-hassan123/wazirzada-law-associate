import { motion, type HTMLMotionProps } from 'framer-motion'
import { forwardRef } from 'react'

type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost'

interface ButtonProps extends HTMLMotionProps<'button'> {
  variant?: ButtonVariant
  asLink?: boolean
}

const variants: Record<ButtonVariant, string> = {
  primary:
    'bg-gold-400 text-navy-950 hover:bg-gold-300 shadow-lg shadow-gold-400/20 hover:shadow-xl hover:shadow-gold-400/35',
  secondary:
    'bg-navy-900 text-white hover:bg-navy-800 shadow-lg shadow-navy-900/20',
  outline:
    'border-2 border-gold-400 text-gold-400 hover:bg-gold-400 hover:text-navy-950',
  ghost: 'text-navy-900 hover:bg-cream-200',
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = 'primary', className = '', children, ...props }, ref) => (
    <motion.button
      ref={ref}
      whileHover={{ scale: 1.03, y: -2 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: 'spring', stiffness: 400, damping: 17 }}
      className={`inline-flex items-center justify-center gap-2 rounded-lg px-5 py-3 text-sm font-semibold tracking-wide transition-colors duration-300 sm:px-6 ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </motion.button>
  ),
)

Button.displayName = 'Button'
export default Button
