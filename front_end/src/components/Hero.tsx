import Link from 'next/link';

export default function Hero() {
  return (
    <div className="w-full min-h-screen p-8">
      <h1 className="main-title mt-8">
        SmartRoad to Success
      </h1>
      <p className="subtitle">
        Discover Your Career Path
      </p>
      <button 
        className="mt-4 bg-blue-500 text-white px-6 py-2.5 rounded-md
                  hover:bg-blue-600 transition-colors duration-300
                  shadow-md hover:shadow-lg transform hover:scale-105
                  font-medium text-sm flex items-center gap-2"
      >
        Start Your Journey
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          width="16" 
          height="16" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        >
          <path d="M5 12h14"></path>
          <path d="m12 5 7 7-7 7"></path>
        </svg>
      </button>
      <p className="mt-4">
        Create Roadmaps/Plan your journey
      </p>
    </div>
  );
}