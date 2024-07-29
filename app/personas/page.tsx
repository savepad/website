import React from 'react';
import Nav from '../../components/Nav';
import Hero from '../../components/Hero';
import ContentBlock from '@/components/ContentBlock';
import Footer from '@/components/Footer';


const PersonasPage: React.FC = () => {
  return (
    <main>
      <Nav />
      <Hero
        tagline="Who's it for?"
        heading="Built from the ground up. With you in mind."
        description="We're focused on the needs of growth teams in SaaS. We’ve also seen designers, developers, agencies, and online communities some great value."
        imageUrl="https://res.cloudinary.com/savepad-web/image/upload/v1715850633/Landing%20Pages/Personas/Growth_Teams_cyw32z.png"
        imageAlt="Personas"
        buttonLabel="Get started for free"
        buttonHref="/signup"
        buttonVariant="primary"
      />


      <ContentBlock
        imageUrl="https://res.cloudinary.com/savepad-web/image/upload/v1715850633/Landing%20Pages/Personas/Growth_Teams_cyw32z.png"
        imageAlt="For Growth Teams"
        heading="Growth Teams"
        paragraphs={[
          "Much of our focus is on growth teams — that's marketers, designers, and developers working in tech.",
          "Savepad's their collaborative swipe file and knowledge base to work on projects better together."
        ]}
        buttonLink='/personas/growth-teams'
        buttonText='Savepad for Growth Teams'
      />
      <ContentBlock
        imageUrl="https://res.cloudinary.com/savepad-web/image/upload/v1715850632/Landing%20Pages/Personas/Creatives_and_Agencies_axpunw.png"
        imageAlt="Creatives and Devs"
        heading="Creatives & Designers"
        paragraphs={[
          "You often need to maintain a portfolio of references, experience, and designs, either for yourself or to collaborate with clients.",
          "Savepad lets you build an immersive library of references, or a curation of your best work."
        ]}
        buttonLink='/personas/designers'
        buttonText='Savepad for Designers'
        reverse
      />
            <ContentBlock
        imageUrl="https://res.cloudinary.com/savepad-web/image/upload/v1715850632/Landing%20Pages/Personas/Creatives_and_Agencies_axpunw.png"
        imageAlt="Creatives and Devs"
        heading="Developers"
        paragraphs={[
          "Ever needed a dumping ground for courses, examples, notes, components, snippets, and references?",
          "With full support for URLs, files, assets, code, and notes, Savepad is your personal (or shared) repo for everything you want to save."
        ]}
        buttonLink='/personas/developers'
        buttonText='Savepad for Developers'
      />
      <ContentBlock
        imageUrl="https://res.cloudinary.com/savepad-web/image/upload/v1715850632/Landing%20Pages/Personas/Creatives_and_Agencies_axpunw.png"
        imageAlt="Creatives and Devs"
        heading="Agencies"
        paragraphs={[
          "You often need to maintain a portfolio of references, experience, and designs, either for yourself or to collaborate with clients.",
          "Savepad lets you build an immersive library of references, or a curation of your best work."
        ]}
        buttonLink='/personas/agencies'
        buttonText='Savepad for Agencies'
        reverse
      />
      <ContentBlock
        imageUrl="https://res.cloudinary.com/savepad-web/image/upload/v1715850633/Landing%20Pages/Personas/Online_Communities_mrmftr.png"
        imageAlt="Online Communities"
        heading="Online Communities"
        paragraphs={[
          "Many online communities run on platforms like Slack, with resources shared by hundreds of people over years.",
          "Don't let them get buried or lose them to history limits. Create a searchable knowledge base for your community."
        ]}
        buttonLink='/personas/online-communities'
        buttonText='Savepad for Community Owners'
      />
      <ContentBlock
        imageUrl="https://res.cloudinary.com/savepad-web/image/upload/v1715850633/Landing%20Pages/Personas/Individuals_enhhvh.png"
        imageAlt="For Individuals"
        heading="You"
        paragraphs={[
          "Just looking for something like a modern bookmark manager or a place to save all the references and inspiration that you find online?",
          "Save everything you care about. Invite friends and family, publish to the web, or keep it private. You do you."
        ]}
        buttonLink='/personas/you'
        buttonText='Savepad for you'
        reverse
      />

<Footer />
    </main>
  );
};

export default PersonasPage;
