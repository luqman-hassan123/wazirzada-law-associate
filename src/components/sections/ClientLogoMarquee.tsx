import { useState } from 'react'
import { clientsWithUniqueLogos, clientLogo } from '../../data/clients'

function MarqueeLogo({ name, slug }: { name: string; slug: string }) {
  const [failed, setFailed] = useState(false)
  const initials = name
    .split(/[\s|(]+/)
    .filter((w) => w.length > 1 && w[0] === w[0]?.toUpperCase())
    .slice(0, 2)
    .map((w) => w[0])
    .join('')
    .toUpperCase()

  return (
    <div
      className="client-marquee-item flex h-20 w-36 shrink-0 items-center justify-center rounded-xl border border-cream-200 bg-white px-4 py-3 sm:h-24 sm:w-44"
      title={name}
    >
      {failed ? (
        <span className="text-center text-xs font-bold text-navy-900/70">
          {initials || name.slice(0, 2).toUpperCase()}
        </span>
      ) : (
        <img
          src={clientLogo(slug)}
          alt={name}
          className="max-h-14 max-w-full object-contain sm:max-h-16"
          loading="lazy"
          onError={() => setFailed(true)}
        />
      )}
    </div>
  )
}

export default function ClientLogoMarquee() {
  const items = [...clientsWithUniqueLogos, ...clientsWithUniqueLogos]

  if (clientsWithUniqueLogos.length === 0) return null

  return (
    <div className="client-marquee relative mb-10 overflow-hidden sm:mb-12">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 bg-gradient-to-r from-white to-transparent sm:w-20" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 bg-gradient-to-l from-white to-transparent sm:w-20" />

      <div className="client-marquee-track flex w-max gap-4 sm:gap-6">
        {items.map((client, i) => (
          <MarqueeLogo key={`${client.slug}-${i}`} name={client.name} slug={client.slug} />
        ))}
      </div>
    </div>
  )
}
