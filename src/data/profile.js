/**
 * Developer Profile Configuration
 * Matched directly to Karunakaran G's official resume.
 */
export const profileData = {
  name: "Karunakaran G",
  role: "Full Stack Developer",
  experienceYears: "2.10 Years",
  location: "Chennai, India - 600042 (Velachery)",
  availability: "Immediately Available",
  statusBadge: "Available for Full-time Roles & Projects",

  heroHeadline: "Full Stack Developer",
  heroSubtitle: "Building responsive web applications from the ground up with Angular, React.js, PHP (Laravel), and MySQL.",

  aboutBio: [
    "Full Stack Developer with 2.10 years of experience building responsive, scalable web applications from the ground up at NETAXIS IT SOLUTIONS (P) LTD.",
    "Technically proficient in Angular, React.js, PHP (Laravel), and MySQL, with a primary focus on performance optimization, database normalization, and seamless REST API integration.",
    "Skilled at transforming complex business requirements into user-friendly UI solutions while maintaining high standards for modular code architecture, real-time Firebase user engagement, payment gateway integrations, and custom Lua scripting for DNS handling."
  ],

  highlights: [
    { label: "Experience", value: "2.10 Years", detail: "NETAXIS IT SOLUTIONS (P) LTD" },
    { label: "Core Stack", value: "Angular, React & Laravel", detail: "Full Stack Architecture" },
    { label: "Database", value: "MySQL & Firebase", detail: "Query Tuning & Normalization" },
    { label: "Education", value: "B.Tech IT", detail: "Anna University (2022)" },
  ],

  education: [
    {
      degree: "B.Tech – Information Technology",
      institution: "JACSI College of Engineering, Anna University",
      year: "2022",
    },
    {
      degree: "HSC",
      institution: "Bishop Azaria Memorial Hr Sec School",
      year: "2020",
    },
    {
      degree: "SSLC",
      institution: "Bishop Azaria Memorial Hr Sec School",
      year: "",
    },
  ],

  languages: ["English", "Tamil"],

  contact: {
    email: import.meta.env.VITE_DEVELOPER_EMAIL || "karuna638370@gmail.com",
    phone: import.meta.env.VITE_DEVELOPER_PHONE || "+91 6383702512",
    location: "Chennai, India - 600042",
    github: import.meta.env.VITE_GITHUB_URL || "https://github.com/karuna036",
    linkedin: import.meta.env.VITE_LINKEDIN_URL || "https://www.linkedin.com/in/karunakaran-g-b41179246",
  },

  resume: {
    downloadUrl: import.meta.env.VITE_RESUME_URL || "/resume/Karunakaran_G_FullStack_Resume.pdf",
    fileName: "Karunakaran_G_FullStack_Resume.pdf",
    lastUpdated: "2026",
  },

  navLinks: [
    { name: "Home", href: "#hero" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Expertise", href: "#expertise" },
    { name: "Workflow", href: "#workflow" },
    { name: "Resume", href: "#resume" },
    { name: "Contact", href: "#contact" },
  ],
};
