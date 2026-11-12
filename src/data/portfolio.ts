export const personalInfo = {
  name: "Marwan Shafi",
  title: "Fullstack Developer",
  email: "2004marwanshafi@gmail.com",
  collegeEmail: "marwanshafibcs22311002@iiitsonepat.ac.in",
  phone: "+91-8921419717",
  location: "Kannur, Kerala, India",
  linkedin: "https://www.linkedin.com/in/marwan-shafi-167701291/",
  github: "https://github.com/marwaaann",
  leetcode: "https://leetcode.com/u/marwaaann/",
  codechef: "https://www.codechef.com/users/marwaaann",
  codolio: "https://codolio.com/profile/marrwaaan",
  resumePath: "/resume.pdf",
};

export const education = [
  {
    degree: "Bachelor of Technology in Computer Science",
    institute: "Indian Institute of Information Technology (IIIT), Sonepat",
    duration: "Aug 2023 – Jun 2027",
  },
  {
    degree: "Senior Secondary (XII) CBSE",
    institute: "The Model School Abu Dhabi, Abu Dhabi, UAE",
    duration: "Apr 2021 – Mar 2023",
  },
  {
    degree: "Secondary (X) CBSE",
    institute: "Progressive English School Wadihuda, Kerala, India",
    duration: "Jun 2020 – Mar 2021",
  },
];

export const experience = [
  {
    role: "Fullstack Developer Intern",
    company: "Kiwisoft Solutions",
    location: "Kannur, Kerala",
    duration: "Jun 2026 – Jul 2026",
    period: "2026",
    highlights: [
      "Built two production-grade Spring Boot systems an Employee & Department Management System and a Recruitment & Job Portal spanning 10+ modules including Authentication, RBAC, Leave Management, Job Postings, and Audit Logging",
      "Designed 32+ secure RESTful APIs with Spring Security and JWT access/refresh tokens, enforcing role-based access control across multiple user roles, and architected normalized PostgreSQL schemas across 18+ entities via Spring Data JPA/Hibernate",
      "Implemented multi-step approval workflows, centralized exception handling, and structured audit logging across both systems, validated all endpoints using Postman for functional and integration testing, mentored a fellow intern through debugging sessions on shared modules, and presented technical walkthroughs of both systems to the project lead for review",
    ],
    description:
      "50-day internship delivering enterprise backend systems with Spring Boot 3.x, PostgreSQL, React, and JWT-secured REST APIs. Collaborated using Git, Maven, and Postman in Agile sprints.",
  },
];

