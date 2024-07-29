"use client";

import React from 'react';
import Nav from '../../components/Nav';
import Hero from '../../components/Hero';
import Footer from '@/components/Footer';
import CardGrid from '@/components/CardGrid';
import Cta from '@/components/Cta';

const blogCards = [
  {
    imageUrl: 'https://savepad.app/wp-content/uploads/What-is-a-Swipe-File_.png',
    imageAlt: 'Manage',
    title: 'What is a Swipe File?',
    description: "TL;DR? A swipe file is a collection of examples and references that you find inspiring and think are worth saving.",
    link: '/blog',
  },
];



const BlogPage: React.FC = () => {

  
  return (
    <main>
      <Nav />
      <Hero
        tagline=""
        heading="Blog"
        description="Posts and updates from Savepad."
        imageUrl="https://res.cloudinary.com/savepad-web/image/upload/v1715850633/Landing%20Pages/Personas/Growth_Teams_cyw32z.png"
        imageAlt="Personas"
      />

<CardGrid cards={blogCards} columns={2} useShadowCard={true} />



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
