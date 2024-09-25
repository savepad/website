"use client";

import React, { useEffect, useState } from 'react';
import Nav from '../../components/Nav';
import CenterHero from '../../components/CenterHero';
import WallOfText from '../../components/WallOfText';
import Footer from '@/components/Footer';

const NoAIContent = `
Here be markdown
`;

const extractHeadings = (content: string) => {
  const regex = /^(#{2,3})\s+(.*)$/gm;
  const headings = [];
  let match;
  while ((match = regex.exec(content)) !== null) {
    const [, hashes, title] = match;
    const level = hashes.length;
    const id = title.toLowerCase().replace(/\s+/g, '-');
    headings.push({ id, title, level });
  }
  return headings;
};

const NoAIPage: React.FC = () => {
  const [headings, setHeadings] = useState<{ id: string; title: string; level: number }[]>([]);

  useEffect(() => {
    setHeadings(extractHeadings(NoAIContent));
  }, []);

  return (
    <main>
      <Nav />
      <CenterHero
        tagline="Never say never"
        heading="No AI (yet)"
        description="We're currently focused on building the best possible user-experience for Savepad without just slapping some GPT wrapper on a feature and calling it a day."
      />
      <div>
          <div>
            <WallOfText content={NoAIContent} />
          </div>
        </div>
        <Footer />
    </main>
  );
};

export default NoAIPage;