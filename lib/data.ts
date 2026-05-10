import {
  Blocks,
  Bot,
  BrainCircuit,
  BriefcaseBusiness,
  CloudCog,
  Code2,
  DatabaseZap,
  GraduationCap,
  Layers3,
  Medal,
  Network,
  ServerCog,
  Sparkles,
  Trophy,
} from "lucide-react";

export const profile = {
  name: "Janagani Sai Varshith",
  location: "Hyderabad, Telangana, India",
  email: "saivarshithjanagani@gmail.com",
  phone: "9652122547",
  linkedin: "https://www.linkedin.com/in/janagani-sai-varshith/",
  github: "https://github.com/SaiVarshithh",
  resume:
    "https://drive.google.com/file/d/1t8Ku7AQfKdRUYYkiIpfaAV-F89UciJDE/view?usp=sharing",
  identity: "Backend Developer | Python Engineer | AI/ML Backend Engineer",
  tagline:
    "Building scalable backend systems, AI-powered workflows, distributed analytics platforms, and cloud-native infrastructure.",
};

export const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export const heroHighlights = [
  "Python backend systems",
  "AI agent workflows",
  "Distributed analytics",
  "Cloud-native infrastructure",
  "Apache Iceberg platforms",
  "Kubernetes orchestration",
];

export const skillGroups = [
  {
    title: "Languages",
    icon: Code2,
    skills: ["Python", "SQL", "Core Java"],
  },
  {
    title: "Backend & APIs",
    icon: ServerCog,
    skills: ["FastAPI", "Flask", "GraphQL", "REST APIs", "Celery", "LangChain"],
  },
  {
    title: "Data Engineering",
    icon: DatabaseZap,
    skills: ["Apache Spark", "Apache Airflow", "Apache Iceberg", "Trino", "Hive Metastore", "Pandas", "MLflow"],
  },
  {
    title: "Infrastructure & DevOps",
    icon: CloudCog,
    skills: ["Kubernetes", "Pods", "Services", "Deployments", "Secrets", "Port Forwarding", "Unix Basics", "EKS", "SKE", "Docker", "Helm", "Nginx", "Git", "NAS/PVC Storage"],
  },
  {
    title: "AI & LLM Systems",
    icon: BrainCircuit,
    skills: ["LangChain", "Ollama", "LiteLLM", "Multi-Agent Systems", "Prompt Engineering", "LLM API Integration"],
  },
  {
    title: "Databases",
    icon: Layers3,
    skills: ["PostgreSQL", "SQLite", "Iceberg Tables"],
  },
];

export const experiences = [
  {
    company: "Tata Consultancy Services",
    role: "Backend Developer / Systems Engineer",
    duration: "Current",
    location: "BFSI unit supporting Standard Chartered Bank",
    icon: BriefcaseBusiness,
    summary:
      "Engineering backend and data infrastructure for enterprise financial analytics workloads across risk, orchestration, and platform operations.",
    impact: [
      "Worked on PD, LGD, and EAD risk analytics flows with distributed processing patterns.",
      "Built and maintained Airflow orchestration using dynamic DAGs and KubernetesPodOperator expansion.",
      "Contributed to Iceberg, Hive Metastore, Spark, GraphQL, and MLflow automation in production-facing analytics systems.",
      "Supported migration thinking from AWS EKS to on-prem SKE with NAS/PVC storage replacement and minimal infrastructure design.",
      "Recently started deploying Kubernetes services in on-prem Unix server environments, working with pods, services, deployments, port-forwarding, and secrets.",
      "Designed centralized FastAPI-based ETL logging and operational visibility patterns.",
    ],
    technologies: ["Python", "Airflow", "Spark", "GraphQL", "Iceberg", "MLflow", "Kubernetes", "Unix", "FastAPI"],
  },
  {
    company: "Boujeeher",
    role: "Backend Engineering Contributor",
    duration: "Startup exposure",
    location: "UK-based startup",
    icon: Sparkles,
    summary:
      "Worked in a startup environment where practical API engineering, iteration speed, and ownership mattered more than ceremony.",
    impact: [
      "Supported backend API development and integration workflows.",
      "Built with a delivery-focused mindset across evolving product requirements.",
      "Strengthened production instincts around simple, reliable backend surfaces.",
    ],
    technologies: ["Python", "APIs", "Backend Systems", "Product Engineering"],
  },
  {
    company: "Bosch Global Software Technologies",
    role: "Intern",
    duration: "Early career",
    location: "Internship earned through IEEE National EV Hackathon win",
    icon: GraduationCap,
    summary:
      "Built early professional engineering discipline through enterprise exposure and software delivery practices.",
    impact: [
      "Received the Bosch internship opportunity after winning a National Level EV Hackathon conducted by IEEE.",
      "Gained structured engineering experience in an enterprise software environment.",
      "Built momentum toward backend specialization through hands-on technical work.",
    ],
    technologies: ["Software Engineering", "Enterprise Systems", "Engineering Discipline"],
  },
];

