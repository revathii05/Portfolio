import { Project, Experience, EducationItem, Certification, Achievement, SkillCategory } from '../types';

export const personalInfo = {
  name: "Revathi Palla",
  role: "Data Science & Full-Stack Developer",
  headline: "Bridging Data Science, Machine Learning & Modern Full-Stack Systems",
  location: "Duvvada, Visakhapatnam, Andhra Pradesh, India",
  phone: "+91-7036315580",
  email: "revathipalla986@gmail.com",
  linkedin: "https://linkedin.com/in/revathi-p8280342b8",
  github: "https://github.com/revathipalla",
  resumePath: "/Revathi_Palla_Resume.docx",
  summary: "Computer Science and Data Science undergraduate (CGPA: 8.13) with proven practical experience across data analysis, machine learning pipelines, and full-stack web development. Proficient in Python, SQL, FastAPI, React.js, and the data science ecosystem (Pandas, NumPy, Scikit-learn, Power BI), with hands-on expertise in exploratory data analysis (EDA), predictive modeling, and building secure REST APIs with JWT authentication. National hackathon finalist (3rd Place) with strong analytical thinking and collaborative Agile mindset.",
  openTo: "Open to Software Engineering, Data Science, and Full-Stack Roles & Internships",
  college: "Vignan's Institute of Engineering for Women",
  cgpa: "8.13",
};

export const quickStats = [
  { label: "B.Tech CGPA", value: "8.13", detail: "CS & Data Science" },
  { label: "Internships", value: "3", detail: "Data, Power BI & Full-Stack" },
  { label: "National Hackathon", value: "3rd Place", detail: "Team Lead - HACKERS 2025" },
  { label: "Verified Credentials", value: "6+", detail: "NPTEL Elite, Rice Univ, GDG" },
];

