import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, Calendar } from 'lucide-react'
import SectionHeading from '../ui/SectionHeading'

const posts = [
  {
    id: '1',
    title: 'Understanding Corporate Governance in Pakistan',
    category: 'Corporate Law',
    date: 'March 15, 2026',
    excerpt:
      'A comprehensive guide to corporate governance frameworks and compliance requirements for businesses operating in Pakistan.',
    image: '/images/blog/corporate-governance.jpeg',
  },
  {
    id: '2',
    title: 'Key Changes in Petroleum Regulatory Framework',
    category: 'Oil & Gas',
    date: 'February 28, 2026',
    excerpt:
      'An overview of recent regulatory updates affecting oil and gas concessions and production sharing agreements.',
    image: '/images/blog/petroleum-regulatory-framework.jpeg',
  },
  {
    id: '3',
    title: 'Arbitration as an Effective Dispute Resolution Tool',
    category: 'ADR',
    date: 'January 10, 2026',
    excerpt:
      'Why more businesses are choosing arbitration over traditional litigation for commercial disputes.',
    image: '/images/blog/arbitration-dispute-resolution.jpeg',
  },
]

export default function BlogSection() {
  return (
    <section className="bg-cream-100 section-padding">
      <div className="container-main">
        <SectionHeading subtitle="Insights" title="Latest News & Updates" />
        <div className="grid min-w-0 grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 md:gap-7 lg:grid-cols-3 lg:gap-8">
          {posts.map((post, i) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -8 }}
              className="group overflow-hidden rounded-2xl bg-white shadow-sm transition-shadow hover:shadow-xl"
            >
              <div className="relative overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="aspect-[16/10] h-auto w-full object-cover transition-transform duration-700 group-hover:scale-105 sm:aspect-[5/3]"
                  loading="lazy"
                />
                <span className="absolute top-4 left-4 rounded-full bg-gold-400 px-3 py-1 text-xs font-semibold text-navy-900">
                  {post.category}
                </span>
              </div>
              <div className="p-4 sm:p-6">
                <div className="mb-2 flex items-center gap-2 text-xs text-navy-700/50">
                  <Calendar size={12} />
                  {post.date}
                </div>
                <h3 className="mb-2 text-base font-semibold text-navy-900 transition-colors group-hover:text-gold-500 sm:text-lg">
                  {post.title}
                </h3>
                <p className="mb-4 text-sm leading-relaxed text-navy-700/60">{post.excerpt}</p>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-1 text-sm font-semibold text-navy-900 transition-all hover:gap-2 hover:text-gold-500"
                >
                  Read More
                  <ArrowRight size={14} />
                </Link>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
