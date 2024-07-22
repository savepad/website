import React from 'react';
import Nav from '../../components/Nav';
import Hero from '../../components/Hero';
import ContentBlock from '@/components/ContentBlock';


const UseCasesPage: React.FC = () => {
  return (
    <main>
      <Nav />
      <Hero
        tagline="What's it for?"
        heading="Powerful Alone. Better Together."
        description="Savepad is a collaborative reference management platform built for growth teams. But that's not all it's for."
        imageUrl="https://res.cloudinary.com/savepad-web/image/upload/v1715850633/Landing%20Pages/Personas/Growth_Teams_cyw32z.png"
        imageAlt="Use Cases"
        buttonLabel="Get started for free"
        buttonHref="/signup"
        buttonVariant="primary"
      />


      <ContentBlock
        imageUrl="https://res.cloudinary.com/savepad-web/image/upload/v1715850633/Landing%20Pages/Personas/Growth_Teams_cyw32z.png"
        imageAlt="For Growth Teams"
        heading="Swipe File"
        paragraphs={[
          "Ever wanted to kick-off a new landing page and can’t find that one amazing example from 3 years ago that had the words “pay as you grow”?",
          "Only felt more frustrated when bringing in your team to collaborate?"
        ]}
        buttonLink='/use-cases/swipe-file'
        buttonText='Learn More'
      />
      <ContentBlock
        imageUrl="https://res.cloudinary.com/savepad-web/image/upload/v1715850632/Landing%20Pages/Personas/Creatives_and_Agencies_axpunw.png"
        imageAlt="Creatives and Devs"
        heading="Knowledge Base"
        paragraphs={[
          "URLs, screenshots, emails, files, and heaven knows what else stuck in limbo between sheets, Notions, Slacks, emails, and other tools?",
          "Collect everything you’ve ever found in a simple, searchable, and collaborative knowledge base."
        ]}
        buttonLink='/use-cases/knowledge-base'
        buttonText='Learn More'
        reverse
      />
            <ContentBlock
        imageUrl="https://res.cloudinary.com/savepad-web/image/upload/v1715850632/Landing%20Pages/Personas/Creatives_and_Agencies_axpunw.png"
        imageAlt="Creatives and Devs"
        heading="Bookmark Manager"
        paragraphs={[
          "It's the 2020s. Why is it still so damn hard to manage bookmarks?",
          "Travel plans, meal ideas, home inspo, new boots, whatever tickles your fancy has a home here. Just for you, or to share with friends and family."
        ]}
        buttonLink='/use-cases/bookmark-manager'
        buttonText='Learn More'
      />

    </main>
  );
};

export default UseCasesPage;
