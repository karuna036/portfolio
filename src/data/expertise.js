/**
 * Technical Expertise Data Configuration
 * Showcases what the developer can build across major functional areas.
 */
export const expertiseData = [
  {
    id: "frontend-dev",
    category: "Frontend Development",
    icon: "Layout",
    description: "Creating accessible, performant, and intuitive client-side applications with modern frameworks.",
    capabilities: [
      { name: "Responsive interfaces", detail: "Pixel-perfect mobile, tablet, and desktop responsive layouts" },
      { name: "Reusable React components", detail: "Clean, maintainable, modular component architecture" },
      { name: "AngularJS applications", detail: "Structuring single-page architectures and dynamic views" },
      { name: "API integration", detail: "Smooth client-side data fetching and asynchronous state synchronization" },
      { name: "Form handling", detail: "Rigorous client-side validation, error handling, and accessible inputs" },
      { name: "State management", detail: "Managing localized and global application states predictably" },
    ],
  },
  {
    id: "backend-dev",
    category: "Backend Development",
    icon: "Server",
    description: "Architecting structured, secure, and maintainable server-side applications and services.",
    capabilities: [
      { name: "Laravel applications", detail: "Full-lifecycle MVC systems, migrations, seeders, and Eloquent models" },
      { name: "REST APIs", detail: "Standardized JSON responses, resource routing, status codes, and documentation" },
      { name: "Authentication", detail: "JWT, session cookies, Sanctum, and role-based permissions (RBAC)" },
      { name: "Middleware", detail: "Custom HTTP request filters, rate limiting, and security headers" },
      { name: "Queue processing", detail: "Asynchronous job queues and worker background processing" },
      { name: "API integrations", detail: "Consuming external web services, error recovery, and payload transformation" },
    ],
  },
  {
    id: "database-arch",
    category: "Database Engineering",
    icon: "Database",
    description: "Designing efficient data persistence layers with both relational and real-time NoSQL platforms.",
    capabilities: [
      { name: "MySQL schema design", detail: "Normalized table structures, primary/foreign keys, and data integrity" },
      { name: "Relationships", detail: "One-to-many, many-to-many, and polymorphic relationship mapping" },
      { name: "Query optimization", detail: "Query profiling, index strategies, and eliminating N+1 query bottlenecks" },
      { name: "Firebase", detail: "Real-time document stores, Firestore rules, and real-time synchronization" },
    ],
  },
  {
    id: "integrations",
    category: "Third-Party Integrations & Systems",
    icon: "Cpu",
    description: "Connecting core web platforms with external services, networks, and communication channels.",
    capabilities: [
      { name: "Payment gateways", detail: "Secure transaction processing, checkout workflows, and reconciliation" },
      { name: "Webhooks", detail: "Receiving, verifying signatures, and processing asynchronous webhook events" },
      { name: "Firebase notifications", detail: "Real-time push alerts and live event messaging" },
      { name: "Third-party APIs", detail: "REST/JSON external services, authentication headers, and data synchronization" },
      { name: "DNS services", detail: "DNS configuration, filtering scripts, and rule management via Lua" },
    ],
  },
];
