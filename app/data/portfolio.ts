// All site content lives here — edit this file to update the portfolio.

export const profile = {
  name: "Muhammad Shafiq",
  shortTitle: "AI Automation Engineer",
  title: "Senior Full-Stack & AI Automation Engineer",
  headline: "I build AI-native systems that turn manual work into reliable automation.",
  intro:
    "I design and ship LLM automation workflows, secure FastAPI backends, and Next.js products — from API contracts and data models to deployment and post-release improvement.",
  location: "Rawalpindi, Pakistan",
  availability: "Open to U.S. relocation or remote roles",
  email: "shafiq00786@hotmail.com",
  photo: "/shafiq1.png",
  logo: "/shafiq.png",
  site: "https://cv-muhammadshafiq.vercel.app",
  socials: {
    linkedin:
      "https://linkedin.com/in/muhammad-shafiq-jamstack-architect-web3-metaverse-developer-generative-ai",
    github: "https://github.com/Shafiqmuhammad",
  },
  highlights: [
    { label: "Focus", value: "LLM automation & agents" },
    { label: "Core stack", value: "Python, FastAPI, Next.js" },
    { label: "Experience", value: "Full-stack since 2021" },
    { label: "Best fit", value: "Senior / Lead engineering roles" },
  ],
};

export const navLinks = [
  { label: "Home", href: "/#home" },
  { label: "Build", href: "/#build" },
  { label: "Projects", href: "/#projects" },
  { label: "Skills", href: "/#skills" },
  { label: "Experience", href: "/#experience" },
  { label: "Certificates", href: "/#credentials" },
  { label: "Contact", href: "/#contact" },
];

export const problems = [
  {
    title: "Repetitive manual operations",
    text: "Teams lose hours to copy-paste work across tools that an LLM workflow with the right guardrails could handle.",
  },
  {
    title: "AI demos that never reach production",
    text: "Prototypes stall without auth, rate limits, logging, and a deployment path. I build those foundations in from day one.",
  },
  {
    title: "Slow or fragile backends",
    text: "Unoptimized queries and synchronous bottlenecks hurt users. Caching, async processing, and clean API design fix that.",
  },
  {
    title: "Systems with unclear ownership",
    text: "I document API contracts, data models, and runbooks so the system stays maintainable after launch.",
  },
];

export const capabilities = [
  {
    icon: "bot",
    title: "LLM Automation & Agents",
    problem: "Businesses want AI that takes action, not just chats.",
    solution:
      "Tool-using agents with OpenAI Agents SDK, LangGraph, CrewAI, and Anthropic MCP — with prompting, orchestration, and guardrails.",
    impact: "Automation workflows, internal assistants, and multi-step business processes.",
  },
  {
    icon: "server",
    title: "Secure Backend & APIs",
    problem: "AI products still need dependable services underneath.",
    solution:
      "FastAPI services with authentication/authorization, rate limiting, structured logging, PostgreSQL, and Redis caching.",
    impact: "APIs that scale, stay observable, and are safe to expose to clients.",
  },
  {
    icon: "layout",
    title: "Full-Stack Products",
    problem: "An AI workflow is only useful if people can actually operate it.",
    solution:
      "Next.js + TypeScript dashboards and admin portals with role-based access, built on Supabase or Postgres.",
    impact: "MVPs, management platforms, and operator-facing tools.",
  },
  {
    icon: "cloud",
    title: "Cloud Delivery & Ops",
    problem: "Shipping once is easy; shipping reliably is not.",
    solution:
      "Docker, GitHub Actions CI/CD, Vercel, Railway, and AWS (EC2, S3) with deployment runbooks and logs/metrics.",
    impact: "Repeatable releases and production-ready systems.",
  },
];

export const projects = [
  {
    title: "Smart Society Portal",
    role: "Architect & full-stack engineer",
    summary:
      "Community management platform with role-based modules for residents, management, and admins.",
    challenge: "Coordinate residents, management, and admins in one system without mixing their permissions.",
    solution: "Role-based modules, secure authentication, and operational workflows for each user type.",
    outcome: "A single portal that replaces scattered manual society operations.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS"],
    url: "https://smart-society-teal.vercel.app/",
  },
  {
    title: "Hospital Management System",
    role: "Full-stack engineer",
    summary:
      "Platform for patient records, appointment scheduling, and staff coordination.",
    challenge: "Handle sensitive patient data and busy scheduling flows with clear access control.",
    solution: "Secure role-based access with scalable data operations for records, appointments, and staff.",
    outcome: "A structured foundation for day-to-day hospital operations.",
    tech: ["Next.js", "TypeScript", "PostgreSQL"],
    url: "https://hospital-mgmt-system-orcin.vercel.app/",
  },
  {
    title: "University LMS Portal",
    role: "Full-stack engineer",
    summary:
      "LMS built with Next.js and Supabase for course delivery and student tracking.",
    challenge: "Deliver courses and track student progress in a way that can later be automated.",
    solution: "Next.js + Supabase app with course delivery, progress tracking, and automation-ready data.",
    outcome: "A base for automated grading and learning analytics.",
    tech: ["Next.js", "Supabase", "TypeScript"],
    url: "https://cv-muhammadshafiq.vercel.app/",
  },
];