export const skillCategories: SkillCategory[] = [
  {
    category: "Programming Languages",
    description: "Core languages used for systems engineering, scripting, and data manipulation.",
    skills: [
      { name: "Python", description: "Primary language for data science, machine learning, and FastAPI backend engineering", highlight: true, tags: ["FastAPI", "Pandas", "NumPy"] },
      { name: "Java", description: "Strong OOP foundation with NPTEL Elite + Silver certification", highlight: true, tags: ["OOP", "Data Structures", "NPTEL Silver"] },
      { name: "SQL", description: "Relational database querying, schema design, and data aggregation", highlight: true, tags: ["MySQL", "HackerRank Certified"] },
      { name: "JavaScript", description: "ES6+ asynchronous web scripting for reactive interfaces", tags: ["Web", "ES6+"] },
      { name: "C", description: "Foundational procedural programming and memory concepts", tags: ["Core CS"] },
    ],
  },
  {
    category: "Backend & APIs",
    description: "Architecting secure, high-performance web services and data layer integration.",
    skills: [
      { name: "FastAPI", description: "High-performance Python framework used in FraudShield & Civix platforms", highlight: true, tags: ["REST APIs", "Async", "Python"] },
      { name: "REST APIs", description: "Stateless RESTful endpoint design, error handling, and swagger docs", highlight: true, tags: ["API Design", "Postman"] },
      { name: "JWT Authentication", description: "Secure token generation, role-based access control, and OTP flows", highlight: true, tags: ["Security", "RBAC"] },
      { name: "MySQL / SQL", description: "Relational data modeling, table normalization, and transactional queries", highlight: true, tags: ["RDBMS", "Schema Design"] },
    ],
  },
  {
    category: "Frontend Engineering",
    description: "Designing responsive, intuitive, and high-conversion user interfaces.",
    skills: [
      { name: "React.js", description: "Component-driven dashboards, state management, and real-time feeds", highlight: true, tags: ["Hooks", "UI Components", "Vite"] },
      { name: "Angular", description: "Modular enterprise client architecture used in the Civix civic platform", highlight: true, tags: ["TypeScript", "Civix"] },
      { name: "HTML5 & CSS3", description: "Semantic markup, modern layout models, flexbox, and grid", tags: ["Responsive", "Semantic"] },
      { name: "Modern JavaScript", description: "DOM manipulation, fetch API, asynchronous event handling", tags: ["Client-Side"] },
    ],
  },
  {
    category: "Data Science & Machine Learning",
    description: "Extracting actionable intelligence, statistical modeling, and predictive systems.",
    skills: [
      { name: "Pandas", description: "Data wrangling, cleaning, reshaping, and tabular dataset transformations", highlight: true, tags: ["Data Wrangling", "EDA"] },
      { name: "NumPy", description: "Vectorized mathematical operations, matrix math, and array computations", tags: ["Numerical Computing"] },
      { name: "Scikit-learn", description: "Supervised and unsupervised predictive models, evaluations, and metrics", highlight: true, tags: ["ML Models", "Evaluation"] },
      { name: "Matplotlib", description: "Exploratory charts, distribution plots, and correlation visuals", tags: ["Visualization"] },
      { name: "Data Preprocessing & EDA", description: "Handling outliers, null values, feature engineering, and exploratory analysis", highlight: true, tags: ["Pipeline"] },
      { name: "Applied Statistics", description: "Hypothesis validation, summary statistics, and trend identification", tags: ["Analytics"] },
    ],
  },
  {
    category: "Data Visualization & Business Intelligence",
    description: "Transforming raw records into interactive executive dashboards and KPI reports.",
    skills: [
      { name: "Power BI", description: "End-to-end dashboard design with custom slicers, drill-throughs, and KPIs", highlight: true, tags: ["Dashboards", "K-Square Intern"] },
      { name: "Power Query", description: "Automated ETL, data cleaning, column splitting, and transformation steps", tags: ["ETL", "Transformation"] },
      { name: "DAX", description: "Data Analysis Expressions, calculated measures, time intelligence, and KPI formulas", highlight: true, tags: ["Measures", "KPIs"] },
      { name: "Microsoft Excel", description: "Pivot tables, advanced lookups, conditional formatting, and analytical sheets", tags: ["Spreadsheets"] },
    ],
  },
  {
    category: "Developer Tools & Core Concepts",
    description: "Engineering workflows, version control, testing tools, and CS fundamentals.",
    skills: [
      { name: "Git & GitHub", description: "Distributed version control, branch management, code collaboration", highlight: true, tags: ["Version Control"] },
      { name: "Postman", description: "API request crafting, payload testing, and authentication validation", tags: ["API Testing"] },
      { name: "VS Code", description: "Primary modern development environment with extensions and debuggers", tags: ["IDE"] },
      { name: "Linux / Unix", description: "Command-line navigation, shell utilities, and environment configurations", tags: ["OS"] },
      { name: "OOP & DSA", description: "Object-oriented paradigm, algorithmic efficiency, and data structures", highlight: true, tags: ["Core CS"] },
      { name: "DBMS Concepts", description: "ACID properties, transaction isolation, indexing, and normalization", tags: ["Database Core"] },
    ],
  },
];

