"use client";

import React from 'react';
import Nav from '../../components/Nav';
import CenterHero from '@/components/CenterHero';
import Footer from '@/components/Footer';
import CardGrid from '@/components/CardGrid';
import Cta from '@/components/Cta';

const blogCards = [
  {
    imageUrl: 'https://savepad.app/wp-content/uploads/What-is-a-Swipe-File_.png',
    imageAlt: 'Manage',
    title: 'What is a Swipe File?',
    description: "TL;DR? A swipe file is a collection of examples and references that you find inspiring and think are worth saving.",
    link: '/blog/what-is-a-swipe-file',
  },
];



const BlogPage: React.FC = () => {

  
  return (
    <main>
      <Nav />
      <CenterHero
        tagline=""
        heading="Blog"
        description="Updates and thoughts (but let's be honest, just marketing people doing some SEO stuff) on reference management from the Savepad crew."
      />

<CardGrid cards={blogCards} columns={2} useShadowCard={true} />


{/* 
      <Cta
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

export default BlogPage;
