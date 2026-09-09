/**
 * Single source of truth for every piece of portfolio content.
 * Edit here — components read from this module only.
 */

export const GITHUB_USER = 'ashutosh-linux';
export const GITHUB_URL = `https://github.com/${GITHUB_USER}`;
export const LINKEDIN_URL = 'https://linkedin.com/in/ashutosh-kumar625490';
export const EMAIL = 'ashutosh.intech@gmail.com';

/** Helper so every repo link is provably built from the same username. */
export const repo = (name) => `${GITHUB_URL}/${name}`;

export const profile = {
  name: 'Ashutosh Kumar',
  logo: '<Ashutosh.dev />',
  role: 'AI/ML & Full-Stack Developer | Generative AI & Cloud Architect',
  bio: 'Passionate about engineering data-driven products, enterprise RAG workflows, agentic AI systems, and scalable full-stack applications. Bridging advanced machine learning models with production-grade web ecosystems.',
  status: 'Open to SWE, AI/ML & Full-Stack Engineering Roles',
  heroTitle: 'Architecting Agentic AI, Autonomous Workflows & Production Web Systems.',
  heroSubtitle:
    'Full-Stack Developer specializing in Python, MERN Stack, LangGraph, RAG architectures, and Cloud Infrastructure.',
};

export const stats = [
  { value: 12, suffix: '+', label: 'Public Repositories' },
  { value: 10, suffix: '+', label: 'Global Certifications' },
  { value: 3, suffix: '', label: 'Enterprise Virtual Internships' },
];

export const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
];

/* ------------------------------------------------------------------ */
/* Skills                                                              */
/* ------------------------------------------------------------------ */

export const skillGroups = [
  {
    id: 'languages',
    title: 'Languages',
    icon: 'Code2',
    accent: 'cyan',
    blurb: 'Core programming foundations across systems, web and data work.',
    skills: ['Java', 'Python', 'JavaScript (ES6+)', 'SQL', 'C/C++', 'HTML5', 'CSS3'],
  },
  {
    id: 'ai',
    title: 'AI, ML & GenAI',
    icon: 'Brain',
    accent: 'cyan',
    span: true,
    blurb: 'Agentic orchestration, retrieval pipelines and evaluation harnesses.',
    skills: [
      'LangGraph',
      'Agentic Workflows',
      'Retrieval-Augmented Generation (RAG)',
      'PyTorch',
      'TensorFlow',
      'ChromaDB',
      'FAISS',
      'DeepEval',
      'Semantic Chunking',
      'Multi-Modal Sensor Fusion',
      'Self-Corrective RAG',
    ],
  },
  {
    id: 'fullstack',
    title: 'Full-Stack & Backend',
    icon: 'Layers',
    accent: 'violet',
    blurb: 'Production web ecosystems from API surface to rendered pixel.',
    skills: [
      'React.js',
      'Node.js',
      'Express.js',
      'FastAPI',
      'RESTful APIs',
      'Vite',
      'Tailwind CSS',
    ],
  },
  {
    id: 'cloud',
    title: 'Databases & Cloud',
    icon: 'Cloud',
    accent: 'violet',
    span: true,
    blurb: 'Deploying, containerising and operating services at scale.',
    skills: [
      'MongoDB',
      'AWS (App Runner, EC2, S3, Data Engineering)',
      'Microsoft Azure',
      'Docker',
      'Linux/Bash',
      'Nginx',
      'Git/GitHub',
    ],
  },
  {
    id: 'networking',
    title: 'Networking & Tools',
    icon: 'Shield',
    accent: 'emerald',
    blurb: 'Network fundamentals, endpoint security and the daily toolchain.',
    skills: ['CCNA', 'Cisco Cybersecurity Tools', 'VS Code', 'Cursor AI'],
  },
];

/** Derived filter chips for the skills matrix. */
export const skillFilters = [
  { id: 'all', label: 'All Stacks' },
  ...skillGroups.map((g) => ({ id: g.id, label: g.title })),
];

/* ------------------------------------------------------------------ */
/* Projects — every URL is built from the GITHUB_USER constant         */
/* ------------------------------------------------------------------ */

