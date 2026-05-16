export type Experience = {
  id: string;
  role: string;
  org: string;
  period: string;
  location: string;
  highlights: string[];
  tags: string[];
};

export type Education = {
  id: string;
  degree: string;
  school: string;
  period: string;
  location: string;
  note?: string;
};

export type ExperienceHighlight = {
  id: string;
  title: string;
  org: string;
  description: string;
  period?: string;
  isCurrent?: boolean;
};

export type SkillCategory = {
  label: string;
  skills: string[];
};

export const images = {
  professional: "/images/dian-professional.jpeg",
  portrait: "/images/dian-portrait.jpeg",
} as const;

export const profile = {
  legalName: "Habibah Dian Khalifah",
  preferredName: "Dian",
  title: "MSc Biomedical Engineering · Healthcare AI & Data",
  headline:
    "Graduate researcher building AI-driven tools for sleep monitoring, ECG analysis, and accessible digital health.",
  tagline:
    "MIS graduate · Data science practitioner · Biomedical engineering researcher — united by one goal: smarter healthcare through data and signals.",
  location: "Tainan, Taiwan",
  nationality: "Indonesian",
  email: "habibahdian7@gmail.com",
  lab: "WTMH Lab",
  labFull: "Wireless & Transdisciplinary Health Management (WTMH) Lab",
  university: "National Cheng Kung University (NCKU)",
  program: "M.Sc. Biomedical Engineering · Year 1",
  openTo: [
    "Research collaborations",
    "Healthcare AI internships",
    "Graduate research roles",
    "Data & health-tech projects",
  ],
  bio: [
    "I am an Indonesian master's student in Biomedical Engineering at National Cheng Kung University, combining a foundation in Management Information Systems with hands-on experience in data science, artificial intelligence, and biomedical signal research.",
    "Currently, I conduct research at the WTMH Lab, focusing on sleep-related healthcare technology, including biomedical signal processing, sleep apnea detection, ECG analysis, and deep learning approaches such as 1D CNNs for intelligent health monitoring systems that support early diagnosis, AI-assisted analysis, and remote healthcare solutions.",
    "I earned my bachelor's degree from Dokuz Eylül University, where I was recognized as the Best International Student by the Faculty of Economics and Administrative Sciences for outstanding academic performance among international students.",
    "Beyond research, I have applied Python and SQL in nonprofit data analytics, supported international student admissions, and completed an internship at the Embassy of the Republic of Indonesia in Bucharest. These experiences strengthened my adaptability, cross-cultural communication, and global perspective through academic and professional environments across Indonesia, Turkey, Romania, and Taiwan.",
  ],
  researchInterests: [
    {
      topic: "Biomedical Signal Processing",
      detail: "Extracting clinically meaningful features from physiological recordings.",
    },
    {
      topic: "AI in Healthcare",
      detail: "ML pipelines that support clinicians — not replace them.",
    },
    {
      topic: "Sleep Apnea Detection",
      detail: "Automated screening toward earlier intervention.",
    },
    {
      topic: "ECG & 1D CNN",
      detail: "Convolutional models for pattern recognition in ECG time series.",
    },
    {
      topic: "Digital Health",
      detail: "Remote monitoring and accessible care pathways.",
    },
    {
      topic: "Deep Learning in Medicine",
      detail: "Rigorous validation mindset for real-world deployment.",
    },
  ],
  languages: [
    { name: "Bahasa Indonesia", level: "Native", percent: 100 },
    { name: "English", level: "Advanced (Professional)", percent: 90 },
    { name: "Turkish", level: "Fluent", percent: 85 },
    { name: "Chinese", level: "Beginner (Learning)", percent: 35 },
  ],
  countries: [
    { name: "Indonesia", context: "Home & bootcamp" },
    { name: "Turkey", context: "B.Sc. MIS" },
    { name: "Romania", context: "Embassy internship" },
    { name: "Taiwan", context: "M.Sc. & research" },
  ],
};

/** Past → present (oldest first) */
export const experienceHighlights: ExperienceHighlight[] = [
  {
    id: "bootcamp",
    title: "Data Science Bootcamp",
    org: "Digital Skola",
    description:
      "Training in Python, SQL, machine learning fundamentals, data preprocessing, and data visualization using Looker Studio and Google Data Studio.",
  },
  {
    id: "award",
    title: "Best International Student",
    org: "Dokuz Eylül University · Faculty of Economics & Administrative Sciences",
    description:
      "Recognized for outstanding academic performance and achievements among international students.",
  },
  {
    id: "global",
    title: "Global Professional Exposure",
    org: "Education · Nonprofit · Diplomacy",
    description:
      "Experience across consulting, nonprofit data analytics, and embassy internship programs with strong cross-cultural collaboration and international adaptability.",
  },
  {
    id: "wtmh",
    period: "2025 — Present",
    title: "Graduate Research · WTMH Lab",
    org: "National Cheng Kung University",
    description:
      "Research in sleep-related biomedical engineering, including ECG signal analysis, sleep apnea detection, 1D CNN models, and AI-driven healthcare monitoring systems.",
    isCurrent: true,
  },
];