export const skillGroups = [
  {
    title: "AI Systems & Automation",
    text: "Agents that call tools, follow workflows, and operate across real systems.",
    items: ["OpenAI Agents SDK", "LangChain", "LangGraph", "CrewAI", "Anthropic MCP", "Prompt Engineering", "Function Calling", "RAG"],
    points: ["Tool-calling agents", "Orchestration & guardrails", "Prompt design"],
  },
  {
    title: "Backend & Data",
    text: "Services and data models that support AI products and SaaS workflows.",
    items: ["Python", "FastAPI", "Node.js", "PostgreSQL", "Supabase", "Redis"],
    points: ["API design", "Auth & rate limiting", "Query optimization"],
  },
  {
    title: "Frontend Engineering",
    text: "Responsive, maintainable interfaces with a focus on performance.",
    items: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Framer Motion", "shadcn/ui"],
    points: ["Component architecture", "Dashboards & portals", "Performance tuning"],
  },
  {
    title: "Cloud, Delivery & Ops",
    text: "Practical deployment and operations for production systems.",
    items: ["Docker", "GitHub Actions", "AWS (EC2, S3)", "Vercel", "Railway", "Linux"],
    points: ["CI/CD pipelines", "Observability", "Deployment runbooks"],
  },
];

export const services = [
  {
    title: "AI Workflow Automation",
    bestFor: "Teams replacing repetitive internal work with tool-using agents",
    deliverables: ["Agent workflow (LangGraph / OpenAI SDK)", "MCP or API tools", "Guardrails and logging"],
  },
  {
    title: "Full-Stack AI MVP",
    bestFor: "Founders who need a usable product around an AI workflow",
    deliverables: ["Next.js interface", "FastAPI backend", "Database, auth, deployment"],
  },
  {
    title: "Backend & API Hardening",
    bestFor: "Products whose APIs need security, speed, and observability",
    deliverables: ["Auth & rate limits", "Caching / async processing", "Structured logs & runbooks"],
  },
];

export const experience = [
  {
    period: "2023 – Present",
    role: "Senior Full-Stack Engineer (AI Automation)",
    org: "",
    points: [
      "Architected AI-native systems integrating LLMs, APIs, and data stores for automation workflows (prompting, orchestration, tool-use, guardrails).",
      "Designed secure FastAPI services with authentication/authorization, rate limits, and structured logging.",
      "Led architecture decisions on API contracts, data modeling, and integration patterns; documented standards and deployment runbooks.",
      "Improved reliability and latency through caching, async processing, and API optimization.",
    ],
  },
  {
    period: "2021 – 2023",
    role: "Full-Stack Engineer (Python + Next.js)",
    org: "",
    points: [
      "Built full-stack applications with Next.js/TypeScript and Python services, including dashboards and admin portals.",
      "Developed REST/GraphQL APIs, authentication systems, and cloud / third-party integrations.",
      "Owned feature lifecycles from requirements to deployment, optimizing queries and endpoints for scale.",
    ],
  },
];

export const credentials = [
  {
    title: "Agentic AI Professional Level 2 Developer",
    issuer: "PIAIC — Presidential Initiative for AI & Computing",
    date: "January 30, 2026",
    certNo: "2026030100415",
    text: "Advanced agent development: multi-agent systems, tool use, and production deployment.",
    image: "/certificates/piaic-agentic-ai-level-2.png",
    file: "/certificates/piaic-agentic-ai-level-2.pdf",
  },
  {
    title: "Agentic AI Level 1 Developer",
    issuer: "PIAIC — Presidential Initiative for AI & Computing",
    date: "January 30, 2026",
    certNo: "2026010100415",
    text: "Foundations of LLMs, agent frameworks, and AI-native software development.",
    image: "/certificates/piaic-agentic-ai-level-1.png",
    file: "/certificates/piaic-agentic-ai-level-1.pdf",
  },
  {
    title: "AI Fluency for Educators",
    issuer: "Anthropic",
    date: "",
    certNo: "",
    text: "Effective, responsible, and ethical collaboration with AI systems like Claude.",
    image: "/certificates/ai-fluency-educators.png",
    file: "/certificates/ai-fluency-educators.pdf",
  },
];

export const education = {
  title: "BS in Computer Science (in progress)",
  school: "University of the People",
  text: "Coursework in AI-native software development, agentic AI systems, generative AI, machine learning foundations, data analytics, and Python.",
};

export const faqs = [
  {
    q: "What kind of AI systems do you build?",
    a: "LLM automation workflows, tool-using agents (OpenAI Agents SDK, LangGraph, CrewAI, MCP), and the full-stack products and APIs around them.",
  },
  {
    q: "Can you handle both frontend and backend?",
    a: "Yes. My usual stack is Next.js, React, and TypeScript on the frontend with Python/FastAPI, PostgreSQL, Supabase, and Redis behind it, deployed with Docker and CI/CD.",
  },
  {
    q: "Are you open to relocation or remote work?",
    a: "Yes — I'm based in Rawalpindi, Pakistan and open to U.S. relocation or fully remote roles.",
  },
  {
    q: "How should we start a conversation?",
    a: "Email or message me on LinkedIn with a short brief: the problem, who uses the system, and the tools or data it needs to connect to.",
  },
];
