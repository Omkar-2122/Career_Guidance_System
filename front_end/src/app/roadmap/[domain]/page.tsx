'use client';

import { useParams } from 'next/navigation';
import DomainRoadmap from '@/components/DomainRoadmap';
import Link from 'next/link';

const domainMappings: Record<string, string> = {
  'frontend-developer': 'Web Development',
  'backend-developer': 'Web Development',
  'fullstack-developer': 'Web Development',
  'data-scientist': 'Machine Learning (ML)',
  'ai-ml-engineer': 'Artificial Intelligence (AI)',
  'devops-engineer': 'DevOps',
  'cloud-engineer': 'Cloud Computing',
  'cybersecurity-engineer': 'Cybersecurity',
  'ui-ux-designer': 'Web Development',
  'blockchain-developer': 'Blockchain'
};

export default function RoadmapPage() {
  const params = useParams();
  const domainKey = params.domain as string;
  
  // Convert URL-friendly domain key to display name
  const getDomainDisplayName = () => {
    if (domainMappings[domainKey]) {
      return domainMappings[domainKey];
    }
    // Fallback: convert kebab-case to display format
    return domainKey
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <DomainRoadmap domain={getDomainDisplayName()} />
      <div className="mt-8 text-center">
        <Link 
          href="/" 
          className="text-blue-600 hover:text-blue-800 underline"
        >
          Back to Questionnaire
        </Link>
      </div>
    </div>
  );
}