export const projects: Project[] = [
  {
    id: "fraud-shield",
    title: "FraudShield",
    subtitle: "Real-Time Rule-Based Financial Fraud Detection & Prevention Platform",
    category: "Full-Stack",
    timeline: "Jun 2026 – Jul 2026",
    description: "Developed a comprehensive rule-based fraud detection platform designed to detect, flag, and mitigate suspicious financial transactions in real time.",
    problem: "Financial platforms face increasing risks of automated account takeovers, unauthorized high-value transfers, and rapid anomaly patterns that slip past simple threshold checks.",
    solution: "Engineered a multi-tiered rule engine in Python and FastAPI coupled with a reactive React.js operational dashboard, combining risk scoring with OTP verification to intercept anomalous activities.",
    contributions: [
      "Designed and implemented rule-based fraud checks, anomaly triggers, and automated risk scoring algorithms.",
      "Engineered secure authentication and authorization with JSON Web Tokens (JWT) and OTP-based verification for sensitive operations.",
      "Built high-performance REST APIs in FastAPI to handle transaction intake, score computation, and audit logging.",
      "Constructed a responsive React.js dashboard displaying live transaction feeds, fraud warning banners, risk breakdowns, and downloadable compliance reports.",
      "Implemented relational SQL schemas to persist user accounts, audit trails, and transactional records with data integrity."
    ],
    features: [
      "Dynamic Transaction Risk Scoring Engine",
      "JWT-Based Authentication with OTP Two-Factor Verification",
      "Live React.js Incident Monitoring Dashboard",
      "Rule-Based Anomaly Flagging (Velocity, Geolocation, Amount Deviations)",
      "Structured FastAPI Endpoints with SQL Persistence"
    ],
    technologies: ["Python", "FastAPI", "React.js", "SQL", "JWT Authentication", "REST APIs", "Tailwind CSS"],
    metrics: [
      { label: "Auth Security", value: "JWT + OTP" },
      { label: "Backend Latency", value: "< 50ms" },
      { label: "Architecture", value: "FastAPI + SQL" },
    ],
    githubUrl: "https://github.com/revathipalla/FraudShield",
    previewType: "fraud-shield",
  },
  {
    id: "civix",
    title: "Civix",
    subtitle: "Digital Civic Engagement, Public Petitions & Sentiment Analytics Platform",
    category: "Full-Stack",
    timeline: "Aug 2026 – Oct 2026",
    description: "Built an end-to-end digital civic engagement platform enabling citizens to propose, sign, and monitor public petitions while offering municipal officials transparency tools and public polling.",
    problem: "Traditional civic grievance and petition mechanisms suffer from opacity, lack of verification, and no real-time way for citizens to track resolution status.",
    solution: "Constructed a secure, role-based platform bridging citizens and officials through verified petition lifecycles, interactive public polling, and geo-category filtering.",
    contributions: [
      "Implemented robust user registration, authentication, and Role-Based Access Control (RBAC) using JWT for citizens and government officials.",
      "Engineered full petition lifecycle management including location- and category-based filtering and status progression (Active, Under Review, Resolved, Closed).",
      "Created public polling workflows where citizens cast verified votes and view aggregate community sentiment analytics.",
      "Developed high-throughput FastAPI REST APIs integrated with an Angular frontend, using SQL/MySQL for relational persistence.",
      "Designed administrative and official oversight panels to monitor engagement metrics, flag inappropriate submissions, and publish status updates."
    ],
    features: [
      "Role-Based Access Control (Citizen, Official, Admin)",
      "Location & Departmental Category Filtering",
      "Real-time Petition Lifecycle & Signature Milestone Tracking",
      "Interactive Public Polling & Sentiment Visualizations",
      "Scalable FastAPI Backend with MySQL Data Layer"
    ],
    technologies: ["Python", "FastAPI", "Angular", "SQL / MySQL", "JWT", "REST APIs", "TypeScript"],
    metrics: [
      { label: "Access Control", value: "RBAC (Citizens & Officials)" },
      { label: "Workflow States", value: "Active / Review / Closed" },
      { label: "Data Store", value: "MySQL RDBMS" },
    ],
    githubUrl: "https://github.com/revathipalla/Civix-Civic-Platform",
    previewType: "civix",
  },
];

export const experiences: Experience[] = [
  {
    id: "power-bi-ksquare",
    role: "Power BI Intern",
    company: "K-Square Company",
    timeline: "Apr 2026 – Jun 2026",
    type: "Internship",
    description: "Focused on business intelligence, ETL pipelines, and executive dashboard development to drive data-informed decision-making across organizational units.",
    highlights: [
      "Built dynamic, interactive dashboards in Power BI to visualize operational and financial metrics for executive stakeholders.",
      "Applied Power Query for robust ETL workflows, transforming, parsing, and cleaning raw datasets from disparate sources.",
      "Authored custom DAX measures, calculated columns, time-intelligence indicators, and key performance indicator (KPI) formulas.",
      "Engineered reports equipped with dynamic slicers, matrix views, and drill-through capabilities to reveal actionable underlying trends."
    ],
    technologies: ["Power BI", "Power Query", "DAX", "Data Modeling", "ETL", "Excel", "Data Visualization"],
    badgeColor: "border-amber-500/30 bg-amber-500/10 text-amber-300",
  },
  {
    id: "ai-data-analytics-datavalley",
    role: "AI-Driven Data Analytics Intern",
    company: "DataValley",
    timeline: "May 2025 – Jun 2025",
    type: "Internship",
    description: "Specialized in AI-driven data analytics and machine learning fundamentals, moving from raw tabular data to predictive model evaluation.",
    highlights: [
      "Conducted extensive data preprocessing, imputation, outlier handling, and exploratory data analysis (EDA) on real-world datasets.",
      "Leveraged Python scientific computing libraries (Pandas, NumPy, Matplotlib) to discover patterns, correlations, and distribution anomalies.",
      "Trained, validated, and evaluated predictive machine learning models using Scikit-learn, translating statistical findings into actionable business insights.",
      "Presented data-driven recommendations and analytical findings in structured reports."
    ],
    technologies: ["Python", "Pandas", "NumPy", "Scikit-learn", "Matplotlib", "EDA", "Machine Learning"],
    badgeColor: "border-teal-500/30 bg-teal-500/10 text-teal-300",
  },
  {
    id: "full-stack-internsveda",
    role: "Full Stack Web Development Intern",
    company: "InternsVeda",
    timeline: "May 2025 – Jun 2025",
    type: "Internship",
    description: "Engineered responsive client interfaces and backend endpoints, integrating web frontends with relational databases.",
    highlights: [
      "Developed and maintained clean, responsive web application interfaces using HTML, CSS, JavaScript, and Python.",
      "Designed and integrated RESTful APIs with SQL databases for efficient data persistence, querying, and retrieval.",
      "Collaborated using Git and GitHub for version control, conducting branch merges and maintaining maintainable codebase conventions."
    ],
    technologies: ["Python", "JavaScript", "HTML5", "CSS3", "REST APIs", "SQL", "Git", "GitHub"],
    badgeColor: "border-indigo-500/30 bg-indigo-500/10 text-indigo-300",
  },
];

