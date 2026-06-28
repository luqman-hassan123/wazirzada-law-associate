import { Link } from 'react-router-dom'
import SectionHeading from '../ui/SectionHeading'
import LawyerCard from '../ui/LawyerCard'
import Button from '../ui/Button'
import { featuredLawyers } from '../../data/lawyers'

export default function TeamSection() {
  return (
    <section className="section-padding">
      <div className="container-main">
        <SectionHeading subtitle="Our Team" title="Our Experienced Lawyers" />
        <div className="grid min-w-0 grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
          {featuredLawyers.map((lawyer, i) => (
            <LawyerCard key={lawyer.id} lawyer={lawyer} index={i} featured />
          ))}
        </div>
        <div className="mt-10 text-center sm:mt-12">
          <Link to="/about" className="inline-block w-full sm:w-auto">
            <Button variant="outline" className="w-full sm:w-auto">View All Lawyers</Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
