import React from 'react';

interface CareerPathProps {
  path: string;
}

const CareerPathPage: React.FC<CareerPathProps> = ({ path }) => {
  const careerPaths: { [key: string]: JSX.Element } = {
    "Backend Developer": (
      <div className="max-w-2xl mx-auto bg-white p-8 rounded-xl shadow-md">
        <h2 className="text-3xl font-bold text-center text-blue-600 mb-4">Your Recommended Career Path</h2>
        <h3 className="text-2xl font-bold text-center text-blue-800 mb-2">{path}</h3>
        <p className="text-center text-gray-600 mb-6">Backend Developers build and maintain the server-side of web applications.</p>

        <div className="mb-6">
          <h4 className="text-lg font-semibold text-blue-800 mb-2">Key Skills</h4>
          <div className="flex flex-wrap gap-2 justify-center">
            <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">Node.js/Python/Java</span>
            <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">Databases</span>
            <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">API Design</span>
            <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">Server Architecture</span>
            <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">Security</span>
          </div>
        </div>

        <div className="mb-6">
          <h4 className="text-lg font-semibold text-blue-800 mb-2">Learning Roadmap</h4>
          <ol className="list-decimal list-inside text-gray-700 space-y-1">
            <li>Master a backend language (Node.js, Python, or Java)</li>
            <li>Learn database management and SQL</li>
            <li>Study API design and REST principles</li>
            <li>Understand authentication and security</li>
            <li>Practice system design and scalability</li>
          </ol>
        </div>

        <div className="mb-6">
          <h4 className="text-lg font-semibold text-blue-800 mb-2">Learning Resources</h4>
          <ul className="list-disc list-inside text-blue-600 space-y-1">
            <li><a href="https://nodejs.org/en/docs/" target="_blank" rel="noopener noreferrer">Node.js Documentation</a></li>
            <li><a href="https://university.mongodb.com/" target="_blank" rel="noopener noreferrer">MongoDB University</a></li>
            <li><a href="https://aws.amazon.com/training/" target="_blank" rel="noopener noreferrer">AWS Training</a></li>
          </ul>
        </div>

        <div className="flex justify-center gap-4 mt-6">
          <button className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition-colors">
            Get Detailed Roadmap
          </button>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors">
            Connect with Backend Developers
          </button>
        </div>
      </div>
    ),
    // Add more career paths here
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      {careerPaths[path] || <div className="text-center text-red-600">Career path not found</div>}
    </div>
  );
};

export default CareerPathPage;