'use client';
import React, { useState } from 'react';
import { useParams } from 'next/navigation';
import { domains } from '@/data/domains';
import { domainRoadmaps } from '@/data/roadmaps';

interface RoadmapPhase {
  title: string;
  days: string;
  goal: string;
  sections: {
    title: string;
    days: string;
    topics: string[];
    resources: string[];
  }[];
}

export default function DomainPage() {
  const params = useParams();
  const domain = domains.find(d => d.path === params.domain);
  const [showRoadmap, setShowRoadmap] = useState(false);

  const roadmap = domainRoadmaps[params.domain as string];

  if (!domain) {
    return <div>Domain not found</div>;
  }

  return (
    <div className="min-h-screen bg-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 
          className="text-3xl font-bold text-gray-900 sm:text-4xl cursor-pointer hover:text-blue-600"
          onClick={() => setShowRoadmap(true)}
        >
          {domain.name}
        </h1>
        <p className="mt-4 text-xl text-gray-600">
          {domain.description}
        </p>

        {showRoadmap && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold">100 Days Learning Roadmap</h2>
                <button 
                  onClick={() => setShowRoadmap(false)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  ✕
                </button>
              </div>

              {roadmap.map((phase, phaseIndex) => (
                <div key={phaseIndex} className="mb-8">
                  <h3 className="text-xl font-bold mb-4">{phase.title}</h3>
                  <p className="text-gray-600 mb-2">{phase.days}</p>
                  <p className="text-gray-700 mb-4">Goal: {phase.goal}</p>

                  {phase.sections.map((section, sectionIndex) => (
                    <div key={sectionIndex} className="bg-gray-50 rounded-lg p-4 mb-4">
                      <h4 className="font-semibold mb-2">
                        {section.title} ({section.days})
                      </h4>
                      <div className="mb-4">
                        <h5 className="font-medium mb-2">Topics:</h5>
                        <ul className="list-disc list-inside text-gray-600">
                          {section.topics.map((topic, topicIndex) => (
                            <li key={topicIndex}>{topic}</li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h5 className="font-medium mb-2">Resources:</h5>
                        <ul className="list-disc list-inside text-blue-600">
                          {section.resources.map((resource, resourceIndex) => (
                            <li key={resourceIndex} className="hover:underline cursor-pointer">
                              {resource}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}