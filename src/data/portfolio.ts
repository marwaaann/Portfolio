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
  codechef: "https://www.codechef.com/users/troop_dew_78",
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
      "Designed 20+ secure RESTful APIs with Spring Security, JWT (access/refresh tokens), and role-based access across six roles (Admin, Manager, Employee, Super Admin, Partner, Client).",
      "Architected normalized PostgreSQL schemas across 12+ entities using Spring Data JPA/Hibernate with pagination, indexed foreign keys, and optimized queries.",
      "Implemented multi-stage hiring workflows, OTP-based password reset, duplicate-candidate detection, GlobalExceptionHandler, and structured audit logging in Agile sprints.",
    ],
    description:
      "50-day internship delivering enterprise backend systems with Spring Boot 3.x, PostgreSQL, and JWT-secured REST APIs. Collaborated using Git, Maven, and Postman in Agile sprints.",
  },
];

export const projects = [
  {
    title: "Employee & Department Management System",
    category: "Enterprise Backend",
    tools: "Java 17, Spring Boot 3.x, PostgreSQL, JWT, JPA/Hibernate, Spring Security",
    description:
      "Production-grade system with 6 modules — Authentication, Employee Management, Role Management, Leave Management, Approval Workflows, and Audit Logging. Secured 12+ REST APIs with JWT and RBAC for Admin, Manager, and Employee roles.",
    link: "https://github.com/marwaaann/Employee-Management-System",
    image: "/images/employee-management-login.svg",
    status: "completed" as const,
  },
  {
    title: "Recruitment & Job Portal",
    category: "Full Stack Web App",
    tools: "Spring Boot, React.js, PostgreSQL, JWT, REST APIs",
    description:
      "Multi-stage hiring platform with role-based dashboards for recruiters, partners, and candidates. Currently under active development — OTP authentication, workflow automation, and candidate pipeline management coming soon.",
    link: "",
    image: "/images/job-portal-login.svg",
    status: "in-progress" as const,
  },
  {
    title: "Adversarial Attack Detection",
    category: "Machine Learning & Security",
    tools: "Python, YOLOv8, PyTorch, Adversarial ML, Computer Vision",
    description:
      "Implemented an adversarial attack detection pipeline for AI-generated images using FGSM and pixel variation analysis. Designed a robust neural network model to detect adversarial manipulations while maintaining high accuracy.",
    link: "https://github.com/marwaaann/Adversarial-attack-detection",
    image: "/images/brain-tumor.svg",
    status: "completed" as const,
  },
  {
    title: "Brain Tumor Detection System",
    category: "Deep Learning & Computer Vision",
    tools: "Python, YOLOv8, YOLOv11, OpenCV, MRI Processing",
    description:
      "Deep learning system for automated brain tumor detection on MRI scans. Trained on 7,000+ annotated images across Glioma, Meningioma, Pituitary, and No Tumor classes. YOLOv11 achieves ~92 FPS real-time inference.",
    link: "https://github.com/marwaaann/brain-tumor-detection-yolo",
    image: "/images/brain-tumor.svg",
    status: "completed" as const,
  },
  {
    title: "FreshFinds – Sustainable Food Marketplace",
    category: "Hackathon Team Project",
    tools: "React.js, Node.js, Express.js, MongoDB, JavaScript",
    description:
      "Built with friends during a hackathon, FreshFinds connects local shops with customers to resell unsold food at affordable prices. The platform helps reduce food waste while supporting local businesses through search, filtering, and real-time availability updates.",
    link: "https://github.com/keshavagr273/FreshFinds",
    image: "/images/freshfinds.svg",
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
    title: "Brain Tumor Detection Using YOLOv8 and YOLOv11",
    type: "Research Paper",
    duration: "Oct 2025 – Dec 2025",
    mentor: "Dr. Jitendra K Samriya",
    teamSize: 6,
    skills: [
      "YOLOv8",
      "YOLOv11",
      "Deep Learning",
      "MRI Processing",
      "Object Detection",
    ],
    description:
      "Co-authored research on automated brain tumor detection using state-of-the-art YOLO architectures on 7,000+ annotated MRI scans covering Glioma, Meningioma, Pituitary, and No Tumor classes. YOLOv11 achieved superior detection accuracy with real-time inference suitable for clinical applications.",
    link: "https://drive.google.com/file/d/1GkrEfBI3bmmBloldr0HI8evRoPVQVB8/view?usp=sharing",
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
    title: "CodeChef Rating",
    subtitle: "Rating: 1540",
    icon: "💻",
  },
  {
    title: "500+ Problems Solved on LeetCode",
    subtitle: "Max Rating: 1624 | Top 15% Globally",
    icon: "💻",
  },
  {
    title: "Certified Cyber Engineer (CCE-CNS)",
    subtitle: "IIT Madras Pravartak",
    icon: "🔐",
  },
  {
    title: "McKinsey.org Forward Program",
    subtitle: "Professional Development Certification",
    icon: "📈",
  },
];

export const skills = {
  languages: ["Java", "Go", "C++", "Python", "JavaScript", "SQL"],
  backend: [
    "Spring Boot",
    "Spring Security",
    "Spring Data JPA/Hibernate",
    "Node.js",
    "Express.js",
    "REST APIs",
    "JWT Authentication",
    "Role-Based Access Control (RBAC)",
  ],
  frontend: ["React.js", "HTML", "CSS", "JavaScript", "TypeScript", "MERN Stack"],
  databases: ["PostgreSQL", "MySQL", "MongoDB", "Schema Design", "Query Optimization", "Indexing"],
  security: ["JWT Authentication", "RBAC", "Spring Security"],
  ml: [
    "Deep Learning",
    "Neural Networks",
    "YOLOv8",
    "XGBoost",
    "Random Forest",
    "Computer Vision",
  ],
  cloud: ["Docker", "Linux", "Git", "GitHub", "CI/CD Pipelines", "Maven"],
  testing: ["JUnit", "Postman", "API Testing", "Integration Testing"],
  fundamentals: ["Data Structures & Algorithms", "OOP", "DBMS", "Computer Networks", "Operating Systems", "Software Engineering"],
};
