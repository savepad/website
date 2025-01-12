"use client";

import React, { useEffect, useState } from 'react';
import Nav from '../../../components/Nav';
import CenterHero from '../../../components/CenterHero';
import WallOfText from '../../../components/WallOfText';
import Footer from '@/components/Footer';
import Banner from '@/components/Banner';

const imprintContent = `
Website Owner (Pending Registration): Savepad OÜ

Contact Information: Email: hi@savepad.app

Legal information on the website: All texts, images and other information published here are subject to the copyright of the provider, unless copyrights of third parties exist. In any case, duplication, distribution or public reproduction is only permitted with the revocable and non-transferable consent of the provider. The content of the website has been compiled with the utmost care. Nevertheless, no guarantee can be given that it is up-to-date and complete. The provider accepts no responsibility for any web content linked to from this website, as this is not its own content. External links have been checked for illegal content; at the time of linking, no such content was recognizable. However, there is no general obligation to monitor and check external content. Trademarks and brand names are the property of their respective owners.
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

const ImprintPage: React.FC = () => {
  const [headings, setHeadings] = useState<{ id: string; title: string; level: number }[]>([]);

  useEffect(() => {
    setHeadings(extractHeadings(imprintContent));
  }, []);

  return (
    <main>
      <Nav />
      <CenterHero
        tagline=""
        heading="Imprint"
        description=""
      />
      <div>
      <section className="mx-auto px-4 pb-4 max-w-[750px]">
      <div>
      <Banner
        variant="warning"
        title=""
        message="This page is a work-in-progress and is being constantly updated as we're transitioning towards our incorporation."
      />
      </div>
      </section>
          <div>
            <WallOfText content={imprintContent} />
          </div>
        </div>
      <Footer />
    </main>
  );
};

export default ImprintPage;