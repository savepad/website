import React from 'react';
import Link from 'next/link';

interface RoadmapCardProps {
  title: string;
  description: string;
  pills: string[];
  url?: string;
}

const RoadmapCard: React.FC<RoadmapCardProps> = ({ title, description, pills, url }) => {
  return (
    <div className="bg-zinc-900 p-4 rounded-lg shadow-md">
      <h3 className="text-lg font-semibold text-gray-100 mb-2">{title}</h3>
      <p className="text-gray-300 text-sm mb-4">{description}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {pills.map((pill, index) => (
          <span
            key={index}
            className="text-gray-400 bg-zinc-800 px-3 py-1 text-xs rounded-full"
          >
            {pill}
          </span>
        ))}
      </div>
      {url && (
        <Link href={url} className="text-sm">
        Release Notes
      </Link>
      )}
    </div>
  );
};

export default RoadmapCard;
