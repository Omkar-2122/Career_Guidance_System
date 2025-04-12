export const domainRoadmaps = {
  "frontend-developer": {
    phases: [
      {
        title: "Phase 1: Frontend Fundamentals",
        days: "Days 1-33",
        goal: "Master core web technologies and basics of modern development",
        sections: [
          {
            title: "HTML5 & CSS3",
            days: "Days 1-11",
            topics: [
              "Semantic HTML & Accessibility",
              "CSS Flexbox & Grid",
              "Responsive Design",
              "CSS Animations",
              "CSS Preprocessors (Sass)"
            ],
            resources: [
              "MDN Web Docs",
              "CSS-Tricks",
              "Frontend Masters",
              "Web.dev Fundamentals"
            ]
          },
          {
            title: "JavaScript Essentials",
            days: "Days 12-22",
            topics: [
              "Modern JavaScript (ES6+)",
              "DOM Manipulation",
              "Async Programming",
              "Error Handling",
              "Browser APIs"
            ],
            resources: [
              "JavaScript.info",
              "Eloquent JavaScript",
              "MDN JavaScript Guide",
              "JavaScript30"
            ]
          },
          {
            title: "Development Tools",
            days: "Days 23-33",
            topics: [
              "Git Version Control",
              "Package Managers",
              "Build Tools",
              "Browser DevTools",
              "Code Editors & IDEs"
            ],
            resources: [
              "Git Documentation",
              "NPM Guides",
              "Webpack Documentation",
              "Chrome DevTools"
            ]
          }
        ]
      },
      {
        title: "Phase 2: Modern Frontend Frameworks",
        days: "Days 34-66",
        goal: "Build modern web applications with React and related technologies",
        sections: [
          {
            title: "React Fundamentals",
            days: "Days 34-44",
            topics: [
              "Components & Props",
              "State & Lifecycle",
              "Hooks System",
              "Context API",
              "Performance Optimization"
            ],
            resources: [
              "React Documentation",
              "React Patterns",
              "Hooks Guide",
              "React DevTools"
            ]
          },
          {
            title: "State Management",
            days: "Days 45-55",
            topics: [
              "Redux Toolkit",
              "React Query",
              "Local Storage",
              "State Persistence",
              "Performance Monitoring"
            ],
            resources: [
              "Redux Documentation",
              "React Query Docs",
              "State Management Patterns",
              "Performance Testing Tools"
            ]
          },
          {
            title: "Advanced React",
            days: "Days 56-66",
            topics: [
              "TypeScript Integration",
              "Testing (Jest & RTL)",
              "Code Splitting",
              "Server Components",
              "Next.js Basics"
            ],
            resources: [
              "TypeScript Handbook",
              "Testing Library Docs",
              "Next.js Documentation",
              "React Performance Guide"
            ]
          }
        ]
      },
      {
        title: "Phase 3: Professional Development",
        days: "Days 67-100",
        goal: "Master advanced concepts and prepare for professional development",
        sections: [
          {
            title: "Advanced Concepts",
            days: "Days 67-77",
            topics: [
              "Web Performance",
              "Progressive Web Apps",
              "Accessibility (a11y)",
              "SEO Optimization",
              "Cross-browser Compatibility"
            ],
            resources: [
              "Web Vitals",
              "PWA Workshop",
              "A11Y Project",
              "Google SEO Guide"
            ]
          },
          {
            title: "Architecture & Patterns",
            days: "Days 78-88",
            topics: [
              "Design Patterns",
              "Clean Code Principles",
              "Component Architecture",
              "State Management Patterns",
              "Performance Patterns"
            ],
            resources: [
              "Clean Code",
              "Design Patterns Book",
              "Architecture Patterns",
              "React Patterns Guide"
            ]
          },
          {
            title: "Professional Skills",
            days: "Days 89-100",
            topics: [
              "Code Review",
              "Documentation",
              "Deployment Strategies",
              "CI/CD Pipeline",
              "Team Collaboration"
            ],
            resources: [
              "Technical Writing",
              "GitHub Actions",
              "Netlify/Vercel Docs",
              "Agile Practices"
            ]
          }
        ]
      }
    ]
  },

  "backend-developer": {
    phases: [
      {
        title: "Phase 1: Backend Fundamentals",
        days: "Days 1-33",
        goal: "Master core backend concepts and basic server development",
        sections: [
          {
            title: "Server-Side Basics",
            days: "Days 1-11",
            topics: [
              "HTTP Protocol",
              "Node.js Fundamentals",
              "Express.js Framework",
              "RESTful APIs",
              "Middleware Concepts"
            ],
            resources: [
              "Node.js Documentation",
              "Express Guide",
              "REST API Tutorial",
              "HTTP Fundamentals"
            ]
          },
          {
            title: "Database Foundations",
            days: "Days 12-22",
            topics: [
              "SQL Basics",
              "MongoDB Essentials",
              "Database Design",
              "CRUD Operations",
              "Data Modeling"
            ],
            resources: [
              "SQL Tutorial",
              "MongoDB University",
              "Database Design Guide",
              "ORM Documentation"
            ]
          },
          {
            title: "Authentication & Security",
            days: "Days 23-33",
            topics: [
              "User Authentication",
              "JWT Implementation",
              "OAuth 2.0",
              "Security Best Practices",
              "Error Handling"
            ],
            resources: [
              "Security Guide",
              "JWT.io",
              "OAuth Documentation",
              "OWASP Top 10"
            ]
          }
        ]
      },
      {
        title: "Phase 2: Advanced Backend Development",
        days: "Days 34-66",
        goal: "Build scalable and efficient backend systems",
        sections: [
          {
            title: "Advanced Database",
            days: "Days 34-44",
            topics: [
              "Database Optimization",
              "Caching Strategies",
              "Transactions",
              "Indexing",
              "Query Performance"
            ],
            resources: [
              "Database Performance",
              "Redis Documentation",
              "Transaction Patterns",
              "Index Optimization"
            ]
          },
          {
            title: "System Architecture",
            days: "Days 45-55",
            topics: [
              "Microservices",
              "API Gateway",
              "Message Queues",
              "Load Balancing",
              "Service Discovery"
            ],
            resources: [
              "Microservices Guide",
              "RabbitMQ Tutorials",
              "System Design Primer",
              "Architecture Patterns"
            ]
          },
          {
            title: "Testing & Quality",
            days: "Days 56-66",
            topics: [
              "Unit Testing",
              "Integration Testing",
              "API Testing",
              "Performance Testing",
              "Code Quality"
            ],
            resources: [
              "Jest Documentation",
              "Postman Tutorials",
              "Testing Patterns",
              "Code Quality Tools"
            ]
          }
        ]
      },
      {
        title: "Phase 3: Production & Deployment",
        days: "Days 67-100",
        goal: "Master deployment, monitoring, and maintenance",
        sections: [
          {
            title: "DevOps Practices",
            days: "Days 67-77",
            topics: [
              "CI/CD Pipeline",
              "Docker Containers",
              "Kubernetes Basics",
              "Cloud Deployment",
              "Infrastructure as Code"
            ],
            resources: [
              "Docker Guide",
              "Kubernetes Docs",
              "AWS Fundamentals",
              "DevOps Practices"
            ]
          },
          {
            title: "Monitoring & Logging",
            days: "Days 78-88",
            topics: [
              "Application Monitoring",
              "Log Management",
              "Error Tracking",
              "Performance Metrics",
              "Alerting Systems"
            ],
            resources: [
              "ELK Stack",
              "Prometheus Docs",
              "Grafana Tutorials",
              "Monitoring Guide"
            ]
          },
          {
            title: "Production Management",
            days: "Days 89-100",
            topics: [
              "Scaling Strategies",
              "Security Hardening",
              "Backup Systems",
              "Disaster Recovery",
              "Documentation"
            ],
            resources: [
              "Scaling Patterns",
              "Security Best Practices",
              "Backup Strategies",
              "Technical Writing"
            ]
          }
        ]
      }
    ]
  },

  "cybersecurity-engineer": {
    phases: [
      {
        title: "Phase 1: Security Fundamentals",
        days: "Days 1-33",
        goal: "Build strong foundation in cybersecurity principles",
        sections: [
          {
            title: "Network Security",
            days: "Days 1-11",
            topics: [
              "Network Protocols",
              "Firewall Configuration",
              "VPN Technologies",
              "Network Monitoring",
              "Packet Analysis"
            ],
            resources: [
              "CompTIA Network+",
              "Wireshark Tutorial",
              "Firewall Essentials",
              "VPN Guide"
            ]
          },
          {
            title: "System Security",
            days: "Days 12-22",
            topics: [
              "Operating System Security",
              "Access Control",
              "System Hardening",
              "Security Policies",
              "Endpoint Protection"
            ],
            resources: [
              "Security+ Guide",
              "OS Hardening",
              "Access Control Models",
              "Security Policies"
            ]
          },
          {
            title: "Security Tools",
            days: "Days 23-33",
            topics: [
              "Security Tools Overview",
              "Vulnerability Scanners",
              "IDS/IPS Systems",
              "SIEM Basics",
              "Security Automation"
            ],
            resources: [
              "Security Tools Guide",
              "Nmap Tutorial",
              "SIEM Fundamentals",
              "Automation Tools"
            ]
          }
        ]
      },
      {
        title: "Phase 2: Advanced Security",
        days: "Days 34-66",
        goal: "Master advanced security concepts and threat detection",
        sections: [
          {
            title: "Threat Detection",
            days: "Days 34-44",
            topics: [
              "Threat Intelligence",
              "Malware Analysis",
              "Incident Response",
              "Digital Forensics",
              "Log Analysis"
            ],
            resources: [
              "Threat Intel Platforms",
              "Malware Analysis Tools",
              "Incident Response Guide",
              "Forensics Toolkit"
            ]
          },
          {
            title: "Application Security",
            days: "Days 45-55",
            topics: [
              "Web Security",
              "API Security",
              "Secure Coding",
              "Penetration Testing",
              "Security Testing"
            ],
            resources: [
              "OWASP Top 10",
              "Web Security Academy",
              "Secure Coding Guide",
              "Penetration Testing"
            ]
          },
          {
            title: "Cloud Security",
            days: "Days 56-66",
            topics: [
              "Cloud Security Models",
              "Container Security",
              "Identity Management",
              "Data Protection",
              "Compliance"
            ],
            resources: [
              "Cloud Security Guide",
              "AWS Security",
              "Azure Security",
              "Container Security"
            ]
          }
        ]
      },
      {
        title: "Phase 3: Security Operations",
        days: "Days 67-100",
        goal: "Implement and manage security operations",
        sections: [
          {
            title: "Security Operations",
            days: "Days 67-77",
            topics: [
              "SOC Operations",
              "Security Monitoring",
              "Incident Management",
              "Threat Hunting",
              "Risk Assessment"
            ],
            resources: [
              "SOC Handbook",
              "Security Monitoring",
              "Incident Management",
              "Risk Assessment"
            ]
          },
          {
            title: "Compliance & Governance",
            days: "Days 78-88",
            topics: [
              "Security Frameworks",
              "Compliance Standards",
              "Audit Procedures",
              "Policy Development",
              "Documentation"
            ],
            resources: [
              "ISO 27001",
              "NIST Framework",
              "Compliance Guide",
              "Policy Templates"
            ]
          },
          {
            title: "Advanced Topics",
            days: "Days 89-100",
            topics: [
              "Red Team Operations",
              "Blue Team Defense",
              "Security Architecture",
              "Zero Trust Model",
              "Future Trends"
            ],
            resources: [
              "Red Team Guide",
              "Blue Team Handbook",
              "Security Architecture",
              "Zero Trust Security"
            ]
          }
        ]
      }
    ]
  },

  "data-scientist": {
    phases: [
      {
        title: "Phase 1: Data Science Foundations",
        days: "Days 1-33",
        goal: "Build strong foundation in data science and analytics",
        sections: [
          {
            title: "Programming Basics",
            days: "Days 1-11",
            topics: [
              "Python Programming",
              "Data Structures",
              "Algorithms",
              "NumPy Fundamentals",
              "Pandas Basics"
            ],
            resources: [
              "Python Documentation",
              "Data Structures Guide",
              "NumPy Tutorial",
              "Pandas Guide"
            ]
          },
          {
            title: "Statistics & Math",
            days: "Days 12-22",
            topics: [
              "Probability Theory",
              "Statistical Analysis",
              "Linear Algebra",
              "Calculus Basics",
              "Descriptive Statistics"
            ],
            resources: [
              "Statistics Course",
              "Linear Algebra Guide",
              "Probability Theory",
              "Math for ML"
            ]
          },
          {
            title: "Data Analysis",
            days: "Days 23-33",
            topics: [
              "Data Cleaning",
              "Exploratory Analysis",
              "Data Visualization",
              "Feature Engineering",
              "Statistical Testing"
            ],
            resources: [
              "Data Analysis Guide",
              "Matplotlib Tutorial",
              "Seaborn Guide",
              "Feature Engineering"
            ]
          }
        ]
      },
      {
        title: "Phase 2: Machine Learning",
        days: "Days 34-66",
        goal: "Master machine learning algorithms and implementations",
        sections: [
          {
            title: "ML Fundamentals",
            days: "Days 34-44",
            topics: [
              "Supervised Learning",
              "Unsupervised Learning",
              "Model Evaluation",
              "Cross Validation",
              "Hyperparameter Tuning"
            ],
            resources: [
              "Scikit-learn Docs",
              "ML Course",
              "Model Evaluation",
              "ML Algorithms"
            ]
          },
          {
            title: "Deep Learning",
            days: "Days 45-55",
            topics: [
              "Neural Networks",
              "Deep Learning Basics",
              "CNN Architecture",
              "RNN & LSTM",
              "Transfer Learning"
            ],
            resources: [
              "Deep Learning Book",
              "TensorFlow Guide",
              "PyTorch Tutorial",
              "Neural Networks"
            ]
          },
          {
            title: "Advanced ML",
            days: "Days 56-66",
            topics: [
              "Ensemble Methods",
              "Natural Language Processing",
              "Computer Vision",
              "Time Series Analysis",
              "Reinforcement Learning"
            ],
            resources: [
              "NLP Course",
              "Computer Vision",
              "Time Series Guide",
              "RL Tutorial"
            ]
          }
        ]
      },
      {
        title: "Phase 3: Production & Deployment",
        days: "Days 67-100",
        goal: "Implement and deploy data science solutions",
        sections: [
          {
            title: "MLOps Basics",
            days: "Days 67-77",
            topics: [
              "ML Pipeline Design",
              "Model Deployment",
              "Model Monitoring",
              "Version Control",
              "Docker for ML"
            ],
            resources: [
              "MLOps Guide",
              "Model Deployment",
              "ML Pipeline",
              "Docker Tutorial"
            ]
          },
          {
            title: "Big Data",
            days: "Days 78-88",
            topics: [
              "Big Data Processing",
              "Spark Basics",
              "Data Warehousing",
              "ETL Pipeline",
              "Data Architecture"
            ],
            resources: [
              "Spark Tutorial",
              "Big Data Guide",
              "Data Warehouse",
              "ETL Best Practices"
            ]
          },
          {
            title: "Business Applications",
            days: "Days 89-100",
            topics: [
              "Business Analytics",
              "A/B Testing",
              "Dashboard Creation",
              "Stakeholder Management",
              "Project Documentation"
            ],
            resources: [
              "Business Analytics",
              "A/B Testing Guide",
              "Dashboard Design",
              "Technical Writing"
            ]
          }
        ]
      }
    ]
  },

  "fullstack-developer": {
    phases: [
      {
        title: "Phase 1: Full Stack Foundations",
        days: "Days 1-33",
        goal: "Master both frontend and backend fundamentals",
        sections: [
          {
            title: "Frontend Basics",
            days: "Days 1-11",
            topics: [
              "HTML5 & CSS3",
              "JavaScript ES6+",
              "DOM Manipulation",
              "Responsive Design",
              "Frontend Tools"
            ],
            resources: [
              "MDN Web Docs",
              "JavaScript.info",
              "CSS-Tricks",
              "Frontend Masters"
            ]
          },
          {
            title: "Backend Basics",
            days: "Days 12-22",
            topics: [
              "Node.js Fundamentals",
              "Express.js Framework",
              "RESTful APIs",
              "Database Basics",
              "Server Architecture"
            ],
            resources: [
              "Node.js Docs",
              "Express Guide",
              "REST Tutorial",
              "Architecture Patterns"
            ]
          },
          {
            title: "Development Tools",
            days: "Days 23-33",
            topics: [
              "Git & GitHub",
              "Package Managers",
              "Build Tools",
              "Testing Basics",
              "Development Workflow"
            ],
            resources: [
              "Git Tutorial",
              "NPM Guide",
              "Webpack Docs",
              "Testing Guide"
            ]
          }
        ]
      },
      {
        title: "Phase 2: Advanced Development",
        days: "Days 34-66",
        goal: "Build full stack applications with modern technologies",
        sections: [
          {
            title: "Frontend Framework",
            days: "Days 34-44",
            topics: [
              "React/Vue/Angular",
              "State Management",
              "Routing",
              "API Integration",
              "UI Components"
            ],
            resources: [
              "React Docs",
              "Redux Guide",
              "Router Tutorial",
              "Component Design"
            ]
          },
          {
            title: "Backend Development",
            days: "Days 45-55",
            topics: [
              "Database Design",
              "Authentication",
              "API Security",
              "Caching",
              "Middleware"
            ],
            resources: [
              "Database Patterns",
              "Auth Strategies",
              "Security Guide",
              "Caching Tutorial"
            ]
          },
          {
            title: "Full Stack Integration",
            days: "Days 56-66",
            topics: [
              "Full Stack Architecture",
              "Data Flow",
              "Error Handling",
              "Performance",
              "Testing Strategies"
            ],
            resources: [
              "Architecture Guide",
              "Integration Patterns",
              "Error Handling",
              "Testing Strategies"
            ]
          }
        ]
      },
      {
        title: "Phase 3: Production & Deployment",
        days: "Days 67-100",
        goal: "Deploy and maintain full stack applications",
        sections: [
          {
            title: "DevOps & Deployment",
            days: "Days 67-77",
            topics: [
              "CI/CD Pipeline",
              "Docker Basics",
              "Cloud Deployment",
              "Monitoring",
              "Performance Optimization"
            ],
            resources: [
              "DevOps Guide",
              "Docker Tutorial",
              "AWS/Azure Docs",
              "Monitoring Tools"
            ]
          },
          {
            title: "Advanced Topics",
            days: "Days 78-88",
            topics: [
              "Microservices",
              "GraphQL",
              "WebSockets",
              "Progressive Web Apps",
              "Mobile Developer, UI/UX Designer, AI/ML Engineer"
            ],
            resources: [
              "Microservices Guide",
              "GraphQL Tutorial",
              "PWA Course",
              "React Native"
            ]
          },
          {
            title: "Professional Skills",
            days: "Days 89-100",
            topics: [
              "Code Quality",
              "Documentation",
              "Team Collaboration",
              "Project Management",
              "Career Development"
            ],
            resources: [
              "Clean Code",
              "Documentation Guide",
              "Agile Practices",
              "Career Path"
            ]
          }
        ]
      }
    ]
  },

  "cloud-engineer": {
    phases: [
      {
        title: "Phase 1: Cloud Fundamentals",
        days: "Days 1-33",
        goal: "Master core cloud concepts and basic services",
        sections: [
          {
            title: "Cloud Basics",
            days: "Days 1-11",
            topics: [
              "Cloud Computing Concepts",
              "AWS/Azure/GCP Overview",
              "Cloud Architecture",
              "Virtualization",
              "Cloud Security Basics"
            ],
            resources: [
              "AWS Fundamentals",
              "Azure Basics",
              "Cloud Architecture",
              "Security Guide"
            ]
          },
          {
            title: "Core Services",
            days: "Days 12-22",
            topics: [
              "Compute Services",
              "Storage Solutions",
              "Networking",
              "Identity Management",
              "Database Services"
            ],
            resources: [
              "AWS Services Guide",
              "Azure Services",
              "Cloud Networking",
              "IAM Best Practices"
            ]
          },
          {
            title: "Infrastructure as Code",
            days: "Days 23-33",
            topics: [
              "Terraform",
              "CloudFormation",
              "ARM Templates",
              "Configuration Management",
              "Infrastructure Design"
            ],
            resources: [
              "Terraform Guide",
              "CloudFormation Docs",
              "IaC Patterns",
              "Best Practices"
            ]
          }
        ]
      },
      {
        title: "Phase 2: Advanced Cloud Services",
        days: "Days 34-66",
        goal: "Master advanced cloud services and architecture",
        sections: [
          {
            title: "Advanced Services",
            days: "Days 34-44",
            topics: [
              "Containers & Kubernetes",
              "Serverless Computing",
              "Message Queues",
              "API Gateway",
              "Microservices"
            ],
            resources: [
              "Kubernetes Guide",
              "Serverless Handbook",
              "Microservices Architecture",
              "Container Security"
            ]
          },
          {
            title: "Cloud Security",
            days: "Days 45-55",
            topics: [
              "Security Services",
              "Compliance",
              "Encryption",
              "Network Security",
              "Identity Federation"
            ],
            resources: [
              "Security Best Practices",
              "Compliance Framework",
              "Encryption Guide",
              "Network Security"
            ]
          },
          {
            title: "DevOps Integration",
            days: "Days 56-66",
            topics: [
              "CI/CD Pipeline",
              "Monitoring & Logging",
              "Auto Scaling",
              "High Availability",
              "Disaster Recovery"
            ],
            resources: [
              "DevOps Guide",
              "Monitoring Tools",
              "HA Architecture",
              "DR Strategies"
            ]
          }
        ]
      },
      {
        title: "Phase 3: Enterprise Cloud",
        days: "Days 67-100",
        goal: "Master enterprise cloud solutions and optimization",
        sections: [
          {
            title: "Enterprise Solutions",
            days: "Days 67-77",
            topics: [
              "Multi-Cloud Strategy",
              "Hybrid Cloud",
              "Cloud Migration",
              "Cost Optimization",
              "Performance Tuning"
            ],
            resources: [
              "Multi-Cloud Guide",
              "Migration Strategies",
              "Cost Management",
              "Performance Guide"
            ]
          },
          {
            title: "Cloud Operations",
            days: "Days 78-88",
            topics: [
              "SRE Practices",
              "Automation",
              "Incident Management",
              "Capacity Planning",
              "Service Mesh"
            ],
            resources: [
              "SRE Handbook",
              "Automation Guide",
              "Incident Response",
              "Service Mesh"
            ]
          },
          {
            title: "Professional Skills",
            days: "Days 89-100",
            topics: [
              "Architecture Design",
              "Solution Documentation",
              "Team Leadership",
              "Cost Management",
              "Vendor Management"
            ],
            resources: [
              "Architecture Patterns",
              "Documentation Guide",
              "Leadership Skills",
              "Vendor Relations"
            ]
          }
        ]
      }
    ]
  },

  "mobile-developer": {
    phases: [
      {
        title: "Phase 1: Mobile Development Fundamentals",
        days: "Days 1-33",
        goal: "Master core mobile development concepts",
        sections: [
          {
            title: "Programming Basics",
            days: "Days 1-11",
            topics: [
              "Swift/Kotlin Basics",
              "Mobile UI Fundamentals",
              "App Lifecycle",
              "Data Storage",
              "Version Control"
            ],
            resources: [
              "Swift/Kotlin Guide",
              "Mobile UI Patterns",
              "iOS/Android Basics",
              "Git Essentials"
            ]
          },
          {
            title: "Platform Specifics",
            days: "Days 12-22",
            topics: [
              "iOS/Android Architecture",
              "UI Components",
              "Navigation",
              "Permissions",
              "Local Storage"
            ],
            resources: [
              "Platform Guidelines",
              "Component Library",
              "Navigation Patterns",
              "Storage Guide"
            ]
          },
          {
            title: "Development Tools",
            days: "Days 23-33",
            topics: [
              "IDE Mastery",
              "Debugging Tools",
              "Testing Framework",
              "Build System",
              "Package Management"
            ],
            resources: [
              "IDE Guide",
              "Debug Tools",
              "Testing Guide",
              "Build Tools"
            ]
          }
        ]
      },
      {
        title: "Phase 2: Advanced Mobile Development",
        days: "Days 34-66",
        goal: "Build complex mobile applications",
        sections: [
          {
            title: "Advanced UI/UX",
            days: "Days 34-44",
            topics: [
              "Custom Components",
              "Animations",
              "Responsive Design",
              "Accessibility",
              "Design Systems"
            ],
            resources: [
              "UI Components",
              "Animation Guide",
              "Accessibility",
              "Design Patterns"
            ]
          },
          {
            title: "Data & Networking",
            days: "Days 45-55",
            topics: [
              "REST/GraphQL",
              "State Management",
              "Offline Storage",
              "Real-time Data",
              "Security"
            ],
            resources: [
              "Networking Guide",
              "State Management",
              "Storage Patterns",
              "Security Best Practices"
            ]
          },
          {
            title: "Platform Features",
            days: "Days 56-66",
            topics: [
              "Push Notifications",
              "Background Tasks",
              "Location Services",
              "Camera/Sensors",
              "App Extensions"
            ],
            resources: [
              "Platform Features",
              "Background Guide",
              "Location Services",
              "Sensor Integration"
            ]
          }
        ]
      },
      {
        title: "Phase 3: Professional Mobile Development",
        days: "Days 67-100",
        goal: "Master professional mobile development practices",
        sections: [
          {
            title: "App Performance",
            days: "Days 67-77",
            topics: [
              "Performance Optimization",
              "Memory Management",
              "Battery Efficiency",
              "Network Optimization",
              "Testing Strategies"
            ],
            resources: [
              "Performance Guide",
              "Memory Management",
              "Battery Guide",
              "Testing Patterns"
            ]
          },
          {
            title: "App Distribution",
            days: "Days 78-88",
            topics: [
              "App Store Guidelines",
              "Release Management",
              "CI/CD Pipeline",
              "Analytics Integration",
              "User Feedback"
            ],
            resources: [
              "Store Guidelines",
              "Release Strategy",
              "CI/CD Guide",
              "Analytics Tools"
            ]
          },
          {
            title: "Professional Skills",
            days: "Days 89-100",
            topics: [
              "Code Architecture",
              "Team Collaboration",
              "Documentation",
              "App Maintenance",
              "Career Growth"
            ],
            resources: [
              "Architecture Guide",
              "Team Practices",
              "Documentation",
              "Maintenance Guide"
            ]
          }
        ]
      }
    ]
  },

  "ui-ux-designer": {
    phases: [
      {
        title: "Phase 1: Design Fundamentals",
        days: "Days 1-33",
        goal: "Master core design principles and tools",
        sections: [
          {
            title: "Design Basics",
            days: "Days 1-11",
            topics: [
              "Design Principles",
              "Color Theory",
              "Typography",
              "Layout & Composition",
              "Visual Hierarchy"
            ],
            resources: [
              "Design Principles",
              "Color Guide",
              "Typography Guide",
              "Layout Patterns"
            ]
          },
          {
            title: "Design Tools",
            days: "Days 12-22",
            topics: [
              "Figma/Sketch",
              "Prototyping Tools",
              "Asset Management",
              "Design Systems",
              "Collaboration Tools"
            ],
            resources: [
              "Figma Tutorial",
              "Prototyping Guide",
              "Design Systems",
              "Collaboration"
            ]
          },
          {
            title: "UX Research",
            days: "Days 23-33",
            topics: [
              "User Research",
              "Personas",
              "User Journeys",
              "Information Architecture",
              "Wireframing"
            ],
            resources: [
              "Research Methods",
              "Persona Creation",
              "Journey Mapping",
              "IA Guide"
            ]
          }
        ]
      },
      {
        title: "Phase 2: Advanced Design",
        days: "Days 34-66",
        goal: "Master advanced design concepts and user experience",
        sections: [
          {
            title: "Interaction Design",
            days: "Days 34-44",
            topics: [
              "Micro-interactions",
              "Animation",
              "Gesture Design",
              "State Changes",
              "Feedback Systems"
            ],
            resources: [
              "Interaction Design",
              "Animation Guide",
              "Gesture Patterns",
              "UI States"
            ]
          },
          {
            title: "Design Systems",
            days: "Days 45-55",
            topics: [
              "Component Library",
              "Style Guide",
              "Pattern Library",
              "Documentation",
              "Version Control"
            ],
            resources: [
              "Design Systems",
              "Component Guide",
              "Documentation",
              "Version Control"
            ]
          },
          {
            title: "Advanced UX",
            days: "Days 56-66",
            topics: [
              "User Testing",
              "Accessibility",
              "Responsive Design",
              "Cross-platform Design",
              "Design Strategy"
            ],
            resources: [
              "Testing Methods",
              "Accessibility",
              "Responsive Guide",
              "Strategy Guide"
            ]
          }
        ]
      },
      {
        title: "Phase 3: Professional Practice",
        days: "Days 67-100",
        goal: "Master professional design practices and team collaboration",
        sections: [
          {
            title: "Design Process",
            days: "Days 67-77",
            topics: [
              "Project Management",
              "Stakeholder Management",
              "Design Sprints",
              "Design Thinking",
              "Team Collaboration"
            ],
            resources: [
              "Process Guide",
              "Sprint Methods",
              "Design Thinking",
              "Collaboration"
            ]
          },
          {
            title: "Business Integration",
            days: "Days 78-88",
            topics: [
              "Business Goals",
              "Analytics",
              "A/B Testing",
              "ROI Measurement",
              "Presentation Skills"
            ],
            resources: [
              "Business Design",
              "Analytics Guide",
              "Testing Methods",
              "Presentation"
            ]
          },
          {
            title: "Professional Growth",
            days: "Days 89-100",
            topics: [
              "Portfolio Development",
              "Design Leadership",
              "Industry Trends",
              "Career Planning",
              "Networking"
            ],
            resources: [
              "Portfolio Guide",
              "Leadership Skills",
              "Industry Guide",
              "Career Development"
            ]
          }
        ]
      }
    ]
  },
   // ... previous domains ...

   "ui-ux-designer": {
    // ... existing UI/UX Designer content ...
  },

  "ai-ml-engineer": {
    phases: [
      {
        title: "Phase 1: AI/ML Foundations",
        days: "Days 1-33",
        goal: "Master core AI/ML concepts and mathematics",
        sections: [
          {
            title: "Mathematics & Statistics",
            days: "Days 1-11",
            topics: [
              "Linear Algebra",
              "Calculus & Optimization",
              "Probability Theory",
              "Statistical Methods",
              "Information Theory"
            ],
            resources: [
              "Mathematics for ML",
              "Statistical Learning",
              "Probability Course",
              "Linear Algebra Guide"
            ]
          },
          {
            title: "Programming Foundations",
            days: "Days 12-22",
            topics: [
              "Python for ML",
              "NumPy & Pandas",
              "Data Structures",
              "Algorithms",
              "Scientific Computing"
            ],
            resources: [
              "Python ML Guide",
              "NumPy Tutorial",
              "Pandas Documentation",
              "Algorithms Course"
            ]
          },
          {
            title: "ML Basics",
            days: "Days 23-33",
            topics: [
              "Supervised Learning",
              "Unsupervised Learning",
              "Model Evaluation",
              "Feature Engineering",
              "ML Pipelines"
            ],
            resources: [
              "Scikit-learn Docs",
              "ML Fundamentals",
              "Model Selection",
              "Feature Guide"
            ]
          }
        ]
      },
      {
        title: "Phase 2: Advanced AI/ML",
        days: "Days 34-66",
        goal: "Master advanced AI concepts and deep learning",
        sections: [
          {
            title: "Deep Learning",
            days: "Days 34-44",
            topics: [
              "Neural Networks",
              "CNN Architectures",
              "RNN & LSTM",
              "Transformers",
              "Transfer Learning"
            ],
            resources: [
              "Deep Learning Book",
              "PyTorch Tutorial",
              "TensorFlow Guide",
              "Neural Net Design"
            ]
          },
          {
            title: "Specialized ML",
            days: "Days 45-55",
            topics: [
              "Natural Language Processing",
              "Computer Vision",
              "Reinforcement Learning",
              "Generative Models",
              "Time Series Analysis"
            ],
            resources: [
              "NLP Course",
              "Vision Guide",
              "RL Tutorial",
              "GANs Tutorial"
            ]
          },
          {
            title: "AI Systems",
            days: "Days 56-66",
            topics: [
              "Distributed Training",
              "Model Optimization",
              "Hardware Acceleration",
              "AutoML",
              "Edge AI"
            ],
            resources: [
              "Distributed ML",
              "GPU Computing",
              "AutoML Guide",
              "Edge AI Tutorial"
            ]
          }
        ]
      },
      {
        title: "Phase 3: Production AI",
        days: "Days 67-100",
        goal: "Deploy and scale AI/ML systems in production",
        sections: [
          {
            title: "MLOps",
            days: "Days 67-77",
            topics: [
              "ML Pipeline Design",
              "Model Deployment",
              "Model Monitoring",
              "Version Control",
              "CI/CD for ML"
            ],
            resources: [
              "MLOps Guide",
              "Deployment Best Practices",
              "Monitoring Systems",
              "ML Pipeline Design"
            ]
          },
          {
            title: "Scale & Optimization",
            days: "Days 78-88",
            topics: [
              "Large Scale ML",
              "Cloud ML Platforms",
              "Performance Optimization",
              "Cost Management",
              "Resource Scheduling"
            ],
            resources: [
              "Cloud ML Guide",
              "Scaling ML Systems",
              "Optimization Techniques",
              "Resource Management"
            ]
          },
          {
            title: "AI Ethics & Business",
            days: "Days 89-100",
            topics: [
              "AI Ethics",
              "Responsible AI",
              "Business Strategy",
              "Project Management",
              "Research Methods"
            ],
            resources: [
              "AI Ethics Guide",
              "Responsible AI",
              "Business AI",
              "Research Methods"
            ]
          }
        ]
      }
    ]
  }, "devops-engineer": {
    phases: [
      {
        title: "Phase 1: DevOps Fundamentals",
        days: "Days 1-33",
        goal: "Master core DevOps concepts and tools",
        sections: [
          {
            title: "Development Basics",
            days: "Days 1-11",
            topics: [
              "Version Control (Git)",
              "Linux Fundamentals",
              "Scripting (Bash/Python)",
              "Basic Networking",
              "Security Fundamentals"
            ],
            resources: [
              "Git Complete Guide",
              "Linux Administration",
              "Scripting Tutorial",
              "Network Basics"
            ]
          },
          {
            title: "Infrastructure",
            days: "Days 12-22",
            topics: [
              "Cloud Platforms",
              "Infrastructure as Code",
              "Configuration Management",
              "Containerization",
              "Virtual Machines"
            ],
            resources: [
              "AWS/Azure Basics",
              "Terraform Guide",
              "Ansible Tutorial",
              "Docker Fundamentals"
            ]
          },
          {
            title: "CI/CD Basics",
            days: "Days 23-33",
            topics: [
              "CI/CD Concepts",
              "Jenkins/GitLab CI",
              "Build Automation",
              "Testing Strategies",
              "Deployment Basics"
            ],
            resources: [
              "CI/CD Pipeline Guide",
              "Jenkins Tutorial",
              "Build Tools",
              "Testing Framework"
            ]
          }
        ]
      },
      {
        title: "Phase 2: Advanced DevOps",
        days: "Days 34-66",
        goal: "Master advanced DevOps practices and tools",
        sections: [
          {
            title: "Container Orchestration",
            days: "Days 34-44",
            topics: [
              "Kubernetes Architecture",
              "Container Security",
              "Service Mesh",
              "Storage Solutions",
              "Network Policies"
            ],
            resources: [
              "Kubernetes Guide",
              "Container Security",
              "Istio Tutorial",
              "Storage Patterns"
            ]
          },
          {
            title: "Monitoring & Logging",
            days: "Days 45-55",
            topics: [
              "Monitoring Tools",
              "Log Management",
              "Metrics Collection",
              "Alerting Systems",
              "Performance Analysis"
            ],
            resources: [
              "Prometheus/Grafana",
              "ELK Stack Guide",
              "Metrics Tutorial",
              "Alert Management"
            ]
          },
          {
            title: "Security & Compliance",
            days: "Days 56-66",
            topics: [
              "Security Automation",
              "Compliance as Code",
              "Secret Management",
              "Identity Management",
              "Security Scanning"
            ],
            resources: [
              "Security Tools",
              "Compliance Guide",
              "Vault Tutorial",
              "IAM Best Practices"
            ]
          }
        ]
      },
      {
        title: "Phase 3: Enterprise DevOps",
        days: "Days 67-100",
        goal: "Master enterprise-scale DevOps practices",
        sections: [
          {
            title: "Scale & Performance",
            days: "Days 67-77",
            topics: [
              "High Availability",
              "Load Balancing",
              "Auto Scaling",
              "Performance Testing",
              "Disaster Recovery"
            ],
            resources: [
              "HA Architecture",
              "Load Balancer Guide",
              "Scale Testing",
              "DR Strategies"
            ]
          },
          {
            title: "DevOps Culture",
            days: "Days 78-88",
            topics: [
              "Agile Practices",
              "Team Collaboration",
              "Change Management",
              "Incident Response",
              "SRE Practices"
            ],
            resources: [
              "Agile DevOps",
              "Team Guide",
              "Change Management",
              "SRE Handbook"
            ]
          },
          {
            title: "Business Integration",
            days: "Days 89-100",
            topics: [
              "Cost Optimization",
              "Resource Management",
              "Vendor Management",
              "Documentation",
              "Leadership Skills"
            ],
            resources: [
              "Cost Guide",
              "Resource Planning",
              "Documentation",
              "Leadership"
            ]
          }
        ]
      }
    ]
  }
};
