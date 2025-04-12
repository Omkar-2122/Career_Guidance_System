'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { domainRoadmaps } from '@/data/roadmaps';
import { domains } from './Navigation'; // Import domains from Navigation

interface Question {
    id: number;
    text: string;
    options: string[];
    domains: Record<string, number>;
}

const questions: Question[] = [
    {
        id: 1,
        text: "Do you enjoy creating visually appealing user interfaces?",
        options: ["Yes", "No"],
        domains: {
            "Frontend Developer": 3,
            "UI/UX Designer": 3,
            "Full Stack Developer": 2
        }
    },
    {
        id: 2,
        text: "Are you interested in working with complex algorithms and data structures?",
        options: ["Yes", "No"],
        domains: {
            "Backend Developer": 3,
            "AI/ML Engineer": 3,
            "Data Scientist": 2
        }
    },
    {
        id: 3,
        text: "Do you like analyzing and working with large datasets?",
        options: ["Yes", "No"],
        domains: {
            "Data Scientist": 3,
            "AI/ML Engineer": 2,
            "Backend Developer": 1
        }
    },
    {
        id: 4,
        text: "Are you passionate about cybersecurity and system protection?",
        options: ["Yes", "No"],
        domains: {
            "Cybersecurity Engineer": 3,
            "DevOps Engineer": 2,
            "Cloud Engineer": 1
        }
    },
    {
        id: 5,
        text: "Do you enjoy optimizing system performance and scalability?",
        options: ["Yes", "No"],
        domains: {
            "DevOps Engineer": 3,
            "Cloud Engineer": 3,
            "Backend Developer": 2
        }
    }
];

const domainDetails = {
    "Frontend Developer": {
        description: "Frontend Developers create interactive user interfaces and experiences for web applications.",
        keySkills: ["HTML/CSS", "JavaScript", "React/Angular/Vue", "UI/UX", "Responsive Design"],
        roadmap: [
            { phase: "Fundamentals", tasks: ["Learn HTML", "Master CSS", "JavaScript Basics"] },
            { phase: "Advanced Concepts", tasks: ["Choose a Framework", "State Management", "API Integration"] },
            { phase: "Professional Skills", tasks: ["Version Control", "Testing", "Performance Optimization"] }
        ]
    },
    // Add similar details for other domains
};

const getDomainKey = (domain: string) => {
    const mapping: Record<string, string> = {
        "Frontend Developer": "frontend-developer",
        "Backend Developer": "backend-developer",
        "UI/UX Designer": "ui-ux-designer",
        "Full Stack Developer": "fullstack-developer",
        "Data Scientist": "data-scientist",
        "AI/ML Engineer": "ai-ml-engineer",
        "DevOps Engineer": "devops-engineer",
        "Cloud Engineer": "cloud-engineer",
        "Cybersecurity Engineer": "cybersecurity-engineer"
    };
    return mapping[domain] || domain.toLowerCase().replace(/\s+/g, '-');
};

