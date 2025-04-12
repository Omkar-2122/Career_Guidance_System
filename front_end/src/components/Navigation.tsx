'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import DomainPopup from './DomainPopup';
import { HomeIcon, UserGroupIcon, Squares2X2Icon } from '@heroicons/react/24/outline';

const Navigation = () => {
    const [selectedDomain, setSelectedDomain] = useState<string | null>(null);
    const [showPopup, setShowPopup] = useState(false);
    // Removed showLogin state

    const domains = {
        'Backend Developer': {
            description: 'Backend Developers build and maintain the server-side of web applications.',
            keySkills: ['Node.js/Python/Java', 'Databases', 'API Design', 'Server Architecture', 'Security'],
            learningRoadmap: [
                'Master a backend language (Node.js, Python, or Java)',
                'Learn database management and SQL',
                'Study API design and REST principles',
                'Understand authentication and security',
                'Practice system design and scalability'
            ],
            learningResources: [
                { name: 'Node.js Documentation', url: 'https://nodejs.org/docs' },
                { name: 'MongoDB University', url: 'https://university.mongodb.com' },
                { name: 'AWS Training', url: 'https://aws.training' }
            ]
        },
        'Frontend Developer': {
            description: 'Frontend Developers create interactive user interfaces and experiences for web applications.',
            keySkills: ['HTML/CSS', 'JavaScript', 'React/Angular/Vue', 'UI/UX', 'Responsive Design'],
            learningRoadmap: [
                'Master HTML, CSS, and JavaScript',
                'Learn modern frontend frameworks',
                'Study UI/UX principles',
                'Understand state management',
                'Practice responsive design'
            ],
            learningResources: [
                { name: 'MDN Web Docs', url: 'https://developer.mozilla.org' },
                { name: 'React Documentation', url: 'https://reactjs.org' },
                { name: 'Frontend Masters', url: 'https://frontendmasters.com' }
            ]
        },
        'Full Stack Developer': {
            description: 'Full Stack Developers work on both client and server-side of applications.',
            keySkills: ['Frontend Tech', 'Backend Tech', 'Databases', 'DevOps', 'System Design'],
            learningRoadmap: [
                'Learn both frontend and backend technologies',
                'Master database management',
                'Understand DevOps practices',
                'Study system architecture',
                'Practice full application deployment'
            ],
            learningResources: [
                { name: 'The Odin Project', url: 'https://www.theodinproject.com' },
                { name: 'freeCodeCamp', url: 'https://www.freecodecamp.org' },
                { name: 'Full Stack Open', url: 'https://fullstackopen.com' }
            ]
        },
        'DevOps Engineer': {
            description: 'DevOps Engineers bridge development and operations, automating and maintaining deployment pipelines.',
            keySkills: ['CI/CD', 'Cloud Platforms', 'Containerization', 'Infrastructure as Code', 'Monitoring'],
            learningRoadmap: [
                'Learn Linux and Shell Scripting',
                'Master containerization (Docker, Kubernetes)',
                'Study cloud platforms (AWS/Azure/GCP)',
                'Understand CI/CD pipelines',
                'Practice infrastructure automation'
            ],
            learningResources: [
                { name: 'Docker Documentation', url: 'https://docs.docker.com' },
                { name: 'Kubernetes Learning', url: 'https://kubernetes.io/docs/tutorials' },
                { name: 'AWS DevOps', url: 'https://aws.amazon.com/devops' }
            ]
        },
        'Cloud Engineer': {
            description: 'Cloud Engineers design and maintain cloud infrastructure and services.',
            keySkills: ['AWS/Azure/GCP', 'Cloud Architecture', 'Security', 'Networking', 'Cost Optimization'],
            learningRoadmap: [
                'Master a major cloud platform',
                'Learn cloud architecture patterns',
                'Study cloud security practices',
                'Understand networking concepts',
                'Practice cloud cost optimization'
            ],
            learningResources: [
                { name: 'AWS Training', url: 'https://aws.training' },
                { name: 'Azure Learn', url: 'https://learn.microsoft.com/azure' },
                { name: 'Google Cloud Training', url: 'https://cloud.google.com/training' }
            ]
        },
        'Data Scientist': {
            description: 'Data Scientists analyze complex data to help organizations make better decisions.',
            keySkills: ['Python/R', 'Machine Learning', 'Statistics', 'Data Visualization', 'Big Data'],
            learningRoadmap: [
                'Master Python/R for data analysis',
                'Learn statistics and mathematics',
                'Study machine learning algorithms',
                'Practice data visualization',
                'Understand big data technologies'
            ],
            learningResources: [
                { name: 'Kaggle Learn', url: 'https://www.kaggle.com/learn' },
                { name: 'DataCamp', url: 'https://www.datacamp.com' },
                { name: 'Fast.ai', url: 'https://www.fast.ai' }
            ]
        },
        'AI/ML Engineer': {
            description: 'AI/ML Engineers develop and deploy artificial intelligence and machine learning solutions.',
            keySkills: ['Python', 'Deep Learning', 'Neural Networks', 'TensorFlow/PyTorch', 'Computer Vision'],
            learningRoadmap: [
                'Master Python and ML libraries',
                'Learn deep learning fundamentals',
                'Study neural network architectures',
                'Practice model deployment',
                'Understand MLOps'
            ],
            learningResources: [
                { name: 'TensorFlow Documentation', url: 'https://www.tensorflow.org' },
                { name: 'PyTorch Tutorials', url: 'https://pytorch.org/tutorials' },
                { name: 'Coursera ML Specialization', url: 'https://www.coursera.org/specializations/machine-learning' }
            ]
        },
        'Cybersecurity Engineer': {
            description: 'Cybersecurity Engineers protect systems and networks from security threats.',
            keySkills: ['Network Security', 'Penetration Testing', 'Security Tools', 'Cryptography', 'Risk Assessment'],
            learningRoadmap: [
                'Learn network security fundamentals',
                'Master security tools and frameworks',
                'Study cryptography principles',
                'Practice penetration testing',
                'Understand security compliance'
            ],
            learningResources: [
                { name: 'TryHackMe', url: 'https://tryhackme.com' },
                { name: 'HackTheBox', url: 'https://www.hackthebox.eu' },
                { name: 'OWASP Resources', url: 'https://owasp.org/resources' }
            ]
        },
        'Mobile App Developer': {
            description: 'Mobile App Developers create applications for iOS and Android platforms.',
            keySkills: ['iOS/Android', 'Swift/Kotlin', 'React Native/Flutter', 'Mobile UI/UX', 'App Performance'],
            learningRoadmap: [
                'Choose iOS or Android development',
                'Learn platform-specific languages',
                'Study mobile UI/UX principles',
                'Practice app deployment',
                'Understand mobile security'
            ],
            learningResources: [
                { name: 'iOS Development', url: 'https://developer.apple.com/tutorials' },
                { name: 'Android Development', url: 'https://developer.android.com/courses' },
                { name: 'Flutter Documentation', url: 'https://flutter.dev/docs' }
            ]
        },
        'Game Developer': {
            description: 'Game Developers create video games for various platforms.',
            keySkills: ['Unity/Unreal Engine', 'C++/C#', '3D Graphics', 'Game Physics', 'Animation'],
            learningRoadmap: [
                'Learn a game engine (Unity/Unreal)',
                'Master game programming concepts',
                'Study 3D graphics and physics',
                'Practice game design principles',
                'Understand optimization techniques'
            ],
            learningResources: [
                { name: 'Unity Learn', url: 'https://learn.unity.com' },
                { name: 'Unreal Engine Docs', url: 'https://docs.unrealengine.com' },
                { name: 'Game Dev Resources', url: 'https://www.gamedev.net' }
            ]
        }
    };

    const handleDomainSelect = (domain: string) => {
        setSelectedDomain(domain);
        setShowPopup(true);
    };

    return (
        <nav className="bg-white shadow-lg">
            <div className="container mx-auto px-4">
                <div className="flex justify-between items-center h-16">
                    <div className="text-xl font-bold text-blue-600">
                        Career Guidance System
                    </div>
                    <div className="flex items-center space-x-7">
                        <Link href="/" className="hover:text-blue-600 flex items-center">
                            <HomeIcon className="w-5 h-5 mr-1" />
                            Home
                        </Link>
                        <div className="relative group">
                            <button className="hover:text-blue-600 flex items-center">
                                <Squares2X2Icon className="w-5 h-5 mr-1" />
                                Domains
                            </button>
                            <div className="absolute hidden group-hover:block w-48 bg-white shadow-lg z-50 right-0">
                                {Object.keys(domains).map((domain) => (
                                    <button
                                        key={domain}
                                        onClick={() => handleDomainSelect(domain)}
                                        className="block w-full text-left px-4 py-2 hover:bg-blue-50"
                                    >
                                        {domain}
                                    </button>
                                ))}
                            </div>
                        </div>
                        <Link href="/expert-connect" className="hover:text-blue-600 flex items-center">
                            <UserGroupIcon className="w-5 h-5 mr-1" />
                            Connect with Expert
                        </Link>
                    </div>
                </div>
            </div>

            {showPopup && selectedDomain && (
                <DomainPopup
                    domain={selectedDomain}
                    {...domains[selectedDomain]}
                    onClose={() => setShowPopup(false)}
                />
            )}
        </nav>
    );
};

export default Navigation;