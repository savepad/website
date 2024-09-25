import React from 'react';
import Nav from '../../components/Nav';
import CenterHero from '@/components/CenterHero';
import CardGrid from '../../components/CardGrid';
import Cta from '@/components/Cta';
import Footer from '@/components/Footer';


const PersonasPage: React.FC = () => {


  const PersonasCards = [
    {
      imageUrl: 'https://res.cloudinary.com/savepad-web/image/upload/v1715850633/Landing%20Pages/Personas/Growth_Teams_cyw32z.png',
      imageAlt: 'Manage',
      title: 'Growth Teams',
      description: "Collaborative swipe file and knowledge base for teams of marketers, designers, and devs.",
      link: '/personas/growth-teams',
    },
    {
      imageUrl: 'https://res.cloudinary.com/savepad-web/image/upload/v1715850632/Landing%20Pages/Personas/Creatives_and_Agencies_axpunw.png',
      imageAlt: 'Collaborate',
      title: 'Creatives & Designers',
      description: "An immersive library of your inspiration and best work for you and your clients.",
      link: '/personas/designers',
    },
    {
      imageUrl: 'https://res.cloudinary.com/savepad-web/image/upload/v1715850632/Landing%20Pages/Personas/Creatives_and_Agencies_axpunw.png',
      imageAlt: 'Find',
      title: 'Developers',
      description: "A curated repository of your examples, courses, notes, code, and references.",
      link: '/personas/developers',
    },
    {
      imageUrl: 'https://res.cloudinary.com/savepad-web/image/upload/v1715850632/Landing%20Pages/Personas/Creatives_and_Agencies_axpunw.png',
      imageAlt: 'Collaborate',
      title: 'Agencies',
      description: "A curation of projects, references, designs, and more, to collaborate with clients.",
      link: '/personas/agencies',
    },
    {
      imageUrl: 'https://res.cloudinary.com/savepad-web/image/upload/v1715850633/Landing%20Pages/Personas/Online_Communities_mrmftr.png',
      imageAlt: 'Find',
      title: 'Online Communities',
      description: "A snapshot of all the learnings and resources shared within your online communities.",
      link: '/personas/online-communities',
    },
    {
      imageUrl: 'https://res.cloudinary.com/savepad-web/image/upload/v1715850633/Landing%20Pages/Personas/Individuals_enhhvh.png',
      imageAlt: 'Find',
      title: 'You',
      description: "A modern bookmark manager to keep private, or share with friends & family.",
      link: '/personas/you',
    },
  ];


  return (
    <main>
      <Nav />
      <CenterHero
        tagline="Who's it for?"
        heading="Built with you in mind."
        description="We're focused on the needs of growth teams in tech. We've also seen designers, developers, agencies, and communities find some great value."
      />

<CardGrid cards={PersonasCards} columns={2} />

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

export default PersonasPage;
