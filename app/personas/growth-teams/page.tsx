"use client";

import React, { useEffect, useState } from 'react';
import Nav from '../../../components/Nav';
import Hero from '../../../components/Hero';
import Footer from '@/components/Footer';
import WallOfText from '@/components/WallOfText';
import Breakpoint from '@/components/Breakpoint';
import CardGrid from '@/components/CardGrid';

const yesnoCards = [
  {
    title: 'Where we struggle',
    description: "Marketers, designers, and devs asynchronously store and share ideas, references, inspiration, and opinions between Slack, Miro, Notion, Sheets, emails, and tons of other tools.",
  },
  {
    title: 'What it should be',
    description: "Curate, catalog, and reference all ideas in a well structured repository for everyone on the team to know what to look for and where, every time you work on projects together.",
  },
];

const growthContent = `
### Maintain a central knowledge base

Landing pages, ad copies, videos, case studies, eBooks, pricing pages, TOFU demo flows, feature pages, discount pop-ups, newsletter designs, memes, email flows, 🤯.

There’s a ton of examples and references that growth teams collect somewhere, and Savepad is only platform dedicated to helping you build the swipe file your team deserves without hacking it with generic tools.

### Save and reference ideas intuitively

With powerful search capabilities, custom collections and tags, and an intuitive and visual interface, Savepad lets you find everything you’ve saved when you need it in a pinch.

Savepad comes with powerful metadata indexing and file enrichment, giving you full-text search on all your saves to find things instantly. Even for videos and images.

### Experience a perfect handoff

Savepad makes sure that everyone in your team has complete access to your resources and references.

New kickoff call for that next homepage with design and engineering in 30 minutes? Fire up Savepad, whip open all the amazing components and URLs you’ve drawn inspiration from, and get everyone on the same page.

### Never feel stumped again

Feeling a lack of inspiration for a new landing page and need ideas? CRM wants your ideas for an in-app banner? Design wants you to resend them that ad banner from 8 months ago that probably said “[enough of this sheet](https://coda.io/@coda/enough-of-this-sheet)“? SEO chasing you to come up with headline alternatives?

Easy.
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


const GrowthPage: React.FC = () => {
  const [headings, setHeadings] = useState<{ id: string; title: string; level: number }[]>([]);

  useEffect(() => {
    setHeadings(extractHeadings(growthContent));
  }, []);
  return (
    <main>
      <Nav />
      <Hero
        tagline="For Growth Teams"
        heading="Take your team from good to great"
        description="Most cross-functional teams of marketers, designers, and developers struggle to stay on the same page when collaborating on projects together. Don’t be one of them."
        imageUrl="https://res.cloudinary.com/savepad-web/image/upload/v1715850633/Landing%20Pages/Personas/Growth_Teams_cyw32z.png"
        imageAlt="Personas"
        buttonLabel="Get started for free"
        buttonHref="/signup"
        buttonVariant="primary"
      />

<CardGrid cards={yesnoCards} columns={2} />


<Breakpoint
        header="Why Savepad works great for growth teams"
        texts={[
          "Here’s the top reasons we feel Savepad is particularly useful for growth teams and why we’re focusing on them the most."
        ]}
      />

<div>
          <div>
            <WallOfText content={growthContent} />
          </div>
        </div>
      
    <Footer />
    </main>
  );
};

export default GrowthPage;
