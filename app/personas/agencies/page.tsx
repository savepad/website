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
    description: "Marketers, designers, and devs asynchronously store and share ideas, references, inspiration, and opinions between Slack, Miro, Notion, Sheets, emails, and tons of other tools.",
  },
  {
    title: '😌 What it should be',
    description: "Curate, catalog, and reference all ideas in a well structured repository for everyone on the team to know what to look for and where, every time you work on projects together.",
  },
];

const whyCards = [
  {
    title: 'No sacrifice on your workflows',
    description: "No rebuilding the wheel. Savepad fits into your team’s habits and integrates with apps you’re used to.",
  },
  {
    title: 'Remote and Async Friendly',
    description: "Everyone on the team can contribute and collaborate with all context in front of them.",
  },
  {
    title: 'Available all the time',
    description: "Web, mobile, desktop, email, Slack, or wherever else you find references, Savepad’s there for you.",
  },
];



const AgencyPage: React.FC = () => {

  
  return (
    <main>
      <Nav />
      <Hero
        tagline="For Agencies"
        heading="One less frustration with client demands"
        description="Most cross-functional teams of marketers, designers, and developers struggle to stay on the same page when collaborating on projects together. Don’t be one of them."
        imageUrl="https://res.cloudinary.com/savepad-web/image/upload/v1715850633/Landing%20Pages/Personas/Growth_Teams_cyw32z.png"
        imageAlt="Personas"
        buttonLabel="Get started for free"
        buttonHref="/signup"
        buttonVariant="primary"
      />

<CardGrid cards={yesnoCards} columns={2} useShadowCard={true} />


<Breakpoint
        header="Why Savepad works great for growth teams"
        texts={[
          "Here’s the top reasons we feel Savepad is particularly useful for growth teams and why we’re focusing on them the most."
        ]}
      />

      <ContentBlock
        imageUrl="https://res.cloudinary.com/savepad-web/image/upload/v1715850637/Landing%20Pages/Homepage/Before_Savepad_saogxb.png"
        imageAlt="Before Savepad"
        heading="Maintain a central knowledge base"
        paragraphs={[
          "Landing pages, ad copies, videos, case studies, eBooks, pricing pages, demo flows, feature pages, discount pop-ups, newsletter designs, memes, email flows, 🤯.",
          "Savepad is only platform dedicated to helping you bring it all together for your team."
        ]}
      />
      <ContentBlock
        imageUrl="https://res.cloudinary.com/savepad-web/image/upload/v1715850634/Landing%20Pages/Homepage/After_Savepad_wpkfh8.png"
        imageAlt="After Savepad"
        heading="Find and reference"
        paragraphs={[
          "With powerful search, custom collections, and an intuitive UI, Savepad lets you find everything you’ve saved when you need it.",
          "Even for videos and images."
        ]}
        reverse
      />
      <ContentBlock
        imageUrl="https://res.cloudinary.com/savepad-web/image/upload/v1715850637/Landing%20Pages/Homepage/Before_Savepad_saogxb.png"
        imageAlt="Before Savepad"
        heading="Perfect handoff"
        paragraphs={[
          "Make sure that everyone in your team has the right access to your workspaces.",
          "New kickoff call for that new homepage in 30 minutes? Everything should alaready be in sync."
        ]}
      />
      <ContentBlock
        imageUrl="https://res.cloudinary.com/savepad-web/image/upload/v1715850634/Landing%20Pages/Homepage/After_Savepad_wpkfh8.png"
        imageAlt="After Savepad"
        heading="Never feel stumped"
        paragraphs={[
          "Feeling a lack of inspiration for new projects and need ideas?",
          "Easy."
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

export default AgencyPage;