export const projects = [
  {
    title: "NutriVerse",
    category: "AI Recipe & Nutrition Assistant",
    tools: "TypeScript, Node.js, Express.js, React, MongoDB, Redis, LangGraph, Gemini API, AWS EC2",
    description:
      "Architected and deployed a full-stack AI-powered recipe and nutrition platform using TypeScript, Node.js/Express, and React, implementing manual Dependency Injection and HttpOnly-cookie JWT authentication, provisioned on AWS EC2 (Nginx, PM2, HTTPS) with Vercel frontend hosting and Upstash Redis for cross-origin sessions and caching. Engineered an automated nutrition pipeline using Gemini API for natural-language ingredient parsing against USDA FoodData Central REST API, and developed a 4-node LangGraph agent with conditional LLM tool-calling.",
    link: "https://nutriverse.marwanshafi.tech/",
    github: "https://github.com/marwaaann/NutriVerse",
    image: "/images/nutriverse.png",
    status: "completed" as const,
  },
  {
    title: "Employee & Department Management System",
    category: "Enterprise Backend",
    tools: "Java 17, Spring Boot 3.x, PostgreSQL, JWT, JPA/Hibernate, Spring Security",
    description:
      "Production-grade system with 6 modules — Authentication, Employee Management, Role Management, Leave Management, Approval Workflows, and Audit Logging. Includes 100+ employee records and multi-step leave approval workflows.",
    link: "https://github.com/marwaaann/Employee-Management-System",
    github: "https://github.com/marwaaann/Employee-Management-System",
    image: "/images/employee-management-login.svg",
    status: "in-progress" as const,
  },
  {
    title: "Recruitment & Job Portal",
    category: "Full Stack Web App",
    tools: "Java, Spring Boot, React, PostgreSQL, Docker, WebSocket, JWT",
    description:
      "Delivered a multi-tenant Applicant Tracking System with a Spring Boot REST API 50+ endpoints across 8 modules and React 19 frontend, powering a 6-stage Kanban hiring pipeline across 11 relational PostgreSQL entities; packaged with Docker and hosted on Render, Vercel, and Neon PostgreSQL. Secured stateless auth using dual JWT tokens with HttpOnly cookies and Bearer fallback, enforcing RBAC across 5 roles via Spring Security with CSRF protection, and enabled real-time messaging via Spring WebSocket, STOMP, and SockJS.",
    link: "https://recruitment-job-portal-system.vercel.app",
    github: "https://github.com/marwaaann/recruitment-job-portal-system",
    image: "/images/job-portal.png",
    status: "completed" as const,
  },
  {
    title: "MovieOn",
    category: "Movie Discovery Web App",
    tools: "React.js, Tailwind CSS, Appwrite, TMDB API, JavaScript, Vite",
    description:
      "Modern movie discovery platform with real-time debounced search, a trending movie algorithm powered by Appwrite database tracking user query metrics, dynamic content fetching from TMDB REST API, and a responsive dark-mode UI.",
    link: "https://movieon-w4po.onrender.com",
    github: "https://github.com/marwaaann/MovieOn",
    image: "/images/movieon.png",
    status: "completed" as const,
  },
  {
    title: "NeuroScan.AI",
    category: "Computer Vision & Machine Learning",
    tools: "Python, YOLOv8, FastAPI, Streamlit, PyTorch, Computer Vision",
    description:
      "Full-stack medical imaging application with a FastAPI REST backend and Streamlit frontend for real-time YOLOv8 brain tumor detection across 4 classes on MRI scans, achieving 96.3% mAP@50, 93.9% precision, and 94.0% recall.",
    link: "https://neuroscan-ai-lp16.onrender.com",
    github: "https://github.com/marwaaann/NeuroScan.AI",
    image: "/images/neuroscan.png",
    status: "completed" as const,
  },
  {
    title: "Detection of Adversarial Attacks in AI-Generated Images",
    category: "Deep Learning & Security Research",
    tools: "Python, PyTorch, Flask, JavaScript, Matplotlib, CIFAKE Dataset",
    description:
      "Trained a 3-layer CNN from scratch on the CIFAKE dataset (120,000 real and Stable Diffusion-generated images) to classify AI-generated images, achieving 94.53% test accuracy. Implemented FGSM to attack the classifier across 6 perturbation strengths (accuracy collapse from 94.53% to 6.14%), analysed attack behaviour with ROC curves, confusion matrices, and perturbation heatmaps, and developed a calibrated pixel-variation analysis method for real-time detection.",
    link: "https://adversarial-attack-detection.onrender.com",
    github: "https://github.com/marwaaann/Adversarial-attack-detection",
    image: "/images/adversarial-attack.png",
    status: "completed" as const,
  },
];

