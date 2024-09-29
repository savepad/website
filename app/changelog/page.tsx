"use client";

import React, { useEffect, useState } from 'react';
import Nav from '../../components/Nav';
import CenterHero from '@/components/CenterHero';
import WallOfText from '../../components/WallOfText';
import Footer from '@/components/Footer';
import Banner from '@/components/Banner';

// Add the most recent release on top
// Also, follow this format for consistency with a line between each

// #### Date, year
// ![Release Image](png)
// ## Title of the release!
// TLDR of the release.

// ### 💎 What's New
// - Thing — Description
// - Thing — Description

// ### 🛠️ Improvements and Fixes
// - Thing — Description
// - Thing — Description
// ___

const ChangelogContent = `

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

const ChangelogPage: React.FC = () => {
  const [headings, setHeadings] = useState<{ id: string; title: string; level: number }[]>([]);

  useEffect(() => {
    setHeadings(extractHeadings(ChangelogContent));
  }, []);

  return (
    <main>
      <Nav />
      <CenterHero
        tagline="🐙 Changelog"
        heading="Product Updates"
        description=""
      />
      <section className="mx-auto px-4 pb-4 max-w-[750px]">
      <div>
      <Banner
        variant="info"
        title=""
        message="Stay tuned for our first product update as we open up the waitlist."
      />
      </div>
      </section>
      <div>
          <div>
            <WallOfText content={ChangelogContent} />
          </div>
        </div>
        <Footer />
    </main>
  );
};

export default ChangelogPage;