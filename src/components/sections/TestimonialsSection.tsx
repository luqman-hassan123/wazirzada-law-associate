import SectionHeading from '../ui/SectionHeading'
import TestimonialCarousel from '../ui/TestimonialCarousel'

export default function TestimonialsSection() {
  return (
    <section className="section-padding">
      <div className="container-main">
        <SectionHeading subtitle="Testimonials" title="What Clients Say About Us" />
        <TestimonialCarousel />
      </div>
    </section>
  )
}
