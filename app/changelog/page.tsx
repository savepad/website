"use client";

import React, { useEffect, useState } from 'react';
import Nav from '../../components/Nav';
import Hero from '@/components/Hero';
import WallOfText from '../../components/WallOfText';
import Footer from '@/components/Footer';

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
#### Date, year
![Release Image](https://savepad.app/wp-content/uploads/Saves.png)
## Title of the release!
TLDR of the release.

### 💎 What's New
- Thing — Description
- Thing — Description

### 🛠️ Improvements and Fixes
- Thing — Description
- Thing — Description
___
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
      <Hero
        tagline="🐙 Product Updates"
        heading="Changelog."
        description="Snapshot of all the (major) updates on the product"
        imageUrl="https://res.cloudinary.com/savepad-web/image/upload/v1715850633/Landing%20Pages/Personas/Growth_Teams_cyw32z.png"
        imageAlt="Personas"
        // buttonLabel="Create your free account"
        // buttonHref="/signup"
        // buttonVariant="primary"
      />
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