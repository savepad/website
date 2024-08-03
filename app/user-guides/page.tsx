"use client";

import React from 'react';
import Nav from '../../components/Nav';
import Hero from '../../components/Hero';
import Footer from '@/components/Footer';
import VideoGrid from '@/components/VideoGrid';
import Cta from '@/components/Cta';

const videoCards = [
  {
    imageUrl: 'https://savepad.app/wp-content/uploads/Search.png',
    imageAlt: 'Manage',
    title: '1. Getting Started with Savepad',
    description: "TL;DR? A swipe file is a collection of examples and references that you find inspiring and think are worth saving.",
    videoUrl: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4',
  },
  {
    imageUrl: 'https://savepad.app/wp-content/uploads/Search.png',
    imageAlt: 'Manage',
    title: '2. Getting Started with Savepad',
    description: "TL;DR? A swipe file is a collection of examples and references that you find inspiring and think are worth saving.",
    videoUrl: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4',
  },
  {
    imageUrl: 'https://savepad.app/wp-content/uploads/Search.png',
    imageAlt: 'Manage',
    title: '3. Getting Started with Savepad',
    description: "TL;DR? A swipe file is a collection of examples and references that you find inspiring and think are worth saving.",
    videoUrl: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4',
  },
];

const BlogPage: React.FC = () => {
  return (
    <main>
      <Nav />
      <Hero
        tagline=""
        heading="How to Savepad"
        description="Quick videos to learn how Savepad works."
        imageUrl="https://res.cloudinary.com/savepad-web/image/upload/v1715850633/Landing%20Pages/Personas/Growth_Teams_cyw32z.png"
        imageAlt="Personas"
      />

      <VideoGrid videos={videoCards} columns={2} useShadowVideoCard={true} />

      <Cta
        title="Get started for free"
        paragraphs={[
          "Savepad's generous free tier gives you LIMITS.",
          "Our first 250 waitlist users will get lifetime access to Savepad for free."
        ]}
        buttonText="Sign Up for Free"
        buttonHref="/signup"
      />

      <Footer />
    </main>
  );
};

export default BlogPage;
