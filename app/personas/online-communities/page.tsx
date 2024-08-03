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
    title: '⚠️ The issue we see',
    description: "Online communities like have seen countless resources shared over years, many lost because of history limits, closed communities, or 404s.",
  },
  {
    title: '✅ What it could be',
    description: "Community admins can instantly curate shared resources into a shared space for maintaining references for the entire group to see.",
  },
];

const whyCards = [
  {
    title: 'Unique insights',
    description: "Gain perspective on the types of conversations and topics driving your community to engage more.",
  },
  {
    title: 'Structured for you',
    description: "Save resources by topics and tags relevant to your community channels so it’s easy to navigate for everyone.",
  },
  {
    title: 'Collaborate. Or restrict.',
    description: "Curate all resources as the admin, or invite your community to save their resources into Savepad too.",
  },
];



const CommunityPage: React.FC = () => {

  
  return (
    <main>
      <Nav />
      <Hero
        tagline="For Online Communities"
        heading="Create something powerful together."
        description="Empower your online community with a curated knowledge base. Preserve, organize, and access vital resources efficiently for everyone."
        imageUrl="https://res.cloudinary.com/savepad-web/image/upload/v1715850633/Landing%20Pages/Personas/Growth_Teams_cyw32z.png"
        imageAlt="Personas"
        buttonLabel="Get started for free"
        buttonHref="/signup"
        buttonVariant="primary"
      />

<CardGrid cards={yesnoCards} columns={2} useShadowCard={true} />


<Breakpoint
        header="Why Savepad works great for communities"
        texts={[
          "Here’s the top reasons we feel Savepad is particularly useful for online communities as a curated knowledge base."
        ]}
      />

      <ContentBlock
        imageUrl="https://res.cloudinary.com/savepad-web/image/upload/v1715850637/Landing%20Pages/Homepage/Before_Savepad_saogxb.png"
        imageAlt="Before Savepad"
        heading="Save community knowledge"
        paragraphs={[
          "Ensure lasting value in your community. Save shared resources for easy access, empowering your community for the long haul, so they never have to scratch their heads looking for shared knowledge that’s entered the void thanks to long threads, chat history restrictions, or 404s."
        ]}
      />
      <ContentBlock
        imageUrl="https://res.cloudinary.com/savepad-web/image/upload/v1715850634/Landing%20Pages/Homepage/After_Savepad_wpkfh8.png"
        imageAlt="After Savepad"
        heading="Attract new members"
        paragraphs={[
          "Showcase your community’s expertise. Share and embed your Savepad knowledge base publicly on your website or across the web to attract potential members. Let people see the value your community creates firsthand, before they join in to be a part of the conversations."
        ]}
        reverse
      />

      <CardGrid cards={whyCards} columns={3} useShadowCard={true} />

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

export default CommunityPage;
