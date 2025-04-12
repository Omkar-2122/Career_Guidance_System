'use client';

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

interface Expert {
  id: number;
  name: string;
  role: string;
  company: string;
  linkedin: string;
  github?: string;
  email?: string;
  expertise: string[];
  image: string;
}

const ExpertConnectPage = () => {
  const router = useRouter();
  const [experts, setExperts] = useState<Expert[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const mockExperts = [
      {
        id: 1,
        name: "Dr. Sarah Chen",
        role: "Senior AI Researcher",
        company: "Tech Solutions Inc.",
        linkedin: "linkedin.com/in/sarahchen",
        github: "github.com/sarahchen",
        email: "sarah.chen@techsolutions.com",
        expertise: ["Machine Learning", "AI", "Data Science"],
        image: "/experts/sarah.jpg"
      },
      {
        id: 2,
        name: "John Smith",
        role: "Lead Cloud Architect",
        company: "Innovation Labs",
        linkedin: "linkedin.com/in/johnsmith",
        github: "github.com/johnsmith",
        email: "john.smith@innovationlabs.com",
        youtube: "youtube.com/@johnsmith",
        expertise: ["Cloud Architecture", "DevOps", "System Design"],
        image: "/experts/john.jpg"
      },
      {
        id: 3,
        name: "Maria Garcia",
        role: "Engineering Manager",
        company: "Global Tech",
        linkedin: "linkedin.com/in/mariagarcia",
        twitter: "twitter.com/mariagarcia",
        medium: "medium.com/@mariagarcia",
        expertise: ["Team Leadership", "Agile", "Software Architecture"],
        image: "/experts/maria.jpg"
      },
      {
        id: 4,
        name: "Alex Kumar",
        role: "Security Specialist",
        company: "CyberShield",
        linkedin: "linkedin.com/in/alexkumar",
        github: "github.com/alexkumar",
        website: "alexkumar.security",
        expertise: ["Cybersecurity", "Ethical Hacking", "Security Architecture"],
        image: "/experts/alex.jpg"
      },
      {
        id: 5,
        name: "Emily Zhang",
        role: "Frontend Lead",
        company: "DesignTech",
        linkedin: "linkedin.com/in/emilyzhang",
        github: "github.com/emilyzhang",
        website: "emilyzhang.dev",
        medium: "medium.com/@emilyzhang",
        expertise: ["UI/UX", "React", "Frontend Architecture"],
        image: "/experts/emily.jpg"
      },
      {
        id: 6,
        name: "David Wilson",
        role: "Mobile Dev Expert",
        company: "AppCraft",
        linkedin: "linkedin.com/in/davidwilson",
        github: "github.com/davidwilson",
        youtube: "youtube.com/@davidwilson",
        expertise: ["iOS", "Android", "React Native"],
        image: "/experts/david.jpg"
      },
      {
        id: 7,
        name: "Sophia Patel",
        role: "Data Engineering Lead",
        company: "DataFlow",
        linkedin: "linkedin.com/in/sophiapatel",
        github: "github.com/sophiapatel",
        medium: "medium.com/@sophiapatel",
        expertise: ["Big Data", "Data Engineering", "Apache Spark"],
        image: "/experts/sophia.jpg"
      },
      {
        id: 8,
        name: "Marcus Johnson",
        role: "Game Development Director",
        company: "GameCraft Studios",
        linkedin: "linkedin.com/in/marcusjohnson",
        github: "github.com/marcusjohnson",
        youtube: "youtube.com/@marcusjohnson",
        expertise: ["Unity3D", "Game Design", "C#"],
        image: "/experts/marcus.jpg"
      },
      {
        id: 9,
        name: "Lisa Chen",
        role: "Blockchain Architect",
        company: "ChainTech",
        linkedin: "linkedin.com/in/lisachen",
        github: "github.com/lisachen",
        medium: "medium.com/@lisachen",
        expertise: ["Blockchain", "Smart Contracts", "DeFi"],
        image: "/experts/lisa.jpg"
      }
    ];
    
    setExperts(mockExperts);
    setLoading(false);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
          Connect with Industry Experts
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {experts.map(expert => (
            <div key={expert.id} 
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
            >
              <div className="flex items-center gap-5 mb-6">
                <div className="relative w-20 h-20 rounded-2xl overflow-hidden shadow-md">
                  <Image
                    src={expert.image}
                    alt={expert.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800">{expert.name}</h3>
                  <p className="text-blue-600 font-medium">{expert.role}</p>
                  <p className="text-gray-500 text-sm">{expert.company}</p>
                </div>
              </div>
              
              <div className="mb-6">
                <div className="flex flex-wrap gap-2">
                  {expert.expertise.map((skill, index) => (
                    <span
                      key={index}
                      className="bg-blue-50 text-blue-700 text-sm px-4 py-1.5 rounded-xl font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="flex justify-center gap-4">
                <a
                  href={`https://${expert.linkedin}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 bg-[#0077B5] text-white px-4 py-2.5 rounded-xl font-medium hover:bg-[#006396] transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <FaLinkedin className="w-5 h-5" />
                  LinkedIn
                </a>
                {expert.github && (
                  <a
                    href={`https://${expert.github}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-gray-800 text-white px-4 py-2.5 rounded-xl font-medium hover:bg-gray-900 transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    <FaGithub className="w-5 h-5" />
                    GitHub
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExpertConnectPage;