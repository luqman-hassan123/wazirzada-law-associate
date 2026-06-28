import { Link } from 'react-router-dom'
import SectionHeading from '../ui/SectionHeading'
import ServiceCard from '../ui/ServiceCard'
import Button from '../ui/Button'
import { services } from '../../data/services'

export default function ServicesSection() {
  return (
    <section className="bg-cream-100 section-padding">
      <div className="container-main">
        <SectionHeading
          subtitle="Our Expertise"
          title="Comprehensive Range of Legal Expertise"
          description="Strategic legal solutions across diverse industries and practice areas."
        />
        <div className="grid min-w-0 grid-cols-1 gap-4 xs:gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
          {services.map((service, i) => (
            <ServiceCard key={service.id} service={service} index={i} />
          ))}
        </div>
        <div className="mt-10 text-center sm:mt-12">
          <Link to="/services" className="inline-block w-full sm:w-auto">
            <Button variant="outline" className="w-full sm:w-auto">View All Services</Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
