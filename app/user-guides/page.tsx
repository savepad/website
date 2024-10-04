"use client";

import React from 'react';
import Nav from '../../components/Nav';
import Hero from '../../components/Hero';
import Footer from '@/components/Footer';
import VideoGrid from '@/components/VideoGrid';
import Cta from '@/components/Cta';
import Breakpoint from '@/components/Breakpoint';
import Banner from '@/components/Banner';

const videoCards = [
  {
    imageUrl: '/images/user-guides/workspaces-collections-tags.png',
    imageAlt: 'Workspaces',
    title: 'Workspaces, Collections, & Tags',
    description: "A look into creating your first workspaces in Savepad, and organizing them with collections and tags.",
    videoUrl: 'https://www.youtube-nocookie.com/embed/qF0stRwCf6s',
  },
  {
    imageUrl: '/images/user-guides/links.png',
    imageAlt: 'Links',
    title: 'Working with Links & URLs',
    description: "Add links to Savepad, and enrich them with as much or as little context as you'd like to never lose them.",
    videoUrl: 'https://www.youtube-nocookie.com/embed/8paV5GMO-0Y',
  },
  {
    imageUrl: '/images/user-guides/notes-code.png',
    imageAlt: 'Notes',
    title: 'Working with Notes & Code',
    description: "Use a rich-text editor with full markdown and code support to add additional context to your collections",
    videoUrl: 'https://www.youtube-nocookie.com/embed/B70icKQ15ak',
  },
  {
    imageUrl: '/images/user-guides/media-files.png',
    imageAlt: 'Media',
    title: 'Working with Media & Files',
    description: "Images, videos, audio, PDFs, documents, decks - upload whatever you want into your spaces.",
    videoUrl: 'https://www.youtube-nocookie.com/embed/90zi3lkgqPg',
  },
  {
    imageUrl: '/images/user-guides/misc.png',
    imageAlt: 'Misc',
    title: 'Common Workflows',
    description: "A quick look into some ways to make your experience easier, with filters, sorting, backlog, settings, etc.",
    videoUrl: 'https://www.youtube-nocookie.com/embed/vBVO-B4qqBM',
  },
  {
    imageUrl: '/images/user-guides/projects.png',
    imageAlt: 'Projects',
    title: 'Getting Collaboration Ready',
    description: "A walkthrough on how you'd set up a new homepage kickoff example before inviting your team.",
    videoUrl: 'https://www.youtube-nocookie.com/embed/vBVO-B4qqBM',
  },
];

const GuidesPage: React.FC = () => {
  return (
    <main>
      <Nav />
      <Hero
        tagline="👾 User Guides"
        heading="How to Savepad."
        description="Bite-sized videos to get you familiar with all the capabilities of Savepad. The UI and flows are being constantly updated while we're in beta!"
        imageUrl="https://res.cloudinary.com/savepad-web/image/upload/v1715850633/Landing%20Pages/Personas/Growth_Teams_cyw32z.png"
        imageAlt="Personas"
        // buttonLabel="Create your free account"
        // buttonHref="/signup"
        // buttonVariant="primary"
      />

<div className="flex flex-1 items-center justify-center">
        <Breakpoint
          header="DIY Savepad Tutorials"
          texts={[
            "Here's a few snippets of common workflows and ways in which we use the app internally to get you using Savepad like a pro."
          ]}
        />
      </div>

      <section className="mx-auto px-4 pb-4 max-w-[750px]">
      <div>
      <Banner
        variant="info"
        title=""
        message="These video walkthroughs are made keeping Growth Teams/Marketers in context, but the same principles apply regardless of your use case!"
      />
      </div>
      </section>

      <VideoGrid videos={videoCards} columns={2} useShadowVideoCard />

      <section className="mx-auto px-4 pb-4 max-w-[750px]">
      <div>
      <Banner
        variant="success"
        title=""
        message="The videos are hosted using YouTube's privacy-enhanced mode."
      />
      </div>
      <div>
      <Banner
        variant="warning"
        title=""
        message="The product will be rapidly evolving based on feedback during the beta stages! We'll try our best to catch up with keeping the videos up to date 😅"
      />
      </div>
      </section>


      {/* <Cta
        title="Get started for free"
        paragraphs={[
          "Savepad's generous free tier gives you LIMITS.",
          "Our first 250 waitlist users will get lifetime access to Savepad for free."
        ]}
        buttonText="Sign Up for Free"
        buttonHref="/signup"
      /> */}

      <Footer />
    </main>
  );
};

export default GuidesPage;