export const projects = [
  {
    id: 'evalengine',
    title: 'EvalEngine — Hybrid RRF & LLM-as-a-Judge',
    repoName: 'EvalEngine-Hybrid-Reciprocal-Rank-Fusion-LLM-as-a-Judge',
    url: repo('EvalEngine-Hybrid-Reciprocal-Rank-Fusion-LLM-as-a-Judge'),
    description:
      'Advanced evaluation framework leveraging Hybrid RRF and LLM-as-a-Judge paradigms to benchmark information retrieval accuracy.',
    tags: ['Python', 'LLM Evaluation', 'RAG', 'RRF'],
    category: 'ai',
    icon: 'Gauge',
    featured: true,
  },
  {
    id: 'asyncpulse',
    title: 'AsyncPulse — SSE Streaming & Batching Proxy',
    repoName: 'AsyncPulse-Production-SSE-Streaming-Batching-Proxy',
    url: repo('AsyncPulse-Production-SSE-Streaming-Batching-Proxy'),
    description:
      'High-throughput asynchronous SSE streaming and adaptive batching proxy engineered for real-time data ingestion.',
    tags: ['Python', 'SSE', 'AsyncIO', 'Microservices'],
    category: 'backend',
    icon: 'Activity',
    featured: true,
  },
  {
    id: 'guardscript',
    title: 'GuardScript',
    repoName: 'guardscript',
    url: repo('guardscript'),
    description:
      'Autonomous agentic security auditing engine scanning source code for OWASP vulnerabilities using vector indexing and retrieval.',
    tags: ['Python', 'LangGraph', 'ChromaDB', 'AST Security'],
    category: 'security',
    icon: 'ShieldCheck',
    featured: true,
  },
  {
    id: 'self-corrective-rag',
    title: 'Self-Corrective RAG',
    repoName: 'self-corrective-rag',
    url: repo('self-corrective-rag'),
    description:
      'Robust Self-Corrective Retrieval-Augmented Generation agent incorporating active web-search fallback and document grading.',
    tags: ['Python', 'LangGraph', 'RAG', 'Hallucination Grading'],
    category: 'ai',
    icon: 'RefreshCw',
  },
  {
    id: 'azure-llm-sentinel',
    title: 'Azure LLM Sentinel',
    repoName: 'azure-llm-sentinel',
    url: repo('azure-llm-sentinel'),
    description:
      'Cloud-native observability and safety monitoring layer designed for enterprise Azure LLM deployments.',
    tags: ['Python', 'Azure', 'LLMops', 'Security'],
    category: 'cloud',
    icon: 'Radar',
  },
  {
    id: 'context-aware-rag',
    title: 'Context-Aware RAG',
    repoName: 'context-aware-RAG',
    url: repo('context-aware-RAG'),
    description:
      'Retrieval pipeline implementing context-aware semantic chunking and embedding retrieval for complex documentation.',
    tags: ['Python', 'FAISS', 'Embeddings', 'Semantic Chunking'],
    category: 'ai',
    icon: 'Boxes',
  },
  {
    id: 'vector-index-bench',
    title: 'Vector Index Bench',
    repoName: 'vector-index-bench',
    url: repo('vector-index-bench'),
    description:
      'Benchmarking suite analyzing latency, recall, and throughput across distinct vector indexing algorithms.',
    tags: ['Python', 'Vector DB', 'Benchmarking', 'FAISS'],
    category: 'ai',
    icon: 'ChartNoAxesColumn',
  },
  {
    id: 'smartdialer',
    title: 'SmartDialer',
    repoName: 'smartdialer',
    url: repo('smartdialer'),
    description:
      'Intelligent communication utility automating dialing queues, logic trees, and operational records.',
    tags: ['Python', 'Automation', 'Telephony API'],
    category: 'backend',
    icon: 'PhoneCall',
  },
  {
    id: 'intech-kids-play-school',
    title: 'Intech Kids Play School — School Management',
    repoName: 'intech-kids-play-school',
    url: repo('intech-kids-play-school'),
    description:
      'Full-scale School Management System featuring integrated portals for Admins, Parents, and Teachers with student records.',
    tags: ['HTML/CSS', 'Full-Stack', 'Express', 'MongoDB'],
    category: 'fullstack',
    icon: 'School',
  },
  {
    id: 'fees-management',
    title: 'Fees Management',
    repoName: 'FEES-MANAGEMENT',
    url: repo('FEES-MANAGEMENT'),
    description:
      'Academic fee tracking and management web application handling automated invoices, ledger updates, and receipts.',
    tags: ['JavaScript', 'Node.js', 'Express', 'Database'],
    category: 'fullstack',
    icon: 'ReceiptText',
  },
  {
    id: 'semantic-search',
    title: 'Semantic Search & RAG Practice',
    repoName: 'semantic_search',
    url: repo('semantic_search'),
    secondaryUrl: repo('RAG-practice'),
    secondaryLabel: 'RAG-practice',
    description:
      'Deep-dive exploratory implementations of dense passage retrieval, cross-encoders, and vector similarity algorithms.',
    tags: ['Python', 'NLP', 'PyTorch'],
    category: 'ai',
    icon: 'SearchCode',
  },
];

