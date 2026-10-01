/**
 * Projects Data Configuration
 * Matched directly to the 4 verified projects in Karunakaran G's official resume.
 */
export const projectsData = [
  {
    id: "ctrlify",
    title: "CTRLify",
    subtitle: "Block Distracting Websites | DNS Filtering",
    category: "Network & Systems Engineering",
    shortDescription: "A sophisticated web-based DNS management system leveraging PowerDNS and Lua scripting to provide granular, profile-based internet control. Implements real-time IP configuration and cross-device website filtering.",
    fullDescription: "A sophisticated web-based DNS management system leveraging PowerDNS and Lua scripting to provide granular, profile-based internet control. Implements real-time IP configuration and cross-device website filtering.",
    technologies: [
      "PHP",
      "Laravel",
      "MySQL",
      "Lua Scripting",
      "PowerDNS",
      "DNS Management"
    ],
    features: [
      "Granular, profile-based internet control & filtering rules",
      "Real-time IP configuration & domain management",
      "Cross-device website filtering via DNS request interception",
      "Custom Lua scripts for high-throughput request handling",
      "Robust Laravel backend services & administrative portal"
    ],
    highlight: "PowerDNS & Custom Lua Scripting"
  },
  {
    id: "schoolkitify",
    title: "SchoolKitify",
    subtitle: "School Communication & Management Platform",
    category: "Full Stack Application",
    shortDescription: "Built with Angular and Laravel to connect administrators and parents through a unified real-time dashboard. Integrated Firebase alerts for instant push notifications for homework, attendance, and urgent school news.",
    fullDescription: "Built with Angular and Laravel to connect administrators and parents through a unified real-time dashboard. Integrated Firebase alerts for instant push notifications for homework, attendance, and urgent school news.",
    technologies: [
      "Angular",
      "Laravel",
      "PHP",
      "MySQL",
      "Firebase FCM",
      "REST APIs"
    ],
    features: [
      "Unified real-time dashboard for administrators and parents",
      "Instant Firebase FCM push alerts for homework & attendance",
      "Urgent school notification and bulletin broadcast system",
      "Student & staff profile tracking with role-based access",
      "Structured MySQL database schema with optimized queries"
    ],
    highlight: "Real-Time Firebase Push Notification Engine"
  },
  {
    id: "hrmify",
    title: "HRMify",
    subtitle: "Online HR & Payroll Automation Solution",
    category: "Enterprise Web Application",
    shortDescription: "A robust Angular and Laravel platform that automates biometric attendance, leave tracking, and employee management. Streamlines HR workflows by integrating real-time data into a seamless, high-performance payroll system.",
    fullDescription: "A robust Angular and Laravel platform that automates biometric attendance, leave tracking, and employee management. Streamlines HR workflows by integrating real-time data into a seamless, high-performance payroll system.",
    technologies: [
      "Angular",
      "Laravel",
      "PHP",
      "MySQL",
      "Biometric APIs",
      "REST APIs"
    ],
    features: [
      "Automated biometric attendance sync & time logging",
      "Comprehensive employee directory & leave workflow management",
      "Real-time payroll processing & salary slip generation",
      "Modular Laravel MVC backend with secure token authorization",
      "High-traffic database query tuning and report exports"
    ],
    highlight: "Biometric Integration & Payroll Engine"
  },
  {
    id: "gomeetify",
    title: "GoMeetify",
    subtitle: "Real-Time Audio & Video Calling Platform",
    category: "Real-Time Communication",
    shortDescription: "An Angular and Laravel meeting platform featuring real-time Firebase notifications. Integrates secure merchant payment gateways for seamless scheduling and automated transactions.",
    fullDescription: "An Angular and Laravel meeting platform featuring real-time Firebase notifications. Integrates secure merchant payment gateways for seamless scheduling and automated transactions.",
    technologies: [
      "Angular",
      "Laravel",
      "PHP",
      "MySQL",
      "Firebase",
      "Payment Gateways",
      "REST APIs"
    ],
    features: [
      "Real-time audio & video calling session handling",
      "Live Firebase notifications for meetings, invites & alerts",
      "Secure merchant payment gateway integration with webhooks",
      "Automated appointment scheduling & transaction synchronization",
      "Responsive Angular UI with stateful client-server flows"
    ],
    highlight: "Real-Time Video Calling & Merchant Payments"
  }
];
