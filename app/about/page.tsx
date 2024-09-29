"use client";

import React, { useEffect, useState } from 'react';
import Nav from '../../components/Nav';
import CenterHero from '@/components/CenterHero';
import WallOfText from '../../components/WallOfText';
import Footer from '@/components/Footer';
import Banner from '@/components/Banner';


const AboutContent = `
## About Savepad

Savepad is a platform to collect, categorize, curate, and reference resources and inspiration. The concept was born based on what marketers refer to as a “swipe file“.

Savepad take takes that concept and extends it to the common needs of marketers, designers, and developers in tech working collaboratively in growth teams.

Most team swipe files today are hacked together using a combination of tools like Notion, Figma, Miro, Google Drive, Slack, and Evernote, to name a few.

Savepad combines some functionality of those, to provide a native platform (desktop, mobile, and in-browser), and also works on all formats — URLs, Tweets, files, code, videos, images, and emails, etc., to ensure that teams stay on the same page when working together.

Savepad is built on the principles of [opinionated software](https://linear.app/method/introduction#opinionated-software). While many features can be bent to suit different purposes, here are the [use-cases](/use-cases) and [personas](/personas) we’d be focusing on to build Savepad.

## Roadmap and Feature Requests

We’re working towards making our roadmap public soon, and will be making changes to a Public GitHub board with all upcoming features.

In the meanwhile if you’re curious about the progress on Savepad, join the waitlist, follow us on [Twitter](https://twitter.com/savepadapp), or join the [community on Struct](https://savepad.struct.ai/join/ybKwJ0cEzJKPE5V0sMaX06alWMWUVjuT)!

If you’ve got an idea for Savepad or a feature request, [let us know](https://forms.gle/XJh4eHjKASEfPQNy6)!

## Data, Privacy, and Security

Savepad is committed to providing the best user experience with as little tracking and advertising as possible. We’re not selling any data to third parties, nor are we adding any weird trackers that’ll creep on you throughout the internet.

As we build out the website and product, we’ll constantly update this to make sure we’re being transparent using simple terminology every time we make changes to our Privacy and Terms pages.

You can access these pages on our [Privacy Policy](/legal/privacy-policy) and [Terms of Service](/legal/terms) pages.
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

const AboutPage: React.FC = () => {
  const [headings, setHeadings] = useState<{ id: string; title: string; level: number }[]>([]);

  useEffect(() => {
    setHeadings(extractHeadings(AboutContent));
  }, []);

  return (
    <main>
      <Nav />
      <CenterHero
        tagline="💾 About Savepad"
        heading="Because the things you like are worth saving"
        description="Savepad is the platform that lets you save and collaborate on all the amazing things you find out there that make you go “hmmm”."
      />
      <div>
          <div>
            <WallOfText content={AboutContent} />
          </div>
        </div>
        
        <Footer />
    </main>
  );
};

export default AboutPage;