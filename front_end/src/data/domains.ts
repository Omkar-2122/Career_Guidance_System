export const domains = [
  {
    name: 'Full Stack Development',
    path: 'full-stack-development',
    description: 'Full Stack Developers work on both client and server sides of web applications.',
    keySkills: ['Frontend Technologies', 'Backend Development', 'Database Management', 'API Integration', 'DevOps'],
    learningSteps: [
      'Master HTML, CSS, and JavaScript',
      'Learn a frontend framework (React/Angular/Vue)',
      'Study backend development (Node.js/Python/Java)',
      'Understand database concepts and management',
      'Learn DevOps and deployment practices'
    ],
    resources: [
      { name: 'The Odin Project', url: 'https://www.theodinproject.com' },
      { name: 'Full Stack Open', url: 'https://fullstackopen.com' },
      { name: 'GitHub Learning Lab', url: 'https://lab.github.com' }
    ]
  },
  {
    name: 'DevOps Engineering',
    path: 'devops-engineering',
    description: 'DevOps Engineers bridge development and operations to improve software delivery.',
    keySkills: ['CI/CD', 'Container Orchestration', 'Infrastructure as Code', 'Monitoring', 'Automation'],
    learningSteps: [
      'Learn Linux and shell scripting',
      'Master containerization (Docker/Kubernetes)',
      'Study CI/CD pipelines',
      'Understand cloud platforms',
      'Learn monitoring and logging'
    ],
    resources: [
      { name: 'DevOps Roadmap', url: 'https://roadmap.sh/devops' },
      { name: 'Linux Academy', url: 'https://linuxacademy.com' },
      { name: 'Docker Documentation', url: 'https://docs.docker.com' }
    ]
  },
  {
    name: 'UI/UX Design',
    path: 'ui-ux-design',
    description: 'UI/UX Designers create user-friendly and visually appealing digital experiences.',
    keySkills: ['User Research', 'Wireframing', 'Prototyping', 'Visual Design', 'Usability Testing'],
    learningSteps: [
      'Learn design principles and theory',
      'Master design tools (Figma/Sketch)',
      'Study user research methods',
      'Practice prototyping and interaction design',
      'Understand accessibility standards'
    ],
    resources: [
      { name: 'Google UX Design', url: 'https://www.coursera.org/professional-certificates/google-ux-design' },
      { name: 'Figma Tutorials', url: 'https://www.figma.com/resources/learn-design' },
      { name: 'Nielsen Norman Group', url: 'https://www.nngroup.com' }
    ]
  },
  {
    name: 'Backend Developer',
    path: 'backend-developer',
    description: 'Backend Developers build and maintain the server-side of web applications.',
    keySkills: ['Node.js/Python/Java', 'Databases', 'API Design', 'Server Architecture', 'Security'],
    learningSteps: [
      'Master a backend language (Node.js, Python, or Java)',
      'Learn database management and SQL',
      'Study API design and REST principles',
      'Understand authentication and security',
      'Practice system design and scalability'
    ],
    resources: [
      { name: 'Node.js Documentation', url: 'https://nodejs.org/docs' },
      { name: 'MongoDB University', url: 'https://university.mongodb.com' },
      { name: 'AWS Training', url: 'https://aws.amazon.com/training' }
    ]
  },
  {
    name: 'Web Development',
    path: 'web-development',
    description: 'Web Developers create and maintain websites and web applications.',
    keySkills: ['HTML/CSS', 'JavaScript', 'React/Angular/Vue', 'Responsive Design', 'Web Security'],
    learningSteps: [
      'Master HTML and CSS fundamentals',
      'Learn JavaScript and modern ES6+ features',
      'Study a frontend framework (React, Angular, or Vue)',
      'Understand web security best practices',
      'Learn version control with Git'
    ],
    resources: [
      { name: 'MDN Web Docs', url: 'https://developer.mozilla.org' },
      { name: 'React Documentation', url: 'https://reactjs.org' },
      { name: 'FreeCodeCamp', url: 'https://www.freecodecamp.org' }
    ]
  },
  {
    name: 'Data Science',
    path: 'data-science',
    description: 'Data Scientists analyze complex data to help organizations make informed decisions.',
    keySkills: [
      'Python/R Programming',
      'Statistics & Probability',
      'Machine Learning',
      'Data Visualization',
      'SQL & Database Management',
      'Big Data Technologies',
      'Data Cleaning & Preprocessing',
      'Feature Engineering',
      'Business Analytics',
      'Data Mining'
    ],
    learningSteps: [
      'Master Python/R programming fundamentals',
      'Learn statistics and probability theory',
      'Study data structures and algorithms',
      'Master data visualization tools (Tableau/PowerBI)',
      'Learn SQL and database concepts',
      'Study machine learning fundamentals',
      'Practice with real-world datasets',
      'Learn big data technologies (Hadoop/Spark)',
      'Understand business metrics and KPIs',
      'Build a data science portfolio'
    ],
    resources: [
      { name: 'Kaggle Learn', url: 'https://www.kaggle.com/learn' },
      { name: 'DataCamp', url: 'https://www.datacamp.com' },
      { name: 'Coursera Data Science', url: 'https://www.coursera.org/professional-certificates/ibm-data-science' },
      { name: 'edX Data Science', url: 'https://www.edx.org/professional-certificate/harvard-data-science' },
      { name: 'Statistics and Probability', url: 'https://www.khanacademy.org/math/statistics-probability' },
      { name: 'Python for Data Science', url: 'https://www.python.org' },
      { name: 'R for Data Science', url: 'https://r4ds.had.co.nz' }
    ]
  },
  {
    name: 'Cloud Computing',
    path: 'cloud-computing',
    description: 'Cloud Engineers architect, implement, and maintain scalable cloud infrastructure and services.',
    keySkills: [
      'AWS/Azure/GCP Services',
      'Infrastructure as Code',
      'Container Orchestration',
      'Cloud Security',
      'Microservices',
      'Cloud Networking',
      'Serverless Computing',
      'Database Management',
      'Cost Optimization',
      'Disaster Recovery'
    ],
    learningSteps: [
      'Choose a cloud platform (AWS/Azure/GCP)',
      'Learn infrastructure as code',
      'Master containerization',
      'Study cloud security',
      'Understand cloud architecture',
      'Learn microservices',
      'Practice serverless',
      'Study cloud networking',
      'Master monitoring',
      'Learn cost optimization'
    ],
    resources: [
      { name: 'AWS Training', url: 'https://aws.amazon.com/training' },
      { name: 'Azure Learn', url: 'https://learn.microsoft.com/azure' },
      { name: 'GCP Training', url: 'https://cloud.google.com/training' },
      { name: 'Terraform Docs', url: 'https://www.terraform.io/docs' },
      { name: 'Kubernetes', url: 'https://kubernetes.io/training' }
    ]
  },  // 移除了多余的 'e' 字符
  {
    name: 'Mobile Development',
    path: 'mobile-development',
    description: 'Mobile Developers create applications for iOS and Android platforms.',
    keySkills: ['Swift/Kotlin', 'React Native/Flutter', 'Mobile UI/UX', 'App Security', 'API Integration'],
    learningSteps: [
      'Choose a platform (iOS or Android)',
      'Learn platform-specific languages',
      'Study mobile UI/UX principles',
      'Master app deployment process',
      'Understand mobile security'
    ],
    resources: [
      { name: 'iOS Developer', url: 'https://developer.apple.com' },
      { name: 'Android Developer', url: 'https://developer.android.com' },
      { name: 'Flutter Docs', url: 'https://flutter.dev/docs' }
    ]
  },
  {
    name: 'Game Development',
    path: 'game-development',
    description: 'Game Developers create interactive entertainment software.',
    keySkills: ['Game Engines', '3D Modeling', 'Game Physics', 'Animation', 'Multiplayer Networking'],
    learningSteps: [
      'Learn a game engine (Unity/Unreal)',
      'Study game design principles',
      'Master programming for games',
      'Learn 3D modeling and animation',
      'Understand game physics and mechanics'
    ],
    resources: [
      { name: 'Unity Learn', url: 'https://learn.unity.com' },
      { name: 'Unreal Engine Docs', url: 'https://docs.unrealengine.com' },
      { name: 'Game Dev.net', url: 'https://www.gamedev.net' }
    ]
  },
  {
    name: 'Blockchain Development',
    path: 'blockchain-development',
    description: 'Blockchain Developers create decentralized applications and smart contracts.',
    keySkills: ['Smart Contracts', 'Web3.js', 'Solidity', 'Cryptography', 'DApp Development'],
    learningSteps: [
      'Understand blockchain fundamentals',
      'Learn Solidity programming',
      'Study smart contract development',
      'Master Web3 integration',
      'Practice DApp development'
    ],
    resources: [
      { name: 'CryptoZombies', url: 'https://cryptozombies.io' },
      { name: 'Ethereum.org', url: 'https://ethereum.org/developers' },
      { name: 'Web3 University', url: 'https://www.web3.university' }
    ]
  }
];