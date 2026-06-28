import PageHero from '../components/ui/PageHero'
import ServiceCard from '../components/ui/ServiceCard'
import SectionHeading from '../components/ui/SectionHeading'
import { services } from '../data/services'

export default function Services() {
  return (
    <>
      <PageHero
        subtitle="Our Services"
        title="Comprehensive Legal Expertise"
        description="Strategic legal solutions tailored to your business, financial, and personal objectives."
      />

      <section className="section-padding">
        <div className="container-main">
          <SectionHeading
            title="Practice Areas"
            description="We provide end-to-end legal advisory across nine specialized practice areas."
          />
          <div className="grid gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
            {services.map((service, i) => (
              <ServiceCard key={service.id} service={service} index={i} />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
