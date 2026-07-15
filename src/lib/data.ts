export const personal = {
  name: "Abdullah Fikri Harahap",
  shortName: "AFH",
  role: "Fullstack Developer",
  email: "fharahap85@gmail.com",
  location: "Pekanbaru, Riau, Indonesia",
  github: "https://github.com/fharahap85",
  linkedin:
    "https://www.linkedin.com/in/abdullah-fikri-harahap-916704110/",
  photo: "/profil.png",
  status: "Open to remote opportunities",
  typingRoles: [
    "Fullstack Developer",
    "Laravel Specialist",
    "B2B SaaS Builder",
    "API Integrator",
    "Code Refactorer",
  ],
};

export const about = {
  tagline:
    "I architect and build production-ready B2B SaaS platforms that solve real operational challenges — from POS and HRIS to inventory and finance systems.",
  paragraphs: [
    "With over 3 years of hands-on experience in full-stack development, I specialize in crafting scalable Laravel backends, dynamic Vue.js/React frontends, and RESTful API ecosystems that keep enterprise operations running smoothly. My work spans 6+ business units, ~500 employees, and ~40 outlets — all powered by an integrated digital ecosystem I built from the ground up.",
    "I'm currently pursuing my degree in Informatics Engineering at Universitas Islam Riau while actively building independent products under AFH Projects — a personal initiative focused on developing SaaS tools that bridge the gap between global-grade technology and Indonesian SMEs.",
    "My approach is simple: write clean, maintainable code; design systems that scale; and never stop refining the craft. I'm particularly driven by refactoring legacy systems into modern, performant architectures.",
  ],
  highlights: [
    { icon: "MapPin", label: "Pekanbaru, Indonesia" },
    { icon: "Briefcase", label: "3+ Years Experience" },
    { icon: "Zap", label: "Fullstack Engineer" },
  ],
  whatIDo: [
    "Build enterprise-grade Laravel applications with clean architecture",
    "Engineer modern SPAs with Vue.js, React & TypeScript",
    "Design RESTful APIs & integrate third-party services seamlessly",
    "Optimize database performance — MySQL, PostgreSQL, MongoDB",
    "Transform legacy codebases into scalable, maintainable systems",
  ],
};

export const skills = {
  backend: [
    { name: "PHP 8 / Laravel", icon: "SiLaravel" },
    { name: "CodeIgniter", icon: "SiCodeigniter" },
    { name: "Node.js / Express", icon: "SiNodedotjs" },
    { name: "Python", icon: "SiPython" },
    { name: "Golang", icon: "SiGo" },
    { name: "C# / .NET", icon: "SiDotnet" },
    { name: "Redis / Queues", icon: "SiRedis" },
  ],
  frontend: [
    { name: "React / Next.js", icon: "SiReact" },
    { name: "Vue.js / Nuxt.js", icon: "SiVuedotjs" },
    { name: "Inertia.js", icon: "SiInertia" },
    { name: "TypeScript", icon: "SiTypescript" },
    { name: "JavaScript ES6+", icon: "SiJavascript" },
    { name: "HTML5 / CSS3", icon: "SiHtml5" },
    { name: "Tailwind CSS", icon: "SiTailwindcss" },
    { name: "Bootstrap", icon: "SiBootstrap" },
  ],
  databases: [
    { name: "MySQL", icon: "SiMysql" },
    { name: "PostgreSQL", icon: "SiPostgresql" },
    { name: "MS SQL Server", icon: "SiMicrosoftsqlserver" },
    { name: "MongoDB", icon: "SiMongodb" },
  ],
  architecture: [
    { name: "RESTful APIs", icon: "Route" },
    { name: "MVC Architecture", icon: "Boxes" },
    { name: "Microservices", icon: "Network" },
    { name: "JWT Auth", icon: "Key" },
  ],
  tools: [
    { name: "Git / GitHub", icon: "SiGit" },
    { name: "Docker", icon: "SiDocker" },
    { name: "Postman", icon: "SiPostman" },
    { name: "VS Code", icon: "SiVisualstudiocode" },
    { name: "Linux (Ubuntu/Debian)", icon: "SiLinux" },
    { name: "AI Tools", icon: "Bot" },
  ],
};

