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
      "Built two production-grade Spring Boot systems — Employee & Department Management System and Recruitment/Job Portal with 10+ modules including Auth, RBAC, Leave Management, Job Postings, and Audit Logging.",
      "Designed 32+ secure RESTful APIs with Spring Security, JWT (access/refresh tokens), and role-based access across six roles (Admin, Manager, Employee, Super Admin, Partner, Client).",
      "Architected normalized PostgreSQL schemas across 18+ entities using Spring Data JPA/Hibernate with pagination, indexed foreign keys, and optimized queries.",
      "Implemented multi-stage hiring workflows, OTP-based password reset, duplicate-candidate detection, GlobalExceptionHandler, and structured audit logging in Agile sprints.",
    ],
    description:
      "50-day internship delivering enterprise backend systems with Spring Boot 3.x, PostgreSQL, React, and JWT-secured REST APIs. Collaborated using Git, Maven, and Postman in Agile sprints.",
  },
];

export const projects = [
  {
    title: "NutriVerse",
    category: "AI Recipe & Nutrition Assistant",
    tools: "TypeScript, Node.js, Express, React, MongoDB, Redis, LangGraph, Gemini API, AWS EC2, Zod",
    description:
      "Full-stack AI nutrition assistant deployed on AWS EC2 (Nginx, PM2) and Vercel with Gemini-powered ingredient parsing, USDA FoodData Central 7-metric analysis, a 4-node LangGraph agent with dynamic tool-calling, and Upstash Redis session caching.",
    link: "https://github.com/marwaaann/NutriVerse",
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
    image: "/images/employee-management-login.svg",
    status: "in-progress" as const,
  },
  {
    title: "Recruitment & Job Portal",
    category: "Full Stack Web App",
    tools: "Java 21, Spring Boot, React, PostgreSQL, WebSocket, JWT",
    description:
      "Enterprise applicant tracking system with a Spring Boot REST API (50+ endpoints across 8 modules), 11 normalized PostgreSQL entities, stateless JWT auth with refresh-token rotation, and live role-based messaging via Spring WebSocket/STOMP/SockJS.",
    link: "https://github.com/marwaaann/recruitment-job-portal-system",
    image: "/images/job-portal.png",
    status: "completed" as const,
  },
  {
    title: "MovieOn",
    category: "Movie Discovery Web App",
    tools: "React.js, Tailwind CSS, Appwrite, TMDB API, JavaScript, Vite",
    description:
      "Modern movie discovery platform with real-time debounced search, a trending movie algorithm powered by Appwrite database tracking user query metrics, dynamic content fetching from TMDB REST API, and a responsive dark-mode UI.",
    link: "https://github.com/marwaaann/MovieOn",
    image: "/images/movieon.png",
    status: "completed" as const,
  },
  {
    title: "NeuroScan.AI",
    category: "Computer Vision & Machine Learning",
    tools: "Python, YOLOv8, FastAPI, Streamlit, PyTorch, Computer Vision",
    description:
      "Full-stack medical imaging application with a FastAPI REST backend and Streamlit frontend for real-time YOLOv8 brain tumor detection across 4 classes on MRI scans, achieving 96.3% mAP@50, 93.9% precision, and 94.0% recall.",
    link: "https://github.com/marwaaann/NeuroScan.AI",
    image: "/images/neuroscan.png",
    status: "completed" as const,
  },
  {
    title: "Adversarial Attack Detection",
    category: "Deep Learning & Security Research",
    tools: "Python, CNN, PyTorch, FGSM, CIFAKE Dataset, Adversarial ML",
    description:
      "CNN-based adversarial attack detection research using the CIFAKE dataset of approximately 120,000 images. FGSM experiments and pixel-variation analysis achieved a 98.5% detection rate; the paper is under submission.",
    link: "https://github.com/marwaaann/Adversarial-attack-detection",
    image: "/images/brain-tumor.svg",
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
      "Developed a deep learning system to detect adversarial attacks in AI-generated image classification. Trained a CNN on 120,000+ real and AI-generated images. Implemented FGSM attacks observing up to 88.39% accuracy drop. Proposed Pixel Variation Analysis achieving 93.6% detection rate without additional neural networks.",
    link: "https://github.com/marwaaann/Adversarial-attack-detection",
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
    title: "3rd Rank – Guardians of the Algorithms",
    subtitle: "Intra-College Codathon, IIIT Sonepat",
    icon: "🏆",
  },
  {
    title: "700+ Problems Solved",
    subtitle: "LeetCode (Max: 1624, Top 15%) & CodeChef (1540+)",
    icon: "💻",
  },
  {
    title: "Certified Cyber Engineer (CCE-CNS)",
    subtitle: "IIT Madras – Proficiency Level A+",
    icon: "🔐",
  },
  {
    title: "McKinsey.org Forward Program",
    subtitle: "Professional Development Certification",
    icon: "📈",
  },
];

export const skills = {
  languages: ["Java", "C", "C++", "Python", "JavaScript", "TypeScript", "SQL"],
  backend: [
    "Spring Boot",
    "Spring Security",
    "Spring Data JPA/Hibernate",
    "Node.js",
    "Express.js",
    "FastAPI",
    "LangGraph",
    "Gemini API",
    "WebSockets",
    "REST APIs",
    "JWT Authentication",
    "Role-Based Access Control (RBAC)",
    "Swagger/OpenAPI",
    "Appwrite",
  ],
  frontend: ["React.js", "Streamlit", "HTML", "CSS", "JavaScript", "TypeScript", "Tailwind CSS", "Three.js", "MERN Stack"],
  databases: ["PostgreSQL", "MySQL", "MongoDB", "Redis", "Schema Design", "Query Optimization", "Indexing"],
  security: ["JWT Authentication", "RBAC", "Spring Security"],
  ml: [
    "Deep Learning",
    "Neural Networks",
    "YOLOv8",
    "XGBoost",
    "Random Forest",
    "Computer Vision",
    "OpenCV",
    "TensorFlow",
    "SHAP",
  ],
  cloud: ["Docker", "Linux", "Git", "GitHub", "Vercel", "AWS EC2", "AWS", "Render", "CI/CD Pipelines", "Maven"],
  testing: ["JUnit", "Jest", "Postman", "Zod Validation", "API Testing", "Integration Testing"],
  fundamentals: ["Data Structures & Algorithms", "OOP", "DBMS", "Computer Networks", "Operating Systems", "Software Engineering"],
};
