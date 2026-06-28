import Hero from '../components/sections/Hero'
import ClientsSection from '../components/sections/ClientsSection'
import AboutSection from '../components/sections/AboutSection'
import BranchesSection from '../components/sections/BranchesSection'
import ServicesSection from '../components/sections/ServicesSection'
import TeamSection from '../components/sections/TeamSection'
import BlogSection from '../components/sections/BlogSection'
import CtaBanner from '../components/sections/CtaBanner'
import TestimonialsSection from '../components/sections/TestimonialsSection'
import ContactSection from '../components/sections/ContactSection'

export default function Home() {
  return (
    <>
      <Hero />
      <ClientsSection />
      <AboutSection />
      <BranchesSection />
      <ServicesSection />
      <TeamSection />
      <BlogSection />
      <CtaBanner />
      <TestimonialsSection />
      <ContactSection />
    </>
  )
}
