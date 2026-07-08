export interface Lawyer {
  id: string;
  slug: string;
  name: string;
  title: string;
  credentials: string;
  bio: string;
  image?: string;
  branch?: string;
  featured?: boolean;
}

/** Team members with uploaded photos in public/images/team/ */
export const TEAM_PHOTO_SLUGS = new Set([
  "wazirzada-muhammad-owais",
  "mehrunisa-jehangir-khan",
  "manzoor-ahmad-jan-khan",
  "rehan-ud-din-khan-golra",
  "muhammad-israr",
  "ijaz-ahmad",
  "rashid-ali-khan",
  "adnan-khan-yousafzai",
  "muhammad-jan",
  "atif-ali-khan",
  "asfandyar-zeb-khan",
  "ilyas-azhar-khan",
]);

const teamPhoto = (slug: string) =>
  TEAM_PHOTO_SLUGS.has(slug) ? `/images/team/${slug}.jpeg` : undefined;

export const lawyers: Lawyer[] = [
  {
    id: "1",
    slug: "wazirzada-muhammad-owais",
    name: "Wazirzada Muhammad Owais",
    title: "Managing Partner | Senior Advocate",
    credentials:
      "LL.M (Corporate Law) | Advocate High Court | MCIArb | Accredited Mediator",
    bio: "Mr. Wazirzada Muhammad Owais brings over 25 years of legal experience and serves as the Managing Partner of the firm. He has handled a wide spectrum of contentious and non-contentious matters, with specialization in corporate law, construction law, and commercial litigation, and has vast experience of arbitration, construction, contract claim management, and constitutional litigation.\n\nHis previous roles include Legal Counsel at Emaar Pakistan, where he gained extensive experience in laws relating to real estate—from shareholder agreements to owner contract agreements—with exposure to handling infrastructure, environmental, utilities, and land acquisition processes and law, and at Bank Limited. Mr. Owais has successfully represented clients before High Courts and subordinate courts, earning a reputation for legal acumen, strategy, and results-driven counsel.",
    image: teamPhoto("wazirzada-muhammad-owais"),
    featured: true,
  },
  {
    id: "2",
    slug: "mehrunisa-jehangir-khan",
    name: "Mehrunisa Jehangir Khan",
    title: "Senior Legal Advisor | Corporate & Energy Law Specialist",
    credentials: "Senior Legal Advisor — Oil, Gas & Energy Sector",
    bio: "Mehrunisa Jehangir Khan is a highly accomplished legal professional with over twenty years of rich and diverse experience in litigation, corporate advisory, and regulatory matters. She possesses deep expertise in oil and gas, petroleum, and energy sector laws at both national and international levels.\n\nShe has advised the Government of Pakistan, public sector entities, and multinational companies on complex contracts, licenses, and concession agreements. She has extensive experience in drafting, negotiating, and reviewing high-value commercial and upstream petroleum agreements, and has successfully represented organizations before the High Courts and civil courts of Pakistan.\n\nA former Judicial Magistrate/Civil Judge with a strong adjudicatory and administrative background, she is renowned for strategic legal insight, regulatory compliance expertise, and arbitration handling. She currently provides high-level corporate legal consultancy with a focus on governance, risk, and energy-sector compliance.",
    image: teamPhoto("mehrunisa-jehangir-khan"),
    featured: true,
  },
  {
    id: "3",
    slug: "manzoor-ahmad-jan-khan",
    name: "Manzoor Ahmad Jan Khan",
    title: "Partner | Senior Advocate",
    credentials: "B.A, LL.B | Advocate High Court | Accredited Mediator",
    bio: "With over 30 years of legal experience, Mr. Manzoor Jan is a seasoned professional known for his expertise in securitization recovery, corporate litigation, banking law, and land revenue matters. He is recognized for his ability to manage legal departments efficiently and deliver effective dispute resolutions.\n\nHis strategic insight, attention to detail, and strong communication skills have made him a dependable advisor for clients and colleagues alike, particularly in high-stakes portfolio management and legal risk assessment.",
    image: teamPhoto("manzoor-ahmad-jan-khan"),
    featured: true,
  },
  {
    id: "4",
    slug: "rehan-ud-din-khan-golra",
    name: "Rehan Ud Din Khan Golra",
    title: "Advocate Supreme Court of Pakistan",
    credentials: "Advocate Supreme Court of Pakistan",
    bio: "A senior Advocate of the Supreme Court of Pakistan with over three decades of distinguished legal practice. Possesses extensive experience in civil, criminal, constitutional, service, family, and intellectual property laws. Regularly appears before the Supreme Court, High Courts, Federal Shariat Court, and specialized tribunals.\n\nRecognized for strong litigation skills, precise drafting of pleadings, and effective courtroom advocacy. Served as Standing Counsel for the Government of Pakistan before the Islamabad High Court. Trusted Legal Advisor to prominent academic institutions, government bodies, and pharmaceutical companies. Also an accomplished legal academic, contributing to legal education as a visiting lecturer at leading law institutions.",
    image: teamPhoto("rehan-ud-din-khan-golra"),
  },
  {
    id: "5",
    slug: "muhammad-israr",
    name: "Muhammad Israr",
    title: "Ex-Officio Additional Secretary (R)",
    credentials:
      "Legislative Draftsman (BPS-21) | Ex-Officio Additional Secretary (R)",
    bio: "A highly respected constitutional expert and senior legislative draftsman with over forty years of distinguished service to the Government of Pakistan. Renowned for exceptional drafting precision, legal foresight, and strategic vision in shaping landmark constitutional and statutory reforms.\n\nPlayed a pivotal role in major constitutional amendments and transformative national legislation. Trusted adviser to the highest levels of government, parliamentary committees, and statutory bodies. Instrumental in aligning Pakistan's legal framework with modern governance and international best practices.\n\nPossesses deep expertise across constitutional law, fiscal legislation, regulatory regimes, and public sector governance. Known for principled leadership, institutional integrity, and mentorship of future legislative professionals. A career defined by enduring contributions to constitutional stability and progressive lawmaking.",
    image: teamPhoto("muhammad-israr"),
  },
  {
    id: "6",
    slug: "ijaz-ahmad",
    name: "Ijaz Ahmad",
    title: "Senior Banking & Finance Professional",
    credentials:
      "Expert in Debt Restructuring & Risk Management | Accredited Mediator",
    bio: "A highly accomplished banking and finance leader with over 35 years of distinguished service across Pakistan and Saudi Arabia. Renowned for expertise in credit marketing, risk management, debt restructuring, mediation, and arbitration.\n\nPlayed a pivotal role in restructuring large corporate exposures, negotiating multi-billion SAR settlements, and leading complex bankruptcy and recovery cases. Trusted adviser to top financial institutions, including Saudi Awwal Bank, Samba Financial Group, Alawwal Bank, and Askari Bank.\n\nInstrumental in aligning corporate debt structures with strategic financial objectives and regulatory frameworks. Possesses deep expertise across corporate treasury, structured finance, and cross-border banking operations. Known for principled leadership, operational excellence, and mentoring of emerging finance professionals.",
    image: teamPhoto("ijaz-ahmad"),
  },
  {
    id: "7",
    slug: "rashid-ali-khan",
    name: "Rashid Ali Khan",
    title: "Advocate High Court",
    credentials: "B.A LL.B | Advocate High Court",
    bio: "Mr. Rashid Ali Khan is an Advocate High Court with over 12 years of legal practice. He holds an M.A. in Political Science and an LL.B from the University of Peshawar and is licensed to appear before the High Courts of Pakistan.\n\nBefore joining leading law firms such as Shaheen Law Firm and Value Court Law Firm, he served as Legal Advisor to organizations including Pakistan International Human Rights Organization and INSAAF Welfare Trust.\n\nRashid has extensive experience in civil, criminal, constitutional, corporate, and tax law, as well as legal drafting and litigation strategy. He is an active member of multiple professional and human rights bodies, and regularly provides pro bono support to vulnerable clients.",
    image: teamPhoto("rashid-ali-khan"),
  },
  {
    id: "11",
    slug: "atif-ali-khan",
    name: "Atif Ali Khan",
    title: "Advocate | D.I. Khan Branch",
    credentials: "LL.B | MBA (Finance)",
    bio: "Mr. Atif Ali Khan leads the firm's D.I. Khan branch and is a motivated legal professional with a multidisciplinary background in law, finance, and community development. He is a practicing lawyer with hands-on experience in legal drafting, client advisory, and court proceedings before the Lower Courts.\n\nHolds strong academic credentials in Law (LL.B) and Finance (MBA), enabling a balanced understanding of legal and commercial matters. Experienced in investigation, compliance, and reporting through service with the KP Ehtesab Commission.\n\nPossesses substantial exposure to monitoring and evaluation, social mobilization, and humanitarian projects with national and international NGOs. Demonstrated capability in contract analysis, regulatory interpretation, and dispute assessment. Fluent in multiple regional and international languages, supporting effective advocacy and stakeholder engagement.",
    image: teamPhoto("atif-ali-khan"),
    branch: "D.I. Khan",
  },
  {
    id: "12",
    slug: "asfandyar-zeb-khan",
    name: "Asfandyar Zeb Khan",
    title: "Legal Professional",
    credentials: "Wazirzada Law Associates",
    bio: "Mr. Asfandyar Zeb Khan is a member of the Wazirzada Law Associates team, contributing to the firm's litigation, advisory, and client service work across a range of legal matters.",
    image: teamPhoto("asfandyar-zeb-khan"),
  },
  {
    id: "8",
    slug: "adnan-khan-yousafzai",
    name: "Adnan Khan Yousafzai",
    title: "Associate",
    credentials: "LL.B | Advocate High Court",
    bio: "Mr. Adnan Khan Yousafzai is an Associate Attorney at the firm. He holds an LL.B and is licensed to practice in District Courts. Before joining Wazirzada Law Associates, he gained valuable experience through internships with the Supreme Court of Pakistan (Additional Advocate General KP) and the National Commission for Human Rights (NCHR).\n\nAdnan has appeared before District Courts in Islamabad and Mardan, and actively participates in legal conferences and seminars. His focus is on corporate law and litigation support.",
    image: teamPhoto("adnan-khan-yousafzai"),
  },
  {
    id: "13",
    slug: "ilyas-azhar-khan",
    name: "Ilyas Azhar Khan",
    title: "Legal Professional",
    credentials: "Wazirzada Law Associates",
    bio: "Mr. Ilyas Azhar Khan is part of the Wazirzada Law Associates team, supporting the firm's practice in legal research, case preparation, and client representation.",
    image: teamPhoto("ilyas-azhar-khan"),
  },
  {
    id: "10",
    slug: "muhammad-jan",
    name: "Muhammad Jan",
    title: "Legal Intern",
    credentials: "Student of LL.B | Al-Mizan Institute of Legal Studies",
    bio: "Mr. Muhammad Jan is a dedicated legal intern recognized for his precision, integrity, and commitment to excellence. Currently pursuing his LL.B from Al-Mizan Institute of Legal Studies, affiliated with Quaid-e-Azam University, Islamabad, he brings a proactive approach and strong attention to detail to support clients and legal teams effectively.\n\nValued for his ethical conduct, clear communication, and ability to manage complex legal tasks professionally, Muhammad is building a foundation for a distinguished career in law.",
    image: teamPhoto("muhammad-jan"),
  },
  {
    id: "9",
    slug: "summiya-owais",
    name: "Summiya Owais",
    title: "Trainee",
    credentials: "LL.B (Hons)",
    bio: "Ms. Summiya Owais is currently serving as a Trainee at Wazirzada Law Associates, where she assists with legal research, case preparation, and drafting across civil and commercial matters. A law graduate from Liverpool John Moores University, she brings a strong foundation in legal analysis, dispute resolution, and legal writing.\n\nHer areas of interest include cyber law, climate change, and alternative dispute resolution with certification in mediation and negotiation. She has previously led a research project on cybersecurity legal protections for women in Pakistan and actively participated in mooting and adjudication competitions.\n\nWith a keen interest in both contentious and non-contentious work, she continues to develop her skills in a broad range of legal matters under the guidance of senior partners.",
  },
  {
    id: "14",
    slug: "abdullah",
    name: "Abdullah",
    title: "Trainee",
    credentials: "Wazirzada Law Associates",
    bio: "Abdullah is serving as a Trainee at Wazirzada Law Associates, assisting with legal research, case preparation, and client support while developing his skills under the guidance of senior partners.",
  },
];

export const featuredLawyers = lawyers.filter((l) => l.featured);

export function getLawyerBySlug(slug: string) {
  return lawyers.find((l) => l.slug === slug);
}

export function getLawyerInitials(name: string) {
  return name
    .split(" ")
    .filter(Boolean)
    .map((part) => part[0])
    .join("")
    .slice(0, 3)
    .toUpperCase();
}
