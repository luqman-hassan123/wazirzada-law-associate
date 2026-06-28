import { useState } from 'react'
import { motion } from 'framer-motion'
import { siteConfig } from '../../data/site'

type SiteLogoSize = 'header' | 'footer'

const sizeClasses: Record<SiteLogoSize, string> = {
  header: 'h-9 w-auto xs:h-10 sm:h-11 md:h-12',
  footer: 'h-10 w-auto sm:h-11',
}

/** Corner roundness — change here: rounded-none | rounded-sm | rounded-md | rounded-lg | rounded-full */
const cornerClasses = 'rounded-lg'

interface SiteLogoProps {
  size?: SiteLogoSize
  className?: string
}

export default function SiteLogo({ size = 'header', className = '' }: SiteLogoProps) {
  const [failed, setFailed] = useState(false)

  if (failed) {
    return (
      <span
        className={`flex shrink-0 items-center justify-center text-xs font-bold text-gold-400 ${sizeClasses[size]} ${className}`}
      >
        WLA
      </span>
    )
  }

  return (
    <motion.img
      src={siteConfig.logo}
      alt={siteConfig.name}
      className={`block shrink-0 object-contain ${cornerClasses} ${sizeClasses[size]} ${className}`}
      whileHover={{ scale: 1.02 }}
      transition={{ type: 'spring', stiffness: 400, damping: 20 }}
      onError={() => setFailed(true)}
    />
  )
}
