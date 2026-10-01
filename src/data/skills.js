/**
 * Skills Data Configuration
 * Directly aligned with Karunakaran G's official resume.
 */
export const skillsCategories = [
  {
    id: "frontend",
    title: "Frontend Development",
    description: "Building responsive, modern, and component-driven user interfaces",
    skills: [
      { name: "Angular", category: "Framework", description: "Modular UI architecture, two-way data binding, TypeScript" },
      { name: "React.js", category: "Library", description: "Reusable components, hooks, dynamic interfaces" },
      { name: "JavaScript (ES6+)", category: "Core Language", description: "Async/await, closures, modern ES features" },
      { name: "HTML5", category: "Markup", description: "Semantic markup, modern web standards" },
      { name: "CSS3", category: "Styling", description: "Flexbox, CSS Grid, media queries, animations" },
      { name: "Responsive Design", category: "Design Practice", description: "Mobile-first, cross-device layout design" },
      { name: "DOM Manipulation", category: "Core Web", description: "Dynamic DOM events and state reactivity" },
    ],
  },
  {
    id: "backend",
    title: "Backend Development",
    description: "Developing robust MVC architectures, RESTful services, and server logic",
    skills: [
      { name: "PHP", category: "Core Language", description: "Object-oriented server-side programming" },
      { name: "Laravel", category: "Framework", description: "Eloquent ORM, routing, controllers, migrations, queues" },
      { name: "REST API Integration", category: "API Design", description: "Modular endpoints, standardized JSON payloads" },
      { name: "Lua Script DNS Integration", category: "Networking / Scripting", description: "Programmatic network traffic control & DNS filtering" },
    ],
  },
  {
    id: "database",
    title: "Database Management",
    description: "Designing normalized relational schemas and database optimization",
    skills: [
      { name: "MySQL", category: "Relational DB", description: "Database normalization, performance tuning, query indexing" },
    ],
  },
  {
    id: "integrations",
    title: "Integrations & APIs",
    description: "Real-time communication engines, cloud messaging, and payment processing",
    skills: [
      { name: "Firebase Realtime DB", category: "BaaS", description: "Live document storage & synchronization" },
      { name: "Firebase Push Notifications (FCM)", category: "Cloud Messaging", description: "Low-latency real-time push alerts & queues" },
      { name: "Payment APIs", category: "E-Commerce", description: "Secure multi-channel merchant payment workflows" },
      { name: "Webhooks", category: "Event Driven", description: "Automated transaction synchronization & callback handlers" },
      { name: "Google APIs", category: "Cloud Services", description: "Third-party service integrations & authentication" },
    ],
  },
  {
    id: "tools",
    title: "Engineering Tools & Performance",
    description: "Source code management, performance tuning, and debugging",
    skills: [
      { name: "Git & GitHub", category: "Version Control", description: "Branching workflows, commits, pull requests" },
      { name: "Debugging", category: "Diagnostic", description: "Browser dev tools, endpoint troubleshooting" },
      { name: "Web Page Performance Optimization", category: "Performance", description: "Asset minification, bundle tuning, latency reduction" },
      { name: "Postman", category: "API Testing", description: "REST endpoint debugging, test suites & payloads" },
    ],
  },
  {
    id: "ai-tools",
    title: "Modern AI & Productivity Tools",
    description: "AI-assisted development, workflow acceleration, and prompt engineering",
    skills: [
      { name: "ChatGPT", category: "AI Assistant", description: "Architecture planning, troubleshooting, automation" },
      { name: "Claude AI", category: "AI Assistant", description: "Code review, deep reasoning, documentation" },
      { name: "GitHub Copilot", category: "AI Developer Tool", description: "Code synthesis, autocomplete, testing efficiency" },
      { name: "Cursor AI", category: "AI IDE", description: "Agentic coding, contextual codebase navigation" },
      { name: "Prompt Engineering", category: "AI Practice", description: "Structured prompting, context grounding, AI pipelines" },
    ],
  },
];
