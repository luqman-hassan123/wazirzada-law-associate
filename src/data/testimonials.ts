export interface Testimonial {
  id: string
  quote: string
  name: string
  role?: string
  company?: string
}

export const testimonials: Testimonial[] = [
  {
    id: 'leena-shamshad',
    quote:
      'I would like to express my sincere appreciation for the exceptional professional services provided by Mr. Wazirzada Mohammad Owais of Wazirzada Law Associates. From the very outset, he has demonstrated unwavering commitment, dedication, and a high level of professionalism in handling my litigation case. His approach is thorough, strategic, and detail-oriented, reflecting both his legal expertise and deep understanding of the complexities involved. Throughout this challenging period, Mr. Owais has worked relentlessly and tirelessly to pursue my case with diligence and integrity. This was my first experience dealing with a legal matter of this nature, which brought considerable stress and uncertainty for both me and my family. However, his consistent guidance, clear communication, and reassuring presence have been a source of great comfort and confidence. What stands out most is his work ethic and genuine commitment to achieving the best possible outcome. He has gone above and beyond in ensuring that every aspect of the case is handled meticulously, leaving no room for oversight. His professionalism, coupled with his empathy and client-focused approach, has made a significant difference during a very difficult time. I am truly grateful for his continued efforts and would highly recommend his services to anyone seeking a dedicated, competent, and trustworthy legal professional.',
    name: 'Leena Shamshad',
    role: 'Client',
  },
  {
    id: 'muhammad-imran-wusuk',
    quote:
      'Wazirzada Law Associates handled our banking and regulatory matters with exceptional professionalism. Their strategic advice helped us navigate complex litigation and achieve a favourable outcome.',
    name: 'Muhammad Imran',
    company: 'WUSUK',
  },
  {
    id: 'muhammad-imran-kail',
    quote:
      'The firm provided thorough legal support on our corporate and compliance requirements. Their attention to detail and commitment to our interests were evident throughout the engagement.',
    name: 'Muhammad Imran',
    company: 'KAIL',
  },
]
