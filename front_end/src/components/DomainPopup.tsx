'use client';  // Add this line at the top

import React from 'react';

interface DomainPopupProps {
    domain: string;
    description: string;
    keySkills: string[];
    learningRoadmap: string[];
    learningResources: { name: string; url: string; }[];
    onClose: () => void;
}

const DomainPopup: React.FC<DomainPopupProps> = ({
    domain,
    description,
    keySkills,
    learningRoadmap,
    learningResources,
    onClose
}) => {
    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-3xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto my-4 shadow-2xl scroll-smooth">
                <div className="text-center mb-6">
                    <h2 className="text-2xl font-bold text-blue-600">{domain}</h2>
                    <p className="text-gray-600 mt-2">{description}</p>
                </div>

                <div className="mb-6">
                    <h3 className="font-semibold mb-2">Key Skills</h3>
                    <div className="flex flex-wrap gap-2">
                        {keySkills.map((skill, index) => (
                            <span key={index} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                                {skill}
                            </span>
                        ))}
                    </div>
                </div>

                <div className="mb-6">
                    <h3 className="font-semibold mb-2">Learning Roadmap</h3>
                    <ol className="list-decimal list-inside space-y-2">
                        {learningRoadmap.map((step, index) => (
                            <li key={index} className="text-gray-700">{step}</li>
                        ))}
                    </ol>
                </div>

                <div className="mb-6">
                    <h3 className="font-semibold mb-2">Learning Resources</h3>
                    <div className="space-y-2">
                        {learningResources.map((resource, index) => (
                            <a
                                key={index}
                                href={resource.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-600 hover:underline block"
                            >
                                {resource.name}
                            </a>
                        ))}
                    </div>
                </div>

                <div className="flex justify-center gap-4 mt-8">
                    <button
                        onClick={onClose}
                        className="bg-gray-200 hover:bg-gray-300 px-6 py-2 rounded-full transition-colors"
                    >
                        Close
                    </button>
                    
                </div>
            </div>
        </div>
    );
};

export default DomainPopup;
