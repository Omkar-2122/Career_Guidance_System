'use client';
import React from 'react';

interface RoadmapProps {
  domain: string;
}

export default function DomainRoadmap({ domain }: RoadmapProps) {
  const roadmaps: { [key: string]: JSX.Element } = {
    "Web Development": (
      <div className="space-y-8">
        <h2 className="text-2xl font-bold text-blue-600">Your Web Development Roadmap</h2>
        
        <div className="bg-white p-6 rounded-xl shadow-md">
          <h3 className="text-xl font-bold text-blue-800 mb-4">Phase 1: Frontend Fundamentals (Days 1–30)</h3>
          
          <div className="mb-6">
            <h4 className="text-lg font-semibold mb-2">Days 1–10: HTML & CSS</h4>
            <div className="ml-4">
              <p className="font-medium mb-1">Topics:</p>
              <ul className="list-disc ml-6 mb-2 space-y-1">
                <li>HTML5 structure and semantics</li>
                <li>CSS3 styling and layouts</li>
                <li>Responsive design with media queries</li>
                <li>Flexbox and Grid systems</li>
              </ul>
              
              <p className="font-medium mb-1">Resources:</p>
              <ul className="list-disc ml-6 mb-2 space-y-1">
                <li>MDN Web Docs</li>
                <li>freeCodeCamp HTML/CSS course</li>
                <li>CSS-Tricks website</li>
              </ul>
            </div>
          </div>
          
          <div className="mb-6">
            <h4 className="text-lg font-semibold mb-2">Days 21-30: Frontend Development</h4>
            <div className="ml-4">
              <p className="font-medium mb-1">Topics:</p>
              <ul className="list-disc ml-6 mb-2 space-y-1">
                <li>Package managers (npm/yarn)</li>
                <li>Build tools and bundlers</li>
                <li>Version control with Git</li>
                <li>Web APIs and AJAX</li>
              </ul>
            </div>
          </div>
        </div>
          
        <div className="bg-white p-6 rounded-xl shadow-md">
          <h3 className="text-xl font-bold text-blue-800 mb-4">Phase 2: Frontend Frameworks (Days 31-60)</h3>
          <div className="mb-6">
            <h4 className="text-lg font-semibold mb-2">Days 31-45: React Fundamentals</h4>
            <div className="ml-4">
              <p className="font-medium mb-1">Topics:</p>
              <ul className="list-disc ml-6 mb-2 space-y-1">
                <li>React components and props</li>
                <li>State and lifecycle</li>
                <li>Hooks and context</li>
                <li>React Router</li>
              </ul>
            </div>
          </div>
          
          <div className="mb-6">
            <h4 className="text-lg font-semibold mb-2">Days 46-60: State Management</h4>
            <div className="ml-4">
              <p className="font-medium mb-1">Topics:</p>
              <ul className="list-disc ml-6 mb-2 space-y-1">
                <li>Redux fundamentals</li>
                <li>Redux Toolkit</li>
                <li>API integration</li>
                <li>Testing React applications</li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-xl shadow-md">
          <h3 className="text-xl font-bold text-blue-800 mb-4">Phase 3: Backend Development (Days 61-90)</h3>
          <div className="mb-6">
            <h4 className="text-lg font-semibold mb-2">Days 61-75: Node.js & Express</h4>
            <div className="ml-4">
              <p className="font-medium mb-1">Topics:</p>
              <ul className="list-disc ml-6 mb-2 space-y-1">
                <li>Node.js fundamentals</li>
                <li>Express.js framework</li>
                <li>RESTful API design</li>
                <li>Authentication & Authorization</li>
              </ul>
            </div>
          </div>
        
          <div className="mb-6">
            <h4 className="text-lg font-semibold mb-2">Days 76-90: Database Integration</h4>
            <div className="ml-4">
              <p className="font-medium mb-1">Topics:</p>
              <ul className="list-disc ml-6 mb-2 space-y-1">
                <li>MongoDB & Mongoose</li>
                <li>SQL databases</li>
                <li>Data modeling</li>
                <li>API security</li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-xl shadow-md">
          <h3 className="text-xl font-bold text-blue-800 mb-4">Phase 4: Deployment & Optimization (Days 91-100)</h3>
          <div className="mb-6">
            <h4 className="text-lg font-semibold mb-2">Days 91-100: Production Ready</h4>
            <div className="ml-4">
              <p className="font-medium mb-1">Topics:</p>
              <ul className="list-disc ml-6 mb-2 space-y-1">
                <li>Web performance optimization</li>
                <li>Deployment strategies</li>
                <li>CI/CD pipelines</li>
                <li>Monitoring and analytics</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    ),

    "Artificial Intelligence (AI)": (
      <div className="space-y-8">
        <h2 className="text-2xl font-bold text-blue-600">Your AI Development Roadmap</h2>
        
        <div className="bg-white p-6 rounded-xl shadow-md">
          <h3 className="text-xl font-bold text-blue-800 mb-4">Phase 1: AI Foundations (Days 1–30)</h3>
          
          <div className="mb-6">
            <h4 className="text-lg font-semibold mb-2">Days 1–10: Mathematics & Programming</h4>
            <div className="ml-4">
              <p className="font-medium mb-1">Topics:</p>
              <ul className="list-disc ml-6 mb-2 space-y-1">
                <li>Linear Algebra & Calculus</li>
                <li>Probability & Statistics</li>
                <li>Python programming</li>
                <li>NumPy & Pandas basics</li>
              </ul>
              
              <p className="font-medium mb-1">Resources:</p>
              <ul className="list-disc ml-6 mb-2 space-y-1">
                <li>Khan Academy Mathematics</li>
                <li>Coursera Python for AI</li>
                <li>3Blue1Brown Linear Algebra</li>
              </ul>
            </div>
          </div>

          <div className="mb-6">
            <h4 className="text-lg font-semibold mb-2">Days 11-20: AI Fundamentals</h4>
            <div className="ml-4">
              <p className="font-medium mb-1">Topics:</p>
              <ul className="list-disc ml-6 mb-2 space-y-1">
                <li>Search algorithms</li>
                <li>Knowledge representation</li>
                <li>Expert systems</li>
                <li>Logic programming</li>
              </ul>
            </div>
          </div>

          <div className="mb-6">
            <h4 className="text-lg font-semibold mb-2">Days 21-30: Machine Learning Basics</h4>
            <div className="ml-4">
              <p className="font-medium mb-1">Topics:</p>
              <ul className="list-disc ml-6 mb-2 space-y-1">
                <li>Supervised vs Unsupervised learning</li>
                <li>Basic ML algorithms</li>
                <li>Model evaluation metrics</li>
                <li>Feature engineering basics</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-md">
          <h3 className="text-xl font-bold text-blue-800 mb-4">Phase 2: Deep Learning (Days 31-60)</h3>
          <div className="mb-6">
            <h4 className="text-lg font-semibold mb-2">Days 31-45: Neural Networks</h4>
            <div className="ml-4">
              <p className="font-medium mb-1">Topics:</p>
              <ul className="list-disc ml-6 mb-2 space-y-1">
                <li>Neural network architectures</li>
                <li>Backpropagation</li>
                <li>TensorFlow/PyTorch basics</li>
                <li>CNN fundamentals</li>
              </ul>
            </div>
          </div>

          <div className="mb-6">
            <h4 className="text-lg font-semibold mb-2">Days 46-60: Advanced Deep Learning</h4>
            <div className="ml-4">
              <p className="font-medium mb-1">Topics:</p>
              <ul className="list-disc ml-6 mb-2 space-y-1">
                <li>RNNs and LSTM</li>
                <li>Transformers</li>
                <li>GANs</li>
                <li>Transfer learning</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-md">
          <h3 className="text-xl font-bold text-blue-800 mb-4">Phase 3: Advanced AI (Days 61-90)</h3>
          <div className="mb-6">
            <h4 className="text-lg font-semibold mb-2">Days 61-75: Natural Language Processing</h4>
            <div className="ml-4">
              <p className="font-medium mb-1">Topics:</p>
              <ul className="list-disc ml-6 mb-2 space-y-1">
                <li>Text processing and embeddings</li>
                <li>Language models</li>
                <li>Sequence-to-sequence models</li>
                <li>BERT and GPT architectures</li>
              </ul>
            </div>
          </div>

          <div className="mb-6">
            <h4 className="text-lg font-semibold mb-2">Days 76-90: Reinforcement Learning</h4>
            <div className="ml-4">
              <p className="font-medium mb-1">Topics:</p>
              <ul className="list-disc ml-6 mb-2 space-y-1">
                <li>Q-learning</li>
                <li>Policy gradients</li>
                <li>Deep RL</li>
                <li>Multi-agent systems</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-md">
          <h3 className="text-xl font-bold text-blue-800 mb-4">Phase 4: AI Engineering (Days 91-100)</h3>
          <div className="mb-6">
            <h4 className="text-lg font-semibold mb-2">Days 91-100: Production AI</h4>
            <div className="ml-4">
              <p className="font-medium mb-1">Topics:</p>
              <ul className="list-disc ml-6 mb-2 space-y-1">
                <li>MLOps and deployment</li>
                <li>Model optimization</li>
                <li>AI system design</li>
                <li>Ethics and responsible AI</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    ),

    "Cloud Computing": (
      <div className="space-y-8">
        <h2 className="text-2xl font-bold text-blue-600">Your Cloud Computing Roadmap</h2>
        
        <div className="bg-white p-6 rounded-xl shadow-md">
          <h3 className="text-xl font-bold text-blue-800 mb-4">Phase 1: Cloud Fundamentals (Days 1–30)</h3>
          
          <div className="mb-6">
            <h4 className="text-lg font-semibold mb-2">Days 1–10: Cloud Basics</h4>
            <div className="ml-4">
              <p className="font-medium mb-1">Topics:</p>
              <ul className="list-disc ml-6 mb-2 space-y-1">
                <li>Cloud computing concepts</li>
                <li>AWS/Azure/GCP fundamentals</li>
                <li>Virtual machines and containers</li>
                <li>Cloud storage solutions</li>
              </ul>
              
              <p className="font-medium mb-1">Resources:</p>
              <ul className="list-disc ml-6 mb-2 space-y-1">
                <li>AWS Cloud Practitioner course</li>
                <li>Microsoft Azure fundamentals</li>
                <li>Google Cloud essentials</li>
              </ul>
            </div>
          </div>

          <div className="mb-6">
            <h4 className="text-lg font-semibold mb-2">Days 11-20: Cloud Services</h4>
            <div className="ml-4">
              <p className="font-medium mb-1">Topics:</p>
              <ul className="list-disc ml-6 mb-2 space-y-1">
                <li>Database services</li>
                <li>Serverless computing</li>
                <li>Cloud security basics</li>
                <li>Networking in cloud</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-md">
          <h3 className="text-xl font-bold text-blue-800 mb-4">Phase 2: Advanced Cloud (Days 31-60)</h3>
          <div className="mb-6">
            <h4 className="text-lg font-semibold mb-2">Days 31-45: Cloud Architecture</h4>
            <div className="ml-4">
              <p className="font-medium mb-1">Topics:</p>
              <ul className="list-disc ml-6 mb-2 space-y-1">
                <li>Microservices architecture</li>
                <li>Cloud design patterns</li>
                <li>High availability and scaling</li>
                <li>Disaster recovery</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-md">
          <h3 className="text-xl font-bold text-blue-800 mb-4">Phase 3: Cloud Integration (Days 61-90)</h3>
          <div className="mb-6">
            <h4 className="text-lg font-semibold mb-2">Days 61-75: DevOps Integration</h4>
            <div className="ml-4">
              <p className="font-medium mb-1">Topics:</p>
              <ul className="list-disc ml-6 mb-2 space-y-1">
                <li>CI/CD in cloud</li>
                <li>Infrastructure as Code</li>
                <li>Container orchestration</li>
                <li>Monitoring and logging</li>
              </ul>
            </div>
          </div>
          
          <div className="mb-6">
            <h4 className="text-lg font-semibold mb-2">Days 76-90: Advanced Services</h4>
            <div className="ml-4">
              <p className="font-medium mb-1">Topics:</p>
              <ul className="list-disc ml-6 mb-2 space-y-1">
                <li>Machine Learning services</li>
                <li>Big Data processing</li>
                <li>IoT integration</li>
                <li>Serverless architectures</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-md">
          <h3 className="text-xl font-bold text-blue-800 mb-4">Phase 4: Cloud Mastery (Days 91-100)</h3>
          <div className="mb-6">
            <h4 className="text-lg font-semibold mb-2">Days 91-100: Enterprise Cloud</h4>
            <div className="ml-4">
              <p className="font-medium mb-1">Topics:</p>
              <ul className="list-disc ml-6 mb-2 space-y-1">
                <li>Multi-cloud strategies</li>
                <li>Cost optimization</li>
                <li>Cloud migration strategies</li>
                <li>Enterprise architecture patterns</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    ),

    "DevOps": (
      <div className="space-y-8">
        <h2 className="text-2xl font-bold text-blue-600">Your DevOps Roadmap</h2>
        
        <div className="bg-white p-6 rounded-xl shadow-md">
          <h3 className="text-xl font-bold text-blue-800 mb-4">Phase 1: DevOps Foundation (Days 1–30)</h3>
          
          <div className="mb-6">
            <h4 className="text-lg font-semibold mb-2">Days 1–10: Basic Tools</h4>
            <div className="ml-4">
              <p className="font-medium mb-1">Topics:</p>
              <ul className="list-disc ml-6 mb-2 space-y-1">
                <li>Linux fundamentals</li>
                <li>Git version control</li>
                <li>Docker containers</li>
                <li>CI/CD concepts</li>
              </ul>
              
              <p className="font-medium mb-1">Resources:</p>
              <ul className="list-disc ml-6 mb-2 space-y-1">
                <li>Linux Academy</li>
                <li>Docker documentation</li>
                <li>GitHub Actions tutorials</li>
              </ul>
            </div>
          </div>

          <div className="mb-6">
            <h4 className="text-lg font-semibold mb-2">Days 11-20: Infrastructure as Code</h4>
            <div className="ml-4">
              <p className="font-medium mb-1">Topics:</p>
              <ul className="list-disc ml-6 mb-2 space-y-1">
                <li>Terraform basics</li>
                <li>Ansible automation</li>
                <li>Cloud infrastructure</li>
                <li>Configuration management</li>
              </ul>
            </div>
          </div>
          
          <div className="mb-6">
            <h4 className="text-lg font-semibold mb-2">Days 21-30: CI/CD Pipelines</h4>
            <div className="ml-4">
              <p className="font-medium mb-1">Topics:</p>
              <ul className="list-disc ml-6 mb-2 space-y-1">
                <li>Jenkins/GitHub Actions</li>
                <li>Pipeline as code</li>
                <li>Automated testing</li>
                <li>Deployment strategies</li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-xl shadow-md">
          <h3 className="text-xl font-bold text-blue-800 mb-4">Phase 2: Container Orchestration (Days 31-60)</h3>
          <div className="mb-6">
            <h4 className="text-lg font-semibold mb-2">Days 31-45: Kubernetes Basics</h4>
            <div className="ml-4">
              <p className="font-medium mb-1">Topics:</p>
              <ul className="list-disc ml-6 mb-2 space-y-1">
                <li>Kubernetes architecture</li>
                <li>Pods, services, deployments</li>
                <li>ConfigMaps and Secrets</li>
                <li>Kubernetes networking</li>
              </ul>
            </div>
          </div>
          
          <div className="mb-6">
            <h4 className="text-lg font-semibold mb-2">Days 46-60: Advanced Kubernetes</h4>
            <div className="ml-4">
              <p className="font-medium mb-1">Topics:</p>
              <ul className="list-disc ml-6 mb-2 space-y-1">
                <li>Helm charts</li>
                <li>Operators</li>
                <li>Service mesh (Istio)</li>
                <li>Kubernetes security</li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-xl shadow-md">
          <h3 className="text-xl font-bold text-blue-800 mb-4">Phase 3: Monitoring & Observability (Days 61-90)</h3>
          <div className="mb-6">
            <h4 className="text-lg font-semibold mb-2">Days 61-75: Monitoring Stack</h4>
            <div className="ml-4">
              <p className="font-medium mb-1">Topics:</p>
              <ul className="list-disc ml-6 mb-2 space-y-1">
                <li>Prometheus & Grafana</li>
                <li>ELK/EFK stack</li>
                <li>Distributed tracing</li>
                <li>Alerting systems</li>
              </ul>
            </div>
          </div>
          
          <div className="mb-6">
            <h4 className="text-lg font-semibold mb-2">Days 76-90: SRE Practices</h4>
            <div className="ml-4">
              <p className="font-medium mb-1">Topics:</p>
              <ul className="list-disc ml-6 mb-2 space-y-1">
                <li>SLIs, SLOs, SLAs</li>
                <li>Error budgets</li>
                <li>Chaos engineering</li>
                <li>Incident management</li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-xl shadow-md">
          <h3 className="text-xl font-bold text-blue-800 mb-4">Phase 4: DevSecOps (Days 91-100)</h3>
          <div className="mb-6">
            <h4 className="text-lg font-semibold mb-2">Days 91-100: Security Integration</h4>
            <div className="ml-4">
              <p className="font-medium mb-1">Topics:</p>
              <ul className="list-disc ml-6 mb-2 space-y-1">
                <li>Security as code</li>
                <li>Container security</li>
                <li>Compliance automation</li>
                <li>Vulnerability management</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    ),

    "Machine Learning (ML)": (
      <div className="space-y-8">
        <h2 className="text-2xl font-bold text-blue-600">Your Machine Learning Roadmap</h2>

        <div className="bg-white p-6 rounded-xl shadow-md">
          <h3 className="text-xl font-bold text-blue-800 mb-4">Phase 1: ML Foundations (Days 1–30)</h3>
          <div className="mb-6">
            <h4 className="text-lg font-semibold mb-2">Days 1-15: Mathematics & Programming</h4>
            <div className="ml-4">
              <p className="font-medium mb-1">Topics:</p>
              <ul className="list-disc ml-6 mb-2 space-y-1">
                <li>Linear Algebra & Calculus</li>
                <li>Probability & Statistics</li>
                <li>Python for ML</li>
                <li>NumPy & Pandas</li>
              </ul>
              
              <p className="font-medium mb-1">Resources:</p>
              <ul className="list-disc ml-6 mb-2 space-y-1">
                <li>Mathematics for Machine Learning book</li>
                <li>DataCamp Python courses</li>
                <li>Kaggle Learn</li>
              </ul>
            </div>
          </div>

          <div className="mb-6">
            <h4 className="text-lg font-semibold mb-2">Days 16-30: Data Processing</h4>
            <div className="ml-4">
              <p className="font-medium mb-1">Topics:</p>
              <ul className="list-disc ml-6 mb-2 space-y-1">
                <li>Data cleaning and preprocessing</li>
                <li>Feature engineering</li>
                <li>Exploratory data analysis</li>
                <li>Data visualization with matplotlib/seaborn</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-md">
          <h3 className="text-xl font-bold text-blue-800 mb-4">Phase 2: ML Algorithms (Days 31-60)</h3>
          <div className="mb-6">
            <h4 className="text-lg font-semibold mb-2">Days 31-45: Supervised Learning</h4>
            <div className="ml-4">
              <p className="font-medium mb-1">Topics:</p>
              <ul className="list-disc ml-6 mb-2 space-y-1">
                <li>Linear/Logistic Regression</li>
                <li>Decision Trees & Random Forests</li>
                <li>Support Vector Machines</li>
                <li>Model evaluation metrics</li>
              </ul>
              
              <p className="font-medium mb-1">Resources:</p>
              <ul className="list-disc ml-6 mb-2 space-y-1">
                <li>Scikit-learn documentation</li>
                <li>Stanford ML course</li>
                <li>Real-world ML projects</li>
              </ul>
            </div>
          </div>

          <div className="mb-6">
            <h4 className="text-lg font-semibold mb-2">Days 46-60: Unsupervised Learning</h4>
            <div className="ml-4">
              <p className="font-medium mb-1">Topics:</p>
              <ul className="list-disc ml-6 mb-2 space-y-1">
                <li>Clustering algorithms</li>
                <li>Dimensionality reduction</li>
                <li>Anomaly detection</li>
                <li>Association rules</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-md">
          <h3 className="text-xl font-bold text-blue-800 mb-4">Phase 3: Deep Learning (Days 61-90)</h3>
          <div className="mb-6">
            <h4 className="text-lg font-semibold mb-2">Days 61-75: Neural Networks</h4>
            <div className="ml-4">
              <p className="font-medium mb-1">Topics:</p>
              <ul className="list-disc ml-6 mb-2 space-y-1">
                <li>Neural network architectures</li>
                <li>Backpropagation</li>
                <li>Activation functions</li>
                <li>TensorFlow & PyTorch basics</li>
              </ul>
              
              <p className="font-medium mb-1">Resources:</p>
              <ul className="list-disc ml-6 mb-2 space-y-1">
                <li>Deep Learning by Ian Goodfellow</li>
                <li>TensorFlow tutorials</li>
                <li>PyTorch documentation</li>
              </ul>
            </div>
          </div>

          <div className="mb-6">
            <h4 className="text-lg font-semibold mb-2">Days 76-90: Advanced Deep Learning</h4>
            <div className="ml-4">
              <p className="font-medium mb-1">Topics:</p>
              <ul className="list-disc ml-6 mb-2 space-y-1">
                <li>Convolutional Neural Networks</li>
                <li>Recurrent Neural Networks</li>
                <li>Transfer Learning</li>
                <li>GANs and Transformers</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-md">
          <h3 className="text-xl font-bold text-blue-800 mb-4">Phase 4: ML Engineering (Days 91-100)</h3>
          <div className="mb-6">
            <h4 className="text-lg font-semibold mb-2">Days 91-100: Production ML</h4>
            <div className="ml-4">
              <p className="font-medium mb-1">Topics:</p>
              <ul className="list-disc ml-6 mb-2 space-y-1">
                <li>ML system design</li>
                <li>Model deployment (Flask/FastAPI)</li>
                <li>MLOps practices</li>
                <li>Model monitoring and maintenance</li>
              </ul>
              
              <p className="font-medium mb-1">Resources:</p>
              <ul className="list-disc ml-6 mb-2 space-y-1">
                <li>MLOps engineering blogs</li>
                <li>Deployment platforms documentation</li>
                <li>ML system design case studies</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    ),

  "Blockchain": (
      <div className="space-y-8">
        <h2 className="text-2xl font-bold text-blue-600">Your Blockchain Development Roadmap</h2>

        <div className="bg-white p-6 rounded-xl shadow-md">
          <h3 className="text-xl font-bold text-blue-800 mb-4">Phase 1: Blockchain Basics (Days 1–30)</h3>
      <div className="mb-6">
        <h4 className="text-lg font-semibold mb-2">Days 1–10: Fundamentals</h4>
        <div className="ml-4">
          <p className="font-medium mb-1">Topics:</p>
          <ul className="list-disc ml-6 mb-2 space-y-1">
            <li>Blockchain architecture</li>
            <li>Cryptography basics</li>
            <li>Smart contracts</li>
            <li>Consensus mechanisms</li>
          </ul>
          <p className="font-medium mb-1">Resources:</p>
          <ul className="list-disc ml-6 mb-2 space-y-1">
            <li>Ethereum documentation</li>
            <li>Solidity programming guide</li>
            <li>Web3.js tutorials</li>
          </ul>
        </div>
      </div>

      <div className="mb-6">
        <h4 className="text-lg font-semibold mb-2">Days 11–20: Smart Contracts</h4>
        <div className="ml-4">
          <p className="font-medium mb-1">Topics:</p>
          <ul className="list-disc ml-6 mb-2 space-y-1">
            <li>Solidity programming</li>
            <li>DApp development</li>
            <li>Testing smart contracts</li>
            <li>Security considerations</li>
          </ul>
          <p className="font-medium mb-1">Resources:</p>
          <ul className="list-disc ml-6 mb-2 space-y-1">
            <li>CryptoZombies tutorial</li>
            <li>Truffle framework</li>
            <li>OpenZeppelin contracts</li>
          </ul>
        </div>
      </div>

      <div className="mb-6">
        <h4 className="text-lg font-semibold mb-2">Days 21–30: Blockchain Networks</h4>
        <div className="ml-4">
          <p className="font-medium mb-1">Topics:</p>
          <ul className="list-disc ml-6 mb-2 space-y-1">
            <li>Ethereum network</li>
            <li>Private blockchains</li>
            <li>Layer 2 solutions</li>
            <li>Cross-chain interoperability</li>
          </ul>
        </div>
      </div>
    </div>

    {/* Phase 2 */}
    <div className="bg-white p-6 rounded-xl shadow-md">
      <h3 className="text-xl font-bold text-blue-800 mb-4">Phase 2: DApp Development (Days 31–60)</h3>

      <div className="mb-6">
        <h4 className="text-lg font-semibold mb-2">Days 31–45: Frontend Integration</h4>
        <div className="ml-4">
          <p className="font-medium mb-1">Topics:</p>
          <ul className="list-disc ml-6 mb-2 space-y-1">
            <li>Web3.js/ethers.js</li>
            <li>MetaMask integration</li>
            <li>React for DApps</li>
            <li>User authentication</li>
          </ul>
          <p className="font-medium mb-1">Resources:</p>
          <ul className="list-disc ml-6 mb-2 space-y-1">
            <li>Web3.js documentation</li>
            <li>Scaffold-ETH</li>
            <li>DApp University tutorials</li>
          </ul>
        </div>
      </div>

      <div className="mb-6">
        <h4 className="text-lg font-semibold mb-2">Days 46–60: Smart Contract Integration</h4>
        <div className="ml-4">
          <p className="font-medium mb-1">Topics:</p>
          <ul className="list-disc ml-6 mb-2 space-y-1">
            <li>Contract deployment</li>
            <li>Event handling</li>
            <li>Transaction management</li>
            <li>Gas optimization</li>
          </ul>
        </div>
      </div>
    </div>

    {/* Phase 3 */}
    <div className="bg-white p-6 rounded-xl shadow-md">
      <h3 className="text-xl font-bold text-blue-800 mb-4">Phase 3: Blockchain Specialization (Days 61–90)</h3>

      <div className="mb-6">
        <h4 className="text-lg font-semibold mb-2">Days 61–75: DeFi Development</h4>
        <div className="ml-4">
          <p className="font-medium mb-1">Topics:</p>
          <ul className="list-disc ml-6 mb-2 space-y-1">
            <li>Automated Market Makers</li>
            <li>Lending protocols</li>
            <li>Yield farming</li>
            <li>Stablecoins</li>
          </ul>
          <p className="font-medium mb-1">Resources:</p>
          <ul className="list-disc ml-6 mb-2 space-y-1">
            <li>Uniswap documentation</li>
            <li>Aave protocol</li>
            <li>DeFi research papers</li>
          </ul>
        </div>
      </div>

      <div className="mb-6">
        <h4 className="text-lg font-semibold mb-2">Days 76–90: Advanced Blockchain</h4>
        <div className="ml-4">
          <p className="font-medium mb-1">Topics:</p>
          <ul className="list-disc ml-6 mb-2 space-y-1">
            <li>Zero-knowledge proofs</li>
            <li>Sidechains and rollups</li>
            <li>DAO development</li>
            <li>Oracles and Chainlink</li>
          </ul>
        </div>
      </div>
    </div>

    {/* Phase 4 */}
    <div className="bg-white p-6 rounded-xl shadow-md">
      <h3 className="text-xl font-bold text-blue-800 mb-4">Phase 4: Production & Security (Days 91–100)</h3>
      <div className="mb-6">
        <h4 className="text-lg font-semibold mb-2">Days 91–100: Enterprise Blockchain</h4>
        <div className="ml-4">
          <p className="font-medium mb-1">Topics:</p>
          <ul className="list-disc ml-6 mb-2 space-y-1">
            <li>Smart contract auditing</li>
            <li>Formal verification</li>
            <li>Blockchain scalability</li>
            <li>Enterprise integration</li>
          </ul>
          <p className="font-medium mb-1">Resources:</p>
          <ul className="list-disc ml-6 mb-2 space-y-1">
            <li>Trail of Bits audit reports</li>
            <li>ConsenSys best practices</li>
            <li>Enterprise Ethereum Alliance</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
),

"Cybersecurity": (
<div className="space-y-8">
<h2 className="text-2xl font-bold text-blue-600">Your Cybersecurity Roadmap</h2>

<div className="bg-white p-6 rounded-xl shadow-md">
<h3 className="text-xl font-bold text-blue-800 mb-4">Phase 1: Security Fundamentals (Days 1–30)</h3>

<div className="mb-6">
  <h4 className="text-lg font-semibold mb-2">Days 1–10: Networking & Systems</h4>
  <div className="ml-4">
    <p className="font-medium mb-1">Topics:</p>
    <ul className="list-disc ml-6 mb-2 space-y-1">
      <li>Networking fundamentals</li>
      <li>Operating system security</li>
      <li>Basic cryptography</li>
      <li>Security principles</li>
    </ul>
    
    <p className="font-medium mb-1">Resources:</p>
    <ul className="list-disc ml-6 mb-2 space-y-1">
      <li>CompTIA Security+ materials</li>
      <li>Cybrary courses</li>
      <li>OWASP resources</li>
    </ul>
  </div>
</div>

<div className="mb-6">
  <h4 className="text-lg font-semibold mb-2">Days 11-20: Security Tools</h4>
  <div className="ml-4">
    <p className="font-medium mb-1">Topics:</p>
    <ul className="list-disc ml-6 mb-2 space-y-1">
      <li>Vulnerability scanners</li>
      <li>Firewalls and IDS/IPS</li>
      <li>SIEM systems</li>
      <li>Security hardening</li>
    </ul>
  </div>
</div>

<div className="mb-6">
  <h4 className="text-lg font-semibold mb-2">Days 21-30: Threat Landscape</h4>
  <div className="ml-4">
    <p className="font-medium mb-1">Topics:</p>
    <ul className="list-disc ml-6 mb-2 space-y-1">
      <li>Common attack vectors</li>
      <li>Malware analysis</li>
      <li>Social engineering</li>
      <li>Threat intelligence</li>
    </ul>
  </div>
</div>
</div>

<div className="bg-white p-6 rounded-xl shadow-md">
<h3 className="text-xl font-bold text-blue-800 mb-4">Phase 2: Offensive Security (Days 31-60)</h3>
<div className="mb-6">
  <h4 className="text-lg font-semibold mb-2">Days 31-45: Penetration Testing</h4>
  <div className="ml-4">
    <p className="font-medium mb-1">Topics:</p>
    <ul className="list-disc ml-6 mb-2 space-y-1">
      <li>Reconnaissance techniques</li>
      <li>Vulnerability assessment</li>
      <li>Exploitation basics</li>
      <li>Post-exploitation</li>
    </ul>
    
    <p className="font-medium mb-1">Resources:</p>
    <ul className="list-disc ml-6 mb-2 space-y-1">
      <li>Kali Linux documentation</li>
      <li>Metasploit framework</li>
      <li>HackTheBox platform</li>
    </ul>
  </div>
</div>

<div className="mb-6">
  <h4 className="text-lg font-semibold mb-2">Days 46-60: Web Application Security</h4>
  <div className="ml-4">
    <p className="font-medium mb-1">Topics:</p>
    <ul className="list-disc ml-6 mb-2 space-y-1">
      <li>OWASP Top 10</li>
      <li>SQL injection</li>
      <li>XSS and CSRF</li>
      <li>API security</li>
    </ul>
  </div>
</div>
</div>

<div className="bg-white p-6 rounded-xl shadow-md">
<h3 className="text-xl font-bold text-blue-800 mb-4">Phase 3: Defensive Security (Days 61-90)</h3>
<div className="mb-6">
  <h4 className="text-lg font-semibold mb-2">Days 61-75: Security Operations</h4>
  <div className="ml-4">
    <p className="font-medium mb-1">Topics:</p>
    <ul className="list-disc ml-6 mb-2 space-y-1">
      <li>Security monitoring</li>
      <li>Incident response</li>
      <li>Digital forensics</li>
      <li>Log analysis</li>
    </ul>
    
    <p className="font-medium mb-1">Resources:</p>
    <ul className="list-disc ml-6 mb-2 space-y-1">
      <li>Splunk fundamentals</li>
      <li>SANS incident handling</li>
      <li>NIST cybersecurity framework</li>
    </ul>
  </div>
</div>

<div className="mb-6">
  <h4 className="text-lg font-semibold mb-2">Days 76-90: Cloud Security</h4>
  <div className="ml-4">
    <p className="font-medium mb-1">Topics:</p>
    <ul className="list-disc ml-6 mb-2 space-y-1">
      <li>Cloud security models</li>
      <li>Container security</li>
      <li>Serverless security</li>
      <li>Cloud compliance</li>
    </ul>
  </div>
</div>
</div>

<div className="bg-white p-6 rounded-xl shadow-md">
<h3 className="text-xl font-bold text-blue-800 mb-4">Phase 4: Security Management (Days 91-100)</h3>
<div className="mb-6">
  <h4 className="text-lg font-semibold mb-2">Days 91-100: Security Program</h4>
  <div className="ml-4">
    <p className="font-medium mb-1">Topics:</p>
    <ul className="list-disc ml-6 mb-2 space-y-1">
      <li>Security policies and procedures</li>
      <li>Risk management</li>
      <li>Security awareness training</li>
      <li>Compliance and regulations</li>
    </ul>
    
    <p className="font-medium mb-1">Resources:</p>
    <ul className="list-disc ml-6 mb-2 space-y-1">
      <li>ISO 27001 framework</li>
      <li>GDPR and privacy regulations</li>
      <li>Security leadership resources</li>
    </ul>
  </div>
</div>
</div>
</div>

),

"Mobile App Development": (
<div className="space-y-8">
<h2 className="text-2xl font-bold text-blue-600">Your Mobile App Development Roadmap</h2>

<div className="bg-white p-6 rounded-xl shadow-md">
<h3 className="text-xl font-bold text-blue-800 mb-4">Phase 1: Mobile Fundamentals (Days 1–30)</h3>

<div className="mb-6">
  <h4 className="text-lg font-semibold mb-2">Days 1–10: Programming Basics</h4>
  <div className="ml-4">
    <p className="font-medium mb-1">Topics:</p>
    <ul className="list-disc ml-6 mb-2 space-y-1">
      <li>Mobile platforms overview</li>
      <li>Java/Kotlin for Android</li>
      <li>Swift for iOS</li>
      <li>Mobile UI/UX principles</li>
    </ul>
    
    <p className="font-medium mb-1">Resources:</p>
    <ul className="list-disc ml-6 mb-2 space-y-1">
      <li>Android developer documentation</li>
      <li>Apple developer resources</li>
      <li>Udacity mobile courses</li>
    </ul>
  </div>
</div>

<div className="mb-6">
  <h4 className="text-lg font-semibold mb-2">Days 11-20: Native Development</h4>
  <div className="ml-4">
    <p className="font-medium mb-1">Topics:</p>
    <ul className="list-disc ml-6 mb-2 space-y-1">
      <li>Android Studio</li>
      <li>Xcode and Interface Builder</li>
      <li>App lifecycle</li>
      <li>Layouts and views</li>
    </ul>
  </div>
</div>

<div className="mb-6">
  <h4 className="text-lg font-semibold mb-2">Days 21-30: Mobile Components</h4>
  <div className="ml-4">
    <p className="font-medium mb-1">Topics:</p>
    <ul className="list-disc ml-6 mb-2 space-y-1">
      <li>Navigation patterns</li>
      <li>Data storage options</li>
      <li>Permissions handling</li>
      <li>Background processing</li>
    </ul>
  </div>
</div>
</div>

<div className="bg-white p-6 rounded-xl shadow-md">
<h3 className="text-xl font-bold text-blue-800 mb-4">Phase 2: Cross-Platform Development (Days 31-60)</h3>
<div className="mb-6">
  <h4 className="text-lg font-semibold mb-2">Days 31-45: React Native</h4>
  <div className="ml-4">
    <p className="font-medium mb-1">Topics:</p>
    <ul className="list-disc ml-6 mb-2 space-y-1">
      <li>React Native basics</li>
      <li>Component styling</li>
      <li>Navigation libraries</li>
      <li>State management</li>
    </ul>
    
    <p className="font-medium mb-1">Resources:</p>
    <ul className="list-disc ml-6 mb-2 space-y-1">
      <li>React Native documentation</li>
      <li>Expo platform</li>
      <li>React Navigation</li>
    </ul>
  </div>
</div>

<div className="mb-6">
  <h4 className="text-lg font-semibold mb-2">Days 46-60: Flutter</h4>
  <div className="ml-4">
    <p className="font-medium mb-1">Topics:</p>
    <ul className="list-disc ml-6 mb-2 space-y-1">
      <li>Dart programming</li>
      <li>Flutter widgets</li>
      <li>State management</li>
      <li>Custom animations</li>
    </ul>
  </div>
</div>
</div>

<div className="bg-white p-6 rounded-xl shadow-md">
<h3 className="text-xl font-bold text-blue-800 mb-4">Phase 3: Advanced Mobile (Days 61-90)</h3>
<div className="mb-6">
  <h4 className="text-lg font-semibold mb-2">Days 61-75: API Integration</h4>
  <div className="ml-4">
    <p className="font-medium mb-1">Topics:</p>
    <ul className="list-disc ml-6 mb-2 space-y-1">
      <li>RESTful API consumption</li>
      <li>GraphQL clients</li>
      <li>Authentication flows</li>
      <li>Offline data synchronization</li>
    </ul>
    
    <p className="font-medium mb-1">Resources:</p>
    <ul className="list-disc ml-6 mb-2 space-y-1">
      <li>Retrofit/Alamofire</li>
      <li>Apollo GraphQL</li>
      <li>JWT authentication</li>
    </ul>
  </div>
</div>

<div className="mb-6">
  <h4 className="text-lg font-semibold mb-2">Days 76-90: Advanced Features</h4>
  <div className="ml-4">
    <p className="font-medium mb-1">Topics:</p>
    <ul className="list-disc ml-6 mb-2 space-y-1">
      <li>Push notifications</li>
      <li>Maps and location services</li>
      <li>Camera and media</li>
      <li>In-app purchases</li>
    </ul>
  </div>
</div>
</div>

<div className="bg-white p-6 rounded-xl shadow-md">
<h3 className="text-xl font-bold text-blue-800 mb-4">Phase 4: App Publishing (Days 91-100)</h3>
<div className="mb-6">
  <h4 className="text-lg font-semibold mb-2">Days 91-100: Deployment & Optimization</h4>
  <div className="ml-4">
    <p className="font-medium mb-1">Topics:</p>
    <ul className="list-disc ml-6 mb-2 space-y-1">
      <li>App store optimization</li>
      <li>CI/CD for mobile</li>
      <li>Performance optimization</li>
      <li>Analytics and monitoring</li>
    </ul>
    
    <p className="font-medium mb-1">Resources:</p>
    <ul className="list-disc ml-6 mb-2 space-y-1">
      <li>Fastlane automation</li>
      <li>Firebase Analytics</li>
      <li>App Store Connect</li>
    </ul>
  </div>
</div>
</div>
</div>
),

"Game Development": (
<div className="space-y-8">
<h2 className="text-2xl font-bold text-blue-600">Your Game Development Roadmap</h2>

<div className="bg-white p-6 rounded-xl shadow-md">
<h3 className="text-xl font-bold text-blue-800 mb-4">Phase 1: Game Development Basics (Days 1–30)</h3>

<div className="mb-6">
  <h4 className="text-lg font-semibold mb-2">Days 1–10: Fundamentals</h4>
  <div className="ml-4">
    <p className="font-medium mb-1">Topics:</p>
    <ul className="list-disc ml-6 mb-2 space-y-1">
      <li>Game design principles</li>
      <li>Game engines overview</li>
      <li>Programming for games</li>
      <li>2D graphics basics</li>
    </ul>
    
    <p className="font-medium mb-1">Resources:</p>
    <ul className="list-disc ml-6 mb-2 space-y-1">
      <li>Unity Learn platform</li>
      <li>Unreal Engine documentation</li>
      <li>Game Design Workshop book</li>
    </ul>
  </div>
</div>

<div className="mb-6">
  <h4 className="text-lg font-semibold mb-2">Days 11-20: Unity Basics</h4>
  <div className="ml-4">
    <p className="font-medium mb-1">Topics:</p>
    <ul className="list-disc ml-6 mb-2 space-y-1">
      <li>Unity interface</li>
      <li>GameObjects and Components</li>
      <li>C# scripting</li>
      <li>Physics and collisions</li>
    </ul>
  </div>
</div>

<div className="mb-6">
  <h4 className="text-lg font-semibold mb-2">Days 21-30: 2D Game Development</h4>
  <div className="ml-4">
    <p className="font-medium mb-1">Topics:</p>
    <ul className="list-disc ml-6 mb-2 space-y-1">
      <li>Sprites and animations</li>
      <li>Tilemaps</li>
      <li>Character controllers</li>
      <li>Simple game mechanics</li>
    </ul>
  </div>
</div>
</div>

<div className="bg-white p-6 rounded-xl shadow-md">
<h3 className="text-xl font-bold text-blue-800 mb-4">Phase 2: 3D Game Development (Days 31-60)</h3>
<div className="mb-6">
  <h4 className="text-lg font-semibold mb-2">Days 31-45: 3D Fundamentals</h4>
  <div className="ml-4">
    <p className="font-medium mb-1">Topics:</p>
    <ul className="list-disc ml-6 mb-2 space-y-1">
      <li>3D modeling basics</li>
      <li>Materials and textures</li>
      <li>Lighting in 3D</li>
      <li>Camera systems</li>
    </ul>
    
    <p className="font-medium mb-1">Resources:</p>
    <ul className="list-disc ml-6 mb-2 space-y-1">
      <li>Blender tutorials</li>
      <li>Unity 3D documentation</li>
      <li>3D game design courses</li>
    </ul>
  </div>
</div>

<div className="mb-6">
  <h4 className="text-lg font-semibold mb-2">Days 46-60: Game Systems</h4>
  <div className="ml-4">
    <p className="font-medium mb-1">Topics:</p>
    <ul className="list-disc ml-6 mb-2 space-y-1">
      <li>UI systems</li>
      <li>Save/load functionality</li>
      <li>Audio implementation</li>
      <li>Input systems</li>
    </ul>
  </div>
</div>
</div>

<div className="bg-white p-6 rounded-xl shadow-md">
<h3 className="text-xl font-bold text-blue-800 mb-4">Phase 3: Advanced Game Development (Days 61-90)</h3>
<div className="mb-6">
  <h4 className="text-lg font-semibold mb-2">Days 61-75: Game AI</h4>
  <div className="ml-4">
    <p className="font-medium mb-1">Topics:</p>
    <ul className="list-disc ml-6 mb-2 space-y-1">
      <li>Pathfinding algorithms</li>
      <li>Behavior trees</li>
      <li>State machines</li>
      <li>Enemy AI patterns</li>
    </ul>
    
    <p className="font-medium mb-1">Resources:</p>
    <ul className="list-disc ml-6 mb-2 space-y-1">
      <li>Game AI Pro books</li>
      <li>A* Pathfinding Project</li>
      <li>AI for Games by Ian Millington</li>
    </ul>
  </div>
</div>

<div className="mb-6">
  <h4 className="text-lg font-semibold mb-2">Days 76-90: Multiplayer Basics</h4>
  <div className="ml-4">
    <p className="font-medium mb-1">Topics:</p>
    <ul className="list-disc ml-6 mb-2 space-y-1">
      <li>Networking fundamentals</li>
      <li>Client-server architecture</li>
      <li>Synchronization techniques</li>
      <li>Multiplayer game design</li>
    </ul>
  </div>
</div>
</div>

<div className="bg-white p-6 rounded-xl shadow-md">
<h3 className="text-xl font-bold text-blue-800 mb-4">Phase 4: Game Publishing (Days 91-100)</h3>
<div className="mb-6">
  <h4 className="text-lg font-semibold mb-2">Days 91-100: Polishing & Publishing</h4>
  <div className="ml-4">
    <p className="font-medium mb-1">Topics:</p>
    <ul className="list-disc ml-6 mb-2 space-y-1">
      <li>Performance optimization</li>
      <li>Game testing</li>
      <li>Publishing platforms</li>
      <li>Monetization strategies</li>
    </ul>
    
    <p className="font-medium mb-1">Resources:</p>
    <ul className="list-disc ml-6 mb-2 space-y-1">
      <li>Steam Direct documentation</li>
      <li>Unity Asset Store</li>
      <li>Game marketing guides</li>
    </ul>
  </div>
</div>
</div>
</div>
),

  "Data Science": (
    <div className="space-y-8">
      <h2 className="text-2xl font-bold text-blue-600">Your Data Science Roadmap</h2>

      <div className="bg-white p-6 rounded-xl shadow-md">
        <h3 className="text-xl font-bold text-blue-800 mb-4">Phase 1: Foundations (Days 1-30)</h3>
        <div className="mb-6">
          <h4 className="text-lg font-semibold mb-2">Days 1-15: Programming & Statistics</h4>
          <div className="ml-4">
            <p className="font-medium mb-1">Topics:</p>
            <ul className="list-disc ml-6 mb-2 space-y-1">
              <li>Python programming</li>
              <li>Descriptive statistics</li>
              <li>Probability theory</li>
              <li>Statistical inference</li>
            </ul>
            <p className="font-medium mb-1">Resources:</p>
            <ul className="list-disc ml-6 mb-2 space-y-1">
              <li>Python for Data Science (Coursera)</li>
              <li>Statistics and Probability (Khan Academy)</li>
              <li>DataCamp Python courses</li>
            </ul>
          </div>
        </div>

        <div className="mb-6">
          <h4 className="text-lg font-semibold mb-2">Days 16-30: Data Analysis Tools</h4>
          <div className="ml-4">
            <p className="font-medium mb-1">Topics:</p>
            <ul className="list-disc ml-6 mb-2 space-y-1">
              <li>NumPy & Pandas</li>
              <li>Data visualization (Matplotlib, Seaborn)</li>
              <li>SQL fundamentals</li>
              <li>Jupyter notebooks</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-white p-6 rounded-xl shadow-md">
        <h3 className="text-xl font-bold text-blue-800 mb-4">Phase 2: Machine Learning (Days 31-60)</h3>
        <div className="mb-6">
          <h4 className="text-lg font-semibold mb-2">Days 31-45: ML Fundamentals</h4>
          <div className="ml-4">
            <p className="font-medium mb-1">Topics:</p>
            <ul className="list-disc ml-6 mb-2 space-y-1">
              <li>Supervised learning algorithms</li>
              <li>Unsupervised learning</li>
              <li>Model evaluation</li>
              <li>Feature engineering</li>
            </ul>
          </div>
        </div>

        <div className="mb-6">
          <h4 className="text-lg font-semibold mb-2">Days 46-60: Advanced ML</h4>
          <div className="ml-4">
            <p className="font-medium mb-1">Topics:</p>
            <ul className="list-disc ml-6 mb-2 space-y-1">
              <li>Ensemble methods</li>
              <li>Neural Networks basics</li>
              <li>Time series analysis</li>
              <li>Natural Language Processing</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-white p-6 rounded-xl shadow-md">
        <h3 className="text-xl font-bold text-blue-800 mb-4">Phase 3: Deep Learning (Days 61-90)</h3>
        <div className="mb-6">
          <h4 className="text-lg font-semibold mb-2">Days 61-75: Deep Learning Fundamentals</h4>
          <div className="ml-4">
            <p className="font-medium mb-1">Topics:</p>
            <ul className="list-disc ml-6 mb-2 space-y-1">
              <li>Neural network architectures</li>
              <li>CNN and RNN</li>
              <li>Transfer learning</li>
              <li>Deep learning frameworks</li>
            </ul>
          </div>
        </div>

        <div className="mb-6">
          <h4 className="text-lg font-semibold mb-2">Days 76-90: Advanced Topics</h4>
          <div className="ml-4">
            <p className="font-medium mb-1">Topics:</p>
            <ul className="list-disc ml-6 mb-2 space-y-1">
              <li>GANs and Transformers</li>
              <li>Reinforcement Learning</li>
              <li>Computer Vision</li>
              <li>Advanced NLP</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-white p-6 rounded-xl shadow-md">
        <h3 className="text-xl font-bold text-blue-800 mb-4">Phase 4: Production & Deployment (Days 91-100)</h3>
        <div className="mb-6">
          <h4 className="text-lg font-semibold mb-2">Days 91-100: MLOps</h4>
          <div className="ml-4">
            <p className="font-medium mb-1">Topics:</p>
            <ul className="list-disc ml-6 mb-2 space-y-1">
              <li>Model deployment</li>
              <li>Model monitoring</li>
              <li>Data pipelines</li>
              <li>Production best practices</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  ),
  
  "Data Structures & Algorithms": (
    <div className="space-y-8">
      <h2 className="text-2xl font-bold text-blue-600">Your DSA Learning Roadmap</h2>
  
      <div className="bg-white p-6 rounded-xl shadow-md">
        <h3 className="text-xl font-bold text-blue-800 mb-4">Phase 1: Basic Data Structures (Days 1-30)</h3>
        <div className="mb-6">
          <h4 className="text-lg font-semibold mb-2">Days 1-15: Fundamentals</h4>
          <div className="ml-4">
            <p className="font-medium mb-1">Topics:</p>
            <ul className="list-disc ml-6 mb-2 space-y-1">
              <li>Arrays and Strings</li>
              <li>Linked Lists</li>
              <li>Stacks and Queues</li>
              <li>Time & Space Complexity</li>
            </ul>
            <p className="font-medium mb-1">Resources:</p>
            <ul className="list-disc ml-6 mb-2 space-y-1">
              <li>GeeksforGeeks DSA course</li>
              <li>LeetCode easy problems</li>
              <li>Visualgo.net</li>
            </ul>
          </div>
        </div>
      </div>
  
      <div className="bg-white p-6 rounded-xl shadow-md">
        <h3 className="text-xl font-bold text-blue-800 mb-4">Phase 2: Advanced Data Structures (Days 31-60)</h3>
        <div className="mb-6">
          <h4 className="text-lg font-semibold mb-2">Days 31-45: Trees & Graphs</h4>
          <div className="ml-4">
            <p className="font-medium mb-1">Topics:</p>
            <ul className="list-disc ml-6 mb-2 space-y-1">
              <li>Binary Trees</li>
              <li>BST and AVL Trees</li>
              <li>Graph representations</li>
              <li>Graph traversals</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  ),
 "Computer Networks": (
    <div className="space-y-8">
      <h2 className="text-2xl font-bold text-blue-600">Your Computer Networks Roadmap</h2>
    <div className="bg-white p-6 rounded-xl shadow-md">
      <h3 className="text-xl font-bold text-blue-800 mb-4">Phase 1: Network Fundamentals (Days 1-30)</h3>
      <div className="mb-6">
        <h4 className="text-lg font-semibold mb-2">Days 1-15: Basic Concepts</h4>
        <div className="ml-4">
          <p className="font-medium mb-1">Topics:</p>
          <ul className="list-disc ml-6 mb-2 space-y-1">
            <li>OSI Model</li>
            <li>TCP/IP Protocol Suite</li>
            <li>Network Topologies</li>
            <li>IP Addressing and Subnetting</li>
          </ul>
          <p className="font-medium mb-1">Resources:</p>
          <ul className="list-disc ml-6 mb-2 space-y-1">
            <li>Cisco Networking Basics</li>
            <li>CompTIA Network+ materials</li>
            <li>Practical networking courses</li>
          </ul>
        </div>
      </div>

      <div className="mb-6">
        <h4 className="text-lg font-semibold mb-2">Days 16-30: Network Protocols</h4>
        <div className="ml-4">
          <p className="font-medium mb-1">Topics:</p>
          <ul className="list-disc ml-6 mb-2 space-y-1">
            <li>DNS and DHCP</li>
            <li>HTTP/HTTPS</li>
            <li>FTP and SMTP</li>
            <li>VPN protocols</li>
          </ul>
        </div>
      </div>
    </div>

    <div className="bg-white p-6 rounded-xl shadow-md">
      <h3 className="text-xl font-bold text-blue-800 mb-4">Phase 2: Network Infrastructure (Days 31-60)</h3>
      <div className="mb-6">
        <h4 className="text-lg font-semibold mb-2">Days 31-45: Network Devices</h4>
        <div className="ml-4">
          <p className="font-medium mb-1">Topics:</p>
          <ul className="list-disc ml-6 mb-2 space-y-1">
            <li>Routers and Switches</li>
            <li>Firewalls</li>
            <li>Load Balancers</li>
            <li>Network Security Devices</li>
          </ul>
        </div>
      </div>

      <div className="mb-6">
        <h4 className="text-lg font-semibold mb-2">Days 46-60: Network Design</h4>
        <div className="ml-4">
          <p className="font-medium mb-1">Topics:</p>
          <ul className="list-disc ml-6 mb-2 space-y-1">
            <li>LAN/WAN Design</li>
            <li>Network Segmentation</li>
            <li>VLAN Implementation</li>
            <li>Wireless Networks</li>
          </ul>
        </div>
      </div>
    </div>

    <div className="bg-white p-6 rounded-xl shadow-md">
      <h3 className="text-xl font-bold text-blue-800 mb-4">Phase 3: Advanced Networking (Days 61-90)</h3>
      <div className="mb-6">
        <h4 className="text-lg font-semibold mb-2">Days 61-75: Network Security</h4>
        <div className="ml-4">
          <p className="font-medium mb-1">Topics:</p>
          <ul className="list-disc ml-6 mb-2 space-y-1">
            <li>Security Protocols</li>
            <li>Network Attacks</li>
            <li>Security Best Practices</li>
            <li>Penetration Testing</li>
          </ul>
        </div>
      </div>

      <div className="mb-6">
        <h4 className="text-lg font-semibold mb-2">Days 76-90: Network Management</h4>
        <div className="ml-4">
          <p className="font-medium mb-1">Topics:</p>
          <ul className="list-disc ml-6 mb-2 space-y-1">
            <li>Network Monitoring</li>
            <li>Traffic Analysis</li>
            <li>Troubleshooting</li>
            <li>Performance Optimization</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
),

"Robotics": (
  <div className="space-y-8">
    <h2 className="text-2xl font-bold text-blue-600">Your Robotics Roadmap</h2>

    <div className="bg-white p-6 rounded-xl shadow-md">
      <h3 className="text-xl font-bold text-blue-800 mb-4">Phase 1: Robotics Foundations (Days 1-30)</h3>
      <div className="mb-6">
        <h4 className="text-lg font-semibold mb-2">Days 1-15: Basic Concepts</h4>
        <div className="ml-4">
          <p className="font-medium mb-1">Topics:</p>
          <ul className="list-disc ml-6 mb-2 space-y-1">
            <li>Robot Types and Applications</li>
            <li>Mechanical Systems</li>
            <li>Electronics Basics</li>
            <li>Programming Fundamentals</li>
          </ul>
        </div>
      </div>

      <div className="mb-6">
        <h4 className="text-lg font-semibold mb-2">Days 16-30: Control Systems</h4>
        <div className="ml-4">
          <p className="font-medium mb-1">Topics:</p>
          <ul className="list-disc ml-6 mb-2 space-y-1">
            <li>Sensors and Actuators</li>
            <li>Feedback Control</li>
            <li>Motor Control</li>
            <li>Robot Kinematics</li>
          </ul>
        </div>
      </div>
    </div>

    
    <div className="bg-white p-6 rounded-xl shadow-md">
        <h3 className="text-xl font-bold text-blue-800 mb-4">Phase 2: Robot Programming (Days 31-60)</h3>
        <div className="mb-6">
          <h4 className="text-lg font-semibold mb-2">Days 31-45: ROS Basics</h4>
          <div className="ml-4">
            <p className="font-medium mb-1">Topics:</p>
            <ul className="list-disc ml-6 mb-2 space-y-1">
              <li>ROS Architecture</li>
              <li>Publishers and Subscribers</li>
              <li>Services and Actions</li>
              <li>Robot Simulation</li>
            </ul>
          </div>
        </div>

        <div className="mb-6">
          <h4 className="text-lg font-semibold mb-2">Days 46-60: Advanced ROS</h4>
          <div className="ml-4">
            <p className="font-medium mb-1">Topics:</p>
            <ul className="list-disc ml-6 mb-2 space-y-1">
              <li>Navigation and Planning</li>
              <li>Computer Vision Integration</li>
              <li>Robot Manipulation</li>
              <li>Multi-Robot Systems</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-white p-6 rounded-xl shadow-md">
        <h3 className="text-xl font-bold text-blue-800 mb-4">Phase 3: Advanced Robotics (Days 61-90)</h3>
        <div className="mb-6">
          <h4 className="text-lg font-semibold mb-2">Days 61-75: Robot Perception</h4>
          <div className="ml-4">
            <p className="font-medium mb-1">Topics:</p>
            <ul className="list-disc ml-6 mb-2 space-y-1">
              <li>Computer Vision for Robotics</li>
              <li>SLAM (Simultaneous Localization and Mapping)</li>
              <li>Sensor Fusion</li>
              <li>3D Perception</li>
            </ul>
          </div>
        </div>

        <div className="mb-6">
          <h4 className="text-lg font-semibold mb-2">Days 76-90: AI in Robotics</h4>
          <div className="ml-4">
            <p className="font-medium mb-1">Topics:</p>
            <ul className="list-disc ml-6 mb-2 space-y-1">
              <li>Machine Learning for Robotics</li>
              <li>Reinforcement Learning</li>
              <li>Neural Networks in Control</li>
              <li>Human-Robot Interaction</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-white p-6 rounded-xl shadow-md">
        <h3 className="text-xl font-bold text-blue-800 mb-4">Phase 4: Project Integration (Days 91-100)</h3>
        <div className="mb-6">
          <h4 className="text-lg font-semibold mb-2">Days 91-100: Final Project</h4>
          <div className="ml-4">
            <p className="font-medium mb-1">Topics:</p>
            <ul className="list-disc ml-6 mb-2 space-y-1">
              <li>System Integration</li>
              <li>Project Planning</li>
              <li>Testing and Validation</li>
              <li>Documentation</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  ),


"Internet of Things (IoT)": (
  <div className="space-y-8">
    <h2 className="text-2xl font-bold text-blue-600">Your IoT Development Roadmap</h2>

    <div className="bg-white p-6 rounded-xl shadow-md">
      <h3 className="text-xl font-bold text-blue-800 mb-4">Phase 1: IoT Fundamentals (Days 1-30)</h3>
      <div className="mb-6">
        <h4 className="text-lg font-semibold mb-2">Days 1-15: IoT Basics</h4>
        <div className="ml-4">
          <p className="font-medium mb-1">Topics:</p>
          <ul className="list-disc ml-6 mb-2 space-y-1">
            <li>IoT Architecture</li>
            <li>Sensors and Actuators</li>
            <li>Microcontrollers (Arduino/ESP32)</li>
            <li>Communication Protocols</li>
          </ul>
          <p className="font-medium mb-1">Resources:</p>
          <ul className="list-disc ml-6 mb-2 space-y-1">
            <li>Arduino Documentation</li>
            <li>ESP32 Getting Started</li>
            <li>IoT Platforms Overview</li>
          </ul>
        </div>
      </div>

      <div className="mb-6">
        <h4 className="text-lg font-semibold mb-2">Days 16-30: Networking for IoT</h4>
        <div className="ml-4">
          <p className="font-medium mb-1">Topics:</p>
          <ul className="list-disc ml-6 mb-2 space-y-1">
            <li>WiFi and Bluetooth</li>
            <li>MQTT Protocol</li>
            <li>HTTP/REST APIs</li>
            <li>Network Security</li>
          </ul>
        </div>
      </div>
    </div>

    <div className="bg-white p-6 rounded-xl shadow-md">
      <h3 className="text-xl font-bold text-blue-800 mb-4">Phase 2: IoT Development (Days 31-60)</h3>
      <div className="mb-6">
        <h4 className="text-lg font-semibold mb-2">Days 31-45: Cloud Integration</h4>
        <div className="ml-4">
          <p className="font-medium mb-1">Topics:</p>
          <ul className="list-disc ml-6 mb-2 space-y-1">
            <li>AWS IoT Core</li>
            <li>Azure IoT Hub</li>
            <li>Google Cloud IoT</li>
            <li>Data Storage Solutions</li>
          </ul>
        </div>
      </div>
    </div>
  
    <div className="bg-white p-6 rounded-xl shadow-md">
        <h3 className="text-xl font-bold text-blue-800 mb-4">Phase 3: IoT Applications (Days 61-90)</h3>
        <div className="mb-6">
          <h4 className="text-lg font-semibold mb-2">Days 61-75: IoT Analytics</h4>
          <div className="ml-4">
            <p className="font-medium mb-1">Topics:</p>
            <ul className="list-disc ml-6 mb-2 space-y-1">
              <li>Data Collection and Processing</li>
              <li>Real-time Analytics</li>
              <li>Machine Learning Integration</li>
              <li>Visualization Tools</li>
            </ul>
          </div>
        </div>

        <div className="mb-6">
          <h4 className="text-lg font-semibold mb-2">Days 76-90: IoT Security</h4>
          <div className="ml-4">
            <p className="font-medium mb-1">Topics:</p>
            <ul className="list-disc ml-6 mb-2 space-y-1">
              <li>Security Protocols</li>
              <li>Device Authentication</li>
              <li>Encryption Methods</li>
              <li>Security Best Practices</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-white p-6 rounded-xl shadow-md">
        <h3 className="text-xl font-bold text-blue-800 mb-4">Phase 4: IoT Project (Days 91-100)</h3>
        <div className="mb-6">
          <h4 className="text-lg font-semibold mb-2">Days 91-100: Project Implementation</h4>
          <div className="ml-4">
            <p className="font-medium mb-1">Topics:</p>
            <ul className="list-disc ml-6 mb-2 space-y-1">
              <li>System Architecture Design</li>
              <li>Integration Testing</li>
              <li>Deployment Strategies</li>
              <li>Monitoring and Maintenance</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
  

};

return (
<div className="p-4">
{roadmaps[domain] || (
<div className="text-red-500">
No roadmap available for {domain}
</div>
)}
</div>
);
}