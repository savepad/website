"use client"

import React from 'react';

interface Feature {
  id: string;
  title: string;
}

interface Category {
  category: string;
  features: Feature[];
}

interface TOCProps {
  features: Category[];
}

const FeatureTOC: React.FC<TOCProps> = ({ features }) => {
  const handleScroll = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>, featureId: string) => {
    event.preventDefault();
    
    const targetElement = document.getElementById(featureId);
    if (targetElement) {
      const yOffset = -85;
      const yPosition = targetElement.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: yPosition, behavior: 'smooth' });
    }
  };

  return (
    <aside className="top-32 md:w-1/4 hidden md:block px-4 sticky h-full">
      <nav>
        <h2 className="text-xl font-semibold mb-4 text-gray-600">On this page</h2>
        {features.map((category, index) => (
          <div key={index} className="mb-4">
            <h3 className="text-lg font-semibold mb-4 mt-8">{category.category}</h3>
            <ul className="space-y-2 text-gray-300">
              {category.features.map((feature) => (
                <li key={feature.id}>
                  <a
                    href={`#${feature.id}`}
                    className="hover:text-violet-400 text-gray-400"
                    onClick={(e) => handleScroll(e, feature.id)}
                  >
                    — {feature.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </nav>
    </aside>
  );
};

export default FeatureTOC;
