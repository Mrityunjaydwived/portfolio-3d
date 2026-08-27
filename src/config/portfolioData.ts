export interface PersonalInfo {
  name: string;
  placeholderName?: string;
  role: string;
  titles: string[];
  tagline: string;
  longBio: string;
  email: string;
  phone: string;
  location: string;
  github: string;
  linkedin: string;
  twitter: string;
  instagram: string;
  facebook: string;
  youtube: string;
  leetcode: string;
  portfolioHandle: string;
  resumeUrl: string;
  availability: string;
  philosophy: string;
  goals: string;
  interests: string[];
  stats: {
    projectsCompleted: number;
    technologiesCount: number;
    yearsExperience: number;
    studentsClientsTrained: number;
  };
}

export interface MilestoneItem {
  year: string;
  title: string;
  subtitle: string;
  description: string;
  tag: string;
}

export interface SkillItem {
  id: string;
  name: string;
  category: 'Programming' | 'Frontend' | 'Backend' | 'Database' | 'Data & AI' | 'Cybersecurity' | 'DevOps & Cloud' | 'Tools';
  level: number; // 0 - 100
  experienceYears: number;
  description: string;
  relatedProjects: string[];
  iconName?: string;
  color?: string;
  position3D?: [number, number, number]; // 3D coordinates in Skills Universe
}

export interface ProjectItem {
  id: string;
  title: string;
  tagline: string;
  description: string;
  longDescription: string;
  category: 'Web' | 'Software' | 'Python' | 'Data' | 'AI' | 'IoT' | 'Other';
  technologies: string[];
  keyFeatures: string[];
  architecture: string;
  githubUrl: string;
  liveDemoUrl: string;
  metrics: { label: string; value: string }[];
  accentColor: string;
  featured: boolean;
}

export interface ExperienceItem {
  id: string;
  company: string;
  role: string;
  location: string;
  period: string;
  type: string;
  description: string;
  responsibilities: string[];
  achievements: string[];
  technologies: string[];
}

export interface EducationItem {
  degree: string;
  field: string;
  institution: string;
  location: string;
  period: string;
  grade?: string;
  highlights: string[];
}

export interface ServiceItem {
  id: string;
  title: string;
  tagline: string;
  description: string;
  iconType: 'software' | 'web' | 'python' | 'data' | 'training' | 'consulting';
  deliverables: string[];
  technologies: string[];
  idealFor: string;
}

export interface WhatIBringCard {
  title: string;
  description: string;
  skills: string[];
  icon: string;
}

export interface CertificationItem {
  name: string;
  issuer: string;
  year: string;
  badgeId: string;
}

export interface ContactInfo {
  title: string;
  subtitle: string;
  directEmail: string;
  phone: string;
  location: string;
  coordinates: { lat: number; lng: number };
  socials: { name: string; url: string; handle?: string; icon: string }[];
}

export interface GithubRepoItem {
  id: string;
  name: string;
  description: string;
  permission: 'Public' | 'Academic Research' | 'Major Full-Stack' | 'AI & Data';
  language: string;
  stars: number;
  forks: number;
  url: string;
  updatedAt: string;
  topics: string[];
}

export interface LeetCodeStats {
  username: string;
  profileUrl: string;
  globalRanking: number;
  totalSolved: number;
  totalQuestions: number;
  acceptanceRate: string;
  contestRating: number;
  contributionPoints?: number;
  currentStreak: number;
  maxStreak: number;
  difficultyBreakdown: {
    easy: { solved: number; total: number };
    medium: { solved: number; total: number };
    hard: { solved: number; total: number };
  };
  topicMastery: { topic: string; solved: number; level: string }[];
  recentSubmissions: { title: string; difficulty: 'Easy' | 'Medium' | 'Hard'; timeAgo: string; status: 'Accepted' }[];
}

export interface PortfolioConfig {
  personal: PersonalInfo;
  heroCodeSnippet: string;
  whatIBring: WhatIBringCard[];
  milestones: MilestoneItem[];
  skills: SkillItem[];
  projects: ProjectItem[];
  experience: ExperienceItem[];
  services: ServiceItem[];
  education: EducationItem[];
  certifications: CertificationItem[];
  achievements: string[];
  contactInfo: ContactInfo;
  githubRepos: GithubRepoItem[];
  leetcodeStats: LeetCodeStats;
}

