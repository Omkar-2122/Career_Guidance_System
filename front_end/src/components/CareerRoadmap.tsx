'use client';
import React from 'react';
import Link from 'next/link';

interface RoadmapProps {
  name: string;
  description: string;
  keySkills: string[];
  learningSteps: string[];
  resources: Array<{ name: string; url: string }>;
}

export default function CareerRoadmap({ name, description, keySkills, learningSteps, resources }: RoadmapProps) {
  return (
    <div className="max-w-4xl mx-auto p-8 bg-white rounded-lg shadow-sm">
      <h1 className="text-3xl font-bold text-center mb-2">Your Recommended Career Path</h1>
      
      <h2 className="text-2xl text-blue-500 text-center mb-4">{name}</h2>
      <p className="text-gray-600 text-center mb-8">{description}</p>

      <div className="mb-8">
        <h3 className="text-xl font-semibold mb-4">Key Skills</h3>
        <div className="flex flex-wrap gap-2">
          {keySkills.map((skill, index) => (
            <span key={index} className="bg-blue-100 text-blue-800 px-4 py-1 rounded-full text-sm">
              {skill}
            </span>
          ))}
        </div>
      </div>

      <div className="mb-8">
        <h3 className="text-xl font-semibold mb-4">Learning Roadmap</h3>
        <ol className="list-decimal list-inside space-y-3 text-gray-700">
          {learningSteps.map((step, index) => (
            <li key={index}>{step}</li>
          ))}
        </ol>
      </div>

      <div className="mb-8">
        <h3 className="text-xl font-semibold mb-4">Learning Resources</h3>
        <div className="space-y-2">
          {resources.map((resource, index) => (
            <a
              key={index}
              href={resource.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:text-blue-700 block"
            >
              {resource.name}
            </a>
          ))}
        </div>
      </div>

      <div className="flex justify-center gap-4 mt-8">
        <button className="bg-green-500 text-white px-6 py-2 rounded-lg hover:bg-green-600 transition-colors">
          Get Detailed Roadmap
        </button>
        <Link
          href="/connect-with-experts"
          className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition-colors"
        >
          Connect with Experts
        </Link>
      </div>
    </div>
  );
}