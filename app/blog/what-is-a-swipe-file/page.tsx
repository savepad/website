"use client";

import React, { useEffect, useState } from 'react';
import Nav from '../../../components/Nav';
import CenterHero from '../../../components/CenterHero';
import WallOfText from '../../../components/WallOfText';
import Footer from '@/components/Footer';

const blogContent = `

TL;DR? A swipe file is a collection of examples and references that you find inspiring and think are worth saving.

The best marketers maintain a repository of inspiration that they’ve collected over the years. Marketers working in growth teams in SaaS, who need to collaborate with designers, developers, and other marketers, swear by it. Understanding what a swipe file is and how it can be used can be incredibly valuable.

## What is a Swipe File

A swipe file is a collection of examples and inspiration that you can refer to when working on your own projects. It can include anything and everything that’s ever made you go “hmmm”. Landing pages, blog posts, emails, ads, videos, commercials, typography, and design components are a few examples of what to swipe. The term “swipe” refers to the idea that you can “swipe” or borrow ideas from these examples to use in your own work.

[Harry’s Marketing Examples](https://marketingexamples.com/) is an incredible example of one, collecting references on Content, SEO, Social Media, CRM, Case Studies, and other commonly referenced marketing inspiration.

## Why is a Swipe File important?

Every marketer needs a swipe file. It allows you to pick and choose examples of what’s worked for others, and use it for your own marketing. Rather than starting projects with a blank canvas, you’ve already got tried and tested references to kickstart with.

Saves time: When you’re working on a project, it can be helpful to have a starting point or inspiration to work from. By having a swipe file, you can save time by not having to start from scratch every time.

Provides inspiration: Sometimes, it can be difficult to come up with fresh ideas on your own. Writer’s block is real. Having a collection of examples to refer to can help spark new ideas and creative solutions.

Helps with testing: By having a variety of examples in your swipe file, you can test different approaches and see what works best for your project.

Keeps you up to date: Marketing is constantly evolving. Between [Ryan Reynold’s commercials for Mint Mobile using ChatGPT](https://www.youtube.com/watch?v=_eHjifELI-k), [Supabase’s launch weeks](https://supabase.com/launch-week), and [websites inspired by Linear](https://www.linears.art/), it’s hard to keep track of everything that’s making noise. By adding new examples to your swipe file regularly, you can stay up to date on new examples and techniques for you to use.

Encourages Collaboration: Espcially when working in a growth team and constantly referencing examples with designers and developers, having a collaborative repo of inspiration makes all the difference. Rather than losing examples between Notion, Figma, Slack, Drive, and other tools, having a central repository of examples shared with the team makes jumpstarting new projects a breeze.

Most swipe files are made using “DIY” workarounds on popular drive and bookmarking tools for personal use. To start building a collaborative swipe file for teams, get on the Savepad waitlist!
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