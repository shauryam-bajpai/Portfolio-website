export interface Metric {
  value: string;
  label: string;
}

export interface Project {
  title: string;
  category: string;
  index: string;
  description: string;
  points?: string[];
  metrics: Metric[];
  tags: string[];
  link: string;
  colSpan: 1 | 2;
}

export interface ExperienceItem {
  period: string;
  title: string;
  company: string;
  bullets: string[];
  skills: string[];
  isCurrent?: boolean;
}

export interface TechStackCategory {
  category: string;
  skills: string[];
}

export const navLinks = [
  { label: "Home", href: "#" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact", isButton: true },
];

export const heroData = {
  badge: "B.Tech CS · Manipal Institute of Technology",
  name: "Shauryam Bajpai.",
  tagline: "I build AI-powered backends.",
  description:
    "Computer Science undergraduate and software engineer passionate about building scalable applications, intelligent systems, and impactful digital experiences.",
  primaryAction: { label: "View my work", href: "#projects" },
  secondaryAction: {
    label: "GitHub ↗",
    href: "https://github.com/shauryam-bajpai",
  },
  signature: "Shauryam",
};

export const aboutData = {
  sectionNumber: "01 / ABOUT",
  title: "About",
  bio: [
    "I'm a Computer Science undergraduate at Manipal Institute of Technology, Bengaluru, with a passion for building scalable software, intelligent applications, and reliable backend systems.",
    "My work spans **Full-Stack Development, AI/ML, Backend Engineering, and Distributed Systems**. From developing privacy-focused AI applications and peer-to-peer storage systems to designing secure financial platforms, I enjoy exploring challenging engineering problems and transforming ideas into functional products.",
    "With industry experience in AI-powered backend development, I'm particularly interested in system design, performance optimization, and integrating machine learning into real-world applications.",
    "Beyond development, I actively practice data structures and algorithms, explore new technologies, and continually challenge myself to become a better software engineer.",
  ],
  techStack: [
    {
      category: "LANGUAGES",
      skills: ["C", "C++", "Java", "Python", "JavaScript", "TypeScript", "Go"],
    },
    {
      category: "FRAMEWORKS",
      skills: [
        "React",
        "Next.js",
        "Node.js",
        "FastAPI",
        "Spring Boot",
        "Express",
        "gRPC",
        "Tailwind CSS",
      ],
    },
    {
      category: "AI / ML",
      skills: [
        "RAG Pipelines",
        "Vector DBs",
        "Embeddings",
        "Local LLMs",
        "Ollama",
        "OpenAI API",
      ],
    },
    {
      category: "DATABASES",
      skills: ["PostgreSQL", "MySQL", "MongoDB", "Redis", "Qdrant", "Oracle SQL"],
    },
    {
      category: "DEV TOOLS",
      skills: ["Git", "GitHub", "Docker", "Postman", "Linux", "VS Code"],
    },
  ] as TechStackCategory[],
};

export const experienceData: ExperienceItem[] = [
  {
    period: "MAY 2026 - JULY 2026",
    title: "Software Engineering Intern",
    company: "NetProphets Cyberworks Private Limited",
    isCurrent: false,
    skills: ["FastAPI", "Python", "Next.js", "TypeScript", "Vector Search", "Agile"],
    bullets: [
      "Engineered backend microservices for an AI-driven platform using FastAPI, delivering high-throughput production endpoints in 2-week Agile sprint cycles.",
      "Integrated local and remote LLM inference pipelines with Qdrant vector search into a Next.js/TypeScript frontend for end-to-end streaming workflows.",
      "Introduced structured telemetry, input schema validation, and health checks around model and vector-store calls to eliminate silent failures and cut debugging latency.",
    ],
  },
  {
    period: "JANUARY 2025 - APRIL 2025",
    title: "Full Stack Developer Intern",
    company: "Robotronix and Scalable Technologies (RAST)",
    isCurrent: false,
    skills: ["React", "Node.js", "Express", "REST APIs", "Automated QA"],
    bullets: [
      "Engineered core modules for a web-based virtual materials simulation platform, implementing responsive UI workflows and robust API endpoints.",
      "Spearheaded comprehensive platform verification and regression testing, validating calculation accuracy across multi-variable stress-strain datasets.",
    ],
  },
];

export const projectsData: Project[] = [
  {
    title: "LocalMind",
    category: "LOCAL-FIRST AI",
    index: "01 · 2026",
    description:
      "A local-first document intelligence system that turns PDFs—including scans—into searchable knowledge without sending sensitive data off-device.",
    points: [
      "Token-aware chunking pipeline with Qdrant vector embeddings for instant semantic search",
      "Integrated local OCR engine for scanned files paired with streaming Ollama inference",
    ],
    metrics: [
      { value: "42%", label: "FASTER QUERIES" },
      { value: "100%", label: "OFFLINE & PRIVATE" },
    ],
    tags: ["Python", "FastAPI", "Next.js", "Qdrant", "Ollama"],
    link: "https://github.com/shauryam-bajpai/LocalMind",
    colSpan: 2,
  },
  {
    title: "PeerLink Storage",
    category: "DISTRIBUTED SYSTEMS",
    index: "02 · 2026",
    description:
      "A decentralized storage network in Go that moves encrypted file chunks directly between peers and replicates them automatically for resilience.",
    metrics: [
      { value: "P2P", label: "RAW TCP" },
      { value: "AES-256", label: "ENCRYPTED" },
    ],
    tags: ["Go", "gRPC", "Protobuf", "Distributed Systems"],
    link: "https://github.com/shauryam-bajpai/PeerLink_Storage",
    colSpan: 1,
  },
  {
    title: "Customer Retention Engine",
    category: "MACHINE LEARNING",
    index: "03 · 2025",
    description:
      "An end-to-end churn prediction pipeline designed to prevent data leakage, correct class imbalance with SMOTE, and reveal the behaviors most strongly tied to retention.",
    metrics: [
      { value: "7,000", label: "RECORDS ANALYZED" },
      { value: "SMOTE", label: "BALANCING" },
    ],
    tags: ["Python", "Scikit-Learn", "Pandas", "Seaborn"],
    link: "https://github.com/shauryam-bajpai",
    colSpan: 1,
  },
  {
    title: "Capital Guardian",
    category: "FINTECH · FULL STACK",
    index: "04 · 2025",
    description:
      "A unified banking platform that brings live balances, transaction history, and verified ACH transfers into one secure account experience.",
    points: [
      "Plaid API integration securely synchronizing live accounts across 12,000+ financial institutions",
      "Dwolla ACH payment rail handling verified transfers backed by Next.js Server Components",
    ],
    metrics: [
      { value: "12,000+", label: "BANKS VIA PLAID" },
      { value: "ACH", label: "TRANSFERS" },
      { value: "RSC", label: "SERVER-FIRST" },
    ],
    tags: ["Next.js 14", "TypeScript", "Appwrite", "Plaid", "Dwolla", "Tailwind"],
    link: "https://github.com/shauryam-bajpai",
    colSpan: 2,
  },
  {
    title: "SplitLedger",
    category: "FINTECH · BACKEND",
    index: "05 · 2026",
    description:
      "A concurrency-safe expense engine that reduces complex group debt to at most N-1 transfers while preserving an exact, auditable ledger.",
    points: [
      "Priority-queue algorithm minimizes complex group debts into the theoretical minimum number of transactions",
      "Pessimistic row-level locking, idempotency keys, and append-only audit ledgers guarantee zero ledger drift",
    ],
    metrics: [
      { value: "17", label: "REST ENDPOINTS" },
      { value: "9", label: "SQL TABLES" },
      { value: "3", label: "SPLIT STRATEGIES" },
    ],
    tags: ["Java", "Spring Boot", "React", "PostgreSQL", "Docker"],
    link: "https://github.com/shauryam-bajpai",
    colSpan: 2,
  },
  {
    title: "StreamPulse",
    category: "BACKEND + AI",
    index: "06 · 2026",
    description:
      "A high-throughput media backend that combines secure streaming, Redis-backed delivery, and asynchronous AI metadata extraction.",
    metrics: [
      { value: "JWT", label: "AUTH & RBAC" },
      { value: "AI", label: "AUTO-TAGGING" },
    ],
    tags: ["Node.js", "Redis", "OpenAI API", "Docker"],
    link: "https://github.com/shauryam-bajpai/Streampulse",
    colSpan: 1,
  },
];

export const marqueeTechnologies = [
  "Python",
  "Go",
  "TypeScript",
  "FastAPI",
  "Next.js",
  "Docker",
  "Qdrant",
  "Redis",
  "PostgreSQL",
  "Spring Boot",
  "gRPC",
  "Tailwind CSS",
];

export const contactData = {
  sectionNumber: "06 / CONTACT",
  title: "Let's build something.",
  subtitle: "Open to software engineering internships and collaborative research.",
  email: "shaurya04112@gmail.com",
  socials: [
    { label: "GitHub", href: "https://github.com/shauryam-bajpai" },
    { label: "LinkedIn", href: "http://www.linkedin.com/in/shauryam-bajpai" },
    { label: "LeetCode", href: "https://leetcode.com/u/bajpai_shauryam/" },
  ],
  location: "Manipal Institute of Technology · Bengaluru",
};