export const skillCategories: SkillCategory[] = [
  {
    label: "Programming & Data",
    skills: ["Python", "SQL"],
  },
  {
    label: "Data Analytics & Visualization",
    skills: ["Looker Studio", "Google Data Studio", "Data Preprocessing"],
  },
  {
    label: "Artificial Intelligence",
    skills: ["Machine Learning", "Deep Learning", "AI-assisted Healthcare Systems"],
  },
  {
    label: "Biomedical Research",
    skills: ["ECG Signal Processing", "Sleep Apnea Detection", "Biomedical Signal Analysis"],
  },
  {
    label: "Deep Learning Models",
    skills: ["1D CNN (Convolutional Neural Networks)"],
  },
  {
    label: "Other Skills",
    skills: ["Research Analysis", "Cross-cultural Communication", "Problem Solving"],
  },
];

export const education: Education[] = [
  {
    id: "ncku",
    degree: "M.Sc. Biomedical Engineering",
    school: "National Cheng Kung University",
    period: "2025 — Present",
    location: "Tainan, Taiwan",
    note: "WTMH Lab — sleep tech, signal processing & healthcare AI",
  },
  {
    id: "deu",
    degree: "B.Sc. Management Information Systems",
    school: "Dokuz Eylül University",
    period: "Undergraduate",
    location: "İzmir, Turkey",
    note: "Best International Student · ERP, BI, databases & project management",
  },
  {
    id: "bootcamp",
    degree: "Data Science Bootcamp",
    school: "Digital Skola",
    period: "Professional training",
    location: "Indonesia",
    note: "Python, SQL, ML fundamentals & data visualization",
  },
];

export const experience: Experience[] = [
  {
    id: "wtmh",
    role: "Graduate Researcher",
    org: "WTMH Lab · NCKU",
    period: "2025 — Present",
    location: "Tainan, Taiwan",
    highlights: [
      "Conduct sleep-related biomedical research and healthcare technology development at WTMH Lab.",
      "Apply ECG signal analysis and 1D CNN methods toward automated sleep disorder detection.",
      "Contribute to AI-driven monitoring concepts for early diagnosis and remote patient care.",
    ],
    tags: ["Research", "ECG", "1D CNN", "Sleep Tech", "Healthcare AI"],
  },
  {
    id: "mizan",
    role: "Data Analyst Intern",
    org: "Mizan Amanah Foundation",
    period: "Internship",
    location: "Indonesia",
    highlights: [
      "Cleaned and preprocessed large datasets using Python and SQL for reliable reporting.",
      "Built interactive dashboards visualizing donor behavior and transaction trends.",
      "Supported forecasting of donation patterns to improve fundraising strategy.",
    ],
    tags: ["Python", "SQL", "Dashboards", "Forecasting", "Looker Studio"],
  },
  {
    id: "arruh",
    role: "Education Consultant",
    org: "Arruh International Education",
    period: "Professional",
    location: "International",
    highlights: [
      "Advised students on international university admissions, programs, and academic planning.",
      "Managed visa applications and residence permit processes with high attention to detail.",
      "Collaborated with students from diverse countries — strengthening cross-cultural communication.",
    ],
    tags: ["Consulting", "Admissions", "Cross-cultural", "Operations"],
  },
  {
    id: "embassy",
    role: "Embassy Intern",
    org: "Embassy of Indonesia · Bucharest",
    period: "Internship",
    location: "Romania",
    highlights: [
      "Supported political, economic, social, and cultural affairs for Romania and Moldova.",
      "Conducted research, prepared documentation, and assisted consular services.",
      "Coordinated diplomatic events in a multicultural government environment.",
    ],
    tags: ["Diplomacy", "Research", "International Relations", "Administration"],
  },
];

export const navItems = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "highlights", label: "Highlights" },
  { id: "research", label: "Research" },
  { id: "experience", label: "Experience" },
  { id: "skills", label: "Skills" },
  { id: "contact", label: "Contact" },
] as const;

export type SectionId = (typeof navItems)[number]["id"];
