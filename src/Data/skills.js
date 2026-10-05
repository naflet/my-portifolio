
export const skillCategories = [
  "All",
  "Backend Core",
  "Databases",
  "DevOps & Cloud",
  "Frontend",
];

export const skillsData = [
  // ==========================================
  // BACKEND CORE
  // ==========================================

  {
    id: "nodejs",
    name: "Node.js",
    category: "Backend Core",
    icon: "FaNodeJs",
    color: "#539e43",
    level: 92,
    description:
      "JavaScript runtime for building scalable backend applications using event-driven architecture, non-blocking asynchronous I/O, streams, event emitters, and worker-based processing.",
    highlights: [
      "JavaScript Backend Development",
      "Microservices Architecture",
      "High-Concurrency Processing",
      "Asynchronous I/O",
    ],
  },

  {
    id: "express",
    name: "Express.js",
    category: "Backend Core",
    icon: "SiExpress",
    color: "#ffffff",
    level: 90,
    description:
      "Fast and flexible Node.js web framework for building RESTful APIs, authentication systems, middleware pipelines, security configurations, and scalable backend services.",
    highlights: [
      "REST API Development",
      "JWT Authentication",
      "Middleware Chains",
      "CORS & Security",
      "Swagger / OpenAPI Docs",
    ],
  },

  {
    id: "graphql",
    name: "GraphQL",
    category: "Backend Core",
    icon: "SiGraphql",
    color: "#e10098",
    level: 82,
    description:
      "API query language and runtime for creating strongly typed APIs with schemas, queries, mutations, subscriptions, resolvers, and optimized data fetching.",
    highlights: [
      "Apollo Server",
      "Schema Design",
      "Query & Mutation Resolvers",
      "DataLoader Optimization",
      "Real-Time Subscriptions",
    ],
  },

  // ==========================================
  // DATABASES & CACHING
  // ==========================================

  {
    id: "postgresql",
    name: "PostgreSQL",
    category: "Databases",
    icon: "BiLogoPostgresql",
    color: "#4169e1",
    level: 88,
    description:
      "Advanced relational database development including schema design, complex queries, JOIN operations, indexing strategies, transactions, and ORM integration.",
    highlights: [
      "Relational Database Design",
      "Query Optimization",
      "Prisma / Drizzle ORM",
      "Database Migrations",
      "ACID Transactions",
    ],
  },

  {
    id: "mongodb",
    name: "MongoDB",
    category: "Databases",
    icon: "SiMongodb",
    color: "#47a248",
    level: 86,
    description:
      "NoSQL document database development including schema modeling, Mongoose integration, aggregation pipelines, indexing, and cloud database management.",
    highlights: [
      "NoSQL Data Modeling",
      "Mongoose",
      "Aggregation Framework",
      "Database Indexing",
      "Atlas Cloud Management",
    ],
  },

  {
    id: "redis",
    name: "Redis",
    category: "Databases",
    icon: "SiRedis",
    color: "#dc382d",
    level: 84,
    description:
      "High-performance in-memory data store used for caching, session management, API rate limiting, background processing, and publish/subscribe systems.",
    highlights: [
      "Distributed Caching",
      "Session Management",
      "API Rate Limiting",
      "Pub/Sub Engine",
      "Performance Optimization",
    ],
  },

  // ==========================================
  // DEVOPS & CLOUD
  // ==========================================

  {
    id: "docker",
    name: "Docker",
    category: "DevOps & Cloud",
    icon: "FaDocker",
    color: "#2496ed",
    level: 85,
    description:
      "Containerizing applications and backend services using Docker, multi-stage builds, environment configuration, and multi-container development workflows.",
    highlights: [
      "Containerization",
      "Dockerfiles",
      "Multi-Stage Builds",
      "Docker Compose",
      "Environment Parity",
    ],
  },

  {
    id: "aws",
    name: "AWS Services",
    category: "DevOps & Cloud",
    icon: "FaAws",
    color: "#ff9900",
    level: 78,
    description:
      "Cloud application deployment and infrastructure using AWS services for storage, compute, databases, serverless applications, and monitoring.",
    highlights: [
      "S3 Bucket Management",
      "EC2 Deployment",
      "Serverless Functions",
      "RDS Database Setup",
      "CloudWatch Monitoring",
    ],
  },

  {
    id: "git",
    name: "Git & GitHub",
    category: "DevOps & Cloud",
    icon: "FaGitAlt",
    color: "#f05032",
    level: 90,
    description:
      "Professional version control and collaboration using Git and GitHub, including branching, pull requests, repository management, releases, and CI/CD workflows.",
    highlights: [
      "Version Control",
      "Branch Management",
      "Pull Requests",
      "CI/CD Pipelines",
      "Release Management",
    ],
  },

  // ==========================================
  // FRONTEND
  // ==========================================

  {
    id: "javascript",
    name: "JavaScript",
    category: "Frontend",
    icon: "SiJavascript",
    color: "#f7df1e",
    level: 92,
    description:
      "Modern JavaScript development for creating interactive web applications, handling asynchronous operations, integrating APIs, and building scalable frontend applications.",
    highlights: [
      "Modern ES6+ JavaScript",
      "DOM & Event Handling",
      "Async / Await",
      "API Integration",
      "Interactive Web Applications",
    ],
  },

  {
    id: "react",
    name: "React",
    category: "Frontend",
    icon: "FaReact",
    color: "#61dafb",
    level: 90,
    description:
      "Building modern, interactive, component-based web applications with React, including API integration, reusable components, custom hooks, and state management.",
    highlights: [
      "Reusable Components",
      "API Integration",
      "Custom Hooks",
      "State Management",
      "Interactive UI Development",
    ],
  },

  {
    id: "typescript",
    name: "TypeScript",
    category: "Frontend",
    icon: "SiTypescript",
    color: "#3178c6",
    level: 88,
    description:
      "Typed JavaScript development for building maintainable applications with strong type safety, interfaces, reusable types, and improved code quality.",
    highlights: [
      "Strict Type Systems",
      "Interfaces & Types",
      "Reusable Type Definitions",
      "Code Quality",
      "Type-Safe API Integration",
    ],
  },

  {
    id: "nextjs",
    name: "Next.js",
    category: "Frontend",
    icon: "SiNextdotjs",
    color: "#ffffff",
    level: 84,
    description:
      "React framework for building modern production-ready applications with routing, server-side rendering, static generation, API capabilities, and optimized performance.",
    highlights: [
      "App Router",
      "Server-Side Rendering",
      "Static Generation",
      "API Routes",
      "Performance Optimization",
    ],
  },

  {
    id: "tailwind",
    name: "Tailwind CSS",
    category: "Frontend",
    icon: "SiTailwindcss",
    color: "#38bdf8",
    level: 86,
    description:
      "Utility-first CSS framework for rapidly creating responsive, modern, and consistent user interfaces with reusable design patterns.",
    highlights: [
      "Responsive Design",
      "Utility-First Styling",
      "Component Styling",
      "Custom Design Systems",
      "Modern UI Development",
    ],
  },
];
