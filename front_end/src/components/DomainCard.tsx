import React from 'react';
import { useNavigate } from 'react-router-dom';

const DomainCard: React.FC<{ domain: string }> = ({ domain }) => {
  const navigate = useNavigate();

  const handleConnectClick = () => {
    navigate(`/domain/${encodeURIComponent(domain)}/experts`);
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
      <h3 className="text-xl font-semibold text-gray-800 mb-4">{domain}</h3>
      <button
        onClick={handleConnectClick}
        className="w-full mt-4 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
      >
        <span>Connect & Learn</span>
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>
  );
};

export default DomainCard;