export const projects = [
  {
    title: "SBAP - Scenario Based Analytics Platform",
    category: "Enterprise BFSI analytics",
    icon: Network,
    overview:
      "Distributed risk analytics platform for scenario-based financial computations across countries and portfolios.",
    architecture:
      "Airflow orchestrates Spark workloads, GraphQL services expose analytics surfaces, Iceberg tables persist analytical state, and MLflow supports model lifecycle automation.",
    solved: ["Risk analytics workflows", "DQ validation", "Multi-country processing", "Scalable orchestration"],
    technologies: ["Airflow", "Spark", "GraphQL", "Iceberg", "MLflow", "Kubernetes"],
  },
  {
    title: "Analytics Backend System",
    category: "Scalable query infrastructure",
    icon: DatabaseZap,
    overview:
      "Backend architecture for deduplicated analytical views, async query execution, progress tracking, and secure exports.",
    architecture:
      "ViewResolverService and AggregationQueryBuilder coordinate SHA-256 view deduplication, while Celery schedules Trino execution for heavy analytical workloads.",
    solved: ["View deduplication", "Async execution", "Keyset pagination", "Presigned exports"],
    technologies: ["FastAPI", "Celery", "Trino", "SQL", "Object Storage"],
  },
  {
    title: "NL2SQL Agent",
    category: "AI backend workflows",
    icon: Bot,
    overview:
      "Natural-language-to-SQL system that turns business questions into database-ready query flows.",
    architecture:
      "FastAPI backend coordinates async PostgreSQL access, dual LLM support, and a Streamlit interface for fast iteration.",
    solved: ["Natural language query conversion", "Async database access", "LLM backend routing"],
    technologies: ["FastAPI", "PostgreSQL", "Streamlit", "LLMs", "Python"],
  },
  {
    title: "Deep Research Agent",
    category: "Multi-agent AI system",
    icon: BrainCircuit,
    overview:
      "Perplexity-inspired research system with specialized agents, structured schemas, and coordinated AI workflows.",
    architecture:
      "Five specialized agents coordinate through Pydantic schemas with explicit agent-to-agent communication contracts.",
    solved: ["Agent orchestration", "Research workflow coordination", "Structured communication"],
    technologies: ["Python", "Pydantic", "LLM APIs", "Agent Systems"],
  },
  {
    title: "Career-Ops",
    category: "AI productivity platform",
    icon: Code2,
    overview:
      "AI-powered career operations system for ATS optimization, company targeting, and engineering profile positioning.",
    architecture:
      "Archetype-driven profile logic, structured job targeting, and AI-assisted application workflows combine into a practical automation system.",
    solved: ["ATS optimization", "Company targeting", "Profile strategy", "AI productivity"],
    technologies: ["Python", "Automation", "LLMs", "Data Workflows"],
  },
];

export const infrastructure = [
  "Apache Iceberg table architecture",
  "Hive Metastore ecosystem",
  "Kubernetes workload orchestration",
  "Pods, services, deployments, secrets, and port-forwarding",
  "On-prem Unix server deployment basics",
  "AWS EKS to on-prem SKE migration thinking",
  "NAS/PVC storage replacement",
  "Distributed ETL workloads",
  "Centralized log aggregation",
  "Async pipelines and streaming status",
  "FastAPI operational tooling",
];

export const achievements = [
  { title: "Gold Medallist", detail: "B.Tech in Electrical and Electronics Engineering, SR University", icon: Medal },
  { title: "National EV Hackathon Winner", detail: "Won a National Level EV Hackathon conducted by IEEE", icon: Trophy },
  { title: "Bosch Internship", detail: "Earned internship opportunity at Bosch through the IEEE hackathon win", icon: BriefcaseBusiness },
  { title: "TCS Enterprise Experience", detail: "BFSI systems for Standard Chartered Bank support", icon: Blocks },
  { title: "AWS AI/ML Certification", detail: "Cloud AI and machine learning fundamentals", icon: CloudCog },
  { title: "Advanced Python Certification", detail: "Backend-focused Python engineering capability", icon: Code2 },
];

export const pinnedRepositories = ["career-ops", "nl2sql-agent", "deep-research-agent"];
