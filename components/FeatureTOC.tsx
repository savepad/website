import React from 'react';
import Link from 'next/link';

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

const FeatureTOC: React.FC<TOCProps> = ({ features }) => (
  <aside className="top-32 md:w-1/4 hidden md:block px-4 sticky h-full">
    <nav>
      <h2 className="text-xl font-semibold mb-4 text-gray-600">On this page</h2>
      {features.map((category, index) => (
        <div key={index} className="mb-4">
          <h3 className="text-lg font-semibold mb-4 mt-8">{category.category}</h3>
          <ul className="space-y-2 text-gray-300">
            {category.features.map((feature) => (
              <li key={feature.id}>
                <Link href={`#${feature.id}`} className="hover:text-violet-400 text-gray-400">
                — {feature.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </nav>
  </aside>
);

export default FeatureTOC;