const InterestQuestionnaire = () => {
    const router = useRouter();
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [answers, setAnswers] = useState<Record<number, string>>({});
    const [showResults, setShowResults] = useState(false);
    const [recommendedDomains, setRecommendedDomains] = useState<string[]>([]);
    const [selectedRoadmap, setSelectedRoadmap] = useState<string | null>(null);

    const handleAnswer = (answer: string) => {
        setAnswers({ ...answers, [currentQuestion]: answer });
        
        if (currentQuestion < questions.length - 1) {
            setCurrentQuestion(currentQuestion + 1);
        } else {
            calculateRecommendations();
        }
    };

    const calculateRecommendations = () => {
        const domainScores: Record<string, number> = {};
        
        Object.entries(answers).forEach(([questionId, answer]) => {
            const question = questions[Number(questionId)];
            const isYes = answer === "Yes";
            
            Object.entries(question.domains).forEach(([domain, score]) => {
                domainScores[domain] = (domainScores[domain] || 0) + (isYes ? score : 0);
            });
        });

        const sortedDomains = Object.entries(domainScores)
            .sort(([, a], [, b]) => b - a)
            .slice(0, 3)
            .map(([domain]) => domain);

        setRecommendedDomains(sortedDomains);
        setShowResults(true);
    };

    // Update the results section to show domain details
    return (
        <div className="max-w-2xl mx-auto p-6 bg-white rounded-xl shadow-lg">
            {!showResults ? (
                <>
                    <h2 className="text-2xl font-bold mb-6">
                        Question {currentQuestion + 1} of {questions.length}
                    </h2>
                    <p className="text-lg mb-8">{questions[currentQuestion].text}</p>
                    <div className="space-y-4">
                        {questions[currentQuestion].options.map((option, index) => (
                            <button
                                key={index}
                                onClick={() => handleAnswer(option)}
                                className="w-full p-4 text-left rounded-lg border hover:bg-blue-50 transition-colors"
                            >
                                {option}
                            </button>
                        ))}
                    </div>
                </>
            ) : (
                <div className="text-center">
                    <h2 className="text-2xl font-bold mb-6">Your Recommended Career Paths</h2>
                    <div className="space-y-4">
                        {recommendedDomains.map((domain, index) => (
                            <div
                                key={index}
                                className="p-4 bg-blue-50 rounded-lg cursor-pointer hover:bg-blue-100 transition-colors"
                                onClick={() => setSelectedRoadmap(getDomainKey(domain))}
                            >
                                <h3 className="text-xl font-semibold text-blue-600">{domain}</h3>
                            </div>
                        ))}
                    </div>

                    {selectedRoadmap && domainRoadmaps[selectedRoadmap] && (
                        <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center p-4 z-50">
                            <div className="bg-white rounded-2xl max-w-5xl w-full h-[85vh] m-4 shadow-2xl flex flex-col">
                                <div className="sticky top-0 bg-white px-8 py-6 border-b border-gray-200 flex justify-between items-center">
                                    <div className="flex flex-col">
                                        <h2 className="text-3xl font-bold text-gray-800">100 Days Learning Roadmap</h2>
                                        <p className="text-gray-600 mt-2">Comprehensive guide for {selectedRoadmap.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}</p>
                                    </div>
                                    <button 
                                        onClick={() => setSelectedRoadmap(null)}
                                        className="text-gray-500 hover:text-gray-700 p-2 rounded-full hover:bg-gray-100 transition-all"
                                    >
                                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                        </svg>
                                    </button>
                                </div>

                                <div className="overflow-y-auto px-8 py-6 flex-grow scrollbar-hide">
                                    <div className="space-y-8">
                                        {domainRoadmaps[selectedRoadmap].phases.map((phase, phaseIndex) => (
                                            <div key={phaseIndex} className="bg-gray-50 rounded-xl p-6 shadow-sm">
                                                <div className="border-l-4 border-blue-500 pl-4">
                                                    <h3 className="text-2xl font-bold text-gray-800">{phase.title}</h3>
                                                    <div className="mt-2 text-gray-600">
                                                        <span className="font-medium">{phase.days}</span>
                                                        <p className="mt-1">Goal: {phase.goal}</p>
                                                    </div>
                                                </div>

                                                <div className="mt-6 grid gap-6">
                                                    {phase.sections.map((section, sectionIndex) => (
                                                        <div key={sectionIndex} className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
                                                            <div className="flex items-center justify-between mb-4">
                                                                <h4 className="text-xl font-semibold text-gray-800">{section.title}</h4>
                                                                <span className="text-sm font-medium text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                                                                    {section.days}
                                                                </span>
                                                            </div>
                                                            
                                                            <div className="space-y-6">
                                                                <div className="bg-gray-50 rounded-lg p-4">
                                                                    <h5 className="font-medium text-gray-700 flex items-center mb-3">
                                                                        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
                                                                                d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                                                                        </svg>
                                                                        Topics
                                                                    </h5>
                                                                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                                                                        {section.topics.map((topic, topicIndex) => (
                                                                            <li key={topicIndex} className="flex items-start">
                                                                                <svg className="w-4 h-4 mt-1 mr-2 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                                                                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                                                                </svg>
                                                                                <span className="text-gray-600">{topic}</span>
                                                                            </li>
                                                                        ))}
                                                                    </ul>
                                                                </div>
                                                                
                                                                <div className="bg-blue-50 rounded-lg p-4">
                                                                    <h5 className="font-medium text-gray-700 flex items-center mb-3">
                                                                        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
                                                                                d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                                                                        </svg>
                                                                        Resources
                                                                    </h5>
                                                                    <ul className="space-y-2">
                                                                        {section.resources.map((resource, resourceIndex) => (
                                                                            <li key={resourceIndex} className="flex items-start">
                                                                                <svg className="w-4 h-4 mt-1 mr-2 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
                                                                                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                                                                </svg>
                                                                                <a className="text-blue-600 hover:text-blue-800 hover:underline cursor-pointer">
                                                                                    {resource}
                                                                                </a>
                                                                            </li>
                                                                        ))}
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};

export default InterestQuestionnaire;