export const experiences = [
  {
    period: "2024 — Present",
    title: "Full-Stack Developer",
    company: "PT. Babada Wasaka Indonesia",
    location: "Pekanbaru",
    items: [
      "Architect and maintain 6+ enterprise systems serving ~500 employees and ~40 outlets through an integrated digital ecosystem",
      "Built core business applications: DreamPOS (Point-of-Sale), MyRotte (Customer Loyalty), Simbada (Attendance), Koperasi Syariah Babada",
      "Designed and implemented RESTful APIs for real-time inter-application integration",
      "Own full SDLC — system architecture, frontend, backend, database optimization, deployment, and ongoing maintenance",
    ],
  },
  {
    period: "2025 — Present",
    title: "Laravel Developer",
    company: "PT Azia Kimia Nusantara",
    location: "Pekanbaru",
    items: [
      "Built integrated business management system covering inventory, stock opname, accounting, and financial reporting",
      "Implemented CoreTax-compliant financial reporting modules for regulatory compliance",
      "Designed and optimized MySQL database architecture for performance at scale",
      "Implemented RBAC using Spatie Permission, collaborating with stakeholders on continuous enhancement",
    ],
  },
  {
    period: "2022 — 2024",
    title: "Vice Secretary II",
    company: "Yakesma Riau",
    location: "Pekanbaru",
    items: [
      "Developed a digital archive management system streamlining document storage and administrative workflows",
      "Coordinated cross-divisional communication and documentation",
      "Contributed to ~30% organizational efficiency improvement through process digitalization",
    ],
  },
  {
    period: "2021 — 2022",
    title: "Web Developer Intern",
    company: "Dept. of Marine Affairs & Fisheries",
    location: "Tanjung Balai",
    items: [
      "Built a Decision Support System (DSS) using PHP-MySQL with Weighted Product method for fisheries aid distribution",
      "Designed data input, criteria management, weighting, and automated ranking modules",
      "Developed automated recommendation and analysis features for eligibility scoring",
    ],
  },
];

export const education = [
  {
    period: "2015 — 2022",
    degree: "Bachelor of Informatics Engineering",
    school: "Islamic University of Riau",
    gpa: "3.07",
    focus:
      "Software Development, Information Systems, Database Management, AI, Decision Support Systems. Final project: DSS for fishing aid distribution using Weighted Product method.",
  },
  {
    period: "2013 — 2015",
    degree: "Vocational High School",
    school: "Computer & Network Engineering — SMKN 2 Kisaran",
    focus:
      "Network Administration, System Maintenance, Computer Hardware, IT Infrastructure fundamentals.",
  },
];

export const certifications = [
  {
    title: "Full-Stack Web Developer",
    issuer: "Udemy",
    topics:
      "HTML, CSS, JavaScript, Node.js, React, PostgreSQL, Web3 & Dapps",
  },
];

export const projects = [
  {
    title: "MyRotte",
    tagline: "Customer Loyalty Platform",
    description:
      "Mobile-friendly loyalty and ordering platform for a bakery/F&B business, integrated exclusively via REST API with the DreamPOS backend.",
    role: "Frontend Developer & API Integrator",
    roleColor: "green",
    tech: ["Vue.js", "REST API", "Tailwind CSS"],
    status: "Private",
  },
  {
    title: "Simbada",
    tagline: "Attendance System",
    description:
      "Employee attendance system supporting real-time barcode scanning via phone or webcam, with role-based access and automated periodic recap.",
    role: "Backend & Integrator Developer",
    roleColor: "blue",
    tech: ["CodeIgniter 3", "jQuery AJAX", "MySQL"],
    status: "Private",
  },
  {
    title: "Finance System",
    tagline: "Financial Platform",
    description:
      "Financial calculation and reporting engine with data visualization using Chart.js and Laravel Collections.",
    role: "Financial Platform",
    roleColor: "purple",
    tech: ["Laravel", "Vue.js", "Chart.js"],
    status: "Private",
  },
  {
    title: "Fazpass Integration",
    tagline: "Telecom Integration",
    description:
      "WhatsApp/SMS OTP authentication system integration for user verification and security enhancement.",
    role: "Telecom Integration",
    roleColor: "orange",
    tech: ["Fazpass API", "WhatsApp", "Laravel"],
    status: "Private",
  },
  {
    title: "DreamPOS",
    tagline: "POS System",
    description:
      "Core POS system for PT. Babada Wasaka Indonesia — multi-outlet retail transaction processing, inventory sync, and reporting.",
    role: "Production System",
    roleColor: "green",
    tech: ["Laravel", "Vue.js", "MySQL"],
    status: "Private",
  },
  {
    title: "Koperasi Syariah Babada",
    tagline: "Sharia Cooperative",
    description:
      "Sharia cooperative management system — member management, savings/loan tracking, and financial reporting.",
    role: "Production System",
    roleColor: "green",
    tech: ["Laravel", "React", "MySQL"],
    status: "Private",
  },
  {
    title: "Organia",
    tagline: "Organization Management SaaS",
    description:
      "Laravel + React/TypeScript SaaS for organization management — attendance, OCR treasurer tools, and RBAC.",
    role: "In Development",
    roleColor: "yellow",
    tech: ["Laravel", "React", "TypeScript", "PostgreSQL", "REST API"],
    status: "Development",
  },
  {
    title: "AFH Projects",
    tagline: "Website Builder SaaS",
    description:
      "Drag-and-drop website builder SaaS for Indonesian SMEs — Wix-style builder with GrapesJS integration.",
    role: "In Development",
    roleColor: "yellow",
    tech: ["Node.js", "Express", "Vue 3", "PostgreSQL", "GrapesJS", "Docker"],
    status: "Development",
  },
];

export const socialLinks = [
  { label: "GitHub", url: personal.github, icon: "Github" },
  { label: "LinkedIn", url: personal.linkedin, icon: "Linkedin" },
  { label: "Email", url: `mailto:${personal.email}`, icon: "Mail" },
];