export const educationHistory: EducationItem[] = [
  {
    degree: "B.Tech in Computer Science & Data Science",
    institution: "Vignan's Institute of Engineering for Women",
    score: "CGPA: 8.13",
    period: "2023 – 2027",
    details: "Specialized curriculum focusing on Artificial Intelligence, Machine Learning, Data Structures & Algorithms, Database Management Systems, and Software Engineering.",
    highlights: [
      "Consistent academic performer with 8.13 CGPA",
      "Active participant in technical symposiums and national hackathons",
      "Content & Documentation Lead for GeeksForGeeks Student Club"
    ]
  },
  {
    degree: "Board of Intermediate Education (MPC)",
    institution: "A V K Junior College",
    score: "Marks: 848",
    period: "2021 – 2023",
    details: "Mathematics, Physics, and Chemistry (MPC) stream with rigorous foundation in calculus, logic, and analytical problem-solving."
  },
  {
    degree: "Board of Secondary Education (SSC)",
    institution: "High School Nanginarapadu",
    score: "Marks: 566",
    period: "2020 – 2021",
    details: "Secondary school certificate with high distinction across science, mathematics, and language subjects."
  }
];

export const certifications: Certification[] = [
  {
    title: "Python for Data Science",
    issuer: "Rice University via Coursera",
    badge: "Coursera Verified",
    category: "Data Science"
  },
  {
    title: "Programming in Java (Elite + Silver)",
    issuer: "NPTEL",
    badge: "Elite + Silver Medal",
    category: "Programming"
  },
  {
    title: "SQL (Basics) Certified",
    issuer: "HackerRank",
    badge: "Skill Certification",
    category: "Core CS"
  },
  {
    title: "Database Management Systems",
    issuer: "NPTEL",
    badge: "National Certification",
    category: "Core CS"
  },
  {
    title: "AI for Cybersecurity & Cloud Security",
    issuer: "Google Developer Groups (GDG)",
    badge: "GDG Specialized",
    category: "Cloud & Security"
  },
  {
    title: "Employability Skill Training Program",
    issuer: "Naandi Foundation",
    badge: "Professional Readiness",
    category: "Professional Skills"
  }
];

export const achievements: Achievement[] = [
  {
    title: "National Hackathon Finalist — 3rd Place",
    organization: "HACKERS 2025",
    roleBadge: "Team Lead — Team Vision Well",
    description: "Led team 'Vision Well' through a grueling national hackathon to secure 3rd place overall among top nationwide institutions.",
    highlights: [
      "Led technical ideation, rapid prototype architecture, and pitch presentation.",
      "Shortlisted for Smart India Hackathon (SIH) 2025 Round 2 out of thousands of competing student teams across India.",
      "Demonstrated agile team coordination, real-time debugging, and high-pressure problem solving."
    ]
  },
  {
    title: "Content & Documentation Lead",
    organization: "GeeksForGeeks Student Club (College Chapter)",
    roleBadge: "Club Leadership",
    description: "Spearheaded technical documentation, coding workshop content, and learning roadmaps for peers and junior developers.",
    highlights: [
      "Curated coding tutorials and DSA problem-solving walkthroughs.",
      "Facilitated technical sharing sessions and peer code reviews.",
      "Promoted collaborative coding culture across the engineering department."
    ]
  }
];
