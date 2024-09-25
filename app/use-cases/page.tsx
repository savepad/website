import React from 'react';
import Nav from '../../components/Nav';
import CardGrid from '../../components/CardGrid';
import Cta from '@/components/Cta';
import Footer from '@/components/Footer';
import CenterHero from '@/components/CenterHero';


const UseCasesPage: React.FC = () => {


  const UseCaseCards = [
    {
      imageUrl: 'https://res.cloudinary.com/savepad-web/image/upload/v1715850633/Landing%20Pages/Personas/Growth_Teams_cyw32z.png',
      imageAlt: 'Manage',
      title: 'Swipe File',
      description: "Save, reference, and curate your resources with your team.",
      link: '/use-cases/swipe-file',
    },
    {
      imageUrl: 'https://res.cloudinary.com/savepad-web/image/upload/v1715850632/Landing%20Pages/Personas/Creatives_and_Agencies_axpunw.png',
      imageAlt: 'Collaborate',
      title: 'Knowledge Base',
      description: "Collect everything in a simple, searchable, and collaborative knowledge base.",
      link: '/use-cases/knowledge-base',
    },
    {
      imageUrl: 'https://res.cloudinary.com/savepad-web/image/upload/v1715850632/Landing%20Pages/Personas/Creatives_and_Agencies_axpunw.png',
      imageAlt: 'Find',
      title: 'Bookmark Manager',
      description: "Travel plans, meal ideas, whatever. Save them for you, or to share with friends and family.",
      link: '/use-cases/bookmark-manager',
    },
  ];


  return (
    <main>
      <Nav />
      <CenterHero
        tagline="What's it for?"
        heading="Powerful Alone. Better Together."
        description="Savepad is the collaborative reference management platform built for growth teams. But that's not all it's for."
      />

<CardGrid cards={UseCaseCards} columns={2} />

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

export default UseCasesPage;
