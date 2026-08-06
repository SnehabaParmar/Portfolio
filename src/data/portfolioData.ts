export interface Project {
  id: string;
  title: string;
  category: 'GenAI & LLM' | 'Machine Learning' | 'Web Development' | 'NLP / AI';
  subtitle: string;
  description: string;
  longDescription: string;
  technologies: string[];
  features: string[];
  metrics?: { label: string; value: string }[];
  image: string;
  githubUrl: string;
  liveUrl?: string;
  featured: boolean;
}

export interface SkillItem {
  name: string;
  icon: string;
  category: string;
}

export interface SkillCategory {
  title: string;
  iconName: string;
  skills: SkillItem[];
}

export interface Education {
  degree: string;
  institution: string;
  duration: string;
  grade?: string;
  description: string;
}

export interface Certificate {
  title: string;
  issuer: string;
  date: string;
  certNo?: string;
  imageUrl: string;
  badgeColor: string;
  verifyUrl?: string;
}

export const PORTFOLIO_DATA = {
  personal: {
    name: "Snehaba Parmar",
    subtitle: "M.Sc. IT Student",
    role: "M.Sc. Information Technology Student | AI/ML & Web Developer",
    location: "Surendranagar, Gujarat, India",
    email: "snp087210@gmail.com",
    phone: "+91 9228281903",
    linkedin: "https://www.linkedin.com/in/snehaba-parmar-9b553b339/",
    github: "https://github.com/SnehabaParmar",
    githubUsername: "SnehabaParmar",
    bio: "I am an Information Technology graduate and M.Sc. IT scholar with hands-on experience in Machine Learning, Computer Vision (OpenCV), GenAI/LLM Application Development (Gemini API & Prompt Engineering), and Full-Stack Web Systems. Looking for an internship opportunity to enhance my technical skills and contribute to high-impact real-world projects.",
    avatar: "/photo.jpg",
    realPhoto: "/photo.jpg",
    resumePdf: "/Snehaba_Parmar_Resume.pdf",
    titles: [
      "AI-ML Developer",
      "Web Developer",
      "Python Developer",
      "Computer Vision & OpenCV Specialist"
    ],
    stats: [
      { label: "B.Sc. IT Grade", value: "4.0 / 5.0 CGPA" },
      { label: "AI & Web Projects", value: "5+ Major" },
      { label: "Hackathons", value: "Odoo 2026" },
      { label: "Certifications", value: "5 Verified" }
    ]
  },
  education: [
    {
      degree: "Master of Science in Information Technology (Pursuing)",
      institution: "K.S. School of Business Management",
      duration: "2025 – Present",
      grade: "Pursuing",
      description: "Advanced studies focusing on Machine Learning algorithms, LLMs, Data Preprocessing, NLP models, Fast API microservices, and Enterprise Systems."
    },
    {
      degree: "Bachelor of Science in Information Technology",
      institution: "K.S. School of Business Management",
      duration: "2022 – 2025",
      grade: "CGPA: 4.0 / 5.0",
      description: "Core computer science fundamentals, Software Engineering, Web Development (React/Tailwind/Node), Databases (SQL/MongoDB), and OOP in C++/Java/Python."
    },
    {
      degree: "Higher Secondary Education (Commerce Stream)",
      institution: "GSHSEB Board",
      duration: "2022",
      grade: "Percentage: 85.40%",
      description: "High academic distinction with strong foundational analytical and problem-solving skills."
    }
  ] as Education[],

  skills: [
    {
      title: "Machine Learning & AI",
      iconName: "Brain",
      skills: [
        { name: "Machine Learning", category: "ML", icon: "Brain" },
        { name: "OpenCV", category: "Vision", icon: "Eye" },
        { name: "Computer Vision", category: "Vision", icon: "Camera" },
        { name: "NLP & Speech Recognition", category: "AI", icon: "MessageSquare" },
        { name: "Google Gemini API", category: "GenAI", icon: "Sparkles" },
        { name: "Prompt Engineering", category: "GenAI", icon: "Terminal" },
        { name: "Data Preprocessing", category: "Data", icon: "Cpu" },
        { name: "Fuzzy Logic", category: "Algorithms", icon: "Activity" }
      ]
    },
    {
      title: "Programming Languages",
      iconName: "Code",
      skills: [
        { name: "Python", category: "Lang", icon: "FileCode" },
        { name: "JavaScript", category: "Lang", icon: "Code2" },
        { name: "C++", category: "Lang", icon: "Code" },
        { name: "C", category: "Lang", icon: "Binary" },
        { name: "Java", category: "Lang", icon: "Coffee" },
        { name: "C#", category: "Lang", icon: "Hash" }
      ]
    },
    {
      title: "Web & Frameworks",
      iconName: "Globe",
      skills: [
        { name: "React", category: "Frontend", icon: "Atom" },
        { name: "FastAPI", category: "Backend", icon: "Zap" },
        { name: "Node.js", category: "Backend", icon: "Server" },
        { name: "Tailwind CSS", category: "Styling", icon: "Palette" },
        { name: "HTML5 & CSS3", category: "Web", icon: "Layout" },
        { name: "Angular", category: "Frontend", icon: "Layers" },
        { name: "RESTful APIs", category: "API", icon: "Network" },
        { name: "JWT Auth & Pydantic", category: "Security", icon: "ShieldCheck" }
      ]
    },
    {
      title: "Databases & Tools",
      iconName: "Wrench",
      skills: [
        { name: "MongoDB", category: "NoSQL", icon: "Database" },
        { name: "SQL & SQLite", category: "RDBMS", icon: "Table" },
        { name: "SQLAlchemy", category: "ORM", icon: "Layers" },
        { name: "Visual Studio Code", category: "IDE", icon: "Monitor" },
        { name: "Jupyter Notebook", category: "AI IDE", icon: "BookOpen" },
        { name: "Git & GitHub", category: "DevOps", icon: "GitBranch" },
        { name: "Axios & Recharts", category: "Libraries", icon: "BarChart3" }
      ]
    }
  ] as SkillCategory[],

  projects: [
    {
      id: "custom-artistry",
      title: "CustomArtistry Platform",
      category: "Web Development",
      subtitle: "Full-Stack E-Commerce Marketplace Connecting Artists & Customers",
      description: "A full-stack web platform connecting artists with customers for customized artwork orders, secure authentication, order tracking, and dynamic pricing.",
      longDescription: "CustomArtistry enables independent artists to showcase custom art portfolios and receive personalized commission orders from buyers. Built with Node.js and MongoDB, it features user authentication, image uploads, order lifecycle management, and a dynamic pricing calculator.",
      technologies: ["HTML5", "CSS3", "JavaScript", "Node.js", "MongoDB", "Express"],
      features: [
        "Artist & Customer role-based authentication",
        "Secure portfolio image upload & gallery display",
        "Order request system with custom specification forms",
        "Dynamic pricing algorithm based on medium and dimensions",
        "Responsive glassmorphism storefront design"
      ],
      metrics: [
        { label: "Database Speed", value: "Fast Indexing" },
        { label: "UI Response", value: "100% Mobile Ready" }
      ],
      image: "/custom_artistry.png",
      githubUrl: "https://github.com/SnehabaParmar",
      featured: true
    },
    {
      id: "smart-ticket-llm",
      title: "LLM-Based Smart Support Ticket Management",
      category: "GenAI & LLM",
      subtitle: "Automated Ticket Classification, AI Response Generation & Escalation via Gemini API",
      description: "An AI-powered support ticket management system to automate ticket classification, response generation, and escalation decisions using Google Gemini API and FastAPI.",
      longDescription: "This enterprise GenAI application leverages Google Gemini API and prompt engineering pipelines to automatically parse customer support tickets, classify severity and category, generate contextual resolution responses, and determine intelligent escalation paths. Built with a responsive React frontend, FastAPI backend, session-based ticket history tracking, and workflow analytics.",
      technologies: ["Python", "FastAPI", "React", "REST API", "Google Gemini API", "Prompt Engineering"],
      features: [
        "Automated AI ticket categorization and severity scoring",
        "Context-aware AI draft response generation powered by Gemini API",
        "Intelligent escalation decision engine with threshold triggers",
        "Responsive workflow tracking interface with session-based history",
        "FastAPI high-speed RESTful microservice backend"
      ],
      metrics: [
        { label: "Classification Speed", value: "< 300ms" },
        { label: "AI Accuracy", value: "95.8%" }
      ],
      image: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=800&q=80",
      githubUrl: "https://github.com/SnehabaParmar",
      featured: true
    },
    {
      id: "asset-flow",
      title: "AssetFlow – Enterprise Asset Management System",
      category: "Web Development",
      subtitle: "Odoo Hackathon 2026 Full-Stack Enterprise Platform with Role-Based Access",
      description: "A full-stack enterprise asset management system developed for the Odoo Hackathon 2026 to streamline asset tracking, resource booking, maintenance, and audits.",
      longDescription: "Developed for the prestigious Odoo Hackathon 2026, AssetFlow is a comprehensive resource management platform. It features secure JWT authentication, granular role-based access control (RBAC), interactive analytics dashboards using Recharts, maintenance lifecycle scheduling, and automated audit logs. Built collaboratively in a team GitHub repo with React, Vite, FastAPI, SQLAlchemy, and SQLite.",
      technologies: ["React", "Vite", "Tailwind CSS", "FastAPI", "SQLAlchemy", "Pydantic", "SQLite", "JWT Authentication", "Axios", "Recharts"],
      features: [
        "End-to-end asset lifecycle tracking & resource booking system",
        "Secure JWT authentication with role-based permissions (Admin/Employee/Auditor)",
        "Interactive analytics dashboards with real-time Recharts visualizers",
        "Maintenance workflow automation and scheduled audit logs",
        "Collaborative architecture developed for Odoo Hackathon 2026"
      ],
      metrics: [
        { label: "Hackathon Project", value: "Odoo 2026" },
        { label: "Auth Security", value: "JWT + RBAC" }
      ],
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
      githubUrl: "https://github.com/SnehabaParmar",
      featured: true
    },
    {
      id: "mood-room",
      title: "Mood Room - Emotion-Aware AI App",
      category: "NLP / AI",
      subtitle: "Custom ML Model for Emotion Detection, AI Chatbot & Interactive Mini-Games",
      description: "An emotion-aware application using custom machine learning models to detect user emotions, offering personalized suggestions, voice-based interactions, and interactive mini-games.",
      longDescription: "Mood Room bridges AI and mental wellness by analyzing user inputs through custom NLP pipelines and speech recognition algorithms. The system identifies emotional states in real-time and dynamically tailors content, music recommendations, intelligent conversation via an AI chatbot, and interactive mini-games to elevate user engagement.",
      technologies: ["Python", "Machine Learning", "NLP", "Speech Recognition", "API Integration"],
      features: [
        "Real-time emotion detection from text and voice input",
        "Personalized mood-based content recommendations",
        "Integrated AI chatbot for interactive conversation",
        "Interactive mini-games designed to enhance user engagement",
        "Speech recognition interface for hands-free interactions"
      ],
      metrics: [
        { label: "Emotion Accuracy", value: "91.5%" },
        { label: "Response Latency", value: "< 250ms" }
      ],
      image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80",
      githubUrl: "https://github.com/SnehabaParmar",
      featured: true
    },
    {
      id: "smart-traffic",
      title: "Smart Traffic Signal Optimization System",
      category: "Machine Learning",
      subtitle: "OpenCV Computer Vision Vehicle Detection & Dynamic Signal Timing",
      description: "An intelligent traffic management system that optimizes signal timing based on real-time vehicle density detected using OpenCV and fuzzy logic.",
      longDescription: "Traditional traffic signals operate on fixed timers, causing unnecessary gridlocks. This project uses computer vision and image processing with OpenCV to analyze live camera feeds, count vehicle density across lanes, and compute optimal green light durations using fuzzy logic algorithms.",
      technologies: ["Python", "OpenCV", "Machine Learning", "Fuzzy Logic", "Computer Vision"],
      features: [
        "Real-time vehicle detection and lane density classification",
        "Dynamic signal timing algorithm powered by Fuzzy Logic",
        "OpenCV image processing for noise filtering and bounding box tracking",
        "Reduces traffic idle time and carbon emissions",
        "Visual simulation dashboard for traffic monitoring"
      ],
      metrics: [
        { label: "Congestion Reduction", value: "~35%" },
        { label: "Detection Accuracy", value: "94.2%" }
      ],
      image: "https://images.unsplash.com/photo-1506521781263-d8422e82f27a?auto=format&fit=crop&w=800&q=80",
      githubUrl: "https://github.com/SnehabaParmar",
      featured: true
    }
  ] as Project[],

  certificates: [
    {
      title: "Machine Learning with AI",
      issuer: "Internshala Trainings (with IITM Pravartak)",
      date: "Sept 12, 2025",
      certNo: "fpe9lwiy157",
      imageUrl: "/certificates/internshala_ml.png",
      badgeColor: "from-purple-500 to-indigo-500",
      verifyUrl: "https://trainings.internshala.com/verify_certificate"
    },
    {
      title: "Microsoft Azure AI Fundamentals",
      issuer: "Microsoft",
      date: "June 6, 2025",
      imageUrl: "/certificates/microsoft_azure_ai.png",
      badgeColor: "from-blue-500 to-cyan-400",
    },
    {
      title: "Python Bootcamp",
      issuer: "Let's Upgrade (NSDC & ITM)",
      date: "June 2, 2025",
      certNo: "LUEPYTMAY1251955",
      imageUrl: "/certificates/letsupgrade_python.png",
      badgeColor: "from-amber-500 to-orange-500",
      verifyUrl: "https://www.letsupgrade.in/verify"
    },
    {
      title: "Social Media Marketing with AI",
      issuer: "Sololearn",
      date: "June 08, 2025",
      certNo: "CC-WCIZ77XS",
      imageUrl: "/certificates/sololearn_social_media_ai.jpg",
      badgeColor: "from-emerald-400 to-teal-600",
    },
    {
      title: "Introduction to SQL",
      issuer: "Sololearn",
      date: "May 21, 2025",
      certNo: "CC-QZASYMHFG",
      imageUrl: "/certificates/sololearn_sql.jpg",
      badgeColor: "from-cyan-500 to-blue-600",
    }
  ] as Certificate[],

  languagesSpoken: ["English", "Hindi", "Gujarati"],

  chatbotQA: [
    {
      keywords: ["who", "about", "name", "snehaba", "introduce"],
      response: "I am Snehaba Parmar! I'm an M.Sc. IT student, AI-ML Developer, Web Developer, Python Developer, and Computer Vision Specialist from Gujarat, India."
    },
    {
      keywords: ["certificate", "cert", "microsoft", "internshala", "sql", "python", "sololearn"],
      response: "Snehaba holds 5 verified certificates: 1) Internshala ML with AI, 2) Microsoft Azure AI Fundamentals, 3) Let's Upgrade Python Bootcamp, 4) Sololearn Social Media Marketing with AI, and 5) Sololearn Introduction to SQL. All certificate documents are available to view in the Certificates section!"
    },
    {
      keywords: ["project", "work", "portfolio", "ticket", "asset", "traffic", "mood", "artistry"],
      response: "Snehaba has 5 flagship projects: 1) 'LLM-Based Smart Support Ticket' (Gemini API & FastAPI), 2) 'AssetFlow' (Odoo Hackathon 2026 Enterprise Platform), 3) 'Mood Room' (Emotion-aware ML app), 4) 'Smart Traffic Optimization' (OpenCV Vision), and 5) 'CustomArtistry' (Node.js/MongoDB artwork platform)."
    },
    {
      keywords: ["skills", "technologies", "python", "ml", "fastapi", "react", "gemini"],
      response: "Her core stack includes Python, FastAPI, Google Gemini API, Prompt Engineering, OpenCV, Machine Learning, React, Tailwind CSS, C++, Java, Node.js, MongoDB, SQL, and Git."
    },
    {
      keywords: ["education", "college", "degree", "cgpa", "study"],
      response: "Snehaba is currently pursuing M.Sc. IT (2025-Present) at K.S. School of Business Management. She completed her B.Sc. IT from the same institution with a CGPA of 4.0 / 5.0!"
    },
    {
      keywords: ["contact", "email", "hire", "phone", "reach", "internship"],
      response: "You can reach Snehaba via email at snp087210@gmail.com, phone +91 9228281903, or connect via LinkedIn and GitHub (@SnehabaParmar). She is actively open for internship & development opportunities!"
    }
  ]
};
