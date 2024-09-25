"use client";

import React from 'react';
import Nav from '../../../components/Nav';
import Hero from '../../../components/Hero';
import Footer from '@/components/Footer';
import Breakpoint from '@/components/Breakpoint';
import CardGrid from '@/components/CardGrid';
import ContentBlock from '@/components/ContentBlock';
import Cta from '@/components/Cta';

const yesnoCards = [
  {
    title: '🤬 Where we struggle',
    description: "Most modern browsers have a very old-school way of handling bookmarks, just a rough folder structure with a dump of links in them. No collaboration, no sharing, nothing new.",
  },
  {
    title: '😌 What it could be',
    description: "While Savepad wasn't primarily a Bookmark Manager, when developing it we realised that it really does improve our own bookmark management, especially for some shared folders.",
  },
];

const whyCards = [
  {
    title: 'Declutter your browser',
    description: "Stop struggling between your bookmarks and notes. Savepad stores everything together for you.",
  },
  {
    title: 'Inspiration. On the go.',
    description: "With Savepad apps for browser, mobile, and desktop, you’ve always got your resources with you.",
  },
  {
    title: 'Rich enhancements',
    description: "Saving things from YouTube or X? Savepad makes some links shine better than others.",
  },
];



const YouPage: React.FC = () => {

  
  return (
    <main>
      <Nav />
      <Hero
        tagline="For You & Me"
        heading="Save all the things that make you go hmmm."
        description="Savepad is your all-in-one resource manager to simplify your life. From notes to bookmarks. organize and curate effortlessly, by yourself, or with friends and family."
        imageUrl="https://res.cloudinary.com/savepad-web/image/upload/v1715850633/Landing%20Pages/Personas/Growth_Teams_cyw32z.png"
        imageAlt="Personas"
        // buttonLabel="Get started for free"
        // buttonHref="/signup"
        // buttonVariant="primary"
      />

<CardGrid cards={yesnoCards} columns={2} useShadowCard={true} />


<Breakpoint
        header="Why Savepad works great for you"
        texts={[
          "Here’s the top reasons we feel Savepad is useful for individuals like you and me."
        ]}
      />

      <ContentBlock
        imageUrl="https://res.cloudinary.com/savepad-web/image/upload/v1715850637/Landing%20Pages/Homepage/Before_Savepad_saogxb.png"
        imageAlt="Before Savepad"
        heading="Manage Personal Resources Better"
        paragraphs={[
          "Simplify your digital life. Savepad is your user-friendly resource manager for links, files, and notes, helping you effortlessly organize your online world. Whether you’re saving resources for uni, compiling the greatest watchlist to share with your family, or just saving furniture inspiration for a new apartment, Savepad has a space for you."
        ]}
      />
      <ContentBlock
        imageUrl="https://res.cloudinary.com/savepad-web/image/upload/v1715850634/Landing%20Pages/Homepage/After_Savepad_wpkfh8.png"
        imageAlt="After Savepad"
        heading="From ideas to inspiration"
        paragraphs={[
          "Get organized your way. With categories, collections, tags, and powerful search, Savepad makes curating ideas a breeze – summer party, meal inspiration, poster ideas, you do you!",
          "Savepad also offers full-text search across your entire space, regardless of whether you’re looking for links, images, or something else."
        ]}
        reverse
      />
      <ContentBlock
        imageUrl="https://res.cloudinary.com/savepad-web/image/upload/v1715850637/Landing%20Pages/Homepage/Before_Savepad_saogxb.png"
        imageAlt="Before Savepad"
        heading="Work Together With Loved Ones"
        paragraphs={[
          "At times we just need to work together. Planning a trip to Sicily and need to get your friends involved? Share and invite friends, colleagues, and family to join specific spaces or collections, making collaboration and shared interests a fun experience."
        ]}
      />
      <ContentBlock
        imageUrl="https://res.cloudinary.com/savepad-web/image/upload/v1715850634/Landing%20Pages/Homepage/After_Savepad_wpkfh8.png"
        imageAlt="After Savepad"
        heading="You. In the spotlight."
        paragraphs={[
          "Share what you love with the world. Put together the best watchlist? Got a reading list of book recommendations that you’re really proud of? Or just collecting the best examples of cat pics? Showcase your curated gems to everyone. Embed these resources for easy public access, letting your passions shine."
        ]}
        reverse
      />

      <CardGrid cards={whyCards} columns={3} useShadowCard={true} />

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

export default YouPage;
