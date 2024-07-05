import React from 'react';
import HomeHero from '../components/HomeHero';
import HomeSplash from '../components/HomeSplash';
import Breakpoint from '../components/Breakpoint';
import HomeProblem from '../components/HomeProblem';
import ContentBlock from '../components/ContentBlock';
import CardGrid from '../components/CardGrid';

import { FaArrowRight } from 'react-icons/fa';

const HomePage: React.FC = () => {

  const splashCard = [
    {
      imageUrl: 'https://res.cloudinary.com/savepad-web/image/upload/v1715850636/Landing%20Pages/Homepage/Save_cubvhg.png',
      imageAlt: 'save',
      title: 'Save',
      description: "Designed to let you save literally anything – just keep it legal. URLs, code, audio, video, documents, images, Tweets, whatever you need to reference or pin, it belongs here.",
    },
  ];
  
  const featureCards = [
    {
      imageUrl: 'https://res.cloudinary.com/savepad-web/image/upload/v1715850632/Landing%20Pages/Homepage/Manage_rusfyr.png',
      imageAlt: 'Manage',
      title: 'Manage',
      description: "With spaces, collections, and tags, you’re in control of how curated and organized your saves are. Or aren’t. You do you.",
    },
    {
      imageUrl: 'https://res.cloudinary.com/savepad-web/image/upload/v1715850632/Landing%20Pages/Homepage/Find_nqrqnq.png',
      imageAlt: 'Find',
      title: 'Find',
      description: "Regardless of what you save – text, images, whatever – find it with a simple text search.",
    },
    {
      imageUrl: 'https://res.cloudinary.com/savepad-web/image/upload/v1715850632/Landing%20Pages/Homepage/Collaborate_ymhch8.png',
      imageAlt: 'Collaborate',
      title: 'Collaborate',
      description: "Choose to open up spaces to colleagues, clients, friends, or keep it personal.",
    },
    {
      imageUrl: 'https://res.cloudinary.com/savepad-web/image/upload/v1715850632/Landing%20Pages/Homepage/Enrich_btvjy3.png',
      imageAlt: 'Collaborate',
      title: 'Enrich',
      description: "All saves are enriched with metadata and previews aside from all the notes and context you add.",
    },
  ];

  const useCaseCards = [
    {
      title: 'Collaborative Swipe File',
      description: "Marketers, designers, and developers, finally collaborating together without lost context.",
      link: '/',
    },
    {
      title: 'Reference Management',
      description: "With powerful indexing and full-text search, all the references you’ve ever found are within reach.",
      link: '/',
    },
    {
      title: 'Collaborative Swipe File',
      description: "Marketers, designers, and developers, finally collaborating together without lost context.",
      link: '/',
    },
    {
      title: 'Reference Management',
      description: "With powerful indexing and full-text search, all the references you’ve ever found are within reach.",
      link: '/',
    },
  ];

  const personaCards = [
    {
      title: 'Growth Teams',
      description: "It’s time to stop losing your hair managing resources between 50 shades of tools.",
      link: '/',
    },
    {
      title: 'Creatives & Devs',
      description: "Designers and devs can easily collaborate on projects with their teams and clients.",
      link: '/',
    },
    {
      title: 'Community Owners',
      description: "Maintain resources within your online community as a searchable knowledge base indefinitely.",
      link: '/',
    },
    {
      title: 'You',
      description: "Want to save and collaborate with friends, family, or your partner on things? Sign up!",
      link: '/',
    },
  ];

  return (
    <main>
      <HomeHero />
      <HomeSplash />
      <Breakpoint
        header="Time to bring some structure to your chaos."
        texts={[
          "Struggling with collaborating on references for landing pages, ads, product launches, projects, and heaven knows what else?",
          "Then this one's for you 🥂"
        ]}
      />
      <HomeProblem />

      <ContentBlock
        imageUrl="https://res.cloudinary.com/savepad-web/image/upload/v1715850637/Landing%20Pages/Homepage/Before_Savepad_saogxb.png"
        imageAlt="Before Savepad"
        heading="Everything all over the place?"
        paragraphs={[
          "Can't find sh*t for your projects, or for when you remembered something and wanted to share it?",
          "There's a reason why most generic tools fail as a collaborative swipe file."
        ]}
      />
      <ContentBlock
        imageUrl="https://res.cloudinary.com/savepad-web/image/upload/v1715850634/Landing%20Pages/Homepage/After_Savepad_wpkfh8.png"
        imageAlt="After Savepad"
        heading="Do better than just hacking it"
        paragraphs={[
          "We didnt have a collaborative space to curate all the cool links, docs, screenshots, code, docs, notes, Tweets, videos, memes, and other things we found useful.",
          "So we're building one."
        ]}
        reverse
      />

<Breakpoint
        header="To all the things that make you go hmmm 🥂"
        texts={[
          "Stop frustrating your team by hacking your way between multiple generic drive, design, chat, note-taking, spreadsheets, and bookmarking solutions.",
        ]}
      />
<CardGrid cards={splashCard} columns={1} />
<CardGrid cards={featureCards} columns={2} />

<Breakpoint
        header="For your next landing page. Or ad. Or Biryani party."
        texts={[
          "Here’s some of the common use-cases that Savepad is built for.",
        ]}
      />
<CardGrid cards={useCaseCards} columns={2} />

<Breakpoint
        header="So that you never feel stumped again."
        texts={[
          "Here’s some of the people we feel would benefit the most from Savepad.",
        ]}
      />
<CardGrid cards={personaCards} columns={2} />

    </main>
  );
};

export default HomePage;