export const portfolioConfig: PortfolioConfig = {
  personal: {
    name: "Mrityunjay Dwivedi",
    placeholderName: "Mrityunjay Dwivedi",
    role: "MERN Stack Developer | AI/ML Engineer | Cybersecurity Engineer | Data Analyst",
    titles: [
      "MERN Stack Developer",
      "AI / ML Engineer",
      "Cybersecurity Engineer",
      "Data Analyst",
      "UG-Inbound Scholar (IIT Indore)"
    ],
    tagline: "Architecting high-performance MERN web ecosystems, training deep learning neural vision pipelines, fortifying critical cybersecurity infrastructure, and transforming complex datasets into predictive intelligence.",
    longBio: "I am a versatile, high-velocity Computer Science Engineer, Gold Medalist (8.66 CGPA), and former UG-Inbound Research Scholar at the Indian Institute of Technology (IIT), Indore (Jan 2025 – May 2025, selected in Top 5). My engineering philosophy unites computational rigor with industrial execution across four high-demand domains: building resilient MERN Stack microservices & real-time WebRTC platforms, training deep learning models (PyTorch/CNNs with 97.92% accuracy on melanoma detection) and Generative AI systems, conducting cybersecurity penetration testing & network hardening, and driving data analytics with statistical inference. In parallel, I serve as a Technical Trainer in CSE at Symbiosis Foundation, mentoring students in algorithms and low-level systems.",
    email: "dwivedibandhavesh@gmail.com",
    phone: "+91-7489467539",
    location: "Indore / Rewa, Madhya Pradesh, India",
    github: "https://github.com/mrityunjaydwived",
    linkedin: "https://www.linkedin.com/in/mrityunjaydwivedi09",
    twitter: "https://x.com/mrityunjayvl1",
    instagram: "https://www.instagram.com/mrityunjaydwivedi01",
    facebook: "https://www.facebook.com/mrityunjaydwivedi01",
    youtube: "https://www.youtube.com/@MrMrityunjayDwivedi",
    leetcode: "https://leetcode.com/u/Mrityunjay_dwivedi/",
    portfolioHandle: "MrityunjayDwiPortfolio",
    resumeUrl: "/resume",
    availability: "Available for High-Impact Opportunities",
    philosophy: "Master core computer science fundamentals from first principles, eliminate algorithmic bottlenecks, fortify every attack vector, and build software that scales reliably under real-world load.",
    goals: "Building cutting-edge AI medical vision diagnostics, bulletproof distributed MERN microservices, and leading transformative engineering teams in AI, cybersecurity, and data-driven systems.",
    interests: [
      "MERN Stack Architecture (React, Node.js, Express, MongoDB, WebRTC)",
      "Deep Learning & Medical Computer Vision (CNNs, PyTorch)",
      "Cybersecurity Defense, Network Audits & Ethical Hacking",
      "Exploratory Data Analysis, Predictive Modeling & SQL Analytics",
      "Advanced Data Structures & Algorithmic Problem Solving (LeetCode)"
    ],
    stats: {
      projectsCompleted: 9,
      technologiesCount: 95,
      yearsExperience: 2,
      studentsClientsTrained: 180
    }
  },

  heroCodeSnippet: `const engineer = {
  name: "Mrityunjay Dwivedi",
  institution: "IIT Indore & GEC Rewa",
  pedigree: "Gold Medalist (8.66 CGPA) | Top 5 IIT Indore Inbound (Jan-May 2025)",
  pillars: [
    "MERN Stack Development",
    "AI / ML & Deep Learning",
    "Cybersecurity Defense",
    "Data Analytics & Insights"
  ],
  stack: ["React.js", "Node.js", "MongoDB", "PyTorch", "Nmap", "Pandas"],
  status: "Available for High-Impact Engineering Roles"
};`,

  whatIBring: [
    {
      title: "MERN Stack Engineering",
      description: "Architecting end-to-end full-stack web applications with React.js, Node.js, Express.js, and MongoDB. Integrating real-time WebRTC media streams, WebSockets, and state machines.",
      skills: ["React.js", "Node.js", "Express.js", "MongoDB", "WebRTC", "Socket.io", "REST APIs"],
      icon: "Code2"
    },
    {
      title: "AI / ML & Deep Learning",
      description: "Designing, training, and deploying Convolutional Neural Networks (CNNs) in PyTorch and TensorFlow for computer vision and medical imaging, alongside Google Gemini Generative AI automation.",
      skills: ["PyTorch", "TensorFlow", "CNNs", "Computer Vision", "Gemini API", "Grad-CAM", "Hyperparameter Tuning"],
      icon: "Sparkles"
    },
    {
      title: "Cybersecurity & Network Defense",
      description: "Hardening system architectures, identifying OWASP Top 10 vulnerabilities, conducting packet inspection with Wireshark & Nmap, and configuring zero-trust JWT/Firebase authentication.",
      skills: ["Network Security", "Penetration Testing", "Wireshark", "Nmap", "Burp Suite", "OWASP Top 10", "JWT Auth"],
      icon: "Cpu"
    },
    {
      title: "Data Analytics & Business Intelligence",
      description: "Deriving actionable insights from massive datasets using Pandas, NumPy, SQL, and Matplotlib. Building predictive statistical models, anomaly detection, and automated ETL pipelines.",
      skills: ["Pandas", "NumPy", "SQL / MySQL", "Matplotlib", "Seaborn", "Power BI", "Data Cleaning & EDA"],
      icon: "Kanban"
    },
    {
      title: "Algorithmic Problem Solving & DSA",
      description: "Rigorous command of Data Structures and Algorithms with 450+ LeetCode problems solved across Trees, Graphs, Dynamic Programming, and Greedy techniques.",
      skills: ["Data Structures", "Algorithms (DSA)", "LeetCode Mastery", "Time-Space Optimization", "C/C++", "Python"],
      icon: "GraduationCap"
    },
    {
      title: "Technical Training & Infrastructure",
      description: "Leading hands-on university computer science instruction as Technical Trainer at Symbiosis Foundation, managing laboratory LAN networks, Linux systems, and IT clusters.",
      skills: ["Technical Instruction", "Curriculum Delivery", "LAN Administration", "Linux Hardening", "System Maintenance"],
      icon: "Users"
    }
  ],

  milestones: [
    {
      year: "Jan 2025 - May 2025",
      title: "UG-Inbound Research Scholar (8th Semester)",
      subtitle: "Indian Institute of Technology (IIT), Indore",
      description: "Selected in the Top 5 of the competitive IIT Indore Inbound Examination and Interview. Conducted major research in CNN Melanoma Lesion Cell Classification under Prof. Dr. Surya Prakash and real-time Service Oriented Systems under Prof. Dr. Abhishek Shrivastava.",
      tag: "Academic Research"
    },
    {
      year: "Sept 2025 - Present",
      title: "Technical Trainer – Computer Science Engineering",
      subtitle: "Symbiosis Foundation / Symbiosis University of Applied Sciences",
      description: "Delivering hands-on training in core Computer Science domains (programming, DSA), managing LAN network administration, system configuration, security troubleshooting, and IT infrastructure support.",
      tag: "Teaching & Industry"
    },
    {
      year: "2021 - 2025",
      title: "B.Tech in Computer Science (Gold Medalist)",
      subtitle: "Government Engineering College (Rewa Engineering College), Rewa",
      description: "Graduated with an outstanding 8.66 CGPA as the Gold Medal Winner of the Engineering Batch (2021-25).",
      tag: "Education"
    },
    {
      year: "2020 - 2021",
      title: "Senior Secondary (12th Board)",
      subtitle: "Board of Secondary Education, Madhya Pradesh",
      description: "Achieved 93.60% with distinction in Mathematics, Physics, and Chemistry.",
      tag: "Education"
    },
    {
      year: "2018 - 2019",
      title: "High School (10th Board)",
      subtitle: "Board of Secondary Education, Madhya Pradesh",
      description: "Achieved 94.40% with top academic honors.",
      tag: "Education"
    }
  ],

  skills: [
    // --- 1. PROGRAMMING & CORE LANGUAGES ---
    { id: 'python', name: 'Python', category: 'Programming', level: 96, experienceYears: 3, description: 'Core language for Deep Learning (PyTorch), AI automation with Gemini API, data analytics, and high-velocity scripting.', relatedProjects: ['melanoma-cnn', 'ai-assistant-automation'], position3D: [-2.5, 1.8, 0.5], color: '#38bdf8' },
    { id: 'cpp', name: 'C / C++', category: 'Programming', level: 92, experienceYears: 4, description: 'Strong systems programming foundation, low-level memory management, and rigorous Data Structures & Algorithms (DSA).', relatedProjects: ['dsa-engine'], position3D: [-1.2, 2.2, -0.8], color: '#60a5fa' },
    { id: 'java', name: 'Java', category: 'Programming', level: 85, experienceYears: 2, description: 'Object-oriented programming, concurrent algorithms, and enterprise software engineering principles.', relatedProjects: ['core-java-suite'], position3D: [-0.3, 2.6, 0.8], color: '#f97316' },
    { id: 'golang', name: 'Go (Golang)', category: 'Programming', level: 84, experienceYears: 2, description: 'High-concurrency systems, goroutines, network tooling, and microservices backend performance.', relatedProjects: ['cyber-sentinel'], position3D: [-1.8, 2.7, -0.3], color: '#00add8' },
    { id: 'r-lang', name: 'R Language', category: 'Programming', level: 82, experienceYears: 2, description: 'Statistical computing, bioinformatics data manipulation, hypothesis testing, and statistical graphics.', relatedProjects: ['financial-analytics'], position3D: [-2.9, 2.1, 0.9], color: '#276dc3' },
    { id: 'sql-lang', name: 'SQL', category: 'Programming', level: 94, experienceYears: 3, description: 'Relational data modeling, multi-table joins, subqueries, indexing, window functions, and analytics.', relatedProjects: ['financial-analytics', 'smart-video-conf'], position3D: [-0.8, 2.9, 0.2], color: '#00758f' },
    { id: 'dsa', name: 'Data Structures & Algorithms', category: 'Programming', level: 94, experienceYears: 3, description: 'Deep mastery of Trees, Graphs, Dynamic Programming, Sorting, Searching, and 450+ LeetCode problems solved.', relatedProjects: ['dsa-engine', 'melanoma-cnn'], position3D: [-2.0, 0.5, 1.5], color: '#10b981' },
    { id: 'agile', name: 'Agile Methodology', category: 'Programming', level: 88, experienceYears: 2, description: 'Scrum workflows, sprint planning, continuous iteration, and collaborative software lifecycle delivery.', relatedProjects: ['smart-video-conf'], position3D: [-3.0, 0.8, -1.2], color: '#a855f7' },

    // --- 2. FRONTEND ---
    { id: 'react', name: 'React.js', category: 'Frontend', level: 95, experienceYears: 3, description: 'Core of MERN: reactive components, hooks, concurrent rendering, and real-time WebRTC media applications.', relatedProjects: ['smart-video-conf', 'portfolio-3d'], position3D: [1.5, 2.0, 0.5], color: '#06b6d4' },
    { id: 'nextjs', name: 'Next.js', category: 'Frontend', level: 90, experienceYears: 2, description: 'App router, Server-Side Rendering (SSR), Static Site Generation (SSG), and edge API routes.', relatedProjects: ['portfolio-3d'], position3D: [2.2, 2.5, 0.3], color: '#ffffff' },
    { id: 'typescript', name: 'TypeScript', category: 'Frontend', level: 92, experienceYears: 2, description: 'Strict static typing, interfaces, generics, type guards, and enterprise-grade maintainable codebases.', relatedProjects: ['portfolio-3d'], position3D: [2.0, 1.8, -0.6], color: '#3178c6' },
    { id: 'javascript', name: 'JavaScript (ES6+)', category: 'Frontend', level: 94, experienceYears: 4, description: 'Asynchronous event loops, DOM performance, promises, fetch APIs, and modern ES modules.', relatedProjects: ['smart-video-conf', 'portfolio-3d'], position3D: [2.3, 1.4, -0.6], color: '#facc15' },
    { id: 'redux-toolkit', name: 'Redux Toolkit', category: 'Frontend', level: 90, experienceYears: 2, description: 'Centralized state management, slices, async thunks, and predictable data flow in large React applications.', relatedProjects: ['smart-video-conf'], position3D: [1.1, 2.8, 0.6], color: '#764abc' },
    { id: 'zustand', name: 'Zustand', category: 'Frontend', level: 88, experienceYears: 2, description: 'Lightweight reactive state management, zero-boilerplate stores, and decoupled UI state synchronization.', relatedProjects: ['portfolio-3d'], position3D: [0.8, 3.2, -0.2], color: '#443e38' },
    { id: 'tanstack-query', name: 'TanStack Query', category: 'Frontend', level: 89, experienceYears: 2, description: 'Server state management, background caching, query invalidation, and optimistic UI mutations.', relatedProjects: ['smart-video-conf'], position3D: [1.6, 3.1, -0.5], color: '#ff4154' },
    { id: 'axios', name: 'Axios', category: 'Frontend', level: 94, experienceYears: 3, description: 'HTTP client with request/response interceptors, automatic JSON transforms, and abort controllers.', relatedProjects: ['smart-video-conf'], position3D: [2.5, 2.0, 1.1], color: '#5a29e4' },
    { id: 'tailwind', name: 'Tailwind CSS', category: 'Frontend', level: 96, experienceYears: 3, description: 'Utility-first styling, glassmorphism design systems, dynamic theming, and responsive layouts.', relatedProjects: ['portfolio-3d', 'smart-video-conf'], position3D: [1.2, 3.0, -0.4], color: '#38bdf8' },
    { id: 'html5', name: 'HTML5', category: 'Frontend', level: 98, experienceYears: 4, description: 'Semantic web architecture, accessibility (WCAG), canvas rendering, and modern web application markup.', relatedProjects: ['smart-video-conf', 'portfolio-3d'], position3D: [2.8, 2.2, 1.0], color: '#ea580c' },
    { id: 'css3', name: 'CSS3', category: 'Frontend', level: 95, experienceYears: 4, description: 'Keyframe animations, Flexbox, Grid, custom properties, and modern responsive design.', relatedProjects: ['smart-video-conf', 'portfolio-3d'], position3D: [3.1, 1.5, 0.4], color: '#264de4' },
    { id: 'bootstrap', name: 'Bootstrap', category: 'Frontend', level: 90, experienceYears: 3, description: 'Grid systems, responsive utility classes, pre-styled UI components, and rapid web prototyping.', relatedProjects: ['web-portal'], position3D: [3.3, 1.9, -0.4], color: '#7952b3' },
    { id: 'react-router', name: 'React Router', category: 'Frontend', level: 92, experienceYears: 3, description: 'Client-side routing, nested routes, dynamic parameters, and seamless SPA view transitions.', relatedProjects: ['portfolio-3d', 'smart-video-conf'], position3D: [2.4, 2.8, -0.8], color: '#ca4245' },
    { id: 'material-ui', name: 'Material UI (MUI)', category: 'Frontend', level: 86, experienceYears: 2, description: 'Google Material Design components, custom theme palettes, emotion styling, and data grids.', relatedProjects: ['web-portal'], position3D: [1.8, 2.4, 1.2], color: '#007fff' },
    { id: 'cursor-effects', name: 'Antigravity.js & Cursor Effects', category: 'Frontend', level: 92, experienceYears: 2, description: 'Spatial pointer tracking, interactive particle gravity, WebGL shader lighting, and ambient 3D FX.', relatedProjects: ['portfolio-3d'], position3D: [0.5, 3.4, 0.4], color: '#00f0ff' },
    { id: 'latex', name: 'LaTeX', category: 'Frontend', level: 88, experienceYears: 2, description: 'Typesetting academic research papers, mathematical formulas, and scientific documentation for publications.', relatedProjects: ['melanoma-cnn'], position3D: [2.0, 3.1, 0.7], color: '#0ea5e9' },

    // --- 3. BACKEND ---
    { id: 'nodejs', name: 'Node.js', category: 'Backend', level: 92, experienceYears: 3, description: 'High-throughput event-driven microservices, streaming IO, worker threads, and MERN runtime backend.', relatedProjects: ['smart-video-conf'], position3D: [-1.8, -1.2, 1.2], color: '#22c55e' },
    { id: 'express', name: 'Express.js', category: 'Backend', level: 92, experienceYears: 3, description: 'Modular REST API design, custom middleware pipelines, authentication guards, and validation schemas.', relatedProjects: ['smart-video-conf'], position3D: [-2.5, -0.5, 0.4], color: '#94a3b8' },
    { id: 'fastapi', name: 'FastAPI', category: 'Backend', level: 90, experienceYears: 2, description: 'Modern, high-performance asynchronous Python web framework for ML model inference and Pydantic schemas.', relatedProjects: ['melanoma-cnn', 'ai-assistant-automation'], position3D: [-2.2, -1.8, 0.6], color: '#059669' },
    { id: 'flask', name: 'Flask', category: 'Backend', level: 88, experienceYears: 2, description: 'Lightweight WSGI Python web microframework for microservices, prototyping, and AI endpoint wrapping.', relatedProjects: ['melanoma-cnn'], position3D: [-2.8, -1.1, 0.9], color: '#000000' },
    { id: 'webrtc', name: 'WebRTC', category: 'Backend', level: 90, experienceYears: 2, description: 'Peer-to-peer real-time audio/video streaming, ICE candidate negotiation, STUN/TURN servers, and screen sharing.', relatedProjects: ['smart-video-conf'], position3D: [-1.0, -1.8, -0.7], color: '#38bdf8' },
    { id: 'socketio', name: 'Socket.io', category: 'Backend', level: 92, experienceYears: 2, description: 'Bi-directional low-latency event communication for real-time messaging, presence tracking, and chat rooms.', relatedProjects: ['smart-video-conf'], position3D: [-2.8, -1.5, -0.5], color: '#00f0ff' },
    { id: 'graphql', name: 'GraphQL & Apollo Server', category: 'Backend', level: 86, experienceYears: 2, description: 'Declarative data querying, schema definition language (SDL), resolvers, and Apollo Server integration.', relatedProjects: ['smart-video-conf'], position3D: [-1.5, -2.4, -0.8], color: '#e535ab' },
    { id: 'mongoose', name: 'Mongoose ODM', category: 'Backend', level: 92, experienceYears: 3, description: 'Schema validation, middleware hooks, virtuals, populate joins, and MongoDB document modeling.', relatedProjects: ['smart-video-conf'], position3D: [-2.0, -2.1, 0.1], color: '#880000' },
    { id: 'sequelize', name: 'Sequelize & Prisma ORM', category: 'Backend', level: 88, experienceYears: 2, description: 'Type-safe database migrations, relationship modeling, transaction management, and automated queries.', relatedProjects: ['smart-video-conf'], position3D: [-1.2, -2.6, 0.5], color: '#2b3a42' },
    { id: 'jwt', name: 'Jsonwebtoken (JWT) & Bcrypt', category: 'Backend', level: 94, experienceYears: 3, description: 'Stateless cryptographic token authentication, password salt-hashing, role-based access control (RBAC).', relatedProjects: ['smart-video-conf'], position3D: [-0.6, -2.2, 1.4], color: '#fbbf24' },
    { id: 'helmet', name: 'Helmet.js & Security Middleware', category: 'Backend', level: 90, experienceYears: 2, description: 'Hardening HTTP response headers (CSP, HSTS, X-Frame-Options, DNS prefetch control) against attacks.', relatedProjects: ['smart-video-conf'], position3D: [-1.6, -1.6, 1.6], color: '#f43f5e' },
    { id: 'cors-dotenv', name: 'Cors, Dotenv & Nodemon', category: 'Backend', level: 95, experienceYears: 3, description: 'Cross-origin resource sharing controls, secure environment variables management, and live hot-reloading.', relatedProjects: ['smart-video-conf'], position3D: [-2.4, -2.0, -0.9], color: '#6ee7b7' },
    { id: 'php', name: 'PHP', category: 'Backend', level: 82, experienceYears: 2, description: 'Server-side scripting, database connectivity with MySQL, and dynamic web content rendering.', relatedProjects: ['web-portal'], position3D: [-1.5, -2.2, 0.2], color: '#777bb4' },
    { id: 'apache', name: 'Apache HTTP Server', category: 'Backend', level: 85, experienceYears: 2, description: 'Web server configuration, virtual hosts, .htaccess rewrite rules, and reverse proxy setup.', relatedProjects: ['web-portal'], position3D: [-0.9, -2.5, -0.2], color: '#d22128' },

    // --- 4. DATABASE & STORAGE ---
    { id: 'mongodb', name: 'MongoDB', category: 'Database', level: 92, experienceYears: 3, description: 'Core MERN database: NoSQL document modeling, JSON collections, aggregation pipelines, and indexing.', relatedProjects: ['smart-video-conf'], position3D: [1.2, -2.0, -0.9], color: '#16a34a' },
    { id: 'mysql', name: 'MySQL / Workbench', category: 'Database', level: 92, experienceYears: 3, description: 'Relational schema modeling, complex SQL queries, foreign key constraints, indexing, and administration.', relatedProjects: ['smart-video-conf', 'financial-analytics'], position3D: [0.2, -2.4, 0.8], color: '#3b82f6' },
    { id: 'postgresql', name: 'PostgreSQL & pgAdmin', category: 'Database', level: 90, experienceYears: 2, description: 'Enterprise relational database: JSONB fields, stored procedures, indexing (B-tree/GIN), and ACID compliance.', relatedProjects: ['financial-analytics'], position3D: [0.8, -2.2, -1.5], color: '#336791' },
    { id: 'redis', name: 'Redis (In-Memory Caching)', category: 'Database', level: 88, experienceYears: 2, description: 'High-speed in-memory data store for session storage, caching API responses, and pub/sub messaging.', relatedProjects: ['smart-video-conf'], position3D: [1.5, -2.5, 0.1], color: '#dc2626' },
    { id: 'sqlite', name: 'SQLite', category: 'Database', level: 90, experienceYears: 3, description: 'Serverless, zero-configuration embedded SQL database engine for local data storage and desktop tools.', relatedProjects: ['dsa-engine'], position3D: [0.4, -2.8, -0.6], color: '#003b57' },
    { id: 'oracle-db', name: 'Oracle Database', category: 'Database', level: 82, experienceYears: 2, description: 'Large-scale relational database architecture, PL/SQL stored routines, triggers, and transaction isolation.', relatedProjects: ['financial-analytics'], position3D: [1.9, -1.9, -1.1], color: '#f80000' },
    { id: 'mongodb-compass', name: 'MongoDB Compass', category: 'Database', level: 92, experienceYears: 3, description: 'Visual GUI for document queries, index optimization, execution explain plans, and aggregation pipelines.', relatedProjects: ['smart-video-conf'], position3D: [1.1, -2.7, 0.7], color: '#13aa52' },
    { id: 'pinecone', name: 'Pinecone & ChromaDB (Vector DBs)', category: 'Database', level: 86, experienceYears: 2, description: 'High-dimensional vector embedding storage, cosine similarity search, and RAG retrieval pipelines for LLMs.', relatedProjects: ['ai-assistant-automation'], position3D: [2.3, -2.2, 0.5], color: '#8b5cf6' },
    { id: 'milvus', name: 'Milvus Vector DB', category: 'Database', level: 84, experienceYears: 1, description: 'Open-source vector database built for massive similarity searches and AI embedding indexing.', relatedProjects: ['ai-assistant-automation'], position3D: [2.0, -2.8, -0.3], color: '#00a1ea' },
    { id: 'snowflake', name: 'Snowflake & BigQuery', category: 'Database', level: 85, experienceYears: 2, description: 'Cloud data warehousing, decoupled compute and storage, large-scale analytical queries, and partitioned tables.', relatedProjects: ['financial-analytics'], position3D: [1.4, -3.1, 0.4], color: '#29b5e8' },
    { id: 'firebase', name: 'Firebase & Auth', category: 'Database', level: 92, experienceYears: 2, description: 'Firebase Authentication for secure user logins, Firestore real-time NoSQL database, and cloud storage.', relatedProjects: ['smart-video-conf'], position3D: [-0.6, -2.8, -0.2], color: '#f59e0b' },
    { id: 'xampp', name: 'XAMPP / phpMyAdmin', category: 'Database', level: 92, experienceYears: 3, description: 'Local server environment configuration, Apache server, MySQL administration, and database export/import.', relatedProjects: ['web-portal'], position3D: [0.8, -2.7, 1.1], color: '#f97316' },

    // --- 5. DATA SCIENCE, AI & MACHINE LEARNING ---
    { id: 'pytorch', name: 'PyTorch', category: 'Data & AI', level: 95, experienceYears: 2, description: 'Deep Learning architecture design, CNNs, GPU tensor operations, loss function optimization, and model inference.', relatedProjects: ['melanoma-cnn'], position3D: [2.5, -0.8, 1.4], color: '#ee4c2c' },
    { id: 'tensorflow', name: 'TensorFlow & Keras', category: 'Data & AI', level: 88, experienceYears: 2, description: 'Neural network modeling, Keras API, data augmentation pipelines, and classification evaluation.', relatedProjects: ['melanoma-cnn'], position3D: [3.2, -0.2, 0.2], color: '#ff6f00' },
    { id: 'scikit-learn', name: 'Scikit-learn', category: 'Data & AI', level: 94, experienceYears: 3, description: 'Supervised/unsupervised algorithms, classification, regression, PCA clustering, and cross-validation pipelines.', relatedProjects: ['melanoma-cnn', 'financial-analytics'], position3D: [2.9, -1.2, 0.8], color: '#f7931e' },
    { id: 'xgboost', name: 'XGBoost, LightGBM & CatBoost', category: 'Data & AI', level: 90, experienceYears: 2, description: 'Gradient boosting algorithms, tree-based tabular predictive modeling, and hyperparameter optimization.', relatedProjects: ['financial-analytics'], position3D: [3.5, -0.6, 0.9], color: '#10b981' },
    { id: 'huggingface', name: 'Hugging Face Transformers', category: 'Data & AI', level: 88, experienceYears: 2, description: 'Pretrained NLP and vision models, tokenizers, fine-tuning BERT/RoBERTa, and pipeline architectures.', relatedProjects: ['ai-assistant-automation'], position3D: [2.6, 0.3, -1.4], color: '#ffd21e' },
    { id: 'langchain', name: 'LangChain & OpenAI API', category: 'Data & AI', level: 90, experienceYears: 2, description: 'Chaining LLMs, prompt templates, retrieval-augmented generation (RAG), and agentic tool-use loops.', relatedProjects: ['ai-assistant-automation'], position3D: [3.1, 0.7, -0.5], color: '#1c3c3c' },
    { id: 'geminiapi', name: 'Google Generative AI (Gemini)', category: 'Data & AI', level: 92, experienceYears: 2, description: 'Integrating Gemini API for multimodal reasoning, prompt engineering, and automated knowledge pipelines.', relatedProjects: ['ai-assistant-automation'], position3D: [2.2, -1.4, -1.0], color: '#8b5cf6' },
    { id: 'numpy', name: 'NumPy', category: 'Data & AI', level: 94, experienceYears: 3, description: 'Matrix computation, linear algebra, vectorization, array manipulation, and fast numerical computing.', relatedProjects: ['melanoma-cnn', 'ai-assistant-automation'], position3D: [3.4, 0.6, -0.8], color: '#013243' },
    { id: 'pandas', name: 'Pandas', category: 'Data & AI', level: 94, experienceYears: 3, description: 'Dataframe transformation, data cleansing, feature extraction, missing data handling, and ETL for Data Analysis.', relatedProjects: ['melanoma-cnn', 'financial-analytics'], position3D: [1.8, -0.5, 2.0], color: '#150458' },
    { id: 'scipy', name: 'SciPy & Statsmodels', category: 'Data & AI', level: 88, experienceYears: 2, description: 'Statistical testing, ANOVA, p-value calculations, signal processing, optimization, and linear regression.', relatedProjects: ['financial-analytics'], position3D: [2.8, -0.9, -0.7], color: '#0054a6' },
    { id: 'matplotlib', name: 'Matplotlib & Seaborn', category: 'Data & AI', level: 92, experienceYears: 3, description: 'Visualizing model loss curves, confusion matrices, Grad-CAM heatmaps, and dataset distribution plots.', relatedProjects: ['melanoma-cnn', 'financial-analytics'], position3D: [2.8, 0.2, 1.8], color: '#10b981' },
    { id: 'plotly', name: 'Plotly & Bokeh', category: 'Data & AI', level: 90, experienceYears: 2, description: 'Interactive statistical plots, web-based dashboards, 3D scatter charts, and real-time streaming charts.', relatedProjects: ['financial-analytics'], position3D: [3.3, 0.0, 1.3], color: '#3f4f75' },
    { id: 'powerbi', name: 'Microsoft Power BI Desktop', category: 'Data & AI', level: 92, experienceYears: 2, description: 'Interactive executive dashboards, star-schema data modeling, DAX measures, and automated reporting.', relatedProjects: ['financial-analytics'], position3D: [2.1, 0.9, 1.6], color: '#f2c811' },
    { id: 'tableau', name: 'Tableau Desktop', category: 'Data & AI', level: 88, experienceYears: 2, description: 'Data visual analytics, calculated fields, parameters, geospatial maps, and story boards.', relatedProjects: ['financial-analytics'], position3D: [2.4, 1.2, 1.1], color: '#e97627' },
    { id: 'excel', name: 'Microsoft Excel (Advanced & Modeling)', category: 'Data & AI', level: 94, experienceYears: 4, description: 'Advanced pivot tables, XLOOKUP, INDEX-MATCH, scenario analysis, and financial data modeling.', relatedProjects: ['financial-analytics'], position3D: [1.5, 1.2, 2.1], color: '#107c41' },
    { id: 'dax', name: 'DAX & M Formula Language', category: 'Data & AI', level: 89, experienceYears: 2, description: 'Writing complex calculated columns, time-intelligence measures (YTD/MTD), and Power Query ETL transformations.', relatedProjects: ['financial-analytics'], position3D: [2.6, 1.4, 0.5], color: '#0078d4' },
    { id: 'openpyxl', name: 'Openpyxl & Xlwings', category: 'Data & AI', level: 90, experienceYears: 2, description: 'Automating spreadsheet generation, reading and writing large Excel workbooks, and batch Python scripting.', relatedProjects: ['financial-analytics'], position3D: [1.9, 0.4, 2.3], color: '#36648b' },
    { id: 'dbt', name: 'dbt (Data Build Tool)', category: 'Data & AI', level: 84, experienceYears: 1, description: 'Analytics engineering, modular SQL data transformations in data warehouses, testing, and documentation.', relatedProjects: ['financial-analytics'], position3D: [3.0, 0.8, 0.8], color: '#ff694b' },
    { id: 'mlflow', name: 'MLflow, DVC & Weights & Biases', category: 'Data & AI', level: 86, experienceYears: 2, description: 'Machine learning experiment tracking, model registry, artifact storage, and dataset version control.', relatedProjects: ['melanoma-cnn'], position3D: [3.6, -0.4, -0.4], color: '#0194e2' },
    { id: 'streamlit', name: 'Streamlit & Gradio', category: 'Data & AI', level: 92, experienceYears: 2, description: 'Rapid web deployment of Machine Learning and Computer Vision models into interactive client demos.', relatedProjects: ['melanoma-cnn', 'ai-assistant-automation'], position3D: [2.7, -1.6, 0.2], color: '#ff4b4b' },
    { id: 'sagemaker', name: 'AWS SageMaker & Vertex AI', category: 'Data & AI', level: 84, experienceYears: 2, description: 'Managed cloud ML training jobs, model deployment endpoints, hyperparameter tuning, and monitoring.', relatedProjects: ['melanoma-cnn'], position3D: [3.3, -1.0, -0.8], color: '#ff9900' },

    // --- 6. CYBERSECURITY & ETHICAL HACKING ---
    { id: 'networksecurity', name: 'Network Security & Firewalls', category: 'Cybersecurity', level: 92, experienceYears: 2, description: 'Network packet filtering, firewall rule configurations, IP routing, subnetting, and perimeter defense.', relatedProjects: ['cyber-sentinel'], position3D: [-0.5, -1.2, 2.5], color: '#f43f5e' },
    { id: 'wireshark', name: 'Wireshark & Packet Analysis', category: 'Cybersecurity', level: 90, experienceYears: 2, description: 'Deep packet inspection, protocol dissection (TCP/UDP, DNS, HTTP/S), anomaly detection, and pcap forensics.', relatedProjects: ['cyber-sentinel'], position3D: [-1.4, -0.8, 2.8], color: '#38bdf8' },
    { id: 'nmap', name: 'Nmap & Port Scanning', category: 'Cybersecurity', level: 92, experienceYears: 2, description: 'Vulnerability assessment, host discovery, service fingerprinting, OS detection, and stealth SYN scans.', relatedProjects: ['cyber-sentinel'], position3D: [0.2, -1.0, 3.0], color: '#e11d48' },
    { id: 'owasp', name: 'OWASP Top 10 & AppSec', category: 'Cybersecurity', level: 94, experienceYears: 2, description: 'Mitigating XSS, SQLi, CSRF, broken authentication, IDOR, and insecure cryptographic implementations.', relatedProjects: ['smart-video-conf', 'cyber-sentinel'], position3D: [-1.0, 0.2, 3.2], color: '#ec4899' },
    { id: 'cryptography', name: 'Cryptography & Zero-Trust Auth', category: 'Cybersecurity', level: 90, experienceYears: 2, description: 'Public/private key cryptography, RSA, AES-256 encryption, hashing (SHA-256, bcrypt), and JWT tokens.', relatedProjects: ['smart-video-conf'], position3D: [0.5, 0.0, 2.9], color: '#a855f7' },
    { id: 'kali-parrot', name: 'Kali Linux & Parrot Security OS', category: 'Cybersecurity', level: 92, experienceYears: 2, description: 'Dedicated offensive security Linux environments, pen-testing distributions, and auditing toolchains.', relatedProjects: ['cyber-sentinel'], position3D: [-0.2, -0.4, 3.3], color: '#557cda' },
    { id: 'metasploit', name: 'Metasploit Framework & Searchsploit', category: 'Cybersecurity', level: 88, experienceYears: 2, description: 'Penetration testing execution, exploit validation, payload generation with msfvenom, and post-exploitation.', relatedProjects: ['cyber-sentinel'], position3D: [-1.6, -0.3, 2.9], color: '#135c91' },
    { id: 'burpsuite', name: 'Burp Suite Professional', category: 'Cybersecurity', level: 90, experienceYears: 2, description: 'HTTP proxy interceptor, repeater, intruder fuzzing, CSRF testing, and web application vulnerability scanning.', relatedProjects: ['cyber-sentinel', 'smart-video-conf'], position3D: [-0.8, -1.7, 2.7], color: '#ff6633' },
    { id: 'owasp-zap', name: 'OWASP ZAP & Nikto', category: 'Cybersecurity', level: 88, experienceYears: 2, description: 'Automated dynamic web application security scanning (DAST) and web server vulnerability discovery.', relatedProjects: ['cyber-sentinel'], position3D: [-1.3, -1.4, 2.2], color: '#00549f' },
    { id: 'snort-suricata', name: 'Snort, Suricata & Zeek (NIDS/NIPS)', category: 'Cybersecurity', level: 86, experienceYears: 2, description: 'Signature-based intrusion detection, real-time traffic analysis, custom alert rule writing, and network telemetry.', relatedProjects: ['cyber-sentinel'], position3D: [0.8, -0.6, 3.1], color: '#ef4444' },
    { id: 'tcpdump', name: 'Tcpdump & Netcat', category: 'Cybersecurity', level: 90, experienceYears: 2, description: 'Command-line packet capturing, raw socket banner grabbing, port probing, and network debugging.', relatedProjects: ['cyber-sentinel'], position3D: [0.0, -1.6, 2.6], color: '#64748b' },
    { id: 'splunk', name: 'Splunk Enterprise & Sentinel', category: 'Cybersecurity', level: 88, experienceYears: 2, description: 'SIEM log ingestion, SPL search queries, security operations center (SOC) dashboards, and threat hunting.', relatedProjects: ['cyber-sentinel'], position3D: [-0.4, 0.6, 3.2], color: '#000000' },
    { id: 'elk-stack', name: 'Elastic Stack (ELK - Elasticsearch, Logstash, Kibana)', category: 'Cybersecurity', level: 88, experienceYears: 2, description: 'Centralized log aggregation, real-time audit visualization, and security anomaly detection.', relatedProjects: ['cyber-sentinel'], position3D: [-1.2, 0.8, 2.8], color: '#005571' },
    { id: 'wazuh', name: 'Wazuh XDR & SIEM', category: 'Cybersecurity', level: 85, experienceYears: 1, description: 'Endpoint security agent monitoring, file integrity monitoring (FIM), and automated incident response.', relatedProjects: ['cyber-sentinel'], position3D: [0.3, 0.5, 3.0], color: '#0083cb' },
    { id: 'active-directory', name: 'Active Directory & Azure AD / Entra ID', category: 'Cybersecurity', level: 88, experienceYears: 2, description: 'Group Policy Objects (GPOs), Kerberos authentication, domain controller management, and cloud identity.', relatedProjects: ['cyber-sentinel'], position3D: [-0.9, 1.1, 2.6], color: '#0078d4' },
    { id: 'okta-vault', name: 'Okta & HashiCorp Vault', category: 'Cybersecurity', level: 86, experienceYears: 2, description: 'Identity access management (IAM), single sign-on (SSO), secrets management, and dynamic database credentials.', relatedProjects: ['smart-video-conf'], position3D: [0.9, 0.1, 2.7], color: '#00297a' },
    { id: 'nessus', name: 'Nessus & Qualys Vulnerability Scanners', category: 'Cybersecurity', level: 88, experienceYears: 2, description: 'Host vulnerability auditing, CVE compliance scanning, credentialed patch assessment, and risk remediation.', relatedProjects: ['cyber-sentinel'], position3D: [-0.1, 1.3, 2.7], color: '#00778b' },
    { id: 'openvas', name: 'OpenVAS Vulnerability Scanner', category: 'Cybersecurity', level: 86, experienceYears: 2, description: 'Open-source vulnerability management, unauthenticated/authenticated network security scanning.', relatedProjects: ['cyber-sentinel'], position3D: [-1.5, 0.4, 2.5], color: '#88be17' },
    { id: 'ghidra', name: 'Ghidra & IDA Pro (Reverse Engineering)', category: 'Cybersecurity', level: 84, experienceYears: 1, description: 'Binary disassembly, decompiler analysis, control-flow graph inspection, and malware reverse engineering.', relatedProjects: ['cyber-sentinel'], position3D: [1.1, -1.1, 2.4], color: '#d33682' },
    { id: 'sysinternals', name: 'Sysinternals Suite', category: 'Cybersecurity', level: 90, experienceYears: 2, description: 'Process Explorer, ProcMon, Autoruns, and deep Windows internal operating system diagnostic troubleshooting.', relatedProjects: ['cyber-sentinel'], position3D: [0.5, 1.0, 2.5], color: '#0078d7' },
    { id: 'autopsy-ftk', name: 'Autopsy & FTK Imager (Digital Forensics)', category: 'Cybersecurity', level: 85, experienceYears: 1, description: 'Bit-stream disk imaging, memory forensics, deleted file carving, timeline analysis, and chain of custody.', relatedProjects: ['cyber-sentinel'], position3D: [-0.6, 1.5, 2.2], color: '#2b579a' },
    { id: 'cloud-sec', name: 'AWS Security Hub & Defender for Cloud', category: 'Cybersecurity', level: 86, experienceYears: 2, description: 'Cloud Security Posture Management (CSPM), automated compliance checks, and cloud guardrails.', relatedProjects: ['cyber-sentinel'], position3D: [1.3, -0.4, 2.5], color: '#ff9900' },
    { id: 'trivy-snyk', name: 'Trivy & Snyk (DevSecOps)', category: 'Cybersecurity', level: 88, experienceYears: 2, description: 'Container image vulnerability scanning, open-source dependency auditing, and CI/CD security gating.', relatedProjects: ['cyber-sentinel'], position3D: [1.5, 0.3, 2.2], color: '#4c158a' },
    { id: 'john-hashcat', name: 'John the Ripper & Hashcat', category: 'Cybersecurity', level: 88, experienceYears: 2, description: 'Password strength auditing, dictionary & rule-based hash cracking (MD5, NTLM, SHA, bcrypt).', relatedProjects: ['cyber-sentinel'], position3D: [-1.1, 1.6, 1.9], color: '#e65100' },
    { id: 'aircrack', name: 'Aircrack-ng & Kismet', category: 'Cybersecurity', level: 85, experienceYears: 2, description: '802.11 wireless network auditing, WPA2 handshake capture, packet replay, and rogue AP detection.', relatedProjects: ['cyber-sentinel'], position3D: [0.1, 1.7, 2.1], color: '#303f9f' },
    { id: 'flipper-proxmark', name: 'Flipper Zero & Proxmark3', category: 'Cybersecurity', level: 86, experienceYears: 1, description: 'RFID / NFC emulation, Sub-GHz radio signal capture & replay, and physical hardware access security research.', relatedProjects: ['cyber-sentinel'], position3D: [0.7, 1.5, 1.9], color: '#ff6600' },
    { id: 'vpn-pfsense', name: 'OpenVPN & pfSense', category: 'Cybersecurity', level: 88, experienceYears: 2, description: 'Configuring secure encrypted site-to-site VPN tunnels, firewall NAT rules, and gateway intrusion prevention.', relatedProjects: ['cyber-sentinel', 'symbiosis-infra'], position3D: [-0.4, 1.9, 1.7], color: '#005f73' },

    // --- 7. DEVOPS & CLOUD INFRASTRUCTURE ---
    { id: 'aws', name: 'AWS Cloud', category: 'DevOps & Cloud', level: 88, experienceYears: 2, description: 'EC2 instance compute, S3 scalable storage, IAM security policies, VPC networking, and CloudWatch metrics.', relatedProjects: ['smart-video-conf'], position3D: [1.8, -2.3, 0.3], color: '#ff9900' },
    { id: 'azure', name: 'Microsoft Azure', category: 'DevOps & Cloud', level: 85, experienceYears: 2, description: 'Azure App Services, Virtual Machines, Azure Blob, Resource Groups, and Azure Monitor.', relatedProjects: ['smart-video-conf'], position3D: [2.3, -2.0, -0.6], color: '#0089d6' },
    { id: 'gcp', name: 'Google Cloud Platform (GCP)', category: 'DevOps & Cloud', level: 84, experienceYears: 2, description: 'Google Compute Engine, Cloud Storage buckets, IAM roles, and Vertex AI API connectivity.', relatedProjects: ['ai-assistant-automation'], position3D: [2.6, -1.8, 0.8], color: '#4285f4' },
    { id: 'docker', name: 'Docker Containers', category: 'DevOps & Cloud', level: 92, experienceYears: 2, description: 'Multi-stage Dockerfiles, image optimization, Docker Compose microservices, and container networking.', relatedProjects: ['smart-video-conf'], position3D: [1.2, -1.6, -2.2], color: '#2496ed' },
    { id: 'kubernetes', name: 'Kubernetes (K8s) & Helm', category: 'DevOps & Cloud', level: 84, experienceYears: 1, description: 'Container orchestration, Deployments, Services, Ingress controllers, ConfigMaps, and Helm charts.', relatedProjects: ['smart-video-conf'], position3D: [1.8, -1.4, -2.5], color: '#326ce5' },
    { id: 'terraform', name: 'Terraform & OpenTofu (IaC)', category: 'DevOps & Cloud', level: 85, experienceYears: 2, description: 'Infrastructure as Code (IaC), declarative cloud provisioning, state management, and reusable modules.', relatedProjects: ['symbiosis-infra'], position3D: [0.6, -2.0, -2.4], color: '#7b42bc' },
    { id: 'ansible', name: 'Ansible & Packer', category: 'DevOps & Cloud', level: 82, experienceYears: 1, description: 'Agentless server configuration management, YAML playbooks, automated provisioning, and golden image builds.', relatedProjects: ['symbiosis-infra'], position3D: [2.2, -1.2, -2.1], color: '#ee0000' },
    { id: 'jenkins', name: 'Jenkins & GitLab CI/CD', category: 'DevOps & Cloud', level: 86, experienceYears: 2, description: 'Automated CI/CD build pipelines, test automation stages, artifact archiving, and deployment webhooks.', relatedProjects: ['smart-video-conf'], position3D: [0.3, -1.5, -2.7], color: '#d24939' },
    { id: 'github-actions', name: 'GitHub Actions', category: 'DevOps & Cloud', level: 92, experienceYears: 2, description: 'YAML workflow automation, matrix test suites, automated linting, container builds, and cloud deployments.', relatedProjects: ['smart-video-conf', 'portfolio-3d'], position3D: [1.5, -0.9, -2.6], color: '#2088ff' },
    { id: 'argocd', name: 'ArgoCD (GitOps)', category: 'DevOps & Cloud', level: 80, experienceYears: 1, description: 'Declarative GitOps continuous delivery for Kubernetes with automated synchronization.', relatedProjects: ['smart-video-conf'], position3D: [2.0, -0.7, -2.8], color: '#ef7b4d' },
    { id: 'prometheus-grafana', name: 'Prometheus & Grafana', category: 'DevOps & Cloud', level: 88, experienceYears: 2, description: 'Time-series metrics collection, PromQL queries, alert thresholds, and system health visual dashboards.', relatedProjects: ['smart-video-conf'], position3D: [0.9, -0.8, -2.9], color: '#e6522c' },
    { id: 'datadog', name: 'Datadog & CloudWatch', category: 'DevOps & Cloud', level: 84, experienceYears: 1, description: 'Infrastructure monitoring, application performance monitoring (APM), and distributed trace analysis.', relatedProjects: ['smart-video-conf'], position3D: [1.3, -0.3, -3.1], color: '#632ca6' },
    { id: 'cloud-storage', name: 'AWS S3 & Cloud Storage', category: 'DevOps & Cloud', level: 92, experienceYears: 2, description: 'Scalable object storage, signed upload URLs, bucket access policies, lifecycle rules, and static hosting.', relatedProjects: ['smart-video-conf'], position3D: [2.4, -0.5, -2.2], color: '#569a31' },
    { id: 'cloud-db', name: 'Amazon RDS & DynamoDB', category: 'DevOps & Cloud', level: 86, experienceYears: 2, description: 'Managed cloud relational databases with automated backups and multi-region low-latency NoSQL tables.', relatedProjects: ['smart-video-conf'], position3D: [2.7, -0.9, -1.8], color: '#4053d6' },
    { id: 'vercel-render', name: 'Vercel, Render & Netlify', category: 'DevOps & Cloud', level: 94, experienceYears: 3, description: 'Serverless frontend deployments, preview branches, edge CDN routing, and zero-downtime backend hosting.', relatedProjects: ['portfolio-3d', 'smart-video-conf'], position3D: [1.9, 0.0, -2.7], color: '#000000' },

    // --- 8. SOFTWARE TOOLS & IDES ---
    { id: 'git', name: 'Git & GitHub', category: 'Tools', level: 95, experienceYears: 4, description: 'Version control, branching workflows, pull requests, cherry-picking, and collaborative open-source engineering.', relatedProjects: ['melanoma-cnn', 'smart-video-conf', 'ai-assistant-automation'], position3D: [-0.2, 1.2, 2.2], color: '#f05032' },
    { id: 'vscode', name: 'VS Code & Cursor IDE', category: 'Tools', level: 98, experienceYears: 4, description: 'AI-assisted pair-programming, multi-language debuggers, custom extensions, and terminal integration.', relatedProjects: ['melanoma-cnn', 'smart-video-conf'], position3D: [0.4, 0.8, 2.6], color: '#007acc' },
    { id: 'jupyter', name: 'JupyterLab & Google Colab', category: 'Tools', level: 95, experienceYears: 3, description: 'Interactive GPU/TPU notebook computing, markdown documentation, rapid ML experimentation, and visualization.', relatedProjects: ['melanoma-cnn'], position3D: [-0.6, 0.9, 2.5], color: '#f37626' },
    { id: 'postman', name: 'Postman API Testing', category: 'Tools', level: 94, experienceYears: 3, description: 'REST and GraphQL API endpoint testing, automated collection runners, environment variables, and assertions.', relatedProjects: ['smart-video-conf'], position3D: [0.1, 0.3, 2.8], color: '#ff6c37' },
    { id: 'anaconda', name: 'Anaconda Navigator & Spyder', category: 'Tools', level: 90, experienceYears: 3, description: 'Conda virtual environment management, package dependency resolution, and scientific Python distribution.', relatedProjects: ['melanoma-cnn'], position3D: [-0.4, 0.2, 2.7], color: '#44a833' },
    { id: 'linux-bash', name: 'Linux (Ubuntu/RedHat) & Bash', category: 'Tools', level: 94, experienceYears: 4, description: 'UNIX filesystem management, shell script automation, pipe redirection, cron jobs, and SSH server administration.', relatedProjects: ['cyber-sentinel'], position3D: [-0.7, -0.3, 2.6], color: '#fcc624' },
    { id: 'powershell', name: 'PowerShell Scripting', category: 'Tools', level: 88, experienceYears: 2, description: 'Cmdlets, automated system administration, module scripting, and Windows environment configuration.', relatedProjects: ['symbiosis-infra'], position3D: [0.3, -0.2, 2.7], color: '#012456' },
    { id: 'networking', name: 'LAN & Network Admin', category: 'Tools', level: 90, experienceYears: 2, description: 'Local Area Network (LAN) setup, IP routing, connectivity troubleshooting, and hardware/system maintenance.', relatedProjects: ['symbiosis-infra'], position3D: [-0.8, 0.4, 2.4], color: '#0284c7' }
  ],

  projects: [
    {
      id: 'melanoma-cnn',
      title: 'ISIC Melanoma Lesion Cell Classification Model',
      tagline: 'Deep Learning CNN Skin Cancer Lesion Detection System',
      description: 'A high-precision Convolutional Neural Network (CNN) skin cancer detection model developed with PyTorch under Prof. Dr. Surya Prakash at IIT Indore.',
      longDescription: 'Engineered as a Major B.Tech project under the academic guidance of Prof. Dr. Surya Prakash at IIT Indore, this project implements a specialized CNN architecture using PyTorch for the accurate detection and classification of Melanoma skin cancer cells from the international ISIC dataset. The model architecture is optimized using systematic hyperparameter tuning, Grad-CAM heat map visual interpretability, and early stopping to prevent overfitting.',
      category: 'AI',
      technologies: ['Python', 'PyTorch', 'CNN', 'Deep Learning', 'NumPy', 'Matplotlib', 'Seaborn', 'OpenCV'],
      keyFeatures: [
        'Achieved 97.92% Training Accuracy and 84.69% Test Accuracy on ISIC skin lesion dataset',
        'Validation F1-score of 0.7889 for balanced precision-recall melanoma cell classification',
        'Visual interpretability integration with Grad-CAM heat maps to localize malignant lesion regions',
        'Optimized PyTorch training pipeline with early stopping, dynamic learning rate scheduling, and data augmentation'
      ],
      architecture: 'Deep Convolutional Neural Network (CNN) pipeline implemented in PyTorch with custom convolutional feature extraction layers, batch normalization, dropout regularization, and Softmax classification head.',
      githubUrl: 'https://github.com/mrityunjaydwived/isic-melanoma-classification',
      liveDemoUrl: 'https://github.com/mrityunjaydwived/isic-melanoma-classification',
      metrics: [
        { label: 'Train Accuracy', value: '97.92%' },
        { label: 'Test Accuracy', value: '84.69%' },
        { label: 'Validation F1', value: '0.7889' }
      ],
      accentColor: '#8b5cf6',
      featured: true
    },
    {
      id: 'smart-video-conf',
      title: 'Video Conferencing Smart Web Application',
      tagline: 'Real-time Peer-to-Peer Collaborative Video & Messaging Platform',
      description: 'A scalable MERN & WebRTC real-time video conferencing application with Socket.io, React, Node.js, and Firebase Auth built under Prof. Dr. Abhishek Shrivastava at IIT Indore.',
      longDescription: 'Developed under the mentorship of Prof. Dr. Abhishek Shrivastava at IIT Indore for Service Oriented Systems, this comprehensive real-time web application delivers high-definition peer-to-peer video streaming, screen sharing, real-time group & private chat, and scheduled meeting rooms. Secured with Firebase Authentication for zero-trust access and backed by MongoDB for persistent metadata and user profiles.',
      category: 'Web',
      technologies: ['WebRTC', 'React.js', 'Node.js', 'Express.js', 'Socket.io', 'MongoDB', 'Firebase Authentication', 'Tailwind CSS'],
      keyFeatures: [
        'Peer-to-peer HD video/audio streaming and low-latency screen sharing powered by WebRTC',
        'Real-time interactive group messaging and room broadcasting using Socket.io event channels',
        'Secure multi-provider user authentication and session management via Firebase Authentication',
        'Meeting scheduling, room code generation, participant controls, and persistent MongoDB storage'
      ],
      architecture: 'Distributed Service-Oriented Architecture (SOA) with React frontend, Node.js/Express signaling server, Socket.io WebSocket channels, WebRTC media streams, and MongoDB/Firebase backend.',
      githubUrl: 'https://github.com/mrityunjaydwived/smart-video-conferencing-app',
      liveDemoUrl: 'https://github.com/mrityunjaydwived/smart-video-conferencing-app',
      metrics: [
        { label: 'Latency', value: '< 45ms' },
        { label: 'Video Quality', value: '1080p HD' },
        { label: 'Security SLA', value: 'Firebase 100%' }
      ],
      accentColor: '#06b6d4',
      featured: true
    },
    {
      id: 'ai-assistant-automation',
      title: 'AI Assistant for Smart Automation',
      tagline: 'Intelligent Voice & Generative AI Desktop Automation System',
      description: 'Hands-free voice virtual assistant combining speech recognition, offline TTS, and Google Generative AI (Gemini API) for natural language workflow automation.',
      longDescription: 'A versatile desktop automation assistant built in Python. Users can execute hands-free commands to open applications, control media, stream music, fetch real-time news, and conduct open-ended conversational inquiry. Utilizes SpeechRecognition for audio ingestion, pyttsx3 for speech synthesis, and the Google Gemini Generative AI API for intent parsing and context-aware natural language responses.',
      category: 'Python',
      technologies: ['Python', 'Google Gemini API', 'SpeechRecognition', 'pyttsx3', 'Generative AI', 'REST APIs'],
      keyFeatures: [
        'Hands-free speech-to-text audio ingestion and clear offline text-to-speech output using pyttsx3',
        'Intelligent natural language understanding and multi-step command analysis via Google Gemini API',
        'Automated OS application launching, web browsing, music playback, and system diagnostics',
        'Real-time news headlines, weather forecasts, and web search integration via third-party APIs'
      ],
      architecture: 'Asynchronous event loop listening for wake words, converting speech to text tokens, dispatching queries to Google Gemini Generative AI API, and triggering OS automation handlers.',
      githubUrl: 'https://github.com/mrityunjaydwived/ai-assistant-smart-automation',
      liveDemoUrl: 'https://github.com/mrityunjaydwived/ai-assistant-smart-automation',
      metrics: [
        { label: 'Voice Latency', value: '< 250ms' },
        { label: 'AI Engine', value: 'Gemini 1.5' },
        { label: 'Voice Accuracy', value: '96.5%' }
      ],
      accentColor: '#38bdf8',
      featured: true
    },
    {
      id: 'cyber-sentinel',
      title: 'Cyber Sentinel Security Audit & Port Inspector',
      tagline: 'Automated Network Vulnerability Assessment & Packet Sniffer',
      description: 'A cybersecurity reconnaissance and packet auditing suite built with Python, Nmap, and Scapy for scanning vulnerable services and detecting anomalous traffic.',
      longDescription: 'Engineered for proactive network defense and penetration testing, Cyber Sentinel performs multi-threaded TCP/UDP port scans, fingerprinting operating systems, identifying outdated daemon versions, and analyzing raw network packets to discover ARP poisoning and unauthorized broadcast transmissions.',
      category: 'Software',
      technologies: ['Python', 'Nmap', 'Scapy', 'Wireshark', 'Network Security', 'Cryptography', 'Linux'],
      keyFeatures: [
        'Multi-threaded port reconnaissance with automated service banner grabbing',
        'Real-time packet inspection to alert against unencrypted credential transmissions',
        'Automated vulnerability reports categorized by CVSS severity scores',
        'Seamless export to JSON and formatted terminal audit tables'
      ],
      architecture: 'Modular Python security toolkit interfacing with libpcap/Scapy socket handlers and Nmap scanning engines.',
      githubUrl: 'https://github.com/mrityunjaydwived/cyber-sentinel-scanner',
      liveDemoUrl: 'https://github.com/mrityunjaydwived/cyber-sentinel-scanner',
      metrics: [
        { label: 'Scan Speed', value: '1000 ports/s' },
        { label: 'Vulnerability Accuracy', value: '99.1%' },
        { label: 'Detection Modules', value: '12 Active' }
      ],
      accentColor: '#f43f5e',
      featured: true
    },
    {
      id: 'estateiq',
      title: 'EstateIQ – Smart Property Valuation & Real Estate Finder',
      tagline: 'Full-Stack Property Rate Discovery & Algorithmic Valuation Portal',
      description: 'A responsive MERN stack real estate discovery and automated property rate valuation platform with interactive geo-mapping, price trend analytics, and algorithmic valuation estimators.',
      longDescription: 'Developed as an end-to-end full-stack property technology solution, EstateIQ bridges real estate searching with predictive price intelligence. Users can search and filter verified residential and commercial properties by locality, carpet area, furnishing status, and price brackets. The platform features an integrated valuation algorithm that calculates average rate per sq.ft., historical price appreciation curves, and neighborhood quality metrics, backed by a high-throughput Node/Express REST API and MongoDB spatial geospatial indexes.',
      category: 'Web',
      technologies: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'JavaScript (ES6+)', 'Tailwind CSS', 'Leaflet Maps', 'REST APIs'],
      keyFeatures: [
        'Interactive geospatial property search with dynamic radius filtering and marker clusters',
        'Automated algorithmic property rate calculator evaluating price per sq.ft. trends and locality index',
        'Advanced faceted filtering by BHK, price brackets, verified builder tags, and carpet area',
        'Seller & agent dashboard for managing property listings, virtual photo galleries, and inquiry leads'
      ],
      architecture: 'MERN microservices architecture with React single-page frontend, Express REST API, MongoDB geospatial ($geoWithin) indexing, and JWT authenticated user sessions.',
      githubUrl: 'https://github.com/mrityunjaydwived/estateiq-property-finder',
      liveDemoUrl: 'https://github.com/mrityunjaydwived/estateiq-property-finder',
      metrics: [
        { label: 'Listings Indexed', value: '15,000+' },
        { label: 'Valuation Precision', value: '94.2%' },
        { label: 'Search Query SLA', value: '< 85ms' }
      ],
      accentColor: '#06b6d4',
      featured: true
    },
    {
      id: 'cps-elevator-simulator',
      title: 'Cyber-Physical IoT Elevator Simulator & Digital Twin',
      tagline: 'Formal Cyber-Physical Elevator Simulation under IIT Indore Mentorship',
      description: 'A Cyber-Physical System (CPS) and IoT-driven elevator simulator engineered under the academic guidance of Prof. Dr. Gourinath Banda at IIT Indore, modeling discrete scheduling, sensor telemetry, and fault-tolerant interlocks.',
      longDescription: 'Formulated and developed under the academic research mentorship of Prof. Dr. Gourinath Banda at the Indian Institute of Technology (IIT), Indore, this project implements a rigorous Cyber-Physical System (CPS) elevator simulator. The architecture integrates discrete-event control logic, kinematic velocity-acceleration mathematical profiles, multi-car optimal hall call scheduling, and continuous IoT sensor telemetry over MQTT. It simulates realistic physical parameters (cable tension, brake torque, motor heat dissipation, dynamic payload weights) and executes formal safety verification protocols to ensure zero fail-unsafe states.',
      category: 'IoT',
      technologies: ['C / C++', 'Python', 'Cyber-Physical Systems (CPS)', 'IoT Sensors', 'MQTT', 'WebSockets', 'Digital Twin', 'FreeRTOS'],
      keyFeatures: [
        'Academic guidance under Prof. Dr. Gourinath Banda (IIT Indore) for formal CPS discrete modeling',
        'Kinematic multi-floor elevator physics simulation with acceleration profiles and load dynamics',
        'Hall-call scheduling optimization minimizing passenger wait-times during peak arrival bursts',
        'IoT telemetry pipeline transmitting motor temperature, vibration, and door interlocks via MQTT',
        'Automated fault injection engine verifying emergency braking and fail-safe door interlock guarantees'
      ],
      architecture: 'Hybrid Cyber-Physical discrete event engine written in C++ and Python with MQTT pub/sub telemetry streams, WebSocket visualization dashboard, and formal safety monitor routines.',
      githubUrl: 'https://github.com/mrityunjaydwived/cps-iot-elevator-simulator',
      liveDemoUrl: 'https://github.com/mrityunjaydwived/cps-iot-elevator-simulator',
      metrics: [
        { label: 'Safety SLA', value: '100% Zero-Fail' },
        { label: 'Wait Time Cut', value: '34%' },
        { label: 'Telemetry Cycle', value: '10ms' }
      ],
      accentColor: '#a855f7',
      featured: true
    },
    {
      id: 'agriflow-furrow-irrigation',
      title: 'AgriFlow – IoT Automated Furrow Irrigation & Soil Hydration',
      tagline: 'Precision Agriculture IoT Smart Soil Sensor & Valve Actuation System',
      description: 'An automated furrow irrigation IoT cyber-physical system using distributed soil moisture sensor telemetry, solar micro-controllers, and closed-loop solenoid valve actuation to optimize crop hydration.',
      longDescription: 'Designed to tackle agricultural water scarcity and soil erosion, AgriFlow is an automated precision irrigation system tailored specifically for furrow farming. Multi-depth capacitance soil moisture probes deployed along agricultural furrows stream volumetric water content (VWC) and soil temperature telemetry to an ESP32 edge gateway. The edge controller executes an adaptive PID irrigation algorithm that automatically opens and closes solar-powered solenoid valves at furrow heads, eliminating water run-off and maintaining root-zone moisture within optimal agronomical thresholds.',
      category: 'IoT',
      technologies: ['IoT Sensors', 'ESP32 / Arduino', 'Python', 'MQTT', 'C / C++', 'Node.js', 'SQLite', 'LoRaWAN'],
      keyFeatures: [
        'Distributed wireless soil moisture and temperature telemetry along agricultural furrow paths',
        'Closed-loop automated solenoid valve actuation based on real-time soil field capacity thresholds',
        'Ultra-low-power sleep cycles and solar harvesting yielding autonomous field operation',
        'Web dashboard providing farmers with real-time furrow moisture maps, flow volume logs, and battery diagnostics'
      ],
      architecture: 'Edge micro-controllers running FreeRTOS with sensor ADC reading, MQTT packet transmission via LoRa/Wi-Fi to a Node.js telemetry server with SQLite time-series logging.',
      githubUrl: 'https://github.com/mrityunjaydwived/agriflow-iot-furrow-irrigation',
      liveDemoUrl: 'https://github.com/mrityunjaydwived/agriflow-iot-furrow-irrigation',
      metrics: [
        { label: 'Water Conserved', value: '42%' },
        { label: 'Battery Life', value: '60+ Days Solar' },
        { label: 'Telemetry Range', value: '2.5 km' }
      ],
      accentColor: '#10b981',
      featured: true
    },
    {
      id: 'photostash-camera-vault',
      title: 'Photostash – WebRTC Camera Web App & Real-Time Photo Vault',
      tagline: 'Browser Camera Capture, Real-time Visual Filters & Cloud Storage Vault',
      description: 'A responsive web camera application utilizing HTML5 navigator.mediaDevices, WebRTC video stream processing, real-time canvas visual shaders, and local/cloud photo persistence.',
      longDescription: 'Photostash provides an instantaneous in-browser digital photography studio. Utilizing modern WebRTC MediaDevices APIs, the application accesses desktop webcams and mobile camera arrays (front/rear facing) with zero plugin dependencies. Users can apply real-time canvas shaders (retro monochrome, cyber neon, high-contrast HDR, vintage film), trigger an ultra-low-latency shutter capture, perform client-side image optimization, and store captured photos directly into local IndexedDB and cloud object vaults with instant download and sharing.',
      category: 'Web',
      technologies: ['JavaScript (ES6+)', 'WebRTC MediaDevices API', 'HTML5 Canvas', 'React.js', 'IndexedDB', 'Node.js', 'Tailwind CSS'],
      keyFeatures: [
        'Direct browser camera feed ingestion via navigator.mediaDevices with multi-camera selection',
        'Real-time 60fps HTML5 Canvas filter pipeline (Grayscale, Cyber Neon, Sepia, Vignette)',
        'Zero-latency shutter capture with instant thumbnail preview and EXIF metadata generation',
        'Dual storage architecture: offline IndexedDB photo vault + cloud backup synchronization'
      ],
      architecture: 'Client-side WebRTC MediaStream connected to an off-screen HTML5 Canvas pipeline, with client-side blob compression, local IndexedDB persistence, and Express/Multer cloud upload endpoints.',
      githubUrl: 'https://github.com/mrityunjaydwived/photostash-camera-vault',
      liveDemoUrl: 'https://github.com/mrityunjaydwived/photostash-camera-vault',
      metrics: [
        { label: 'Shutter Latency', value: '< 15ms' },
        { label: 'Resolution', value: '1080p FHD' },
        { label: 'Compression', value: '60% Lossless' }
      ],
      accentColor: '#f59e0b',
      featured: true
    },
    {
      id: 'finpulse-analytics',
      title: 'FinPulse – Financial Market Volatility & Sentiment Data Analytics',
      tagline: 'Quantitative Stock Trend Analytics, Risk Modeling & Power BI Dashboards',
      description: 'An end-to-end data analytics and quantitative market intelligence platform analyzing historical stock volatility, volume spikes, and financial news sentiment using Python, SQL, and Power BI.',
      longDescription: 'FinPulse transforms millions of raw market price records into actionable investment intelligence. Built with Python, Pandas, and SQL databases, the pipeline extracts historical daily and intraday trade data for equities, computes key quantitative indicators (rolling volatility, 50/200-day simple moving average crossovers, Sharpe ratios, and Value-at-Risk), and integrates natural language sentiment scoring on financial news headlines. All analytical metrics are synthesized into interactive Microsoft Power BI and Plotly executive dashboards.',
      category: 'Data',
      technologies: ['Python', 'Pandas', 'NumPy', 'SQL', 'Microsoft Power BI Desktop', 'Plotly', 'DAX', 'Matplotlib'],
      keyFeatures: [
        'Automated ETL pipeline ingesting 2.5M+ financial equity price and trading volume records',
        'Quantitative risk metrics modeling: 30-day rolling Beta, Sharpe Ratio, Bollinger Bands, and Value-at-Risk (VaR)',
        'Sentiment analysis pipeline correlating financial news sentiment scores against intraday price trends',
        'Interactive Microsoft Power BI executive dashboard with dynamic slicers, DAX time-intelligence, and risk frontiers'
      ],
      architecture: 'Python ETL extraction and data cleansing pipeline connected to a relational SQL analytics warehouse, feeding pre-aggregated analytical models into Microsoft Power BI and Plotly visualization engines.',
      githubUrl: 'https://github.com/mrityunjaydwived/finpulse-market-analytics',
      liveDemoUrl: 'https://github.com/mrityunjaydwived/finpulse-market-analytics',
      metrics: [
        { label: 'Records Ingested', value: '2.5M+' },
        { label: 'Sharpe Precision', value: '98.4%' },
        { label: 'Query Latency', value: '< 110ms' }
      ],
      accentColor: '#10b981',
      featured: true
    },
    {
      id: 'churrolytics-retention',
      title: 'Churrolytics – Customer Churn Prediction & Cohort Analytics',
      tagline: 'Machine Learning Churn Classification & Customer Lifetime Value Analytics',
      description: 'A data analytics and predictive modeling suite analyzing e-commerce customer retention, cohort churn decay curves, RFM segmentation, and predictive retention modeling in Power BI & Scikit-learn.',
      longDescription: 'Churrolytics was created to diagnose and reduce revenue loss from customer attrition in subscription and high-volume e-commerce businesses. Operating across extensive multi-year transactional datasets, the analytical pipeline executes customer cohort segmentation, computes Recency-Frequency-Monetary (RFM) distributions, and trains machine learning classifiers (Random Forest & Logistic Regression) to pinpoint high-risk churn customers before they lapse. Findings are encapsulated in an interactive Power BI and Seaborn reporting suite with strategic retention recommendations.',
      category: 'Data',
      technologies: ['Python', 'Pandas', 'Scikit-learn', 'Microsoft Power BI Desktop', 'DAX', 'Seaborn', 'SQL', 'Matplotlib'],
      keyFeatures: [
        'Cohort retention matrix analyzing 48 monthly customer cohorts and identifying retention cliff drop-offs',
        'RFM (Recency, Frequency, Monetary) behavioral scoring segmenting high-value champions vs. at-risk buyers',
        'Predictive ML churn classification model (Random Forest) achieving 0.89 ROC-AUC with SHAP feature interpretability',
        'Comprehensive Power BI executive dashboard calculating potential revenue at risk and targeted intervention strategies'
      ],
      architecture: 'Pandas data cleansing and feature engineering pipeline passing engineered customer metrics into Scikit-learn classification algorithms and SQL analytics schemas, visualized via Power BI DAX measures.',
      githubUrl: 'https://github.com/mrityunjaydwived/churrolytics-cohort-analytics',
      liveDemoUrl: 'https://github.com/mrityunjaydwived/churrolytics-cohort-analytics',
      metrics: [
        { label: 'ROC-AUC Score', value: '0.89' },
        { label: 'Cohorts Tracked', value: '48 Months' },
        { label: 'Risk Identified', value: '$180K+' }
      ],
      accentColor: '#3b82f6',
      featured: true
    }
  ],

  experience: [
    {
      id: 'exp-symbiosis',
      company: 'Symbiosis Foundation (Symbiosis University of Applied Sciences)',
      role: 'Technical Trainer – Computer Science Engineering',
      location: 'Indore, Madhya Pradesh, India',
      period: 'Sept 2025 – Present',
      type: 'Technical Instruction & IT Administration',
      description: 'Delivering structured technical training to engineering students in core Computer Science domains while managing network infrastructure and campus computer laboratory clusters.',
      responsibilities: [
        'Conducted hands-on training sessions in core Computer Science subjects including programming (Python, C/C++, Java), Data Structures, and Algorithms.',
        'Managed and supported institutional network administration tasks including LAN setup, system configurations, and connectivity troubleshooting.',
        'Assisted in IT infrastructure management, including system maintenance, software deployment, server security, and laboratory network resource coordination.',
        'Designed practical coding assignments, problem-solving workshops, and evaluated student technical projects.'
      ],
      achievements: [
        'Trained over 180+ students with practical problem-solving labs in Data Structures, MERN, and Python programming.',
        'Maintained 99.8% uptime across campus computer laboratory networks and LAN infrastructure.',
        'Recognized for exceptional clarity in technical instruction and hands-on algorithm coaching.'
      ],
      technologies: ['Python', 'C/C++', 'Java', 'Data Structures (DSA)', 'LAN Setup', 'System Configuration', 'Linux', 'Network Troubleshooting']
    },
    {
      id: 'exp-iit-indore',
      company: 'Indian Institute of Technology (IIT), Indore',
      role: 'UG-Inbound Research Scholar (8th Semester)',
      location: 'Indore, Madhya Pradesh, India',
      period: 'Jan 2025 – May 2025',
      type: 'Academic Fellowship & Research',
      description: 'Selected in Top 5 of competitive Inbound Examination and Interview to pursue 8th semester academic research at IIT Indore under faculty mentorship.',
      responsibilities: [
        'Developing the ISIC Melanoma Skin Cancer Classification Model using PyTorch and CNNs under Prof. Dr. Surya Prakash.',
        'Building the Service-Oriented Real-Time Video Conferencing platform with WebRTC and Socket.io under Prof. Dr. Abhishek Shrivastava.',
        'Engaging in advanced coursework and research seminars in Computer Vision, Deep Learning, and Distributed Web Architectures.'
      ],
      achievements: [
        'Achieved 97.92% training accuracy on the ISIC Melanoma skin lesion classification dataset with Grad-CAM visualization.',
        'Ranked among the Top 5 candidates selected across the entire competitive Inbound Examination pool.'
      ],
      technologies: ['PyTorch', 'Deep Learning', 'Computer Vision', 'WebRTC', 'Socket.io', 'React.js', 'Node.js', 'MongoDB']
    }
  ],

  services: [
    {
      id: 'mern-stack-dev',
      title: 'MERN Full-Stack Development',
      tagline: 'High-Concurrency SPAs, Real-Time Web & APIs',
      description: 'Building reactive single-page applications and scalable microservices with MongoDB, Express.js, React.js, and Node.js. Integrating WebRTC video, Socket.io chat, and cloud hosting.',
      iconType: 'web',
      deliverables: [
        'Full-stack MERN single-page web applications with Tailwind CSS',
        'Real-time WebSockets & WebRTC peer-to-peer streaming engines',
        'Secure Node.js & Express RESTful APIs with JWT authentication',
        'MongoDB schema modeling, indexing, and high-performance aggregation'
      ],
      technologies: ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'WebRTC', 'Socket.io'],
      idealFor: 'Startups and organizations needing modern, fast, and scalable collaborative web platforms.'
    },
    {
      id: 'ai-deep-learning',
      title: 'AI / ML & Deep Learning Engineering',
      tagline: 'Computer Vision, CNNs & Generative AI Models',
      description: 'Engineering accurate deep learning models in PyTorch and TensorFlow for image classification, medical diagnostics, and integrating Google Gemini APIs for smart natural language automation.',
      iconType: 'data',
      deliverables: [
        'CNN image classification & segmentation pipelines (PyTorch/TensorFlow)',
        'Model hyperparameter tuning, Grad-CAM heatmaps & evaluation matrices',
        'Google Gemini Generative AI natural language automation systems',
        'Data preprocessing, augmentation, and ETL transformations (NumPy, Pandas)'
      ],
      technologies: ['Python', 'PyTorch', 'TensorFlow', 'Gemini API', 'NumPy', 'OpenCV'],
      idealFor: 'Healthcare tech, research teams, and startups building intelligent computer vision solutions.'
    },
    {
      id: 'cybersecurity-audits',
      title: 'Cybersecurity & Penetration Audits',
      tagline: 'Vulnerability Scanning, OWASP & Network Hardening',
      description: 'Conducting network vulnerability assessments, packet inspections, and hardening web architectures against OWASP Top 10 vulnerabilities with zero-trust authentication protocols.',
      iconType: 'software',
      deliverables: [
        'Comprehensive network vulnerability scanning with Nmap & Wireshark',
        'Web application security audits against XSS, SQLi, and CSRF attacks',
        'Zero-trust authentication implementation (JWT, Firebase Auth, OAuth2)',
        'Linux server hardening, firewall configuration, and encryption policies'
      ],
      technologies: ['Network Security', 'Wireshark', 'Nmap', 'OWASP Top 10', 'Cryptography', 'Linux'],
      idealFor: 'Enterprises and teams seeking to fortify their digital assets against malicious exploits.'
    },
    {
      id: 'data-analytics',
      title: 'Data Analytics & Business Intelligence',
      tagline: 'Exploratory Data Analysis, SQL & Predictive Insights',
      description: 'Transforming messy business datasets into clean, visual insights and predictive statistical models using Python (Pandas, NumPy, Seaborn) and relational SQL database queries.',
      iconType: 'data',
      deliverables: [
        'Exploratory Data Analysis (EDA) and data cleansing workflows',
        'Statistical distribution analysis and hypothesis testing',
        'Interactive dashboards and visual trend plots with Matplotlib & Seaborn',
        'Complex SQL queries, ETL pipelines, and performance optimization'
      ],
      technologies: ['Pandas', 'NumPy', 'SQL', 'Matplotlib', 'Seaborn', 'Power BI'],
      idealFor: 'Companies seeking data-driven decisions and automated business intelligence reporting.'
    },
    {
      id: 'python-automation',
      title: 'Python Automation & AI Agents',
      tagline: 'Voice Assistants, Workflow Scripting & APIs',
      description: 'Developing custom Python automation scripts, voice virtual assistants, desktop utilities, and RESTful APIs to eliminate manual tasks and streamline operations.',
      iconType: 'python',
      deliverables: [
        'Voice-enabled AI virtual assistants with SpeechRecognition & pyttsx3',
        'Automated web scraping, API data extraction, and reporting pipelines',
        'Cross-platform desktop utilities and system monitoring daemons',
        'RESTful API microservices with robust error handling'
      ],
      technologies: ['Python', 'Gemini API', 'pyttsx3', 'SpeechRecognition', 'REST APIs'],
      idealFor: 'Teams looking to automate workflows and deploy intelligent Python tools.'
    },
    {
      id: 'technical-training',
      title: 'Technical Training & Mentorship',
      tagline: 'Practical Computer Science & DSA Instruction',
      description: 'Delivering structured, hands-on programming training in Data Structures, Algorithms, MERN Stack, Python, C/C++, and cybersecurity fundamentals.',
      iconType: 'training',
      deliverables: [
        'Comprehensive curriculum for DSA, C/C++, Python, and MERN Web Development',
        'Live interactive coding labs and whiteboarding problem-solving sessions',
        'Code review feedback, optimization tips, and competitive programming guidance',
        'Student project mentoring from concept to deployment'
      ],
      technologies: ['Data Structures (DSA)', 'MERN Stack', 'Python', 'C/C++', 'Algorithms'],
      idealFor: 'Colleges, universities, coding bootcamps, and student cohorts.'
    }
  ],

  education: [
    {
      degree: 'Bachelor of Technology (B.Tech)',
      field: 'Computer Science & Engineering (CSE)',
      institution: 'Government Engineering College (Rewa Engineering College)',
      location: 'Rewa, Madhya Pradesh, India',
      period: '2021 - 2025',
      grade: 'CGPA: 8.66 / 10.0 — Gold Medal Winner in Engineering Batch',
      highlights: [
        'Gold Medal Winner for Academic Excellence across the Engineering Batch (2021-25)',
        'Selected in Top 5 of the IIT Indore Inbound Examination to pursue final semester at IIT Indore',
        'Core Coursework: Data Structures & Algorithms, Deep Learning, Operating Systems, Database Management Systems, Computer Networks, Network Security'
      ]
    },
    {
      degree: 'UG-Inbound Research Scholar',
      field: 'Computer Science (8th Semester)',
      institution: 'Indian Institute of Technology (IIT), Indore',
      location: 'Indore, Madhya Pradesh, India',
      period: 'Jan 2025 - May 2025',
      grade: 'Ranked in Top 5 of IIT Indore Inbound Examination & Interview',
      highlights: [
        'Major B.Tech Research: ISIC Melanoma Skin Cancer Classification Model using PyTorch & CNNs under Prof. Dr. Surya Prakash',
        'Service-Oriented System Project: Real-time WebRTC Video Conferencing App under Prof. Dr. Abhishek Shrivastava',
        'Advanced research seminars in Computer Vision, Medical Imaging, and Real-Time Distributed Web Systems'
      ]
    },
    {
      degree: 'Senior Secondary (12th Board)',
      field: 'Mathematics, Physics & Chemistry',
      institution: 'Board of Secondary Education, Madhya Pradesh',
      location: 'Madhya Pradesh, India',
      period: '2020 - 2021',
      grade: 'Percentage: 93.60%',
      highlights: [
        'Ranked among the top academic percentile across the State Board',
        'Distinction in Mathematics, Physics, and Chemistry'
      ]
    },
    {
      degree: 'High School (10th Board)',
      field: 'General Sciences & Mathematics',
      institution: 'Board of Secondary Education, Madhya Pradesh',
      location: 'Madhya Pradesh, India',
      period: '2018 - 2019',
      grade: 'Percentage: 94.40%',
      highlights: [
        'Top academic achiever with 94.40% aggregate honors',
        'Excellence in Mathematics and Science'
      ]
    }
  ],

  certifications: [
    {
      name: 'Gold Medal for Academic Excellence in Engineering (2021-25)',
      issuer: 'Rewa Engineering College / Rajiv Gandhi Proudyogiki Vishwavidyalaya',
      year: '2025',
      badgeId: 'REC-GOLD-2025'
    },
    {
      name: 'IIT Indore Inbound Fellowship Selection (Top 5 Rank)',
      issuer: 'Indian Institute of Technology, Indore',
      year: '2025',
      badgeId: 'IITI-INBOUND-05'
    },
    {
      name: 'Deep Learning & Neural Networks in PyTorch',
      issuer: 'AI Research Specialization',
      year: '2024',
      badgeId: 'DL-PYTORCH-994'
    },
    {
      name: 'Full-Stack MERN & Real-Time WebRTC Systems',
      issuer: 'Advanced Web Engineering',
      year: '2024',
      badgeId: 'FSD-WEBRTC-812'
    },
    {
      name: 'Cybersecurity Fundamentals & Network Defense',
      issuer: 'Information Security Council',
      year: '2024',
      badgeId: 'SEC-NET-402'
    }
  ],

  achievements: [
    "In Top 5 of IIT Indore Inbound Examination and Interview to pursue 8th semester academic research at IIT Indore (Jan 2025 - May 2025).",
    "Gold Medal Winner in Engineering Batch (2021-25) at Government Engineering College, Rewa (8.66 CGPA).",
    "Developed CNN-based Melanoma cell detection model achieving 97.92% train accuracy and 84.69% test accuracy.",
    "Technical Trainer in Computer Science Engineering at Symbiosis Foundation (Symbiosis University of Applied Sciences).",
    "450+ LeetCode problems solved with top streak and proficiency in Graphs, Dynamic Programming, and Tree algorithms.",
    "Scored 93.60% in Senior Secondary (12th Board) and 94.40% in High School (10th Board)."
  ],

  contactInfo: {
    title: "Let's Build Something Revolutionary Together.",
    subtitle: "Whether you need a full-scale MERN application, an AI/Deep Learning model, a cybersecurity penetration audit, or data analysis, let's connect directly.",
    directEmail: "dwivedibandhavesh@gmail.com",
    phone: "+91-7489467539",
    location: "Indore / Rewa, Madhya Pradesh, India",
    coordinates: { lat: 22.7196, lng: 75.8577 }, // Indore coordinates
    socials: [
      { name: 'LinkedIn', url: 'https://www.linkedin.com/in/mrityunjaydwivedi09', handle: 'mrityunjaydwivedi09', icon: 'Linkedin' },
      { name: 'GitHub', url: 'https://github.com/mrityunjaydwived', handle: 'mrityunjaydwived', icon: 'Github' },
      { name: 'LeetCode', url: 'https://leetcode.com/u/Mrityunjay_dwivedi/', handle: 'Mrityunjay_dwivedi', icon: 'Code' },
      { name: 'Twitter / X', url: 'https://x.com/mrityunjayvl1', handle: '@mrityunjayvl1', icon: 'Twitter' },
      { name: 'Instagram', url: 'https://www.instagram.com/mrityunjaydwivedi01', handle: '@mrityunjaydwivedi01', icon: 'Instagram' },
      { name: 'YouTube', url: 'https://www.youtube.com/@MrMrityunjayDwivedi', handle: '@MrMrityunjayDwivedi', icon: 'Youtube' },
      { name: 'Facebook', url: 'https://www.facebook.com/mrityunjaydwivedi01', handle: 'Mrityunjay Dwivedi', icon: 'Facebook' },
      { name: 'Email', url: 'mailto:dwivedibandhavesh@gmail.com', handle: 'dwivedibandhavesh@gmail.com', icon: 'Mail' }
    ]
  },

  githubRepos: [
    {
      id: 'repo-homesearch',
      name: 'HomeSearch-Website',
      description: 'Responsive real estate and property discovery website allowing users to browse listings and inspect property rates.',
      permission: 'Public',
      language: 'HTML / CSS',
      stars: 0,
      forks: 0,
      url: 'https://github.com/Mrityunjaydwived/HomeSearch-Website',
      updatedAt: 'June 2025',
      topics: ['real-estate', 'property-search', 'html5', 'css3', 'web-design']
    },
    {
      id: 'repo-camera-web',
      name: 'Camera-Web',
      description: 'Web camera application utilizing browser media streams to capture photos, preview camera feeds, and store pictures.',
      permission: 'Public',
      language: 'HTML / JavaScript',
      stars: 0,
      forks: 0,
      url: 'https://github.com/Mrityunjaydwived/Camera-Web',
      updatedAt: 'April 2025',
      topics: ['camera-web', 'media-devices', 'photo-capture', 'javascript', 'frontend']
    },
    {
      id: 'repo-jarvis',
      name: 'JARVIS-AI-ASSISTANCE',
      description: 'Python-based voice AI virtual assistant which answers questions, streams news, and opens desktop tabs & apps via voice.',
      permission: 'Public',
      language: 'Python',
      stars: 0,
      forks: 0,
      url: 'https://github.com/Mrityunjaydwived/JARVIS-AI-ASSISTANCE',
      updatedAt: 'April 2025',
      topics: ['python', 'voice-assistant', 'ai-assistance', 'speech-recognition', 'automation']
    },
    {
      id: 'repo-whatsapp-ai',
      name: 'Whatsapp_AI_Replies',
      description: 'Python-based intelligent AI chat bot automation for generating context-aware automated messaging replies.',
      permission: 'Public',
      language: 'Python',
      stars: 0,
      forks: 0,
      url: 'https://github.com/Mrityunjaydwived/Whatsapp_AI_Replies',
      updatedAt: 'April 2025',
      topics: ['python', 'ai-bot', 'chat-automation', 'nlp', 'messaging']
    },
    {
      id: 'repo-spotify',
      name: 'Spotify_Web',
      description: 'Music streaming web user interface inspired by Spotify featuring playlist browsing and responsive audio layouts.',
      permission: 'Public',
      language: 'HTML / CSS',
      stars: 0,
      forks: 0,
      url: 'https://github.com/Mrityunjaydwived/Spotify_Web',
      updatedAt: 'April 2025',
      topics: ['spotify-clone', 'music-player', 'ui-design', 'html', 'css']
    },
    {
      id: 'repo-simon-say',
      name: 'Simon_Say',
      description: 'Interactive Simon Say memory pattern web game engineered with pure JavaScript and dynamic DOM events.',
      permission: 'Public',
      language: 'JavaScript',
      stars: 0,
      forks: 1,
      url: 'https://github.com/Mrityunjaydwived/Simon_Say',
      updatedAt: 'April 2025',
      topics: ['javascript', 'simon-says', 'game-dev', 'dom-events', 'interactive']
    },
    {
      id: 'repo-interactive-pages',
      name: 'Interactive-Pages',
      description: 'Modern interactive frontend design modules showcasing modern CSS layout patterns and fluid user interfaces.',
      permission: 'Public',
      language: 'CSS / HTML',
      stars: 0,
      forks: 0,
      url: 'https://github.com/Mrityunjaydwived/Interactive-Pages',
      updatedAt: 'June 2025',
      topics: ['css', 'frontend', 'interactive-design', 'web-components']
    },
    {
      id: 'repo-todo-web',
      name: 'To_Do_Web',
      description: 'Productivity web app for tracking daily task workflows, prioritizing objectives, and managing state.',
      permission: 'Public',
      language: 'JavaScript',
      stars: 0,
      forks: 0,
      url: 'https://github.com/Mrityunjaydwived/To_Do_Web',
      updatedAt: 'April 2025',
      topics: ['todo-app', 'productivity', 'javascript', 'task-management']
    },
    {
      id: 'repo-guessing-game',
      name: 'Guessing_Game',
      description: 'Algorithmic number guessing game implemented in JavaScript with binary search logic feedback.',
      permission: 'Public',
      language: 'JavaScript',
      stars: 0,
      forks: 0,
      url: 'https://github.com/Mrityunjaydwived/Guessing_Game',
      updatedAt: 'April 2025',
      topics: ['javascript', 'guessing-game', 'algorithms', 'web-game']
    },
    {
      id: 'repo-portfolio',
      name: 'MrityunjayDwiPortfolio',
      description: 'Personal web developer portfolio repository showcasing engineering profile, skills, and projects.',
      permission: 'Public',
      language: 'HTML / CSS',
      stars: 0,
      forks: 0,
      url: 'https://github.com/Mrityunjaydwived/MrityunjayDwiPortfolio',
      updatedAt: 'January 2026',
      topics: ['portfolio', 'developer-portfolio', 'showcase', 'web']
    },
    {
      id: 'repo-profile-readme',
      name: 'Mrityunjaydwived',
      description: 'Special GitHub profile README repository presenting developer bio, tools, and GitHub telemetry.',
      permission: 'Public',
      language: 'Markdown',
      stars: 0,
      forks: 0,
      url: 'https://github.com/Mrityunjaydwived/Mrityunjaydwived',
      updatedAt: 'February 2026',
      topics: ['profile-readme', 'github-profile', 'developer-identity']
    }
  ],

  leetcodeStats: {
    username: "Mrityunjay_dwivedi",
    profileUrl: "https://leetcode.com/u/Mrityunjay_dwivedi/",
    globalRanking: 5000001,
    totalSolved: 9,
    totalQuestions: 4033,
    acceptanceRate: "58.8%",
    contestRating: 1500,
    contributionPoints: 84,
    currentStreak: 9,
    maxStreak: 15,
    difficultyBreakdown: {
      easy: { solved: 6, total: 961 },
      medium: { solved: 2, total: 2105 },
      hard: { solved: 1, total: 967 }
    },
    topicMastery: [
      { topic: 'Arrays & Hashing', solved: 4, level: 'Active Practice' },
      { topic: 'Two Pointers & Strings', solved: 2, level: 'Active Practice' },
      { topic: 'Binary Search', solved: 1, level: 'Active Practice' },
      { topic: 'Trees & Recursion', solved: 1, level: 'Active Practice' },
      { topic: 'Dynamic Programming', solved: 1, level: 'Active Practice' }
    ],
    recentSubmissions: [
      { title: 'Two Sum (Hash Map)', difficulty: 'Easy', timeAgo: 'Recently Accepted', status: 'Accepted' },
      { title: 'Valid Parentheses', difficulty: 'Easy', timeAgo: 'Recently Accepted', status: 'Accepted' },
      { title: 'Merge Two Sorted Lists', difficulty: 'Easy', timeAgo: 'Recently Accepted', status: 'Accepted' },
      { title: 'Maximum Subarray (Kadane)', difficulty: 'Medium', timeAgo: 'Recently Accepted', status: 'Accepted' },
      { title: 'Trapping Rain Water', difficulty: 'Hard', timeAgo: 'Recently Accepted', status: 'Accepted' }
    ]
  }
};
