'use client';
import { useState } from 'react';
import DomainRoadmap from '../../components/DomainRoadmap';

// Define the domains
const domains = [
  "Web Development",
  "Mobile App Development",
  "Artificial Intelligence (AI)",
  "Machine Learning (ML)",
  "Data Science",
  "Cybersecurity",
  "Software Development",
  "Cloud Computing",
  "Database Management Systems",
  "Operating Systems",
  "Computer Networks",
  "Data Structures and Algorithms (DSA)",
  "Blockchain",
  "Robotics",
  "Game Development",
  "Bioinformatics",
  "Internet of Things (IoT)",
  "DevOps",
  "Augmented & Virtual Reality (AR/VR)",
  "Quantum Computing"
];

// Questions to determine user interests
const questions = [
  {
    question: "Do you enjoy creating visual interfaces that users interact with?",
    domains: ["Web Development", "Mobile App Development", "Game Development", "Augmented & Virtual Reality (AR/VR)"]
  },
  {
    question: "Are you interested in analyzing and working with large datasets?",
    domains: ["Data Science", "Machine Learning (ML)", "Artificial Intelligence (AI)", "Database Management Systems"]
  },
  {
    question: "Do you enjoy solving complex algorithmic problems?",
    domains: ["Data Structures and Algorithms (DSA)", "Artificial Intelligence (AI)", "Machine Learning (ML)"]
  },
  {
    question: "Are you interested in building secure systems and protecting digital assets?",
    domains: ["Cybersecurity", "Blockchain", "Cloud Computing"]
  },
  {
    question: "Do you prefer working with hardware and physical components?",
    domains: ["Robotics", "Internet of Things (IoT)", "Computer Networks"]
  }
];

export default function DomainSelection() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<boolean[]>([]);
  const [recommendedDomains, setRecommendedDomains] = useState<string[]>([]);
  const [showResults, setShowResults] = useState(false);
  const [selectedDomain, setSelectedDomain] = useState<string | null>(null);

  const handleAnswer = (answer: boolean) => {
    const newAnswers = [...answers, answer];
    setAnswers(newAnswers);
    
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      // Calculate recommended domains based on answers
      const domainScores = new Map<string, number>();
      
      domains.forEach(domain => {
        domainScores.set(domain, 0);
      });
      
      newAnswers.forEach((answer, index) => {
        if (answer) {
          questions[index].domains.forEach(domain => {
            domainScores.set(domain, (domainScores.get(domain) || 0) + 1);
          });
        }
      });
      
      // Sort domains by score and get top 3
      const sortedDomains = [...domainScores.entries()]
        .sort((a, b) => b[1] - a[1])
        .map(entry => entry[0])
        .slice(0, 3);
      
      setRecommendedDomains(sortedDomains);
      setShowResults(true);
    }
  };

  const handleDomainSelect = (domain: string) => {
    // Instead of redirecting, set the selected domain
    setSelectedDomain(domain);
    localStorage.setItem('selectedDomain', domain);
  };

  const handleBackToResults = () => {
    setSelectedDomain(null);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-4">
      <div className="max-w-4xl w-full bg-white rounded-xl shadow-lg p-8">
        {!showResults ? (
          // Quiz questions section
          <>
            <h1 className="text-2xl font-bold text-gray-900 mb-6">
              Let's find your ideal domain in Computer Science
            </h1>
            <div className="mb-8">
              <h2 className="text-xl font-semibold mb-4">
                Question {currentQuestion + 1} of {questions.length}
              </h2>
              <p className="text-lg mb-6">{questions[currentQuestion].question}</p>
              <div className="flex gap-4">
                <button
                  onClick={() => handleAnswer(true)}
                  className="flex-1 bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 transition-colors"
                >
                  Yes
                </button>
                <button
                  onClick={() => handleAnswer(false)}
                  className="flex-1 bg-gray-200 text-gray-800 py-3 rounded-lg hover:bg-gray-300 transition-colors"
                >
                  No
                </button>
              </div>
            </div>
          </>
        ) : selectedDomain ? (
          // Roadmap view
          <div>
            <div className="flex items-center mb-6">
              <button 
                onClick={handleBackToResults}
                className="mr-4 text-blue-500 hover:text-blue-700 flex items-center"
              >
                <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                Back to results
              </button>
              <h1 className="text-2xl font-bold text-gray-900">
                Roadmap for {selectedDomain}
              </h1>
            </div>
            
            <DomainRoadmap domain={selectedDomain} />
          </div>
        ) : (
          // Domain recommendations
          <>
            <h1 className="text-2xl font-bold text-gray-900 mb-6">
              Your Recommended Domains
            </h1>
            <p className="text-gray-600 mb-6">
              Based on your interests, we recommend these domains for you:
            </p>
            <div className="space-y-4">
              {recommendedDomains.map((domain, index) => (
                <button
                  key={index}
                  onClick={() => handleDomainSelect(domain)}
                  className="w-full text-left p-4 bg-blue-50 border border-blue-200 rounded-lg hover:bg-blue-100 transition-colors flex justify-between items-center"
                >
                  <span className="font-medium">{domain}</span>
                  <svg 
                    className="w-5 h-5 text-blue-500" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}