export const researchPapers = [
  {
    title:
      "Detection of Adversarial Attacks in AI-Generated Images Using FGSM and Pixel Variation Analysis",
    type: "Research Paper",
    duration: "Jan 2026 – Apr 2026",
    mentor: "Dr. Bhoopesh Singh Bhati",
    teamSize: 2,
    skills: [
      "Python",
      "PyTorch",
      "Deep Learning",
      "CNN",
      "FGSM",
      "Computer Vision",
      "Adversarial ML",
    ],
    description:
      "Trained a 3-layer CNN from scratch on the CIFAKE dataset (120,000 real and Stable Diffusion-generated images) to classify AI-generated images, achieving 94.53% test accuracy. Implemented the Fast Gradient Sign Method (FGSM) to attack the classifier across 6 perturbation strengths, showing accuracy collapse from 94.53% to 6.14%, and analysed attack behaviour with ROC curves, confusion matrices, and perturbation heatmaps. Developed a pixel-variation analysis method to flag adversarially perturbed images using a calibrated threshold, and deployed the model through a full-stack web application.",
    link: "https://adversarial-attack-detection.onrender.com",
  },
  {
    title: "Identify Influential Users in Social Network for Targeted Outreach",
    type: "Research Paper",
    duration: "Oct 2025 – Dec 2025",
    mentor: "Dr. MD Arquam",
    teamSize: 3,
    skills: [
      "Python",
      "XGBoost",
      "NetworkX",
      "Graph Theory",
      "SHAP",
      "Machine Learning",
    ],
    description:
      "Built an ML framework to identify influential users in large-scale social networks using graph theory. Analyzed 80K+ Twitter users with centrality features via NetworkX. Achieved 99.3% accuracy with XGBoost and applied SHAP for model explainability.",
    link: "https://drive.google.com/file/d/1Yafmx0EdyaCL4TK178iUDZQjF9pBK1Ls/view?usp=sharing",
  },
  {
    title: "NeuroScan.AI: Brain Tumor Detection Using YOLOv8",
    type: "Research Paper",
    duration: "Oct 2025 – Dec 2025",
    mentor: "Dr. Jitendra K Samriya",
    teamSize: 6,
    skills: [
      "YOLOv8",
      "Deep Learning",
      "MRI Processing",
      "Object Detection",
    ],
    description:
      "Built a FastAPI and Streamlit application around a YOLOv8 detector trained across Glioma, Meningioma, Pituitary, and No Tumor classes. The validated model achieved 96.31% mAP@50, 93.87% precision, and 94.01% recall under the supervision of Dr. Jitendra K. Samriya.",
    link: "https://github.com/marwaaann/NeuroScan.AI",
  },
  {
    title:
      "Energy-Efficient Routing Protocol Selection via Fuzzy Logic-Based Cluster Head Selection for UWSN",
    type: "Research Paper",
    duration: "Jan 2026 – Apr 2026",
    mentor: "Dr. Ramesh Saha",
    teamSize: 5,
    skills: [
      "MATLAB",
      "Fuzzy Logic",
      "UWSN",
      "Wireless Sensor Networks",
      "Network Simulation",
    ],
    description:
      "Co-authored a research paper proposing an energy-efficient Cluster-Based Underwater Wireless Sensor Network (CUWSN) framework using Mamdani Fuzzy Inference System for intelligent Cluster Head selection. Optimized routing by considering residual energy, link quality, and distance to improve network lifetime.",
    link: "",
  },
];

export const achievements = [
  {
    title: "700+ Problems Solved",
    subtitle: "LeetCode (Max rating: 1624, top 15% globally) · CodeChef (rating: 1540+) · All Platforms",
    icon: "💻",
  },
  {
    title: "3rd Rank – Guardians of the Algorithms",
    subtitle: "Intra-College Codathon organized by IIIT Sonepat",
    icon: "🏆",
  },
  {
    title: "Certified Cyber Engineer - Computer & Network Security (CCE-CNS)",
    subtitle: "IIT Madras Pravartak – Proficiency Level A+",
    icon: "🔐",
  },
  {
    title: "McKinsey.org Forward Program",
    subtitle: "Professional Development Certification",
    icon: "📈",
  },
];

export const skills = {
  languages: ["Java", "JavaScript", "Python", "SQL", "C", "C++", "TypeScript"],
  backend: [
    "Spring Boot",
    "Spring Security",
    "Spring Data JPA/Hibernate",
    "Node.js",
    "Express.js",
    "WebSockets",
    "FastAPI",
    "LangGraph",
    "Gemini API",
    "REST APIs",
    "Swagger/OpenAPI",
    "JWT",
    "RBAC",
  ],
  frontend: [
    "React.js",
    "Next.js",
    "Tailwind CSS",
    "jQuery",
    "HTML",
    "CSS",
    "JavaScript",
    "TypeScript",
    "Three.js",
  ],
  databases: [
    "PostgreSQL",
    "MySQL",
    "MongoDB",
    "Redis",
    "Schema Design",
    "Query Optimization",
    "Indexing",
  ],
  authApis: [
    "JWT",
    "RBAC",
    "Swagger/OpenAPI",
    "RESTful APIs",
    "Spring Security",
  ],
  aiMl: [
    "Machine Learning",
    "Deep Learning",
    "Neural Networks",
    "PyTorch",
    "YOLOv8",
    "LLM Fundamentals",
    "RAG Basics",
    "Computer Vision",
    "XGBoost",
    "SHAP",
  ],
  tools: [
    "Docker",
    "AWS EC2",
    "Git",
    "GitHub",
    "Postman",
    "Vercel",
    "Render",
    "Linux",
  ],
  fundamentals: [
    "DSA",
    "OOP",
    "DBMS",
    "Computer Networks",
    "Operating Systems",
    "Software Engineering",
  ],
};