export const projectFilters = [
  { id: 'all', label: 'All Projects' },
  { id: 'ai', label: 'AI & RAG' },
  { id: 'backend', label: 'Backend & Systems' },
  { id: 'cloud', label: 'Cloud' },
  { id: 'security', label: 'Security' },
  { id: 'fullstack', label: 'Full-Stack' },
];

/* ------------------------------------------------------------------ */
/* Certifications                                                      */
/* ------------------------------------------------------------------ */

export const certificationTabs = [
  {
    id: 'cloud-ai',
    label: 'Cloud & AI',
    accent: 'cyan',
    items: [
      {
        title: 'AWS Academy Graduate — Cloud Foundations Training Badge',
        issuer: 'Amazon Web Services',
        date: 'Nov 2025',
      },
      {
        title: 'AWS Academy Graduate — AWS Academy Data Engineering',
        issuer: 'Amazon Web Services',
        date: 'Mar 2025',
      },
      {
        title: 'Microsoft Certified: Azure AI Fundamentals (AI-900)',
        issuer: 'Microsoft',
        date: '',
      },
      {
        title: 'AWS Certified — Cloud Practitioner / Solutions Architect',
        issuer: 'Amazon Web Services',
        date: '',
      },
      { title: 'Salesforce Certified AI Associate', issuer: 'Salesforce', date: '' },
      {
        title: 'Certificate of Completion: CS302 Software Engineering',
        issuer: 'Coursework',
        date: 'Nov 2025',
      },
    ],
  },
  {
    id: 'cisco',
    label: 'Networking & Cybersecurity',
    accent: 'emerald',
    items: [
      {
        title: 'Junior Cybersecurity Analyst Career Path',
        issuer: 'Cisco',
        date: 'Dec 2024',
      },
      { title: 'CCNA: Introduction to Networks', issuer: 'Cisco', date: 'Nov 2024' },
      { title: 'Endpoint Security', issuer: 'Cisco', date: 'Dec 2024' },
      { title: 'Data Analytics Essentials', issuer: 'Cisco', date: 'Dec 2024' },
      { title: 'Networking Basics', issuer: 'Cisco', date: 'Dec 2024' },
    ],
  },
  {
    id: 'training',
    label: 'Professional Training',
    accent: 'violet',
    items: [
      { title: 'Fullstack Developer Path Certification', issuer: 'Scrimba', date: '' },
      {
        title: 'Java Programming Intensive Certification',
        issuer: '12-Week Track',
        date: '',
      },
      {
        title: 'Professional Training Certificate',
        issuer: 'Entrepreneurship Development Institute, Bihar',
        date: 'May 2025',
      },
    ],
  },
];

/* ------------------------------------------------------------------ */
/* Experience                                                          */
/* ------------------------------------------------------------------ */

export const experience = [
  {
    role: 'Java Full Stack Developer Virtual Intern',
    org: 'AICTE & EduSkills Academy',
    period: 'Oct 2024 – Dec 2024',
    accent: 'cyan',
    points: [
      "Completed 10 weeks of enterprise Java full-stack coursework, earning an 'Excellent' final evaluation score.",
      'Built and tested backend services across 10 weekly milestones in industry-standard deployment environments.',
    ],
  },
  {
    role: 'AI-ML Virtual Intern',
    org: 'AICTE & Google for Developers',
    period: 'July 2024 – Sept 2024',
    accent: 'violet',
    points: [
      "Completed Google's 10-week curriculum covering hands-on predictive-modeling frameworks and applied machine learning pipelines.",
    ],
  },
  {
    role: 'Python Programming Virtual Intern',
    org: 'CodSoft',
    period: '',
    accent: 'emerald',
    points: [
      'Developed functional software tools (password generator, task manager, and calculator) focusing on modular algorithms and clean object-oriented code.',
    ],
  },
];

/* ------------------------------------------------------------------ */
/* About highlights                                                    */
/* ------------------------------------------------------------------ */

export const highlights = [
  {
    icon: 'Bot',
    title: 'Agentic AI Systems',
    body: 'LangGraph-driven agents with grading, self-correction and tool-use loops that survive contact with real documents.',
    accent: 'cyan',
  },
  {
    icon: 'Layers',
    title: 'Production Web Systems',
    body: 'MERN and FastAPI services designed around clean API contracts, typed data flow and measured response budgets.',
    accent: 'violet',
  },
  {
    icon: 'Cloud',
    title: 'Cloud Architecture',
    body: 'AWS and Azure deployments containerised with Docker, fronted by Nginx and observed end to end.',
    accent: 'emerald',
  },
];
