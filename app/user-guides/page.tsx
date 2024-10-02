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
    imageUrl: '/images/user-guides/Creating-Workspaces.png',
    imageAlt: 'Manage',
    title: 'Creating workspaces',
    description: "A walkthrough of creating your first workspaces in Savepad.",
    videoUrl: 'https://www.youtube-nocookie.com/embed/8G7vLJcbByA',
  },
  {
    imageUrl: '/images/user-guides/Creating-Workspaces.png',
    imageAlt: 'Manage',
    title: 'Creating collections & tags',
    description: "Establishing some structure and organization with collections and tags.",
    videoUrl: 'https://www.youtube-nocookie.com/embed/8G7vLJcbByA',
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


      <VideoGrid videos={videoCards} columns={2} useShadowVideoCard />

      <section className="mx-auto px-4 pb-4 max-w-[750px]">
      <div>
      <Banner
        variant="success"
        title=""
        message="Although the videos are hosted on YouTube, we're using YouTube's privacy-enhanced mode to prevent setting cookies."
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
