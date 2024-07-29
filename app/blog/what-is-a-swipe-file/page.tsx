"use client";

import React, { useEffect, useState } from 'react';
import Nav from '../../../components/Nav';
import CenterHero from '../../../components/CenterHero';
import WallOfText from '../../../components/WallOfText';
import Footer from '@/components/Footer';

const blogContent = `
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

const PrivacyPage: React.FC = () => {
  const [headings, setHeadings] = useState<{ id: string; title: string; level: number }[]>([]);

  useEffect(() => {
    setHeadings(extractHeadings(blogContent));
  }, []);

  return (
    <main>
      <Nav />
      <CenterHero
        tagline=""
        heading="What is a Swipe File"
        description="A swipe file is a collection of examples and references that you find online."
      />
      <div>
          <div>
            <WallOfText content={blogContent} />
          </div>
        </div>
        <Footer />
    </main>
  );
};

export default PrivacyPage;