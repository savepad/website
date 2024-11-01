import React from 'react';
import Link from 'next/link';
import HomeHero from '../components/HomeHero';
import Nav from '../components/Nav';
// import HomeSplash from '../components/HomeSplash';
import Breakpoint from '../components/Breakpoint';
import HomeProblem from '../components/HomeProblem';
import ContentBlock from '../components/ContentBlock';
import CardGrid from '../components/CardGrid';
import Faq from '../components/Faq';
import Wall from '../components/Wall';
import Cta from '../components/Cta';
import Footer from '@/components/Footer';
import WaitlistHero from '@/components/WaitlistHero'

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
      description: "With workspaces, collections, and tags, curate your saves as you like. Or not. You do you.",
    },
    {
      imageUrl: 'https://res.cloudinary.com/savepad-web/image/upload/v1715850632/Landing%20Pages/Homepage/Enrich_btvjy3.png',
      imageAlt: 'Collaborate',
      title: 'Enrich',
      description: "All saves are enriched with metadata and previews aside from all the notes and context you add.",
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
      description: "Choose to open your saves to the web. Or just to colleagues, clients, and friends. Or keep it private.",
    },
  ];

  const useCaseCards = [
    {
      title: 'What it does',
      description: "Collaborative swipe file, knowledge base, or a simple shared bookmark manager, here's the common use-cases we've built Savepad for.",
      link: '/use-cases',
    },
    {
      title: 'Who uses Savepad',
      description: "Originally designed for Growth Teams, we've seen designers, developers, agencies, and communities find some great value too.",
      link: '/personas',
    },
  ];

  const faqData = [
    {
      question: 'Why are you building Savepad?',
      texts: [
        "We've always struggled with real 'reference management'.",
        "Whenever we kick off a new project, try to find resources from a year ago, hunt down things we found cool, or just try to find something in all our files/bookmarks across Drive, Notion, Figma, Miro, Slack, Twitter, YouTube, Pocket, GitHub, Bookmarks, and Notes, we’re f*ng lost.",
        "We just give up and go Googling for keywords hoping to find it again.",
        "The problem gets exponentially more frustrating when trying to collaborate with our teams."
      ]
    },
    {
      question: 'Cool, so you’re just another drive folder bookmark manager screenshot thing?',
      texts: [
        "Yes and no. We ourselves “save” all our references in between a mix of Google Drive, Notion, Figma, Miro, Slack, Twitter, YouTube, Pocket, GitHub, Bookmarks, and Notes. That’s a mix of PDFs, URLs, videos, code snippets, design references, ads, emails, and a bunch of other stuff. We’re trying to see if we can consolidate all that into a tool that actually makes our lives easier.",
        "Think of it as a collaborative swipe file for marketers, designers, and makers working in growth teams, particularly in SaaS."
      ]
    },
    {
      question: 'What is a "Swipe file"?',
      texts: [
        "Popularized by Marketers, [a swipe file](https://savepad.app/blog/what-is-a-swipe-file/) is a curation or a collection of 'inspiration' used to help with the creative process. It usually includes everything from ideas, copy, drawings, photographs, ads, landing pages, emails, and other creative things that can be used for inspiration when working on projects. They are great to help capture and store creative ideas and can be used to quickly reference and access creative resources."
      ]
    },
    {
      question: 'Why is there a waitlist and what will you do with the information I submit?',
      texts: [
        "We’re currently building Savepad to solve our own problems – a highly structured and organized collection of “saves” that we believe should be indexed and searchable in the form of “structured content”, regardless of their format or content. As we’re slowly testing it to make sure it can handle all that, we’re opening up Savepad to a waitlist of others who believe they have a similar issue with the tooling available today."
      ]
    },
    {
      question: 'What does your roadmap and pricing look like?',
      texts: [
        "We’ll be sharing updates on features via our [public roadmap on GitHub](https://github.com/orgs/savepad/projects/1)! We haven’t given pricing much of a thought yet."
      ]
    }
  ];
  

  return (
    <main>

      <Nav />
      {/* <HomeHero /> */}
      <WaitlistHero />
            {/* <Wall /> */}
      <HomeProblem />

      <Breakpoint
        header="Time to bring some structure to your chaos."
        texts={[
          "Struggling with collaborating on references for landing pages, ads, product launches, projects, and heaven knows what else?",
          "Then this one's for you 🥂"
        ]}
      />
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

<section className="mx-auto text-center items-center justify-center py-8">
<Link href="/features" className="text-violet-400 hover:text-white transition duration-300">Explore all Features →</Link>
</section>

<Breakpoint
        header="For your next landing page. Or ad. Or Ramen party."
        texts={[
          "Whatever you need it for, Savepad's built to make sure you never feel stumped again.",
        ]}
      />
<CardGrid cards={useCaseCards} columns={2} />


<Breakpoint
        header="Questions? Answers"
        texts={[
          "Savepad is currently in development, so get on the private beta!",
          "In the meanwhile, here's some of the common concerns we can address!",
        ]}
      />
<Faq faqs={faqData} />

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

export default HomePage;
